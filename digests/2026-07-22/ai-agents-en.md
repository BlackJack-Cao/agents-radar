# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 23:41 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-22

## 1. Today’s Overview

OpenClaw saw intense development activity over the past 24 hours, with **500 issues** and **500 pull requests** updated. Of those, **390 issues remain open/active** and **110 were closed**; on the PR side, **339 remain open** while **161 were merged or closed**. This high churn signals a project in rapid iteration, with maintainers actively reviewing contributions and fixing regressions. No new formal releases were published today. The community’s attention is split between critical stability bugs (especially a P0 database corruption regression and MCP/subagent integration issues) and ambitious feature proposals around security, session management, and deployment tooling.

## 2. Releases

**None.** No new releases were cut today. The latest tagged version remains `2026.7.1`, as noted in several issue references (e.g., #108473, #106779).

## 3. Project Progress

**161 PRs were merged or closed** today, spanning fixes, features, and dependency updates. While the top 30 PRs shown are all open, the broader merge activity indicates steady progress. Notable open PRs that advanced include:

- **#112375** (feat: cron shell precheck gate to skip LLM when no work) – a performance optimization to reduce token waste.
- **#112412** (feat: discover models from live provider catalogs) – closes #112405, enabling users to see newly published models without waiting for static catalog updates.
- **#112414** (feat: narrate onboarding app-scan phases in spinner) – UX improvement for the `onboard` command.
- **#112444 / #112443 / #112411** – rapid dependency fixes for `fast-uri` and OpenTelemetry vulnerabilities.
- **#111122** (fix: manual compaction deletes transcript history while claiming it was archived) – addresses a data-loss bug in session management.
- **#112339** (feat(ui): show chat run startup status) – improves Control UI transparency during long initializations.
- **#112331** (fix: keep model catalog coherent across config reloads) – stability fix for hot-reload scenarios.

## 4. Community Hot Topics

Several issues and PRs attracted high engagement:

- **#10659** (15 comments, 4 👍) – “Masked Secrets” feature request to prevent agents from seeing raw API keys. Underlying need: **credential security against prompt injection**. This is a diamond lobster–rated, high-impact request.
- **#101290** (13 comments, 1 👍) – **P0 regression**: CLI startup preflight can corrupt SQLite database on macOS while gateway is running. The community is actively discussing workarounds and root-cause analysis.
- **#86996** (11 comments, 2 👍) – Long latency and hook timeouts when combining Active Memory + Codex app-server path. Users report startup aborts and gateway event-loop stalls.
- **#85030** (11 comments, 5 👍) – MCP tools not injected into subagent sessions. A critical integration bug for multi-agent setups.
- **#20786** (9 comments, 6 👍) – Telegram Business Bot support. High reaction count indicates strong demand for enterprise messaging features.
- **#16670** (9 comments, 1 👍) – Onboarding wizard should include Memory/Embedding setup. Users find the memory feature essential but discover it late.

The common thread: **subagent integration, memory/context management, and security** dominate community concern.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **P0** | #101290 | CLI startup preflight corrupts live SQLite state on macOS while gateway is running | Not yet |
| **P1** | #86996 | Active Memory + Codex path causes hook timeouts, startup aborts, gateway event-loop stalls | Not yet |
| **P1** | #85030 | MCP tools not injected into subagent sessions; allowlist ignored | Not yet |
| **P1** | #53408 | Write/exec tool parameters silently dropped after long conversations (tool call with empty arguments) | Not yet |
| **P1** | #108473 | Cron tool schema breaks llama.cpp tool-calling (unanchored regex pattern) | Not yet (regression) |
| **P1** | #90840 | Subagent run completion delivered as raw worker output instead of parent summary (QQBot regression) | Not yet |
| **P1** | #111498 | Main agent blocked by persistent workspace-state migration after Anthropic auth recovery (macOS) | Not yet |
| **P2** | #48373 | Feishu doc `create` silently ignores `content` parameter | Linked PR open |
| **P2** | #88562 | models.json generator writes apiKey as plain string instead of secret-ref object (security) | Not yet |
| **P2** | #91383 (closed) | Telegram normal reply can start mid-URL when message begins with Markdown links | Closed (fixed) |
| **P2** | #95441 (closed) | GitHub Copilot / GPT-5.5 still replays encrypted content after multiple fixes | Closed (fixed?) |

The regression in #101290 is the most critical: it corrupts the database silently during normal gateway operation. No fix PR exists yet. Many P1 bugs lack fix PRs, suggesting maintainer bandwidth is stretched.

## 6. Feature Requests & Roadmap Signals

Several features with strong community support (👍 and high comment counts) are likely candidates for the next release:

- **Masked Secrets (#10659)** – prevents raw API key exposure; a natural companion to the ongoing security-permissions work.
- **Per-model usage logging (#13219)** – enables cost tracking; linked PR open.
- **Telegram Business Bot support (#20786)** – 6 👍; enterprise messaging.
- **Filesystem Sandboxing Config (#7722)** – security sandboxing for file access.
- **Session snapshots save/load (#13700)** – checkpointing for development workflows.
- **Plugin hot-reload (#14438)** – 4 👍; developer experience improvement.
- **Group session consolidation (#7524)** – allow groups to share a main session.
- **Built-in auto-update with confirmation (#12855)** – safer update workflow.
- **Skill Permission Manifest (#12219)** – security for skills.
- **Capability-based permissions (#12678)** – default-deny for high-risk actions.

**Prediction:** The next minor release (2026.7.x) will likely include masked secrets, per-model logging, and Telegram Business support, as these have both high user demand and linked PRs or clear implementation paths.

## 7. User Feedback Summary

- **Pain point #1: Stability regressions.** Users report that the 2026.6.6 / 2026.7.1 releases introduced database corruption (#101290), MCP tool injection breakage (#85030), and tool parameter drops (#53408). One user called the database issue “a silent data-loss vector.”
- **Pain point #2: Memory and embedding setup is hidden.** New users consistently miss the memory configuration step, leading to stateless bots (#16670). The onboarding wizard is seen as incomplete.
- **Pain point #3: Subagent behavior is unpredictable.** Raw worker output delivered to chats (#90840), announce suppression not working (#8299, #13911), and tool access inheritance issues (#15032) frustrate multi-agent deployments.
- **Satisfaction signals:** Interest in new features like cron precheck (#112375) and live model discovery (#112412) suggests users are pushing the platform toward production-grade efficiency. The rapid pace of security patches (e.g., fast-uri fixes) is also appreciated.

## 8. Backlog Watch

These long-open, high-impact items need maintainer attention:

- **#7722** (Feb 3) – Filesystem Sandboxing. P2, diamond lobster rating, 10 comments, no linked PR. Critical for security-conscious deployments.
- **#20786** (Feb 19) – Telegram Business Bot support. P2, 9 comments, 6 👍. High demand, maintainer review needed.
- **#12678** (Feb 9) – Capability-based permissions. P2, 6 comments, no linked PR. Underpins multiple security concerns.
- **#13751** (Feb 11) – Feishu plugin permission overreach. P1, 7 comments, 2 👍. Security sensitivity.
- **#9409** (Feb 5) – Improve context overflow error message. P2, 5 comments, 3 👍. Small but impactful UX fix.
- **#12855** (Feb 9) – Auto-update with confirmation. P2, 8 comments. Safer updates would reduce regression complaints.

These issues have been open for 5+ months and continue to gather votes and comments. They represent persistent gaps between user expectations and current product capabilities.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Analysis Date:** 2026-07-22

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem is undergoing a period of intense maturation, characterized by rapid iteration cycles and a clear bifurcation between projects pursuing architectural rewrites and those stabilizing existing codebases. Across seven actively tracked projects, the dominant themes are security hardening, multi-agent orchestration reliability, and platform-specific stability — particularly on macOS and Windows. Community engagement remains high, with users demanding production-grade features (cost tracking, credential protection, session persistence) while simultaneously pushing experimental capabilities like goal-mode autonomy and real-time voice channels. The ecosystem's health is robust but strained: high issue/PR churn in flagship projects like OpenClaw and ZeroClaw suggests both community vitality and maintainer bottlenecks.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Today | Health Score | Notes |
|---------|---------------------|-------------------|-------------------|---------------|-------------|-------|
| **OpenClaw** | 500 | 500 | 161 | ❌ | 🟡 **Stressed** | High churn; many P0/P1 regressions, stretched maintainers |
| **ZeroClaw** | 50 | 50 | 9 | ❌ | 🟡 **Active** | Two S0 security bugs; rapid feature work (goal mode) |
| **CoPaw** | 41 | 50 | 30 | ✅ v2.0.1-beta.1 | 🟢 **Healthy** | Fast bug-fix cycle; v2.0 regressions being addressed |
| **Hermes Agent** | 50 | 50 | 2 | ❌ | 🟡 **Active** | Critical bugs filed; state.db corruption on update |
| **IronClaw** | 44 | 50 | 16 | ❌ (rc.1 on Jul 20) | 🟢 **Focused** | Reborn architecture transition; systematic QA sprint |
| **NanoBot** | 9 | 22 | 22 | ❌ | 🟢 **Healthy** | High fix rate; plaintext API key security addressed |
| **PicoClaw** | 8 | 8 | 3 | ❌ | 🟢 **Stable** | Moderate activity; Matrix reconnection gap is critical |
| **LobsterAI** | 0 | 10 | 5 | ❌ | 🟢 **Healthy** | Focused UX polish; one high-severity bug open |
| **NanoClaw** | 1 | 12 | 3 | ❌ | 🟡 **Moderate** | Small team; stale SELinux/Docker PRs need attention |
| **Moltis** | 0 | 1 | 0 | ❌ | ⚪ **Dormant** | Only Dependabot activity; no community engagement |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚫ **Inactive** | No activity reported |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚫ **Inactive** | No activity reported |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚫ **Inactive** | No activity reported |

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Largest community and issue volume** — 500 issues/PRs updated daily dwarfs all competitors (next closest: ZeroClaw at 100 combined). This scale drives faster bug discovery and broader feature surface.
- **Most comprehensive feature set** — MCP integration, codex support, subagent sessions, cron scheduling, Telegram business, and model catalog discovery all present in active development.
- **Reference implementation status** — Serves as the ecosystem's de facto reference design; other projects (e.g., LobsterAI PR #2372) explicitly patch against OpenClaw compatibility.
- **Security-conscious roadmap** — Masked Secrets (#10659, diamond lobster), capability-based permissions (#12678), and filesystem sandboxing (#7722) signal deep investment in enterprise-grade security.

**Technical approach differences:**
- OpenClaw emphasizes **broadest provider support** (including llama.cpp, Anthropic, OpenAI, MCP) and **rich plugin/extension model** via skill manifests and permission manifests.
- In contrast, IronClaw pursues a **ground-up Rust rearchitecture** for performance and determinism; NanoBot focuses on **minimalist dependency** with fast bug-fix cycles.
- OpenClaw's **session state management** (manual compaction, database corruption issues) remains a weakness compared to CoPaw's more robust session-ID preservation approach.

**Community size comparison:**
- OpenClaw's activity volume (500 issues) is roughly **10x** that of ZeroClaw (50) or Hermes (50), and **50x** most medium-tier projects. However, the fix rate (161/500 PRs merged) suggests a **34% closure rate**, lower than NanoBot's near-100% daily fix rate on reported issues.
- The **sheer volume of engagement** makes OpenClaw the ecosystem's primary attractor for developers, but the **P0 database corruption (#101290)** and stretched maintainer bandwidth pose retention risks.

---

## 4. Shared Technical Focus Areas

The following requirements emerge across **multiple projects**, indicating ecosystem-wide priorities:

| Focus Area | Projects Involved | Specific Need | Common Pain Point |
|------------|------------------|---------------|-------------------|
| **Secret/Credential Protection** | OpenClaw, NanoBot, ZeroClaw, Hermes | Prevent raw API key exposure to agents; env-var references for config | Prompt injection attacks; plaintext storage in config files |
| **Session State Integrity** | OpenClaw, Hermes, CoPaw, PicoClaw | Database corruption on update/compaction; session-ID sequence collisions | Data loss during upgrades; cross-session contamination |
| **Subagent/Multi-Agent Orchestration** | OpenClaw, ZeroClaw, CoPaw, Hermes | Tool allowlist bypass; MCP tool injection; infinite polling loops | Unpredictable subagent behavior; security policy erosion |
| **Memory & Context Management** | OpenClaw, Hermes, NanoBot | Configurable memory backends; hidden memory setup; context overflow handling | New users miss configuration; stateless bots; token waste |
| **Platform-Specific Stability** | OpenClaw (macOS), Hermes (Windows), NanoBot (Ollama/Linux), CoPaw (Windows) | SQLite corruption on macOS; state.db zeroed on Windows; Docker SELinux labels | Silent failures on non-primary platforms |
| **Provider Compatibility** | OpenClaw, NanoBot, PicoClaw, ZeroClaw | Qwen thinking leakage; Antigravity OAuth blocked; Doubao tool-call format | Model-specific bugs break assumed reliability |
| **Cost & Performance Optimization** | OpenClaw, CoPaw, ZeroClaw, PicoClaw | Per-model usage logging; 2s overhead in v2.0; Ollama cache-breaking prefixes | Unexpected token burn; latency regressions |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | NanoBot | CoPaw | Hermes | PicoClaw |
|-----------|----------|----------|----------|---------|-------|--------|----------|
| **Target User** | Power users, tinkerers, multi-agent deployers | Enterprise operators, platform teams | Autonomous agent builders | LLM enthusiasts, developers | Multi-workflow professionals | Desktop-first power users | Embedded/slim companion |
| **Primary Architecture** | Python monolith with extensive plugin system | Rust rewrite (Reborn) for performance | Python with SOP (Standard Operating Procedure) engine | Lightweight Python; minimal dependencies | Python with Tauri/WebUI frontend | Python desktop app with gateway | Minimal Python; policy-gated exec |
| **Release Philosophy** | Continuous incremental (no release today despite 500 issues) | Milestone-driven (Reborn v1.0.0-rc.1) | Feature-gated (goal mode, eval harness in progress) | Rapid fix cycles (22 PRs merged today) | Tagged beta releases (v2.0.1b) | Bug-fix sprint mode | Steady moderate cadence |
| **Differentiator** | Largest ecosystem; widest provider coverage | Architecture purity; deterministic runtime | Structured autonomy (SOP, goal mode) | Simplicity & speed of bug fixes | Multi-mode workflows (UltraQA, Ralph, Team) | Desktop experience; multi-platform gateways | Channel integration breadth (Matrix, DingTalk, Telegram) |
| **Weakness** | Maintainer bandwidth; database stability | Breaking changes; migration burden | Security bypasses; memory leaks | Limited feature depth | v2.0 regression cluster | Windows instability; database corruption | Channel reliability (Matrix reconnection) |

---

## 6. Community Momentum & Maturity

**Tier 1: High Churn, Rapid Iteration (pre-release / early maturation)**
- **OpenClaw** — Extremely high activity but also high regression rate. Community is vocal and engaged, but maintainer bandwidth is a bottleneck. Not yet production-stable for state-sensitive use cases.
- **ZeroClaw** — Very active with systematic feature delivery (goal mode stack, SOP engine). Security bugs are being found rapidly, indicating active adversarial testing. Moving toward production readiness.
- **CoPaw** — Healthy balance of feature work and bug fixes. v2.0 has regressions but team is responsive (30 PRs merged today). Beta cycle suggests nearing stability.

**Tier 2: Stabilizing After Major Change**
- **IronClaw** — Reborn architecture transition is methodical (epic tracking, QA sprints). First release candidate signals maturity, but compatibility breakage means early adopters face migration costs.
- **NanoBot** — Healthy maintenance cadence with strong fix throughput. Security vulnerabilities (plaintext API keys) addressed promptly. Moderate feature scope but high reliability.
- **PicoClaw** — Stable but slow. One critical bug (Matrix reconnection) undermines channel reliability. Low churn suggests limited team or prioritization of other work.

**Tier 3: Dormant / Inactive**
- **NullClaw, TinyClaw, ZeptoClaw** — No activity in 24 hours. These projects may be abandoned or in extended hibernation.
- **Moltis** — Single Dependabot PR; no community engagement. Effectively maintenance-only.

**Maturity observation:** The ecosystem lacks a clear "stable production" leader. OpenClaw has breadth but reliability gaps; IronClaw promises stability but is post-migration; ZeroClaw and CoPaw are closing in. No project has achieved the combination of feature completeness, security hardening, and platform stability that would satisfy enterprise deployment requirements.

---

## 7. Trend Signals

**Extracted from community feedback and issue patterns, relevant for AI agent developers:**

1. **Security is the top unmet need.** Across OpenClaw (Masked Secrets, #10659), NanoBot (plaintext API keys, #4803), ZeroClaw (delegate allowlist bypass, #8279), and Hermes (immutable skills, #25083), users are demanding default-deny security models, credential isolation, and sandboxed execution. **Developers should prioritize secrets management and prompt-injection resistance** as table-stakes features.

2. **Session state reliability trumps new features.** Database corruption (OpenClaw #101290, Hermes #68474, CoPaw #6299) and session contamination are the most impactful bugs. **Invest in robust state persistence** (atomic writes, migration tests, corruption detection) before adding ambitious new capabilities.

3. **Multi-agent orchestration is still immature.** Subagent tool allowlist bypasses, MCP tool injection failures, and infinite polling loops (CoPaw #4873, ZeroClaw #8279) indicate that the industry hasn't solved hierarchical agent control. **The gap between "single agent works" and "multi-agent works reliably" remains large** — focus on policy inheritance and agent lifecycle management.

4. **Platform-specific pain is high.** macOS SQLite corruption (OpenClaw), Windows state.db zeroing (Hermes), Docker SELinux labels (NanoClaw), and Ollama latency (NanoBot) show that **cross-platform testing is insufficient**. Developers targeting production should conduct rigorous platform-specific QA.

5. **Ecosystem interoperability is demanded.** OpenAI adapter RFC (ZeroClaw #8603), MCP protocol fixes (multiple projects), and Codex integration requests signal that **users want toolchains that compose across providers and ecosystems**. Building for composability rather than lock-in is a competitive advantage.

6. **Cost observability is emerging as a critical need.** Per-model usage logging (OpenClaw #13219), Ollama cache optimization (NanoBot #4867), and Anthropic prompt caching (PicoClaw #3228) indicate that **token cost management is shifting from nice-to-have to must-have** for production deployments.

7. **The gap between experimental and production is narrowing.** Goal-mode autonomy (ZeroClaw, CoPaw), real-time voice channels, and persistent agent identities are moving from RFCs to implementation. **The next 6 months will likely see the first production-grade autonomous agents** as these features stabilize.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI Agent和AI助手开源项目的分析师，我已根据您提供的GitHub数据，为您生成NanoBot项目在2026年7月22日的项目摘要。

---

### 1. 今日概览

今日NanoBot项目活动水平极高，显示出团队正在进行密集的维护和改进工作。项目在24小时内关闭了9个issue并合并了22个pull request，表明问题解决效率很高。核心议题集中在安全加固（如API密钥明文存储）、核心协议合规（工具调用结果修复）、以及对特定提供商兼容性的修复（如Qwen模型思考内容泄露）。社区围绕 Ollama 缓存优化和持续的持续性目标循环等痛点展开了深入讨论，反映出对性能和稳定性有较高需求。

### 2. 发布

无可报告。

### 3. 项目进展

今日合并或关闭了22个PR，主要进展集中在以下领域：

*   **工具调用协议稳固性**: PR #4663 (fix: quarantine invalid tool results) 被合入，解决了工具结果中缺少或重复 `tool_call_id` 的问题，增强了模型-网关边界的协议健壮性。
*   **提供商扩展**: 重量级的 PR #4965 (Feat/modelscope provider support) 被合入，首次将 ModelScope 作为内置模型提供商，为用户访问Qwen、DeepSeek等开源模型提供了新的选择。
*   **安全与配置**: PR #5010 (docs(security): recommend env-var references) 和 PR #4984 (fix(config): write config.json atomically) 被合入，分别强化了API密钥管理和配置文件写入的原子性，防止损坏。
*   **核心修复**: PR #4952 (fix(providers): sanitize UTF-16 surrogates) 解决了emoji等字符引起的编解码问题；PR #4989 (fix(transcription): resolve `${VAR}` env refs) 修复了语音转录API密钥未正确解析的问题； PR #4983 (fix(cron): coerce string schedule/state ms fields) 修复了cron作业调度中的类型错误。
*   **WebUI与用户体验**: PR #5020 (feat(webui): highlight skill references) 增强了WebUI中对`$skillname`的视觉提示，提升了用户交互体验。
*   **文档与日志**: PR #5019 (feat(providers): support Codex fast mode) 增加并文档化了对Codex快速模式的支持；PR #4811 (fix(runner): log suppressed prepare_call exceptions) 改善了调试体验。

### 4. 社区热点

*   **[Issue #4867 - [enhancement] Preserve exact prompt prefix to enable caching in Ollama and others](HKUDS/nanobot Issue #4867)**
    *   **活跃度**: 22条评论，是今日最活跃的议题。
    *   **分析**: 用户反映了与Ollama集成时的严重性能瓶颈（每轮对话增加60秒延迟），根源在于NanoBot添加的额外提示前缀破坏了Ollama的提示缓存机制。这表明社区对本地模型推理有强烈需求，希望项目能更高效地利用现有基础设施。

*   **[Issue #4864 - [bug] Endless loop for <tool_call><function=complete_goal>](HKUDS/nanobot Issue #4864)**
    *   **活跃度**: 1个👍，4条评论。
    *   **分析**: 用户报告了一个导致Agent进入无限循环的严重bug。其根本原因是网关在解析工具调用参数时序列化方式发生了变化（从JSON对象变为纯字符串），导致`complete_goal`工具持续报错。这引发了社区对API向后兼容性的担忧。

### 5. 漏洞与稳定性

今日集中报告并修复了一系列从安全到稳定性的问题，项目组响应迅速，多数已有相应的修复PR。

*   **严重 - 安全漏洞**:
    *   **Issue #4803 (Security: API keys stored as plaintext)**: 严重问题，但已有 **PR #5010** 关闭此问题。该PR通过文档和代码改进，引导用户使用环境变量引用而非明文存储。
    *   **PR #4987 (fix(filesystem): bind workspace checks to opened files)**: 处于开放状态，标记为 `priority: p0`，试图修复文件系统工具中的符号链接遍历漏洞。这是目前最紧急的未关闭安全修复。

*   **高 - 核心功能Bug**:
    *   **Issue #4864 (Endless loop for complete_goal)**: 已定位为网关参数序列化改变导致，目前仍有 **PR #5022 (fix(cmd): add /cancel-goal command)** 和活跃讨论试图解决此问题。
    *   **Issue #4934 (Qwen models expose thinking/reasoning content)**: 使用Qwen模型时，模型内部的推理过程被错误地暴露给用户。当前已有 **PR #5023** 尝试通过模型级思维风格映射来解决。

*   **中 - 资源与稳定性问题**: 今日关闭的一系列由用户 `hamb1y` 提出的bug，包括 `read_file` OOM风险 (**#4785**)、Session消息列表无限增长 (**#4787**)、Exec会话子进程成为孤儿 (**#4794**) 以及捕获 `BaseException` 导致无法正常中断 (**#4788**)。这些问题的快速关闭表明项目团队对基础稳定性和资源管理的重视。

### 6. 功能请求与路线图信号

*   **性能优化方向**:
    *   **Issue #4867 (Ollama缓存)**: 用户强烈要求支持精确的提示词缓存，以解决与Ollama等推理工具集成的性能问题。这可能会驱动缓存策略相关的优化，成为下个小版本的重点。

*   **安全与流程控制**:
    *   **Issue #5013 (Shell执行前需要用户确认)**: 用户请求在执行Shell命令前增加人工确认环节，以降低安全风险。这反映了从个人开发者测试向更大范围部署场景演进时，对安全控制增强的需求。

*   **WebUI可配置性**:
    *   **PR #4399 (feat(webui): add configurable hidden_settings_sections)**: 该PR提议允许管理员隐藏WebUI中的某些设置项，以简化非技术用户的界面。若合入，将显著提升NanoBot在多租户或大众场景下的易用性。

### 7. 用户反馈总结

*   **主要痛点**:
    *   **性能**: 用户对Ollama等关键提供商的支持不佳表示严重不满，直言“完全无法使用”。(Issue #4867)
    *   **稳定性与可预测性**: 持续性目标导致的无限循环 (Issue #4864) 和模型行为异常 (Issue #4934) 是影响用户信任的重大障碍。
    *   **安全顾虑**: 用户对明文存储API密钥 (Issue #4803) 以及Shell命令无确认机制 (Issue #5013) 表示了明确的安全担忧。

*   **满意度体现**:
    *   项目组对问题（尤其是用户 `hamb1y` 报告的核心稳定性问题）的快速响应和关闭，表明了开发团队的高效率，这有助于维护核心贡献者的满意度。新提供商的引入也受到欢迎。

### 8. 积压事项观察

*   **高优先级**:
    *   **PR #4987 (fix(filesystem): bind workspace checks to opened files)**: 标记为 `priority: p0` 的安全修复，目前仍存在冲突(conflict)，需要维护者关注并解决，以避免潜在的严重安全漏洞。

*   **长期开放PR**:
    *   **PR #4399 (feat(webui): add configurable hidden_settings_sections)**: 提案提出于6月18日，已有超过一个月。作为提升WebUI可用性的重要功能，但标记为存在冲突且长时间未推进，可能遇到了设计实现上的困难，需要维护者审视并给出指导意见。
    *   **PR #4594 (fix(exec): extract absolute paths after equals sign in shell guard)**: 同样是一位用户 `axelray-dev` 提出的安全修复（Shell工作区路径绕过），已开放超三周，可能因测试或实现复杂性而被搁置，应给予关注。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-22

## Today’s Overview
On 21 July 2026, the Hermes Agent project showed **very high activity** with 50 issues and 50 pull requests updated in the last 24 hours. Of those, 38 issues remain open/active, 12 were closed, and 48 PRs are still open while 2 were merged or closed (though the merged PRs are not represented in the top‑20 listing). No new releases were published. The volume suggests a major push to address an accumulated backlog of bugs and feature requests, with a notable cluster of **newly filed critical‑priority bugs** across desktop, gateway, worker, and database subsystems. Community engagement remains strong, especially around memory backends, skill protection, and session‑state integrity.

## Releases
**No new releases** were published in the last 24 hours. The latest available version remains v0.19.0 (referenced in issue #68474).

## Project Progress
Two pull requests were merged or closed in the past day, although their details are not included in the top‑20 list. However, several closed issues indicate that fixes have been implemented on the main branch:
- **#27683** – *web_tools.py missing `_ensure_plugins_discovered()`* – closed with `sweeper:implemented-on-main`. Web search, extract, and crawl should now work out‑of‑box.
- **#54675** – *Multiplexed gateway bot‑token bypass* – closed with `sweeper:implemented-on-main`. Per‑profile secret scoping fixed.
- **#28561** – *`start_gateway` stale‑lock verification* – closed, ensuring gateway recovery after crashes.
- **#65677**, **#65673**, **#62212** – MCP stdio handshake and keepalive issues – closed, improving MCP server reliability.

Additionally, many open PRs (e.g., #68917, #68947, #68954) target recently filed bugs and are under review, indicating an active bug‑fix sprint.

## Community Hot Topics
| Issue / PR | Comments | Summary |
|------------|----------|---------|
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | 13 | **Feature: Rename `MEMORY.md` → `rules.md` + configurable memory backends** – proposes removing hardcoded memory files and supporting only `honcho`/`fact_store`. Strong support, needs maintainer decision. |
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | 7 | **Feature: Immutable/protected skills** – users want to lock critical skills from accidental modification by the agent. No maintainer response yet. |
| [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) (closed) | 7 | **MCP: parked server revival does not re‑register tools** – bug affecting MCP reliability. Closed but still discussed. |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) (closed) | 7 | **Web tools silently fail on fresh install** – now fixed on main. Community reported as a blocker. |
| [#34385](https://github.com/NousResearch/hermes-agent/issues/34385) | 5 | **Kanban DB corruption under concurrent access** – open since May, still needs decision. |

The underlying needs are clear: users are asking for **fine‑grained control over agent behaviour and data** (memory backends, skill protection, session management). The MCP and web tooling issues show that reliability of external integrations remains a friction point.

## Bugs & Stability
A large number of **newly reported bugs** were filed on 21 July, several with **P1 (critical) priority**:

| ID | Priority | Description | Fix PR Exists? |
|----|----------|-------------|----------------|
| [#68915](https://github.com/NousResearch/hermes-agent/issues/68915) | **P1** | Worker deadlock when LLM backgrounds a server via `shell &` – orphaned subshell holds stdout pipe. Worker becomes permanently blocked. | Not yet visible |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | **P1** | `state.db` zeroed (95MB null bytes) during desktop update to v0.19.0 on Windows. Pre‑update snapshot was intact. | Not yet visible |
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | **P2** | Desktop/TUI session leases leak – `active_sessions.json` grows, eventually blocking new sessions. | [#68947](https://github.com/NousResearch/hermes-agent/pull/68947) |
| [#68858](https://github.com/NousResearch/hermes-agent/issues/68858) | **P2** | v0.19 in‑place compaction + FTS maintenance saturates disk I/O, can wedge gateway shutdown on large `state.db`. | Not yet visible |
| [#68465](https://github.com/NousResearch/hermes-agent/issues/68465) | **P2** | Telegram gateway stuck at “Connecting to Telegram (attempt 1/8)” on Windows after clean run. | Not yet visible |
| [#68267](https://github.com/NousResearch/hermes-agent/issues/68167) | **P2** | Signal platform SSE stream closes immediately on Windows – JVM HTTP server incompatibility. | Not yet visible |
| [#68693](https://github.com/NousResearch/hermes-agent/issues/68693) | **P2** | Gateway does not exit on fatal Photon adapter error, preventing launchd `KeepAlive` restart. | Not yet visible |
| [#68979](https://github.com/NousResearch/hermes-agent/issues/68979) | **P2** | Desktop long‑thread reconciliation re‑stacks user messages at bottom after compression (rendering only, DB correct). | Not yet visible |
| [#68895](https://github.com/NousResearch/hermes-agent/issues/68895) | **P2** | Orphaned composer queue entries cause permanent error notifications across restarts. | [#68917](https://github.com/NousResearch/hermes-agent/pull/68917) |

Many of these bugs are addressed by open PRs, suggesting that the team is actively working on a hotfix release. The **state.db corruption on update** is especially concerning for Windows users.

## Feature Requests & Roadmap Signals
Several community‑requested features received attention this week:

- **Configurable Memory Backends & `MEMORY.md` rename** ([#47349](https://github.com/NousResearch/hermes-agent/issues/47349)) – highly voted, could land in next minor version if decision is made.
- **Immutable/protected skills** ([#25083](https://github.com/NousResearch/hermes-agent/issues/25083)) – no maintainer action yet, but a related PR [#68956](https://github.com/NousResearch/hermes-agent/pull/68956) adds `<username>` placeholders to built‑in skills, hinting at broader security improvements.
- **Per‑function tool filtering** ([#68964](https://github.com/NousResearch/hermes-agent/issues/68964)) – users want finer granularity than toolset‑level enable/disable.
- **TUI `/compress` type‑ahead** ([#61042](https://github.com/NousResearch/hermes-agent/issues/61042)) – reduces dead time during compression.
- **Searchable timezone dropdown** in Desktop Settings ([#68970](https://github.com/NousResearch/hermes-agent/issues/68970)).
- **Atomic Hermes (mobile) as `send_message` target** ([#68951](https://github.com/NousResearch/hermes-agent/issues/68951)) – would unify cross‑platform messaging.
- **Web search via Ollama** ([#23207](https://github.com/NousResearch/hermes-agent/issues/23207)) – unanswered since May, user wants parity with OpenClaw.

Prediction: **Memory backends** and **immutable skills** are the strongest candidates for the next feature release, while **session lease fixes** and **worker deadlock** will likely be patched in a v0.19.1 hotfix.

## User Feedback Summary
- **Pain points**: Frequent database corruptions (kanban, state.db), session management headaches (lease leaks, orphaned queues), and platform‑specific issues on Windows (update destruction, Telegram/Signal connection failures). The worker deadlock when starting a dev server is a serious productivity blocker for developers using Hermes as a coding assistant.
- **Use cases**: Users are running Hermes as an AI coding copilot, a multi‑platform messaging gateway, and a task‑automation agent. The desire for configurable memory backends indicates a move toward more controlled, privacy‑aware workflows.
- **Satisfaction**: Community remains engaged, filing detailed bug reports and feature requests. However, the volume of critical bugs suggests some frustration with stability, especially after the v0.19.0 update. The rapid issuance of fix PRs is a positive signal.

## Backlog Watch
The following issues and PRs have been open for an extended time without maintainer response or may be stalling:

- **[#34385](https://github.com/NousResearch/hermes-agent/issues/34385)** – *Kanban DB index corruption under concurrent multi‑process access* – open since 29 May, needs decision. A related issue [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) (also open) duplicates the problem under worker load.
- **[#23207](https://github.com/NousResearch/hermes-agent/issues/23207)** – *How to use web search with Ollama* – open since 10 May, no maintainer reply. Basic user question.
- **[#25083](https://github.com/NousResearch/hermes-agent/issues/25083)** – *Immutable/protected skills* – open since 13 May, no official response despite 7 comments and broad interest.
- **[PR #23568](https://github.com/NousResearch/hermes-agent/pull/23568)** – *Fix credential pool priority normalization for round_robin strategy* – open since 11 May, no comments from maintainers. Appears to address a subtle credential rotation bug.

Maintainers should prioritize these older items to prevent community frustration and reduce technical debt.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-22

## 1. Today's Overview

The project saw moderate activity with **8 issues and 8 pull requests updated in the last 24 hours**. Four issues were closed (including one regression and one OAuth block) and four remain open. Three PRs were merged or closed, among them a new policy-gated system execution feature and a compatibility fix. No new releases were cut. The community is actively reporting real-world pain points around OAuth login reliability, Matrix reconnection, and UI responsiveness, while the maintainers continue to address bugs and accept contributions in security, channel integration, and configuration flexibility. Overall, the project shows healthy maintenance with a focus on stability and user-requested improvements.

## 2. Releases

None – no new releases since the last digest.

## 3. Project Progress

Three pull requests were merged or closed today, alongside four issue closures that indicate resolved bugs.

**Merged/Closed PRs:**

- **[PR #3282](https://github.com/sipeed/picoclaw/pull/3282) – feat(nodes): add policy-gated system exec**  
  Adds an opt-in `system.exec.v1` function for the slim node companion, enforcing executable whitelist, working directory, environment, timeouts, and output limits. A security-conscious new capability.

- **[PR #3233](https://github.com/sipeed/picoclaw/pull/3233) – Fix pr 3222 backward compat**  
  Backward-compatibility fix for a previous PR, ensuring existing configurations continue to work after changes.

- **[PR #303](https://github.com/sipeed/picoclaw/pull/303) – fix: make bot greeting name configurable via bot_name setting**  
  Merged after several months – the `/start` greeting in Telegram and DingTalk reply title can now be customized via a `bot_name` config field, respecting user identity set in `soul.md`.

**Closed Issues (resolved):**

- [#3153](https://github.com/sipeed/picoclaw/issues/3153) – Volcengine Doubao tool-call leak  
- [#3232](https://github.com/sipeed/picoclaw/issues/3232) – Rate limiting without fallback models  
- [#3274](https://github.com/sipeed/picoclaw/issues/3274) – Antigravity provider regression (`INVALID_ARGUMENT`)  
- [#3278](https://github.com/sipeed/picoclaw/issues/3278) – Antigravity OAuth blocked by Google policy

These closures indicate swift fixes for provider-specific issues and OAuth compliance.

## 4. Community Hot Topics

The most active discussions and highly-reacted items reflect community priorities around security, reliability, and provider compatibility.

- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) – [Feature] use vodozemac instead of libolm**  
  *9 comments, 2 👍, open since June 9*  
  A high-priority proposal to replace the unmaintained `libolm` with the official `vodozemac` library. The community strongly supports this move for security and long-term maintenance.

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) – [BUG] Matrix sync loop has no reconnection logic**  
  *4 comments, 1 👍*  
  The Matrix long-poll sync permanently dies after any network disruption. This is a critical reliability gap for Matrix users, with no systemd restart trigger because the main process stays alive.

- **[Issue #3278](https://github.com/sipeed/picoclaw/issues/3278) – [BUG] Antigravity OAuth login blocked by Google**  
  *1 comment (but closed same day)*  
  Google’s OAuth policy blocked sign-in. The issue was closed quickly, indicating a fast fix or workaround was deployed.

- **[PR #3279](https://github.com/sipeed/picoclaw/pull/3279) – fix(seahorse): prevent tool-call format leakage into LLM summaries**  
  Open PR addressing a bug class that has appeared through multiple paths. Community attention on preventing raw tool-call metadata from appearing in user-facing output.

## 5. Bugs & Stability

Four new bugs were reported today (including one with a pending fix PR), and several existing bugs remain open. Severity ranking below:

| Issue | Summary | Severity | Fix Status |
|-------|---------|----------|------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop silently dies after network disruption | **Critical** – complete service loss for Matrix users with no auto-recovery | Open, no fix PR yet |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input laggy with long chat history | **High** – degrades core UX, likely scaling issue in front-end rendering | Open, just filed |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | DingTalk chat list preview shows fixed “PicoClaw” instead of reply content | **Medium** – cosmetic but breaks custom bot identity | Open, stale |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | Seahorse tool-call format leakage into LLM summaries | **Medium** – leaks internal format to user | Fix PR open |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao tool calls leak as `<seed:tool_call>` text | **Medium** – similar leak class | Closed (resolved) |

**Regressions noted:**  
- [#3274](https://github.com/sipeed/picoclaw/issues/3274) – Antigravity provider regression on `main` (closed, fixed).  
- [#3278](https://github.com/sipeed/picoclaw/issues/3278) – OAuth compliance issue (closed, fixed).

## 6. Feature Requests & Roadmap Signals

Several feature requests and capability extensions stand out:

- **vodozemac replacement for libolm** ([#3088](https://github.com/sipeed/picoclaw/issues/3088)) – high-priority, security-driven. Likely to land in the next minor release given maintainer acknowledgment and community demand.
- **Configurable default fallback chain** ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200)) – adds a UI to set default model and fallback chain, persists through backend API. This directly addresses the rate-limiting-without-fallback bug (#3232) and improves model redundancy.
- **Policy-gated system exec** ([PR #3282](https://github.com/sipeed/picoclaw/pull/3282)) – just merged, signals a push toward sandboxed agent capabilities.
- **Anthropic prompt caching** ([PR #3228](https://github.com/sipeed/picoclaw/pull/3228)) – open PR to send `SystemParts` as system blocks with `cache_control`, essential for cost optimization with Anthropic.

**Prediction:** The next version (v0.3.2 or v0.4.0) will likely include the vodozemac replacement, the default fallback chain UI, and the OAuth login reliability fixes (PR #3280). The policy-gated exec feature is already in `main`.

## 7. User Feedback Summary

Real user pain points reported today:

- **OAuth login failures on headless/remote setups** – user honbou reported that `picoclaw auth login` fails after consent approval, burning the authorization code. The fix (PR #3280) is open and addresses four separate root causes.
- **Matrix users frustrated by silent disconnection** – the sync loop’s lack of reconnection logic forces manual restart. User weissfl highlighted that systemd `Restart=on-failure` doesn’t help.
- **Web UI lag with long history** – xpader described severe input lag after accumulating chat history, impacting daily use.
- **Tool-call format leaking** – multiple users report raw `<seed:tool_call>` or similar text appearing in responses, breaking the illusion of a clean AI interaction. The seahorse fix (PR #3279) directly targets this.
- **Custom identity ignored** – MrTreasure noted that the DingTalk list preview always shows “PicoClaw” even when the bot is renamed, which undermines custom branding. PR #303 (now merged) addresses this for greeting messages, but the preview remains hardcoded (#3255 open).

Overall sentiment: users appreciate quick fixes for provider issues (Volcengine, Antigravity) but are eager for long-term stability fixes (Matrix reconnection, UI performance) and security upgrades (vodozemac).

## 8. Backlog Watch

Several important open items have gone stale without maintainer response or progress:

- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) – vodozemac replacement** *High priority, stale since June 9, 9 comments, 2 👍*  
  Despite high support, no PR has been submitted. Maintainer attention needed to move this forward.

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) – Matrix reconnection** *Stale since July 2, 4 comments*  
  A critical reliability bug with no known workaround. No PR or assignee.

- **[Issue #3255](https://github.com/sipeed/picoclaw/issues/3255) – DingTalk preview hardcoded** *Stale since July 14, 1 comment*  
  A straightforward fix (likely similar to PR #303) waiting for implementation.

- **[PR #3228](https://github.com/sipeed/picoclaw/pull/3228) – Anthropic system parts/cache_control** *Stale since July 6*  
  No comments, no maintainer review. This PR enables prompt caching for Anthropic users, a significant cost-saving feature.

- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200) – Default fallback chain UI** *Stale since July 1*  
  A UX improvement that directly relates to the rate-limiting bug (#3232) which has been closed – but the PR itself remains open and unreviewed.

**Action items for maintainers:**  
- Respond to or merge #3088 (vodozemac) with guidance on implementation priority.  
- Review PRs #3228 and #3200 to avoid feature decay.  
- Assign someone to #3203 (Matrix reconnection) as it affects a core channel.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-22

## Today’s Overview
NanoClaw saw moderate activity in the past 24 hours, with 12 pull requests updated and 1 new issue opened. Three PRs were merged or closed, including a Langfuse tracing skill integration and a branch maintenance guide rewrite. The project remains release‑stable (no new versions today), and the community is actively contributing small fixes and documentation improvements. Open PR volume is healthy at 9, covering infrastructure, channel support, and bug fixes. The only issue filed is a feature request for LINE channel support, indicating ongoing interest in expanding communication adapters.

## Releases
*None.* No new releases were published today.

## Project Progress
Three pull requests were closed/merged in the last 24 hours:

- **#3116 [CLOSED]** – Sync PR (routine branch sync).  
- **#3114 [CLOSED]** – [Langfuse tracing skill](https://github.com/nanocoai/nanoclaw/pull/3114). Adds integration for Langfuse observability, enabling trace logging of agent interactions.  
- **#3095 [CLOSED]** – [Branch maintenance guide rewrite](https://github.com/nanocoai/nanoclaw/pull/3095). Documents the registry‑branch model for contributors, improving onboarding clarity.

Several open PRs were actively iterated, notably fixes for WhatsApp media handling (#3113, #2896), Gmail API route blocking (#3115), and Telegram Markdown URL protection (#3111).

## Community Hot Topics
The only issue created in the window is gaining traction:

- **[#3096: `feat: Add /add-line skill for LINE Official Account channel support`](https://github.com/nanocoai/nanoclaw/issues/3096)** (3 comments, created 2026‑07‑20)  
  Proposes adding LINE as a supported messenger, citing its dominance in Japan, Taiwan, and Thailand. The author followed the RFS (Request for Skills) process from the README. The thread is discussing whether a new `@chat-adapter/line` package is needed or if the existing channel model can be reused. This is the most actively discussed open item.

No other issues or PRs have notable reaction counts or comment threads this day.

## Bugs & Stability
Several bug‑fix PRs were updated, indicating ongoing stability work:

**High severity**  
- **[#3111 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/3111) – Telegram legacy‑Markdown delimiter stripping**  
  Bare URLs containing underscores (e.g., GitLab `/-/merge_requests/`) cause Telegram’s parser to fail silently, permanently dropping messages. Author provides a delimiter‑protection fix. No workaround documented yet.

**Medium severity**  
- **[#3113 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/3113) – WhatsApp inbound media not accessible inside container**  
  Media downloaded by the WhatsApp adapter is placed where the container cannot read it. PR stages it into a shared volume.

- **[#3115 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/3115) – Legacy Gmail API routes not blocked**  
  Gmail policies written against `gmail.googleapis.com` can be bypassed via legacy `www.googleapis.com` paths. PR adds global OneCLI blocks for those routes.

**Lower severity / long‑standing**  
- **[#1530 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/1530) – SELinux `:z` label missing on Docker volume mounts**  
  Affects Fedora/RHEL hosts; causes `permission denied` errors. Fix is trivial and safe. Opened March 2026, still unmerged.

- **[#2236 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/2236) – Container WORKDIR misaligned with mount path**  
  `WORKDIR` set to `/workspace/group` but agent group folder mounts at `/workspace/agent`. Leaves agents unable to find their workspace.

- **[#2896 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/2896) – WhatsApp media‑failure note regression**  
  Follow‑up to merged PR #2895; approval‑answer path erroneously applies failure note before pending‑question handler, causing a regression. Fix in progress.

## Feature Requests & Roadmap Signals
Two PRs and one issue signal upcoming feature directions:

- **LINE channel** – [#3096 (issue)](https://github.com/nanocoai/nanoclaw/issues/3096) requests a `/add-line` skill. Likely to be adopted if community interest continues; no PR exists yet.
- **Dial channel** – [#3050 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/3050) adds Dial to the channel picker, including wizard and `runChannelSkill` model. This is a fully prepared feature PR, strong candidate for the next release.
- **Traditional Chinese README** – [#2950 [OPEN]](https://github.com/nanocoai/nanoclaw/pull/2950) adds `README_zh-TW.md`, improving accessibility for Taiwanese users.

## User Feedback Summary
Real pain points surfaced in today’s data:

- **Platform compatibility issues**  
  SELinux (`:z` label, #1530), Postgres port collision during OneCLI setup (documented in #3112), and container path mismatches (#2236) all frustrate users on non‑default Linux distributions.
- **Messaging channel gaps**  
  LINE support is explicitly requested; Telegram URL handling is broken for common GitLab links (#3111).
- **Deployment friction**  
  The WhatsApp adapter’s media staging (#3113) and legacy Gmail API bypass (#3115) show that new integrations still have rough edges for production use.
- **Positive signals**  
  The Langfuse tracing skill (#3114 merged) and Dial channel PR (#3050) indicate that contributors are actively expanding observability and channel options, which should improve developer experience.

## Backlog Watch
Two open PRs have been awaiting maintainer attention for months:

- **[#1530 – SELinux `:z` label](https://github.com/nanocoai/nanoclaw/pull/1530)** (opened 2026‑03‑29)  
  A self‑contained, low‑risk fix for a common deployment issue on Fedora/RHEL. No maintainer comment or merge activity in nearly four months despite being updated yesterday.

- **[#2236 – Container WORKDIR misalignment](https://github.com/nanocoai/nanoclaw/pull/2236)** (opened 2026‑05‑03)  
  Similarly simple fix (changing `WORKDIR` from `/workspace/group` to `/workspace/agent`). Updated yesterday but no merge decision.

These items should be reviewed for merge or closure to reduce contributor friction.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-22

## 1. Today's Overview

The project remains highly active with **44 issues** and **50 pull requests** updated in the last 24 hours. Of those, **14 issues were closed** (including several milestone epics) and **16 PRs were merged or closed**. Momentum is concentrated on the **Reborn architecture transition**: the first release candidate (`ironclaw-v1.0.0-rc.1`) shipped on July 20, and work continues to consolidate store implementations, migrate product surfaces, and harden error-recoverability. The community is engaged in both architectural tracking (epics) and operational quality (dogfooding QA sprints). Overall, the project is in a healthy churn state — heavy on refactoring and stability, with measured progress toward the v1.0.0 release.

---

## 2. Releases

- **`ironclaw-v1.0.0-rc.1`** (2026-07-20)  
  First release candidate of the rearchitected IronClaw. This is **not** an increment on the 0.29.x line — it is a ground‑up rebuild of the agent runtime, storage, extension host, and Web UI. The `ironclaw` binary now builds the rearchitected CLI monolith.  
  _Migration note_: Because this is a complete rewrite, existing 0.29.x configurations, extensions, and data stores are not compatible. Operators should expect to redeploy from fresh state. The Reborn epic tracking issue ([#2987](https://github.com/nearai/ironclaw/issues/2987)) contains a landing plan for the transition.  
  _Breaking changes_: All crate interfaces are new; no backward compatibility is promised until an eventual stable release.

---

## 3. Project Progress

**Merged/closed PRs (16 today):**  
- [#6432](https://github.com/nearai/ironclaw/pull/6432) — **feat(reborn): witness always-present + origin→gate matrix + dispatch-through-witness**. Partial implementation of #6396, completing the witness-always-present and origin→gate matrix portions.  
- [#6430](https://github.com/nearai/ironclaw/pull/6430) — **Remove in-memory ratchet stores**. Migrates durable cases onto filesystem-backed stores (e.g., `FilesystemSubagentGoalStore`).  
- [#6196](https://github.com/nearai/ironclaw/pull/6196) — Dependency bump: `dompurify` 3.2.3 → 3.4.11.  

**Closed issues (14 today):**  
Major milestones closed:  
- [#6263](https://github.com/nearai/ironclaw/issues/6263) — §4.3 final store consolidation: retire `InMemoryTurnStateStore` (10 comments).  
- [#2767](https://github.com/nearai/ironclaw/issues/2767) — Epic: Separate engine v2 capability background from callable tool schemas (7 comments).  
- [#3026](https://github.com/nearai/ironclaw/issues/3026) — Epic: Reborn production wiring and cutover readiness (3 comments).  
- [#4533](https://github.com/nearai/ironclaw/issues/4533) — Epic: Reborn operator setup, config, diagnostics, and service lifecycle (1 comment).  
- [#5261](https://github.com/nearai/ironclaw/issues/5261) — [EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth.  
- [#6396](https://github.com/nearai/ironclaw/issues/6396) — Follow‑up on witness always-present and dispatch-routes-through-witness (closed by #6432).  
- [#4597](https://github.com/nearai/ironclaw/issues/4597) — Logs query, tail, and follow API with redaction and CLI wrapper.  
- [#4596](https://github.com/nearai/ironclaw/issues/4596) — Operator doctor diagnostics and thin CLI wrapper.  

Features that advanced:  
- Unified runtime store graph selection ([#6442](https://github.com/nearai/ironclaw/pull/6442), open).  
- Reborn product surface boundary abstraction ([#6441](https://github.com/nearai/ironclaw/pull/6441), open).  
- Sole-witness dispatch input with HIGH review fixes ([#6436](https://github.com/nearai/ironclaw/pull/6436), open).  
- Model-visible failure recoverability for capabilities, sandbox, WASM ([#6437](https://github.com/nearai/ironclaw/pull/6437), open).  
- Replay all harvested QA traces with `Emulate.dev` ([#6439](https://github.com/nearai/ironclaw/pull/6439), open).  

---

## 4. Community Hot Topics

The most active discussions revolve around the **Reborn architecture migration**. The top issues by comment count:

- [#2987](https://github.com/nearai/ironclaw/issues/2987) — **[EPIC] Track Reborn architecture landing strategy and grouped PR plan** (44 comments, open since April 27). The central coordination issue for the entire rewrite. Users and contributors are tracking progress and debating merge ordering.  
- [#6263](https://github.com/nearai/ironclaw/issues/6263) — **§4.3 final store consolidation: retire InMemoryTurnStateStore** (10 comments, now closed). High engagement on the necessity of removing in‑memory stores for durability.  
- [#6389](https://github.com/nearai/ironclaw/issues/6389) — **Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped into one build_runtime(cfg)** (10 comments). Architecture simplification that resonates with reviewer concerns about duplication.  
- [#2767](https://github.com/nearai/ironclaw/issues/2767) — **Epic: Separate engine v2 capability background from callable tool schemas** (7 comments, closed). Addressed a long-standing coupling issue.  
- [#3036](https://github.com/nearai/ironclaw/issues/3036) — **[EPIC] Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses** (7 comments, 1 👍). Operators express demand for declarative setup.  
- [#3031](https://github.com/nearai/ironclaw/issues/3031) — **[EPIC] Reborn product surface migration** (7 comments). User‑facing migration tracking.  

Pull requests with notable activity (comments undefined, but inferred by size and updates):  
- [#6436](https://github.com/nearai/ironclaw/pull/6436) (XL, sole-witness dispatch) and [#6437](https://github.com/nearai/ironclaw/pull/6437) (XL, model-visible failures) received extensive review.  
- [#5503](https://github.com/nearai/ironclaw/pull/5503) — **[Experiment] Add compact Google extension capabilities** (open since July 1, still in review).  

**Underlying needs**: Contributors are demanding architectural clarity (single runtime builder, simplified policy dispatch) while operators want configurable, observable deployments. The conversation in [#2987](https://github.com/nearai/ironclaw/issues/2987) shows careful orchestration to avoid one massive PR merge.

---

## 5. Bugs & Stability

**New bug reports and stability epics:**

- [#6394](https://github.com/nearai/ironclaw/issues/6394) — **[Epic] Dogfooding & QA bug fixing 07/20–07/24** (open, 0 comments). A targeted sprint to catch regressions after the v1.0.0‑rc.1 release. Likely to produce many child issues.  
- [#6284](https://github.com/nearai/ironclaw/issues/6284) — **[EPIC] error-recoverability endgame — the model recovers from 100% of the errors it sees** (open). High severity: every mid‑run error must be recoverable.  
- [#6369](https://github.com/nearai/ironclaw/issues/6369) — **Tier B follow-up: gaps left by v1 (src/) retirement** (open, 3 comments). Gaps include missing tool coverage, legacy command compatibility, and CI configuration.  

**Fix PRs in flight:**  
- [#6437](https://github.com/nearai/ironclaw/pull/6437) explicitly addresses making model-visible failures recoverable — closes part of [#6284](https://github.com/nearai/ironclaw/issues/6284).  
- [#6425](https://github.com/nearai/ironclaw/pull/6425) fixes WebUI SSE streams restarting across navigation — a high‑visibility regression.  

**Dependency security fixes:**  
- [#6440](https://github.com/nearai/ironclaw/pull/6440) bumps `dompurify` from 3.2.3 to 3.4.12 (security advisory).  

No critical crashes reported in the last 24 hours, but the dogfooding epic suggests the team expects to find regressions.

---

## 6. Feature Requests & Roadmap Signals

**User‑requested features (new this week):**  
- [#6433](https://github.com/nearai/ironclaw/issues/6433) — **Dedicated custom instructions / master prompt section** (open, 0 comments). User requests a UI panel for persistent instructions similar to ChatGPT/Claude. Likely to be prioritized post‑v1.0.0.  
- [#4543](https://github.com/nearai/ironclaw/issues/4543) — **[EPIC] Runtime service profiles for credentialed generic HTTP and skill-declared service requirements** (open). Essential for allowing users to configure credentials for third‑party APIs.  
- [#4545](https://github.com/nearai/ironclaw/issues/4545) — **[EPIC][Reborn] Self-serve secret setup and grants for user-generated tools** (open). Required for user‑generated capabilities to access secrets.  

**Roadmap signals from epics:**  
- [#2355](https://github.com/nearai/ironclaw/issues/2355) — **Epic: persistent multi-identity agent browsing via Chrome + CDP** (open since April 12). Planning for built‑in browser automation.  
- [#2392](https://github.com/nearai/ironclaw/issues/2392) — **Host-level multi-account support for all messaging channels** (open). Channel multi‑tenancy.  
- [#3484](https://github.com/nearai/ironclaw/issues/3484) — **[EPIC] Reborn Contributor Runway** — enabling parallel porting of skills/tools/channels.  

*Prediction for next version (v1.0.0-rc.2 or stable):* Expect the **error-recoverability endgame** ([#6284](https://github.com/nearai/ironclaw/issues/6284)) to be substantially completed. The **custom instructions UI** may be a fast‑follow feature given user demand. **Credential injection** ([#4543](https://github.com/nearai/ironclaw/issues/4543)) is likely to land for the Reborn binary.

---

## 7. User Feedback Summary

Direct user feedback is limited in today’s data, but several signals indicate pain points:

- **Custom instructions / master prompt** ([#6433](https://github.com/nearai/ironclaw/issues/6433)): A user explicitly compares IronClaw unfavorably to ChatGPT and Claude, asking for a dedicated UI section. This reflects a common expectation for personalization.
- **Dogfooding sprint** ([#6394](https://github.com/nearai/ironclaw/issues/6394)): The team is actively seeking regressions, implying that the v1.0.0‑rc.1 release may introduce friction for early adopters.
- **Operator setup and config** (epics [#4533](https://github.com/nearai/ironclaw/issues/4533), [#3036](https://github.com/nearai/ironclaw/issues/3036)): Multiple epics targeting operator experience suggest that self‑service and observability are lacking.
- **Recoverability** ([#6284](https://github.com/nearai/ironclaw/issues/6284)): The explicit goal that the model must recover from 100% of errors indicates that users currently encounter opaque failures.

Overall, user satisfaction appears tempered by the churn of the Reborn transition, but the active development of operator tools and error handling shows responsiveness.

---

## 8. Backlog Watch

Issues and PRs that are open, important, and have not seen maintainer action in recent weeks:

- [#2987](https://github.com/nearai/ironclaw/issues/2987) — **Track Reborn architecture landing strategy** (open 86 days, 44 comments, no assignee). While actively discussed, it remains the highest‑level epic. Maintainers should ensure it is regularly updated with landing status.  
- [#3036](https://github.com/nearai/ironclaw/issues/3036) — **Configuration-as-Code Epic** (open 85 days, 7 comments, 1 👍). No recent commits linked; may be deprioritized behind the core architecture.  
- [#2599](https://github.com/nearai/ironclaw/issues/2599) — **Enforce gateway

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-22

**Project Health:** 🟢 Active — 10 pull requests updated in the last 24 hours, with 5 merged/closed. One open issue remains under investigation.

---

## 1. Today's Overview

LobsterAI saw a burst of development activity on 2026-07-21, with 10 PRs updated and 5 merged within the same day. The team focused on two major areas: **image attachment synchronization** with model vision capability (PR #2373 directly addresses the only open bug) and **artifact sharing/subscription** workflow improvements. Three long‑standing dependency‑update PRs (#1279, #1280, #1281) remain open but stale. No new releases were published. Overall, the project is in a healthy state with quick bug‑fix turnaround and active feature polish.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Project Progress

Five pull requests were merged or closed today, all targeting user‑experience and stability:

- **#2368 — [CLOSED] Silent Windows updates**  
  *Author: fisherdaddy*  
  Implements silent installation of Windows updates via NSIS `/S` flag, with proper error handling for UAC cancellations and automatic app relaunch.  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2368)

- **#2369 — [CLOSED] Optimize artifact sharing access flow**  
  *Author: liugang519*  
  Distinguishes between artifact share creation and management states, adds explicit “Create Share” / “Update Access” buttons, and refines local deployment permission logic.  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2369)

- **#2370 — [CLOSED] Unify subscription‑intercept dialogs for sharing & deployment**  
  *Author: liugang519*  
  Adds a reusable subscription‑gate component for artifact sharing and local service deployment, with differentiated messages for login vs. subscription requirements.  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2370)

- **#2371 — [CLOSED] Improve browser annotation sync with conversation state**  
  *Author: liugang519*  
  Supports annotations without comments, shows element‑style changes in prompts, clears draft annotations on webview session stop, and preserves screenshot metadata.  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2371)

- **#2372 — [CLOSED] Fix OpenClaw token proxy SSE truncation**  
  *Author: fisherdaddy*  
  Resolves a truncation issue in Server‑Sent Events over the OpenClaw token proxy.  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2372)

---

## 4. Community Hot Topics

- **Issue #1861 — Image attachment not re‑processed on model switch**  
  *Status: OPEN*, *2 comments*  
  The most active issue today reports a critical UX problem: when users switch between visual and non‑visual models, attached images retain their old representation (base64 or file path) instead of adapting to the new model’s capabilities. This leads to broken image‑based conversations. A fix PR (#2373) was opened on the same day.  
  [Link](https://github.com/netease-youdao/LobsterAI/issues/1861)

- **PR #2374 — Permanent sidebar ad‑banner toggle**  
  *Status: OPEN*, *no comments yet*  
  Adds a user‑facing setting to permanently hide the sidebar ad banner, addressing long‑standing frustration (#2342). This is a direct response to user feedback requesting more control over UI clutter.  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2374)

---

## 5. Bugs & Stability

| Severity | Bug Description | Fix Status |
|----------|----------------|------------|
| 🔴 High | **Image attachments not re‑processed when switching between vision/non‑vision models** (Issue #1861). User submits stale base64 or missing file data, causing models to lose image context. | **PR #2373 opened** to keep attachments in sync with model capability. |
| 🟡 Medium | **SSE truncation in OpenClaw token proxy** (PR #2372). Network data stream could be cut off. | **Merged in #2372**. |
| 🟢 Low | **Artifact share permission dialog auto‑created on open** (PR #2369). Users saw unintended shares. | **Merged in #2369**, now requires explicit action. |

No regressions or crashes were reported in the last 24 hours. The most impactful bug (#1861) has an open fix.

---

## 6. Feature Requests & Roadmap Signals

- **Permanent ad‑banner hide** (PR #2374) — Strong community demand (issue #2342). Likely included in the next minor release given the completed PR.
- **Silent Windows updates** (PR #2368) — Improves upgrade experience for desktop users; merged, so already in development branch.
- **Artifact sharing/subscription gating** (PRs #2369, #2370) — Monetisation layer for collaborative features, likely part of a broader “Artifacts” roadmap.
- **Browser annotation enhancements** (PR #2371) — Better element‑style tracking and session cleanup, pointing toward deeper web‑page collaboration support.

Based on the activity rhythm, the next release (v0.x or v1.x) will likely include these four merged PRs and the image‑sync fix from #2373.

---

## 7. User Feedback Summary

- **Pain point – image attachment inconsistency**: Users repeatedly encounter broken image context when switching models (Issue #1861). This is the top complaint right now, but a fix is in review.
- **Pain point – no way to permanently dismiss ad banners**: Reported in Issue #2342, addressed by PR #2374. Users clearly want UI control.
- **Positive signals**: The silent update feature and streamlined sharing flow received no negative feedback; the team’s quick turnaround on bug #1861 demonstrates active maintenance.

No explicit satisfaction/dissatisfaction metrics are available, but the volume of merged PRs (5 in a day) suggests a healthy development pace that users appreciate.

---

## 8. Backlog Watch

The following pull requests have been open and **stale for over 3 months** with no maintainer activity:

- **#1279 — `chore(deps-dev): bump cross-env from 7.0.3 to 10.1.0`**  
  *Last updated: 2026-04-02*  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/1279)

- **#1280 — `chore(deps): bump react-dom from 18.3.1 to 19.2.4`**  
  *Last updated: 2026-04-02*  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/1280)

- **#1281 — `chore(deps-dev): bump vite from 5.4.21 to 8.0.9`**  
  *Last updated: 2026-04-02*  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/1281)

These are automated dependency bumps that may require manual intervention or conflict resolution. If left unaddressed, the project risks accumulating technical debt and may miss security patches. The maintainers should review and merge or close them soon.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-22

## 1. Today's Overview
Moltis experienced a quiet development day with no new issues or releases and only one pull request updated in the last 24 hours. The sole activity was a routine dependency update for the project's documentation site, raised by Dependabot. No community engagement (comments, reactions) was recorded on any item, indicating a low-activity period with no ongoing discussions or critical work. Overall project health appears stable, though the lack of new contributions may suggest a temporary lull or a focus on internal work not reflected in GitHub.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
- **No merged or closed pull requests** were recorded today.  
- The only open PR is #1161, a dependencies bump for the documentation site. It has not been merged yet and has received no comments or reviews.

## 4. Community Hot Topics
Only one pull request was updated in the last 24 hours, but it has no comments or reactions, so it does not qualify as a “hot topic.” No issues were active. Community discussion is currently absent.

- **PR #1161** (open, no comments) – *chore(deps): bump astro from 7.0.9 to 7.1.3 in /docs*  
  [GitHub Link](https://github.com/moltis-org/moltis/pull/1161)

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. There are no open issues or fix PRs related to stability.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted or discussed today. Without user-submitted ideas or maintainer signals, predicting the next version’s features is not possible.

## 7. User Feedback Summary
No user feedback (comments, reactions, or issue reports) was recorded in the last 24 hours. There are no expressed pain points, use cases, or satisfaction/dissatisfaction signals to report.

## 8. Backlog Watch
No long-unanswered issues or pull requests were identified. The only open item (#1161) was created yesterday and is a routine Dependabot update that typically requires minimal maintainer intervention. No items require urgent attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-22

## 1. Today’s Overview

CoPaw remains highly active with **41 issues** and **50 pull requests** updated in the last 24 hours, of which **30 PRs were merged or closed** and **1 new release** was cut. The project continues to ship frequent quality-of-life fixes and feature work, with notable attention to governance, tool registration, and runtime stability. Community engagement is strong, with the pinned help-wanted board (#2291) drawing sustained participation. However, a number of regressions in the 2.0 series (session contamination, 2s overhead, repeated tool outputs) are generating recurring bug reports, indicating that the migration from v1.x to v2.0 is still rough for some deployment patterns.

---

## 2. Releases

**v2.0.1‑beta.1** — released today  
[Release v2.0.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.1)

- **Fixes**:
  - Uses absolute import in Tauri entry point to avoid module resolution errors on Windows.
  - Catches `OSError` in memory space `_saved_tool_refs` to prevent crashes when the file system is unavailable or permissions are restrictive.
- **Chores**: Version bump to `2.0.1b1`.
- **Breaking changes**: None reported.
- **Migration notes**: The fix for absolute imports may affect custom Tauri builds; users are advised to rebase on the new entry point. Memory‑space error handling is backward‑compatible.

---

## 3. Project Progress

Key PRs that were merged or closed today include:

- **Governance & Tool Management**  
  - [#6313](https://github.com/agentscope-ai/QwenPaw/pull/6313) – Refresh plugin tool defaults and validate `tool_type`; warm caches off‑loop.  
  - [#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190) – Auto‑register tools via `@tool_descriptor` and `PluginApi`, unifying built‑in and plugin tool metadata.  
  - [#6079](https://github.com/agentscope-ai/QwenPaw/pull/6079) – Ask user for permission before executing `sudo` commands.

- **Workflows & Modes**  
  - [#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882) – Integrated OMP workflow modes (UltraQA, Ralph, Ultrawork, Autopilot, Team) and extended `spawn_subagent` with tool/skills whitelisting.  
  - [#6270](https://github.com/agentscope-ai/QwenPaw/pull/6270) – Support for user‑editable agent mode configuration.  
  - [#6310](https://github.com/agentscope-ai/QwenPaw/pull/6310) – Fix for reasoning‑block rotation in goal/loop mode so text messages are not merged into a single output block.

- **Config & UI**  
  - [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) – One‑click copy of agent configuration (backend `POST /agents/copy`).  
  - [#6183](https://github.com/agentscope-ai/QwenPaw/pull/6183) – Made log rotation limits (`QWENPAW_LOG_MAX_SIZE`, `QWENPAW_LOG_MAX_BACKUPS`) configurable.

- **Governance Policy**  
  - [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) – Initial governance & sandbox interface discussion.  
  - [#5546](https://github.com/agentscope-ai/QwenPaw/pull/5546) – Generalised governance policy pattern.

These merges represent steady progress in hardening the framework’s extensibility and security model, while also improving the user experience for agent and tool configuration.

---

## 4. Community Hot Topics

- **Help-Wanted Board** – [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) (65 comments) remains the most active discussion, with maintainers and contributors coordinating on open tasks from P0 to P2. Many new contributors are claiming items, and the thread serves as the primary entry point for community involvement.

- **Identical Thinking in Multi‑Tool Calls** – [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) (13 comments) describes a bug where all tool calls in a single turn share the same “thinking” block. Users report reduced reasoning diversity and increased token waste. No fix PR has been linked yet.

- **Subagent Infinite Polling** – [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) (5 comments) reports that starting two background subagents simultaneously causes the main agent to enter an infinite loop of `check_agent_task` calls. The issue also notes that Feishu‑channel interruption does not work. This was closed today, presumably fixed by a governance or workflow change (possibly #5882 or #6273).

- **Session Corruption After Deletion** – [#6299](https://github.com/agentscope-ai/QwenPaw/issues/6299) (3 comments) documents cross‑session contamination and empty pages after deleting historical sessions. The root cause is a global auto‑increment sequence in `conversation_history` that is not cleaned up on deletion. A fix is in progress through PR [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) (session‑ID preservation during migration).

- **Drag‑Drop Upload** – [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) (4 comments) requests drag‑and‑drop support for images, PDFs, Office documents, and other common formats. This has become a recurring ask for contract‑review and document‑centric workflows.

- **Mobile Console** – [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) (4 comments) requests mobile‑friendly Web UI. The trend of mobile‑access requests is growing, and a responsive frontend could become a priority.

---

## 5. Bugs & Stability

Bugs reported today, ranked by estimated severity:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#6299](https://github.com/agentscope-ai/QwenPaw/issues/6299) | Deleted session records persist in `history.db`, causing seq collisions and cross‑session context contamination. Leads to empty pages and CPU‑saturation on refresh. | [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) (in review) |
| **High** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 introduces ~2s fixed overhead per reply compared to v1.x, independent of model latency. Affects every simple conversational turn. | None yet |
| **High** | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | Multiple tool calls in a single turn produce identical thinking text instead of independent reasoning. | No |
| **High** | [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | Frequent dialogue progress loss and infinite loops in v2.0, even without context compression. | No |
| **Medium** | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError: peer closed connection without sending complete message body`. CoPaw actively closes the connection to the LLM provider. | No |
| **Medium** | [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | Debug logs in `model_factory.py` erroneously use `WARNING` level, causing log spam. | No (closed as resolved?) |
| **Medium** | [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | Naive UTC session timestamps are treated as local time, causing timezone mis‑alignment. | [#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) (in review) |
| **Low** | [#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320) | LaTeX rendering broken when formulas contain square‑roots (v2.0.0.post3). | No |

The cluster of regressions in v2.0 (session corruption, performance overhead, repeated outputs, tool‑call duplication) suggests that the architecture changes in the request pipeline or memory system still need hardening. The session‑ID fix (#6068) and the staged compaction PR (#6323) are promising steps.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Release | Notes |
|---------|-------|----------------------------|-------|
| Per‑conversation model selection | [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | **High** – Already drafted in PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) (under review) | Would allow users to pick different LLMs per chat without changing agent defaults. |
| Drag‑and‑drop file upload | [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | Medium – No PR yet, but demand is growing | Highly requested for contract review and document processing. |
| Mobile‑friendly Web Console | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Medium – A responsive frontend is

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-22

## 1. Today’s Overview

ZeroClaw saw very high activity over the past 24 hours: **50 issues** and **50 pull requests** were updated, with 2 issues closed and 9 PRs merged/closed. No new releases were published. The project remains intensely focused on architectural improvements—especially the **goal mode** feature stack—while **two severity-S0 security bugs** were reported, indicating sustained community stress-testing. The high volume of open PRs (41) and active issues (48) suggests a dynamic development pace but also a risk of contributor fatigue if review bandwidth does not keep pace.

## 2. Releases

No new releases this period.

## 3. Project Progress (Merged/Closed)

Nine PRs were merged or closed in the last 24 hours, including several that advance stability and observability:

- **#8756** – [fix(tests): make media marker assertions portable on Windows](https://github.com/zeroclaw-labs/zeroclaw/pull/8756) (merged)  
- **#9011** – [feat(zerocode): show active runtime context in dashboard](https://github.com/zeroclaw-labs/zeroclaw/pull/9011) (merged) – Improves the ZeroCode UI by displaying connected daemon, config, and workspace.  
- **#9055** – [fix(docs): make translation refresh reproducible](https://github.com/zeroclaw-labs/zeroclaw/pull/9055) (merged) – Ensures doc builds are deterministic.  
- **#9120** – [Bug: SOP routing evaluates switch after a false top-level when](https://github.com/zeroclaw-labs/zeroclaw/issues/9120) (closed) – A SOP routing bug was fixed.  
- **#7082** – [feat(channel/mattermost): add optional WebSocket listener mode](https://github.com/zeroclaw-labs/zeroclaw/issues/7082) (closed) – Mattermost WebSocket support landed.

Several large feature branches remain open but received significant updates:

- Goal mode PRs **#8687**–**#8689**, **#8746**, **#8996** all advanced. These implement goal controller/verifier, trusted goal tools, channel goal admission, self-resume prevention, and daemon-reload persistence.  
- Eval harness PRs **#9244** (memory seeding), **#9245** (judge calibration tooling), and **#9248** (run-history receipts) were opened, indicating growing investment in evaluation infrastructure.

## 4. Community Hot Topics

The most active discussions center on **security, configuration, and new runtime paradigms**:

| Issue | Comments | Topic |
|-------|----------|-------|
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | 6 | Typed per-agent git identity for built-in git operations |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | 6 | **Telegram channel cannot be configured** (S1 blocker) |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 4, 👍1 | **RFC: Goal mode for bounded autonomous sessions** |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 4 | RFC: OpenAI Chat Completions compatibility adapter |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 3 | **S0: delegate bypasses parent’s tool allowlist** |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | 3, 👍1 | Easy per-chat model switching for multi-model providers |

**Analysis**: The community is strongly pushing for **multi-tenancy and identity isolation** (#8226), **reliable channel configuration** (#8505), and a **structured autonomous session model** (#8303). The delegate security bypass (#8279) has drawn urgent attention. The OpenAI adapter RFC (#8603) signals demand for ecosystem interoperability.

## 5. Bugs & Stability

Two **severity S0 (data loss / security risk)** bugs were reported today:

- **#8279** – [delegate bypasses parent’s tool allowlist](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) – Sub-agents can invoke tools the parent policy excludes. No fix PR exists yet.  
- **#9247** – [Shell tool workspace boundary bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) – Symlinks inside workspace allow shell commands to escape. New today; no fix PR.

Other notable bugs by severity:

- **S1** – [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) Telegram channel configuration broken (workflow blocked).  
- **S2** – [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP/tool-schema cloning drives unbounded RSS growth (memory leak, in progress).  
- **S2** – [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) Zombie processes from stdio-based MCP servers (in progress).  
- **S2** – [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) `zeroclaw config init` ships a broken config template that disables local_whisper (in progress).  
- **S2** – [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) Compatible provider silently deletes content via `thinking` tag stripping (in progress).  
- **S2** – [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) `save_dirty` silently drops writes when map key contains a dot (new today).  

Fix PRs exist for some issues: #8838 (SSE streaming idle guard), #9070 (Anthropic tool_use flush), #9180 (QQ msg_id propagation). No fix PRs yet for the S0 bugs.

## 6. Feature Requests & Roadmap Signals

Several RFCs and enhancement requests point toward the next major release:

- **Goal mode** (RFC [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) – Likely to land soon given the extensive PR stack (#8687–#8689, #8746, #8996).  
- **OpenAI Chat Completions adapter** (RFC [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) – High demand for ecosystem compatibility.  
- **Mixture-of-Agents virtual provider** (RFC [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)) – Advanced multi-model orchestration.  
- **Realtime speech-to-speech channel for Gemini Live** (RFC [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) – Cutting-edge multimodal feature.  
- **SkillForge wiring** ([#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)) – Orphaned feature needs decision: finish or remove.  
- **SOP control plane tracker** ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)) – Roadmap epic for 13 capabilities.  
- **Preserve Todo tracker configuration during ZeroCode ownership migration** (RFC [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)) – New today; addresses config migration pain.

**Prediction**: The next minor release (v0.9.x) will likely ship **goal mode** and the **OpenAI compatibility adapter**, along with fixes for the S0 security bugs.

## 7. User Feedback Summary

Real user pain points expressed this period:

- **Configuration friction**: Multiple users report broken defaults (`config init` disables whisper [#8718]), inability to set dotted model keys ([#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)), and failure to create new aliases outside `providers.*` ([#8834]).
- **Telegram unreliability**: Users report that `channels doctor` claims setup but bot does not respond ([#8505]), and documentation is wrong ([#8810]).
- **Security concerns**: The delegate allowlist bypass ([#8279]) and shell symlink escape ([#9247]) erode trust in the sandbox model.
- **Memory growth**: Users experience OOM in WSL2 due to unbounded RSS growth ([#8642]), making long-running agents unstable.
- **Missing features**: Users want per-chat model switching ([#8600]), Matrix thread-scoped history ([#8541]), and more SOP examples ([#8587]).
- **Positive signals**: Community is actively contributing RFCs and large features (e.g., goal mode, eval harness, Telegram rich messages [#8415]), indicating high engagement and satisfaction with the project’s direction despite stability issues.

## 8. Backlog Watch

The following important issues and PRs appear to need maintainer attention due to age, severity, or stalled status:

- **#8309** – [SkillForge is orphaned](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) – No decision or progress since June 25.  
- **#8396** – [RFC: Make wire protocol first-class](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) – Drafted June 27, no recent maintainer response.  
- **#8348** – [Skill CRUD hook/event for observing skill changes](https://github.com/zeroclaw-labs/zeroclaw/issues/8348) – From June 26, unanswered.  
- **#8583** – [Channel/source shared-boundary cleanup tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) – Important architecture cleanup, in progress but slow.  
- **#8615** – [Compatible provider silently deletes content](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) – S2 bug with subtle data loss, fix PR is still open.  
- **#8279** – [Delegate security bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) – S0, no fix PR, needs immediate attention.  
- **#9247** – [Shell tool workspace boundary bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) – S0, reported today, needs swift triage.  
- **#8642** – [MCP memory leak](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) – In progress, but fix #8633 only addresses restart storms; memory growth remains.  
- **#8996** – [Preserve goals across daemon reload](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) – Large PR stacked on stacked branches, may need rebase and review.  

---

*Generated from GitHub activity data as of 2026-07-21 23:59 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*