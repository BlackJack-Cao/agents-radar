/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *   GENERATE_ENGLISH    - "true" to generate English reports in addition to Chinese (default: false)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "./prompts.ts";
import { buildTrendingPrompt, type ReportHighlights } from "./prompts-data.ts";
import { callLlm, saveFile, autoGenFooter, LLM_TOKENS_TRENDING } from "./report.ts";
import { buildCliReportContent, buildOpenclawReportContent } from "./report-builders.ts";
import {
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveMedicalReport,
  saveCommunityReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchMedicalData, type MedicalData } from "./medical.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import { type Lang, MSG, ISSUE_LABELS, CLI_ISSUE_TITLE, OPENCLAW_ISSUE_TITLE } from "./i18n.ts";
import { generateForReportLanguages, getReportLanguages } from "./report-languages.ts";
import { generateReportHighlights } from "./highlights.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
} = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  medicalData: MedicalData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, hf, medical, devto, lobsters`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    medicalData,
    devtoData,
    lobstersData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false })),
    fetchMedicalData().catch(
      (): MedicalData => ({
        agents: [],
        models: [],
        articles: [],
        sourceStatus: { github: false, huggingface: false, news: false },
      }),
    ),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    medicalData,
    devtoData,
    lobstersData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map((f) =>
        summarizeRepo(f, buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang), noActivity, fail),
      ),
    ),
    summarizeRepo(
      fetchedOpenclaw,
      buildPeerPrompt(
        fetchedOpenclaw.cfg,
        fetchedOpenclaw.issues,
        fetchedOpenclaw.prs,
        fetchedOpenclaw.releases,
        dateStr,
        50,
        30,
        lang,
      ),
      noActivity,
      fail,
    ).then((d) => d.summary),
    summarize(
      "claude-code-skills",
      buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
      MSG.skillsFailed[lang],
    ),
    Promise.all(
      fetchedPeers.map((f) =>
        summarizeRepo(
          f,
          buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
          noActivity,
          fail,
        ),
      ),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) {
        return MSG.trendingNoData[lang];
      }
      return summarize(
        "trending",
        buildTrendingPrompt(trendingData, dateStr, lang),
        MSG.trendingFailed[lang],
        LLM_TOKENS_TRENDING,
      );
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(`[${now.toISOString()}] Starting digest | provider: ${providerName}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    medicalData,
    devtoData,
    lobstersData,
  } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));
  const reportLanguages = getReportLanguages();
  console.log(`  Report languages: ${reportLanguages.map((lang) => lang.toUpperCase()).join(", ")}`);

  // 2. Generate per-repo LLM summaries for the enabled report languages.
  console.log("  Generating summaries...");
  const summariesByLang = await generateForReportLanguages((lang) =>
    generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, lang),
  );
  const getSummaries = (lang: Lang) => {
    const summaries = summariesByLang[lang];
    if (!summaries) throw new Error(`Missing summaries for report language: ${lang}`);
    return summaries;
  };

  // 3. Generate cross-repo comparisons for the same language set.
  console.log("  Calling LLM for comparative analyses...");

  const makeOpenclawDigest = (lang: Lang): RepoDigest => ({
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: getSummaries(lang).openclawSummary,
  });

  const compareOrFallback = async (id: string, prompt: string, lang: Lang): Promise<string> => {
    try {
      return await callLlm(prompt);
    } catch (err) {
      console.error(`  [${id}] comparative analysis failed: ${err}`);
      return lang === "en"
        ? "Comparative analysis generation failed for this run. See the per-project sections below for collected source data and individual summaries."
        : "本次横向对比分析生成失败。下方仍保留已抓取的数据与各项目单独摘要，可先据此阅读。";
    }
  };

  const comparisonsByLang = await generateForReportLanguages(async (lang) => {
    const summaries = getSummaries(lang);
    const [cli, peers] = await Promise.all([
      compareOrFallback(
        `cli-comparison/${lang}`,
        buildComparisonPrompt(summaries.cliDigests, dateStr, lang),
        lang,
      ),
      compareOrFallback(
        `agents-comparison/${lang}`,
        buildPeersComparisonPrompt(makeOpenclawDigest(lang), summaries.peerDigests, dateStr, lang),
        lang,
      ),
    ]);
    return { cli, peers };
  });

  // 4. Build + save all reports for enabled languages.
  const cliContent: Partial<Record<Lang, string>> = {};
  const openclawContent: Partial<Record<Lang, string>> = {};

  for (const lang of reportLanguages) {
    const s = getSummaries(lang);
    const comparisons = comparisonsByLang[lang];
    if (!comparisons) throw new Error(`Missing comparisons for report language: ${lang}`);
    const ft = autoGenFooter(lang);
    const suffix = lang === "en" ? "-en" : "";

    cliContent[lang] = buildCliReportContent(
      s.cliDigests,
      s.skillsSummary,
      comparisons.cli,
      utcStr,
      dateStr,
      ft,
      CLAUDE_SKILLS_REPO,
      lang,
    );
    openclawContent[lang] = buildOpenclawReportContent(
      fetchedOpenclaw,
      s.peerDigests,
      s.openclawSummary,
      comparisons.peers,
      utcStr,
      dateStr,
      ft,
      OPENCLAW,
      OPENCLAW_PEERS,
      lang,
    );

    console.log(`  Saved ${saveFile(cliContent[lang], dateStr, `ai-cli${suffix}.md`)}`);
    console.log(`  Saved ${saveFile(openclawContent[lang], dateStr, `ai-agents${suffix}.md`)}`);
  }

  const getCliContent = (lang: Lang): string => {
    const content = cliContent[lang];
    if (!content) throw new Error(`Missing CLI report content for language: ${lang}`);
    return content;
  };
  const getOpenclawContent = (lang: Lang): string => {
    const content = openclawContent[lang];
    if (!content) throw new Error(`Missing agent report content for language: ${lang}`);
    return content;
  };

  // The Chinese web report saves crawl state; English skips state persistence.
  for (const lang of reportLanguages) {
    await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, autoGenFooter(lang), lang);
  }

  await Promise.all(
    reportLanguages.flatMap((lang) => {
      const footer = autoGenFooter(lang);
      return [
        saveTrendingReport(
          trendingData,
          getSummaries(lang).trendingSummary,
          utcStr,
          dateStr,
          digestRepo,
          footer,
          lang,
        ),
        saveHnReport(hnData, utcStr, dateStr, digestRepo, footer, lang),
        savePhReport(phData, utcStr, dateStr, digestRepo, footer, lang),
        saveArxivReport(arxivData, utcStr, dateStr, digestRepo, footer, lang),
        saveHfReport(hfData, utcStr, dateStr, digestRepo, footer, lang),
        saveMedicalReport(medicalData, utcStr, dateStr, digestRepo, footer, lang),
        saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, footer, lang),
      ];
    }),
  );

  // 5. Generate highlights for notifications
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const reportsByLang: Partial<Record<Lang, Record<string, string>>> = {};
  for (const lang of reportLanguages) {
    const reports: Record<string, string> = {
      "ai-cli": getCliContent(lang),
      "ai-agents": getOpenclawContent(lang),
    };
    const suffix = lang === "en" ? "-en" : "";
    for (const id of [
      "ai-trending",
      "ai-web",
      "ai-hn",
      "ai-ph",
      "ai-arxiv",
      "ai-hf",
      "ai-medical",
      "ai-community",
    ]) {
      const content = readReport(`${id}${suffix}.md`);
      if (content) reports[id] = content;
    }
    reportsByLang[lang] = reports;
  }

  console.log("  Generating highlights for Telegram...");
  const highlightsFile = path.join("digests", dateStr, "highlights.json");
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  if (fs.existsSync(highlightsFile)) {
    try {
      const existing = JSON.parse(fs.readFileSync(highlightsFile, "utf-8")) as Partial<
        Record<Lang, ReportHighlights>
      >;
      highlights.zh = existing.zh ?? {};
      highlights.en = existing.en ?? {};
    } catch {
      // Keep fresh defaults when an existing highlights file is invalid.
    }
  }
  const highlightResults = await Promise.all(
    reportLanguages.map(async (lang) => ({
      lang,
      result: await generateReportHighlights(reportsByLang[lang] ?? {}, lang, highlights[lang]),
    })),
  );
  for (const { lang, result } of highlightResults) {
    result.errors.forEach((error, index) =>
      console.error(`  [highlights] ${lang} request ${index + 1} failed: ${error}`),
    );
    if (result.missingReportIds.length) {
      console.error(`  [highlights] ${lang} still missing: ${result.missingReportIds.join(", ")}`);
    }
    highlights[lang] = result.highlights;
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create GitHub issues for CLI + OpenClaw in enabled languages.
  if (digestRepo) {
    for (const lang of reportLanguages) {
      const cliUrl = await createGitHubIssue(
        CLI_ISSUE_TITLE(dateStr, lang),
        getCliContent(lang),
        ISSUE_LABELS.cli[lang],
      );
      console.log(`  Created CLI issue (${lang}): ${cliUrl}`);

      const ocUrl = await createGitHubIssue(
        OPENCLAW_ISSUE_TITLE(dateStr, lang),
        getOpenclawContent(lang),
        ISSUE_LABELS.openclaw[lang],
      );
      console.log(`  Created OpenClaw issue (${lang}): ${ocUrl}`);
    }
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
