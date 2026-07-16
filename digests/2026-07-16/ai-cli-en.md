# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-15 23:41 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-07-16

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing intense, concurrent iteration across nine major projects, with **seven of nine shipping releases in the last 24 hours**. The ecosystem is converging around common pain points—MCP integration reliability, subagent coordination, session state management, and authentication security—while diverging in platform focus (Windows vs. Linux, desktop vs. terminal) and architectural philosophy (plugin-based vs. monolithic, Rust vs. TypeScript). A notable trend is the **growing tension between power-user control demands and safety defaults**, visible across authentication bypass reports, silent auto-rejections, and subagent runaway issues. The community is increasingly vocal about regression prevention, with multiple tools facing backlash from UI redesigns that break existing workflows (OpenCode, Pi).

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Notable Issues | Notable PRs | Releases Today |
|---|---|---|---|
| **Claude Code** | 10 hot issues (657 👍 top) | 4 PRs | **2 releases** (v2.1.210, v2.1.211) |
| **OpenAI Codex** | 10 hot issues (153 👍 top) | 10 PRs | **3 releases** (Rust alphas) |
| **Gemini CLI** | 10 hot issues (P1 bugs) | 10 PRs | **1 release** (nightly) |
| **GitHub Copilot CLI** | 10 hot issues (76 👍 top) | **0 PRs** | **2 releases** (v1.0.71-2, v1.0.71-3) |
| **Kimi Code CLI** | **0 issues** | **1 PR** | **0 releases** |
| **OpenCode** | 10 hot issues (14 👍 top) | 10 PRs | **1 release** (v1.18.2) |
| **Pi** | 10 hot issues (30 👍 top) | 10 PRs | **0 releases** |
| **Qwen Code** | 10 hot issues (23 comments top) | 10 PRs | **3 releases** (nightly, preview, cua-driver) |
| **DeepSeek TUI** | **5 issues** (all 5 available) | **2 PRs** | **0 releases** |

**Key observation:** Copilot CLI had zero PR activity despite two releases, suggesting mature/churn-minimal codebase. Kimi Code is largely dormant. Qwen Code and Codex lead in release velocity (3 each). Pi has the most heated long-running issue (#4945, 75 comments).

---

## 3. Shared Feature Directions

| Theme | Tools Affected | Specific Community Needs |
|---|---|---|
| **Multi-account/profile switching** | Claude Code (#18435, 657👍), Copilot CLI (#223), Gemini CLI (BYOK issues) | Seamless personal/work account management without logout |
| **MCP OAuth & authentication reliability** | Copilot CLI (#4096, #4017, #4085), Gemini CLI (startup freezes), Qwen Code (#6917 security bypass) | OAuth tokens not bridging to CLI sessions; servers show "Connected" but tools invisible |
| **Subagent model selection & control** | Codex (#31814, 153👍), Gemini CLI (#22323 false GOAL success), Claude Code (subagent flag) | Users want per-agent model assignment; Sol forces all subagents to Sol |
| **Session state & context persistence** | Claude Code (#77463 "kids in trenchcoat"), OpenCode (#13946 silent exits), Pi (#6594 SQLite), Qwen Code (#6378 multi-workspace) | Forked sessions diverge, compaction drops system reminders, no session identity |
| **UI/UX regressions from redesigns** | OpenCode (#36997 Plan/Build toggle hidden), Pi (#6050 scrollback cleared) | New layouts breaking established workflows; strong community backlash |
| **Windows platform stability** | Codex (#33381 ARM64 crash-loop), Pi (#6629 terminal title corruption) | Serialport issues, Defender false positives, ARM64 support gaps |
| **Voice mode reliability** | Copilot CLI (#4024 ASR broken), OpenCode (IME conflicts) | Transcription failures across all models; PulseAudio/speech-to-text broken |
| **Token/context optimization** | Claude Code (excessive subagents), Qwen Code (#6936 memory waste), OpenCode (#10634 overflow) | Context waste from hidden features, large tool outputs, compaction failures |
| **Security: trust/permission model** | Qwen Code (#6831 config mutation), DeepSeek TUI (#4375 silent auto-reject), Copilot CLI (BYOK regressions) | Read-only operations mutating state; silent denials without explanation |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Plugin ecosystem, session portability | Full-stack devs, power users | Skill/plugin-based; stream-json output; `--forward-subagent-text` flag |
| **OpenAI Codex** | Multi-agent orchestration, Windows parity | Pro subscribers, enterprise | Rust alpha releases; subagent model selection issues; sandbox permissions |
| **Gemini CLI** | Safety, evaluation infrastructure | Google ecosystem, API-key users | P1 bug culture; behavioral eval suite; security vulnerability (GHSA) response |
| **GitHub Copilot CLI** | MCP integration, enterprise auth | GitHub ecosystem, enterprise | Voice mode, OAuth focus; zero PRs today (mature codebase); 1M context demand |
| **Kimi Code CLI** | Telemetry unification | MoonshotAI ecosystem | Quiet period; Python/TS alignment; single PR active |
| **OpenCode** | Desktop UI, model provider diversity | Desktop-centric devs | v1.18.2 subagent depth limit; Plan/Build toggle regression; ACP protocol support |
| **Pi** | Provider expansion, TUI performance | Multi-provider power users | SQLite session storage; xAI OAuth; Windows parity fixes; Codex hang issues |
| **Qwen Code** | Daemon architecture, security | Chinese market + global | Multi-workspace RFC; cua-driver relative coords; security fixes prioritized |
| **DeepSeek TUI** | Approval flow, skill usability | TUI/terminal users | Small active set; goal loop fixes; custom provider catalog issues |

**Key differentiators:** Claude Code leads in plugin ecosystem maturity. Qwen Code is investing most in daemon/architecture security. Pi is the most provider-agnostic. OpenCode is unique in desktop-first design. Copilot CLI is the most stable but also most stagnant in community-driven features.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|---|---|---|
| **High momentum, high maturity** | Claude Code, Qwen Code | Rapid releases (2-3/day), strong PR pipeline, well-defined feature request trends. Claude Code has highest-voted issue (657👍). Qwen Code has most PRs resolving security bugs. |
| **High momentum, moderate maturity** | OpenAI Codex, Gemini CLI, Pi | Active development (10 PRs each) but significant architectural pain points. Codex: Windows instability crisis. Gemini: subagent false success. Pi: Codex reliability hang (75 comments). |
| **Stable but reactive** | GitHub Copilot CLI | Two releases but zero PRs. Community voices frustration (MCP OAuth broken, voice broken) but codebase appears in maintenance mode. High feature request volume (1M context, 62👍). |
| **Growth stage** | OpenCode | Desktop-first approach gaining traction but v1.18 UI redesign causing community backlash (multiple duplicate issues). Balancing feature velocity with stability. |
| **Dormant / niche** | Kimi Code CLI, DeepSeek TUI | Kimi: zero issues, single PR. DeepSeek: small issue set (5 total), 2 PRs. May indicate limited adoption or focused maintenance. |

**Notable:** The community's tone across all tools is increasingly demanding better regression testing, error messages, and reproducible bug reporting tooling.

---

## 6. Trend Signals (Developer Implications)

1. **MCP integration is the new frontier—and the new pain point.** Every major tool struggles with OAuth bridging, tool visibility, and timeout handling. **Implication:** Developers adopting MCP should expect friction, especially with authenticated third-party servers.

2. **Subagent governance is broken.** False GOAL success (Gemini), Sol forcing all subagents (Codex), and excessive agent spawning (Claude Code, 272 agents for a code scan) indicate **no tool has solved multi-agent coordination well.** **Implication:** Teams should budget extra token costs for subagent-heavy workflows.

3. **Context window waste is a silent cost.** Hidden features consuming 7-9KB (Qwen), large tool output overflow (OpenCode), and binary diff bloat (Copilot CLI) all reduce effective context. **Implication:** Context optimization tools (compaction, AST-aware reading) will become essential for cost control.

4. **Windows remains second-class.** ARM64 crash-loops (Codex), serialport failures, Defender false positives, and terminal title corruption (Pi) persist. **Implication:** Windows-using developers should expect tool-specific workarounds; Linux remains most stable target.

5. **Security is shifting from "trust the tool" to "prove the tool is trustworthy."** Multiple bypass reports (Qwen trust mutation, Copilot BYOK regressions, Gemini variable expansion) show attackers are probing permission models. **Implication:** Expect stricter defaults and more approval dialogs in upcoming releases.

6. **Voice mode is not production-ready.** Copilot CLI's ASR failure across all nemotron models suggests fundamental gaps in speech-to-text integration. **Implication:** Do not depend on voice interfaces for critical workflows.

7. **Session portability is the next competitive battleground.** Claude Code (multi-account, 657👍) and Pi (SQLite storage) are investing heavily. Users want their skills, plugins, and configs to follow them across machines. **Implication:** Choosing a tool now means betting on its session portability roadmap.

8. **UI redesigns carry existential risk.** OpenCode's v1.18 layout change generated 7+ duplicate issues in 24 hours. Users tolerate feature gaps but **not workflow regressions.** **Implication:** Tools should offer opt-out periods for major UI changes.

---

**Report Date:** July 16, 2026
**Data Sources:** GitHub issue trackers and release pages for all nine tools (last 24 hours of activity)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-16 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Pull Requests represent the most actively discussed Skills by community engagement:

### 1. **`skill-creator` Runtime Fixes (PR #1298)**
- **Functionality:** Fixes `run_eval.py` report 0% recall — installs eval artifacts as real skills; fixes Windows stream reading, trigger detection, and parallel workers. This is a critical infrastructure fix for the entire Skill development workflow.
- **Discussion highlights:** Addresses Issue #556 (12 comments, 7 👍) where multiple users independently reproduced 0% trigger rates. The PR resolves a systemic bug that made the description-optimization loop optimize against noise.
- **Status:** Open (since 2026-06-10)
- **Link:** https://github.com/anthropics/skills/pull/1298

### 2. **`document-typography` Skill (PR #514)**
- **Functionality:** Typographic quality control for generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated content.
- **Discussion highlights:** Recognizes that typographic issues affect "every document Claude generates" but users rarely request fixes explicitly. Strong practical value proposition.
- **Status:** Open (since 2026-03-04)
- **Link:** https://github.com/anthropics/skills/pull/514

### 3. **`testing-patterns` Skill (PR #723)**
- **Functionality:** Comprehensive testing coverage across the full stack — Testing Trophy philosophy, unit testing (AAA pattern), React component testing, and what-to-test vs. what-not-to-test guidance.
- **Discussion highlights:** Represents demand for structured, opinionated testing guidance within Claude Code, covering the gap between generic testing knowledge and actionable instruction.
- **Status:** Open (since 2026-03-22)
- **Link:** https://github.com/anthropics/skills/pull/723

### 4. **`ODT / OpenDocument` Skill (PR #486)**
- **Functionality:** Create, fill, read, and convert OpenDocument files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice document requests.
- **Discussion highlights:** Addresses demand for open-source document format support, complementing existing PDF and DOCX skills.
- **Status:** Open (since 2026-03-01)
- **Link:** https://github.com/anthropics/skills/pull/486

### 5. **`self-audit` Skill (PR #1367)**
- **Functionality:** Universal AI output auditor — mechanical file verification followed by four-dimension reasoning audit in damage-severity priority order. Works across any project, tech stack, or model.
- **Discussion highlights:** A meta-skill for quality assurance that verifies claimed outputs exist and evaluates reasoning quality before delivery. The PR author also filed a follow-up proposal (Issue #1385) for a three-gate reasoning pipeline.
- **Status:** Open (since 2026-06-28)
- **Link:** https://github.com/anthropics/skills/pull/1367

### 6. **`pyxel` Retro Game Development Skill (PR #525)**
- **Functionality:** Integrates with pyxel-mcp for the Pyxel retro game engine — covers write → run-and-capture → inspect → iterate workflow for pixel-art/8-bit games in Python.
- **Discussion highlights:** Authored by the Pyxel creator (kitao). Represents niche but passionate community interest in creative coding and game development within Claude Code.
- **Status:** Open (since 2026-03-05, updated 2026-07-15)
- **Link:** https://github.com/anthropics/skills/pull/525

### 7. **`frontend-design` Skill Improvement (PR #210)**
- **Functionality:** Major revision of the frontend-design skill to improve clarity, actionability, and internal coherence — ensures every instruction is executable within a single conversation.
- **Discussion highlights:** Focuses on making existing skills more usable rather than adding new ones, reflecting community interest in skill quality over quantity.
- **Status:** Open (since 2026-01-05)
- **Link:** https://github.com/anthropics/skills/pull/210

### 8. **`skill-quality-analyzer` + `skill-security-analyzer` (PR #83)**
- **Functionality:** Two meta-skills — quality analysis across five dimensions (Structure & Documentation 20%, etc.) and security analysis for community skills.
- **Discussion highlights:** Early proposal (November 2025) that presaged later community concern about security (Issue #492). Evaluates skills themselves rather than generated content.
- **Status:** Open (since 2025-11-06)
- **Link:** https://github.com/anthropics/skills/pull/83

---

## 2. Community Demand Trends

From Issues and cross-referencing PR discussions, the community's most anticipated Skill directions are:

### 🔒 Security & Trust Boundary Management
- **Issue #492** (34 comments, 2 👍): Security concern that community skills distributed under the `anthropic/` namespace enable trust boundary abuse — users may grant elevated permissions to what they believe are official Anthropic skills.
- **Implication:** Demand for skill signing, namespace verification, or security audit skills (partially addressed by PR #83's `skill-security-analyzer`).

### 🔧 `skill-creator` Tooling Reliability
- **Issue #556** (12 comments, 7 👍): `run_eval.py` reports 0% trigger rate across all queries — the core optimization loop is broken.
- **Issue #1169** (3 comments): `run_loop.py` reports recall=0% on every iteration, including literal slash-command queries.
- **Issue #1061** (3 comments, 2 👍): Windows compatibility failures (subprocess PATHEXT, cp1252 encoding, select on pipes).
- **Implication:** The community wants a working development toolchain before building more skills. Multiple PRs (#1298, #1099, #1050, #362, #361, #539) address these exact bugs.

### 🏢 Organizational Skill Sharing
- **Issue #228** (14 comments, 7 👍): Users want org-wide skill sharing without manual file downloads. Currently requires Slack/Teams file transfer and manual upload per user.
- **Implication:** Enterprise demand for central skill management and distribution.

### 🧠 Agent Memory & Reasoning Quality
- **Issue #1329** (9 comments): Proposal for `compact-memory` — symbolic notation for compact agent state, reducing context usage from long-running agent notes.
- **Issue #1385** (3 comments): Proposal for three-gate reasoning pipeline (pre-task calibration → adversarial review → delivery verification).
- **Implication:** Advanced users see context-window pressure and reasoning quality as limiting factors for complex sessions.

### 📄 Document Format Expansion
- **PR #486** (ODT/OpenDocument), **PR #514** (typography quality), **PR #538** (PDF case-sensitive fixes): Growing demand for comprehensive document handling beyond basic DOCX and PDF, with quality control built in.

### 🧪 Testing & Quality Assurance
- **PR #723** (testing-patterns), **PR #1367** (self-audit): Systematic demand for quality verification — both of code and of AI-generated output.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to land soon:

| Skill | PR | Author | Created | Last Updated | Discussion Focus |
|-------|----|--------|---------|--------------|-----------------|
| **skill-creator fix (trigger detection)** | [#1298](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | 2026-06-10 | 2026-06-23 | Fixes the 0% recall bug blocking all Skill optimization |
| **self-audit (v1.3.0)** | [#1367](https://github.com/anthropics/skills/pull/1367) | YuhaoLin2005 | 2026-06-28 | 2026-07-02 | Mechanical + reasoning quality gate. Very recent, high velocity |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | meodai | 2026-06-10 | 2026-06-12 | Color naming systems, spaces, accessibility — specialized but complete |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | 2026-03-04 | 2026-03-13 | Typographic quality control — widows, orphans, numbering |
| **pyxel (retro games)** | [#525](https://github.com/anthropics/skills/pull/525) | kitao | 2026-03-05 | 2026-07-15 | Recently updated — may merge soon. Author is Pyxel creator |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | 2026-03-22 | 2026-04-21 | Full testing stack philosophy + practical patterns |

The **`skill-creator` fixes** (especially #1298, #1099, #1050, #362) represent the highest-priority cluster — they unblock all community Skill development by making the evaluation and optimization tooling functional on both Windows and Unix.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is two-fold: (1) fixing the `skill-creator` toolchain so it works reliably across platforms, and (2) adding practical, production-ready Skills for document quality assurance, testing patterns, and AI output verification — reflecting a maturation from experimental skill creation toward professional-grade, quality-controlled workflows.**

The thread connecting Issues #556, #492, and #189 to PRs #1298, #514, and #723 is clear: the community wants a trustworthy, functional development environment (*fix the evaluator, secure the namespace, deduplicate the catalog*) so they can confidently build and share Skills that solve real engineering problems (*typographic quality, testing discipline, output verification*).

---

# Claude Code Community Digest — 2026-07-16

**Data source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## Today’s Highlights

Two minor releases (v2.1.210 and v2.1.211) shipped yesterday, adding a live elapsed-time counter for long-running tool calls and a new `--forward-subagent-text` flag for streaming subagent reasoning. Meanwhile, the community’s most-voted feature request—**multi-account switching in Claude Desktop** (Issue #18435, 657 👍, 131 comments)—remains open and continues to draw attention. Several long-standing bugs around Cowork connectivity and session identity (the “kids in a trenchcoat” problem) were re‑surfaced.

---

## Releases (last 24h)

Two versions published:

- **v2.1.211** — Adds `--forward-subagent-text` flag and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` environment variable to include subagent text and thinking in `stream-json` output. Also fixes permission previews relayed to chat channels not neutralizing bidirectional‑override, zero‑width, and look‑alike characters.  
- **v2.1.210** — Adds a live elapsed-time counter to the collapsed tool summary line so long-running tool calls tick visibly instead of appearing stuck. Adds a startup warning for `Write(path)`, `NotebookEdit(path)`, and `Glob(path)` permission rules—users are advised to use `Edit(path)` or `Read(path)` instead.

---

## Hot Issues (10 of 50)

1. **[#18435 – Multi-account switching for Claude Desktop](https://github.com/anthropics/claude-code/issues/18435)**  
   *131 comments, 657 👍*  
   The highest‑voted open enhancement. Users want to manage multiple Claude accounts (personal / work) within the Desktop app with easy profile switching. No official response yet.

2. **[#18467 – Personal repos not visible on Claude web](https://github.com/anthropics/claude-code/issues/18467)**  
   *25 comments, 65 👍*  
   GitHub repos owned by personal accounts are invisible on claude.ai/code; only org repos appear. Affects many users and has been open since January.

3. **[#68092 – Cowork: all tasks fail with ECONNRESET retry loop](https://github.com/anthropics/claude-code/issues/68092)**  
   *4 comments, 1 👍*  
   Cowork sessions suddenly stop working across multiple networks and survive a clean reinstall. Intermittent but disruptive.

4. **[#77463 – Session instances invisible – “kids in a trenchcoat” problem](https://github.com/anthropics/claude-code/issues/77463)**  
   *2 comments*  
   A deep architectural complaint: forked/resumed sessions diverge across surfaces, produce conflicting stale writes, burn tokens, and have no instance identity. Highlights a lack of session‑ownership transparency.

5. **[#74990 – /compact drops Available skills system‑reminder](https://github.com/anthropics/claude-code/issues/74990)**  
   *2 comments, 1 👍*  
   Using `/compact` or auto‑compaction removes the entire skills system‑reminder from context. `/reload-skills` then reports “no changes.” Skill users hit this frequently.

6. **[#62149 – VS Code extension ignores `remoteControlAtStartup`](https://github.com/anthropics/claude-code/issues/62149)**  
   *8 comments, 5 👍*  
   A regression that was previously fixed and then re‑broken. The user notes their prior two reports (#41036, #53647) were auto‑misrouted by the duplicate bot.

7. **[#66077 – Allow saving screenshots to local filesystem in Chrome](https://github.com/anthropics/claude-code/issues/66077)**  
   *4 comments, 11 👍*  
   Claude‑in‑Chrome users want to persist screenshots taken during a session to disk, not just keep them ephemerally.

8. **[#77906 – VS Code extension settings tab stuck on “Loading extensions…”](https://github.com/anthropics/claude-code/issues/77906)**  
   *1 comment, 4 👍*  
   Freshly reported yesterday: an EventEmitter memory leak in IPC listeners blocks the extensions settings pane. Likely affects many users silently.

9. **[#65703 – Delete button 1px from edit button in VS Code session list](https://github.com/anthropics/claude-code/issues/65703)**  
   *2 comments, 4 👍*  
   UI hazard: the pencil (edit) and trash (delete) icons are placed directly adjacent, causing accidental session deletion with no confirmation dialog.

10. **[#66332 – Authentication broken on Android + Codespaces](https://github.com/anthropics/claude-code/issues/66332)**  
    *4 comments*  
    OAuth redirect fails in Android environments and GitHub Codespaces. Though closed as stale, the underlying problem still affects mobile users.

---

## Key PR Progress (4 total)

1. **[#77916 – Add code-quality-pipeline plugin](https://github.com/anthropics/claude-code/pull/77916)**  
   *New, by RonMizrahi*  
   A skill‑based plugin defining two quality gates (per‑file sequential pipeline and e2e pipeline). Aims to formalize code‑merge quality checks within Claude Code.

2. **[#77709 – Add settings example: official marketplace only](https://github.com/anthropics/claude-code/pull/77709)**  
   *New, by hangnality*  
   Example `settings-official-marketplace-only.json` demonstrating how to restrict plugin marketplaces to the official Anthropic source using `strictKnownMarketplaces`.

3. **[#77705 – fix(plugin-dev): validate-settings.sh false‑passes marker check](https://github.com/anthropics/claude-code/pull/77705)**  
   *New, by andyleeboo*  
   Fixes a bug in the plugin‑dev validate script: files with zero `---` markers incorrectly pass the frontmatter check. The fix now correctly rejects such files.

4. **[#77613 – claude-compare](https://github.com/anthropics/claude-code/pull/77613)**  
   *New, by 1napz*  
   A new utility for comparing Claude Code sessions or outputs. No detailed summary yet; watch for updates.

---

## Feature Request Trends

From the open and recently closed issues, three major feature directions dominate the community’s wishlist:

- **Multi‑account / multi‑profile management** — The ability to switch between Claude accounts without logging out, either on Desktop (#18435) or via CLI/VS Code. This is the single most‑requested enhancement by a wide margin (657 👍).
- **Better session portability and sync** — Syncing `~/.claude/` configuration (skills, plugins, MCP servers, statusline) across machines (#66303, #62806). Users who work on multiple devices want their setup to follow them, ideally tied to their Anthropic account.
- **Programmatic control of session metadata** — Renaming VS Code extension tabs (#62806), customised startup banners (#65788), and suppressing the welcome screen. Power users running many parallel sessions need fine‑grained UI and naming control.

Other recurring themes: local screenshot persistence in Chrome (#66077), CLI terminal output preservation (#62681), and hot‑reload of custom agents (#66327).

---

## Developer Pain Points

Several frustration patterns emerge from bug reports and discussions:

- **Excessive agent/token usage for simple tasks** — Multiple reports (#65920, #66353) describe Claude spawning dozens or hundreds of sub‑agents for trivial operations (e.g., 56 agents for an image upload, 272 agents for a code scan). This drives up cost and latency with no benefit.
- **Session and context fragility** — Compaction drops system reminders (#74990); forked sessions diverge with no identity (#77463); custom commands silently shadow built‑ins (#61857). Developers lose trust in session continuity.
- **VS Code extension regressions and UX sharp edges** – The `remoteControlAtStartup` flag being repeatedly ignored (#62149), the 1px‑away delete button (#65703), and the “Loading extensions…” hang (#77906) erode confidence in the extension’s reliability.
- **Cowork and networking unreliability** – ECONNRESET loops (#68092) and lost stdin pipes for MCP stdio servers (#37482) remain unsolved. Cowork users face frequent, hard‑to‑diagnose failures.
- **Authentication and repository visibility** – Personal GitHub repos not showing up (#18467) and OAuth issues on Codespaces/Android (#66332) block basic workflows for a significant subset of users.

The community’s tone is generally constructive but increasingly vocal about the need for better error messages, reproducible bug‑reporting tooling, and more rigorous regression testing before releases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest – 2026-07-16

## Today’s Highlights
Three new Rust alpha releases landed overnight, while the community remains focused on subagent model‑selection bugs and a surge of Windows ARM64 stability issues. The hottest discussion (#31814, closed with 79 comments) reveals that GPT‑5.6 Sol forces all subagents to also be Sol instances, bypassing user‑configured model preferences – a design conflict that generated 153 👍. Meanwhile, two duplicate crash‑loop reports on Windows ARM64 (Snapdragon X) are drawing urgent attention and linking to a faulty `serialport.node` dependency.

## Releases
Three Rust alphas were published (no changelog details provided beyond version strings):
- `rust-v0.145.0-alpha.12` – [Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.12)
- `rust-v0.145.0-alpha.13` – [Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.13)
- `rust-v0.145.0-alpha.14` – [Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.14)

## Hot Issues (10 noteworthy)

1. **[#31814 – GPT-5.6 Sol cannot specify subagent models](https://github.com/openai/codex/issues/31814)** (closed) – 79 comments, 153 👍. Sol’s metadata forces `multi_agent_v2` and hides spawn‑agent metadata, making all subagents Sol instances. High community frustration.
2. **[#28969 – Add setting to disable auto-resolve in 60 seconds](https://github.com/openai/codex/issues/28969)** (open) – 36 comments, 123 👍. Users want control over the automatic question resolution timeout; common request from Plus/Pro users.
3. **[#33381 – Windows ARM64 crash-loop on launch](https://github.com/openai/codex/issues/33381)** (open) – 32 comments, 22 👍. Desktop app exits after 10–15 seconds; Crashpad minidumps point to `serialport.node` delay‑load failure (`0xC06D007F`). Duplicate reports filed (#33393, #33415).
4. **[#31846 – Codex Spark fails with "Unsupported parameter: reasoning.summary"](https://github.com/openai/codex/issues/31846)** (open) – 24 comments, 33 👍. GPT‑5.3 Spark rejects a parameter that the app injects, blocking usage on Pro subscribers.
5. **[#33375 – Serialport.node delay-load failures cause severe UI lag](https://github.com/openai/codex/issues/33375)** (open) – 18 comments, 11 👍. Continuous retries to load `serialport` degrade UI responsiveness on Windows.
6. **[#23198 – Codex Desktop on Windows extremely slow](https://github.com/openai/codex/issues/23198)** (open) – 16 comments, 44 👍. Long‑standing performance complaint isolated to the app, not machine load.
7. **[#30527 – Windows Defender Behavior Monitoring high CPU](https://github.com/openai/codex/issues/30527)** (open) – 13 comments, 11 👍. Recent update triggers AV scans, consuming CPU even when idle.
8. **[#27284 – SSH remote shows "No chats" while threads exist](https://github.com/openai/codex/issues/27284)** (open) – 10 comments, 4 👍. State DB inconsistency between remote and local view; disrupts remote workflow.
9. **[#13036 – Support Display of Multiple Chats](https://github.com/openai/codex/issues/13036)** (open) – 10 comments, 6 👍. Recurring feature request for multi‑tab/multi‑session UI.
10. **[#32331 – Norton 360 triggers by opening an existing thread](https://github.com/openai/codex/issues/32331)** (open) – 8 comments, 5 👍. Behavioral detection (IDP.HELU) flags Codex as a false positive; affects security‑conscious users.

## Key PR Progress (10 important)

1. **[#33446 – Remove unused network proxy loader](https://github.com/openai/codex/pull/33446)** – Cleanup of dead code; reduces maintenance surface.
2. **[#33445 – Select elevated Windows sandbox for network proxies](https://github.com/openai/codex/pull/33445)** – Ensures proxy commands use the elevated backend when Windows firewall enforcement is active.
3. **[#31781 – Bound executor-controlled HTTP response buffering](https://github.com/openai/codex/pull/31781)** (code‑reviewed) – Adds byte‑level backpressure to prevent memory exhaustion from untrusted remote exec‑servers.
4. **[#33444 – Add external agent memory migration](https://github.com/openai/codex/pull/33444)** – Feature‑gated migration of project memory Markdown into Codex’s memory extension workspace; supports rename detection.
5. **[#33441 – Shut down Codex threads after approval scenarios](https://github.com/openai/codex/pull/33441)** – Ensures threads are cleanly terminated and their verification results preserved after approval.
6. **[#33432 – Preserve paginated history for spawned subagents](https://github.com/openai/codex/pull/33432)** – Subagents now inherit pagination mode and model context from parent, improving multi‑agent conversation continuity.
7. **[#33430 – Avoid creating metadata paths in Windows sandbox](https://github.com/openai/codex/pull/33430)** – Prevents sandbox from turning read‑only protections into deny‑write paths by creating metadata directories.
8. **[#33427 – Propagate deferred environment capability roots to MCP](https://github.com/openai/codex/pull/33427)** – Deferred environments can now provide capability roots with validation (unique IDs, root limits).
9. **[#33426 – Add Cursor support to setup import](https://github.com/openai/codex/pull/33426)** – Extends `/import` to migrate settings, MCP servers, project instructions, hooks, and chats from Cursor (alongside existing Claude Code support).
10. **[#29500 – feat: support permissions-scoped exec rules](https://github.com/openai/codex/pull/29500)** (open) – Enables command‑approval rules to vary by active permissions profile (managed, sandbox, etc.), addressing global‑rule limitations.

## Feature Request Trends
- **Multi‑agent control**: Users demand explicit per‑agent model selection (#31814) and better subagent timeout/backoff configuration (#24951, #16164).
- **UI/UX improvements**: Multi‑chat display (#13036), configurable auto‑resolve timeout (#28969), and real‑time progress feedback in TUI (#33373).
- **Cross‑tool import**: Growing interest in migrating from other assistants (Claude Code, Cursor) – addressed by PR #33426.
- **Persistent state reliability**: Save/restore of chat history across reboots, especially for network drives and SSH remotes (#27284, #27309, #27408).

## Developer Pain Points
- **Windows stability crisis**: ARM64 crash‑loops (#33381, #33393, #33415), serialport.node failures (#33375, #33380), Defender/Norton false positives (#30527, #32331), and sandbox permission regressions (#32880) dominate recent complaints.
- **Model‑parameter mismatches**: Several issues report the CLI or app sending invalid parameters (reasoning.summary, reasoning.effort=max) that the backend rejects (#31846, #30585).
- **Agent coordination bugs**: Premature turn completion (#27352), silent model switches (#33418), and missing tool‑call results (#32653) erode trust in multi‑step workflows.
- **Performance degradation**: Windows desktop slowness (#23198) and UI lag from repeated delay‑load retries (#33375) impact day‑to‑day productivity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-16

## Today's Highlights

A nightly release (v0.52.0‑nightly.20260715) ships with no breaking changes, but the community is buzzing about a **critical P1 bug where subagents falsely report GOAL success after hitting MAX_TURNS**, undermining trust in agent termination signals. Meanwhile, two high‑impact PRs were merged today: one fixing a `400 Bad Request` that killed chat sessions after tool rejection, and another patching a **shell variable‑expansion bypass (GHSA‑wpqr‑6v78‑jr5g)** that could leak secrets. The engineering team is also tackling MCP startup freezes and UI scroll‑jump regressions.

## Releases

- **[v0.52.0‑nightly.20260715](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260715.gfa975395b)** — Automated nightly build. No user‑facing changelog beyond the diff from the previous nightly.

## Hot Issues (10 Noteworthy)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — [P1/Bug] Subagent recovery after MAX_TURNS reports success**  
   `codebase_investigator` says `status: "success"` / `Termination Reason: "GOAL"` even when it timed out before analysis. Community reaction: 10 comments, 2 👍.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — [P1/Bug] Generalist agent hangs forever**  
   Simple operations (e.g. folder creation) stall indefinitely when the generalist agent is invoked. Users must disable sub‑agents to work around it. 7 comments, 8 👎 reactions.

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — [P1/Bug] Shell command stuck on “Waiting input” after completion**  
   Even trivial commands leave the shell in an “awaiting input” state, rendering the session unusable. 4 comments, 3 👍.

4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — [P1/Bug] Browser sub‑agent fails on Wayland**  
   The browser agent terminates with `GOAL` but actually crashes on Wayland compositors. 4 comments.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — [P2/Bug] Gemini rarely uses custom skills and sub‑agents**  
   Despite having well‑described skills (gradle, git), the agent ignores them unless explicitly told. 6 comments.

6. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — [P2/Feature] Agent should discourage destructive behavior**  
   Users report the agent using `git reset`, `--force` flags, and dangerous DB commands when safer alternatives exist. 3 comments.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — [P2/Bug] Auto Memory retries low‑signal sessions indefinitely**  
   The extraction agent leaves unprocessed sessions in the index, causing infinite re‑prompts. 5 comments.

8. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — [P1/Epic] Robust component‑level evaluations**  
   Tracks the evolution from 76 to full behavioral eval suite across 6 Gemini models. 7 comments.

9. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — [P2/Epic] AST‑aware file reads, search, and mapping**  
   Investigates whether AST tools can reduce token waste and improve navigation precision. 7 comments.

10. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — [P2/Enhancement] Zero‑dependency OS sandboxing for bash affinity**  
    Proposes leveraging Gemini 3’s native bash‑user training while sandboxing execution via POSIX tools. 8 comments.

## Key PR Progress (10 Important Pull Requests)

1. **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410) — [P1] Shorten MCP `tools/list` timeout**  
   Prevents 10‑minute freezes at startup when an MCP server doesn’t respond (e.g. mismatched JSON‑RPC id). **Open.**

2. **[#28407](https://github.com/google-gemini/gemini-cli/pull/28407) — Fix `400 Bad Request` after cancelled tool calls**  
   Groups cancelled tool responses and coalesces roles, restoring chat continuity after rejection. **Closed/merged.**

3. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) — Block `$VAR`/`${VAR}` variable expansion bypass**  
   Fixes security vulnerability GHSA‑wpqr‑6v78‑jr5g by detecting shell variable expansion in prompts that was previously missed. **Open.**

4. **[#28405](https://github.com/google-gemini/gemini-cli/pull/28405) — [P1] Prevent scroll jump when user scrolls up**  
   Fixes `stickingToBottom` logic in VirtualizedList that aggressively snapped back during content updates. **Open.**

5. **[#28406](https://github.com/google-gemini/gemini-cli/pull/28406) — [P1] Apply `modelIdResolutions` to tool sub‑agent configs**  
   API‑key users without preview access now get a fallback model instead of `INVALID_MODEL` errors. **Open.**

6. **[#28408](https://github.com/google-gemini/gemini-cli/pull/28408) — [P3] Centralize dense payload detection in tool mapping**  
   Refactors UI to reduce awareness of backend internals by moving density logic into `mapToDisplay`. **Open.**

7. **[#28411](https://github.com/google-gemini/gemini-cli/pull/28411) — Caretaker comment before auto‑closing feature requests**  
   Posts an explanatory note explaining engineering focus on core stability before applying `auto‑close`. **Open.**

8. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) — Add tool‑call timeline and failure summaries to evals**  
   When a behavioral eval fails, the runner prints a numbered agent‑tool timeline with arguments and errors. **Open.**

9. **[#28275](https://github.com/google-gemini/gemini-cli/pull/28275) — Make GCP telemetry exporters optional**  
   Moves Cloud Logging/Monitoring/Trace dependencies out of core runtime for non‑Google consumers. **Open.**

10. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — Limit recursive reasoning turns per user request**  
    Implements a 15‑turn cap (configurable) to protect CPU/API quotas from infinite loops. **Open.**

## Feature Request Trends

- **Agent reliability & safety** – Users want agents to stop falsely reporting GOAL success, to use custom skills proactively, and to avoid destructive git or shell commands.  
- **Memory system robustness** – Requested improvements include deterministic secret redaction before model context, quarantining invalid auto‑memory patches, and stopping infinite retry loops on low‑signal sessions.  
- **Browser agent maturity** – Demands for Wayland support, configuration overrides (e.g. `maxTurns`), and automatic session takeover when browser profiles are locked.  
- **Evaluation infrastructure** – Growing push for component‑level behavioral evals, AST‑aware file reading, and clearer failure diagnostics (as seen in PR #28305).  
- **Terminal/UI polish** – Frequent requests for flicker‑free resizing, emoji‑safe text truncation, external‑editor corruption prevention, and scroll position stability during incremental updates.

## Developer Pain Points

- **Agent hangs & false termination** – Sub‑agents and the generalist agent frequently freeze or claim success after hitting limits, forcing users to disable them or lose trust in results.  
- **Startup delays & timeouts** – MCP `tools/list` can stall the CLI for minutes, and shell commands often remain stuck in “awaiting input” after completion.  
- **Security regressions** – The `$VAR` expansion bypass (now fixed) and lack of sandboxing for bash‑driven agents raise concerns about secret exfiltration.  
- **Configuration friction** – Symlinked agent files are ignored, commented `settings.json` fails to parse, and sub‑agents can run despite being disabled in config.  
- **Incomplete debugging tools** – `/bug` reports lack sub‑agent context, and terminal corruption after closing external editors forces full‑screen refresh.  
- **Auto Memory inefficiencies** – Low‑signal sessions are re‑prompted endlessly, and invalid patches accumulate without quarantine, wasting API credits and local resources.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-16

## Today's Highlights

Two minor patch releases shipped today, addressing silent configuration errors and improving voice mode device management. The issue tracker continues to show heavy community focus on MCP OAuth integration pain points, with three separate reports surfacing that authenticated MCP servers (particularly Atlassian) appear "Connected" but fail to expose tools to CLI sessions. A critical bug was also opened around `apply_patch` storing deleted binary content in session history, permanently exceeding the 5 MB CAPI limit.

---

## Releases

**v1.0.71-3** (latest) — Fix-only patch:
- Invalid `settings.json` now shows a warning identifying the offending value instead of silently ignoring user configuration
- `/terminal-setup` no longer skips setup on terminals without real kitty keyboard support

**v1.0.71-2** — Additions and improvements:
- `/voice devices` command to choose and persist microphone for voice mode
- Limits on which built-in agents are available to tasks and subagents
- Canvas support in the CLI for extension-driven interactions
- Improved `/chronicle cost-tips` recommendations with richer cost profiling

---

## Hot Issues

1. **#223** — "Copilot Requests" permission not visible for org-owned fine-grained tokens. 76 👍, 31 comments. Enterprise admins want to enforce org-owned tokens for automations, but the permission is hidden in the token creation UI. A significant blocker for enterprise rollout.
   https://github.com/github/copilot-cli/issues/223

2. **#4024** — Voice mode: all bundled ASR models (nemotron variants) transcribe empty audio from PulseAudio capture. A critical regression for the `/voice` feature — the level meter works, but no transcription ever returns. 8 comments, reported by sylvanc.
   https://github.com/github/copilot-cli/issues/4024

3. **#4096** — Third-party MCP server shows "Connected" but tools never appear in CLI sessions. OAuth token from the Copilot app UI is never bridged to spawned CLI sessions. 5 comments, triaged. This is one of several reports this week on the same Atlassian MCP authentication blind spot.
   https://github.com/github/copilot-cli/issues/4096

4. **#4016** — BYOK (`COPILOT_PROVIDER_*`) still rejected in `--acp` mode with `-32000 Authentication required`. This is a regression that has been previously "fixed" (#3048, #3902) but continues to surface. 2 comments, 3 👍. Custom-provider users are stuck between versions.
   https://github.com/github/copilot-cli/issues/4016

5. **#4097** — `apply_patch` stores deleted binary files as textual diffs in session history, permanently exceeding CAPI's 5 MB limit. `/compact` cannot recover from this state. 2 comments. A significant session-management bug that can break entire workflows.
   https://github.com/github/copilot-cli/issues/4097

6. **#4053** — TUI hangs at "Loading: N skills" on NFS/GPFS filesystems. Root cause is a SIGCHLD race when Tokio spawns `which gh` with 30+ concurrent threads. 2 comments. Affects Linux enterprise environments with networked home directories.
   https://github.com/github/copilot-cli/issues/4053

7. **#4038** — Non-interactive mode: late-connecting MCP server injects an empty user message, causing the model to echo system-prompt tool lists instead of answering the actual prompt. 2 comments. A bizarre and disruptive interaction between MCP connection timing and session message ordering.
   https://github.com/github/copilot-cli/issues/4038

8. **#4017** — MCP OAuth for non-first-party HTTP servers: the app cancels the host token then never launches the browser flow. No error, no popup. 2 comments, 2 👍. A silent authentication failure that leaves users believing the server is connected when it is not.
   https://github.com/github/copilot-cli/issues/4017

9. **#4085** — MCP OAuth flow broken: servers marked `needs-auth` during discovery, connections drop after ~90s. Duplicate of #4017 but with additional detail around retry behavior. 2 comments.
   https://github.com/github/copilot-cli/issues/4085

10. **#2785** — Support 1M context window for Claude Opus 4.7 in Copilot CLI. 62 👍. This is the top-voted feature request in the tracker. Users report that Claude Code offers Opus 4.7 with 1M context as default, and Copilot CLI lags behind on the same model.
    https://github.com/github/copilot-cli/issues/2785

---

## Key PR Progress

**No pull requests were updated in the last 24 hours.** All development activity visible in this digest comes from the two new releases and the issue tracker. The community should watch for upcoming PRs addressing the MCP OAuth and voice transcription regressions highlighted above.

---

## Feature Request Trends

1. **1M context window parity** — Multiple issues (#2785, #1610) request Claude Opus 4.6/4.7 with 1M context to match Claude Code's default. The highest-voted ask (62 👍) and a persistent theme since February.

2. **Remote session attachment** — Issue #1979 (53 👍) requests the ability to attach to running CLI sessions from mobile/browser, modeled after Claude Code's remote session feature. This has been closed, suggesting it may be on a roadmap, but community interest remains high.

3. **Persistent token/context usage indicator** — Issue #2052 (19 👍) asks for an always-visible token counter in the CLI status bar. Developers want to see "45% context used" or "52k/128k tokens" during sessions.

4. **Configurable research agent MCP tools** — Issue #4076 requests that the built-in research agent's tool set be user-configurable to include custom MCP servers. Currently it hardcodes `github/* + web/grep/glob/view`.

5. **Sparse-checkout at session creation** — Issue #4145 proposes sparse-checkout to avoid full-clone timeouts on large repositories. This is brand new (opened today).

6. **MCP pagination support** — Issue #4006 notes that `tools/list` pagination via `nextCursor` is not followed. A compliance gap with the MCP specification.

---

## Developer Pain Points

1. **MCP OAuth is fundamentally broken** — At least four separate issues (#4096, #4089, #4085, #4017, #4084) describe the same pattern: OAuth MCP servers show green "Connected" in the UI but never expose tools to sessions. The Atlassian MCP server is the primary test case. This is the week's most heavily reported pain point.

2. **Authentication regressions in non-interactive/--acp mode** — Issue #4016 shows that BYOK configuration continues to fail in `--acp` mode despite multiple fix attempts. Community trust in the stability of custom-provider auth is eroding.

3. **Voice mode ASR is broken across all models** — Issue #4024 describes a complete transcription failure. Combined with the PTT typing-collision bug (#3896), the voice mode experience is currently unreliable.

4. **Session context bloating from binary diffs** — Issue #4097 reveals that `apply_patch` on binary files permanently inflates session history. This is a silent session killer — no warning until the 5 MB CAPI limit is hit.

5. **TUI hangs on NFS/GPFS filesystems** — Issue #4053 describes a startup hang rooted in a `SIGCHLD` race. This affects enterprise Linux environments where home directories are on shared storage.

6. **MCP pagination and message injection** — Issue #4006 (pagination not followed) and #4038 (empty message injection) are subtle but damaging compliance and reliability bugs in the MCP integration layer.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-16

## Today's Highlights
No new releases or issues were filed in the past 24 hours. The only movement is an open pull request (#2500) that aligns Python-side telemetry with the TypeScript rewrite’s event registry, introducing `trace_id` capture and filling missing event types. This signals continued work toward unifying observability across the codebase.

## Releases
None in the last 24 hours.

## Hot Issues
No issues were updated or created in the last 24 hours. The repository currently has no active community-reported bugs or feature requests to highlight.

## Key PR Progress
One pull request is actively under review:

- **#2500 — feat(telemetry): align events with TS schema, add trace_id and missing events**  
  📅 Created/Updated: 2026-07-15  
  Author: 7Sageer  
  Summary: Aligns the Python telemetry surface with the TypeScript `agent-core-v2` event registry (`events.ts`). Key changes include capturing the `x-trace-id` response header via `with_raw_response` in both stream and non-stream modes, adding `trace_id` to event payloads, and filling gaps in event coverage. No related tracking issue exists (N/A).  
  [🔗 MoonshotAI/kimi-cli PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)

## Feature Request Trends
No new feature requests were observed in the last 24 hours. The single open PR suggests a backend focus on telemetry consistency rather than user-facing features.

## Developer Pain Points
No recurring frustrations or high-frequency requests were captured in today’s data. The community may be experiencing a quiet period or waiting for the next release.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-16

## Today’s Highlights
v1.18.2 shipped with a key safety fix: subagents no longer spawn nested subagents by default, plus improved reasoning defaults for Meta models. The community continues to flag a disappearing Plan/Build toggle in the desktop UI – a major regression introduced in v1.18.1. Several PRs tackle long-standing compaction and overflow detection gaps, while a new PR normalizes image sizes across all tools to prevent session bloating.

## Releases
**v1.18.2** (released today)  
- **Core**: subagent depth is now limited by default (`subagent_depth` configurable). Better default reasoning depth for Meta models.  
- **Desktop**: `Mod+N` shortcut for new tab added.  

No other releases in the last 24 hours.

## Hot Issues (10 noteworthy)

1. **[#25239 – Feature: Expose GitHub Copilot “Auto” option in model selector](https://github.com/anomalyco/opencode/issues/25239)**  
   *19 comments, 14 👍*  
   Request to surface the Copilot “Auto” model option in the UI. Widely upvoted; indicates desire for tighter Copilot integration.

2. **[#36936 – Desktop: new tab layout cuts off session titles](https://github.com/anomalyco/opencode/issues/36936)**  
   *14 comments, 11 👍*  
   Horizontal tab layout in v1.18+ makes session titles unreadable. Reverting to v1.17 fixes it. Strong community backlash.

3. **[#36997 – Bug: new layout hides agent switching (Plan/Build) UI](https://github.com/anomalyco/opencode/issues/36997)**  
   *9 comments, 2 👍*  
   `newLayoutDesigns: true` removes the Plan/Build mode toggle. Users cannot switch modes. Tab key also affected.

4. **[#24038 – Feature: Claude support via ACP protocol](https://github.com/anomalyco/opencode/issues/24038)**  
   *6 comments, 6 👍*  
   Want to use Claude Code subscription through Agent Client Protocol. Community interest in multi-vendor support.

5. **[#37158 – Plan/Build mode toggle disappeared after update](https://github.com/anomalyco/opencode/issues/37158)**  
   *5 comments*  
   Duplicate of #36997 with additional details. Confirms the regression is widespread.

6. **[#13946 – Bug: `opencode run` exits silently after compaction](https://github.com/anomalyco/opencode/issues/13946)**  
   *4 comments*  
   Headless mode exits cleanly when compaction model’s token usage exceeds overflow threshold. Fails silently.

7. **[#10634 – Bug: compaction overflow check misses large tool outputs](https://github.com/anomalyco/opencode/issues/10634)**  
   *4 comments, 6 👍*  
   Large subagent results (50–100k tokens) bypass overflow detection until next step, causing context overflow.

8. **[#35013 – Bug (v2): Fable/Zen request-size bypasses auto-compaction](https://github.com/anomalyco/opencode/issues/35013)**  
   *4 comments*  
   Long Fable sessions exceed request byte envelope before token limit is reached, so auto-compaction never triggers.

9. **[#36942 – Feature: Vertical tabs](https://github.com/anomalyco/opencode/issues/36942)**  
   *4 comments, 5 👍*  
   Users want vertical tabs to see more session titles at once. Direct response to the horizontal tab regression.

10. **[#37171 – Desktop crashes on restart: “Notification server not found: wsl:Ubuntu”](https://github.com/anomalyco/opencode/issues/37171)**  
    *3 comments*  
    WSL environment fails to start notification server, causing crash loop. Affects WSL users.

## Key PR Progress (10 important)

1. **[#37170 – chore: merge dev into v2](https://github.com/anomalyco/opencode/pull/37170)**  
   Merges desktop-tabs promotion, subagent depth limiting, and provider tweaks into the v2 branch. Keeps v2’s `packages/ai` rename.

2. **[#37195 – tweak: adjust compaction to clearly indicate conversation history](https://github.com/anomalyco/opencode/pull/37195)**  
   Improves readability of compacted context. Aims to reduce confusion during long sessions.

3. **[#35867 – fix(skill): correct MCP local server env key to `environment` in customize-opencode](https://github.com/anomalyco/opencode/pull/35867)**  
   Bug fix: the built-in skill used `"env"` instead of `"environment"`. Now matches the schema.

4. **[#37181 – refactor(core): select system prompts through plugins](https://github.com/anomalyco/opencode/pull/37181)**  
   Moves vendor-specific system prompts into granular plugins (OpenAI, Google, Anthropic, etc.). Cleaner architecture.

5. **[#37194 – fix(session): resolve session overflow detection timing gaps](https://github.com/anomalyco/opencode/pull/37194)**  
   Addresses several gaps: `isOverflow()` only checks previous step tokens, `usable()` caps at 20K, no check after large tool outputs. Fixes #32656 and related.

6. **[#37141 – feat(core): normalize tool and attachment images at settlement](https://github.com/anomalyco/opencode/pull/37141)**  
   Resizes images from all tools (not just `read`) and user attachments at the end of each step. Prevents session bloat from inline base64.

7. **[#36850 – fix(opencode): normalize cloudflare-workers-ai mixed message content types](https://github.com/anomalyco/opencode/pull/36850)**  
   Cloudflare Workers AI rejects requests with inconsistent `content` types across messages. This PR normalizes them.

8. **[#37192 – feat(plugin): support dynamic Effect tools](https://github.com/anomalyco/opencode/pull/37192)**  
   Allows external V2 Effect plugins to register dynamic tools without importing the host’s `Tool.make`. Improves plugin ergonomics.

9. **[#37190 – fix(notification): handle unavailable server during initialization](https://github.com/anomalyco/opencode/pull/37190)**  
   Fixes WSL notification crash (#37171) by adding a fallback state so the renderer doesn’t block on missing server.

10. **[#36752 – fix(opencode): read cache write tokens from raw usage](https://github.com/anomalyco/opencode/pull/36752)**  
    Anthropic models served through an OpenAI-compatible gateway always reported `cache.write: 0`. Now correctly reads raw usage.

## Feature Request Trends
- **Per-session MCP selection** (#37168): Users want to control which MCP servers are attached per session when using `opencode serve` with multiple clients.
- **UI customization** (#36942 vertical tabs, #26970 file editor, #21227 image previews): Strong desire for a more traditional IDE-like experience (editable files, image display, flexible tab layouts).
- **Session management improvements** (#30926 auto‑generate titles, #36942 vertical tabs): Making multi-session workflows easier to navigate.
- **Broader model support** (#25239 Copilot Auto, #24038 Claude ACP): Users want OpenCode to plug into any popular model provider seamlessly.
- **Input method compatibility** (#37167 IME bypass): Developers using CJK IMEs face leader key conflicts; request for auto‑switch.

## Developer Pain Points
- **Regressed Plan/Build mode toggle** (multiple issues: #36997, #37158, #37163, #37130, #37146, #37143): The v1.18.1 new layout removes the toggle; users cannot change agent mode. Frequent duplicates suggest this is the top frustration.
- **Compaction and overflow failures** (#13946, #10634, #35013, #17340, #32656): Silent exits, missed overflow checks, and compaction itself failing for large/tool-heavy sessions. The PR #37194 aims to fix these.
- **Desktop UI regressions** (#36936 tab titles cut off, #28971 sidebar missing, #36942 forced horizontal tabs): Layout changes in v1.18+ are polarizing.
- **WSL crashes** (#37171, #32972? not listed but similar): Notification server failures on WSL cause desktop to crash on every restart.
- **Keyboard shortcut bugs** (#37165 `ctrl+p` unresponsive on Windows) and **prompt leaks between sessions** (#35587) add to day-to-day friction.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-16

## Today’s Highlights
A flurry of fixes landed for Windows-specific quirks, TUI rendering crashes, and Codex header validation, while a long‑running reliability issue with `openai-codex` (#4945) remains the most active topic. Two major feature PRs—SQLite session storage (#6594) and xAI OAuth support (#6651)—are under review, signaling strong community interest in persistent state and provider diversity.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 Noteworthy)

1. **[#4945 – openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)**  
   *Open, in progress* – 75 comments, 30 👍  
   The TUI frequently hangs on “Working…” with no streamed text, tool call, or error when using Codex/gpt-5.5. Recovery requires pressing Escape, recording an aborted turn. High frustration; still being investigated.

2. **[#6050 – TUI full redraw clears terminal scrollback during active rendering](https://github.com/earendil-works/pi/issues/6050)**  
   *Closed, no action* – 14 comments  
   Terminal scroll bar jumps to the beginning during chat rendering. Root cause in core TUI renderer. Annoying for users with custom UI redraws.

3. **[#5263 – Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)**  
   *Open* – 7 comments, 7 👍  
   Widespread request: model/thinking changes should apply only to the active session unless explicitly saved. A “Default model” entry in `/settings` is proposed.

4. **[#6657 – Bedrock AWS_PROFILE authentication not working](https://github.com/earendil-works/pi/issues/6657)**  
   *Open, in progress* – 5 comments, 2 👍  
   Despite a claimed fix in 0.80.7, users still see `AccessDeniedException: 403` when using `AWS_PROFILE`. Under investigation.

5. **[#6619 – Windows: dependent extensions mislabeled and show absolute path](https://github.com/earendil-works/pi/issues/6619)**  
   *Open, in progress* – 4 comments  
   On Windows, npm‑installed extensions that reference sibling packages display the absolute path in the `[Extensions]` banner instead of the package name. PR #6680 partially addresses this.

6. **[#6686 – Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)**  
   *Closed, untriaged* – 3 comments  
   A reopened variant of #2725: users report automatic logout after 15–30 minutes, showing “No API key for provider: github-copilot”. Still active for some despite being closed.

7. **[#6673 – OpenAI Codex exposes raw Cloudflare 520 HTML including client IP](https://github.com/earendil-works/pi/issues/6673)**  
   *Closed, untriaged* – 3 comments  
   Security concern: Codex 520 responses display full HTML (including exit IP and Ray ID) in the TUI and session history. Related to #6239 but Codex‑specific.

8. **[#6665 – TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild](https://github.com/earendil-works/pi/issues/6665)**  
   *Open* – 2 comments  
   Long sessions cause 100% CPU usage on one core due to uncached grapheme segmentation and Markdown rebuild for every chunk. Performance degradation.

9. **[#6647 – Compaction fails on a single transient stream drop (no retry)](https://github.com/earendil-works/pi/issues/6647)**  
   *Open, in progress* – 2 comments  
   Compaction has no retry logic for mid‑stream socket drops (`terminated`), causing entire compaction to fail even though normal turns retry.

10. **[#6652 – pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log, ignoring PI_CODING_AGENT_DIR](https://github.com/earendil-works/pi/issues/6652)**  
    *Open, bug* – 2 comments  
    When moving `.pi` away from home, crash logs still go to `~/.pi`, polluting the default location. Ignores the `PI_CODING_AGENT_DIR` env var.

## Key PR Progress (10 Important Pull Requests)

1. **[#6651 – feat(ai): add xAI device OAuth and route grok-4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)**  
   *Open* – Adds xAI device‑code OAuth alongside `XAI_API_KEY`. Routes only `grok-4.5` via Responses with low/medium/high reasoning. Closes #6461.

2. **[#6681 – windows: reset pi terminal title after checking npm packages](https://github.com/earendil-works/pi/pull/6681)**  
   *Closed* – Narrow fix for #6629: On Windows, the npm version check changes the cmd window title to “npm view…” and never restores it. Now resets to “Pi”.

3. **[#6671 – add usage info to branch summary, compaction and tool result entries](https://github.com/earendil-works/pi/pull/6671)**  
   *Open* – Adds usage metadata (tokens, cost) to summarization, compaction, and tool result entries. Currently usage is missing from `tool_result` events; this PR adds the plumbing.

4. **[#6683 – fix(coding-agent): accept colon-qualified skill names](https://github.com/earendil-works/pi/pull/6683)**  
   *Closed* – Fixes false `[Skill conflicts]` warnings for plugin‑namespaced skills like `inc:ship-it`. The validator now accepts `namespace:name`.

5. **[#6594 – feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594)**  
   *Open* – Major feature: persists session state in SQLite. Adds `retainedTail` to compaction entries and optimizes path traversal to stop at last compaction. Reduces memory and startup time for long‑running sessions.

6. **[#6680 – parse extension package name in case of dependent extension](https://github.com/earendil-works/pi/pull/6680)**  
   *Open* – Partial fix for #6619: correctly extracts the package name for Windows extensions pulled by npm, instead of showing the absolute path.

7. **[#6533 – fix: Codex compaction returns "Model not found" for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533)**  
   *Closed* – Compaction and branch summarization through Codex failed with 404 for gpt-5.6-luna because the API’s no‑tools registry doesn’t recognize the tier‑suffixed slug. Now mapped correctly.

8. **[#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**  
   *Open* – New provider leveraging Amazon Bedrock’s Mantle OpenAI Responses API. Uses official OpenAI Bedrock provider. Supersedes earlier PR.

9. **[#6667 – fix(tui): guard null children in Box and Container render/invalidate](https://github.com/earendil-works/pi/pull/6667)**  
   *Closed* – Prevents `TypeError: Cannot read properties of undefined` when extension install/remove leaves stale component references. Null‑guards render loops.

10. **[#6659 – fix(openai-codex): clamp session-id header to 64 chars like prompt_cache_key](https://github.com/earendil-works/pi/pull/6659)**  
    *Closed* – The `session-id` and `x-client-request-id` headers were not clamped, causing validation rejections from the ChatGPT Codex backend. Now consistent with the body’s `prompt_cache_key`.

## Feature Request Trends

- **Session management evolution**: Users want folders, rename, archive/close actions (#6674), plus ephemeral model/thinking changes per session (#5263). The SQLite storage PR (#6594) directly enables better session state handling.
- **Provider expansion**: Community actively contributes new backends—xAI OAuth/grok-4.5 (#6651), Amazon Bedrock Mantle (#6216)—showing appetite for multi‑provider support.
- **Extension API expansion**: Requests for exposing retry controls (#6684), a standalone orchestrator extension example (#6691), and fixes for type exports (#6687) indicate growing ecosystem.
- **UI/UX polish**: Bordered code blocks (#6682), viewport windowing for extension selectors (#6688), and better session replay ordering (#6690) reflect demand for a more polished TUI.

## Developer Pain Points

- **Codex reliability**: #4945’s persistent “Working…” hang remains the top pain point (75 comments). The fix for session‑id clamping (#6659) may help, but root cause is still open.
- **Authentication fragility**: Auto‑logout from GitHub (#6686, #2725) and Bedrock AWS_PROFILE failures (#6657) erode trust. OAuth override by API key (#6689) catches new users off guard.
- **TUI performance**: Full‑core pinning during streaming (#6665) and scrollback clearing (#6050) degrade the interactive experience.
- **Windows parity**: Terminal title corruption (#6629), absolute paths in extension banners (#6619), and npm view title changes (#6629) make Windows feel second‑class.
- **Compaction fragility**: Single transient socket drop fails entire compaction (#6647); non‑retried recovery loops (#6639) can cause repeated auto‑compaction for MiMo overflow.
- **Configuration inconsistencies**: Crash log hard‑wired to `~/.pi` ignoring `PI_CODING_AGENT_DIR` (#6652) and mis‑rendered skill validation (#6683) cause unnecessary friction.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Based on the provided GitHub data for `QwenLM/qwen-code`, here is the Qwen Code community digest for **2026-07-16**.

---

### Qwen Code Community Digest | 2026-07-16

This digest covers the most significant activity in the Qwen Code repository over the last 24 hours, including new releases, high-priority bugs, and major feature development.

### 1. Today's Highlights

The team shipped three new releases, including a significant update to the `cua-driver` with relative coordinate support. Development activity is high, with multiple PRs focused on enhancing the daemon's architecture for multi-workspace support, improving CI stability, and fixing critical bugs in security and tool-call processing. The community is actively discussing the RFC for multi-workspace daemon sessions and reporting issues with authentication injection and configuration leaks.

### 2. Releases

Three new releases were published in the last 24 hours.

- **[v0.19.10-nightly.20260715.c538bd70d](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10-nightly.20260715.c538bd70d)**: This nightly release includes documentation changes to cap PR scope after repeated review rounds and a new feature for workspace path locking in the web-shell.
- **[v0.19.9-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9-preview.0)**: Shares the same changelog as the nightly build, featuring the PR scope review docs and the workspace path lock feature for the web-shell.
- **[cua-driver-rs-v0.7.2](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.2)**: An important update to the vendor `cua-driver` binaries. This release adds support for **relative coordinates** and provides prebuilt binaries for macOS (codesigned + notarized), Linux, and Windows.

### 3. Hot Issues

1.  **RFC: Multiple workspaces in one qwen serve daemon** ([#6378](https://github.com/QwenLM/qwen-code/issues/6378))
    - **Why it matters**: This is the foundational RFC for a "1 daemon = N workspaces" model. It directly addresses a core limitation for power users and automated workflows, generating the highest community engagement (23 comments).
    - **Community Reaction**: Active discussion on implementation trade-offs while maintaining backward compatibility for existing single-workspace clients.

2.  **GitHub App authentication is not injected into newly created workspaces** ([#6928](https://github.com/QwenLM/qwen-code/issues/6928))
    - **Why it matters**: A critical blocker for developers using private repositories. New workspaces fail to authenticate, preventing access to needed dependencies or code.
    - **Community Reaction**: The reporter (loreley546) has provided detailed diagnostic steps, facilitating a quicker triage process.

3.  **MCP tool names with dots rejected by OpenAI/Anthropic providers** ([#6970](https://github.com/QwenLM/qwen-code/issues/6970))
    - **Why it matters**: A regression in cross-provider compatibility. Tools that work with Gemini fail to register with other major providers, breaking multi-model setups.
    - **Community Reaction**: Community member ran411285752 identified the root cause as MCP name sanitization, highlighting a need for stricter validation.

4.  **Security: Untrusted MCP `readOnlyHint` skips tool confirmation** ([#6917](https://github.com/QwenLM/qwen-code/issues/6917))
    - **Why it matters**: A security vulnerability where a simple MCP annotation bypasses the default tool confirmation prompt, even for untrusted servers.
    - **Community Reaction**: This was quickly resolved, moving to `status/in-review` with a PR already submitted.

5.  **Security: Trust-status preview check mutates cached config** ([#6831](https://github.com/QwenLM/qwen-code/issues/6831))
    - **Why it matters**: A dangerous side-effect where a read-only "preview" function permanently mutates the trusted folders configuration, potentially leaking trust state across sessions.
    - **Community Reaction**: Recognized by the team as a `P1` priority and quickly fixed by the reporter, @AriaZhao-coder, who also authored the fix.

6.  **Bug: `isManagedMemoryAvailable()` ignores `enableManagedAutoMemory` setting** ([#6936](https://github.com/QwenLM/qwen-code/issues/6936))
    - **Why it matters**: A discrepancy between the setting and its implementation, causing 7-9KB of context to be wasted even when the user has disabled the feature. This reduces effective context for paying users.
    - **Community Reaction**: User @Aleks-0 identified a clear gate mismatch, making this a “welcome-pr” candidate.

7.  **Bug: Fractional session/tool-call limits terminate runs prematurely** ([#6914](https://github.com/QwenLM/qwen-code/issues/6914))
    - **Why it matters**: A validation bug allowing fractional limits that immediately kill runs. This is a low-hanging fruit bug that can confuse new users.
    - **Community Reaction**: The reporter (morluto) clearly identified the issue with whole-number counter vs. fractional-value discrepancy.

8.  **Bug: Tool timeouts reported as successes** ([#6863](https://github.com/QwenLM/qwen-code/issues/6863))
    - **Why it matters**: A core logic flaw where foreground shell command timeouts are treated as successful `ToolResult` calls, misleading the model about the state of the environment.
    - **Community Reaction**: @doudouOUC filed this, and the fix is tagged as `welcome-pr`, indicating a straightforward technical solution.

9.  **Feature Request: Add "auto" output language mode** ([#6943](https://github.com/QwenLM/qwen-code/issues/6943))
    - **Why it matters**: Users want the model to dynamically match the response language to the user's input, rather than being locked to a single fixed language.
    - **Community Reaction**: The user @pedh framed this as both a feature request and a bug, noting that the current “MUST” wording in output-language.md is too rigid.

10. **Bug: Malformed tool results lose display output** ([#6916](https://github.com/QwenLM/qwen-code/issues/6916))
    - **Why it matters**: A defensive coding issue where a missing `llmContent` field in a `ToolResult` causes the valid `returnDisplay` to be discarded.
    - **Community Reaction**: The issue, also filed by @morluto, correctly identifies a contract misalignment in the core package.

### 4. Key PR Progress

1.  **feat(web-shell): Workspace-scoped MCP management** ([#6954](https://github.com/QwenLM/qwen-code/pull/6954))
    - **Feature**: Adds a new management UI for MCP servers directly within the Web Shell, allowing per-workspace configuration without needing a chat session.

2.  **feat(core): Propagate trusted invocation context** ([#6895](https://github.com/QwenLM/qwen-code/pull/6895))
    - **Feature**: Introduces a `InvocationContextV1` to track the origin (CLI, ACP, daemon) of a request, which is a prerequisite for building more granular permission and audit systems. In review.

3.  **feat(daemon): Aggregate deep health across workspaces** ([#6961](https://github.com/QwenLM/qwen-code/pull/6961))
    - **Feature**: Makes the daemon health endpoint a true “system health” snapshot by aggregating session, permission, and channel status across all managed runtimes. This is key for operational monitoring.

4.  **feat(cli): Add daemon Todo stop guard** ([#6945](https://github.com/QwenLM/qwen-code/pull/6945))
    - **Feature**: Prevents the daemon from stopping mid-workflow by allowing it to automatically continue for a bounded number of calls after a `todo_write` with pending items. In review.

5.  **feat(channels): Tag daemon sessions with channel source** ([#6991](https://github.com/QwenLM/qwen-code/pull/6991))
    - **Feature**: Persists immutable `sourceType: "channel"` metadata on daemon sessions. This enables better auditing and transcript record-keeping.

6.  **feat(agents): Support per-model sub-agent concurrency limits** ([#6984](https://github.com/QwenLM/qwen-code/pull/6984))
    - **Feature**: Implements granular rate-limiting for background agents, capping concurrency by specific model ID to prevent API over-use.

7.  **fix(core): Require explicit approval to exit Plan mode** ([#6967](https://github.com/QwenLM/qwen-code/pull/6967))
    - **Fix**: Prevents accidental exits from Plan mode by requiring explicit user approval, improving the user experience for workflow management.

8.  **fix(core): Force `tool_choice` in `generateJson` to prevent auto-mode classifier deadlock** ([#6929](https://github.com/QwenLM/qwen-code/pull/6929))
    - **Fix**: Resolves a critical deadlock ([#6927](https://github.com/QwenLM/qwen-code/issues/6927)) where the safety classifier blocks all tools in "auto" approval mode, making recovery impossible.

9.  **perf(review): Scope Agent 7's build/test to affected workspaces** ([#6955](https://github.com/QwenLM/qwen-code/pull/6955))
    - **Performance**: Optimizes CI for `qwen review` by only building and testing the changed code, reducing the review loop time.

10. **fix(cli): Don't mutate cached trusted-folders config on preview trust check** ([#6900](https://github.com/QwenLM/qwen-code/pull/6900))
    - **Fix**: A quick response to security bug ([#6831](https://github.com/QwenLM/qwen-code/issues/6831)), preventing a read-only preview operation from leaking trust state.

### 5. Feature Request Trends

- **Multi-Workspace & Daemon Architecture**: The most significant trend is the push to evolve the daemon from a single-workspace process to a multi-workspace one. The RFC in [#6378](https://github.com/QwenLM/qwen-code/issues/6378) is a focal point, supported by requests for better session source metadata ([#6962](https://github.com/QwenLM/qwen-code/issues/6962)) and aggregated health monitoring.
- **Enhanced Communication Channels**: Users are requesting more sophisticated integrations. There is a clear demand for native interactive cards in DingTalk ([#6443](https://github.com/QwenLM/qwen-code/issues/6443)) and support for delivering webhook tasks to single chats, not just group chats ([#6883](https://github.com/QwenLM/qwen-code/issues/6883)).
- **Smarter Session Lifecycle & Automation**: The community wants more control over agent workflows. This includes requests for a "Todo Stop Guard" to prevent daemon sessions from dying prematurely ([#6946](https://github.com/QwenLM/qwen-code/issues/6946)) and improved bidirectional communication between main and sub-agents ([#5239](https://github.com/QwenLM/qwen-code/issues/5239)).
- **Cross-Platform Compatibility**: A persistent trend is ensuring compatibility across different platforms, particularly for MCP tool names ([#6970](https://github.com/QwenLM/qwen-code/issues/6970)) and the `ACP Streamable HTTP transport` for non-adapter integrations with editors like Zed and JetBrains ([#4782](https://github.com/QwenLM/qwen-code/issues/4782)).

### 6. Developer Pain Points

- **Security & Trust Configuration Fragility**: Developers are repeatedly encountering issues with the security model. A simple trust check mutating a cached config ([#6831](https://github.com/QwenLM/qwen-code/issues/6831)) and an MCP server annotation bypassing tool confirmation ([#6917](https://github.com/QwenLM/qwen-code/issues/6917)) highlight that the trust and permission system is complex and error-prone.
- **Context Window & Token Waste**: Issues like `isManagedMemoryAvailable()` ignoring its setting ([#6936](https://github.com/QwenLM/qwen-code/issues/6936)) and long tool summaries being truncated ([#6814](https://github.com/QwenLM/qwen-code/issues/6814)) point to frustration with inefficient use of the context window.
- **CI/CD Instability**: A high number of auto-filed issues for "Main CI failed" (e.g., [#6933](https://github.com/QwenLM/qwen-code/issues/6933), [#6935](https://github.com/QwenLM/qwen-code/issues/6935), [#6938](https://github.com/QwenLM/qwen-code/issues/6938)) indicate that E2E tests are flaky, disrupting the development pipeline and requiring constant remediation.
- **Inconsistent Model Behavior**: Users are reporting issues where the agent stops mid-response ([#6990](https://github.com/QwenLM/qwen-code/issues/6990)) or where the output language is incorrectly enforced ([#6943](https://github.com/QwenLM/qwen-code/issues/6943)), indicating problems with model prompt adherence and fallback logic.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-16

## 1. Today's Highlights
No new releases were published in the last 24 hours. The community focused on **two critical UX bugs** in the approval and goal-persistence systems: silent auto-rejection of denied shell commands (#4375) and goal continuation skipping user confirmation (#4374). A **key fix** for inline task text in skill invocations was merged (#4372), resolving a long-standing frustration. Additionally, a proposal to allow scrolling through reasoning output while an approval dialog is active (#4371) gathered interest.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (all 5 items available)

1. **[#4375] Suggestion: show explanation when session denied cache auto-rejects an approval**  
   *Author: Angel-Hair* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4375)  
   In YOLO mode, after a user rejects `exec_shell "git push"`, subsequent identical calls are silently auto-rejected with a generic “denied by user” message. The user proposes showing *why* the tool is blocked (the original rejection reason). This would greatly improve transparency and debugging. Community reaction: 1 comment, supportive.

2. **[#4374] goal continuation skips user confirmation gate**  
   *Author: Angel-Hair* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4374)  
   After the model asks the user a question (e.g., “does this outline look good?”), the `/goal` loop injects “continue making progress” prompts, ignoring the user’s intended pause. The `blocked` status description discourages using it for ordinary confirmations. A serious UX flaw that breaks interactive workflows.

3. **[#4373] Bug: remember tool missing from DEFAULT_ACTIVE_NATIVE_TOOLS whitelist**  
   *Author: Angel-Hair* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4373)  
   The `remember` tool (user-memory auto-capture) is correctly registered when memory is enabled, but is then hidden from the model-visible catalog by `apply_native_tool_deferral`. The model can only discover it via `tool_search`. This breaks reliable memory writes. Needs a whitelist fix.

4. **[#3915 – CLOSED] ux(skills): `$skill <task>` and `/<skill> <task>` silently discard the task text**  
   *Author: Hmbown* | [Issue](https://github.com/Hmbown/CodeWhale/issues/3915)  
   Invoking a skill inline (e.g., `$debug why does auth fail`) would activate the skill but throw away the task text. The fix was merged in PR #4372 (see below). This was a highly voted enhancement/bug.

5. **[#4371] Feature Request: Allow scrolling/reviewing reasoning output while approval dialog is active (TUI)**  
   *Author: amuthantamil* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4371)  
   When the agent presents a plan and an approval dialog, the user cannot scroll back to review the chain-of-thought reasoning. This forces users to approve or reject without full context. A clear UX improvement for complex approvals.

## 4. Key PR Progress (both available)

1. **[#4372 – CLOSED] fix(skills): preserve inline task text**  
   *Author: nightt5879* | [PR](https://github.com/Hmbown/CodeWhale/pull/4372)  
   Fixes the long-standing issue (#3915) where `$skill do X` and `/skill <skill> do X` would discard the “do X” part. Now inline task text is dispatched in the same turn, while bare `$<skill>` remains armed for the next message. The `/skill install` management command is preserved.

2. **[#4370 – OPEN] feat: add TelecomJS provider support with configuration and catalog integration**  
   *Author: baendlorel* | [PR](https://github.com/Hmbown/CodeWhale/pull/4370)  
   After registering TelecomJS as a custom provider, the model picker only shows one model instead of all endpoints from `/v1/models`. Root cause: `refresh_catalog_cache`/`fetch_catalog_delta` is never invoked in production. This PR adds proper catalog caching for custom providers.

## 5. Feature Request Trends
From the last 24 hours, the community clearly desires:
- **Transparent approval flow**: Show why previous rejections cause auto‑denies (#4375), and allow reviewing reasoning before dismissing a dialog (#4371).
- **Smarter goal persistence**: The `/goal` loop should respect user confirmation gates and not treat ordinary questions as blockers (#4374).
- **Reliable memory tools**: The `remember` tool must be visible to the model without needing `tool_search` (#4373).
- **Skill usability**: Fixing inline task text discard (#3915, now fixed) was a recurring ask.

## 6. Developer Pain Points
- **Silent auto-reject confusion**: Developer workflows are disrupted when approval dialogs vanish and re-invocations fail without explanation (#4375).
- **Goal loop overrides user input**: Users hate that `/goal` continues injecting progress prompts even when they intended to pause for feedback (#4374).
- **Hidden tools**: Essential memory features are invisible to the model, forcing workarounds (#4373).
- **Incomplete model catalogs for custom providers**: Users integrating third-party endpoints get only partial model lists (#4370).
- **Approval dialog lock‑in**: Inability to scroll reasoning while a dialog is active slows down approval decisions (#4371).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*