import type { Lang } from "./i18n.ts";

type Environment = Readonly<Record<string, string | undefined>>;

const ENABLED_VALUES = new Set(["1", "true", "yes", "on"]);

export function getReportLanguages(env: Environment = process.env): readonly Lang[] {
  const generateEnglish = ENABLED_VALUES.has((env["GENERATE_ENGLISH"] ?? "").trim().toLowerCase());
  return generateEnglish ? ["zh", "en"] : ["zh"];
}

export async function generateForReportLanguages<T>(
  task: (lang: Lang) => Promise<T>,
  env: Environment = process.env,
): Promise<Partial<Record<Lang, T>>> {
  const entries = await Promise.all(
    getReportLanguages(env).map(async (lang) => [lang, await task(lang)] as const),
  );
  return Object.fromEntries(entries) as Partial<Record<Lang, T>>;
}
