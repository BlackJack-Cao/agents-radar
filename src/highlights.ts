import type { Lang } from "./i18n.ts";
import { buildHighlightsPrompt, type ReportHighlights } from "./prompts-data.ts";
import { callLlm, parseLlmJson } from "./report.ts";

const HIGHLIGHTS_MAX_TOKENS = 4096;
const DEFAULT_RETRY_BATCH_SIZE = 3;

export type HighlightLlmCall = (prompt: string, maxTokens: number) => Promise<string>;

export interface HighlightGenerationResult {
  highlights: ReportHighlights;
  missingReportIds: string[];
  errors: string[];
}

function cleanItems(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function mergeExpectedReports(
  target: ReportHighlights,
  source: ReportHighlights | null | undefined,
  reportIds: string[],
): void {
  for (const reportId of reportIds) {
    const items = cleanItems(source?.[reportId]);
    if (items.length) target[reportId] = items;
  }
}

function missingIds(reportContents: Record<string, string>, highlights: ReportHighlights): string[] {
  return Object.keys(reportContents).filter((reportId) => !cleanItems(highlights[reportId]).length);
}

function chunks<T>(items: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

async function requestHighlights(
  reportContents: Record<string, string>,
  lang: Lang,
  llmCall: HighlightLlmCall,
): Promise<ReportHighlights> {
  const raw = await llmCall(buildHighlightsPrompt(reportContents, lang), HIGHLIGHTS_MAX_TOKENS);
  return parseLlmJson<ReportHighlights>(raw);
}

export async function generateReportHighlights(
  reportContents: Record<string, string>,
  lang: Lang,
  existing: ReportHighlights = {},
  llmCall: HighlightLlmCall = callLlm,
  retryBatchSize: number = DEFAULT_RETRY_BATCH_SIZE,
): Promise<HighlightGenerationResult> {
  const highlights: ReportHighlights = {};
  const errors: string[] = [];
  const reportIds = Object.keys(reportContents);
  mergeExpectedReports(highlights, existing, reportIds);

  try {
    const generated = await requestHighlights(reportContents, lang, llmCall);
    mergeExpectedReports(highlights, generated, reportIds);
  } catch (error) {
    errors.push(String(error));
  }

  const missingAfterFullRequest = missingIds(reportContents, highlights);
  for (const batch of chunks(missingAfterFullRequest, Math.max(1, retryBatchSize))) {
    const batchReports = Object.fromEntries(
      batch.map((reportId) => [reportId, reportContents[reportId] ?? ""]),
    );
    try {
      const generated = await requestHighlights(batchReports, lang, llmCall);
      mergeExpectedReports(highlights, generated, batch);
    } catch (error) {
      errors.push(String(error));
    }
  }

  return {
    highlights,
    missingReportIds: missingIds(reportContents, highlights),
    errors,
  };
}
