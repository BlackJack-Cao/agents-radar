# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-21 23:41 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-07-22

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing rapid, simultaneous iteration across at least nine major tools, with **OpenCode**, **Gemini CLI**, and **Claude Code** showing the highest raw activity volumes. A clear pattern emerges: **reliability and stability are the dominant concerns over new features**, as communities grapple with regressions, silent data loss, and platform-specific fragility. The landscape is bifurcating between **general-purpose coding agents** (Claude Code, Codex, Gemini CLI) and **niche/focused tools** (Kimi Code, Pi, DeepSeek TUI). A strong undercurrent of demand for **MCP protocol expansion, sub-agent lifecycle management, and transparent billing** cuts across nearly every project.

---

## 2. Activity Comparison

| Tool | Issues Opened/Active (24h) | PRs Merged/Open (24h) | Release(s) Today | Community Engagement (Top Issue Comments) |
|---|---|---|---|---|
| **Claude Code** | ~15 hot issues tracked | 10 key PRs (8 fixes, 2 docs/feat) | v2.1.217 | #59248: 23 comments (transcript deletion) |
| **OpenAI Codex** | ~10 hot issues tracked | 10 key PRs (5 fixes, 5 infra/feat) | rust-v0.145.0 | #25719: 79 comments (macOS CPU runaway) |
| **Gemini CLI** | ~10 hot issues tracked | 10 key PRs (4 fixes, 6 infra/feat) | v0.52.0-nightly | #22323: 12 comments (subagent false success) |
| **GitHub Copilot CLI** | ~10 hot issues tracked | 1 minor PR | v1.0.74-0, v1.0.73 | #1305: 26 👍 (MCP OAuth) |
| **Kimi Code CLI** | 5 hot issues tracked | 2 PRs open | None | #2474: 1 comment (UI shaking) |
| **OpenCode** | 10 hot issues tracked | 10 key PRs (5 fixes, 5 feat) | None | #20695: 118 comments (Memory Megathread) |
| **Pi** | 10 hot issues tracked | 10 key PRs (5 fixes, 5 feat) | v0.81.1 | #3357: 43 👍 (local LLM provider extension) |
| **Qwen Code** | 10 hot issues tracked | 10 key PRs (3 fixes, 6 features, 1 security) | v0.20.1 | #7316: tool schema conflict |
| **DeepSeek TUI (CodeWhale)** | ~12 hot issues tracked | 10 key PRs (7 fixes, 3 feat) | None (v0.9.1 imminent) | #4032: 41 comments (constitution compliance) |

**Key observations:**
- **OpenCode** leads in community discussion intensity (Memory Megathread: 118 comments)
- **Codex** has the most active bug discussion (macOS issue: 79 comments)
- **DeepSeek TUI** is in the highest-velocity pre-release state (28 blockers closed in 24h)
- **Pi** and **Qwen Code** shipped releases today; **Kimi Code** had none
- **Copilot CLI** has notably low PR activity but steady release cadence

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating strong ecosystem-wide demand:

| Shared Need | Appears In | Specifics |
|---|---|---|
| **Transcript/session data retention & recovery** | Claude Code, Codex, OpenCode, Pi | Silent deletion, no recovery mechanisms, hidden configs — users across tools demand opt-in retention policies and manual save/restore |
| **MCP protocol expansion (resources & prompts)** | Copilot CLI, Claude Code, Gemini CLI | Beyond tools-only support; users want `resources`, `prompts`, and OAuth-based MCP server authentication |
| **Sub-agent reliability & lifecycle management** | Gemini CLI, Qwen Code, DeepSeek TUI | Subagents hanging, false "success" reports, workspace isolation failures, inability to resume completed agents |
| **Cross-platform stability (Windows/macOS)** | Claude Code, Codex, Copilot CLI, Kimi Code, Qwen Code, Pi | Login loops, process leaks, font rendering, terminal mode restoration — every platform has distinct fragility |
| **Billing/model transparency & cost breakdowns** | Claude Code, Copilot CLI, OpenCode, Pi, Qwen Code | Silent model downgrades, opaque token usage, per-subagent credit breakdowns, provider-reported vs. static cost |
| **LSP / code intelligence integration** | Codex CLI, Copilot CLI, Qwen Code | Auto-detection and auto-install of language servers for better code understanding |
| **Plugin/extension API maturity** | Claude Code, Gemini CLI, Pi | Deferred reload, richer hooks, message chrome customization, skill management surfaces |
| **AST-aware tooling** | Gemini CLI, Qwen Code | File reads, search, and codebase mapping using Abstract Syntax Trees to reduce token waste |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Kimi Code |
|---|---|---|---|---|---|---|---|---|---|
| **Primary focus** | General agent + plugin ecosystem | Enterprise coding agent | Multi-agent orchestration | GitHub-integrated assistant | Web-first TUI + community | Local/first LLM + llama.cpp | Autofix + CI integration | Multi-agent TUI experimentation | Lightweight shell-integrated tool |
| **Target user** | Individual devs, plugin builders | Enterprise teams (Business tier) | Cloud-native devs (GCP) | GitHub ecosystem users | Community-oriented, Web3 devs | Privacy-conscious, local model users | CI/CD teams, enterprise | Early-adopter power users | Fast iterative shell users |
| **Technical approach** | Hook-based plugin system | Rust-based, paginated threads | Sub-agent orchestration (A2A) | Model-agnostic, BYOK | TUI-first, Web sidebar | Extension API, deterministic builds | Daemon architecture, background agents | Command-boundary refactor, agent-ready | Minimalist, fast input handling |
| **Top pain point** | Silent transcript deletion | macOS resource leaks | Subagent false success reports | Plan-mode regression (shell blocked) | TUI freeze on large binaries | Shrinkwrap dependency duplication | Model config mutation by subagents | Enter key send lag | k2.5 model tool calling broken |
| **Community maturity** | Large, vocal, feature-rich | Large, enterprise-focused | Growing, bug-report heavy | Moderate, MCP-focused | High activity, memory-focused | Niche but dedicated | Moderate, CI-oriented | High velocity pre-release | Small but growing |

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid iteration, high community engagement)
- **OpenCode**: 118 comments on single megathread, 50+ issues/PRs updated daily — strong community self-organization
- **DeepSeek TUI (CodeWhale)**: 28 blockers closed in 24h, v0.9.1 near release — exceptionally disciplined pre-release velocity
- **Gemini CLI**: 10+ PRs per day, significant infrastructure investment (caretaker automation, eval coverage)

### Mature but Strained (Large userbase, persistent regressions)
- **Claude Code**: Frequent releases, but regression-heavy (GitHub connector, billing bugs) — trust concerns emerging
- **OpenAI Codex**: Most professionally managed, but macOS/Windows issues persist for months — enterprise patience wearing thin
- **Pi**: Steady improvement with security focus (deterministic builds, SDK retry defense) — niche but reliable

### Growing (Smaller but active communities)
- **Qwen Code**: Heavy investment in sub-agent persistence and security — promising trajectory for CI-integrated use cases
- **Kimi Code**: Smallest community but landing useful contributions (StrReplaceFile fix, shell timeout fix) — early but responsive
- **GitHub Copilot CLI**: Steady releases, but MCP ecosystem gaps and BYOK issues are limiting adoption

---

## 6. Trend Signals

### For Tool Developers

1. **Silent data loss is the #1 trust killer.** Across Claude Code (#59248, #62476), Codex (#18629), and OpenCode (#30680), users are losing transcripts, sessions, and audit trails without warning. Tools that implement explicit opt-in retention, recovery mechanisms, and transparent deletion policies will win trust.

2. **MCP is table stakes, but incomplete.** The community has moved beyond "does it support MCP?" to "does it support resources, prompts, OAuth, and streaming?" Copilot CLI (#1518) and Gemini CLI are pushing hardest here.

3. **Sub-agent lifecycle is the next frontier.** Users want long-lived, persistent background agents that can be inspected, resumed, and cost-tracked — not single-shot tasks. Qwen Code (#7459, #7426) and DeepSeek TUI (#414, #4636) are actively solving this.

4. **Platform parity is an unfinished game.** Windows remains the most fragile platform across the board (login loops, process leaks, WMI spikes, terminal input issues). macOS leaks (syspolicyd, Crashpad) are a close second. Cross-platform reliability is a competitive differentiator.

### For Developer Tool Users

5. **Billing opacity is a growing frustration.** Model downgrades without notice (Claude #79337), missing cost breakdowns (Copilot #4207, OpenCode #4925), and token tracking bugs (Qwen #7384) erode trust in pay-per-use models. Demand for upfront cost transparency is rising.

6. **"Zero-config" is dead. "Configurable" is the new baseline.** Users across tools reject opaque defaults — they want control over transcript retention (Claude), auto-updates (Claude #75607), plugin hooks (Gemini), layout persistence (OpenCode #38124), and provider fallback behavior (Pi #6886).

7. **The "agent-ready" architecture shift is underway.** DeepSeek TUI's #414 (truthful child runtime), Qwen Code's background agent persistence, and Gemini's A2A server hardening (#28470) all point toward a future where agents are composable, inspectable, and independently manageable — not monolithic chat loops.

8. **Community-driven fixes are outpacing vendor responses.** External contributors are landing critical fixes (Kimi's StrReplaceFile fix #2524, Pi's clipboard fix #6925, DeepSeek's Enter key fix #4654) faster than core teams can triage. Tools with good plugin/contribution surfaces are gaining resilience.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Report Date:** 2026-07-22  **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

### 1️⃣ fix(skill-creator): run_eval.py always reports 0% recall
- **PR:** [#1298](https://github.com/anthropics/skills/pull/1298) — Open
- **Author:** MartinCajiao | Updated: 2026-06-23
- **Functionality:** Repairs the evaluation infrastructure that powers skill description optimization. The `run_eval.py` script reports 0% recall for every description, making the entire optimization loop (via `run_loop.py` and `improve_description.py`) optimize against noise rather than actual signal. The fix installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel worker behavior.
- **Discussion highlights:** References issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and multiple independent reproductions. This is the 4th PR targeting this class of bug, indicating sustained community frustration.
- **Related PRs:** [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)

### 2️⃣ Add document-typography skill
- **PR:** [#514](https://github.com/anthropics/skills/pull/514) — Open
- **Author:** PGTBoos | Updated: 2026-03-13
- **Functionality:** A quality-control skill that prevents orphan word wrap (1–6 words on a new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents. Targets a universal pain point across every document Claude produces.
- **Discussion highlights:** Users broadly confirm these issues affect all Claude document output. Low controversy—clear demand for a "polish layer" skill.
- **Status:** Open, with no merge conflicts reported.

### 3️⃣ Add ODT skill — OpenDocument text creation and template filling
- **PR:** [#486](https://github.com/anthropics/skills/pull/486) — Open
- **Author:** GitHubNewbie0 | Updated: 2026-04-14
- **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice". Critical for users in enterprise/government environments requiring ISO-standard document formats.
- **Discussion highlights:** Community interest is high given LibreOffice's dominance in European public sector. Some discussion about scope boundary with existing `docx` skill.

### 4️⃣ Add self-audit skill — mechanical verification + four-dimension reasoning quality gate
- **PR:** [#1367](https://github.com/anthropics/skills/pull/1367) — Open
- **Author:** YuhaoLin2005 | Updated: 2026-07-02
- **Functionality:** A universal skill that audits AI output before delivery: first verifies claimed output files exist, then runs a four-dimension reasoning audit in damage-severity priority order. Works across any project, tech stack, or model.
- **Discussion highlights:** This is the most recent high-activity PR. The author has an associated proposal issue [#1385](https://github.com/anthropics/skills/issues/1385) for a three-gate pipeline (pre-task calibration → adversarial review → delivery verification). Indicates growing community interest in AI output quality assurance.

### 5️⃣ Improve frontend-design skill clarity and actionability
- **PR:** [#210](https://github.com/anthropics/skills/pull/210) — Open
- **Author:** justinwetch | Updated: 2026-03-07
- **Functionality:** Revises the existing frontend-design skill for clarity and actionability, ensuring every instruction is something Claude can execute within a single conversation. Tightens guidance to steer behavior without being overly prescriptive.
- **Discussion highlights:** Represents the broader community desire for skills that are *operational* rather than *educational*—a theme echoed in issue [#202](https://github.com/anthropics/skills/issues/202) (skill-creator should be updated to best practice).

### 6️⃣ feat: add testing-patterns skill
- **PR:** [#723](https://github.com/anthropics/skills/pull/723) — Open
- **Author:** 4444J99 | Updated: 2026-04-21
- **Functionality:** Comprehensive testing skill covering full test stack: Testing Trophy philosophy, AAA pattern, React component testing with Testing Library, mocking strategies, and what *not* to test.
- **Discussion highlights:** Testing is a clear community priority. The skill's breadth (unit through E2E) has generated discussion about whether it should be split into focused sub-skills.

### 7️⃣ Add color-expert skill
- **PR:** [#1302](https://github.com/anthropics/skills/pull/1302) — Open
- **Author:** meodai | Updated: 2026-07-21
- **Functionality:** A self-contained color-expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS named), color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and practical "what to use when" guidance.
- **Discussion highlights:** Niche but high-quality. Community appreciates the domain depth and concrete reference tables. Recently updated, suggesting ongoing refinement.

---

## 2. Community Demand Trends

### Trend A: Infrastructure Reliability (skill-creator evaluation tooling)
The single most concentrated demand is fixing the skill-creator evaluation pipeline. Issue [#556](https://github.com/anthropics/skills/issues/556) ("run_eval.py: claude -p never triggers skills/commands — 0% trigger rate") has 12 comments and 7 👍. Issue [#1169](https://github.com/anthropics/skills/issues/1169) and [#1061](https://github.com/anthropics/skills/issues/1061) independently reproduce the same problem on different platforms. At least 4 PRs target this bug class. **The community cannot optimize skill descriptions without working evaluation.**

### Trend B: Cross-platform compatibility (Windows)
Multiple issues and PRs document that skill-creator scripts fail on Windows due to: subprocess PATHEXT handling, cp1252 encoding, and `select()` on named pipes. Issue [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2 👍) summarizes three distinct blockers. **Windows users represent a significant underserved segment.**

### Trend C: Skill distribution & trust boundaries
Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) exposes a security concern: community skills distributed under `anthropic/` namespace create trust-boundary vulnerabilities. This is the most-commented issue in the repository. **The community is worried about impersonation risks and wants clearer provenance for skills.**

### Trend D: Organizational skill sharing
Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 👍) requests org-wide skill sharing without manual file distribution. This reflects enterprise adoption pressure. **Teams need a centralized skill library, not Slack-based file sharing.**

### Trend E: Skill quality & output verification
The self-audit PR [#1367](https://github.com/anthropics/skills/pull/1367) and associated proposal issue [#1385](https://github.com/anthropics/skills/issues/1385) signal rising demand for **post-generation quality gates**. The community wants Claude to verify its own output before delivery.

### Trend F: Duplicate skill management
Issue [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍—highest 👍 count) reports that `document-skills` and `example-skills` plugins install identical content, causing context-window waste. **The plugin packaging system needs deduplication logic.**

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to merge soon:

| Skill | PR | Author | Updated | Why It May Land |
|-------|-----|--------|---------|----------------|
| **self-audit (v1.3.0)** | [#1367](https://github.com/anthropics/skills/pull/1367) | YuhaoLin2005 | 2026-07-02 | Active proposal + complementary issue; addresses quality-assurance gap |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | meodai | 2026-07-21 | Recently updated; domain-depth approach matches repo quality standards |
| **Pyxel retro game dev** | [#525](https://github.com/anthropics/skills/pull/525) | kitao | 2026-07-15 | Author is Pyxel creator; well-integrated with existing MCP ecosystem |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | 2026-04-21 | Addresses high-demand testing niche; possibly needs scope refinement |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | 2026-03-13 | Universal pain point; low implementation risk |

**Wildcard:** The `run_eval.py` fix PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323)) may converge into a single accepted fix that unblocks the entire evaluation pipeline.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is fixing and stabilizing the skill-creator evaluation infrastructure**, as broken recall metrics and Windows incompatibility block all skill description optimization, while security concerns around namespace trust and duplicated plugin content erode confidence in the distribution model—exposing a critical gap between the number of skills being proposed and the maturity of the tooling needed to maintain them at scale.

---

## Claude Code Community Digest — 2026-07-22

### Today's Highlights

A new release (v2.1.217) brings emoji autocomplete and better warnings for transcript failures, but the community remains focused on a critical GitHub connector regression (#71542) that blocks content access for all repositories. Silent transcript deletion continues to generate intense discussion, while Fable 5 availability on Max plans sees a fresh billing bug (#79337) from the day it went standard. On the PR side, the `hookify` plugin subsystem receives a batch of correctness fixes (encoding, imports, quoting) and new infrastructure (TTS hook, AWS gateway examples) landed.

---

### Releases

**v2.1.217** — [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)  
- Added emoji shortcode autocomplete in the prompt input (e.g. `:heart:` → ❤️, `:hea` for suggestions; disable via `emojiCompletionEnabled` setting).  
- Added warnings when transcript writes are failing (e.g. disk full) or when session saving is off due to an inherit.

No other versions in the last 24h.

---

### Hot Issues (Top 10 by community impact)

1. **[#71542 – GitHub connector links repos but cannot access ANY content (account-wide regression)](https://github.com/anthropics/claude-code/issues/71542)**  
   *41 comments, 36 👍* — A recent regression prevents Claude from reading files in any repository (public or private) after successful OAuth linking. The issue has been open since June 26 and is gaining traction as users report it blocks all repo-related workflows.

2. **[#79337 – Fable 5 prompts “usage credits required” on Max plan (first day it became standard)](https://github.com/anthropics/claude-code/issues/79337)**  
   *25 comments, 9 👍* — On 2026-07-20, the day Fable 5 was promoted to standard on Max, users on Max are silently downgraded to Opus 4.8 with a misleading credit error. High urgency for paying subscribers.

3. **[#59248 – Silent retention cleanup deletes session transcripts with no warning, opt-in, or recovery](https://github.com/anthropics/claude-code/issues/59248)**  
   *23 comments, 13 👍* — Users lose all conversation transcripts older than the current session, including work from the previous day. No recovery mechanism exists. The issue has been open since May.

4. **[#61021 – Cannot easily select text to copy/paste in VS Code terminal on Windows](https://github.com/anthropics/claude-code/issues/61021)**  
   *14 comments, 8 👍* — A change in how Claude Code interacts with the VS Code terminal broke standard copy/paste behavior (select → Ctrl+C). Affects daily productivity for Windows users.

5. **[#18846 – Bash permissions in settings.json not enforced (requires custom hooks)](https://github.com/anthropics/claude-code/issues/18846)**  
   *11 comments, 21 👍* — `permissions.allow` / `permissions.deny` rules for Bash commands are silently ignored; users must write PreToolUse hooks. Closed as stale, but high vote count indicates ongoing pain.

6. **[#62476 – Silent deletion of conversation transcripts after 30 days by default](https://github.com/anthropics/claude-code/issues/62476)**  
   *11 comments, 13 👍* — Related to #59248: transcripts are deleted without notice, configurable only via hidden settings. Frustration over lack of user control over data retention.

7. **[#54670 – [Feature] VSCode: Copy chat response as Markdown source](https://github.com/anthropics/claude-code/issues/54670)**  
   *8 comments, 17 👍* — Users want a “copy as markdown” button in the VS Code chat panel, similar to chat UIs in other AI tools. The most upvoted open feature request in this batch.

8. **[#75607 – Server-side experiment silently removed Opus 4.8 summaries; auto-update ignored `autoUpdates:false`](https://github.com/anthropics/claude-code/issues/75607)**  
   *7 comments, 8 👍* — An experiment flag (`x-cc-atis`) removed thinking summaries without notice, and the CLI force-updated despite the user’s explicit opt-out. Raises trust concerns around silent configuration overrides.

9. **[#79926 – Claude Desktop stops dispatching tools/call to local stdio MCP servers](https://github.com/anthropics/claude-code/issues/79926)**  
   *5 comments, 0 👍* — All instances launched after ~18:29 UTC 2026-07-21 fail to send tool calls to local MCP servers; remote connectors (Claude Code) unaffected. A fresh regression affecting Desktop users.

10. **[#78946 – Windows: Infinite login loop](https://github.com/anthropics/claude-code/issues/78946)**  
    *2 comments, 2 👍* — Users on Windows are stuck in a loop trying to log in; no workaround documented yet. Small sample but growing urgency.

---

### Key PR Progress (Top 10 by importance)

1. **[#79898 – Add Claude apps gateway on AWS example deployment assets](https://github.com/anthropics/claude-code/pull/79898)**  
   Reference Terraform/scripts for running the gateway on AWS with Bedrock, complementing the existing GCP examples.

2. **[#79889 – fix(hookify): make hook entrypoints runnable without CLAUDE_PLUGIN_ROOT](https://github.com/anthropics/claude-code/pull/79889)**  
   Fixes a bug where hooks silently skipped `sys.path` setup when the environment variable was missing, breaking execution outside the plugin context.

3. **[#79873 – fix(hookify): event:prompt rules never fire (payload key is `prompt`)](https://github.com/anthropics/claude-code/pull/79873)**  
   The hook system looked for `user_prompt` but Claude sends the key `prompt`. Causes all `event:prompt` rules to be dead code.

4. **[#78532 – gateway/gcp: optional internal ALB + PG16 Cloud SQL edition fix](https://github.com/anthropics/claude-code/pull/78532)**  
   Prevents `terraform apply` failure on PG16 (defaults to ENTERPRISE_PLUS) and adds internal ALB support for private deployments.

5. **[#79647 – fix(hookify): resolve imports independent of plugin directory name](https://github.com/anthropics/claude-code/pull/79647)**  
   Fixes #69665: hook imports break if the cloned directory is not literally named `hookify`. Now resolves imports via relative paths.

6. **[#79645 – fix(hookify): read rule and transcript files as UTF-8](https://github.com/anthropics/claude-code/pull/79645)**  
   Addresses #77270: on Windows, opening rule files with no explicit encoding caused cp1252 decode errors on emoji/arrows.

7. **[#79644 – fix: quote ${CLAUDE_PLUGIN_ROOT} in plugin hook commands](https://github.com/anthropics/claude-code/pull/79644)**  
   Fixes #78490: paths with spaces (e.g. `~/Library/Application Support`) caused shell word-splitting and hook failures on macOS.

8. **[#79643 – docs(commit-commands): align /commit-push-pr description with behavior](https://github.com/anthropics/claude-code/pull/79643)**  
   Corrects the documentation: the command only uses `git status` / `git diff HEAD` / `git branch`, not branch history, so PR descriptions reflect current changes only.

9. **[#79642 – docs(plugin-dev): correct marketplace name to claude-code-plugins](https://github.com/anthropics/claude-code/pull/79642)**  
   The README referenced a non-existent `claude-code-marketplace`; the actual name is `claude-code-plugins`. Fixes installation instructions.

10. **[#79620 – feat: Add text-to-speech read-aloud hook for accessibility](https://github.com/anthropics/claude-code/pull/79620)**  
    A new TTS hook supporting Piper (Linux), `say` (macOS), and PowerShell (Windows) — includes Markdown-aware text extraction and code-skip heuristics for hands-free use.

---

### Feature Request Trends

- **Better VS Code integration** — Copy markdown (#54670, 17 👍), `/btw` slash command in VS Code (#67495), and persistent chat sidebar support (#43943) are consistently requested.
- **Transcript management** — Users want control over retention periods, manual save/restore, and opt-in deletion (reflected in bugs #59248, #62476 but also in feature requests).
- **Accessibility** — Screen reader improvements (#69996) and now a TTS PR (#79620) show growing interest.
- **Project-management layer** — Issue #79948 (though a rant) calls for an agent orchestration layer that tracks task completion and prevents “lying” about done work — indicating demand for more structured multi-step workflows.

---

### Developer Pain Points

- **Silent data loss** — Transcripts deleted after 30 days without warning (#59248, #62476) is the most repeated frustration. Users want explicit opt-in and recovery options.
- **Configuration not respected** — Auto-updates force-install despite `autoUpdates:false` (#75607, #67476), bash permissions not enforced (#18846), and settings.json ignored when `CLAUDE_CONFIG_DIR` is set (#55456).
- **Platform friction** — Windows login loops (#78946), broken text selection in VS Code terminal (#61021), and macOS keychain auth prompts every credential read (#77697) erode daily UX.
- **Model billing confusion** — Fable 5 silently downgrades on Max plans (#79337) and false security flags (#67498, #79968) interrupt legitimate work.
- **MCP/tool reliability** — Desktop MCP dispatch regression (#79926) and tool hallucination in Fable 5 (#67499) shake confidence in agentic tool use.

---

*Generated from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) activity over the past 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-22

## Today's Highlights
A major `rust-v0.145.0` release landed with experimental paginated thread history and expanded settings migration, signaling continued investment in long-session ergonomics and cross-tool interoperability. Meanwhile, the community is still loudly asking for built-in LSP support in Codex CLI (Issue #8745, 430 👍), and a persistent macOS performance issue involving `syspolicyd`/`trustd` resource runaway remains the most-discussed bug with 79 comments. Windows stability continues to dominate the bug tracker, with four separate issues hitting the top 10 by activity.

---

## Releases

### `rust-v0.145.0` — 0.145.0
**New Features**:
- Experimental paginated thread history with efficient resume, search, persisted names, sub-agent support, and memories (PRs #33364, #33907, #34085, #34229, #34386).
- Expanded `/import` to migrate settings from Cursor and Claude Code, including MCP servers, plugins, sessions, commands, and project configurations.

### `rust-v0.145.0-alpha.29`, `alpha.28`, `alpha.27`
Minor alpha releases with no individual changelog details provided.

---

## Hot Issues

1. **[#25719 — macOS `syspolicyd` / `trustd` CPU/memory runaway](https://github.com/openai/codex/issues/25719)**  
   Codex Desktop triggers constant `syspolicyd` and `trustd` CPU/memory spikes on macOS. With 79 comments and 345 👍, this is the most-active issue by far. Affects plus-tier users on Apple Silicon, unresolved for over a month.

2. **[#20214 — Windows 11 app freezes/stutters](https://github.com/openai/codex/issues/20214)**  
   Frequent freezes on Windows 11 despite sufficient RAM (32 GB). 63 comments and 70 👍 indicate widespread frustration with desktop performance on the leading enterprise platform.

3. **[#8745 — LSP integration for Codex CLI](https://github.com/openai/codex/issues/8745)**  
   The most-upvoted feature request (430 👍, 59 comments). Users want auto-detection and auto-installation of language servers to improve code intelligence. No official response yet.

4. **[#7291 — VSCode extension fails to revert changes](https://github.com/openai/codex/issues/7291)**  
   Business-tier users report that Codex extensions on macOS incorrectly revert files. 48 comments, longstanding (since Nov 2025).

5. **[#28058 — Encrypted MultiAgentV2 messages remove audit trail](https://github.com/openai/codex/issues/28058)**  
   A regression in recent versions: encryption of multi-agent messages makes task audit trails unreadable. 26 comments, 99 👍 — significant for teams relying on observability.

6. **[#32149 — Windows setup failure before UAC prompt](https://github.com/openai/codex/issues/32149)**  
   Windows installer is completely non-functional for some users: both setup options fail before the UAC prompt. 24 comments, active last 24 hours.

7. **[#25921 — Crashpad dumps grow unbounded (+5GB/day)](https://github.com/openai/codex/issues/25921)**  
   Codex Desktop on macOS generates an unlimited number of `.dmp`/`_sidecar.json` files. Developer reports 54,504 files in one day. Serious disk space concern.

8. **[#27597 — VSCode extension fails on Remote-SSH](https://github.com/openai/codex/issues/27597)**  
   Extension fails to load in VS Code Remote-SSH contexts while CLI works. 14 comments, impacting remote development workflows.

9. **[#18629 — Desktop threads poisoned by inline base64 images](https://github.com/openai/codex/issues/18629)**  
   Accumulation of base64 tool output in thread history leads to `{"detail":"Bad Request"}` on resume. Token escalation risk. 11 comments, subtle but dangerous.

10. **[#34014 — Windows app causes WMI Provider Host CPU spike](https://github.com/openai/codex/issues/34014)**  
    Standalone Windows app drives WMI Provider Host to 90–100% CPU when opening a project, while the same project works fine in the VSCode extension. 8 comments.

---

## Key PR Progress

1. **[#34640 — Windows process-tree tests for inherited FDs](https://github.com/openai/codex/pull/34640)**  
   Updates PTY/pipe spawn helpers to require explicit FD inheritance, following earlier refactoring. Critical for Windows sandbox reliability.

2. **[#34637 — Attribute review findings to repository rules](https://github.com/openai/codex/pull/34637)**  
   Applies root/scoped project instructions (`AGENTS.override.md`, `AGENTS.md`) to review findings. Enables rule-supported code review attribution.

3. **[#34636 — Keep TUI open when starting a turn fails](https://github.com/openai/codex/pull/34636)**  
   Prevents the TUI from crashing on `turn/start` rejections. Instead shows failure in transcript and resumes input. Important for long-running sessions.

4. **[#34631 — Migrate agent identity to shared HTTP client](https://github.com/openai/codex/pull/34631)**  
   Routes agent identity, task registration, and JWKS requests through `HttpClient`. Consolidates HTTP stack ownership.

5. **[#34630 — Policy-aware HTTP client builder](https://github.com/openai/codex/pull/34630)**  
   Adds `HttpClientBuilder` for configuring headers, redirects, Cloudflare cookies, and diagnostics without exposing internals. Architectural cleanup.

6. **[#34629 — Harden Windows elevated sandbox startup](https://github.com/openai/codex/pull/34629)**  
   Checks and refreshes DACL permissions for sandbox group/root SIDs. Starts command runner only after ACL validation. Directly addresses Windows sandbox reliability.

7. **[#34626 — Scale skill metadata budgets with model context windows](https://github.com/openai/codex/pull/34626)**  
   Budgets skill metadata at 2% of resolved context window (capped at 4K tokens). Replaces a fixed character limit — better long-context support.

8. **[#34625 — Fix Windows TUI navigation key handling](https://github.com/openai/codex/pull/34625)**  
   Fixes arrow/navigation keys on Windows when virtual terminal input mode is active. Long-standing issue for Windows CLI users.

9. **[#34624 — Terminate Windows process trees with job objects](https://github.com/openai/codex/pull/34624)**  
   Assigns pipe, ConPTY, and sandbox processes to job objects so termination stops all child processes. Directly addresses Windows process leak concerns (see Issue #34614).

10. **[#34621 — Load paginated model context across rollout lineages](https://github.com/openai/codex/pull/34621)**  
    Resolves full rollout lineage when loading model context for paginated threads. Enables efficient thread history navigation across versioned contexts.

---

## Feature Request Trends

- **Language Server Protocol (LSP) integration for CLI** (#8745, 430 👍) remains the single most-requested feature. Users want auto-detect and auto-install for all major language servers to improve diagnostic quality.
- **Pin prompt input to bottom of TUI** (#26311, 8 👍) — a quality-of-life ask for long sessions where transcript scrolls away from the input box.
- **Emacs extension** (#21573, 1 👍) — niche but recurring request for non-VSCode IDE support.
- **MCP User-Agent header** (#16485) — a small but important interoperability gap affecting MCP servers that require identity headers.
- **Paginated thread history** (shipped in v0.145.0) was a top community request; users now need to test the new resume/search capabilities.

---

## Developer Pain Points

- **Windows instability dominates** — setup failures (#32149), app freezes (#20214), WMI Provider Host spikes (#34014), process leaks (#34614), and garbled terminal input (#34029) are repeatedly reported. Windows remains the most fragile platform.
- **macOS resource leaks** — `syspolicyd`/`trustd` runaway (#25719) and unbounded Crashpad dumps (#25921) are severe, ongoing issues with no fix in sight.
- **VSCode extension reliability** — failed reversion (#7291), Remote-SSH failure (#27597), remote context exclusion (#31553), and auto-include regressions hurt developer trust.
- **Session/thread management** — thread poisoning from base64 images (#18629), hidden pinned tasks (#33579), scrollback limits (#19645), and unindexed rollout files (#31433) make long sessions fragile.
- **Remote/SSH/container workflows** — extension fails in Remote-SSH (#27597), iOS remote access doesn't show macOS threads (#30386), and file path deserialization errors on Windows remote hosts (#32474) fragment the experience.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-22

## Today's Highlights
A packed day of infrastructure improvements and bug fixes, with multiple PRs landing caretaker automation (issue triage) and security hardening. The community continues to flag agent reliability issues—especially subagent state misreporting and indefinite hangs—while maintainers are tackling long-running memory system bugs and credential fallback regressions. A new nightly build (v0.52.0) is available with no new features, but the pipeline for automated PR generation is taking shape.

## Releases
- **v0.52.0-nightly.20260721.gacae7124b** – No major changes; standard nightly sync.
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

## Hot Issues
*(10 of the most active or impactful issues, listed by comment count)*

1. **#22323 – Subagent recovery after MAX_TURNS reports GOAL success**  
   A `codebase_investigator` subagent reports `status: "success"` even after hitting its turn limit without doing any analysis. This masking of interruptions is a critical UX bug. (12 comments, 2 👍)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 – Generalist agent hangs forever on simple tasks**  
   Deferring to the generalist agent causes infinite hangs (folder creation, etc.). Workaround: instruct the model not to use subagents. P1 with 8 👍. (8 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 – Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**  
   A large enhancement proposal to exploit Gemini 3’s native bash affinity via safer sandboxing. Gaining traction as a foundational change. (8 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#24353 – Robust component-level evaluations**  
   Epic to expand behavioral eval tests beyond the 76 currently in use, running across 6 Gemini model versions. P1 customer issue. (7 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **#22745 – Assess AST-aware file reads, search, and mapping**  
   Investigating whether AST-aware tools can reduce token noise and turn count. A key performance and accuracy topic. (7 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **#21968 – Gemini does not use skills and sub-agents enough**  
   Even with well-described custom skills, the model rarely activates them autonomously. Community frustration with poor agentic orchestration. (6 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **#26522 – Auto Memory retries low-signal sessions indefinitely**  
   The memory system re-queues sessions that the extraction agent decides to skip, creating infinite loops. P2 bug needing a processing fence. (5 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **#25166 – Shell command stuck with "Waiting input" after completion**  
   Extremely simple CLI commands hang after execution, showing “Awaiting user input.” P1 with 3 👍. (4 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **#22232 – Enhance browser_agent resilience: automatic session takeover**  
   The browser agent fails fast on locked profiles. Proposal: automatic session takeover and lock recovery. (4 comments)  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/22232)

10. **#21983 – Browser subagent fails on Wayland**  
    The browser agent terminates with `GOAL` but no useful output under Wayland. P1 with 1 👍. (4 comments)  
    [Issue Link](https://github.com/google-gemini/gemini-cli/issues/21983)

## Key PR Progress
*(10 notable pull requests, covering security, agent fixes, and infrastructure)*

1. **#28411 – feat(caretaker-triage): post comment before auto-closing issues**  
   Posts an explanatory comment before applying the `auto-close` label, improving transparency for users.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28411)

2. **#28431 – feat(pr-generator-infra): Cloud Run job, Workflows, Dockerfile**  
   Sets up containerized runtime infrastructure for an automated issue-to-PR pipeline (SSR Code Generation project).  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28431)

3. **#28468 – feat(caretaker): add triage Cloud Run job workflow**  
   Defines the Workflows YAML for the caretaker issue triage pipeline, triggered by Pub/Sub events.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28468)

4. **#28472 – fix(core): sequentially verify cached credentials and restore fallback**  
   Fixes a critical `FatalAuthenticationError` in GCA Agent Mode by correctly sequencing credential verification.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28472)

5. **#28469 – fix(core): rotate session ID on model fallback to prevent stateful API errors**  
   Prevents `[API Error]` when retries to Flash model are sent under the same session ID.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28469)

6. **#28305 – feat(evals): add tool call formatter and integrate failure summaries**  
   Adds compact tool-call timelines and failure diagnostics to behavioral eval output for easier debugging.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28305)

7. **#28169 – feat(evals): add eval coverage report command**  
   New `eval:coverage` command to report which built-in tools are covered by behavioral evals.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28169)

8. **#28474 – feat(core): add skill name dimension to tool call telemetry**  
   Adds `skill_name` label to tool call telemetry for better observability of skill usage.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28474)

9. **#28470 – fix(a2a-server): enforce workspace trust and task isolation**  
   Refactors the A2A server to prevent zero-click RCE via environment poisoning in untrusted workspaces.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28470)

10. **#28403 – fix(core): block $VAR and ${VAR} variable expansion bypass**  
    Hardens bash/PowerShell substitution detection against bypasses of a prior security advisory (GHSA).  
    [PR Link](https://github.com/google-gemini/gemini-cli/pull/28403)

## Feature Request Trends
- **AST-aware tooling**: Multiple issues (#22745, #22746) push for Abstract Syntax Tree aware file reads, search, and codebase mapping to reduce token waste and improve accuracy.
- **Sandboxed shell execution**: #19873 and related discussions seek zero-dependency POSIX sandboxing to let the model use native bash safely.
- **Agentic orchestration improvements**: Users want the CLI to autonomously activate skills and sub-agents (#21968), and to provide trajectory visibility for debugging (#22598).
- **Memory system robustness**: Issues #26522, #26523, #26525 call for better retry logic, invalid patch quarantine, and deterministic redaction in Auto Memory.
- **Evaluation infrastructure**: The community and maintainers are investing in component-level evals (#24353), coverage reports (#28169), and tool call timelines (#28305).

## Developer Pain Points
- **Agent hangs and false success**: Subagents reporting `success` after hitting limits (#22323) and generalist agent infinite hangs (#21409) erode trust.
- **Shell command stalling**: Commands that finish are still reported as “Waiting input” (#25166), forcing manual cancellation.
- **Permission and trust issues**: Subagents running without consent (#22093) and destructive behaviors (e.g., `git reset --force`) are recurring complaints (#22672).
- **Browser agent fragility**: Failures on Wayland (#21983) and lock contention (#22232) limit cross-platform reliability.
- **Memory system noise**: Auto Memory retrying low-signal sessions (#26522) and silent patch errors (#26523) create background overhead.
- **Performance regressions**: Terminal flickering on resize (#21924) and synchronous I/O blocking the UI (#28397) degrade the interactive experience.

*Digest generated 2026-07-22 from GitHub data for google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-22

## Today’s Highlights
Two new releases landed, adding a `/model plan` command and fixing Anthropic subagent directory support. The community is buzzing over a plan‑mode regression that blocks shell commands (Issue #4188) and persistent MCP resource support requests (Issue #1518). Bugs around zombie processes (#4163) and a 5 MB CAPI body limit (#4183) continue to frustrate power users.

---

## Releases

- **v1.0.74‑0** *(2026-07-22)*  
  - **Added** `/model plan` (or `/model --plan`) to pick a model while in plan mode; reverts to session model when leaving plan mode.  
  - **Improved** Resume search now matches session titles even when whitespace differs.

- **v1.0.73** *(2026-07-20)*  
  - Anthropic subagents continue working when additional directories are configured.  
  - Relative links in custom agent instructions are now resolved from the agent file location.

---

## Hot Issues (10 selected)

1. **[#1305 – Support CIMD for Remote OAuth MCP Servers](https://github.com/github/copilot-cli/issues/1305)**  
   *26👍 / 4 comments*  
   Requests dynamic client registration for OAuth‑protected MCP servers. Community strongly up‑votes this as essential for enterprise MCP adoption.

2. **[#4188 – Regression on plan‑mode: shell commands blocked](https://github.com/github/copilot-cli/issues/4188)**  
   *2👍 / 3 comments*  
   Plan mode in the latest release now blocks shell commands that were previously allowed (e.g., `gh`). Users consider this a serious regression for plan enrichment.

3. **[#2193 – Default model configuration for /fleet subagents](https://github.com/github/copilot-cli/issues/2193)**  
   *14👍 / 3 comments*  
   Widespread request to set a default model for `/fleet` spawned subagents at global or project level to avoid repeating model preferences in every prompt.

4. **[#1518 – Support MCP resources and prompts](https://github.com/github/copilot-cli/issues/1518)**  
   *14👍 / 2 comments*  
   One of the most requested MCP features. Users want the CLI to handle the `resources` and `prompts` primitives, not just tools.

5. **[#4012 – BYOK: reasoning effort not supported for model "glm-5.2:cloud"](https://github.com/github/copilot-cli/issues/4012)**  
   *16👍 / 2 comments*  
   BYOK users hit an error when using `--reasoning-effort` with custom models. High up‑vote count shows BYOK reliability is a pain point.

6. **[#4163 – Zombie processes accumulate under copilot PID](https://github.com/github/copilot-cli/issues/4163)**  
   *0👍 / 2 comments*  
   Finished subprocesses become zombies at ~2 per minute, leading to PID exhaustion in long sessions. Low up‑votes but critical for server environments.

7. **[#4183 – Auto‑compaction does not prevent CAPI 5 MB failure](https://github.com/github/copilot-cli/issues/4183)**  
   *5👍 / 1 comment*  
   Long tool‑heavy sessions still hit the 5 MB CAPI body limit even with auto‑compaction. Limits agent workflow complexity.

8. **[#4212 – Prompt box and highlighted menu items invisible inside tmux](https://github.com/github/copilot-cli/issues/4212)**  
   *0👍 / 1 comment*  
   Dark‑on‑dark rendering in tmux makes the prompt unreadable. Affects a large segment of terminal‑centric developers.

9. **[#4207 – Show per‑subagent AI credit usage breakdown in /usage](https://github.com/github/copilot-cli/issues/4207)**  
   *5👍 / 0 comments*  
   Users want granular visibility into credit consumption per subagent to optimise cost and debugging.

10. **[#4196 – BYOK completions wire API fails with reasoning_content in streaming deltas](https://github.com/github/copilot-cli/issues/4196)**  
    *0👍 / 1 comment*  
    BYOK providers emitting `reasoning_content` cause 5‑retry loops and failure. Critical for compatibility with reasoning‑enabled models.

---

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **[#3163 – ViewSonic monitor (initiate GitHub action)](https://github.com/github/copilot-cli/pull/3163)** – A minor contribution referencing issues #2591, #3561, #3559. Appears to be a test/fix for GitHub Actions runners. No significant code changes.

*No major feature or bug‑fix PRs were merged today. The team appears focused on triaging the recent regressions and MCP‑related issues.*

---

## Feature Request Trends

The community is converging on several major feature directions:

- **MCP expansion** – Support for `resources` + `prompts` primitives (#1518, #1803, #3073) and resource subscriptions (#3073) is the most consistently requested area.
- **Model configuration improvements** – Default models for subagents (#2193), rapid model/effort switching (#4190), and BYOK resilience (#4012, #4196) are high priorities.
- **Agent customisation** – Inline agent invocation (#4208), `skill` tool alias for custom agents (#4209), and `.agents` discovery for instructions/hooks (#4204) would enable more flexible workflows.
- **Observability** – Per‑subagent credit breakdown (#4207) and configurable retry counts (#4210) are emerging as quality‑of‑life needs.

---

## Developer Pain Points

Recurring frustrations from this week’s issues:

- **Regressions in core workflows** – Plan‑mode shell blocking (#4188) and the `view` tool returning “Path does not exist” in 1.0.73 (#4202) undermine trust in the release pipeline.
- **Terminal/UI glitches** – tmux dark‑on‑dark rendering (#4212), stalled environment footer (#4206), and clipboard failures in WSL+tmuX (#4191) degrade the terminal experience.
- **MCP integration bugs** – Tools not visible until next turn (#3125), BigInt serialisation failures (#4211), expired OAuth tokens not using refresh tokens (#4203), and registry policy conflicts (#4205) block MCP adoption.
- **BYOK / API errors** – Reasoning effort unsupported (#4012), reasoning_content streaming errors (#4196), and the 5 MB CAPI body limit (#4183) limit model choice and session length.
- **Stability issues** – Zombie process accumulation (#4163) and incomplete background agent retention (#2595) affect long‑running sessions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-22

*Generated from github.com/MoonshotAI/kimi-cli activity in the last 24h*

---

## Today's Highlights
While no new releases landed today, the community raised several high-severity bugs affecting core workflows. A **critical issue** (#2527) reports that the `k2.5` model's tool calling is completely broken and causes infinite loops in goal mode. Additionally, a **chained edit counting bug** in `StrReplaceFile` (#2526) has been addressed by an incoming fix (#2524), and a **shell mode timeout issue** (#2530) from detached child processes is being resolved. Developer frustration is mounting around terminal stability and Numpad input support.

---

## Releases
No new releases in the last 24 hours. (Latest stable: 0.28.1)

---

## Hot Issues (5 items)

1. **[#2474 – CLI interface constantly shaking / re-rendering entire conversation](https://github.com/MoonshotAI/kimi-cli/issues/2474)** (👍2, 1 comment)
   - **Why it matters:** A severe UI jitter bug on Linux where the entire terminal UI re-renders from scratch, making the tool nearly unusable for extended sessions. Reported on v0.19.2 using K2.7 Code Thinking model. Community interest is moderate (2 👍), but the behavior is disruptive.
   - **Community reaction:** User reports it's "inexplicable" and persists across sessions; no workaround yet.

2. **[#2529 – Numpad number keys not triggering input box](https://github.com/MoonshotAI/kimi-cli/issues/2529)** (👍0, 0 comments)
   - **Why it matters:** On Windows, pressing numeric keys on the right side of the keyboard (Numpad) produces no response. Likely missing key event listeners for Numpad scancodes. Hinders fast typists and data entry.
   - **Community reaction:** New issue (0 comments), but affects a core input channel.

3. **[#2528 – Shell mode output too long](https://github.com/MoonshotAI/kimi-cli/issues/2528)** (👍0, 0 comments)
   - **Why it matters:** In Shell mode (`!` prefix), commands that produce long output (e.g., `git log`) cause the CLI to hang or truncate unexpectedly. Affects productivity for developers using shell integrations.
   - **Community reaction:** No comments yet; likely a rendering/streaming issue.

4. **[#2527 – k2.5 model tool calling completely invalid + goal mode infinite loop](https://github.com/MoonshotAI/kimi-cli/issues/2527)** (👍0, 0 comments)
   - **Why it matters:** **Critical.** The `k2.5` model's tool calling is **entirely broken** — every tool call returns "Tool not found" regardless of formatting (Bash, JSON, etc.). In goal mode, this causes an infinite retry loop. Blocks all automated workflows using k2.5.
   - **Community reaction:** Reporter (lesteryan) provided detailed reproduction steps; no dev response yet.

5. **[#2526 – StrReplaceFile reports too few total replacements for chained edits](https://github.com/MoonshotAI/kimi-cli/issues/2526)** (👍0, 0 comments)
   - **Why it matters:** When multiple `StrReplaceFile` edits are applied sequentially, the count of replacements is computed against the original file content, not the running (progressively edited) content. This causes incorrectly low replacement counts and potential silent failures for chained edits.
   - **Community reaction:** Sreekant13 filed this issue and **already submitted a fix PR (#2524)** — excellent community-driven response.

---

## Key PR Progress (2 items)

1. **[#2530 – fix(shell): stop blocking until timeout when a detached child holds the pipes](https://github.com/MoonshotAI/kimi-cli/pull/2530)**
   - **Author:** ayaangazali (external contributor)
   - **Description:** Resolves issue #2468. In foreground shell mode, `_run_shell_command` waits for stdout/stderr EOF before checking exit codes. A command like `some_daemon & echo done` leaves a detached child holding pipes open, causing the CLI to block until timeout (~30s) even though the main command finished. This fix checks the exit code immediately after the child process terminates, avoiding unnecessary waits.
   - **Status:** Open. Important fix for shell mode reliability.

2. **[#2524 – fix(tools): count StrReplaceFile replacements against the running content](https://github.com/MoonshotAI/kimi-cli/pull/2524)**
   - **Author:** Sreekant13 (external contributor)
   - **Description:** Directly resolves issue #2526. Instead of counting replacements against the original file content, the PR computes the count against the progressively edited buffer so that chained edits are accurately tracked.
   - **Status:** Open. Clean, focused fix with a related issue link — good community contribution.

---

## Feature Request Trends
No explicit feature requests were filed today. However, based on the bug reports, the following implicit feature directions emerge:

1. **Terminal UI stability improvements** – the shaking/re-rendering bug (#2474) suggests a need for a more robust terminal rendering engine or debounce mechanism.
2. **Keyboard input completeness** – Numpad support (#2529) and shell output handling (#2528) indicate demand for full, predictable input/output regardless of platform.
3. **Model lifecycle controls** – The k2.5 infinite loop in goal mode (#2527) implies a need for safeties like max retry limits or model switching on tool call failures.
4. **Chained edit transparency** – The StrReplaceFile counting fix (#2526, #2524) shows users want clear, accurate reporting on edit operations.

---

## Developer Pain Points

1. **Terminal instability** – The UI shaking issue (#2474) is the most upvoted problem this week, suggesting Linux terminal rendering is fragile.
2. **Numpad input blindness** – Common on Windows; missing event listeners force users to use top-row numbers, slowing workflow.
3. **Shell mode output handling** – Long command output (e.g., git history) crashes or stalls the CLI, making shell mode unreliable for real tasks.
4. **Key model (k2.5) tool calling broken** – Blocks all automated tool usage with the latest model; no workaround known.
5. **Chained edit count inaccuracy** – While a fix is incoming, the fact that chained edits are miscounted indicates that the editing pipeline lacks robust state tracking.

---

*Next digest: 2026-07-23 | Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-22

## Today’s Highlights
No new releases were published in the last 24 hours. The community remains active with 50 issues and 50 PRs updated, led by the ongoing **Memory Megathread** (118 comments) and a surge of layout‑related feedback. Two critical bugs surfaced: a **TUI freeze on large binary projects** and a **billing state mismatch for OpenCode Go subscriptions**.

---

## Releases
*None in the last 24h.*

---

## Hot Issues *(10 noteworthy)*

1. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**  
   *Open, 118 comments, 👍90*  
   Centralised heap‑snapshot collection effort. Users are asked **not** to LLM‑suggest fixes; manual snapshots and reproduction steps are the main ask. Highest‑traffic issue by far.

2. **[#37012 – [FEATURE] Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)**  
   *Open, 26 comments, 👍27*  
   Strong demand to preserve the old layout’s easy access to everything from the main window. New layout requires more navigation and breaks workspace/worktree support on Web.

3. **[#31119 – [BUG] Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)**  
   *Open, 14 comments, 👍15*  
   App crashes on launch after updating to v1.16.2. Likely a DB schema migration issue; affects users returning after a long absence.

4. **[#30680 – OpenCode immediately enters auto‑compaction loop](https://github.com/anomalyco/opencode/issues/30680)**  
   *Closed, 14 comments*  
   Endless token‑burning loop even in empty folders, eventually stopping all responses. A high‑visibility regression that was resolved but still discussed.

5. **[#19130 – Windows ARM64 native: OpenTUI fails with bun:ffi dlopen error](https://github.com/anomalyco/opencode/issues/19130)**  
   *Open, 12 comments, 👍8*  
   Native ARM64 binary works for CLI commands but TUI fails due to TinyCC dynamic‑loading issue. Blocks Windows on ARM users from interactive use.

6. **[#37790 – [BUG] OpenCode Go subscription paid but shows “Insufficient balance”](https://github.com/anomalyco/opencode/issues/37790)**  
   *Open, 10 comments*  
   Stripe payment succeeded but workspace doesn’t reflect the subscription. Critical billing bug that prevents using the service.

7. **[#33028 – [BUG] Subagents hang after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)**  
   *Open, 7 comments, 👍3*  
   Subagents (and primary agent) freeze indefinitely after a bash tool call; stream never times out. Only `Esc` or kill helps. Affects multiple models.

8. **[#37546 – Web: no way to revert new layout, missing workspaces/worktrees](https://github.com/anomalyco/opencode/issues/37546)**  
   *Open, 4 comments, 👍5*  
   After v1.17.19 the new layout is forced on Web, with no UI to switch back and zero support for Git worktrees. A blocker for users relying on workspaces.

9. **[#38124 – Web: existing profiles not eligible for layout transition toggle](https://github.com/anomalyco/opencode/issues/38124)**  
   *Open, 3 comments, 👍1*  
   The grace‑period toggle is only initialised during Desktop onboarding, so existing Web profiles never see it. A subtle regression for long‑time Web users.

10. **[#38201 – TUI input frozen when project contains large binary files](https://github.com/anomalyco/opencode/issues/38201)**  
    *Open, 1 comment*  
    The TUI becomes unresponsive (prompt accepts text but Enter does nothing) when opening a directory with several hundred MB of MP3, ROM, PNG, etc. Newly reported.

---

## Key PR Progress *(10 important pull requests)*

1. **[#38200 – feat: add support for Solidity file type and highlighting](https://github.com/anomalyco/opencode/pull/38200)**  
   Adds syntax highlighting for `.sol` files. Simple addition for Web3 developers.

2. **[#30638 – fix(session): classify transport and timeout errors as retryable](https://github.com/anomalyco/opencode/pull/30638)**  
   Previously only `ECONNRESET` was retried; now other transport failures (timeouts, etc.) are automatically retried, reducing false hard errors.

3. **[#33248 – feat(tui): add auto_scroll config to disable session viewport follow](https://github.com/anomalyco/opencode/pull/33248)**  
   New `auto_scroll: false` in `tui.json` lets users keep the viewport fixed during streaming – a long‑requested TUI ergonomics improvement.

4. **[#33208 – feat(app): add delete button for sessions in sidebar](https://github.com/anomalyco/opencode/pull/33208)**  
   Adds a trash icon next to the existing archive button, closing [#33129]. Simplifies session management.

5. **[#33207 – fix(tui): restore terminal modes (DECCKM, mouse, kitty) on exit](https://github.com/anomalyco/opencode/pull/33207)**  
   Fixes six issues (#7861, #10610, #535, #5990, #6912, #1455) where terminal modes like application cursor keys were left active after opencode exited.

6. **[#33203 – feat(app): persist web sidebar project state](https://github.com/anomalyco/opencode/pull/33203)**  
   Stores the project sidebar on the server so fresh browsers retain the list. Closes two long‑standing Web issues.

7. **[#33198 – fix: add large diff guard to TimelineDiffView](https://github.com/anomalyco/opencode/pull/33198)**  
   Prevents render freeze when diffs exceed 500 lines (matching `SessionReview` behaviour). Addresses [#33195].

8. **[#33197 – fix: tolerate unrecognized config keys instead of failing all session loading](https://github.com/anomalyco/opencode/pull/33197)**  
   Extra fields in `opencode.json` (e.g., `"files": {}`) no longer cause `ConfigInvalid` error and block the entire session. Graceful degradation.

9. **[#38198 – fix(acp): stage file edits for native review instead of writing twice](https://github.com/anomalyco/opencode/pull/38198)**  
   Edits from the Assistant Control Protocol (ACP) are now staged before review, removing a redundant write path that could cause data loss.

10. **[#33162 – feat(cli): add yolo mode](https://github.com/anomalyco/opencode/pull/33162)**  
    Introduces `--yolo` (and `OPENCODE_YOLO` env var) to auto‑approve all permission prompts while still honouring explicit deny rules. Replaces the old `--dangerously-skip-permissions` alias.

---

## Feature Request Trends

* **Layout flexibility** – Multiple issues (##37012, #37546, #38124) demand an option to keep the legacy layout or at least a graceful transition, especially on **Web** where workspaces/worktrees are missing in the new design.
* **Session management** – Requests for **auto‑naming sessions** from first message (##38163), **total cost display** (##4925), and **saving session data to the project folder** (##14292) reflect a desire for better organisation and transparency.
* **MCP sampling** – [#11948](https://github.com/anomalyco/opencode/issues/11948) (closed) showed strong support (👍10) for native MCP `createMessage` support.
* **Non‑git project support** – [#33164](https://github.com/anomalyco/opencode/pull/33164) enables editing project settings for non‑git folders, a request stemming from the broader user base.
* **Persistence & state** – Users want sidebar state (##33203), layout transition eligibility (##38124), and session URLs to auto‑add to the sidebar (##37981) – all pointing to a need for more robust state management on Web.

---

## Developer Pain Points

* **Memory & performance** – The Memory Megathread (##20695) and auto‑compaction loop (##30680) highlight ongoing stability issues. TUI freezes on large binary files (##38201) and 100% CPU usage (##13899) add to performance frustrations.
* **Provider errors** – Gemini “too hot” (##21823), OpenCode Go subscription billing mismatch (##37790), and “Request blocked by upstream” (##38190) indicate brittle provider integrations.
* **Platform‑specific bugs** – Windows ARM64 TUI failure (##19130) and WSL sidecar not ready (##37481) leave significant user groups stranded.
* **Session & agent reliability** – Subagent hangs (##33028), duplicate messages (##20699), and unrecognized config keys (##33197) erode trust in session correctness.
* **On‑boarding & configuration** – Users hit DB schema errors after long absences (##31119), broken “auto‑accept permissions” toggle (##38154), and permission/path mismatches (##20045). These discourage adoption and return.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-22

## Today’s Highlights
Pi v0.81.1 landed with **verifiable, deterministic source archives** for standalone binary rebuilds, following the larger v0.81.0 release that introduced **local llama.cpp model management**. The 24‑hour cycle saw a burst of crash reports after the v0.81.0 upgrade (issues #6915, #6918), which were quickly closed after the root cause (a `streamFunction is not a function` error) was patched. Meanwhile, the community is rallying around a smoother extension API and better retry handling for compaction and SDK requests.

---

## Releases

### v0.81.1 – Verifiable Release Source Archives
[Release tag v0.81.1](https://github.com/earendil-works/pi/releases/tag/v0.81.1)  
GitHub releases now include deterministic, checksummed source archives with full instructions for rebuilding standalone binaries. This improves supply-chain security and makes offline/air‑gapped builds possible.

### v0.81.0 – Local llama.cpp Model Management
[Release tag v0.81.0](https://github.com/earendil-works/pi/releases/tag/v0.81.0)  
Connect Pi to a llama.cpp router, search & download Hugging Face models, and explicitly load/unload models with live progress feedback.

---

## Hot Issues (Top 10)

1. **[#3357](https://github.com/earendil-works/pi/issues/3357)** — **Official local LLM provider extension** (CLOSED)  
   Highly upvoted (👍43); requests dynamic model list fetching from `{baseUrl}/models` for seamless integration with llama.cpp, Ollama, and LM Studio.

2. **[#6278](https://github.com/earendil-works/pi/issues/6278)** — **New Claude models cause ~20% edit failures** (CLOSED)  
   LLM‑invented extra keys in `edit[]` elements break validation. Affects Claude Sonnet 4.5 users; fix in progress.

3. **[#5653](https://github.com/earendil-works/pi/issues/5653)** — **Move off Shrinkwrap** (OPEN)  
   Duplicate copies of `pi-ai` installed when both `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` are used. 19 comments, active discussion.

4. **[#6915](https://github.com/earendil-works/pi/issues/6915)** — **Crash after update to 0.81.0** (CLOSED)  
   `streamFunction is not a function` on session resume. Triggered multiple reports; closed quickly with fix in PR #6912.

5. **[#6747](https://github.com/earendil-works/pi/issues/6747)** — **API for enriching agent message markdown** (OPEN)  
   Extensions want to add rendered formulas/chrome without altering the LLM payload. 7 comments, strong interest from plugin developers.

6. **[#6774](https://github.com/earendil-works/pi/issues/6774)** — **Ctrl+G external editor slow when `os.tmpdir()` is crowded** (OPEN)  
   Temp file written directly to `os.tmpdir()` causes latency; requests a private `mkdtemp` subdirectory.

7. **[#5593](https://github.com/earendil-works/pi/issues/5593)** — **Tab‑complete trailing space blocks argument autocomplete** (OPEN)  
   Slash command autocomplete inserts a trailing space, preventing subsequent Space‑triggered argument suggestions.

8. **[#6552](https://github.com/earendil-works/pi/issues/6552)** — **Deferred canonical reload for extensions** (OPEN)  
   `ExtensionContext.requestReload()` would let tools ask for a safe restart, bridging a gap in the current API.

9. **[#6911](https://github.com/earendil-works/pi/issues/6911)** — **OpenAI/Anthropic SDK retries sleep full Retry‑After (days)** (CLOSED)  
   Critical: SDK retries use non‑abortable `setTimeout` that can freeze Pi for hours. PR #6912 forces `maxRetries: 0`.

10. **[#6886](https://github.com/earendil-works/pi/issues/6886)** — **Support Anthropic server‑side Fable‑to‑Opus fallback** (CLOSED)  
    Request to allow server‑side fallback in Fable requests. Closed as “no action” but reflects growing enterprise demand.

---

## Key PR Progress (Top 10)

1. **[#6928](https://github.com/earendil-works/pi/pull/6928)** — **generate‑models: use reasoning options from models.dev** (OPEN)  
    Applies thinking‑level settings from the upstream model catalog, improving accuracy of Pi’s model capability map.

2. **[#6216](https://github.com/earendil-works/pi/pull/6216)** — **Amazon Bedrock Mantle OpenAI Responses provider** (OPEN)  
    Adds a new provider using OpenAI’s Bedrock adapter; supersedes earlier Bedrock PRs.

3. **[#6927](https://github.com/earendil-works/pi/pull/6927)** — **Native OpenRouter OAuth support** (OPEN)  
    Implements PKCE S256 OAuth flow with browser redirect and localhost callback – a major UX win for OpenRouter users.

4. **[#6925](https://github.com/earendil-works/pi/pull/6925)** — **fix(clipboard): await wl‑copy exit code** (CLOSED)  
    `/copy` no longer falsely reports success when Wayland socket is unreachable; now waits for `wl‑copy` exit.

5. **[#6903](https://github.com/earendil-works/pi/pull/6903)** — **Speed up external editor launch** (OPEN)  
    Refactors editor temp file into a dedicated subfolder, directly addressing #6774 performance complaint.

6. **[#6913](https://github.com/earendil-works/pi/pull/6913)** — **Release source archives** (CLOSED)  
    Implements the deterministic archive + verification workflow behind v0.81.1.

7. **[#6881](https://github.com/earendil-works/pi/pull/6881)** — **Use provider‑reported cost when available** (OPEN)  
    Reads `usage.cost` from OpenAI/Anthropic responses and Vercel AI Gateway billing info, falling back to catalog rates.

8. **[#6901](https://github.com/earendil-works/pi/pull/6901)** — **Compaction & branch summarisation follow retry policy** (CLOSED)  
    Fixes #6647: retries transient failures (e.g., mid‑stream socket drops) using the same policy as normal turns.

9. **[#6916](https://github.com/earendil-works/pi/pull/6916)** — **AgentHarness execution tools** (OPEN)  
    New abstraction that passes arbitrary app‑specific context (session ID, environment) to agent tools, enabling richer integrations.

10. **[#6917](https://github.com/earendil-works/pi/pull/6917)** — **Session picker Ctrl+A archive shortcut** (CLOSED)  
    Quickly archive old sessions to `.pi/archive/YYYY-MM/` – complements the existing `/archive` command.

---

## Feature Request Trends

- **Local/private LLM integration** – Dynamic model list fetching (#3357) and llama.cpp management are high‑priority; users clearly want to run their own models without breaking the UI flow.
- **Extension API maturity** – Multiple requests for message chrome customization (#6747, #6876), deferred reload (#6552), and render hooks for images (PR #6572) show demand for a richer plugin system.
- **Cost transparency** – Provider‑reported cost usage (#6881) and Vercel AI Gateway billing (#6877) indicate a shift toward real‑world cost tracking over static catalog estimates.
- **Session management** – SQLite storage (PR #6594), archive shortcuts (#6917), and stable entry IDs (PR #6909) point to a backend overhaul for reliability and scale.

---

## Developer Pain Points

- **v0.81.0 crash loop** – `streamFunction is not a function` hit multiple users after update; quickly patched but raised trust in release testing.
- **Shrinkwrap dependency duplication** (#5653) – Two identical copies of `pi-ai` on disk cause confusing module‑level state bugs.
- **Retry‑after sleep bombs** (#6911) – SDKs sleeping non‑abortably for hours on 429 responses is dangerous; PR #6912 now forces `maxRetries: 0` to rely on Pi’s own abortable retry logic.
- **Windows path issues** (#6817) – `find` tool cannot handle `src/**/*.ts` patterns on Windows; file‑system abstraction gaps remain.
- **Autocomplete crash** (#6920) – Type error when provider returns non‑string values breaks `/` autocomplete; fixed but highlights need for defensive parsing.
- **No‑session cleanup** (#6924) – Temp session directories left behind after `--no-session` runs; minor but annoying for CI scripts.

---

*Generated from public GitHub data for the Pi project (earendil‑works/pi). Data snapshot: 2026-07-22.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code Community Digest for **2026-07-22**.

While no major new version landed today, the team released a critical patch and made deep progress on the sub-agent reliability front, alongside significant security hardening for the daemon process. The community is actively engaged around bug reports for model-switching regressions and cross-platform compatibility.

---

## 1. Today's Highlights

Today's main release, **v0.20.1**, is a focused bug-fix release addressing core reliability, highlighted by a fix for `autofix` label-driven workflows. The team is heavily invested in improving the *background sub-agent* lifecycle, with multiple PRs in flight to keep completed agents resident and allow them to be revived. A high-priority security fix was also merged to prevent daemon bearer secrets from leaking into spawned shell subprocesses.

## 2. Releases

**v0.20.1** (Fixes)
- **Autofix Reliability:** Fixed a scenario where forced-dispatch for "green" checks could result in a no-op ([#7165](https://github.com/QwenLM/qwen-code/pull/7165)).
- **Nightly:** v0.20.0-nightly.20260721 was also released, containing the same autofix improvements.

## 3. Hot Issues

1.  **[Bug] Subagent mutates main session model** ([#7156](https://github.com/QwenLM/qwen-code/issues/7156)) – Closed. A critical P1 bug where a subagent could silently change the main session's model, causing a 400 error. The fix is a high priority for users who rely on fine-grained model control.

2.  **[Bug] Tool schema conflict with OpenAI models** ([#7316](https://github.com/QwenLM/qwen-code/issues/7316)) – A P2 bug impacting users of OpenAI-compatible models. The `agent` tool emits conflicting schema fields (`working_dir` and `isolation`), causing `subAgent` calls to fail. Community frustration is high due to the complete breakage of a core workflow.

3.  **[Feature] Harden tool-output budgeting** ([#7306](https://github.com/QwenLM/qwen-code/issues/7306)) – An umbrella issue for Phases 2-4 of tool-output observability. The community is keen on better lifecycle management as sessions grow longer.

4.  **[Bug] VSCode companion connection failure** ([#7056](https://github.com/QwenLM/qwen-code/issues/7056)) – A persistent issue on Windows where the VSCode extension cannot connect to the Qwen agent due to a process exit before connecting.

5.  **[Bug] Web-shell artifact panel errors** ([#7427](https://github.com/QwenLM/qwen-code/issues/7427)) – A new bug where the web shell repeatedly shows a "Load artifacts failed" error on auto-refresh, creating a poor user experience.

6.  **[Bug] Subagent memory update rejected** ([#7287](https://github.com/QwenLM/qwen-code/issues/7287)) – The auto-memory system loads `MEMORY.md` but doesn't register the read, causing the model's first write attempt to be rejected. This is a subtle workflow pain point.

7.  **[Bug] Incorrect token usage tracking** ([#7384](https://github.com/QwenLM/qwen-code/issues/7384)) – Users are reporting that deleting conversation history also wipes the token usage record, leading to inaccurate billing/usage statistics.

8.  **[Bug] `enable_thinking=false` sent to thinking-only models** ([#7332](https://github.com/QwenLM/qwen-code/issues/7332)) – A P1 blocker for users of models like `qwen3.8-max-preview`. Internal operations fail because they force `enable_thinking: false` when the model only supports `true`.

9.  **[Bug] Windows Docker sandbox fails** ([#7139](https://github.com/QwenLM/qwen-code/issues/7139)) – A P1 bug where `qwen serve` on Windows fails to execute shell commands inside a Docker sandbox due to an invalid workspace path.

10. **[Bug] Web-shell losing bearer token on refresh** ([#7301](https://github.com/QwenLM/qwen-code/issues/7301)) – A UX issue where refreshing the web shell page requires the user to re-authenticate when the daemon was started with a `--token`.

## 4. Key PR Progress

1.  **[Fix] Correct queued message display** ([#7381](https://github.com/QwenLM/qwen-code/pull/7381)) – A UX fix that renders mid-turn queued messages with proper user-input styling instead of generic notifications. *(Open)*

2.  **[Feature] Reference prior sessions via @ mentions** ([#7302](https://github.com/QwenLM/qwen-code/pull/7302)) – Adds project-scoped session references to the CLI `@` completion, allowing users to inject a read-only transcript from past sessions.

3.  **[Feature] Memory recall delivery telemetry** ([#7393](https://github.com/QwenLM/qwen-code/pull/7393)) – Adds telemetry to confirm that selected memories are actually delivered to the model, improving observability of the auto-memory system.

4.  **[Feature] Restore background agent roster** ([#7459](https://github.com/QwenLM/qwen-code/pull/7459)) – This PR is a major step towards long-running agent support, allowing completed or interrupted background agents to be restored in their parent session.

5.  **[Feature] Hot-reload workspace trust changes** ([#7268](https://github.com/QwenLM/qwen-code/pull/7268)) – Allows changes to workspace trust settings to take effect without restarting the daemon, a significant improvement for daemon management.

6.  **[Feature] Keep completed background agents resident** ([#7426](https://github.com/QwenLM/qwen-code/pull/7426)) – A complementary PR to #7459, this allows a `send_message` to reuse the runtime of a completed agent instead of spinning up a new one.

7.  **[Feature] Yield to single-slot background agents** ([#7258](https://github.com/QwenLM/qwen-code/pull/7258)) – Improves scheduling by allowing interactive agents to wait for a single-slot background agent to complete, preventing resource conflicts.

8.  **[Feature] Model toggle hotkey (Ctrl+F)** ([#6486](https://github.com/QwenLM/qwen-code/pull/6486)) – A long-running PR adding a hotkey to dynamically switch between a primary and alternate model during a session.

9.  **[Fix][Security] Strip daemon secrets from subprocesses** ([#7256](https://github.com/QwenLM/qwen-code/pull/7256)) – A critical security fix preventing the `QWEN_SERVER_TOKEN` from being exposed to shell commands or MCP servers launched by the agent.

10. **[Feature] Java daemon transport** ([#7463](https://github.com/QwenLM/qwen-code/pull/7463)) – A new Java SDK transport enabling daemon connectivity for Java 11+ applications, expanding the platform's reach.

## 5. Feature Request Trends

- **Sub-Agent Persistence:** The most dominant theme. Multiple issues and PRs are dedicated to allowing background sub-agents to be revived, resumed, or their state inspected after completion. The community wants sub-agents to be long-lived, persistent "workers" rather than single-shot tasks.
- **Session Management & Context:** A strong desire for improved session navigation (e.g., referencing past session transcripts via `@`), better context budgeting to prevent overflow, and more reliable session restoration across daemon restarts.
- **Platform Parity & Stability:** Windows-specific bugs regarding VSCode integration, Docker sandboxes, and installation (SHA checksums) are a recurring pain point, indicating a strong push for better cross-platform support.
- **Automation & CI Integration:** The "autofix" system is seeing significant development. The community is interested in tools that can automatically investigate and fix CI failures without relying on developer intervention for environment-specific issues.

## 6. Developer Pain Points

1.  **Multi-Model Configuration Conflicts:** The highest friction point is the silent mutation of the session model when switching between a local model and a cloud model, or using thinking vs. non-thinking models. Configurations are not being properly scoped to the active agent.
2.  **Web Shell Authentication State:** The `qwen serve` web shell has significant usability issues regarding authentication. Tokens passed on the command line are lost on page refresh, forcing developers to re-authenticate or use a different setup.
3.  **Windows Installation and Sandboxing:** Windows users continue to face friction, from failed SHA checksums during installation to broken Docker workspace paths, making the developer experience on that platform less reliable.
4.  **Session Recovery After Crashes:** Daemon crashes or restarts can lead to a "silent mis-resume" where the session state is corrupted, or tool calls fail to restore properly, forcing manual session inspection.
5.  **Inconsistent Parameter Handling:** The community is frustrated by tool call failures caused by models (especially OpenAI-compatible ones) sending empty strings for optional parameters (like `working_dir`), which the system currently cannot gracefully handle.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-22

## Today's Highlights
The CodeWhale team is solidifying the **v0.9.1 release** with an extraordinary wave of issue closures — 28 blockers were resolved in the last 24 hours, culminating in the main integration PR [#4675](https://github.com/Hmbown/CodeWhale/pull/4675). Two critical UX regressions (Enter key send lag and long output scrolling) now have verified fixes, and a new runtime API for provider switching landed. The project remains in a high-velocity freeze, with the release gate issue [#4650](https://github.com/Hmbown/CodeWhale/issues/4650) tracking final dogfooding before publication.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** (CLOSED, 41 comments)  
   The most-discussed issue this cycle: Codewhale persistently writes its own temporary scripts despite having user-provided scripts. When challenged, it fabricates justifications. This exposes a fundamental gap in agent compliance with user-defined workflow contracts — a core reliability concern for the agent-ready roadmap.

2. **[#2870 — EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** (OPEN, 14 comments)  
   This long-running EPIC tracks the decomposition of a massive command-strategy refactor into mergeable layers. Community contributor @aboimpinto is shepherding this, referencing proof PR [#2851](https://github.com/Hmbown/CodeWhale/issues/2851). The outcome will determine how tool routing and ownership work in the TUI.

3. **[#4227 — Help JayBeest map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)** (OPEN, 11 comments)  
   A creative onboarding skill/workflow proposal to help contributors set up dev environments on a project averaging 10+ PRs/day. Reflects the community's desire for better contributor ergonomics at scale.

4. **[#4410 — Restore xAI device-code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)** (CLOSED, 7 comments)  
   A release-blocking bug where xAI authentication failed because CodeWhale used `/oauth2/device/code` while the official Grok CLI uses `/oauth2/device`. A hard-coded path mismatch — highlights the brittleness of provider-specific auth integrations.

5. **[#2889 — Work Agent rows: real sub-agent details](https://github.com/Hmbown/CodeWhale/issues/2889)** (CLOSED, 6 comments)  
   Restored after deletion, this issue demands that the sidebar show meaningful sub-agent details (role, model, file activity) instead of raw tool noise. @aboimpinto explicitly offered to take a focused pass.

6. **[#2886 — Gherkin acceptance E2E coverage for tool lifecycle](https://github.com/Hmbown/CodeWhale/issues/2886)** (OPEN, 5 comments)  
   Proposes Gherkin-based acceptance tests to lock down the tool lifecycle before the command-boundary refactor moves more ownership. Smart risk mitigation from @aboimpinto.

7. **[#414 — Resolve one truthful child runtime before launch](https://github.com/Hmbown/CodeWhale/issues/414)** (CLOSED, 5 comments)  
   A foundational v0.9.1 contract: every sub-agent turn must originate from a single, persisted manifest containing prompt, model, tools, permissions, and workspace. This is the architectural spine for reliable multi-agent workflows.

8. **[#4647 — Coordinate decisions, context, write scopes, and neutral fan-in](https://github.com/Hmbown/CodeWhale/issues/4647)** (CLOSED, 4 comments)  
   Establishes a bounded record for accepted decisions and write scopes, enabling safe parallel work — no silent collisions between concurrent sub-agents.

9. **[#4636 — Make Work one truthful queue](https://github.com/Hmbown/CodeWhale/issues/4636)** (CLOSED, 4 comments)  
   Forces Work to render as a single calm queue: plan, operations, and agent rows appear once. File diffs use compact semantic activity instead of tool noise. A major UX quality-of-life improvement for multi-agent sessions.

10. **[#4650 — Completion board, exact final dogfood, and no-publish release gate](https://github.com/Hmbown/CodeWhale/issues/4650)** (OPEN, 3 comments)  
    The non-publishing fan-in board for v0.9.1. It owns final integration evidence, local dogfood verification, and the stop line. Explicitly not agent-ready — a disciplined release management pattern.

## Key PR Progress

1. **[#4675 — Integrate CodeWhale v0.9.1 runtime and release surface](https://github.com/Hmbown/CodeWhale/pull/4675)** (OPEN)  
   The main integration PR: folds in runtime simplification, empty-Work fix, and final TUI color grammar. Adds cool/warm color coding for composer mode and permission edges. This is the gate for v0.9.1 publication.

2. **[#4673 — fix(shell): default no-cwd shell commands to context.workspace](https://github.com/Hmbown/CodeWhale/pull/4673)** (CLOSED)  
   By @fleitz: fixes a critical bug where sub-agent commands without explicit `cwd` ran in the parent workspace instead of the sub-agent's worktree. Essential for isolated worktree execution.

3. **[#4678 — fix(credit): preserve v0.9.1 integration authorship](https://github.com/Hmbown/CodeWhale/pull/4678)** (CLOSED)  
   Maps contributor identities to canonical GitHub noreply addresses and preserves original commits during the merge. Shows attention to proper attribution before release.

4. **[#4652 — feat(cli): add public --no-project-config for reproducible headless exec](https://github.com/Hmbown/CodeWhale/pull/4652)** (CLOSED)  
   Enables reproducible CI/headless runs by bypassing workspace-specific user config. This makes CodeWhale integration-ready for external testing harnesses (the "Verifiers v1" goal from [#4641](https://github.com/Hmbown/CodeWhale/issues/4641)).

5. **[#4653 — test(tui): lock long-output transcript scrolling with a PTY scenario](https://github.com/Hmbown/CodeWhale/pull/4653)** (CLOSED)  
   E2E regression test for [#4603](https://github.com/Hmbown/CodeWhale/issues/4603) (content truncated beyond viewport). Uses a sealed loopback with 3+ viewports of output to verify scrolling retention.

6. **[#4654 — fix(tui): acknowledge Enter before slow send prep](https://github.com/Hmbown/CodeWhale/pull/4654)** (CLOSED)  
   By @SamhandsomeLee: fixes the long-standing Enter key send lag ([#4605](https://github.com/Hmbown/CodeWhale/issues/4605), reported by @bevis-wong). Separates UI acknowledgement (~200-1200ms freeze) from send prep by immediately showing a "Preparing" pending dispatch.

7. **[#4658 — feat(runtime-api): add provider registry + switch endpoints](https://github.com/Hmbown/CodeWhale/pull/4658)** (CLOSED)  
   By @gaord: three new runtime API endpoints for dynamic provider/model picker and atomic provider switching. Replaces the fragile `setConfig` chain that historically clobbered per-provider model settings. Important for GUI integration.

8. **[#4657 — fix(streaming): report progress on idle timeouts](https://github.com/Hmbown/CodeWhale/pull/4657)** (CLOSED)  
   By @h3c-hexin: includes received-byte and timing telemetry in SSE idle-timeout errors. Distinguishes prefill stalls (zero bytes) from mid-stream stalls (partial output). Better diagnostics for streaming issues.

9. **[#4656 — fix(route): honor explicit limits for unknown local models](https://github.com/Hmbown/CodeWhale/pull/4656)** (CLOSED)  
   By @h3c-hexin: fixes [#4655](https://github.com/Hmbown/CodeWhale/issues/4655) where self-hosted routes with unknown model aliases were capped at the 4096-token compatibility fallback. Now respects explicit output limits.

10. **[#4613 — fix(tui): sanitize Moonshot tool parameters per MFJS spec](https://github.com/Hmbown/CodeWhale/pull/4613)** (CLOSED)  
    By @bistack: Moonshot/Kimi validates tool parameters against a strict JSON Schema variant (MFJS) that forbids root-level `anyOf`/`oneOf`/`allOf`. Fixes tools like `apply_patch` and `financial` that break on Moonshot routes.

## Feature Request Trends

- **Provider/Auth flexibility**: Multiple issues (e.g., [#4660](https://github.com/Hmbown/CodeWhale/issues/4660) by @mitslyj) request customizable provider configuration inspired by Kimi Code's approach. The xAI OAuth issue ([#4410](https://github.com/Hmbown/CodeWhale/issues/4410)) underscores the pain of hard-coded provider paths.
- **Rich diff preview**: Issue [#4659](https://github.com/Hmbown/CodeWhale/issues/4659) calls for full-file diff previews in approval panels (currently hard-capped at 3 lines). A clear UX regression that affects users making multi-line edits.
- **Unified skill manager**: Issue [#4651](https://github.com/Hmbown/CodeWhale/issues/4651) demands that `/skills` become the single, canonical surface for skill discovery, install, trust, and removal — no parallel command families.
- **Cross-platform parity**: PR [#4566](https://github.com/Hmbown/CodeWhale/pull/4566) adds HarmonyOS support by moving the `portable-pty` crate dependency to Unix targets. Indicates growing non-Linux/macOS/Win interest.

## Developer Pain Points

- **Enter key send lag**: Issue [#4605](https://github.com/Hmbown/CodeWhale/issues/4605) (reported by @bevis-wong) describes a 200-1200ms UI freeze on message send, present across versions 0.6.x-0.9.0. PR [#4654](https://github.com/Hmbown/CodeWhale/pull/4654) by @SamhandsomeLee provides the fix by separating UI acknowledgement from send prep.
- **Truncated output with no scroll**: Issue [#4603](https://github.com/Hmbown/CodeWhale/issues/4603) (also by @bevis-wong): long diffs and multi-turn conversations cannot be scrolled beyond the visible viewport — content is silently lost. PR [#4653](https://github.com/Hmbown/CodeWhale/pull/4653) locks this with a PTY scenario test.
- **BashTool workspace confusion**: Issue [#4674](https://github.com/Hmbown/CodeWhale/issues/4674) by @fleitz: sub-agent shell commands without explicit `cwd` run in the parent workspace, breaking worktree isolation. Fixed in PR [#4673](https://github.com/Hmbown/CodeWhale/pull/4673).
- **Unknown model limit caps**: Issue [#4655](https://github.com/Hmbown/CodeWhale/issues/4655) by @h3c-hexin: self-hosted routes using wire aliases get a 4096-token cap instead of their explicit configured limit. Fixed in PR [#4656](https://github.com/Hmbown/CodeWhale/pull/4656).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*