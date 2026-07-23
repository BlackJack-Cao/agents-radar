# Precise Report Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a structured report search index and let users jump from a concrete search result to the matching report item with keyword highlighting.

**Architecture:** A pure TypeScript parser converts Markdown reports into semantic search entries during `pnpm manifest`, producing `search-index.json`. The existing static page loads that file, filters entries locally, renders a bounded result list, then uses stable anchor text to locate and highlight the corresponding rendered Markdown element. GitHub Actions commits and publishes the new static artifact alongside the manifest and RSS feed.

**Tech Stack:** TypeScript, marked, Vitest, vanilla HTML/CSS/JavaScript, GitHub Actions, GitHub Pages.

---

### Task 1: Markdown Search Index Parser

**Files:**
- Create: `src/search-index.ts`
- Create: `src/__tests__/search-index.test.ts`

- [ ] **Step 1: Write failing parser tests**

Cover heading paths, merged list-item descriptions, table rows, `<summary>` elements, ignored code fences and stable anchor text:

```ts
const entries = buildSearchEntries(markdown, "2026-07-23", "ai-medical");
expect(entries).toContainEqual(
  expect.objectContaining({
    date: "2026-07-23",
    report: "ai-medical",
    section: "重点项目",
    title: "OpenMed",
  }),
);
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `pnpm test src/__tests__/search-index.test.ts`

Expected: FAIL because `src/search-index.ts` does not exist.

- [ ] **Step 3: Implement the semantic parser**

Use `marked.lexer()` rather than regular expressions for Markdown structure. Export:

```ts
export interface SearchIndexEntry {
  date: string;
  report: string;
  section: string;
  title: string;
  text: string;
  anchorText: string;
}

export function buildSearchEntries(
  markdown: string,
  date: string,
  report: string,
): SearchIndexEntry[];
```

Ignore code and horizontal-rule tokens. Create records for headings, paragraphs, top-level list items, table rows and `<summary>` content. Normalize Markdown-rendered text and cap `anchorText` at 160 characters.

- [ ] **Step 4: Run focused tests and verify GREEN**

Run: `pnpm test src/__tests__/search-index.test.ts`

Expected: all search-index tests pass.

- [ ] **Step 5: Commit parser and tests**

```bash
git add src/search-index.ts src/__tests__/search-index.test.ts
git commit -m "feat: build semantic report search entries"
```

### Task 2: Generate the Static Search Artifact

**Files:**
- Modify: `src/generate-manifest.ts`
- Modify: `src/__tests__/generate-manifest.test.ts`
- Create: `search-index.json` (generated)

- [ ] **Step 1: Write failing artifact tests**

Export and test a helper that reads the manifest entries in stable order and returns the combined index:

```ts
const index = buildSearchIndex(tmpDigestsDir, [
  { date: "2026-07-23", reports: ["ai-medical"] },
]);
expect(index.entries[0]).toMatchObject({
  date: "2026-07-23",
  report: "ai-medical",
});
```

- [ ] **Step 2: Run focused tests and verify RED**

Run: `pnpm test src/__tests__/generate-manifest.test.ts`

Expected: FAIL because `buildSearchIndex` is not exported.

- [ ] **Step 3: Generate `search-index.json`**

Add `SEARCH_INDEX_PATH`, an exported `SearchIndex` type and `buildSearchIndex()`. During `main()`, write:

```ts
const searchIndex = buildSearchIndex(DIGESTS_DIR, entries);
fs.writeFileSync(SEARCH_INDEX_PATH, JSON.stringify(searchIndex, null, 2) + "\n");
```

The JSON root contains `generated` and `entries`. One unreadable report is skipped without preventing manifest or RSS generation.

- [ ] **Step 4: Run tests and regenerate artifacts**

Run: `pnpm test src/__tests__/generate-manifest.test.ts src/__tests__/search-index.test.ts`

Run: `pnpm manifest`

Expected: tests pass and `search-index.json` is generated.

- [ ] **Step 5: Commit generator changes**

```bash
git add src/generate-manifest.ts src/__tests__/generate-manifest.test.ts search-index.json
git commit -m "feat: generate static report search index"
```

### Task 3: Search Results and Exact Navigation

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace date-only search state**

Add `#searchResults`, a report cache, structured search entries, loading/unavailable states and a 50-result limit. Remove the startup behavior that downloads every Markdown report.

- [ ] **Step 2: Render safe structured results**

Use DOM APIs and `textContent`, not interpolated result HTML. Each button displays date, `LABELS[report]`, section/title and a contextual snippet. Matching text is wrapped in a `<mark>` element created with DOM APIs.

- [ ] **Step 3: Add report caching and target location**

Extend `loadReport()` with an optional target. After rendering:

```js
await loadReport(entry.date, entry.report, true, {
  anchorText: entry.anchorText,
  query: searchQuery,
});
```

Find the shortest semantic DOM element containing `anchorText`; fall back to the first element containing the query. Expand parent `<details>`, highlight matching text nodes, add a temporary target class and scroll the element into view.

- [ ] **Step 4: Add responsive search-result styles**

Keep result buttons within the 300px sidebar, clamp long titles/snippets, provide hover/focus states, and ensure the mobile sidebar remains scrollable without text overlap.

- [ ] **Step 5: Run static checks**

Run: `pnpm format:check`

Run: `pnpm lint`

Run: `pnpm typecheck`

Expected: all commands pass.

- [ ] **Step 6: Commit the page implementation**

```bash
git add index.html
git commit -m "feat: navigate to exact report search matches"
```

### Task 4: Publish the Search Index

**Files:**
- Modify: `.github/workflows/daily-digest.yml`
- Modify: `.github/workflows/weekly-digest.yml`
- Modify: `.github/workflows/monthly-digest.yml`

- [ ] **Step 1: Add the artifact to all workflows**

Change the generated-file staging commands to:

```bash
git add manifest.json feed.xml search-index.json
```

Change the Pages copy commands to:

```bash
cp index.html manifest.json feed.xml search-index.json .nojekyll .pages/
```

- [ ] **Step 2: Verify all workflows contain both references**

Run: `rg -n "search-index.json" .github/workflows/*.yml`

Expected: two references in each of the daily, weekly and monthly workflows.

- [ ] **Step 3: Commit workflow updates**

```bash
git add .github/workflows/daily-digest.yml .github/workflows/weekly-digest.yml .github/workflows/monthly-digest.yml
git commit -m "chore: publish report search index"
```

### Task 5: End-to-End Verification

**Files:**
- Verify only; fix files from Tasks 1-4 if a check exposes a defect.

- [ ] **Step 1: Run the complete automated suite**

Run: `pnpm test`

Run: `pnpm lint`

Run: `pnpm format:check`

Run: `pnpm typecheck`

Expected: all commands pass.

- [ ] **Step 2: Serve the static site**

Run: `python3 -m http.server 4173`

Expected: the page, manifest, search index and reports return HTTP 200.

- [ ] **Step 3: Verify desktop behavior**

At 1440x900, search a term present in multiple reports. Confirm result metadata and snippets, click at least two results in the same report, verify correct scrolling/highlighting, and clear the query to restore navigation.

- [ ] **Step 4: Verify mobile behavior**

At 390x844, open the report picker, search, click a result and verify that the sidebar closes, the report opens, and the highlighted target is visible without overlap.

- [ ] **Step 5: Verify failure fallback**

Temporarily request a missing search index in browser interception or serve without that file. Confirm the status says the index is unavailable while report navigation still works.

- [ ] **Step 6: Review the final diff**

Run: `git diff --check`

Run: `git status --short`

Expected: only the planned search files and generated index are changed.
