import { describe, expect, it } from "vitest";
import { buildSearchEntries } from "../search-index.ts";

describe("buildSearchEntries", () => {
  it("keeps heading context and merges nested list details into one result", () => {
    const markdown = `# 医疗 AI 行业日报

## 重点项目

- **OpenMed**：医疗文本处理工具包
  - 作用：医疗实体识别
  - 来源：开源社区

项目适合在内部数据上进行验证。
`;

    const entries = buildSearchEntries(markdown, "2026-07-23", "ai-medical");
    const projectEntries = entries.filter((entry) => entry.text.includes("OpenMed"));

    expect(projectEntries).toHaveLength(1);
    expect(projectEntries[0]).toMatchObject({
      date: "2026-07-23",
      report: "ai-medical",
      section: "重点项目",
      title: "OpenMed",
    });
    expect(projectEntries[0]?.text).toContain("医疗实体识别");
    expect(projectEntries[0]?.text).toContain("开源社区");

    const paragraph = entries.find((entry) => entry.text.includes("内部数据"));
    expect(paragraph?.section).toBe("重点项目");
  });

  it("indexes table rows and details summaries", () => {
    const markdown = `# 日报

## 模型

<details>
<summary><strong>Clinical Agent</strong> — GitHub 项目</summary>

| 模型 | 作用 |
| --- | --- |
| Healthcare NER | 医疗实体提取 |

</details>
`;

    const entries = buildSearchEntries(markdown, "2026-07-23", "ai-medical");

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          section: "模型",
          title: "Clinical Agent",
          text: expect.stringContaining("GitHub 项目"),
        }),
        expect.objectContaining({
          section: "模型",
          title: "Healthcare NER",
          text: "Healthcare NER | 医疗实体提取",
        }),
      ]),
    );
  });

  it("ignores code blocks and horizontal rules", () => {
    const markdown = `# 日报

---

\`\`\`text
DO_NOT_INDEX medical secret
\`\`\`

保留这一段医疗资讯。
`;

    const entries = buildSearchEntries(markdown, "2026-07-23", "ai-medical");

    expect(entries.some((entry) => entry.text.includes("DO_NOT_INDEX"))).toBe(false);
    expect(entries.some((entry) => entry.text.includes("保留这一段"))).toBe(true);
  });

  it("produces plain, bounded anchor text", () => {
    const longDescription = "临床部署说明".repeat(40);
    const markdown = `# 日报\n\n## 项目\n\n- **OpenMed**：[项目链接](https://example.com) ${longDescription}`;

    const [entry] = buildSearchEntries(markdown, "2026-07-23", "ai-medical").filter((item) =>
      item.text.includes("OpenMed"),
    );

    expect(entry?.anchorText).not.toContain("**");
    expect(entry?.anchorText).not.toContain("https://");
    expect(entry?.anchorText.length).toBeLessThanOrEqual(160);
  });
});
