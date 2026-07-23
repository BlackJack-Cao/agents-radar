const ANCHOR_LENGTH = 160;
const DEFAULT_RESULT_LIMIT = 50;

function truncateCodePoints(value, limit) {
  return Array.from(value).slice(0, limit).join("");
}

export function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase();
}

function normalizeAnchorText(value) {
  return normalizeSearchText(value).replace(/[\s|]+/g, "");
}

export function hydrateSearchIndex(payload) {
  if (
    payload?.version !== 1 ||
    !Array.isArray(payload.dates) ||
    !Array.isArray(payload.reports) ||
    !Array.isArray(payload.sections) ||
    !Array.isArray(payload.entries)
  ) {
    return [];
  }

  const entries = [];
  for (const compact of payload.entries) {
    if (!Array.isArray(compact) || compact.length < 5) continue;
    const [dateId, reportId, sectionId, title, text] = compact;
    const date = payload.dates[dateId];
    const report = payload.reports[reportId];
    const section = payload.sections[sectionId];
    if (
      typeof date !== "string" ||
      typeof report !== "string" ||
      typeof section !== "string" ||
      typeof title !== "string" ||
      typeof text !== "string"
    ) {
      continue;
    }
    entries.push({
      date,
      report,
      section,
      title,
      text,
      anchorText: truncateCodePoints(text, ANCHOR_LENGTH),
    });
  }
  return entries;
}

export function searchEntries(entries, query, limit = DEFAULT_RESULT_LIMIT) {
  const needle = normalizeSearchText(query);
  if (!needle) return { items: [], total: 0, days: 0 };

  const matches = entries.filter((entry) =>
    normalizeSearchText(`${entry.section} ${entry.title} ${entry.text}`).includes(needle),
  );
  const boundedLimit = Math.max(0, limit);
  return {
    items: matches.slice(0, boundedLimit),
    total: matches.length,
    days: new Set(matches.map((entry) => entry.date)).size,
  };
}

export function makeSearchSnippet(text, query, maxLength = 160) {
  const chars = Array.from(String(text ?? ""));
  if (chars.length <= maxLength) return chars.join("");

  const raw = chars.join("");
  const matchAt = raw.toLocaleLowerCase().indexOf(String(query ?? "").toLocaleLowerCase());
  const matchStart = matchAt >= 0 ? Array.from(raw.slice(0, matchAt)).length : 0;
  const queryLength = Math.max(1, Array.from(String(query ?? "")).length);
  const context = Math.max(0, Math.floor((maxLength - queryLength) / 2));
  const start = Math.max(0, Math.min(matchStart - context, chars.length - maxLength));
  const end = Math.min(chars.length, start + maxLength);
  return `${start > 0 ? "…" : ""}${chars.slice(start, end).join("")}${end < chars.length ? "…" : ""}`;
}

export function chooseTargetIndex(texts, anchorText, query) {
  const pickShortest = (needle, normalize = normalizeSearchText) => {
    if (!needle) return -1;
    const matches = texts
      .map((text, index) => ({ index, text: normalize(text) }))
      .filter((item) => item.text.includes(needle))
      .sort((a, b) => Array.from(a.text).length - Array.from(b.text).length || a.index - b.index);
    return matches[0]?.index ?? -1;
  };

  const anchorMatch = pickShortest(normalizeAnchorText(anchorText), normalizeAnchorText);
  return anchorMatch >= 0 ? anchorMatch : pickShortest(normalizeSearchText(query));
}
