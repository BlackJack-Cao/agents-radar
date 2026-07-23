import { describe, expect, it, vi } from "vitest";
import { generateForReportLanguages, getReportLanguages } from "../report-languages.ts";

describe("report language selection", () => {
  it.each([undefined, "", "false", "0", "off", "no"])(
    "defaults GENERATE_ENGLISH=%s to Chinese only",
    (value) => {
      expect(getReportLanguages({ GENERATE_ENGLISH: value })).toEqual(["zh"]);
    },
  );

  it.each(["true", "TRUE", "1", "on", "yes"])("enables English for GENERATE_ENGLISH=%s", (value) => {
    expect(getReportLanguages({ GENERATE_ENGLISH: value })).toEqual(["zh", "en"]);
  });

  it("runs report work only for the selected languages", async () => {
    const task = vi.fn(async (lang: "zh" | "en") => `${lang}-report`);

    const reports = await generateForReportLanguages(task, { GENERATE_ENGLISH: "false" });

    expect(task).toHaveBeenCalledOnce();
    expect(task).toHaveBeenCalledWith("zh");
    expect(reports).toEqual({ zh: "zh-report" });
  });
});
