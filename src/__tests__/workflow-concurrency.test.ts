import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";
import { describe, expect, it } from "vitest";

interface WorkflowConfig {
  concurrency?: {
    group?: string;
    "cancel-in-progress"?: boolean;
    queue?: string;
  };
  jobs?: Record<
    string,
    {
      steps?: Array<{
        env?: Record<string, string>;
      }>;
    }
  >;
}

const workflowFiles = ["daily-digest.yml", "weekly-digest.yml", "monthly-digest.yml"];

describe("digest workflow concurrency", () => {
  it.each(workflowFiles)("serializes %s with the shared publish lock", (fileName) => {
    const filePath = path.join(process.cwd(), ".github", "workflows", fileName);
    const workflow = load(fs.readFileSync(filePath, "utf-8")) as WorkflowConfig;

    expect(workflow.concurrency).toEqual({
      group: "agents-radar-publish",
      "cancel-in-progress": false,
      queue: "max",
    });
  });

  it.each(workflowFiles)("defaults %s to Chinese-only report generation", (fileName) => {
    const filePath = path.join(process.cwd(), ".github", "workflows", fileName);
    const workflow = load(fs.readFileSync(filePath, "utf-8")) as WorkflowConfig;
    const steps = Object.values(workflow.jobs ?? {}).flatMap((job) => job.steps ?? []);
    const generationStep = steps.find((step) => step.env?.["LLM_PROVIDER"]);

    expect(generationStep?.env?.["GENERATE_ENGLISH"]).toBe("${{ vars.GENERATE_ENGLISH || 'false' }}");
  });
});
