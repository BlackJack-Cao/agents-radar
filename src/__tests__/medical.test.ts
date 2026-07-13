import { describe, expect, it } from "vitest";
import { isMedicalAiArticle, parseMedicalNewsRss, type MedicalData } from "../medical.ts";
import { buildMedicalPrompt } from "../prompts-data.ts";

describe("parseMedicalNewsRss", () => {
  it("parses source metadata and decodes XML entities", () => {
    const xml = `<?xml version="1.0"?><rss><channel>
      <item>
        <title><![CDATA[Hospital AI &amp; clinical workflow - Health News]]></title>
        <link>https://news.google.com/articles/123</link>
        <pubDate>Mon, 13 Jul 2026 01:00:00 GMT</pubDate>
        <source url="https://health.example.com">Health News</source>
      </item>
    </channel></rss>`;

    expect(parseMedicalNewsRss(xml, "en")).toEqual([
      {
        title: "Hospital AI & clinical workflow",
        summary: "",
        url: "https://news.google.com/articles/123",
        source: "Health News",
        sourceUrl: "https://health.example.com",
        publishedAt: "Mon, 13 Jul 2026 01:00:00 GMT",
        language: "en",
      },
    ]);
  });

  it("skips malformed items without a title or link", () => {
    const xml = `<rss><channel><item><title>Missing link</title></item></channel></rss>`;
    expect(parseMedicalNewsRss(xml, "zh")).toEqual([]);
  });

  it("requires both a medical and an AI signal for industry articles", () => {
    const base = {
      summary: "",
      url: "https://example.com/article",
      source: "Example",
      sourceUrl: "https://example.com",
      publishedAt: "Mon, 13 Jul 2026 01:00:00 GMT",
      language: "en" as const,
    };
    expect(isMedicalAiArticle({ ...base, title: "Clinical AI enters hospital workflows" })).toBe(true);
    expect(isMedicalAiArticle({ ...base, title: "New hospital opens downtown" })).toBe(false);
    expect(isMedicalAiArticle({ ...base, title: "New generative AI coding assistant" })).toBe(false);
  });
});

describe("buildMedicalPrompt", () => {
  const data: MedicalData = {
    agents: [
      {
        fullName: "org/clinical-agent",
        description: "Clinical workflow assistant",
        language: "Python",
        stars: 120,
        forks: 10,
        createdAt: "2026-07-01T00:00:00Z",
        pushedAt: "2026-07-13T00:00:00Z",
        topics: ["medical-ai"],
        license: "Apache-2.0",
        url: "https://github.com/org/clinical-agent",
        searchQuery: "clinical-agent",
      },
    ],
    models: [
      {
        id: "org/medical-model",
        author: "org",
        likes: 50,
        downloads: 1000,
        tags: ["medical", "license:apache-2.0"],
        pipelineTag: "image-classification",
        lastModified: "2026-07-13T00:00:00Z",
        url: "https://huggingface.co/org/medical-model",
        searchQuery: "medical",
      },
    ],
    articles: [],
    sourceStatus: { github: true, huggingface: true, news: true },
  };

  it("builds a concise Chinese prompt with medical safety boundaries", () => {
    const prompt = buildMedicalPrompt(data, "2026-07-13", "zh");
    expect(prompt).toContain("不采集 PubMed 或 ArXiv 论文");
    expect(prompt).toContain("org/clinical-agent");
    expect(prompt).toContain("org/medical-model");
    expect(prompt).toContain("不得声称完成临床验证");
    expect(prompt).toContain("全文控制在 1200 字以内");
  });

  it("builds an English prompt with the same evidence constraints", () => {
    const prompt = buildMedicalPrompt(data, "2026-07-13", "en");
    expect(prompt).toContain("PubMed and ArXiv papers are intentionally excluded");
    expect(prompt).toContain("Never claim clinical validation");
    expect(prompt).toContain("Keep the report under 900 words");
  });
});
