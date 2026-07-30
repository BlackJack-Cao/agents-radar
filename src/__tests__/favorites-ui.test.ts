import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const html = fs.readFileSync(path.resolve("index.html"), "utf-8");

describe("favorites page integration", () => {
  it("loads the local favorites module and exposes an accessible favorites drawer", () => {
    expect(html).toMatch(/from ["']\.\/assets\/favorites\.js["']/);
    expect(html).toMatch(/id="favoritesBtn"[^>]*aria-controls="favoritesPanel"/);
    expect(html).toContain('id="favoritesCount"');
    expect(html).toMatch(/id="favoritesPanel"[^>]*role="dialog"[^>]*aria-modal="true"/);
    expect(html).toMatch(/id="favoriteStatus"[^>]*role="status"[^>]*aria-live="polite"/);
  });

  it("enhances report items after rendering and synchronizes browser tabs", () => {
    expect(html).toContain("enhanceFavoriteItems(date, report)");
    expect(html).toMatch(/window\.addEventListener\(["']storage["']/);
    expect(html).toContain("FAVORITES_STORAGE_KEY");
  });

  it("jumps to the exact favorite item and applies a dedicated highlight", () => {
    expect(html).toContain("itemId: item.id");
    expect(html).toContain("target.itemId");
    expect(html).toContain("favorite-jump-target");
    expect(html).toMatch(/scrollIntoView\(\{ behavior: ["']smooth["'], block: ["']center["'] \}\)/);
  });

  it("keeps notes out of this iteration", () => {
    expect(html).not.toContain("favorite-note");
    expect(html).not.toContain("备注弹窗");
  });
});
