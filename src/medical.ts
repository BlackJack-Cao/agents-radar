/**
 * Medical AI signals from GitHub, Hugging Face, and industry news.
 * Research-paper feeds are intentionally excluded to keep this report product-focused.
 */

export interface MedicalAgent {
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  createdAt: string;
  pushedAt: string;
  topics: string[];
  license: string;
  url: string;
  searchQuery: string;
}

export interface MedicalModel {
  id: string;
  author: string;
  likes: number;
  downloads: number;
  tags: string[];
  pipelineTag: string;
  lastModified: string;
  url: string;
  searchQuery: string;
}

export interface MedicalArticle {
  title: string;
  summary: string;
  url: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  language: "zh" | "en";
}

export interface MedicalData {
  agents: MedicalAgent[];
  models: MedicalModel[];
  articles: MedicalArticle[];
  sourceStatus: {
    github: boolean;
    huggingface: boolean;
    news: boolean;
  };
}

interface GitHubSearchItem {
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  pushed_at: string;
  topics?: string[];
  license?: { spdx_id?: string | null } | null;
  html_url: string;
}

interface GitHubSearchResponse {
  items?: GitHubSearchItem[];
}

interface HfApiModel {
  id: string;
  author?: string;
  likes?: number;
  downloads?: number;
  tags?: string[];
  pipeline_tag?: string;
  lastModified?: string;
}

const GITHUB_QUERIES = [
  { query: '"medical agent" in:name,description', label: "medical-agent" },
  { query: '"healthcare agent" in:name,description', label: "healthcare-agent" },
  { query: '"clinical agent" in:name,description', label: "clinical-agent" },
  { query: '"medical assistant" agent in:name,description', label: "medical-assistant" },
] as const;

const HF_QUERIES = ["medical", "biomedical", "clinical", "radiology", "pathology", "healthcare"] as const;

const INDUSTRY_FEEDS = [
  {
    name: "Google Health",
    url: "https://blog.google/innovation-and-ai/technology/health/rss/",
  },
  {
    name: "NVIDIA Blog",
    url: "https://blogs.nvidia.com/feed/",
  },
  {
    name: "Microsoft Cloud Blog",
    url: "https://www.microsoft.com/en-us/microsoft-cloud/blog/feed/",
  },
  {
    name: "AWS Industries Blog",
    url: "https://aws.amazon.com/blogs/industries/feed/",
  },
] as const;

const GITHUB_LIMIT_PER_QUERY = 8;
const HF_LIMIT_PER_QUERY = 8;
const MAX_AGENTS = 20;
const MAX_MODELS = 24;
const MAX_ARTICLES = 24;
const HF_API_URLS = ["https://huggingface.co/api/models", "https://hf-mirror.com/api/models"] as const;
const MEDICAL_ARTICLE_RE =
  /\b(medical|medicine|healthcare|clinical|patient|hospital|doctor|physician|diagnos|radiolog|patholog|pharma|drug|genomic|health system)\b/i;
const AI_ARTICLE_RE =
  /\b(AI|artificial intelligence|machine learning|foundation model|language model|generative|agentic|copilot|automation)\b/i;

function decodeXml(value: string): string {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "i"));
  return match?.[1] ? decodeXml(match[1]) : "";
}

function extractSource(itemXml: string): { name: string; url: string } {
  const match = itemXml.match(/<source(?:\s+url="([^"]*)")?[^>]*>([\s\S]*?)<\/source>/i);
  return {
    name: match?.[2] ? decodeXml(match[2]) : "",
    url: match?.[1] ? decodeXml(match[1]) : "",
  };
}

function plainText(value: string): string {
  return decodeXml(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseMedicalNewsRss(
  xml: string,
  language: "zh" | "en",
  defaultSource = "Unknown source",
  defaultSourceUrl = "",
): MedicalArticle[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const articles: MedicalArticle[] = [];

  for (const item of items) {
    const rawTitle = extractTag(item, "title");
    const url = extractTag(item, "link");
    const publishedAt = extractTag(item, "pubDate");
    const source = extractSource(item);
    const summary = plainText(extractTag(item, "description")).slice(0, 500);
    if (!rawTitle || !url) continue;

    const sourceName = source.name || defaultSource;
    const sourceUrl = source.url || defaultSourceUrl;
    const suffix = sourceName ? ` - ${sourceName}` : "";
    const title = suffix && rawTitle.endsWith(suffix) ? rawTitle.slice(0, -suffix.length) : rawTitle;
    articles.push({ title, summary, url, source: sourceName, sourceUrl, publishedAt, language });
  }

  return articles;
}

export function isMedicalAiArticle(article: MedicalArticle): boolean {
  const text = `${article.title} ${article.summary}`;
  return MEDICAL_ARTICLE_RE.test(text) && AI_ARTICLE_RE.test(text);
}

function githubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "agents-radar/1.0",
  };
  const token = process.env["GITHUB_TOKEN"];
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

async function fetchMedicalAgents(): Promise<{ items: MedicalAgent[]; success: boolean }> {
  const pushedAfter = new Date(Date.now() - 30 * 86_400_000).toISOString().slice(0, 10);
  const seen = new Map<string, MedicalAgent>();
  let success = false;

  await Promise.all(
    GITHUB_QUERIES.map(async ({ query, label }) => {
      try {
        const params = new URLSearchParams({
          q: `${query} pushed:>=${pushedAfter} archived:false fork:false`,
          sort: "updated",
          order: "desc",
          per_page: String(GITHUB_LIMIT_PER_QUERY),
        });
        const response = await fetch(`https://api.github.com/search/repositories?${params}`, {
          headers: githubHeaders(),
        });
        if (!response.ok) {
          console.error(`  [medical/github] "${label}": HTTP ${response.status}`);
          return;
        }

        success = true;
        const data = (await response.json()) as GitHubSearchResponse;
        for (const item of data.items ?? []) {
          const existing = seen.get(item.full_name);
          const mapped: MedicalAgent = {
            fullName: item.full_name,
            description: item.description ?? "",
            language: item.language ?? "",
            stars: item.stargazers_count,
            forks: item.forks_count,
            createdAt: item.created_at,
            pushedAt: item.pushed_at,
            topics: item.topics ?? [],
            license: item.license?.spdx_id ?? "unknown",
            url: item.html_url,
            searchQuery: existing ? `${existing.searchQuery}, ${label}` : label,
          };
          seen.set(item.full_name, mapped);
        }
      } catch (error) {
        console.error(`  [medical/github] "${label}": ${error}`);
      }
    }),
  );

  const items = [...seen.values()]
    .sort((a, b) => b.stars - a.stars || Date.parse(b.pushedAt) - Date.parse(a.pushedAt))
    .slice(0, MAX_AGENTS);
  console.log(`  [medical/github] ${items.length} agent candidates`);
  return { items, success };
}

async function fetchMedicalModels(): Promise<{ items: MedicalModel[]; success: boolean }> {
  const seen = new Map<string, MedicalModel>();
  let success = false;

  await Promise.all(
    HF_QUERIES.map(async (query) => {
      try {
        const params = new URLSearchParams({
          search: query,
          sort: "lastModified",
          direction: "-1",
          limit: String(HF_LIMIT_PER_QUERY),
          full: "false",
        });
        let data: HfApiModel[] | null = null;
        for (const apiUrl of HF_API_URLS) {
          try {
            const response = await fetch(`${apiUrl}?${params}`, {
              headers: { "User-Agent": "agents-radar/1.0" },
            });
            if (!response.ok) {
              console.error(`  [medical/hf] "${query}" via ${new URL(apiUrl).host}: HTTP ${response.status}`);
              continue;
            }
            data = (await response.json()) as HfApiModel[];
            break;
          } catch (error) {
            console.error(`  [medical/hf] "${query}" via ${new URL(apiUrl).host}: ${error}`);
          }
        }
        if (!data) return;

        success = true;
        for (const model of data) {
          const existing = seen.get(model.id);
          seen.set(model.id, {
            id: model.id,
            author: model.author ?? model.id.split("/")[0] ?? "unknown",
            likes: model.likes ?? 0,
            downloads: model.downloads ?? 0,
            tags: model.tags ?? [],
            pipelineTag: model.pipeline_tag ?? "",
            lastModified: model.lastModified ?? "",
            url: `https://huggingface.co/${model.id}`,
            searchQuery: existing ? `${existing.searchQuery}, ${query}` : query,
          });
        }
      } catch (error) {
        console.error(`  [medical/hf] "${query}": ${error}`);
      }
    }),
  );

  const items = [...seen.values()]
    .sort(
      (a, b) => (Date.parse(b.lastModified) || 0) - (Date.parse(a.lastModified) || 0) || b.likes - a.likes,
    )
    .slice(0, MAX_MODELS);
  console.log(`  [medical/hf] ${items.length} model candidates`);
  return { items, success };
}

async function fetchMedicalArticles(): Promise<{ items: MedicalArticle[]; success: boolean }> {
  const seen = new Map<string, MedicalArticle>();
  const cutoff = Date.now() - 14 * 86_400_000;
  let success = false;

  await Promise.all(
    INDUSTRY_FEEDS.map(async ({ name, url }) => {
      try {
        const response = await fetch(url, {
          headers: { "User-Agent": "agents-radar/1.0" },
        });
        if (!response.ok) {
          console.error(`  [medical/news] ${name}: HTTP ${response.status}`);
          return;
        }

        success = true;
        for (const article of parseMedicalNewsRss(await response.text(), "en", name, new URL(url).origin)) {
          if (!isMedicalAiArticle(article)) continue;
          const publishedAt = Date.parse(article.publishedAt);
          if (publishedAt && publishedAt < cutoff) continue;
          const key = article.title.toLowerCase().replace(/\s+/g, " ");
          if (!seen.has(key)) seen.set(key, article);
        }
      } catch (error) {
        console.error(`  [medical/news] ${name}: ${error}`);
      }
    }),
  );

  const items = [...seen.values()]
    .sort((a, b) => (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0))
    .slice(0, MAX_ARTICLES);
  console.log(`  [medical/news] ${items.length} industry articles`);
  return { items, success };
}

export async function fetchMedicalData(): Promise<MedicalData> {
  const [agents, models, articles] = await Promise.all([
    fetchMedicalAgents(),
    fetchMedicalModels(),
    fetchMedicalArticles(),
  ]);

  return {
    agents: agents.items,
    models: models.items,
    articles: articles.items,
    sourceStatus: {
      github: agents.success,
      huggingface: models.success,
      news: articles.success,
    },
  };
}
