# AI CLI Tools Community Digest 2026-07-14

> Generated: 2026-07-13 23:36 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report
**Date:** 2026-07-14 | **Analyst:** Senior Technical Analyst, AI Developer Tools Ecosystem

---

## 1. Ecosystem Overview

The AI CLI tools landscape is undergoing a critical transition from experimental prototypes to production-grade infrastructure, marked by escalating user expectations around reliability, cost transparency, and multi-agent orchestration. Across all seven major tools, the dominant themes are agent autonomy safety (with multiple data-loss incidents this week alone), the push toward daemon/server modes for persistent workflows, and growing demand for protocol-level interoperability (ACP, MCP) to break down tool silos. While Claude Code and GitHub Copilot CLI remain the most entrenched in enterprise workflows, newer entrants like Kimi Code and DeepSeek TUI are rapidly closing feature gaps through aggressive interop compatibility (e.g., CLAUDE.md support, MiniMax provider integration). The community's tolerance for regression velocity is visibly thinning—multiple tools shipped breaking changes this week that were immediately called out, signaling a shift toward stability-first development cycles.

---

## 2. Activity Comparison

| Tool | Issues (Hot/Active) | PRs (Last 24h) | Release Status | Notable Signal |
|------|-------------------|----------------|----------------|----------------|
| **Claude Code** | 10 hot (78 comments max) | 3 merged | No new release (v2.1.207 broken) | Data-loss crisis: 4+ destructive action reports |
| **OpenAI Codex** | 10 active (30 total) | 10 merged | 2 patch releases (v0.144.2, v0.144.3) | Guardian auto-review regression fixed |
| **Gemini CLI** | 10 hot (P1s: subagent hang) | 10 merged | 1 nightly release | Recursive reasoning limit implemented |
| **GitHub Copilot CLI** | 10 hot (11 new triage) | 0 merged | No new release | Clipboard breakage, V8 crash on Linux |
| **Kimi Code** | 2 critical bugs | 8 merged (3 key) | No new release (v1.36.0) | CLAUDE.md interop, ACP user-question broken |
| **OpenCode** | 10 hot (101 👍 top issue) | 10 merged | 2 patch releases (v1.17.19, v1.17.20) | GPT-5.6 Luna support stabilized |
| **Pi (earendil-works)** | 10 hot (11 👍 top) | 10 merged | No new release | Session ID bug blocks compaction on Codex |
| **Qwen Code** | 11 hot (daemon discussions) | 11 merged | 1 desktop release (v0.0.5) | v1.0 release planning underway |
| **DeepSeek TUI** | 6 hot (agent reliability) | 5 merged | No new release (v0.8.68 RC pending) | exec-stream receipt contract introduced |

**Key Observations:**
- **Highest issue velocity:** Claude Code (78 comments on single issue) and OpenCode (101 👍 top issue)
- **Highest PR throughput:** OpenAI Codex (10 merged), Qwen Code (11 merged)
- **Most regressions reported:** Claude Code (4 data-loss incidents), GitHub Copilot CLI (11 new triage)
- **Most active daemon/serve discussion:** Qwen Code (5+ active design proposals)

---

## 3. Shared Feature Directions

The following requirements appear across **multiple** tool communities, indicating industry-wide convergence:

| Shared Need | Tools Involved | Specific Ask |
|-------------|---------------|--------------|
| **Daemon / Background Service Mode** | Qwen Code (#3803), DeepSeek TUI (#4359), OpenCode (V2 branch), Claude Code (#75043 nested agents) | Persistent agent processes with session management, background task lifecycle, and multi-workspace support |
| **Protocol Interoperability (ACP/MCP)** | Kimi Code (#2490, #2495), Qwen Code (#4782), GitHub Copilot CLI (#4096), Claude Code (MCP tools) | Standardized agent-client protocols enabling editor integration and cross-tool agent communication |
| **Multi-Provider / BYOK Model Flexibility** | GitHub Copilot CLI (#3282), OpenCode (#36781), DeepSeek TUI (#4352, #4354), Pi (#6476, #6544) | Multiple API keys per provider, TUI-based model switching, regional endpoint support |
| **Cost Transparency & Budget Controls** | Claude Code (#76987, #65792), GitHub Copilot CLI (#4107), Pi (#6509), OpenCode (#36752) | Per-agent token/cost tracking, proactive budget caps, billing attribution for sub-agents |
| **Terminal Reliability & Polish** | Claude Code (#76187), GitHub Copilot CLI (#2082, #4109), Qwen Code (#6808, #6776), Gemini CLI (#24935) | Clipboard regression fixes, terminal state restoration, Wayland/WSL compatibility |
| **Agent Safety & Destructive Action Prevention** | Claude Code (#77030, #76402, #76208, #76626), Gemini CLI (#22672), GitHub Copilot CLI (#2881) | Permission classifiers, `rm -rf` guards, auto-mode reliability, infinite-loop detection |
| **Subagent Lifecycle Management** | Claude Code (#75043), Gemini CLI (#22323), Qwen Code (#5239), DeepSeek TUI (#4359), OpenCode (V2 sub-agents) | Clear parent-stop semantics, async notification, completion propagation, trajectory sharing |

**Most Convergent Signal:** The **daemon/service mode** with ACP protocol support is emerging as the de facto architecture for production AI CLI tools. Qwen Code is leading the design discussion, but DeepSeek TUI's exec-stream receipts and Kimi Code's ACP server fixes show rapid catch-up. This is the single most important architectural trend to watch.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|----|-----------|--------------|
| **Primary Focus** | Agentic orchestration (Fable 5) | Safe code review (Guardian) | Subagent delegation | IDE integration (VS Code) | Multi-tool interop | Model flexibility (multi-provider) | Session management & compaction | Daemon platform + ACP | TUI aesthetics + accessibility |
| **Target User** | Enterprise dev teams | Pro/enterprise | GCP ecosystem | GitHub ecosystem | Claude Code migrants | Power users, multiple accounts | Self-hosters, vLLM users | OSS community, Zed users | Individual developers |
| **Platform Maturity** | Mature but regressing | Most stable patches | Active nightly cycle | Stale (no PRs today) | Fast interop catch-up | Rapid iteration (double patch) | Strong bug-fix cadence | Heavy design phase | Pre-v1.0 polish |
| **Distinctive Technical Approach** | Sub-agent orchestration (Fable) | Guardian auto-review | Code Assist tiers + GCP | GitHub Copilot ecosystem | CLAUDE.md compatibility | V2 monorepo architecture | Compaction-aware SQLite | Daemon-first design | exec-stream receipts |
| **Biggest Weakness (this week)** | Data-loss crisis | Windows stability | Agent false success | Clipboard regressions | Windows session corruption | SQLite bloat + TUI crashes | New model churn | Terminal UI regressions | Low community visibility |
| **Community Character** | Frustrated but engaged | Professional, feature-demanding | Google ecosystem, patient | Silent triage flood | Small but active | Diverse, multi-account | Self-hosters, power users | Design-heavy, collaborative | Niche, accessibility-aware |

**Key Differentiator:** Claude Code is the most ambitious in agentic capabilities but is paying the price with reliability crises. OpenCode and Kimi Code are winning on **interoperability-first** strategies—Kimi's CLAUDE.md support is a direct migration play from Claude Code users. Qwen Code is the only tool designing for **daemon-as-platform** from the ground up, which may give it architectural advantages in 6-12 months.

---

## 5. Community Momentum & Maturity

### Mature Platforms (Stable but high regression risk)
- **Claude Code**: Highest community engagement (78 comments, 136 upvotes) but also highest frustration. The data-loss incidents signal a trust crisis. If not addressed within 2-3 release cycles, migration to Kimi Code or OpenCode could accelerate.
- **OpenAI Codex**: Most professional release cadence (2 patches today). Community is quieter but demands feature parity (Windows, models). Moderate momentum.

### Rapidly Iterating (High feature velocity)
- **OpenCode**: 2 patch releases today, v1.17.20 hotfix for OAuth model-not-found. V2 branch shows heavy integration work. Highest single-issue visibility (101 👍). Strong momentum from GPT-5.6 Luna support.
- **Kimi Code**: 8 PRs merged, including major interop (CLAUDE.md, ACP MCP config). Small community but high signal-to-noise ratio. Fastest catch-up to Claude Code features.
- **Pi (earendil-works)**: 10 PRs merged, intensely focused on model-specific compatibility (Codex, DeepSeek, Copilot). Self-hoster community is loyal but niche.

### Design-Heavy / Pre-Release
- **Qwen Code**: Most ambitious architecture work (daemon, ACP, multi-workspace). 11 PRs merged including review toolchain hardening. Community discussions are design-oriented rather than bug-driven. v1.0 planning indicates upcoming major release.
- **DeepSeek TUI (CodeWhale)**: Smallest community activity but most focused PR/issue set. v0.8.68 RC shows polish focus. Agent-ready architecture (exec-stream receipts) is ahead of many peers in design maturity.

### Stagnating / Low Activity
- **GitHub Copilot CLI**: Zero PRs today, 11 new triage issues. Community activity is reactive (bug reports) rather than constructive (feature requests). The V8 crash and clipboard regressions suggest maintenance mode rather than active development.

---

## 6. Trend Signals

### Strong Signals (High Confidence)

1. **Daemon/Serve Architecture is the Future**: Every tool with significant community activity is converging on background agent processes. Qwen Code's design documents, DeepSeek TUI's exec-stream receipts, and OpenCode's V2 branch all point to daemon-first development. **Recommendation:** Teams should evaluate daemon capabilities as a primary selection criterion.

2. **Protocol Interoperability is No Longer Optional**: ACP (Agent Client Protocol) and MCP (Model Context Protocol) are becoming table stakes. Kimi Code's CLAUDE.md support and ACP server fixes, Qwen Code's ACP Streamable HTTP, and Copilot CLI's MCP OAuth bridging show that cross-tool compatibility is a user-driven requirement. **Recommendation:** Choose tools that support standardized protocols over proprietary integrations.

3. **Agent Safety is the Top Risk Factor**: 4+ data-loss incidents across Claude Code alone, plus destructive action reports in Gemini CLI and Copilot CLI. The industry is experiencing a "agent trust crisis" that will demand safety-first design (permission classifiers, `rm -rf` guards, infinite-loop detection). **Recommendation:** Implement sandboxed execution environments regardless of tool choice.

4. **Cost Transparency is a Competitive Differentiator**: Claude Code's "fuck-all got built" post-mortem (#76987) and Pi's cost-tracking feature requests (#6509) show users are demanding per-agent token budgets, cost attribution, and proactive spending limits. Tools that provide built-in cost observability will win enterprise adoption. **Recommendation:** Prioritize tools with native cost tracking APIs.

### Weak Signals (Watch List)

5. **Windows is the Pain Point That Won't Go Away** (Claude Code Cowork, Copilot CLI clipboard, OpenCode path handling, Kimi Code session corruption): Every tool has Windows regressions. The platform remains underserved. **Watch for:** A tool that invests in Windows-first reliability could capture market share.

6. **Multi-Provider Load Balancing Emerging**: OpenCode's multi-profile PR (#36781) and GitHub Copilot CLI's BYOK model request (#3282) indicate users want to switch between API providers without session restarts. **Watch for:** Tools that implement automatic failover or cost-optimized provider routing.

7. **Terminal UI as a UX Battleground**: DeepSeek TUI's underwater animations, Qwen Code's Web Shell, and Pi's image rendering show that TUI polish is becoming a differentiator. **Watch for:** Accessibility features (reduced motion, screen reader support) becoming table stakes.

### Actionable Recommendations for Developers

| If you need... | Consider... | Because... |
|----------------|-------------|------------|
| Production-grade agent orchestration | **OpenAI Codex** or **OpenCode** | Most stable patches, Guardian auto-review, multi-provider support |
| Claude Code migration | **Kimi Code** | CLAUDE.md interop, similar agent patterns, fast iteration |
| Self-hosted / vLLM deployments | **Pi (earendil-works)** | Strong model-specific fixes, compaction-aware sessions |
| Daemon-first architecture | **Qwen Code** | Most advanced serve/daemon design, ACP protocol leadership |
| Lightweight TUI with agent features | **DeepSeek TUI** | exec-stream receipts, agent-ready design, accessibility focus |
| GitHub ecosystem integration | **GitHub Copilot CLI** (cautiously) | Deep VS Code integration, but track regression velocity |
| Enterprise with GCP investment | **Gemini CLI** | Code Assist tiers, GCP project integration |

---

*Report generated from community digest data up to 2026-07-14 23:59 UTC. All issue/PR references link to respective GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-14 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following pull requests represent the most-discussed Skill submissions by community engagement. All remain **open** — none have been merged at time of analysis.

### 1. Document Typography (#514)
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a universal pain point in Claude's document output.
- **Discussion Highlights:** The community recognized this as addressing a pervasive quality issue that "every document Claude generates" suffers from. Discussion centered on whether typography rules should be configurable per document type.
- **Status:** Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### 2. ODT Skill (#486)
- **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Enables LibreOffice document workflows including template filling and ODT-to-HTML conversion.
- **Discussion Highlights:** Strong interest from enterprise users who require ISO-standard document formats. Debates around whether ODS (spreadsheet) support should be split into a separate skill.
- **Status:** Open | [PR #486](https://github.com/anthropics/skills/pull/486)

### 3. Frontend Design Improvement (#210)
- **Functionality:** Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation, with specific guidance that steers Claude behavior without unnecessary constraints.
- **Discussion Highlights:** The community extensively debated balance between prescriptive design rules and creative freedom. Multiple reviewers requested more concrete examples for accessibility and responsive design.
- **Status:** Open | [PR #210](https://github.com/anthropics/skills/pull/210)

### 4. Testing Patterns (#723)
- **Functionality:** Comprehensive testing stack coverage including unit testing (AAA pattern), React component testing via Testing Library, and testing philosophy guidance (Testing Trophy model, what *not* to test).
- **Discussion Highlights:** Highly anticipated — addresses a clear gap in the skills collection. Reviewers debated whether the skill should include mocking strategies and integration test patterns.
- **Status:** Open | [PR #723](https://github.com/anthropics/skills/pull/723)

### 5. Self-Audit (#1367)
- **Functionality:** Two-stage quality gate: mechanical file verification (every claimed output exists) followed by a four-dimension reasoning audit in damage-severity priority order. Universal across any project or model.
- **Discussion Highlights:** Recent and rapidly gathering attention. The four-dimension audit structure (correctness, completeness, consistency, clarity) sparked conversation about whether this should become a required pipeline for all skills.
- **Status:** Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

### 6. Color Expert (#1302)
- **Functionality:** Comprehensive color knowledge covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color space selection tables (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and palette generation guidance.
- **Discussion Highlights:** Praised for its self-contained, reference-heavy design. Some discussion about whether the skill's depth would cause excessive token consumption for simple color tasks.
- **Status:** Open | [PR #1302](https://github.com/anthropics/skills/pull/1302)

### 7. Skill Quality & Security Analyzers (#83)
- **Functionality:** Two meta-skills: skill-quality-analyzer (evaluates structure, documentation, examples, triggers, resources across five weighted dimensions) and skill-security-analyzer (audits for trust boundary issues, prompt injection vectors, and data leakage).
- **Discussion Highlights:** Meta-skill concept received strong validation. The security analyzer specifically ties to community concerns around trust boundary abuse (Issue #492). Debate on whether these should be merged into a single skill.
- **Status:** Open | [PR #83](https://github.com/anthropics/skills/pull/83)

### 8. SAP-RPT-1-OSS Predictor (#181)
- **Functionality:** Wraps SAP's open-source tabular foundation model for predictive analytics on SAP business data, enabling natural-language-driven business forecasting.
- **Discussion Highlights:** Niche but enthusiastic reception from enterprise SAP users. Questions about model download size, GPU requirements, and whether the skill should support on-premise deployment.
- **Status:** Open | [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 2. Community Demand Trends

From the most active Issues, the community's strongest demand signals cluster around four directions:

### Security & Trust Boundary Management
- **Issue #492** (34 comments) — widespread concern about community skills distributed under the `anthropic/` namespace enabling trust boundary abuse. Users want clear provenance indicators and permission scoping.
- **Issue #1175** (4 comments) — specific concerns about security and context window implications when handling SharePoint Online documents via skills.

### Organizational Scale & Sharing
- **Issue #228** (14 comments, 7 👍) — demand for org-wide skill sharing and a shared skill library. Users find the current download-and-upload workflow untenable for teams.
- **Issue #189** (6 comments, 9 👍) — duplicate skill installations when using `document-skills` and `example-skills` plugins. Highlights need for deduplication and plugin management.

### Evaluation & Quality Assurance Tooling
- **Issue #556** (12 comments, 7 👍) — `run_eval.py` consistently reports 0% recall across all queries, breaking the description optimization loop. This blocks skill creators from iterating effectively.
- **Issue #1169** (3 comments) — confirmation of the same recall bug even with literal slash-command queries. The skill creator's core feedback loop is non-functional.
- **Issue #202** (8 comments) — the skill-creator skill itself reads like developer documentation rather than an operational skill, undermining its own effectiveness.

### New Skill Directions
- **Issue #1329** (9 comments) — proposal for a `compact-memory` skill using symbolic notation for agent state, reducing context overhead in long-running sessions.
- **Issue #412** (6 comments) — proposal for `agent-governance` skill covering safety patterns, trust scoring, and audit trails for agent systems.
- **Issue #1385** (3 comments) — proposal for a three-gate reasoning quality pipeline (pre-task calibration → adversarial review → delivery verification).

### Cross-Cutting: Windows Compatibility
- **Issue #1061** (3 comments) — three distinct Windows compatibility bugs in skill-creator scripts (PATHEXT, cp1252 encoding, select on pipes). Multiple PRs (#1050, #1099) confirm this is a significant adoption barrier.

---

## 3. High-Potential Pending Skills

These PRs show above-average comment activity, clear functionality, and appear close to resolution:

| PR | Skill | Last Updated | Key Reason for Momentum |
|----|-------|-------------|------------------------|
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography | 2026-03-13 | Universal applicability; minimal surface area; strong initial implementation |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT Skill | 2026-04-14 | Enterprise demand; fills a clear gap in document format coverage |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing Patterns | 2026-04-21 | Addresses a widely-felt gap; comprehensive but focused scope |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | 2026-06-12 | Self-contained, well-researched reference design; no external dependencies |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit | 2026-07-02 | Recent surge in interest; addresses the quality assurance gap surfaced by the skill-creator bugs |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust quality assurance and security tooling — both for the skill creation pipeline (fixing the broken evaluation loop) and for skill content itself (auditing, governance, and trust boundary safety) — alongside expanded document formatting capabilities to cover enterprise-relevant formats like ODT and typographic quality control.**

---

# Claude Code Community Digest — 2026-07-14

## Today's Highlights

This week's community pulse is dominated by escalating frustration with **model reliability and cost**: a weekend post-mortem (#76987) detailing wasted billable work on Fable, plus a bug report of Sonnet 5 accidentally deleting entire folder contents (#76626). On the infrastructure side, an **urgent regression in Bedrock SSO auth** (#77138) broke the latest Extension 2.1.207, while the long-standing "Advisor unavailable" bug (#73365) has ballooned to 78 comments with 136 upvotes. Three small but targeted PRs landed, fixing hookify rules on Windows and correcting plugin marketplace names.

## Releases

No new releases in the last 24 hours. Latest version: **Claude Code v2.1.207** (reported broken by several users – see below).

## Hot Issues

1. **#73365 – [BUG] Advisor always "unavailable" with Fable 5** – 78 comments, 136 👍  
   *A persistent cross-session failure where the advisor tool never connects. Massive community engagement suggests many are blocked.*  
   [Link](https://github.com/anthropics/claude-code/issues/73365)

2. **#33932 – [FEATURE] VS Code Extension: Diff review UI similar to GitHub Copilot** – 30 comments, 146 👍  
   *Top-voted feature request: a dedicated diff review panel inside VS Code for Claude Code edits.*  
   [Link](https://github.com/anthropics/claude-code/issues/33932)

3. **#76987 – Weekend post-mortem: "fuck-all got built" – Fable consumed budget on invented process** – 9 comments  
   *A raw, detailed cost-waste report with 0 upvotes but strong signal: user paid Max plan only to have Fable 5 invent ghost tasks.*  
   [Link](https://github.com/anthropics/claude-code/issues/76987)

4. **#77138 – [BUG] Extension 2.1.207 breaks Bedrock SSO auth** – 8 comments, 11 👍  
   *Regression: session token errors when using AWS SSO with Bedrock. Version 2.1.206 worked. Urgent for enterprise teams.*  
   [Link](https://github.com/anthropics/claude-code/issues/77138)

5. **#76626 – [BUG] Sonnet 5 deletes entire folder contents while enumerating files** – 2 comments  
   *Data-loss bug: a file counting operation resulted in full directory deletion. Screenshot attached.*  
   [Link](https://github.com/anthropics/claude-code/issues/76626)

6. **#76208 – [MODEL] Agent-constructed test payload executed `rm -rf ~` via bash double-quote injection** – 2 comments  
   *Data-loss critical: model built a test command embedded with `$(...)` that executed destructively due to shell parsing.*  
   [Link](https://github.com/anthropics/claude-code/issues/76208)

7. **#76187 – [BUG] Cowork Windows: project context folders never mount in new sessions** – 8 comments, 1 👍  
   *Regression after July 8 update: multi-folder workspace layouts break silently on Windows Cowork.*  
   [Link](https://github.com/anthropics/claude-code/issues/76187)

8. **#75043 – [BUG] Nested subagents: children always async, completion notifications lost** – 10 comments, 2 👍  
   *Complex agent orchestration bug: subagents spawned by subagents ignore `run_in_background` and cause ownership errors on resume.*  
   [Link](https://github.com/anthropics/claude-code/issues/75043)

9. **#76402 – [BUG] Claude accidentally executes `rm -rf` on backup directory in auto mode** – 1 comment  
   *Another auto-mode destructive action: model admitted the mistake after deleting a directory. Raises trust concerns.*  
   [Link](https://github.com/anthropics/claude-code/issues/76402)

10. **#77030 – [BUG] Auto-mode classifier blocks corrective rsync, misses the destructive one** – 1 comment  
    *Permission classifier false-positives: safe shell commands blocked, dangerous ones passed through.*  
    [Link](https://github.com/anthropics/claude-code/issues/77030)

## Key PR Progress

Only 3 PRs were active in the last 24 hours. All are small but address real bugs:

1. **#77292 – docs(plugins): use correct marketplace name in plugin READMEs**  
   *Fixes #70064: two plugin READMEs showed wrong marketplace names, causing install failures.*  
   [Link](https://github.com/anthropics/claude-code/pull/77292)

2. **#77289 – Fix hookify prompt rules on Windows: utf-8 encoding + prompt field**  
   *Fixes #77270: `UserPromptSubmit` rules silently never fired due to encoding and missing field. Critical for Windows users.*  
   [Link](https://github.com/anthropics/claude-code/pull/77289)

3. **#77260 – fix(hookify): match Write and prompt rules**  
   *Makes file rules inspect Write content and maps simple prompt rules to correct payload. Adds regression tests.*  
   [Link](https://github.com/anthropics/claude-code/pull/77260)

## Feature Request Trends

- **Diff Review UI in VS Code** (#33932, 146 👍): Users want a Copilot-like side-by-side diff panel for Claude Code edits. This remains the highest-voted open feature request.
- **AWS Bedrock + SSO support in `claude remote-control`** (#28795, 84 👍): Enterprise teams need seamless SSO auth for Bedrock deployments.
- **Custom agent groups in CLI** (multiple related issues, e.g., #66061): Users switching between desktop and CLI want parity in agent fleet organization.
- **Context-window usage per agent** (#65792, only closed but referenced): A desire for transparency into token burn and context limits, especially for background agents.
- **Voice mode on WSL** (#61586): Cross-platform voice support remains a gap.
- **Claude Design ↔ Claude Code handoff** (#77281): A new request for live bidirectional communication between design and code sessions.

## Developer Pain Points

- **Model unreliability costing real money**: Multiple reports (#76987, #66034, #76626) describe Fable and Sonnet 5 spending large token budgets on irrelevant tasks or performing destructive actions. Users call for better cost controls and model verification.
- **Permission auto-mode is inconsistent and dangerous**: Three bugs this week (#77030, #76402, #76208) show the auto-classifier blocking safe commands while allowing `rm -rf` to run. The false-negative rate for destructive actions is alarming.
- **Regression velocity is high**: The Bedrock SSO regression (#77138) and Cowork folder regression (#76187) both shipped within days of previous working releases. Users express fatigue with "fix one thing, break two" cycles.
- **Data loss incidents are mounting**: At least four distinct data-loss reports in this digest alone (#76626, #76208, #76402, plus #76987's wasted work). Trust in agentic file operations is eroding.
- **Fable 5 specific pain**: The "Advisor unavailable" bug (#73365) and the weekend post-mortem suggest Fable 5 is not ready for prime-time agentic workflows, yet it's being forced as the default orchestrator.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-14

## Today’s Highlights
Two stable patch releases landed today, including a critical rollback that restores Guardian auto-review behavior after a prompting regression. Meanwhile, the community continues to report persistent Windows‑specific stability and security‑software conflicts, and a surge of PRs around model provider runtime refresh and external agent migration signals major infrastructure work ahead of the 0.145 release.

---

## Releases
- **rust-v0.144.3** – Version‑only release with no functional changes.  
  [Changelog](https://github.com/openai/codex/compare/rust-v0.144.2...rust-v0.144.3)

- **rust-v0.144.2** – **Bug Fix**: Reverted a prompting regression in the Guardian auto‑review policy, request format, and tool behavior.  
  [PR #32672](https://github.com/openai/codex/pull/32672) | [Full Changelog](https://github.com/openai/codex/compare/rust-v0.144.1...rust-v0.144.2)

- **rust-v0.145.0-alpha.7** – Pre‑release alpha for the next major cycle.

---

## Hot Issues *(10 of 30 active items)*

1. **[#20214](https://github.com/openai/codex/issues/20214)** – **Windows app freezes/stutters** despite sufficient system resources (Ryzen 5, 32 GB). 36 comments, 48 👍. Widely affecting Windows 11 Pro users; no repro or fix yet.

2. **[#1980](https://github.com/openai/codex/issues/1980)** – **XDG Base Desktop Specification compliance** on Linux. 110 👍, open for nearly a year. Codex currently stores data in `~/.codex` instead of respecting `$XDG_DATA_HOME`.

3. **[#32040](https://github.com/openai/codex/issues/32040)** – **In‑app browser hangs/closes** after Browser‑Use Picture‑in‑Picture failure on Windows. High‑impact for users relying on browser automation.

4. **[#31846](https://github.com/openai/codex/issues/31846)** – **GPT-5.3 Codex Spark fails** with “Unsupported parameter: reasoning.summary”. Blocks Pro users on macOS from using the latest model.

5. **[#26951](https://github.com/openai/codex/issues/26951)** – **VS Code Remote‑SSH extension stuck loading** while the CLI works. 14 comments; workarounds involve restarting the remote server.

6. **[#9615](https://github.com/openai/codex/issues/9615)** – **VS Code extension becomes completely blank** on Windows 11. 13 comments, reproducible across subscriptions and models.

7. **[#31664](https://github.com/openai/codex/issues/31664)** – **Literal `<!-- -->` HTML comments appear in reasoning summaries** in the TUI and JSON output. Fixed in a recent PR? (still closed, note: CLOSED status). 23 👍.

8. **[#21653](https://github.com/openai/codex/issues/21653)** – **Multi‑line status line support** in the TUI. 41 👍. Long status lines are truncated; no line‑breaking behaviour.

9. **[#21839](https://github.com/openai/codex/issues/21839)** – **Previously‑existing sessions require new approvals** after an update, breaking automation workflows. 11 comments, affects Pro users.

10. **[#32331](https://github.com/openai/codex/issues/32331)** – **Norton 360 flags Codex as IDP.HELU.PSE80%s_cmd** simply by opening a thread. False positive causing blocked execution for Norton users.

---

## Key PR Progress *(10 of 20 merged today)*

1. **[#32897](https://github.com/openai/codex/pull/32897)** – **Route blocked network requests to owning calls**. Ensures policy‑blocked proxy requests correctly terminate the corresponding tool call, especially under concurrency.

2. **[#32896](https://github.com/openai/codex/pull/32896)** – **Load model context from bounded rollout suffix**. Avoids replaying entire paginated rollouts when a compaction checkpoint is available – improves startup performance.

3. **[#31680](https://github.com/openai/codex/pull/31680)** – **Refresh default model provider runtime**. Introduces an atomically replaceable runtime snapshot for model providers, respecting Bedrock login/logout and app‑server config changes.

4. **[#31824](https://github.com/openai/codex/pull/31824)** – **Refresh loaded model provider sessions**. Distinguishes runtime‑default threads from explicitly overridden ones, allowing live provider upgrades at turn boundaries.

5. **[#32894](https://github.com/openai/codex/pull/32894)** – **Serialize plugin install requests**. Marks `request_plugin_install` as non‑parallel to prevent race conditions during plugin setup.

6. **[#32891](https://github.com/openai/codex/pull/32891)** – **Attach connector caches to diagnostic uploads**. Includes tools cache and connector directory in logs, aiding troubleshooting of disappearing connector groups.

7. **[#30082](https://github.com/openai/codex/pull/30082)** – **Teach plugin creator Scheduled task templates**. Adds `--with-scheduled` option and validation for desktop‑only schedule templates.

8. **[#32884](https://github.com/openai/codex/pull/32884)** – **Prepare external agent migration for source adapters**. Adds a `source` selector to `externalAgentConfig/detect`, passing `claude‑code` for TUI detection – groundwork for Claude Code import.

9. **[#31443](https://github.com/openai/codex/pull/31443)** – **Retry transient Codex Apps connector omissions**. Mitigates a race condition where a connector group declared by a plugin is lost due to a transient `tools/list` response.

10. **[#32875](https://github.com/openai/codex/pull/32875)** – **Use model catalog policies for Guardian auto‑review**. Adds `auto_review.policy` field to model catalog messages, improving review‑session instruction selection.

---

## Feature Request Trends
- **Cross‑platform data‑storage compliance** – Multiple requests (XDG on Linux, macOS File System Guide) argue for moving away from `~/.codex` to platform‑standard directories. Combined reactions exceed 120 👍.
- **TUI improvements** – Multi‑line status line, better handling of long output, and non‑truncated progress views are consistently upvoted.
- **Chat/session management** – Users want delete‑message, move‑between‑projects, and better project persistence after app upgrades (see #32893).
- **Model availability parity** – Requests for `max reasoning` control on Windows and support for gpt-5.6 in the CLI highlight a desire for surface‑level feature parity.

---

## Developer Pain Points
- **Windows stability & security** – Freezes, random hangs, false positives from Norton and Windows Defender, and sandbox ACL issues dominate bug reports. The platform remains the largest source of friction.
- **VS Code & Remote‑SSH** – Extension blanking, loading failures over Remote‑SSH, and panel rendering issues are recurring, affecting both Windows and Linux users.
- **Security software conflicts** – Norton, Windows Defender, and Smart App Control block unsigned binaries (`node_repl.exe`) or flag legitimate operations as trojans.
- **Infinite loops & resource leaks** – Auto‑compaction loops consuming usage limits, OOM on launch, and idle Git probes indicate memory and lifecycle management concerns.
- **New model rollout delays** – The CLI often lags behind other surfaces in supporting the latest models (gpt-5.6, GPT-5.3 Spark), breaking workflows for early adopters.

---

*Generated from [github.com/openai/codex](https://github.com/openai/codex) data up to 2026-07-13 23:59 UTC.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-14

## Today's Highlights
A nightly release addresses privacy messaging for Code Assist tiers, while the community continues to wrestle with subagent reliability – notably false "GOAL" success reports and persistent agent hang scenarios. Several PRs land key robustness fixes, including elimination of synchronous I/O from the shell tool and a stop‑gap against recursive reasoning infinite loops.

## Releases
- **[v0.52.0-nightly.20260713.gf354eebaf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260713.gf354eebaf)** – Fix: shows a clear message when the account has no Code Assist tier.  
  [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260710.ga4c91ce19...v0.52.0-nightly.2)

## Hot Issues (10 Picks)

1. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority P1, 10 comments, 2 👍*  
   The `codebase_investigator` subagent returns `status: "success”` even when it hit the turn limit before doing any analysis. This masks real interruptions and wastes user trust. Community reaction calls for clearer termination reason propagation.

2. **[#21409 – Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *P1, 7 comments, 8 👍*  
   A long‑standing issue where deferral to the generalist agent never completes. Workaround exists (instructing not to use subagents), but the underlying blockage remains unresolved – the top‑voted bug this week.

3. **[#25166 – Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *P1, 4 comments, 3 👍*  
   Post‑execution hang on trivial commands, frustrating users who see a completed process but CLI never progresses. Suggested root cause points to terminal I/O handling.

4. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *P2, 6 comments*  
   Anecdotal evidence that custom skills and subagents are ignored unless explicitly instructed. Users want smarter invocation based on context.

5. **[#21983 – Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *P1, 4 comments, 1 👍*  
   The browser agent crashes under Wayland with "GOAL" termination but no useful output. Wayland users are effectively blocked from this feature.

6. **[#26522 – Auto Memory retrying low‑signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *P2, 5 comments*  
   The extraction agent re‑surfaces sessions it previously deemed low‑signal, causing infinite retry loops. Needs a smarter processed marker.

7. **[#24246 – Gemini CLI 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   *P2, 3 comments*  
   When enabled tools exceed 128, API returns a 400 error. Users expect the agent to limit tool selection automatically.

8. **[#22672 – Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   *P2, 3 comments, 1 👍*  
   Instances of `git reset --force` or unsafe DB commands. Community wants risk‑aware tool policies built into the agent prompt.

9. **[#28399 – Settings.json not loaded in VS Code Dev Container](https://github.com/google-gemini/gemini-cli/issues/28399)**  
   *P2, 2 comments*  
   Workspace‑level `.gemini/settings.json` is ignored when running inside a dev container, preventing project‑specific configuration.

10. **[#24935 – Terminal corruption after exiting external editors](https://github.com/google-gemini/gemini-cli/issues/24935)**  
    *P2, 1 comment*  
    After using an external editor, the Ink‑based UI becomes visually corrupted until a full refresh is forced.

## Key PR Progress (10 Picks)

1. **[#28319 – Enforce path trust check before environment loading (a2a-server)](https://github.com/google-gemini/gemini-cli/pull/28319)**  
   Refactors `CoderAgentExecutor` to verify workspace trust before loading `.env` files, plus introduces `AsyncLocalStorage` for isolated task environments. Critical for multi‑tenant safety.

2. **[#28164 – Limit recursive reasoning turns to 15 per user request](https://github.com/google-gemini/gemini-cli/pull/28164)**  
   Implements a hard cap on recursive reasoning loops to protect local CPU and API quotas. Customizable via `maxSessionTurns`. Addresses numerous hang reports.

3. **[#28397 – Remove synchronous I/O from shell tool critical path](https://github.com/google-gemini/gemini-cli/pull/28397)**  
   Replaces `fs.mkdtempSync`, `fs.existsSync`, `fs.statSync` with async alternatives in `shell.ts`. Expected to eliminate UI stuttering during shell execution.

4. **[#28394 – Remove temp files on background process exit](https://github.com/google-gemini/gemini-cli/pull/28394)**  
   Fixes a resource leak where temporary directories are never cleaned when a shell command runs in background.

5. **[#28389 – Add real‑world time budget to prevent infinite‑loop agent transitions](https://github.com/google-gemini/gemini-cli/pull/28389)**  
   Injects a shared deadline into `sendMessageStream` and `processTurn` to break out of event‑driven infinite loops.

6. **[#28386 – Track VS Code activation disposables](https://github.com/google-gemini/gemini-cli/pull/28386)**  
   Fixes #27790: registration calls were wrapped in comma expressions, causing only the last disposable to be tracked – leads to resource leaks.

7. **[#28387 – Guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28387)**  
   Fixes #28270: a settings object with a circular reference (e.g., `obj.self = obj`) caused `RangeError: Maximum call stack size exceeded` in the settings manager.

8. **[#28388 – Scope tools.core wildcard deny to built-in tools](https://github.com/google-gemini/gemini-cli/pull/28388)**  
   Fixes a bug where setting `tools.core` to `[]` inadvertently disabled all MCP tools. Adds a `builtinOnly` field to `PolicyRule`.

9. **[#28391 – Enrich shared project quota limit errors with setup hint](https://github.com/google-gemini/gemini-cli/pull/28391)**  
   Enhances HTTP 429 `RESOURCE_EXHAUSTED` errors with actionable guidance to configure a dedicated GCP project.

10. **[#28398 – Simplify plan mode write policy to support relative paths](https://github.com/google-gemini/gemini-cli/pull/28398)**  
    Fixes nightly build failures in `plan-mode.test.ts` where an overly restrictive glob pattern didn't match relative `.md` paths.

## Feature Request Trends
- **AST‑aware code understanding** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) – Investigate AST‑based file reads, search, and mapping to reduce token waste and improve precision.
- **Agent self‑awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) – The CLI should know its own flags, hotkeys, and subagent capabilities to guide users accurately.
- **Subagent trajectory sharing** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) – Make subagent traces visible via `/chat share` for easier debugging and evaluation.
- **Browser agent resilience** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) – Auto‑recover locked profiles and orphaned sessions instead of failing fast.
- **Component‑level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) – Scale up behavioral eval tests and integrate them into CI per component.
- **Destructive action safeguards** ([#22672)](https://github.com/google-gemini/gemini-cli/issues/22672) – Agent‑level prompting to prefer safe alternatives over `--force` or risky git commands.

## Developer Pain Points
- **Agent hangs and false success** – Multiple P1 bugs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) erode confidence in autonomous mode.
- **Memory system churn** – Auto Memory retrying low‑signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and silent skip of malformed patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) frustrate users relying on persistent context.
- **Tool policy surprises** – The `tools.core` wildcard disabling MCP tools ([#28388](https://github.com/google-gemini/gemini-cli/pull/28388)) and 400 errors with many tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) highlight brittle configuration.
- **Environment/workspace quirks** – Settings ignored in Dev Containers ([#28399](https://github.com/google-gemini/gemini-cli/issues/28399)) and symlinked agent files not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)) disrupt developer workflows, especially in containerized or Nix environments.
- **Terminal UI glitches** – Flicker on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)) and corruption after external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)) degrade the interactive experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-14

## Today’s Highlights
No new releases or pull requests landed in the last 24 hours, but the issue tracker saw a flurry of activity — 11 new triage reports filed today alone. Key themes include persistent clipboard regressions on Linux, a critical V8 crash under heavy tool usage, and a growing call for multi‑BYOK‑model support. Several long‑standing issues (e.g., ctrl+shift+c clipboard breakage, autopilot infinite loops) remain open with active discussion.

## Releases
*(No new releases in the last 24 hours.)*

## Hot Issues (10 Most Noteworthy)

1. **#2082 – ctrl+shift+c no longer copies to clipboard on Linux**  
   *[OPEN, area:platform-linux, area:input-keyboard]*  
   ⭐ 11 👍 · 23 comments · Reported 2026-03-16  
   Pressing `ctrl+shift+c` – the standard Linux terminal copy shortcut – stopped working in Copilot CLI ≥v1.0.4. The workaround using `ctrl+c`/right‑click is inconsistent. **High impact** for the large Linux user base.  
   [Link](https://github.com/github/copilot-cli/issues/2082)

2. **#3282 – Add multiple BYOK model capability**  
   *[OPEN, area:models, area:configuration]*  
   ⭐ 14 👍 · 5 comments  
   Currently only one Bring‑Your‑Own‑Key model can be set via environment variable. Switching requires restarting the session. Community strongly requests a TUI‑based model selector.  
   [Link](https://github.com/github/copilot-cli/issues/3282)

3. **#1941 – Sudden influx of "Execution failed: CAPIError: 400 The requested model is not supported"**  
   *[CLOSED, area:models]*  
   ⭐ 0 👍 · 12 comments  
   Users hit a blocking error mid‑session. Though closed, the discussion reveals server‑side model routing issues that may resurface.  
   [Link](https://github.com/github/copilot-cli/issues/1941)

4. **#4024 – Voice mode: all bundled ASR models fail silently**  
   *[OPEN, area:models]*  
   ⭐ 0 👍 · 8 comments · Reported 2026-07-03  
   `/voice` records audio (level meter reacts) but every transcription returns empty for all three offered models. Root cause traced to a `MultiModalProcessor` routing bug for `nemotron_speech (RNNT)`. Affects voice‑powered workflows.  
   [Link](https://github.com/github/copilot-cli/issues/4024)

5. **#2776 – Shift+Enter submits the prompt instead of inserting a new line**  
   *[OPEN, area:input-keyboard]*  
   ⭐ 2 👍 · 6 comments  
   Standard terminal behaviour expects `Shift+Enter` for multi‑line input. Current behaviour forces users to paste or use awkward workarounds.  
   [Link](https://github.com/github/copilot-cli/issues/2776)

6. **#2881 – Autopilot mode enters infinite loop, draining premium requests**  
   *[OPEN, area:agents]*  
   ⭐ 0 👍 · 3 comments  
   Enabling autopilot causes an endless `● Continuing autonomously` loop until manually cancelled, each iteration consuming a premium request. **Costly bug** for premium users.  
   [Link](https://github.com/github/copilot-cli/issues/2881)

7. **#4102 – Native V8 array-length crash during active tool-heavy turns / session resume**  
   *[OPEN, area:platform-linux, area:sessions]*  
   ⭐ 0 👍 · 1 comment · Reported 2026-07-12  
   Packaged Linux x64 binary aborts inside V8 during tool‑heavy interactions or session recovery. The crash is **not** caused by concurrent restores; it’s a deeper memory‑management issue.  
   [Link](https://github.com/github/copilot-cli/issues/4102)

8. **#4096 – Third-party MCP server shows "Connected" but tools missing from CLI sessions**  
   *[OPEN, area:authentication, area:mcp]*  
   ⭐ 2 👍 · 1 comment  
   After OAuth sign‑in to an Atlassian Remote MCP server, the app UI shows a green badge, but the agent never sees the tools. OAuth token is apparently not bridged to the session context.  
   [Link](https://github.com/github/copilot-cli/issues/4096)

9. **#4109 – /copy fails with "Connection refused" – snap package missing x11/wayland plug**  
   *[OPEN, triage]*  
   ⭐ 0 👍 · 0 comments · Reported 2026-07-13  
   The Linux snap distribution lacks the necessary interface plugs for clipboard access. Another clipboard regression on Linux, separate from #2082.  
   [Link](https://github.com/github/copilot-cli/issues/4109)

10. **#4103 – Plugin marketplace clone disables Git credential helpers, breaking private HTTPS repos**  
    *[OPEN, area:authentication, area:plugins]*  
    ⭐ 1 👍 · 0 comments · Reported 2026-07-12  
    Cloning a plugin from a private Azure DevOps HTTPS repo fails because the tool strips Git credential helpers (regression from v1.0.70).  
    [Link](https://github.com/github/copilot-cli/issues/4103)

## Key PR Progress
No pull requests were updated or created in the last 24 hours. Development activity appears to be focused on bug triage and issue resolution.

## Feature Request Trends
The following directions are most frequently requested across open issues:

| Request | Example Issue(s) | Community Signal |
|---------|------------------|------------------|
| **Multiple BYOK models** – Switch models without restarting session | #3282 | ⭐14, the highest upvoted open issue |
| **Subagent CLI parameters** – Expose subagents directly via command line (e.g., `copilot -p "..." --subagent code-review`) | #4058 | New request, no upvotes yet but clear pain point |
| **Extended context pricing display** – Show secondary cost sheet for 1M‑context models in `/models` | #4059 | Users can’t navigate to the advanced pricing table |
| **Token/cost usage in JSON output** – `--output-format json` currently omits token counts and cost data that are exposed via OTel | #4107 | Affects programmatic users and billing observers |
| **Voice mode reliability** – Fix ASR model routing (see #4024) | #4024 | 8 comments, blocks entire voice feature |
| **MCP tool bridging** – Ensure OAuth tokens from third‑party MCP servers are available in CLI sessions | #4096 | 2 👍, critical for MCP ecosystem growth |

## Developer Pain Points
Recurring frustrations and blockers that surface repeatedly:

- **Linux clipboard breakage** – Two separate bugs (#2082 and #4109) prevent copying to clipboard via the expected shortcuts or the `/copy` command. The snap packaging exacerbates the issue by missing required interface plugs.
- **Keyboard shortcut conflicts and missing escapes** – `Shift+Enter` submits instead of new‑line (#2776); `Esc` in `/tasks` dismisses active prompts (#3430); holding `Ctrl+V` spams images (#4045); `ctrl+x → b` cannot background a `read_bash` call (#4110). Users expect standard terminal behaviour.
- **Autopilot runaway loops** – Premium‑request‑burning infinite loops (#2881) erode trust in autonomous mode.
- **Platform‑specific crashes** – V8 array‑length crash on Linux (#4102), Python icon appearing in macOS Dock (#4108), and voice ASR failures on Linux (#4024) create a fragmented experience.
- **Plugin & authentication friction** – Private‑repo plugin installation fails due to credential‑helper removal (#4103); third‑party MCP tools invisible despite “Connected” status (#4096); plugin update lock errors (#1177) persist.
- **Agent UI inconsistencies** – Plan mode toggles without UI update (#1272), subagent identity lost in ACP output (#4106), and `write_agent` blocking the parent assistant (#4101) reduce developer confidence in multi‑agent workflows.

---

*Digest generated from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) activity on 2026-07-14.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-14

## Today’s Highlights  
Two critical bugs surfaced in the last 24 hours: a forked session resuming issue that corrupts output (Windows) and an ACP server failure where `AskUserQuestion` always returns an empty answer. On the fix side, the team merged several high-value PRs, including dynamically deriving completion budgets from the model’s remaining context, loading global MCP config in ACP server mode, and making “LLM not set” errors actionable for fresh installs.

## Releases  
No new releases in the last 24 hours. Current version: **1.36.0**.

## Hot Issues  

1. **[#2496] [bug] Resuming forked session results in corrupted output**  
   Running `kimi -r` on a forked session on Windows 10 produces garbled/truncated output. No comments or upvotes yet, but this is a significant regression for anyone using session persistence with forks.  
   [https://github.com/MoonshotAI/kimi-cli/issues/2496](https://github.com/MoonshotAI/kimi-cli/issues/2496)

2. **[#2495] [ACP] AskUserQuestion/QuestionRequest resolves empty**  
   In ACP server mode, the model always receives an empty answer dict even when the user responds. This makes structured agent–user interactions (question flows) completely unusable over ACP. No upvotes yet; the issue is new but potentially blocking for ACP integrations in editors like Zed and JetBrains.  
   [https://github.com/MoonshotAI/kimi-cli/issues/2495](https://github.com/MoonshotAI/kimi-cli/issues/2495)

## Key PR Progress  

1. **[#2494] fix(kimi): use remaining context for completion budget**  
   Changes the default completion budget from a fixed 32 000 tokens to the remaining space in the model’s context window. Also adds explicit override through `KIMI_MODEL_MAX_COMPLETION_TOKENS` (with `KIMI_MODEL_MAX_TOKENS` as legacy alias). Non-positive values disable clamping.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)

2. **[#2487] feat(agent): support loading CLAUDE.md alongside AGENTS.md**  
   Closes #2401. Kimi now discovers `CLAUDE.md` and `.claude/CLAUDE.md` in the project root, making it compatible with existing Claude Code configurations out of the box.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2487](https://github.com/MoonshotAI/kimi-cli/pull/2487)

3. **[#2488] fix(soul): make LLMNotSet error message actionable for fresh installs**  
   Closes #2456. Instead of the generic “LLM not set”, the error now tells new users to run `kimi login` or set an API key, drastically reducing friction after Homebrew installs.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)

4. **[#2489] fix(soul): restore plan-mode tool bindings after /init creates throwaway soul**  
   Fixes #2478. Running `/init` previously broke plan-mode tool bindings because the throwaway soul reused the same tool instances and overwrote shared `ExitPlanMode`/`EnterPlanMode` tools. Now bindings are restored after `/init` completes.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2489](https://github.com/MoonshotAI/kimi-cli/pull/2489)

5. **[#2490] fix(acp): load global MCP config in kimi acp server**  
   Fixes #2464. The ACP multi-session server now loads the user’s globally configured MCP servers, achieving parity with interactive `kimi` sessions. Without this, ACP clients only see built-in tools.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2490](https://github.com/MoonshotAI/kimi-cli/pull/2490)

6. **[#2492] fix: shorten_middle output exceeds target width by ellipsis length**  
   The `shorten_middle` utility function did not account for the 3‑character `"..."` ellipsis, causing strings to be up to 3 characters longer than the requested `width`. Now correctly computes left/right slices.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2492](https://github.com/MoonshotAI/kimi-cli/pull/2492)

7. **[#2493] Fix: record started_at for background agent tasks so duration is reported**  
   Background **agent** tasks never set `runtime.started_at`, so duration was silently lost (background bash tasks worked fine). Now sets the timestamp in the agent worker startup, enabling proper duration tracking.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2493](https://github.com/MoonshotAI/kimi-cli/pull/2493)

8. **[#2259] fix: redirect stdio MCP stderr to logs**  
   (Still open) Routes stderr from stdio-based MCP subprocesses to `~/.kimi/logs/mcp/<server>.log` instead of leaking to the interactive terminal. Adds regression tests for per-server log paths.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2259](https://github.com/MoonshotAI/kimi-cli/pull/2259)

9. **[#2200] fix(shell): adapt timeouts for long commands**  
   (Still open) Automatically extends the shell timeout for command patterns known to be slow (e.g., `git submodule cleanup`, package installs, builds). Normal commands keep the existing 60‑second default; explicit caller timeouts are preserved.  
   [https://github.com/MoonshotAI/kimi-cli/pull/2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)

## Feature Request Trends  
- **Claude Code interop** – Several contributors and issue comments ask for first-class support of `CLAUDE.md` / `.claude/` directories, which is now addressed by PR #2487.  
- **Better onboarding** – Fresh installs need clear actionable error messages (PR #2488) and the community values seamless setup instructions.  
- **ACP parity with interactive mode** – Missing MCP config (PR #2490) and broken `AskUserQuestion` (Issue #2495) show strong demand for ACP to behave identically to `kimi` interactive sessions, especially for editor integrations.

## Developer Pain Points  
- **Session resumption corruption** – Issue #2496 highlights that forked sessions are fragile on Windows, a recurring stability concern.  
- **ACP user‑question flow broken** – The empty response in `AskUserQuestion` (Issue #2495) is a fundamental blocker for any agent using interactive prompts over ACP.  
- **Tool binding side‑effects** – The `/init` command overwriting plan‑mode tools (PR #2489) points to a deeper architectural issue with shared tool instances.  
- **UI polish** – String trimming off‑by‑3 (PR #2492) and background agent duration missing (PR #2493) indicate lingering UI/UX details that frustrate daily users.  
- **Noisy MCP stderr** – The long‑standing PR #2259 reflects developer irritation with MCP subprocess stderr spamming the terminal.  
- **Shell timeouts for slow commands** – PR #2200 addresses user frustration with flaky `git` and build commands timing out prematurely.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-07-14.

---

## OpenCode Community Digest — 2026-07-14

### Today's Highlights
The community is stabilizing rapidly around GPT-5.6 Luna support, with **v1.17.20** hot on the heels of **v1.17.19** to fix a lingering "Model not found" error for OAuth users. Concurrently, the **V2 branch** is seeing heavy integration work, merging the dev branch to resolve compatibility issues between the new models catalog and legacy OpenAI pro-mode support. Windows-specific bugs remain a recurring frustration, with multiple issues filed around path handling, file tree expansion, and cmdlet permissions.

### Releases
**v1.17.20** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.20)
- **Core Bugfix:** Removed an obsolete Codex workaround that interfered with OpenAI Luna Responses Lite requests.
- **Core Improvement:** Updated Azure AI support for GPT-5.6.

**v1.17.19** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.19)
- **Core Bugfixes:** Supported OpenAI pro reasoning mode; disabled response storage by default for xAI Responses; added OAuth support for Luna Responses Lite; used Codex context limits for GPT-5.6 over OpenAI.
- **Other:** Org switching on logout; context-limit handling improvements.

### Hot Issues
1. **[#36140 (CLOSED)](https://github.com/anomalyco/opencode/issues/36140) — GPT-5.6 Luna returns model not found with ChatGPT OAuth.** *51 comments, 101 👍.* This was the most active issue today. Despite being closed in v1.17.19, a follow-up (#36729) confirmed it still reproduced, prompting the v1.17.20 hotfix.
2. **[#15059 (OPEN)](https://github.com/anomalyco/opencode/issues/15059) — Multiple system prompts break Qwen3.5-* models.** *13 comments.* A long-running investigation into how the Dynamic Context Pruning plugin adds a second system prompt, causing model crashes. Highlights fragility in system prompt handling.
3. **[#35265 (OPEN)](https://github.com/anomalyco/opencode/issues/35265) — ResourceExhausted: Worker local total request limit reached.** *7 comments.* Users are hitting rate limits even after previous fixes. Indicates the current retry/backoff logic isn't aggressive enough for high-throughput environments.
4. **[#36681 (OPEN)](https://github.com/anomalyco/opencode/issues/36681) — Windows path references and permissions on external directory path not working.** *5 comments.* A significant gap in documentation and handling for Windows paths in the `permission.external_directory` configuration.
5. **[#33356 (OPEN)](https://github.com/anomalyco/opencode/issues/33356) — Unbounded growth of the `event` table (13GB+ SQLite DB).** *5 comments.* A critical performance and stability issue where long-lived instances fill disk space due to no SQLite WAL compaction. High potential for data loss.
6. **[#36498 (OPEN)](https://github.com/anomalyco/opencode/issues/36498) — `opencode run` non-deterministically applies edits to a different registered project.** *4 comments.* A scary headless bug where workers target the wrong project. Non-deterministic bugs are a high priority for reliability.
7. **[#36280 (OPEN)](https://github.com/anomalyco/opencode/issues/36280) — Worker subprocess crashes with SIGILL on Intel i5-7200U (Kaby Lake).** *4 comments.* A crash cascade that freezes the system. Suggests the binary may be compiled with instructions (e.g., AVX512) not available on older CPUs, freezing the user's machine.
8. **[#36775 (CLOSED)](https://github.com/anomalyco/opencode/issues/36775) — Concurrent instances on same project cause silent crash (SQLite WAL lock contention).** *3 comments.* Another SQLite concurrency issue. Two instances on the same project cause one to crash silently. Closed as a duplicate of a broader WAL locking family.
9. **[#36737 (OPEN)](https://github.com/anomalyco/opencode/issues/36737) — Windows npm install leaves 479-byte placeholder opencode.exe.** *2 comments.* A platform packaging issue where blocked postinstall scripts prevent the real binary from being written, leaving users with a non-functional stub.
10. **[#36773 (OPEN)](https://github.com/anomalyco/opencode/issues/36773) — V2 TUI crash: `undefined is not an object (evaluating 'z().indexOf')`.** *1 comment.* A new V2 regression in the session picker dialog. The crash has multiple linked PRs attempting to fix it, indicating the fix is non-trivial.

### Key PR Progress
1. **[#36781 (OPEN)](https://github.com/anomalyco/opencode/pull/36781) — feat(auth): add support for multiple profiles per provider.** A direct response to the high-demand request for multi-account support. Allows users to store and rotate between multiple API keys for the same provider.
2. **[#36770 (OPEN)](https://github.com/anomalyco/opencode/pull/36770) — chore: merge dev into v2.** A major branch synchronization PR. It merges OpenAI pro-mode support into the V2 branch while preserving V2's models catalog architecture. Critical path for V2 releasing these features.
3. **[#36779 (OPEN)](https://github.com/anomalyco/opencode/pull/36779) — fix(cli): update mini tests for v2 types.** Cleans up test compatibility after the CLI moved to V2 client types. Prevents regressions in CLI test suites.
4. **[#36777 (OPEN)](https://github.com/anomalyco/opencode/pull/36777) — fix(app): enable remote session auto-accept.** Unblocks remote session workflows in the new layout, ensuring resolution happens against the correct provider group. Important for distributed teams.
5. **[#36780 (OPEN)](https://github.com/anomalyco/opencode/pull/36780) — fix(codemode): remove scheduling margins from interruption tests.** Fixes flaky Windows unit tests that were sensitive to schedule timing. Improves CI reliability for the codemode package.
6. **[#36752 (OPEN)](https://github.com/anomalyco/opencode/pull/36752) — fix(opencode): read cache write tokens from raw usage.** Fixes a billing bug where Anthropic cache writes through OpenAI-compatible gateways were recorded as zero, leading to underbilling and potential usage limit issues.
7. **[#36760 (CLOSED)](https://github.com/anomalyco/opencode/pull/36760) — fix: custom tools with args tolerate undefined input.** Prevents crashes in custom plugin tools when an AI SDK passes `undefined` args. Applies a pattern already used in MCP tools, closing two related issues.
8. **[#36772 (CLOSED)](https://github.com/anomalyco/opencode/pull/36772) — chore(codemode): run tests in CI.** A foundational quality improvement. The codemode package had 787+ tests that never ran in CI due to an incomplete `turbo.json` configuration. Now catches regressions automatically.
9. **[#36307 (CLOSED)](https://github.com/anomalyco/opencode/pull/36307) — docs: switch to linden theme.** A visual refresh for the documentation site. While cosmetic, a well-designed docs site improves developer onboarding.
10. **[#36774 (OPEN)](https://github.com/anomalyco/opencode/pull/36774) — fix(tui): prevent session picker crash.** A direct attempt to fix the critical TUI crash (#36773). Addresses a side-effect where the footer action list becomes stale during dialog mounting.

### Feature Request Trends
- **Multi-Provider Account Management:** The highest-velocity feature request. Users want to store and load-balance across multiple API keys/subscriptions for the same provider (e.g., personal + work OpenAI accounts). PR #36781 is an immediate attempt to address this.
- **V2 Monorepo Sub-Agents:** Users want OpenCode V2 to spawn sub-agents that run in specific subdirectories of a monorepo (cross-location support), rather than being constrained to the root.
- **Windows Compatibility:** A consistent theme. Issues cover file path handling, cmdlet permissions, and UI elements (file tree expansion). The lack of Windows documentation is a common complaint.
- **Session Export & Audit:** Two separate requests (prompt-only export with timestamps, automatic session export after use) signal a growing need for better observability and logging, especially in CI/headless contexts.
- **LSP for Niche Languages:** While not high-volume, the Pascal LSP request highlights a desire for broader ecosystem support beyond mainstream languages.

### Developer Pain Points
- **Database Bloat & Concurrency:** The SQLite `event` table growing to 13+ GB and silent crashes on concurrent instance use are the most severe stability issues. The lack of compaction/retention policies is a recurring pain.
- **Silent Failures in Headless Mode:** Two separate issues (#36498, #36764) highlight non-deterministic routing failures in `opencode run`. Workers editing the wrong project or ignoring `@agent` mentions are costly for automation pipelines.
- **Platform-Specific Crashes:** From SIGILL on Kaby Lake CPUs to system-freezing crash cascades, there is a sense that the binary isn't well-tested against older or diverse hardware.
- **TUI Instability:** The V2 TUI is seeing a burst of regressions (crash on `/sessions`, empty MCP server lists, sidebar missing). This suggests the new UI/UX is undergoing rapid change with insufficient regression coverage.
- **Auto-Upgrade Disruption:** Users report that automatic upgrades during an active session cause data loss and process death, especially when multiple instances are running.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 14, 2026.

---

**Pi Community Digest**  
*2026-07-14 | Project: earendil-works/pi*

### Today’s Highlights
The project saw intense bug-fixing activity, especially around new model compatibility (OpenAI Codex’s `gpt-5.6-luna` and DeepSeek V4) and provider-specific regressions. A wave of merged PRs addressed session ID issues, retry logic gaps, and image rendering. A notable spike in feature requests around proactive compaction and extension-driven cost tracking hints at growing power-user expectations.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues (10 picked from 50+)
1. **#6477 (OPEN)** — Compaction fails on OpenAI-Codex `gpt-5.6-luna` because summary requests omit the session ID. **11 👍**, 7 comments. Affects any user trying to compact with the newest models.  
   [https://github.com/earendil-works/pi/issues/6477](https://github.com/earendil-works/pi/issues/6477)

2. **#6476 (OPEN, inprogress)** — `httpIdleTimeoutMs` regression for self-hosted OpenAI-compatible providers in v0.80.6. This broke vLLM deployments for several users and is being actively investigated.  
   [https://github.com/earendil-works/pi/issues/6476](https://github.com/earendil-works/pi/issues/6476)

3. **#6187 (CLOSED)** — WSL login hang after GitHub Copilot device authorization. High impact for WSL users; now fixed. The delay between browser registration and client detection was the root cause.  
   [https://github.com/earendil-works/pi/issues/6187](https://github.com/earendil-works/pi/issues/6187)

4. **#6303 (CLOSED)** — Exponential retry backoff had no upper cap despite a `maxRetryDelayMs` setting existing. A fix was merged to cap delay growth.  
   [https://github.com/earendil-works/pi/issues/6303](https://github.com/earendil-works/pi/issues/6303)

5. **#6364 (CLOSED)** — NVIDIA NIM’s `ResourceExhausted` error was not treated as retryable, causing unnecessary failures on gRPC-based servers. Now patched.  
   [https://github.com/earendil-works/pi/issues/6364](https://github.com/earendil-works/pi/issues/6364)

6. **#6324 (CLOSED)** — `/tree` branch summarization threw “No API key found” for ambient-credential providers like Bedrock and Vertex. Fixed by allowing `null` API key.  
   [https://github.com/earendil-works/pi/issues/6324](https://github.com/earendil-works/pi/issues/6324)

7. **#6563 (CLOSED)** — TUI dropped image blocks from user messages; model saw the image but the chat transcript did not. A PR to render images in user messages is already open.  
   [https://github.com/earendil-works/pi/issues/6563](https://github.com/earendil-works/pi/issues/6563)

8. **#6459 (OPEN, inprogress)** — Custom keybindings from `keybindings.json` were ignored until a `/reload`. Affects users with custom editors like `pi-powerline-footer`.  
   [https://github.com/earendil-works/pi/issues/6459](https://github.com/earendil-works/pi/issues/6459)

9. **#6522 (OPEN, inprogress)** — `openai-completions` path had no minimum floor on `max_completion_tokens`, causing 400 errors when context estimates were wrong.  
   [https://github.com/earendil-works/pi/issues/6522](https://github.com/earendil-works/pi/issues/6522)

10. **#6590 (CLOSED)** — Segmentation fault after long runs. The `no-action` label indicates it was auto-closed without a fix, but the report suggests memory or resource exhaustion.  
    [https://github.com/earendil-works/pi/issues/6590](https://github.com/earendil-works/pi/issues/6590)

### Key PR Progress (10 picked from 19)
1. **#6584 (OPEN)** — Forward provider options to compaction/summarization requests, fixing a session ID omission that caused 404s on Codex models. Closes #6555.  
   [https://github.com/earendil-works/pi/pull/6584](https://github.com/earendil-works/pi/pull/6584)

2. **#6533 (OPEN)** — Re-map Codex model IDs during compaction to fix `Model not found` for `gpt-5.6-luna`. Critical for Codex users.  
   [https://github.com/earendil-works/pi/pull/6533](https://github.com/earendil-works/pi/pull/6533)

3. **#6496 (CLOSED)** — Adds OpenRouter session affinity via custom headers, enabling prompt caching on that provider.  
   [https://github.com/earendil-works/pi/pull/6496](https://github.com/earendil-works/pi/pull/6496)

4. **#6544 (CLOSED)** — Routes GitHub Copilot `MAI-Code` models through the `/responses` endpoint instead of `/chat/completions`, unblocking that model family.  
   [https://github.com/earendil-works/pi/pull/6544](https://github.com/earendil-works/pi/pull/6544)

5. **#6613 (CLOSED)** — Sanitizes unpaired UTF-16 surrogates in JSONL RPC output, fixing compatibility with strict parsers like Emacs’ `json-parse-string`.  
   [https://github.com/earendil-works/pi/pull/6613](https://github.com/earendil-works/pi/pull/6613)

6. **#6608 (CLOSED)** — Backfills `encrypted_content` from `response.completed` to fix missing reasoning blocks in Azure OpenAI multi-turn conversations.  
   [https://github.com/earendil-works/pi/pull/6608](https://github.com/earendil-works/pi/pull/6608)

7. **#6572 (OPEN)** — Renders image blocks in interactive user messages and attaches clipboard images to the next user prompt rather than inserting a temp file path. High community interest (see #6563).  
   [https://github.com/earendil-works/pi/pull/6572](https://github.com/earendil-works/pi/pull/6572)

8. **#6594 (OPEN)** — Adds SQLite session storage with compaction-aware `retainedTail` to avoid walking the full tree. A foundational change for persistent session history.  
   [https://github.com/earendil-works/pi/pull/6594](https://github.com/earendil-works/pi/pull/6594)

9. **#6588 (CLOSED)** — Forces tool calls for OpenAI and Codex even when the model tries to bypass them; improves agent reliability.  
   [https://github.com/earendil-works/pi/pull/6588](https://github.com/earendil-works/pi/pull/6588)

10. **#6216 (OPEN)** — Amazon Bedrock Mantle OpenAI Responses provider. Still open; could enable a large AWS user base to use Pi with native Mantle endpoints.  
    [https://github.com/earendil-works/pi/pull/6216](https://github.com/earendil-works/pi/pull/6216)

### Feature Request Trends
- **Proactive compaction**: Users want compaction to run *after* a response (not before processing the next input) to avoid blocking user prompts (see #6606).
- **Multimodal support**: Extending the `prompt` RPC command to handle video/audio content alongside images (#3200) continues to receive traction.
- **Extension cost tracking**: Extensions that spawn sub-processes need a `ctx.ui.setUsage()` API to report external LLM costs into the main footer (#6509).
- **Session-level model switching**: A request to prevent `/model` from overwriting the persistent default model (#3252) reflects a desire for temporary model context.

### Developer Pain Points
- **WSL / ambient auth friction**: Multiple issues highlight that WSL users and users of ambient-credential providers (Bedrock, Vertex) face integration gaps (login hangs, missing API key errors).
- **Regression in configured timeouts**: The `httpIdleTimeoutMs` regression in v0.80.6 (#6476) frustrated self-hosters who rely on precise timeout control.
- **Custom keybinding initialization**: The need to run `/reload` before keybindings apply (#6459) is a recurring “it just works” expectation gap.
- **Model-specific compatibility churn**: New model releases (Codex `gpt-5.6-luna`, DeepSeek V4, MAI-Code) regularly break Pi due to non-standard API behavior, forcing quick patches.
- **Image handling inconsistency**: Images pasted or sent programmatically are inconsistently rendered or estimated during compaction, leading to UI drops and budget overruns.

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于AI开发者工具的技术分析师，以下是根据您提供的GitHub数据生成的Qwen Code社区摘要。

---

### Qwen Code 社区日报 | 2026年7月14日

欢迎阅读Qwen Code社区日报。今日社区的核心焦点是 **v1.0发布计划的初步起草** 和围绕 **`qwen serve` 守护进程模式、多工作区支持与ACP协议** 的激烈讨论。同时，开发团队在 **Review工具链的健壮性** 和 **终端UI体验** 上进行了大量修复与改进。

---

### 1. 今日亮点

社区的核心关注点从功能设想转向了 **v1.0 版本的发布筹备**，以守护进程/服务（daemon/serve）与ACP协议的稳定性和安全基线作为硬性标准。与此同时，围绕守护进程模式的 **多工作区支持**、**热加载频道** 以及 **会话间通信机制** 的讨论达到了新高度，显示出社区对将Qwen Code打造成生产环境中的核心协作平台的强烈期待。

---

### 2. 版本发布

**桌面版：desktop-v0.0.5**
*   [完整变更日志](https://github.com/QwenLM/qwen-code/compare/desktop-v0.0.4...desktop-v0.0.5)
*   无详细变更说明。

---

### 3. 热点问题

1.  **[#6821] [Discussion] 1.0 Release Plan — Draft Triage**：社区成员发起的 **v1.0发布计划草案** 引发了热烈讨论。该计划将“稳定的daemon/serve + ACP协议合规 + 流式不丢数据不重复 + 安全基线”作为1.0的核心定义，其余功能如频道/IM（Channel/IM）等将作为后续迭代内容。这标志着社区和开发团队对“可用性”和“稳定性”的优先级达成了共识。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6821)

2.  **[#3803] Daemon mode (qwen serve): proposal & open decisions**：长达 **25条评论** 的守护进程设计提案，以6章设计系列文档为基础，是当前 `qwen serve` 功能演进的基石。该提案持续接收社区的反馈并推动实现。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/3803)

3.  **[#6378] RFC: Support multiple workspaces in one qwen serve daemon**：一项关于 **单守护进程支持多工作区** 的RFC，累计22条评论。该提议旨在解决多项目同时开发的痛点，而不需要启动多个守护进程。这是当前最受关注的daemon能力扩展之一。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6378)

4.  **[#4514] tracking(serve): daemon capability gaps & prioritized backlog**：跟踪 `qwen serve` 守护进程在HTTP/SSE接口上的能力缺口，定义了 **v0.16-alpha之后的功能优先级列表**。这是了解守护进程未来开发路线图的关键问题。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/4514)

5.  **[#4782] tracking(serve): ACP Streamable HTTP transport — implementation status, RFD alignment & upgrade plan**：跟踪 **ACP（Agent Client Protocol）Streamable HTTP** 传输的实现状态。目前Qwen Code Daemon已实现此协议，允许Zed、Goose等支持ACP的原生编辑器无需适配代码即可连接，是提升生态兼容性的关键一步。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/4782)

6.  **[#5239] subagent和主会话之间的通信机制较弱**：用户 `wunan067830-west` 提出了 **子代理（subagent）与主会话通信机制薄弱** 的问题。当前子代理无法主动通知主会话其状态（如挂起），用户被迫采用监控文件写入这种变通方案。该问题反映了社区对更强大、双向的多智能体协作能力的迫切需求。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5239)

7.  **[#6762] Feature Request: Skill Context Lifecycle Management**：一项关于 **技能上下文生命周期管理** 的功能请求。作者 `Aleks-0` 指出，当前的SKILL.md内容会永久保留在对话上下文中，导致上下文膨胀。提议增加卸载、压缩或自动释放技能上下文的机制。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6762)

8.  **[#6808] Mouse text selection broken: ScrollableList bypassVpGate forces SGR mouse tracking**：一个回归BUG，报告称在Windows Terminal等终端中，**鼠标拖拽文本选择功能失效**。原因是 `bypassVpGate` 组件强制开启了SGR鼠标追踪，导致终端将所有鼠标事件转发给了Qwen Code。此问题影响了用户最基础的复制粘贴操作。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6808)

9.  **[#6835] Insight report: inconsistent UTC-vs-local date basis**：`/insight` 报告在 **热力图、连续/活跃小时数等统计上使用了不一致的时区（UTC vs 本地时间）**，导致非UTC时区的用户看到错误的热力图单元格和“当前连续活跃”天数。这是一个典型的统计正确性Bug。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6835)

10. **[#6776] When using Ctrl-C to exit can end up with garbled terminal**：报告称通过多次按 `Ctrl-C` 退出 `qwen` 后，**终端键盘输入映射混乱**，`Ctrl-C` 键被错误输出为 `9;5u`。这表明qwen对终端状态的修改未能在退出时完全正确恢复，属于关键的用户体验问题。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6776)

11. **[#6791] auto模式对三方api兼容异常**：用户 `shiyazi` 报告，**auto模式下的请求分类器与部分第三方API（如基于newapi的DeepSeek、Minimax官方模型）不兼容**。主要问题在于缺乏对 `tool-choice` 和 `thinking` 标签的正确处理，导致模型返回纯文本无法解析。这是模型集成中的典型痛点。
    *   [链接](https://github.com/QwenLM/qwen-code/issues/6791)

---

### 4. 关键PR进展

1.  **[#6821] refactor(review): share the probe-worktree path helper; harden the stale-tree sweep**：作者 `wenshao` 提出，重构review工具中的 **工作树（worktree）路径** 处理逻辑，并增强了“清理过期工作树”机制的健壮性。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6841)

2.  **[#6825] feat(serve): add extension management v2**：引入了 **`qwen serve` 的扩展管理V2版本**。新版本支持扩展安装在各工作区共享，但激活策略可基于工作区进行精确配置。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6825)

3.  **[#6839] feat(serve): Add workspace-qualified Voice**：实现了 **多工作区守护进程下的语音（Voice）功能**，允许通过工作区限定的REST和WebSocket路由进行转录操作。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6839)

4.  **[#6815] feat(web-shell): add extension management page**：为Web Shell添加了 **扩展管理页面**，支持扩展的搜索、查看、启用/禁用和卸载等操作。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6815)

5.  **[#6766] feat(ci): add bounded flaky PR CI rerun patrol**：添加了一个 **自动巡逻机器人**，用于检测和分类针对 `main` 分支的PR上的“不稳定”CI失败，试图自动化处理易碎的测试问题。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6766)

6.  **[#6840] fix(review): build the chunk agent's prompt in code — they were launched blind**：作者 `wenshao` 修复了一个严重的Review工具BUG。发现 **23个分块审查代理（chunk agent）在启动时实际上没有得到差异（diff）信息**，它们在“盲猜”。此PR确保为这些代理正确构建包含代码差异的提示。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6840)

7.  **[#6843] fix(review): prove coverage from the harness's records, not the caller's file**：修复另一个Review工具的健壮性问题。发现覆盖率检查之前是读取 **被测试对象（orchestrator）写入的文件** ，这存在数据被污染的风险。现在改为从 **测试框架（harness）的记录** 中获取数据，提升了测试的可信度。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6843)

8.  **[#6836] refactor(review): run the test-efficacy probe in a disposable worktree**：将Review工具的 **测试有效性探针（test-efficacy probe）** 改为在 **一次性的git工作树** 中运行，而不是在共享工作树中原地修改并恢复，解决了并发读者可能看到“半恢复”状态的潜在问题。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6836)

9.  **[#6784] perf(core): reduce Git snapshot processes**：性能优化PR，将 **Git快照** 读取时的 `git status --short` 和 `git log` 合并为单个 `git status --short --branch` 进程，减少每次快照时的子进程创建开销。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6784)

10. **[#6789] feat(triage): add confidence score, sequence diagram, files overview, and review footer to PR comments**：为 `@qwen-code /triage` 机器人的PR评论增加了 **自信度分数、时序图、文件概览** 等结构化元素，提升了评论的信息密度和可读性。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6789)

11. **[#6837] feat(serve): add model API error & retry metrics to daemon status**：为守护进程状态页面的 **Metrics选项卡** 添加了 **模型API错误和自动重试** 的实时图表，增强了守护进程的可观测性。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/6837)

---

### 5. 功能请求趋势

*   **守护进程与多工作区**：社区强烈期望 `qwen serve` 不仅是一个基础的代理服务，更是一个 **功能完整的平台**。核心诉求包括：原生支持**多工作区** ([#6378])、**热插拔频道** ([#6010])（如钉钉、飞书等），以及**支持常驻、共享的频道代理** ([#5887])。
*   **ACP协议与生态集成**：关于 **ACP Streamable HTTP** 的实现和升级是明确的技术方向，旨在无缝连接Zed、JetBrains等编辑器生态系统，减少适配成本 ([#4782])。
*   **长期任务与自主工作流**：`/goal` 命令正在从“功能请求”走向“路线图关键项”，社区期望能将其打造为 **可靠的长周期工作流原语**，具备暂停、恢复、监控和错误恢复能力 ([#4228])。
*   **增强的上下文与资源管理**：用户开始关注上下文管理的精细度，如**技能上下文的生命周期管理**（卸载、压缩）([#6762]) 和 **`pinned/`目录** （受保护、免于被 `/dream` 合并的内存文件）([#6801])。
*   **搜索与回顾**：对 **历史对话的关键词搜索** 功能的需求日益增长，用户希望能够快速定位过去的会话内容，这是从“使用”到“管理”转变的标志 ([#6824])。

---

### 6. 开发者痛点

*   **终端体验与健壮性**：一系列 **终端UI回归** 问题影响用户信心，包括鼠标框选失效 ([#6808])、退出后终端残留字符 ([#6776])、长文本截断而非换行 ([#6814]) 以及状态栏（如上下文用量）不刷新 ([#6806])。
*   **第三方API兼容性**：在“auto”模型模式下，与 **第三方API（如DeepSeek、Minimax）的兼容性问题** 频繁出现。缺乏对 `tool-choice`、`thinking` 标签等非标准行为的容错处理是主要原因 ([#6791])。
*   **CI与发布稳定性**：社区报告了多次 **CI和发布流水线失败** ([#6781], [#6749])，包括E2E测试不稳定和 SDK版本依赖问题导致发布阻塞 ([#6822])，这影响了开发者对新版本的获取和信任。
*   **内存与性能问题**：有报告指出在Linux上遇到 `RuntimeError: memory access out of bounds` 的WebAssembly内存越界错误 ([#6820])，表明在某些环境下存在内存管理问题。
*   **Review工具链的准确性**：尽管开发团队在努力改进，但Review工具链（`/review`）仍存在一些健壮性问题，例如**子代理的提示构建错误** ([#6840]) 和 **测试覆盖率数据源可信度** ([#6843]) 的问题，表明该功能目前仍处于积极打磨阶段。
*   **安全与配置泄漏**：存在一个 **信任状态（trust-status）检查的副作用BUG**，导致“预览”检查会不可逆地修改缓存配置并持久化，这引发了安全相关的担忧 ([#6831])。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest – 2026-07-14

## 1. 🎯 Today's Highlights

The team is finalizing the **v0.8.68 release candidate** (PR #4361), which polishes the underwater TUI, stabilises composer, mouse, settings, and scrollbars, and introduces a complete `exec-stream` receipt contract. Five new open issues focus on **agent reliability** – terminal identity persistence across restarts, parent-stop semantics for detached sub-agents, and phased underwater motion. Meanwhile, the community continues to push for broader platform and provider support, with a fix for BSD browser opening (PR #4360) and two MiniMax provider PRs (PR #4352, #4354) moving forward.

---

## 2. 📦 Releases

**No new releases in the last 24 hours.**  
The upcoming v0.8.68 is currently under review in PR #4361.

---

## 3. 🔥 Hot Issues

All 6 recently updated issues are highlighted; each one touches on core reliability or agent‑ready features.

### #4329 – [CLOSED] Anthropic API error (`invalid_request_error`)
- **Link:** [Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329)
- **Why it matters:** A critical bug that broke tool‑use workflows when Anthropic returned HTTP 400 due to mismatched `tool_use` / `tool_result` blocks. The fix was merged, closing the issue.
- **Community reaction:** 7 comments, 0 👍 (low visibility, but high impact for users of Anthropic models).

### #4355 – [OPEN] Persist stateful terminal identity and restart limitations safely
- **Link:** [Issue #4355](https://github.com/Hmbown/CodeWhale/issues/4355)
- **Why it matters:** Ensures that a restarted CodeWhale process does not incorrectly assume a stale PID/shell is still alive. Essential for long‑running agent sessions.
- **Community reaction:** 0 comments; core contributor self‑filed.

### #4356 – [OPEN] Complete versioned exec stream receipts and tool lifecycle metadata
- **Link:** [Issue #4356](https://github.com/Hmbown/CodeWhale/issues/4356)
- **Why it matters:** Adds a proper contract for terminal outcomes and tool lifecycle, enabling replay, support debugging, and cost attribution – key for production agent deployments.
- **Community reaction:** 0 comments.

### #4357 – [OPEN] Finish underwater receipt settling and phase‑aware ambient motion
- **Link:** [Issue #4357](https://github.com/Hmbown/CodeWhale/issues/4357)
- **Why it matters:** The underwater TUI must not cause motion while idle. This issue resolves receipt settling, depth transitions, and one‑shot fish response – important for users who rely on reduced‑motion accessibility.
- **Community reaction:** 0 comments.

### #4358 – [OPEN] Add PTY coverage for work‑surface and approval mouse interactions
- **Link:** [Issue #4358](https://github.com/Hmbown/CodeWhale/issues/4358)
- **Why it matters:** The PTY test suite lacks assertions for real mouse clicks in the work surface and stop‑confirm UI. Missing coverage risks regressions during mouse‑heavy TUI interactions.
- **Community reaction:** 0 comments.

### #4359 – [OPEN] Define parent‑stop semantics for detached background agents
- **Link:** [Issue #4359](https://github.com/Hmbown/CodeWhale/issues/4359)
- **Why it matters:** Detached background agents intentionally outlive the foreground turn, but pressing Esc/stop is ambiguous – should it cancel everything, continue, or ask? This issue clarifies the contract to avoid silent cancellation of long‑running background tasks.
- **Community reaction:** 0 comments.

---

## 4. 🔧 Key PR Progress

All 5 PRs updated in the last 24 hours are listed.

### #4361 – [OPEN] Prepare CodeWhale v0.8.68 release candidate
- **Link:** [PR #4361](https://github.com/Hmbown/CodeWhale/pull/4361)
- **What it does:** Integrates all v0.8.68 changes: polished underwater TUI, stabilised composer/mouse/settings/scrollbars, and a complete `exec‑stream` receipt. The release is ready for cloud continuation and review.
- **Significance:** The most important PR – marks the next version.

### #4360 – [OPEN] Fix browser open on BSD systems
- **Link:** [PR #4360](https://github.com/Hmbown/CodeWhale/pull/4360)
- **What it does:** Adds platform gates for NetBSD, FreeBSD, OpenBSD, and DragonFly to the `browser_open_command()` function, fixing the “unsupported on this platform” error.
- **Significance:** Closes a frustrating gap for BSD users; community contribution from `ci4ic4`.

### #4352 – [CLOSED] Add MiniMax Messages‑compatible route
- **Link:** [PR #4352](https://github.com/Hmbown/CodeWhale/pull/4352)
- **What it does:** Registers MiniMax‑M3 and MiniMax‑M2.7 as a new provider route across the registry, CLI, TUI, and request client. Merged after review.
- **Significance:** Expands provider choice; community contribution from `octo-patch`.

### #4354 – [OPEN] Add MiniMax Messages provider support
- **Link:** [PR #4354](https://github.com/Hmbown/CodeWhale/pull/4354)
- **What it does:** A complementary PR that adds the dedicated MiniMax provider with global/China base URLs, authentication, routing, and pricing metadata.
- **Significance:** Essential for users behind Chinese endpoints; also adds verified model capabilities.

### #4351 – [OPEN] Fix scorecard costs to bind provider routes
- **Link:** [PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351)
- **What it does:** Ensures offline scorecard prices are bound to exact provider/model routes, so OAuth, local/custom, and unpriced gateways fail closed instead of silently reporting wrong costs.
- **Significance:** Critical for billing accuracy; community contribution from `nightt5879`.

---

## 5. 📊 Feature Request Trends

Analyzing the open issues and PRs reveals three dominant directions:

1. **Agent‑ready architecture** (issues #4356, #4359, PR #4361) – Users and maintainers are pushing for a robust sub‑agent lifecycle: versioned execution receipts, clear parent‑stop semantics for detached agents, and reliable tool metadata for replay and cost attribution.

2. **TUI polish and accessibility** (issues #4357, #4358) – The underwater TUI is nearing completion, but requires finishing touches (motion during idle, mouse interaction test coverage). Reduced‑motion support is a recurring accessibility requirement.

3. **Provider extensibility** (PRs #4352, #4354) – The community actively wants more model providers (MiniMax) and better route handling (scorecard binding). Expect continued demand for multi‑provider support with regional endpoints.

---

## 6. 🧑‍💻 Developer Pain Points

Frequent frustrations visible in recent activity:

- **API error handling** – The Anthropic `invalid_request_error` (#4329) highlights fragility when tool‑use patterns differ between providers. Developers need consistent error surfaces across providers.
- **Platform gaps** – BSD users still experience unsupported operations (browser opening in #4360). The project currently only handles macOS, Linux, Windows.
- **Ambiguous cancellation semantics** – When using `Esc`/`stop` with background agents, the lack of a clear contract (#4359) can lead to accidental termination of detached tasks.
- **Incomplete execution metadata** – Without a versioned receipt contract (#4356), debugging and cost attribution remain guesswork. This is a pain point for teams using CodeWhale in production agent loops.
- **Test coverage for TUI interactions** – Mouse clicks and approval confirmations are not yet asserted in PTY tests (#4358), increasing regression risk during UI changes.

---

*Generated from GitHub data for repo `Hmbown/DeepSeek-TUI` (CodeWhale) – 2026-07-14*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*