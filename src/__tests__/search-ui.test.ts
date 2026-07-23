import { describe, expect, it } from "vitest";
import {
  chooseTargetIndex,
  hydrateSearchIndex,
  makeSearchSnippet,
  searchEntries,
} from "../../assets/search.js";

describe("hydrateSearchIndex", () => {
  it("restores compact entries and derives a code-point-safe anchor", () => {
    const text = `${"a".repeat(159)}👍尾部`;
    const entries = hydrateSearchIndex({
      version: 1,
      generated: "2026-07-23T00:00:00.000Z",
      dates: ["2026-07-23"],
      reports: ["ai-medical"],
      sections: ["重点项目"],
      entries: [[0, 0, 0, "OpenMed", text]],
    });

    expect(entries).toEqual([
      {
        date: "2026-07-23",
        report: "ai-medical",
        section: "重点项目",
        title: "OpenMed",
        text,
        anchorText: `${"a".repeat(159)}👍`,
      },
    ]);
  });

  it("drops malformed dictionary references", () => {
    expect(
      hydrateSearchIndex({
        version: 1,
        generated: "2026-07-23T00:00:00.000Z",
        dates: [],
        reports: [],
        sections: [],
        entries: [[3, 2, 1, "Broken", "Broken entry"]],
      }),
    ).toEqual([]);
  });
});

describe("searchEntries", () => {
  const entries = [
    {
      date: "2026-07-23",
      report: "ai-medical",
      section: "医疗模型",
      title: "OpenMed",
      text: "用于医疗实体识别",
      anchorText: "用于医疗实体识别",
    },
    {
      date: "2026-07-22",
      report: "ai-cli",
      section: "工具更新",
      title: "Codex Search",
      text: "Improved exact navigation",
      anchorText: "Improved exact navigation",
    },
  ];

  it("matches section, title and text without English case sensitivity", () => {
    expect(searchEntries(entries, "OPENMED").items.map((entry) => entry.title)).toEqual(["OpenMed"]);
    expect(searchEntries(entries, "医疗模型").items.map((entry) => entry.title)).toEqual(["OpenMed"]);
    expect(searchEntries(entries, "exact navigation").items.map((entry) => entry.title)).toEqual([
      "Codex Search",
    ]);
  });

  it("returns total matches and distinct matched days before applying the limit", () => {
    const result = searchEntries(entries, "搜索", 0);
    expect(result).toEqual({ items: [], total: 0, days: 0 });

    const all = searchEntries(
      entries.map((entry) => ({ ...entry, text: `${entry.text} common` })),
      "common",
      1,
    );
    expect(all.items).toHaveLength(1);
    expect(all.total).toBe(2);
    expect(all.days).toBe(2);
  });
});

describe("search navigation helpers", () => {
  it("builds a bounded snippet around the match", () => {
    const snippet = makeSearchSnippet(`${"前文".repeat(80)}OpenMed${"后文".repeat(80)}`, "OpenMed", 80);
    expect(snippet).toContain("OpenMed");
    expect(Array.from(snippet).length).toBeLessThanOrEqual(82);
    expect(snippet.startsWith("…")).toBe(true);
    expect(snippet.endsWith("…")).toBe(true);
  });

  it("chooses the shortest anchor match and falls back to the query", () => {
    const texts = ["父级内容 OpenMed 以及很多补充说明", "OpenMed 项目", "其他医疗项目"];
    expect(chooseTargetIndex(texts, "OpenMed", "医疗")).toBe(1);
    expect(chooseTargetIndex(texts, "不存在的锚点", "医疗")).toBe(2);
    expect(chooseTargetIndex(texts, "不存在", "同样不存在")).toBe(-1);
  });

  it("ignores markdown layout separators when matching an exact anchor", () => {
    const texts = [
      "openmed-labs/openmed-agent",
      "后续关注方向: genzeonplatform 的 NER 系列 openmed-labs/openmed-agent 是否能获得实际部署测试",
      "Healthcare NER医疗实体提取",
    ];

    expect(
      chooseTargetIndex(
        texts,
        "后续关注方向 : genzeonplatform 的 NER 系列 | openmed-labs/openmed-agent 是否能获得实际部署测试",
        "OpenMed",
      ),
    ).toBe(1);
    expect(chooseTargetIndex(texts, "Healthcare NER | 医疗实体提取", "NER")).toBe(2);
  });
});
