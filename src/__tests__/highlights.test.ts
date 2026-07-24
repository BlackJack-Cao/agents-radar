import { describe, expect, it, vi } from "vitest";
import { generateReportHighlights } from "../highlights.ts";

const REPORTS = {
  "ai-medical": "# 医疗 AI\n\n## 今日结论\n\n今日出现医疗 Agent phlox。",
  "ai-cli": "# AI CLI\n\n## 今日重点\n\nCodex 修复会话恢复问题。",
  "ai-hf": "# HF 模型\n\n## 今日速览\n\nGLM 与 Qwen 热度上升。",
  "ai-hn": "# HN 社区\n\n## 今日速览\n\n开源模型成本成为热点。",
};

describe("generateReportHighlights", () => {
  it("uses the original single LLM request when all report highlights are returned", async () => {
    const call = vi.fn().mockResolvedValue(
      JSON.stringify({
        "ai-medical": ["phlox 提供本地医疗 Agent"],
        "ai-cli": ["Codex 修复会话恢复问题"],
        "ai-hf": ["GLM 与 Qwen 热度上升"],
        "ai-hn": ["开源模型成本成为热点"],
      }),
    );

    const result = await generateReportHighlights(REPORTS, "zh", {}, call);

    expect(call).toHaveBeenCalledTimes(1);
    expect(call.mock.calls[0]?.[0]).toContain("为每份报告提取 6 条");
    expect(call.mock.calls[0]?.[1]).toBe(4096);
    expect(result.missingReportIds).toEqual([]);
    expect(result.highlights["ai-medical"]).toEqual(["phlox 提供本地医疗 Agent"]);
  });

  it("retries only missing reports in smaller LLM batches and preserves existing values", async () => {
    const call = vi
      .fn()
      .mockResolvedValueOnce(JSON.stringify({ "ai-medical": ["新生成的医疗亮点"] }))
      .mockResolvedValueOnce(
        JSON.stringify({
          "ai-hf": ["补生成的模型亮点"],
          "ai-hn": ["补生成的社区亮点"],
        }),
      );

    const result = await generateReportHighlights(REPORTS, "zh", { "ai-cli": ["原有的 CLI 亮点"] }, call, 2);

    expect(call).toHaveBeenCalledTimes(2);
    expect(call.mock.calls[1]?.[0]).not.toContain("## [ai-medical]");
    expect(call.mock.calls[1]?.[0]).not.toContain("## [ai-cli]");
    expect(result.highlights["ai-cli"]).toEqual(["原有的 CLI 亮点"]);
    expect(result.highlights["ai-hf"]).toEqual(["补生成的模型亮点"]);
    expect(result.missingReportIds).toEqual([]);
  });

  it("splits a truncated full response into bounded retry batches", async () => {
    const call = vi
      .fn()
      .mockResolvedValueOnce('{"ai-medical":["内容被截断')
      .mockResolvedValueOnce(
        JSON.stringify({
          "ai-medical": ["医疗亮点"],
          "ai-cli": ["CLI 亮点"],
        }),
      )
      .mockResolvedValueOnce(
        JSON.stringify({
          "ai-hf": ["模型亮点"],
          "ai-hn": ["社区亮点"],
        }),
      );

    const result = await generateReportHighlights(REPORTS, "zh", {}, call, 2);

    expect(call).toHaveBeenCalledTimes(3);
    expect(result.missingReportIds).toEqual([]);
    expect(result.errors[0]).toContain("Unterminated string");
  });

  it("reports unresolved IDs instead of creating non-LLM introductions", async () => {
    const call = vi.fn().mockResolvedValue("{}");

    const result = await generateReportHighlights({ "ai-medical": REPORTS["ai-medical"] }, "zh", {}, call, 1);

    expect(call).toHaveBeenCalledTimes(2);
    expect(result.highlights["ai-medical"]).toBeUndefined();
    expect(result.missingReportIds).toEqual(["ai-medical"]);
  });
});
