import fs from "fs";
import path from "path";
import { marked } from "marked";
import { REPORT_LABELS } from "./i18n.ts";
import { buildSearchEntries, type SearchIndexEntry } from "./search-index.ts";

const DIGESTS_DIR = "digests";
const MANIFEST_PATH = "manifest.json";
const FEED_PATH = "feed.xml";
const SEARCH_INDEX_PATH = "search-index.json";
const SITE_URL = "https://duanyytop.github.io/agents-radar";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const REPORT_FILES = [
  "ai-cli",
  "ai-cli-en",
  "ai-agents",
  "ai-agents-en",
  "ai-medical",
  "ai-medical-en",
  "ai-web",
  "ai-web-en",
  "ai-trending",
  "ai-trending-en",
  "ai-hn",
  "ai-hn-en",
  "ai-ph",
  "ai-ph-en",
  "ai-arxiv",
  "ai-arxiv-en",
  "ai-hf",
  "ai-hf-en",
  "ai-community",
  "ai-community-en",
  "ai-weekly",
  "ai-weekly-en",
  "ai-monthly",
  "ai-monthly-en",
] as const;
const MAX_FEED_ITEMS = 30;

export interface DateEntry {
  date: string;
  reports: string[];
}

interface Manifest {
  generated: string;
  dates: DateEntry[];
}

interface ReportContent {
  summary: string;
  fullHtml: string;
}

export interface SearchIndex {
  generated: string;
  entries: SearchIndexEntry[];
}

export type CompactSearchEntry = [date: number, report: number, section: number, title: string, text: string];

export interface CompactSearchIndex {
  version: 1;
  generated: string;
  dates: string[];
  reports: string[];
  sections: string[];
  entries: CompactSearchEntry[];
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function toRfc822(date: Date): string {
  return (
    `${DAYS[date.getUTCDay()]}, ${String(date.getUTCDate()).padStart(2, "0")} ` +
    `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()} ` +
    `${String(date.getUTCHours()).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}:${String(date.getUTCSeconds()).padStart(2, "0")} +0000`
  );
}

export function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function buildSearchIndex(
  digestsDir: string,
  dates: ReadonlyArray<{ date: string; reports: readonly string[] }>,
): SearchIndex {
  const entries: SearchIndexEntry[] = [];

  for (const { date, reports } of dates) {
    for (const report of reports) {
      const filePath = path.join(digestsDir, date, `${report}.md`);
      if (!fs.existsSync(filePath)) continue;
      try {
        entries.push(...buildSearchEntries(fs.readFileSync(filePath, "utf-8"), date, report));
      } catch (error) {
        console.error(`search index skipped ${date}/${report}: ${error}`);
      }
    }
  }

  return { generated: new Date().toISOString(), entries };
}

export function compactSearchIndex(index: SearchIndex): CompactSearchIndex {
  const dates: string[] = [];
  const reports: string[] = [];
  const sections: string[] = [];
  const dateIds = new Map<string, number>();
  const reportIds = new Map<string, number>();
  const sectionIds = new Map<string, number>();

  const getId = (value: string, values: string[], ids: Map<string, number>): number => {
    const existing = ids.get(value);
    if (existing !== undefined) return existing;
    const id = values.length;
    values.push(value);
    ids.set(value, id);
    return id;
  };

  const entries = index.entries.map(
    (entry): CompactSearchEntry => [
      getId(entry.date, dates, dateIds),
      getId(entry.report, reports, reportIds),
      getId(entry.section, sections, sectionIds),
      entry.title,
      entry.text,
    ],
  );

  return { version: 1, generated: index.generated, dates, reports, sections, entries };
}

async function getReportContent(date: string, report: string): Promise<ReportContent> {
  const filePath = path.join(DIGESTS_DIR, date, `${report}.md`);

  try {
    const markdown = fs.readFileSync(filePath, "utf-8");
    const html = await marked.parse(markdown, { async: false });

    // Extract summary text from original HTML (before CDATA escape)
    const textOnly = html
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    const summary = textOnly.length > 500 ? textOnly.slice(0, 500) + "..." : textOnly;

    // Escape CDATA end marker to prevent injection
    const safeHtml = html.replace(/]]>/g, "]]]]><![CDATA[");

    return {
      summary: escapeXml(summary), // Plain text, XML-escaped, no CDATA
      fullHtml: `<![CDATA[${safeHtml}]]>`, // HTML in CDATA, no escaping needed
    };
  } catch {
    // Fallback to title-only content on any error
    const label = REPORT_LABELS[report] ?? report;
    const title = `${label} ${date}`;
    return {
      summary: escapeXml(title),
      fullHtml: `<![CDATA[${escapeXml(title)}]]>`,
    };
  }
}

async function main(): Promise<void> {
  const entries = fs
    .readdirSync(DIGESTS_DIR)
    .filter((name) => DATE_RE.test(name) && fs.statSync(path.join(DIGESTS_DIR, name)).isDirectory())
    .sort()
    .reverse()
    .map((date) => {
      const reports = REPORT_FILES.filter((r) => fs.existsSync(path.join(DIGESTS_DIR, date, `${r}.md`)));
      return { date, reports };
    })
    .filter((e) => e.reports.length > 0);

  const manifest: Manifest = {
    generated: new Date().toISOString(),
    dates: entries,
  };

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`manifest.json updated: ${entries.length} dates`);

  const searchIndex = buildSearchIndex(DIGESTS_DIR, entries);
  fs.writeFileSync(SEARCH_INDEX_PATH, JSON.stringify(compactSearchIndex(searchIndex)) + "\n");
  console.log(`search-index.json updated: ${searchIndex.entries.length} entries`);

  // ── RSS Feed ──────────────────────────────────────────────────────────────────

  const feedItems: Array<{ date: string; report: string }> = [];
  outer: for (const entry of entries) {
    for (const report of entry.reports) {
      feedItems.push({ date: entry.date, report });
      if (feedItems.length >= MAX_FEED_ITEMS) break outer;
    }
  }

  const buildDate = toRfc822(new Date());

  const itemXmlChunks: string[] = [];
  for (const { date, report } of feedItems) {
    const label = REPORT_LABELS[report] ?? report;
    const title = `${label} ${date}`;
    const link = `${SITE_URL}/#${date}/${report}`;
    const parts = date.split("-").map(Number);
    const pubDate = toRfc822(new Date(Date.UTC(parts[0]!, parts[1]! - 1, parts[2]!)));
    const content = await getReportContent(date, report);
    itemXmlChunks.push(
      [
        "    <item>",
        `      <title>${escapeXml(title)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${content.summary}</description>`,
        `      <content:encoded>${content.fullHtml}</content:encoded>`,
        "    </item>",
      ].join("\n"),
    );
  }
  const itemsXml = itemXmlChunks.join("\n");

  const feedXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">\n` +
    `  <channel>\n` +
    `    <title>agents-radar</title>\n` +
    `    <link>${SITE_URL}</link>\n` +
    `    <description>AI 开源生态每日简报 · Daily AI ecosystem digest</description>\n` +
    `    <language>zh-CN</language>\n` +
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>\n` +
    `    <lastBuildDate>${buildDate}</lastBuildDate>\n` +
    itemsXml +
    `\n  </channel>\n` +
    `</rss>\n`;

  fs.writeFileSync(FEED_PATH, feedXml);
  console.log(`feed.xml updated: ${feedItems.length} items`);
}

// Run only when executed directly (not imported for testing)
const isDirectRun =
  process.argv[1] &&
  (process.argv[1].endsWith("generate-manifest.ts") || process.argv[1].endsWith("generate-manifest.js"));
if (isDirectRun) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
