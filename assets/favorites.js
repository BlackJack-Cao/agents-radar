export const FAVORITES_STORAGE_KEY = "agents-radar-personal-items-v1";

const FAVORITES_VERSION = 1;

function normalizeItemText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase();
}

function hashText(value) {
  let hash = 0x811c9dc5;
  for (const char of value) {
    hash ^= char.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isFavoriteItem(value, id) {
  return (
    isRecord(value) &&
    value.id === id &&
    typeof value.date === "string" &&
    typeof value.report === "string" &&
    typeof value.title === "string" &&
    typeof value.anchorText === "string" &&
    typeof value.snippet === "string" &&
    typeof value.favorite === "boolean" &&
    typeof value.updatedAt === "string"
  );
}

export function createFavoriteItemId(date, report, anchorText, occurrence = 0) {
  const safeOccurrence = Math.max(0, Math.trunc(Number(occurrence) || 0));
  const identity = normalizeItemText(anchorText);
  return `${date}/${report}/${hashText(identity)}-${safeOccurrence}`;
}

export function createEmptyFavoriteState() {
  return { version: FAVORITES_VERSION, items: {} };
}

export function parseFavoriteState(raw) {
  if (raw == null || raw === "") return createEmptyFavoriteState();

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("收藏数据不是合法 JSON");
  }

  if (!isRecord(parsed) || parsed.version !== FAVORITES_VERSION) {
    throw new Error("不支持的收藏数据版本");
  }
  if (!isRecord(parsed.items)) throw new Error("收藏条目格式无效");

  const items = {};
  for (const [id, item] of Object.entries(parsed.items)) {
    if (!isFavoriteItem(item, id)) throw new Error("收藏条目格式无效");
    items[id] = {
      id: item.id,
      date: item.date,
      report: item.report,
      title: item.title,
      anchorText: item.anchorText,
      snippet: item.snippet,
      favorite: item.favorite,
      updatedAt: item.updatedAt,
    };
  }

  return { version: FAVORITES_VERSION, items };
}

export function isFavorite(state, itemId) {
  return state.items[itemId]?.favorite === true;
}

export function toggleFavorite(state, item, updatedAt = new Date().toISOString()) {
  const items = { ...state.items };
  if (isFavorite(state, item.id)) {
    delete items[item.id];
  } else {
    items[item.id] = { ...item, favorite: true, updatedAt };
  }
  return { version: FAVORITES_VERSION, items };
}

export function listFavorites(state) {
  return Object.values(state.items)
    .filter((item) => item.favorite)
    .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt) || left.id.localeCompare(right.id));
}
