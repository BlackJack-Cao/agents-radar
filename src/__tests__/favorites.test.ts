import { describe, expect, it } from "vitest";
import {
  FAVORITES_STORAGE_KEY,
  createEmptyFavoriteState,
  createFavoriteItemId,
  isFavorite,
  listFavorites,
  parseFavoriteState,
  toggleFavorite,
} from "../../assets/favorites.js";

const favoriteInput = {
  id: "2026-07-24/ai-medical/abc123-0",
  date: "2026-07-24",
  report: "ai-medical",
  title: "bloodworks-io/phlox",
  anchorText: "bloodworks-io/phlox 开源本地优先医疗 Agent",
  snippet: "开源、本地优先的医疗 AI Agent。",
};

describe("createFavoriteItemId", () => {
  it("normalizes equivalent item text into the same stable ID", () => {
    const first = createFavoriteItemId("2026-07-24", "ai-medical", "OpenMed  医疗 Agent", 0);
    const second = createFavoriteItemId("2026-07-24", "ai-medical", "OpenMed\n医疗 Agent", 0);

    expect(first).toBe(second);
    expect(first).toMatch(/^2026-07-24\/ai-medical\/[a-z0-9]+-0$/);
  });

  it("keeps duplicate occurrences and reports distinct", () => {
    const first = createFavoriteItemId("2026-07-24", "ai-medical", "重复条目", 0);
    const duplicate = createFavoriteItemId("2026-07-24", "ai-medical", "重复条目", 1);
    const otherReport = createFavoriteItemId("2026-07-24", "ai-hf", "重复条目", 0);

    expect(duplicate).not.toBe(first);
    expect(otherReport).not.toBe(first);
  });
});

describe("favorite state", () => {
  it("uses the agreed versioned localStorage key and empty schema", () => {
    expect(FAVORITES_STORAGE_KEY).toBe("agents-radar-personal-items-v1");
    expect(createEmptyFavoriteState()).toEqual({ version: 1, items: {} });
    expect(parseFavoriteState(null)).toEqual({ version: 1, items: {} });
  });

  it("adds then removes a favorite without mutating previous state", () => {
    const empty = createEmptyFavoriteState();
    const added = toggleFavorite(empty, favoriteInput, "2026-07-30T03:00:00.000Z");

    expect(empty).toEqual({ version: 1, items: {} });
    expect(isFavorite(added, favoriteInput.id)).toBe(true);
    expect(added.items[favoriteInput.id]).toMatchObject({
      ...favoriteInput,
      favorite: true,
      updatedAt: "2026-07-30T03:00:00.000Z",
    });

    const removed = toggleFavorite(added, favoriteInput, "2026-07-30T03:05:00.000Z");
    expect(isFavorite(removed, favoriteInput.id)).toBe(false);
    expect(isFavorite(added, favoriteInput.id)).toBe(true);
  });

  it("validates stored data instead of silently accepting corruption", () => {
    expect(() => parseFavoriteState("not json")).toThrow("收藏数据不是合法 JSON");
    expect(() => parseFavoriteState(JSON.stringify({ version: 2, items: {} }))).toThrow(
      "不支持的收藏数据版本",
    );
    expect(() =>
      parseFavoriteState(
        JSON.stringify({
          version: 1,
          items: {
            broken: { ...favoriteInput, id: "broken", updatedAt: 42, favorite: true },
          },
        }),
      ),
    ).toThrow("收藏条目格式无效");
  });

  it("returns favorites newest first and excludes disabled records", () => {
    const state = parseFavoriteState(
      JSON.stringify({
        version: 1,
        items: {
          older: {
            ...favoriteInput,
            id: "older",
            favorite: true,
            updatedAt: "2026-07-30T03:00:00.000Z",
          },
          newer: {
            ...favoriteInput,
            id: "newer",
            title: "Healthcare Brain NER",
            favorite: true,
            updatedAt: "2026-07-30T04:00:00.000Z",
          },
          disabled: {
            ...favoriteInput,
            id: "disabled",
            favorite: false,
            updatedAt: "2026-07-30T05:00:00.000Z",
          },
        },
      }),
    );

    expect(listFavorites(state).map((item) => item.id)).toEqual(["newer", "older"]);
  });
});
