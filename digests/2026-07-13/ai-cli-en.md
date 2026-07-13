# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-13 00:55 UTC | Tools covered: 9

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
**Date:** 2026-07-13

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing a period of **maturation convergence** across seven active projects, with all major tools now supporting multi-model backends, agent-based workflows, and plugin/MCP ecosystems. A pronounced **Windows parity gap** persists across virtually all tools, with platform-specific bugs (clipboard, terminal rendering, file locking) dominating issue trackers. The community is increasingly vocal about **security model fragility**—permission bypasses, false-positive safety classifiers, and authentication token security are cross-cutting concerns. Meanwhile, the **GPT-5.6 family rollout** has created integration turbulence across OpenAI Codex, OpenCode, and Pi, suggesting that model provider updates continue to outpace client-side compatibility testing. Notably, **agent reliability** (false success reports, hang conditions, subagent model overrides) has emerged as the single most discussed category of issues, indicating that the industry is moving beyond basic chat completion toward production-grade agent orchestration.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status | Notable Signal |
|------|-----------------|---------------|----------------|----------------|
| **Claude Code** | 10 active (↑28 avg votes) | 3 open, 0 merged | No release | Highest community engagement; critical permissions bug (#15921) unresolved since Dec 2025 |
| **OpenAI Codex** | 10 active (↑121 max votes) | 3 (2 closed, 1 open) | No release | GPT-5.6 Sol controversy (#31814) dominates; Windows stability issues widespread |
| **Gemini CLI** | 10 active | 10 (4 security) | No release | Most security patches in single day (CVE-2026-47429, CVE-2026-9277); subagent reliability core concern |
| **GitHub Copilot CLI** | 10 active | **1** (low-quality) | No release | Voice mode fully broken (#4024); TUI wedge on WSL2 (#4069) highly upvoted |
| **Kimi Code CLI** | 1 active | 2 open (both 2+ months old) | Stable v2.6 | **Lowest activity**; rate-limit bug uncommented; PR merge bottleneck |
| **OpenCode** | 10 active (↑105 max votes) | 12 (v2-focused) | No release | Clipboard bug (#4283) most commented (113); GPT-5.6 integration issues; v2 config fixes |
| **Pi** | 10 active | **9 merged/closed** | No release | **Highest PR throughput**; compaction bugs critical; Z.AI provider extension added |
| **Qwen Code** | 10 active | 10 open | No release | Multi-workspace RFC (#6378) shaping architecture; CI instability (4 failure issues) |
| **DeepSeek TUI** | 3 active | 6 (5 closed, 1 open) | No release | Anthropic API compatibility fixes; MiniMax provider added; BSD platform support |

**Key insight:** Pi leads in development velocity (9 PRs resolved in 24h), while Claude Code and OpenCode command the highest community attention. Kimi Code shows stagnation risk.

---

## 3. Shared Feature Directions

### 3.1 Model Provider Integration Challenges
- **GPT-5.6 family compatibility** – OpenCode (#36140, #36141), OpenAI Codex (#31814, #31097), Pi (#6569) all report model-not-found errors, missing `reasoning_effort: "max"` variants, and OAuth token routing failures.
- **Rate-limit transparency** – Kimi Code (#2318) TPD miscalculation; OpenCode (#33318) paid users hitting free-tier errors; Qwen's prompt cache invalidation (#6721).
- **Multi-provider cost attribution** – DeepSeek TUI (#4335) offline scorecards not provider-aware; Pi (#6565) adding Z.AI-specific pricing; Gemini's Deep-merge user model config (#28364).

### 3.2 Security & Permission System Evolution
- **Permission bypasses** – Claude Code (#15921) settings.local.json ignored; Copilot CLI (#4103) plugin auth regression; OpenCode (#5076) "allow-by-default" criticized.
- **False-positive safety classifiers** – Claude Code (5+ closed issues); OpenAI Codex (#32095); Gemini's AUP enforcement – users report legitimate work (trading, RMM, modding) blocked.
- **Authentication token injection** – OpenAI Codex (#29898) PAT vs. ChatGPT token conflict; Copilot CLI (#4096) OAuth token not bridged to CLI.

### 3.3 Agent Reliability & Subagent Management
- **False success reports** – Gemini CLI (#22323) subagent reports GOAL despite MAX_TURNS; Claude Code's advisor tool (#67609) unavailable on long transcripts.
- **Subagent model overrides** – OpenAI Codex (#31814, #31097) GPT-5.6 forces MultiAgentV2; Claude Code's agent selection hidden.
- **Background agent lifecycle** – Pi (#5886) settlement/continuation bugs; Copilot CLI (#4101) write_agent blocks until target starts; Qwen Code (#6755) background agents proposal.

### 3.4 Context Window & Compaction
- **Automatic compaction failures** – Pi (#6477, #5463) missing session IDs; Claude Code (#67609) advisor tool crashes at 100K tokens; OpenCode (#33356) 13GB+ SQLite growth.
- **Context lifecycle management** – Qwen Code (#6762) skill bodies bloating prompt; Gemini's memory system (#26522) retries low-signal sessions; Pi's compacting summary coordination (#6578).

### 3.5 Platform Parity & TUI Quality
- **Windows regressions** – Claude Code (#76094) Cowork sandbox; Copilot CLI (#4095) plugin update file lock; OpenCode (#32002) macOS kernel panic; Qwen Code (#6776) terminal garbled after Ctrl-C.
- **Terminal rendering bugs** – Claude Code (#43477) copy-paste; Copilot CLI (#4069) WSL2 wedge; Gemini CLI (#25166) "Awaiting input" stuck; Pi (#6561) auto-wrap double rendering.
- **Clipboard functionality** – OpenCode (#4283) 113 comments; Claude Code (#43477); Copilot CLI (#4070) garbage text on highlight.

### 3.6 Plugin/MCP Ecosystem Hardening
- **MCP tool bridging failures** – Copilot CLI (#4096) OAuth not forwarded; Gemini CLI (#28365) tools.core blocks MCP; Claude Code (#64654) malformed JSON-RPC.
- **Plugin authentication regression** – Copilot CLI (#4103) private repo cloning broken after v1.0.70; Kimi Code (#2181) Windows binary info.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code |
|-----------|-------------|-------------|-------------|-------------|----------|-----|-----------|
| **Primary User** | Enterprise developers, large codebase users | Multi-agent workflow power users | Google ecosystem developers | GitHub-native, VS Code users | Multi-provider power users | Extensibility-focused developers | Chinese developers, Feishu users |
| **Core Differentiator** | Permission model & rules system | Subagent orchestration (MultiAgent V2) | Native bash affinity & sandboxed execution | Voice mode, GitHub integration | Configurable provider routing | Extension API, TUI v2 | Multi-workspace daemon, Web Shell |
| **Technical Approach** | VS Code extension-first; server-side advisor | TUI + desktop app; Python SDK | CLI + npm; ACP/SDK integration | Rust/Go hybrid; bundled ASR | TypeScript; plugin-ecosystem | Zig/Rust for TUI; extensible core | Go/C++ daemon; WebSocket channels |
| **Release Cadence** | Mature, slower | Moderate, model-driven | Active, security-heavy | Moderate, regression-prone | Active, v2-focused | High velocity | Active, CI-invested |
| **Key Weakness** | Permission bypasses unresolved | Subagent model overrides | Subagent false success | Voice broken, single PR | SQLite bloat, clipboard | Compaction failures | CI flakiness, stream handling |

**Niche positions:**
- **Kimi Code** – Minimal activity suggests either stability or maintainer bandwidth constraint.
- **DeepSeek TUI** – Focused on provider compatibility (MiniMax, Anthropic) and platform portability (NetBSD); smallest community footprint.
- **GitHub Copilot CLI** – Unique voice mode and GitHub-native plugin marketplace, but technical debt accumulating (40% of issues are triage/label-gated).

---

## 5. Community Momentum & Maturity

### High Momentum (Active development + engaged community)
- **Claude Code** – Mature project with largest community (28+ avg votes on top issues). However, the unresolved permission bypass (#15921, Dec 2025) and slow PR cycle (0 merges today) suggest **maintenance bottleneck** despite user engagement. Permission system fragility is the primary reputational risk.
- **Pi** – **Highest development throughput** (9 PRs resolved in 24h). Compaction bugs are the critical path. The Z.AI provider extension (#6565) and TUI v2 pager (#6580) show active feature investment. Community is engaged but smaller than Claude/Codex.
- **Qwen Code** – **Architecturally ambitious** (multi-workspace daemon, background agents). CI instability (4 failures today) is a concern, but the stale failure patrol PR (#6766) shows structural response. Chinese developer community is a natural advantage.

### Moderate Momentum (Active issues, slower resolution)
- **OpenAI Codex** – High engagement (121 votes on #31814) but GPT-5.6 integration chaos suggests the model-release cycle outpaces developer tools QA. PR throughput is low (2 closed, 1 open). The key PR (#29898) for token injection security was the only meaningful resolution.
- **OpenCode** – V2 development is active (12 PRs), but the GPT-5.6 integration bugs (#36140, #36141) and clipboard blocker (#4283) dominate. The 13GB SQLite database growth (#33356) is a ticking time bomb for production users. Community is highly vocal but frustrated.
- **Gemini CLI** – Security posture is strong (2 CVEs patched today), and developer tooling is improving (eval report command, dependency updates). However, subagent reliability issues (#22323, #21409) are architectural, not just bugs.

### Low Momentum / Risk Indicators
- **GitHub Copilot CLI** – Only 1 PR (low-quality), voice mode entirely broken, TUI wedging on WSL2. The triage backlog suggests either team understaffing or prioritization away from CLI. **Highest risk of user abandonment** if key flows remain broken.
- **Kimi Code** – 1 issue updated, 2 PRs open since May. Maintainer attention appears minimal. If the rate-limit bug (#2318) isn't addressed, heavy users will migrate.
- **DeepSeek TUI** – Small but productive (6 PRs). Platform portability (NetBSD) and internationalization (Korean) suggest community-driven rather than top-down development. Limited risk due to low expectations.

---

## 6. Trend Signals

### 6.1 Agentic Autonomy & Model Self-Awareness
Multiple communities are pushing for **agent self-knowledge**—the ability to accurately report capabilities, flags, and limitations. Gemini CLI (#21432) requests this directly; Qwen Code's skill context lifecycle (#6762) implies it; Copilot CLI's tool-heavy crash (#4102) shows the limits of current orchestration. **Signal:** The next frontier is not better models but better agent self-architectures that can inspect, report, and adapt to their own capabilities and constraints.

### 6.2 Security as a Competitive Differentiator
The permission bypass, false-positive AUP, and token injection issues represent a **crisis of trust** in AI CLI tools. Claude Code's unresolved bypass (#15921, 8 months old) is the most stark example. OpenCode's community outcry over "allow-by-default" (#5076, 61 👍) signals that **users now expect security-by-default**. Tools that solve this credibly (Gemini's sandboxing proposal #19873, Pi's extension API security model) will have a structural advantage.

### 6.3 Platform Stability as Gatekeeper
Windows and WSL2 issues dominate every tool's bug tracker. Copilot CLI's TUI wedge (#4069), Claude Code's Cowork sandbox regression (#76094), and OpenCode's kernel panic (#32002) are **pipeline-blocking bugs** for Windows-based developers. **Signal:** Cross-platform robustness is the minimum viable requirement—no tool can succeed with first-class support for only macOS/Linux.

### 6.4 Multi-Provider Flexibility Becomes Table Stakes
Every tool either supports multiple providers (OpenCode, Pi, DeepSeek) or is actively moving toward it (Claude Code with MCP, Gemini with ACP). The GPT-5.6 integration chaos across three tools simultaneously shows that **single-provider dependency is a risk**. Communities are voting with their feet: DeepSeek TUI's MiniMax addition (#4352) and Pi's Z.AI extension (#6565) reflect demand for provider optionality.

### 6.5 Context Lifecycle Management Emerges as Critical Infrastructure
Pi's compaction bugs (#6477, #5463), Claude Code's advisor crashes (#67609), and OpenCode's SQLite bloat (#33356) all point to the same problem: **current tools lack robust context lifecycle management**. As sessions grow longer and more productive, compaction, summarization, and memory eviction become non-optional. Qwen Code's skill context compression (#6762) and Gemini's memory system rethink (#26522) are early signals that the ecosystem recognizes this.

### 6.6 Developer Pain Points Converge on "Reliability Over Features"
The top-voted issues across all tools are not feature requests—they are **bugs that break core workflows**: clipboard (OpenCode #4283, Claude Code #43477), copy-paste (Copilot CLI #4070), resume session corruption (Copilot CLI #4098, Pi #5886), and terminal freezes (Copilot CLI #4069, Gemini CLI #25166). **Signal:** The market is saturated with features; the next phase is reliability. Tools that prioritize stability over new capabilities will gain disproportionate trust.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data snapshot:** github.com/anthropics/skills | **Date:** 2026-07-13

---

## 1. Top Skills Ranking

### #1 skill-creator fix: run_eval.py trigger detection & Windows compatibility
**PR #1298** – [View](https://github.com/anthropics/skills/pull/1298)  
**Status:** Open | **Author:** MartinCajiao | **Created:** 2026-06-10

**Functionality:** Fixes the skill-creator evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) which has been reporting `recall=0%` for every description — effectively making the optimization loop optimize against noise. The fix installs the eval artifact as a real skill, corrects Windows stream reading, improves trigger detection logic, and fixes parallel worker behavior.

**Discussion highlights:** This PR addresses the most cited bug in the repository (#556, with 10+ independent reproductions). The community has been unable to reliably optimize skill descriptions since the eval pipeline broke.

---

### #2 document-typography skill
**PR #514** – [View](https://github.com/anthropics/skills/pull/514)  
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04

**Functionality:** Prevents common typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Targets the universal annoyance of Claude's document output formatting.

**Discussion highlights:** Addresses a pain point that "affects every document Claude generates." The community appreciates that users rarely ask for good typography explicitly — this skill makes it automatic.

---

### #3 ODT skill — OpenDocument text creation
**PR #486** – [View](https://github.com/anthropics/skills/pull/486)  
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01

**Functionality:** Full OpenDocument Format support (.odt, .ods) — creation, template filling, and conversion to HTML. Triggers on mentions of ODT, ODS, ODF, LibreOffice, or requests for open-source document formats.

**Discussion highlights:** Fills a notable gap in document format coverage. Interest reflects enterprise demand for LibreOffice-compatible output.

---

### #4 self-audit skill — mechanical verification + reasoning quality gate
**PR #1367** – [View](https://github.com/anthropics/skills/pull/1367)  
**Status:** Open | **Author:** YuhaoLin2005 | **Created:** 2026-06-28

**Functionality:** A meta-skill that audits AI output before delivery — performs mechanical file verification, then a four-dimension reasoning audit in damage-severity priority order. Universal across any project, tech stack, or model.

**Discussion highlights:** Rapid community engagement (updated within 4 days). Represents growing demand for quality assurance meta-skills that catch reasoning failures before delivery.

---

### #5 frontend-design skill clarity overhaul
**PR #210** – [View](https://github.com/anthropics/skills/pull/210)  
**Status:** Open | **Author:** justinwetch | **Created:** 2026-01-05

**Functionality:** Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is actionable within a single conversation with specific, behavior-steering guidance.

**Discussion highlights:** Active discussion around skill design best practices. This PR is a proxy for the broader conversation about what makes a skill effective versus verbose.

---

### #6 testing-patterns skill
**PR #723** – [View](https://github.com/anthropics/skills/pull/723)  
**Status:** Open | **Author:** 4444J99 | **Created:** 2026-03-22

**Functionality:** Covers the full testing stack — testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and what to test vs. what not to test.

**Discussion highlights:** High engagement for a testing-focused skill. The community sees this as filling a gap in code quality skills.

---

### #7 SAP-RPT-1-OSS predictor skill
**PR #181** – [View](https://github.com/anthropics/skills/pull/181)  
**Status:** Open | **Author:** amitlals | **Created:** 2025-12-28

**Functionality:** Integrates SAP's open source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data. Targets enterprise SAP users looking to leverage Claude for business data analysis.

**Discussion highlights:** Extended discussion period suggests enterprise interest but also integration complexity. Represents the enterprise data analytics vertical.

---

## 2. Community Demand Trends

From the most-active Issues, five clear demand directions emerge:

1. **Security & Trust Boundary Management** – Issue [#492](https://github.com/anthropics/skills/issues/492) (34 comments) raises alarm about community skills distributed under the `anthropic/` namespace, creating trust boundary vulnerabilities where users may grant elevated permissions to unofficial skills. This is the most-commented issue in the repository.

2. **Enterprise Skill Sharing & Distribution** – Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 upvotes) requests org-wide skill sharing without manual file transfer. Users want direct sharing links or shared skill libraries within organizations.

3. **Evaluation Pipeline Reliability** – Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 upvotes) documents the critical `run_eval.py` 0% trigger rate bug that renders the description optimization loop non-functional. Multiple duplicates confirm this is the tooling blocker.

4. **Memory & State Management** – Issue [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) proposes a `compact-memory` skill using symbolic notation for compact agent state representation, addressing context window pressure in long-running agents.

5. **Agent Governance & Safety** – Issue [#412](https://github.com/anthropics/skills/issues/412) (6 comments) proposes governance patterns including policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems.

**Notable emerging theme:** Multiple Issues request exposing Skills as MCPs (Model Context Protocol) – Issue [#16](https://github.com/anthropics/skills/issues/16) – signaling community desire for interoperable skill interfaces beyond Claude Code.

---

## 3. High-Potential Pending Skills

These active PRs are likely to land soon based on recency and discussion velocity:

| PR | Skill | Author | Updated | Why It's Moving |
|----|-------|--------|---------|-----------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval fix | MartinCajiao | 2026-06-23 | Addresses the #1 blocker (#556); multiple collaborators involved |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (reasoning quality gate) | YuhaoLin2005 | 2026-07-02 | Rapid iteration; complementary Issue [#1385](https://github.com/anthropics/skills/issues/1385) extends the pipeline |
| [#1261](https://github.com/anthropics/skills/pull/1261) | skill-creator trigger eval isolation | alvingarcia | 2026-07-08 | Fixes eval files polluting live project `.claude/commands/` |
| [#1323](https://github.com/anthropics/skills/pull/1323) | skill-creator trigger detection fix | Polluelo978 | 2026-06-25 | Fixes `recall=0%` due to missed real skill name and early bailout |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert skill | meodai | 2026-06-12 | Comprehensive color knowledge (ISCC-NBS, Munsell, OKLCH, CAM16); self-contained |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows subprocess fix | joshuawowk | 2026-05-24 | Unblocks Windows users from running eval at all |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows PATHEXT + encoding fix | gstreet-ops | 2026-05-24 | Companion to #1099; two 1-line Windows fixes |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is making the skill creation and evaluation toolchain reliable (fixing `run_eval.py`'s 0% recall bug and Windows compatibility), with secondary demand for meta-skills that ensure output quality (reasoning audits, typographic control) and enterprise integration (SAP, ODT, org-wide sharing, trust boundaries).**

---

# Claude Code Community Digest — 2026-07-13

## Today's Highlights
A quiet day with no new releases, but the community is buzzing around a critical permissions bypass bug in the VS Code extension (#15921) and a server-side advisor tool crash when using `claude-fable-5` with long transcripts (#67609). The only PR activity comes from a single contributor fixing label management and plugin‑dev validation scripts, while multiple new issues highlight Windows sandbox regressions and false‑positive safety classifiers.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#15921 – VSCode Extension: `.claude/settings.local.json` permissions not respected (even with `bypassPermissions` mode)](https://github.com/anthropics/claude-code/issues/15921)**  
   *28 comments, 28 👍*  
   A critical bug where Bash/Write/Edit operations ignore permission rules defined in the VS Code extension’s local settings file. Users report that `bypassPermissions` mode also fails to override the behavior. This is the longest‑running open bug on the list (filed Dec 2025) and still unresolved.

2. **[#67609 – Advisor tool returns "unavailable" on `claude-fable-5` when transcript exceeds ~100K tokens](https://github.com/anthropics/claude-code/issues/67609)**  
   *20 comments, 38 👍*  
   Server‑side advisor tool errors out with `advisor_tool_result_error` for conversations longer than ~100K tokens. The model effectively bricks once context grows, making it unusable for large codebases. Community workarounds include manual session splitting.

3. **[#64654 – GitHub MCP plugin fails with HTTP 400 – malformed JSON‑RPC payload missing version tag](https://github.com/anthropics/claude-code/issues/64654)**  
   *16 comments, 41 👍*  
   The official `plugin:github` issues malformed JSON‑RPC requests (missing `jsonrpc` version field), breaking the entire GitHub integration. Users have confirmed the bug on macOS and the high upvote count indicates widespread impact.

4. **[#43477 – Copying text (Ctrl+C) from Claude Code window in VS Code fails](https://github.com/anthropics/claude-code/issues/43477)**  
   *14 comments, 2 👍*  
   A persistent Windows‑specific bug where the clipboard is not populated when selecting text in the VS Code extension’s Claude Code panel. Simple copy‑paste workflow broken for many.

5. **[#43113 – [Feature] Flag to emit long lines and let terminal handle word wrapping](https://github.com/anthropics/claude-code/issues/43113)**  
   *10 comments, 51 👍 (highest 👍 count among open issues)*  
   The top‑voted feature request: users want a `--no-word-wrap` flag so Claude Code does not insert hard newlines in prose/markdown output. This would improve readability in terminal emulators that handle wrapping natively.

6. **[#57132 – Allow rules under `~/.claude/` show as loaded but don't match at runtime](https://github.com/anthropics/claude-code/issues/57132)**  
   *9 comments*  
   Permission rules targeting paths under `~/.claude/` are accepted and displayed but silently ignored during file operations. Confusing and undermines trust in the permission system.

7. **[#76094 – Cowork sandbox fails on Windows with SDK 2.1.202 – VM guest crashes with "connection forcibly closed"](https://github.com/anthropics/claude-code/issues/76094)**  
   *5 comments*  
   A regression from SDK 2.1.181 → 2.1.202 broke Cowork’s sandbox VM on Windows, halting `sdk_install` with a network disconnect. High priority for Windows users of the collaborative feature.

8. **[#76694 – Cowork: new projects lost "Choose a folder" after Chat/Cowork merge](https://github.com/anthropics/claude-code/issues/76694)**  
   *4 comments*  
   The recent Chat/Cowork UI merge replaced the project folder picker with an upload‑only knowledge menu. Users can no longer select a local directory for a new Cowork project.

9. **[#76743 – Windows: click‑to‑focus accidentally submits pending permission dialog](https://github.com/anthropics/claude-code/issues/76743)**  
   *4 comments*  
   When a permission prompt is pending and the window is unfocused, the user’s first click (to focus the window) lands on the dialog button, inadvertently approving or rejecting. Dangerous UX.

10. **[#58812 – Session grouping by directory not working in `claude agents` view](https://github.com/anthropics/claude-code/issues/58812)**  
    *3 comments, 4 👍*  
    The agent view’s directory grouping feature shows all sessions under one directory regardless of their origin, making session management confusing.

## Key PR Progress
Only three pull requests were updated in the last 24 hours. No merges reported.

1. **[#76986 – fix(scripts): preserve existing labels when auto‑closing duplicate issues](https://github.com/anthropics/claude-code/pull/76986)**  
   *Open* – Patches the `auto-close-duplicates` script to avoid overwriting the full label set with just `["duplicate"]`. Now appends the duplicate label while keeping existing project/area labels.

2. **[#76985 – fix(plugin‑dev): read full multi‑line description in `validate-agent.sh`](https://github.com/anthropics/claude-code/pull/76985)**  
   *Open* – Fixes the agent validation script that only extracted the first line of a multi‑line `description` frontmatter, losing important information.

3. **[#15165 – Update README.md](https://github.com/anthropics/claude-code/pull/15165)**  
   *Closed* – A documentation fix updating a broken URL (merged months ago, re‑updated status today).

## Feature Request Trends
- **Terminal output control** – Strong demand (#43113, 51 👍) for a `--no-word-wrap` flag to let the terminal handle line breaks rather than Claude inserting hard newlines.
- **VS Code extension parity** – Users want model name, effort mode, and usage indicators in the chat input, matching the desktop app (#77003). Also request for RTL text support (#75196).
- **Session management** – Auto‑save sessions on every interaction (#77011) and manual completion of agent sessions (#58215) are frequently requested to prevent accidental loss of work.
- **Permission system improvements** – Better clarity on what rules are actually enforced (#57132) and a non‑persistent bypass mode (#65848).

## Developer Pain Points
- **Permission model fragility** – Rules may not be respected (#15921, #57132), and click‑through attacks on Windows (#76743) erode security confidence.
- **Context window limitations** – The advisor tool hard‑fails on large transcripts (#67609) and false 1M‑context‑required errors (#63817, #65818) waste developer time.
- **False‑positive safety/AUP classifiers** – Multiple closed bugs (#65873, #65846, #65890, #77002) describe legitimate development work (trading app, RMM, Minecraft modding) being blocked by cybersecurity safeguards. The recent "cyber‑related safeguards" change appears overly broad.
- **Cowork & sandbox reliability** – Windows sandbox regression (#76094) and UI regression after merge (#76694) break collaborative workflows.
- **Windows platform issues** – Copy/paste broken (#43477), installer migration orphans shortcuts (#76980), and anti‑cheat driver crashes (#77012) show ongoing platform parity gaps.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-13

## Today's Highlights
The community remains concentrated on **GPT-5.6 Sol’s aggressive subagent model overrides** (Issue #31814, 56 comments, 121 👍), with users reporting that the model silently forces all spawned subagents to use Sol instances regardless of configuration. Additionally, **Windows client issues dominate**—frequent freezes (#20214), stuck Remote Control pairing (#31973), and browser crashes (#30178) continue to frustrate Windows users on Plus and Pro plans. On the PR side, a security fix (#29898) blocking ChatGPT token injection when PAT auth is active was merged, and a promising feature for editing earlier prompts via session forks (#30504) is under review.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
*(10 noteworthy issues updated in the last 24 hours)*

1. **[#31814 – GPT-5.6 Sol cannot specify subagent models](https://github.com/openai/codex/issues/31814)**  
   **Why it matters:** GPT-5.6 Sol forces MultiAgent V2 and hides spawn‑agent metadata, overriding user‑set subagent models. 121 thumbs and 56 comments signal widespread community frustration. Many users report they can no longer control agent selection in complex workflows.

2. **[#18960 – Frequent reconnect loop in Codex App](https://github.com/openai/codex/issues/18960)**  
   **Why it matters:** WebSocket closures before response completion cause repeated reconnects, especially on macOS Pro. 51 comments and 39 thumbs indicate this is a high‑impact connectivity bug affecting daily coding sessions.

3. **[#20214 – Codex App freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**  
   **Why it matters:** Even on systems with 32 GB RAM and Ryzen 5600, the desktop app becomes unresponsive. 48 thumbs and 34 comments show this is a top Windows‑stability pain point.

4. **[#25271 – Computer Use cannot determine Chrome URL on Windows](https://github.com/openai/codex/issues/25271)**  
   **Why it matters:** The browser automation feature fails even on `chrome://newtab/`, breaking computer‑use workflows on Windows. 17 comments suggest it’s a blocking issue for automation users.

5. **[#31097 – GPT-5.5 forces MultiAgentV2 and hides custom controls](https://github.com/openai/codex/issues/31097)**  
   **Why it matters:** Similar to #31814 but for GPT‑5.5; users report being unable to disable MultiAgentV2 or access documented agent controls. 6 comments with 6 thumbs show growing concern about model‑imposed defaults.

6. **[#32095 – False positive cybersecurity flag](https://github.com/openai/codex/issues/32095)**  
   **Why it matters:** GPT‑5.6 Sol incorrectly flagged a normal Codex request as suspicious activity. 5 comments and 3 thumbs reflect anxiety about trustworthiness of safety checks.

7. **[#31973 – Windows Remote Control permanently stuck in “Reconnecting…”](https://github.com/openai/codex/issues/31973)**  
   **Why it matters:** No manual recovery possible once the state is entered. 5 comments and 0 thumbs but describes a complete remote control outage for Windows‑based ChatGPT Mobile pairing.

8. **[#27284 – SSH remote project shows “No chats” despite existing threads](https://github.com/openai/codex/issues/27284)**  
   **Why it matters:** 8 comments from users who lose access to remote session history after reconnecting. Affects SSH workflows used by many team environments.

9. **[#32640 – Built-in `wait` tool capped at ~50s causes massive token burn](https://github.com/openai/codex/issues/32640)**  
   **Why it matters:** MultiAgent V2 re‑samples every 50 seconds when using `wait`, leading to excessive token consumption. 4 comments, but the cost implication is significant for Pro users.

10. **[#29088 – Up arrow pops last queued prompt instead of browsing history](https://github.com/openai/codex/issues/29088)**  
    **Why it matters:** A regression in prompt history navigation—up arrow behavior changed after a recent update. 3 thumbs and 2 comments, but the UX impact is broad for daily users.

## Key PR Progress
*(Only 3 PRs were updated in the last 24 hours; all are listed below.)*

1. **[#29898 – Preserve PAT auth against host token injection](https://github.com/openai/codex/pull/29898)** *(CLOSED)*  
   **What:** Rejects `account/login/start` calls containing `chatgptAuthTokens` when a personal‑access‑token is active. Includes end‑to‑end regression tests and documentation for the auth transition restriction.  
   **Why it matters:** Closes a security gap where a compromised host could inject ChatGPT token into a PAT‑authenticated session.

2. **[#30504 – Edit previous prompts using session forks](https://github.com/openai/codex/pull/30504)** *(OPEN)*  
   **What:** Replaces destructive `thread/rollback` with session forking when editing earlier prompts in the TUI. Branching instead of mutating history preserves the original conversation.  
   **Why it matters:** Users have long requested a non‑destructive way to correct earlier instructions—this PR directly addresses that UX pain point.

3. **[#32628 – Improve composer completion target resolution](https://github.com/openai/codex/pull/32628)** *(CLOSED)*  
   **What:** Resolves `@` and `$` completion targets on either side of the cursor, treating atomic text elements and line breaks as boundaries. Prefers the nearest editable mention when file, skill, and plugin candidates compete.  
   **Why it matters:** Makes the composer more predictable and reduces accidental completions in complex prompts.

## Feature Request Trends
The most‑requested feature directions emerging from recent issues and PRs include:

- **Agent customisation & local overlays** – Several issues (#28739, #31814, #31097) ask for `AGENTS.local.md` additive overlays, `@`‑reference expansion, and source file attribution (similar to Claude Code’s provenance features). Users want both per‑user and per‑project control over agent behavior.
- **On‑demand automations** – Issue #28064 requests an explicit “run now” trigger for existing scheduled automations, bypassing the wait for the next recurrence.
- **Non‑destructive prompt editing** – PR #30504 aligns with community requests for branching (fork) instead of destructive rollback when editing earlier conversation turns.
- **Better terminal & TUI experience** – Issue #11877 complains about excessive terminal animations, and others ask for smoother terminal rendering on macOS.

## Developer Pain Points
Recurring frustrations identified from high‑frequency issues include:

- **Windows client instability** – Freezes (#20214), browser crashes (#30178), remote control dead‑ends (#31973), and sandbox setup failures (#32492) are the top pain points for Windows users.
- **Model‑imposed subagent overrides** – GPT‑5.5 and GPT‑5.6 Sol force MultiAgent V2 and ignore user agent configuration (#31814, #31097), causing confusion and lost customisation.
- **Connectivity/reconnect loops** – WebSocket closures and SSH session loss (#18960, #27284) interrupt long‑running tasks and reduce developer trust.
- **False positive safety flags** – Legitimate coding requests incorrectly flagged as cybersecurity threats (#32095) erode confidence in automatic safety checks.
- **Authentication & login friction** – Issues with unknown phone numbers (#32657), duplicate app detection (#31944, #32631), and Norton antivirus false positives (#32331) create barriers to entry and recovery.
- **Performance regressions** – The `wait` tool token burn (#32640) and MCP stack retention per chat (#32154) lead to unexpected cost spikes and memory overhead.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-13

## Today's Highlights
No new releases landed in the last 24 hours, but the project saw a flurry of activity around critical security patches (CVE-2026-47429 in Vitest, CVE-2026-9277 in shell-quote) and an important bug fix that prevented MCP tools from being disabled via `tools.core`. Community discussion continues to focus on subagent reliability – a long-standing issue where agents falsely report `GOAL` success when interrupted by turn limits remains a top concern. A massive bulk dependency update touching 74 npm packages also rolled in.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **Subagent recovery false success** – [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
   The `codebase_investigator` subagent reports `status: "success"` even when it hit `MAX_TURNS` without doing any work. Highly commented (10), with maintainer-only discussion.

2. **Generalist agent hangs** – [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   Simple tasks like folder creation cause the CLI to hang indefinitely when it defers to the generalist subagent. 8 reactions, 7 comments – a clear user pain point.

3. **Zero-Dependency OS Sandboxing** – [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
   An enhancement request to leverage Gemini 3’s native bash affinity via sandboxed execution. High-effort, P2, with 8 comments spanning months of discussion.

4. **Agent doesn’t use skills/sub‑agents enough** – [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
   Users report custom skills are ignored unless explicitly named. 6 comments, indicative of a broader discoverability/self-awareness gap.

5. **Shell command stuck after completion** – [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
   CLI shows “Awaiting input” after a command finishes, forcing cancellation. Impactful with 3 reactions and 4 comments.

6. **Browser subagent fails on Wayland** – [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
   Browser agent terminates with `GOAL` when running under Wayland – a platform compatibility blocker.

7. **Auto Memory retries low-signal sessions** – [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)  
   Sessions that the extraction agent skips (as low-signal) remain unprocessed and get re-surfaced repeatedly. 5 comments, part of a memory system bug cluster.

8. **Symlink in agents folder not recognized** – [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)  
   A simple dev‑UX issue: symlinks to agent files are ignored entirely. 4 comments, P2.

9. **400 error with >128 tools** – [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)  
   When too many tools are available, the CLI hits a 400 error. Suggests lacking tool‑scoping logic.

10. **Model creates tmp scripts in random spots** – [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)  
    The agent’s shell‑only mode generates temporary scripts scattered across directories, making cleanup difficult. 3 comments.

## Key PR Progress
1. **Fix MCP tools silently disabled by `tools.core`** – [#28365](https://github.com/google-gemini/gemini-cli/pull/28365)  
   Adds `builtinOnly` flag to policy rules so that denying `tools.core` no longer wipes out MCP tools. P1, agent area.

2. **Security: Upgrade vitest to 4.1.0 (CVE-2026-47429)** – [#28368](https://github.com/google-gemini/gemini-cli/pull/28368)  
   Critical vulnerability fix. Upgrades vitest from 3.2.4 to 4.1.0 / 3.2.6. Likely exploitable in CI.

3. **Security: Upgrade shell-quote to 1.8.4 (CVE-2026-9277)** – [#28367](https://github.com/google-gemini/gemini-cli/pull/28367)  
   Critical trivy‑detected CVE in shell‑quote. Patch applied for all users.

4. **Deep‑merge user model config over defaults** – [#28364](https://github.com/google-gemini/gemini-cli/pull/28364)  
   Fixes a config merging bug where user overrides were shallow‑copied, causing nested settings to be lost. P2, core area.

5. **Prevent AbortSignal listener leak in ShellExecutionService** – [#28363](https://github.com/google-gemini/gemini-cli/pull/28363)  
   Explicitly removes the signal listener after process completion to avoid memory leaks in long sessions. Fixes #28280.

6. **Add local eval report command** – [#28369](https://github.com/google-gemini/gemini-cli/pull/28369)  
   New `npm run eval:report` aggregates Vitest pass rates by model and maps to inventory policies – useful for larger eval pipelines.

7. **Tidy implementation related to #28340** – [#28366](https://github.com/google-gemini/gemini-cli/pull/28366)  
   Small scoped patch for reported behavior. P1, core area.

8. **Bulk dependency update (74 npm packages)** – [#28377](https://github.com/google-gemini/gemini-cli/pull/28377)  
   Mega‑PR from Dependabot updating the entire npm dependencies group. Includes security patches.

9. **Bump puppeteer-core to 25.3.0** – [#28382](https://github.com/google-gemini/gemini-cli/pull/28382)  
   Major version bump for the browser automation library used by the browser subagent.

10. **Bump @agentclientprotocol/sdk to 1.1.0** – [#28378](https://github.com/google-gemini/gemini-cli/pull/28378)  
    Major SDK bump – likely brings breaking changes for MCP integration.

## Feature Request Trends
- **AST-aware code understanding** – Several issues explore using AST tools (e.g., `tilth`, `glyph`) for precise file reads, search, and codebase mapping to reduce token waste and turn count ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Sandboxed shell execution** – Strong desire for zero‑dependency, secure OS sandboxing to allow the model to use native bash/POSIX tools without security risk ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
- **Agent self‑awareness** – Users want the CLI to accurately report its own flags, hotkeys, and capabilities so it can act as its own guide ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Subagent trajectory visibility** – Easier sharing and inspection of subagent traces via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
- **Component‑level evaluations** – Formal, automated evaluations for subagent behavior, not just end‑to‑end tests ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)).
- **Destructive behavior prevention** – The agent should avoid or warn before using dangerous commands (`git reset --force`, destructive DB changes) ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

## Developer Pain Points
- **Subagent reliability** – Hangs, false success reports (GOAL despite interruption), and failure to use custom skills erode trust in the agent workflow.
- **Memory system churn** – Auto Memory retries low‑signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), invalid patches go unnoticed ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and logging may leak secrets ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Terminal UX glitches** – Shell commands stuck after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), flicker on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), corruption after external editor exit ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)).
- **Configuration & discovery gaps** – Symlinks not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), settings ignored by browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), tools.core blocking MCP tools accidentally ([#28365](https://github.com/google-gemini/gemini-cli/pull/28365)).
- **Security vulnerabilities** – Two critical CVEs (Vitest, shell‑quote) had to be addressed urgently via Dependabot, indicating ongoing risk in the dependency chain.
- **Tool overhead** – Model generates many temporary scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) and hits API errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), pointing to a need for better tool scoping and workspace management.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-13

## Today’s Highlights
No new releases were published in the last 24 hours, but the repository saw a surge of critical bug reports. Notable issues include a complete failure of all bundled ASR models in voice mode, a terminal wedge on WSL2 that resists even hard kill signals, and a native V8 crash during tool-heavy sessions. The single pull request appears to be a low‑quality submission (title in Chinese: “安全性”) and carries no meaningful discussion.

## Releases
No releases in the last 24 hours.

## Hot Issues (10 selected)
1. **[#4024 – Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)**  
   *area:models* – Every `/voice` transcription returns empty, regardless of which `nemotron` model is selected. The microphone recording is confirmed working, pointing to a bug in the `MultiModalProcessor` routing for `nemotron_speech` (RNNT). 8 comments, no upvotes yet.

2. **[#4069 – TUI wedges mid-turn on WSL2 (EIO/EPIPE cascade)](https://github.com/github/copilot-cli/issues/4069)**  
   *area:input-keyboard, area:terminal-rendering* – Screen clears, keyboard input dead, `Ctrl+C` ignored. The error chain is `write EIO` on stdout followed by `EPIPE` on the Rust JSON‑RPC transport. 8 👍, 7 comments – one of the most upvoted open issues.

3. **[#4102 – Native V8 array-length crash during tool-heavy turns & session resume](https://github.com/github/copilot-cli/issues/4102)**  
   *triage* – Packaged Linux x64 binary aborts inside V8 when the assistant runs many tool calls or resumes a conversation. The crash happens even with automatic restoration disabled, suggesting a deeper memory issue. 1 comment.

4. **[#4103 – Plugin marketplace clone disables Git credential helpers](https://github.com/github/copilot-cli/issues/4103)**  
   *triage* – Cloning a plugin from a private Azure DevOps HTTPS repo fails, though manual cloning works. Identified as a regression from the v1.0.70 “fail fast when marketplace plugin git auth needed” change. 0 comments.

5. **[#4098 – Session resume leaves truncated & concatenated events in events.jsonl](https://github.com/github/copilot-cli/issues/4098)**  
   *area:sessions* – Resumed sessions produce malformed JSONL records where incomplete event prefixes are concatenated with complete events, preventing further resumes. 2 comments.

6. **[#4101 – write_agent blocks until target background agent starts processing](https://github.com/github/copilot-cli/issues/4101)**  
   *triage* – Sending a message to an idle background agent via `write_agent` does not return control until the target agent wakes up and starts actively running, causing user input to queue. 0 comments.

7. **[#4070 – Garbage text when highlighting text for copy](https://github.com/github/copilot-cli/issues/4070)**  
   *area:input-keyboard, area:terminal-rendering* – Highlighting output for copy inserts random garbage into the input line. `Ctrl+C` adds even more garbage. 0 comments.

8. **[#4094 – Deleting a session in the app doesn’t remove it from shared store](https://github.com/github/copilot-cli/issues/4094)**  
   *area:sessions* – Sessions deleted from the Copilot app UI remain in `~/.copilot` (data.db, session-store.db, vscode metadata). Causes orphaned entries in VS Code Chat history. 0 comments.

9. **[#4095 – Windows: plugin update fails “Access is denied” while VS Code runs](https://github.com/github/copilot-cli/issues/4095)**  
   *area:platform-windows, area:plugins* – `copilot plugin update` fails with `os error 5` because the VS Code Copilot extension holds watcher handles on the `installed-plugins` directory. 0 comments.

10. **[#4096 – Third-party MCP tools missing from CLI sessions (OAuth token not bridged)](https://github.com/github/copilot-cli/issues/4096)**  
    *area:authentication, area:mcp* – An Atlassian Remote MCP server shows “Connected” in the app UI, but its tools never appear in CLI sessions. The OAuth token obtained in the app is not forwarded to the CLI agent. 0 comments.

## Key PR Progress
Only one pull request was updated in the last 24 hours:  
- **[#4100 – “安全性” (Security)](https://github.com/github/copilot-cli/pull/4100)**  
  Opened by a new contributor with no description. The title is Chinese for “security”, but the PR appears to be a placeholder or low‑effort submission. No reviews or comments. No other PRs are under active discussion.

## Feature Request Trends
The most requested feature directions emerging from the issues include:
- **Voice mode reliability** – Users expect ASR to work out of the box; current silent failures are a blocker.
- **Faster agent concurrency** – Several issues hint at the need for non‑blocking background agent communication (e.g., `write_agent` should not stall the calling agent).
- **Better session management** – Persistence, deletion, and resume must be robust (JSONL corruption, orphaned sessions, binary bloat).
- **Plugin ecosystem hardening** – Git credential handling for private repos and Windows file‑handle conflicts are recurring themes.
- **Terminal rendering polish** – Garbage text on copy, light theme contrast, and wedge/freeze scenarios all point to the need for a more robust TUI.

## Developer Pain Points
- **Terminal freeze / unresponsive UI** (#4069, #4070) – The TUI can become completely wedged, requiring OS‑level kill; highlight‑and‑copy corruption wastes time.
- **Voice mode completely broken** (#4024) – All models fail, making `/voice` unusable despite functional hardware.
- **Session corruption and data loss** (#4098, #4094, #4097) – Resuming sessions often leads to malformed histories, orphaned DB entries, or oversized payloads that break the `/compact` command.
- **Regression in plugin authentication** (#4103) – A recent “improvement” broke private HTTPS cloning, disrupting users of Azure DevOps and similar platforms.
- **Cross‑process file lock on Windows** (#4095) – Developers who keep VS Code open cannot update plugins, a daily workflow blocker.
- **MCP tool bridging failure** (#4096) – Third‑party servers appear connected but their tools are invisible in CLI sessions, undermining the whole MCP integration.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-13

## Today's Highlights
Activity remains calm over the weekend with no new releases. The community is focused on two long-standing pull requests that address Windows compatibility and robustness. A single open issue highlights persistent rate-limit frustrations with the moonshot.ai platform under the `kimi2.6` model.

## Releases
No new releases in the last 24 hours. The latest stable version remains **kimi 2.6**.

## Hot Issues
Only one issue was updated in the past 24 hours:

- **[#2318] [bug] request reached organization TPD rate limit, current: 1505241**  
  *Author: globalvideos272-lab | Updated: 2026-07-12 | 👍 1*  
  A user on Windows 10 reports that the CLI incorrectly calculates TPD (tokens per day) usage, causing false rate-limit errors. The issue has been open since May without comments, suggesting low maintainer priority or difficulty reproducing.  
  [GitHub Issue](https://github.com/MoonshotAI/kimi-cli/issues/2318)

*No other issues were updated in the last 24 hours.*

## Key PR Progress
Two pull requests received updates in the past 24 hours. Both are from core contributor *he-yufeng* and have been open for over two months.

- **[#2181] fix: add Windows binary version info**  
  *Author: he-yufeng | Updated: 2026-07-12*  
  Adds proper `FileVersionInfo` metadata to the Windows PyInstaller builds (one-file and one-dir). Includes a CI assertion to prevent future releases from shipping with empty version strings. Fixes #2178.  
  [GitHub PR](https://github.com/MoonshotAI/kimi-cli/pull/2181)

- **[#2350] fix: tolerate non-utf8 worker output**  
  *Author: he-yufeng | Updated: 2026-07-12*  
  Prevents `UnicodeDecodeError` when child processes emit locale-encoded bytes (e.g., cp1252 smart quotes) on Windows. The web session runner now gracefully decodes worker stdout/stderr, ensuring real failures are not masked by encoding issues. Fixes #2313.  
  [GitHub PR](https://github.com/MoonshotAI/kimi-cli/pull/2350)

## Feature Request Trends
Based on the recently updated issue and the general state of the repository, the most requested feature directions include:
- **Rate-limit transparency** – Users want better feedback on TPD consumption and more granular control over request pacing.
- **Windows parity** – Repeated fixes and issues (e.g., #2181, #2350) highlight a demand for first-class Windows support, including encoding and packaging.
- **Stability in long-running sessions** – The non-UTF‑8 fix (#2350) reflects a recurring pain point around worker failures in web sessions.

## Developer Pain Points
- **Rate-limit friction**: The TPD calculation error (#2318) blocks heavy users, and the lack of a response suggests maintainers may be focusing on other priorities.
- **Encoding issues on Windows**: Child process output encoding remains a common source of cryptic errors, especially with non-ASCII characters.
- **Slow PR merge cycle**: Both key PRs have been open since May 2026, indicating a bottleneck in review or testing. This can discourage external contributions.

---
*Digest generated from GitHub data for 2026-07-13.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Okay, here is the OpenCode community digest for 2026-07-13, based on the provided GitHub data.

---

## OpenCode Community Digest - 2026-07-13

This week’s activity centers on the fallout from the GPT-5.6 family rollout, with developers reporting OAuth integration issues and missing "max" reasoning effort settings. Stability concerns persist, highlighted by a long-standing clipboard bug and reports of unbounded SQLite database growth. On the development front, the team is actively fixing config loading for the upcoming v2 release and improving the TUI with better agent and terminal management features.

### Releases
No new versioned releases were published in the last 24 hours. The artifacts uploaded (`pr-36567-evidence`, `pr-36516-evidence`) are verification and visual evidence assets for specific pull requests, not stable builds.

### Hot Issues
*   **[#4283](https://github.com/anomalyco/opencode/issues/4283) Copy To Clipboard is not working (OPEN)**
    *   **Reaction:** 105 👍, 113 comments
    *   **Why it matters:** This is the community's most pressing issue. The sheer volume of engagement signals a highly disruptive UI/UX bug affecting a core user action across all platforms. Likely a high-priority fix.
*   **[#36140](https://github.com/anomalyco/opencode/issues/36140) GPT-5.6 Luna returns model not found with ChatGPT OAuth (OPEN)**
    *   **Reaction:** 84 👍, 24 comments
    *   **Why it matters:** Highlights an immediate integration problem with the latest OpenAI models via OAuth, blocking users who rely on this auth method from accessing the new `gpt-5.6-luna` model.
*   **[#5076](https://github.com/anomalyco/opencode/issues/5076) OpenCode should have better/safer defaults (CLOSED)**
    *   **Reaction:** 61 👍, 13 comments
    *   **Why it matters:** Although closed, this issue reflects strong, ongoing community sentiment about security. The high number of upvotes suggests the "allow-by-default" permission model is a significant concern for many users.
*   **[#14273](https://github.com/anomalyco/opencode/issues/14273) [bug] Free usage exceeded... when using Zen free models (CLOSED)**
    *   **Reaction:** 1 👍, 35 comments
    *   **Why it matters:** This issue and its successor [#33318](#33318) indicate a confusing and buggy credit/usage billing system for Zen, a core monetization feature. The discussion likely frustrated users whose credits were not being honored.
*   **[#33318](https://github.com/anomalyco/opencode/issues/33318) [URGENT] Zen paid balance still hits FreeUsageLimitError (OPEN)**
    *   **Reaction:** 0 👍, 8 comments
    *   **Why it matters:** Marked as urgent, this is the latest in a series of billing bugs. Paid users hitting free-tier limits is a critical revenue and trust problem.
*   **[#3743](https://github.com/anomalyco/opencode/issues/3743) Loop in certain models (OPEN)**
    *   **Reaction:** 12 👍, 26 comments
    *   **Why it matters:** This issue describes a common and frustrating failure mode in LLM agents—infinite tool-calling loops. It affects multiple models (Kimi, MiniMax, GLM), suggesting a general robustness problem rather than a provider-specific bug.
*   **[#33356](https://github.com/anomalyco/opencode/issues/33356) Unbounded growth of the `event` table... (OPEN)**
    *   **Reaction:** 0 👍, 4 comments
    *   **Why it matters:** A critical stability issue where the local database file can grow to 13GB+. This is a ticking time bomb for long-running instances, leading to disk full errors and data loss. Related PRs [#36570](#36570) and [#36523](#36523) are working on a fix.
*   **[#22132](https://github.com/anomalyco/opencode/issues/22132) OpenCode 1.4.3 hangs with local Ollama provider... (OPEN)**
    *   **Reaction:** 5 👍, 15 comments
    *   **Why it matters:** A persistent issue with a popular local provider. OpenCode hanging on simple prompts while direct API calls work points to a potential integration or timeout issue within the OpenCode SDK.
*   **[#36141](https://github.com/anomalyco/opencode/issues/36141) GPT-5.6 models missing max reasoning effort variant (CLOSED)**
    *   **Reaction:** 8 👍, 5 comments
    *   **Why it matters:** This was a quickly addressed gap. The lack of parity with the official OpenAI API's `reasoning_effort: "max"` was a clear missing feature for power users wanting maximum model capability.
*   **[#32002](https://github.com/anomalyco/opencode/issues/32002) [Bug] Kernel panic... via EndpointSecurity — opencode.exe (OPEN)**
    *   **Reaction:** 0 👍, 5 comments
    *   **Why it matters:** A severe, platform-specific bug causing macOS kernel panics. While affecting fewer users, this "blue screen of death" level of severity is a top-tier priority for impacted Mac developers.

### Key PR Progress
*   **[#36534](https://github.com/anomalyco/opencode/pull/36534) fix(tui): show background shell completion (OPEN)**
    *   Improves the TUI's UX by showing a clear "completion boundary" for background shell tasks, making concurrent agent activity more transparent.
*   **[#36579](https://github.com/anomalyco/opencode/pull/36579) fix(core): merge model.request.headers into SDK options (OPEN)**
    *   Fixes a blocking bug where custom headers (e.g., for API keys or routing) were being silently dropped before API calls, impacting proxy and custom provider setups.
*   **[#36577](https://github.com/anomalyco/opencode/pull/36577) fix(core): load config across git boundaries (CLOSED)**
    *   A critical fix for the v2 branch that ensures global configurations are correctly applied when OpenCode is run from subdirectories, resolving [#36539](https://github.com/anomalyco/opencode/issues/36539).
*   **[#36570](https://github.com/anomalyco/opencode/pull/36570) fix(core): preserve sqlite error details (OPEN)**
    *   Aims to improve debuggability of SQLite errors (related to the database growth issue) by passing through the actual error message instead of a generic "Failed to execute statement".
*   **[#36561](https://github.com/anomalyco/opencode/pull/36561) & [#36560](https://github.com/anomalyco/opencode/pull/36560) feat(plugin): flat tool draft with namespace... (OPEN)**
    *   These two PRs refactor the tool registration system to be simpler (flat tool drafts), introduce `namespace` and `pinned` fields, and replace `deferred` with `codemode`. This is a significant improvement to plugin developer ergonomics.
*   **[#36576](https://github.com/anomalyco/opencode/pull/36576) fix(app): prevent terminal mount from stealing focus (OPEN)**
    *   A UX polish PR that prevents terminal panels from aggressively stealing keyboard focus, a common annoyance in terminal-based UIs.
*   **[#36574](https://github.com/anomalyco/opencode/pull/36574) fix(github-copilot): set Copilot-Integration-Id header... (OPEN)**
    *   Fixes 403 errors when using newer GPT-5.6 models via the GitHub Copilot proxy by adding a required `Copilot-Integration-Id` header.
*   **[#36571](https://github.com/anomalyco/opencode/pull/36571) feat(tui): add agent picker preview (OPEN)**
    *   Adds a preview pane to the agent picker showing description and model details, improving the user's ability to select the right agent for a task.
*   **[#36542](https://github.com/anomalyco/opencode/pull/36542) fix(core): tolerate AlreadyExists in FSUtil.ensureDir (OPEN)**
    *   Fixes a race condition that could cause crashes during configuration loading on systems with concurrent processes.
*   **[#36524](https://github.com/anomalyco/opencode/pull/36524) fix(core): avoid duplicate image bytes in tool events (OPEN)**
    *   A performance and token-saving fix that prevents image data from being stored twice in tool events, which would otherwise waste context window and storage space.

### Feature Request Trends
*   **"Teaching" & Onboarding Modes:** Multiple requests, including a revival of a proposal from earlier in the year, ask for a dedicated "Guide" or "Teach" mode ([#12675](https://github.com/anomalyco/opencode/issues/12675), [#36521](https://github.com/anomalyco/opencode/issues/36521)). This signals a need for structured, pedagogical workflows within the tool, not just an AI assistant.
*   **Security & Safety by Default:** The high upvotes on issue [#5076](https://github.com/anomalyco/opencode/issues/5076) underline a strong community push for more restrictive default permissions. Users want a model that starts with limited access and requires explicit opt-in for high-privilege operations.
*   **Flexible TUI Configuration:** Issues like [#36525](https://github.com/anomalyco/opencode/issues/36525) (external plugins not loaded) show a desire for a more modular and customizable TUI, allowing developers to extend its functionality beyond the built-in tools.

### Developer Pain Points
*   **Model Provider Fragmentation & Bugs:** The surge of issues around GPT-5.6 ([#36140](https://github.com/anomalyco/opencode/issues/36140), [#36141](https://github.com/anomalyco/opencode/issues/36141), [#36247](https://github.com/anomalyco/opencode/issues/36247), [#36522](https://github.com/anomalyco/opencode/issues/36522)) highlights recurring pain with integrating new models across different authentication backends (OAuth, Codex, Copilot) and missing API features (e.g., reasoning effort).
*   **Database Bloat and Data Loss:** The lack of a retention policy for the SQLite event store ([#33356](https://github.com/anomalyco/opencode/issues/33356)) is a major stability concern. Developers on long-running sessions face the prospect of a disk full crash, making this a critical reliability issue.
*   **Configuration Complexity:** Issues like [#36485](https://github.com/anomalyco/opencode/issues/36485) (global config only loading from $HOME) and [#36539](https://github.com/anomalyco/opencode/issues/36539) (v2 child repo config) point to confusing and fragile configuration loading behavior, especially as the project transitions to v2.
*   **Memory & Stability:** Reports of kernel panics ([#32002](https://github.com/anomalyco/opencode/issues/32002)), Web UI 404 errors ([#36371](https://github.com/anomalyco/opencode/issues/36371)), and TUI crashes ([#36510](https://github.com/anomalyco/opencode/issues/36510)) indicate ongoing stability challenges beyond the primary database issue.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-13

### Today's Highlights
The community closed 30+ issues and 9 PRs in the last 24 hours, with major fixes landing for TUI image rendering, tool result routing during `/tree` navigation, and numeric range parsing in the `read` tool. Several long‑standing compaction and agent session bugs remain under active discussion, while new feature PRs bring a full‑history pager for TUI v2, a Z.AI platform extension, and improved OpenAI Responses instruction handling.

### Releases
No new versions were published in the last 24 hours.

---

### Hot Issues (10 selected)

1. **#6206** – [CLOSED] *Clamping to context window prevents artificial context limits*  
   A prior fix now caps `max_tokens` to the reported context window, breaking custom limits below the model’s maximum. Community concern about losing fine‑grained control over token budgets.  
   [Link](https://github.com/earendil-works/pi/issues/6206)

2. **#5886** – [OPEN] *AgentSession settlement/continuation and assistant‑tail lifecycle bugs*  
   Meta‑issue tracking recurring bugs where post‑run logic tries to continue from an already‑settled transcript. High engagement (6 comments, 2 👍) – a sign of deep architectural complexity.  
   [Link](https://github.com/earendil-works/pi/issues/5886)

3. **#6477** – [OPEN] *Compaction summary requests omit session ID, breaking compaction on some OpenAI‑Codex models*  
   With GPT‑5.6 models, compaction fails silently because the session ID is missing from the request. 5 comments, 8 👍 – urgency is high as users adopt the new Codex models.  
   [Link](https://github.com/earendil-works/pi/issues/6477)

4. **#5463** – [OPEN] *fix(coding‑agent): auto‑compaction after final turn throws error*  
   Auto‑compaction after an assistant’s turn throws “Cannot continue from message role: assistant”. Unhandled error disrupts workflow. 5 comments, 5 👍.  
   [Link](https://github.com/earendil-works/pi/issues/5463)

5. **#6324** – [OPEN] */tree branch summarization throws "No API key found" for ambient‑credential providers (Bedrock, Vertex)*  
   Providers without an `apiKey` (ambient auth) break `/tree` summarization outright. 3 comments, 2 👍 – affects users of AWS Bedrock and Google Vertex.  
   [Link](https://github.com/earendil-works/pi/issues/6324)

6. **#6459** – [OPEN] *Custom keybindings not applied on initial session start, require /reload*  
   Custom editor keybindings from `keybindings.json` only work after a manual `/reload`. Minor but persistent annoyance. 3 comments.  
   [Link](https://github.com/earendil-works/pi/issues/6459)

7. **#6563** – [OPEN] *TUI drops image blocks from user messages*  
   `ImageContent` sent via `session.prompt()` is received by the model but not rendered in the chat transcript. Users report confusion about missing context. 4 comments.  
   [Link](https://github.com/earendil-works/pi/issues/6563)

8. **#6524** – [CLOSED] *Hide GPT‑5.6 reasoning‑summary empty placeholders*  
   Visible thinking blocks sometimes contain empty HTML comments. Fixed by filtering zero‑length summaries. Low severity, but improves UX with new models.  
   [Link](https://github.com/earendil-works/pi/issues/6524)

9. **#6569** – [CLOSED] *openai‑codex: gpt‑5.6‑luna returns 404 while official Codex works*  
   Windows users with ChatGPT Pro OAuth hit “Model not found” for `gpt‑5.6‑luna` despite the model working in the official app. Potential token‑routing difference. 3 comments.  
   [Link](https://github.com/earendil-works/pi/issues/6569)

10. **#6558** – [CLOSED] *Tool result attaches to wrong branch after tree navigation*  
    A race condition: changing branches mid‑tool‑call can cause the result to be appended to the new branch, corrupting history. Fixed by blocking `/tree` while tools are active.  
    [Link](https://github.com/earendil-works/pi/issues/6558)

---

### Key PR Progress (9 merged/closed PRs)

1. **#6580** – *feat(tui): v2 in‑Pi full‑history pager over Ledger snapshot*  
   Adds a built‑in pager for TUI v2, allowing browsing of session history beyond terminal scrollback. Configurable keybindings.  
   [Link](https://github.com/earendil-works/pi/pull/6580)

2. **#6582** – *fix(ai): respect forceAdaptiveThinking for Bedrock models*  
   The Bedrock path previously ignored `forceAdaptiveThinking` from `models.json` and relied on a hardcoded model list. Now works for any registered model. Fixes #6212.  
   [Link](https://github.com/earendil-works/pi/pull/6582)

3. **#6577** – *fix(coding‑agent): coerce numeric read ranges*  
   Coerces string‑typed `offset`/`limit` arguments to numbers before calculating displayed ranges. Prevents lines like “380-38049” from appearing.  
   [Link](https://github.com/earendil-works/pi/pull/6577)

4. **#6570** – *[Do Not Merge] feat: add lightweight scout extension example*  
   Accidental PR – marked as “do not merge”. No impact.  
   [Link](https://github.com/earendil-works/pi/pull/6570)

5. **#5859** – *fix(ai): send responses prompts as instructions*  
   System prompts are now sent in the top‑level `instructions` field for OpenAI/Codex Responses APIs, complying with their spec.  
   [Link](https://github.com/earendil-works/pi/pull/5859)

6. **#6572** – *Render image blocks in interactive user messages*  
   Fixes #6563: interactive user messages now show image blocks using the TUI Image component. Clipboard images are attached to the next message instead of written to a temp file.  
   [Link](https://github.com/earendil-works/pi/pull/6572)

7. **#6565** – *feat(pi‑zai): Z.AI extension with quota, resilience, and cache benchmark*  
   New package providing Z.AI platform support: caching, compaction policy, `/zai‑usage` command, connection health probes, and cache‑affinity headers.  
   [Link](https://github.com/earendil-works/pi/pull/6565)

8. **#6561** – *fix(tui): disable terminal auto‑wrap to prevent double rendering*  
   Disables DECAWM during TUI sessions to eliminate double‑wrap issues on lines exactly matching terminal width.  
   [Link](https://github.com/earendil-works/pi/pull/6561)

9. **#6559** – *Fix/tree navigation pending tools*  
   Prevents `/tree` from switching branches while an agent or tool is running, solving the tool‑result corruption in #6558.  
   [Link](https://github.com/earendil-works/pi/pull/6559)

---

### Feature Request Trends
- **Extension API improvements** – Multiple requests for safer session replacement (#5952), deferred reload (#6552), atomic compaction coordination (#6578), and exposing when Pi is waiting on user input (#5329).  
- **Provider flexibility** – Requests for Scaleway Generative APIs (#6165), non‑OAuth tokens with custom base URLs (#6564), and low text verbosity for OpenAI Responses models (#6579).  
- **Better error visibility** – Requests to inject provider errors (context overflow, compaction failure) as user‑role advisories so the LLM can see them (#6542).  
- **Session & workspace control** – Allowing session CWD to be changed programmatically (#2992) and exposing a reload capability to extensions (#6552).  

---

### Developer Pain Points
- **Compaction reliability** – Issues #6477 (missing session ID), #5463 (auto‑compaction after final turn), and #6578 (coordination) show that compaction still has multiple failure modes, especially with newer Codex models.  
- **Agent session lifecycle** – Bugs like #5886 and #6574 (slash commands never dispatched) highlight fragility in agent settlement and continuation logic.  
- **Provider compatibility gaps** – Bedrock/Vertex ambient‑credential providers break `/tree` (#6324); OpenAI Codex models have model‑not‑found errors (#6569) and require special payloads (#6516).  
- **Race conditions** – Tool results attaching to wrong branches (#6558) and text before tool calls not rendering (#6571) point to timing issues in the agent loop.  
- **Initialization & configuration** – Custom keybindings only apply after `/reload` (#6459) and extension loader path rewrites (#6573) cause friction for power users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-13

A relatively quiet day for releases, but the community is actively shaping Qwen Code's multi-workspace daemon architecture and ironing out streamed response handling. Several CI failures and a revert chain highlight growing pains around stability, while feature requests continue to push for better context lifecycle management and deeper Web Shell integration.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[RFC] Support multiple workspaces in one `qwen serve` daemon** ([#6378](https://github.com/QwenLM/qwen-code/issues/6378))  
   High-activity RFC with 20 comments debating the 1-daemon = 1-workspace assumption. Community contributors are exploring session separation and workspace-qualified API design. Open for two weeks, it signals a major architectural pivot.

2. **Restore real-time full-pane thinking streaming (regression)** ([#5472](https://github.com/QwenLM/qwen-code/issues/5472))  
   A P3 regression from v0.18.2 that broke real-time chain-of-thought display. The workaround (Ctrl+O) exists, but the community wants the uncollapsed streaming experience restored. 6 comments, +1 upvote.

3. **Keep deferred tool discovery from invalidating prompt cache prefixes** ([#6721](https://github.com/QwenLM/qwen-code/issues/6721))  
   A core performance bug: `tool_search` modifies provider tool declarations mid-session, breaking prompt caching. 6 comments suggest developer interest in fixing this without sacrificing deferred tool functionality.

4. **Devlog + Living Spec: background agents for cross-session project persistence** ([#6755](https://github.com/QwenLM/qwen-code/issues/6755))  
   A feature request for two complementary background agents that persist project state across sessions. Only 4 comments but labeled `roadmap/background-automation` — worth watching.

5. **Skill Context Lifecycle Management** ([#6762](https://github.com/QwenLM/qwen-code/issues/6762))  
   SKILL.md bodies currently remain in context forever, bloating the prompt. This request for unload/compress/expiry mechanisms has 3 comments and is marked for `roadmap/context-performance`.

6. **Main CI failed: E2E Tests** ([#6781](https://github.com/QwenLM/qwen-code/issues/6781))  
   A P1 CI failure on `main` triggered by commit 417d305. Labeled `autofix/skip` — the team appears to be triaging downstream issues instead of patching the test directly.

7. **Terminal garbled after Ctrl-C exit** ([#6776](https://github.com/QwenLM/qwen-code/issues/6776))  
   A P2 bug where pressing Ctrl-C multiple times leaves the terminal in a corrupted state (`9;5u` output). 2 comments suggest it's a keybinding cleanup issue.

8. **Feishu worker reports ready with invalid credentials** ([#6779](https://github.com/QwenLM/qwen-code/issues/6779))  
   A P1 production bug: daemon-managed Feishu channels can report "connected" even with invalid credentials, wasting resources on all-failed daemon state. Requires credential validation before WebSocket startup.

9. **Chat recording reports success before JSONL writes are durable** ([#6742](https://github.com/QwenLM/qwen-code/issues/6742))  
   A data-integrity bug: async JSONL queue acceptance is treated as successful write, risking lost records on failure. Closed but relevant for anyone relying on chat persistence.

10. **Expose tool-call preparation events before arguments are complete** ([#6775](https://github.com/QwenLM/qwen-code/issues/6775))  
    An enhancement request for ACP consumers: expose pending/interim tool calls as soon as tool name/ID is stable, enabling progressive UIs. 2 comments, welcome PR.

---

## Key PR Progress

1. **feat(web-shell): editable user-scope settings and in-panel model management** ([#6768](https://github.com/QwenLM/qwen-code/pull/6768))  
   Extends the Settings panel to handle `~/.qwen/settings.json` and adds model management — a significant UX improvement for configuration-heavy workflows.

2. **feat(serve): support runtime workspace removal** ([#6745](https://github.com/QwenLM/qwen-code/pull/6745))  
   Enables adding and removing workspaces without restarting the daemon. Essential for the multi-workspace architecture proposed in [#6378](https://github.com/QwenLM/qwen-code/issues/6378).

3. **feat(review): capture untracked files, resolve anchors from snippets** ([#6771](https://github.com/QwenLM/qwen-code/pull/6771))  
   Fixes three bugs in the bundled `/review` skill, including the potentially dangerous behavior of claiming to have reviewed files it hadn't actually read.

4. **feat(serve): add extension management v2** ([#6638](https://github.com/QwenLM/qwen-code/pull/6638))  
   Introduces workspace-level extension activation policies while keeping artifacts user-level. A major step toward per-project tool configuration.

5. **fix(core): detect dotfiles in getLanguageFromFilePath** ([#6785](https://github.com/QwenLM/qwen-code/pull/6785))  
   Fixes a long-standing bug where files like `.gitignore` and `.editorconfig` were never mapped to a language. Includes the module's first test file.

6. **fix(core): track thinking tags across streamed deltas** ([#6777](https://github.com/QwenLM/qwen-code/pull/6777))  
   A follow-up fix for malformed thinking-tag handling, tracking opening/closing balance across the entire stream instead of per-delta. Follows the revert of earlier aggressive detection ([#6783](https://github.com/QwenLM/qwen-code/pull/6783)).

7. **feat(ci): add stale failure patrol** ([#6766](https://github.com/QwenLM/qwen-code/pull/6766))  
   A scheduled CI job that runs every 10 minutes to auto-rerun or update stale PR failures. Signals the team's focus on CI stability after recent E2E failures.

8. **perf(core): reduce Git snapshot processes** ([#6784](https://github.com/QwenLM/qwen-code/pull/6784))  
   Combines `git status` and `git branch` reads into one `git status --short --branch` call, reducing per-session process overhead in the session-creation path.

9. **feat(cli): Add runtime daemon channel control** ([#6741](https://github.com/QwenLM/qwen-code/pull/6741))  
   Adds HTTP, SDK, and CLI endpoints for enabling, replacing, and stopping daemon-managed channel workers at runtime.

10. **fix(prompt-cache): stabilize deferred tool calls** ([#6723](https://github.com/QwenLM/qwen-code/pull/6723))  
    Directly addresses [#6721](https://github.com/QwenLM/qwen-code/issues/6721): keeps provider tool declarations stable after `tool_search` by returning schemas as model-visible content instead of modifying provider declarations.

---

## Feature Request Trends

- **Multi-workspace & Daemon Architecture**: Multiple requests (RFC [#6378](https://github.com/QwenLM/qwen-code/issues/6378), PR [#6745](https://github.com/QwenLM/qwen-code/pull/6745), [#6726](https://github.com/QwenLM/qwen-code/issues/6726)) push for runtime workspace management, persistent registrations across daemon restarts, and per-workspace isolation.
- **Context Lifecycle Management** ([#6762](https://github.com/QwenLM/qwen-code/issues/6762), [#6755](https://github.com/QwenLM/qwen-code/issues/6755)): The community wants cross-session persistence and the ability to unload/compress skill bodies and conversation history — a clear sign that long-running projects are pushing context limits.
- **Web Shell Enhancements**: Read-only transcript viewers ([#6770](https://github.com/QwenLM/qwen-code/issues/6770)), git branch display ([#6702](https://github.com/QwenLM/qwen-code/issues/6702)), custom session group colors ([#6744](https://github.com/QwenLM/qwen-code/issues/6744)) — all point to a maturing Web Shell that needs richer workspace-level UX.
- **Model & Tool Flexibility**: Inline model switching ([#5967](https://github.com/QwenLM/qwen-code/issues/5967)), Grok model support ([#6774](https://github.com/QwenLM/qwen-code/issues/6774)), selective deferred-tool visibility ([#6368](https://github.com/QwenLM/qwen-code/issues/6368)) — users want finer-grained control over which models and tools are active.

---

## Developer Pain Points

- **CI/Release Instability**: Four CI failure issues ([#6781](https://github.com/QwenLM/qwen-code/issues/6781), [#6778](https://github.com/QwenLM/qwen-code/issues/6778), [#6773](https://github.com/QwenLM/qwen-code/issues/6773), [#6786](https://github.com/QwenLM/qwen-code/issues/6786)) in 24 hours plus a release failure ([#6749](https://github.com/QwenLM/qwen-code/issues/6749)) indicate that E2E tests and quality gates are flaky. The `stale failure patrol` PR is a direct response.
- **Streamed Response Handling**: Two PRs ([#6754](https://github.com/QwenLM/qwen-code/pull/6754), [#6783](https://github.com/QwenLM/qwen-code/pull/6783)) have been merged then reverted within a day due to aggressive thinking-tag and tool-call detection. The follow-up fix ([#6777](https://github.com/QwenLM/qwen-code/pull/6777)) takes a more conservative approach.
- **Terminal Reset Issues** ([#6776](https://github.com/QwenLM/qwen-code/issues/6776)): Garbled terminals after Ctrl-C are a recurring frustration — the keybinding cleanup doesn't always fire.
- **Daemon State Loss** ([#6726](https://github.com/QwenLM/qwen-code/issues/6726)): Workspaces registered via Web Shell are lost on daemon restart, forcing manual re-registration. This is a blocker for anyone relying on dynamic workspace management.
- **Tool Interaction Gaps** ([#6763](https://github.com/QwenLM/qwen-code/issues/6763)): Plan mode's blocked-tool error encourages the LLM to immediately exit plan mode instead of pivoting to read-only alternatives, leading to premature tool execution.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-13

## Today’s Highlights
A flurry of activity focused on expanding provider support and fixing Anthropic API compatibility. The addition of a **MiniMax Messages-compatible route** (PR #4352) and a **Korean locale** (PR #4347) broaden the tool’s reach, while critical bug fixes address Anthropic’s HTTP 400 errors (PR #4346) and cache-write token billing (PR #4348). The top-voted issue (#3915) – skill commands silently discarding task text – remains a major UX pain point for power users.

## Releases
No new releases in the last 24 hours.

## Hot Issues
- **[#4329] Anthropic API error** – `tool_use` blocks missing corresponding `tool_result` blocks cause HTTP 400s. 6 comments, no workaround yet. [Issue](https://github.com/Hmbown/CodeWhale/issues/4329)
- **[#3915] Skill invocation discards task text** – `$debug why does auth fail` activates the skill but throws away the query. 1 comment, maintained by Hmbown; highly requested UX fix. [Issue](https://github.com/Hmbown/CodeWhale/issues/3915)
- **[#4335] Offline scorecard pricing not provider-aware** – Model-only pricing leads to inaccurate cost attribution when the same model is used via different routes (e.g., OAuth vs. local). 1 comment; directly linked to PR #4351. [Issue](https://github.com/Hmbown/CodeWhale/issues/4335)

## Key PR Progress
- **[#4353] docs: Cursor Cloud dev-environment setup** – Adds cloud-VM caveats to `AGENTS.md`. Closed. [PR](https://github.com/Hmbown/CodeWhale/pull/4353)
- **[#4347] i18n: Korean locale support** – 752 keys translated. Closed by moduvoice. [PR](https://github.com/Hmbown/CodeWhale/pull/4347)
- **[#4346] fix: sanitize tool `input_schema` for Anthropic adapter** – Strips top-level `oneOf`/`anyOf`/`allOf` to prevent HTTP 400. Closed by qinlinwang. [PR](https://github.com/Hmbown/CodeWhale/pull/4346)
- **[#4349] Build support for NetBSD** – Generates rquickjs bindings for NetBSD (and FreeBSD, OpenBSD, DragonFly). Closed by ci4ic4. [PR](https://github.com/Hmbown/CodeWhale/pull/4349)
- **[#4348] fix(tui): bill Anthropic cache-write tokens at published rates** – Separates `cache_creation_input_tokens` from cache-miss; adds `cache_write_per_million` to pricing. Closed by knqiufan. [PR](https://github.com/Hmbown/CodeWhale/pull/4348)
- **[#4352] feat: MiniMax Messages-compatible route** – Registers MiniMax-M3 and MiniMax-M2.7 with full provider registry support. Open by octo-patch. [PR](https://github.com/Hmbown/CodeWhale/pull/4352)
- **[#4351] fix(scorecard): bind costs to provider routes** – Enables USD cost resolution from exact `(provider, wire_model_id)` pairs. Open by nightt5879. [PR](https://github.com/Hmbown/CodeWhale/pull/4351)

## Feature Request Trends
- **Provider-aware pricing** – Multiple issues (#4335, PR #4351) demand cost tracking that respects the actual provider route, not just model name.
- **Expanded provider support** – MiniMax addition (PR #4352) and ongoing Anthropic adapter fixes (#4329) show strong interest in multi-provider flexibility.
- **Internationalization** – Korean locale (PR #4347) signals community demand for broader language support.
- **Platform portability** – NetBSD build fix (PR #4349) reflects a desire to run on non-Linux/BSD systems.
- **Improved skill UX** – Issue #3915 (silent task discarding) is a high-priority usability request from the maintainer himself.

## Developer Pain Points
- **Anthropic API contract violations** – Tool schemas containing `oneOf`/`anyOf`/`allOf` cause hard 400 errors; workaround requires manual schema sanitization.
- **Skill command friction** – The natural `$skill <task>` pattern silently drops the argument, forcing users to retype – a frequent frustration in Claude-Code-style workflows.
- **Inconsistent cost attribution** – Offline scorecards do not differentiate between provider routes, leading to misleading pricing comparisons.
- **Build failures on BSDs** – rquickjs lacks pre-generated bindings for NetBSD/FreeBSD/OpenBSD, requiring manual generation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*