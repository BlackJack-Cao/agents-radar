# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 00:55 UTC

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

# OpenClaw Project Digest — 2026-07-13

## 1. Today's Overview

Project activity remains very high: **500 issues** (293 open/active, 207 closed) and **500 pull requests** (310 open, 190 merged/closed) were updated in the last 24 hours. No new releases were published. The community is deeply engaged in reporting regressions, memory leaks, and session‑state corruption bugs, while maintainers are pushing large‑scale refactors (e.g., transactional hot‑reload, durable replay foundation, Signal setup wizard). The large number of open issues with `clawsweeper:needs-maintainer-review` tags suggests a growing review backlog, but the volume of merged PRs (190) indicates steady progress on both bug fixes and new features.

## 2. Releases

No new releases today.

## 3. Project Progress

**190 PRs were merged or closed** in the last 24 hours. Notable merged/closed PRs from the top 30 list include:

- [#105800](openclaw/openclaw PR #105800) — **fix(release): allow larger plugin publication manifests** – Resolves a beta6 blocker for the Microsoft Teams plugin.
- [#105790](openclaw/openclaw PR #105790) — **fix(slack): warn on disabled channel drops** – Prevents silent message loss when Slack channels are disabled.
- [#105804](openclaw/openclaw PR #105804) — **chore: eliminate unchecked TypeScript test casts** – Improves test reliability by removing `as any` casts.

Other significant PRs that advanced (open but with recent commits or reviews):

- [#105801](openclaw/openclaw PR #105801) — **improve: start Gateway and first agent turn faster** – Reduces startup latency and cold‑plugin load.
- [#105802](openclaw/openclaw PR #105802) — **refactor(pairing): store channel pairing state in SQLite** – Eliminates last JSON state outside SQLite.
- [#105660](openclaw/openclaw PR #105660) — **feat(durable): add beta3 wake replay foundation** – Core part of the 2026.7.1 durability stack.
- [#100906](openclaw/openclaw PR #100906) — **feat(signal): add setup wizard** – Guided path for Signal transport proof.

## 4. Community Hot Topics

The most active issues by comment count and reaction volume:

| Issue | Comments | 👍 | Summary |
|-------|----------|----|---------|
| [#75](openclaw/openclaw Issue #75) | 110 | 81 | **Linux/Windows Clawdbot Apps** – Cross‑platform desktop apps are still missing; strong community demand. |
| [#99241](openclaw/openclaw Issue #99241) | 22 | 2 | **Tool outputs render as image attachments** – Agents can no longer read stdout/stderr, a severe regression for long‑running tasks. |
| [#91588](openclaw/openclaw Issue #91588) | 19 | 1 | **Critical Gateway memory leak** – RSS grows 350 MB → 15.5 GB over days, causing repeated OOM crashes. |
| [#7707](openclaw/openclaw Issue #7707) | 16 | 0 | **Memory Trust Tagging by Source** – Request to prevent memory poisoning from untrusted content. |
| [#65161](openclaw/openclaw Issue #65161) | 16 | 1 | **Heartbeat isolated mode cadence stalls** – Multiple regressions in heartbeat scheduling and event labeling. |
| [#10659](openclaw/openclaw Issue #10659) | 13 | 4 | **Masked Secrets** – Prevent agents from seeing raw API keys (security). |
| [#104721](openclaw/openclaw Issue #104721) | 12 | 1 | **All tool results return “(see attached image)”** – P0 regression; placeholder string replaces real output. |

**Underlying needs**: The community urgently needs cross‑platform desktop support (Issue #75), robust session‑state handling (tool output corruption, memory leaks, heartbeat regressions), and stronger security defaults (secrets masking, memory trust tagging). These reflect a maturing user base that is pushing OpenClaw beyond simple chat into production‑grade AI agent infrastructure.

## 5. Bugs & Stability

Several critical and high‑severity bugs were reported or updated today:

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **P0** | [#104721](openclaw/openclaw Issue #104721) | **All tool results return “(see attached image)” placeholder** – File reads, command output, everything. | No linked PR yet. |
| **P0** | [#101290](openclaw/openclaw Issue #101290) | **CLI startup preflight corrupts live state DB** – “database disk image is malformed” on macOS; vanilla SQLite unaffected. | No linked PR yet. |
| **P0** | [#91588](openclaw/openclaw Issue #91588) | **Gateway memory leak: 350 MB → 15.5 GB** – Repeated OOM kills. | No linked PR yet. |
| **P1** | [#102020](openclaw/openclaw Issue #102020) | **Second message fails with “reply session initialization conflicted”** – Cross‑channel, position‑dependent. | No linked PR yet. |
| **P1** | [#102400](openclaw/openclaw Issue #102400) | **Reply‑session init conflict silently dropped on Slack/webchat/heartbeat** – Telegram treats it as retryable, others drop. | No linked PR yet. |
| **P1** | [#53408](openclaw/openclaw Issue #53408) | **Write/exec tool parameters silently dropped after long conversations** – Empty arguments after 15+ turns. | No linked PR yet. |
| **P1** | [#89228](openclaw/openclaw Issue #89228) | **exec intermittently unavailable in isolated cron sessions** – Regression from earlier fix. | Linked PR exists (#… not visible in top 50). |
| **P1** | [#91009](openclaw/openclaw Issue #91009) | **Codex PreToolUse hook spawns CPU‑bound processes, stalls Gateway RPC** – 100% CPU usage. | Linked PR open (label `clawsweeper:linked-pr-open`). |

Several of these bugs are regressions (worked before, now broken) and have been assigned P0/P1 with `issue-rating: 🐚 platinum hermit` and `impact:session-state` / `impact:message-loss`. No fix PRs are yet linked for the three P0 issues.

## 6. Feature Requests & Roadmap Signals

High‑impact feature requests gaining traction:

- **Cross‑platform desktop apps** ([#75](openclaw/openclaw Issue #75)) – Linux/Windows Clawdbot Apps, 110 comments, 81 👍.
- **Masked secrets** ([#10659](openclaw/openclaw Issue #10659)) – Prevent agent access to raw API keys.
- **Filesystem sandboxing** ([#7722](openclaw/openclaw Issue #7722)) – `tools.fileAccess` configuration with allowed/deny paths.
- **Exec‑approvals denylist** ([#6615](openclaw/openclaw Issue #6615)) – Allow “allow everything except X” policies. A PR [#101276](openclaw/openclaw PR #101276) is open to implement this.
- **Memory trust tagging by source** ([#7707](openclaw/openclaw Issue #7707)) – Tag memories from untrusted origins.
- **Suppress sub‑agent announce** ([#8299](openclaw/openclaw Issue #8299)) – Config option to avoid unwanted summaries.
- **Dynamic model discovery** ([#10687](openclaw/openclaw Issue #10687)) – For OpenRouter and fast‑moving catalogs.
- **Model fallback on context length exceeded** ([#9986](openclaw/openclaw Issue #9986)) – Not just API errors.
- **End‑of‑session hook** ([#10142](openclaw/openclaw Issue #10142)) – `session:end` event for workflow orchestration.

**Roadmap signals**: The large PRs in review or awaiting author – [#105660](openclaw/openclaw PR #105660) (durable wake replay), [#105801](openclaw/openclaw PR #105801) (faster startup), [#105802](openclaw/openclaw PR #105802) (pairing state SQLite migration) – point to a near‑term release focused on _durability_, _performance_, and _state consolidation_. The Signal setup wizard ([#100906](openclaw/openclaw PR #100906)) and denylist support ([#101276](openclaw/openclaw PR #101276)) are also strong candidates for the next version.

## 7. User Feedback Summary

**Pain points most frequently voiced:**

- **Cross‑platform incompleteness** – macOS/iOS/Android have apps; Linux and Windows users feel left behind.
- **Tool output corruption** – `(see attached image)` placeholder destroys agent ability to read its own results (P0).
- **Memory leaks and OOM crashes** – Gateway instability forces daily restarts.
- **Session‑state races** – Second messages, reply‑session conflicts, and silent drops on Slack/webchat.
- **Regressions with every release** – Several “worked before, now fails” reports (e.g., exec in cron, heartbeat cadence).
- **Missing finer‑grained security controls** – Denylist, secrets masking, filesystem sandboxing are top requests.
- **Poor error messages** – Context overflow, compaction, and approval messages lack actionable details.

**Satisfaction signals**: The community is engaged and detailed in their bug reports (many include environment, logs, reproduction steps). The high number of PRs (190 merged today) indicates maintainers are responsive. However, the volume of platinum‑rated issues and the lack of linked fix PRs for P0 bugs suggests that some critical problems may take longer to resolve.

## 8. Backlog Watch

Issues and PRs that have been open for an extended period and are waiting for maintainer attention:

| Issue/PR | Opened | Last Updated | Status |
|----------|--------|--------------|--------|
| [#75](openclaw/openclaw Issue #75) – Linux/Windows Clawdbot Apps | 2026‑01‑01 | 2026‑07‑12 | Open, 110 comments, labelled `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`. No action for 6 months despite high community interest. |
| [#7707](openclaw/openclaw Issue #7707) – Memory Trust Tagging | 2026‑02‑03 | 2026‑07‑12 | Open, 16 comments, needs maintainer review and product decision. |
| [#10659](openclaw/openclaw Issue #10659) – Masked Secrets | 2026‑02‑06 | 2026‑07‑12 | Open, 13 comments, needs security review and product decision. |
| [#7722](openclaw/openclaw Issue #7722) – Filesystem Sandboxing | 2026‑02‑03 | 2026‑07‑12 | Open, 9 comments, needs maintainer review and security review. |
| [#6615](openclaw/openclaw Issue #6615) – Exec‑approvals denylist | 2026‑02‑01 | 2026‑07‑13 | Open (PR #101276 exists but waiting on author). |
| [#71301](openclaw/openclaw Issue #71301) – Version‑matched docs bundle | 2026‑04‑25 | 2026‑07‑12 | Stale (tagged `stale`), needs maintainer decision. |
| [#9986](openclaw/openclaw Issue #9986) – Model fallback on context length exceeded | 2026‑02‑05 | 2026‑07‑12 | Open, needs product decision. |
| [#10118](openclaw/openclaw Issue #10118) – TUI Shift+Enter for newline | 2026‑02‑06 | 2026‑07‑12 | Open, 5 comments, 4 👍, needs maintainer review. |
| [#8355](openclaw/openclaw Issue #8355) – Streaming TTS for voice calls | 2026‑02‑03 | 2026‑07‑13 | Open, needs product decision. |
| [#10687](openclaw/openclaw Issue #10687) – Dynamic model discovery | 2026‑02‑06 | 2026‑07‑13 | Open, needs maintainer review and product decision. |

These items represent **long‑standing community needs** that have not yet received a maintainer decision or implementation. The oldest (Issue #75) has been open for over six months with an enormous signal. Addressing these backlogs would significantly improve user satisfaction and project health.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-07-13

## 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing **peak development intensity**, with the nine tracked projects collectively processing **666+ issues and 650+ pull requests** in a single 24-hour window. The ecosystem is maturing from experimental prototypes toward production-grade infrastructure, as evidenced by the simultaneous focus on **durability, state management, security controls, and cross-platform support**. A clear bifurcation is emerging: established reference implementations (OpenClaw, Hermes Agent) are managing regression-heavy stabilization cycles post-major releases, while newer entrants (ZeroClaw, CoPaw) push ambitious enterprise features like audit trails, SOP governance, and WASM plugin execution. Community sentiment skews toward **dissatisfaction with regressions** — multiple projects report “worked before, now broken” complaints — but the rapid pace of bug fixes and the 190+ merged PRs across OpenClaw alone indicate a responsive maintainer base.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (293 open) | 500 (310 open) | No | ⚠️ High activity, critical P0 bugs unlinked | Largest project; review backlog growing |
| **Hermes Agent** | 50 (14 open) | 50 (39 open) | No | ✅ High — 36 issues closed, 11 PRs merged | Aggressive bug-fix velocity |
| **IronClaw** | 9 (3 closed) | 50 (25 merged) | No | ✅ High — CI fragility is main weakness | 70% main-branch push failure rate |
| **ZeroClaw** | 33 (32 open) | 50 (48 open) | No | ⚠️ High development, 4 new S1 bugs | Large stacked feature PRs pending review |
| **CoPaw** | 19 (16 open) | 10 (3 merged) | No | 🟡 Moderate — v2.0.0 stabilization | Critical skill-pool & context bugs |
| **NanoBot** | 4 (3 open) | 5 (1 merged) | No | ✅ Moderate but stable | Small team, targeted fixes |
| **PicoClaw** | 5 (4 open) | 2 (1 closed) | No | 🟡 Moderate — unresolved Matrix bug | Android support regressed |
| **NanoClaw** | 3 (3 open) | 13 (2 merged) | No | 🟡 Moderate — false-positive logging | Fast fix for 32k token cap |
| **NullClaw** | 0 | 4 (all merged) | No | ✅ Stable — no new issues filed | Quiet, maintenance mode |
| **TinyClaw** | 0 | 0 | — | 💤 Dormant | No activity |
| **Moltis** | 0 | 0 | — | 💤 Dormant | No activity |
| **ZeptoClaw** | 0 | 0 | — | 💤 Dormant | No activity |
| **LobsterAI** | 1 (1 open) | 2 (1 merged) | No | 🟡 Moderate — critical multi-agent bug | Low community engagement |

**Key insight:** Activity is concentrated in the top 5 projects. Three projects are completely dormant. The ecosystem is consolidating around a few core implementations.

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Scale leader:** 500 issues/PRs updated daily — 10x Hermes Agent, 15x ZeroClaw. Community size and ecosystem contribution are unmatched.
- **Reference implementation:** As the core upstream project, OpenClaw sets architectural patterns (transactional hot-reload, durable replay) that downstream forks like NanoClaw and PicoClaw adopt.
- **Feature breadth:** Signal setup wizard, Slack/Teams plugins, CRON scheduling, Gateway/agent separation — the most complete platform coverage.
- **Platinum-rated bugs attract attention:** Three P0 bugs (tool output corruption, state DB corruption, memory leak) are the ecosystem's most visible stability issues — fixing them benefits all forks.

**Technical approach differences:**
- **State consolidation:** OpenClaw's migration of all state to SQLite (PR #105802) contrasts with ZeroClaw's in-memory/MCP-focused architecture and CoPaw's JSON-blob approach.
- **Durability-first design:** The `feat(durable): add beta3 wake replay foundation` PR (#105660) is unique — no other project has a dedicated replay subsystem for session recovery.
- **Plugin ecosystem:** OpenClaw's plugin architecture (Microsoft Teams, Slack) is more mature than ZeroClaw's emerging WASM plugin system or CoPaw's skill-pool model.

**Community size comparison:**
- **OpenClaw:** Largest by orders of magnitude — 500+ daily contributors, 190+ merged PRs/day
- **Hermes Agent & ZeroClaw:** Second tier — 50+ daily updates, 11–25 merged PRs/day
- **CoPaw, NanoBot, NanoClaw, PicoClaw:** Third tier — 2–10 daily updates, 1–3 merged PRs/day
- **NullClaw:** Niche stable project — 0 new issues, 4 merged PRs/day

**Weakness:** OpenClaw's review backlog (`clawsweeper:needs-maintainer-review` tags) is the ecosystem's largest bottleneck. Three P0 bugs remain unlinked to fix PRs, which erodes confidence despite high contribution volume.

---

## 4. Shared Technical Focus Areas

Requirements emerging across multiple projects (frequency and specific projects noted):

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Memory & Context Management** | OpenClaw (#7707), Hermes (#63469), CoPaw (#5998), ZeroClaw (#5808, #8642, #8893) | Trust tagging by source, context-budget enforcement, compression not breaking tool pairing, persistent memory audit trails |
| **Cross-Platform Desktop Support** | OpenClaw (#75), Hermes (#52951, #59305), PicoClaw (#3182) | Linux/Windows apps, WebSocket stability on Windows, Android service launch, multi-tab session isolation |
| **Agent Reliability & Session State** | OpenClaw (#104721, #101290), NanoBot (#4896), PicoClaw (#3203), CoPaw (#5995, #5986), ZeroClaw (#8563) | Silent message loss, state DB corruption, heartbeat regression, graceful reconnection, tool output not being placeholder strings |
| **Security & Governance** | OpenClaw (#10659, #6615, #7722), Hermes (merged approval dialogs), NanoClaw (#2986, #3029), ZeroClaw (#8880/#8848/#8903 SOP stack), CoPaw (#5982, #5984, #5994) | Secrets masking, exec-approvals denylist, filesystem sandboxing, approval broker with quorum, governance in AUTO mode |
| **Platform Integration Depth** | OpenClaw (Slack, Teams, Signal), Hermes (Discord, Telegram, WeChat, QQ), NanoBot (Discord), ZeroClaw (Slack thread hydration, Telegram multi-message), CoPaw (Feishu, DingTalk, cross-channel handoff #5999) | Channel-specific behavior, rate-limit handling, reaction-based UX, cross-channel session continuity |
| **Plugin & Extension Architectures** | OpenClaw (plugin publication), CoPaw (skill pool broken #6000/#6001, hot-reload #5977), ZeroClaw (WASM out-of-process #8661, MCP registry #8866) | Plugin hot-reload stability, skill auto-discovery, WASM sandboxing, MCP registration persistence |

**Strongest signal:** **Memory/context management** and **agent session reliability** are the ecosystem's two greatest shared pain points — affecting all top-5 projects simultaneously.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | NullClaw | NanoClaw | PicoClaw | NanoBot |
|---|---|---|---|---|---|---|---|---|
| **Target User** | Enterprise/Platform operators | Power users, multi-channel | Enterprise governance | Chinese market, multi-platform | Minimalist/developers | Lightweight operators | Edge/low-resource | Ollama/local-first |
| **Primary Architecture** | SQLite-based state, plugin host | Gateway + agent, cron, desktop TUI | Daemon + ZeroCode + WASM plugins | QwenPaw + AgentScope | Zig-based, minimalist | Containerized, NCL CLI | ARM-friendly, Matrix-ready | Lightweight WebUI |
| **Language** | TypeScript/Node.js | TypeScript/Node.js | Rust/Zig | Python | Zig | Python | Python | Python |
| **Key Strength** | Largest ecosystem, most features | Fastest bug-fix cycle, broadest channel support | SOP governance, memory audit, WASM | Cross-platform (China channels) | Zero-new-issue stability | Fast token-cap fix, guarded actions | Matrix integration | Ollama caching |
| **Key Weakness** | Review backlog, P0 regressions | Windows computer_use broken | 4 new S1 bugs today, review bottleneck | v2.0.0 critical regressions | Low feature velocity | False-positive logging | Android broken, stale Matrix bug | Low community engagement |
| **Innovation Signal** | Durable replay, SQLite consolidation | Desktop approval dialogs, graceful restart | WASM plugin sidecar, SOP approval broker | Skill pool auto-discovery, cross-channel sessions | Queue mode config | Guard seam, audit log skill | Anthropic cache tracking | Prompt caching |
| **Competitive Moat** | Reference status + plugin ecosystem | Bug-fix velocity + desktop features | Enterprise governance + ZeroCode | Chinese market + cross-platform | Stability + minimalism | Container-first + CLI UX | Edge + Matrix | Local inference |

**Strategic insight:** OpenClaw and ZeroClaw are converging on the **enterprise platform** space (durability, governance, security), while Hermes Agent is competing on **developer experience and multi-channel breadth**. CoPaw owns the **Chinese ecosystem** but its v2.0.0 regressions risk losing that position. NullClaw's stability is a unique differentiator in a noisy landscape.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High Activity + Expansion)**

| Project | Maturity Stage | Trajectory | Risk Factor |
|---|---|---|---|
| **OpenClaw** | Peak growth → Stabilization | Durability/performance release imminent (July 2026.7.1) | P0 backlog may delay roadmap |
| **Hermes Agent** | Active feature delivery | Desktop approvals + graceful restart landed; channel depth improving | Windows blocker persists |
| **ZeroClaw** | High-velocity expansion | SOP + memory audit + WASM — large stacked PRs vying for next release | 4 new S1 bugs; review bottleneck |
| **IronClaw** | Heavy engineering | Extension-runtime (P6/8) + loop resilience stack — near closure | 70% CI red rate threatens velocity |

**Tier 2 — Moderate/Stabilizing**

| Project | Maturity Stage | Trajectory | Risk Factor |
|---|---|---|---|
| **NullClaw** | Stable, maintenance | Cleared 4 PRs; no new bugs | Feature gap may lose users |
| **PicoClaw** | Post-release stabilization | Limited bandwidth; Matrix reconnection unaddressed | Android decline |
| **NanoBot** | Low-activity maintenance | Ollama caching now resolved | Small team may not scale |
| **NanoClaw** | Steady improvement | Fast token-cap fix; 4 open enhancement PRs | False-positive logging erodes trust |

**Tier 3 — Dormant / Risky**

| Project | Maturity Stage | Trajectory | Risk Factor |
|---|---|---|---|
| **TinyClaw** | No activity | — | Likely abandoned |
| **Moltis** | No activity | — | Likely abandoned |
| **ZeptoClaw** | No activity | — | Likely abandoned |
| **CoPaw** | Volatile stabilization | v2.0.0 critical regressions — skill pool broken, context bugs high | Losing user trust; needs rapid v2.0.1 |
| **LobsterAI** | Low activity | Single critical multi-agent bug unresolved | Low community engagement |

**Overall ecosystem trend:** Consolidation around 4–5 active projects. Dormant projects may be losing relevance unless they re-engage.

---

## 7. Trend Signals

### From Community Feedback — Actionable Insights for AI Agent Developers

**1. Context Budget Management Is the Ecosystem's #1 Scaling Problem**
- OpenClaw, ZeroClaw, CoPaw, and Hermes all report context-exceeded errors, preemptive trimming, or tool-call pairing corruption.
- **What developers should do:** Design agents with configurable, per-turn context budgets that are independent of system prompt size. Defaults should be generous (64k+) or dynamically computed. Context compression must preserve tool-call → tool-result pairing — this is a cross-project failure pattern.

**2. "Worked Before, Now Broken" Is a Top Pain Point — Prioritize Regression Testing**
- OpenClaw (3 P0 regressions), CoPaw (v2.0.0 broke skill pool, context pairing, governance), Hermes (cron, dashboard TUI), NanoBot (heartbeat prompt regression), ZeroClaw (OpenAI provider changes).
- **What developers should do:** Invest in session-replay regression suites. Use CI to replay previous successful sessions through new code. Tag regressions with `impact:regression` and treat them as P0 until resolved.

**3. Security & Governance Are Shifting from "Nice-to-Have" to "Table Stakes"**
- OpenClaw (secrets masking, filesystem sandboxing, exec denylist), Hermes (approval prompts in desktop), NanoClaw (guard seam function), ZeroClaw (SOP approval broker with quorum), CoPaw (governance AUTO mode too aggressive).
- **What developers should do:** Implement a central guard/approval abstraction now. The market is moving toward policy-as-code layered on agent execution. Projects without a security model will be excluded from enterprise adoption.

**4. WASM Plugin Execution Is Emerging as the Next Architecture Contender**
- OpenClaw (plugin publication), ZeroClaw (WASM out-of-process via sidecar), CoPaw (skill pool auto-discovery).
- **What developers should do:** Evaluate WASM for sandboxed plugin execution. The trend is toward language-agnostic, memory-safe plugin models over Python/TypeScript subprocesses. ZeroClaw's approach (sidecar binary) is the most production-ready pattern seen today.

**5. Desktop and Mobile Are the New Battleground**
- OpenClaw (#75 — 110 comments, highest community demand), Hermes (desktop YOLO default, approval dialogs, multi-tab leak), PicoClaw (Android broken), CoPaw (Tauri desktop auto-memory broken).
- **What developers should do:** If your project is CLI-only, you are losing to projects with Electron/Tauri apps. Users want persistent desktop agents that survive reboots. The cross-platform gap (Linux/Windows vs. macOS/iOS) is a major satisfaction lever.

**6. Agent Session Continuity Across Channels Is the Next UX Frontier**
-

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-13

## 1. Today's Overview
The project saw moderate activity over the past 24 hours with 4 issues updated (3 open, 1 closed) and 5 pull requests updated (4 open, 1 merged/closed). No new releases were published. The most notable developments include a closed enhancement request for Ollama caching, a merged security fix for the WebUI, and the emergence of three distinct bug reports related to Discord integration, Dream session pruning, and Dream log filtering. Overall project health appears stable, though several regressions and configuration issues demand prompt attention.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Project Progress
One pull request was merged and one issue closed today:

- **PR #4892 – `fix(webui): allow remote workspace access reduction`**  
  *Merged/closed* – Addresses a security vulnerability by limiting remote WebUI sessions to default permissions and preventing access escalation outside localhost.  
  [GitHub Link](https://github.com/HKUDS/nanobot/pull/4892)

- **Issue #4867 – `[enhancement] Preserve exact prompt prefix to enable caching in Ollama and others`**  
  *Closed* – The enhancement was resolved, marking a step forward for performance in Ollama-based workflows.  
  [GitHub Link](https://github.com/HKUDS/nanobot/issues/4867)

Additionally, the following PRs remain open and are progressing:
  - PR #4855 – Guided WebUI setup flows (last updated today)
  - PR #4145 – Weather skill contribution (last updated today; long-running)
  - PR #4896 – Heartbeat prompt fix (new)
  - PR #4895 – Transcription API key placeholder fix (new)

## 4. Community Hot Topics
The most actively discussed item in the past 24 hours is:

- **Issue #4867 – Ollama Caching Enhancement** (4 comments)  
  This closed issue generated significant discussion around prompt‑prefix caching. The user reported that NanoBot adds an extra 60 seconds per turn when using Ollama, rendering the workflow “totally unusable” with 32GB VRAM. The underlying need is for **low‑latency local inference** and efficient reuse of model‑side caches. The closure suggests this is now on the roadmap.  
  [GitHub Link](https://github.com/HKUDS/nanobot/issues/4867)

Other items with lower comment counts (0 comments each) but high novelty:
  - PR #4896 (heartbeat regression fix) may attract attention once reviewed.
  - Issue #4897 (Discord integration) is likely to become a hot topic among Discord‑based users.

## 5. Bugs & Stability
Three new bugs were reported today, alongside one regression fix PR:

| Severity | Issue/PR | Description | Fix Available? |
|----------|----------|-------------|----------------|
| **High** | #4894 – `prune_dream_sessions()` fails to prune base64‑encoded Dream session files | A regression after commit cf2f5896; session files use base64 names but the prune function still uses `dream_*.jsonl` glob, breaking cleanup. | No PR yet. |
| **Medium** | #4893 – `/dream-log` and `/dream-restore` show non‑Dream commits | The commands display commits from other processes (backups, manual edits) because they call `git.log()` without filtering. | No PR yet. |
| **Medium** | #4897 – Discord bot integration fails to deliver messages | Bot shows online but no messages received. Possible configuration or gateway issue. | No PR yet. |
| **High** | #4896 – Heartbeat prompt regression (PR) | Prior to v0.2.1, heartbeat had a two‑stage review+execute; after refactoring to a cron job, the prompt was not updated, causing agents to only listen/report instead of executing tasks. | **PR #4896 open** – rewrites the prompt to restore execution. |

Additionally, PR #4895 resolves an API key environment variable placeholder issue for transcription providers, classified as a provider fix.

## 6. Feature Requests & Roadmap Signals
Two feature‑oriented signals emerged:

- **Prompt‑prefix caching (Issue #4867, closed)** – The ability to preserve exact prompt prefixes for Ollama and similar providers is now accepted. Likely to appear in the next release, as the work is complete.
- **Guided setup flows (PR #4855)** – A substantial PR adding productized Channel setup with validation, QR handoff, and Feishu assistant management. This feature is still open but actively updated, suggesting it may land in v0.2.2 or v0.3.0.

No other new feature requests were filed today.

## 7. User Feedback Summary
Real user pain points captured in today’s data:

- **Ollama performance (Issue #4867):** A user reports “totally unusable” latency with local models and 32GB VRAM due to missing prompt caching. Satisfaction is low, but the closure of this issue should improve it.
- **Discord integration (Issue #4897):** A user cannot receive messages after correct setup. This indicates configuration or documentation gaps, likely causing frustration among channel‑based users.
- **Dream session management (Issues #4894, #4893):** User groudas has encountered two related bugs that break pruning and log clarity. The bugs are clearly described, signalling a preference for reliable session lifecycle tools.
- **Heartbeat regression (PR #4896):** Implicit user feedback: agents stopped executing tasks after a refactor. This affects advanced users relying on autonomous agents.

Overall satisfaction is mixed – functionality is advancing but regressions and configuration hurdles are impacting daily use.

## 8. Backlog Watch
Two items require maintainer attention:

- **PR #4145 – Weather Skill** (opened 2026-06-01, last updated today)  
  A multi‑file contribution including tests and documentation. It has been open for over six weeks. While it has recent activity, the lack of maintainer response or merge suggests it may need re‑review or conflict resolution.  
  [GitHub Link](https://github.com/HKUDS/nanobot/pull/4145)

- **Issue #4893 & #4894 – Dream session bugs**  
  Both were filed 15 hours ago and have zero comments from maintainers. Given that #4894 is a clear regression from a recent commit, it should be prioritized for a fix PR to prevent accumulation of stale session files.

- **Issue #4897 – Discord integration**  
  Similar zero‑response status. A quick triage or request for logs would help the user.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-13

## 1. Today's Overview

The Hermes Agent project saw **high activity** on 2026-07-13, with **50 issues** (14 open, 36 closed) and **50 PRs** (39 open, 11 merged/closed) updated in the last 24 hours. No new releases were published. The large number of closed issues (36) and merged PRs (11) signals a sustained effort to stabilize the codebase, particularly around gateway platforms, cron, and desktop/TUI. Several long-standing bugs have been fixed on `main`, and a few new high-severity bugs remain open, especially on Windows and desktop multi-tab scenarios. Overall project health appears **strong**, with active community contributions and responsive maintainer sweeps.

## 2. Releases

No new releases were cut on this date. The last release, likely v0.17.0 or v0.18.0-dev, is not reported in the data. No migration notes are needed.

## 3. Project Progress

**11 PRs were merged or closed today**, advancing fixes and features across the stack:

- **Graceful gateway restart** — `hermes gateway restart --graceful` with SIGUSR1 support (#21200, merged)
- **Discord error handling** — graceful handling of 403/503 in `send()` during shutdown (#21199, merged)
- **Steel cloud browser provider** — new `steel_scrape` tool and browser provider (#21182, merged)
- **Mobile channel setup modal** — fix for iOS viewport and scroll issues (#60672, merged)
- **Approval mode validation** — warn on invalid `approvals.mode` values (#20816, merged)
- **Desktop YOLO default** — new desktop sessions now default to YOLO mode on (#39375, merged)
- **Desktop dangerous-command approval prompts** — surfaced `approval.request` events in Electron UI (#38394, merged)
- **Findings-to-wiki memory plugin** — auto-saves turn facts and structured findings (#21139, merged)
- **Discord reaction-based option selection** for the `clarify` tool (#21893 – closed as implemented on main; PR associated with feature)
- **Discord strict mention mode** for thread follow-ups (#20742 – closed as implemented on main)
- **Multi-platform WebSocket fix** – cascading disconnections resolved (#21026 – closed as implemented on main)

Many bugs were also fixed on `main` (see section 5).

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) highlight user needs around routing, platform integration, and desktop usability:

- **#21827 – Topic-Aware Subagent Routing** (6 comments, closed, not planned)  
  *Summary*: User proposed routing tasks to domain-specific models to save costs and improve quality. Community interest is clear, but the team marked it `sweeper:not-planned` – possibly deferred to a future architecture.  
  *Link*: [Issue #21827](https://github.com/NousResearch/hermes-agent/issues/21827)

- **#21867 – Cron not working** (6 comments, closed, fix on main)  
  *Summary*: `cronjob` tool's `action='run'` failed to trigger immediate execution. A fix was implemented on `main` – a high-impact bug that was quickly resolved.  
  *Link*: [Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867)

- **#21734 – `/sessions` command on gateway returns unknown command** (6 comments, closed, fix on main)  
  *Summary*: Gateway platforms (Telegram etc.) didn’t handle the registered `/sessions` command. Fixed on main.  
  *Link*: [Issue #21734](https://github.com/NousResearch/hermes-agent/issues/21734)

- **#21801 – Dashboard TUI shows `[session ended]` after v0.13.0 update** (5 comments, 3👍, closed, fix on main)  
  *Summary*: Critical regression where `hermes dashboard --tui` failed to start sessions. Promptly fixed.  
  *Link*: [Issue #21801](https://github.com/NousResearch/hermes-agent/issues/21801)

- **#21525 – Hardcoded timeouts break local model workflows** (3 comments, 3👍, closed, not planned)  
  *Summary*: Users demanded unified timeout configuration for local models (Ollama, vLLM). Marked not planned – likely a design trade-off.  
  *Link*: [Issue #21525](https://github.com/NousResearch/hermes-agent/issues/21525)

- **#52951 – cua-driver UIAccess helper dies after Alt+Tab (open, P2, Windows)** (3 comments)  
  *Summary*: Blocks computer_use on Windows after window focus change. Still open – a major pain point for Windows users.  
  *Link*: [Issue #52951](https://github.com/NousResearch/hermes-agent/issues/52951)

## 5. Bugs & Stability

### High Severity (P2, open)

| Issue | Description | Status |
|-------|-------------|--------|
| [#52951](https://github.com/NousResearch/hermes-agent/issues/52951) | **cua-driver UIAccess helper dies after Alt+Tab** (Windows) – blocks computer_use for entire session. No fix PR yet. | **Open** |
| [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) | **Desktop chat tab messages leak across sessions** – cross-tab content mixing, context corruption (P2, needs-repro). | **Open** |
| [#63469](https://github.com/NousResearch/hermes-agent/issues/63469) | **Orchestrator trusts stale memory over canonical policy** – corrupts multi-profile model routing (P3, open). | **Open** |

### High Severity (P2, fixed on main)

Many impactful bugs were closed today with fixes implemented on `main`:

- Cron not executing (#21867)
- `/sessions` command unhandled (#21734)
- Dashboard TUI session ended after update (#21801)
- Systemd infinite restart loop due to incomplete process cleanup (#21915)
- QQ send path fails due to eager imports (#22153)
- Python 3.9 crash on `X | None` type hints (#21798)
- WhatsApp bridge cannot be disabled + Telegram Forbidden error on Windows (#21710)
- Multi-platform WebSocket cascading disconnections (#21026)
- MemOS memory provider spawns new processes every turn (#20939)
- Dashboard gateway status shows "已停止" when running (#21848)
- Dashboard PTY websocket never streams frames (#21948)
- @ autocomplete freezes in tmux on macOS (#21623)
- Local Ollama provider resolution issue (#21524)
- "use as" in dashboard copies `base_url` but omits `api_key` (#21121)
- WeChat gateway cannot process images with Xiaomi MiMo models (#21119)
- Prompt caching not applied on OpenRouter + Claude (#20957, closed as cannot-reproduce)

### Medium/Low Severity (P3, fixed or not planned)

- Hardcoded Telegram media upload timeout (#21757 – not planned)
- Dashboard approvals.mode missing 'smart' option (#31925 – closed)
- Microsoft Teams package availability (#22015 – closed)

**Overall**: The project is aggressively fixing bugs; 36 issues closed in 24h. The open Windows and desktop issues remain the most critical unaddressed blockers.

## 6. Feature Requests & Roadmap Signals

### Recently implemented (closed with `sweeper:implemented-on-main`)

- **Topic-Aware Subagent Routing** (#21827) – marked `not-planned`, but the concept of model routing per domain may reappear in future.
- **Per-channel personality and model routing** (#21637) – **implemented**, expanding `channel_prompts` to bind personality/model per channel.
- **Discord reaction-based option selection** for `clarify` tool (#21893) – **implemented**, improves UX on Discord.
- **Discord strict mention mode** for thread follow-ups (#20742) – **implemented**, gives admins finer control.

### Open feature PRs (candidate for next release)

| PR | Feature | Status | Risk |
|----|---------|--------|------|
| [#21212](https://github.com/NousResearch/hermes-agent/pull/21212) | 4 Anthropic-inspired features: Dreaming, Outcomes, Orchestration, Webhooks | Open, large scope | Massive |
| [#20320](https://github.com/NousResearch/hermes-agent/pull/20320) | Configurable response prefix showing model/provider | Open, P3 | Moderate |
| [#21145](https://github.com/NousResearch/hermes-agent/pull/21145) | `extra_env` support in macOS launchd plist | Open, P3 | Moderate |
| [#21143](https://github.com/NousResearch/hermes-agent/pull/21143) | Linear name-to-id resolution for labels/assignees | Open, P3 | Contained |
| [#21137](https://github.com/NousResearch/hermes-agent/pull/21137) | Anytype MCP skill for knowledge management | Open, P3 | Contained |
| [#21253](https://github.com/NousResearch/hermes-agent/pull/21253) | Halt agent on typed tool billing blockers | Open, P2 | Broad |

### User-requested features that may appear in next version

- **Desktop dangerous-command approval dialog** (#38164 / #38394) – already merged in PR #38394, likely in next desktop release.
- **Desktop YOLO default on** (#39375) – merged, will be default for new sessions.
- **Graceful gateway restart** (#21200) – merged, useful for cron users.

## 7. User Feedback Summary

### Pain points (real user reports)

- **Desktop multi-tab confusion**: Users with multiple chat tabs report messages leaking across tabs (#59305) – a critical UX regression.
- **Windows computer_use broken**: Every Alt+Tab kills the helper process, forcing session restart (#52951). Windows users are heavily impacted.
- **Local model timeouts**: Users running Ollama/vLLM hit hardcoded timeouts at platform level (#21525, closed not planned) – a sticking point for self-hosters.
- **Cron unreliability**: Several users reported cron jobs not executing (#21867) – fixed rapidly.
- **Dashboard TUI unusable after update**: Session not starting (#21801) – fixed.
- **Python version mismatch**: Python 3.9 users hit crash on startup (#21798) – fixed.

### Satisfaction signals

- **Fast bug resolution**: Many bugs closed within days or hours, with `implemented-on-main` labels.
- **Gateway improvements actively merged**: Discord, Telegram, WeChat, QQ platforms all received fixes and features.
- **Desktop features advancing**: Dangerous command approval dialog and YOLO defaults show responsiveness to desktop user needs.

## 8. Backlog Watch

### High-severity open bugs needing maintainer attention

- **[#52951](https://github.com/NousResearch/hermes-agent/issues/52951)** – Windows cua-driver UIAccess helper dies on Alt+Tab (P2, open since 2026-06-26, 3 comments). No fix PR. Critical for Windows computer_use users.

- **[#59305](https://github.com/NousResearch/hermes-agent/issues/59305)** – Desktop chat tab messages leak across sessions (P2, open since 2026-07-06, needs reproduction). No fix PR yet.

- **[#63469](https://github.com/NousResearch/hermes-agent/issues/63469)** – Orchestrator conflates stale memory with canonical policy, corrupts multi-profile routing (P3, open since 2026-07-12). No fix PR.

### Old open PRs (since May 2026) that may be stalling

| PR | Date | Summary |
|----|------|---------|
| [#21261](https://github.com/NousResearch/hermes-agent/pull/21261) | 2026-05-07 | Fix `return` in `finally` block for Python 3.14+ – compatibility |
| [#21253](https://github.com/NousResearch/hermes-agent/pull/21253) | 2026-05-07 | Halt on typed tool billing blockers |
| [#21212](https://github.com/NousResearch/hermes-agent/pull/21212) | 2026-05-07 | 4 Anthropic-inspired features (large scope) |
| [#21161](https://github.com/NousResearch/hermes-agent/pull/21161) | 2026-05-07 | Show compression activity in busy acks |
| [#21145](https://github.com/NousResearch/hermes-agent/pull/21145) | 2026-05-07 | `extra_env` for macOS launchd |
| [#21138](https://github.com/NousResearch/hermes-agent/pull/21138) | 2026-05-07 | OpenViking env reload on /reload |
| [#211

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-13

**Project:** [PicoClaw](https://github.com/sipeed/picoclaw) – Open-source personal AI assistant & agent framework.

---

## 1. Today's Overview

Activity remains moderate with 5 issues and 2 pull requests updated in the last 24 hours. No new releases were published. A critical Matrix sync reconnection bug (#3203) continues to draw community attention, while a newly reported provider model ID parsing bug (#3252) highlights fragility in configuration handling. One closed feature request for ARMv7 (armhf) Docker support (#3250) suggests interest in low‑power deployments. A stale i18n PR (#3190) was closed, and an Anthropic cache‑tracking PR (#3251) is open for review. Overall, the project is stable but has several unresolved bugs that could harm user trust if left unaddressed.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Project Progress

One pull request was closed:

- **[PR #3190](https://github.com/sipeed/picoclaw/pull/3190)** *(i18n fix, closed)* – Synchronised missing translation keys from `en.json` into `bn-in.json` and `cs.json`. This improves locale completeness for Bengali and Czech users.

No other PRs were merged. The open PR [#3251](https://github.com/sipeed/picoclaw/pull/3251) (Anthropic cache token tracking) remains under review and, if merged, will enable operators to verify prompt cache effectiveness.

---

## 4. Community Hot Topics

Most active items by comment count and reactions:

- **[Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)** – *[BUG] Android version* (3 comments, 0👍)  
  User cannot launch the service on Android despite granting full permissions and being unable to change the path in settings. The issue is **stale** but still unresolved, indicating Android support is a recurring pain point.

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** – *[BUG] Matrix sync loop has no reconnection logic* (2 comments, 1👍)  
  After network disruption or homeserver restart, the Matrix `/sync` loop dies silently. Because the main process stays alive, systemd’s `Restart=on-failure` does not trigger. This is the most up‑voted open issue, reflecting strong demand for reliable Matrix integration.

- **[Issue #3252](https://github.com/sipeed/picoclaw/issues/3252)** – *[BUG] splitKnownProviderModel strips provider prefix when model ID contains known provider alias* (0 comments, 0👍)  
  New issue; no community engagement yet, but the underlying model‑ID parsing bug can silently break provider configuration.

**Needs analysis:** Users are actively relying on both Android and Matrix channels. The reconnection bug (#3203) and Android launch failure (#3182) directly impact real‑world use. The provider parsing issue (#3252) points to a broader need for robust model ID handling.

---

## 5. Bugs & Stability

Bugs reported or updated in the last 24 hours, ranked by severity:

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync reconnection – silent death after network/server disruption. No auto‑reconnect, systemd does not restart. | No |
| **Medium** | [#3252](https://github.com/sipeed/picoclaw/issues/3252) | Provider model ID parsing breaks when prefix alias appears in model string. Could cause routing errors. | No |
| **Medium** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android service launch failure; path settings non‑functional. | No |
| **Low** | [#3194](https://github.com/sipeed/picoclaw/issues/3194) (closed) | Received encrypted message but crypto is not enabled. Closed with 2 comments; likely resolved or non‑reproducible. | N/A |

No fix pull requests exist for these bugs. The highest‑priority bug (#3203) has no assigned work yet and has been open for 11 days.

---

## 6. Feature Requests & Roadmap Signals

- **[Issue #3250](https://github.com/sipeed/picoclaw/issues/3250)** – *[Feature] Add Docker Compose support for armhf (ARMv7) devices*  
  **Status:** Closed (same day it was opened) – may indicate acceptance or rejection. The request targets low‑power devices like the OneCloud and Raspberry Pi Zero, suggesting an emerging use case for running PicoClaw on edge hardware. If accepted, Docker images for `armhf` could appear in a future release.

- **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)** – *fix(providers): capture Anthropic prompt cache token usage*  
  **Status:** Open. This is a clear roadmap signal: the maintainer team is investing in observability for cache efficiency. Expect this feature to land in the next minor release (v0.2.10 or v0.3.0).

**Prediction for next version:** Likely includes Anthropic cache tracking, the i18n sync fix (already merged), and possibly the Matrix reconnection bugfix if community pressure continues.

---

## 7. User Feedback Summary

**Pain points expressed:**

- **Android incompatibility** – User `Monessem` reports the app refuses to launch even with full permissions. This blocks mobile use entirely.
- **Matrix reliability** – User `weissfl` describes a silent channel death that forces manual restart. Critical for teams relying on Matrix for notifications.
- **Configuration confusion** – User `v2up-32mb` highlights that model IDs like `claude-3-opus` can be mis‑parsed when a provider prefix (`claude`) is also part of the model name. This could cause silent failures or wrong model selection.
- **Encrypted messaging** – User `Damian-o2` encountered an “encrypted message but crypto not enabled” warning. While the issue is closed, it signals that Matrix E2EE support still needs attention.

**Use cases:**

- Running PicoClaw on resource‑constrained ARM devices (play cloud, Raspberry Pi Zero) – user `zhang090210`.
- Integrating with Matrix for chat and notifications (multiple reporters).

**Satisfaction:** No positive feedback in the sampled issues. The tone is problem‑reporting; users are actively testing but hitting blocking bugs.

---

## 8. Backlog Watch

Items that have been open for an extended period or lack maintainer response:

- **[Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)** – *[BUG] Android version* (created 2026-06-26, stale)  
  17 days unanswered. The `stale` label suggests the maintainer may have flagged it for closure, but no resolution has been provided. Android users remain blocked.

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** – *[BUG] Matrix sync loop reconnection* (created 2026-07-02)  
  No maintainer comment or assignee. With 1 thumbs‑up and growing interest, this should be prioritised.

- **[PR #3190](https://github.com/sipeed/picoclaw/pull/3190)** – *fix(i18n) sync missing locale keys* (closed without merge?)  
  While closed, it is not clear whether the changes were merged. If not, locale gaps persist for `bn-in` and `cs`.

**Recommendation:** Maintainers should at least acknowledge #3203 and #3182, and consider merging or closing #3190 with a clear decision.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-13

## 1. Today's Overview
NanoClaw saw moderate activity over the past 24 hours with **3 open issues** and **13 pull requests updated** (2 merged/closed). A critical fix for a silent 32k output token cap on Claude agents was merged and is now live, and a skill for the OpenCode stack was also integrated. No new releases were published. The open PR pipeline is active, with several bug fixes and features awaiting review — notably a guard seam for privileged actions and a solution for duplicate replies after `send_message`. Community attention is currently focused on false quota‑error logging and unwanted model re‑runs.

## 2. Releases
**No new releases** are available today. The project continues on commits without a tagged release since the last one.

## 3. Project Progress
Two pull requests were **merged or closed** today:

- **[#3024](https://github.com/nanocoai/nanoclaw/pull/3024) – fix(container): raise agent SDK’s 32k output-token cap to the model’s real ceiling**  
  *Closed/merged.* Resolves issue [#3023](https://github.com/nanocoai/nanoclaw/issues/3023) where Claude agents were silently limited to 32,000 output tokens. Now environment variable `CLAUDE_CODE_MAX_OUTPUT_TOKENS` is properly respected, preventing long‑turn failures (e.g., generating large OpenSCAD files).

- **[#2952](https://github.com/nanocoai/nanoclaw/pull/2952) – Skill/add opencode stack**  
  *Merged.* Adds an operational/container skill for the OpenCode stack, expanding the ecosystem of supported integrations.

## 4. Community Hot Topics
The most active discussions revolve around three open issues, each with low comment volume but representing recurring pain points:

- **[#3016](https://github.com/nanocoai/nanoclaw/issues/3016) – Every `rate_limit_event` is logged as a quota error, even when the status is “allowed”**  
  This regression from PR #2965 causes noisy logs (“Error: Rate limit (retryable: false, quota)”) on every normal turn. The reporter logged 82 occurrences in one week without any actual delivery failure. The underlying need is **accurate telemetry** — operators rely on clean logs to detect real rate‑limiting issues.

- **[#3023](https://github.com/nanocoai/nanoclaw/issues/3023) – Every Claude agent is silently capped at 32,000 output tokens**  
  Triggered a rapid fix (PR [#3024](https://github.com/nanocoai/nanoclaw/pull/3024)). The community concern is **unexpected silence** from long‑running agents, especially for code‑generation use cases. No comments yet, but the urgency is clear from the quick merge.

- **[#3026](https://github.com/nanocoai/nanoclaw/issues/3026) – Re‑wrap nudge re‑runs the model and duplicates replies when agent already replied via `send_message`**  
  Reports duplicate chat replies when the agent has already sent a message before the final text is checked. The need is **consistent conversation flow** without redundant model calls or double‑posting.

PRs with notable scope (though few comments) include the guard seam ([#2986](https://github.com/nanocoai/nanoclaw/pull/2986)) and the duplicate‑reply fix ([#3028](https://github.com/nanocoai/nanoclaw/pull/3028)).

## 5. Bugs & Stability
Three bugs were reported today, ranked by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#3023](https://github.com/nanocoai/nanoclaw/issues/3023) | Claude agents hard‑capped at 32k output tokens (breakage for long replies) | **Fixed** via merged PR #3024 |
| **High** | [#3026](https://github.com/nanocoai/nanoclaw/issues/3026) | Re‑wrap nudge re‑runs model → duplicate replies after `send_message` | Open PR [#3028](https://github.com/nanocoai/nanoclaw/pull/3028) |
| **Medium** | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) | False positive “quota error” logs on every allowed rate‑limit event (regression from #2965) | No fix PR yet |

Additionally, an open fix PR [#3020](https://github.com/nanocoai/nanoclaw/pull/3020) addresses silent drops of unwrapped replies (issues #2369, #2393, #2404), and PR [#3027](https://github.com/nanocoai/nanoclaw/pull/3027) fixes a container startup crash caused by `/tmp` directory poisoning (`EISDIR` on `onecli-proxy-ca.pem`).

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed as issues today, but several open PRs indicate upcoming capabilities:

- **Operator approval‑resolution verbs** – PR [#3029](https://github.com/nanocoai/nanoclaw/pull/3029) adds `ncl approvals approve/reject/reject-with-reason`, enabling CLI‑based workflow unblocking.
- **Scheduled tasks in templates** – PR [#3022](https://github.com/nanocoai/nanoclaw/pull/3022) allows templates to define recurring tasks (`tasks/*.md` with cron schedules), created paused on agent group stamping.
- **Per‑group harness capability toggles** – PR [#2983](https://github.com/nanocoai/nanoclaw/pull/2983) lets group configuration disable built‑in capabilities (e.g., scheduling) in favour of NanoClaw’s own scheduler.
- **Audit log skill** – PR [#2987](https://github.com/nanocoai/nanoclaw/pull/2987) provides an opt‑in local audit log for the `ncl` surface.
- **Guarded action seam** – PR [#2986](https://github.com/nanocoai/nanoclaw/pull/2986) centralises access control for privileged actions into a single `guard()` function.

These features are likely candidates for the next minor version, particularly the approval verbs and scheduled templates.

## 7. User Feedback Summary
Real user pain points, extracted from issue descriptions and PR commentary:

- **Noisy false‑positive logging** (“quota error” on every turn) erodes trust in monitoring and forces operators to manually filter logs. This is a regression from a recent change.
- **Unexpected silence from code‑generation agents** – a CAD project agent lost half a reply due to the 32k token cap. The only error was a terminal line, leaving the user without a complete file.
- **Duplicate chat replies** after the re‑wrap nudge – users see the same message sent twice, which is both confusing and wasteful of API quota.
- **WhatsApp shared‑number concerns** – PR [#3021](https://github.com/nanocoai/nanoclaw/pull/3021) adds a warning before connecting a shared/personal WhatsApp number, indicating users have experienced temporary suspensions.

Overall satisfaction appears stable, but the regression in rate‑limit logging is a clear irritant, and the token‑cap issue was a silent blocker for production use.

## 8. Backlog Watch
No issues are left unanswered beyond 48 hours. However, the following **open PRs** have been pending for several days without updates or review comments:

| PR | Age (days) | Description |
|----|------------|-------------|
| [#2982](https://github.com/nanocoai/nanoclaw/pull/2982) | 5 | fix(agent-runner): reconcile tool allowlist with pinned CLI, add drift guard |
| [#2983](https://github.com/nanocoai/nanoclaw/pull/2983) | 5 | feat: per‑group harness capability toggles |
| [#2986](https://github.com/nanocoai/nanoclaw/pull/2986) | 4 | Guard seam: one decision function for every privileged action |
| [#2987](https://github.com/nanocoai/nanoclaw/pull/2987) | 4 | feat: `/add-audit` skill for local audit log |

These PRs represent significant architectural improvements and would benefit from maintainer attention to avoid stale branches.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw Project Digest – July 13, 2026

### 1. Today's Overview

Project activity today was moderate: no new issues were filed or updated, but four pull requests that were created on June 10 were all merged today. These merges indicate that the maintainers are clearing a backlog of targeted fixes. The absence of new issues or PRs outside these merges suggests a stable period with no critical incidents. Two contributors (vernonstinebaker, addadi, DonPrus) drove the merged changes, which focus on agent stderr handling, gateway resource leaks, queue mode configurability, and cron delivery attribution.

### 2. Releases

No new releases have been published. The latest release remains unchanged.

### 3. Project Progress

All four pull requests updated in the last 24 hours were closed/merged. They advance the project in the following areas:

- **Agent stderr fix** ([PR #951](https://github.com/nullclaw/nullclaw/pull/951)) – Suppresses initialization logs (memory plan, MCP server registration) from being posted as agent responses when the child process fails. Stderr is now used as fallback only on success.
- **Gateway resource leak fix** ([PR #950](https://github.com/nullclaw/nullclaw/pull/950)) – Moves the port availability probe before allocation of heavyweight objects (`Config`, `RuntimeProviderBundle`, `SessionManager`) in `gateway.run()` to prevent test-side leaks when `AddressInUse` is encountered.
- **Queue mode configurability** ([PR #949](https://github.com/nullclaw/nullclaw/pull/949)) – Adds `agent.default_queue_mode` to `config.json`, allowing users to set the initial session queue mode (e.g., `latest`). The `QueueMode` enum is refactored into `config_types.zig` and re-exported for consistency.
- **Cron delivery attribution** ([PR #948](https://github.com/nullclaw/nullclaw/pull/948)) – Passes cron delivery origin metadata into spawned `nullclaw agent` subprocesses so that `agent_start` events are correctly attributed to the delivery channel/account. Also preserves delivery routing flags in both local storage and gateway `/cron/add` payloads, and updates `once-agent` help text.

### 4. Community Hot Topics

No issues or pull requests accumulated comments or reactions today. The four merged PRs had no recorded comment counts or 👍 reactions. There are no active discussions currently trending.

### 5. Bugs & Stability

Two of today’s merges directly address stability concerns:

- **Medium severity** – Agent failure logs leak into channel output ([PR #951](https://github.com/nullclaw/nullclaw/pull/951)). Without this fix, memory plans and MCP registration logs could be misconstrued as agent messages, confusing users. The fix is already merged.
- **Medium severity** – Gateway resource leak on port conflict ([PR #950](https://github.com/nullclaw/nullclaw/pull/950)). In test environments, an `AddressInUse` error before allocation cleanup could leave dangling resources (configs, runtime bundles, session managers). The probe is now moved earlier to prevent unnecessary allocations.

Neither issue was reported via a new bug issue; both were discovered and fixed internally.

### 6. Feature Requests & Roadmap Signals

The PRs merged today contain two features that could be considered roadmap signals:

- **Configurable queue mode** ([PR #949](https://github.com/nullclaw/nullclaw/pull/949)) – Users can now set `agent.default_queue_mode` in `config.json`. This addresses a common request to control session behavior at startup (e.g., “latest” mode instead of default parallel). Expect this to be included in the next release.
- **Cron delivery attribution** ([PR #948](https://github.com/nullclaw/nullclaw/pull/948)) – Improves observability for scheduled tasks by ensuring spawned agent processes carry correct origin metadata. This lays groundwork for multi-channel cron workflows.

No other new feature requests appeared in the data.

### 7. User Feedback Summary

No direct user feedback (issues, comments, reactions) is present in today’s data. The merged PRs, however, indirectly address pain points:

- Users seeing irrelevant initialization logs in chat output (PR #951)
- Test environment instability when ports are reused (PR #950)
- Desire for session queue mode control (PR #949)
- Inconsistent attribution of cron-triggered agents (PR #948)

These fixes suggest that the maintainers are responsive to operational friction experienced by the community.

### 8. Backlog Watch

No long-unanswered issues or PRs are present in today’s snapshot. The four merged PRs were all from June 10 and were addressed within a month. The maintainer team appears to be keeping the backlog under control.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**Project Digest: IronClaw (nearai/ironclaw)**  
**Date:** 2026-07-13  
**Data range:** Issues/PRs updated in the last 24 hours

---

### 1. Today's Overview

IronClaw saw intense activity with **50 PRs** updated (25 merged/closed) and **9 issues** touched (3 closed). No releases were cut. The core team is aggressively tackling a systemic CI fragility problem that has been causing ~70% of main-branch pushes to fail, with a dedicated taxonomy issue (#6011) and a series of hardening PRs (#6022, #6023, #6020). Simultaneously, the “extension-runtime” feature train continues to advance, with the 6th and 7th of 8 planned PRs (#6012, #6025) now in review. Overall project health is high‑velocity but strained by test‑isolation and concurrency bugs that demand immediate attention.

### 2. Releases

**No new releases** in the last 24 hours. The latest release remains the previous version (not stated in the data); no migration notes apply.

### 3. Project Progress

**Merged/Closed PRs (25 total):**  
- **Dependency updates:** #5926 (20 Rust crate bumps) and other dependabot PRs were merged.  
- **Bug fixes:** The closed issues #5704 (image preview transparency), #6010 (GLM‑5.2 inference hang), and #6009 (missing model) were resolved; associated fix PRs are now merged.  
- **CI fixes:** Several targeted patches for flaky tests are in the merge queue (e.g., #6023, #6020).

**Features advancing (open PRs):**  
- **Extension‑runtime train:** PR #6012 (P5 – delivery coordinator + Slack/Telegram outbound) and PR #6025 (P6 – extraction completion, config UI, migrations) are under review.  
- **Loop resilience stack:** Four stacked PRs (#5975, #5977, #5978, #5979) add prompt‑cache break detection, skill‑listing optimization, read‑before‑edit guardrails, and post‑edit diagnostics – all aimed at closing the performance gap with Claude Code.  
- **MCP store:** PR #5970 (per‑user MCP registration store) is rebuilt on new `InstallationOwner` machinery.  
- **CLI improvements:** PR #6019 extends `doctor` with dependency readiness checks; PR #6024 adds Unix timestamp support to `builtin.time`.

### 4. Community Hot Topics

| Item | Summary | Link |
|------|---------|------|
| **#6011 – Daily failure taxonomy** | Meta‑issue cataloging every CI failure on 2026‑07‑12; highlights a benchmark provisioning defect (103 of 136 non‑pass tests). Shows the team is transparently tracking systemic red. | [Issue #6011](https://github.com/nearai/ironclaw/issues/6011) |
| **#6014 – CI fragility (70% red pushes)** | Root‑cause analysis of the dominant CI red source; calls for structural fixes rather than band‑aids. | [Issue #6014](https://github.com/nearai/ironclaw/issues/6014) |
| **#6018 – Static pre‑push checks** | Proposal to add three cheap static checks to catch deterministic failures before they hit main. | [Issue #6018](https://github.com/nearai/ironclaw/issues/6018) |
| **#5959 – Reborn loop resilience** | Large PR stack (with 4 sub‑PRs) addressing provider retries, edit guardrails, and prompt‑cache optimisation – most commented PR set this cycle. | [PR #5959](https://github.com/nearai/ironclaw/pull/5959) |

**Underlying need:** The community (and especially core developers) are demanding **reliable CI** and **agent loop stability** to prevent wasted runs and improve developer experience. The failure taxonomy issue (#6011) demonstrates a strong desire for data‑driven improvement.

### 5. Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **Critical** | #6014 – Non‑hermetic tests abort coverage matrix, ~70% main pushes red | Open, structural root‑cause identified | #6022 (static pre‑push checks), #6023 (fixes `build_runtime_input` flake) |
| **High** | #6015 – `build_runtime_input_production_*` races on `std::env` in all‑features coverage | Open | #6023 (PR exists, fixes test isolation) |
| **High** | #6017 – DB concurrency contract tests (Postgres delete/recreate, libSQL concurrent writers) | Open | None yet |
| **High** | #6016 – Slack trigger‑delivery e2e tests time out / miss fired trigger | Open | #6020 (Slack canary PR, makes tests deterministic) |
| **Medium** | #5704 – Image preview transparency during chat processing | **Closed** (fixed) | Merged earlier |
| **Medium** | #6010 – GLM‑5.2 inference hangs for minutes | **Closed** (fixed) | Merged |
| **Low** | #6009 – GLM‑5.2 not in default opencode model list | **Closed** (fixed) | Merged |

**Summary:** Two open high‑severity DB/slack flakiness issues still lack dedicated fix PRs, but the CI hardening PRs (#6022, #6023, #6020) collectively address most of the structural fragility.

### 6. Feature Requests & Roadmap Signals

- **User‑requested features:**
  - #6009 (closed): GLM‑5.2 should be in opencode default model list – **already resolved**.
  - #6010 (closed): GLM‑5.2 hangs – fixed via inference provider improvements.
  - #6018 (open): Static pre‑push checks – accepted and implemented in PR #6022.

- **Roadmap predictions for the next version:**
  - **Extension‑runtime completion** – PR #6025 (P6) is the second‑to‑last PR in the train; likely lands next release.
  - **Loop resilience overhaul** – The four stacked PRs (#5975, #5977, #5978, #5979) are nearing review completion and will significantly improve agent performance and reliability.
  - **Per‑user MCP store** (#5970) will enable egress enforcement and registration for third‑party tools.
  - **CI hardening** – The static checks from #6022 will become mandatory pre‑push hooks, reducing red‑main incidents.

### 7. User Feedback Summary

Real pain points surfaced in bugs and issues:

- **Inference reliability:** Users report that GLM‑5.2 hangs for minutes at a time (#6010) – a critical blocker for interactive development. Now fixed.
- **Model availability:** GLM‑5.2 not appearing in opencode’s default model list (#6009) forced manual forking – resolved.
- **CI instability:** 70% red pushes frustrate contributors; the team is publishing detailed failure taxonomies (#6011) which is appreciated for transparency.
- **Image preview transparency** (#5704) during chat processing – minor but visible UX glitch – fixed.
- **Benchmark quality:** clawbench runs are dominated by provisioning defects, not model/harness quality – noted in #6011, but no direct user complaint yet.

Overall satisfaction is implied by the rapid closure of reported bugs, though the CI churn remains the largest source of dissatisfaction for developers.

### 8. Backlog Watch

The following PRs/Issues have been open for an extended period without maintainer response or merge:

| Item | Age | Reason for attention |
|------|-----|----------------------|
| **PR #4032** – Bump wasm group (wit‑component, wit‑parser) | Since 2026‑05‑25 (49 days) | Obsolete versions may cause compatibility issues; requires review. |
| **PR #5114** – Bump tokio‑ecosystem group (tungstenite, postgres, tower‑http, hyper) | Since 2026‑06‑21 (22 days) | Security/stability updates; merge pending. |
| **PR #5664** – Bump actions group (16 updates including `actions/checkout` v4→v7) | Since 2026‑07‑05 (8 days) | CI dependency updates; needed to align with GitHub Actions deprecations. |
| **Issue #6018** – Static pre‑push checks proposal | Created 2026‑07‑12 (1 day) | Already implemented in PR #6022 – pending merge. |

**Note:** All other open issues and PRs have recent activity (within 24h) and are being actively discussed. The three dependabot PRs (#4032, #5114, #5664) are the longest‑ignored items and may require maintainer intervention to avoid future breakage.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-07-13, generated from the provided GitHub data.

---

### LobsterAI Project Digest – 2026-07-13

#### 1. Today's Overview
This was a low-activity day for the project, with no new releases and only a single new issue update. The community is actively engaged in debugging a significant data corruption bug affecting multi-agent users, as seen in the most commented issue. On the development side, one pull request was merged, closing out a long-standing area: agent identification logic. A stale UI enhancement PR also received an update, suggesting the maintainers are slowly clearing the backlog. Overall, project health appears stable but is currently focused on resolving a critical regression.

#### 2. Releases
- **None today.** No new tags or builds were published in the last 24 hours.

#### 3. Project Progress
The team merged one Pull Request and updated one open PR:
- **[MERGED] PR #2065: fix(agent): Use short UUID instead of name to generate Agent ID**  
  *Author: gongzhi-netease*  
  *Status: Closed*  
  This is a significant fix addressing the "data resurrection" bug. Previously, deleting an Agent and then creating one with the same name would cause old local files (workspace, sessions) to be reused erroneously. The fix migrates to a UUID-based ID system, preventing this collision. **Note:** The PR explicitly documents that cleanup of orphaned `cowork_sessions` data upon agent deletion is a known omission and requires a future fix.
  *(Link: [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065))*

- **[UPDATED] PR #1325: feat(ui): Add hover tooltip for new chat icon button**  
  *Author: 0xFLX*  
  *Status: Open (Stale)*  
  This UI polish PR, which adds `title` attributes to the "New Chat" button for better UX when the sidebar is collapsed, was updated. It has been open since April and may be close to merging.
  *(Link: [PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325))*

#### 4. Community Hot Topics
The single most active item is a bug report, indicating significant user impact.

- **Issue #2293: After restart, USER.md for multiple agents is overwritten and replaced**  
  *Author: yepcn | Comments: 4*  
  The user reports a critical regression: modifying the "About You" content or `USER.md` in any agent causes the change to propagate to *all* other agents. The user further isolated the issue, confirming that directly editing a specific agent's `USER.md` file while the app is closed is overwritten by the main agent's file upon restart. The underlying need is clear: **true data isolation between agents**.
  *(Link: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issue/2293))*

#### 5. Bugs & Stability
One new critical bug was investigated today.

- **Critical Severity: Issue #2293 – Multi-Agent USER.md Overwrite**  
  This is a data corruption bug that fundamentally breaks multi-agent support. When a user customizes one agent, changes are incorrectly synced to all others. The user has provided clear reproduction steps (edit, close software, modify file directly, restart). This appears to be a regression from a recent update. **No fix PR is currently linked to this issue.**
  *(Link: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issue/2293))*

#### 6. Feature Requests & Roadmap Signals
While not a new feature request, Issue #2293 signals a strong, unmet requirement for **robust multi-agent data isolation**. The community needs the ability to have fully independent agents with no accidental data cross-contamination. Furthermore, PR #2065 (merged today) highlights a roadmap focus on **data lifecycle management** (preventing agent data resurrection and acknowledging the need for better session cleanup). Future versions will likely introduce:
- Agent-level configuration isolation (preventing USER.md overwrites).
- Improved deletion logic to clean up `cowork_sessions`.

#### 7. User Feedback Summary
The primary feedback signal from the community is **dissatisfaction with the recent stability of multi-agent features**. The user reporting Issue #2293 clearly relies on the ability to define distinct agents and is frustrated that a core workflow is broken. The user has been testing and investigating the bug for five days, indicating a high level of engagement and investment in the project. The underlying sentiment is a desire for **reliable, bug-free core functionality** over new features.

#### 8. Backlog Watch
Two items remain in the backlog that require maintainer attention:

- **[STALE] PR #1325 – UI Tooltip Enhancement**  
  This simple, non-breaking UX improvement has been open for over 3 months (since April 2). It requires a final review and merge.
  *(Link: [PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325))*

- **[UNANSWERED / NO ASSIGNEE] Issue #2293 – Multi-Agent Data Overwrite Bug**  
  This is the most critical open issue. It has a clear reproducer and is a high-severity data regression. It should be assigned and prioritized immediately to restore user trust in the multi-agent system.
  *(Link: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issue/2293))*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-13

## 1. Today's Overview

CoPaw (QwenPaw) saw very high developer and community activity over the past 24 hours, with **19 issues updated** (16 open, 3 closed) and **10 pull requests updated** (7 open, 3 merged/closed). No new releases were published. The burst of activity is concentrated on post‑v2.0.0 regressions, especially around context compression breaking tool‑call pairing, legacy v1→v2 compatibility, and the completely broken skill‑pool system. Three critical‑bug fixes were merged today, but many high‑severity issues remain open, indicating that the v2.0.0 release is still in a stabilization phase.

## 2. Releases

No new releases today. The latest version remains **v2.0.0**.

## 3. Project Progress (Merged/Closed PRs Today)

Three pull requests were closed (all likely merged), focused on compatibility and stability fixes:

- **[#5990 – fix(compat): handle legacy 'file' block type in _coerce_block](https://github.com/agentscope-ai/CoPaw/pull/5990)** (closed) – Adds `file` block conversion to the v1→v2 message deserializer, fixing `ToolResult` validation errors for legacy sessions.
- **[#5988 – fix(compat): handle legacy 'file' block type in _coerce_block](https://github.com/agentscope-ai/CoPaw/pull/5988)** (closed) – A duplicate earlier attempt (same fix) that was closed in favour of #5990.
- **[#5987 – fix(scroll): sanitize unpaired tool messages after context compression](https://github.com/agentscope-ai/CoPaw/pull/5987)** (closed) – Removes orphan `tool_result` messages after context compression to prevent `400 BadRequestError` from the model API.

A further open PR, **[#5997 – fix(pack): include AgentScope Glob helper in desktop bundle](https://github.com/agentscope-ai/CoPaw/pull/5997)**, is already under review and addresses the `No module named 'agentscope.tool._builtin._scripts'` error that breaks auto‑memory on desktop builds.

## 4. Community Hot Topics

Issues and PRs with the most discussion (≥4 comments) reveal the community’s most pressing problems:

- **[#5996 – [Bug]: 2.0.0对话时会产生MODEL_EXECUTION_ERROR](https://github.com/agentscope-ai/CoPaw/issues/5996)** (4 comments) – The QwenPaw hint system creates an assistant message containing a `ToolResultBlock` without corresponding `tool_calls`, causing the OpenAI API to return a 400 error. Users are actively troubleshooting the formatting logic.
- **[#5952 – [Bug]: auto-memory fails with "No module named 'agentscope.tool._builtin._scripts'"](https://github.com/agentscope-ai/CoPaw/issues/5952)** (4 comments) – Auto‑memory summarization fails on the Tauri desktop app because the PyInstaller bundle does not include AgentScope’s `_glob_helper.py`. This blocks a core memory feature for all desktop users.
- **[#5986 – Bug: Context compression breaks tool_call/tool_result pairing → 400 BadRequestError](https://github.com/agentscope-ai/CoPaw/issues/5986)** (4 comments) – The eviction logic in the context‑compression middleware does not preserve `tool_calls`/`tool_result` pairing, leading to orphan `tool` role messages and API errors. A fix PR #5987 was merged today, and a more comprehensive defense PR #5989 is open.
- **[#5998 – [Bug] Agent在用户确认方案后仍按旧方案执行 — 记忆上下文不一致](https://github.com/agentscope-ai/CoPaw/issues/5998)** (2 comments) – An agent continues to use an old plan after the user explicitly confirms a new one, indicating a session‑memory inconsistency. This highlights a broader context‑management challenge.

The underlying need across these threads is **reliable state management** – the system must correctly serialize, compress, and recover tool interactions across sessions and versions.

## 5. Bugs & Stability

A large number of bugs were reported today, largely concentrated in the v2.0.0 upgrade. Ranked by severity:

| Severity | Issue | Description | Fix Exists? |
|----------|-------|-------------|-------------|
| **Critical** | [#5986](https://github.com/agentscope-ai/CoPaw/issues/5986) | Context compression breaks tool_call pairing → 400 error. Affects all long-running sessions. | Merged (#5987) + open (#5989) |
| **Critical** | [#5996](https://github.com/agentscope-ai/CoPaw/issues/5996) | MODEL_EXECUTION_ERROR due to orphan ToolResultBlock in hint messages. | No |
| **Critical** | [#5952](https://github.com/agentscope-ai/CoPaw/issues/5952) | Auto‑memory broken on desktop – missing Python module. Desktop‑only. | Open PR #5997 |
| **High** | [#6001](https://github.com/agentscope-ai/CoPaw/issues/6001) / [#6000](https://github.com/agentscope-ai/CoPaw/issues/6000) | Skill pool completely broken for any newly installed skill – even after restart. | No |
| **High** | [#5995](https://github.com/agentscope-ai/CoPaw/issues/5995) | Messages silently dropped when session is busy – no queue, no error. | No |
| **High** | [#5985](https://github.com/agentscope-ai/CoPaw/issues/5985) | DeepSeek V4 Pro triggers orphan tool messages via background tool injection. | No (related to #5986) |
| **Medium** | [#5982](https://github.com/agentscope-ai/CoPaw/issues/5982) | Shell execution demands user acknowledgement every time after v2.0.0 (governance regression). | No |
| **Medium** | [#5994](https://github.com/agentscope-ai/CoPaw/issues/5994) | Every operation triggers security governance (AUTO mode) – too aggressive. | No |
| **Medium** | [#5983](https://github.com/agentscope-ai/CoPaw/issues/5983) | `qwenpaw doctor` health check fails because endpoint `/api/agent/health` does not exist. | No |
| **Low** | [#5981](https://github.com/agentscope-ai/CoPaw/issues/5981) | Model search field auto‑filled with username from auth page (UI glitch). | No |
| **Low** | [#5979](https://github.com/agentscope-ai/CoPaw/issues/5979) | Can't run electron CLI tool on Linux because sandbox runs as root. | No |

Three bug‑fix PRs were merged today (#5990, #5988, #5987), but many high‑severity bugs remain unfixed.

## 6. Feature Requests & Roadmap Signals

Several user‑raised feature requests and questions indicate community direction:

- **[#5999 – Support cross-channel binding and handoff of existing sessions across Console, Feishu, DingTalk, etc.](https://github.com/agentscope-ai/CoPaw/issues/5999)** – Users want to continue the same conversation from different chat platforms.
- **[#6000 / #6001 – Skill pool should auto-discover skills placed in skills/ directory](https://github.com/agentscope-ai/CoPaw/issues/6000)** – The current broken skill‑pool registration is the top blocker for skill extensibility.
- **[#5984 – Tool approval prompts appear in Feishu even when governance is disabled in UI](https://github.com/agentscope-ai/CoPaw/issues/5984)** – Users want finer control over shell‑execution sandboxing, especially on ARM devices without Landlock.
- **[#5977 – Plugin HTTP routes lost after workspace hot-reload](https://github.com/agentscope-ai/CoPaw/issues/5977)** – Plugin developers need stable route registration across reloads.

**Prediction for next minor release:** A v2.0.1 will likely ship fixes for **(a)** context‑compression tool pairing (#5986 fix already merged), **(b)** skill‑pool discovery (#6000/6001 critical), **(c)** the missing Python module for auto‑memory (#5952), and **(d)** the governance‑approval regression (#5982). The cross‑channel session handoff (#5999) is more complex and may slip to v2.1.0.

## 7. User Feedback Summary

Real user pain points voiced today include:

- **Upgrade frustration:** Several users report that v2.0.0 broke previously working workflows – SSH offline, profiles returning 404 ([#5980](https://github.com/agentscope-ai/CoPaw/issues/5980)), and v1 session media not loading ([#5964](https://github.com/agentscope-ai/CoPaw/issues/5964)). The compatibility fixes merged today (#5990, #5988) address one aspect, but not all.
- **Silent data loss:** Messages being dropped when a session is busy ([#5995](https://github.com/agentscope-ai/CoPaw/issues/5995)) and context compression silently producing invalid model calls ([#5986](https://github.com/agentscope-ai/CoPaw/issues/5986)) erode trust.
- **Broken extensibility:** The skill pool is completely unusable for any new skill ([#6000](https://github.com/agentscope-ai/CoPaw/issues/6000), [#6001](https://github.com/agentscope-ai/CoPaw/issues/6001)). Plugin developers are also affected by hot‑reload route loss ([#5977](https://github.com/agentscope-ai/CoPaw/issues/5977)).
- **Governance overhead:** Every shell command or file operation triggers security checks even in AUTO mode ([#5994](https://github.com/agentscope-ai/CoPaw/issues/5994), [#5982](https://github.com/agentscope-ai/CoPaw/issues/5982)), making the agent feel slow and intrusive.

Overall user sentiment is **dissatisfaction with stability and regression**, but the community is engaged and filing detailed bug reports – a sign of high investment.

## 8. Backlog Watch

No issues are older than ~8 days. However, two pull requests that have been open for over a week without merge deserve maintainer attention:

- **[#5869 – feat(console, tui): expose system commands in slash autocomplete across all UIs](https://github.com/agentscope-ai/CoPaw/pull/5869)** (opened 2026-07-08, status: Under Review) – This feature PR adds slash‑command discovery to the TUI and web console. It has been pending review for 5 days.
- **[#5791 – fix(console): promote formatCompact unit on rounding rollover](https://github.com/agentscope-ai/CoPaw/pull/5791)** (opened 2026-07-05, status: Under Review) – This fixes a formatting bug where large numbers (e.g., 999999) display as `"1000.0"` instead of `"1.0M"`. No activity in 8 days.

These PRs are low‑risk improvements that would improve developer experience and UI consistency. Their pending status may indicate a maintainer bottleneck during the v2.0.0 stabilization push.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-13

**Data snapshot** (updates in the last 24h)  
- Issues: 33 total (32 open, 1 closed)  
- PRs: 50 total (48 open, 2 merged/closed)  
- New releases: 0  

---

## 1. Today's Overview

ZeroClaw remains under intense development with **33 issues** and **50 PRs** updated in the past day. No new release was cut, but the v0.8.4 maintenance train ([#8357]) and several milestone trackers are being actively worked. High-priority stability bugs (context-budget overrun, skill-review segfault, MCP memory leak) continue to draw maintainer attention, while large feature PRs in **memory audit**, **SOP approval broker**, and **WASM plugin execution** are moving through review. The community is deeply engaged: many PRs carry `needs-author-action` labels, indicating iterative collaboration. Two PRs were merged/closed today, and one feature issue ([#8653]) was closed.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

**Merged/closed items in the last 24h**  
- **Issue #8653** ([closed]) – [Feature]: Auto-resume the most recent Code session on pane entry (*zerocode*).  
- 2 PRs were merged/closed (IDs not shown in the top-20 list — likely small fixes or documentation changes).

**Notable feature PRs advancing (still open)**  

| PR | Area | Description |
|----|------|-------------|
| [#9027] | SOP | AMQP dispatch idempotency for SOP milestone (#8288) — prevents duplicate runs. |
| [#8893] | Memory | Gated audit trail with observer fan-out (`AuditedMemory` now wired in production). |
| [#8866] | Daemon, MCP | Share MCP registry across heartbeat ticks to avoid repeated server connections. |
| [#8655] | ZeroCode | Consolidate Code pane, rails, and prompt drafts — large refactor (size:XL). |
| [#8661] | WASM | Execute WASM plugins out-of-process via `zeroclaw-plugin-host` sidecar (prototype). |
| [#8852] | Channels | Run installed WASM channel plugins (first real caller wired). |
| [#8905] | Gateway | Per-agent in-flight prompt counter on the web dashboard. |
| [#8897], [#8898], [#8900] | Memory | Retrieval cache, durable global memories, typed memory classification – stacking features. |
| [#8880], [#8848], [#8903] | SOP | Approval broker with quorum, admission policy, and route-delivery layer – stacked PRs. |

---

## 4. Community Hot Topics

**Most commented issues**  

| Issue | Comments | Key topic |
|-------|----------|-----------|
| [#8681] (OPEN) | 9 | Tracker for splitting goal-mode implementation into reviewable PRs. |
| [#5808] (OPEN) | 8 | **Bug**: Default 32k context budget exceeded by system prompt + tools → perpetual preemptive trim (S1). |
| [#6055] (OPEN) | 6 | Feature: Slack thread hydration via `conversations.replies` on first mention. |
| [#6641] (OPEN) | 5 | Feature: Turn-level OTel trace correlation. |
| [#8654] (OPEN) | 4 | **Bug**: skill-review fork panics (out-of-range slice) → SIGSEGV after tool-heavy turn. |
| [#8445], [#7762], [#6074] | 3 each | Telegram multi-message mode, Cron docs & model selection, 153-commit recovery audit. |

**Most commented PRs**  

| PR | Comments | Key topic |
|----|----------|-----------|
| [#9027] | (listed, comment count undefined but top) | SOP AMQP idempotency. |
| [#8893] | – | Memory audit trail. |
| [#8866] | – | MCP registry sharing. |
| [#8926] | – | Emoji presentation sequence counting in ZeroCode. |
| [#8661] | – | WASM out-of-process execution. |
| [#8655] | – | ZeroCode pane consolidation (size:XL). |

**Underlying needs**:  
- Users are blocked by the **default context budget** being too small – the first turn already exceeds 32k tokens due to system prompt + tool definitions ([#5808]).  
- The **skill-review fork crash** ([#8654]) is a reliability blocker for tool-heavy workflows.  
- Community wants better **Slack/Telegram interaction** (thread hydration, multi-message mode).  
- Large **SOP and memory infrastructure** PRs show a push toward enterprise-grade governance and audit.

---

## 5. Bugs & Stability

**Bugs reported or updated today** (ranked by severity)  

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
| [#9019] | **S1 – workflow blocked** | OpenAI Responses provider hardcodes `Vision=false`, rejecting image input before serialization. | New today; no fix PR yet. |
| [#9016] | **S1 – workflow blocked** | OpenAI tool turns fail when Chat Completions rejects `reasoning_effort` with non-`none` value. | New today; no fix PR. |
| [#8654] | **S1 – workflow blocked** | `skill-review` fork panics (out-of-range slice) → daemon SIGSEGV after tool-heavy turns. | Updated; tracked in [#8288] SOP milestone. |
| [#8642] | **S1 – workflow blocked** | MCP/tool-schema cloning drives unbounded RSS growth (split from OOM tracker #5542). | Updated; fix via backoff (#8633) partially addressed but memory path still open. |
| [#8563] | **S1 – workflow blocked** | SOP files not available through web dashboard chat session. | Updated; SOP milestone PRs (#8848, #8880, #8903) aim to fix. |
| [#9017] | **S2 – degraded** | `--config-dir` flag ignored during CLI locale detection, causing wrong language. | New today. |
| [#5808] | **S1 – workflow blocked** | Default 32k context budget exceeded on iteration 1 → perpetual preemptive trim. | Still open since April 16. |

**Key observations**:  
- Two new S1 bugs (OpenAI provider issues) emerged today, both affecting tool-calling with OpenAI-compatible models.  
- The **skill-review SIGSEGV** ([#8654]) and **MCP memory leak** ([#8642]) remain critical unresolved stability risks.  
- No fix PRs have been filed yet for the new OpenAI bugs; existing PRs focus on SOP and memory rather than provider fixes.

---

## 6. Feature Requests & Roadmap Signals

**New features requested today**  

| Issue |
|-------|
| [#9022] – Optional Slack Events API (HTTP Request URL) mode for scale-to-zero deploys. |
| [#9020] – Session rewind and fork-from-message workflows in ZeroCode. |
| [#9009] – *Tracker*: Operator UX Onboarding, Pairing & Self-Service (milestone epic). |
| [#9010] – *Tracker*: ZeroCode Consolidation & Hardening (milestone epic). |

**Recently accepted features likely for v0.8.4**  

| Feature | Target | Risk |
|---------|--------|------|
| **SOP control plane** (daemon-owned, approval broker, admission policy) – [#8288] tracker | v0.8.4? | High |
| **Memory audit trail + typed classification + retrieval cache** (multiple stacked PRs) | v0.8.4? | High |
| **ZeroCode Code pane consolidation** ([#8655]) | v0.8.3/4? | High |
| **WASM plugin out-of-process execution** ([#8661]) | Future | Medium |
| **Per-agent in-flight prompt counter** ([#8860], PR [#8905]) | v0.8.3? | High |

**Prediction**: The next release will likely include the **SOP approval broker** stack and the **memory audit/typed facts** features, as they have multiple stacked PRs up for review and are tied to v0.8.3/v0.8.4 trackers. ZeroCode consolidation ([#8655]) and the operator onboarding epic are also high on the roadmap.

---

## 7. User Feedback Summary

**Pain points voiced in the last 24h**  

- **Context budget too tight** ([#5808]): “Default 32k is exceeded by system prompt + tools on iteration 1.” Still unresolved since April.  
- **SOP not accessible via web dashboard** ([#8563]): “SOP files configured but never shown to agent.”  
- **Telegram single-message concatenation** ([#8445]): “All turns merged into one message; need per-turn messages.”  
- **Cron documentation missing** ([#7762]): “No docs and no way to run cron with a specific model.”  
- **OpenAI vision/tool reasoning failures** ([#9019], [#9016]): Two new S1 bugs reported today, blocking image inputs and tool turns.

**Positive signals**  

- Contributors are actively pushing large features (memory, SOP, WASM, ZeroCode) with high code quality.  
- The community self-organizes via trackers and milestone pages (e.g., [#9009], [#9010]).  
- Multiple PRs receive iterative feedback with `needs-author-action` label, showing responsive author-maintainer loop.

---

## 8. Backlog Watch

**Long-unanswered issues needing maintainer attention**  

| Issue | Created | Last Update | Why stalled |
|-------|---------|-------------|-------------|
| [#5808] | 2026-04-16 | 2026-07-12 | S1 context-budget bug; design decision needed on default or policy change. |
| [#6074] | 2026-04-24 | 2026-07-12 | Audit of 153 lost commits from bulk revert; requires manual recovery planning. |
| [#7314] | 2026-06-06 | 2026-07-12 | WASM plugin program tracker – broad scope, deferred coordination. |

**PRs that may require maintainer triage** (marked `needs-author-action` or `stale-candidate`)  

| PR | Label | Issue |
|----|-------|-------|
| [#8353] | `stale-candidate`, `needs-author-action` | Minor error message improvements, awaiting review since June 26. |
| [#8796] | `needs-author-action` | ZeroCode slash skill flow hardening. |
| [#8866] | `needs-author-action` | MCP registry sharing fix. |
| [#8893], [#8895], [#8897], [#8898], [#8900], [#8984] | `needs-author-action` | Multiple memory feature PRs stacked; require sequential review. |
| [#8903], [#8880], [#8848] | `needs-author-action` | SOP stacked PRs – large, interdependent, high risk. |

**Recommendation**: The **SOP and memory PR stacks** are high-priority and should be reviewed as batches to avoid merge conflicts. The **context budget bug** ([#5808]) and **commit recovery** ([#6074]) need maintainer decisions to unblock users.

---

*Generated from GitHub activity on zeroclaw-labs/zeroclaw – Data as of 2026-07-13.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*