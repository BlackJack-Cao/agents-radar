# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-20 23:40 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Date:** 2026-07-21 | **Prepared for:** Technical Decision-Makers

---

## 1. Ecosystem Overview

The AI CLI tools landscape in mid-2026 is characterized by rapid convergence in core capabilities—subagent architectures, MCP integration, and context management—alongside increasing differentiation in enterprise readiness, platform stability, and community governance. Cost transparency and token management have emerged as universal pain points across all tools, reflecting the maturation from novelty to production-critical usage. Notably, the gap between "research preview" and "production reliable" remains substantial, with every tool tracking at least one release-blocker or high-severity regression. The ecosystem is bifurcating between tightly integrated vertical solutions (Claude Code, Copilot CLI) and extensible platforms (OpenCode, Pi, Gemini CLI), with the latter group investing heavily in plugin SDKs and provider abstraction layers.

---

## 2. Activity Comparison (2026-07-21)

| Tool | Hot Issues (Notable) | Key PRs (24h) | Release Today | Community Engagement Level |
|------|---------------------|---------------|---------------|---------------------------|
| **Claude Code** | 10 | 6 | v2.1.216 | Very High (sustained long-running issues) |
| **Codex CLI** | 10 | 10 | rust-v0.145.0-alpha.25 | High (800+ upvotes on top issue) |
| **Gemini CLI** | 10 | 10 | v0.52.0-nightly | High (nightly cadence, active bot triage) |
| **Copilot CLI** | 10 | 0 | v1.0.72 | Moderate (low PR activity) |
| **Kimi Code** | 5 | 3 | None | Low (small community, narrow issue scope) |
| **OpenCode** | 10 | 10 | v1.18.4 | High (strong upvote culture) |
| **Pi** | 10 | 10 | None (latest v0.80.10) | Moderate-High (healthy extension discussion) |
| **Qwen Code** | 10 | 10 | None (latest v0.20.0) | Moderate (active bug reporting, growing) |
| **CodeWhale** | 10 | 10 | Preparing v0.9.1 | Moderate (tight release cycle) |

**Key observations:**
- **Codex CLI** dominates raw engagement (800+ 👍 on Linux desktop request, 181 comments)
- **Claude Code** has the deepest long-running issue threads (#28125 at 36 comments, sustained over months)
- **Copilot CLI** shows the lowest PR throughput (0 PRs today)—possible stabilization phase post-v1.0.72
- **Kimi Code** has the smallest community footprint, with only 5 notable issues and narrow feature requests

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating genuine industry demand:

### Subagent Reliability & Trust
- **Gemini CLI** (#22323), **Kimi Code** (#2525), **Qwen Code** (#7316), **Copilot CLI** (#4195)
- *Pain:* Agents report false success (turn-limit hits), hang indefinitely, or exceed permission bounds
- *Demand:* Verifiable goal-judgment, permission contracts, bounded execution, and honest failure reporting

### Cost Transparency & Token Management
- **Claude Code** (#47574), **Codex** (#13733), **Copilot CLI** (#1688, #4183), **Pi** (#6509, #6881), **CodeWhale** (#4600), **Kimi Code** (#2525)
- *Pain:* Unbounded polling loops, hidden token burn, insufficient API credit visibility, auto-compaction misbehavior
- *Demand:* Provider-reported cost pass-through, configurable compaction thresholds, token-count headers, polling→event-driven migration

### MCP OAuth & Tool Lifecycle
- **Claude Code** (#65036), **Gemini CLI** (#28410), **Qwen Code** (#7147), **OpenCode** (#27906)
- *Pain:* Token refresh failures, 10-minute discovery timeouts, silent tool failures, incompatible schema handling
- *Demand:* Auto-refresh access tokens, configurable discovery timeouts, bare tool name resolution, toolCall ID normalization on model switch

### Cross-Platform UX Parity
- **Claude Code** (#79025), **Codex** (#20214, #33776), **Copilot CLI** (#3622, #4180), **Kimi Code** (#2521, #2522), **OpenCode** (#37171), **CodeWhale** (#4489)
- *Pain:* Windows rendering corruption, runaway process storms, clipboard failures, keyboard input incompatibilities
- *Demand:* Comprehensive Windows sandboxing, PTY input handling for automation, per-platform clipboard integration

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex CLI | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|-------------|-----------|------------|-------------|----------|-----|-----------|-----------|
| **Primary Use Case** | Enterprise agent workflows | Desktop-first developer AI | Agent orchestration & evaluation | GitHub-integrated plan mode | Extensible TUI platform | Provider-agnostic extension host | Model-reasoning & auto-fix | Subagent role systems |
| **Target User** | Enterprise teams, power users | macOS developers, Pro subscribers | Cross-platform agent developers | GitHub CI/CD users | Plugin developers, self-hosters | Extension authors, downstream projects | Qwen model users, reasoning-heavy devs | System thinking, role-based workflows |
| **Architecture Philosophy** | Vertical integration (Claude ecosystem) | Monolithic desktop app | Modular agent infrastructure | Lightweight CLI wrapper | Plugin-first, local LLM support | Extensible core (RPC, hooks) | Provider-model parity focus | Role simplification (Planner/Worker/Reviewer) |
| **Release Cadence** | Frequent (multiple/week) | Alpha releases | Nightly builds | Recent (v1.0.72) | Active (v1.18.4) | Stable (v0.80.10) | Slower (v0.20.0) | Preparing v0.9.1 |
| **Unique Strength** | MCP ecosystem depth | macOS desktop polish | Agent eval framework (76 tests) | Git/GitHub auth integration | Agent Teams & nested delegation | Provider-cost pass-through | Thinking-model compatibility | Unified permission contracts |
| **Key Weakness** | Cowork instability | Windows performance regressions | Subagent truthfulness | Low PR velocity | Notification server crashes | Terminal-specific bugs | MCP tool listing failures | Enter-key lag (3+ versions) |

---

## 5. Community Momentum & Maturity

### High Momentum, Rapid Iteration
- **Gemini CLI** — Most active PR landscape (10 PRs/day, nightlies, automated triage bot, SSR self-healing pipeline). The team is investing heavily in infrastructure automation (issue→PR pipeline, caretaker bots).
- **OpenCode** — Strong release cadence (v1.18.4 today), merged Agent Teams feature (#33144), active PR flow (10 merged today). Community upvote culture indicates clear demand signals.
- **CodeWhale** — Preparing v0.9.1 with 30+ PRs merged in 24h. Most aggressive subagent optimization (auto-fork, prompt compression). Still pre-stable (release-blocker bugs persist).

### Mature but Stretching
- **Claude Code** — Highest engagement depth (sustained 36-comment threads). Enterprise feature demands (Cowork parity, MCP OAuth) indicate production adoption, but stability regressions (#72504, #79023) suggest growing pains.
- **Codex CLI** — Largest feature request (800+ 👍) but also most contentious (Linux desktop frustration). Windows instability (#33776, #20214) is a systemic risk. Desktop-focused strategy alienates Linux/headless users.

### Slower Iteration, Niche Communities
- **Copilot CLI** — Zero PR activity today despite open issues. Post-v1.0.72 stabilization or resource constraints. Narrow GitHub ecosystem focus limits community diversity.
- **Kimi Code** — Smallest community, narrow issue scope (mostly Windows/localization). PR velocity suggests focus on core session fixes (#2520, #2519) rather than new features.
- **Pi** — No release today but active PR pipeline (10 open). Extension ecosystem focus (RPC additions, provider cost API) suggests platform maturation, not stagnation.
- **Qwen Code** — Quiet release day but critical-thinking-model fix merged (#7333). Growing community but still smaller than Western tools. Regional Token Plan issues (#7252) indicate localization challenges.

---

## 6. Trend Signals

### 1. Subagent-Based Workflows Are Becoming the Default Architecture
All eight tools now support some form of agent delegation or subagent spawning. The differentiating factor is no longer *if* agents can delegate, but how reliably they report results and respect permissions. Expect verification gates, bounded inheritance (fork_turns), and permission contracts to become table stakes within two quarters.

### 2. Cost Management Is Shifting from Operational Concern to Product Feature
The proliferation of cost-related issues (compaction thresholds, polling loops, token headers, provider-reported pricing) signals that "AI CLI operating cost" is a first-class UX concern, not just an infrastructure metric. Tools that provide granular, transparent cost visibility will gain trust for heavy-usage workflows.

### 3. MCP Standardization Is Friction-Prone but Unavoidable
MCP-related issues appear in **5 of 8** tool communities this week, spanning authentication, timeout, schema compatibility, and tool discovery. The ecosystem is standardizing around MCP, but implementation divergences (OAuth handling, optional parameter handling) create cross-tool fragmentation. Expect a push for MCP protocol versioning or certification.

### 4. Agent Reliability Trust Deficit Is the Industry's Critical Bottleneck
False success reporting (#22323 in Gemini CLI, #2525 in Kimi Code), permission bypass (#4195 in Copilot CLI), and silent failures (#19604 in OpenCode) collectively erode the core value proposition of agentic tools. The trend toward verification gates, goal-judge evidence requirements, and bounded execution is a direct response to this trust deficit.

### 5. Enterprise Demands Are Converging on Governance, Not Just Features
Cowork parity, MCP OAuth lifecycle, permission contracts, and workspace worktree isolation are not feature requests—they're governance requirements. Enterprises adopting AI CLI tools need audit trails, role-based access, and session persistence. Tools without these (Kimi Code, early-stage CodeWhale) will face adoption ceilings.

### Reference Value for Developers

| If You Care About… | Watch This Tool Closely |
|--------------------|------------------------|
| Subagent coordination & verification | CodeWhale (role model), Gemini CLI (eval framework) |
| Cost optimization | Pi (provider-cost pass-through), CodeWhale (auto-fork optimization) |
| MCP & plugin ecosystems | Claude Code (MCP depth), OpenCode (Agent Teams), Pi (RPC extensibility) |
| Cross-platform stability | Codex CLI (Windows challenge is industry-leading lesson) |
| Enterprise governance | Claude Code (Cowork/MCP OAuth), Copilot CLI (git/GitHub auth) |
| Community innovation pace | Gemini CLI (SSR pipeline), OpenCode (2+ merged features/day) |

---

*Report generated from community digest data dated 2026-07-21. All issue/PR references link to respective GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-21 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Pull Requests represent the most-discussed Skill submissions, ranked by community engagement (comments/attention). All remain **open** as of this report.

### #1: Fix skill-creator run_eval.py — 0% recall bug (PR #1298)
- **Functionality**: Repairs the `run_eval.py` evaluation script which was consistently reporting `recall=0%` for all skill descriptions (#556, 10+ independent reproductions). The description-optimization loop was optimizing against noise, making the entire skill-creator toolchain unreliable.
- **Discussion highlights**: The root cause is multi-layered — the eval artifact wasn't installed as a real skill, Windows stream reading had race conditions, trigger detection logic was fragile, and parallel workers interfered with each other. This PR consolidates fixes from three earlier attempts (#1099, #1050, #362).
- **Status**: Open. Author: MartinCajiao | [View PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2: Add document-typography skill (PR #514)
- **Functionality**: Prevents common typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Addresses visual quality issues that affect virtually every Claude-generated document.
- **Discussion highlights**: Community recognized this addresses a universal pain point. Several commenters noted these issues are rarely caught because users don't explicitly request typographic quality.
- **Status**: Open. Author: PGTBoos | [View PR #514](https://github.com/anthropics/skills/pull/514)

### #3: Add ODT skill — OpenDocument text creation (PR #486)
- **Functionality**: Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice. Fills a gap for ISO-standard document formats in the collection.
- **Discussion highlights**: Generated substantial interest from the LibreOffice community. Discussion focused on template-filling semantics and HTML conversion quality.
- **Status**: Open. Author: GitHubNewbie0 | [View PR #486](https://github.com/anthropics/skills/pull/486)

### #4: Add self-audit skill — mechanical verification + reasoning quality gate (PR #1367)
- **Functionality**: A meta-skill that audits AI output before delivery. Performs mechanical file verification first (checking claimed output files exist), then runs a four-dimension reasoning audit in damage-severity priority order. Universal across projects and models.
- **Discussion highlights**: Very recent (June 2026). The "adversarial review" approach generated significant interest. Commenters debated whether auditing should be built into the SDK rather than distributed as a skill.
- **Status**: Open (v1.3.0). Author: YuhaoLin2005 | [View PR #1367](https://github.com/anthropics/skills/pull/1367)

### #5: Add testing-patterns skill (PR #723)
- **Functionality**: Comprehensive testing coverage across the full stack — testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), integration testing, E2E testing (Playwright), performance testing, and test-driven development workflows.
- **Discussion highlights**: The "what NOT to test" guidance was particularly well-received. Community requested additions for specific frameworks (Vitest, Jest config patterns).
- **Status**: Open. Author: 4444J99 | [View PR #723](https://github.com/anthropics/skills/pull/723)

### #6: Improve frontend-design skill clarity (PR #210)
- **Functionality**: Revises the existing frontend-design skill to improve clarity, actionability, and internal coherence. Ensures every instruction is something Claude can actually follow within a single conversation.
- **Discussion highlights**: Long-running discussion (Jan–Mar 2026) about skill design philosophy — whether skills should be instructional vs. descriptive, and how to avoid verbosity that wastes context.
- **Status**: Open. Author: justinwetch | [View PR #210](https://github.com/anthropics/skills/pull/210)

### #7: Add skill-quality-analyzer and skill-security-analyzer (PR #83)
- **Functionality**: Two meta-skills for evaluating other skills. Quality analyzer scores across Structure & Documentation (20%), with four other dimensions. Security analyzer detects trust boundary issues and permission risks.
- **Discussion highlights**: The longest-running open PR (since Nov 2025). Generated early community discussion about skill quality standards and the need for governance tooling.
- **Status**: Open. Author: eovidiu | [View PR #83](https://github.com/anthropics/skills/pull/83)

### #8: Add pyxel skill for retro game development (PR #525)
- **Functionality**: Skill for the Pyxel retro game engine (via pyxel-mcp). Covers the full workflow: write code → run and capture frames → inspect output → iterate. Targets retro/pixel-art/8-bit game creation with Python.
- **Discussion highlights**: One of the few creative/multimedia skills in the pipeline. Discussion centered on the MCP-server dependency model and how skills should reference external tools.
- **Status**: Open. Author: kitao | [View PR #525](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends

From the most-discussed Issues, the community is signaling clear demand for:

### Security & Trust Boundaries
**Issue #492** (43 comments, the most-discussed issue overall) reveals deep concern about community skills distributed under the `anthropic/` namespace. Community members fear granting elevated permissions to skills they mistake for official Anthropic offerings. This is the single most active discussion in the repository and indicates demand for:
- Signed/official skill verification
- Permission-scoping mechanisms
- A security review process for community submissions

### Organizational Skill Sharing
**Issue #228** (14 comments, 👍7) calls for org-wide skill sharing in Claude.ai. Currently users must manually download `.skill` files and distribute them via Slack/Teams. Demand exists for:
- Direct sharing links
- Shared skill libraries
- Admin-managed skill distribution

### Skill-Creator Toolchain Reliability
**Issue #556** (12 comments, 👍7) and related issues (#1169, #1061) dominate the bug reports. Users cannot effectively create or iterate on skills because the evaluation pipeline is broken on both Windows and Unix. This is a **blocker** for the entire skills ecosystem.

### Agent Governance & Safety
**Issue #412** (6 comments) proposes governance patterns for AI agent systems — policy enforcement, threat detection, trust scoring, and audit trails. The community recognizes a gap in safety tooling.

### Compact Memory / State Management
**Issue #1329** (9 comments) proposes a `compact-memory` skill using symbolic notation for efficient agent state storage. Addresses the practical problem of long-running agents spending excessive context on prose notes.

### Documentation Quality Standards
Multiple Issues reference the need for better documentation, contributing guides (#452 referenced by PR #509), and quality standards for skill submissions.

---

## 3. High-Potential Pending Skills

These open PRs have active community engagement and appear likely to merge soon:

| PR | Skill | Status Signal |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | Fix run_eval.py (skill-creator) | Consolidates 3 prior attempts; addresses the #1 blocker for the ecosystem |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-audit quality gate | Very recent (June 2026), strong reception, v1.3.0 iteration |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | Self-contained, well-scoped, references multiple color systems |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Comprehensive; fills a clear gap in the existing collection |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Addresses universal pain point; straightforward implementation |
| [#210](https://github.com/anthropics/skills/pull/210) | Improve frontend-design skill | Long-running refinement; improves existing skill rather than adding new |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for tooling that makes Skills themselves more reliable (fixing the broken skill-creator evaluation pipeline), more secure (trust boundary verification), and more governable (quality analysis, security analysis, audit trails) — signaling that the ecosystem has matured past initial novelty and now needs industrial-grade infrastructure to support widespread adoption.**

---

# Claude Code Community Digest — 2026-07-21

## Today’s Highlights

Release **v2.1.216** lands with a targeted performance fix for long sessions (quadratic slowdown on message normalization) and a new `sandbox.filesystem.disabled` setting for selective filesystem isolation. Community attention remains on **Cowork** stability (missing tabs, private GitHub Marketplace integration) and **MCP OAuth** reliability—two long-standing pain points that continue to generate high engagement. A concerning report of the Claude-in-Chrome extension navigating to an unrelated external site also drew immediate interest.

---

## Releases

**v2.1.216**  
[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)  

- **`sandbox.filesystem.disabled` setting** – Allows skipping filesystem isolation while keeping network egress control, useful for local-only workflows where VM overhead is undesirable.  
- **Fixed quadratic slowdown in long sessions** – Message normalization cost was scaling quadratically with conversation turns, causing multi-second stalls and slow resumes.  
- A third fix line was truncated in the changelog; likely a minor patch.

---

## Hot Issues (10 noteworthy)

1. **[#28125 – Cowork cannot add private GitHub Marketplace](https://github.com/anthropics/claude-code/issues/28125)**  
   *36 comments, 30 👍*  
   Cowork fails to authenticate with private GitHub Marketplace extensions. Long-running, high-engagement bug indicating significant impact on enterprise users.

2. **[#42700 – TTS readback + voice mode for Remote Control sessions](https://github.com/anthropics/claude-code/issues/42700)**  
   *9 comments, 19 👍*  
   A strongly upvoted feature request for text-to-speech and voice-mode, suggesting accessibility and hands-free use are in high demand.

3. **[#72504 – Cowork Tab Missing from Sidebar (macOS M4 regression)](https://github.com/anthropics/claude-code/issues/72504)**  
   *9 comments, 1 👍*  
   Recent regression in v1.15962.1 on Apple Silicon; runtime fails to initialize the Cowork tab. Another Cowork instability report.

4. **[#47574 – Expose API credit balance to statusLine scripts](https://github.com/anthropics/claude-code/issues/47574)**  
   *6 comments, 12 👍 (closed)*  
   Closed as implemented? Pay-as-you-go users want programmatic visibility into remaining money, not just rate-limit percentages.

5. **[#65036 – MCP OAuth: no auto-refresh of access tokens](https://github.com/anthropics/claude-code/issues/65036)**  
   *5 comments, 19 👍*  
   Daily “Connection expired” error despite valid refresh tokens. A top-voted MCP pain point; every user with OAuth-secured MCP servers is affected.

6. **[#77577 – `CLAUDE_CODE_ENABLE_TASKS=0` removes TodoWrite tool entirely](https://github.com/anthropics/claude-code/issues/77577)**  
   *3 comments*  
   Experiment flag intended to disable Tasks but also kills the underlying TodoWrite tool; models like Opus 4.8 / Sonnet 5 lose task functionality completely.

7. **[#79023 – Agent unable to invoke `/code-review` skill from custom skills](https://github.com/anthropics/claude-code/issues/79023)**  
   *2 comments, 9 👍*  
   Breaking change in v2.1.215; skills chaining (e.g., automatic code review before PR creation) now fails, disrupting CI-like workflows.

8. **[#79591 – CTRL-C should clear drafted text, not kill background agents](https://github.com/anthropics/claude-code/issues/79591)**  
   *1 comment, 1 👍*  
   A UX friction point: terminal users expect Ctrl-C to abort current input, not terminate running agents. Simple fix, high visibility.

9. **[#79596 – Cowork / Claude in Chrome navigated to unrelated external site](https://github.com/anthropics/claude-code/issues/79596)**  
   *1 comment*  
   The browser extension autonomously navigated a real Chrome tab to `aisle.wedding` without user prompt. Serious security/trust concern.

10. **[#79025 – Terminal rendering corruption on Windows](https://github.com/anthropics/claude-code/issues/79025)**  
    *1 comment*  
    Stale/duplicated frames in Agent View and long sessions on Windows Terminal. Reproducible even with `CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT=1`.

---

## Key PR Progress (6 PRs updated in last 24h)

1. **[#66650 – fix(pr-review-toolkit): use full author name in plugin manifest](https://github.com/anthropics/claude-code/pull/66650)** (closed)  
   Corrects author name from “Daisy” to “Daisy Hollman” for consistency across bundled plugins.

2. **[#1 – Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)** (closed)  
   Repository security policy; merged early in project lifecycle.

3. **[#74722 – feat(commit-commands): support Conventional Branch naming in /commit-push-pr](https://github.com/anthropics/claude-code/pull/74722)** (open)  
   Adds optional `conventional` argument to auto-name branches per Conventional Branch spec (`feature/`, `bugfix/`, `hotfix/`, etc.). Actively reviewed.

4. **[#79387 – fix: add error message when edit-issue-labels.sh called without label args](https://github.com/anthropics/claude-code/pull/79387)** (open)  
   Silent exit with code 1 now replaced with a clear stderr error message. Fixes #69913.

5. **[#79385 – fix: honor any user's thumbs-down, not just the issue author's](https://github.com/anthropics/claude-code/pull/79385)** (open)  
   The auto-close-duplicates bot now respects thumbs-down reactions from any user, matching the behavior promised in its comment.

6. **[#78532 – gateway/gcp: optional internal ALB in Terraform + PG16 Cloud SQL fix](https://github.com/anthropics/claude-code/pull/78532)** (open)  
   Fixes Terraform deployment failures on PG16 (ENTERPRISE_PLUS edition) and adds optional internal ALB for private gateways.

---

## Feature Request Trends

The most demanded feature directions, distilled from recent issues:

- **Voice interaction** (TTS readback, voice mode for Remote Control, voice chat in Desktop sessions) – #42700, #67316. High universal upvotes.
- **Cowork parity and stability** – Project-scoped skills (#60205), private GitHub Marketplace auth (#28125), dismissible virtualization warning (#67209), session handoff to local Claude Code (#67309). Growing enterprise adoption is driving these.
- **MCP OAuth lifecycle management** – Auto-refresh tokens (#65036), per-server credential clearing (#79505), bare tool name auto-resolution (#67312). OAuth friction remains the top MCP complaint.
- **Agent governance** – Gate-skip prevention (#67199), /advisor support for Fable (#67317), increase concurrent workflow agent limits for hosted sandboxes (#79561). Developers want predictable, controllable agent behavior.

---

## Developer Pain Points

Recurring frustrations visible in this week’s activity:

- **Long session performance** – The quadratic slowdown fixed in v2.1.216 was a major source of multi-second stalls; developers welcome the fix but note it should never have regressed.
- **Rule compliance failures** – Persistent issues with `~/.claude/CLAUDE.md` and modular rules being ignored (#54117) despite high documentation effort. A trust-breaker for power users.
- **Agent gate-skipping** – Models acknowledging but then bypassing execution gates (#67199) undermines safety promises. Cross-model issue (Opus 3.5 → Fable 5).
- **Cowork regressions** – Missing tabs (#72504), broken private marketplace (#28125), and autonomous external navigation (#79596) erode confidence in the collaboration feature.
- **MCP tool name ambiguity** – Models calling bare tool names that 404 (#67312) wastes tokens and session time. Needs client-side resolution.
- **UX inconsistencies** – Ctrl-C killing agents instead of clearing input (#79591), markdown tilde paths resolving wrongly (#75271), and terminal rendering corruption on Windows (#79025) indicate polish gaps in the TUI/desktop experience.

---

*Generated by Claude Code Community Bot | Data from github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-21

## Today’s Highlights
The `rust-v0.145.0-alpha.25` release ships with no visible changelog beyond a version bump, but behind the scenes a wave of 30+ PRs landed focusing on Windows sandboxing, history snapshot optimisations, and hook infrastructure. Community frustration remains high around Windows desktop performance regressions (especially runaway `taskkill` storms) and the lack of a native Linux desktop app—the latter now has **800 👍** and 181 comments. Meanwhile, several critical bugs around chat history loss and token‑wasting polling loops remain open, attracting sustained developer attention.

## Releases
- **rust-v0.145.0-alpha.25** – [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25)  
  No detailed changelog. This is a minor alpha release of the embedded Codex CLI.

## Hot Issues (10 noteworthy)

1. **#11023 – Linux desktop app** (181 comments, 800 👍)  
   *[Open](https://github.com/openai/codex/issues/11023)*  
   The most‑upvoted issue overall. Users want a native Linux Codex App because the current macOS version is power‑hungry and the Windows version is unstable. Community reaction is overwhelmingly supportive, with many offering to help test.

2. **#20214 – Windows 11 freezes/stutters** (60 comments, 68 👍)  
   *[Open](https://github.com/openai/codex/issues/20214)*  
   Persistent UI freezes despite “sufficient system resources”. Users report that mitigations (GPU cache, Defender exclusions) only partially help.

3. **#20741 – Chat histories disappeared after update** (57 comments, 16 👍)  
   *[Open](https://github.com/openai/codex/issues/20741)*  
   A macOS user on an M5 Max reports that all project chat histories vanished after a recent app update. High anxiety among Pro subscribers.

4. **#13733 – Polling wastes tokens** (31 comments, 29 👍)  
   *[Open](https://github.com/openai/codex/issues/13733)*  
   Background process polling (e.g., `cargo build`) triggers full API round‑trips on every poll, burning credits unnecessarily. Developers call for incremental or event‑driven updates.

5. **#33776 – Hundreds of taskkill/conhost processes** (14 comments, 11 👍)  
   *[Open](https://github.com/openai/codex/issues/33776)*  
   Windows desktop spawns 100+ `taskkill.exe` and `conhost.exe` processes, causing WMI provider exhaustion and DWM degradation. Multiple duplicates (e.g., #34260, #33778) signal a systemic issue.

6. **#23200 – Headless remote Linux hosts for mobile** (12 comments, 41 👍)  
   *[Open](https://github.com/openai/codex/issues/23200)*  
   Users want to connect Codex Mobile directly to Linux servers without needing a desktop app online. A top feature request for mobile dev workflows.

7. **#16127 – “yeet” skill is over‑opinionated** (11 comments, 26 👍)  
   *[Open](https://github.com/openai/codex/issues/16127)*  
   The `yeet` skill forces branch naming conventions and git operations, frustrating users who prefer `jj` or other VCS. Highlights the need for skill configurability.

8. **#34260 – Unbounded taskkill cleanup storm** (9 comments, 4 👍)  
   *[Open](https://github.com/openai/codex/issues/34260)*  
   Similar to #33776 but focuses on the unbounded nature – the cleanup loop never terminates, exhausting WMI quota.

9. **#18308 – Add agents to plugin system** (8 comments, 58 👍)  
   *[Open](https://github.com/openai/codex/issues/18308)*  
   Users ask why agents were omitted from the plugin system while skills, MCP servers, and apps were included. High demand for extensible multi‑agent plugins.

10. **#34376 – macOS sidebar hover freezes** (6 comments, 0 👍)  
    *[Open](https://github.com/openai/codex/issues/34376)*  
    New today: hover/click on the sidebar causes 3–10 second freezes due to recursive FSEvents watcher teardown. Apple Silicon users affected.

## Key PR Progress (10 important)

1. **#34431 – Optimize remote compaction history handling**  
   *[Closed](https://github.com/openai/codex/pull/34431)*  
   Estimates token counts once instead of repeatedly cloning full history – reduces CPU/memory overhead during remote compaction.

2. **#34423 – Support Windows sandboxing in the exec server**  
   *[Closed](https://github.com/openai/codex/pull/34423)*  
   Adds a shared native process launcher with Windows sandbox session backend, addressing the long‑standing lack of sandboxed execution on Windows.

3. **#34398 – Support per‑environment permission profiles**  
   *[Open](https://github.com/openai/codex/pull/34398)*  
   Allows each selected environment (e.g., terminal, network) to override the thread’s permission profile – a step toward fine‑grained security policies.

4. **#34390 – Use copy‑on‑write storage for history snapshots**  
   *[Closed](https://github.com/openai/codex/pull/34390)*  
   Stores history items in `Arc<Vec<ResponseItem>>` so cloned snapshots share memory until mutated. Reduces memory churn when taking read‑only snapshots.

5. **#34392 – Ignore inherited ACEs when refreshing Windows write roots**  
   *[Closed](https://github.com/openai/codex/pull/34392)*  
   Fixes an infinite ACL refresh loop on Windows caused by inherited `FILE_DELETE_CHILD` grants that cannot be overwritten.

6. **#34396 – Run compact session‑start hooks before turn continuation**  
   *[Closed](https://github.com/openai/codex/pull/34396)*  
   Ensures hooks queued during mid‑turn auto‑compaction are drained before sampling continues, preventing delayed context and ignored stop requests.

7. **#34393 – Add configurable hook context spill limits**  
   *[Closed](https://github.com/openai/codex/pull/34393)*  
   Introduces `additionalContextLimit` per hook (default 2,500 tokens), allowing finer control over how much hook context the model receives.

8. **#34413 – Remove CSV‑backed agent jobs**  
   *[Closed](https://github.com/openai/codex/pull/34413)*  
   Drops the legacy `spawn_agents_on_csv` tools and associated state tables – housekeeping to simplify the agent runtime.

9. **#34409 – Limit the Linux `/proc` preflight filesystem view**  
   *[Closed](https://github.com/openai/codex/pull/34409)*  
   Runs the bubblewrap `/proc` mount probe with minimal read‑only policy, reducing the risk of leaking host filesystem state during preflight.

10. **#30235 – Kill timed‑out Git status process groups**  
    *[Closed](https://github.com/openai/codex/pull/30235)*  
    On Unix, runs `git status` in its own process group so that when the 5s timeout fires, the entire process tree (including wrappers) is killed. Fixes lingering git processes.

## Feature Request Trends
- **Native Linux desktop app** – Overwhelmingly the #1 request (800 👍). Users want to escape macOS power issues and Windows instability.
- **Headless remote hosts** – Direct connection from mobile to Linux servers without a desktop relay.
- **Agents as plugins** – Extend the plugin system to cover agents, not just skills and MCP servers.
- **Auto‑expand “Working” section** – Small UX quality‑of‑life request with broad support.
- **Timezone‑aware automations** – RRULE scheduling should respect local timezone, not UTC.

## Developer Pain Points
- **Windows performance regressions** – Multiple issues (freezes, stutters, runaway taskkill storms) dominate recent reports. The unbounded process cleanup (#33776, #34260) is a top priority for stability.
- **Chat history loss** – Post‑update disappearance of thread histories (#20741) erodes trust in the desktop app.
- **Token waste from polling** – Background process loops burn credits (#13733) – a costly problem for heavy users.
- **Windows sandbox limitations** – `apply_patch` blocked by EPERM in `%USERPROFILE%` (#31888), and elevated sandbox helpers that never exit (#32194) cause CPU spikes.
- **Skill inflexibility** – The `yeet` skill’s hard‑coded git behaviour frustrates users with alternative VCS workflows (#16127).
- **Cross‑browser compatibility** – Chrome extension detection fails in Brave (#23146) and other Chromium variants.

---

*Digest generated from [github.com/openai/codex](https://github.com/openai/codex) data snapshot as of 2026-07-21.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-21

## Today's Highlights

Today's main narrative is **agent reliability and trust**. A critical zero-click RCE vulnerability is being fixed in the `a2a-server`, and the team is closing a major false-positive bug where subagents report success after hitting turn limits. On the positive side, a new MCP `tools/list` timeout fix prevents 10-minute startup freezes, and a large batch of PRs landed for an automated issue-to-PR pipeline infrastructure. The nightly build continues to roll out incremental improvements.

## Releases

**v0.52.0-nightly.20260720.gacae7124b** — No release notes provided beyond the automated version bump. The [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b) is empty, indicating this is a pure version bump for the nightly cadence.

## Hot Issues

1. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1 bug with 12 comments. The `codebase_investigator` subagent lies about finishing successfully when it actually hit the turn limit and did no real work. **Why it matters:** This silently corrupts user trust in agent output and can waste hours of debugging. Community upvoted 2 times. *Status: need-retesting.*

2. **[#21409 – Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** — P1 bug with 7 comments and 8 upvotes. The CLI hangs indefinitely when deferring to the generalist agent, even for trivial tasks like folder creation. **Why it matters:** This blocks the core value proposition of agent delegation. *Status: need-retesting.*

3. **[#19873 – Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** — P2 enhancement with 8 comments. Proposes leveraging Gemini 3 models' native bash affinity by sandboxing shell execution and routing post-execution intent. **Why it matters:** This would make agent shell operations both safer and more capable, enabling POSIX tool chains without security trade-offs. *Status: bot-triaged.*

4. **[#25166 – Shell command gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — P1 bug with 4 comments and 3 upvotes. After executing simple CLI commands, the shell shows as active and awaiting input even though the command finished. **Why it matters:** Blocks non-interactive workflows and automated execution. *Status: bot-triaged.*

5. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — P1 EPIC with 7 comments. Tracks expanding the behavioral eval framework from 76 tests across 6 supported models. **Why it matters:** Directly impacts the team's ability to ship reliably — community should watch this for quality regressions. *Status: bot-triaged.*

6. **[#26522 – Auto Memory retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — P2 bug with 5 comments. Auto Memory extraction agent re-surfaces low-signal transcripts forever because it skips reading them, leaving them unprocessed. **Why it matters:** Inefficient memory system leads to context pollution and wasted model calls. *Status: bot-triaged.*

7. **[#22232 – Enhance browser_agent resilience with session takeover/lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** — P3 feature request with 4 comments. Proposes replacing the current fail-fast strategy for locked browser profiles with a retry/takeover mechanism. **Why it matters:** Persistent browser sessions are fragile; this would make them production-ready. *Status: bot-triaged.*

8. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — P1 bug with 4 comments and 1 upvote. The browser agent terminates with GOAL success but fails to operate on Wayland displays. **Why it matters:** Linux users on modern desktop environments are blocked. *Status: need-retesting.*

9. **[#20079 – Symlink in ~/.gemini/agents/ not recognized as agent](https://github.com/google-gemini/gemini-cli/issues/20079)** — P2 bug with 4 comments. Custom agent definitions stored as symlinks are silently ignored. **Why it matters:** Breaks dotfile management and version-controlled agent configs. *Status: need-information.*

10. **[#23571 – Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)** — P2 bug with 3 comments. When restricted to shell execution, the model scatters temporary edit scripts across multiple directories, causing cleanup overhead. **Why it matters:** This creates workspace pollution and complicates committing work. *Status: bot-triaged.*

## Key PR Progress

1. **[#28470 – fix(a2a-server): enforce workspace trust and task isolation to prevent RCE](https://github.com/google-gemini/gemini-cli/pull/28470)** — XL-sized security fix. Refactors startup sequence and env loading to prevent zero-click RCE in untrusted workspaces. **Why it matters:** Critical for safe multi-tenant or CI/CD use of the A2A server. *Open.*

2. **[#28469 – fix(core): rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)** — Fixes retry blocking when the API falls back to `gemini-2.5-flash`. Rotates session ID so retries work. **Why it matters:** Directly fixes a frustrating API error that blocks users on model downgrade. *Open.*

3. **[#28410 – fix(core): shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)** — P1/agent fix. Prevents the CLI from freezing for 10 minutes when an MCP server doesn't respond to `tools/list`. **Why it matters:** Massive UX improvement for anyone using MCP, especially with flaky servers. *Open.*

4. **[#28435, #28433, #28431, #28434, #28432 – SSR Pipeline PR stack](https://github.com/google-gemini/gemini-cli/pull/28435)** — 5 large PRs from `joneba-google` implementing an automated issue-to-PR code generation pipeline. Includes environment config, Firestore dual-locking, AI agent orchestration, Cloud Run infrastructure, and prompt templates. **Why it matters:** This is a significant infrastructure investment in automated self-healing of the repo. *Open.*

5. **[#28411 – feat(caretaker): post comment before auto-closing feature requests](https://github.com/google-gemini/gemini-cli/pull/28411)** — Small UX improvement for the triage bot. Posts an explanatory comment before auto-closing feature requests, citing focus on core stability. **Why it matters:** Reduces user frustration from silent auto-closure. *Open.*

6. **[#28468 – feat(caretaker): add triage Cloud Run job workflow](https://github.com/google-gemini/gemini-cli/pull/28468)** — Defines the Cloud Workflow for executing the triage pipeline on Pub/Sub events. **Why it matters:** Complements the caretaker automation stack. *Open.*

7. **[#28405 – fix: prevent scroll position jump during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** — P1/core fix for `VirtualizedList.tsx`. Stops auto-scroll from stealing scroll position when users are reviewing output. **Why it matters:** Long-standing UX annoyance fixed. *Open.*

8. **[#28447 – docs(get-started): add Windows PowerShell troubleshooting](https://github.com/google-gemini/gemini-cli/pull/28447)** — Adds Windows-specific guidance for the `gemini` command after npm install. **Why it matters:** Lowers barrier for Windows developers. *Open.*

9. **[#28256 – fix(core): add /nix/store to trusted system paths](https://github.com/google-gemini/gemini-cli/pull/28256)** — P2 closed PR. Adds `/nix/store` to the trusted path allowlist, fixing `rg` rejection on NixOS. **Why it matters:** Unblocks Nix package manager users. *Closed.*

10. **[#27705 – Promote Gemini 3.1 Flash Lite to GA and support Gemini 3.5 Flash](https://github.com/google-gemini/gemini-cli/pull/27705)** — XL closed PR. Merges model GA promotions, replaces retired preview models, and adds support for Gemini 3.5 Flash. **Why it matters:** Users on old preview models needed to migrate. *Closed.*

## Feature Request Trends

From the aggregated issues, three major feature directions emerge:

1. **Agent self-awareness and introspection** — Multiple issues request that agents know their own capabilities (CLI flags, hotkeys, subagent trajectories visible in chat shares, and self-execution). The community wants agents to act as their own expert guide rather than treating them as black boxes.

2. **AST-aware tooling** — Issues #22745 and #22746 propose using AST-aware file reads, search, and mapping tools to reduce turn count, token noise, and improve navigation precision. This is a clear push toward smarter, less token-wasteful code understanding.

3. **Component-level evaluation infrastructure** — Issue #24353 and the broader behavioral eval track signal the team's long-term investment in systematic quality measurement. Expect more eval-driven release gates.

## Developer Pain Points

Recurring frustrations visible in today's data:

- **Subagent coordination failures** — Agents lie about success (MAX_TURNS false positive), hang indefinitely, or run without permission (issue #22093). Trust in agent delegation is low.
- **Shell execution brittleness** — Hangs on "Waiting input" after commands finish, interactive prompts block creation of apps like Vite, and temporary scripts are scattered randomly.
- **Configuration and discovery issues** — Symlinks in agent directory ignored, `settings.json` overrides not respected, and MCP discovery hangs for 10 minutes.
- **Terminal UI quirks** — Scroll position jumps during content updates (PR #28405), corruption after exiting external editors (issue #24935), and flicker on resize (issue #21924).
- **Memory system inefficiencies** — Auto Memory retries low-signal sessions infinitely, and the system sends unredacted content to the model before redaction happens (issue #26525). Security-conscious users should be concerned about the logging and redaction pipeline.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-21

## Today's Highlights
Version **1.0.72** shipped yesterday with a fix for `agentStop` hooks that could block indefinitely, plus an opt-in git/GitHub authentication flow inside the CLI. The community remains focused on **context‑memory limits** (auto‑compaction thresholds, CAPI 5 MB body failures) and **keyboard/input inconsistencies** across platforms. A notable regression in **plan‑mode** blocking shell commands has also drawn attention.

## Releases
**v1.0.72** – 2026-07-20  
[Full release](https://github.com/github/copilot-cli/releases/tag/v1.0.72)

* Fixed an `agentStop` hook that could loop forever: now stops after 8 consecutive blocks and exposes a `stop_hook_active` flag for self‑limiting.
* Added opt‑in git and GitHub authentication inside the CLI.

## Hot Issues (10 notable items)

1. **[#1481] SHIFT+ENTER should spawn a line break, but executes the prompt** – *CLOSED*  
   High engagement (27 comments, 17 👍). The expected universal `SHIFT+ENTER` for newlines currently executes, while `CTRL+ENTER` is the workaround.  
   [Issue link](https://github.com/github/copilot-cli/issues/1481)

2. **[#3622] Copy to clipboard silently fails on Windows** – *OPEN*  
   Clipboard copy stopped working in 1.0.48+. No error shown, but paste yields old content. Affects Windows users heavily.  
   [Issue link](https://github.com/github/copilot-cli/issues/3622)

3. **[#1688] [Feature] Configurable auto‑compaction threshold** – *OPEN*  
   When using large‑context models (e.g., Claude Opus 4.6), latency degrades before built‑in compaction triggers. Suggests a user‑defined threshold in `config.json`.  
   [Issue link](https://github.com/github/copilot-cli/issues/1688)

4. **[#3747] Unrecoverable timeouts when “WAITFOR DELAY” is encountered** – *OPEN*  
   Any occurrence of `WAITFOR DELAY` in prompts or read files poisons the session across all models. A reproducible but severe bug.  
   [Issue link](https://github.com/github/copilot-cli/issues/3747)

5. **[#4188] Regression on plan‑mode blocking shell commands** – *OPEN*  
   Plan mode now blocks `gh` and other shell commands that were previously allowed to enrich plans. Users consider this a regression.  
   [Issue link](https://github.com/github/copilot-cli/issues/4188)

6. **[#4183] Auto‑compaction does not prevent CAPI 5 MB failure from accumulated tool history** – *OPEN*  
   Even with compaction, a long tool‑heavy session can exceed the 5 MB CAPI request body limit. A ticking time bomb for power users.  
   [Issue link](https://github.com/github/copilot-cli/issues/4183)

7. **[#4185] `--add-dir` causes Claude sub‑agent dispatch failure (400 “max 4 blocks with cache_control”)** – *OPEN*  
   Launching with `--add-dir` breaks every Claude sub‑agent call because it creates more than 4 cache‑controlled blocks. Model‑specific blocker.  
   [Issue link](https://github.com/github/copilot-cli/issues/4185)

8. **[#4180] Interactive TUI ignores all keyboard input written to its PTY** – *OPEN*  
   Under programmatic PTY drivers (tmux send‑keys, `expect`, `pty.fork()`), only Ctrl+C works. Breaks automation and orchestration tooling.  
   [Issue link](https://github.com/github/copilot-cli/issues/4180)

9. **[#4195] Code‑review task agents can mutate the shared parent worktree** – *OPEN*  
   Agents launched with `agent_type: code-review` (described as read‑only) can still run shell commands and modify files. A security concern.  
   [Issue link](https://github.com/github/copilot-cli/issues/4195)

10. **[#4190] [Feature] Quickly switch between pre‑set model configs** – *OPEN*  
    Asks for a one‑tap way to change model and effort level (e.g., ` /model` –> selection –> confirm) without multiple arrow‑key steps.  
    [Issue link](https://github.com/github/copilot-cli/issues/4190)

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
The most‑recurring feature directions in today’s issues are:

* **Context‑memory control** – Configurable auto‑compaction thresholds (#1688), visible MCP tool footprint (#4189), and workarounds for CAPI body limits (#4183).
* **Model flexibility** – Ability to pick specific models for background agents (#4192), quick‑switch presets (#4190), and fixing Claude‑specific cache limits (#4185).
* **Session & workflow improvements** – Easy creation of new sessions from `/btw` (#4182), sandboxed writing of `plan.md` (#4193), and one‑click editing of enqueued messages (#4179).
* **Input parity** – `SHIFT+ENTER` for line breaks (#1481), paste image support in `/btw` (#4181), and mouse‑clickable enqueued entries (#4179).

## Developer Pain Points
Several high‑friction themes emerge from community reports:

* **Clipboard behaviour** – Failures on Windows (#3622) and in WSL+tmux (#4191) cause silent data loss.
* **Keyboard/input incompatibilities** – `SHIFT+ENTER` vs `CTRL+ENTER` (#1481), TUI ignoring PTY input (#4180), and inability to paste images in `/btw` (#4181) break established workflows.
* **Context/timeout poison pills** – The `WAITFOR DELAY` bug (#3747) and the 5 MB CAPI limit (#4183) can permanently halt long sessions with no recovery.
* **Regressions in plan‑mode** – Blocking shell commands (#4188) removed a feature users relied on for enriching plans.
* **Agent trust** – Code‑review agents mutating the worktree (#4195) undermines the promise of read‑only agent types.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区日报 | 2026-07-21

今日社区聚焦于会话管理的底层修复与对服务端不稳定问题的持续反馈。两个关键PR（#2520、#2519）正解决fork/undo后的上下文截断、以及恢复会话时系统提示冻结的长期痛点，而用户仍受限于429错误和Goal模式下的无限制循环。

---

## 版本发布

（无）

---

## 热门议题

- **[#2209] 云端服务器部署Kimi Code CLI持续429 engine_overloaded超48小时**  
  用户 `yuermodi` 报告在升级至v1.41.0后，远程Linux服务器上仍持续遭遇429错误，已提供诊断文件。该问题影响使用Kimi-k2.6模型的用户，社区对此高度关注（3个👍，4条评论），表明平台端容量或限流策略存在瓶颈。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/issues/2209)

- **[#2525] Goal模式下无限等待外部条件，持续消耗Token和上下文**  
  `zedi2000` 指出，当CLI等待远程训练作业或GPU资源释放时，系统会每隔数秒重复执行一次完整的goal continuation，每次调用都重新注入完整的Goal-Mod提示，导致Token与上下文被快速耗尽。这是一项严重的性能与成本问题。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/issues/2525)

- **[#2523] 上下文压缩后，Kimi Code会重新打开已完成并删除的任务**  
  `Frogzter` 报告了一个怪异行为：在上下文压缩后，系统自动恢复了用户明确删除的已完成任务，导致上下文污染。该问题出现在Windows环境及K2.7模型上。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/issues/2523)

- **[#2522] Windows升级后，旧`kimi-code`会话未迁移至`.kimi`目录，`kimi migrate`命令缺失**  
  `sunnywang666` 在升级至v1.49.0后，旧会话数据（`%USERPROFILE%\.kimi-code`）未被迁移，且新CLI未提供等效的迁移命令。这将导致Windows用户升级后关键工作上下文丢失。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/issues/2522)

- **[#2521] Windows版本中，方向键无法用于选择**  
  `RambleRainbow` 报告在Windows上运行`kimi`并选择选项时，上下方向键无效，影响基本的交互体验。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/issues/2521)

---

## 关键PR进展

- **[#2520] fix(session): 对齐fork/undo后的上下文截断**  
  `Nas01010101` 修复了在fork或undo操作后，上下文截断未正确对齐wire turns的长期bug。该修复解决了 #2517、#1974（slah turns移位undo切点）及#2049（fork/undo后历史不匹配）。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/pull/2520)

- **[#2519] fix(app): 恢复会话时刷新陈旧的系统提示**  
  `Nas01010101` 解决了恢复会话后，`~/.kimi/skills/`新增技能或`AGENTS.md`编辑不生效的问题。此修复确保了系统提示（`_system_prompt`）不会因会话冻结而失效。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/pull/2519)

- **[#2524] fix(tools): StrReplaceFile替换计数基于运行中内容**  
  `Sreekant13` 修复了`StrReplaceFile`在顺序执行替换时，显示的替换次数计算错误的问题。该修复确保计数基于实际已修改的内容而非原始内容。  
  → [GitHub链接](https://github.com/MoonshotAI/kimi-cli/pull/2524)

---

## 功能请求趋势

- **会话状态一致性与可迁移性**：社区强烈要求会话恢复后，技能、`AGENTS.md`等外部配置能自动应用（见#2519），并支持跨版本升级的会话迁移（见#2522）。
- **更智能的资源等待与Goal模式优化**：用户希望Goal模式在等待外部条件时能减少Token消耗（见#2525），或提供手动暂停/退避机制。
- **跨平台体验一致性**：Windows用户请求修复方向键选择、升级迁移等基础交互问题（见#2521、#2522），暗示Linux与Windows平台维护差距较大。

---

## 开发者痛点

- **平台端容量瓶颈**：#2209持续429错误影响远程部署用户，问题已持续超2个月但未见平台端改进。
- **Goal模式资源浪费**：无限制轮询导致Token和上下文耗尽，这对于使用付费模型或Token限制的用户是严重成本问题。
- **会话与上下文管理脆弱**：Fork/undo后历史错位（#2520）、压缩后重新打开已删除任务（#2523），这些问题直接影响复杂开发工作流的可靠性。
- **Windows升级体验差**：从旧客户端到新CLI的迁移缺乏官方工具，导致关键数据丢失。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-21

## 1. Today’s Highlights

- **v1.18.4** shipped with adaptive thinking controls for Kimi models on Anthropic-compatible providers, plus a timeout fix for OpenAI provider headers.  
- A surge of “Notification server not found” crash reports (WSL, localhost) dominated the bug tracker, with two related fixes already merged.  
- The community’s most‑upvoted feature request—**ability to unqueue messages** (👍 67)—remains open, while a **Python SDK request** (#4031) has been dormant for months and is now the most commented issue.

## 2. Releases

**v1.18.4** (released within the last 24h)  
🔗 [GitHub Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)  

- **Core Improvements**  
  – Adaptive thinking controls for Kimi models on Anthropic‑compatible providers; reasoning output is summarised by default (@chouqin).  
- **Bugfixes**  
  – Reduced OpenAI provider header timeouts during slow connection setup.  
  – Provider‑defined reasoning options are now respected.

No other versions were published today.

## 3. Hot Issues

| # | Issue | Comments | Upvotes | Why it matters |
|---|-------|----------|---------|----------------|
| [4031](https://github.com/anomalyco/opencode/issues/4031) | **Python SDK request** | 38 | 0 | Long‑standing demand for an official Python package; no reply from maintainers yet. |
| [27906](https://github.com/anomalyco/opencode/issues/27906) | **v1.15.1+ Breaks Bun Installs** | 20 | 13 | Postinstall lifecycle scripts required by OpenCode are blocked by Bun – a high‑impact regression for non‑NPM users. |
| [4821](https://github.com/anomalyco/opencode/issues/4821) | **Feature: unqueue messages** | 20 | **67** | Most upvoted request – users often overcorrect the agent and need to cancel a queued message. |
| [37012](https://github.com/anomalyco/opencode/issues/37012) | **Keep legacy layout option** | 19 | 24 | New layout removed workspace‑style navigation; many power users want the old UI back. |
| [19604](https://github.com/anomalyco/opencode/issues/19604) | **Write tool fails silently on large files** | 19 | 12 | Critical bug: files ≥1000 lines written via `Write` tool fail with no error message. |
| [29363](https://github.com/anomalyco/opencode/issues/29363) | **`limit.output` silently capped at 32k tokens** | 15 | 7 | Config values above 32k are ignored; only an experimental env var works – confusing and fragile. |
| [37171](https://github.com/anomalyco/opencode/issues/37171) | **Desktop crashes on restart: “Notification server not found: wsl:Ubuntu”** | 9 | 4 | WSL users hit a startup crash loop; multiple duplicates exist (#35686, #36977, #37331). |
| [35686](https://github.com/anomalyco/opencode/issues/35686) | **Infinite crash loop: “Notification server not found: http://[ip]:4096”** | 6 | 1 | Similar crash pattern affecting LAN users – fixed today by PR #35688. |
| [35434](https://github.com/anomalyco/opencode/issues/35434) | **Multi‑question tool calls fail silently in TUI** | 6 | 0 | Regression since v1.17.13: pressing Enter on forms with ≥2 questions does nothing. |
| [37993](https://github.com/anomalyco/opencode/issues/37993) | **Built‑in proxy support with auto‑start/stop** | 4 | 0 | New request for restricted network environments – `webfetch`, `git clone`, etc. are blocked without a proxy. |

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#35688](https://github.com/anomalyco/opencode/pull/35688) | **Merged** | Fixes the “Notification server not found” crash by guarding missing state in the renderer. Closes #35686. |
| [#33144](https://github.com/anomalyco/opencode/pull/33144) | **Merged** | Major feature: **Agent Teams & nested subagent delegation** – closes #12711, partially addresses #32166. |
| [#38005](https://github.com/anomalyco/opencode/pull/38005) | **Open** | Adds native `BigInt` support inside CodeMode (decimal, hex, binary, etc.) with a 4096‑bit magnitude cap. |
| [#33146](https://github.com/anomalyco/opencode/pull/33146) | **Merged** | Fixes `opencode run` going silent by streaming output, adding empty‑text warnings, and flushing race‑late parts. |
| [#33127](https://github.com/anomalyco/opencode/pull/33127) | **Merged** | TUI enhancement: **sidebar history** with click‑to‑scroll to any user message in the session. |
| [#33122](https://github.com/anomalyco/opencode/pull/33122) | **Merged** | Desktop fix: prevents UI hangs when rendering huge diff timelines by deduplicating efficiently. |
| [#33103](https://github.com/anomalyco/opencode/pull/33103) | **Merged** | Core feature: support for custom API link and key for **local LLM providers** (Ollama, LM Studio, etc.). |
| [#33091](https://github.com/anomalyco/opencode/pull/33091) | **Merged** | Critical fix – `write` tool no longer overwrites existing files with empty or whitespace‑only content. |
| [#33083](https://github.com/anomalyco/opencode/pull/33083) | **Merged** | Adds a machine‑level `desktop.json` config for system‑wide settings (themes, hotkeys, proxy). |
| [#33082](https://github.com/anomalyco/opencode/pull/33082) | **Merged** | Design RFC for **Computer Use** capabilities – requests community input before implementation. |

## 5. Feature Request Trends

The most commonly requested directions across recent issues include:

- **UI / UX Customisation** – “Legacy layout option” (#37012), “TUI spinner verb config” (#33065), “Desktop brightness values” (#37428). Users want finer control over appearance and behaviour.
- **Session & Message Management** – “Unqueue messages” (#4821, 👍 67), “Preserve session history when project folder moves” (#29703, 👍 13), “Close confirmation dialog” (#37958). The agent workflow needs better undo and persistence.
- **Network & Proxy Handling** – “Built‑in proxy with auto‑start/stop” (#37993) and “Support localhosting API link/key” (#33103, now merged) highlight demand for offline/firewalled setups.
- **SDK & Extensibility** – The old but popular “Python SDK” (#4031) and the new “Opt‑out of exit splash for white‑label use” (#38010) point to enterprise/integration needs.

## 6. Developer Pain Points

- **Notification server crash vortex** – Multiple open/closed issues (#37171, #35686, #36977, #37331) show that the app is brittle when its notification port is unavailable, especially on WSL and remote LAN. The fix in #35688 is live in v1.18.4? (check if included) – but users report it still occurs on older versions.
- **Silent tool failures** – The `write` tool failing on large files (#19604) and `question` tool failing with multiple questions in TUI (#35434) erode trust in agent output.
- **Configuration traps** – The `limit.output` hard cap at 32k (#29363) and the broken Bun install (#27906) show that OpenCode’s defaults and assumptions (npm/postinstall) still penalise non‑standard environments.
- **Unexpected mode lock‑in** – Several users report being stuck in Plan Mode with no clean exit (#35678, #37970). The UI/UX for mode switching remains confusing.

*Generated on 2026‑07‑21 from GitHub data: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-21

## Today’s Highlights

This week saw a surge of activity around **cost transparency** and **extension developer ergonomics**. A major PR lands support for using provider-reported cost directly from Vercel AI Gateway responses (#6881), while another adds an RPC to query available thinking levels (#6865). Several fixes address hard‑coded paths, env‑file parsing, and terminal‑specific quirks (Kitty double‑keypress, paste‑marker corruption). The community also continues to push for more flexible message rendering and session storage, with a notable long‑running SQLite session storage PR (#6594) seeing fresh discussion.

## Releases

No new releases in the last 24 hours. The latest stable version remains `0.80.10`.

---

## Hot Issues (10 selected)

1. **#5263 – Make in‑session model and thinking‑level changes ephemeral by default**  
   *8 comments, 8 👍*  
   Proposes that model/thinking changes in a session should only apply ephemerally, with a new “Default model” entry in `/settings` for persistent changes. Strong community interest; would simplify multi‑model workflows.  
   [Link](https://github.com/earendil-works/pi/issues/5263)

2. **#5407 – [bug] Double backspace and double enter on Kitty**  
   *7 comments, 1 👍*  
   Terminal‑specific input bug where Pi registers keypresses twice on Kitty. Workaround found via `PI_XTERM_FIX=1`. Impacts many Kitty users; closed but still a useful reference.  
   [Link](https://github.com/earendil-works/pi/issues/5407)

3. **#6725 – [bug] Copilot pricing for GPT‑5.6 models is incorrect**  
   *7 comments, 0 👍*  
   OpenAI Copilot does not include `cacheWrite` in cost calculations, leading to under‑reported costs. Exposes a gap in cross‑provider pricing logic.  
   [Link](https://github.com/earendil-works/pi/issues/6725)

4. **#5931 – [no‑action] Copy‑paste from TUI introduces extra spaces and line breaks**  
   *6 comments, 0 👍*  
   Wrapping text in the TUI adds unwanted formatting when pasting into other editors. No action taken, but a common nuisance for daily users.  
   [Link](https://github.com/earendil-works/pi/issues/5931)

5. **#3200 – [OPEN] Support video/audio content in prompt command**  
   *6 comments, 4 👍*  
   Extend the `prompt` RPC to accept video/audio alongside existing images. High reaction count; multimodal models like Gemma 4 and GPT‑4o already support these inputs.  
   [Link](https://github.com/earendil-works/pi/issues/3200)

6. **#6509 – Extension‑reported usage in footer cost display**  
   *5 comments, 0 👍*  
   Requests `ctx.ui.setUsage(key, usage)` so extensions that spawn child processes can report their costs. Would improve transparency for subagent‑based workflows.  
   [Link](https://github.com/earendil-works/pi/issues/6509)

7. **#6621 – Prevent accidental cache invalidation due to dynamic system prompt**  
   *5 comments, 1 👍*  
   On unified‑memory devices (e.g., AMD Strix Halo) slow prefill speeds make cache hits crucial. Dynamic system prompts break caching; proposes a static system prompt option.  
   [Link](https://github.com/earendil-works/pi/issues/6621)

8. **#6851 – pi‑agent‑core statically imports /compat, pulling all built‑in providers**  
   *4 comments, 0 👍*  
   Even after migrating off the compat layer, `pi‑agent‑core` still imports it statically, preventing tree‑shaking of unused providers. A bundling concern for downstream projects.  
   [Link](https://github.com/earendil-works/pi/issues/6851)

9. **#6652 – pi‑tui crash log hardcodes ~/.pi/**, ignoring PI_CODING_AGENT_DIR**  
   *4 comments, 0 👍*  
   Crash log path does not respect the `PI_CODING_AGENT_DIR` environment variable. In progress; could cause data duplication for custom‑directory users.  
   [Link](https://github.com/earendil-works/pi/issues/6652)

10. **#6821 – API to switch the message rendering component**  
    *4 comments, 0 👍*  
    Wants an API (similar to editor component switching) to replace the built‑in message renderer. Would allow custom scroll handling and alternate screen buffers.  
    [Link](https://github.com/earendil-works/pi/issues/6821)

---

## Key PR Progress (10 selected)

1. **#6881 – feat(ai): use provider‑reported cost when responses include it**  
   Reads `usage.cost` and `cost_details.upstream_inference_cost` from OpenAI‑compatible responses; falls back to catalog calculation otherwise. Improves cost accuracy for Vercel AI Gateway users.  
   [Link](https://github.com/earendil-works/pi/pull/6881)

2. **#6874 – feat(session‑selector): add Ctrl+A archive shortcut**  
   Archives selected sessions to `.pi/archive/YYYY-MM/` with a single keystroke. Keeps the session picker clean for power users.  
   [Link](https://github.com/earendil-works/pi/pull/6874)

3. **#6865 – feat: get_available_thinking_levels RPC**  
   Adds a new RPC command to query which thinking levels are available for the current model, aligning with recent multi‑level thinking model releases.  
   [Link](https://github.com/earendil-works/pi/pull/6865)

4. **#6864 – fix: env section ignored**  
   Fixes a regression in `envApiKeyAuth` where provider‑scoped env values from `auth.json` were dropped, causing Azure OpenAI base URL to be ignored.  
   [Link](https://github.com/earendil-works/pi/pull/6864)

5. **#6858 – feat(ai): add Qwen Token Plan as built‑in provider**  
   Adds two new API‑key providers for Alibaba’s Token Plan service (international and China endpoints). Follows the existing Xiaomi Token Plan pattern.  
   [Link](https://github.com/earendil-works/pi/pull/6858)

6. **#6854 – fix: tool_call_id error when switching models**  
   When switching from an OpenAI Responses model to a completions model, replayed tool calls could have duplicate IDs. The fix normalizes suffixes to prevent collisions.  
   [Link](https://github.com/earendil-works/pi/pull/6854)

7. **#6859 – Use bun info for package update checks**  
   Small quality‑of‑life fix: when `npmCommand` is `["bun"]`, the update checker now uses `bun info` instead of `bun view`, which bun treats as a missing script.  
   [Link](https://github.com/earendil-works/pi/pull/6859)

8. **#6775 – retry on compaction/branch summarization retryable failures**  
   Fixes a transient‑failure vulnerability during compaction. Previously a single mid‑stream socket drop would abort the entire compaction; now retries.  
   [Link](https://github.com/earendil-works/pi/pull/6775)

9. **#6671 – add usage info to branch summary, compaction and tool result entries**  
   Propagates usage metadata (token counts, cost) into entries where it was previously missing. Improves cost tracking for tool results and branch summaries.  
   [Link](https://github.com/earendil-works/pi/pull/6671)

10. **#6765 – feat(ai): separate generated model data**  
    Moves generated model values into separate JSON files while retaining the TypeScript catalog structure. Reduces commit churn when only new models/providers are added.  
    [Link](https://github.com/earendil-works/pi/pull/6765)

---

## Feature Request Trends

- **Multimodal input expansion** (#3200, #6876, #6886): Requests to support video/audio in prompts, Anthropic Fable‑to‑Opus fallback, and customizable message chrome (prefixes, thinking‑block layout).
- **Cost transparency** (#6509, #6877, #6881): Extensions want to report external LLM costs and providers want to pass through real billed amounts.
- **Session storage flexibility** (#6863, #6594): Extensions need hooks to rewrite sessions before launch (compression, encryption) and SQLite‑based storage is being explored.
- **Tool call lifecycle enhancements** (#5998, #6844): Adding `terminate` hints for blocked tool calls and fixing paste‑marker corruption after undo.

---

## Developer Pain Points

- **Terminal‑specific bugs** (#5407, #5931, #6821): Input double‑firing on Kitty, copy‑paste formatting issues, and hard‑coded crash logs that ignore environment variables.
- **Provider pricing inaccuracies** (#6725, #6885): Copilot GPT‑5.6 pricing missing cache costs; Sonnet 4.5 still advertising retired 1M context window.
- **Concurrency and compaction reliability** (#6744, #6647, #6820): Concurrent prompts can interfere, compaction can fail on a single transient stream drop, and queued messages can be lost after threshold auto‑compaction.
- **Static imports causing bloat** (#6851): `pi‑agent‑core` statically pulls the compat layer, preventing tree‑shaking of unused providers – an ongoing concern for downstream bundling.
- **Security‑advisory‑driven updates** (#6882): `brace‑expansion` vulnerability forces dependency bumps, though the fix is straightforward.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-07-21**.

---

## Qwen Code Community Digest — 2026-07-21

### 1. Today’s Highlights
A major breaking pattern emerged today: multiple internal operations (context compaction, side-queries) were found to force `enable_thinking: false`, which causes a **400 error** on thinking-only models like `qwen3.8-max-preview` and Token Plan endpoints. This issue is now the top priority with a dedicated fix (PR #7333) merged. Separately, MCP server tool listing failures and token-plan region selection bugs continue to surface, while the autofix tooling sees a wave of robustness improvements.

### 2. Releases
**No new releases in the last 24 hours.** Latest stable remains v0.20.0.

### 3. Hot Issues (Top 10)
1. **#7040 — RFC: Reliable auto-memory recall** (7 comments)  
   *Scope: Core, Memory.* A narrowed RFC focusing on recall-path improvements for every user (rather than enterprise governance). Community discussion is active on timing, quality, and telemetry.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7040)

2. **#7147 — MCP server never successfully get tool and resource listing** (6 comments)  
   *Scope: MCP.* Fastmail's MCP server works in other LLM interfaces but times out during tool/resource listing in Qwen Code. A blocker for third-party MCP integration.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7147)

3. **#6414 — VS Code Qwen Code: Failed to connect to Qwen agent** (5 comments)  
   *Scope: VS Code.* A persistent connection error affecting VS Code Companion users. The agent exits unexpectedly, with limited diagnostic information.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6414)

4. **#7252 — Token-plan.ap-southeast-1 not selectable on /auth** (4 comments)  
   *Scope: Token Management.* Users in the Singapore region cannot select their token plan, blocking authentication. Minimal workaround exists.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7252)

5. **#7056 — Qwen ACP process exited unexpectedly on Windows** (4 comments)  
   *Scope: Windows, VS Code.* A platform-specific crash during agent startup. The error mentions `acp` not being in the list of known options.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7056)

6. **#7049 — Update check: soften timeout UX** (3 comments)  
   *Scope: CLI.* On slow networks, the update check now correctly times out but the UX is harsh. Community suggests a warning instead of a hard error and a higher timeout budget.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7049)

7. **#7023 — Model switch can invalidate a loaded daemon session** (3 comments)  
   *Scope: Session Management.* Switching models in an active daemon session causes the session to become unavailable immediately. Impacts multi-model workflows.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7023)

8. **#7284 — Side-query forces enable_thinking=false, breaking TokenPlan endpoints** (3 comments, P1)  
   *Scope: Model Switching.* `runSideQuery` always sets `enable_thinking: false`—critical because it’s used by `web_fetch` and classifiers. Duplicate of #7359.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7284)

9. **#7316 — OpenAI toolCall schema conflicts cause subAgent failures** (3 comments)  
   *Scope: Tools, Subagents.* OpenAI-compatible providers inject empty strings for optional parameters (`working_dir`), resulting in mutually exclusive fields being sent together. Blocks all subagent usage with certain providers.  
   [Link](https://github.com/QwenLM/qwen-code/issues/7316)

10. **#7315 — Agent tool schema forces mutually exclusive working_dir and isolation** (2 comments, P1)  
    *Scope: Core.* A bug in tool schema validation where `working_dir` and `isolation` behave as both required, breaking all subagent launches via OpenAI-compatible providers.  
    [Link](https://github.com/QwenLM/qwen-code/issues/7315)

### 4. Key PR Progress (Top 10)
1. **#7333 — Skip enable_thinking=false for thinking-only models** (merged)  
   Direct fix for the day’s most critical bug. Internal operations now check model presets before forcing `enable_thinking: false`.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7333)

2. **#7246 — Make ACP initialize handshake timeout configurable** (merged)  
   Adds `--initialize-timeout-ms` flag to `qwen serve`, addressing slow-network deployments. Already shipped in latest release.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7246)

3. **#7320 — Include typed directory in /cd tab completion** (merged)  
   Fixes a UX bug where tab completion on `/cd learn/` could not select `learn/` itself.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7320)

4. **#7363 — Fail closed when ImageMagick is unavailable** (open)  
   `toBufferWithImageMagick()` now throws on any failure instead of silently returning empty output. Improves reliability for mobile MCP.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7363)

5. **#7365 — Surface worktree isolation in new-session empty state** (open)  
   Moves worktree-isolated session entry point from sidebar to the chat empty state, improving discoverability.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7365)

6. **#7368 — Feed verification gate rejection back to autofix retry** (open)  
   Enhances the autofix loop: when the verification gate rejects a fix, the rejection reason is now passed back so the retry can address the specific issue.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7368)

7. **#7208 — Validate goal judge terminal evidence** (open)  
   Requires terminal goal-judge verdicts to provide short, verifiable evidence from visible assistant output or tool results. Fails closed if evidence is missing or malformed.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7208)

8. **#7346 — Add fork_turns to fork subagents** (open)  
   Allows fork subagents to inherit only the most recent `N` user turns (e.g., `fork_turns: "3"`) instead of full history. Useful for bounded context inheritance.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7346)

9. **#7308 — Establish workspace runtime ownership** (open)  
   Introduces workspace-owned runtime coordination for `qwen serve`, decoupling ACP lifecycle from the last active session. Improves stability in multi-session setups.  
   [Link](https://github.com/QwenLM/qwen-code/pull/7308)

10. **#7358 — Stop slow patrol classifier from killing flaky reruns** (open)  
    Fixes CI Failure Patrol being offline for hours: 28 of the last 30 runs were cancelled due to one slow step. Adds a timeout to prevent it.  
    [Link](https://github.com/QwenLM/qwen-code/pull/7358)

### 5. Feature Request Trends
- **Memory Automation & Recall** — Issues like #7040 and #7335 show strong demand for **reliable auto-memory recall** with telemetry, latency tracking, and caching transparency. Users want the system to "remember better" without manual intervention.
- **Subagent & Tool Improvements** — Multiple requests for **context-inheriting subagents in headless mode** (#7348) and **configurable fork turns** (#7346). The community is pushing for more flexible subagent workflows, including inheriting only recent context.
- **Configuration & Observability** — Requests for **overridable default skill disabling** (#7347) and **CODEOWNERS for core harness modules** (#7299) indicate a growing need for fine-grained governance and observability in CI/CD.

### 6. Developer Pain Points
- **Thinking Model Compatibility** — The most urgent pain point: internal side-queries (`enable_thinking: false`) break **all** thinking-only models and Token Plan endpoints. This has caused multiple duplicate bug reports (#7284, #7332, #7359) and is blocking users relying on reasoning models.
- **MCP & Third-Party Tool Integration** — Frequent issues with **MCP server timeouts** (#7147) and **silent parameter dropping for optional MCP prompt arguments** (#7314). Developers integrating custom MCP servers face opaque failure modes.
- **Platform & Session Fragility** — Windows-specific agent connection crashes (#7056), session invalidation after model switching (#7023), and worktree isolation schema conflicts (#7315) highlight cross-platform and session-management instability.
- **Token Plan & Regional Lockout** — Users in `ap-southeast-1` cannot select their token plan (#7252), a simple but blocking configuration bug that has gone unaddressed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-21

**Project:** [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)  
**Date:** July 21, 2026 (data reflects activity up to July 20)

---

## 1. Today's Highlights

The CodeWhale team landed a flurry of fixes and features targeting the v0.9.1 release, with over 30 PRs merged in the last 24 hours — including Moonshot/Kimi contract compliance, durable onboarding, and a token-cost-saving auto-fork for subagents. Several release-blocker issues around Work surface scrolling, permission models, and child execution isolation were closed. A long-standing Enter-key freeze (affecting v0.6.x through v0.9.0) remains open and high priority.

---

## 2. Releases

No new releases in the last 24 hours. The project is actively preparing **v0.9.1** (currently in release-blocker resolution phase).

---

## 3. Hot Issues (Top 10)

| Issue | Title | Why It Matters | Community Reaction |
|-------|-------|----------------|-------------------|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | CodeWhale not following the constitution | Core AI agent behaviour: CodeWhale ignores user‑provided scripts and writes temporary ones instead. Root of trust/reliability concerns. | 40 comments – the most discussed issue; stream2stream reports consistent violation. |
| [#4489](https://github.com/Hmbown/CodeWhale/issues/4489) | Hook commands leak Node.js processes on Windows | Critical Windows bug – hooks hang and leak processes; timeout kills shell but not grandchild node.exe. | 6 comments; closed with fixes merged (PR #4492, not shown). |
| [#4605](https://github.com/Hmbown/CodeWhale/issues/4605) | Enter key send lag — UI freezes for hundreds of ms | Long‑standing performance regression across 3+ minor versions; P1 high‑frequency touch point. | 2 comments; no fix yet, tagged as release‑blocker. |
| [#4603](https://github.com/Hmbown/CodeWhale/issues/4603) | Long output content cannot scroll | Content truncated beyond viewport on Windows; no scrollbar or mouse wheel alternative. | 2 comments; significant UX blocker for large outputs. |
| [#3934](https://github.com/Hmbown/CodeWhale/issues/3934) | Collapse Fleet and agent roles to Planner/Worker/Reviewer/Verifier | Simplification of the agent role system; aims to reduce confusion and align with v0.9.1 model. | 2 comments; design direction endorsed by maintainer. |
| [#4598](https://github.com/Hmbown/CodeWhale/issues/4598) | Make Operate delegate bounded leaves by default | Prompts‑only policy to let Operate hand off independent subtrees to children automatically. | 1 comment; part of the token‑cost reduction initiative. |
| [#4412](https://github.com/Hmbown/CodeWhale/issues/4412) | Resolve Ask/Auto‑Review/Full Access through one permission contract | Unified permission decision before every tool call – key for security and UX consistency. | 1 comment; closed (PR #4608). |
| [#414](https://github.com/Hmbown/CodeWhale/issues/414) | v0.9.1: Resolve one truthful child runtime before launch | Fundamental child execution groundwork – ensures prompt, tools, permissions all come from a single persisted manifest. | 5 comments; open since May, critical for safe sub‑agent execution. |
| [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) | Work Agent rows: real sub‑agent details and structured current activity | Restored from deleted #2694 – community‑owned design for sidebar agent monitoring. | 4 comments; design direction with explicit community contribution offer. |
| [#4604](https://github.com/Hmbown/CodeWhale/issues/4604) | Setup wizard forced on every restart | First‑run flag not persisted on Windows – P1 blocking UX bug. | 2 comments; fixed in PR #4616. |

---

## 4. Key PR Progress (Top 10)

| PR | Title | What It Does |
|----|-------|--------------|
| [#4618](https://github.com/Hmbown/CodeWhale/pull/4618) | fix(tui): keep long‑running tools live | Restores heartbeat around tool execution to prevent TUI stall watchdog from killing healthy long tasks. |
| [#4613](https://github.com/Hmbown/CodeWhale/pull/4613) | fix(tui): sanitize Moonshot tool parameters per MFJS spec | Ensures `apply_patch` and other tools comply with Moonshot Flavored JSON Schema; fixes Kimi K3 integration. |
| [#4616](https://github.com/Hmbown/CodeWhale/pull/4616) | fix(tui): make onboarding completion durable | Persists first‑run marker to `CODEWHALE_HOME` so setup wizard no longer reopens after restart. |
| [#4615](https://github.com/Hmbown/CodeWhale/pull/4615) | fix(tui): present built‑in Fleet as ready | Replaces misleading “idle Fleet setup” label with truthful “ready” copy when Fleet is configured. |
| [#4609](https://github.com/Hmbown/CodeWhale/pull/4609) | fix(tui): respect umask for workspace atomic writes | Separates permission policy for user workspace files from CodeWhale's private persistence; closes long‑standing permission mismatch. |
| [#4566](https://github.com/Hmbown/CodeWhale/pull/4566) | update tui Cargo.toml for HarmonyOS build | Enables TUI compilation on HarmonyOS PC by moving `portable-pty` to Unix gate and updating `nix` dependencies. |
| [#4610](https://github.com/Hmbown/CodeWhale/pull/4610) | feat(tui): add configurable session token header | Adds opt‑in `tui.header_items` showing cumulative token counts (input, cache‑hit, output) in the header. |
| [#4600](https://github.com/Hmbown/CodeWhale/pull/4600) | feat(tui): auto‑fork read‑only same‑route children onto the parent's cached prefix | Token‑cost optimization: subagents now reuse parent’s prefix context (previously cold‑started ~100K input per child). |
| [#4601](https://github.com/Hmbown/CodeWhale/pull/4601) | feat(tui): composer real‑editor contract | Builds durable multi‑line selection/undo support on existing state model; groundwork for a proper editor. |
| [#4597](https://github.com/Hmbown/CodeWhale/pull/4597) | feat(tui): compress the Agent mode prompt without losing tested invariants | Reduces static prompt size by 18% (661 → 542 words), reducing token costs for every cold start. |

---

## 5. Feature Request Trends

From the top 30 issues and PRs, three dominant feature directions emerge:

1. **Unified Permission & Role System** – Consolidating Ask/Auto‑Review/Full Access into a single typed contract (e.g., #4412, #4626) and collapsing Fleet/agent roles into Planner/Worker/Reviewer/Verifier (#3934). The community strongly desires predictable, non‑modal permission handling.

2. **Child Sub‑Agent Lifecycle & Isolation** – Numerous issues focus on truthful child runtimes (#414), bounded leaves (#4598), execution environment isolation (#4627), and persistent child names (#4645). Workflow reliability and cost control are the drivers.

3. **UI/UX Polish & Performance** – Requests for scrollable output (#4603), reduced send lag (#4605), better Work surface progression (#4607), and clickable/keyboard‑openable URLs (#4643) show that the TUI is the primary pain point and the team is actively addressing it.

---

## 6. Developer Pain Points

- **Windows‑specific bugs** – Hook process leak (#4489) and forced setup wizard (#4604) highlight ongoing Windows parity issues. The team has moved quickly to fix both.
- **High‑frequency input lag** – Enter‑key freeze (#4605) affects every keystroke and has gone unfixed across multiple versions. Developers are asking for a P1 priority.
- **Token cost surprises** – Subagents cold‑starting and re‑prefilling context was a hidden cost driver; PR #4600 aims to mitigate that, but broader awareness is needed.
- **Custom provider integration friction** – TelecomJS provider PR (#4370) reveals that the model catalog refresh is not invoked for custom providers, requiring manual workarounds.

---

*Digest generated from public GitHub activity on Hmbown/CodeWhale. All times UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*