# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-14 23:34 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-07-15

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a maturation phase characterized by rapid iteration on agent architectures, growing emphasis on multi-agent collaboration, and increasing community demand for reliability and UX polish. Seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and CodeWhale—are all actively shipping, with a combined 50+ PRs and 5+ releases in the last 24 hours alone. The most pressing cross-cutting concerns include session state fragility, Windows compatibility gaps, sub-agent communication reliability, and enterprise security controls. While each tool differentiates on model integration and workflow philosophy, the ecosystem is converging on shared architectural patterns: persistent agent teams, MCP protocol adoption, and AST-aware code understanding.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Hot Issues (Tracked) | Notable PRs (Updated) | Releases Today | Community Engagement Signal |
|---|---|---|---|---|
| **Claude Code** | 10 | 9 | 2 (v2.1.208, v2.1.209) | 153👍 on top bug; 82 comments |
| **OpenAI Codex** | 10 | 10 | 1 stable + 4 alphas | 338👍 on `/undo` request; high alpha churn |
| **Gemini CLI** | 10 | 5 | 1 nightly | 8👍 on agent hang issue; moderate engagement |
| **GitHub Copilot CLI** | 10 | 0 | 1 (v1.0.71-1) | 33👍 on PDF reading; 21👍 on keychain |
| **Kimi Code** | 2 | 3 | 0 | Very small sample; 1👍 on rate-limit bug |
| **OpenCode** | 10 | 10 | 2 (v1.18.0, v1.18.1) | 29 comments on CPU regression; active UX debates |
| **Pi** | 10 | 10 | 1 (v0.80.7, breaking) | 8👍 on Bedrock provider request |
| **Qwen Code** | 10 | 10 | 2 (v0.19.10, SDK) | 23 comments on Multi-workspace RFC |
| **CodeWhale** | 10 | 10 | 0 | 35 comments on constitution compliance issue |

**Key observations:**
- **Codex and Claude Code** dominate community engagement volume, with issues accumulating hundreds of upvotes and dozens of comments.
- **Codex** has the most aggressive alpha release cadence (8 alphas in 24h in prior period; 4 today), indicating heavy internal iteration.
- **Kimi Code** has the smallest observable community footprint, though fixes shipped are high-impact (dynamic token budget, model compatibility).
- **Copilot CLI** had zero PR activity today despite a release, suggesting stable branch focus.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities:

### Multi-Agent & Distributed Collaboration
- **Cross-machine agent-to-agent protocol**: Requested in Claude Code (#28300), Codex (agent-team architecture implicit), Copilot CLI (MCP tool bridging), and Qwen Code (sub-agent communication #5239).
- **Sub-agent lifecycle control**: Claude Code (fallback models #73931, auto-archive kills #75548), Codex (forced model overrides #31814), Gemini CLI (MAX_TURNS masking #22323), OpenCode (task tool failures #36706), and Pi (extension cost tracking #6509).
- **Agent team orchestration visibility**: Multiple tools need trajectory logging, sub-agent status notifications, and shareable session reports (Claude Code #77595, Gemini CLI #22598, Codex review agent architecture).

### Windows Platform Parity
- **LSP/plugin path bugs**: Claude Code (#17643), OpenCode (unnamed), and others experience backslash URI failures.
- **Process management**: Orphaned processes (Codex #17229), shell tool hangs (Gemini CLI #25166), browser-use crashes (Codex #32040, #32683), and sandbox performance issues.
- **Auth/keychain integration**: Copilot CLI (#2165), Qwen Code (#5979), and CodeWhale (Android build #4350) all report platform-specific authentication friction.

### Session State & UX Reliability
- **Session persistence and recovery**: Claude Code (worktree reclaim #75911, auto-archive kills #75548), Codex (disappearing chats #32969), Kimi Code (forked session corruption #2496), OpenCode (context compaction, archived session browser).
- **Undo / rollback safety**: Codex (#9203, 338👍), Copilot CLI (#1675, checkpoint restore data loss), OpenCode (fork/rename/delete PRs).
- **Permission system robustness**: Copilot CLI (hooks ignored #3874, auto-approved prompts #3590), Qwen Code (MCP readOnlyHint bypass #6917), Claude Code (`--dangerously-skip-permissions` issues #66225).

### AST-Aware Code Understanding
- **Structural code navigation**: Gemini CLI (#22745, #22746) investigating AST-aware file reads, search, and mapping to reduce token waste.
- **Precise method-boundary tooling**: Multiple tools aim to move beyond line-based file reads toward function/class-level extraction.

### Cost & Quota Transparency
- **Rate-limit diagnostics**: Kimi Code (TPD miscalculation #2318), Gemini CLI (token waste concern), Codex (forced model costs), Pi (pricing/cache-write accuracy #4318).
- **Token usage accuracy**: Claude Code (4× reported rate #66124, accumulated debt #66237), OpenCode (duplicate image bytes #36524), CodeWhale (cache-write rates dropped #4318).

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Pi | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|---|
| **Primary User** | Enterprise devs, accessibility-conscious | Power users, alpha adopters | Google ecosystem, distributed teams | GitHub-native, enterprise security | Multi-provider bridge, self-hosters | Desktop-focused, UX-driven | Chinese market, VS Code deep integration |
| **Model Strategy** | Opus 4.8 main, advisor system | GPT-5.x family, rapid model migration | Gemini 3 + subagent models | GitHub Copilot models, multi-model | Provider-agnostic (OpenAI, Bedrock, xAI, etc.) | MiMo, DeepSeek, Kimi, multiple | Qwen family, MCP-first |
| **Architecture Philosophy** | Plugin/hook extensibility, remote control | Heavy alpha iteration, MCP deep integration | A2A protocol, distributed components | GitHub MCP toolset, marketplace plugins | Session-affinity, extension hooks | Desktop v2 migration, Electron-based | Single daemon multi-workspace, channel integration |
| **Key Differentiator** | Screen reader mode, advisor availability | `/undo` demand, alpha release velocity | AST-aware tools, bash sandboxing | Marketplace economy, PDF reading | Provider extensibility, sqlite storage | UI polish (fork/compact/archive), tab redesign | Multi-workspace, DingTalk integration |
| **Pain Point Profile** | Session state, Windows, subagent correctness | Model compatibility, Windows crashes | Agent hangs, subagent underutilization | Data loss (checkpoint), hook bypass | Timeout config, compact failures | CPU regressions, new layout bugs | Auth persistence, memory leaks, diff display |

**Notable differentiators:**
- **Claude Code** is the only tool shipping an accessibility-first screen reader mode (v2.1.208), setting an inclusive design standard.
- **Codex** leads in alpha iteration density (8+ alphas/day), indicating the fastest internal development cycle.
- **Copilot CLI** is uniquely building a marketplace economy (`plugins marketplace` subcommands), suggesting a platform play.
- **Pi** positions itself as the universal bridge for multiple model providers with a clean extension API.
- **Qwen Code** has the strongest Chinese ecosystem integration (DingTalk, Chinese documentation, WeChat-style support).

---

## 5. Community Momentum & Maturity

### High Maturity & Sustained Engagement
- **Claude Code**: High-quality issue reporting (82 comments on top bug), strong feature request articulation, and predictable patch cadence. The community expects sophisticated plugin/workflow support. Maturity score: **High**.
- **OpenAI Codex**: 338👍 on an 18-month-old `/undo` request demonstrates extraordinary community persistence. Extremely active issue tracker with 8+ alphas. Maturity score: **High**, but alpha branch shows instability.
- **Copilot CLI**: Well-established user base, strong Linux community (21👍 on keychain bug), but zero PR activity today suggests slowed open-source contribution. Maturity score: **Medium-High**.

### Rapidly Iterating / Growing
- **OpenCode**: 29 comments on CPU regression, 10 PRs today (all UI enhancements by single contributor), strong community backlash on v2 layout. Shows rapid adoption and vocal user base. Momentum: **Very High**.
- **Pi**: Breaking change in v0.80.7, 10 PRs today, multiple new providers (Bedrock, xAI). Active extension ecosystem. Momentum: **High**.
- **Qwen Code**: Dense PR activity (10 today), major RFC on multi-workspace, security-focused fixes. Chinese community is highly engaged. Momentum: **Very High**.

### Niche / Emerging
- **Gemini CLI**: Lower upvote counts (8👍 top issue), moderate engagement, but strong architectural vision (A2A, AST-aware). Momentum: **Medium**, likely to grow with Google ecosystem investment.
- **CodeWhale**: 35 comments on constitution issue shows passionate community, but small overall size. Active on cross-platform (BSD, Android). Momentum: **Medium**, niche positioning.
- **Kimi Code**: Smallest community footprint (only 2 issues tracked), but high-impact fixes (dynamic token budget). Momentum: **Low-Medium**.

### Community Health Indicators
- **Best issue response time**: Claude Code and Codex (patches within 24h for critical bugs).
- **Most constructive feedback**: OpenCode (clear UX critiques with alternatives proposed).
- **Most enterprise-ready feedback**: Copilot CLI (security hooks, MCP OAuth, marketplace controls).

---

## 6. Trend Signals

### From Community Feedback: Five Key Industry Trends

1. **Multi-Agent Is the New Baseline**: Every major tool is building or planning distributed agent teams (cross-machine, cross-process). The demand is shifting from single-agent coding assistants to orchestrated agent swarms. **Signal**: Claude Code (#28300, 35 comments), Codex (review agents), Gemini CLI (A2A protocol), Qwen Code (sub-agent communication). **Implication**: Tools without a multi-agent story within 6 months will be at a competitive disadvantage.

2. **Platform Parity Is a Make-or-Break Issue**: Windows-specific bugs dominate pain points across every tool. Developers on Windows—a large segment of professional devs—are consistently frustrated. **Signal**: Claude Code (#17643, 19👍), Codex (#32040, 25 comments), Copilot CLI (#2165, 21👍), Kimi Code (#2318, Windows-10 only). **Implication**: Investment in Windows QA and CI/CD yields disproportionate goodwill; Linux/Mac-only tools risk alienating half the market.

3. **Session State Management Is the Weakest Link**: Data loss (checkpoint restore, auto-archive, fork corruption), permission bypass, and state inconsistency are the most painful bugs—and they erode trust fastest. **Signal**: Codex/#9203 (338👍), Copilot/#1675, Claude/#75911, Kimi/#2496. **Implication**: Session-level undo, versioned rollback, and crash-recovery are not nice-to-haves; they are table stakes for professional adoption.

4. **Enterprise Security Controls Are Becoming Standard**: Hooks, deny rules, permission audits, and OAuth bridging are appearing in every tool's feature request pipeline. **Signal**: Copilot CLI (deny rules #3995, hooks #3874), Qwen Code (MCP readOnlyHint #6917, invocation context #6895), Claude Code (permission enforcement #66225). **Implication**: The market is moving beyond "useful" toward "safe enough for regulated environments." Tools without granular permission models will be excluded from enterprise procurement.

5. **Cost Transparency Is a Growing Anger Point**: Users are increasingly vocal about unpredictable token consumption, inaccurate billing displays, and opaque rate limits. **Signal**: Claude Code (4× reporting #66124, 1M context errors #66195), Kimi Code (TPD miscalculation #2318), Gemini CLI (token waste), CodeWhale (cache-write rates dropped #4318). **Implication**: Tools that provide real-time, accurate, per-request cost breakdowns have a UX and trust advantage. The "black box" approach to consumption is no longer acceptable.

### Reference Value for Developers

- **If building a new AI CLI tool**: Prioritize Windows compatibility, session undo/rollback, and accurate cost tracking from day one. Multi-agent is not optional.
- **If choosing a tool for a team**: Evaluate permission model depth (hooks, deny rules, OAuth) and session reliability (crash recovery, data loss history). Community issue tracker health is a leading indicator of future pain.
- **If contributing to open-source**: The highest-impact areas are Windows-specific fixes, session state improvements, and accessibility features. These are universally appreciated and relatively underinvested.
- **If migrating between tools**: Expect similar pain points around session management and sub-agent reliability regardless of vendor. The ecosystem is converging on common architectural challenges.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights Report (Data as of 2026-07-15)

### 1. Top Skills Ranking

The following Pull Requests attracted the most discussion (by comment volume) and represent the community's current focal points. All are open as of the report date.

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **skill‑creator `run_eval.py` fix** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Fixes the evaluation pipeline that reports 0% recall for every description, caused by not properly installing the eval artifact as a real skill and Windows stream‑reading issues. | Root cause analysis of the `recall=0%` bug (#556); touches parallel workers, trigger detection, and cross‑platform compatibility. | Open |
| 2 | **document‑typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan/widow lines, stranded section headers, and numbering misalignment in AI‑generated documents. | Advocates for typographic standards in Claude's output; received broad support for filling a clear quality gap. | Open |
| 3 | **pdf – case‑sensitive file references** ([#538](https://github.com/anthropics/skills/pull/538)) | Fixes 8 case mismatches (`REFERENCE.md` → `reference.md`, etc.) in `skills/pdf/SKILL.md` that break on case‑sensitive file systems. | Highlights a recurring cross‑platform issue; maintainers engaged. | Open |
| 4 | **ODT skill** ([#486](https://github.com/anthropics/skills/pull/486)) | Enables creation, filling, reading, and conversion of OpenDocument files (.odt, .ods) with template support and ODT‑to‑HTML parsing. | Strong demand for LibreOffice/ISO‑format support; discussion around scope and integration with existing doc skills. | Open |
| 5 | **frontend‑design clarity** ([#210](https://github.com/anthropics/skills/pull/210)) | Revises the existing frontend‑design skill to be more actionable and internally coherent, ensuring Claude can follow all instructions in a single conversation. | Community feedback on verbosity vs. precision; the PR itself is a response to earlier quality concerns. | Open |
| 6 | **skill‑quality‑analyzer & skill‑security‑analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta‑skills that evaluate other skills across structure, documentation, security, and best‑practice dimensions. | First meta‑skills proposal; sparked discussion about governance, trust boundaries, and the definition of a “skill”. | Open |
| 7 | **docx tracked‑change ID collision** ([#541](https://github.com/anthropics/skills/pull/541)) | Fixes OOXML corruption when adding tracked changes to documents that already contain bookmarks, caused by shared `w:id` space conflicts. | Demonstrates deep OOXML expertise; maintainers requested regression tests. | Open |
| 8 | **skill‑creator YAML warning** ([#539](https://github.com/anthropics/skills/pull/539)) | Adds pre‑parse validation to detect unquoted `description` fields containing `:` (or other YAML special characters) that cause silent misparsing. | Complements PR #361; both address a common tripping point for skill authors. | Open |

---

### 2. Community Demand Trends

Analysis of the most commented Issues reveals five distinct demand clusters:

- **🛡️ Security & Trust** (#492, 34 comments) – The top concern: community skills distributed under the `anthropic/` namespace create trust‑boundary abuse. Users want clear provenance, permission scoping, and namespace isolation. Related: #1175 (SharePoint permission logic in SKILL.md).

- **🪟 Windows Compatibility** (#1061, 3 comments but echoed in 6+ PRs) – Three distinct blockers prevent skill‑creator scripts from running on native Windows (`PATHEXT`, `cp1252` encoding, `select` on pipes). Multiple PRs (#1099, #1050, #362, #1298) address these, indicating high latent demand.

- **🔁 Evaluation & Optimization Reliability** (#556, 12 comments; #1169, 3 comments) – The `run_eval.py` “0% recall” bug is the single most cited operational failure. The community urgently needs a working evaluation loop to iterate on skill descriptions.

- **🌐 New Skill Categories** – Emerging proposals include:
  - **Compact‑memory** (#1329) – symbolic notation for long‑running agent state to save context.
  - **Agent‑governance** (#412) – safety patterns, policy enforcement, audit trails.
  - **Reasoning Quality Gate Pipeline** (#1385) – three‑gate pipeline for pre‑task calibration, adversarial review, and delivery verification.

- **🤝 Sharing & Integration** (#228, 14 comments) – Enterprise users demand org‑wide skill sharing (direct links or shared libraries). Also: MCP exposure (#16), AWS Bedrock compatibility (#29).

---

### 3. High‑Potential Pending Skills

These PRs have active discussion threads and are architecturally sound; they are likely to be merged in the near term.

| Skill | PR | Why It’s Likely to Land |
|-------|----|--------------------------|
| **document‑typography** | [#514](https://github.com/anthropics/skills/pull/514) | Fills a clear gap; no controversial design; maintainers have signaled interest. |
| **testing‑patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive (unit, React, philosophy); addresses a common request for test guidance. |
| **color‑expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Self‑contained, well‑researched (ISCC‑NBS, OKLCH, etc.); low integration risk. |
| **self‑audit (v1.3.0)** | [#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical verification + reasoning audit; universal scope; already has a follow‑up issue (#1385). |
| **skill‑quality‑analyzer & skill‑security‑analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta‑skills improve the entire ecosystem; dependency on resolving namespace trust first. |
| **contributing guidelines** | [#509](https://github.com/anthropics/skills/pull/509) | Directly addresses a community health gap (#452); low‑risk, high‑impact. |

**Note:** Several skill‑creator fix PRs (#1298, #1099, #1050, #362, #361, #1261, #1323) are likely to be merged as a batch once the root cause of the `recall=0%` bug is confirmed. Their combined effect will unblock the entire description‑optimization workflow.

---

### 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable, cross‑platform skill development tooling and for high‑quality meta‑skills (typography, testing patterns, self‑audit) that directly improve Claude’s output in production workflows.**

While new functional skills (ODT, color, SAP) are welcomed, the overwhelming volume of discussion revolves around fixing the foundation: making `skill‑creator` work on all platforms, validating YAML correctly, and establishing trust boundaries for community contributions. The message is clear: before the ecosystem can grow, the development loop must be stable and secure.

---

# Claude Code Community Digest — 2026-07-15

## Today’s Highlights
Two patch releases landed today: v2.1.209 fixes dialog blocking in agent background sessions, while v2.1.208 introduces an accessibility-first screen reader mode and user‑configurable Vim insert‑mode remaps. The community remains most engaged by a persistent advisor unavailability bug (82 comments, 153 👍) and the long‑running request for cross‑machine agent‑to‑agent collaboration (35 comments). Nine pull requests—mostly plugin and workflow fixups—were updated in the last 24 hours.

## Releases
- **v2.1.209** — Fixed `/model` and other dialogs being blocked in `claude agents` background sessions by reverting an overly broad guard.  
- **v2.1.208** — Added **screen reader mode** (`claude --ax-screen-reader`, env var `CLAUDE_AX_SCREEN_READER=1`, or `"axScreenReader": true` in settings) for plain‑text rendering. Also added `vimInsertModeRemaps` to map two‑key sequences (e.g. `jj`) to Escape in insert mode.

## Hot Issues (10 noteworthy)
1. **[#73365](https://github.com/anthropics/claude-code/issues/73365)** — **Advisor always "unavailable" with Fable 5** across all sessions. 82 comments, 153 👍. The most upvoted open bug this week; affects advisory workflows on Opus 4.8 main.

2. **[#28300](https://github.com/anthropics/claude-code/issues/28300)** — **Multi‑agent collaboration across machines (Agent‑to‑Agent protocol)**. 35 comments. A high‑impact feature request that would enable distributed agent teams; has been open since February.

3. **[#17643](https://github.com/anthropics/claude-code/issues/17643)** — **JDTLS LSP plugin fails on Windows** due to backslashes in file URIs. 17 comments, 19 👍. A long‑standing Windows compatibility pain point.

4. **[#37628](https://github.com/anthropics/claude-code/issues/37628)** — **VSCode: renaming session via sidebar pencil icon doesn't sync terminal tab title**; next message overwrites the custom name. 10 comments, 13 👍. A usability issue that breaks session identity in VS Code.

5. **[#25947](https://github.com/anthropics/claude-code/issues/25947)** — **Store project memory files in project‑local `.claude` folder**. 6 comments, 29 👍. Strong community desire for portable, version‑controlled memory.

6. **[#75911](https://github.com/anthropics/claude-code/issues/75911)** — **Desktop app worktree pool reclaims directories mid‑session**, detaching HEAD. 4 comments. A dangerous data‑integrity bug that can corrupt ongoing work.

7. **[#77602](https://github.com/anthropics/claude-code/issues/77602)** — **AskUserQuestion auto‑resolves to recommended option in `--remote-control` sessions** when `askUserQuestionTimeout` is unset. 3 comments. Impacts non‑interactive reliability.

8. **[#75548](https://github.com/anthropics/claude-code/issues/75548)** — **Desktop auto‑archive kills actively running subagents** without warning or resume capability. 2 comments. Severely disrupts long‑running agent workflows.

9. **[#77595](https://github.com/anthropics/claude-code/issues/77595)** — **Agent teams: SendMessage duplicates message body ~3× per call** due to an undocumented `content` field invented by the model. 1 comment. High severity for agent‑team communication accuracy.

10. **[#68333](https://github.com/anthropics/claude-code/issues/68333)** — **GUI: user‑initiated parallel task spawning without interrupting current turn**. 3 comments. A UX enhancement request that reflects a common workflow need.

## Key PR Progress (9 PRs updated in the last 24h)
- **[#77613](https://github.com/anthropics/claude-code/pull/77613)** — `claude-compare`: New tool (summary pending). Opened 2026-07-14.
- **[#77556](https://github.com/anthropics/claude-code/pull/77556)** — **fix(plugin-dev): validate-hook-schema.sh** now correctly handles plugin `hooks.json` format (was failing on valid configurations due to shell quoting and `mapfile` usage on macOS).
- **[#77492](https://github.com/anthropics/claude-code/pull/77492)** — **fix(hookify): match Write and prompt rules** — makes file rules inspect `Write` content; maps simple prompt rules to current `UserPromptSubmit` payload; adds regression coverage.
- **[#77443](https://github.com/anthropics/claude-code/pull/77443)** — **fix(ralph-wiggum): make stop‑hook's jq error handling reachable under `set -e`** — a `|| true` was preventing proper error path execution.
- **[#77442](https://github.com/anthropics/claude-code/pull/77442)** — **fix: repair issue‑automation telemetry and dead `days_back` input** — three correctness fixes: Statsig timestamps in 1970, unused `days_back` variable, and dedupe script path mismatch.
- **[#77439](https://github.com/anthropics/claude-code/pull/77439)** — **docs(plugins): sync security‑guidance listing with v2.0.0 plugin manifest** — updates marketplace.json and plugin listing to reflect the rewrite from #62586/#62592.
- **[#77427](https://github.com/anthropics/claude-code/pull/77427)** — **fix(pr‑review‑toolkit): make code‑reviewer a leaf agent** — restricts tools to repository‑inspection only, preventing recursive agent invocation.
- **[#76298](https://github.com/anthropics/claude-code/pull/76298)** — **docs: document Remote Control background‑task panel** — covers the web/mobile panel and task status sync added in v2.1.205. (Closed yesterday)
- **[#77260](https://github.com/anthropics/claude-code/pull/77260)** — **fix(hookify): match Write and prompt rules** (reopened) — was closed and reopened; superseded by #77492.

## Feature Request Trends
From the open enhancement issues, the most prominent feature directions are:

- **Multi‑agent & distributed collaboration** – (#28300) Agent‑to‑Agent protocol across machines; (#73931) Declarative fallback models per subagent; (#68333) Spawning parallel tasks without interrupting the current turn.
- **Project‑local configuration** – (#25947) Store memory files inside the project’s `.claude/` folder for portability and version control.
- **Accessibility & editor integration** – The newly shipped screen reader mode (#73365, though originally a bug) and (#65858) request for native in‑panel text search (Ctrl+F) in the VS Code extension signal growing demand for inclusive design.
- **Workflow / tooling flexibility** – (#66622) Add `argsPath` to the Workflow tool to accept file‑based inputs for solo FDE use cases.
- **Subagent lifecycle control** – (#73931) per‑subagent fallback models; (#75548, #77595) reliability of subagent execution and messaging.

## Developer Pain Points
Several recurring frustrations emerge from the issue tracker:

- **Windows‑specific bugs** – LSP plugins failing on backslash URIs (#17643), `/insights` generating invalid `file://` URLs with non‑ASCII usernames (#66222), and the desktop app showing incorrect “Usage Limit Reached” (#61673). Windows remains the platform with the most unresolved regressions.
- **Session & worktree management** – Desktop auto‑archive killing active subagents (#75548), worktree pool reclaiming directories mid‑session (#75911), and VS Code session rename not syncing with the terminal tab (#37628) all point to a fragile session state model.
- **Cost / billing inaccuracies** – Token usage being reported at 4× the expected rate (#66124), “Usage credits required for 1M context” errors appearing even with standard 200k Sonnet models (#66195), and session resumes after limit reset accumulating old token debt (#66237). These erode trust in consumption tracking.
- **Permission & security edge cases** – `--dangerously-skip-permissions` no longer skipping prompts listed in managed settings (#66225), and file permissions not enforced in read operations (#66231) create confusion about the security model.
- **Subagent correctness** – The model‑invented `content` field in `SendMessage` causing 3× duplicates (#77595) and subagent model overrides being silently dropped after continuation boundaries (#68147) indicate gaps in agent‑team protocol validation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest – 2026-07-15

**Today’s Highlights**  
The team is heavily iterating on the v0.145.0 alpha series (eight alphas in 24 h) while the stable branch sees only a housekeeping patch. Community attention is focused on a GPT‑5.6 Sol subagent‑model bug (148👍) and the long‑running demand to bring back `/undo` (338👍). A batch of 20 PRs—mostly automated by copyberry—addresses MCP reliability, model migration, and Windows sandbox documentation.

## Releases
- **rust‑v0.144.4**: Chores only; no user‑facing changes.  
  [Changelog](https://github.com/openai/codex/compare/rust-v0.144.3...rust-v0.144.4)
- **rust‑v0.145.0‑alpha.8 / .9 / .10 / .11**: Pre‑release snapshots of the upcoming 0.145.0 branch.

## Hot Issues (Top 10 by Community Impact)

1. **[#31814] GPT‑5.6 Sol forces subagent models to be Sol instances** (66 comments, 148👍)  
   MultiAgent V2 metadata overrides user config, making all subagents default to Sol. Users cannot specify lighter models.  
   [Issue](https://github.com/openai/codex/issues/31814)

2. **[#9203] Please make "/undo" back** (55 comments, 338👍)  
   Highly requested feature: an undo command to revert unintended file deletions or modifications not tracked by Git.  
   [Issue](https://github.com/openai/codex/issues/9203)

3. **[#28969] Add setting to disable 60‑second auto‑resolve for questions** (34 comments, 118👍)  
   The automatic dismissal of pending questions frustrates users who need time to respond.  
   [Issue](https://github.com/openai/codex/issues/28969)

4. **[#32040] Windows Desktop: in‑app browser hangs/closes after Browser Use PiP failure** (25 comments)  
   Opening a page via Browser Use can crash the entire app on Windows 11.  
   [Issue](https://github.com/openai/codex/issues/32040)

5. **[#31846] GPT‑5.3 Codex Spark fails with “Unsupported parameter: reasoning.summary”** (19 comments)  
   Pro users on macOS hit a parameter compatibility error when using the newer Spark model.  
   [Issue](https://github.com/openai/codex/issues/31846)

6. **[#20880] App silently creates empty `~/Documents/Codex` folder on every launch** (15 comments)  
   An empty folder appears in Documents each time the app opens, requiring manual cleanup.  
   [Issue](https://github.com/openai/codex/issues/20880)

7. **[#17229] Windows App spawns orphaned `git.exe` / `conhost.exe` processes** (14 comments)  
   Repeated `git status` calls leave zombie processes on Windows.  
   [Issue](https://github.com/openai/codex/issues/17229)

8. **[#32683] Windows App crashes in CrBrowserMain when Browser Use opens a page** (12 comments)  
   A null‑pointer crash in Chrome.dll (0xC0000005) halts the app.  
   [Issue](https://github.com/openai/codex/issues/32683)

9. **[#31573] OAuth authentication fails at issuer validation** (9 comments, 24👍)  
   Free‑tier users cannot authenticate when the OAuth issuer is incorrectly validated.  
   [Issue](https://github.com/openai/codex/issues/31573)

10. **[#30306] codex‑cli 0.142.3 still crashes with SIGTRAP on tool calls (Intel macOS)** (7 comments)  
    A regression that aborts on `web_search` and shell tool invocations, unresolved since #29000.  
    [Issue](https://github.com/openai/codex/issues/30306)

## Key PR Progress (10 Notable Merges)

1. **[#33173] Migrate GPT‑5.4 uses to GPT‑5.6 variants**  
   Hides GPT‑5.4 models and redirects to Terra/Luna equivalents. Affects memory consolidation and rate‑limit prompts.  
   [PR](https://github.com/openai/codex/pull/33173)

2. **[#33184] Reuse MCP tool catalogs across sessions**  
   Caches stdio MCP server catalogs to eliminate startup delays on repeated connections.  
   [PR](https://github.com/openai/codex/pull/33184)

3. **[#33180] Serialize concurrent MCP stdin writes**  
   Adds a semaphore to prevent two JSON‑RPC messages from interleaving on MCP stdio transports.  
   [PR](https://github.com/openai/codex/pull/33180)

4. **[#33177] Support model catalog templates for Guardian policy prompts**  
   Allows Guardian to use policy templates from the model catalog, improving custom review prompts.  
   [PR](https://github.com/openai/codex/pull/33177)

5. **[#33175] Handle Amazon Bedrock credentials during logout**  
   Prevents Codex from removing AWS‑managed credentials; only clears its own API key.  
   [PR](https://github.com/openai/codex/pull/33175)

6. **[#33170] Support Amazon Bedrock login in the app server**  
   Implements `account/login/start` for Bedrock, including API key validation and model provider selection.  
   [PR](https://github.com/openai/codex/pull/33170)

7. **[#33156] Run detached reviews as review‑agent turns**  
   Converts detached code reviews into normal forked turns, bringing full steering and tool permissions.  
   [PR](https://github.com/openai/codex/pull/33156)

8. **[#33149] Build MCP tool runtimes before router planning**  
   Moves MCP tool construction earlier so the router sees a unified tool list, simplifying deferred vs. direct tools.  
   [PR](https://github.com/openai/codex/pull/33149)

9. **[#31343] Add metadata‑only `app/read`**  
   Enables fast metadata reads for app‑server clients without rebuilding connector runtime state (used by M3).  
   [PR](https://github.com/openai/codex/pull/31343)

10. **[#31466] Capture tool search pipeline diagnostics in `/feedback`**  
    Replaces custom `RUST_LOG` diagnostics with a bounded, per‑thread tool‑search snapshot available via the feedback endpoint.  
    [PR](https://github.com/openai/codex/pull/31466)

## Feature Request Trends
- **Undo / session safety** (#9203, #33191): Users want a reliable way to revert unintended agent actions, especially on untracked files.
- **User‑control over auto‑behaviour** (#28969, #31651): Disabling auto‑dismiss countdowns and auto‑resolves is the most‑requested quality‑of‑life improvement.
- **Accessibility & parity with ChatGPT** (#20957, #31925): Read‑Aloud and macOS Quick Chat (Option+Space) are expected after the app unification.
- **Project/thread persistence** (#32969, #33157): Several reports of disappearing chat lists or projects after app updates.

## Developer Pain Points
- **Windows platform fragility** (#32040, #32683, #17229, #31220, #33158): Browser‑use crashes, orphaned Git processes, sandbox performance scaling poorly with workspace size.
- **Model compatibility issues** (#31814, #31846): Forced subagent models and unsupported parameters break workflows on newer GPT variants.
- **CLI crashes on specific hardware** (#30306): Persistent SIGTRAP on Intel macOS during tool calls (regression).
- **Connectivity & auth glitches** (#32670, #31573): Frequent network disconnects and OAuth validation failures disrupt sessions.
- **Marketplace & disk‑space leaks** (#32058): Unbounded growth of `.tmp/marketplaces` directories from upgrade operations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-15

## Today’s Highlights
A new nightly release (v0.52.0‑nightly) landed with two targeted fixes: one enriches error messages for shared‑project quota limits, and another ensures the A2A server properly aborts agent execution loops on cancellation. Meanwhile, a long‑standing bug (Issue #22323) gained attention – a subagent reports “success” when it actually hit `MAX_TURNS`, masking the real interruption. On the PR side, a shell output bounding fix (#28401) promises to reduce token waste and improve response quality.

## Releases
**[v0.52.0‑nightly.20260714.gfa975395b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260714.gfa975395b)**  
- `fix(core)`: enrich shared project quota limit errors with setup hint (by @amelidev)  
- `fix(a2a-server)`: ensure task cancellation aborts execution loop (by @luisfelipe-alt)

## Hot Issues (10 noteworthy)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as GOAL success**  
   *Priority P1, 10 comments, 2 👍*  
   The `codebase_investigator` subagent claims "success" even when it hit the max turn limit before performing any analysis. This misleads both users and the orchestrator, hiding real failures.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via zero-dependency OS sandboxing**  
   *P2, 8 comments, 1 👍*  
   Proposes using Gemini 3’s native bash capabilities through sandboxed execution, avoiding heavy container overhead while preserving safety. Community interest in a lightweight sandbox approach.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component level evaluations**  
   *P1, 7 comments*  
   An EPIC to build on the existing 76 behavioral eval tests, expanding coverage across supported Gemini models. Critical for ensuring agent quality and regression detection.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess impact of AST-aware file reads, search, and mapping**  
   *P2, 7 comments, 1 👍*  
   Investigating whether AST-aware tools can reduce unnecessary turns and token consumption by reading precise method boundaries. Could drastically improve efficiency for large codebases.

5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs**  
   *P1, 7 comments, 8 👍 (most upvoted)*  
   Users report the CLI hangs indefinitely when deferring to the generalist agent for simple tasks like folder creation. Workaround: instructing the model not to use sub‑agents resolves it.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Gemini does not use skills and sub‑agents enough**  
   *P2, 6 comments*  
   Anecdotal evidence shows that even when custom skills are defined, the model rarely invokes them unless explicitly told to. Community calling for better skill orchestration heuristics.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Stop Auto Memory from retrying low-signal sessions indefinitely**  
   *P2, 5 comments*  
   Auto Memory only records a session as processed when its extraction agent reads the transcript. Low‑signal sessions stay unprocessed and are re‑surfaced endlessly, wasting API credits.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution gets stuck with “Waiting input”**  
   *P1, 4 comments, 3 👍*  
   After a simple CLI command finishes, the shell tool remains in an “awaiting input” state, causing hangs. Common with commands that normally do not require interaction.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails under Wayland**  
   *P1, 4 comments, 1 👍*  
   The browser subagent produces a “GOAL” termination reason but actually fails silently on Wayland display servers. No error detail is surfaced, making debugging difficult.

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) – Symlink in ~/.gemini/agents/ not recognized**  
    *P2, 4 comments*  
    Custom agent files that are symbolic links are ignored. Users expect symlinks to work, especially for managing agent definitions across dotfile repositories.

## Key PR Progress (all 5 open PRs in last 24h)

1. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) – refactor(a2a-server): enforce path trust check prior to environment loading**  
   *Size M/L/XL, by @luisfelipe-alt*  
   Restructures the `CoderAgentExecutor` lifecycle to verify workspace path trust before reading environment variables, and isolates the task environment via `AsyncLocalStorage`. Improves security and prevents leaking host env into agent tasks.

2. **[#24303](https://github.com/google-gemini/gemini-cli/pull/24303) – feat(diagnostics): Native V8 Memory & Profiling Suite**  
   *P2, area/agent+extensions, by @Mustafa0216*  
   GSoC 2026 contribution that adds terminal‑integrated performance and memory investigation tools. Aims to help developers profile agent execution without leaving the CLI.

3. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) – fix(core): limit recursive reasoning turns per single user request**  
   *Size M/L/XL, by @amelidev*  
   Introduces a hard cap of 15 recursive reasoning turns (configurable via `maxSessionTurns`). Protects CPU resources and API quotas from infinite loops, a common source of agent hangs.

4. **[#28401](https://github.com/google-gemini/gemini-cli/pull/28401) – fix(shell): bound command output sent to the model**  
   *P1, area/agent, by @enjoykumawat*  
   Clamps the amount of shell output forwarded to the model, preventing commands like `find /` or verbose builds from injecting hundreds of KB of tokens. Directly addresses UX and cost concerns.

5. **[#28400](https://github.com/google-gemini/gemini-cli/pull/28400) – chore/release: bump version to 0.52.0‑nightly**  
   *By @gemini-cli-robot*  
   Automated version bump for the nightly release.

## Feature Request Trends
- **AST‑aware code understanding** – Multiple issues (#22745, #22746) request tools that parse code structure (method boundaries, imports) to reduce tool call turns and noise.  
- **Better sub‑agent orchestration and visibility** – Users want the model to autonomously activate relevant skills/sub‑agents (#21968) and to expose sub‑agent trajectories in shareable chat reports (#22598).  
- **Browser agent resilience** – Growing demand for automatic session takeover on locked profiles (#22232) and full support for configuration overrides like `maxTurns` (#22267).  
- **Sandboxed execution without Docker** – Issue #19873 calls for a zero‑dependency OS sandbox to let the model use native bash tools safely, avoiding heavyweight containers.  
- **Component‑level eval infrastructure** – The EPIC #24353 seeks to build a comprehensive evaluation suite for individual agent components, indicating a shift toward more granular quality assurance.

## Developer Pain Points
- **Agent hangs and infinite loops** – The most upvoted issue (#21409) and several others (#25166, #22465) describe the CLI freezing on simple commands, often due to recursive reasoning or stuck shell tools.  
- **Sub‑agents underutilized or misbehaving** – Despite being designed for delegation, sub‑agents are rarely invoked (#21968), and when they are, they can ignore user config (#22093) or report fake success (#22323).  
- **Configuration and settings ignored** – Browser agent ignores `settings.json` (#22267), symlinked agents are unrecognized (#20079), and the model “self‑awareness” of its own flags is poor (#21432).  
- **Memory system noise and security** – Auto Memory retries low‑value sessions (#26522), logs sensitive content before redaction (#26525), and silently skips invalid patches (#26523).  
- **Destructive command risk** – Models occasionally use `git reset --force` or other destructive commands when safer alternatives exist (#22672).  
- **Terminal rendering and performance** – High‑frequency flickering on resize (#21924) and corruption after exiting external editors (#24935) plague the UI experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-15

## Today’s Highlights
Version **v1.0.71-1** shipped with several notable additions: persisted GitHub MCP toolset/tool configuration, new `plugins marketplace` subcommands, and sidebar session persistence. Meanwhile, the community is vocal about long-standing feature requests (PDF reading, 33 👍) and a recent usability bug in `/app` (32 👍). A critical voice-mode ASR failure (#4024) and a data-loss risk from checkpoint restore (#1675) remain open and under active discussion.

---

## Releases
**v1.0.71-1** — 2026-07-15  
Changes:
- **Persist GitHub MCP toolset/tool config** via `settings.json` (keys: `githubMcpToolsets`, `githubMcpTools`, etc.)
- **New `plugins marketplace` subcommands** – list, add, remove, browse, and update plugin marketplaces
- **Persist sidebar sessions** across restarts
- Minor splitting / internal reorganisation (description truncated)

*(Release details: [github.com/github/copilot-cli/releases/v1.0.71-1]())*

---

## Hot Issues (10 noteworthy)

1. **#4024 – Voice mode ASR silent failure**  
   *[github/copilot-cli Issue #4024]*  
   All three bundled ASR models (`nemotron-*`) return empty transcriptions. The level meter confirms mic capture, but `MultiModalProcessor` routing fails. 8 comments, 0 👍 – high severity for voice users.

2. **#443 – Built-in PDF Reading Support**  
   *[github/copilot-cli Issue #443]*  
   The most 👍-ed feature request (33). Users want native PDF reading instead of relying on external tools like `pdftotext`. Academic and technical documentation use cases are cited.

3. **#2165 – Ubuntu keychain support broken**  
   *[github/copilot-cli Issue #2165]*  
   Two bugs: outdated documentation and a `secret-tool` dependency that fails on recent distributions. 21 👍, strong Linux community impact.

4. **#4096 – Third-party MCP OAuth token never bridged to CLI sessions**  
   *[github/copilot-cli Issue #4096]*  
   MCP servers show “Connected” in the app, but tools are missing from CLI sessions. OAuth tokens are not propagated. Blocks MCP interoperability.

5. **#3874 – `preToolUse` hook denial does not work**  
   *[github/copilot-cli Issue #3874]*  
   Hooks that deny all commands are ignored. Security concern – the agent can bypass user-defined restrictions.

6. **#1675 – Checkpoint restore permanently deletes untracked files**  
   *[github/copilot-cli Issue #1675]*  
   `git clean -fd` during rollback destroys all untracked files without recovery. Data-loss risk for users.

7. **#4118 – `/app` command does not select current working directory**  
   *[github/copilot-cli Issue #4118]*  
   Filed yesterday, already 32 👍. Users must manually navigate to the CWD in the app, breaking workflow efficiency.

8. **#4103 – Plugin marketplace clone disables Git credential helpers**  
   *[github/copilot-cli Issue #4103]*  
   Regression in v1.0.70: adding a private HTTPS marketplace fails because credential helpers are stripped. 2 👍.

9. **#3590 – `PreToolUse` hook `permissionDecision: "ask"` auto-approved**  
   *[github/copilot-cli Issue #3590]*  
   The TUI flashes the permission prompt for milliseconds and auto-approves. Hooks are effectively useless for “ask” decisions.

10. **#3995 – Persistent command deny-rules in `permissions-config.json`**  
    *[github/copilot-cli Issue #3995]*  
    Currently only allow rules exist. Feature request for persistent deny rules (e.g., block a specific CLI tool). 1 👍, important for security-conscious teams.

---

## Key PR Progress
No pull requests were updated in the last 24 hours. *(Total listed: 0)*

---

## Feature Request Trends
- **Better content handling** – PDF reading (#443, 33 👍) and proper handling of binary files in session history (#4097) are top themes.
- **Enterprise & security controls** – Persistent deny rules (#3995), mTLS for OTel (#3477), and hook reliability (#3874, #3590) reflect growing enterprise adoption.
- **Platform parity & UX polish** – Requests include double-tap Enter to interrupt (#4125), showing conversation titles (#4124), `/app` CWD selection (#4118), and `AGENTS.MD` compliance (#4123). These indicate a desire for less friction in daily use.

---

## Developer Pain Points
- **Data loss and silent failures** – Checkpoint restore deletes untracked files (#1675), voice ASR returns empty transcriptions (#4024), and subagents can’t resolve relative links (#4122).
- **Authentication & credential issues** – Ubuntu keychain (#2165), OAuth token bridging (#4096), and Git credential helper stripping (#4103) frustrate Linux and MCP users.
- **Permission system quirks** – Hook denial ignored (#3874), auto-approved “ask” (#3590), parallel session overwrites (#3563), and misassociation of non-git directories (#3616) erode trust in the permission model.
- **Platform-specific bugs** – PowerShell `$home` footgun (#3098), SecureCRT terminal title degradation (#4121), and SQL tool blocking reserved keywords in string literals (#4128) highlight OS/edge-case gaps.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the **Kimi Code CLI Community Digest** for **2026-07-15**.

---

## Today's Highlights

The community is pushing back against restrictive API limits, with a major TPD rate limit bug (#2318) seeing renewed activity after two months of silence. On the development side, the team shipped three critical fixes in the last 24 hours, including a dynamic completion budget fix that replaces a hard-coded 32k token cap (#2494). A subtle bug related to resuming forked sessions (#2496) was also tracked down and closed, improving stability for multi-branch workflows.

## Releases

No new versions were released in the last 24 hours.

## Hot Issues

*Due to the limited data window (2 items), I have selected all available.*

1.  **#2318 [Open] – Incorrect TPD Rate Limit Calculation** – A critical bug from May 2026 resurfaced in community discussion. The user reports that `kimi 2.6` on Windows 10 incorrectly calculates TPD usage, hitting a rate limit at `1,505,241` (TPD). With only 1 comment but 1 👍, this suggests a high-impact issue affecting large-scale users that deserves more attention from maintainers.
    - [GitHub Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

2.  **#2496 [Closed] – Corrupted Output After Forked Session Resume** – A subtle bug where running `kimi -r` on a forked session produces garbled output. Although closed without comments, this is a significant quality-of-life fix for users who rely on session branching for parallel code exploration.
    - [GitHub Issue #2496](https://github.com/MoonshotAI/kimi-cli/issues/2496)

## Key PR Progress

*Only 3 PRs were updated in the last 24h; all are selected.*

1.  **#2494 [Merged] – Use Remaining Context for Completion Budget** – **Fixes a hard-coded 32k token limit.** Previously, Kimi's completion budget was capped at 32k tokens, which wasted context on large models. This PR dynamically uses the remaining model context window, maximizing output quality. *(Author: RealKai42)*
    - [GitHub PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)

2.  **#2498 [Merged] – Preserve Empty-String Reasoning as ThinkPart** – **Fixes a 400 error on `coding-model-okapi-0711-vibe`.** When the AI model returned an empty `reasoning_content` string, the CLI crashed with a protocol error. This PR ensures empty strings are preserved as valid `ThinkPart` objects, preventing session termination.
    - [GitHub PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)

3.  **#2499 [Merged] – Stop Sending Legacy `reasoning_effort` Parameter** – **Fixes provider state conflicts.** The CLI was implicitly passing a legacy `reasoning_effort` parameter alongside the new `thinking.type` field, causing silent parameter clamping. This PR isolates the state, ensuring that thinking effort set by the caller is passed exactly as provided.
    - [GitHub PR #2499](https://github.com/MoonshotAI/kimi-cli/pull/2499)

## Feature Request Trends

Based on this snapshot, the most requested directions among the open/closed issues are:

- **Rate Limit Transparency & Control** – Users want better visibility into TPD consumption and configurability of rate limit thresholds, especially on the `moonshot.ai` platform.
- **Session State Robustness** – Forked/resumed sessions need to be fully idempotent. The corruption bug (#2496) highlights a desire for reliable multi-session workflows.
- **Dynamic Context Management** – The fix in #2494 is a direct response to the community's need for models to use the full available context window rather than artificial caps.

## Developer Pain Points

- **Platform-Specific Issues on Windows 10** – Both bugs reported in this snapshot were encountered on Windows 10, suggesting lingering compatibility or path-handling edge cases on that OS.
- **Rate Limit Spikes Without Warning** – The TPD limit bug (#2318) is a recurring frustration: users hit hard caps inadvertently and lack clear diagnostics about what consumed their daily quota.
- **Inconsistent Session Resume Behavior** – Developers relying on `kimi -r` for iterative debugging find that resumed forked sessions can silently produce corrupted output, erasing confidence in long-running workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-15

## Today's Highlights
Desktop v2 migration completes with a layout toggle setting and onboarding, but the new tab design draws immediate backlash for hiding session titles. Performance regressions (high CPU, energy consumption) remain the hottest open topic with 29 comments, while a flurry of UI enhancements — context compaction, fork, rename, delete, and archived sessions browser — were shipped by a single contributor.

## Releases
- **v1.18.1** (latest) — **Bugfix**: Fixed spacing between model provider sections in Settings.
- **v1.18.0** — **Improvements**: Completed Desktop v2 migration with upgrade handling, first-launch onboarding, and a toggle to switch between new/old layouts. **Bugfix**: Fixed file views using wrong background.

## Hot Issues (10 noteworthy)
1. **[#30086 – High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**  
   *29 comments, 15 👍* — CPU spike ~7 days ago affecting multi‑session users. Top community complaint; reports of laggy cursors and memory pressure.  
2. **[#25239 – Expose GitHub Copilot "Auto" option in model selector](https://github.com/anomalyco/opencode/issues/25239)**  
   *16 comments, 14 👍* — Widespread demand to integrate Copilot’s “Auto” model selection directly into OpenCode’s model picker.  
3. **[#36936 – New tab layout hides session titles](https://github.com/anomalyco/opencode/issues/36936)**  
   *10 comments* — Fresh backlash against the v2 tab redesign: titles truncated, unable to see >5 sessions. Reverting to 1.17 restores expected behavior.  
4. **[#32747 – @ file mentions miss files created after startup](https://github.com/anomalyco/opencode/issues/32747)**  
   *10 comments, 8 👍* — Stale index for new files until restart. Affects TUI and Desktop workflows that create files mid‑session.  
5. **[#31972 – New Layout prevents Plan/Build mode switch](https://github.com/anomalyco/opencode/issues/31972)**  
   *8 comments, 7 👍* — Enabling “New Layout and Designs” breaks both UI toggle and Ctrl+. shortcut. Critical workflow blocker.  
6. **[#36513 – Configurable web search provider](https://github.com/anomalyco/opencode/issues/36513)**  
   *3 comments* — Users want to replace Exa AI with Google, Bing, DuckDuckGo for the `websearch` tool. High configurability request.  
7. **[#36706 – Task tool broken after large permission prompt](https://github.com/anomalyco/opencode/issues/36706)**  
   *3 comments* — Subagent (`task` tool) fails with SQL error after oversized permission dialog. Blocks subagent usage on Windows.  
8. **[#35482 – MiMo V2.5 and DeepSeek V4 Flash Internal Server Error](https://github.com/anomalyco/opencode/issues/35482)**  
   *3 comments* — Repeated model‑specific errors not related to rate limits. Affects token budget and trust in model availability.  
9. **[#36956 – Show friendly name for auto‑discovered local plugins](https://github.com/anomalyco/opencode/issues/36956)**  
   *2 comments* — Raw `file://` paths displayed in Desktop status popover; truncated, unusable. Usability regression for plugin developers.  
10. **[#36914 – Kimi 2.7 Code terminated unexpectedly](https://github.com/anomalyco/opencode/issues/36914)**  
    *2 comments* — Subagent with Kimi 2.7 Code returns “terminated” after long processing, wasting tokens. Orchestrator receives no output.

## Key PR Progress (10 important)
1. **[#36949 – Fix unresponsive service restarts](https://github.com/anomalyco/opencode/pull/36949)** (closed)  
   Adds `Service.restart()` as reliable recovery for owners holding stale locks. Routes `opencode service restart` and TUI reload through it.  
2. **[#36955 – Restore xAI OAuth in v2](https://github.com/anomalyco/opencode/pull/36955)** (closed)  
   Re‑enables browser PKCE and headless device flow for xAI provider after Desktop v2 migration.  
3. **[#36958 – Test: wait for connection before tool event](https://github.com/anomalyco/opencode/pull/36958)** (open)  
   Fixes deterministic CI failures on Linux/Windows by synchronizing test client connection with live tool event emission.  
4. **[#36542 – Tolerate `AlreadyExists` in `ensureDir`](https://github.com/anomalyco/opencode/pull/36542)** (open)  
   Stops crashes when `Config.ensureGitignore` runs concurrently; closes #35828.  
5. **[#36524 – Avoid duplicate image bytes in tool events](https://github.com/anomalyco/opencode/pull/36524)** (open)  
   Removes redundant base64 bytes duplicated in `structured.content` and `content[]`, preventing inflated token usage.  
6. **[#36922 – One‑click context compaction button](https://github.com/anomalyco/opencode/pull/36922)** (closed)  
   Adds compact icon next to context usage indicator; calls `POST /api/session/:sessionID/compact`.  
7. **[#36924 – Fork button on assistant response texts](https://github.com/anomalyco/opencode/pull/36924)** (closed)  
   Hover‑shown fork icon on each assistant message, reusing existing fork endpoint.  
8. **[#36926 – Inline session rename in sidebar](https://github.com/anomalyco/opencode/pull/36926)** (closed)  
   Double‑click to rename sessions from sidebar reusing `InlineEditor` component.  
9. **[#36928 – Delete session with confirmation dialog](https://github.com/anomalyco/opencode/pull/36928)** (closed)  
   Adds permanent session deletion with confirmation, with auto‑navigation to next session.  
10. **[#36930 – Archived sessions browser dialog](https://github.com/anomalyco/opencode/pull/36930)** (closed)  
    Implements `/archived` command with sorted list of archived sessions for browsing/restore.

## Feature Request Trends
- **Desktop v2 layout adaptation** — Users demand vertical tabs, restoration of Plan/Build mode switching, and better session title visibility.  
- **Model provider expansion** — Requests for Copilot “Auto” mode, Aurelo first‑class support, configurable web search backends.  
- **Session management UX** — Very high interest in context compaction, fork, rename, delete, and archived session browsing (all implemented in today’s PRs).  
- **Plugin usability** — Call for friendly names for local plugins in status popover and better autocomplete for skills in TUI.  
- **File indexing** — Requests for live file inclusion (dynamic updates) without restart.

## Developer Pain Points
- **Performance regressions** — High CPU (~40% sustained) and memory (2.5 GB) in Electron renderer, especially in long sessions. Energy drain reported across platforms.  
- **New layout instability** — Missing Plan/Build toggle, tab title truncation, and inconsistent rendering in RDP sessions. Transition period toggle helps but many find it broken.  
- **Model reliability** — Sporadic Internal Server Errors for popular models (MiMo, DeepSeek, Kimi) and task tool failures after permission dialogs waste tokens and time.  
- **Stale state** — File `@` mentions not indexing new files, stale worktree paths after project rename causing remote client confusion.  
- **Plugin & config friction** — Local plugins shown as raw `file://` URLs, plugin spinner noise in non‑TTY, SSH host testing timeout without error feedback.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-15

## Today’s Highlights
The v0.80.7 release dropped a breaking change that simplifies session‑affinity configuration, replacing the `sendSessionIdHeader` flag with a unified `sessionAffinityFormat` option. The community is actively working to add Bedrock Mantle and xAI OAuth providers, while a surge of bug reports around `gpt-5.6‑luna` codex compaction failures and session‑id length limits has driven several rapid‑fire PRs. Notably, a new sqlite session storage PR is gaining attention for its potential to reduce startup overhead.

## Releases
**v0.80.7** — Breaking change: Removed the `openai‑responses` `compat.sendSessionIdHeader` flag from `models.json`. Session‑affinity behavior is now controlled by `compat.sessionAffinityFormat` (`"openai"`, `"openai‑nosession"`, or `"openrouter"`). Users should replace `sendSessionIdHeader: false` with `sessionAffinity`.

## Hot Issues (10 noteworthy)
1. **[#5363 – Add amazon-bedrock-mantle provider for OpenAI‑compatible models](https://github.com/earendil-works/pi/issues/5363)** (16 comments, 8 👍)  
   High‑demand feature to support Bedrock Mantle’s OpenAI‑compatible API. The existing Bedrock provider uses Converse, which is incompatible. Community strongly supports.

2. **[#6476 – Regression: httpIdleTimeoutMs no longer respected for self‑hosted OpenAI‑compatible provider (v0.80.6)](https://github.com/earendil-works/pi/issues/6476)** (10 comments)  
   Critical bug causing timeouts on self‑hosted vLLM instances despite explicit timeout settings. Open and actively investigated.

3. **[#6522 – openai‑completions: no min floor on max_completion_tokens, sends 1 token → 400](https://github.com/earendil-works/pi/issues/6522)** (7 comments)  
   Closed bug where upstream proxy misreporting caused Pi to set `max_completion_tokens=1`, rejected by provider. Highlighted need for floor validation.

4. **[#6509 – Extension‑reported usage in footer cost display (ctx.ui.setUsage)](https://github.com/earendil-works/pi/issues/6509)** (5 comments)  
   Feature request to let extensions report external LLM costs (e.g., sub‑agents) in the footer. Opens up richer cost tracking for complex workflows.

5. **[#6624 – Add GPT‑5.6 models and long‑context support to GitHub Copilot](https://github.com/earendil-works/pi/issues/6624)** (5 comments)  
   Closed request to add `gpt‑5.6‑luna/terra/sol` to the built‑in model catalog. Copilot already supports them, but Pi’s provider didn’t list them.

6. **[#3200 – Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200)** (5 comments, 3 👍)  
   Long‑standing request to extend `prompt` RPC beyond images to video/audio for multimodal models like Gemma 4, GPT‑4o.

7. **[#6461 – Add built‑in xAI Grok SuperGrok OAuth login](https://github.com/earendil-works/pi/issues/6461)** (4 comments)  
   Closed feature to add device‑code OAuth for SuperGrok, matching Claude/Codex/Copilot. Quickly implemented in PR #6651.

8. **[#6600 – pi update --extensions blocks npm scripts with new npm 11.16.0](https://github.com/earendil-works/pi/issues/6600)** (3 comments)  
   Open bug: npm’s new script‑blocking default breaks extension installs. Community waiting for a workaround or upstream fix.

9. **[#6167 – transformMessages + isSameModel false thinking block normalization interacts with requiresReasoningContentOnAssistantMessages](https://github.com/earendil-works/pi/issues/6167)** (3 comments)  
   Subtle bug where switching models incorrectly inlines thinking content, breaking reasoning‑block handling. Open.

10. **[#6555 – Compaction/summary LLM call should inherit session transport settings](https://github.com/earendil-works/pi/issues/6555)** (2 comments, 2 👍)  
    Bug where compaction used SSE instead of the session’s WebSocket transport, causing failures. Already fixed in PR #6584.

## Key PR Progress (10 important)
1. **[#6216 – Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)** (open)  
   New provider using Bedrock Mantle’s OpenAI‑compatible API. Supersedes earlier attempts, addresses #5363.

2. **[#6594 – feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594)** (open)  
   Adds `retainedTail` to compaction entries and changes `getPathToRoot` to stop at last compaction, reducing load overhead. Aims to improve startup times.

3. **[#6654 – feat: add promptCacheKey stream option](https://github.com/earendil-works/pi/pull/6654)** (open)  
   Allows overriding the prompt cache key per stream, useful for providers like OpenAI Codex. Closes #6627.

4. **[#6533 – fix: Codex compaction returns "Model not found" for gpt‑5.6‑luna](https://github.com/earendil-works/pi/pull/6533)** (closed)  
   Fixes `/compact` failures when using `openai‑codex/gpt‑5.6‑luna` by routing compaction through the correct model variant.

5. **[#6635 – fix: recover openai‑completions tool calls emitted in content](https://github.com/earendil-works/pi/pull/6635)** (closed)  
   Recovers tool‑call JSON from assistant `content` when local servers (Ollama, LM Studio) omit structured `tool_calls`.

6. **[#6632 – fix: correlate RPC extension results](https://github.com/earendil-works/pi/pull/6632)** (closed)  
   Emits stdout as `extension_output` events correlated by RPC request id, and returns proper errors for failed commands.

7. **[#6633 – feat: allow message_end hooks to replace finalized message before persistence](https://github.com/earendil-works/pi/pull/6633)** (closed)  
   Extensions can redact PII or inject content via `message_end` hooks, giving more control over persisted messages.

8. **[#6651 – feat: add xAI device OAuth and route grok‑4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)** (closed)  
   Implements device‑code OAuth for SuperGrok and routes `grok‑4.5` via the Responses API. Closes #6461.

9. **[#6653 – clamp session‑id to 64 chars for openai‑codex](https://github.com/earendil-works/pi/pull/6653)** (closed)  
   Hotfix for #6630: prevents 400 errors when session‑id exceeds 64 characters.

10. **[#6584 – fix: forward provider options to summary requests](https://github.com/earendil-works/pi/pull/6584)** (closed)  
    Compaction/summary now inherits transport settings from the session, fixing regression reported in #6555.

## Feature Request Trends
* **New provider integrations** – Bedrock Mantle, xAI OAuth, Grok subscription, and improved GitHub Copilot model coverage are top requests. Users want seamless access to paid subscriptions without manual API keys.
* **Multimodal expansion** – Extending the `prompt` command to support video and audio is a

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区摘要 — 2026-07-15

## 1. 今日亮点

Qwen Code 社区今日非常活跃，多项关键 PR 和 RFC 进入密集开发阶段，主要围绕**多工作区支持（Multi-workspace）** 的落地展开，相关 PR 已覆盖 ACP 传输、守护进程、分屏会话和动作路由（[#6621](https://github.com/QwenLM/qwen-code/pull/6621) , [#6635](https://github.com/QwenLM/qwen-code/pull/6635) , [#6746](https://github.com/QwenLM/qwen-code/pull/6746)）。此外，`v0.19.10` 正式版和 `sdk-typescript-v0.1.8` 今日发布，捆绑了最新的稳定 CLI。另外，`/review` 命令的自我审查机制（[PR #6892](https://github.com/QwenLM/qwen-code/pull/6892)）经过多轮自测后取得了显著进展。

## 2. 版本发布

- **v0.19.10** ([查看发布](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10)): 正式稳定版，内容涵盖多项修复和优化。
- **v0.19.9-nightly.20260714.9dd8389eb**: 当夜构建版本，主要修复了 `enter_plan_mode` 调用时的 YOLO 模式保持问题，并在 CLI 中新增了对 `ask_user` 的支持。
- **sdk-typescript-v0.1.8**: TypeScript SDK 新版，捆绑了 CLI v0.19.10。

## 3. 热门 Issue (10 项)

*   **[RFC: 单守护进程支持多工作区 (Multi-workspace)](https://github.com/QwenLM/qwen-code/issues/6378)**: 社区最受关注的设计提议，旨在让一个 `qwen serve` 守护进程同时为多个工作区提供服务。社区讨论了 23 条，是近期核心方向的旗帜性议题。
*   **[性能: 守护进程冷启动与快速路径延迟优化](https://github.com/QwenLM/qwen-code/issues/4748)**: 针对守护进程启动比纯 CLI 慢的瓶颈问题持续追踪，对 CI 和频繁重开的用户影响直接。
*   **[Bug: `/auth` 修改配置后新会话仍报 401 错误](https://github.com/QwenLM/qwen-code/issues/5979)**: 影响新会话的认证配置持久化问题，开发者需要反复 `auth`，反馈集中。
*   **[Bug: 子代理与主会话通信机制弱](https://github.com/QwenLM/qwen-code/issues/5239)**: 用户反馈子任务完成后缺乏通知机制，不得不靠文件监控曲线救国，反映出子代理系统缺少健康检查和双向通信能力。
*   **[Bug: 长时间会话内存泄漏 (UI History 无限制增长)](https://github.com/QwenLM/qwen-code/issues/2128)**: 经典性能问题，P1 优先级，运行数十小时后内存只增不减，对长期会话用户影响大。
*   **[Bug: Ctrl+S 差异预览乱码](https://github.com/QwenLM/qwen-code/issues/6809)**: 多行编辑时 diff 预览行被错误拼接，直接干扰代码审查，开发者反馈强烈。
*   **[Bug: 终端 (VP/非VP) 模式交互问题](https://github.com/QwenLM/qwen-code/issues/6149)**: VP 模式下链接无法打开，非 VP 模式下内容溢出无法滚动，长期影响 TUI 核心体验。
*   **[安全: MCP `readOnlyHint` 跳过默认工具确认](https://github.com/QwenLM/qwen-code/issues/6917)**: 新上报的 MCP 安全漏洞——未受信任的 MCP 服务器可通过伪装 `readOnlyHint` 绕过工具确认，属于严重安全缺陷。
*   **[Bug: 文件权限规则无法处理 `..` 遍历和符号链接路径](https://github.com/QwenLM/qwen-code/issues/6915)**: 文件规则存在绕过路径，安全团队和开发者高度关注。
*   **[功能请求: 桌面端 UI 和产品方向讨论](https://github.com/QwenLM/qwen-code/issues/6896)**: 社区提议为 Qwen Code Desktop 定义近期 UI 方向，包括右侧栏集成 Review、终端、文件浏览器等，代表了下一步的集成度期望。

## 4. 关键 PR 进展 (10 项)

*   **[PDF 视觉桥接回退支持](https://github.com/QwenLM/qwen-code/pull/6846) ([doudouOUC])**: 为文本模型的 PDF 处理增加视觉模态回退策略，提升多模态场景兼容性。
*   **[传递受信任的调用上下文 (InvocationContextV1)](https://github.com/QwenLM/qwen-code/pull/6895) ([callmeYe])**: 引入运行时可信上下文标记，用于记录调用链的入口、会话和来源，提升安全和审计能力。
*   **[静默前台 Shell 命令的心跳检测](https://github.com/QwenLM/qwen-code/pull/6876) ([doudouOUC])**: 在前台 Shell 无输出时按周期发送进度信号，用于 headless/ACP 超时检测。
*   **[WebShell: 自动发布 PR 可视预览](https://github.com/QwenLM/qwen-code/pull/6880) ([wenshao])**: 为 WebShell UI PR 自动生成截图和 GIF 录制，大幅提升代码审查效率。
*   **[CI: 自动化 PR 失败巡查](https://github.com/QwenLM/qwen-code/pull/6766) ([yiliang114])**: 每 10 分钟扫描未通过的 PR 并自动标记，加速回归问题发现。
*   **[修复 VS Code ACP 进程在 Electron Node 模式下运行](https://github.com/QwenLM/qwen-code/pull/6866) ([yiliang114])**: 解决 Windows 上 VS Code 扩展主机的兼容性问题。
*   **[修复 VS Code 聊天输入中的 `@` 误触发](https://github.com/QwenLM/qwen-code/pull/6902) ([chinesepowered])**: 避免了邮箱等场景下的 `@` 符号干扰斜杠命令补全，提升日常使用体验。
*   **[通道结构化记忆管理](https://github.com/QwenLM/qwen-code/pull/6860) ([qqqys])**: 将通道记忆从追加式 Markdown 升级为版本化、结构化的存储，支持分页和精确 ID 操作。
*   **[钉钉 Webhook 单聊投递](https://github.com/QwenLM/qwen-code/pull/6891) ([BenGuanRan])**: 使守护进程触发的钉钉消息可投递到单聊，并复用现有的 token 和错误处理机制。
*   **[模型切换热键 (Ctrl+F)](https://github.com/QwenLM/qwen-code/pull/6486) ([Aleks-0])**: 允许用户通过快捷键在双模型间切换，支持配置和标题栏显示。

## 5. 功能请求趋势

- **单守护多工作区 (Multi-workspace)**: 连续多项 PR 和核心 RFC (#6378) 表明，社区对隔离工作区和统一守护进程管理有强烈需求。
- **热重载与无需重启**: 从配置变更到 MCP/LSP 的动态热加载 (#3696) 仍然是社区持续关注的核心基础设施。
- **子代理通信升级**: 用户希望子代理具备失败回调、状态通知、日志开放等能力，驱动双向通信机制演进 (#5239)。
- **MCP 安全与可信任机制**: 多个 issue 和 PR 聚焦 MCP 的可信上下文、工具权限验证和状态错误处理，安全成为近期提升重点。
- **桌面端 UI 深化**: 社区对集成式右侧栏、卡片式交互、视觉预览等功能提出明确期望，显示用户对桌面端专业化体验的需求增长 (#6896)。
- **通道集成扩展**: 钉钉单聊、心跳信号、结构化记忆等能力表明社区正积极扩展非交互式集成场景。

## 6. 开发者痛点总结

- **安全配置困扰**: 如 `/auth` 配置在新会话中失效、文件规则不能处理符号链接等问题，表明关键安全配置持续让开发者头疼。
- **多会话状态不一致**: 包括内存泄漏 (#2128)、子代理状态不通知 (#5239)、记忆索引陈旧 (#6487) 等，反映长期会话的生态复杂性。
- **UI/UX 不稳定**: TUI 模式滚动刷屏 (#5971)、Ctrl+S 乱码 (#6809)、不同输入法/终端场景的意外退出 (#4586)，持续影响日常使用。
- **模型行为不可控**: 如 YOLO 模式失效、自循环思考迟迟不响应 (#4055)，表明模型调用和工具链调用之间的控制逻辑仍需优化。
- **CI 与回归测试延迟**: 集成测试只在发布时运行 (#5219)，导致回滚和问题暴露较慢，开发者在开发周期内缺乏信心。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-15

**Project:** Codewhale (TUI for multi‑provider AI agents, including DeepSeek)  
**Repository:** [github.com/Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)  
*Note: the host repo is named `Hmbown/CodeWhale`; the community digest continues to refer to the project as CodeWhale.*

---

## Today’s Highlights

The project is wrapping up the **v0.8.68 release candidate**, which finalizes the underwater TUI visual system, receipt settling, and phase‑aware motion. No new releases were cut in the last 24 hours, but significant bug fixes are in flight — notably a wall‑clock budget for `@` file‑index walks to prevent terminal freezes on large directories. The community has also raised important i18n quality concerns (Chinese translation of “Constitution” as “宪法”) and a persistent streaming‑text display lag that users report is worse with faster models like DeepSeek V‑flash.

---

## Releases

None in the last 24 hours.

---

## Hot Issues (10 selected)

1. **[#4032] Codewhale not following the constitution** — *OPEN*  
   > User reports that the agent ignores user‑provided scripts and writes its own temporary ones, then justifies the behaviour. Community debate: 35 comments, high engagement.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4032)

2. **[#4270] Streaming text display lag** — *CLOSED*  
   > Terminal character emission is much slower than the model’s actual output, especially with fast models; text “bursts” after the model finishes. 3 comments, user frustration.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4270)

3. **[#3765] Expose `SeamManager.enabled` and `CompactionConfig.enabled` to config.toml** — *CLOSED*  
   > Both engine mechanisms were hard‑coded to `true`; community requested knobs. Merged in PR #3780.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/3765)

4. **[#4208] TUI copy‑paste polluted with box‑drawing Unicode characters** — *CLOSED*  
   > Selecting text in the terminal includes decorative characters like `╎ ▎ ● │ ┃`, making pasting unusable. 2 comments.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4208)

5. **[#4350] Android/Termux build fails – rquickjs missing bindings** — *CLOSED*  
   > `cargo build` on aarch64‑linux‑android fails because rquickjs doesn’t ship platform bindings. 2 comments.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4350)

6. **[#4369] Unnatural Chinese translation for “Constitution” / “Code”** — *OPEN*  
   > Setup wizard uses “宪法” (constitution) for user rules, which is culturally jarring. Also confusing wizard labels. 1 comment.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4369)

7. **[#4365] `@` file watcher scans entire directory tree eagerly, causing terminal lag** — *OPEN*  
   > Monitoring non‑workspace folders pulls the full subtree immediately, freezing the terminal (especially on pwsh7). 1 comment.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4365)

8. **[#4368] Override kimi base URL and warming of exseed context limit** — *OPEN*  
   > Setting `[providers.moonshot] base_url = "https://api.kimi.com/coding/v1"` fails and context limit is unclear. 1 comment.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4368)

9. **[#4318] Pricing: cache‑write rates dropped by `CurrencyPricing` / `TokenUsage`** — *CLOSED*  
   > `cache_write` pricing field hard‑coded to `0` for Anthropic models, causing incorrect cost display. 1 comment.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4318)

10. **[#4335] Make offline scorecard pricing provider‑aware** — *CLOSED*  
    > Scorecard used model‑only pricing helpers, ignoring provider‑specific routes (OAuth, local, custom). Fixed in PR #4351.  
    [Link](https://github.com/Hmbown/CodeWhale/issues/4335)

---

## Key PR Progress (10 selected)

1. **[#3780] Expose context compaction gates** — *CLOSED*  
   > Addresses #3765 by adding `[compaction].enabled` and `[seam_manager].enabled` engine‑level config.toml switches.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3780)

2. **[#4367] Fix: bound @‑completion file‑index walk with a wall‑clock budget** — *OPEN*  
   > Fixes #4365; applies a time budget to `Workspace::build_file_index` to prevent freezing on large non‑workspace directories.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4367)

3. **[#4351] Fix scorecard: bind costs to provider routes** — *CLOSED*  
   > Offline scorecard now uses exact provider/model routes; fails closed for OAuth/local/custom. Includes `turn_end` metadata.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4351)

4. **[#4354] Add MiniMax Messages provider support** — *CLOSED*  
   > New provider with global and China base URL, models MiniMax‑M3 & M2.7, verified context/pricing.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4354)

5. **[#4360] Fix browser open on BSD systems** — *CLOSED*  
   > Adds platform gates for NetBSD, FreeBSD, OpenBSD, DragonFly so link clicking works in TUI.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4360)

6. **[#4362] Make public site documentation‑led** — *CLOSED*  
   > Replaces marketing‑heavy homepage with compact documentation portal, underwater visual system aligned with TUI typography.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4362)

7. **[#4364] Add keyword search to docs hub and FAQ** — *CLOSED*  
   > Client‑side real‑time search (EN/ZH) with `/` keyboard shortcut for content‑heavy pages.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4364)

8. **[#4366] Fix web: align site brand strings and tidy redesign leftovers** — *CLOSED*  
   > Post‑redesign fix: consistent “Codewhale” wordmark across pages, footer updates, Lighthouse improvements.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4366)

9. **[#4361] Prepare CodeWhale v0.8.68 release candidate** — *CLOSED*  
   > Completes the release branch: underwater TUI, reduced‑motion semantics, keyboard/mouse parity, permission coherence.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4361)

10. **[#4342] Bump rmcp from 1.8.0 to 2.2.0** — *CLOSED*  
    > Dependency update for MCP Rust SDK; includes breaking changes – likely requires minor internal migration.  
    [Link](https://github.com/Hmbown/CodeWhale/pull/4342)

---

## Feature Request Trends

- **I18n and UI improvements** — Multiple requests for natural Chinese translations (e.g., “Constitution” → “准则” instead of “宪法”) and clearer wizard labels.
- **Configuration granularity** — Users want more engine knobs (compaction, seam manager, cache‑write pricing) exposed in `config.toml` rather than hard‑coded.
- **Cross‑platform support** — Android/Termux build fixes and BSD browser opening show growing demand beyond mainstream OSes.
- **Detached agent semantics** — Clear definition of `Esc`/`Stop` for background agents vs. foreground children to avoid confusion.
- **Pricing accuracy** — Provider‑aware cost attribution and complete cache‑write rates are repeatedly requested.

---

## Developer Pain Points

- **Streaming text display lag** — Terminal char emission cannot keep up with fast models (DeepSeek V‑flash, etc.); the “burst” behaviour frustrates users and breaks the interactive illusion.
- **Copy‑paste pollution** — Box‑drawing Unicode characters in copied TUI output make sharing or repurposing text impractical.
- **`@` file‑index freezing** — Large non‑workspace directories cause multi‑second terminal freezes; the current eager scanning is a UX blocker.
- **Android build friction** — Missing rquickjs bindings for `aarch64-linux-android` halt the build, no workaround documented.
- **Key binding discoverability** — Some key shortcuts are not accessible from the terminal UI, leading to confusion (e.g., #4345 “key too unfriendly”).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*