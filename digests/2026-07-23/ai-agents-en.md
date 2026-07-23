# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-23 04:44 UTC

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

# OpenClaw Project Digest — 2026-07-23

## 1. Today's Overview

The OpenClaw project saw very high activity in the last 24 hours: **500 issues and 500 pull requests were updated**, with **154 issues closed and 208 PRs merged/closed**. This volume suggests a major push toward stabilization and feature integration, though the project remains in heavy development with no new release today. Several critical regressions (P0‑P1) were identified on the latest beta/stable versions, including gateway startup failures, session-breaking bugs, and performance regressions. At the same time, a large number of refactoring and test‑consolidation PRs landed, indicating ongoing work to improve maintainability. The project shows strong community engagement but also reveals frustration with regression frequency.

## 2. Releases

No new releases were published today.

## 3. Project Progress

In the last 24 hours, **208 pull requests were merged or closed** — a sign of rapid iterative development. While the top‑30 list of PRs includes many that are still open, a number of important changes are moving forward:

### Notable Refactoring & Test Infrastructure
- `#112904` — **Deduplicate compaction preparation** for embedded agents (steipete)
- `#112903` — **Split Google Meet plugin entry** (1,321‑line module broken into smaller pieces)
- `#112900` — **Share Teams and Zoom browser status adapters**
- `#112872` — **Consolidate mock OpenAI server fixtures** in QA lab
- `#112894` — **Consolidate Telegram bot test fixtures**

### Cron & Automation
- `#112375` — **Cron shell precheck gate** to skip LLM calls when no work exists (saves tokens on poller‑style jobs)

### Agent Policy & Sessions
- `#112773` — **Portable agent policy settings** (allow/deny lists, memory search boundaries)
- `#112896` — **Snapshot recovery point admission** (RFC 0013 implementation)
- `#112901` — **iOS native Talk respects session thinking level**

### CLI & Documentation
- `#104159`, `#104160`, `#100960`, `#104158` — Series from giodl73 adding command inventory and documentation generation (still open but active)

### Ongoing Fix PRs (open but with sufficient proof)
- `#94050` — Strip volatile output from `exec` result hash to fix no‑progress detection
- `#97881` — Preserve secret refs and OAuth fields in `doctor auth migration`
- `#102180` — Repair stale OpenAI doctor route pins
- `#102178` — Expose wedged overflow sessions to recovery tooling
- `#102173` — Prevent hidden pre‑tool text from confusing channel users

## 4. Community Hot Topics

The most active issues and PRs (by comments and reactions) reflect strong demand for **cross‑platform support, security hardening, and crash‑fixes**.

| Issue | Comments | Reactions | Summary |
|-------|----------|-----------|---------|
| [#75 Linux/Windows Clawdbot Apps](https://openclaw/openclaw Issue #75) | 115 | 80 👍 | Long‑standing feature request for desktop apps on Windows/Linux (currently only macOS, iOS, Android). |
| [#85333 `doctor --fix` 4‑5x slower regression](https://openclaw/openclaw Issue #85333) | 17 | 1 👍 | Performance regression in 2026.5.20 – snapshot path traversal bottleneck. |
| [#13583 Pre‑response enforcement hooks](https://openclaw/openclaw Issue #13583) | 16 | 2 👍 | Request for mechanical policy gates (high‑stakes workflows). |
| [#91009 Codex PreToolUse hook CPU‑bound](https://openclaw/openclaw Issue #91009) | 15 | 2 👍 | Spawns CPU‑hungry processes, stalls gateway RPC. |
| [#10659 Masked Secrets](https://openclaw/openclaw Issue #10659) | 15 | 4 👍 | Need to keep API keys invisible to agents (security). |
| [#94228 Thinking block signature bricked sessions](https://openclaw/openclaw Issue #94228) | 14 | 2 👍 | Native Anthropic path: replaying `thinking` blocks causes permanent 400 errors. |
| [#92043 Compaction timeout regression](https://openclaw/openclaw Issue #92043) | 12 | 3 👍 | 180 s hard timeout breaks sessions that legitimately need longer. |
| [#108435 Gateway fails to start on update](https://openclaw/openclaw Issue #108435) | 9 | 2 👍 | P0 regression blocking users after `2026.7.1` update. |
| [#98672 Sessions breaking constantly (closed)](https://openclaw/openclaw Issue #98672) | 7 | 2 👍 | Regression that has since been resolved. |

**Analysis:** The community is prioritizing **platform expansion**, **security by design** (masked secrets, enforcement hooks), and **reliability** against regressions that break core workflows. The high reaction count on #75 and #10659 suggests these are the most wanted features.

## 5. Bugs & Stability

### P0 (Critical) – Release Blockers
- **#108435** (regression): Gateway fails to start with error after `2026.7.1` update. Impact: crash‑loop, UX release blocker. **Fix PR:** none directly, but may be addressed by recent commits.
- **#98674** (regression, closed): Mac `.dmg` app icon not clickable. Impact: UX release blocker. *Closed – likely fixed.*
- **#98672** (regression, closed): Sessions breaking constantly. *Closed – resolved.*

### P1 (High Severity) – Many with linked PRs
| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#85333](https://openclaw/openclaw Issue #85333) | `doctor --fix` 55s→229s+ performance regression | No new fix PR |
| [#91009](https://openclaw/openclaw Issue #91009) | Codex hook spawns CPU‑bound processes, stalls gateway | Linked PR open |
| [#94228](https://openclaw/openclaw Issue #94228) | Thinking blocks brick long tool‑use sessions (Anthropic) | Linked PR open |
| [#92043](https://openclaw/openclaw Issue #92043) | 180 s compaction timeout never recovers | Linked PR open |
| [#65538](https://openclaw/openclaw Issue #65538) | Screen readers announce every streaming token | Linked PR open |
| [#90840](https://openclaw/openclaw Issue #90840) | Subagent raw output delivered to chat instead of summary | Linked PR open |
| [#108580](https://openclaw/openclaw Issue #108580) | Cron tool schema breaks llama.cpp grammar (2026.7.1) | Linked PR open |
| [#86031](https://openclaw/openclaw Issue #86031) | Windows gateway listens but health probes time out | No new fix PR |
| [#95612](https://openclaw/openclaw Issue #95612) | `cli-backend` against Anthropic returns 401 (same shell works) | No new fix PR |
| [#98702](https://openclaw/openclaw Issue #98702) | OAuth rejected for built‑in openclaw runtime | No new fix PR |
| [#88955](https://openclaw/openclaw Issue #88955) | QQbot WebSocket reconnection loses outbound adapter | Linked PR open |
| [#39807](https://openclaw/openclaw Issue #39807) | Billing error (402) infinite retry death spiral | Linked PR open |
| [#43374](https://openclaw/openclaw Issue #43374) | All LLM API calls time out simultaneously (multi‑agent) | No new fix PR |
| [#99873](https://openclaw/openclaw Issue #99873) (P2 but important) | Hot reload drops include‑defined models | No new fix PR |

### P2 (Moderate) – System Stability
- `#42273` – `backup create` stalls on large installations (4GB+ `.openclaw`) 🐚 platinum hermit
- `#87314` – Gateway memory growth (60MB/day) due to repeated file read errors 🐚 platinum hermit
- `#48579` – Context pruning `mode: "off"` ignored, aggressive compactions continue 🐚 platinum hermit
- `#49205` – Control UI messages reach context but not visible in Open WebUI 🐚 platinum hermit
- `#41949` – Browser interactions exhaust context by injecting too much page content 🐚 platinum hermit
- `#41372` – Field report with 25 findings from 4 weeks production (crashes, config issues) 🐚 platinum hermit

### Regressions Reported
- `#108435` (2026.7.1), `#108580` (2026.7.1 cron), `#98672` (closed), `#98674` (closed), `#86031` (2026.5.20 Windows), `#90840` (2026.6 subagent), `#85333` (2026.5.20 performance), `#88955` (2026.6 qqbot reconnect), `#91941` (Feishu streaming latency), `#88362` (WhatsApp image UUID, closed). The frequency of regressions across recent releases is concerning and a top community pain point.

## 6. Feature Requests & Roadmap Signals

The following feature requests, based on issue priority and community demand, are likely candidates for upcoming releases:

| Feature | Issue | Priority | Likelihood |
|---------|-------|----------|------------|
| Linux/Windows Desktop Apps | [#75](https://openclaw/openclaw Issue #75) | P2 (high reactions) | **High** – strong community demand, "help wanted" |
| Masked Secrets (hidden API keys) | [#10659](https://openclaw/openclaw Issue #10659) | P1 (enhancement) | **High** – security critical |
| Pre‑response Enforcement Hooks | [#13583](https://openclaw/openclaw Issue #13583) | P2 (enhancement) | **High** – requested for finance/ops |
| Azure Foundry GPT Realtime Talk | [#87325](https://openclaw/openclaw Issue #87325) | P2 (stale) | **Medium** – enterprise expansion |
| Prune Stale Sessions in Dashboard | [#49259](https://openclaw/openclaw Issue #49259) | P2 (stale) | **Medium** – usability improvement |
| Org/Team Deployment (RBAC, manifests) | [#43673](https://openclaw/openclaw Issue #43673) | P2 (stale) | **Low/Medium** – large scope |
| Memory MVP (CLI/skill surface) | [#42651](https://openclaw/openclaw Issue #42651) | P2 (stale) | **Medium** – part of memory system |
| `--dry-run` mode for agent | [#41418](https://openclaw/openclaw Issue #41418) | P2 (stale) | **Low** – nice to have |
| Pre‑compaction notification & deferral | [#38520](https://openclaw/openclaw Issue #38520) | P2 (stale) | **Medium** – reliability improvement |
| Inject context window % into system prompt | [#38568](https://openclaw/openclaw Issue #38568) | P3 | **Low** |
| Skill Permission Manifest (`skill.yaml`) | [#12219](https://openclaw/openclaw Issue #12219) | P2 (enhancement) | **Medium** – security boundary |
| `maxTurns`/`maxToolCalls` config | [#9912](https://openclaw/openclaw Issue #9912) | P2 (enhancement) | **High** – many users limited by runaway tool calls |

The

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-07-23 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape continues its rapid maturation, characterized by intense development velocity across multiple projects serving overlapping but distinct niches. The ecosystem is bifurcating between general-purpose agent frameworks (OpenClaw, IronClaw, ZeroClaw) and specialized, opinionated assistants (NanoBot, CoPaw, Hermes Agent), with platform-specific projects (NullClaw, PicoClaw) filling infrastructure gaps. Community frustration with regression frequency and platform fragmentation is mounting, even as architectural investments in security, multi-agent collaboration, and cross-platform support accelerate. The day's activity—over 1,200 issues and 1,400 PRs updated across tracked projects—signals a field that is both vibrant and straining under its own growth.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Today | Issues Closed | PRs Merged/Closed | Health Signal |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | No | 154 | 208 | 🔴 High regression burden despite massive output |
| **NanoBot** | 5 | 62 | No | 1 | 39 | 🟢 Fast feature iteration, strong contributor momentum |
| **IronClaw** | 50 | 50 | No | 14 | 25 | 🟡 Architectural refactoring nearing completion, pre-release |
| **ZeroClaw** | 50 | 50 | No | 15 | 1 | 🟡 Broad feature surface, review bottleneck emerging |
| **Hermes Agent** | 50 | 50 | No | 11 | 10 | 🟡 Desktop-focused, steady but reactive |
| **CoPaw** | 29 | 50 | **v2.0.0.post4** | 9 | 13 | 🟢 Active patching, but critical P0 regressions open |
| **PicoClaw** | 3 | 4 | No | 0 | 2 | 🟡 Low activity, maintainer attention gap |
| **NanoClaw** | 1 | 3 | No | 0 | 0 | 🟡 Documentation trust issue, low velocity |
| **NullClaw** | 1 | 1 | No | 1 | 1 | 🟢 Focused, high-impact fix cycle |
| **LobsterAI** | 0 | 0 | No | 0 | 2 | 🔴 Stale critical bugs, low engagement |
| **Moltis** | 0 | 1 | No | 0 | 0 | 🔴 Negligible activity |
| **TinyClaw** | 0 | 0 | No | 0 | 0 | 🔴 Dormant |
| **ZeptoClaw** | 0 | 0 | No | 0 | 0 | 🔴 Dormant |

**Notes:** Issue/PR counts are "updated" (created, commented, closed) in the last 24 hours. Health signals consider regression severity, backlog age, and maintainer responsiveness.

---

## 3. OpenClaw's Position

**Advantages Over Peers:**
- **Largest community engagement:** 500 issues and 500 PRs updated daily—5-10x more than any peer project. This volume generates faster bug discovery and broader feature input.
- **Core refactoring maturity:** Deduplication of agent compaction (#112904), session snapshot recovery (RFC 0013), and plugin splitting (#112903) demonstrate a mature codebase undergoing systematic quality improvements.
- **Cross-platform feature advocacy:** The #75 Linux/Windows desktop app request (115 comments, 80 reactions) signals a user base that is demanding parity with macOS/iOS, a pressure less visible in peer projects.

**Technical Approach Differences:**
- OpenClaw operates as a **unified reference implementation**—embedding agent policy settings (#112773), session thinking levels, and cron precheck gates (#112375) as first-class core features. Peers typically treat these as plugins or external configurations.
- The project uses a **monorepo with deep modularization** (Google Meet plugin splitting, shared Teams/Zoom adapters), contrasting with CoPaw's micro-release pattern and IronClaw's trait-based "ProductSurface" abstraction.

**Community Size Comparison:**
- OpenClaw's raw issue/PR volume (1,000+ daily interactions) dwarfs even IronClaw (100) and ZeroClaw (100). However, **regression frequency**—five P0/P1 issues in the latest release alone (2026.7.1 gateway failure, cron schema breakage, compaction timeouts)—is eroding trust. The community's frustration is explicit: "gateway fails to start on update" (#108435) and "sessions breaking constantly" (#98672, closed) reflect churn that NanoBot and NullClaw largely avoid.

**Risk:** OpenClaw's size creates a "scale tax"—more contributions, more regressions, more review load. If the project does not stabilize its release pipeline, smaller, more reliable peers (especially NanoBot and CoPaw) may capture frustrated users.

---

## 4. Shared Technical Focus Areas

The following requirements appear across **multiple projects**, indicating ecosystem-wide pain points and opportunities:

| Requirement | Affected Projects | Specific Instances |
|---|---|---|
| **Cross-platform desktop/mobile parity** | OpenClaw (#75), Hermes Agent (#63679, #66875), IronClaw (Telegram pairing regressions) | Linux/Windows apps, duplicate rendering, session list unresponsiveness |
| **Multi-agent collaboration** | NanoBot (#5000 proposal), LobsterAI (#1265), CoPaw (subagent context compaction) | Persistent identities, shared task state, per-agent model binding |
| **Security hardening** | OpenClaw (#10659 masked secrets), ZeroClaw (#5869 RUSTSEC, #5982 RBAC), Hermes Agent (#69820 session ID leakage) | API key isolation, per-sender RBAC, dependency vulnerability management |
| **Prompt budget management** | ZeroClaw (#5808 deferred tool schemas), OpenClaw (#38568 context window injection), CoPaw (#6307 fixed overhead) | First-turn token overflow, fixed API overhead, tool schema bloat |
| **Provider integration reliability** | ZeroClaw (#5600 Kimi reasoning), CoPaw (#6363 tool arg pollution), Hermes Agent (#69807 custom provider startup) | OAuth failures, schema incompatibility, connection management |
| **Performance optimization** | OpenClaw (#85333 `doctor --fix` slowdown), CoPaw (#6307 ~2s overhead), ZeroClaw (#5287 compact local mode) | Compaction timeouts, response latency, sandbox cleanup speed |
| **Automated testing & CI** | IronClaw (#6105 extension lifecycle), ZeroClaw (#7462 Windows failures), CoPaw (#6376 loop crash QA) | Need for regression-proofing, cross-platform CI, stress testing |

**Observation:** The convergence on **multi-agent orchestration**, **prompt efficiency**, and **cross-platform reliability** suggests the ecosystem is moving beyond single-agent chat into production-grade deployment scenarios.

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architectural Philosophy |
|---|---|---|---|
| **OpenClaw** | Most comprehensive feature surface; CLI-to-desktop-to-chat parity | Power users, tinkerers, self-hosters | Monolithic core with modular plugins; reference implementation for ecosystem |
| **NanoBot** | Fastest feature iteration; OAuth-first provider integration | Developers, multi-provider users | Plugin architecture with extensive provider support; WebUI-centric |
| **IronClaw** | Architectural purity; "Reborn" trait-based refactoring | Enterprise teams, platform builders | Strict separation of concerns (ProductSurface, extension lifecycle); near v1 launch |
| **ZeroClaw** | Security and sandboxing; WASM skills | Security-conscious users, multi-tenant deployments | Deterministic skill compilation, RBAC, sandboxed execution |
| **CoPaw** | Rapid patch cycle; opinionated agent reasoning | End users wanting turn-key assistant | Micro-release model; reasoning optimization as core feature |
| **Hermes Agent** | Desktop-first UX; session continuity | Individual desktop users | macOS/Windows app focus; profile persistence | 
| **PicoClaw** | Lightweight embedded agent | ARM/home automation users | Minimal footprint; IRC/Telegram/DeltaChat channels |
| **NanoClaw** | Minimal configuration; single-binary | Quick-start users | Minimalist, limited provider surface |
| **NullClaw** | Platform-specific fix focus | Discord bot developers | Narrow integration scope; high reliability for single channel |
| **LobsterAI** | Co-work visualization; AI skin system | Creative/visual professionals | UI/UX polish over backend depth |
| **Moltis** | Session date clarity | Web session organizers | Single-feature focus; quiet development |

**Key Insight:** No project dominates all dimensions. OpenClaw leads in breadth but suffers in stability. NanoBot leads in speed but lacks IronClaw's architectural rigor. ZeroClaw leads in security but has a review bottleneck. The fragmentation means **decision-makers must prioritize** (e.g., "do I want rapid features or proven stability?").

---

## 6. Community Momentum & Maturity

**Tier 1 – Rapid Iteration (High risk, high reward):**
- **OpenClaw:** 500+ daily PRs, 154 issues closed. Unmatched velocity but regression-prone releases. This is the "bleeding edge" tier.
- **NanoBot:** 62 PRs updated, 39 merged—high throughput with lower regression count. Best feature velocity-to-stability ratio today.
- **IronClaw:** 50 PRs updated, 25 merged. Slower but more deliberate; nearing a v1 milestone that could consolidate gains.

**Tier 2 – Steady State (Moderate activity, stabilizing):**
- **ZeroClaw:** 50 PRs, 50 issues updated—broad but only 1 PR merged. The review bottleneck suggests a team that cannot keep pace with contributions.
- **CoPaw:** 50 PRs, 29 issues. Released v2.0.0.post4—active patching but P0 regressions (#6376 loop crash) erode confidence.
- **Hermes Agent:** 50 PRs, 50 issues. Desktop-focused, responding to bugs reactively rather than proactively architecting.

**Tier 3 – Quiet or Niche:**
- **PicoClaw:** 4 PRs, 3 issues. Low activity with a growing backlog gap (#3163, #3222 unmerged for weeks).
- **NanoClaw:** 1 issue, 3 PRs. Documentation trust issue (#3118) could undermine security-conscious adopters.

**Tier 4 – Dormant:**
- **LobsterAI, Moltis, TinyClaw, ZeptoClaw:** Zero or near-zero activity. Stale critical bugs (LobsterAI #1273 database corruption) suggest projects at risk of abandonment.

**Trend:** The ecosystem is **concentrating attention on 4-5 projects** (OpenClaw, NanoBot, IronClaw, ZeroClaw, CoPaw). Smaller projects are either consolidating or failing to attract contributors.

---

## 7. Trend Signals

**1. The "Regression Fatigue" Signal**  
Across OpenClaw, CoPaw, and Hermes Agent, users explicitly call out **release quality issues**. Examples:  
- "Gateway fails to start on update" (OpenClaw #108435)  
- "Loop feature crashes main process—stress test before release" (CoPaw #6376)  
- "Every assistant message renders twice after recent update" (Hermes #63679)  

**Implication for developers:** The market is shifting from "fast features" to "reliable features." Projects that invest in CI, regression testing (IronClaw #6524 hermetic testing), and patch stability will win users fleeing high-churn projects.

**2. The "Multi-Agent Collaboration" Signal**  
NanoBot (#5000), LobsterAI (#1265), and CoPaw (subagent context) all identify **persistent, communicating agent teams** as the next frontier. The current single-agent-per-session model is insufficient for complex workflows (scheduling + PPT generation + data analysis).

**Implication for developers:** Building multi-agent primitives (shared state, inter-agent messaging, role-based delegation) is now a competitive necessity, not a "nice to have."

**3. The "Cross-Platform Enforcement" Signal**  
Desktop apps for Linux/Windows (OpenClaw #75), Telegram channel reliability (IronClaw #6475, #6478), and IRC message assembly (PicoClaw #3287) show users expect **channel parity**. Web-only is no longer acceptable.

**Implication for developers:** Agent frameworks must support at minimum: CLI, WebUI, Telegram, Discord, and a desktop client. Projects missing any of these (e.g., NanoClaw lacking rich Telegram support, PR #2877 stalled) risk losing users to more complete alternatives.

**4. The "Security as Feature" Signal**  
Masked secrets (OpenClaw #10659), RBAC (ZeroClaw #5982), OAuth hardening (IronClaw #6534), and credential isolation documentation accuracy (NanoClaw #3118) indicate **security is becoming a deciding factor** in project selection, especially for enterprise evaluation.

**Implication for developers:** Security documentation and features are no longer optional. Every project should audit its SECURITY.md for accuracy and implement at minimum: secret masking, per-channel scoping, and dependency vulnerability scanning.

**5. The "Prompt Budget Crisis" Signal**  
ZeroClaw (#5808), OpenClaw (#38568), and CoPaw (#6307) all report users hitting token limits on **the first turn** due to tool schema bloat. The fixed API overhead (~2s in CoPaw) compounds this.

**Implication for developers:** Deferred tool schema loading, compact local model mode, and configurable context window injection are becoming table-stakes features. Projects that cannot optimize prompt budgets will be unusable for local model users or API cost-sensitive adopters.

**6. The "Maintainer Gap" Signal**  
PicoClaw (PRs #3163, #3222 unmerged for 30+ days), LobsterAI (critical bugs stale for 110+ days), and ZeroClaw (49 open PRs, only 1 merged today) reveal **a systemic bottleneck in maintainer capacity**. Community enthusiasm is outpacing project leadership bandwidth.

**Implication for developers:** Before adopting any project, assess its **PR merge velocity and issue closure rate**. A project with 50 open PRs and 1 merged in 24 hours is a project struggling to keep up. NanoBot (39 merged) and IronClaw (25 merged) demonstrate sustainable review capacity.

---

## Summary for Decision-Makers

| Decision | Recommendation | Rationale |
|---|---|---|
| **Need stability?** | NanoBot or NullClaw | Low regression rate, focused scope |
| **Need breadth?** | OpenClaw | Unmatched feature surface; accept regression risk |
| **Need enterprise security?** | ZeroClaw or IronClaw | RBAC, sandboxing, architecture-first design |


---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-23

## Today’s Overview
The NanoBot project shows extremely high activity, with **62 pull requests updated** and **39 merged/closed** in the last 24 hours, alongside **5 issues updated** (4 open, 1 closed). No new releases were tagged. The burst of merged PRs indicates significant feature advancement (particularly around OAuth providers, image generation, and Telegram multi-bot support) while a steady stream of bug-fix PRs demonstrates a strong focus on stability and polish. Community involvement remains high, with several long-running feature PRs still open and a notable proposal for evolving the agent architecture toward multi-agent collaboration.

## Releases
*None* — no new releases were made on 2026-07-23.

## Project Progress
**39 pull requests were merged or closed today.** Key highlights:

- **#5035 (closed)** — `feat(providers): add xAI Grok OAuth with capability-gated X Search`  
  Adds native OAuth 2.0 + PKCE for Grok subscriptions, the `grok-4.5` provider, and conditional `x_search` MCP tool based on model capabilities.  
  [GitHub PR #5035](https://github.com/HKUDS/nanobot/pull/5035)

- **#4964 (closed)** — `feat(image): apply generation settings live`  
  Exposes provider-specific image model choices in WebUI and allows dynamic changes without gateway restart.  
  [GitHub PR #4964](https://github.com/HKUDS/nanobot/pull/4964)

- **#5049 (open, fix)** — `fix(agent): deliver non-streamed finalization responses`  
  Addresses a regression where non-streaming channels dropped the final outbound package, caused by an overly aggressive suppression mechanism.  
  [GitHub PR #5049](https://github.com/HKUDS/nanobot/pull/5049)

- **#5033 (open)** — `feat(telegram): support multiple bot instances in WebUI`  
  Introduces backward-compatible multi-bot configuration with independent runtime settings, token validation, and enable/disable controls.  
  [GitHub PR #5033](https://github.com/HKUDS/nanobot/pull/5033)

- **#5017 (open)** — `feat(webui): show the actual fallback model`  
  Publishes chat-scoped model-attempt events so the WebUI tracks which model actually handled each request, with real-time badge updates on fallback.  
  [GitHub PR #5017](https://github.com/HKUDS/nanobot/pull/5017)

- **#5003 (open)** — `perf(webui): index conversation history in SQLite`  
  Replaces runtime JSONL reads with an indexed SQLite WAL read model, moving disk work off the event loop for better performance.  
  [GitHub PR #5003](https://github.com/HKUDS/nanobot/pull/5003)

Several other open PRs advanced in review, including improvements to Feishu group ingestion (#5009), skills context loading (#5018), and numerous bug fixes (see **Bugs & Stability**).

## Community Hot Topics
The most discussed issue and the leading feature proposal:

- **#5000 [OPEN]** — `[enhancement] Proposal: evolve the current subagent system toward multi-agent collaboration`  
  4 comments, last updated 2026-07-22. This issue outlines a vision for true multi-agent collaboration with persistent identities and shared task state, moving beyond the current subagent-as-background-task delegation model.  
  [GitHub Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)

Among PRs, **#5035** (xAI Grok OAuth) attracted attention as a significant new-provider integration, and **#5049** (non-streamed finalization) is actively discussed in the context of a high-severity regression. The large number of updated PRs (62) reflects widespread community engagement, though explicit reaction/comment data is sparse.

## Bugs & Stability
Four bug-related issues were updated today, plus several fix-PRs submitted:

| Issue / PR | Description | Severity | Fix Available? |
|------------|-------------|----------|----------------|
| #5041 [OPEN] | Dream cursor does not advance when a batch produces no durable-memory diff, starving later history entries. | Medium | No |
| #5040 [OPEN] | MCP tool schemas with non-`#/$defs/` `$ref` are forwarded verbatim, causing strict providers (Kimi/Moonshot) to disable the entire model. | **High** | No |
| #5028 [OPEN] | Feishu media files conflict with workspace path restrictions, causing "cannot read previously uploaded file" errors. | Medium | No |
| #4948 [CLOSED] | WebUI loses visibility when a late subagent completion starts a system turn (root cause identified and fixed). | Low (fixed) | Yes |

**Related fix PRs** (all open, awaiting review/merge):

- #5044 — `fix(pairing): treat null approved channel lists as empty` (priority p1)  
- #5043 — `fix(cron): skip null runHistory elements when loading jobs.json` (priority p1)  
- #5046 — `fix(feishu): keep fenced markdown tables out of card tables` (priority p2)  
- #5045 — `fix(slack): keep fenced markdown tables intact in _to_mrkdwn` (priority p2)  
- #4988 — `fix(agent): keep background (cron / local trigger) turns silent when the model ends empty` (priority p1, conflict)  
- #5049 — `fix(agent): deliver non-streamed finalization responses` (priority p1)

The #5040 MCP schema bug is the most critical, as it can silently disable the entire model on some popular providers.

## Feature Requests & Roadmap Signals
The strongest signal for future direction is **Issue #5000**, which proposes a full multi-agent collaboration framework. This could become a major architectural milestone. Other notable feature-driving PRs:

- **#5047** — `feat(webui): add Parallel Search MCP preset` — adds a free, keyless web search tool.  
- **#5009** — `feat(feishu): add groupPolicy listen for context-only group ingest` — enables passive context accumulation in Feishu groups.  
- **#4494** — `feat(webui): PWA support and mobile swipe gesture for sidebar` — enhances mobile experience.  
- **#4439** — `feat(tools): add read-only search_history tool` — improves memory recall.

Most of these are likely candidates for the next stable release, especially #5047 and #5035 (already merged). The multi-agent proposal (#5000) will probably be discussed further before any implementation is merged.

## User Feedback Summary
From issues and PRs, real user pain points include:

- **Feishu media path conflict**: A Chinese user reports that files uploaded through Feishu are stored in a `media` directory outside the workspace, violating their workspace restriction policy. This is a UX integration issue. (#5028)
- **Dream history starvation**: A user discovered that a completed but empty Dream batch prevents later history from being processed. (#5041)
- **MCP schema incompatibility**: A user (likely provider developer) encountered that self-referential `$ref`s cause Kimi/Moonshot to reject the entire tool schema. (#5040)
- **WebUI subagent lifecycle**: A closed bug (#4948) indicated users noticed loss of visibility when subagents triggered system turns – the fix is already merged.
- **Non-streamed response loss**: Background cron jobs and local triggers are producing unwanted placeholder messages when the model returns empty, causing confusion for users (PR #4988).

Overall, the community appears highly engaged, with contributors rapidly submitting fixes. The high PR volume suggests satisfaction with the project’s responsiveness to feedback.

## Backlog Watch
Several older PRs have remained open for extended periods and may need maintainer attention:

| PR | Title | Age | Status | Notes |
|----|-------|-----|--------|-------|
| #2584 | `Feature/xiaozhi support` (Xiaozhi voice gateway) | Since 2026-03-28 (almost 4 months) | Open, conflict | Upstream ESP32 device integration; requires conflict resolution. |
| #4439 | `feat(tools): add read-only search_history tool` | Since 2026-06-21 | Open, conflict | Aims to close #4440; waiting for review. |
| #4689 | `feat(providers): surface OAuth status and expiry warnings` | Since 2026-07-03 | Open, conflict | Addresses #4679; may complement the new Grok OAuth work. |
| #4494 | `feat(webui): PWA support and mobile swipe gesture` | Since 2026-06-24 | Open, conflict | Two WebUI enhancements, but has merge conflicts. |
| #4988 | `fix(agent): keep background turns silent when model ends empty` | Since 2026-07-19 | Open, conflict | A high-priority fix (p1) that needs conflict resolution. |

All have significant value and are blocked by conflicts or pending review. The project would benefit from dedicated conflict resolution and maintainer triage to move these forward.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-23

## 1. Today’s Overview
The Hermes Agent project saw high activity, with 50 issues and 50 pull requests updated in the last 24 hours. Of those, 11 issues were closed and 10 PRs were merged or closed, indicating steady progress on bug fixing and feature consolidation. No new releases were issued today. The repository remains healthy, with a slight tilt toward bug reports (P2 and P3) and a handful of feature requests that could shape the next minor release.

## 2. Releases
No new releases were created today. No release notes or migration guides are available.

## 3. Project Progress
Three pull requests were merged or closed today, representing concrete improvements:

- **#69852** – Auto-fix formatting (lint/formatting bot).  
- **#68665** (closed) – `fix(desktop): stop model-switch markers duplicating user messages`. This resolves a desktop app bug where switching models mid-session would duplicate the last user message.  
- **#63590** (closed) – `fix(desktop): preserve profile when restoring sessions`. Improves session restore reliability by remembering the gateway profile per session.

Additionally, a larger consolidation PR **#69861** supersedes both #68665 and #63590, and is still open. Other open PRs address compression warnings, desktop credit notices, keyboard navigation for clarify choices, and Windows console flash fixes.

## 4. Community Hot Topics
The most discussed issues and PRs (by comment count) reflect user frustration with session continuity and desktop UX:

- **#4335 (9 comments)** – *Feature Request: Cross-platform session context sharing (CLI ↔ Telegram)*  
  Users want a unified conversation history across platforms. The underlying need is a seamless experience when switching devices; this is a longer-term architectural feature.  
  [NousResearch/hermes-agent Issue #4335](https://github.com/NousResearch/hermes-agent/issues/4335)

- **#66875 (7 comments)** – *[Bug]: Latest session does not switch after navigating to Plugins/Artifacts tab and back*  
  A desktop UI regression where the session list does not respond after leaving the chat tab. High engagement suggests it affects many users.  
  [NousResearch/hermes-agent Issue #66875](https://github.com/NousResearch/hermes-agent/issues/66875)

- **#63679 (6 comments)** – *Desktop App: every assistant message renders twice after recent update*  
  A duplicate-rendering bug on Windows after the July 13 update, causing significant visual noise.  
  [NousResearch/hermes-agent Issue #63679](https://github.com/NousResearch/hermes-agent/issues/63679)

- **#43747 (6 comments)** – *[Bug]: openai-codex credential pool marks healthy later account as usage_limit_reached*  
  A credential pool misbehavior that forces `auth reset`. Users need reliable failover across API keys.  
  [NousResearch/hermes-agent Issue #43747](https://github.com/NousResearch/hermes-agent/issues/43747)

## 5. Bugs & Stability
Several bugs were reported today, many with existing fix PRs:

**P2 (High severity):**
- **#69807** – CLI startup blocks ~40s when custom provider has no `/models` route. Fix PR **#69858** addresses the root cause.  
  [NousResearch/hermes-agent Issue #69807](https://github.com/NousResearch/hermes-agent/issues/69807)
- **#69709** – `supports_vision` override not resolved for CLI `--provider` with named custom providers.  
  [NousResearch/hermes-agent Issue #69709](https://github.com/NousResearch/hermes-agent/issues/69709)
- **#69738** – `/reload` deletes container-supplied env config (docker). Affects Docker deployments.  
  [NousResearch/hermes-agent Issue #69738](https://github.com/NousResearch/hermes-agent/issues/69738)
- **#69737** – `checkpoints.enabled` ignored in one-shot sessions (`hermes -z`).  
  [NousResearch/hermes-agent Issue #69737](https://github.com/NousResearch/hermes-agent/issues/69737)
- **#69820** – `execute_code` may inherit another request’s session ID via env passthrough, leading to cross-session data leaks.  
  [NousResearch/hermes-agent Issue #69820](https://github.com/NousResearch/hermes-agent/issues/69820)
- **#61764** – Desktop launcher death-loop on slow Windows boot (probe timeout).  
  [NousResearch/hermes-agent Issue #61764](https://github.com/NousResearch/hermes-agent/issues/61764)

**P3 (Medium severity):**
- **#69825** – `serve` command never registers shell hooks; fix PR #69832 exists.  
- **#69808** – Desktop credit usage warnings silently dropped. Fix PR **#69828** is open.  
- **#63679** (duplicate rendering) – not yet assigned a fix PR but being tracked.  
- **#69863** – Profile distributions copy `mcp.json` but runtime only loads `config.yaml`, causing broken MCP configs for distributions.  
- **#69839** – Unknown provider name stuck in config, preventing normal use.

**Older but still open:** The credential pool issue #43747 remains unresolved despite a discussion thread.

## 6. Feature Requests & Roadmap Signals
Today’s feature requests indicate strong user interest in:

- **Cross-platform session continuity** (#4335, P3, needs-decision) – likely a long-term goal.  
- **Credit usage notifications to all home channels** (#69809, P3) – a quick win for billing transparency.  
- **WhatsApp channel skill bindings** (#69726, P3) – parity with Discord/Slack.  
- **Durable clarify prompts** (#44845, P3) – moving from blocking timers to addressable decisions.  
- **MCP OAuth structured challenges** (#69811, P3) – for tool authentication.  
- **Desktop API compatibility mode selector** (#69801, P3) – to support non-OpenAI endpoints.  
- **Per-session tool scoping in ACP** (#45955, P2) – needed for secure multi-tenant use.

Predictions for next release: The desktop credit notice fix (#69828), MCP OAuth handling, and the clipboard/UI fixes (#69771, #69799) are likely to land soon. Cross-platform session sharing (#4335) may be deferred pending a design decision.

## 7. User Feedback Summary
Real pain points expressed in today’s activity:

- **Desktop instability:** Multiple reports of duplicate messages (#63679, #68665), session list unresponsiveness (#66875), and CPU loops at idle (#69645). Users on Windows are particularly affected.  
- **Silent failures:** Shell hooks never fire in desktop (#69825), credit warnings are invisible (#69808), and credential pools mark healthy keys as rate-limited (#43747).  
- **Configuration friction:** CLI startup delays with custom providers (#69807), profile distribution docs leading to broken MCP configs (#69863), and incompatible config key mismatches (#42969).  
- **Security/state concerns:** Execute code session ID leakage (#69820) and `/reload` deleting env vars (#69738) threaten reliability in Docker workflows.  
- **User satisfaction:** While the community is actively reporting bugs and suggesting features, the high volume of P2 bugs suggests recent updates may have introduced regressions. Users appreciate quick fix PRs (e.g., #69828, #69858).

## 8. Backlog Watch
Several important issues have been open for weeks without resolution or maintainer comment:

- **#4335** (created 2026-03-31) – Cross-platform session sharing; marked `needs-decision`. Still no official design direction.  
- **#44845** (created 2026-06-12) – Durable clarify prompts; marked `P3`, needs decision. Could unify how gateway prompts work.  
- **#45955** (created 2026-06-14) – ACP tool scoping; P2 but no assigned milestone. Important for power users.  
- **#19688** (created 2026-05-04, closed today) – Slack slash-command truncation; resolved but indicates a recurring pattern.  
- **#58026** (created 2026-07-04, closed today) – `computer_use` captures blank desktop on Linux/X11; fix merged, but the underlying platform issue may reappear.

Maintainer attention should be directed to #4335 (decision needed) and the credential pool reliability issues (#43747), as they affect a broad user base.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

## 1. Today's Overview
The project shows moderate activity over the past 24 hours, with three open issues updated and four pull requests (two merged/closed, two still open). No new releases were published. A critical bug involving `before_tool` hook deserialization (#3258) remains open without an associated fix PR, while two feature requests — stateless gateway sessions (#3257) and better IRC long‑message support (#3287) — have been raised by the community. Two long‑standing PRs (#3222, #3163) continue to await maintainer review, indicating a potential bottleneck in handling contributions.

## 2. Releases
No new releases were published today. The latest available version remains unreported in the provided data.

## 3. Project Progress
Two PRs were merged or closed in the last 24 hours:
- **#3286** (merged) — `fix: update Go and x/text for govulncheck`  
  A dependency update to address a vulnerability scan warning. Non‑breaking, improves security posture.
- **#3285** (closed) — `docs: remove picopaw`  
  Reverts a previous change (#3096) that added documentation for a removed or renamed component.

No new features were merged; progress is limited to maintenance and documentation cleanup.

## 4. Community Hot Topics
- **Issue #3258** — *[BUG] Process Hook before_tool modify not working: decision field discarded, args misparsed due to deserialization defect*  
  [Link](https://github.com/sipeed/picoclaw/issues/3258)  
  The only bug report with a detailed reproduction trace. The user (Shiniese) identifies a deserialization defect that causes the `decision` field to be lost and arguments to be misparsed when using custom hooks. No fix PR exists, and the issue has been open since July 15 with only one maintainer comment.

- **Issue #3257** — *Add stateless/no-history mode for gateway sessions*  
  [Link](https://github.com/sipeed/picoclaw/issues/3257)  
  A user (lisiying) requests the ability to run gateway sessions without persistent history, mirroring the `--session` CLI flag behaviour. This reflects a need for ephemeral use cases (e.g., automated chatbots that should not accumulate conversational memory).

- **Issue #3287** — *Better support long messages in IRC*  
  [Link](https://github.com/sipeed/picoclaw/issues/3287)  
  A new feature request (superuser‑does) asking PicoClaw to reassemble IRCv3 long messages split across multiple 512‑byte lines. This highlights the need for protocol‑aware message aggregation in chat channels.

## 5. Bugs & Stability
- **Issue #3258** — *Process Hook before_tool modify not working*  
  **Severity: High** — The hook system is a core extensibility point; a deserialisation defect renders it unusable. No fix PR has been submitted, and the issue has been open for 8 days without resolution.  
  **Status:** Open, no associated fix.

No other new bugs were reported today.

## 6. Feature Requests & Roadmap Signals
Two new feature requests surfaced:
1. **Stateless gateway sessions** (#3257) — Likely to be implemented in a future minor release (e.g., 0.4.x) as it requires only a configuration option or an API flag. It aligns with the existing CLI’s `--session` flexibility.
2. **IRC long‑message reassembly** (#3287) — A protocol‑specific enhancement that would improve usability for IRC users. It may be added as a plugin or internal message‑splitting logic.

The open PR #3163 (*feat(bedrock): leverage Converse prompt caching via cache points*) is a candidate for merging within the next two releases, as it is a substantial cost-saving feature for AWS Bedrock users.

## 7. User Feedback Summary
- **Pain points:**
  - The `before_tool` hook is broken (#3258), blocking custom tool integrations.
  - Gateway mode lacks the ephemeral session control available in CLI mode (#3257).
  - IRC users experience message fragmentation, breaking multi‑line replies (#3287).
- **Use cases:**
  - Channel‑based assistants (Telegram, IRC, DeltaChat) that require message aggregation and stateless contexts.
  - Custom tool development depending on hook reliability.
- **Satisfaction:** No explicit positive feedback; the community is primarily reporting bugs and requesting features.

## 8. Backlog Watch
The following items have been open for more than two weeks without a maintainer response or merge:

- **PR #3222** — *refactor(deltachat): cleanup implementation, documentation -200LOC* (opened 2026-07-03, updated 2026-07-22)  
  [Link](https://github.com/sipeed/picoclaw/pull/3222)  
  A sizable refactor that removes legacy code and renames API endpoints. No comments from maintainers.

- **PR #3163** — *feat(bedrock): leverage Converse prompt caching via cache points* (opened 2026-06-23, updated 2026-07-22)  
  [Link](https://github.com/sipeed/picoclaw/pull/3163)  
  A valuable performance/cost optimization for AWS Bedrock. Despite being open for a full month, it has received no feedback.

- **Issue #3258** and **#3257** are also beginning to age (both updated last on 2026-07-22) but are not yet stale; however, they lack a planned resolution.

**Risk:** The lack of maintainer engagement on these long‑standing PRs may discourage future contributors and slow down feature delivery.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-23

## 1. Today's Overview
The project shows low activity with no new releases or merged pull requests in the last 24 hours. One security-related issue remains open, highlighting a documentation inaccuracy about credential isolation. Three open PRs are being updated, including a WhatsApp sender identity fix, a new Waybar status indicator skill, and a Telegram rich rendering feature. Overall, development continues at a modest pace, with community attention focused on documentation correctness and integration parity across different channel paths.

## 2. Releases
No new releases were published today. The latest release remains unchanged.

## 3. Project Progress
No pull requests were merged or closed today. All three PRs currently open are actively being worked on:

- **#3070** – *Fix WhatsApp sender identity divergence between Baileys and Cloud paths* – addresses a bug where the same phone number gets different user IDs depending on the channel implementation.
- **#3117** – *[Skill] add-omarchy-statusbar* – introduces a Waybar status indicator utility skill for desktop monitoring of NanoClaw.
- **#2877** – *[Feature] native rich rendering via Telegram Bot API 10.1 sendRichMessage* – adds support for Telegram’s latest rich message API.

No functional changes have been merged today, so the codebase remains in the same state as yesterday.

## 4. Community Hot Topics
All tracked issues and PRs currently have zero comments and zero reactions, so there is no heavily discussed thread. The most notable items based on recent activity and potential impact:

- **Issue #3118** ([link](https://github.com/nanocoai/nanoclaw/issues/3118)) - **[OPEN]** *SECURITY.md overclaims per-group credential isolation* – filed by bradfeld, pointing out that the project’s security documentation incorrectly states that OAuth connections are isolated per group, while in self-hosted OneCLI gateways they are actually account-level. This has zero responses so far but raises a significant trustworthiness concern.

## 5. Bugs & Stability
One bug-related report surfaced today, alongside an in-progress fix for a previously known issue:

- **High Severity** – **Issue #3118**: Documentation overclaim about credential isolation. If left unaddressed, it could mislead users about the security posture of self-hosted deployments. No fix PR exists yet.
- **Medium Severity** – **PR #3070** (linked to issue #3069): Fixes a WhatsApp sender identity divergence that causes inconsistent user IDs between Baileys (native) and Cloud (API) channel paths. This is actively being resolved and has been updated recently.

No crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
Two feature PRs are pending review and could likely land in the next minor release:

- **Waybar status indicator (PR #3117)** – addresses a niche but practical use case for Linux users who want a desktop widget to see NanoClaw’s status. Given its small scope, it is likely to be merged soon.
- **Telegram rich rendering (PR #2877)** – leverages Bot API 10.1’s `sendRichMessage` method to provide native inline buttons, media groups, and layouts. This has been open for almost a month, suggesting either careful review or lower priority. It would significantly improve Telegram user experience.

No explicit feature requests were filed today, but the Telegram PR indicates a broader roadmap toward richer channel integrations and parity across platforms.

## 7. User Feedback Summary
While direct user feedback in issues/comments is minimal, one piece of actionable feedback stands out:

- **bradfeld** (via Issue #3118) expressed concern that the SECURITY.md document “overclaims” credential isolation. This implies a desire for transparency and accurate security documentation. The user is likely evaluating NanoClaw for multi-tenant or team use, where group-level isolation is critical. This dissatisfaction could affect trust among security-conscious adopters.

No positive feedback or satisfaction indicators were recorded today.

## 8. Backlog Watch
The following open PR/issue has been untouched by maintainers for an extended period and may require attention:

- **PR #2877** ([link](https://github.com/nanocoai/nanoclaw/pull/2877)) – *Telegram native rich rendering* – Created 2026-06-28, last updated 2026-07-22 (from a contributor push). No maintainer comments or reviews have been posted. At 25 days old, it is at risk of going stale if not triaged soon.

Issue #3118 is only one day old and does not yet qualify as a backlog item, but it should be prioritized to avoid security documentation being misleading.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-07-23

*Based on GitHub activity from [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

## 1. Today's Overview

Project activity was low but focused, with one issue and one pull request updated in the last 24 hours—both closed. The single critical bug (Discord gateway becoming deaf after the first `MESSAGE_CREATE`) was resolved by a corresponding PR that also fixes a separate stack overflow in the typing indicator thread. No new releases were published. The project remains in active maintenance, with contributors addressing high‑severity stability issues in the Discord integration.

## 2. Releases

*None. No releases were created on this date.*

## 3. Project Progress

- **PR #978 – Discord typing thread stack overflow fix**  
  [Closed/Merged](https://github.com/nullclaw/nullclaw/pull/978)  
  This PR moves the Discord typing‑indicator thread from `AUXILIARY_LOOP_STACK_SIZE` (512 KB) to a larger runtime stack, preventing process abort when the thread performs HTTPS requests. The fix also likely resolves Issue #977, as the deaf‑bot behaviour may have been caused by the typing thread crash corrupting the gateway connection state.

## 4. Community Hot Topics

Only two items were active today, but both drew attention due to their severity:

- **Issue #977** – *“Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE”*  
  [Issue](https://github.com/nullclaw/nullclaw/issues/977) – 1 comment, created & closed today  
  Author describes a 100% reproducible scenario: the bot handles one `MESSAGE_CREATE`, replies, then never dispatches any further events. Heartbeats continue, but the bot is effectively dead until restart. The underlying need is **reliable, long‑running Discord connectivity**.

- **PR #978** – *“discord: run typing thread on the heavy runtime stack”*  
  [PR](https://github.com/nullclaw/nullclaw/pull/978) – 0 additional comments, merged today  
  Addresses a crash caused by stack overflow in TLS init. Together with Issue #977, the community is focused on **Discord gateway stability and process‑wide robustness**.

## 5. Bugs & Stability

| Bug (Issue #) | Severity | Description | Fix PR? |
|---|---|---|---|
| [#977](https://github.com/nullclaw/nullclaw/issues/977) | **Critical** | Discord gateway becomes permanently deaf after first `MESSAGE_CREATE`. Bot stays online but processes no further events. | Yes – [#978](https://github.com/nullclaw/nullclaw/pull/978) (merged) |
| – (described in PR #978) | **High** | Typing‑indicator thread crashes entire process due to stack overflow during TLS handshake. | Fixed by [#978](https://github.com/nullclaw/nullclaw/pull/978) |

Both bugs are now closed. The fix for the stack overflow (PR #978) is believed to also eliminate the gateway deafness, though the exact root cause chain should be confirmed in future releases.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, the rapid fix of two Discord‑related critical bugs signals that the maintainers are prioritising **stability of the Discord integration**. The next version may include:
- Increased stack size for auxiliary threads (already merged).
- Additional safeguards in the gateway event loop to prevent silent event loss.
- Possibly a regression test for the “one MESSAGE_CREATE” scenario.

## 7. User Feedback Summary

The single reported issue (by **Tetraslam**) highlights a real user pain point: the bot becomes unresponsive after a single interaction, requiring a restart. This erodes trust in the Discord plugin’s reliability. The user’s satisfaction likely improved upon seeing the quick fix. No other user feedback was recorded today.

## 8. Backlog Watch

No long‑unanswered issues or PRs were identified. The only open item (Issue #977 and PR #978) was addressed and closed within the same day. The project’s backlog appears current.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is a structured digest for the **IronClaw** project based on the provided data for **2026-07-23**.

---

## IronClaw Project Digest – 2026-07-23

### 1. Today's Overview

The project is in a period of exceptionally high activity and architectural refinement, with 50 issues and 50 PRs updated in the last 24 hours. Development is heavily focused on finalizing the "Reborn" architecture, specifically migrating core routing to a new `ProductSurface` abstraction and hardening the extension lifecycle. The volume of closed issues (14) and merged/closed PRs (25) indicates a strong push toward stability and completion of foundational features, often accompanied by retrospective "completion records." While no new releases were published today, the project is clearly nearing a significant milestone (v1), with numerous "v1-launch-checklist" items being actively addressed.

### 2. Releases

**None published today.**

### 3. Project Progress

Significant foundational work was merged or closed today, primarily around the "Reborn" architectural refactoring and infrastructure stability.

**Architectural Refactoring (ProductSurface):**
- **[PR #6480 (CLOSED)](https://github.com/nearai/ironclaw/pull/6480)** *(Merged)*: Continued the conversion of operator, project, admin, automation, and view APIs to use the new `ProductSurface` trait.
- **[PR #6538 (CLOSED)](https://github.com/nearai/ironclaw/pull/6538)** *(Merged)*: Routed the OpenAI-compatible chat endpoint through `ProductSurface`, removing the old `ProductWorkflow` adapter.
- **[PR #6529 (CLOSED)](https://github.com/nearai/ironclaw/pull/6529)** *(Merged)*: Moved the outbound preferences registry into a new `ironclaw_outbound` crate, decoupling it from the core composition.

**Testing & Infrastructure:**
- **[PR #6535 (CLOSED)](https://github.com/nearai/ironclaw/pull/6535)** *(Merged)*: Added a "Slice 0" reference model for turn/run lifecycle with automated oracles for core operations.
- **[PR #6537 (CLOSED)](https://github.com/nearai/ironclaw/pull/6537)** *(Merged)*: Fixed CI to run full Reborn E2E tests on `release-fix-*` branches, closing a critical gap in release validation.
- **[PR #6540 (CLOSED)](https://github.com/nearai/ironclaw/pull/6540)** *(Merged)*: Added a runtime environment variable mask to prevent ambient `NEARAI_*` env vars from breaking tests.
- **[PR #6441 (CLOSED)](https://github.com/nearai/ironclaw/pull/6441)** *(Merged)*: Named the `ProductSurface` boundary, creating a transitional trait and moving WebUI and test mounts to depend on it.

**Documentation & Retrospectives:**
- A series of issues (e.g., `#6510`, `#6513`, `#6514`, `#6519`) were closed as "Completed foundation" records, formally acknowledging the delivery of prior infrastructure like the unified web-gateway thread model, OAuth hardening, and the operator configuration write plane.

### 4. Community Hot Topics

The most active discussions revolve around architectural stability and the final steps toward the v1 launch.

- **Error-Recoverability Endgame ([Issue #6284](https://github.com/nearai/ironclaw/issues/6284)):** This epic has the most comments (4). It defines a strict contract for error recovery (the run survives, the model sees the cause and a fix, and gets a turn to act). This is a deep technical topic that indicates a major focus on agent resilience.
- **Extension/Channel Lifecycle Testing ([Issue #6105](https://github.com/nearai/ironclaw/issues/6105)):** With 3 comments, this issue highlights a critical pain point: the extension lifecycle (install → connect → disconnect → reconnect → uninstall) has been a source of repeated regressions across QA waves. The need for reliable, automated cron-based testing is a clear priority to prevent future regression cycles.
- **Configurable Skills & Tools ([Issue #5459](https://github.com/nearai/ironclaw/issues/5459)):** This continues to be a requested feature for administrative control over WASM tools and skills, with discussion on installation scope (admin vs. user).

### 5. Bugs & Stability

Today’s bug reports are primarily focused on the v1 launch checklist and newly introduced channel features (Telegram).

**High Severity (v1 Launch Blockers):**
- **[Issue #6523](https://github.com/nearai/ironclaw/issues/6523) (P1)**: Agent creation fails when the "testing flag" is set during onboarding. This is a critical UX flow that is broken.
- **[Issue #6534](https://github.com/nearai/ironclaw/issues/6534) (P1)**: Google OAuth configuration cannot be applied in hosted deployments. A **[PR #6533](https://github.com/nearai/ironclaw/pull/6533)** is open to partially fix the container path but does not solve the full WebUI issue.
- **[Issue #6521](https://github.com/nearai/ironclaw/issues/6521) (CLOSED)**: The `ironclaw` CLI was not available on agent staging, blocking operator commands. *(Closed, implying a fix was deployed)*.

**Medium Severity (New Features & UX):**
- **[Issue #6475](https://github.com/nearai/ironclaw/issues/6475) (P1)**: The Telegram `/pair` command is not recognized, trapping users in a pairing loop. This is a significant regression in the new Telegram integration.
- **[Issue #6478](https://github.com/nearai/ironclaw/issues/6478) (P2)**: The agent fails to recognize a connected Telegram channel and incorrectly requests Slack authorization.
- **[Issue #6541](https://github.com/nearai/ironclaw/issues/6541)**: The WebUI constantly shows a "Reconnecting" message, causing confusion despite no functional impact.
- **[Issue #6522](https://github.com/nearai/ironclaw/issues/6522)**: The UI provides no instructions for setting up Telegram, creating a poor user onboarding experience.

### 6. Feature Requests & Roadmap Signals

Near-term development is clearly driven by the **v1 launch checklist** and the **"Reborn" architecture** finalization.

- **Telegram as a First-Class Channel**: Multiple issues (`#6475`, `#6478`, `#6522`) and closed PRs (`#6499`, `#6498`) confirm that Telegram support is a major feature being pushed out but is currently in a buggy state.
- **Attested Signing & Ledger Support ([Issue #6532](https://github.com/nearai/ironclaw/issues/6532))**: A significant design document was opened for "Attested-signing stack revival" to enable safe blockchain transactions via hardware wallets. This is a long-term feature but shows planning for high-value, secure agent actions.
- **Hermetic Testing Platform ([Issue #6524](https://github.com/nearai/ironclaw/issues/6524))**: A new epic aims to build a deterministic testing platform to ensure every capability has meaningful coverage. This is a strong signal that the team is investing heavily in preventing regressions moving forward.

**Prediction for Next Version:** The next release (likely v1.0) will include the `ProductSurface` routing, a formalized Telegram channel (with critical bug fixes), and several stability improvements from the `v1-launch-checklist`.

### 7. User Feedback Summary

Real user pain points are highly visible in today's data, confirming that while the platform is making architectural progress, the user-facing experience has regressed in key areas.

- **High Dissatisfaction (Telegram):** Users are hitting confusing bugs with the new Telegram integration, such as the `/pair` command failing and the agent misdirecting messages to Slack. The lack of setup instructions amplifies frustration.
- **Friction in Onboarding (Agent Creation):** The "test build" flag bug (`#6523`) is a direct blocker for users trying to create agents. This is a high-priority UX failure.
- **Confusing UI/UX:** The constant "Reconnecting" WebUI message (`#6541`) and missing OAuth configuration instructions (`#6534`) show that the user interface is not yet a polished, self-service product.
- **Long-Standing Feature Requests:** Users continue to desire configurable tools/skills (`#5459`), improved tool schema clarity (`#1330`), and better context in routine notifications (`#1519`). These features remain in the backlog.

### 8. Backlog Watch

Several important items remain open and have not seen recent substantive updates, indicating they may be blocked or deprioritized.

- **[Issue #1330](https://github.com/nearai/ironclaw/issues/1330) (Open since March 2026)**: "Tool schema discovery: expose message routing and attachment semantics more clearly." This is a critical piece of UX for the LLM that has remained unresolved for months despite being tagged for a bug bash.
- **[Issue #1519](https://github.com/nearai/ironclaw/issues/1519) (Open since March 2026)**: "Routine notifications lack context in user's chat thread." While the core architecture has evolved, this user-facing gap in notification UX has not been closed.
- **[Issue #2246](https://github.com/nearai/ironclaw/issues/2246) (Open since April 2026)**: "Unify extension model: MCP tools as single-tool extensions + provider dedup." This refactoring effort appears to have been subsumed by the broader Reborn architecture work but is not yet explicitly marked as done.
- **[Issue #3288](https://github.com/nearai/ironclaw/issues/3288) ("Reborn" from May 2026)**: "Production/scoped capability lifecycle admin parity." This is a deep technical epic for admin parity that likely depends on the completion of several other epics currently in progress.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 23, 2026, structured as requested.

---

## LobsterAI Project Digest: 2026-07-23

### 1. Today's Overview
The project shows moderate activity today, primarily focused on UI/UX polish and platform-specific fixes. While two Pull Requests were merged, addressing a rendering bug and Windows installer hardening, the core development pace appears moderate. A notable new feature PR aims to refine the "AI skin" visual system. However, a significant concern is the lack of movement on three long-standing, labeled-[stale] bugs and feature requests, including a critical database corruption issue, suggesting a potential backlog in maintenance.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Two Pull Requests were merged today, signifying advancements in stability and UI:
- **[PR #2377] feat: windows update installer hardening** (Merged): This PR, authored by `fisherdaddy`, focused on improving the stability and security of the Windows update installer process. *[URL: github.com/netease-youdao/LobsterAI/pull/2377]*
- **[PR #2376] fix(cowork): render export modal above sidebar** (Merged): Authored by `liuzhq1986`, this fix resolves a stacking context issue where the export options modal could appear behind the sidebar by mounting it via a body portal. *[URL: github.com/netease-youdao/LobsterAI/pull/2376]*

### 4. Community Hot Topics
Discussion volume was low today across all items. The most significant topic, based on the depth of the request, remains:
- **[Issue #1265] [FEATURE] 基于AGENT绑定IM 机器人和模型** (Open, Stale): This issue requests the ability to bind different IM bots and AI models to different Agents. The underlying need is for a more sophisticated multi-agent architecture where specialized agents (e.g., a scheduler vs. a PPT generator) can use distinct tools and models optimized for their specific tasks. *[URL: github.com/netease-youdao/LobsterAI/issues/1265]*

### 5. Bugs & Stability
No new bugs were reported today. However, three critical, unaddressed issues remain open and are labeled as `[stale]`:
- **[#1273] [Bug] sql.js (WASM) memory access out of bounds crash & database corruption risk** (Open, Stale) – **Severity: Critical**. This bug describes a fatal, unrecoverable crash under high-frequency writes leading to permanent database file corruption. This poses a significant risk to data integrity for heavy users (e.g., long Cowork sessions). *[URL: github.com/netease-youdao/LobsterAI/issues/1273]*
- **[#1263] [Bug] Scheduled tasks duplicate and show API rate limit error** (Open, Stale) – **Severity: High**. Users report scheduled tasks appearing twice in the UI, both failing with an API rate limit error. This indicates a likely race condition or task scheduling logic error. *[URL: github.com/netease-youdao/LobsterAI/issues/1263]* No fix PRs are associated with these bugs.

### 6. Feature Requests & Roadmap Signals
The core feature request signal is the need for **Multi-Agent Specialization** ([Issue #1265](#1265)). The open PR [#2378](#2378) strongly suggests that the development team is currently prioritizing enhancements to the **AI Skin** visual customization system. We predict that the next minor version will include the skinning improvements from PR #2378, while the broader multi-agent customization request is likely being considered for a future major or minor release.

### 7. User Feedback Summary
Real user pain points are clearly identifiable but unresolved. Users are experiencing functional issues (duplicate scheduled tasks, API errors) and critical stability problems (database corruption). The multi-agent feature request ([#1265](#1265)) highlights a growing demand from power users for advanced customization and orchestration capabilities, suggesting that while the base features are used, users feel constrained by the current "one-size-fits-all" agent configuration.

### 8. Backlog Watch
Three critical issues require immediate maintainer attention as they have been open and labeled `[stale]` since **April 2, 2026** (over 110 days):
- **[Issue #1273]** Critical database corruption bug. *[URL: github.com/netease-youdao/LobsterAI/issues/1273]*
- **[Issue #1263]** High-severity duplicate task/API limit bug. *[URL: github.com/netease-youdao/LobsterAI/issues/1263]*
- **[Issue #1265]** High-impact feature request for multi-agent customization, which could drive community satisfaction. *[URL: github.com/netease-youdao/LobsterAI/issues/1265]*
- **[PR #2378]** The new AI skin feature PR, while open, has not yet been reviewed or merged. *[URL: github.com/netease-youdao/LobsterAI/pull/2378]*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis Project Digest – 2026-07-23

### 1. Today's Overview
The Moltis project shows minimal activity on 2026-07-23, with no issues updated and no new releases. One pull request (PR #1162) was last updated yesterday and remains open, targeting a UI/UX improvement for session date display. The absence of open issues and the single pending PR suggests the project may be in a quiet phase, possibly after a recent stable release or during active development on a branch. Overall health appears stable, but the lack of community engagement (zero comments or reactions on the sole PR) indicates low external contribution or user feedback volume today.

### 2. Releases
*None* – No new releases were registered in the last 24 hours.

### 3. Project Progress
- **No merged or closed PRs today.** The only PR activity is the still‑open #1162, which has not been merged or closed since its creation on 2026-07-22.
- **PR #1162 (open):** `fix(web): show dates for older sessions`  
  Author: shixi-li  
  [GitHub Link](https://github.com/moltis-org/moltis/pull/1162)  
  This PR addresses the web interface’s handling of session timestamps. It introduces logic to keep localized `HH:MM` labels for today’s sessions, shows “yesterday” and weekday labels for recent prior days, and falls back to calendar dates (including year when needed) for older sessions. Browser coverage is added for all four date buckets. No functional changes beyond date formatting are proposed.

### 4. Community Hot Topics
- **Only active item:** PR #1162 has zero comments and zero reactions, so no topic shows significant community engagement today. The underlying need appears to be improved clarity in session history navigation – users likely request easier recognition of session age without relying solely on relative labels.

### 5. Bugs & Stability
- **No new bugs, crashes, or regressions reported today.** The PR #1162 can be considered a minor stability/UX fix for improper date display on the web interface, but no corresponding issue was filed. Severity is low. No associated bug‑fixing PR exists beyond the pending one.

### 6. Feature Requests & Roadmap Signals
- **No explicit feature requests were raised today.** The only PR (#1162) is a refinement of existing functionality rather than a new feature. Based on this quiet pattern, the next version may focus on polish and localization improvements rather than major new capabilities.

### 7. User Feedback Summary
- **No user feedback** (issues, comments, or reactions) was recorded in the last 24 hours. The absence of open issues could indicate general satisfaction, low usage, or that users are not actively reporting pain points through GitHub.

### 8. Backlog Watch
- **No long‑unanswered issues or PRs require maintainer attention.** The only open PR (#1162) is recent (2 days old) and has received no maintainer response yet. It is not considered backlogged. No unanswered issues exist.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-23

## 1. Today’s Overview
Activity remains **high**, with 29 issues and 50 pull requests updated in the last 24 hours. The team merged/closed 13 PRs and resolved 9 issues, while publishing patch release **v2.0.0.post4** that optimises agent reasoning to reduce redundant thinking loops and duplicate tool calls. Despite strong momentum, the project faces several **critical stability regressions** in v2.0.x — including a multi-second fixed overhead per reply and process crashes caused by the new loop feature — which are drawing community attention. Maintainers are actively pushing fixes for governance audit logging, console UI quirks, and Windows sandbox performance.

## 2. Releases
- **v2.0.0.post4** [(release page)](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4)  
  **Changes:** Optimised agent reasoning to mitigate redundant thinking loops and duplicate tool invocations.  
  **No breaking changes or migration notes** were provided; the release is a non-breaking bug-fix patch.  
  *Full changelog:* [v2.0.0.post3…v2.0.0.post4](https://github.com/agentscope-ai/QwenPaw/compare/v2.0.0.post3...v2.0.0.post4)

## 3. Project Progress
The following PRs were **merged or closed** today and represent concrete progress:

| PR | Description | Impact |
|----|-------------|--------|
| [#6298](https://github.com/agentscope-ai/QwenPaw/pull/6298) | `pref(sandbox): speed up windows sandbox cleanup` | Reduces Windows sandbox cleanup time; merged. |
| [#6277](https://github.com/agentscope-ai/QwenPaw/pull/6277) | `fix(observability): use valid Langfuse trace IDs` | Prevents silent observability failures; merged. |
| [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) | `fix(governance): honor disabled audit logging` | Now respects `audit_level: none`; merged. |
| [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) | `fix(console): prioritize one-time approval` | Renders “Just Once” as primary action, reducing accidental permanent grants; merged. |
| [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) | `test(console): stabilize Gate coverage test` | Increases timeout for Gate test under coverage instrumentation; merged. |
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | `fix(token-usage): retry token usage persistence` | Adds retry on transient write failures; merged. |

Additionally, 9 issues were closed, including [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) (sub‑agent context compaction freeze) and [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) (approval dialog UI risk), both addressed by the above fix PRs.

## 4. Community Hot Topics
The most active discussions (by comment count) highlight three major themes:

- **Critical bug: remote connection closed** – [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) (8 comments, open)  
  User reports `RemoteProtocolError: peer closed connection without sending complete message body`. Detailed packet analysis shows QwenPaw actively closing the connection. **Underlying need:** Reliable HTTP transport for LLM API calls.

- **Performance regression in v2.0** – [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) (6 comments, open)  
  An ~2‑second fixed overhead per reply compared to v1.x. Community suspects architectural change in request processing pipeline. **Underlying need:** Restore v1.x responsiveness for simple conversational turns.

- **Feature request: drag‑and‑drop file upload** – [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) (4 comments, closed → enhancement)  
  User wants to drag images, PDFs, and Office documents into chat for contract review workflows. **Underlying need:** Power‑user document handling without CLI.

Other notable threads:
- [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) (8 comments, closed): Platform domain name redirects to ad pages on mobile networks — likely an infrastructure issue, resolved quickly.
- [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) (3 comments, open): Allow cron jobs to specify a model independently of the agent’s global model — PR [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) already under review.

## 5. Bugs & Stability
Reported bugs ranked by severity (P0 = critical, P1 = high, P2 = moderate, P3 = low):

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | **P0** | New `loop` feature in v2.0.0.post3/4 can crash the main process entirely. User requests stress testing before release. | No open fix PR yet. |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | **P0** | `RemoteProtocolError` – QwenPaw closes connection mid-stream, breaking tool execution. | No fix PR yet. |
| [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | **P1** | Tool call arguments polluted with markdown fences / XML tags from some models (GLM‑5‑Turbo, DeepSeek‑V3), causing `JSONDecodeError`. | No fix PR yet. |
| [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) | **P1** | Context injection uses `role="system"` mid‑message, violating API provider requirements (OpenAI, GLM, Anthropic). | No fix PR yet. |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | **P1** | ~2s fixed overhead per reply in v2.0.0.post3+ (performance regression). | No fix PR yet. |
| [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) | **P2** | Approval dialog UI makes “Always Allow” too prominent, risking accidental permanent grants. | Fixed by [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) (merged). |
| [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) | **P2** | Idle queue cleanup can remove a newly recreated queue state. | PR [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) (open). |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | **P2** | Windows PATH concatenation drops semicolons between User and Machine PATH entries; child processes lose npm globals. | No fix PR yet. |
| [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | **P3** | Token usage persistence does not retry after transient write failure. | Fixed by [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) (merged). |
| [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) | **P3** | Downloader fallback chain does not catch `subprocess.TimeoutExpired`. | PR [#6370](https://github.com/agentscope-ai/QwenPaw/pull/6370) (open, same‑named fix). |
| [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | **P3** | MiniMax‑M3 model cannot recognise uploaded images using built‑in provider. | No fix PR yet. |
| [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361) | **P3** | Console test scripts fail on Windows due to POSIX syntax. | No fix PR yet. |

## 6. Feature Requests & Roadmap Signals
Active feature requests and their likelihood for inclusion in the next version:

- **Per‑job model overrides for cron** – [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316)  
  PR [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) is under review. **Likely in v2.0.1.**
- **Windows desktop GUI automation (computer use)** – PR [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)  
  A major feature adding UIA + Tauri control mode; open since June 14. Likely target for v2.1.
- **AG‑UI protocol endpoint** – PR [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337)  
  Exposes reasoning streaming to external consumers. Under review — could land soon.
- **QwenPaw Creator app** – PR [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)  
  Script‑to‑video workflow plugin. Under review, may ship as optional plugin in next minor release.
- **Docker hot‑update** – [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)  
  User requests Web‑based one‑click update to avoid container rebuild. No implementation yet.
- **Multi‑user / team support** – [#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335)  
  Asking for account management for enterprise deployment. Currently no code.
- **Specific‑work API** – [#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377)  
  Wants agents to expose REST endpoints with fixed request/response schemas. Not yet addressed.

## 7. User Feedback Summary
Real user experiences from the last 24 hours:

- **Performance frustration:** “Upgrading from v1.1.12.post2 to v2.0.0.post3 introduces approximately 2 seconds of fixed overhead” — user `lululau` (#6307).
- **Stability concern:** “v2.0.0.post3和post4版本，运行过程中经常因为新增的loop功能导致主进程都挂了。发布前不能测试一些么，最好压力测试一些啊。” — user `lijikai1206` (#6376), expressing dissatisfaction with QA.
- **Usability:** “希望能在对话中直接拖拽上传图片、PDF和office文档” — user `rerbin` (#6297, closed), highlighting a common document‑handling gap.
- **Security UX:** Approval dialog “Always Allow” button is too prominent — user `funnygeeker` (#6354, fixed today).
- **MiniMax vision:** “

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-23

## Today’s Overview
ZeroClaw remains highly active with **50 issues** and **50 pull requests** receiving updates in the last 24 hours. Of those issues, 35 are still open and 15 were closed; on the PR side, 49 remain open and only 1 was merged or closed. No new releases were published. The project continues to tackle a broad front of improvements – from provider refactoring and security sandboxing to a major new evaluation framework (see “Project Progress”). The volume of activity reflects a healthy but resource-strained ecosystem, with several high-severity bugs and feature requests awaiting attention.

## Releases
*None* — no releases were recorded in the last 24 hours.

## Project Progress
The only PR that reached a final state today was:
- **PR #9271** (closed, merged) – *docs(book): fix audit policy link in agent guidelines* — a documentation fix preventing link breakage in deployed mdBook.

On the Issues side, 15 closed issues were updated; notable among them:
- **#6378** (Discord channel restrictions) — closed after adding `allowed_channels` config.
- **#5674** (configurable `classify_channel_reply_intent`) — closed.
- **#4721** (zeroclaw logs to stderr) — closed.
- **#4832** (option to disable LeakDetector high-entropy token redaction) — closed.
- **#5628** (daemon port conflict on manual run) — closed.
- **#5145** (`send_channel_message` tool) — closed.
- **#5127** (bubblewrap writable paths) — closed.
- **#7673** (RFC: native context compression decorator) — closed as blocked, needs author action.
- **#7248** (persist cached input tokens in cost accounting) — closed.
- **#9271** (audit policy link fix) — closed.

Of greater note, a large series of PRs from user **IftekharUddin** advanced the eval framework, spanning PRs #9212 through #9248. These add CI gating, live execution modes, JUnit XML reports, pass@k statistics, LLM-judge grading, baseline regression diffing, and more – yet all remain open pending review.

## Community Hot Topics
The most discussed items this period (by comment count, all with 12 or 10 comments):

- **#5600** (open) – *[Bug]: preserve Kimi Code reasoning_content across streamed tool-call history* – 12 comments, S1 (workflow blocked). Users report provider errors when thinking is enabled but reasoning_content is missing. This is a critical integration issue for the Kimi provider.
- **#5937** (open) – *[Feature]: refactor: Unify providers architecture and reqwest client management* – 12 comments, P2. Community consensus on the need to reduce code duplication and standardise config across providers.
- **#7462** (open) – *[Bug]: 74 test failures on Windows – Unix-only test commands, path semantics, console encoding* – 12 comments, S2. A major blocking issue for Windows adopters; CI only runs on Linux.
- **#5146** (open) – *[Feature]: compile deterministic skill steps into capability-scoped WASM* – 10 comments. High interest in skill compilation to reduce prompt bloat and improve security.
- **#5982** (open) – *[Feature]: Per-sender RBAC for multi-tenant agent deployments* – 10 comments. Growing demand for multi-tenant isolation in enterprise deployments.
- **#5808** (open) – *[Feature]: defer built-in tool schemas to reduce the fixed prompt floor* – 9 comments. Users are hitting prompt budget limits on first turn; this speaks to a core UX pain.

The community is actively shaping the roadmap, with these high-comment issues representing core infrastructure needs (provider unification, multi-tenancy, Windows support, prompt efficiency).

## Bugs & Stability
Several bugs received updates in the last 24h, ordered by severity:

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| #5600 | S1 (workflow blocked) | Kimi Code `reasoning_content` missing on tool calls, causing 400 errors. | No linked PR yet. |
| #7462 | S2 (degraded) | 74 test failures on Windows 11 (Chinese locale). | No fix PR. |
| #5869 | S1 (security) | Transitive RUSTSEC advisories via `rumqttc v0.25.1`; blocked on upstream. | No PR; status=blocked. |
| #5628 | S2 (degraded) | Daemon auto-starts on boot and conflicts with manual runs. *Closed* – resolved. |
| #5514 | S3 (minor) | Telegram media groups sent as separate requests → multiple bot replies. | No PR; status=in-progress. |
| #6157 | S3 (minor) | Nextcloud Talk uses wrong bot message API. | **PR #9181** (open) directly addresses this. |
| #9180 | (fix PR) | QQ group replies missing `msg_id` cause permission errors. | PR #9180 (open). |

The Windows test failures (#7462) are notably the most pervasive stability issue, with no fix in sight. The Kimi provider bug (#5600) blocks workflows for anyone using that provider. The security advisory (#5869) is blocked by a dependency update upstream.

## Feature Requests & Roadmap Signals
The most impactful feature requests receiving updates today suggest the following directions for the next release (likely v0.13.x?):

- **Provider unification** (#5937) – a major refactor of how models and reqwest clients are configured, expected to reduce bugs and improve maintainability.
- **Per-sender RBAC** (#5982) – multi-tenant access control, a top enterprise ask.
- **WASM-compiled skills** (#5146) – deterministic, sandboxed execution to replace prompt-inlined skill instructions.
- **Compact local model mode** (#5287) – prompt budget reduction for local models.
- **Deferred tool schemas** (#5808) – avoid exceeding prompt token limit on first LLM call.
- **TOTP for cross-channel approvals** (#3767) – security hardening for critical tool use.
- **Schema-validated memory consolidation** (#4760) – using tool calls instead of fragile JSON parsing.
- **Per-skill security permissions** (#5775) – scoping `allow_scripts` / `allowed_commands` to individual skills.

The eval framework (PR series by IftekharUddin) is clearly a roadmap priority, adding deterministic regression testing, live execution, and LLM-judge grading. This may land in the next minor release.

## User Feedback Summary
Real user pain points surfaced in today’s activity:

- **Prompt budget overflow** (#5808) – users with default 32K context are already over budget on the first turn due to built-in tool schemas. This frustrates local model users.
- **Windows incompatibility** (#7462) – 74 test failures prevent reliable use on Windows; users request CI coverage.
- **Stderr vs stdout logging** (#4721, closed) – a simple but impactful quality-of-life fix for scripting.
- **Overly aggressive reply classification** (#5674, closed) – private chat users found the “should I reply” gate ignored them.
- **Telegram media groups** (#5514) – sending multiple images results in multiple bot replies, breaking conversation flow.
- **Nextcloud Talk integration** (#6157) – wrong API endpoint causes silent failures; the fix is in PR #9181.
- **Kimi reasoning content** (#5600) – critical for anyone using the Kimi provider with thinking enabled.
- **Nix installation documentation** (#5269) – users find the install path unclear.
- **Multitenancy** (#5982) – multiple user classes need isolated workspaces and tools.

Overall sentiment is positive about the project’s direction but frustrated with specific integration gaps and prompt‑budget constraints.

## Backlog Watch
Issues that have been open for an extended time without final resolution, needing maintainer attention:

- **#5869** – *security: rumqttc v0.25.1 pins vulnerable rustls-webpki etc.* (open since April 18) – blocked on dependency; a maintainer should evaluate whether to replace rumqttc or add a cargo deny override.
- **#4853** – *install skills from .well-known agent-skills discovery indexes* (open since March 27) – status=blocked pending upstream standardisation. No recent activity.
- **#7673** – *RFC: Native context compression* (open June 15, closed today as blocked/needs-author-action) – the author has been asked to revise.
- **#3767** – *require TOTP for cross-channel approval of critical tools* (open since March 17, P1) – no PR yet; security-conscious users are waiting.
- **#5601** – *Tracker: subscription-native provider authentication for Ollama Cloud, Z.AI, Kimi Code, and MiniMax* (open since April 10) – a meta-issue with 8 comments; sub-issues appear unresolved.
- **#5982** – *Per-sender RBAC* (open since April 22) – commented on today but no assignee; could benefit from a design PR.

These items represent potential risk if left unaddressed, as they cover security, dependency health, and user-visible functionality.

*Digest generated from GitHub data provided by `@zeroclaw-labs/zeroclaw` at 2026-07-23T23:00Z.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*