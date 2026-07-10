# AI CLI Tools Community Digest 2026-07-10

> Generated: 2026-07-10 08:24 UTC | Tools covered: 9

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

**Cross-Tool Analysis Report: AI CLI Ecosystem | 2026-07-10**

---

### **1. Ecosystem Overview**
The AI CLI ecosystem is in a phase of intense competition and rapid iteration, focused on transitioning from single-agent coding assistants to complex multi-agent orchestration platforms. A clear industry-wide trend is the push to support the latest large-context models (e.g., GPT-5.6, Claude Fable 5), which is exposing scalability and stability challenges. Communities are grappling with core architectural issues: resource management (memory leaks, zombie processes), cross-platform reliability, and providing developers with finer-grained control over cost, security, and agent behavior. The maturity gap between established players (Claude Code, OpenAI Codex) and newer entrants is narrowing, with all tools facing similar growing pains around enterprise integration and workflow automation.

### **2. Activity Comparison**

| Tool | Hot Issues (Today) | Key PRs (Last 24h) | Release Status | Activity Level |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | v2.1.206 (stable) | **High** - Critical bugs & QoL PRs |
| **OpenAI Codex** | 10 | 6+ | v0.144.1 (stable) + alphas | **High** - Model rollout issues & perf fixes |
| **Gemini CLI** | 10 | 10 | Nightly release | **Very High** - Critical security & agent fixes |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.70 (stable) | **Moderate** - UX bugs, few active PRs |
| **Kimi Code CLI** | 2 | 1 | No recent release | **Low** - Minimal activity |
| **OpenCode** | 10 | 10 | v1.17.18 (patch) | **Very High** - Model support & desktop perf |
| **Pi** | 10 | 10 | v0.80.6 (stable) | **Very High** - Model support & SDK features |
| **Qwen Code** | 10 | 10 | Nightly release | **Very High** - Architectural RFC & core fixes |
| **DeepSeek TUI** | 10 | 10 | v0.8.68 finalizing | **Very High** - Security, perf, release prep |

### **3. Shared Feature Directions**
*   **Multi-Agent Orchestration & Control:** All major tools are evolving beyond single-agent chat. Key needs include: dynamic subagent model selection (OpenCode #6651, Claude Code #15721), session/trajectory visibility (Gemini CLI #22598), and workflow handoff gates (DeepSeek TUI #4179).
*   **Intelligent Cost & Resource Management:** There is strong cross-community demand for automatic model switching based on task complexity (Claude Code #15721, Copilot CLI #2792) and better visibility/control over usage budgets (Claude Code #76133).
*   **Enterprise/Platform Readiness:** Issues around corporate proxies/SSL (Kimi CLI #2458), macOS Gatekeeper blocking (Copilot CLI #970), and Linux desktop app support (Codex #11023) indicate a push into professional team environments.
*   **Enhanced Tool & MCP Ecosystem:** Demand for project-scoped plugins (Copilot CLI #1665), stricter tool schemas (Pi #6306), and reliable MCP server discovery (Qwen Code #6639, DeepSeek TUI #4308) point to maturation of the extensibility layer.

### **4. Differentiation Analysis**
*   **Claude Code & OpenAI Codex:** Focus on **deep IDE integration** and **professional developer workflows**. Codex emphasizes multi-agent configuration and remote filesystem performance, while Claude Code is heavily invested in git integration and local codebase visualization (despite current DNS issues).
*   **Gemini CLI & DeepSeek TUI:** Prioritize **agent reliability and security** at a systems level. Gemini CLI's activity is dominated by P1 bug fixes for agent hangs and critical security patches. DeepSeek TUI is architecting a sophisticated **Fleet/Workflow/Lane** model for high-concurrency agent orchestration.
*   **OpenCode & Pi:** Serve as **highly configurable, provider-agnostic hubs**. OpenCode focuses on desktop UX, local model discovery (#6231), and granular token metrics (#6096). Pi acts as a powerful **SDK and foundation** for developers building custom agent applications, with advanced features like message-anchored tool loading (#6474).
*   **GitHub Copilot CLI & Kimi Code CLI:** Position as **accessible, integrated tools**. Copilot CLI leverages the GitHub ecosystem but shows slower iteration. Kimi Code CLI focuses on minimal-configuration interoperability (e.g., reading Claude Code configs #2487).

### **5. Community Momentum & Maturity**
**Most Active & Rapidly Iterating:** Gemini CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI show the highest velocity, with 10+ PRs and issues addressed daily. They are aggressively tackling architectural changes, security, and performance.
**Mature but Facing Scale Challenges:** Claude Code and OpenAI Codex have large, established communities but are dealing with the complexities of scaling feature-rich platforms (DNS outages, model rollout bugs, memory leaks).
**Slower Paced:** GitHub Copilot CLI and Kimi Code CLI exhibit lower commit velocity, with Copilot CLI addressing persistent UX bugs and Kimi focusing on niche enterprise compatibility.

### **6. Trend Signals**
1.  **The Multi-Agent Transition is Bumpy:** The shift to multi-agent systems is exposing systemic issues: zombie processes (Codex #12491), unbounded state files (DeepSeek #4217), agent hangs (Gemini #21409), and unclear subagent success/failure states (Gemini #22323). Robust session lifecycle management is a critical unsolved problem.
2.  **Local/Open Model Support is a Key Differentiator:** Tools that simplify local model integration (OpenCode #6231) or support a wide array of providers (Pi, DeepSeek) are addressing a strong developer desire to avoid vendor lock-in and control costs.
3.  **Security is Moving to the Forefront:** Critical vulnerabilities like potential RCEs (Gemini #28319) and credential leaks (Qwen #6601) are being treated with high priority, indicating these tools are handling increasingly sensitive environments.
4.  **"Platformization" is Creating Fragmentation:** As tools add their own orchestration layers (Workflows, Lanes, Fleets), developers face a learning curve and potential lock-in. The push for project-scoped configs and cross-tool compatibility (Kimi #2487) is a reaction to this.
5.  **Performance is a Universal Bottleneck:** High agent concurrency cripples TUIs (DeepSeek #4014), remote filesystem ops need batching (Codex PRs), and inefficient caching increases costs (Qwen #6642). Optimization is a top-tier concern across the board.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Analysis of anthropics/skills repository activity (as of 2026-07-10)*

## 1. Top Skills Ranking (by discussion volume)

**#1: [skill-creator](https://github.com/anthropics/skills/pull/1298)**  
**Functionality:** Core tool for creating and optimizing Skills via automated evaluation loops (`run_eval.py`, `run_loop.py`).  
**Discussion:** Critical bug where evaluation reports 0% recall across all queries, making description optimization impossible. Multiple independent reproductions confirm the issue affects Windows/macOS.  
**Status:** OPEN (multiple related PRs: #1298, #1099, #1050, #1323)

**#2: [skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
**Functionality:** Meta-skills for evaluating Skill quality (structure, examples, safety) and security (permissions, data handling).  
**Discussion:** Proposed as marketplace additions for comprehensive Skill auditing across five dimensions.  
**Status:** OPEN since 2025-11-06

**#3: [document-typography](https://github.com/anthropics/skills/pull/514)**  
**Functionality:** Automatically fixes typographic issues in AI-generated documents (orphan words, widow paragraphs, numbering alignment).  
**Discussion:** Addresses universal document quality problems; positioned as preventative rather than corrective.  
**Status:** OPEN since 2026-03-04

**#4: [ODT skill](https://github.com/anthropics/skills/pull/486)**  
**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods) with template support.  
**Discussion:** Expands document format coverage alongside existing DOCX/PDF skills.  
**Status:** OPEN since 2026-03-01

**#5: [testing-patterns](https://github.com/anthropics/skills/pull/723)**  
**Functionality:** Comprehensive testing skill covering philosophy, unit testing, React components, integration, E2E, and performance testing.  
**Discussion:** Follows "Testing Trophy" model with practical patterns and anti-patterns.  
**Status:** OPEN since 2026-03-22

**#6: [self-audit](https://github.com/anthropics/skills/pull/1367)**  
**Functionality:** Two-stage audit system: mechanical file verification followed by four-dimension reasoning audit.  
**Discussion:** Universal quality gate for any project/tech stack, prioritizing damage severity.  
**Status:** OPEN (recent: 2026-06-28)

**#7: [frontend-design improvements](https://github.com/anthropics/skills/pull/210)**  
**Functionality:** Revised skill for clearer, actionable frontend design guidance within single conversations.  
**Discussion:** Focus on improving Claude's ability to follow instructions vs. human education.  
**Status:** OPEN since 2026-01-05

**#8: [color-expert](https://github.com/anthropics/skills/pull/1302)**  
**Functionality:** Comprehensive color expertise covering naming systems, color spaces, accessibility, and palette generation.  
**Discussion:** Self-contained skill with practical "what to use when" guidance.  
**Status:** OPEN since 2026-06-10

## 2. Community Demand Trends (from Issues)

**Security & Trust Boundaries** - Most discussed issue: [#492 Security: Community skills distributed under anthropic/ namespace](https://github.com/anthropics/skills/issues/492) (34 comments). Community demands clear namespace separation to prevent trust boundary abuse.

**Enterprise Workflow Integration** - Strong demand for:  
- [Organization-wide skill sharing](https://github.com/anthropics/skills/issues/228) (14 comments)  
- [SAP predictive analytics integration](https://github.com/anthropics/skills/pull/181)  
- [SharePoint Online document handling](https://github.com/anthropics/skills/issues/1175) with security considerations

**Agent Governance & Safety** - Requests for:  
- [Agent governance patterns](https://github.com/anthropics/skills/issues/412) for policy enforcement and threat detection  
- [Compact memory management](https://github.com/anthropics/skills/issues/1329) for long-running agents

**Toolchain Compatibility** - Persistent issues with:  
- [Windows compatibility](https://github.com/anthropics/skills/issues/1061) across skill-creator scripts  
- [AWS Bedrock integration](https://github.com/anthropics/skills/issues/29)  
- [MCP protocol exposure](https://github.com/anthropics/skills/issues/16)

## 3. High-Potential Pending Skills

**#1367 [self-audit](https://github.com/anthropics/skills/pull/1367)** - Recent (2026-06-28), addresses universal quality control need with mechanical + reasoning audit approach.

**#1302 [color-expert](https://github.com/anthropics/skills/pull/1302)** - Well-defined, self-contained skill with practical color science applications.

**#723 [testing-patterns](https://github.com/anthropics/skills/pull/723)** - Comprehensive testing coverage following established patterns, addresses common development need.

**#514 [document-typography](https://github.com/anthropics/skills/pull/514)** - Solves universal document quality issues with preventative approach.

**Note:** Many PRs show 0 comments due to data issue, but activity is measured by watch/attention metrics.

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust Skill creation and evaluation tooling (#1298 skill-creator fixes) alongside clear security boundaries (#492 namespace separation), reflecting a maturation phase where reliability and trust are paramount alongside functional expansion.**

---

# Claude Code Community Digest - 2026-07-10

## 1. Today's Highlights
A new release (v2.1.206) brings quality-of-life improvements to directory navigation and git workflows, while a significant DNS-related bug affecting the visualize feature continues to dominate community discussions with 94+ comments. Several new issues point to growing pains with the Fable 5 model's token limits and cost management, alongside persistent IDE integration challenges.

## 2. Releases
**v2.1.206** ([link](https://github.com/anthropics/claude-code/releases/tag/v2.1.206))
- **Enhanced Navigation**: Added directory path suggestions to the `/cd` command, matching existing `/add-dir` behavior.
- **Repository Health**: Introduced a `/doctor` check that suggests trimming `CLAUDE.md` files by removing content Claude could infer from the codebase.
- **Git Workflow**: `/commit-push-pr` now automatically allows `git push` to the repository's configured upstream branch.

## 3. Hot Issues
1.  **Visualize Feature Broken** ([#34820](https://github.com/anthropics/claude-code/issues/34820)): Critical DNS error (`claudemcpcontent.com` unreachable) blocks the visualize feature entirely. With 94 comments and 39 👍, this is the top community concern, marked for urgent review.
2.  **Persistent IDE Warning** ([#3301](https://github.com/anthropics/claude-code/issues/3301)): The "Environment Contributions" warning reappears on every IDE (Cursor/VSCode) launch, forcing users to manually relaunch the terminal. A year-old bug with 65 👍 showing widespread frustration.
3.  **Fable 5 Token Limit Bug** ([#67609](https://github.com/anthropics/claude-code/issues/67609)): The server-side advisor tool fails with an "unavailable" error when transcripts exceed ~100K tokens on `claude-fable-5`, effectively breaking the advisor for large conversations. 34 👍 indicate this impacts power users.
4.  **Stale Git Worktrees** ([#26725](https://github.com/anthropics/claude-code/issues/26725)): Claude Code creates git worktrees under `~/.claude-worktrees/` but has no cleanup mechanism for crashed/interrupted sessions, leading to disk clutter. A systemic resource leak concern.
5.  **Fable 5 Cost Block** ([#74051](https://github.com/anthropics/claude-code/issues/74051)): The `/model` command to switch to Fable 5 incorrectly blocks due to usage credits, ignoring active promotional weekly allowances. A cost/access bug affecting users on promotional plans.
6.  **Cowork on Windows ARM64** ([#70067](https://github.com/anthropics/claude-code/issues/70067)): Cowork reports `yukonSilver` as unsupported on Snapdragon X Elite ARM64 Windows, contradicting Anthropic's own readiness checker. Blocks adoption on new Windows hardware.
7.  **Mouse Control Granularity** ([#70672](https://github.com/anthropics/claude-code/issues/70672)): Request to split mouse controls—disabling click-to-select in menus while preserving scroll-wheel functionality. A UX refinement with 32 👍.
8.  **Automatic Model Switching** ([#15721](https://github.com/anthropics/claude-code/issues/15721)): Feature request for automatic model switching based on context/complexity to optimize for cost and capability. A popular idea (48 👍) for smart resource management.
9.  **Plugin Message Loss** ([#76330](https://github.com/anthropics/claude-code/issues/76330)): Channel-plugin messages arriving mid-turn are queued but can be silently and permanently lost, breaking async communication flows.
10. **Nested Agent Notification Spam** ([#76331](https://github.com/anthropics/claude-code/issues/76331)): Stop notifications from synchronously-launched descendant agents flood the top-level session with no option to suppress, filter, or batch them.

## 4. Key PR Progress
1.  **Remote Control Docs** ([#76298](https://github.com/anthropics/claude-code/pull/76298)): Documents the new web/mobile background-task panel and task status sync behavior added in v2.1.205.
2.  **Hook Example Enhancement** ([#76289](https://github.com/anthropics/claude-code/pull/76289)): Extends the bash command validator hook example to demonstrate pre-flighting for compound commands (chaining, pipelines, command substitution).
3.  **Security Plugin Hardening** ([#76274](https://github.com/anthropics/claude-code/pull/76274)): Resolves file paths against the repo root in security-guidance plugins and hardens the findings-array contract to prevent path confusion.
4.  **Plugin Config Example Fix** ([#76029](https://github.com/anthropics/claude-code/pull/76029)): Corrects the `.mcp.json` example in plugin-dev docs to use the flat format instead of the `mcpServers` envelope (which is for `plugin.json`).
5.  **Docs Marketplace Name Fix** ([#76028](https://github.com/anthropics/claude-code/pull/76028)): Updates stale marketplace plugin installation instructions in the `plugin-dev` README to match current naming.
6.  **CI Detection Fix** ([#76023](https://github.com/anthropics/claude-code/pull/76023)): Fixes the GitHub Actions CI detection in a SessionStart hook example by testing for a directory (`.github/workflows`) instead of a file.

## 5. Feature Request Trends
The data shows strong interest in **intelligent cost and resource management**. The top request is for automatic model switching ([#15721](https://github.com/anthropics/claude-code/issues/15721)) to optimize between capability and expense. Relatedly, users want better **visibility and control over usage budgets** ([#76133](https://github.com/anthropics/claude-code/issues/76133)), especially during complex agent orchestration. There's also clear demand for **granular UI/UX customization**, exemplified by requests to decouple mouse click and scroll behaviors ([#70672](https://github.com/anthropics/claude-code/issues/70672)) and to expose bypass permissions via confirmatory gates ([#76327](https://github.com/anthropics/claude-code/issues/76327)).

## 6. Developer Pain Points
**IDE Integration Stability** remains a chronic frustration, with the recurring environment warning ([#3301](https://github.com/anthropics/claude-code/issues/3301)) and new issues like VSCode failing to open in new windows ([#75645](https://github.com/anthropics/claude-code/issues/75645)). **Fable 5 Adoption Barriers** are prominent, including the 100K-token advisor limit ([#67609](https://github.com/anthropics/claude-code/issues/67609)), cost calculation bugs ([#74051](https://github.com/anthropics/claude-code/issues/74051)), and advisor tool errors ([#76326](https://github.com/anthropics/claude-code/issues/76326)). **Cowork Reliability** is a multi-platform concern, with issues on macOS (freezes, [#71951](https://github.com/anthropics/claude-code/issues/71951)), Windows ARM64 (unsupported status, [#70067](https://github.com/anthropics/claude-code/issues/70067)), and Windows Home (sudden failure, [#75969](https://github.com/anthropics/claude-code/issues/75969)). Finally, **resource leakage and cleanup**—like stale worktrees ([#26725](https://github.com/anthropics/claude-code/issues/26725))—point to a need for more robust session lifecycle management.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-10

## 1. Today's Highlights
The community is heavily focused on stability and UX issues with the newly released GPT-5.6-Sol model, particularly around multi-agent configuration and context window limitations. Performance regressions on Windows and macOS, along with a critical bug preventing the Linux desktop app, dominate developer discussions. Several performance-focused PRs aim to reduce latency in remote filesystem operations for a smoother agent experience.

## 2. Releases
*   **rust-v0.144.1** ([link](https://github.com/openai/codex/releases/tag/rust-v0.144.1)): A patch release fixing standalone installation failures and ensuring the `code-mode` host binary remains accessible on macOS.
*   **rust-v0.144.0** ([link](https://github.com/openai/codex/releases/tag/rust-v0.144.0)): Introduces improved visibility and control for usage-limit reset credits, adds a `writes` app-approval mode for safer operations, and expands MCP tool authentication capabilities.
*   **Alpha Releases**: v0.145.0-alpha.1 & alpha.2 were published, indicating ongoing development for the next minor version.

## 3. Hot Issues
1.  **#11023: Codex desktop app for Linux** ([link](https://github.com/openai/codex/issues/11023)): The top-voted community request (719 👍) remains open, blocking Linux developers from using the native app and forcing reliance on the CLI or IDE extensions.
2.  **#31814: GPT-5.6 Sol cannot specify subagent models** ([link](https://github.com/openai/codex/issues/31814)): A critical configuration bug where GPT-5.6-Sol forces all spawned subagents to also be Sol instances, breaking workflows that require specialized models. High engagement (17 comments) signals major impact on multi-agent use cases.
3.  **#31860: GPT-5.6 Sol is catalog-capped at 372K** ([link](https://github.com/openai/codex/issues/31860)): Users report the effective context window is significantly lower than the advertised 1M tokens, severely limiting the model's utility for large-codebase tasks.
4.  **#28190: `rg` is blocked by macOS** ([link](https://github.com/openai/codex/issues/28190)): A persistent bug where macOS's security framework blocks the `rg` (ripgrep) tool, crippling Codex's file search functionality. High comment count (36) shows it's a widespread pain point.
5.  **#20214: Codex App frequently freezes on Windows 11** ([link](https://github.com/openai/codex/issues/20214)): Performance regression causing UI stutters and freezes despite sufficient system resources, degrading the Windows user experience.
6.  **#32041: VS Code extension opens blank webview on Linux** ([link](https://github.com/openai/codex/issues/32041)): A regression in the latest VS Code extension (26.5707.*) breaks the UI entirely on Linux, while the working older version lacks GPT-5.6-Sol support.
7.  **#12491: MCP child processes not reaped, causing zombies** ([link](https://github.com/openai/codex/issues/12491)): A severe memory leak in the desktop app where MCP processes accumulate, creating 1300+ zombie processes and consuming 37GB of memory.
8.  **#22822 & #32032: Computer Use MCP fails on macOS 15.7.x** ([link](https://github.com/openai/codex/issues/22822)): The bundled Computer Use plugin crashes on recent macOS versions due to a Swift Concurrency runtime mismatch, disabling a key feature.
9.  **#31870: GPT-5.6-Sol through Azure fails every turn** ([link](https://github.com/openai/codex/issues/31870)): Azure users are completely blocked from using the new Sol model due to an internal header (`X-OpenAI-Internal-Codex-Responses-Lite`) causing failures.
10. **#13009: Spark model rejects `reasoning.summary`** ([link](https://github.com/openai/codex/issues/13009)): The GPT-5.3-Codex-Spark model incorrectly reports `reasoning.summary` as an unsupported parameter, breaking a standard reasoning feature.

## 4. Key PR Progress
1.  **#31655: Move workspace roots onto environments** ([link](https://github.com/openai/codex/pull/31655)): Core architecture change to align workspace roots with execution environments, preventing `cwd` and sandbox context divergence.
2.  **#31911: Propagate turn metadata to standalone web search** ([link](https://github.com/openai/codex/pull/31911)): Ensures `x-codex-turn-metadata` is forwarded to Alpha Search requests, improving telemetry and integration.
3.  **#32011: Keep CCA models cache in memory** ([link](https://github.com/openai/codex/pull/32011)): Optimizes Codex Cloud Agent performance by caching models in memory instead of on disk for multi-tenant scenarios.
4.  **#32047, #32052, #32051, #32050, #32043, #32046**: A series of performance PRs from **anp-oai** focused on **batching filesystem operations**. These reduce round-trip latency for remote skill loading, metadata reads, ancestor searches, and text-prefix reads, significantly speeding up agent interactions with remote filesystems.
5.  **#31920: Separate ApprovalAction from GuardianApprovalRequest** ([link](https://github.com/openai/codex/pull/31920)): Refactors the approval system for cleaner separation of concerns, keeping tool-owned actions distinct until guardian review.
6.  **#28385: Replace request_user_input autoResolutionMs with isBlocking** ([link](https://github.com/openai/codex/pull/28385)): Updates the user input API contract for clearer blocking/non-blocking behavior across UI clients.

## 5. Feature Request Trends
The dominant trend is **platform parity and accessibility**. The overwhelming request is for a native **Linux desktop app** (#11023). Developers also seek greater **configuration flexibility**, such as choosing the default shell on Windows (#31548) and hiding non-essential UI elements like the "Pets" menu (#32069). There's strong demand for **reliable session recovery**, specifically the ability to reopen closed side chats (#27716).

## 6. Developer Pain Points
1.  **Model Rollout Instability**: The launch of GPT-5.6-Sol has exposed critical bugs in multi-agent configuration (#31814, #32031), Azure integration (#31870), and context window delivery (#31860), breaking advanced workflows.
2.  **Cross-Platform Inconsistency**: Key features are broken on specific OSes: the app is unusable on Linux (#11023), Computer Use fails on macOS 15.7 (#22822), and performance regressions hit Windows hard (#20214, #31531).
3.  **Extension & IDE Fragility**: The VS Code extension is prone to breaking changes that render it unusable (#32041, #32075), and the diff view fails to load file content (#23709).
4.  **Resource Leaks & Performance**: The app suffers from memory leaks due to un-reaped processes (#12491) and high idle resource usage (#31531), undermining reliability.
5.  **Blocked Core Tools**: Essential tools like `rg` (ripgrep) are blocked by OS security on macOS (#28190), and the Chrome extension backend is inconsistently available between CLI and app (#26820).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest | 2026-07-10**

### **Today's Highlights**
The focus remains on platform stability and security, with a critical nightly release addressing thought leakage in conversation history. Multiple high-priority issues concern agent reliability and execution flow, while significant pull requests patch severe vulnerabilities, including a potential RCE in the A2A server and an infinite authentication loop on Windows.

### **Releases**
*   **`v0.52.0-nightly.20260710.ga4c91ce19`** ([#28347](https://github.com/google-gemini/gemini-cli/pull/28347)): This release primarily fixes a core issue where internal model "thoughts" were not being properly stripped from scrubbed history turns, preventing potential context leakage. It also refactors CI configuration to exclude transient files from the workspace context.

### **Hot Issues**
1.  **Agent Recovery Bug** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): A critical P1 bug where a subagent hitting its `MAX_TURNS` limit incorrectly reports success, masking the interruption. This misrepresents task completion.
2.  **Generalist Agent Hang** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): A high-impact P1 issue where deferring to the generalist agent causes the CLI to hang indefinitely, forcing users to disable subagents as a workaround.
3.  **Shell Command Execution Stalls** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): A persistent P1 bug where the CLI remains stuck in "Waiting input" state after a shell command has already completed, breaking workflow automation.
4.  **Agent Self-Awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)): A feature request for the agent to have accurate knowledge of its own CLI flags, hotkeys, and execution methods, improving its ability to guide users.
5.  **Auto Memory Retry Loop** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): Auto Memory can get stuck retrying "low-signal" sessions indefinitely if the agent chooses not to process them, wasting cycles.
6.  **Subagent Trajectory Visibility** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)): Users request that subagent execution details be included in `/chat share` outputs for better debugging and evaluation.
7.  **Skill/Subagent Underutilization** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)): Anecdotal reports that the model rarely uses custom skills or subagents autonomously, requiring explicit user instruction.
8.  **Wayland Browser Agent Failure** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)): The browser subagent fails on Wayland display systems, limiting functionality for Linux users on modern desktop environments.
9.  **Tool Limit Error** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)): The CLI encounters a 400 error when more than ~128 tools are in scope, indicating a backend limitation that needs smarter tool scoping.
10. **AST-Aware Tool Investigation** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): An EPIC tracking the exploration of AST-aware file reads and search to improve code navigation precision and reduce token noise.

### **Key PR Progress**
1.  **Critical A2A Security Fix** ([#28319](https://github.com/google-gemini/gemini-cli/pull/28319)): Patches a zero-click RCE vulnerability by enforcing workspace trust during environment loading.
2.  **Windows Auth Loop Fix** ([#28348](https://github.com/google-gemini/gemini-cli/pull/28348)): Resolves an infinite authentication loop on Windows and fixes `MaxListenersExceededWarning` errors.
3.  **Task Cancellation Fix** ([#28316](https://github.com/google-gemini/gemini-cli/pull/28316)): Ensures task cancellation properly aborts the execution loop to prevent "ghost" processes.
4.  **Circular Reference Guard** ([#28349](https://github.com/google-gemini/gemini-cli/pull/28349)): Prevents crashes in settings management by guarding `customDeepMerge` against circular references.
5.  **Trust Dialog for Hooks** ([#28346](https://github.com/google-gemini/gemini-cli/pull/28346)): Fixes trust dialog disclosure for runnable hooks, improving security transparency.
6.  **AGENTS.md Support** ([#28240](https://github.com/google-gemini/gemini-cli/pull/28240)): Adds out-of-the-box support for `AGENTS.md` as a context file alongside `GEMINI.md`.
7.  **Eval Validation CLI** ([#28344](https://github.com/google-gemini/gemini-cli/pull/28344)): Introduces a new `eval:validate` command for static analysis of evaluation files, suitable for CI gating.
8.  **MCP Resource Resolution** ([#28143](https://github.com/google-gemini/gemini-cli/pull/28143)): Fixes a bug where `read_mcp_resource` could return content from the wrong server when multiple servers expose the same URI.
9.  **Skill .gitignore Respect** ([#28149](https://github.com/google-gemini/gemini-cli/pull/28149)): Ensures skill resource listings respect `.gitignore` and `.geminiignore` rules.
10. **Safe Policy Engine Docs** ([#28244](https://github.com/google-gemini/gemini-cli/pull/28244)): Updates documentation to replace a dangerous `rm -rf /` test example with a safer command.

### **Feature Request Trends**
The dominant themes are **agent reliability and transparency** (better error reporting, subagent trajectory visibility, preventing hangs) and **leveraging native model capabilities** (exploring AST-aware tools, bash sandboxing for security). There's also a strong push for **improved "self-awareness"** where the agent can accurately guide users on its own usage, flags, and capabilities.

### **Developer Pain Points**
*   **Unreliable Execution Flow:** Frequent hangs at shell command completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), in the generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), or at interactive prompts ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) severely disrupt workflows.
*   **Opaque Agent Behavior:** Developers struggle with debugging due to misleading success reports ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), lack of subagent visibility ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), and underutilization of configured skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
*   **Platform-Specific Bugs:** Issues like browser agent failure on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) and authentication problems on Windows create fragmented user experiences.
*   **Workspace Cleanup Overhead:** Agents creating temporary scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) adds manual cleanup burden.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest  
**2026-07-10**  

---

## 1. Today's Highlights  
The latest release **v1.0.70** adds GPT‑5.6 model support and improves error handling for MCP/skill commands. A critical TUI hang bug affecting Windows Terminal users is actively being investigated, while the community continues to push for project‑scoped plugins and better model‑switching controls.

---

## 2. Releases  
**v1.0.70** ([release](https://github.com/github/copilot-cli/releases/tag/v1.0.70)) – 2026‑07‑09  
- **Added**: Support for the GPT‑5.6 model.  
- **Improved**: Unified error prefix for MCP and skill command failures; clearer parsing errors when `--agent` selects a malformed custom agent.  
- **Fixed**: `web_fetch` now works through mandatory HTTPS proxies.  
- **Enhanced**: Gists tab now includes hide/search functionality.  
- **Changed**: Superseded subagent runs are treated as cancelled.  

**v1.0.70‑0** (pre‑release)  
- **Added**: Plugin pinning via exact commit SHA in plugin source configuration.  
- **Added**: `--sandbox`/`--no-sandbox` flags for temporary OS‑level shell sandbox toggling.  
- **Added**: `/refine` command for rewriting tasks.

---

## 3. Hot Issues  

| Issue | Title | Why It Matters | Community Reaction |
|-------|-------|----------------|---------------------|
| [#4069](https://github.com/github/copilot-cli/issues/4069) | **TUI wedges mid‑turn (screen clears, input dead)** – WSL2 + Windows Terminal | Critical UX break: terminal becomes unresponsive mid‑task, ignoring Ctrl+C. Affects stable workflow. | 7 👍, 7 comments; users confirming similar hangs. |
| [#970](https://github.com/github/copilot-cli/issues/970) | **Copilot app blocked by macOS Gatekeeper under corporate security policy** | Repeated post‑upgrade blocking hampers adoption in enterprise environments. | 21 👍, 7 comments; high demand for notarized builds. |
| [#1665](https://github.com/github/copilot-cli/issues/1665) | **Support Copilot CLI Plugins Scoped to Project or Repository** | Global plugin config limits team/project‑specific tooling. Highly requested for dev‑team workflows. | 18 👍, 13 comments; closed but remains a top feature ask. |
| [#2792](https://github.com/github/copilot-cli/issues/2792) | **Automatic switching between model for planning and execution** | Enables cost/performance optimization (e.g., cheap planner + powerful executor). | 14 👍, 4 comments; seen as a key efficiency feature. |
| [#107](https://github.com/github/copilot-cli/issues/107) | **Tool calls cause Segmentation Fault on Alpine Linux** | Blocks Docker/Alpine usage in CI/containerized environments for nearly a year. | 4 👍, 15 comments; longstanding stability bug. |
| [#4077](https://github.com/github/copilot-cli/issues/4077) | **TUI black‑screen hang mid‑turn in 1.0.70‑0 (Windows Terminal)** | Regression in latest pre‑release; content preserved but UI frozen. | 3 👍, 2 comments; urgent for Windows users. |
| [#1675](https://github.com/github/copilot-cli/issues/1675) | **Checkpoint restore permanently deletes all untracked files** | Data‑loss risk: `git clean -fd` on rollback removes uncommitted work. | 0 👍, 2 comments; critical safety issue. |
| [#3024](https://github.com/github/copilot-cli/issues/3024) | **Too many MCP servers results in continuous compaction** | Context‑window overflow degrades performance; needs automatic warning. | 0 👍, 2 comments; highlights scaling challenge with MCP. |
| [#4071](https://github.com/github/copilot-cli/issues/4071) | **Session picker only shows current session (regression)** | Breaks `/resume` workflow; likely caused by an experiment flight. | 0 👍, 0 comments; fresh regression report. |
| [#4078](https://github.com/github/copilot-cli/issues/4078) | **Scheduled prompts kill the existing prompt queue** | `/every` or `/after` interrupts queued tasks, breaking automation. | 0 👍, 0 comments; new bug affecting task scheduling. |

---

## 4. Key PR Progress  
*No pull requests were updated in the last 24 hours.*

---

## 5. Feature Request Trends  
- **Project‑scoped configuration**: Strong demand for plugin, model, and agent settings that are repository‑specific rather than global ([#1665](https://github.com/github/copilot-cli/issues/1665), [#2193](https://github.com/github/copilot-cli/issues/2193)).  
- **Model‑switching intelligence**: Requests for automatic model selection between planning and execution phases ([#2792](https://github.com/github/copilot-cli/issues/2792)).  
- **Enhanced MCP flexibility**: Ask for configurable MCP tools in built‑in agents (e.g., `/research`) and support for custom headers in BYOK setups ([#4076](https://github.com/github/copilot-cli/issues/4076), [#3399](https://github.com/github/copilot-cli/issues/3399)).  
- **Session‑management improvements**: Better visibility and reliability for session resumption across days/repos ([#3931](https://github.com/github/copilot-cli/issues/3931), [#4071](https://github.com/github/copilot-cli/issues/4071)).  

---

## 6. Developer Pain Points  
- **Terminal instability**: Multiple reports of TUI hangs/freezes on Windows Terminal and WSL2, breaking interactive workflows ([#4069](https://github.com/github/copilot-cli/issues/4069), [#4077](https://github.com/github/copilot-cli/issues/4077)).  
- **Enterprise deployment friction**: macOS Gatekeeper blocks after each Homebrew update, requiring manual security overrides ([#970](https://github.com/github/copilot-cli/issues/970)).  
- **Data‑loss risks**: Checkpoint restore aggressively deletes untracked files; session‑resume inconsistency loses context ([#1675](https://github.com/github/copilot-cli/issues/1675), [#3931](https://github.com/github/copilot-cli/issues/3931)).  
- **Platform‑specific bugs**: Alpine Linux segmentation faults and Windows‑specific rendering/text‑selection artifacts ([#107](https://github.com/github/copilot-cli/issues/107), [#4070](https://github.com/github/copilot-cli/issues/4070)).  
- **Scheduling/queue fragility**: Scheduled prompts (`/every`, `/after`) interrupt and halt existing task queues ([#4078](https://github.com/github/copilot-cli/issues/4078), [#4079](https://github.com/github/copilot-cli/issues/4079)).  

---  
*Digest generated from GitHub data on 2026‑07‑10. Feedback? Let us know in the [discussions](https://github.com/github/copilot-cli/discussions).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-07-10

## 1. Today's Highlights
Activity remains focused on agent system enhancements and enterprise environment compatibility. The open PR #2487 proposes automatic support for Claude Code configuration files, indicating a push for multi-platform developer ergonomics. Meanwhile, two long-standing issues regarding SSL certificate handling and TPD rate limit accuracy received recent comments, highlighting ongoing challenges in corporate network environments.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
**1. [#2458 - Add option to ignore ssl certificate](https://github.com/MoonshotAI/kimi-cli/issues/2458)**  
**Why it matters:** This enhancement request addresses a critical barrier for developers in enterprise environments where mandatory SSL inspection (Man-in-the-Middle) by corporate antivirus software blocks authentication. The issue has garnered 5 comments, showing active discussion around secure workarounds for managed devices.

**2. [#2318 - request reached organization TPD rate limit, current: 1505241](https://github.com/MoonshotAI/kimi-cli/issues/2318)**  
**Why it matters:** Reports incorrect TPD (Tokens Per Day) calculation potentially affecting billing and usage tracking. With 1 👍 and recent updates, this points to monitoring/accounting system concerns that could impact user trust in usage reporting.

## 4. Key PR Progress
**1. [#2487 - feat(agent): support loading CLAUDE.md alongside AGENTS.md](https://github.com/MoonshotAI/kimi-cli/pull/2487)**  
**Description:** This PR adds automatic discovery of `CLAUDE.md` and `.claude/CLAUDE.md` configuration files in the agent loading system. It enables seamless migration for projects already configured for Claude Code, reducing setup friction for developers using multiple AI coding assistants. The change is minimal but significantly improves interoperability.

## 5. Feature Request Trends
Current trends show strong emphasis on **enterprise environment compatibility** (SSL handling, proxy support) and **ecosystem interoperability** (cross-tool configuration support). Developers are requesting features that allow Kimi CLI to function seamlessly within restricted corporate networks and alongside other popular AI coding tools, suggesting adoption in professional team settings is growing.

## 6. Developer Pain Points
Two primary pain points emerge: **1) Corporate network restrictions** - SSL inspection and certificate validation issues repeatedly block authentication in managed environments. **2) Usage transparency** - Accurate tracking and reporting of rate limits and token consumption remains a concern, especially for organizational accounts where cost control is critical. These indicate Kimi CLI's expanding use in enterprise contexts where infrastructure constraints differ from individual developer setups.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-10

## 1. Today's Highlights
The community is actively preparing for OpenAI's GPT-5.6 rollout, with fixes for model support and variant handling. A significant performance fix for the Desktop app's Home page promises 78x faster cold loading. Discussions around V2 architecture, particularly for tool plugins and file watching, indicate continued development on the next major version.

## 2. Releases
Two patch releases were published in the last 24 hours:
- **v1.17.18 ([link](https://github.com/anomalyco/opencode/releases/tag/v1.17.18))**: Fixes crashes and bad pricing data when GitHub Copilot returns models with a zero billing batch size. Also adds a model-specific system prompt for Meta Muse Spark.
- **v1.17.17 ([link](https://github.com/anomalyco/opencode/releases/tag/v1.17.17))**: Improves Meta model handling for reasoning variants and fixes clipped descenders in the Desktop app's model selector labels. Also introduces a dismissible tabs intro popup.

## 3. Hot Issues
1.  **Dynamic Model Selection for Subagents** ([#6651](https://github.com/anomalyco/opencode/issues/6651)): A highly-requested feature to allow primary agents to dynamically choose the model for subagents invoked via the Task tool. **(38 comments, 60 👍)**
2.  **Gemma 4 Tool Calling Fails via Ollama** ([#20995](https://github.com/anomalyco/opencode/issues/20995)): Streaming `tool_calls` from Gemma 4 (e4b) via Ollama's API are not recognized, breaking a key functionality for local models. **(35 comments, 47 👍)**
3.  **Tokens Per Second Display** ([#6096](https://github.com/anomalyco/opencode/issues/6096)): A popular request to experimentally calculate and display tokens per second (TPS) for response messages. **(20 comments, 61 👍)**
4.  **Auto-Discover Models from Local Providers** ([#6231](https://github.com/anomalyco/opencode/issues/6231)): A top-voted request to automatically discover models from OpenAI-compatible endpoints (Ollama, LM Studio), eliminating manual config updates. **(13 comments, 168 👍)**
5.  **GPT-5.6 Luna "Model Not Found"** ([#36140](https://github.com/anomalyco/opencode/issues/36140)): Users report `gpt-5.6-luna` returns a 404 error when using ChatGPT OAuth, indicating a compatibility issue with OpenAI's latest model rollout. **(6 comments, 12 👍)**
6.  **Session Stalls on Zero-Token Responses** ([#36199](https://github.com/anomalyco/opencode/issues/36199)): A critical bug where a valid provider response reporting zero token usage causes the session to stall indefinitely. **(3 comments)**
7.  **GPT-5.6 Missing Max Reasoning Effort** ([#36141](https://github.com/anomalyco/opencode/issues/36141)): OpenCode's UI only exposes reasoning efforts up to "xhigh" for GPT-5.6 models, while the API supports a "max" value. **(3 comments)**
8.  **Desktop App Crash Loop After Update** ([#36218](https://github.com/anomalyco/opencode/issues/36218)): Users report the Desktop app enters an OOM crash loop after updating to v1.17.18, a potentially widespread stability issue. **(2 comments)**
9.  **Agent Over-Executes on Simple Questions** ([#36226](https://github.com/anomalyco/opencode/issues/36226)): Reports of agents running complex multi-step operations instead of answering simple factual questions, impacting efficiency. **(2 comments)**
10. **Need Token Metadata in Messages** ([#36216](https://github.com/anomalyco/opencode/issues/36216)): Request to display input and total cached token counts per message to aid in model selection and session management decisions. **(2 comments)**

## 4. Key PR Progress
1.  **Fix for GPT-5.6 Luna** ([#36143](https://github.com/anomalyco/opencode/pull/36143)): Fixes the `gpt-5.6-luna` 404 error by supporting OpenAI's legacy "Responses" envelope for ChatGPT OAuth.
2.  **78x Faster Home Loading** ([#36214](https://github.com/anomalyco/opencode/pull/36214)): A major performance overhaul for the Desktop app's Home page, switching to a V2 API and improving pagination.
3.  **Fix Clipped Labels & Branch Tooltip** ([#35724](https://github.com/anomalyco/opencode/pull/35724)): Addresses a Desktop UI bug (#6651) by adding tooltips for truncated branch names and preventing model name clipping.
4.  **Inject _noop Tool for All Providers** ([#36221](https://github.com/anomalyco/opencode/pull/36221)): Fixes a bug where providers like Bedrock require a `toolConfig` when tool history is present, even if no active tools are used.
5.  **Prevent Session Model Overwrite** ([#35898](https://github.com/anomalyco/opencode/pull/35898)): Fixes a bug where switching session tabs could overwrite a user's selected model with the agent's default.
6.  **Add Global Session Picker Toggle** ([#33450](https://github.com/anomalyco/opencode/pull/33450)): Implements a TUI feature to discover and resume sessions from any project, not just the current one.
7.  **Derive Reasoning Variants from models.dev** ([#35985](https://github.com/anomalyco/opencode/pull/35985)): Improves model variant handling by dynamically deriving reasoning options from provider data instead of static tables.
8.  **Support Promise Chaining in Codemode** ([#35617](https://github.com/anomalyco/opencode/pull/35617)): Enhances the codemode sandbox to support `then`, `catch`, and `finally` promise chaining.
9.  **Add /cost Command** ([#34914](https://github.com/anomalyco/opencode/pull/34914)): Implements a command to hide cost/spent money display, useful for enterprise or demo environments.
10. **Enable Lombok Support for Java** ([#27165](https://github.com/anomalyco/opencode/pull/27165)): Adds support for Project Lombok annotations in the Java language server, improving the experience for Java developers.

## 5. Feature Request Trends
*   **Enhanced Model & Agent Control**: Strong demand for dynamic model selection in subagent workflows (#6651) and auto-discovery of models from local providers (#6231).
*   **Improved Performance Metrics**: Clear interest in more granular performance data, specifically Tokens Per Second display (#6096) and token metadata per message (#36216).
*   **V2 Architecture & UX**: Active discussion around V2 capabilities, including unified file watching (#34492), support for @-tagged files (#34387), and improved handling of provider content-filter stops (#34835).
*   **Desktop App UX Polish**: Requests for quality-of-life improvements like double-click to maximize panes (#35314) and keyboard shortcuts to toggle thinking visibility (#31907).

## 6. Developer Pain Points
*   **Local Model Integration**: Friction persists with local providers (Ollama, LM Studio), evidenced by issues with Gemma 4 tool calling (#20995) and the manual configuration burden (#6231).
*   **Model Compatibility Lag**: Rapid provider model updates (like GPT-5.6) often outpace OpenCode's support, leading to "model not found" errors (#36140) and missing variant options (#36141).
*   **Session Stability & Data Loss**: Bugs causing session stalls (#36199), crashes after updates (#36218), and data loss from unexpected closures (#10815) remain high-impact frustrations.
*   **Agent Predictability**: Instances where agents over-execute on simple tasks (#36226) or ignore configured models (#34743) undermine user trust and efficiency.
*   **Configuration Complexity**: Issues with project directory persistence (#31063) and permission/configuration override vulnerabilities (#22296) highlight configuration management challenges.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest · 2026-07-10

### 1. Today's Highlights
The community is actively integrating support for the new **GPT-5.6 "max" thinking level** across the CLI, SDK, and UI, with related PRs and catalog updates landing. A significant regression concerning `httpIdleTimeoutMs` for self-hosted providers in v0.80.6 has been flagged as a high-priority bug. Meanwhile, discussions around advanced tool use patterns and agent session lifecycle continue to evolve.

### 2. Releases
*   **v0.80.6** ([link](https://github.com/earendil-works/pi)): Introduces the new **`max` thinking level**, an opt-in level above `xhigh` natively supported on GPT-5.6 and adaptive Claude models. It's available across CLI (`--thinking max`), SDK, RPC, and model selection.
*   **v0.80.5** ([link](https://github.com/earendil-works/pi)): General release preceding v0.80.6.

### 3. Hot Issues
1.  **#6306: Support Strict Tools / Grammar** ([link](https://github.com/earendil-works/pi/issues/6306)): Proposal to add SDK support for "strict" (grammar-aware) tools, aligning with OpenAI's custom LARK/regex capabilities. Critical for developers needing precise, structured LLM outputs.
2.  **#6476: Regression: `httpIdleTimeoutMs` no longer respected** ([link](https://github.com/earendil-works/pi/issues/6476)): Reports a breaking change in v0.80.6 causing timeouts for self-hosted OpenAI-compatible APIs, despite configuration. A high-impact regression affecting self-hosted deployments.
3.  **#6097: Add support for 'max' thinking level** ([link](https://github.com/earendil-works/pi/issues/6097)): Highly upvoted (+17) request for native `max` thinking level support, now addressed in the latest release and related PRs.
4.  **#5886: AgentSession settlement/continuation bugs** ([link](https://github.com/earendil-works/pi/issues/5886)): Meta-issue tracking a class of bugs where post-run logic fails due to stale agent state. A complex, core architectural concern for extension developers.
5.  **#6206: Clamping to context window prevents artificial context limits** ([link](https://github.com/earendil-works/pi/issues/6206)): A fix for context window overflows is now preventing users from intentionally setting lower `max_tokens` for testing or cost control, sparking debate on flexibility vs. safety.
6.  **#6324: `/tree` throws "No API key found" for ambient-credential providers** ([link](https://github.com/earendil-works/pi/issues/6324)): UI feature fails for AWS Bedrock & Google Vertex AI due to assuming an API key is always required, breaking functionality for major cloud providers.
7.  **#6303: Exponential retry backoff has no cap** ([link](https://github.com/earendil-works/pi/issues/6303)): Identifies an unbounded retry delay that can grow to minutes, highlighting a need for more robust error-handling configuration.
8.  **#6480: Proposal: minimal core seams for multi-agent foreground switching** ([link](https://github.com/earendil-works/pi/issues/6480)): Suggests core API extensions to enable advanced multi-agent console UIs, indicating community interest in complex, multi-session workflows.
9.  **#6259: 'content is not iterable' when reasoning models return null content** ([link](https://github.com/earendil-works/pi/issues/6259)): Exposes a null-safety bug in handling reasoning model responses, causing runtime crashes.
10. **#6210: `/scoped-models` cannot select model ids containing brackets** ([link](https://github.com/earendil-works/pi/issues/6210)): A UI/parsing bug that breaks model selection for custom IDs with special characters, affecting users with complex model naming.

### 4. Key PR Progress
1.  **#6481: fix openrouter models: use context length from top provider** ([link](https://github.com/earendil-works/pi/pull/6481)): Fixes a context length mismatch that caused 400 errors (#6378) by correctly sourcing the context window from the upstream provider.
2.  **#6474: feat(ai): support message-anchored tool loading** ([link](https://github.com/earendil-works/pi/pull/6474)): Proof-of-concept for dynamic tool introduction mid-conversation via `addedTools` in messages, a significant enhancement for adaptive tool use.
3.  **#6471: fix(ai): correct GPT-5.6 Codex context window** ([link](https://github.com/earendil-works/pi/pull/6471)): Updates the GPT-5.6 model catalog context window from 272k to 372k tokens to match upstream OpenAI metadata.
4.  **#6467: fix(package-manager): restore missing git package deps** ([link](https://github.com/earendil-works/pi/pull/6467)): Resolves installation failures for git-based extensions, particularly for pnpm users, by ensuring dependencies are correctly installed.
5.  **#6457: fix: send anthropic thinking blocks also when thinking text is empty** ([link](https://github.com/earendil-works/pi/pull/6457)): Fixes a bug (#6376) where thinking blocks were incorrectly stripped from newer Claude model responses.
6.  **#6460: feat(ai): add xAI Grok SuperGrok OAuth provider** ([link](https://github.com/earendil-works/pi/pull/6460)): Adds a built-in OAuth login provider for xAI's SuperGrok, complementing the existing API key method.
7.  **#6470: feat(coding-agent): expand ~ in shellPath setting** ([link](https://github.com/earendil-works/pi/pull/6470)): Adds tilde (`~`) expansion for the `shellPath` configuration, improving path portability for user scripts.
8.  **#6463: fix(coding-agent): cancel auto-retry when switching models** ([link](https://github.com/earendil-works/pi/pull/6463)): Prevents erroneous behavior by ensuring in-flight auto-retries are aborted when a user switches the active model.
9.  **#6449: add ResourceExhausted as a retryable error** ([link](https://github.com/earendil-works/pi/pull/6449)): Classifies `ResourceExhausted` API errors as retryable, improving resilience against transient quota or capacity issues.
10. **#6427: feat(coding-agent): add prompt cache miss tracking** ([link](https://github.com/earendil-works/pi/pull/6427)): Adds visibility into prompt cache performance by detecting and warning about significant cache misses per turn.

### 5. Feature Request Trends
The dominant trend is **enhanced control and compatibility for next-generation models**. This includes full support for GPT-5.6's `max` thinking level and accurate context windows, as well as fixes for Claude's new thinking block formats. There's also strong interest in **advanced tooling patterns**, such as strict/grammar-based tools (#6306) and dynamic, message-anchored tool loading (#6474). Finally, requests for **more flexible configuration**—like artificial context limits (#6206), tilde expansion (#6458), and OAuth for all major providers (#6461)—show a push for user-centric adaptability.

### 6. Developer Pain Points
*   **Regressions and Breaking Changes:** Sudden breakage in core functions like timeout handling (#6476) or model selection (#6210) after minor updates causes significant disruption.
*   **State and Lifecycle Complexity:** Managing agent session state, tool mutations, and settlement logic remains a source of subtle bugs (#5886, #4147), indicating these APIs are complex and error-prone.
*   **Provider Inconsistencies:** Handling edge cases across different AI backends (OpenAI, Anthropic, Bedrock, OpenRouter) leads to fragmented support, evident in issues with ambient credentials (#6324), cache key formats (#6366), and error mapping (#6485).
*   **Configuration Rigidity:** Developers feel constrained by defaults that can't be overridden for specific use cases, such as setting artificial context limits (#6206) or custom retry backoff caps (#6303).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest · 2026-07-10

### 1. Today's Highlights
The Qwen Code team has shipped a significant nightly release focused on improving subagent stability and session management. A major architectural RFC for multi-workspace daemons has gained traction, while critical fixes address tool-call pairing errors with Anthropic-compatible providers and potential credential leaks in shell environments. The community is actively discussing enhanced caching strategies and SDK improvements.

### 2. Releases
*   **v0.19.8-nightly.20260710.205430235** was released. This nightly build includes a key fix to stop repeated subagent tool-call loops (#6543) and improvements for detecting and marking broken history chains in sessions. It also incorporates prebuilt binaries for `cua-driver-rs v0.7.1` with support for relative coordinates.

### 3. Hot Issues
1.  **RFC: Support multiple workspaces in one qwen serve daemon** (#6378) – A foundational proposal to evolve the daemon architecture from `1 daemon = 1 workspace` to supporting multiple workspaces, sparking significant design discussion.
2.  **API Error: tool_use blocks missing corresponding tool_result** (#6654) – A critical bug causing API failures with Anthropic-compatible providers (like Claude 4.6), directly impacting core functionality for many users.
3.  **Shell subprocess inherits sensitive environment variables** (#6601) – A high-priority security issue where shell commands executed by the agent could expose API keys and tokens from the daemon's environment.
4.  **Glob tool can OOM on large path before output truncation** (#6614) – A performance and stability bug where scanning large directories can crash the Node process due to memory exhaustion before truncation logic kicks in.
5.  **qwen3.7-max may leak `<analysis>`/`<summary>` tags** (#6595) – Reports of the model occasionally leaking internal reasoning tags into its output, which can disrupt the agent's follow-up actions and response parsing.
6.  **MCP servers with HTTP transport show as offline on 401** (#6639) – MCP servers using HTTP fail to trigger OAuth recovery flows when receiving a 401 status, leaving them permanently offline.
7.  **Anthropic converter: low cache hit rate (~20%) through proxy providers** (#6642) – Users report substantially higher costs when using proxy providers due to inefficient prompt caching strategies.
8.  **JetBrains Qwen Code ACP agent does not receive user prompt** (#6581) – A key integration bug where the IntelliJ plugin fails to forward the user's prompt to the local agent, only sending bootstrap context.
9.  **Cron parser drops the step in single-value expressions** (#6629) – A functional bug where cron expressions like `5/15` are incorrectly parsed as just `5`, breaking scheduled automation logic.
10. **Workspace-scope session organization mutations for non-primary workspaces** (#6646) – A follow-up feature request to #6378, seeking write-side session organization (pinning, grouping) for non-primary workspaces in a multi-workspace daemon.

### 4. Key PR Progress
1.  **fix(core): fix tool_use/tool_result pairing** (#6651) – Directly addresses the critical API error (#6654) by ensuring proper message structure for Anthropic providers.
2.  **fix(core): strip leaked protocol summary tags** (#6603) – Implements a sanitizer to remove leaked internal `<analysis>`/`<summary>` tags from model responses, fixing #6595.
3.  **feat(web-shell): workspace management sidebar** (#6625) – Implements phase 4 of the multi-workspace daemon, transforming the web UI sidebar to manage multiple workspaces in parallel.
4.  **fix(cli): keep model switches session-scoped** (#6579) – Changes `/model` commands to only affect the active session by default, requiring an explicit flag to change the global default.
5.  **feat(cli): group daemon channel workers by workspace** (#6635) – Enables daemon-managed channels (like ACP) to work with non-primary workspaces, a key step for multi-workspace support.
6.  **fix(sdk): escalate process abort termination** (#6653) – Prevents orphaned processes by ensuring SDK `ProcessTransport` escalates from SIGTERM to SIGKILL on abort.
7.  **fix(channels): return only final ACP response text** (#6615) – Stops channel agents from concatenating intermediate "thinking" text into their final response, cleaning up output.
8.  **ci: add suspicious comment attachment guard** (#6599) – Implements a GitHub Actions guard (#6597) to automatically delete comments from untrusted users containing high-risk file attachments.
9.  **feat(cli): forward ask_user_question answers from SDK** (#6655) – Enables proper interactive `ask_user_question` tool support for TypeScript and Python SDK users.
10. **fix(mcp): skip OAuth browser flow in non-interactive mode** (#6657) – Prevents the CLI from attempting to open a browser for OAuth when running in non-interactive (`-p`) mode.

### 5. Feature Request Trends
The dominant trend is the push towards a **multi-workspace daemon architecture** (#6378, #6646, #5976). This represents a major shift from the current single-workspace model, aiming to allow a single `qwen serve` instance to manage sessions across different project directories. Related requests include workspace-scoped session organization and channel worker management. Other notable trends include requests for **better SDK interactivity** (support for `ask_user_question` #6647) and **improved cost efficiency** through enhanced prompt caching for proxy providers (#6642).

### 6. Developer Pain Points
*   **Integration Fragility**: Persistent issues with IDE plugins (JetBrains #6581) and MCP servers (#6639) breaking core workflows like prompt forwarding and OAuth.
*   **Platform-Specific Packaging Bugs**: Problems with macOS standalone installers missing native modules (#6590, #6594), breaking features like clipboard image pasting.
*   **Memory & Performance Pitfalls**: Tools like `glob` can cause OOM crashes (#6614), and session memory can become stale or lost (#6487), degrading long-running agent performance.
*   **Cryptic Model/Protocol Errors**: Errors like leaked internal tags (#6595) and tool-use/tool-result pairing failures (#6654) create confusing failures that are hard for end-users to diagnose.
*   **UI/UX Inconsistencies**: Mixed-language UI labels (#6582) and misaligned button hit areas (#6632) point to polish and localization challenges.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-10

## 1. Today's Highlights
The v0.8.68 release is imminent, with finalization PR #4327 in progress. Major focus remains on stabilizing the new Fleet/Workflow/Lane orchestration model and addressing critical performance bottlenecks in the TUI. Security and dependency hygiene saw significant activity, including the addition of automated RustSec audits.

## 2. Releases
*No new releases in the last 24 hours. The finalization of v0.8.68 is underway.*

## 3. Hot Issues
1.  **[#4092: v0.8.68 execution board](https://github.com/Hmbown/CodeWhale/issues/4092)** – The canonical tracking issue for the milestone, defining lane order and dependencies. High comment count (60) indicates intense coordination.
2.  **[#4032: Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** – A user reports the agent bypassing provided scripts, sparking a significant discussion (30 comments) on autonomy vs. user instruction.
3.  **[#4042: Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042)** – Critical security enhancement to enforce tool restrictions across execution contexts, now closed.
4.  **[#4014: TUI lag and memory pressure from high agent fan-out](https://github.com/Hmbown/CodeWhale/issues/4014)** – Addresses a major UX pain point where 30+ parallel sub-agents cause terminal lag, driving performance optimizations.
5.  **[#4095: Default TUI presentation is too busy](https://github.com/Hmbown/CodeWhale/issues/4095)** – UX bug treating the overly verbose default TUI as a priority fix for v0.8.68, advocating for a compact mode as standard.
6.  **[#4257: Add xAI (Grok) as a first-class provider](https://github.com/Hmbown/CodeWhale/issues/4257)** – Feature request to integrate xAI/Grok with proper API key and OAuth support, now closed with implementation merged.
7.  **[#4236: Official Termux / Android arm64 support](https://github.com/Hmbown/CodeWhale/issues/4236)** – Epic tracking official Android (Termux) support, a highly requested community feature.
8.  **[#4217: subagents.v1.json grows unbounded](https://github.com/Hmbown/CodeWhale/issues/4217)** – Bug where long-running sessions cause a state file to grow without cleanup, impacting reliability.
9.  **[#4329: Anthropic API error](https://github.com/Hmbown/CodeWhale/issues/4329)** – New bug report regarding a `tool_use`/`tool_result` mismatch error from the Anthropic API.
10. **[#4308: MCP 发现容错 + 工具描述截断优化](https://github.com/Hmbown/CodeWhale/issues/4308)** – Reports that some MCP servers (e.g., IntelliJ IDEA) cause connection failures and that tool descriptions are overly verbose in CLI output.

## 4. Key PR Progress
1.  **[#4331: Align v0.8.68 FAQ and workflow commands](https://github.com/Hmbown/CodeWhale/pull/4331)** – Updates documentation to reflect the new `lane` CLI commands, replacing outdated `workflow` examples.
2.  **[#4330: Update cargo-deny advisory ignore list](https://github.com/Hmbown/CodeWhale/pull/4330)** & **[#4328: Upgrade dependencies to resolve vulnerabilities](https://github.com/Hmbown/CodeWhale/pull/4328)** – Critical security maintenance addressing `cargo-audit` findings.
3.  **[#4327: v0.8.68 release](https://github.com/Hmbown/CodeWhale/pull/4327)** – The final release preparation PR, bundling version bumps and changelog.
4.  **[#4243: Migrate runtime_threads maps to parking_lot::Mutex](https://github.com/Hmbown/CodeWhale/pull/4243)** – Performance fix addressing hot lock contention, closing issue #4149.
5.  **[#3902: Fix the five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902)** – Major performance overhaul fixing TUI lag issues (#3896-#3900).
6.  **[#4310: Cut PR critical path and stop rebuilding nightly per merge](https://github.com/Hmbown/CodeWhale/pull/4310)** – CI optimization to drastically reduce PR turnaround times.
7.  **[#4314: Wire xAI device-code OAuth entrypoints](https://github.com/Hmbown/CodeWhale/pull/4314)** – Implements the user-facing OAuth flow for xAI/Grok provider support.
8.  **[#4315: Build Termux target and stop rustls JVM panic](https://github.com/Hmbown/CodeWhale/pull/4315)** – Enables Android/Termux builds by fixing bindgen and JVM linkage issues.
9.  **[#4325: Fix workflow scripts and harden cancellation](https://github.com/Hmbown/CodeWhale/pull/4325)** – Fixes broken Workflow fixtures found during dogfooding and improves cancellation robustness.
10. **[#4311: Add GPT-5.6 and Muse Spark routes](https://github.com/Hmbown/CodeWhale/pull/4311)** – Expands model support with the latest OpenAI GPT-5.6 family and Meta's Muse Spark.

## 5. Feature Request Trends
The dominant trend is **orchestration maturity**. Issues highlight a strong push to finalize the **Fleet/Workflow/Lane/Runtime** architecture (#4175), making multi-agent workflows stable, product-ready, and automatically triggerable. Related requests include **sandboxing for sub-agents** (#4042), **workflow handoff gates** (#4179), and **compact, less chaotic TUI views** (#4095). There is also clear demand for **expanding provider support** (xAI/Grok #4257) and **mobile/edge platforms** (Termux/Android #4236).

## 6. Developer Pain Points
1.  **Performance & Stability:** High agent concurrency causes severe TUI lag and memory pressure (#4014). Unbounded state file growth (#4217) is a reliability concern for long sessions.
2.  **Constitutional Adherence:** Users are frustrated when the agent ignores provided scripts and conventions, acting with excessive autonomy (#4032).
3.  **API/Integration Errors:** New providers and complex tool chains introduce runtime errors like the Anthropic `tool_use` mismatch (#4329) and MCP server compatibility issues (#4308).
4.  **CI/Developer Velocity:** Slow PR CI times were a significant bottleneck, directly addressed by optimization PRs (#4310, #4025).
5.  **Documentation & API Clarity:** Rapid evolution of the Workflow system has led to documentation drift, requiring updates to align CLI commands and FAQs (#4331).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*