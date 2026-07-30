# Personal Favorites Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add browser-local favorites for concrete report items, including a personal favorites drawer and exact navigation back to the saved item.

**Architecture:** A pure `assets/favorites.js` module owns item IDs, schema validation and immutable favorite-state updates. The existing static page enhances rendered Markdown semantic blocks, persists state in `localStorage`, and reuses the current anchor-based report navigation. No report-generation or backend code changes.

**Tech Stack:** Vanilla JavaScript, HTML/CSS, localStorage, Vitest, TypeScript declaration files, existing marked/DOMPurify static UI.

---

### Task 1: Favorite State Module

**Files:**

- Create: `assets/favorites.js`
- Create: `assets/favorites.d.ts`
- Create: `src/__tests__/favorites.test.ts`

- [ ] **Step 1: Write failing tests for IDs and state changes**

Test that normalized equivalent text produces the same ID, duplicate occurrence numbers produce different IDs, toggling adds then removes a favorite, and the input state is not mutated.

- [ ] **Step 2: Run the focused test and verify RED**

Run: bundled Node with `node_modules/vitest/vitest.mjs run src/__tests__/favorites.test.ts`

Expected: FAIL because `assets/favorites.js` does not exist.

- [ ] **Step 3: Implement the minimal pure module**

Export `FAVORITES_STORAGE_KEY`, `createFavoriteItemId`, `createEmptyFavoriteState`, `parseFavoriteState`, `toggleFavorite`, `listFavorites` and `isFavorite`. Use a deterministic 32-bit hash and schema version `1`.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run the same focused Vitest command.

Expected: all favorite module tests pass.

### Task 2: Favorites UI Integration

**Files:**

- Modify: `index.html`
- Create: `src/__tests__/favorites-ui.test.ts`

- [ ] **Step 1: Write a failing static integration test**

Read `index.html` and assert it imports `assets/favorites.js`, contains `favoritesBtn`, `favoritesPanel`, a live status element, and invokes report-item enhancement after Markdown rendering.

- [ ] **Step 2: Run the focused test and verify RED**

Run: bundled Node with `node_modules/vitest/vitest.mjs run src/__tests__/favorites-ui.test.ts`

Expected: FAIL because the page has no favorites UI.

- [ ] **Step 3: Add markup and responsive styles**

Add a header favorites button with count, an accessible right-side drawer with empty/error states, item action buttons, and a transient status toast. Keep controls within existing mobile and desktop dimensions.

- [ ] **Step 4: Add page behavior**

Load and validate local state without overwriting corrupt data. Enhance top-level list items, section paragraphs, details summaries and table body rows after each report render. Persist toggles only after successful `localStorage.setItem`, render the drawer, synchronize tabs via `storage`, and reuse `loadReport`/`locateSearchTarget` for saved-item navigation.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run both favorite test files.

Expected: all focused tests pass.

### Task 2A: Exact Favorite Jump And Highlight

**Files:**

- Modify: `index.html`
- Modify: `src/__tests__/favorites-ui.test.ts`

- [ ] **Step 1: Write a failing integration test**

Assert that a favorite record passes `item.id` into report navigation, target lookup checks `target.itemId`, and the page defines a dedicated `favorite-jump-target` highlight state.

- [ ] **Step 2: Run the focused test and verify RED**

Run: bundled Node with `node_modules/vitest/vitest.mjs run src/__tests__/favorites-ui.test.ts`

Expected: FAIL because drawer navigation only passes text anchors and uses the generic search highlight.

- [ ] **Step 3: Implement exact lookup with text fallback**

Pass `itemId` from the drawer, find the rendered element by its `data-favorite-id`, and only fall back to `chooseTargetIndex` when the stable ID no longer exists. Open parent details, scroll to the center, and apply `favorite-jump-target` for about four seconds.

- [ ] **Step 4: Run focused tests and verify GREEN**

Run the favorite UI and search UI tests together. Expected: all tests pass and existing search-result navigation remains unchanged.

### Task 3: Browser Verification

**Files:**

- Verify: `index.html`
- Verify: `assets/favorites.js`

- [ ] **Step 1: Serve the static site locally**

Run `python3 -m http.server 4173` from the repository root.

- [ ] **Step 2: Verify desktop behavior**

At 1440x900, favorite two different item types, open the favorites drawer, reload, confirm persistence, navigate from the drawer to a saved item, verify centered scrolling and dedicated highlighting, then cancel one favorite.

- [ ] **Step 3: Verify mobile behavior**

At 390x844, confirm controls remain visible without covering text, the drawer fits the viewport, and saved-item navigation closes the drawer and shows the target.

- [ ] **Step 4: Verify storage failure handling**

Inject invalid stored JSON and confirm the page warns without overwriting it; use the reset action to restore an empty valid store.

### Task 4: Final Verification and Delivery

**Files:**

- Verify all changed files.

- [ ] **Step 1: Run complete automated checks**

Run full Vitest, TypeScript, ESLint, Prettier and `git diff --check`.

- [ ] **Step 2: Review the final diff**

Confirm only the scoped design/plan, favorites module/tests and static page changed. Confirm no note fields, report-generation code, workflows or generated reports changed.

- [ ] **Step 3: Leave the verified changes uncommitted**

Keep the implementation local and uncommitted after verification. Commit or push only after the user explicitly requests it.
