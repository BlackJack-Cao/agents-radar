import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { buildSearchIndex, compactSearchIndex, toRfc822, escapeXml } from "../generate-manifest.ts";

// ---------------------------------------------------------------------------
// toRfc822
// ---------------------------------------------------------------------------

describe("toRfc822", () => {
  it("formats a known date correctly", () => {
    // 2026-03-09 is a Monday
    const date = new Date(Date.UTC(2026, 2, 9, 14, 30, 0));
    const result = toRfc822(date);
    expect(result).toBe("Mon, 09 Mar 2026 14:30:00 +0000");
  });

  it("pads single-digit day and hours", () => {
    const date = new Date(Date.UTC(2026, 0, 5, 3, 7, 9));
    const result = toRfc822(date);
    expect(result).toBe("Mon, 05 Jan 2026 03:07:09 +0000");
  });

  it("handles midnight correctly", () => {
    const date = new Date(Date.UTC(2026, 5, 15, 0, 0, 0));
    const result = toRfc822(date);
    expect(result).toContain("00:00:00 +0000");
  });

  it("handles end of year", () => {
    const date = new Date(Date.UTC(2026, 11, 31, 23, 59, 59));
    const result = toRfc822(date);
    expect(result).toContain("Dec 2026");
    expect(result).toContain("23:59:59");
  });
});

// ---------------------------------------------------------------------------
// escapeXml
// ---------------------------------------------------------------------------

describe("escapeXml", () => {
  it("escapes ampersand", () => {
    expect(escapeXml("A & B")).toBe("A &amp; B");
  });

  it("escapes angle brackets", () => {
    expect(escapeXml("<tag>")).toBe("&lt;tag&gt;");
  });

  it("escapes double quotes", () => {
    expect(escapeXml('say "hello"')).toBe("say &quot;hello&quot;");
  });

  it("handles multiple escapes in one string", () => {
    expect(escapeXml('A & B < C > D "E"')).toBe("A &amp; B &lt; C &gt; D &quot;E&quot;");
  });

  it("returns unchanged string if no special chars", () => {
    expect(escapeXml("plain text")).toBe("plain text");
  });

  it("handles empty string", () => {
    expect(escapeXml("")).toBe("");
  });
});

// ---------------------------------------------------------------------------
// buildSearchIndex
// ---------------------------------------------------------------------------

describe("buildSearchIndex", () => {
  it("builds entries in manifest order and skips missing reports", () => {
    const digestsDir = fs.mkdtempSync(path.join(os.tmpdir(), "agents-radar-search-"));
    try {
      fs.mkdirSync(path.join(digestsDir, "2026-07-23"), { recursive: true });
      fs.writeFileSync(
        path.join(digestsDir, "2026-07-23", "ai-medical.md"),
        "# 医疗日报\n\n## 项目\n\n- **OpenMed**：医疗实体识别",
      );
      fs.writeFileSync(
        path.join(digestsDir, "2026-07-23", "ai-cli.md"),
        "# CLI 日报\n\n## 工具\n\n- **Codex**：新增搜索能力",
      );

      const index = buildSearchIndex(digestsDir, [
        { date: "2026-07-23", reports: ["ai-medical", "missing-report", "ai-cli"] },
      ]);

      expect(index.generated).toMatch(/^\d{4}-\d{2}-\d{2}T/);
      expect(index.entries.filter((entry) => entry.title === "OpenMed")[0]).toMatchObject({
        date: "2026-07-23",
        report: "ai-medical",
        section: "项目",
      });
      expect(index.entries.findIndex((entry) => entry.title === "OpenMed")).toBeLessThan(
        index.entries.findIndex((entry) => entry.title === "Codex"),
      );
      expect(index.entries.some((entry) => entry.report === "missing-report")).toBe(false);
    } finally {
      fs.rmSync(digestsDir, { recursive: true, force: true });
    }
  });

  it("compacts repeated metadata into dictionaries", () => {
    const compact = compactSearchIndex({
      generated: "2026-07-23T00:00:00.000Z",
      entries: [
        {
          date: "2026-07-23",
          report: "ai-medical",
          section: "重点项目",
          title: "OpenMed",
          text: "OpenMed 医疗实体识别",
          anchorText: "OpenMed 医疗实体识别",
        },
        {
          date: "2026-07-23",
          report: "ai-medical",
          section: "重点项目",
          title: "Clinical Agent",
          text: "Clinical Agent 临床工作流",
          anchorText: "Clinical Agent 临床工作流",
        },
      ],
    });

    expect(compact).toEqual({
      version: 1,
      generated: "2026-07-23T00:00:00.000Z",
      dates: ["2026-07-23"],
      reports: ["ai-medical"],
      sections: ["重点项目"],
      entries: [
        [0, 0, 0, "OpenMed", "OpenMed 医疗实体识别"],
        [0, 0, 0, "Clinical Agent", "Clinical Agent 临床工作流"],
      ],
    });
  });
});
