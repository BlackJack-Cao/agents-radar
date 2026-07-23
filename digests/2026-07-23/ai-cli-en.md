# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 04:44 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date**: 2026-07-23

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues to mature rapidly, with all seven major projects demonstrating active development cycles characterized by daily releases, community-driven bug reporting, and converging feature sets. **Platform stability**—particularly around authentication, sandbox execution, and multi-agent orchestration—remains the dominant pain point across the ecosystem, with every tool reporting regressions in at least one of these areas. A clear industry shift toward **enterprise-grade concerns** is visible: observability (per-subagent costing, audit trails), security (variable expansion bypasses, credential leakage), and provider diversity (BYOK, custom MCP integrations) are now first-class community demands rather than niche requests. The ecosystem is bifurcating between **feature-rich commercial tools** (Claude Code, Codex, Copilot CLI) with high issue velocity and **lean, focused alternatives** (Kimi Code, Pi, DeepSeek TUI) that emphasize simplicity and provider compatibility. Notably, **multi-agent workflows** have become table-stakes across all tools, but the quality of subagent orchestration—particularly around model selection, failure handling, and state persistence—varies widely and is the single biggest source of user frustration this week.

---

## 2. Activity Comparison

| Tool | Repository | Issues (Notable) | PRs (24h) | Release Status Today |
|---|---|---|---|---|
| **Claude Code** | anthropics/claude-code | 10 hot issues | 9 PRs | **v2.1.218** shipped |
| **OpenAI Codex** | openai/codex | 10 hot issues | 10 PRs | **4x alpha.1-.4** (rust branch) |
| **Gemini CLI** | google-gemini/gemini-cli | 10 hot issues | 10 PRs | **v0.52.0 stable** + v0.53.0-preview.0 |
| **Copilot CLI** | github/copilot-cli | 10 hot issues | 2 PRs (1 spam) | **3x patch v1.0.74-1/-2/-3** |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 2 new issues | 3 PRs (all open) | **No new release** (v0.29.0 latest) |
| **OpenCode** | anomalych/opencode | 10 hot issues | 10 PRs | **No official release** today |
| **Pi** | earendil-works/pi | 10 hot issues | 10 PRs | **No new release** (v0.80.6 latest) |
| **Qwen Code** | QwenLM/qwen-code | 10 hot issues | 10 PRs | **Only benchmark prerelease** (not product) |
| **DeepSeek TUI** | Hmbown/CodeWhale | 10 hot issues | 10 PRs | **No new release** (v0.9.1 RC) |

**Key observations**:
- **Claude Code** and **OpenAI Codex** lead in absolute issue volume and community engagement (35+ comments on single issues)
- **Copilot CLI** has anomalously low PR activity (2 PRs vs 10 for most peers), possibly indicating a release stabilization phase
- **Kimi Code** is the quietest project today (2 issues, 3 PRs, no release)—stable but little forward motion
- **DeepSeek TUI** is in a **release crunch** (v0.9.1 RC) with 10 significant PRs and a stop-ship bug
- **Qwen Code** shows strong **CI/CD pipeline investment** (autofix, retry logic, PR auto-update)

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating convergent industry demand:

### 3.1 Multi-Agent Orchestration Control
- **Model selection per sub-agent** — Kimi Code (#2533), Gemini CLI (#21409), Copilot CLI (#4207, #4218), Claude Code (#79337, #76363)
- **Subagent self-awareness & observability** — Gemini CLI (#21432, #22598), Claude Code (#65330), Copilot CLI (#4207, #4216), Pi (#6916)
- **Agent chaining & inline invocation** — Copilot CLI (#4208, #4209), Claude Code (Cowork improvements), OpenCode (#80365)

### 3.2 Configurable Model Selection & Switching
- **Model pinning on resume** — Claude Code (#76363, #79410), Gemini CLI (model fallback PR #28469)
- **User-defined model pools / selection limits** — Copilot CLI (#4218), Claude Code (Max plan lock-in #79337)
- **Per-provider fallback chains** — Gemini CLI (PR #28406), Pi (#6768 Copilot Enterprise), Kimi Code (#2533)

### 3.3 Authentication & Provider Compatibility
- **BYOK / custom provider OAuth** — Copilot CLI (#4016), OpenAI Codex (#31573), Claude Code (#77966), Pi (#6927 OpenRouter OAuth)
- **Cross-platform OAuth reliability** — Claude Code (IntelliJ Linux #77966), OpenAI Codex (Microsoft MSA #31573), Copilot CLI (#4016)
- **Third-party API compatibility** — Kimi Code (#2534 prompt_cache_key), OpenCode (#38378 kimi-k3 endpoints), Pi (#6476 httpIdleTimeoutMs)

### 3.4 Context Management & Compaction
- **Auto-compaction triggers** — Claude Code (#80196 never triggers), Copilot CLI (#1688 configurable threshold), Pi (#6879 never triggers, #6993 on output limit)
- **AST-aware codebase reading** — Gemini CLI (#22745, #22746), Qwen Code (#7306 tool output hardening)
- **Workspace-scoped session state** — OpenAI Codex (#25319), Claude Code (session model drift #76363), OpenCode (#18890 non-git cross-contamination)

### 3.5 Observability & Billing Transparency
- **Per-subagent cost/credit breakdown** — Copilot CLI (#4207), Claude Code (sandbox/cowork gaps), Gemini CLI (eval coverage PR #28169)
- **Token usage in status line** — OpenCode (customizable TUI), OpenAI Codex (#17827), Pi (#6988 per-block thinking labels)
- **Usage limit warnings & protection** — Claude Code (#79337 Max downgrade), OpenAI Codex (#29122 silent token burning), Pi (#6911 retry-abort safety)

---

## 4. Differentiation Analysis

### 4.1 Feature Focus & Target Users

| Tool | Primary Target | Core Differentiator | Weakness |
|---|---|---|---|
| **Claude Code** | Pro dev teams, enterprise | Deep Cowork/MCP integration, `/code-review` quality | Billing friction, Max plan lock-in |
| **OpenAI Codex** | AI platform developers | Multi-agent v2, model diversity (GPT-5.x, Claude) | UX regressions, alpha stability |
| **Gemini CLI** | Google Cloud / Code Assist users | A2A protocol, evaluation infrastructure, GCP integration | Subagent reliability, Wayland/WSL issues |
| **Copilot CLI** | GitHub ecosystem users | Sandbox security, `--acp` protocol, GH integration | Low PR velocity, terminal rendering bugs |
| **Kimi Code CLI** | Cost-sensitive, BYO API users | Minimal footprint, Moonshot integration | Very low community activity, 3rd-party API breaks |
| **OpenCode** | Provider-agnostic power users | Custom system prompts, model auto-discovery, plugin system | Provider compatibility friction, memory leaks |
| **Pi** | Self-hosted / local inference users | Provider flexibility (Bedrock, Ollama), OSS-first | Release cadence gaps, Copilot Enterprise incompatibility |
| **Qwen Code** | Enterprise / production teams | Goal v3 state protocol, SDK support (Python), CI/CD automation | Cold-start latency, npm compatibility issues |
| **DeepSeek TUI** | Terminal-focused individual devs | TUI polish (/uwu theme), unified skill packs, /skills manager | Pre-1.0 stability, macOS & Windows installer bugs |

### 4.2 Technical Approach Divergences

- **Multi-agent architecture**: **OpenAI Codex** uses explicit sub-agent model override (v2); **Gemini CLI** uses A2A protocol; **Claude Code** uses Cowork session model; **Pi** uses AgentHarness execution tools. Each approach differs in state persistence, model isolation, and error recovery.

- **Security posture**: **Copilot CLI** emphasizes sandbox-first design (permission scanner, splash opt-in). **Gemini CLI** has a formal security advisory process (GHSA-wpqr-6v78-jr5g). **Qwen Code** proactively files credential exposure bugs (#6601). **DeepSeek TUI** has the weakest posture (17 open Dependency alerts, incomplete `danger-full-access` boundary).

- **Extensibility**: **OpenCode** leads with command sources (config, plugins, MCP), session archival, and plugin data exposure. **Claude Code** has `/planwith` and account profiles plugins. **Pi** provides session metadata env vars to bash tools. **Kimi Code** and **DeepSeek TUI** have minimal extensibility today.

- **Release discipline**: **Claude Code** and **Gemini CLI** ship stable releases daily. **OpenAI Codex** ships alpha pre-releases with minimal changelogs. **Copilot CLI** batches patches (3 today). **Qwen Code** focuses on CI automation over user-facing releases. **DeepSeek TUI** is in a release crunch with many blockers.

---

## 5. Community Momentum & Maturity

### 5.1 Most Active Communities (by engagement intensity)

| Tool | Momentum Signal | Maturity Signal |
|---|---|---|
| **Claude Code** | 57-comment issue (#80002), 35-comment billing debate (#79337); **highest engagement per issue** | Production-grade features (/code-review background subagent, account profiles plugin) |
| **OpenAI Codex** | 44-comment SQLite log churn (#29532); 4 alpha releases in 24h | Multi-agent v2 regression (#32031) suggests rapid iteration on advanced features |
| **Gemini CLI** | 12-comment subagent success bug (#22323); stable + preview releases same day | Security advisory + PR; eval infrastructure investment signals maturity |
| **Copilot CLI** | 33-upvote PDF reading (#443); but only 2 PRs today | Sandbox-first design; lower velocity but deliberate patches |

### 5.2 Rapidly Iterating Projects

| Tool | Iteration Signal | Concerns |
|---|---|---|
| **OpenAI Codex** | 4 alpha tags in 24h; 10 PRs closed | Alpha stability; "Code mode" silent token burning |
| **DeepSeek TUI** | 10 significant PRs for v0.9.1 RC; unified `/skills` manager | Stop-ship bug (TUI exit), pre-1.0 instability, 17 dependency alerts |
| **Qwen Code** | Heavy CI automation investment; Goal v3 state protocol | Most PRs are infrastructure/CI, not user-facing features |
| **Gemini CLI** | Stable + preview same day; A2A fix; MCP timeout hardening | Subagent hangs and false positives are top-voted issues |

### 5.3 Mature but Slower

| Tool | Signal |
|---|---|
| **Kimi Code CLI** | No release today; only 5 updated items total; stable but minimal community |
| **Copilot CLI** | 3 patches but minimal PR activity; feature requests dominate over bugs |
| **Pi** | No release today but 10 meaningful PRs; focused on provider expansion and fixes |

### 5.4 Key Maturity Indicators

- **Security advisories**: Only **Gemini CLI** has an active GHSA (variable expansion bypass)
- **Formal evaluation infrastructure**: **Gemini CLI** (#24353) and **Qwen Code** (eval coverage) are investing in systematic testing
- **SDK support**: **Qwen Code** has Python SDK; **OpenCode** has plugin/command APIs; others are CLI-only
- **Enterprise integration**: **Claude Code** (account profiles), **Copilot CLI** (MCP policy), **Qwen Code** (external memory profile) are the most enterprise-ready

---

## 6. Trend Signals

### 6.1 From the Community Feedback

| Signal | Evidence | Implication |
|---|---|---|
| **Demand for controllable agent allocation** | Multi-agent model selection requested across 5+ tools | Users want cost-optimized workflows: cheap models for routine tasks, expensive models for reasoning |
| **Enterprise-grade observability is non-negotiable** | Per-subagent costing, audit trails, OTel billing attributes in 3+ tools | Tools without granular visibility will be rejected by organizations |
| **"Write once, run anywhere" provider model** | BYOK, custom providers, OAuth, ACP protocol support across all tools | The era of single-provider lock-in is ending; users demand switching freedom |
| **Context management is a critical UX bottleneck** | Auto-compaction failures, AST-aware reading requests, workspace-scoped state | Smart context handling is the next competitive differentiator |
| **Sandbox security is table-stakes** | Regressions break everything (#79997, #4016); credential exposure bugs found (#6601) | Security failures are now considered critical, not nice-to-have |
| **Cross-platform parity is still elusive** | macOS Dropbox (#4085), Wayland (#21983), Windows PATH overwrite (#4685), WSL clipboard (#3534) | Users on non

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot: 2026-07-23 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Ranked by community engagement (comment activity and cross-referencing in Issues).

### #1 — Skill-Creator Fix (run_eval 0% recall bug) — PR #1298
**Functionality:** Repairs the `run_eval.py` script so the description-optimization loop can actually measure skill trigger rates. The script was permanently reporting 0% recall, rendering the entire `run_loop.py` and `improve_description.py` pipeline useless. Fixes include installing eval artifacts as real skills, Windows stream reading, trigger detection logic, and parallel worker support.
**Discussion highlights:** References Issue #556 (12 comments, 7 👍), which was the canonical reproduction of the 0% recall bug. Multiple independent confirmations. This PR consolidates the fix.
**Status:** Open (created 2026-06-10)
[GitHub](https://github.com/anthropics/skills/pull/1298)

### #2 — Document Typography Quality Control — PR #514
**Functionality:** Prevents orphan word wrap (1-6 words stranded on a line), widow paragraphs (section headers at page bottom), and numbering misalignment in AI-generated documents. Addresses pervasive typographic issues that affect every Claude-generated document.
**Discussion highlights:** High signal-to-noise; the problem space is universally relatable. No controversy — community broadly agrees these issues are real and under-addressed.
**Status:** Open (created 2026-03-04)
[GitHub](https://github.com/anthropics/skills/pull/514)

### #3 — PDF Case-Sensitivity Fix — PR #538
**Functionality:** Corrects 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where file references used uppercase (`REFERENCE.md`, `FORMS.md`) but actual files are lowercase. Broke on case-sensitive filesystems (Linux/macOS).
**Discussion highlights:** Trivial fix but attracted attention because it exposed a broader pattern of case-insensitivity assumptions in the repository.
**Status:** Open (created 2026-03-06)
[GitHub](https://github.com/anthropics/skills/pull/538)

### #4 — OpenDocument (ODT/ODS) Skill — PR #486
**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Covers LibreOffice document workflows, template filling, and ODT-to-HTML conversion.
**Discussion highlights:** High demand for open-format document support. Community noted the skill fills a gap where only proprietary formats (DOCX) were covered.
**Status:** Open (created 2026-03-01)
[GitHub](https://github.com/anthropics/skills/pull/486)

### #5 — Skill Quality Analyzer & Skill Security Analyzer — PR #83
**Functionality:** Two meta-skills: (1) evaluates Skills across five quality dimensions (structure, documentation, examples, resource usage, error handling); (2) analyzes Skills for security vulnerabilities.
**Discussion highlights:** Early proposal (2025-11-06) with sustained traction. Community sees meta-skills as essential for maintaining quality as the ecosystem scales.
**Status:** Open (not yet merged)
[GitHub](https://github.com/anthropics/skills/pull/83)

### #6 — Self-Audit Skill (v1.3.0) — PR #1367
**Functionality:** A universal reasoning quality gate that performs mechanical file verification then a four-dimension reasoning audit before delivering AI output. Works with any project and any model.
**Discussion highlights:** Very recent (2026-06-28) but already highly engaged. Proposes a pipeline approach (pre-task calibration → adversarial review → delivery verification) detailed in companion Issue #1385.
**Status:** Open (created 2026-06-28)
[GitHub](https://github.com/anthropics/skills/pull/1367)

### #7 — Frontend Design Skill Clarity Improvement — PR #210
**Functionality:** Revises the frontend-design skill to make every instruction actionable within a single conversation. Improves specificity, coherence, and behavior-steering guidance.
**Discussion highlights:** Raised the broader question of how skills should be written — documentation-style vs. instruction-style. Referenced in Issue #202 about skill-creator best practices.
**Status:** Open (created 2026-01-05)
[GitHub](https://github.com/anthropics/skills/pull/210)

### #8 — Retro Game Development (Pyxel) Skill — PR #525
**Functionality:** Integration with pyxel-mcp for the Pyxel retro game engine. Covers writing, running, capturing, inspecting, and iterating on pixel-art/8-bit games in Python.
**Discussion highlights:** Niche but enthusiastic. From the creator of Pyxel themselves (kitao). Demonstrates the MCP integration pattern for external tools.
**Status:** Open (created 2026-03-05)
[GitHub](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends

From the top Issues, five clear demand directions emerge:

### 🔒 Security & Trust Boundary Management
**Issue #492** (43 comments, 2 👍) — Community skills distributed under the `anthropic/` namespace enable trust boundary abuse. Users may grant elevated permissions to community skills they believe are official. This is the single most-discussed issue in the repository. Demand is for namespace separation, official vetting badges, or permission scoping.

### 🔧 Skill-Creator Tooling Reliability
**Issue #556** (12 comments, 7 👍), **Issue #1169** (3 comments), **Issue #1061** (3 comments, 2 👍) — The `run_eval.py` 0% recall bug affects every skill author. Demand for a working evaluation pipeline is the #1 blocker for skill development. Combined with Windows compatibility bugs (Issue #1061), this represents the largest pain point.

### 🏢 Enterprise & Org-Wide Sharing
**Issue #228** (14 comments, 7 👍) — Skills cannot be shared organizationally without manual file transfer. Demand for shared skill libraries, direct sharing links, or workspace-level skill management.

### 🧠 Agent Memory & State Management
**Issue #1329** (9 comments) — Proposed `compact-memory` skill for symbolic notation of agent state. Long-running agents waste context on prose notes; demand for structured memory compression patterns.

### 🛡️ Agent Governance & Safety
**Issue #412** (6 comments) — No skills cover policy enforcement, threat detection, trust scoring, or audit trails for AI agent systems. Demand for governance patterns as agents grow more autonomous.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to land soon:

| PR | Skill | Why It's High-Potential |
|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit (Reasoning Quality Gate) | Companion Issue #1385 with 3-gate pipeline proposal; author @YuhaoLin2005 has sustained engagement |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | Comprehensive color knowledge (ISCC-NBS, Munsell, OKLCH, etc.); low controversy, high utility |
| [#525](https://github.com/anthropics/skills/pull/525) | Retro Game Development (Pyxel) | Author is Pyxel creator; demonstrates MCP integration pattern |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing Patterns | Full-stack testing methodology (Trophy model, unit tests, React Testing Library, Playwright); fills obvious gap |
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography | Self-contained, universally useful, no naming conflicts |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT/ODS (OpenDocument) | High demand for open format support; LibreOffice integration |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS Predictor | Niche but strong enterprise interest; connects to SAP's open-source tabular foundation model |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for governance and reliability infrastructure — trust boundary security, working evaluation tooling, and reasoning audit gates — rather than for any specific domain skill, indicating the ecosystem is still in its "build the plumbing" phase before domain expansion accelerates.**

---

# Claude Code Community Digest — 2026-07-23

## 1. Today's Highlights

Release **v2.1.218** shipped a major improvement to `/code-review`, now running as a background subagent to avoid polluting conversation history. A storm of bugs around **Fable 5** on Max plans (#79337, 35 comments) and **Cowork session hangs** (#65330, 8 comments) continues to dominate community discussion, while a **closed issue** (#80002) with 57 comments highlights lingering macOS Filesystem extension dispatch failures. The sandbox regression from v2.1.216 (#79997) is also still generating reports.

## 2. Releases

**v2.1.218** (latest, 24h old)  
- `/code-review` now runs as a **background subagent** – review work no longer fills your conversation and stacked slash commands remain the review target.  
- Added screen‑reader announcements for word and line deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).  

## 3. Hot Issues (10 noteworthy)

1. **[#79337](https://github.com/anthropics/claude-code/issues/79337) – [BUG] Fable 5 prompts 'usage credits required' on Max plan** (35 comments, 9 👍)  
   On the first day Fable 5 became standard on Max, users on Max plans are silently downgraded to Opus 4.8 and told usage credits are needed. High frustration – many expect unlimited access.

2. **[#80002](https://github.com/anthropics/claude-code/issues/80002) – [CLOSED] macOS: Claude Desktop never dispatches tools/call to Filesystem extension** (57 comments, 25 👍)  
   Tools/list works but tools/call never arrives. The volume of comments (57) and reactions (25) signals a widespread pain point that has now been closed – likely with a fix.

3. **[#65330](https://github.com/anthropics/claude-code/issues/65330) – Desktop App: AskUserQuestion never renders; hangs until session stops** (8 comments)  
   Regression since June in Cowork/local agent mode. Users can’t answer prompts – the session auto‑denies after timeout. Critical for interactive workflows.

4. **[#77966](https://github.com/anthropics/claude-code/issues/77966) – Linux/IntelliJ: OAuth loop – state parameter dropped after redirect** (8 comments, 6 👍)  
   Login with IntelliJ on Linux hits an infinite redirect loop. Authentication reliability remains a cross‑platform concern.

5. **[#80404](https://github.com/anthropics/claude-code/issues/80404) – Windows: Event‑loop starvation after hibernate/resume (~200% CPU spin)** (4 comments)  
   Likely the Windows analog of a known macOS bug (closed #62308). Idle session burns two cores for tens of minutes before self‑terminating.

6. **[#79997](https://github.com/anthropics/claude-code/issues/79997) – Sandbox regression in v2.1.216: bwrap fails on non‑root installs** (3 comments, 2 👍)  
   A different failure mode than the other v2.1.216 sandbox bug – this one hits users who installed as non‑root under root‑owned directories. Breaks every Bash tool call.

7. **[#80177](https://github.com/anthropics/claude-code/issues/80177) – iOS Simulator panel crash‑loops on macOS 27.0 beta** (2 comments, 1 👍)  
   The helper process `claude-ios-sim` crashes with a Metal/CoreImage exception. Blocks iOS development workflows on the latest macOS beta.

8. **[#80365](https://github.com/anthropics/claude-code/issues/80365) – Cowork Live Artifacts: `mcp_tools` allowlist never populated** (1 comment)  
   On affected accounts every runtime `callMcpTool` call is rejected because the allowlist is empty. Makes Cowork MCP integrations non‑functional.

9. **[#78253](https://github.com/anthropics/claude-code/issues/78253) – Bash tool fails with spawn E2BIG – sandbox profile scales with file count** (1 comment, 5 👍)  
   In large git repos the sandbox profile exceeds argument size limits. Growing workspace kills Bash tools entirely.

10. **[#76363](https://github.com/anthropics/claude-code/issues/76363) – Resuming a session can silently change the model** (1 comment, 1 👍)  
    A runner session started on Opus resumed on a cheaper model – no warning. Users want `--resume` to pin or at least warn about model drift.

## 4. Key PR Progress (all 9 PRs updated in the last 24h)

1. **[#18217](https://github.com/anthropics/claude-code/pull/18217) – [CLOSED] feat(plugins): add `/planwith` command**  
   Enables inline plan mode prompts (e.g., `/planwith "refactor auth"`), eliminating the two‑step `/plan` + prompt workflow. Merged.

2. **[#80353](https://github.com/anthropics/claude-code/pull/80353) – docs(gcp): stop on checksum mismatch**  
   Terraform deployment now halts if binary checksum verification fails. Improves safety in GCP gateway setup.

3. **[#80326](https://github.com/anthropics/claude-code/pull/80326) – Add account profiles plugin**  
   Experimental plugin to manage isolated `CLAUDE_CONFIG_DIR` environments for multiple Claude accounts on one machine.

4. **[#80294](https://github.com/anthropics/claude-code/pull/80294) – docs: fix 1 broken link via archive.org**  
   LinkMedic bot repairs a dead npm link in README.

5. **[#80241](https://github.com/anthropics/claude-code/pull/80241) – fix: console scrolling top of history when text is added**  
   EMP_Agent contribution addressing a UI scroll jump bug in the CLI.

6. **[#80229](https://github.com/anthropics/claude-code/pull/80229) – docs: fix 1 broken link via archive.org**  
   Another LinkMedic fix for a different broken npm link.

7. **[#80196](https://github.com/anthropics/claude-code/pull/80196) – fix: Auto-compact never triggers at 100% context used**  
   EMP_Agent fix for context‑compaction logic that never fires despite statusline showing full usage.

8. **[#80195](https://github.com/anthropics/claude-code/pull/80195) – fix: Instantly hitting usage limits with Max subscription**  
   EMP_Agent fix for premature rate‑limit enforcement on Max plans.

9. **[#80112](https://github.com/anthropics/claude-code/pull/80112) – Make devcontainer firewall init resilient to DNS resolution failures**  
   Hardens `init-firewall.sh` so transient DNS failures no longer abort the entire firewall setup.

## 5. Feature Request Trends

- **Model pinning / switching on resume** – Users want explicit model selection when resuming sessions (#76363, #79410), especially to avoid accidental cost overruns on expensive models.
- **Cowork interaction improvements** – Requests for steering an in‑progress turn immediately (#77724) and for Live Artifact MCP allowlist reliability (#80365).
- **Plugin directory reliability** – Plugins stuck in “Published” status never appearing in the directory (#80263) is blocking developers.
- **Prompt suggestions cross‑platform** – Ghost‑text hints are broken on Linux (#72495), Windows (#77144), and desktop/web (#79919), despite being enabled.
- **Task tool availability** – `TaskCreate`/`TaskGet` etc. are gated in real‑TTY CLI (#80305) and intermittently unregister mid‑session (#80401), breaking task‑based workflows.

## 6. Developer Pain Points

- **Authentication & billing friction** – Repeated OAuth loops (#77966), expired tokens on first daily launch (#79688), silent Max plan downgrades (#56897), and payment failures in Japan (#80055) erode trust.
- **Sandbox regressions** – The v2.1.216 release introduced at least two sandbox failures (#79997, #79606), one of which kills every Bash tool call. Large repos also hit `E2BIG` (#78253) from oversized profiles.
- **Cowork session hangs** – `AskUserQuestion` never renders (#65330), and artifact updates silently lose code (#80435). Desktop Cowork remains fragile.
- **Model lock‑in on Max** – Dispatch sessions lock users to Fable 5 with no working model switch, blocking usage on other models (#79337, #79410). Max subscribers feel cheated.
- **UI inconsistencies** – Console scrolling jumps (#80241), prompt suggestions absent on multiple platforms, Caps Lock crashes the desktop app (#80433), and the iOS Simulator panel crashes on macOS beta (#80177).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## Today's Highlights

Four Rust alpha releases landed today (v0.146.0-alpha.1 through .4), indicating active iteration on the CLI toolchain. A critical multi‑agent UX regression (Issue #32031) and a controversial “Code mode” silently burning tokens in the stable extension (Issue #29122) continue to generate heat, while a new thread‑pinning feature and image‑generation gating for free accounts advanced through the PR pipeline.

## Releases

Four Rust pre‑releases were tagged in the last 24 hours, all from the `rust-v0.146.0-alpha` branch. No detailed changelogs are provided, but the volume suggests incremental fixes are being staged for a broader `v0.146.0` release.

- [`rust-v0.146.0-alpha.1`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.1) — 2026-07-23
- [`rust-v0.146.0-alpha.2`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.2) — 2026-07-23
- [`rust-v0.146.0-alpha.3`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3) — 2026-07-23
- [`rust-v0.146.0-alpha.4`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.4) — 2026-07-23

## Hot Issues (10 noteworthy)

1. **macOS: Persistent SQLite log churn** — Issue [#29532](https://github.com/openai/codex/issues/29532) (44 comments, 👍8)  
   After `rust-v0.142.0`, `~/.codex/logs_2.sqlite` continues to grow. Partial fix acknowledged; community is pressing for a complete resolution.

2. **Customizable status line for TUI** — Issue [#17827](https://github.com/openai/codex/issues/17827) (31 comments, 👍119)  
   Highly upvoted feature request inspired by Claude Code’s status line. Users want token usage, model name, and git branch displayed in the terminal UI.

3. **Weekly limit draining like old 5-hour limit** — Issue [#33685](https://github.com/openai/codex/issues/33685) (20 comments, 👍9)  
   Several users report the “weekly” rate limit still empties in a single day. Unclear if a bug or mis‑configured hard limit.

4. **Full RTL support for Arabic & Hebrew** — Issue [#19504](https://github.com/openai/codex/issues/19504) (20 comments, 👍19)  
   App and Chat panels don’t respect right‑to‑left direction. High engagement from international developers.

5. **OAuth authentication fails at issuer validation** — Issue [#31573](https://github.com/openai/codex/issues/31573) (19 comments, 👍45)  
   Free‑plan users on Codex CLI 0.143.0 hit a dead end during OAuth login. High‑upvoted and blocking entire workflows.

6. **Scope VS Code chats to current workspace** — Issue [#25319](https://github.com/openai/codex/issues/25319) (17 comments, 👍47)  
   Strong demand to isolate chat/thread history per project instead of global storage. Cited as a major organization‑level friction point.

7. **Auto‑recharge of credits keeps turning on** — Issue [#31987](https://github.com/openai/codex/issues/31987) (11 comments, 👍2)  
   Pro x20 users report the auto‑recharge toggle re‑enables itself each time credits are bought. Labelled “a crime” by original reporter.

8. **Multi‑agent v2 model override broken** — Issue [#32031](https://github.com/openai/codex/issues/32031) (5 comments, 👍14)  
   UX regression: sub‑agent model selection is undiscoverable and natural override calls fail. Active on `gpt-5.6-sol`/`gpt-5.6-terra`. High 👍:comment ratio.

9. **Stable extension ships prerelease CLI with “Code mode”** — Issue [#29122](https://github.com/openai/codex/issues/29122) (4 comments, 👍0)  
   VS Code extension 26.616.31447 bundles an alpha CLI with “Code mode” silently active, breaking long MCP calls and wasting tokens. Labelled URGENT.

10. **Display file inline diffs in the app** — Issue [#24513](https://github.com/openai/codex/issues/24513) (3 comments, 👍0)  
    Desktop app shows only “edited file X”, while CLI shows +/- diffs. Users ask for parity to enable code review without `git diff`.

## Key PR Progress (10 important)

1. **Wake sleeping threads for agent mail** — PR [#34852](https://github.com/openai/codex/pull/34852) (closed)  
   Idle threads with durable sleep now resume when agent work arrives, improving concurrency in multi‑agent setups.

2. **Use batch metadata for plugin app summaries** — PR [#34851](https://github.com/openai/codex/pull/34851) (closed)  
   Plugin read/install responses now use the authenticated batch API, reducing repeated network calls for app metadata.

3. **Disable image generation for Free‑plan accounts** — PR [#34850](https://github.com/openai/codex/pull/34850) (closed)  
   The `image_generation` tool is now skipped when the account plan is Free, preventing wasted API calls.

4. **Cache remote plugin catalogs by scope** — PR [#34849](https://github.com/openai/codex/pull/34849) (closed)  
   Plugin catalogs are cached on disk with a three‑hour TTL, speeding up `plugin/list` and reducing server load.

5. **Allow custom providers to opt into standalone web search** — PR [#34846](https://github.com/openai/codex/pull/34846) (closed)  
   Custom model providers can now enable `supports_standalone_web_search` to use the standalone `web.run` tool.

6. **Track multi‑agent mode in world state** — PR [#34845](https://github.com/openai/codex/pull/34845) (closed)  
   Multi‑agent instructions are now durable in world state, surviving history changes without re‑emitting setup hints.

7. **Add persisted thread pinning** — PR [#34840](https://github.com/openai/codex/pull/34840) (closed)  
   New `isPinned` field on threads, with `thread/metadata/update` and `thread/list` filter support. Allows users to pin important conversations.

8. **Preserve user input when MCP startup is interrupted** — PR [#34839](https://github.com/openai/codex/pull/34839) (closed)  
   Interrupting a turn during MCP tool startup no longer drops the submitted user input from conversation history.

9. **Track compaction time in turn profiles** — PR [#34835](https://github.com/openai/codex/pull/34835) (closed)  
   Adds `compaction_ms` to turn analytics, isolating compaction overhead from idle time for performance debugging.

10. **Enable git attribution across entry points** — PR [#34819](https://github.com/openai/codex/pull/34819) (closed)  
    Git attribution extension is now installed in the app server, MCP server, and `codex debug prompt‑input`, enabling workspace policy control over commit/PR attribution.

## Feature Request Trends

- **TUI customizability** — Users want a status line (token usage, model, git branch) and the ability to pin the input box to the bottom of the terminal.
- **Workspace‑scoped state** — Strong demand for per‑project/workspace chat history and thread isolation in the IDE extension, alongside thread pinning (now delivered in PR #34840).
- **Internationalization & accessibility** — RTL text support for Arabic/Hebrew is the top internationalization request; lack of inline diffs in the desktop app is a review workflow blocker.
- **Configurable auto‑behavior** — Requests to permanently disable `autoResolutionMs` and the automatically re‑enabling auto‑recharge toggle highlight a desire for user‑controlled defaults.

## Developer Pain Points

- **Windows‑specific instability** — Login failures (`token_exchange_failed`), WSL sandbox CWD mismatches, and massive `taskkill.exe`/`conhost.exe` spawns continue to plague Windows users, making the platform less reliable than macOS/Linux.
- **Rate limit exhaustion** — The weekly limit draining at pre‑5‑hour rates (Issue #33685) and silent token burning via the “Code mode” alpha CLI (Issue #29122) erode trust in usage accounting.
- **Undiscoverable or regressed UX** — Multi‑agent v2’s hidden model override (Issue #32031) and the forced auto‑recharge toggle (Issue #31987) frustrate power users, who feel features are rolled out without proper opt‑in affordances.
- **OAuth & authentication friction** — Failure at issuer validation (Issue #31573) and missing RFC 8707 resource parameters in MCP OAuth refresh (Issue #33403) block or silently break authentication for free users and MCP‑connected services.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-23

## Today's Highlights

The team shipped **v0.52.0 stable** and a **v0.53.0-preview.0** release, the latter introducing an A2A fix that prevents 400 errors by coalescing consecutive roles and grouping cancelled tool responses. A critical security patch is in PR review to block `$VAR` and `${VAR}` variable expansion bypasses (tracked under **GHSA-wpqr-6v78-jr5g**). Meanwhile, the community is actively discussing a long-standing bug where the generalist agent hangs indefinitely on simple commands, with 8 upvotes and sustained conversation.

---

## Releases

### v0.52.0 (Stable)
- **Refactor:** Excludes transient CI configuration files from workspace context to reduce noise.
- **Feat(caretaker-triage):** Adds foundational triage worker core modules—an internal infrastructure step for automating issue triage.
- [View changelog](https://github.com/google-gemini/gemini-cli/pull/28508)

### v0.53.0-preview.0
- **Fix(core, A2A):** Groups cancelled tool responses and coalesces consecutive roles to resolve 400 Bad Request errors that blocked multi-step agent workflows.
- **Feat(caretaker-triage):** Implements an LLM triage orchestrator and container build—moving toward AI-driven issue classification.
- [View changelog](https://github.com/google-gemini/gemini-cli/pull/28507)

### v0.52.0-nightly.20260723
- Fix for cached credential verification and `GOOGLE_APPLICATION_CREDENTIALS` fallback restoration.
- New `eval:coverage` command to report eval coverage by cross-referencing tool registries.

---

## Hot Issues (10 Noteworthy)

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority P1, 12 comments, 2 reactions*  
   A `codebase_investigator` subagent reports success even though it hit the max-turn limit before doing any work. This false-positive termination masks real failures, making debugging difficult. High engagement suggests users are hitting this regularly.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *Priority P1, 8 comments, 8 reactions*  
   The most upvoted open issue. The CLI hangs forever when deferring to the generalist agent for simple tasks like folder creation. Workaround: instructing the model not to use subagents. Community frustration is palpable.

3. **[#24353 — Robust component-level evaluations (EPIC)](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *Priority P1, 7 comments*  
   Tracks the evolution from 76 behavioral eval tests to a broader evaluation framework. This is the backbone of quality assurance for agent behavior and will drive future regression prevention.

4. **[#22745 — AST-aware file reads, search, and mapping (EPIC)](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Priority P2, 7 comments*  
   Investigates using AST tools (tilth/glyph) for precise method-bound reads and reduced tokens. Could dramatically reduce turn count and noise in codebase mapping. A strategic feature for large-repo usability.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *Priority P2, 6 comments*  
   Anecdotal evidence that custom skills and sub-agents are rarely invoked automatically, even when directly relevant. Undermines the value proposition of custom agent configuration.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *Priority P2, 5 comments*  
   Auto Memory only marks sessions as processed when extraction succeeds, causing low-signal sessions to be re-surfaced forever. Simple design oversight with memory waste implications.

7. **[#25166 — Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Priority P1, 4 comments, 3 reactions*  
   After executing trivial CLI commands, the shell tool remains "awaiting input" indefinitely. A frequent interruption for users relying on shell automation.

8. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *Priority P1, 4 comments, 1 reaction*  
   Browser agent termination is incorrectly reported as "GOAL success" despite failing on Wayland compositors. Blocks Linux users with modern display servers.

9. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
   *Priority P2, 4 comments*  
   `~/.gemini/agents/filename.md` symlinks are ignored. Breaks dotfile management workflows and configuration-as-code setups.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
    *Priority P2, 3 comments, 1 reaction*  
    Model uses `git reset --force` or destructive DB commands when safer alternatives exist. Community wants built-in safeguards and risk awareness.

---

## Key PR Progress (10 Important)

1. **[#28403 — Block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)**  
   *Priority P1, area/security, size/l*  
   Fixes an incomplete security check in `detectBashSubstitution()` and `detectPowerShellSubstitution()`. Defense-in-depth hardening for the `issue-dedup` workflow. An active security advisory.

2. **[#28410 — Shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   *Priority P1, area/agent, size/m*  
   MCP discovery could freeze the CLI for 10 minutes on unresponsive servers. This sets a shorter default timeout so failures surface quickly.

3. **[#28406 — Apply modelIdResolutions to tool sub-agent model configs](https://github.com/google-gemini/gemini-cli/pull/28406)**  
   *Priority P1, area/agent, size/m*  
   Fixes `INVALID_MODEL` errors for API-key users without preview access. Extends `modelIdResolutions` to sub-agent tools like `web-search` and `web-fetch`.

4. **[#28509 — Filter out thought parts from getHistoryTurns when context management is disabled](https://github.com/google-gemini/gemini-cli/pull/28509)**  
   *size/m*  
   Prevents internal monologue (`thought: true`) from leaking into history turns, which could cause duplicate reasoning blocks. Clean context handling for Gemini 2.x.

5. **[#28469 — Rotate session ID on model fallback to prevent stateful API errors](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   *size/m*  
   Rotates the session ID when falling back to `gemini-2.5-flash`, resolving a blocking "Please submit a new query" error from the stateful Code Assist backend.

6. **[#28309 — Improve markdown rendering for CJK text and __bold__ syntax](https://github.com/google-gemini/gemini-cli/pull/28309)**  
   *size/m*  
   Fixes hard line-wrapping and misinterpreted lists in CJK text (which lacks spaces). Also addresses double-underscore bold syntax—a significant UX win for Asian-language users.

7. **[#28485 — Add gemini-3.5-flash to model selector for all users](https://github.com/google-gemini/gemini-cli/pull/28485)**  
   *Priority P2, area/core, size/m*  
   Fixes a regression where `gemini-3.5-flash` was defined in the config but absent from the model selector due to legacy path filtering.

8. **[#28169 — Add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)**  
   *size/l, merged*  
   Wires `npm run eval:coverage` to produce a report cross-referencing eval inventory tool references with the tool registry. Essential for quality metrics.

9. **[#28447 — Windows PowerShell troubleshooting for `gemini` command](https://github.com/google-gemini/gemini-cli/pull/28447)**  
   *Priority P2, size/s*  
   Adds Windows-specific guidance to docs after global npm install failures in PowerShell. Addresses a common onboarding friction.

10. **[#28506 — Propagate AbortSignal in /compress command](https://github.com/google-gemini/gemini-cli/pull/28506)**  
    *size/m, merged*  
    Makes `/compress` cancellable by passing an `AbortSignal`. Eliminates dangling network requests when users start a new prompt or press Escape mid-compression.

---

## Feature Request Trends

Three major feature directions are emerging from the community:

1. **AST-aware codebase mapping** (Issues #22745, #22746): Users want the CLI to understand code structure at method/function granularity rather than line-by-line reads. This would reduce turns, token waste, and noise in large repositories.

2. **Subagent self-awareness and observability** (Issues #21432, #22598, #21763): Developers need subagents to accurately report their own capabilities (CLI flags, hotkeys) and share trajectories via `/chat share`. The lack of subagent context in bug reports is a specific pain point.

3. **Robust evaluation infrastructure** (Issue #24353): The community is pushing for systematic component-level evals beyond the current 76 behavioral tests. This signals a demand for regression-proof development before new features ship.

---

## Developer Pain Points

Recurring frustrations from this week's data:

- **False-positive agent success**: Multiple issues (##22323, ##21983) show agents reporting "GOAL" success when they actually failed silently—Worst kind of bug because users assume work is done.
- **Agent hangs and freezes**: Generalist agent hanging (##21409) and shell commands stuck on "Waiting input" (##25166) are the top-voted frustrations, breaking interactive workflows.
- **Subagent configuration ignored**: Settings overrides for `maxTurns` (##22267) and agent enablement (##22093) are silently ignored, eroding user trust in configuration.
- **Memory system inefficiencies**: Auto Memory indefinite retries (##26522) and silent patch invalidation (##26523) waste both tokens and time.
- **Destructive tool use**: The model's tendency toward `--force` flags and untracked tmp scripts (##23571, ##22672) creates cleanup overhead and risk.
- **Platform-specific failures**: Wayland browser agent failures (##21983) and missing Windows PowerShell guidance (##28447) segment the user base.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

**Today’s Highlights**  
Three patch releases (`v1.0.74-1` through `v1.0.74-3`) land today, adding Gemini 3.6 Flash support and a first-run sandbox opt-in splash, while fixing session multiplexing leaks. The community flags a regression of the infinite React render loop (#4222) and a new BYOK authentication issue in `--acp` mode (#4016). Feature requests continue to center on configuration control (model pools, retry counts, auto-compaction) and agent-level visibility (per-subagent billing, inline agent chaining).  

---

## Releases

**v1.0.74-1 / v1.0.74-2 / v1.0.74-3**  
- **Added** first-run splash for default sandbox opt-in.  
- **Added** support for `gemini-3.6-flash` model.  
- **Improved** session multiplexing – open dialogs no longer leak between sessions; eligible pickers re-open on switch-back.  
- **Improved** the `$` interactive shell shortcut.  
- Bug fixes and general stability improvements.  

*Link: [GitHub Releases](https://github.com/github/copilot-cli/releases)*  

---

## Hot Issues (10 Noteworthy)

1. **#443 – Built-in PDF reading support** (👍33)  
   Users want native PDF ingestion to handle academic papers, technical docs, and reports without manual tools. High community demand.

2. **#3534 – WSL2 (ARM64): `/copy` fails with `clip.exe` quoting bug**  
   Clipboard writes break under WSL2 due to `cmd.exe` argument escaping. Affects workflows relying on clipboard access.

3. **#4016 – BYOK (```COPILOT_PROVIDER_*```) still rejected in `--acp` mode**  
   Custom provider authentication is ignored when using Agent Client Protocol, forcing unwanted GitHub login. Regression since v1.0.61.

4. **#4163 – Zombie processes accumulate under copilot PID on Linux**  
   Subprocesses not reaped, leading to resource leaks (~2 zombies/min). Stability concern for long-running sessions.

5. **#4206 – Environment footer stuck on “Loading:” forever under MCP policy**  
   The status indicator never completes loading, although everything is functional. Affects enterprise MCP users.

6. **#4222 – Regression of infinite React/Ink render loop (v1.0.72+)**  
   Previously fixed in #2802, the “Maximum update depth exceeded” freeze returns on VS Code integrated terminal (Windows).

7. **#4218 – Allow users to configure Auto mode model pool** (👍6)  
   Auto mode can choose any model under the plan, but users cannot limit its selection. Wanted for cost and behavior predictability.

8. **#4207 – Show per-subagent AI credit usage in `/usage`** (👍6)  
   Cumulative session usage is shown, but breakdown by individual subagent/agent is missing. Requested for billing transparency.

9. **#1688 – Configurable auto-compaction threshold in config.json** (👍5)  
   For slower, high-capacity models like Claude Opus 4.6, context bloat degrades performance before built-in compaction triggers. Users want tunable thresholds.

10. **#4210 – Make retry count configurable for Autopilot request errors**  
    Transient server errors during subagent execution (see #4226) can cause 10-15 retries; users want control over retry behavior.

*Full list: [GitHub Issues](https://github.com/github/copilot-cli/issues)*  

---

## Key PR Progress

Only two pull requests were updated in the last 24 hours:

- **#4228 (CLOSED) – Withdrawn: incorrect scope for #3534**  
  The Dr1ver opened a PR to fix the WSL2 clipboard quoting but withdrew it after realizing the fix required changes in the private clipboard runtime, not documentation.  

- **#3163 (OPEN) – “ViewSonic monitor”**  
  This PR appears to be spam or unrelated (title references monitors for issues #2591, #3561, #3559) and has no meaningful code changes.

*Overall PR activity is low today; the community is focused on issue reporting and feature requests.*

---

## Feature Request Trends

- **Configuration & Control**  
  - Configurable auto-compaction threshold (#1688)  
  - User-defined model pool for Auto mode (#4218)  
  - Configurable request-error retry count (#4210)  
  - Option to skip sandbox opt-in splash (implied by #4229, future)  

- **Agent & Tooling Enhancements**  
  - Per-subagent credit usage breakdown in `/usage` (#4207)  
  - Inline custom agent invocation and agent chaining (#4208)  
  - `skill` tool alias for custom agent profiles (#4209)  
  - Explicit `task_complete` tool availability after mode switching (#4161 regression)  

- **Content Understanding**  
  - Native PDF reading support (#443)  
  - OSC 133 shell-integration sequences for prompt navigation (#3428)  

- **Monitoring & Observability**  
  - OTel billing attributes for subagent calls (#4224)  
  - Accurate `MCP Tools` footprint (deferred vs. full) in `/context` (#4189)  

---

## Developer Pain Points

Several recurring frustrations emerge from today’s issues:

1. **Authentication & BYOK Regressions**  
   #4016 shows that custom-provider authentication is still broken in `--acp` mode after multiple attempts to fix. Developers using BYOK are repeatedly blocked.

2. **Terminal Rendering & Compatibility**  
   - **tmux**: Dark-on-dark rendering (#4212), shell command completion never detected (#4223).  
   - **Windows**: Crash on exit with native `uv_async_send` (#4217), crash when `notifications` enabled (#4219).  
   - **React/Ink render loop** returns on v1.0.72+ (#4222), affecting VS Code integrated terminal.  
   - **Zombie processes** on Linux (#4163) and **session resume hangs** on Windows (#4165) degrade long-running usage.

3. **Permission Scanner False Positives**  
   #4221 and #4220 report that the permission gate misclassifies read-only operations (e.g., `git log -L`, `gh api GET`) as modifying the workspace, blocking valid workflows.

4. **Agent & Subagent Reliability**  
   - “Loading” stuck after MCP handshake (#4206).  
   - `task_complete` tool unavailable after mode switch (#4161 regression).  
   - Coordinator stuck “Working” while subagent runs (#4225).  
   - Spamming server errors during subagent tasks (#4226).

5. **Context Management Gaps**  
   Auto-compaction triggers too late for large models (#1688). MCP tool schema reporting shows un-deferred footprint (#4189), misleading users about actual context cost.

*This digest reflects community activity as of 2026-07-23 23:59 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-23

## Today's Highlights
A quiet day with no new releases, but a critical bug surfaced for users on third‑party Kimi‑compatible APIs (unexpected `prompt_cache_key` validation error) and a fast‑follow PR (#2535) is already open to scope the parameter to official Moonshot endpoints only. Meanwhile, a thoughtful feature request for per‑agent model selection (#2533) hints at growing interest in cost‑optimised multi‑agent workflows.

## Releases
No new versions were published in the last 24 hours. The latest release remains v0.29.0.

## Hot Issues
Two issues updated in the last 24 hours; both are new and carry zero community reaction (no comments, no upvotes) yet.

| Issue | Summary | Why It Matters |
|-------|---------|----------------|
| [#2534](https://github.com/MoonshotAI/kimi-cli/issues/2534) [bug] | `Model API error 400 Validation: Unsupported parameter(s): prompt_cache_key` when using Nvidia nim models via a 3rd‑party API. Worked until v0.29.0. | Breaks compatibility with non‑Moonshot back‑ends. Affects Windows users and anyone relying on BYO‑API flows. |
| [#2533](https://github.com/MoonshotAI/kimi-cli/issues/2533) [feature] | Request to allow per‑agent model selection independent of the session’s default model. Enables cost‑tiered multi‑agent workflows (cheap tasks → cheap models, complex tasks → capable models). | Unlocks flexible resource allocation in sub‑agent systems – a natural next step for the growing multi‑agent feature set. |

## Key PR Progress
Three PRs were updated in the last 24 hours; two are older fix PRs that received updates yesterday.

| PR | Description | Status |
|----|-------------|--------|
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) [fix(llm)] | Scope `prompt_cache_key` to Moonshot APIs only. Resolves #2534. Third‑party endpoints will no longer receive the unsupported parameter. | Open, created today |
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) [fix(tools)] | `StrReplaceFile` now counts replacements against the **running** (post‑edit) content instead of the original. Chained edits that produce new `old` strings are reported correctly. | Open, updated yesterday |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) [fix(shell)] | Prevent foreground shell commands (e.g., `some_daemon & echo done`) from waiting until timeout when a detached child holds stdout/stderr pipes. Exit code is now checked sooner. | Open, updated yesterday |

*Note: All three PRs are still open; none have been merged or received review comments yet.*

## Feature Request Trends
Based on today’s single feature request (#2533), the community is beginning to ask for **model‑level granularity** in sub‑agent execution. The trend suggests users want to:
- Assign cheap models (e.g., fast, low‑cost) for routine sub‑tasks and expensive models for reasoning‑heavy steps.
- Keep the session’s default model unchanged while overriding per‑agent.

This aligns with broader industry moves toward intelligent, cost‑aware orchestration of LLM agents.

## Developer Pain Points
Two pain points stand out from today’s data:

1. **Third‑party API compatibility** — The `prompt_cache_key` regression (#2534) shows that changes intended for Moonshot’s own APIs can silently break users on alternative providers (Nvidia nim, others). Developers want a clear separation of concerns or a configuration toggle.
2. **Sub‑agent model flexibility** — The absence of per‑agent model selection (#2533) forces users to either over‑pay or under‑perform when mixing task types in a single session. This is a friction point for advanced multi‑agent setups.

No other recurring frustrations (e.g., install issues, performance regressions) were reported today. The small volume suggests a relatively stable period for the tool.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-23

## Today's Highlights
A significant wave of PRs landed today focused on provider compatibility and API surface expansion—especially around model finish reason preservation, Mistral reasoning handling, and prompt caching. Meanwhile, two long-standing feature requests (custom system prompts and auto‑discover models) continue to dominate community attention with over 300 combined upvotes.

## Releases
No official version releases today. The only entry in `Latest Releases` is a set of before/after verification recordings for PR #38252, not a new build.

## Hot Issues
1. **[FEATURE] Allow custom system prompts in global, project or custom directories** [#7101](https://github.com/anomalyco/opencode/issues/7101)  
   *Closed, 35 comments, 👍123*  
   A top‑voted feature that would let users define system prompts outside the project file. The community wants more flexible layering; the closure suggests a path forward.

2. **Auto‑discover models from OpenAI‑compatible provider endpoints** [#6231](https://github.com/anomalyco/opencode/issues/6231)  
   *Open, 30 comments, 👍185*  
   The most upvoted open issue. Users of local providers (LM Studio, Ollama) are tired of manually listing models. Demand for automatic discovery is high.

3. **All subscription models return "Request blocked by upstream provider"** [#38218](https://github.com/anomalyco/opencode/issues/38218)  
   *Open, 22 comments*  
   A critical bug affecting OpenCode Go subscribers—every model call fails. Users are blocked; urgency is clear.

4. **AI edit strips all generics in TypeScript** [#21911](https://github.com/anomalyco/opencode/issues/21911)  
   *Closed, 8 comments*  
   Reproducible across models: the edit tool removes generic type parameters. High frustration for TypeScript users.

5. **System message must be at the beginning** (multiple reports) [#16560](https://github.com/anomalyco/opencode/issues/16560), [#20785](https://github.com/anomalyco/opencode/issues/20785), [#20813](https://github.com/anomalyco/opencode/issues/20813)  
   *All closed, ~6 comments each*  
   Several Qwen models (3.5‑122B, 3.5‑397B, 3.6‑plus) reject requests where system messages appear out of order. A recurring provider‑integration pain point.

6. **Build/Plan toggle not available in 1.18.4** [#38421](https://github.com/anomalyco/opencode/issues/38421)  
   *Closed, 3 comments*  
   A UI regression that removed the toggle between Build and Plan modes. Quickly fixed, but indicates testing gaps.

7. **Sessions from different non‑git directories are mixed when using --continue** [#18890](https://github.com/anomalyco/opencode/issues/18890)  
   *Closed, 4 comments*  
   Shared project ID for non‑git dirs causes session cross‑contamination. A design flaw affecting users without VCS.

8. **Desktop memory grows to 3‑4 GB with multiple workspaces** [#25490](https://github.com/anomalyco/opencode/issues/25490)  
   *Closed, 4 comments*  
   High memory usage on Windows, possibly linked to stale reads in Solid reactivity. Performance regression.

9. **OpenCode Go: kimi‑k3 fails on /v1/messages but succeeds on /v1/chat/completions** [#38378](https://github.com/anomalyco/opencode/issues/38378)  
   *Open, 2 comments*  
   Inconsistent behaviour between Anthropic‑compatible and OpenAI‑compatible endpoints on the Go gateway. Provider parity issue.

10. **Workspace creation can orphan DB records and git worktrees on failure** [#29057](https://github.com/anomalyco/opencode/issues/29057)  
    *Closed, 2 comments*  
    A transactional integrity bug: partial failures leave stale records and worktrees. Important for reliability.

## Key PR Progress
1. **[fix(llm): preserve response message phases](https://github.com/anomalyco/opencode/pull/38452)** — Decodes `phase` from OpenAI Responses streams and splits replayed assistant messages on commentary/final_answer transitions. Critical for multi‑phase model outputs.

2. **[fix(provider): preserve Mistral reasoning history](https://github.com/anomalyco/opencode/pull/38453)** — Stores AI SDK reasoning parts as Mistral‑native `thinking` chunks, keeping final output separate. Fixes echo/duplication issues.

3. **[feat(ai): preserve raw finish reasons](https://github.com/anomalyco/opencode/pull/38423)** — Models terminal reasons as `{ normalized, raw }` across OpenAI, Anthropic, Gemini, and Bedrock. Enables better error analysis and plugin hooks.

4. **[feat(project): support project metadata updates](https://github.com/anomalyco/opencode/pull/38443)** — Adds API for updating project names and icons. Foundation for richer project management in clients.

5. **[feat(vcs): expose repository branch metadata](https://github.com/anomalyco/opencode/pull/38442)** — Branches are now exposed for Git and Mercurial repos. Clients can display active branch.

6. **[feat(pty): expose shells and connect tokens](https://github.com/anomalyco/opencode/pull/38441)** — List available shells and issue short‑lived PTY tokens. Enables secure remote terminal integration.

7. **[feat(session): add durable session archival](https://github.com/anomalyco/opencode/pull/38440)** — Archive/unarchive operations with history tracking. Helps users declutter session lists without losing data.

8. **[feat(command): identify command sources](https://github.com/anomalyco/opencode/pull/38438)** — Distinguish commands from config, plugins, and MCP servers. Improves debugging and UI labeling.

9. **[fix(provider): select prompt cache keys by SDK](https://github.com/anomalyco/opencode/pull/38424)** — Correctly sends `promptCacheKey` or `prompt_cache_key` depending on the AI SDK package (OpenAI vs. DeepInfra/Cerebras). Prevents cache misconfiguration.

10. **[fix(session): finalize assistant messages on failure](https://github.com/anomalyco/opencode/pull/38432)** — Cleans up orphan assistant messages when a turn errors. Prevents stuck “thinking…” states.

## Feature Request Trends
* **Customizable system prompts** – Users want to define prompts at global, project, or custom directory levels, not just in `opencode.json` (#7101).
* **Model auto‑discovery** – For OpenAI‑compatible local providers, the community strongly desires automatic listing of available models (#6231).
* **Session forking** – The ability to fork from any message into a new session is consistently requested, both in CLI and Desktop (#25582, #29002).
* **ACP agent integration** – Using other ACP‑compatible agents as backends from within OpenCode is a growing ask (#28991).
* **Plugin data exposure** – Plugins want access to message bodies, raw LLM response headers, and fine‑grained hook points (#22831, #26091).

## Developer Pain Points
* **Provider compatibility friction** – Multiple Qwen models fail with “System message must be at the beginning”; OpenCode Go subscription is completely blocked for some; kimi‑k3 works on one endpoint but not another.
* **UI/UX regressions** – Missing Build/Plan toggle, broken `Cmd‑A` for select‑all, Home/End key failures, and dialog stuttering after a conversation are eroding user trust in recent releases.
* **Data integrity issues** – Non‑git sessions leak across directories, workspace creation can orphan records, and session lists fail to show historical entries.
* **Performance degradations** – Desktop memory grows unacceptably with multiple workspaces/tabs, and the renderer crashes on remote connections due to infinite recursion.
* **Editing quality regressions** – AI edits strips TypeScript generics; some models call the edit tool line numbers incorrectly, causing garbled output.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-23

## Today's Highlights

Today’s activity focuses on provider compatibility and operational reliability. A critical regression in `httpIdleTimeoutMs` for self-hosted OpenAI-compatible providers was resolved, while new PRs add support for Bedrock Mantle’s OpenAI Responses API and native OpenRouter OAuth. Persistent issues around auto-compaction and retry handling continue to draw attention, with several patches in review.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#6476 – Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider](https://github.com/earendil-works/pi/issues/6476)**  
   *Closed.* A serious regression in v0.80.6 that broke timeouts for self-hosted models via vLLM. Downgrading to v0.80.3 fixed it – high impact for anyone running local inference. (12 comments)

2. **[#6686 – Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)**  
   *Closed, no action.* Recurring issue where Pi loses GitHub OAuth session across restarts. Affects users relying on GitHub-integrated workflows. (10 comments)

3. **[#6768 – Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)**  
   *Open (9 👍).* Context compaction fails with “421 Misdirected Request” for both OpenAI and Anthropic models when using a Copilot Enterprise license. Blocks enterprise users from managing long sessions. (9 comments)

4. **[#6210 – `/scoped-models` cannot select model ids containing brackets](https://github.com/earendil-works/pi/issues/6210)**  
   *Open, in progress.* Custom model IDs like `custom/bracketed-model[1m]` are rejected due to regex escaping. Frustrating for users with provider-specific model names. (8 comments)

5. **[#6459 – Custom keybindings not applied on initial session start](https://github.com/earendil-works/pi/issues/6459)**  
   *Closed.* Keybindings from `keybindings.json` only work after `/reload`. A persistent UX bug that disrupts power users who rely on custom editors. (7 comments)

6. **[#6774 – Ctrl+G external editor is slow to launch when os.tmpdir() is crowded](https://github.com/earendil-works/pi/issues/6774)**  
   *Closed.* Writing temp files directly into `os.tmpdir()` causes slowdowns on shared systems. Request to use `mkdtemp` subdirectories. (7 comments)  
   *Fix landed in PR #6903.*

7. **[#6879 – Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)**  
   *Open.* Long agentic sessions can exceed context window before compaction kicks in, causing API rejection. Needs compaction check after every agentic turn. (4 comments)

8. **[#6911 – OpenAI SDK retries sleep full Retry-After with no abort](https://github.com/earendil-works/pi/issues/6911)**  
   *Closed.* When `maxRetries > 0`, the SDK sleeps the entire `Retry-After` duration (even days) without respecting `AbortSignal`. Dangerous for rate-limited endpoints. (5 comments)

9. **[#6940 – OpenRouter cache breakpoint stops before tool results](https://github.com/earendil-works/pi/issues/6940)**  
   *Closed.* With Anthropic models through OpenRouter, `cacheRead` stopped advancing during tool-only turns, causing unnecessary re-prefixing of previous conversation. (4 comments)

10. **[#6993 – Auto Compaction on Output Token Limit (LLM Looping)](https://github.com/earendil-works/pi/issues/6993)**  
    *Closed, feature request.* Suggests auto-triggering compaction when the model hits its output token limit. Valuable for preventing runaway loops. (1 comment)

---

## Key PR Progress

1. **[#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**  
   *Open.* Adds a new provider that uses Bedrock’s OpenAI-compatible API via the OpenAI Node SDK. Expands cloud provider options significantly.

2. **[#6980 – fix(ai): make provider retries abortable](https://github.com/earendil-works/pi/pull/6980)**  
   *Open.* Replaces raw SDK retries with a common helper that respects `maxRetryDelayMS` and `AbortSignal`. Directly addresses the dangerous retry behavior from #6911.

3. **[#6341 – feat(ai): support constrained sampling](https://github.com/earendil-works/pi/pull/6341)**  
   *Open.* Adds an opt-in tool config for provider-side constrained input generation (JSON-schema and regex). Powerful for structured outputs, especially with tool-heavy workflows.

4. **[#6984 – feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream](https://github.com/earendil-works/pi/pull/6984)**  
   *Merged.* Fixes thinking wire shape detection for Claude models not in the hardcoded list. Prevents `ValidationException` for newer models.

5. **[#6967 – feat(coding-agent): expose session metadata to bash tools](https://github.com/earendil-works/pi/pull/6967)**  
   *Merged.* Exposes session ID, provider, model, and reasoning level as env vars to bash commands. Streamlines integration for subprocesses and extensions.

6. **[#6927 – Add native OpenRouter OAuth support](https://github.com/earendil-works/pi/pull/6927)**  
   *Merged.* Implements OAuth flow for OpenRouter with PKCE and localhost callback. Simplifies authentication for the popular router provider.

7. **[#6916 – feat(agent): add AgentHarness execution tools](https://github.com/earendil-works/pi/pull/6916)**  
   *Merged.* Introduces `AgentHarnessTool` abstraction that passes arbitrary context (execution env, session id) to tool executions. Foundation for richer agent workflows.

8. **[#6903 – fix(coding-agent): speed up external editor launch](https://github.com/earendil-works/pi/pull/6903)**  
   *Merged.* Moves temp files to a `mkdtemp` subdirectory instead of writing directly into `os.tmpdir()`. Addresses performance problems when tmpdir is crowded (#6774).

9. **[#6881 – feat(ai): use provider-reported cost when responses include it](https://github.com/earendil-works/pi/pull/6881)**  
   *Open.* Reads `usage.cost` from response metadata when available, falling back to catalog rates. More accurate billing for providers like OpenAI and Bedrock.

10. **[#6865 – feat: get_available_thinking_levels RPC](https://github.com/earendil-works/pi/pull/6865)**  
    *Merged.* Adds a new RPC command to query available thinking levels. Useful for dynamic UI or extension logic that needs to adjust reasoning depth.

---

## Feature Request Trends

- **Provider expansion & OAuth**: Multiple requests for new providers (Bedrock Mantle, StepFun, OpenRouter OAuth) and better compatibility with existing ones (Copilot Enterprise compaction, adaptive thinking detection).  
- **Caching & compaction improvements**: Users want smarter auto-compaction triggers (on output token limit, after agentic turns) and better control over cache breakpoints, especially through routers.  
- **TUI ergonomics**: MRU model switching, configurable keybindings on startup, and external editor performance remain high on the wishlist.  
- **Extensibility APIs**: Demand for structured approval request primitives (#5954), per-block thinking labels (#6988), and better integration between extensions (event-based execution updates).

---

## Developer Pain Points

- **Regressions in timeouts and session persistence**: The `httpIdleTimeoutMs` regression (#6476) and recurring GitHub auto-logout (#6686) erode trust in releases.  
- **Configuration friction**: Issues with model IDs containing brackets (#6210), AWS profile ignoring environment variables (#6957), and Copilot Enterprise compaction (#6768) create setup headaches.  
- **Retry/abort behavior**: The OpenAI SDK’s unbounded retry sleep (#6911) and lack of interruptibility are a serious safety concern for production use.  
- **Windows-specific quirks**: Mislabeled extension paths (#6619) and temp directory cleanup problems persist, slowing adoption on Windows.  
- **Performance under load**: Crowded `tmpdir()` (#6774), slow prefill on unified memory devices (#6621), and missed compaction triggers (#6879) hurt responsiveness in heavy sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

## Today's Highlights

The Qwen Code project saw a burst of CI and release automation refinement this week, with multiple autofix and pipeline improvements landing across the codebase. A critical closed issue fixed the `side-query` parameter that was breaking TokenPlan endpoints (#7284), while several open issues surface lingering pain points around update checks, npm 12 compatibility, and cold-start performance. The community continued to push forward on multi-agent visualization, SDK support (Java, Python), and the new Goal v3 state protocol — indicating a strong focus on both production hardening and enterprise integration features.

## Releases

**v0.0.0-benchmark-poc.20260722.1** — A temporary prerelease validating the GitHub Actions → ECS benchmark worker → result publication path. **Not a Qwen Code product release.** No stable or nightly releases landed today worthy of developer attention.

---

## Hot Issues (Top 10)

1. **[#7284 — bug(core): side-query forces enable_thinking=false, breaking TokenPlan endpoints](https://github.com/QwenLM/qwen-code/issues/7284)**  
   *Closed.* `runSideQuery` always sent `enable_thinking: false`, causing 400 errors on endpoints that require it `true`. A critical fix that clarifies the implicit contract between classification utilities and thinking-required providers. (👍 0, Comments: 5)

2. **[#7516 — Main CI failed: E2E Tests on d064bd7dcf98](https://github.com/QwenLM/qwen-code/issues/7516)**  
   *Closed.* Another main-branch CI failure, auto-filed by the dev bot. These recurrent E2E failures indicate pipeline fragility that the team is actively addressing with autofix retry logic. (👍 0, Comments: 5)

3. **[#7264 — Cold-start follow-ups: remaining lazy-loading candidates from ACP eager-closure audit](https://github.com/QwenLM/qwen-code/issues/7264)**  
   *Open, priority P2.* An esbuild-metafile audit revealed 17.24 MiB / 2420 modules parsed before the ACP child can answer `initialize`. The community is tracking remaining lazy-loading opportunities to shave cold-start latency. (👍 0, Comments: 4)

4. **[#7306 — Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)**  
   *Open, priority P2.* Phase 1 of correctness and contract hardening is complete. This issue tracks ongoing reliability improvements for tool output, including the Shell no-artifact regression coverage and `persistedOutputFiles` tri-state docs. (👍 0, Comments: 4)

5. **[#7449 — proposal(memory): Define an enterprise external-memory integration profile](https://github.com/QwenLM/qwen-code/issues/7449)**  
   *Open, priority P3.* A documentation-first proposal for a provider-neutral enterprise external-memory integration. Community discussion focuses on compatibility tests and avoiding core API changes. (👍 0, Comments: 4)

6. **[#7489 — VS Code Companion: file picker inserts @filename but image is not attached](https://github.com/QwenLM/qwen-code/issues/7489)**  
   *Closed.* The paperclip icon in VS Code inserts a mention but never sends the actual image data to the model. A clear UX bug affecting vision workflows. (👍 0, Comments: 3)

7. **[#7515 — Failed to check for updates (registry error)](https://github.com/QwenLM/qwen-code/issues/7515)**  
   *Open, priority P3.* Since v0.20.1, `qwen update` fails with a registry error. The community confirmed it's reproducible directly against the npm registry, ruling out local proxy issues. (👍 0, Comments: 2)

8. **[#7537 — Core test suite is red on main: fork dispatch test never sees registry.complete](https://github.com/QwenLM/qwen-code/issues/7537)**  
   *Closed, priority P1.* A red `test:ci` on `main` was making every open PR fail regardless of content. The fork dispatch test was the culprit, and the fix was prioritized as urgent. (👍 0, Comments: 2)

9. **[#6601 — Shell subprocess inherits sensitive environment variables causing credential exposure](https://github.com/QwenLM/qwen-code/issues/6601)**  
   *Closed, priority P1.* Shell subprocesses inherited the full daemon env, leaking `QWEN_SERVER_TOKEN` and API keys. A welcome-pr issue that has since been fixed. (👍 0, Comments: 2)

10. **[#6835 — Insight report: inconsistent UTC-vs-local date basis across heatmap, streak, active-hours](https://github.com/QwenLM/qwen-code/issues/6835)**  
    *Open, priority P2.* The `/insight` command measures "day" inconsistently between UTC and local time, producing wrong heatmap cells and stale streak counts for non-UTC users. (👍 0, Comments: 2)

---

## Key PR Progress (Top 10)

1. **[#7517 — feat(core): add Goal v3 state protocol](https://github.com/QwenLM/qwen-code/pull/7517)**  
   Introduces the versioned Goal v3 state contract: lifecycle state, optimistic-concurrency controls, deterministic transitions, wire parsing, turn-boundary persistence, and legacy migration — the first independently reviewable slice of #7494.

2. **[#7529 — fix(core): stop humanReadableCron naming intervals that never happen](https://github.com/QwenLM/qwen-code/pull/7529)**  
   `humanReadableCron` was converting `*/N` into "Every N …" without checking N against the field's max value. Now falls back to raw expression when the friendly string would be misleading.

3. **[#7528 — Fix(cli): use npm view for update check instead of update-notifier](https://github.com/QwenLM/qwen-code/pull/7528)**  
   Addresses #7515 by switching from `update-notifier` to `npm view` for update checks, improving reliability across npm versions and registry configurations.

4. **[#7562 — feat(autofix): auto-rerun a check that died on infrastructure, once](https://github.com/QwenLM/qwen-code/pull/7562)**  
   Teaches the autofix scan to automatically re-run CI checks that failed due to infrastructure death (runner loss, disk full) — exactly once, with a guard against infinite loops.

5. **[#7548 — fix(sdk-python): validate max_tool_calls and max_subagent_depth as integers](https://github.com/QwenLM/qwen-code/pull/7548)**  
   Applies consistent integer validation across `max_tool_calls`, `max_subagent_depth`, and `max_session_turns`, preventing bools and non-integers from slipping through.

6. **[#7563 — fix(autofix): retry an agent timeout instead of advancing past its feedback](https://github.com/QwenLM/qwen-code/pull/7563)**  
   When an agent times out during address-review, the feedback is retried instead of being stranded — so incomplete rounds don't skip the work they never finished.

7. **[#7554 — feat(autofix): auto-update a PR red only from a stale, since-fixed base](https://github.com/QwenLM/qwen-code/pull/7554)**  
   Automatically unsticks PRs that are red only because they merged a broken `main` that has since been fixed — by merging current main in, gated on safety checks.

8. **[#7547 — fix(core): stringify const-derived enums in toOpenAPI30](https://github.com/QwenLM/qwen-code/pull/7547)**  
   Ensures `const`-derived enums in OpenAPI 3.0 output are stringified, matching the existing rule for `enum` definitions. One-line change with tests.

9. **[#7531 — fix(core): close force-flag and checkout gaps in the AUTO destructive-git guard](https://github.com/QwenLM/qwen-code/pull/7531)**  
   Widens `DESTRUCTIVE_GIT_PATTERNS` to cover command spellings that were already meant to be blocked — `git clean` and `git checkout` in all their forms.

10. **[#7550 — fix(cli): say review coverage gaps in the author's units, not chunk ids](https://github.com/QwenLM/qwen-code/pull/7550)**  
    `/review`'s posted body now shows coverage gaps in the PR author's file units instead of internal chunk ids, with an additional fix to prevent closing the opener over a body that reports coverage issues.

---

## Feature Request Trends

The community is converging on three major directions:

- **Enterprise integration and memory profiles** — The most-discussed proposal (#7449) calls for a provider-neutral enterprise external-memory integration profile. This reflects growing demand for long-term context persistence in production deployments.
- **Multi-agent visualization and observability** — Issue #7525 proposes visualizing the plan DAG and linking Todo nodes to subagent executions. Combined with #7306 (tool-output hardening), this signals strong interest in observability for multi-step agent workflows.
- **Disk and artifact lifecycle management** — Issue #7524 requests safe cleanup for managed npm update artifacts, while #7306 continues to harden artifact lifecycle. Developers running Qwen Code at scale need reliable temp-file management.

---

## Developer Pain Points

Several high-frequency frustrations stand out from the last 24 hours:

- **Update check failures (multiple issues).** Three separate issues (#7515, #7543, #7520) report broken update checks — caused by registry errors, `getNpmCliPath` returning a bash wrapper, and npm 12 compatibility. The community is clearly hitting this on different environments.
- **CI pipeline instability.** Multiple auto-filed CI failures (#7516, #7559) and release workflow failures (#7549, #7555) indicate that the CI/CD pipeline remains fragile, particularly for E2E tests and Docker integration steps.
- **Cross-platform UI/input bugs.** Reported issues include: Alt+V not pasting screenshots on Windows PowerShell (#6577), mobile browsers not working with Web Shell CodeMirror (#5958), flickering in xterm/alacritty (#6137), and a large blank area between messages and input after resume (#7485). Terminal rendering diversity remains a challenge.
- **Credential exposure in subprocesses.** The closed #6601 (shell subprocess inheriting env vars) highlights an ongoing security concern — developers should review their local configurations for sensitive variable leakage.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest – 2026-07-23

## Today's Highlights

The v0.9.1 release is being finalized with a concentrated push of 20+ closed PRs in the last 24 hours, including the unified `/skills` manager, a default skill pack, the `/uwu` theme, and major TUI chrome refinements. A **stop-ship** bug was filed where the TUI exits immediately in a fresh terminal on macOS, and a critical paste corruption issue in the Composer was reported. A full security gate deep scan was opened for v0.9.1, and the team continues to address legacy “DeepSeek” branding and configuration assumptions.

## Releases

No new releases in the last 24 hours.

## Hot Issues (10 noteworthy)

1. **[#4716 – TUI exits immediately on launch (“[Process completed]”)**](https://github.com/Hmbown/CodeWhale/issues/4716)  
   *stop-ship bug*. Running `codew` in a fresh Terminal.app tab returns instantly. Affects the v0.9.1 candidate. Community reaction: minimal discussion yet, but flagged as release-blocker.

2. **[#4719 – Composer: large pasted prompts get byte-corrupted before submission**](https://github.com/Hmbown/CodeWhale/issues/4719)  
   *critical bug*. Multi-line prompts are truncated and mangled before reaching the model. A downstream agent reported “the candidate path doesn’t exist” from corrupted input. No workaround yet.

3. **[#4713 – v0.9.1 security gate: deep scan and dependency alert disposition**](https://github.com/Hmbown/CodeWhale/issues/4713)  
   *release gate*. 17 open Dependabot alerts (7 high, 10 moderate) must be resolved before tagging. The team has already opened PR #4714 to patch npm lockfiles.

4. **[#4085 – Cannot read/write files under ~/Library/CloudStorage/Dropbox/ (macOS File Provider)**](https://github.com/Hmbown/CodeWhale/issues/4085)  
   *persistent bug*. CodeWhale fails on the default Dropbox location on macOS 12+. Not a sandbox issue – ad-hoc signed binary. 4 comments, community wants a fix.

5. **[#4687 – fix(kimi): fail closed on Kimi Code/direct Moonshot K3 model-ID cross-pairings**](https://github.com/Hmbown/CodeWhale/issues/4687)  
   *release-blocker bug* (now fixed via PR #4694). Two different K3 routes were treated as interchangeable, causing provider confusion. Identified during v0.9.1 dogfooding.

6. **[#4227 – feat: help JayBeest map the CodeWhale tsunami 🌊**](https://github.com/Hmbown/CodeWhale/issues/4227)  
   *community workflow request*. A skill/workflow to keep contributor dev environments in sync with the fast-moving `main` branch. 12 comments, positive support.

7. **[#2870 – EPIC: staged command-boundary refactor for #2791**](https://github.com/Hmbown/CodeWhale/issues/2870)  
   *major architectural effort*. Splits a large refactor of command boundaries into mergeable layers. The reference/proof PR #2851 is used for direction. 17 comments, active coordination.

8. **[#4691 – v0.9.1: Ship the model-invoked default CodeWhale skill pack**](https://github.com/Hmbown/CodeWhale/issues/4691)  
   *release-blocker*. Delivers a first-party end-user skill pack comparable to Kimi Code, Devin CLI, Claude Code. Already resolved by PR #4695.

9. **[#4685 – CodeWhaleSetup.exe installer overwrites user PATH environment variable on Windows 10**](https://github.com/Hmbown/CodeWhale/issues/4685)  
   *Windows installer bug*. Instead of appending, the installer replaces the user PATH, breaking other tools. 1 comment, urgent for Windows users.

10. **[#4717 – Settings: legacy “DeepSeek fallback model” shown prominently on non-DeepSeek providers**](https://github.com/Hmbown/CodeWhale/issues/4717)  
    *cosmetic/cleanup*. The settings menu still shows a “DeepSeek fallback model” even when the active provider is Zai/GLM-5.2. Part of a broader audit of DeepSeek-era artifacts.

## Key PR Progress (10 important)

1. **[#4675 – Integrate CodeWhale v0.9.1 runtime and release surface](https://github.com/Hmbown/CodeWhale/pull/4675)**  
   *Mega-PR* integrating runtime simplification, empty-Work fix, public release surface, and final TUI color grammar. The foundation for all v0.9.1 release-blocker fixes.

2. **[#4679 – feat(skills): unified /skills manager with audit and owned mutations](https://github.com/Hmbown/CodeWhale/pull/4679)**  
   Delivers the Skills lane for v0.9.1: one command to inventory, install, update, remove, and trust skills across all roots. Closes #4650.

3. **[#4695 – feat(skills): default CodeWhale skill pack (bundled v5)](https://github.com/Hmbown/CodeWhale/pull/4695)**  
   Ships 14 end-user skills (interview, plan, implement, debug, test, review, security-review, etc.) and 6 agent-internal skills.

4. **[#4694 – fix(kimi): fail closed on K3 model-ID cross-pairings](https://github.com/Hmbown/CodeWhale/pull/4694)**  
   Treats base URL + model ID as one route identity, preventing interchange of `k3` vs `kimi-k3`.

5. **[#4711 – fix(tui): focus v0.9.1 chrome on todos and agents](https://github.com/Hmbown/CodeWhale/pull/4711)**  
   Keeps only To-do and Sub-agent items visible in the top bar, hides generic operation/coordination chrome, and makes dividers draggable with persisted dimensions.

6. **[#4693 – fix(tui): Work summary lifecycle, actionable title, and top-area hierarchy](https://github.com/Hmbown/CodeWhale/pull/4693)**  
   Makes recent Work summaries expire after 4s or next user turn; keeps durable rows. Fixes #4688, #4689, #4690.

7. **[#4697 – fix(tui): hide empty coordination work before v0.9.1](https://github.com/Hmbown/CodeWhale/pull/4697)**  
   Treats empty coordination snapshots as absent so the Work bar stays clean on first open.

8. **[#4696 – feat(tui): ship staged /uwu theme](https://github.com/Hmbown/CodeWhale/pull/4696)**  
   Adds “uwu” theme (aliases `owo`, `kawaii`) with soft-classic whale mark and color shimmer.

9. **[#4722 – fix(tui): show complete edit previews in details](https://github.com/Hmbown/CodeWhale/pull/4722)**  
   Keeps compact `edit_file` cards bounded and lazily renders full +/- search/replace preview via Alt+V pager. Tests included.

10. **[#4610 – feat(tui): add configurable session token header](https://github.com/Hmbown/CodeWhale/pull/4610)**  
    Adds opt-in token breakdown to the TUI header via `tui.header_items = ["tokens"]`. Preserves existing whale display.

## Feature Request Trends

- **Unified Skill & Workflow Management** – Multiple issues (#4227, #4651, #4691) request a single place to manage skills, install/update/trust, and discoverable workflows. This trend has matured into the v0.9.1 `/skills` manager and default skill pack.
- **Information Density & TUI Chrome Clarity** – Issues #4718, #4701, #4700, #4699 ask for better visual hierarchy: reduce repeated hints, show more reasoning, replace generic Work chrome with resizable To-do + Sub-agent bars, and make permission rails theme-native.
- **Provider/Model Selection & Auto-Switching** – #4717 (legacy fallback model), #4720 (provider auto-switching feels under-baked), #4682 (custom provider launch failure) indicate demand for deliberate, well-surfaced model/route management.
- **Cross-Platform File System Compatibility** – #4085 (Dropbox on macOS), #4685 (Windows PATH overwrite), and #4684 (danger-full-access not disabling tools layer boundary) show need for robust file system handling despite OS differences.

## Developer Pain Points

- **Immediate crashes & startup failures** – #4716 (fresh terminal exit) and #4682 (custom provider launch failure) disrupt initial onboarding.
- **Data corruption & loss** – #4719 (paste corruption), #4681 (`<turn_meta>` blocks displayed after reopen), and #4718 (information density overwhelming) erode user trust.
- **Legacy DeepSeek branding bleeding** – #4717 shows “DeepSeek fallback model” still appears under non-DeepSeek providers; more residue likely in settings and documentation.
- **Network & provider flakiness** – #4683 (wrong DeepSeek completions URL flaky), #4687 (Kimi model-ID cross-pairings) cause frustrating reliability issues.
- **Installer & environment mangling** – #4685 (Windows PATH overwrite) is a severe regression for Windows users; #4085 (macOS Dropbox) blocks users with cloud storage.
- **Incomplete security posture** – #4713 (17 dependency alerts) and #4684 (tools-layer boundary not fully disabled by `danger-full-access`) worry developers about exploit surfaces.

*Generated from data at [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) for 2026-07-23.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*