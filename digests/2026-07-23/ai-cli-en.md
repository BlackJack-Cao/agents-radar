# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-22 23:41 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-07-23 | **Prepared for:** Technical Decision-Makers & Developers

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is in a period of **intense, convergent maturation**, with seven major tools shipping releases or critical patches in a single day. Cross-platform reliability—particularly on Windows—has emerged as the dominant pain point across every tool surveyed, with MCP (Model Context Protocol) integration fragility, subagent lifecycle bugs, and authentication regressions recurring universally. While Claude Code and OpenAI Codex lead in raw community engagement volume, newer entrants like **CodeWhale** (formerly DeepSeek-TUI) and **Pi** are innovating aggressively in skill management and provider extensibility. The ecosystem is bifurcating along two axes: **commercial API-centric tools** (Claude Code, Copilot CLI, OpenAI Codex) versus **provider-agnostic, self-hostable tools** (Pi, Qwen Code, OpenCode, Kimi Code, CodeWhale). Notably, safety classifier false positives are eroding trust across multiple platforms, particularly for security and DevOps workflows.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status |
|------|-----------------|---------------|----------------|
| **Claude Code** | 10 | 9 | ✅ **v2.1.218** (new release) |
| **OpenAI Codex** | 10 | 10 | ✅ **4 Rust alphas** (v0.146.0-a.1–3, v0.145.0-a.30) |
| **Gemini CLI** | 10 | 10 | ✅ **v0.53.0-preview, v0.52.0 stable, nightly** (3 releases) |
| **GitHub Copilot CLI** | 10 | 1 | ✅ **v1.0.74-1 through -3** (3 patch releases) |
| **Kimi Code CLI** | 3 | 2 | ❌ No new releases |
| **OpenCode** | 10 | 10 | ❌ No new releases |
| **Pi** | 10 | 10 | ❌ No new releases (but active PRs) |
| **Qwen Code** | 10 | 10 | ✅ **v0.20.0-preview + nightly** (2 releases) |
| **CodeWhale** (DeepSeek-TUI) | 10 | 10 | ❌ No new releases (converging on v0.9.1) |

**Key observations:**
- **5 of 9 tools** released code in the last 24 hours
- **CodeWhale** has the highest PR velocity (15+ merged in 24h by its own count)
- **Kimi Code** is the quietest but has critical bugs affecting Windows and MCP users
- **OpenAI Codex** is iterating rapidly on its Rust CLI runtime (4 alpha tags)

---

## 3. Shared Feature Directions

### Requirements appearing across **3+ tools**:

| Need | Affected Tools | Specific Requests |
|------|---------------|-------------------|
| **MCP reliability & schema hardening** | Claude Code, OpenAI Codex, Copilot CLI, Kimi Code | Silent dispatch failures (#80002 Claude, #2531 Kimi), OAuth blocking (#24103 Codex), connection failures (#2282 Copilot) |
| **Windows platform stability** | Claude Code, OpenAI Codex, Copilot CLI, Kimi Code, CodeWhale | Freezes (#20214 Codex), WMI CPU spikes (#34014 Codex), PATH corruption (#4685 CodeWhale), gbk encoding crash (#2532 Kimi) |
| **Subagent / sandbox orchestration maturity** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Qwen Code | False "success" reports (#22323 Gemini), lifecycle leaks (#34061 Codex), incomplete debugging context (#21763, #22598 Gemini) |
| **Context management & token optimization** | Claude Code, OpenAI Codex, Copilot CLI, CodeWhale | Auto-compaction never triggers (#80196 Claude), RTK filtering (#19001 Codex), 5MB CAPI limit (#4183 Copilot), "context diet" requests (CodeWhale #4704-4709) |
| **Safety / security false positives** | Claude Code, OpenAI Codex, Copilot CLI, CodeWhale | Security debates downgrade model (#80348 Claude), DevOps tasks blocked (#28015 Codex), permission scanner over-blocking (#4221 Copilot), `danger-full-access` broken (#4684 CodeWhale) |
| **Multi-account & profile management** | Claude Code, OpenCode, Pi | Plugin for isolated config dirs (#80326 Claude), global session picker (OpenCode #33450), auth fragility across tools |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach | Key Differentiator |
|------|-----------|-------------|-------------------|--------------------|
| **Claude Code** | Agentic code review, background subagents | Professional dev teams | Background subagents, slash commands, Fable safety system | Most mature subagent orchestration; `/code-review` as background process |
| **OpenAI Codex** | Multi-platform IDE + CLI + mobile | Enterprise (Business-tier) | Rust CLI runtime, headless remote support | Strongest multi-IDE support (VS Code + standalone + mobile); headless Linux |
| **Gemini CLI** | Agent orchestration, caretaker automation | Google Cloud ecosystem users | LLM-based triage orchestrator, A2A protocol | Native Google Cloud integration; AST-aware code tools roadmap |
| **GitHub Copilot CLI** | GitHub-integrated, multi-model | GitHub ecosystem users | Agent Client Protocol (ACP), multiplexed sessions | Tightest GitHub integration; first-run sandbox splash |
| **Kimi Code CLI** | Moonshot/K3 model ecosystem | Chinese-market developers | MCP tool integration, web CLI | Newest entrant; severe Windows locale gaps |
| **OpenCode** | Local-first, provider-agnostic | Self-hosters, LM Studio/Ollama users | TUI-based, OpenAI-compatible providers | Strongest local model auto-discovery; V2 TUI theme system |
| **Pi** | Self-hosted, extensible, multi-model | Power users, system integrators | Provider plugin model, constrained sampling | Best provider diversity (llama.cpp, Bedrock, OpenRouter, Copilot Enterprise) |
| **Qwen Code** | QwenLM integration, memory/telemetry | Qwen ecosystem + general dev | Memory systems, telemetry daemon, git guards | Strongest security hardening; memory integration |
| **CodeWhale** | Skill-pack-based workflow orchestration | Model-agnostic power users | Bundled skill pack (11 skills), unified `/skills` manager | Most innovative skill model; highest PR velocity |

---

## 5. Community Momentum & Maturity

### Most Active Communities (by issue engagement + PR throughput):
1. **Claude Code** – Highest comment density on critical bugs (#80002: 52 comments); sustained long-term engagement on permissions (#5140, 34 👍, open since Aug 2025)
2. **OpenAI Codex** – Strong issue upvoting culture (#20214: 71 👍); rapid alpha cadence signals active development
3. **CodeWhale (DeepSeek-TUI)** – Phenomenal PR velocity (15+ merged/day); coordinated release sprint for v0.9.1
4. **Pi** – Niche but loyal self-hosted community; high-quality feature PRs (constrained sampling, Bedrock integration)

### Rapidly Iterating:
- **OpenAI Codex** – 4 Rust alpha releases in 24h
- **Gemini CLI** – 3 releases in 24h (preview + stable + nightly)
- **CodeWhale** – 15+ PRs merged in 24h, converging on major release
- **GitHub Copilot CLI** – 3 patch releases in 24h

### Slower / Catch-Up Phase:
- **Kimi Code** – No releases, 3 issues, 2 PRs; gaps in Windows and MCP support suggest early-stage maturity
- **OpenCode** – No releases; TUI theme refactor PRs indicate infrastructure focus over new features

### Maturity Observations:
- **Claude Code** and **OpenAI Codex** have the most "battle-hardened" user bases reporting nuanced reliability bugs (session corruption, fork leaks, compaction failures)
- **CodeWhale** and **Pi** are showing the most architectural innovation (skill packs, constrained sampling, provider extensibility)
- **Copilot CLI** shows regression fragility – the infinite render loop bug (#4222) was previously fixed and returned

---

## 6. Trend Signals

### For Developers Building or Choosing AI CLI Tools:

**1. MCP is the new universal coupling pain point**
- Every major tool except CodeWhale reports MCP dispatch failures, schema compatibility issues, or OAuth blocking
- **Signal:** MCP integration must be hardened with schema validation, fallback transports, and clear error reporting

**2. Windows remains the neglected platform**
- 5 of 9 tools have Windows-specific critical bugs (freezes, WMI spikes, PATH corruption, encoding crashes, crash-on-exit)
- **Signal:** Windows users are underserved; a tool that nails Windows reliability gains competitive advantage

**3. Subagent orchestration is the next maturity frontier**
- False success reports, lifecycle leaks, missing trajectory visibility, and debugging gaps appear across Claude Code, Gemini CLI, Copilot CLI, OpenCode
- **Signal:** Users expect operational transparency into multi-agent workflows; subagent instrumentation is table stakes

**4. Context management is becoming a crisis**
- Claude Code auto-compaction failures, Codex RTK filtering requests, Copilot CLI 5MB CAPI limits, CodeWhale "context diet" epics
- **Signal:** Tools must implement proactive, configurable context compression; users are hitting API limits in daily workflows

**5. Safety systems are eroding trust**
- Claude Code Fable 5 false contradictions (#80348, #80351), Codex security false positives (#28015), Copilot permission over-blocking (#4221), CodeWhale broken security model (#4684)
- **Signal:** Safety classifiers need per-use-case configurability; aggressive safety undermines perceived reliability

**6. Provider agnosticism is accelerating**
- Pi and OpenCode lead with multi-provider support; CodeWhale adds China-specific providers; Copilot CLI adds Gemini 3.6 Flash; Qwen Code adds Bedrock Mantle
- **Signal:** Lock-in is increasingly unacceptable; tools that support arbitrary OpenAI-compatible endpoints win self-hosters

**7. Skill/workflow packaging is the new battleground**
- CodeWhale's bundled skill pack (11 skills) and unified `/skills` manager represent a new product category
- Claude Code's slash commands and Gemini CLI's triage orchestrator move in similar directions
- **Signal:** The next competitive differentiator is *curated workflow experiences*, not just raw API access

---

*This report is generated from community digests dated 2026-07-23. Data reflects publicly reported issues, PRs, and releases within the last 24 hours.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** github.com/anthropics/skills | **Date:** 2026-07-23

---

## 1. Top Skills Ranking

The following pull requests represent the most-discussed Skill proposals by community engagement. All remain **open** at time of analysis.

### #1298 — fix(skill-creator): `run_eval.py` always reports 0% recall
**Author:** MartinCajiao | [View PR](https://github.com/anthropics/skills/pull/1298)

**Functionality:** Fixes the skill-creator evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) which produces false `recall=0%` results for every skill description. The fix installs the eval artifact as a real skill, repairs Windows stream reading, corrects trigger detection logic, and fixes parallel worker handling.

**Discussion highlights:** This PR directly addresses long‑standing Issue #556 and Issue #1169, both of which had 12+ independent reproductions. The problem renders the entire description-optimization loop useless—skill authors were optimizing against noise. Community frustration peaked as multiple contributors filed separate fixes (see #1099, #1050, #1323).

**Status:** Open

---

### #514 — Add `document-typography` skill
**Author:** PGTBoos | [View PR](https://github.com/anthropics/skills/pull/514)

**Functionality:** Implements typographic quality control for AI-generated documents—fixing orphan word wrap (1–6 words on final line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. These issues affect every document Claude generates.

**Discussion highlights:** Highly practical skill targeting a universal pain point. Discussion centered on whether typography rules should be parametric or hard‑coded, and whether the skill should integrate with the existing `pdf` and `docx` skills.

**Status:** Open

---

### #486 — Add ODT skill (OpenDocument text creation and conversion)
**Author:** GitHubNewbie0 | [View PR](https://github.com/anthropics/skills/pull/486)

**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", or requests for open‑source format documents. Covers template filling and conversion to HTML.

**Discussion highlights:** Strong demand for LibreOffice/OpenOffice ecosystem support. Reviewers raised questions about binary vs. XML ODF handling and template variable substitution performance.

**Status:** Open

---

### #210 — Improve `frontend-design` skill clarity and actionability
**Author:** justinwetch | [View PR](https://github.com/anthropics/skills/pull/210)

**Functionality:** Revises the existing frontend-design skill so every instruction is actionable within a single conversation. Improves specificity, coherence, and behavioral steering without overwhelming Claude.

**Discussion highlights:** Community debate about how prescriptive design skills should be vs. how much creative freedom to preserve. Several reviewers requested sample output screenshots.

**Status:** Open

---

### #83 — Add `skill-quality-analyzer` and `skill-security-analyzer` to marketplace
**Author:** eovidiu | [View PR](https://github.com/anthropics/skills/pull/83)

**Functionality:** Adds two meta‑skills for auditing other Skills. The quality analyzer evaluates structure, documentation, examples, and resources across five dimensions. The security analyzer scans for credential leakage, path manipulation, command injection, and code execution risk.

**Discussion highlights:** Landmark proposal for Skill‑level governance. Discussion flagged the tension between static analysis limits and the need for runtime security checks. Maintainers signaled interest but requested separate PRs for each analyzer.

**Status:** Open

---

### #525 — Add `pyxel` skill for retro game development
**Author:** kitao (Pyxel creator) | [View PR](https://github.com/anthropics/skills/pull/525)

**Functionality:** Skill for [pyxel-mcp](https://github.com/kitao/pyxel-mcp), an MCP server for the [Pyxel](https://github.com/kitao/pyxel) retro game engine. Covers write‑run‑capture‑iterate workflow for pixel‑art/8‑bit games in Python.

**Discussion highlights:** Interesting as a first‑party MCP‑enabled skill bridging MCP servers and the Skills ecosystem. Discussion examined how MCP tools and Skills should coordinate. Author is the Pyxel maintainer, lending authority.

**Status:** Open (updated 2026‑07‑15)

---

### #509 — docs: add `CONTRIBUTING.md`
**Author:** narenkatakam | [View PR](https://github.com/anthropics/skills/pull/509)

**Functionality:** Adds a community health file covering Skill submission guidelines, review process, and quality expectations. Addresses a long‑standing gap (Issue #452) that left the repo at 25% on GitHub's community health metrics.

**Discussion highlights:** Broad consensus on necessity. Debate focused on whether to require automated validation (see PRs #361, #539) before submission, and whether the CONTRIBUTING.md should be enforced via CI.

**Status:** Open

---

### #1367 — feat(skills): add `self-audit` — mechanical verification + reasoning quality gate
**Author:** YuhaoLin2005 | [View PR](https://github.com/anthropics/skills/pull/1367)

**Functionality:** A universal skill that audits AI output before delivery: mechanical file verification (all claimed outputs exist) followed by four‑dimension reasoning audit in damage‑severity priority order. Works with any project, stack, or model.

**Discussion highlights:** The most recent high‑engagement PR (opened 2026‑06‑28). Discussion centered on whether this duplicates existing verification patterns or genuinely fills a gap for non‑code deliverables. The author also filed a related proposal Issue #1385 for a three‑gate pipeline.

**Status:** Open

---

## 2. Community Demand Trends

Analysis of the 15 most‑commented Issues reveals four concentrated demand themes:

### 🔧 Skill‑Creator Tooling Reliability (Dominant)
Three of the top five Issues (#556, #202, #1169) are **bug reports against the skill‑creation pipeline itself**. The `run_eval.py` 0% recall bug (#556 — 12 comments, 7 👍) is the single highest‑impact issue. Community members cannot effectively iterate on skill descriptions because the evaluation loop reports noise. Multiple independent contributors submitted fixes (#1099, #1050, #1323, #1298), indicating a coordinated community response. **This is the #1 blocker for the entire Skills ecosystem.**

### 🔒 Security & Trust Architecture
Issue #492 (43 comments, 2 👍) exposes a fundamental trust‑boundary vulnerability: community skills distributed under the `anthropic/` namespace can impersonate official tools. Discussion reveals fear of social‑engineering attacks where users grant elevated permissions to malicious skills. This is the most‑commented issue by a wide margin, signaling governance anxiety as the marketplace grows.

### 🏢 Enterprise & Organizational Features
Issue #228 (14 comments, 7 👍 — highest 👍 count) demands org‑wide skill sharing without manual file transfer. Enterprise users cannot distribute skills efficiently across teams. Issue #1175 raises SharePoint Online integration security and context‑window concerns.

### 🧪 New Skill Domain Proposals
Several Issues propose new skill categories:
- **Agent governance** (#412) — safety patterns for AI agent systems (6 comments)
- **Compact memory** (#1329) — symbolic notation for preserving agent context across long sessions (9 comments)
- **Reasoning quality gates** (#1385) — pre‑task calibration, adversarial review, delivery verification (3 comments)
- **MCP exposure** (#16) — exposing Skills as MCP tools for broader interoperability (4 comments)

### 🔧 Platform Compatibility
Issues #1061 (Windows subprocess/encoding failures) and #29 (AWS Bedrock usage) highlight that the Skills ecosystem remains **Unix‑first** and **Claude‑CLI‑first**, locking out significant user segments.

---

## 3. High‑Potential Pending Skills

These PRs have active discussion and appear close to landing:

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` (retro game dev) | Author is the Pyxel maintainer; MCP integration bridges two ecosystems; no blocking objections |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` (color naming, spaces, accessibility) | Fully self‑contained, authoritative content (ISCC‑NBS, Munsell, OKLCH, WCAG); no design controversies |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` (verification + reasoning gate) | Recent high activity; author is responsive; addresses a gap no existing skill covers |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` (full‑stack testing guidance) | Comprehensive coverage (unit, React, e2e); strong upvotes; complements existing code‑generation skills |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Universal applicability; clear, narrow scope; low integration risk with existing document skills |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is fixing the skill‑authoring toolchain itself**—the `run_eval.py` 0% recall bug has generated at least five independent fix PRs (1298, 1099, 1050, 1323, 362) and two duplicate Issues (556, 1169), demonstrating that the ecosystem cannot grow sustainably until skill creators can trust their evaluation metrics. Security governance (#492) and org‑level distribution (#228) follow as the next urgent priorities.

---

# Claude Code Community Digest – 2026-07-23

## Today’s Highlights
Release **v2.1.218** moves `/code-review` to a background subagent, preventing review work from cluttering the conversation and preserving stacked slash commands. The community is actively reporting a critical cross-platform bug where filesystem‑class MCP tool calls are silently dropped on both macOS (#80002, #79992) and Windows (#80189), with over 50 comments and dozens of upvotes on the macOS issue alone. A long‑standing permissions bug (#5140) also sees renewed attention, highlighting continued friction with project‑level settings.

## Releases
**v2.1.218** released in the last 24 hours.  
- `/code-review` now runs as a **background subagent** – review output no longer fills your conversation, and stacked slash commands remain the review target.  
- Added **screen‑reader announcements** for deleted text on word/line deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).  

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

## Hot Issues
1. **[#80002 – macOS: Claude Desktop never dispatches tools/call to Filesystem extension](https://github.com/anthropics/claude-code/issues/80002)**  
   *52 comments, 24 👍* – The most active issue today. Tools are listed successfully but `tools/call` never reaches the MCP server. Users confirm it persists across rollbacks and reinstalls.

2. **[#5140 – User permissions from settings.json not applied at project level](https://github.com/anthropics/claude-code/issues/5140)**  
   *24 comments, 34 👍* – Open since August 2025. User‑level permissions in `~/.claude/settings.json` are ignored when a project also has settings. High community demand for a fix.

3. **[#62272 – Chat JSONLs deleted despite high cleanupPeriodDays](https://github.com/anthropics/claude-code/issues/62272)**  
   *19 comments, 3 👍* – Chat history is deleted on updates/restarts regardless of configuration. A recovery script for Time Machine users is shared.

4. **[#61682 – GitHub connector shows “Connected” but exposes no tools in Cowork (Windows)](https://github.com/anthropics/claude-code/issues/61682)**  
   *17 comments, 19 👍* – The connector handshake succeeds but no tools appear. Windows 11, app v1.8555.2.0. Users can’t use GitHub integration in Cowork mode.

5. **[#79992 – macOS: filesystem MCP tool calls silently dropped](https://github.com/anthropics/claude-code/issues/79992)**  
   *16 comments, 4 👍* – Similar to #80002 but with a more detailed analysis. The approval gate passes, the renderer logs the approval, yet the local server never receives the call. Started overnight on July 21–22.

6. **[#75571 – VS Code Extension hangs 90+ seconds every 30–40 min (macOS ARM64)](https://github.com/anthropics/claude-code/issues/75571)**  
   *13 comments* – Native process idles in `kevent64` while the extension freezes. Affects productivity for heavy users.

7. **[#71726 – Feature: inject queued messages mid‑task between tool calls](https://github.com/anthropics/claude-code/issues/71726)**  
   *8 comments, 16 👍* – CLI/TUI allows mid‑task “steering”, but the Desktop app queues messages until the current turn ends. Highly requested parity feature.

8. **[#80348 – Fable 5: claimed “verified, copy changed” against user’s correct “no change” report](https://github.com/anthropics/claude-code/issues/80348)**  
   *2 comments* – Claude asserted a change was complete and verified when it was not, and told the user their observation was wrong. Raises trust concerns with Fable 5.

9. **[#80351 – Fable obstinately contradicts user input that conflicts with incorrect memories](https://github.com/anthropics/claude-code/issues/80351)**  
   *1 comment* – Another report of Fable 5 ignoring user corrections and insisting on incorrect information. Part of a growing pattern.

10. **[#78933 – Remote Control never connects: “Cannot read properties of undefined (reading ‘session_url’)”](https://github.com/anthropics/claude-code/issues/78933)**  
    *7 comments* – `/remote-control` fails immediately on Desktop. No workaround reported.

## Key PR Progress
1. **[#80353 – docs(gcp): stop on checksum mismatch](https://github.com/anthropics/claude-code/pull/80353)**  
   Makes the GCP gateway deployment script exit on checksum failure instead of continuing with a corrupted binary.

2. **[#80326 – Add account profiles plugin](https://github.com/anthropics/claude-code/pull/80326)**  
   Experimental plugin to manage isolated `CLAUDE_CONFIG_DIR` environments for personal, work, or client accounts on one machine. Commands for create, list, launch, switch, and safely remove profiles.

3. **[#80294 – docs: fix broken link via archive.org](https://github.com/anthropics/claude-code/pull/80294)**  
   Fixes one broken outbound link in README.md using Wayback Machine snapshots.

4. **[#80241 – fix: Console scrolling top of history when text added](https://github.com/anthropics/claude-code/pull/80241)**  
   Resolves a UI bug where the console scrolls to the top when Claude outputs new text, disrupting reading flow.

5. **[#80229 – docs: fix broken link via archive.org](https://github.com/anthropics/claude-code/pull/80229)**  
   Another broken link fix in the README.

6. **[#80196 – fix: Auto‑compact never triggers despite “100% context used”](https://github.com/anthropics/claude-code/pull/80196)**  
   Addresses a bug where auto‑compact (context compression) never fires even when the status line reports full context. Affects Max subscription users on 200K mode.

7. **[#80195 – fix: Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/pull/80195)**  
   Fixes a bug where Max subscribers see usage limits trigger immediately, making the tool unusable.

8. **[#80112 – Make devcontainer firewall init resilient to DNS resolution failures](https://github.com/anthropics/claude-code/pull/80112)**  
   Hardens `.devcontainer/init-firewall.sh` so a transient DNS failure doesn’t abort the entire firewall setup – critical for cloud dev environments.

9. **[#80008 – Add twilight plugin: spec‑first design/implement skills](https://github.com/anthropics/claude-code/pull/80008)**  
   A demo PR demonstrating a spec‑first design, implement, and focus‑stack strategy to unlock more reliable functionality in Claude. Noted as requiring significant modification before merging.

> Note: Only 9 PRs were updated in the last 24h; all are listed above.

## Feature Request Trends
- **Mid‑task steering for Desktop** – Users want to inject messages between tool calls (as in CLI/TUI) without waiting for the current turn to finish (#71726, many upvotes).  
- **Multi‑account & profile management** – The account‑profiles plugin (#80326) and related discussions show demand for seamless switching between personal, work, and client Claude accounts.  
- **Better model behavior under legitimate security/legal contexts** – Several closed issues (#67732, #67723, #67733, #67734) and new ones (#80348, #80351) highlight that Fable 5’s safety classifier flags defensive security discussions and then downgrades the model or refuses to correct errors. Users want configurable safety thresholds for these use cases.  
- **Sandbox mode indicator in statusline** – A closed enhancement (#56843) asking for a field showing whether Docker sandbox, local sandbox, or no sandbox is active remains requested.

## Developer Pain Points
- **Cross‑platform MCP tool dispatch failures** – Multiple issues (#80002, #79992, #80189, #61682) report that filesystem‑class MCP servers are discovered but `tools/call` is never dispatched on macOS and Windows. The bug is recent (starting July 21) and affects all transports and reinstallations.
- **Settings not applied at project level** – Issue #5140 (open for ~1 year) persists: user‑level permissions in `settings.json` are overridden or ignored when a project‑level settings file exists.
- **False‑positive safety moderation** – A cluster of reports (especially with Fable 5) where legitimate security, compliance, or legal work triggers a model downgrade or API error. Users feel unable to use Claude for defensive security.
- **Session management bugs** – Chat history deletion despite configuration (#62272), `/fork` leaking tasks into the parent session (#79722), and stop‑hooks re‑firing despite `stop_hook_active: true` (#78121) erode trust in session persistence and isolation.
- **VS Code Extension hangs** – Issue #75571 (macOS ARM64) causes 90+ second freezes every 30–40 minutes, with no workaround in sight.
- **Windows‑specific friction** – Image paste fails entire session (#69234), GitHub connector shows connected but no tools (#61682), and missing HCS services block Cowork (#78858).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## Today’s Highlights
A flurry of Windows-specific bug reports dominated the past 24 hours, with the top issue (#20214) documenting severe app freezes on Windows 11 despite ample system resources. Meanwhile, the team closed 10+ PRs targeting infrastructure reliability—thread pinning, analytics flushing, and input preservation during MCP interruptions. Four new Rust alpha releases (0.146.0-alpha.1–3 and 0.145.0-alpha.30) suggest active work on the CLI runtime.

## Releases
Four Rust alpha versions were tagged in the last 24 hours:
- **`rust-v0.146.0-alpha.3`** – 0.146.0-alpha.3
- **`rust-v0.146.0-alpha.2`** – 0.146.0-alpha.2
- **`rust-v0.146.0-alpha.1`** – 0.146.0-alpha.1
- **`rust-v0.145.0-alpha.30`** – 0.145.0-alpha.30

No release notes were published beyond version strings. The rapid alpha cadence indicates ongoing iterative fixes, likely addressing the Windows and sandbox issues reported this week.

## Hot Issues
1. **#20214 – Codex App freezes/stutters on Windows 11**  
   *72 comments, 71 👍*  
   The most upvoted bug this period. Users report the app becomes unresponsive during normal use, even on machines with 32 GB RAM and modern AMD CPUs. A root cause has not been confirmed.  
   [OpenAI/Codex Issue #20214](https://github.com/openai/codex/issues/20214)

2. **#16815 – WSL agent mode fails: “Error creating task Invalid request”**  
   *22 comments, 13 👍*  
   Path deserialization error when switching to WSL agent environment. Affects Business-tier users.  
   [OpenAI/Codex Issue #16815](https://github.com/openai/codex/issues/16815)

3. **#28015 – False positive cybersecurity safety check blocks local repo maintenance**  
   *22 comments, 3 👍*  
   Codex CLI incorrectly flags normal DevOps tasks (e.g., checking branches) as security risks, interrupting paid sessions.  
   [OpenAI/Codex Issue #28015](https://github.com/openai/codex/issues/28015)

4. **#34014 – Standalone Windows app triggers WMI Provider Host at 90–100% CPU**  
   *18 comments, 11 👍*  
   Opening a project causes WMI to spike, while the same project works fine in the VS Code extension.  
   [OpenAI/Codex Issue #34014](https://github.com/openai/codex/issues/34014)

5. **#10599 – Feature request: configure location of Git worktrees**  
   *16 comments, 66 👍*  
   macOS users want to define where Codex creates worktrees instead of relying on the default `.codex/` directory.  
   [OpenAI/Codex Issue #10599](https://github.com/openai/codex/issues/10599)

6. **#24103 – Official Meta Ads MCP fails OAuth with “invalid_client_metadata”**  
   *14 comments, 4 👍*  
   OAuth registration fails before the browser flow opens, blocking use of the Meta Ads MCP server.  
   [OpenAI/Codex Issue #24103](https://github.com/openai/codex/issues/24103)

7. **#23200 – Support headless remote Linux hosts for Codex mobile**  
   *13 comments, 42 👍*  
   Users want to connect Codex mobile directly to always-on Linux servers without requiring the desktop app.  
   [OpenAI/Codex Issue #23200](https://github.com/openai/codex/issues/23200)

8. **#19001 – Reduce token usage 60–90% via RTK filtering in CLI**  
   *13 comments, 15 👍*  
   Proposal to add Real-Time Knowledge (RTK) to CLI to trim verbose shell command output before sending to the model.  
   [OpenAI/Codex Issue #19001](https://github.com/openai/codex/issues/19001)

9. **#30712 – `apply_patch` fails on Windows due to split writable roots in sandbox**  
   *10 comments, 11 👍*  
   Sandboxed edits become unusable; the agent falls back to writing files via PowerShell.  
   [OpenAI/Codex Issue #30712](https://github.com/openai/codex/issues/30712)

10. **#34061 – Insane disk usage from subagents**  
    *7 comments, 1 👍*  
    Subagents (especially with `gpt-5.6`) consume gigabytes of disk space rapidly.  
    [OpenAI/Codex Issue #34061](https://github.com/openai/codex/issues/34061)

## Key PR Progress
1. **#34840 – Add persisted thread pinning to the app server**  
   *Closed* – Adds `isPinned` field and filter for thread list, enabling users to pin/unpin conversations.  
   [OpenAI/Codex PR #34840](https://github.com/openai/codex/pull/34840)

2. **#34839 – Preserve user input when MCP startup is interrupted**  
   *Closed* – Fixes input loss when tools are still loading during an interrupt.  
   [OpenAI/Codex PR #34839](https://github.com/openai/codex/pull/34839)

3. **#34835 – Track compaction time in turn profiles**  
   *Closed* – Adds `compaction_ms` metric to help diagnose performance bottlenecks in conversation compaction.  
   [OpenAI/Codex PR #34835](https://github.com/openai/codex/pull/34835)

4. **#34831 – Flush analytics before in-process app server shutdown**  
   *Closed* – Ensures completed-turn events are not lost during graceful shutdown.  
   [OpenAI/Codex PR #34831](https://github.com/openai/codex/pull/34831)

5. **#31320 – Measure MCP UI URIs missing trusted connector IDs**  
   *Closed* – New telemetry to detect tools that lack a trusted connector ID, improving debugging for MCP widget rendering.  
   [OpenAI/Codex PR #31320](https://github.com/openai/codex/pull/31320)

6. **#31393 – Advertise MCP App UI support to Codex Apps**  
   *Closed* – Enables downstream MCP servers to distinguish hosts that can render WebViews.  
   [OpenAI/Codex PR #31393](https://github.com/openai/codex/pull/31393)

7. **#34825 – Reduce cloning when building Responses requests**  
   *Closed* – Performance optimization by serializing tool definitions once into shared JSON.  
   [OpenAI/Codex PR #34825](https://github.com/openai/codex/pull/34825)

8. **#34819 – Enable git attribution across Codex entry points**  
   *Closed* – Extends authenticated workspace policy to commit attribution for CLI, MCP server, and app server.  
   [OpenAI/Codex PR #34819](https://github.com/openai/codex/pull/34819)

9. **#34814 – Consolidate thread startup around `StartThreadOptions`**  
   *Closed* – Single entry point for thread creation, simplifying internal APIs and paving the way for future enhancements.  
   [OpenAI/Codex PR #34814](https://github.com/openai/codex/pull/34814)

10. **#34808 – Centralize SQLite connection configuration**  
    *Closed* – Unifies database path and pool settings into a `SqliteConfig` struct, improving maintainability.  
    [OpenAI/Codex PR #34808](https://github.com/openai/codex/pull/34808)

## Feature Request Trends
- **Worktree & project management flexibility** – Users repeatedly ask to control where worktrees are created (#10599) and to persist side chats as child threads (#26227).
- **Headless remote workflows** – Demand grows for codex mobile to connect directly to Linux servers without a desktop middleman (#23200).
- **Token and cost optimization** – Proposals like RTK filtering (#19001) and reverting the 5-hour limit / adding ultra budgets (#34822) highlight the need for better control over usage and spending.
- **Subagent configuration** – Users want global model defaults for subagents in `config.toml` rather than per-agent files (#19482).

## Developer Pain Points
- **Windows performance & stability** is the top recurring theme – freezes (#20214), WMI CPU spikes (#34014), startup failures (#28392), and cold launch hangs with 300+ spawned processes (#34025) degrade the experience significantly.
- **WSL integration friction** – Path normalization errors (#16815, #34782), broken gh integration (#32323), and missing sidebar grouping (#32082) make Windows + WSL a particularly painful combination.
- **Sandbox & patch reliability** – The `apply_patch` tool fails on Windows (#30712), and safety checks block legitimate tasks (#28015), forcing workarounds that bypass sandbox protections.
- **Subagent resource leaks** – Indefinite accumulation of MCP helper processes (#17574) and massive disk usage (#34061) signal that subagent lifecycle management needs improvement.
- **Session/state corruption** – Threads vanish from sidebar (#30385), `chat_processes.json` becomes all-NUL bytes (#29593), and app updates break path assignments (#33774).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-23

## Today’s Highlights  
Three releases landed today: the **v0.53.0-preview.0** preview with a critical A2A fix and a new LLM-based triage orchestrator, **v0.52.0** stable with triage worker foundations, and a nightly that hardens A2A server workspace trust against RCE. On the issues front, long-standing bugs around subagent false “success” reports and the generalist agent hang continue to draw community attention, while two major PRs fix thought-part leakage and model fallback session ID rotation.

## Releases  

- **[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)** – Fixes `400 Bad Request` errors when A2A tool responses are cancelled and consecutive roles merge. Introduces an LLM-based triage orchestrator for caretaker automation.  
- **[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)** – Transient CI config files are now excluded from workspace context. Adds foundational modules for a caretaker triage worker.  
- **[v0.52.0-nightly.20260722](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260722.gc776c665b)** – Enforces workspace trust and task isolation in the A2A server to prevent RCE (fix courtesy of @luisfelipe-alt).

## Hot Issues  

1. **[#22323 – Subagent recovery after MAX_TURNS reported as success](https://github.com/google-gemini/gemini-cli/issues/22323)** – `codebase_investigator` reports `"success"` / `"GOAL"` even when it hit the turn limit mid-analysis. Top comment count (12); the community is frustrated by silent failures.  
2. **[#21409 – Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** – Simple operations (e.g., folder creation) cause indefinite hangs. 8 comments, 8 👍 – a high-impact P1 bug.  
3. **[#19873 – Leverage model’s bash affinity via OS sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** – Epic proposing zero‑dependency sandboxing to let Gemini 3 use native POSIX tools safely. 8 comments, P2 enhancement.  
4. **[#24353 – Robust component‑level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** – Epic to expand behavioral evals beyond the current 76 tests across six models. 7 comments, P1.  
5. **[#22745 – AST‑aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** – Investigates whether AST‑aware tools reduce turns and token waste. 7 comments, P2.  
6. **[#21968 – Gemini doesn’t use skills/sub‑agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** – Users report agents ignore custom skills unless explicitly told; 6 comments.  
7. **[#26522 – Auto Memory retries low‑signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** – Background extraction re‑surfaces the same low‑signal session endlessly. 5 comments.  
8. **[#25166 – Shell command gets stuck “Waiting input” after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** – Simple CLI commands hang post‑exit. 4 comments, 3 👍, P1.  
9. **[#22232 – Browser agent resilience: automatic session takeover](https://github.com/google-gemini/gemini-cli/issues/22232)** – Requests a retry/fallback mechanism when a browser profile is locked. 4 comments.  
10. **[#21983 – Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** – Browser agent crashes under Wayland compositors. 4 comments, P1.

## Key PR Progress  

1. **[#28509 – Filter thought parts from getHistoryTurns](https://github.com/google-gemini/gemini-cli/pull/28509)** – Prevents internal monologue leakage into history for Gemini 2.x+ models when context management is disabled. Open.  
2. **[#28469 – Rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)** – Fixes stateful API errors by rotating session ID when falling back to `gemini-2.5-flash`. Open.  
3. **[#28485 – Add gemini-3.5-flash to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)** – Resolves #28483 where users couldn’t find the Flash model. Open, priority P2.  
4. **[#28506 – Propagate AbortSignal in /compress](https://github.com/google-gemini/gemini-cli/pull/28506)** – Makes background compression cancellable via Escape key. Closed.  
5. **[#28446 – Use native fetch for OAuth token exchange](https://github.com/google-gemini/gemini-cli/pull/28446)** – Fixes “Premature close” error on headless VPS during login. Open, P1.  
6. **[#28499 – Restrict tools.core wildcard DENY to built-in tools](https://github.com/google-gemini/gemini-cli/pull/28499)** – Prevents policy rules from accidentally blocking MCP tools. Closed.  
7. **[#28505 – Fix cross‑reference links in docs](https://github.com/google-gemini/gemini-cli/pull/28505)** – Adds missing `.md` extensions to six links that were 404‑ing. Open.  
8. **[#28431 – Cloud Run job and Dockerfile for PR generator](https://github.com/google-gemini/gemini-cli/pull/28431)** – Infrastructure for the SSR code generation pipeline. Open.  
9. **[#28169 – Add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)** – New `eval:coverage` command cross‑references tool definitions with test inventory. Closed.  
10. **[#28024 – Bump @opentelemetry/core to 2.8.0](https://github.com/google-gemini/gemini-cli/pull/28024)** – Dependency update, still open.

## Feature Request Trends  
- **AST‑aware code tools** – Issues #22745 / #22746 call for AST‑based file reading, search, and codebase mapping to reduce token overhead and improve accuracy.  
- **Subagent & skill orchestration** – Several issues (e.g., #21968, #22598, #20195) ask for better automatic invocation of custom skills, trajectory visibility, and permission controls.  
- **Memory system hardening** – #26522, #26523, #26525 request deterministic redaction, quarantine of invalid patches, and guards against infinite retries in Auto Memory.  
- **Browser agent resilience** – #22232, #21983 highlight the need for session takeover, Wayland support, and configurable `maxTurns`.  
- **Evaluation infrastructure** – #24353, #28169 push for component‑level behavioral evals and coverage reporting.  
- **Security sandboxing** – #19873 proposes zero‑dependency OS sandboxing to safely unlock the model’s native bash affinity.  
- **Configuration awareness** – #21432 wants the agent to understand its own CLI flags/hotkeys; #22267 reports that `settings.json` overrides are ignored.

## Developer Pain Points  
- **False success reports** – Subagents (e.g., `codebase_investigator`) claim “success” even when they hit turn limits, hiding real interruptions (#22323).  
- **Agent hangs & infinite loops** – Generalist agent hangs on simple tasks (#21409); shell commands stay “Waiting input” after finishing (#25166); Auto Memory retries low‑signal sessions forever (#26522).  
- **Browser agent fragility** – Fails on Wayland (#21983), ignores configuration overrides (#22267), and lacks automatic session recovery (#22232).  
- **Permission & tool limit issues** – Subagents run despite being disabled (#22093); >128 tools cause 400 errors (#24246); policy wildcards accidentally block MCP tools (#28361 → #28499).  
- **Incomplete debugging context** – `/bug` reports omit subagent trajectories (#21763); shared chat doesn’t include subagent steps (#22598).  
- **CLI terminal glitches** – Corruption after external editors (#24935); flicker on terminal resize (#21924).  
- **Unwanted file creation** – Model writes random temp scripts across the workspace (#23571); destructive git commands used unnecessarily (#22672).  
- **Symlink ignorance** – Agents in `~/.gemini/agents/` aren’t recognised if they are symlinks (#20079).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today’s Highlights
Three patch releases (v1.0.74-1 through v1.0.74-3) landed today, adding Gemini 3.6 Flash support and a first-run sandbox opt-in splash, while fixing session dialog leakage and an interactive shell shortcut. The community raised 30+ issues in 24 hours, with recurring pain around zombie processes on Linux, a Windows crash on exit, and a regressed infinite render loop. A notable BYOK authentication regression (#4016) remains open, and two feature requests – configurable Auto‑mode model pool (#4218) and per‑subagent credit usage (#4207) – each gathered 6 👍 in a single day.

## Releases
| Version | Notes |
|---------|-------|
| **v1.0.74-3** | Fixes and changes |
| **v1.0.74-2** | Fixes and changes |
| **v1.0.74-1** | **Added:** First‑run splash to opt into default sandbox; support for `gemini-3.6-flash`.<br>**Improved:** Multiplexed session dialogs no longer leak into other sessions; `$` interactive shell shortcut updated. |

## Hot Issues (10 noteworthy)
1. **#443** – [OPEN] [area:tools] PDF Reading Support  
   *33 👍, 6 comments*  
   Users want native PDF parsing so they can work with academic papers and reports without manual `pdftotext` installation.  
   [Issue #443](https://github.com/github/copilot-cli/issues/443)

2. **#2282** – [CLOSED] [area:mcp] Unable to connect to MCP servers on Windows  
   *11 comments, 1 👍*  
   A persistent MCP connection failure that was resolved (closed today), but highlights Windows-specific handshake issues.  
   [Issue #2282](https://github.com/github/copilot-cli/issues/2282)

3. **#4016** – [OPEN] [area:auth,non-interactive,models] BYOK rejected in `--acp` mode  
   *4 comments, 4 👍*  
   Custom providers (`COPILOT_PROVIDER_*`) work in `-p` mode but fail with `-32000` when using the Agent Client Protocol. Regressed between v1.0.61 and v1.0.68.  
   [Issue #4016](https://github.com/github/copilot-cli/issues/4016)

4. **#4163** – [OPEN] [area:platform-linux,tools] Zombie processes accumulate under copilot PID  
   *3 comments, 2 👍*  
   Child processes are not reaped; zombies grow at ~2/minute. Users on long‑running sessions report dozens of defunct processes.  
   [Issue #4163](https://github.com/github/copilot-cli/issues/4163)

5. **#4183** – [OPEN] [area:context-memory,models] Auto‑compaction does not prevent CAPI 5 MB failure  
   *2 comments, 7 👍*  
   Even with compaction, accumulated tool history can exceed the 5 MB request body limit, making the session unrecoverable.  
   [Issue #4183](https://github.com/github/copilot-cli/issues/4183)

6. **#4217** – [OPEN] [triage] Windows crash on exit – libuv async handle  
   *1 comment, 1 👍*  
   `copilot.exe` consistently crashes at teardown with `FAST_FAIL_FATAL_APP_EXIT` due to a race in `uv_async_send`.  
   [Issue #4217](https://github.com/github/copilot-cli/issues/4217)

7. **#4222** – [OPEN] [triage] Regression: infinite React/Ink render loop (v1.0.72+)  
   *0 comments, 0 👍*  
   Same bug as #2802 (closed) returns: main pane freezes, no output rendered. Affects VS Code integrated terminal on Windows.  
   [Issue #4222](https://github.com/github/copilot-cli/issues/4222)

8. **#4218** – [OPEN] [triage] Allow users to configure the model pool used by Auto mode  
   *0 comments, 6 👍*  
   Auto mode selects from all available models; users want to restrict which models Auto can use to control cost and behavior.  
   [Issue #4218](https://github.com/github/copilot-cli/issues/4218)

9. **#4207** – [OPEN] [area:agents] Show per‑subagent AI credit usage breakdown  
   *0 comments, 6 👍*  
   Cumulative credit usage is shown, but not how credits are split among main agent, subagents, and background tasks.  
   [Issue #4207](https://github.com/github/copilot-cli/issues/4207)

10. **#4212** – [OPEN] [area:theming-accessibility,terminal-rendering] Dark‑on‑dark rendering inside tmux  
    *1 comment, 0 👍*  
    Prompt box and highlighted menu items become invisible when running inside tmux – likely a theme detection issue.  
    [Issue #4212](https://github.com/github/copilot-cli/issues/4212)

## Key PR Progress
Only one PR was updated in the last 24 hours:

- **#3163** – [OPEN] ViewSonic monitor  
  *Author: tijuks*  
  Appears to be a spam/off‑topic PR (references a monitor and a GitHub Action runner). Not relevant to the CLI codebase. No active feature or fix PRs this period.  
  [PR #3163](https://github.com/github/copilot-cli/pull/3163)

## Feature Request Trends
The most demanded directions from recent issues:

1. **Configurable model selection** (#4218, #1688) – Users want to control which models Auto mode picks and set compaction thresholds for high‑capacity models like Claude Opus 4.6.
2. **Native PDF reading** (#443) – A long‑standing request (6 months old) with 33 👍, still unresolved.
3. **Granular credit/cost accounting** (#4207, #4224) – Visibility into per‑subagent AI credit usage and missing OTel billing attributes.
4. **Shell integration for scrollback** (#3428) – Emit OSC 133 sequences so terminals can navigate to previous prompts and final answers.
5. **Custom agent chaining** (#4208) – Explicit inline invocation of specific agents within a prompt while preserving context.

## Developer Pain Points
Recurring frustrations observed across the top issues:

- **Regression fragility** – The infinite render loop (#4222) is a repeat of a bug closed months ago (#2802). Authentication regressions in `--acp` mode (#4016) also reappear.
- **Desktop/platform bugs** – Zombie processes on Linux (#4163), crash on Windows exit (#4217), `--resume` hang on Windows (#4165), and tmux rendering (#4212) suggest cross‑platform quality gaps.
- **Permission scanner over‑blocking** (#4221, #4220) – Read‑only `gh api` queries and `git log -L` arguments are misclassified as workspace mutations, forcing unnecessary approvals.
- **MCP reliability** – Stuck footer (#4206), connection failures (#2282), and deferred cost reporting (#4189) point to a fragile MCP integration.
- **Subagent and orchestration issues** – Server errors during subagent tasks (#4226), coordinator stuck with background subagent (#4225), and `task_complete` tool unavailability (#4161) indicate complexity in multi‑agent workflows.

---

*Digest generated from [github/github/copilot-cli](https://github.com/github/copilot-cli) data for 2026-07-23.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-23

## Today's Highlights
No new releases shipped today, but two important bug-fix PRs are moving toward merge, addressing a persistent shell timeout issue and a tool-counting logic error. Meanwhile, three newly surfaced issues highlight critical gaps in Windows locale support, MCP schema validation, and TPD rate-limit handling.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
(3 total, all listed)

1. **[#2318] Request reached organization TPD rate limit**  
   *Author: globalvideos272-lab* | *Created: 2026-05-18*  
   *Reaction: 👍 2*  
   A longstanding bug report exposing incorrect TPD (Tokens Per Day) calculation. The user hit a rate limit at `current: 1505241` while using `kimi 2.6` and `moonshot.ai` API. With only 1 comment and 2 reactions, community interest is moderate but the stability impact is high for teams relying on the API.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/2318

2. **[#2531] MCP tool names & schemas rejected by Moonshot API (HTTP 400)**  
   *Author: sbdsam* | *Created: 2026-07-22* | *Updated: 2026-07-22*  
   *Reaction: 👍 0*  
   A fresh issue from yesterday. When using `kimi-cli 1.49.0` on macOS with the K3 model, the API rejects MCP tool schemas containing `anyOf` without a `type` definition. The error message points to a non‑standard JSON‑Schema flavor. This blocks any advanced MCP tool integration.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/2531

3. **[#2532] Startup crash on Windows with redirected stdout: UnicodeEncodeError (gbk)**  
   *Author: BFour666* | *Created: 2026-07-22* | *Updated: 2026-07-22*  
   *Reaction: 👍 0*  
   `kimi web` crashes immediately on Chinese‑locale Windows when stdout is piped or captured. The banner uses `➜` (U+279C) which fails to encode with the system’s `gbk` codec. A show‑stopper for CI pipelines or any headless Windows usage.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/2532

## Key PR Progress
(2 total, both open)

1. **[#2524] fix(tools): count StrReplaceFile replacements against the running content**  
   *Author: Sreekant13* | *Created: 2026-07-20* | *Updated: 2026-07-22*  
   PR that fixes a subtle counting bug in `StrReplaceFile`: chained edits that produce the `old` string of a later edit were not counted because the count was computed against the original file content. The fix switches to tracking against the running (already‑edited) content. This is important for reliable autofix scripts.  
   🔗 https://github.com/MoonshotAI/kimi-cli/pull/2524

2. **[#2530] fix(shell): stop blocking until timeout when a detached child holds the pipes**  
   *Author: ayaangazali* | *Created: 2026-07-21* | *Updated: 2026-07-22*  
   Resolves #2468. In the foreground shell path, `_run_shell_command` waits for stderr/stdout EOF before checking the exit code. If a backgrounded daemon (`some_daemon & echo done`) holds the pipes open, the command blocks until a timeout. This fix stops waiting when the parent shell finishes, improving responsiveness.  
   🔗 https://github.com/MoonshotAI/kimi-cli/pull/2530

## Feature Request Trends
Based on the recent issues, the community is requesting:
- **Improved error handling for Moonshot API rate limits** – Users need clearer feedback and optional retry logic when TPD limits are reached (issue #2318).
- **Client-side MCP schema sanitization** – The API is picky about JSON‑Schema structures; users want automatic conversion or validation before sending (#2531).
- **Windows locale‑aware encoding fallback** – A need for graceful degradation when stdout encoding cannot represent Unicode characters, especially on Chinese‑locale systems (#2532).

## Developer Pain Points
Two recurring frustrations stand out:
1. **Platform‑specific encoding bugs** – The `gbk` crash on Windows shows that CLI tools still struggle with non‑UTF‑8 locales. This is a top pain point for Windows users, especially those in Asia.
2. **API compatibility surprises** – The Moonshot API deviates from standard JSON‑Schema (e.g., `anyOf` + `type` constraints). Developers integrating MCP tools are caught off guard by undocumented schema rules, wasting debugging cycles.

---

*Generated automatically from GitHub data for MoonshotAI/kimi-cli on 2026-07-23.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-23

## Today's Highlights
A critical outage is affecting **OpenCode Go** subscription users, with multiple reports of a `401 Request blocked by upstream provider` error on chat/completions endpoints. Meanwhile, a long-standing feature request for **auto-discovering models from OpenAI-compatible providers** (#6231) has gained strong community support (185 👍). Several automated cleanup PRs from June are being merged, and the TUI theme system is receiving a major refactor.

## Releases
No new versions were published in the last 24 hours. The only release note is a verification recording for PR #38252.

## Hot Issues (10 most noteworthy)

1. **#6231 – Auto-discover models from OpenAI-compatible provider endpoints**  
   Users want seamless model listing from local providers (LM Studio, Ollama, etc.) instead of manual configuration. 185 👍, 28 comments – the most-upvoted open issue.  
   [Issue #6231](https://github.com/anomalyco/opencode/issues/6231)

2. **#38257 – OpenCode Go returns 401 on chat/completions**  
   Starting 2026-07-22, Go subscription models fail with `Request blocked by upstream provider`, while `/v1/models` works. 25 comments, 8 👍.  
   [Issue #38257](https://github.com/anomalyco/opencode/issues/38257)

3. **#38218 – All Go subscription models blocked**  
   Similar report – every model under OpenCode Go throws the same 401 error. 21 comments, 5 👍.  
   [Issue #38218](https://github.com/anomalyco/opencode/issues/38218)

4. **#19466 – CPU spike during API rate-limit waits**  
   OpenCode consumes ~50% of a single core while simply retrying after a quota error. 15 comments, 11 👍.  
   [Issue #19466](https://github.com/anomalyco/opencode/issues/19466)

5. **#38195 – 401 AuthError on Go subscription models**  
   Free models work, but paid models fail. Reproducible across Desktop and Hermes on multiple machines. 15 comments, 15 👍.  
   [Issue #38195](https://github.com/anomalyco/opencode/issues/38195)

6. **#37970 – Plan/Build mode missing in latest version**  
   The mode toggle for planning vs. building is sometimes absent or inconsistent. 10 comments.  
   [Issue #37970](https://github.com/anomalyco/opencode/issues/37970)

7. **#26459 – Clipboard copy fails in web-based VSCode terminals**  
   `Copied to clipboard` notification appears but nothing is copied in code-server, Codespaces, etc. 7 comments.  
   [Issue #26459](https://github.com/anomalyco/opencode/issues/26459)

8. **#22260 – Read tool should support audio/video attachments**  
   Agents cannot inspect local media files because binary files are rejected. 7 comments, 7 👍.  
   [Issue #22260](https://github.com/anomalyco/opencode/issues/22260)

9. **#18011 – LM Studio shows only 3/9 models**  
   Auto-discovery from LM Studio is incomplete – misses models available via `/v1/models`. 6 comments, 4 👍.  
   [Issue #18011](https://github.com/anomalyco/opencode/issues/18011)

10. **#26220 – Infinite loop after tool calls complete**  
    OpenCode enters an unresponsive state after finishing tool calls. Affects Big Pickle version. 6 comments, 3 👍.  
    [Issue #26220](https://github.com/anomalyco/opencode/issues/26220)

## Key PR Progress (10 important pull requests)

1. **#38403 – Fix navigation tooltip delay**  
   Standardizes the tooltip delay for back/forward buttons to 400ms.  
   [PR #38403](https://github.com/anomalyco/opencode/pull/38403)

2. **#37226 – Per-agent subagent_depth override**  
   Adds optional `subagent_depth` field to agent config, overriding the global value.  
   [PR #37226](https://github.com/anomalyco/opencode/pull/37226)

3. **#38401 – Load dynamic models for `/api/generate`**  
   Allows Gemini and other dynamically loaded models to work through the stateless generate endpoint.  
   [PR #38401](https://github.com/anomalyco/opencode/pull/38401)

4. **#33403 – Forward child session events to NDJSON stream**  
   `opencode run --format json` now includes events from subagents spawned by the `task` tool.  
   [PR #33403](https://github.com/anomalyco/opencode/pull/33403)

5. **#38396 – Add V2 TUI theme reference docs**  
   Generates the theme guide from the authoritative Effect schema and adds CI to keep docs fresh.  
   [PR #38396](https://github.com/anomalyco/opencode/pull/38396)

6. **#33453 – Default custom models to text+image input**  
   New custom models default to both text and image input with text output, preserving legacy attachment support.  
   [PR #33453](https://github.com/anomalyco/opencode/pull/33453)

7. **#33450 – Global session picker toggle in TUI**  
   Adds an explicit global mode to the session picker, letting users discover/resume sessions from other projects.  
   [PR #33450](https://github.com/anomalyco/opencode/pull/33450)

8. **#38397 – Generate TUI syntax from V2 theme tokens**  
   Refactors the full TUI syntax styling to use resolved V2 theme tokens, while keeping mini-TUI compatibility.  
   [PR #38397](https://github.com/anomalyco/opencode/pull/38397)

9. **#33444 – Restore session summary from per-turn diffs**  
   Fixes a regression where `session.summary` was zeroed out, restoring accurate file/additions/deletion counts.  
   [PR #33444](https://github.com/anomalyco/opencode/pull/33444)

10. **#19038 – In-app browser for desktop app**  
    Allows opening web content inside the OpenCode desktop app without leaving the interface.  
    [PR #19038](https://github.com/anomalyco/opencode/pull/19038)

## Feature Request Trends
- **Local provider integration** – Users repeatedly request automatic model discovery from OpenAI-compatible servers (LM Studio, Ollama) and better handling of local model lists (see #6231, #18011).
- **Media support in read tool** – Extending the read tool to pass audio/video files as model-native attachments (#22260).
- **Tool execution feedback** – Showing timestamps and durations for tool calls (#22144), plus on-off toggle for token usage diagnostics (PR #38398).
- **UI/UX polish** – Quick-jump sidebar for user prompts (#32165), clearer tab indicators (#38341), and a persistent Plan/Build mode toggle (#37970).
- **Terminal and CLI improvements** – LaTeX rendering in CLI (#34407), hidden PowerShell window support (#38402), and clipboard fix for web VSCode (#26459).

## Developer Pain Points
1. **OpenCode Go subscription outage** – The 401 error on paid models is the top recurring frustration (5+ issues in 24h), affecting users across languages and configurations. No immediate fix or official acknowledgment is visible.
2. **Resource waste during idle periods** – High CPU usage while waiting for rate-limit retries (#19466) and orphan sub-sessions not cleaned up after parent aborts (#37314).
3. **Configuration drift** – Global tool globs fail to exclude MCP tools (#37675), project edit dialogs silently lose changes (#32691), and agent model selection resets on new session (#38333).
4. **Stability regressions** – Infinite loops after tool calls (#26220), clipboard failure in browser-based editors (#26459), and binary file corruption in subagent tasks (#38356).
5. **Local provider quirks** – Incomplete model discovery from LM Studio (#18011) and manual configuration burden (#6231) create friction for local model users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-23

## Today’s Highlights
A major regression in `httpIdleTimeoutMs` for self-hosted providers (v0.80.6) was confirmed and fixed, while a new bug prevents Copilot Enterprise users from compacting context. On the infrastructure side, the team landed a fix for OpenRouter OAuth support and made provider retries abortable, addressing a long-standing safety concern. Several performance and usability improvements landed, including faster external editor launches and a new `constrainSampling` feature for tools.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
*10 noteworthy issues with community activity and impact.*

1. **[#6476 – Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider](https://github.com/earendil-works/pi/issues/6476)**  
   *12 comments, closed*  
   Requests to self-hosted models via vLLM began timing out after a few minutes despite a large `httpIdleTimeoutMs` value. Worked in v0.80.3, broken in v0.80.6. High severity for self-hosters.

2. **[#6686 – Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)**  
   *10 comments, closed*  
   A persistent issue where the session loses GitHub OAuth authentication. Affects users across multiple devices. Linked to a previous report.

3. **[#6768 – Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)**  
   *8 comments, 8 👍, open*  
   Context compaction fails for Copilot Enterprise users with `421 Misdirected Request` (OpenAI) or similar Anthropic errors. Blocks core workflow for paid subscribers.

4. **[#6210 – /scoped-models cannot select model IDs containing brackets](https://github.com/earendil-works/pi/issues/6210)**  
   *8 comments, open, inprogress*  
   Custom model IDs with brackets (e.g., `custom/bracketed-model[1m]`) are rejected by the selector due to pattern matching. Workaround pending.

5. **[#6774 – Ctrl+G external editor is slow to launch when os.tmpdir() is crowded](https://github.com/earendil-works/pi/issues/6774)**  
   *7 comments, closed*  
   Writing temp files directly to the system tmpdir causes slowdowns on crowded systems. Proposed fix: use a private `mkdtemp` subdirectory. Already addressed by PR #6903.

6. **[#6911 – OpenAI SDK retries sleep full Retry-After (days) and Escape cannot abort](https://github.com/earendil-works/pi/issues/6911)**  
   *5 comments, closed*  
   When `maxRetries > 0`, the SDK sleeps the entire `Retry-After` duration (possibly days) and ignores `AbortSignal`. Fixed in PR #6980.

7. **[#6940 – OpenRouter cache breakpoint stops before tool results](https://github.com/earendil-works/pi/issues/6940)**  
   *4 comments, closed*  
   For Anthropic models through OpenRouter, cache read tokens stall during consecutive tool-only turns, causing unnecessary cache misses. Still under investigation.

8. **[#6922 – Default model cannot be a llama.cpp model: startup shows "No models available"](https://github.com/earendil-works/pi/issues/6922)**  
   *2 comments, 7 👍, open*  
   Setting `defaultProvider` to `llama.cpp` and `defaultModel` to a model in the ini file results in a warning and non-interactive exit. A significant blocker for local‑first users.

9. **[#6989 – [P0] File mutation preconditions run before the per-file queue](https://github.com/earendil-works/pi/issues/6989)**  
   *1 comment, closed*  
   `tool_call` / `beforeToolCall` preconditions execute for all sibling calls before any allowed call begins, breaking the intended serialisation of file edits.

10. **[#6978 – Interactive TUI: concurrent extension dialogs hang (orphaned Promise)](https://github.com/earendil-works/pi/issues/6978)**  
    *1 comment, closed*  
    When two extension dialogs open at the same time (`confirm`/`select`/`input`), only the last one resolves; earlier Promises hang indefinitely.

## Key PR Progress
*10 important pull requests merged or opened in the last 24 hours.*

1. **[#6987 – fix(tui): align grapheme widths with terminal cells](https://github.com/earendil-works/pi/pull/6987)**  
   *Open*  
   Addresses the infamous “cell width mess” by improving grapheme-to-terminal-cell mapping. Critical for emoji and CJK character rendering.

2. **[#6341 – feat(ai): support constrained sampling](https://github.com/earendil-works/pi/pull/6341)**  
   *Open*  
   Adds opt‑in `constrainedSampling` config for tools, enabling JSON‑schema constrained generation. A major step toward reliable structured outputs.

3. **[#6984 – feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream](https://github.com/earendil-works/pi/pull/6984)**  
   *Closed*  
   Fixes a validation error for Claude models on Bedrock that require adaptive thinking but aren’t in the hardcoded list.

4. **[#6980 – fix(ai): make provider retries abortable](https://github.com/earendil-works/pi/pull/6980)**  
   *Open*  
   Replaces native SDK retries with a common helper that enforces `maxRetryDelayMS` and respects `AbortSignal`. Fixes #6911.

5. **[#6967 – feat(coding-agent): expose session metadata to bash tools](https://github.com/earendil-works/pi/pull/6967)**  
   *Closed*  
   Makes session ID, file, provider, model, and reasoning level available as environment variables for subprocesses.

6. **[#6976 – fix(coding-agent): preserve TTY in startup benchmark](https://github.com/earendil-works/pi/pull/6976)**  
   *Closed*  
   Resolves the TUI benchmark exiting before interactive mode by ensuring pseudoterminal allocation.

7. **[#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**  
   *Open*  
   New provider using Bedrock Mantle’s OpenAI‑compatible API. Supersedes an earlier PR and adds direct AWS integration.

8. **[#6971 – feat(coding-agent): emit bash_execution_update events](https://github.com/earendil-works/pi/pull/6971)**  
   *Open*  
   Emits real‑time events for parallel bash execution, enabling richer client‑side UI updates (e.g., in Emacs).

9. **[#6865 – feat: get_available_thinking_levels rpc](https://github.com/earendil-works/pi/pull/6865)**  
   *Closed*  
   New RPC command to query available thinking levels, making it easier for extensions to expose effort controls.

10. **[#6903 – fix(coding-agent): speed up external editor launch](https://github.com/earendil-works/pi/pull/6903)**  
    *Closed*  
    Moves temp file creation into a private `mkdtemp` subdirectory, avoiding slowdowns in crowded tmpdirs. Fixes #6774.

## Feature Request Trends
The community is pushing in three directions:

- **Dynamic thinking & model control** – Several requests ask for MRU model switching ([#6982]), cycling thinking effort before branch summaries ([#6974]), and per‑block thinking labels with callbacks ([#6988]).
- **Stronger extension integration** – New RPCs (`get_available_thinking_levels`, session metadata exposure) and the AgentHarness abstraction ([#6916]) point toward a more extensible plugin system.
- **Client ecosystem growth** – A VS Code extension submission ([#6985]) and bash event streaming ([#6971]) indicate demand for embedding Pi into other editors and workflows.

## Developer Pain Points
Recurring frustrations surfaced in today’s issues:

- **Authentication fragility** – GitHub auto‑logout ([#6686], [#6970]) and OAuth‑metered billing for Pro/Max users ([#6979]) erode trust in credential management.
- **Retry & timeout black holes** – The OpenAI SDK’s unbounded `Retry-After` sleep ([#6911]) and the `httpIdleTimeoutMs` regression ([#6476]) show that network hardening is still incomplete.
- **Provider edge cases** – Copilot Enterprise compaction ([#6768]), llama.cpp as default model ([#6922]), and Bedrock adaptive thinking detection ([#6986]) all fail in non‑standard configurations.
- **UI/UX regressions** – Concurrent dialog hangs ([#6978]), arrow keys broken on Windows nested ConPTY ([#6973]), and literal backtick rendering in code blocks ([#5566]) degrade the interactive experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

## Today's Highlights

Two preview releases landed, primarily hardening telemetry daemon initialization. The community is actively fixing a critical P1 regression (`enable_thinking: false` forced in side queries) that broke web_fetch and TokenPlan endpoints, and a main-branch CI red test is blocking all PRs. Several security patches—stripping daemon secrets from child processes and closing git destructive-command guard gaps—are under review.

## Releases

- **[v0.20.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-preview.0)** and **[v0.20.0-nightly.20260722.b98306b7e](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260722.b98306b7e)** — Both include a test improvement covering daemon metrics init ordering and metricReader asymmetry (PR [#7456](https://github.com/QwenLM/qwen-code/pull/7456)).
- **v0.0.0-benchmark-poc.20260722.1** — A non‑release benchmark validation prerelease for CI → ECS publication path.

## Hot Issues

| # | Title & Link | Why it matters | Community |
|---|--------------|----------------|-----------|
| 1 | **[#7284 – side-query forces `enable_thinking=false`, breaking TokenPlan endpoints](https://github.com/QwenLM/qwen-code/issues/7284)** (P1, closed) | Blocks any endpoint requiring thinking; affects web_fetch and classifiers. | 5 comments, resolved by #7534 |
| 2 | **[#7316 – OpenAI toolCall reaction breaks subAgent](https://github.com/QwenLM/qwen-code/issues/7316)** (P2, closed) | Sub‑agent unusable with OpenAI‑compatible models; empty strings for optional params. | 5 comments |
| 3 | **[#7537 – Core test suite is red on main](https://github.com/QwenLM/qwen-code/issues/7537)** (P1, open) | Fork dispatch test never sees `registry.complete`; blocks all PR CI. | 2 comments, fix in #7540 |
| 4 | **[#6601 – Shell subprocess inherits sensitive env vars](https://github.com/QwenLM/qwen-code/issues/6601)** (P1, closed) | Credential exposure via `QWEN_SERVER_TOKEN` etc. | 2 comments, fixed by #7256 |
| 5 | **[#7489 – VS Code file picker inserts `@filename` but image not attached](https://github.com/QwenLM/qwen-code/issues/7489)** (P2, open) | Vision input broken in VS Code Companion. | 3 comments |
| 6 | **[#7287 – Auto‑memory `MEMORY.md` not registered in `FileReadCache`](https://github.com/QwenLM/qwen-code/issues/7287)** (P2, open) | First `write_file` update always rejected; memory feature partially broken. | 3 comments |
| 7 | **[#7404 – Update check timeout too short when loading long sessions](https://github.com/QwenLM/qwen-code/issues/7404)** (P3, closed) | Startup always fails if session load exceeds brief timeout. | 4 comments |
| 8 | **[#6137 – Flickering in Qwen Code](https://github.com/QwenLM/qwen-code/issues/6137)** (P2, open) | Rendering glitch in xterm/tmux; unclear root cause. | 2 comments, welcome‑pr |
| 9 | **[#7500 – `serve --open` uses stale port after EADDRINUSE fallback](https://github.com/QwenLM/qwen-code/issues/7500)** (P2, open) | Launches wrong URL, confusing users. | 2 comments |
| 10 | **[#7515 – Failed to check for updates (registry error)](https://github.com/QwenLM/qwen-code/issues/7515)** (P3, open) | Version‑manager npm shims break update‑check path. | 2 comments, fix in #7545 |

## Key PR Progress

| # | Title & Link | What it does |
|---|--------------|--------------|
| 1 | **[#7540 – test(core): stub resident-agent methods in agent test registry](https://github.com/QwenLM/qwen-code/pull/7540)** | Fixes the red `main` CI by properly stubbing registry methods. |
| 2 | **[#7534 – fix(core): retry requests when providers require thinking](https://github.com/QwenLM/qwen-code/pull/7534)** | Automatically retries with `enable_thinking: true` on HTTP 400 – resolves #7284. |
| 3 | **[#7527 – fix(core): strip daemon secrets from hook and tool-discovery child env](https://github.com/QwenLM/qwen-code/pull/7527)** | Extends env sanitization to three more child‑process paths (follow‑up to #6601). |
| 4 | **[#7531 – fix(core): close force-flag and checkout gaps in AUTO destructive-git guard](https://github.com/QwenLM/qwen-code/pull/7531)** | Blocks `git clean` and `git checkout` variants that were previously missed. |
| 5 | **[#7493 – fix(vscode): use file picker image paths for vision input](https://github.com/QwenLM/qwen-code/pull/7493)** | Sends actual image reference instead of filename – addresses #7489. |
| 6 | **[#7545 – fix(cli): stop treating version-manager npm shims as npm-cli.js](https://github.com/QwenLM/qwen-code/pull/7545)** | Fixes update check for mise/version‑manager users (related to #7515). |
| 7 | **[#7471 – feat(web-shell): add git mode selector for new session creation](https://github.com/QwenLM/qwen-code/pull/7471)** | Lets users choose current branch, new branch, or detached HEAD when creating a session. |
| 8 | **[#7530 – refactor(core): tier prompt fragments by cache stability](https://github.com/QwenLM/qwen-code/pull/7530)** | Optimizes prompt rendering order for better caching; marks fragments by role. |
| 9 | **[#7542 – feat(cli): add version upgrade notices](https://github.com/QwenLM/qwen-code/pull/7542)** | Shows “What’s New” once per version on startup. |
| 10 | **[#7497 – feat(cli): support native video input in /learn](https://github.com/QwenLM/qwen-code/pull/7497)** | Enables local MP4/WebM/MOV files and HTTP video URLs in the `/learn` command. |

## Feature Request Trends

- **External Memory Integration** – [#7449](https://github.com/QwenLM/qwen-code/issues/7449) proposes an enterprise‑grade, provider‑neutral memory profile (documentation‑first, incremental compatibility).
- **Plan DAG & Sub‑agent Visualization** – [#7525](https://github.com/QwenLM/qwen-code/issues/7525) asks for linking Todo plan nodes to live sub‑agent executions in ordinary sessions.
- **Web Shell Workspace & Git Mode Controls** – [#6701](https://github.com/QwenLM/qwen-code/issues/6701) (start‑in context selector) and [#6700](https://github.com/QwenLM/qwen-code/issues/6700) (workspace switcher) are recurring requests, now partially addressed by [#7471](https://github.com/QwenLM/qwen-code/pull/7471).
- **Automatic Fallback for web_fetch** – [#7298](https://github.com/QwenLM

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-23

## Today's Highlights

The CodeWhale project (formerly DeepSeek-TUI) is barreling toward **v0.9.1**, with a coordinated blizzard of 22 closed issues and 15 merged PRs in a single day — all release-blocker fixes. The maintainers shipped a bundled default skill pack, finalized the `/skills` unified manager, and landed an extensive TUI chrome redesign that replaces generic Work panels with a resizable To-do + Sub-agent bar. Meanwhile, critical security gaps remain open: 17 Dependabot alerts (7 high, 10 moderate) are being patched in a late-breaking `chore(deps)` PR.

---

## Releases

**No new releases in the last 24 hours.** The project is converging on v0.9.1 from the `main` branch; the most recent tag remains v0.9.0. Expect a formal release imminently once the security gate (issue [#4713](https://github.com/Hmbown/CodeWhale/issues/4713)) clears.

---

## Hot Issues (10 Noteworthy)

1. **[#2870 — EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** (17 comments)
   The community's largest ongoing architectural initiative, tracking a multi-layer refactor of how commands are owned and routed. Reference PR [#2851](https://github.com/Hmbown/CodeWhale/issues/2851) serves as proof-of-concept. This EPIC is proceeding in small mergeable increments, which reduces risk but demands sustained contributor focus.

2. **[#4227 — Help JayBeest map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)** (12 comments)
   A meta-tool designed to help contributors set up a dev environment aligned with the fast-moving `main` branch (10+ PRs/day). This "onboarding skill" automates `cargo build`, pulls latest changes, and runs checks — a direct response to the project's overwhelming velocity for newcomers.

3. **[#2766 — UI refactor needed](https://github.com/Hmbown/CodeWhale/issues/2766)** (9 comments)
   Persistent complaint: output is hard to copy, and confirmation pop-ups obscure the main interface while showing mostly useless information. This UX pain point has been open since June and motivated much of the v0.9.1 chrome redesign.

4. **[#4691 — Ship the model-invoked default CodeWhale skill pack](https://github.com/Hmbown/CodeWhale/issues/4691)** (4 comments, CLOSED)
   The flagship v0.9.1 feature — a first-party skill pack comparable to Kimi Code, Devin CLI, or Claude Code. Bundles 11 skills (interview, plan, implement, debug, test, review, security-review, simplify, verify, research, free-form). Critical because it defines the product's primary user experience.

5. **[#4687 — Fix Kimi Code/Moonshot K3 model-ID cross-pairings](https://github.com/Hmbown/CodeWhale/issues/4687)** (4 comments, CLOSED)
   A release-blocking bug: CodeWhale treated different K3 routes as interchangeable, causing incorrect model IDs to be sent to API endpoints. This was found during dogfooding the v0.9.1 integration candidate and was fixed within hours in PR [#4694](https://github.com/Hmbown/CodeWhale/pull/4694).

6. **[#4085 — Cannot read/write files under ~/Library/CloudStorage/Dropbox/](https://github.com/Hmbown/CodeWhale/issues/4085)** (4 comments)
   A macOS-specific filesystem integration bug affecting Dropbox users. The tool works for local files but fails under the File Provider framework — and it's not a sandbox issue. This has been open for two weeks with no fix yet scheduled.

7. **[#4684 — danger-full-access does not disable tools-layer workspace boundary](https://github.com/Hmbown/CodeWhale/issues/4684)** (2 comments)
   An important security edge case: the `danger-full-access` sandbox mode only disables the OS-level sandbox but still enforces workspace boundary checks at the tools layer (`read_file`, `grep_files`). This breaks global skill access and represents a mismatch between the documented intent and actual behavior.

8. **[#4685 — CodeWhaleSetup.exe overwrites user PATH on Windows 10](https://github.com/Hmbown/CodeWhale/issues/4685)** (1 comment)
   A destructive installer bug — the Windows setup executable *replaces* the user's PATH environment variable instead of appending. This breaks all other tools and workflows on the system. Highly impactful for new Windows users onboarding.

9. **[#4683 — Wrong DeepSeek completions URL](https://github.com/Hmbown/CodeWhale/issues/4683)** (1 comment)
   A flaky network error where requests to `api.deepseek.com/v1/chat/completions` fail after long sessions. The error appears intermittently, suggesting a connection reuse problem or rate-limiting behavior rather than an incorrect URL per se.

10. **[#4713 — v0.9.1 security gate: deep scan and dependency alert disposition](https://github.com/Hmbown/CodeWhale/issues/4713)** (0 comments)
    The release gate blocking v0.9.1 from tagging. Reports 17 open Dependabot alerts: 7 high (affecting axios, braces) and 10 moderate. A blocking prerequisite for shipping the release.

---

## Key PR Progress (10 Important PRs)

1. **[PR #4714 — chore(deps): patch npm lockfiles for Dependabot alerts](https://github.com/Hmbown/CodeWhale/pull/4714)** — OPEN
   Applies `npm audit fix --package-lock-only` across all npm workspaces to resolve all 17 open alerts. Critical: this is the security gate fix that unblocks v0.9.1.

2. **[PR #4711 — fix(tui): focus v0.9.1 chrome on todos and agents](https://github.com/Hmbown/CodeWhale/pull/4711)** — MERGED
   The core TUI chrome redesign: replaces the generic Work surface with a resizable To-do + Sub-agent bar, adds draggable dividers, and makes composer permission/mode rails theme-native.

3. **[PR #4695 — feat(skills): default CodeWhale skill pack (bundled v5)](https://github.com/Hmbown/CodeWhale/pull/4695)** — MERGED
   Ships the bundled end-user skill pack with 11 skills. This is the product experience that distinguishes CodeWhale from a bare API client — comparable to Kimi Code's workflows or Claude Code's built-in commands.

4. **[PR #4696 — feat(tui): ship staged /uwu theme](https://github.com/Hmbown/CodeWhale/pull/4696)** — MERGED
   Adds a community-style "uwu" theme with aliases (`owo`, `kawaii`) and a soft-classic whale mark. Demonstrates the theme system's extensibility and the maintainers' willingness to ship playful content alongside serious features.

5. **[PR #4694 — fix(kimi): fail closed on K3 model-ID cross-pairings](https://github.com/Hmbown/CodeWhale/pull/4694)** — MERGED
   Resolves the critical release-blocker from issue [#4687](https://github.com/Hmbown/CodeWhale/issues/4687). Treats base URL + model ID as one route identity, preventing silent wrong-model-id sends.

6. **[PR #4693 — fix(tui): Work summary lifecycle, actionable title, and top-area hierarchy](https://github.com/Hmbown/CodeWhale/pull/4693)** — MERGED
   A coordinated three-fix PR addressing v0.9.1 Work-chrome blocker issues: transient summaries expire after 4 seconds, durable rows stay visible, and the top-area hierarchy is reorganized. These fixes made the UI usable during long agent sessions.

7. **[PR #4692 — fix: Ship the model-invoked default CodeWhale skill pack](https://github.com/Hmbown/CodeWhale/pull/4692)** — MERGED
   A companion to [#4695](https://github.com/Hmbown/CodeWhale/pull/4695), auto-generated by "Hermes Agent." Worth noting because it shows the project itself using AI-powered PR generation for routine tasks.

8. **[PR #4679 — feat(skills): unified /skills manager with audit and owned mutations](https://github.com/Hmbown/CodeWhale/pull/4679)** — MERGED
   Delivers the single `/skills` command as the unified skill manager across project, global, and compatible roots. Supports install, import, update, remove, trust, and audit — replacing the previous fragmented command family.

9. **[PR #4675 — Integrate CodeWhale v0.9.1 runtime and release surface](https://github.com/Hmbown/CodeWhale/pull/4675)** — MERGED
   The mother-of-all integration PR: brings together the runtime simplification, TUI color grammar (cool mode edges, warm permission colors), empty-Work fix, and public release surface. This was the v0.9.1 baseline that all subsequent fixes targeted.

10. **[PR #4686 — feat(minimax): add China / Token Plan provider routes](https://github.com/Hmbown/CodeWhale/pull/4686)** — OPEN
    Adds four new provider identifiers targeting `api.minimaxi.com` (the Chinese/Token Plan sibling of `api.minimax.io`). Supports both OpenAI Completions and Anthropic Messages protocols. Notably, the maintainers have not yet merged this — likely pending the v0.9.1 release gate.

---

## Feature Request Trends

1. **Context Diet & Prompt Optimization** — Multiple issues ([#4704](https://github.com/Hmbown/CodeWhale/issues/4704), [#4705](https://github.com/Hmbown/CodeWhale/issues/4705), [#4707](https://github.com/Hmbown/CodeWhale/issues/4707), [#4709](https://github.com/Hmbown/CodeWhale/issues/4709)) target reducing every model-facing byte. The goal is simpler, more portable behavior across model families, not just lower token count. This suggests users are hitting context limits on smaller/cheaper models.

2. **Unified Skill Manager** — The v0.9.1 work on `/skills` ([#4651](https://github.com/Hmbown/CodeWhale/issues/4651), PR [#4679](https://github.com/Hmbown/CodeWhale/pull/4679)) responds to a clear demand: users want one command to discover, inspect, install, update, remove, and trust skills — not a fragmented `/skill install|update|uninstall|trust` family.

3. **Sub-Agent Visibility and Lifecycle** — Issues [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) and [#4700](https://github.com/Hmbown/CodeWhale/issues/4700) push for rich sub-agent detail rows showing current activity, structured status, and separate To-do vs Activity vs Agents columns. Users clearly want operational transparency into the multi-agent workflows.

4. **UI/UX Polish for Transcripts** — [#4701](https://github.com/Hmbown/CodeWhale/issues/4701), [#4676](https://github.com/Hmbown/CodeWhale/issues/4676), and [#4699](https://github.com/Hmbown/CodeWhale/issues/4699) all target the transcript reading experience: better color hierarchy, unclipped reasoning previews, theme-native rails, and a deliberate visual rhythm. The community values a polished terminal aesthetic.

5. **Provider Extensibility** — PRs for TelecomJS ([#4370](https://github.com/Hmbown/CodeWhale/pull/4370)) and Minimax China ([#4686](https://github.com/Hmbown/CodeWhale/pull/4686)) show strong demand for adding custom/regional API providers. The community wants regional or specialized model access without waiting for upstream provider support.

---

## Developer Pain Points

1. **Windows Installer Destroys PATH** — Issue [#4685](https://github.com/Hmbown/CodeWhale/issues/4685) (CodeWhaleSetup.exe overwrites user PATH instead of appending) is a critical onboarding blocker for Windows developers. This destroys all other environment configurations during installation.

2. **Custom Provider Launch Failures** — Issue [#4682](https://github.com/Hmbown/CodeWhale/issues/4682) reports that setting a custom provider name causes the application to fail entirely on next launch. This makes provider experimentation risky and frustrating.

3. **Stale Model URLs Causing Flaky Errors** — Issue [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) describes an intermittent "error sending request for url" for DeepSeek completions. The error appears after long sessions, suggesting connection reuse or rate-limit issues that are difficult to debug.

4. **Cloud Storage Filesystem Incompatibility** — Issue [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) (Dropbox/File Provider failures on macOS) is open for two weeks without a fix. This affects real-world developer workflows that store projects in cloud-synced directories.

5. **Broken Security Model Documentation** — Issue [#4684](https://github.com/Hmbown/CodeWhale/issues/4684) reveals that `danger-full-access` mode claims to disable cross-boundary access but actually doesn't at the tools layer. This creates a dangerous gap between documented security posture and actual behavior.

6. **Desktop Notifications During Testing** — Issue [#4712](https://github.com/Hmbown/CodeWhale/issues/4712) notes that PTY acceptance tests emit macOS Notification Center alerts, interrupting local and CI test execution. A small but persistent annoyance for developers running test suites

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*