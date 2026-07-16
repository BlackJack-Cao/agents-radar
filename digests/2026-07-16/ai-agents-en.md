# OpenClaw Ecosystem Digest 2026-07-16

> Issues: 484 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-15 23:41 UTC

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

# OpenClaw Project Digest – 2026-07-16

## 1. Today's Overview
The OpenClaw project is experiencing **extremely high activity**, with 484 issues and 500 pull requests updated in the last 24 hours. The community is actively engaged: 168 issues were closed and 152 PRs were merged/closed, signaling strong maintenance momentum. However, the volume also reflects **significant stability concerns** – the recent `2026.7.1` release introduced several critical gateway crash-loop and state migration bugs, which are now the primary focus of ongoing fixes. A new beta release `v2026.7.2-beta.1` was published today, promising remote coding sessions and native automation improvements, but the detailed changelog was truncated in source data.

## 2. Releases
- **v2026.7.2-beta.1** (published 2026-07-16)
  - **Highlights:** Remote coding sessions (run Control UI sessions on cloud workers, resume OpenCode/Pi sessions in terminal); native automation and nodes (details incomplete in source).
  - **Migration notes:** None explicitly listed; users upgrading from `2026.7.1` should be aware of ongoing startup-migration guard issues (see Bugs section). No breaking changes declared.

## 3. Project Progress
Among the 152 merged/closed PRs today, key fixes and features include:
- **LINE channel fix:** `#107734` resolves a `GatewayDrainingError` that blocked every inbound LINE message. ✅
- **SQLite error clarity:** `#108382` improves the SQLite version error message to avoid user confusion. ✅
- **Feishu timeout:** `#105549` adds missing timeout to Feishu app-registration HTTP calls. ✅
- **Slack read timeout:** `#107195` adds a 30s timeout on Slack read WebClients without affecting Bolt’s `App.client`. ✅
- **Subagent registry resurrection:** `#105793` prevents stale `subagents/runs.json` from being re-imported after clean-up. ✅
- **Control UI reliability:** `#108204` keeps Workspace UI on the newest version after overlapping reloads. ✅
- **CDP UTF-16 safety:** `#108092` fixes emoji/surrogate pair truncation in browser cursor previews. ✅
- **APNs plugin approvals:** `#108505` delivers plugin approval requests to paired iOS devices via APNs. ✨ new feature
- **vLLM cleanup:** `#108500` and `#108503` remove unused registration shim and runtime bridge. ✅

## 4. Community Hot Topics
| Issue / PR | Comments | 👍 | Subject | Underlying Need |
|------------|----------|---|---------|----------------|
| [#75](https://openclaw/openclaw Issue #75) | 113 | 81 | **Linux/Windows Clawdbot Apps** (enhancement) | Cross-platform support – users want parity with macOS/iOS/Android |
| [#104721](https://openclaw/openclaw Issue #104721) | 17 | 1 | **Tool results return literal "(see attached image)"** (P0 bug) | Reliability of tool output; complete breakage of file reads |
| [#102020](https://openclaw/openclaw Issue #102020) | 14 | 1 | **Second message fails with "reply session initialization conflicted"** (bug) | Session state consistency across channels |
| [#91009](https://openclaw/openclaw Issue #91009) | 12 | 2 | **Codex PreToolUse native hook spawns CPU-bound processes** (P1) | Performance regression – high CPU usage from tool hooks |
| [#84583](https://openclaw/openclaw Issue #84583) | 12 | 3 | **Cron announce delivery triggers EmbeddedAttemptSessionTakeoverError** (P2) | Concurrency – cron messages clash with active user sessions |

The community is most vocal about **cross-platform app availability** (#75, open since Jan 2026) and **severe regressions in tool output** (#104721). Several long-running issues (e.g., #91009, #84583) indicate deep architectural problems with session locking and provider hook execution that persist across multiple releases.

## 5. Bugs & Stability
**Critical (P0 / UX release blocker):**
- **[#107220](https://openclaw/openclaw Issue #107220) – 2026.7.1 gateway crash-loop: legacy memory sidecar `meta`/`chunks` conflicts fatal** – No fix PR yet; impacts upgrade from `2026.6.11`.
- **[#107227](https://openclaw/openclaw Issue #107227) – Startup-migration gate fatal; `openclaw doctor` does not resolve** – 3 👍; reported as crash-loop with no documented remedy. Fix PR [#105793](https://openclaw/openclaw PR #105793) related but not yet merged.
- **[#107694](https://openclaw/openclaw Issue #107694) – Gateway fails due to strict startupMigrationWarnings guard on benign legacy skips** – No fix PR yet.
- **[#107330](https://openclaw/openclaw Issue #107330) – OpenClaw update crash on Windows 11** – Fix not yet merged.

**High severity (P1):**
- **[#107449](https://openclaw/openclaw Issue #107449) – cron tool JSON Schema incompatible with llama.cpp tool parser** (3 👍) – Regressed in `2026.7.1`; linked PR open.
- **[#106779](https://openclaw/openclaw Issue #106779) – `2026.7.1` local llama.cpp provider fails with "Unable to generate parser"** – Needs maintainer review.
- **[#103734](https://openclaw/openclaw Issue #103734) – Codex usage-limit surfaced as `promptError`, model fallback never fires** (closed today, fix merged).

**Today’s regression reports:**
- Multiple reports confirm that upgrading to `2026.7.1` leaves the gateway unstartable due to memory-index migration conflicts. The project is actively patching these, but users should hold off on upgrading until `v2026.7.2` stable.

## 6. Feature Requests & Roadmap Signals
- **#75 – Linux/Windows Clawdbot Apps** (113 comments) – Most upvoted feature. Likely targeted for next major release given sustained community demand.
- **#87660 – Memory lifecycle-aware LLM curation for MEMORY.md** (2 👍) – Automated memory management is a frequent ask; could land in `2026.8.x`.
- **#82548 – AI safety and quality observability events** – Enterprise-grade observability signals (prompt injection, citation quality). Pipeline signal.
- **#107686 – Intelligent multi-LLM router to reduce token costs** (feature request, P3) – Community interest in automatic model selection per task.

**Prediction for v2026.7.2 stable:** The beta already includes remote coding sessions and native automation nodes. Likely to also include fixes for the gateway startup migration guard (PR #105793 and related patches) and the LINE channel fix (#107734).

## 7. User Feedback Summary
- **Pain points:**
  - **Upgrade breakage**: Multiple users report that `2026.7.1` renders the gateway unusable with no clear recovery path (issues #107220, #107227, #107694). Frustration is high.
  - **Tool output corruption**: Issue #104721 (“(see attached image)” placeholder) is a complete regression – users cannot trust basic file read operations.
  - **Session state loss**: Issues #102020 (reply initialization conflict) and #84583 (cron takeover) show that multi-turn conversations remain fragile.
  - **Model fallback failures**: Issue #103734 (closed today) and #85103 (open) indicate provider-chain logic is still brittle.
- **Satisfaction:**
  - The new remote coding sessions feature is positively anticipated (highlighted in v2026.7.2-beta.1).
  - Community appreciates the rapid closure of critical bugs (e.g., #103734 fixed today).

## 8. Backlog Watch
Several important issues and PRs have been open for weeks or months without maintainer action:

| Item | Age | Status | Notes |
|------|-----|--------|-------|
| [#75](https://openclaw/openclaw Issue #75) – Linux/Windows Apps | Since Jan 2026 | Needs maintainer review, security review, product decision | Highest comment count; no assigned milestone |
| [#11665](https://openclaw/openclaw Issue #11665) – Webhook hook session reuse | Since Feb 2026 | Needs maintainer & product decision, linked PR open | Multi-turn webhook support documented but broken |
| [#67915](https://openclaw/openclaw Issue #67915) – Local assistant attachments show "Unavailable" | Since Apr 2026 | Needs maintainer review | Users unable to see media despite correct config |
| [#77012](https://openclaw/openclaw Issue #77012) – WebChat transcript overwritten every turn | Since May 2026 | Needs maintainer review, live repro | Regression from 5.2; still open after 2 months |
| [#75621](https://openclaw/openclaw Issue #75621) – Duplicate stdio MCP children (memory leak) | Since May 2026 | Closed stale but fix shape not clear | May reappear |
| PR [#87349](https://openclaw/openclaw PR #87349) – Allow host-local APK media sends | Since May 2026 | Waiting on author | Low-risk, useful for Android users |

**Call to maintainers:** The critical P0 crash-loop issues (#107220, #107227, #107694) should be prioritized above all else, as they block all users upgrading to `2026.7.1`. Long-standing feature requests (#75, #11665) would greatly improve community trust if addressed in the next stable release.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date Range:** 2026-07-16 | **Analysis Scope:** 12 Open-Source AI Agent Projects

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a **polarization between rapid expansion and quality assurance**. While flagship projects like OpenClaw, ZeroClaw, and CoPaw push major architectural changes (schema V4, multi-user auth, v2.0 memory infrastructure), they simultaneously grapple with critical stability regressions that block user upgrades. A second tier of projects—NanoBot, IronClaw, and Moltis—is demonstrating **mature maintenance discipline**, closing security audit findings and stabilizing core integrations before adding new features. Meanwhile, smaller projects (PicoClaw, NullClaw, ZeptoClaw) show dormancy signals, suggesting consolidation around the dominant frameworks. The ecosystem is converging on **multi-provider resilience, session state durability, and memory lifecycle management** as the top cross-cutting challenges.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Overall Health Score | Activity Tier |
|---|---|---|---|---|---|
| **OpenClaw** | 484 | 500 | ✅ v2026.7.2-beta.1 | 🔴 Strained | Extreme |
| **ZeroClaw** | 38 | 50 | ❌ None | 🟡 Moderate | Very High |
| **CoPaw** | 50 | 43 | ❌ None | 🟡 Strained | Very High |
| **IronClaw** | 22 | 38 | ❌ None | 🟡 Moderate | Very High |
| **Hermes Agent** | 50 | 50 | ❌ None | 🟢 Healthy | High |
| **NanoBot** | 24 | 26 | ❌ None | 🟢 Healthy | High |
| **Moltis** | 1 | 6 | ❌ None | 🟢 Healthy | Moderate |
| **LobsterAI** | 6 | 17 | ✅ v2026.7.15 | 🟢 Healthy | Moderate |
| **NanoClaw** | 2 | 11 | ❌ None | 🟡 Moderate | Moderate |
| **PicoClaw** | 6 | 2 | ❌ None | 🟡 Low | Low |
| **TinyClaw** | 0 | 1 | ❌ None | 🟢 Stable | Low |
| **NullClaw** | 0 | 0 | ❌ None | ⚪ Dormant | None |
| **ZeptoClaw** | 0 | 0 | ❌ None | ⚪ Dormant | None |

**Health Score Scale:** 🟢 Healthy (active maintenance, few critical bugs) → 🟡 Moderate/Strained (high activity with regressions) → 🔴 Strained (critical blockers, upgrade risks) → ⚪ Dormant (no activity)

**Key observation:** The three highest-activity projects (OpenClaw, ZeroClaw, CoPaw) also carry the most critical unresolved bugs, indicating a **velocity-vs-stability tension** that technical decision-makers should weigh carefully.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Largest community engagement**: 484 issues + 500 PRs in 24 hours—5-10× higher than any peer. This gives it the richest bug discovery and fastest feature iteration.
- **First-mover reference implementation**: As the core reference (`github.com/openclaw/openclaw`), it sets architectural patterns that forked projects (PicoClaw, NanoClaw) emulate.
- **Broadest channel/feature surface**: LINE, Slack, Feishu, APNs, remote coding sessions, native automation nodes—no other project matches the feature breadth.
- **Rapid beta cycles**: v2026.7.2-beta.1 shipped within days of v2026.7.1, demonstrating strong release engineering despite bugs.

### Technical Approach Differences
- **Monolithic gateway with heavy migration guards**: OpenClaw's `2026.7.1` release introduced a legacy memory sidecar migration that crashes the gateway—a complexity cost of supporting long upgrade paths that competitors like NanoBot (which closed 21 audit findings in one day) avoid by maintaining leaner architectures.
- **Beta-as-stable culture**: OpenClaw releases beta versions with high frequency and treats them as de facto production. This accelerates feature delivery but erodes trust (4 P0 crash-loop bugs identified in one digest).

### Community Size Comparison
| Metric | OpenClaw | Next Largest (ZeroClaw/CoPaw) |
|---|---|---|
| Daily issue/PR volume | 984 | 88–93 |
| Critical P0 bugs open | 4 | 2–3 |
| Feature-request engagement | #75 with 113 comments | Next highest: 7–12 comments |

**Bottom line:** OpenClaw owns the mindshare and feature surface, but adopts an **"iterate fast, fix later"** posture. Teams prioritizing stability should evaluate NanoBot, Moltis, or IronClaw as alternatives for production deployments.

---

## 4. Shared Technical Focus Areas

The following requirements emerged independently across multiple projects, indicating sector-wide pain points:

| Focus Area | Affected Projects | Specific Expression |
|---|---|---|
| **Multi-Provider Failover & Routing** | OpenClaw, ZeroClaw, NanoClaw, Moltis, IronClaw | Intelligent model selection per task (#107686), quota fallback (PR #3057), topic-based routing (#574), cost-aware orchestration |
| **Session State & Memory Durability** | OpenClaw, CoPaw, ZeroClaw, Hermes Agent, NanoBot | Amnesia after upgrade (#6148), credential rebind (#64271), workspace_scope loss (#4940), context overflow trimming (PR #9083) |
| **Cross-Platform Desktop/CLI Parity** | OpenClaw, CoPaw, IronClaw, PicoClaw | Linux/Windows app (OpenClaw #75), Galaxy Kylin OS (CoPaw #6125), ARM64 launcher (PicoClaw #3260), Windows update abort (Hermes #60239) |
| **Security & Authentication Hygiene** | NanoBot, IronClaw, ZeroClaw, Hermes Agent | OIDC auth (#7141), credential-pool rebind (#64271), authorization bypass audit (NanoBot 21 fixes), pluggable security enforcement (#7142) |
| **Delivery Reliability** | IronClaw, NanoClaw, CoPaw | Transient failure retry (NanoClaw #3058), Slack message routing bugs (IronClaw P1 cluster), silently dropped messages (CoPaw #5995) |
| **UI/UX Polish & Feedback** | IronClaw, LobsterAI, Hermes Agent | Blank screen on first message (#6126), persistent ads (#2342), destructive-action modals (PR #6084), composer readiness (#63210) |

**Pattern:** The industry is transitioning from "can it run?" to "can it run reliably across diverse environments with proper state management?"—a sign of ecosystem maturation.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | ZeroClaw | CoPaw |
|---|---|---|---|---|---|---|
| **Target User** | Power users, developers | Security-conscious deployers | Desktop-first professionals | Enterprise/QA teams | Multi-tenant orgs | Consumer/enterprise hybrid (CN focus) |
| **Core Philosophy** | Feature breadth, fast iteration | Correctness, audit-driven | Polished desktop UX | Stabilization, Reborn runtime | Infrastructure (auth, config) | Memory-first, agent orchestration |
| **Architecture** | Monolithic gateway | Modular, event-driven | Electron desktop + agents | Rust-based, extension runtime | Schema V4, multi-tenant | Python-based, ReMe memory |
| **Differentiator** | Largest ecosystem, most channels | Best security posture in class | Desktop integration quality | QA infrastructure, Slack reliability | Enterprise auth & air-gapped mode | Chinese enterprise OS support, agent collab |
| **Risk Profile** | High - critical upgrade blockers | Low - rapid audit fixes | Medium - platform-specific regressions | Medium - Slack reliability crisis | High - S1 bugs open for months | High - memory leak, v2.0 regressions |
| **Innovation Signal** | Remote coding sessions | One-click Render deploy | Carbon Voice platform | Channel lifecycle state-machine tests | Memory/conversation separation RFC | Pawapp SDK, Chrome extension plugin |

**Key insight:** Projects are differentiating not on core agent capabilities (most support similar provider sets and tool-use patterns) but on **operational maturity** (security, state management, platform support). The next competitive moat will be reliability under real-world deployment conditions.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Evolution (High velocity, moderate stability risk)
- **OpenClaw, ZeroClaw, CoPaw, IronClaw** — Shipping major architectural changes weekly. Suitable for teams that can tolerate instability for early access to new features. IronClaw's Reborn migration and ZeroClaw's Schema V4 are the most disruptive shifts.

### Tier 2: Stabilization Phase (Healthy cadence, low risk)
- **NanoBot, Moltis, LobsterAI** — Closing bugs faster than opening new ones. NanoBot's 42-finding security audit closure is a standout maturity signal. Moltis merged 6 PRs with zero new issues. These projects offer production-grade stability.

### Tier 3: Maintenance Mode (Low activity, stable)
- **TinyClaw** — Single PR fix, zero issues. Stable but unlikely to gain new features rapidly.
- **PicoClaw** — Low throughput, closed stale bugs without fixes. May be a candidate for deprecation if development stalls further.

### Tier 4: Dormant (No activity)
- **NullClaw, ZeptoClaw** — No updates in 24h. Effectively abandoned or in hibernation.

**Maturity Trajectory:** The ecosystem is **consolidating around 4–5 active projects** (OpenClaw, ZeroClaw, CoPaw, IronClaw, NanoBot). Smaller frameworks lack the contributor base to keep pace with the complexity of memory management, multi-provider orchestration, and security hardening.

---

## 7. Trend Signals

### Emerging Industry Requirements

1. **Multi-Model Routing as Table Stakes**
   - 4 of 12 projects have active RFCs or implementations for intelligent model selection. The community expects agents to automatically choose between cheap/fast and expensive/capable models per task—not require manual provider switching.

2. **Memory and Session State Decoupling**
   - CoPaw's ReMe integration, ZeroClaw's memory/conversation separation RFC (#9048), and OpenClaw's memory lifecycle RFC (#87660) all point to **persistent memory as a first-class architectural concern**, separate from conversational context. This is a prerequisite for long-running agents.

3. **MCP/A2A Protocol Convergence**
   - Moltis's ACP agent auto-detection (PR #1149), ZeroClaw's A2A agent discovery RFC (#7218), and OpenClaw's subagent registry fixes (#105793) signal that **agent-to-agent communication protocols are becoming standard infrastructure**.

4. **Enterprise Security Stack is Non-Negotiable**
   - OIDC, SSH challenge, air-gapped mode, pluggable enforcement—these are not "advanced features" but baseline requirements for any project targeting production deployment. NanoBot's audit-driven approach may become the norm.

5. **Delivery Reliability Metrics Matter**
   - Transient failure handling, message queuing, and idempotent delivery are emerging as critical differentiators. IronClaw's Slack crisis and NanoClaw's retry fix (#3058) show this is where user trust is won or lost.

6. **Proactive Agent Capabilities**
   - Cron/trigger systems (Hermes, NanoBot), heartbeat triggers (NanoBot #4620), and session-local triggers (NanoClaw PR #4942) indicate a shift from **reactive chat to proactive automation**. This is the most significant paradigm shift in the ecosystem—agents that initiate action, not just respond.

### Value for AI Agent Developers

- **If you need stability for production**: Invest in NanoBot (best security), Moltis (lean, focused), or LobsterAI (polished desktop UX).
- **If you want cutting-edge features**: OpenClaw and ZeroClaw offer the most innovation, but budget for upgrade failures and regression debugging.
- **If you serve Chinese enterprise**: CoPaw has the strongest localization (Galaxy Kylin, WeChat integration, domestic model support).
- **If you build multi-tenant or B2B solutions**: ZeroClaw's auth stack and IronClaw's extension runtime provide the strongest foundations.
- **Watch for**: The "unified agent runtime" pattern (IronClaw's PR #6116) and memory-decoupling RFCs (ZeroClaw #9048) will likely become architectural standards within 3–6 months. Early adoption of these patterns may reduce future migration costs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-16

## 1. Today's Overview

NanoBot saw an intense burst of activity with **24 issues** and **26 pull requests** updated in the past 24 hours. The majority of issues (21) were **closed**, nearly all of them security and correctness findings from a deep code audit by community member `hamb1y`. On the PR side, **11 were merged or closed**, including several high‑priority fixes. Three open issues remain, two related to unified‑session heartbeat routing and one to Qwen model reasoning exposure. Overall, the project health is strong: the maintainers are rapidly addressing audit findings, improving stability, and merging community contributions.

## 2. Releases

_No new releases today._

## 3. Project Progress

**Merged/closed PRs today (11 total; highlights from visible PRs):**

- `#4944` – **fix(gateway): stop channels before draining tasks** (prevents DingTalk Stream from hanging on shutdown)
- `#4943` – **fix(providers): honor Codex proxy config consistently** (OAuth and image‑generation clients now use the configured proxy)
- `#4649` – **fix(webui): correct activity timer duration** (live “Working for …” now starts from the user turn, not first activity row)
- `#4870` – **refactor(channels): share markdown helpers across Telegram, Signal, Feishu** (reduces duplicated converter code)
- `#4813` – **fix(loop): guard `.strip()` on `msg.content` against list‑form multimodal data** (prevents `AttributeError` crash)
- `#4926` – **fix: include Feishu SDK in dev dependencies** (aligns local testing with documented setup)

In the same period, **21 issues were closed** — almost all from the 42‑finding audit report (`#4815`), including authorisation bypasses (`#4779`, `#4778`, `#4777`, `#4776`), context‑trimming bugs (`#4056`), token‑budget spurious values (`#4802`), and many others. This represents a massive leap in code correctness and security posture.

## 4. Community Hot Topics

**Most commented issue:**

- **#4924** – [bug] `cli/commands.py:_pick_heartbeat_target_from_sessions` fails when `unifiedSession: true`  
  (4 comments) — The open issue describes a failure to deliver heartbeats when only a unified session exists. A fix PR (`#4928`) is already open and ready for review.

**Other active items:**

- **#4934** – [bug] Qwen models expose thinking/reasoning content in chat responses (1 comment)  
- **#4940** – [bug] `read_session_metadata()` lacks legacy filename fallback, causing WebUI workspace_scope loss after restart (0 comments, but created today)

Underlying needs: users demand robust multi‑session handling (unified session reliability), correct model output (Qwen reasoning stripping), and data persistence across restarts (metadata fallback). The maintainers are responding with dedicated PRs for each issue.

---

## 5. Bugs & Stability

**Open bugs (ranked by severity):**

| Issue | Severity | Description | Fix PR exists? |
|-------|----------|-------------|----------------|
| #4924 | **High** | Heartbeat routing fails under `unifiedSession: true` – affects all users of the unified‑session feature | ✅ PR #4928 |
| #4940 | **High** | `workspace_scope` metadata lost after restart for sessions created with legacy filenames | ✅ PR #4941 |
| #4934 | **Medium** | Qwen models leak thinking/reasoning content into final chat response | ✅ PR #4946 |

All three bugs directly impact user experience and have corresponding PRs in the open state. **21 other bugs were closed today**, many of which were long‑standing (some dating to May), thanks to the comprehensive audit by `hamb1y`.

---

## 6. Feature Requests & Roadmap Signals

**Notable open PRs (features/enhancements):**

- `#4937` – **One‑click Deploy to Render** – aims to simplify cloud deployment for end users
- `#4942` – **feat(triggers): let agents manage session‑local triggers** – empowers agents to create/destroy their own timer triggers
- `#4919` – **feat(telegram): support custom Bot API base URL and extra headers** – enables self‑hosted Telegram Bot API / enterprise gateways
- `#4620` – **add heartbeat trigger command** – gives users a CLI command to trigger heartbeats with dry‑run and JSON output
- `#4621` – **feat(memory): gate archive facts with provenance context** – improves fact consolidation with source‑aware filtering

**Prediction:** The next minor release will likely include the unified‑session heartbeat fix, Qwen reasoning control, and session‑local triggers. The Render deployment button and Telegram custom API are also strong candidates for inclusion.

---

## 7. User Feedback Summary

- **Pain points** voiced:
  - Unified‑session heartbeat not working: users could not receive proactive messages (e.g., cron, heartbeats) when using `unifiedSession: true`.
  - Qwen model thinking text leaking into final output — “verbose reasoning content” and “slower response times” for simple queries.
  - Session metadata loss after restart: custom project paths (workspace_scope) were forgotten, forcing manual reconfiguration.
- **Satisfaction signals**: The community contributed the 42‑finding audit and numerous PRs, and maintainers merged fixes quickly. The high volume of closed issues (21) in one day suggests users feel heard.
- **Use‑case diversity**: Deployments range from WebUI to Telegram, Feishu, and Signal. The addition of a Render one‑click deployment and custom Telegram Bot API indicates growing enterprise/self‑hosting interest.

---

## 8. Backlog Watch

All audit‑related issues (dates May–July) were closed today, so the backlog of known security/bug findings is effectively cleared. However, several feature PRs from early July remain open and have not been merged:

- `#4621` (memory provenance gating) – last updated July 15, still open  
- `#4620` (heartbeat trigger command) – last updated July 15, still open  
- `#4822` (WebUI automation source preservation) – last updated July 7, no recent activity on the PR  

These PRs are not blocked but may require additional review. No new issues appear to be awaiting maintainer attention beyond the three open bugs already discussed.

_All links: issues and PRs under `HKUDS/nanobot`._

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent Project Digest — 2026-07-16

### 1. Today’s Overview

The project saw **high activity** with 50 issues and 50 pull requests updated in the last 24 hours. Of those, 34 issues were closed (68% closure rate), while only 4 PRs were merged/closed — indicating a strong focus on bug triage and user-reported problems. No new releases were published. The community reported several regressions and long-standing pain points, but the maintainer team has been actively applying fixes, with many closed issues tagged `sweeper:implemented-on-main`.

### 2. Releases

*None published today.*

---

### 3. Project Progress

Only **4 PRs were merged or closed** in the last 24 hours. Two notable ones from the top-20 list:

- **PR #63391** (`fix(desktop): rebuild node-pty for Electron when no prebuild covers the target`) — *Merged*. Fixes a crash on Linux where the desktop app failed to load the native `pty.node` module because node-pty does not publish Linux prebuilds.
- **PR #19419** (`feat: add clean dashboard theme`) — *Closed* (merged earlier). Adds a built-in Clean dashboard theme with tuned light-theme typography and search highlights.

Additionally, 46 PRs remain open, indicating ongoing feature work and fixes. A significant portion of the open PRs are labelled with `sweeper:risk-*` (session-state, message-delivery, security-boundary), suggesting careful review is under way.

---

### 4. Community Hot Topics

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#64271 – Gateway sessions need a public credential-pool rebind path after auth switch](https://github.com/NousResearch/hermes-agent/issues/64271) | **4** | Long-running gateway sessions pin stale credentials; requires a rebind path after auth changes. **Open**, no fix PR yet. |
| [#60345 – MoA reference models silently degrade on context overflow](https://github.com/NousResearch/hermes-agent/issues/60345) | **4** | MoA reference calls fail silently when context window is too small. **Closed**, fix applied. |
| [#60239 – Windows `hermes update` abort due to concurrent-instance guard](https://github.com/NousResearch/hermes-agent/issues/60239) | **3** | The update command falsely detects its own venv launcher as another instance. **Closed**, fix on main. |
| [#63210 – Desktop composer not ready on new session](https://github.com/NousResearch/hermes-agent/issues/63210) | **3** | First message in new chat fails; text from previous session remains. **Closed**, fix applied. |
| [#63192 – ACP `session/set_model` fails with stale static catalog](https://github.com/NousResearch/hermes-agent/issues/63192) | **3** | Model selection for `nvidia/nemotron` on Nous provider returns Internal Error. **Closed**, cannot reproduce. |
| [#63170 – TUI generates tool-calls as text instead of executing](https://github.com/NousResearch/hermes-agent/issues/63170) | **3** | In TUI mode, agent writes bash code blocks instead of calling tools. **Closed**, cannot reproduce. |
| [#60105 – Dashboard 500 when only BasicAuthProvider registered](https://github.com/NousResearch/hermes-agent/issues/60105) | **3** + 1 👍 | Unauthenticated requests to dashboard root return 500 instead of login. **Closed**, fix on main. |

**Underlying needs**: Users are struggling with credential lifecycle management in long-running sessions (auth switches, stale pools), silent degradation of MoA reference models, and platform-specific UX regressions (Windows update, desktop composer, TUI tool execution). The maintainers have addressed most of these swiftly, but the credential rebind issue (#64271) remains open and is the most active open topic.

---

### 5. Bugs & Stability

**High severity** (P2 or above, with clear impact):

- **Windows update abort** (#60239) — P2, *fixed on main*. The `hermes update` command on Windows incorrectly detects its own venv launcher as a concurrent instance, aborting updates.  
- **Desktop composer not ready on new session** (#63210) — P2, *fixed on main*. First Enter in new chat fails; message stays in input.  
- **MoA custom_provider credentials not passed** (#60064, #60068, #60065) — P2, *fixed on main*. HTTP 401 when using custom provider as reference model.  
- **Copilot missing `Copilot-Integration-Id` header** (#63188) — P2, *fixed on main*. Requests to GitHub Copilot lack required header, causing 400 errors.  
- **Telegram streaming + voice attachment bug** (#60556) — P2, *fixed on main*. TTS output renders as plain audio attachment instead of voice bubble when streaming is enabled.  
- **Telegram polling conflicts** (#63387) — P2, *fixed on main*. Repeated `Conflict: terminated by other getUpdates request` errors.  
- **Kanban goal workers never enter the goal loop** (#63396) — P3, *fixed on main*. Dispatcher passes env var but the worker uses the single-query path, never activating the goal loop.  
- **Linux desktop crash (node-pty)** (PR #63391) — P2, *merged today*. Packaged app crashes at launch due to missing Linux prebuild of `pty.node`.  

**Lower severity** (P3, needs-repro, or cannot reproduce):

- #63303 – Azure Foundry API: no option to override header name (Bearer vs custom).  
- #63250 – Discord “Always” approval never persists to allowlist in group sessions.  
- #63237 – Sidebar inconsistency across windows (different number of items for same session).  
- #60174 – Dangerous-command approval deadlock on worker threads (regression).  
- #60536 – Generic bug report with logs (no summary).  

**Observed regressions**:  
The dangerous-command deadlock (#60174) is reported as a regression from earlier fix #15216. The desktop composer bug (#63210) also appears to be a new regression in v0.18.2.

---

### 6. Feature Requests & Roadmap Signals

**Already implemented** (tagged `sweeper:implemented-on-main`):

- **Configurable persistent memory char limit** (#63107) — users can now set `memory.char_limit` in config.  
- **Desktop background image configuration** (#60414) — users can disable/replace the fixed background.  
- **Conditional LLM invocation from no-agent cron scripts** (#60256) — no-agent scripts can now conditionally wake the LLM.  
- **Configurable CLI/TUI themes** (#60538) — custom color/themes available.  
- **Clarified Ctrl+1…9 shortcuts in Project sidebar** (#60546) — behavior adjusted for project views.  
- **Kanban goal mode workers** (#63396) — root cause fixed.  

**Still open or under consideration**:

- **Gateway credential rebind path** (#64271) — P3, open. If resolved, it would solve a key auth lifecycle pain.  
- **Astromech-style droid mascot** (#56588) — P3, open, low priority.  
- **Mistral Vibe API key support** (#63060) — P3, closed as not planned.  
- **Native Carbon Voice platform** (PR #43226) — open since June 10; likely targeted for a future release.  

**Predictions**: The next minor version (v0.19?) will likely include the credential rebind fix (#64271) and the TUI theme system (#60538), both of which have seen heavy community traction. The Carbon Voice platform may land as an experimental feature.

---

### 7. User Feedback Summary

**Positive signals**:  
- Many bugs are fixed within days (often same week) — users appreciate the rapid `sweeper:implemented-on-main` turnarounds.  
- Feature requests like configurable memory limit and desktop themes are being delivered, showing the team listens to power users.

**Pain points**:  
- **Windows users** face the most friction: update abort, desktop composer issues, and node-pty crashes.  
- **MoA reliability** is a recurring concern – silent degradation, credential passing failures, and reference models issuing tool calls incorrectly.  
- **Telegram platform** users report polling conflicts and voice attachment formatting issues.  
- **Long-running session state** is fragile – credential pools, model overrides, and delivery target dead flags can persist incorrectly.  
- **TUI tool execution** inconsistency (Danish-language report #63170) suggests locale or platform-specific rendering problems.

**Satisfaction**: High engagement (50 issues/50 PRs per day) indicates a healthy, active user base. The team’s ability to close 34 issues in 24h shows strong maintainer presence.

---

### 8. Backlog Watch

**Oldest open PR** (unmerged, likely blocked or slow-review):

- [#43226 – feat(platforms): add Carbon Voice as a native messaging platform](https://github.com/NousResearch/hermes-agent/pull/43226)  
  *Opened 2026-06-10, last updated 2026-07-15.* 35 days old. Requires careful security and compatibility review (labelled with four `sweeper:risk-*` tags). This feature could expand Hermes’ reach but needs maintainer capacity.

**Important open issue without clear fix**:

- [#64271 – Gateway sessions need a public credential-pool rebind path after auth switch](https://github.com/NousResearch/hermes-agent/issues/64271)  
  *Opened 2026-07-14, 4 comments, P3.* Long-running gateway sessions pin stale credentials after auth switch. No assignee or linked PR. This is a design-level change and may require architectural discussion.

**Other open issues of concern**:

- [#64933 – Desktop model picker creates duplicate provider entries with wrong baseUrl](https://github.com/NousResearch/hermes-agent/issues/64933)  
  *Opened 2026-07-15, 2 comments.* UI state management bug that corrupts `models.json`. No fix PR yet.  
- [#56588 – Add astromech-style droid mascot to Petdex](https://github.com/NousResearch/hermes-agent/issues/56588)  
  *Opened 2026-07-01, 2 comments.* P3, but has been open for two weeks without maintainer response – may be deprioritized.

**Recommendation**: The maintainers should prioritize #64271 (credential rebind) and #64933 (duplicate provider entries) as they directly affect user trust in session continuity and configuration integrity. The Carbon Voice PR (#43226) should be reviewed or explicitly deferred to reduce backlog staleness.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-16

## 1. Today's Overview
Project activity today is moderate, with 6 issues updated in the last 24 hours (3 closed, 3 opened) and 2 open pull requests. The three closed issues were stale bug reports regarding tool-call leakage and OAuth login failures, likely auto-closed due to inactivity. Three new issues were opened: two bugs (missing ARM64 launcher, hook deserialization defect) and one feature request (stateless gateway mode). No PRs were merged or closed, and no new releases were published. The community is actively reporting platform-specific blockers and requesting improvements for gateway sessions.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
No pull requests were merged or closed today. Two open PRs remain:
- [#3259 – Update PicoClaw description for parallelization](https://github.com/sipeed/picoclaw/pull/3259) (opened 2026-07-15): a documentation-only change highlighting better parallelization.
- [#3222 – refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222) (opened 2026-07-03): a larger refactor of the Delta Chat integration, reducing code by ~200 lines, removing legacy features, and improving documentation. Neither PR has been merged yet, so no feature advancements or fixes landed today.

## 4. Community Hot Topics
The most commented issues today are already closed:
- [#3153 – [BUG] Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text](https://github.com/sipeed/picoclaw/issues/3153) – 4 comments. This issue described a scenario where tool calls from the `doubao-seed-2.0-pro` model are returned as raw text instead of being executed. Although closed as stale, it highlights a need for more robust tool-call parsing across different providers.
- [#3197](https://github.com/sipeed/picoclaw/issues/3197) and [#3196](https://github.com/sipeed/picoclaw/issues/3196) – each with 2 comments, both reporting OAuth login failures for Codex and Antygravity. Both closed as stale; users were likely waiting for a fix or workaround.

New open issues have not yet attracted comments but may become active:
- [#3260 – ARM64 launcher missing](https://github.com/sipeed/picoclaw/issues/3260)
- [#3258 – Hook deserialization defect](https://github.com/sipeed/picoclaw/issues/3258)
- [#3257 – Stateless/no-history mode for gateway sessions](https://github.com/sipeed/picoclaw/issues/3257)

## 5. Bugs & Stability
Two new bugs were reported today, ranked by severity:

- **High** – [#3260 – picoclaw launcher doesn't exist for ARM64 (arm64) release](https://github.com/sipeed/picoclaw/issues/3260)  
  Reported on a Raspberry Pi 3B running Raspbian Lite. The ARM64 build downloaded from picoclaw.io lacks an executable launcher, making the software unusable on that architecture. No fix PR exists yet. This is a blocker for all ARM64 users.

- **Medium** – [#3258 – Process Hook before_tool modify not working: decision field discarded, args misparsed](https://github.com/sipeed/picoclaw/issues/3258)  
  A deserialization defect in the `before_tool` hook causes the `decision` field to be ignored and tool arguments to be incorrectly parsed. This breaks custom hook logic for tool modification. The issue is reproducible on Ubuntu 22.04 with DeepSeek and Telegram. No fix PR is open.

The three stale bugs (tool-call leak, OAuth login) were closed without a public fix, suggesting they may have been resolved in earlier commits or deemed low priority.

## 6. Feature Requests & Roadmap Signals
The only new feature request today is:
- [#3257 – Add stateless/no-history mode for gateway sessions](https://github.com/sipeed/picoclaw/issues/3257)  
  A user wants a way to use `picoclaw gateway` without session history, similar to how `picoclaw agent` allows a different `--session` value to start fresh. This is a clear ease-of-use improvement for gateway users, and given its limited scope, it could be implemented in the next minor release (e.g., v0.3.2).

Additionally, PR [#3259](https://github.com/sipeed/picoclaw/pull/3259) updates the project description to mention “better parallelization,” hinting at ongoing work in that area, though no code changes are included yet.

## 7. User Feedback Summary
- **Pain points:** ARM64 users are blocked from running PicoClaw at all. Hook developers face broken deserialization. Gateway users lack a clean way to reset conversation state. The earlier OAuth login failures (now closed) indicate friction with third-party authentication on Codex and Antygravity.
- **Use cases:** Raspberry Pi deployments (ARM64), Telegram bot integrations (hook usage), and CLI-style stateless sessions via gateway.
- **Satisfaction/dissatisfaction:** No explicit satisfaction signals today. The closed stale bugs may have frustrated users who did not see a fix, but the two new bug reports (with reproduction steps) suggest the community remains engaged in diagnosing issues.

## 8. Backlog Watch
- **PR #3222** – [refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)  
  Opened July 3, last updated July 15. This is a substantial refactor of Delta Chat support. It has not received a merge or review comment in 13 days. If the maintainers are interested, this PR should be reviewed to avoid bit-rot.
- **Issue #3153** (tool-call leak) was closed, but similar issues may resurface if the underlying parsing logic is not robust. No open tracking remains.

No other long-standing unanswered items are evident in the current snapshot.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-16

## 1. Today's Overview
The project saw elevated activity with **11 pull requests** updated in the last 24 hours, of which **4 were merged or closed** and **7 remain open**. Two issues were updated (one open, one closed), and no new releases were tagged. Focus areas included **delivery reliability** (transient failure handling), **provider expansion** (OpenCode integration), **shared memory infrastructure**, and **operational improvements** (idle container exit, Docker host-gateway compatibility). The pace signals a healthy burst of contributor-driven fixes and feature work, though the open PR backlog remains substantial.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Four PRs were merged or closed today, advancing both core architecture and tooling:

- **Provider-agnostic persistent memory** – [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) (closed) adds a shared memory tree loaded on session start, clear, and compact, excluding resume. Its Codex counterpart [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) (closed) registers the `SessionStart` hook for Codex agents, enabling cross-provider memory persistence.
- **OpenCode provider** – [#3056](https://github.com/nanocoai/nanoclaw/pull/3056) (closed) introduces `opencode` as a new agent provider, spawning an `opencode serve` subprocess with shared server lifecycle and MCP config translation.
- **Deployment script** – [#3055](https://github.com/nanocoai/nanoclaw/pull/3055) (closed) adds `deploy.sh` for one-command SSH-based redeploys (`git pull`, `pnpm install`, `pnpm build`, service restart).

## 4. Community Hot Topics
The most active item is **Issue #3058** ([link](https://github.com/nanocoai/nanoclaw/issues/3058)): *Transient outbound-send failures are permanently dropped after 3 fast retries*. It has 1 comment and highlights a clear design gap—`deliverSessionMessage` in `src/delivery.ts` applies the same permanent failure flag to both transient network errors and validation errors. The attached fix PR [#3059](https://github.com/nanocoai/nanoclaw/pull/3059) is still open. This reflects a deeper user need for **resilience in high-availability agent deployments**.

**PR #3057** ([link](https://github.com/nanocoai/nanoclaw/pull/3057)) – *automatic Claude↔Codex quota fallback* – is a significant feature generating interest (though no comments yet). It adds per-group failover, Telegram/WhatsApp channel adapters, and pilot activation. The underlying need is **cost-aware multi-provider orchestration**, a likely roadmap priority.

## 5. Bugs & Stability
**High severity:**
- **Issue #3058** ([link](https://github.com/nanocoai/nanoclaw/issues/3058)) – Permanent drop of messages after 3 transient failures. Fix PR [#3059](https://github.com/nanocoai/nanoclaw/pull/3059) is open and correctly proposes distinguishing transient (retry) from permanent (reject). **Risk**: undelivered agent replies under intermittent network conditions.

**Medium severity:**
- **Issue #3054** ([link](https://github.com/nanocoai/nanoclaw/issues/3054)) – Closed: `agent_message_policies` rows orphaned after group/connection delete causes FK failures. The exact fix is not visible, but the issue is resolved.
- **PR #3051** ([link](https://github.com/nanocoai/nanoclaw/pull/3051)) – Preflight provider configuration before save, preventing invalid configs from being persisted.
- **PR #3053** ([link](https://github.com/nanocoai/nanoclaw/pull/3053)) – Container does not exit on idle, lingering until absolute kill timeout. Fix implements a **stand-down after 60 s of inactivity**, reducing resource waste.
- **PR #3052** ([link](https://github.com/nanocoai/nanoclaw/pull/3052)) – Host gateway resolution fails on Colima/Lima/Rancher Desktop (macOS VM runtimes). Fix extends `--add-host` logic to non-Linux hosts, unblocking macOS developers.

## 6. Feature Requests & Roadmap Signals
Several PRs indicate likely next-version features:

- **Quota fallback (PR #3057)** – automatic failover between Claude and Codex per agent group, plus new channel adapters (Telegram/WhatsApp) and pilot activation. This is a **enterprise-ready cost-control** feature.
- **Provider-agnostic memory (PRs #3012, #3013)** – shared memory tree across providers is now merged; it will be a foundation for unified agent state.
- **OpenCode provider (PR #3056)** – expands supported backends, lowering switching costs.
- **Approval lifecycle unification (PR #3040)** – ongoing work to consolidate approval holds under a single contract, simplifying policy management.

These point to a theme of **multi-provider resilience and scalability**.

## 7. User Feedback Summary
Direct user pain points surfaced in today’s activity:

- **mashkovtsevlx** (Issue #3058, PR #3059) – reports that a “brief network blip can permanently drop an agent’s reply.” The user expects transient failures to be retried, not treated as permanent. This reflects dissatisfaction with the current delivery reliability.
- **jguillen1984** (Issue #3054) – encountered FK errors when deleting groups because `agent_message_policies` rows were not cleaned up. This indicates a **lack of cleanup in complex FK chains**, a common pain in schema migrations.
- **adamhowell** (PRs #3052, #3053) – experienced containers that never exit and host-gateway issues on non-Docker-Desktop macOS runtimes. Satisfied that fixes are proposed.

Overall, contributors are actively identifying and fixing pain points, indicating a responsive community.

## 8. Backlog Watch
- **PR #2591** ([link](https://github.com/nanocoai/nanoclaw/pull/2591)) – *fix: namespace user IDs by channel-type prefix, not bare colon* – opened on **2026-05-22** (nearly two months ago), still open with no recent maintainer activity. This addresses a potential collision or parsing issue in user-ID namespacing. It may need a review or decision from core team.

No other issues or PRs in the data appear to have extended dormancy.

---

*Generated from GitHub data updated within the last 24 hours as of 2026-07-16.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-16

## 1. Today's Overview

IronClaw saw **very high activity** over the past 24 hours, with 22 issues and 38 pull requests updated—a substantial volume that signals intense development and QA cycles. The project remains in a **stabilization-and-refinement** phase, with the "bug_bash" wave (P1/P2/P3 labels) still dominating issue inflow, particularly around Slack integration reliability. Several large refactoring PRs are in progress, including the removal of the retired v1 runtime and a unified generic extension runtime. No new releases were cut today, but multiple high-risk merged and pending PRs point to significant architectural changes in the near future.

## 2. Releases

**No new releases** were published today. The last release remains at v0.24.0 (IronClaw) / v0.4.2 (ironclaw_common) / v0.3.0 (ironclaw_skills) as tracked in open release candidate PR #5598.

## 3. Project Progress

**12 pull requests were merged or closed** today, spanning diverse areas:

- **Auth/Lifecycle hygiene:** [#6128](https://github.com/nearai/ironclaw/pull/6128) (closed) performed a broad audit of auth blockers, fixing scope ceiling, Notion refresh, fan-out retryability, and removal/callback race conditions.
- **UI/UX improvements:**
  - [#6084](https://github.com/nearai/ironclaw/pull/6084) (closed) replaced native browser `confirm()` dialogs with a shared Reborn modal for destructive actions (chat deletion, automation deletion, extension removal).
  - [#6082](https://github.com/nearai/ironclaw/pull/6082) (closed) fixed the Extensions Registry rendering delay by showing catalog data immediately and enriching controls progressively.
- **Testing & coverage:**
  - [#6055](https://github.com/nearai/ironclaw/pull/6055) (closed) added integration coverage for StaleSurface same-run refresh pin and extension-remove channel cleanup.
  - [#6133](https://github.com/nearai/ironclaw/pull/6133) (open) added an SSE wire-contract fixture round-trip test for `WebChatV2Event` variants.
- **Bug fixes:**
  - [#6135](https://github.com/nearai/ironclaw/pull/6135) (open, large) recovers Slack host from broken state after OAuth activation and improves catalog construction.
  - [#6130](https://github.com/nearai/ironclaw/pull/6130) (open, large) fixes OAuth flow-lifecycle bugs: supersede-on-start, durable PKCE verifiers, expiry-honest projections.
- **Infrastructure:**
  - [#6122](https://github.com/nearai/ironclaw/pull/6122) (open) retargets release metadata, Docker defaults, and CI smoke coverage to the Reborn binary/runtime.
  - [#6123](https://github.com/nearai/ironclaw/pull/6123) (open, DB migration) removes the retired v1 runtime, legacy gateway/TUI/embeddings crates, and obsolete v1 workflows/tests.

A notable **open PR** is [#6116](https://github.com/nearai/ironclaw/pull/6116) ("unified generic extension runtime + Option A honest state machine"), a massive XL-size branch reconciling with main, which suggests a major architectural consolidation is in active development.

## 4. Community Hot Topics

**Most active issues:**

- [#5834](https://github.com/nearai/ironclaw/issues/5834) (bug_bash_P2): "Slack disconnect request is incorrectly rejected by agent" — 3 comments, the longest-running Slack regression still open. Users are unable to disconnect Slack through the agent, indicating a fundamental flaw in the Slack integration flow.
- [#6105](https://github.com/nearai/ironclaw/issues/6105) (enhancement, e2e-coverage, reborn): "Extension/channel lifecycle state-machine test" — 3 comments. This issue explicitly calls out that Slack channel lifecycle bugs have regressed across all four QA bug-bash waves, making it the top user-facing pain family.

**Underlying needs:**  
The convergence of multiple Slack-related issues (#5834, #5944, #5943, #5882, #5877) reveals a **deep reliability gap in the Slack channel extension**—users cannot trust that actions like DM delivery, disconnect, re-authentication, or notification routing work correctly. The community—especially the QA team (joe-rlo, Artem)—is signaling that Slack instability is eroding user trust and that systematic lifecycle testing (as proposed in #6105) is overdue.

**Most active PRs:**  
No PR had explicit comment counts today, but the large, high-risk PRs [#6116](https://github.com/nearai/ironclaw/pull/6116) (unified runtime) and [#6123](https://github.com/nearai/ironclaw/pull/6123) (v1 removal) are attracting attention as they touch nearly every crate.

## 5. Bugs & Stability

Several bugs were reported or updated today. Ranked by severity:

**P1 (Critical):**  
- [#5943](https://github.com/nearai/ironclaw/issues/5943): Slack DM action posts to current channel instead of DMs — a **routing failure** that could expose sensitive content to the wrong audience. No dedicated fix PR yet.  
- [#5877](https://github.com/nearai/ironclaw/issues/5877): Slack notification delivered to the wrong user — a **privacy/security regression**. No fix PR visible.

**P2 (High):**  
- [#5944](https://github.com/nearai/ironclaw/issues/5944): Slack DM delivery silently fails but run reports success — **false-positive success** misleads users.  
- [#5882](https://github.com/nearai/ironclaw/issues/5882): Repeated Slack reconnect attempts leave auth flow in broken state — requires full reinstall to recover.  
- [#6125](https://github.com/nearai/ironclaw/issues/6125): User messages rejected with "busy" error while routine runs in background — **conversation lockout** during background routines.  
- [#5834](https://github.com/nearai/ironclaw/issues/5834): Slack disconnect rejected — no workaround.  
- [#6138](https://github.com/nearai/ironclaw/issues/6138): Tier-2 harness can't express compound denied-gate + HTTP-egress-error — infrastructure blocker for test coverage.  
- [#6137](https://github.com/nearai/ironclaw/issues/6137): Mixed-batch gate resume never redispatches non-first gated call — **concurrency gate bug**.

**P3 (Medium):**  
- [#6127](https://github.com/nearai/ironclaw/issues/6127): Routine incorrectly displays "Previous run still in progress" on first execution.  
- [#6126](https://github.com/nearai/ironclaw/issues/6126): First message in a new chat has no loading or streaming state — **blank screen freeze** for new conversations.  
- [#6124](https://github.com/nearai/ironclaw/issues/6124): Daily failure taxonomy report — identifies ~77% of clawbench failures as benchmark defects, not model quality.

**Fix PRs in progress:**  
- [#6135](https://github.com/nearai/ironclaw/pull/6135) targets Slack recovery after OAuth activation (addresses #5882 and possibly #5877).  
- [#6130](https://github.com/nearai/ironclaw/pull/6130) addresses OAuth flow-lifecycle hygiene.  
- [#6129](https://github.com/nearai/ironclaw/pull/6129) fixes a `result_read` preview/chunk cap regression introduced by #5902.  
- Dead code identified: `WebChatV2Event::accepted/cancelled/failed` variants are never constructed (issue [#6136](https://github.com/nearai/ironclaw/issues/6136)).

## 6. Feature Requests & Roadmap Signals

**Explicit feature requests:**  
- [#6118](https://github.com/nearai/ironclaw/issues/6118) — Add per-user secrets management to Admin user details. The backend API already supports it; only the UI is missing.  
- [#6117](https://github.com/nearai/ironclaw/issues/6117) — Localize workspace region names and humanize file sizes in the Workspace UI.  
- [#6105](https://github.com/nearai/ironclaw/issues/6105) — Build an end-to-end extension/channel lifecycle state-machine test (install→connect→disconnect→reconnect→uninstall), with a proposal to add cron-based canary lanes. This is a **direct response to the Slack regression crisis** and is likely to be prioritized.

**Roadmap signals from open PRs and issues:**  
- The **unified generic extension runtime** ([#6116](https://github.com/nearai/ironclaw/pull/6116)) suggests a fundamental platform consolidation is in progress. If merged, it would simplify maintenance and reduce surface for channel-specific bugs like the Slack ones.  
- **Removal of the v1 runtime** ([#6123](https://github.com/nearai/ironclaw/pull/6123)) signals the project is doubling down on Reborn as the sole production path. This is a breaking architectural change with a DB migration.  
- The tier-2 extension work ([#6131](https://github.com/nearai/ironclaw/pull/6131), [#6132](https://github.com/nearai/ironclaw/pull/6132), [#6134](https://github.com/nearai/ironclaw/pull/6134)) indicates a **major investment in fault-injection and integration test coverage** for the Reborn harness.

**Predictions for next version:**  
- The v1 runtime removal is a strong candidate for v0.25.0 or v0.26.0.  
- Slack lifecycle fixes (addressing the bug-bash P2 cluster) should land before any feature release.  
- Admin UI per-user secrets and workspace localization are small, clear wins likely to ship soon.

## 7. User Feedback Summary

**Real user pain points** (drawn from bug-bash issue descriptions and the daily failure taxonomy):

1. **Slack integration is fundamentally unreliable.** Users report:  
   - DMs not delivered (but shown as successful).  
   - Messages sent to the wrong channel/user.  
   - Inability to disconnect Slack through the agent.  
   - Auth flow entering an unrecoverable broken state after repeated reconnects.  
   - Notifications going to the wrong recipient (potential data leak).  
   *Impact: Erosion of trust in one of IronClaw’s flagship integrations.*

2. **UI/UX quality issues** in the WebUI v2:  
   - Blank screen with no loading indicator on first message ([#6126]).  
   - "Previous run still in progress" shown for first-ever routine execution ([#6127]).  
   - Enter key intermittently fails to submit messages ([#6044], closed).  
   - Extensions Registry takes up to 10 seconds to load ([#6052], closed but recently fixed).  
   *Impact: Frustrating and confusing first-use experience.*

3. **Background routines block conversation.** Users cannot send messages while a routine runs ([#6125]), which breaks the core promise of concurrent agent interaction.

4. **Admin and Workspace UI polish gaps:**  
   - Broken "Create token" button for existing users ([#6085], closed).  
   - Untranslated region names and raw byte counts in Workspace ([#6117]).  
   - Secret management not exposed in Admin UI ([#6118]).  
   *Impact: Admin users lack basic credential and metadata management capabilities.*

5. **Test infrastructure feedback:** The daily failure taxonomy ([#6124]) reports ~77% of clawbench failures are due to benchmark defects, not model or agent quality—suggesting the testing framework itself needs attention.

**Satisfaction signals:**  
- Several P2/P3 issues were closed today ([#6052], [#6083], [#6087], [#6044], [#5886]), showing the team is actively addressing user-facing bugs.  
- The Slack P1 issues (#5943, #5877) remain open but have dedicated fix PRs in progress.

## 8. Backlog Watch

**Stale important issues:**  
- [#5834](https://github.com/nearai/ironclaw/issues/5834) (P2, Slack disconnect rejected) — Open since July 8, updated but not yet fixed. A **week-old blocker** for users with Slack integration.  
- [#5877](https://github.com/nearai/ironclaw/issues/5877) (P1, notification sent to wrong user) — Open since July 9, a critical privacy bug with no fix PR yet.  
- [#5882](https://github.com/nearai/ironclaw/issues/5882) (P2, Slack auth broken after reconnect) — Open since July 9, no dedicated fix PR.  
- [#5944](https://github.com/nearai/ironclaw/issues/5944) (P2, DM silent failure) — Open since July 10.  

**Long-dormant PRs:**  
- [#5598](https://github.com/nearai/ironclaw/pull/5598) (release PR) — Open since July 3, still not merged. This is the candidate for the next version release and may be waiting on the v1 removal or extension runtime work to land.  
- [#5910](https://github.com/nearai/ironclaw/pull/5910) (fix: hydrate approval gates on notification open) — Open since July 10, touches a core approval-gate mechanism. Stale for 6 days.

**Concerns:**  
- The Slack P1 issues (#5877, #5943) are the highest-risk unaddressed items. They represent **data-loss and privacy risks** that should be escalated. The backlog watch suggests that while OAuth lifecycle fixes are in flight (#6130, #6135), a dedicated PR specifically for #5877 (wrong-user notification) is missing.  
- The release PR #5598 sitting open for nearly two weeks may indicate that the team is intentionally

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-16

## 1. Today's Overview
The project saw elevated activity over the last 24 hours, driven by the release of **v2026.7.15** and a batch of coordinated fixes and features. A total of **17 PRs were updated** (11 merged/closed, 6 open), and **6 issues were touched** (5 closed, 1 open). The community is responding to the new release with one fresh issue about persistent advertising. Overall project health appears stable, with major bugs from previous months now resolved and a steady pace of enhancements to the UI, update mechanics, and model support.

## 2. Releases
**One new version** was published yesterday (2026-07-15):

- **[LobsterAI 2026.7.15](https://github.com/netease-youdao/LobsterAI/releases/tag/v2026.7.15)**  
  Changes include:
  - Optimisation of file card rendering
  - Opt-in Windows web installer target (build system improvement)
  - Revamped homepage quick-action scenarios (cowork)

No breaking changes or migration notes were mentioned. This is a minor feature release focusing on UI polish and build flexibility.

## 3. Project Progress
The 11 merged/closed PRs from the last 24 hours advanced several areas:

- **UI & Update Flow**  
  - [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) – Fixed update card header alignment in narrow sidebars.  
  - [#2338](https://github.com/netease-youdao/LobsterAI/pull/2338) – Refined the blocking update overlay (centering, scrollable notes, error recovery).  
  - [#2333](https://github.com/netease-youdao/LobsterAI/pull/2333) – Blocked app interactions during user-initiated updates with a lightweight overlay.  

- **Settings & Configuration**  
  - [#2336](https://github.com/netease-youdao/LobsterAI/pull/2336) – Grouped General settings into labeled cards (Basics, Notifications, Data & Privacy) and merged permission/notification toggles.  

- **Bug Fixes**  
  - [#2335](https://github.com/netease-youdao/LobsterAI/pull/2335) – Fixed content copy bug.  
  - [#2334](https://github.com/netease-youdao/LobsterAI/pull/2334) – Restored IM session loading state in cowork, preventing cron and stale events from interfering.  
  - [#2337](https://github.com/netease-youdao/LobsterAI/pull/2337) – Attempted fix for “model not allowed” issue, later reverted ([#2340](https://github.com/netease-youdao/LobsterAI/pull/2340)) pending further investigation.  

- **New Model Support**  
  - [#2332](https://github.com/netease-youdao/LobsterAI/pull/2332) – Added default models for **GPT-5.6** and **Grok 4.5** with a versioned migration path to avoid duplicate entries.  

- **Long-standing Fix**  
  - [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) – Resolved the “multiple file selection only keeps last file” bug in cowork sessions (originally reported in issue #1384).

## 4. Community Hot Topics
The most notable community interaction is the newly opened issue:

- **[#2342 – Left bottom ad can be completely closed?](https://github.com/netease-youdao/LobsterAI/issues/2342)**  
  Reported in version 2026.7.15, a user complains about a new advertisement in the bottom-left corner that, while dismissible, reappears. The user explicitly asks for a permanent opt-out setting. With one comment and no reactions yet, it is the only currently open issue and has the potential to draw further attention.

Other issues updated recently (all closed/stale) have low interaction counts (2–3 comments, 0👍) and are no longer active.

## 5. Bugs & Stability
- **Critical / Crashing**: None reported in the last 24 hours.  
- **Moderate**: The “model not allowed” fix ([#2337](https://github.com/netease-youdao/LobsterAI/pull/2337)) was reverted ([#2340](https://github.com/netease-youdao/LobsterAI/pull/2340)), indicating a regression risk that is being re-evaluated.  
- **Low – UI/UX**:  
  - Persistent ad pop-up ([#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) – annoyance, not a crash.  
  - The multiple-file-selection bug was fixed in [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) and is now closed.

Overall, the current release exhibits no critical stability issues.

## 6. Feature Requests & Roadmap Signals
- **Permanent Ad Dismissal (from #2342)** – Users want a toggle to hide promotional UI elements. Given the quick community feedback, this may appear in a patch release (2026.7.16 or 2026.7.17).  
- **Future Model Support** – The addition of GPT-5.6 and Grok 4.5 signals the project is tracking major provider releases. Expect automatic model updates to continue.  
- **Settings Reorganisation** – The grouping of General settings into cards ([#2336](https://github.com/netease-youdao/LobsterAI/pull/2336)) suggests the team is polishing UX, possibly ahead of a larger settings revamp.

## 7. User Feedback Summary
- **Pain points**:  
  - New intrusive advertising element (noted immediately after update).  
  - Past frustrations (duplicate WeChat messages, file selection loss, timer sessions piling up) have been addressed and fixed.  
- **Use cases**:  
  - Cowork (collaborative workspace) continues to receive the most UI attention – quick-action revamp, IM loading fixes, update overlay improvements.  
  - Windows users gain a simpler installer (web installer option).  
- **Satisfaction**: No overtly positive or negative feedback in issues/PRs, but the rapid closure of older bugs and the active release cycle indicate responsive maintenance.

## 8. Backlog Watch
Several PRs and issues have been lingering without maintainer action:

- **[PR #1322 – true LRU eviction for LLM memory judge cache](https://github.com/netease-youdao/LobsterAI/pull/1322)**  
  Open since 2026-04-02, last updated 2026-07-15. This is a performance optimisation with thorough reasoning but no recent maintainer response.

- **Dependabot PRs** (all open for over a month, last updated 2026-07-15):  
  - [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) – Bump actions/stale  
  - [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) – Bump dorny/paths-filter  
  - [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) – Bump actions/checkout  
  - [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) – Bump trufflesecurity/trufflehog  
  - [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) – Bump electron and electron-builder  
  These are routine CI version bumps and should be merged or closed once reviewed.

No long-unanswered important issues were identified (the oldest open issue is #2342 from yesterday).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest – 2026-07-16

## 1. Today’s Overview

The TinyClaw repository saw very low activity over the past 24 hours. No new issues were opened or updated, and no releases were published. The only notable event is an open pull request (#295) that addresses a logical bug in the CLI’s `teamRemoveAgent` command. While the project appears dormant in terms of community engagement, this fix suggests ongoing maintenance work. Overall, the project is stable with no immediate regressions reported.

## 2. Releases

No new releases were made today. The latest release remains unchanged.

## 3. Project Progress

No pull requests were merged or closed today. One open PR (**#295**, updated 2026-07-15) proposes a fix for the CLI’s team agent removal logic. It corrects a condition that was always evaluating to `false`, which prevented the success message from correctly acknowledging the new leader after removal. The PR is authored by Osamaali313 and is still under review.

**Link:** [PR #295 – fix(cli): print the “New leader” note after removing a team leader](https://github.com/TinyAGI/tinyagi/pull/295)

## 4. Community Hot Topics

With zero issues and only one PR active, the **PR #295** is the sole discussion point. While it has no comments or reactions yet, the underlying need is clear: users who remove a team leader via the CLI should see an accurate confirmation message that reflects the newly assigned leader. The bug (an always‑false condition) could lead to confusion or incorrect feedback. This fix likely stems from a user pain point discovered during real usage.

## 5. Bugs & Stability

**Single Bug Identified (Medium Severity):**  
- The `teamRemoveAgent` function in `packages/cli/src/team.ts` had a bug where, after replacing a removed team leader, the success message condition (`team.leader_agent === ...`) was constructed with stale references, causing it to always be `false`. As a result, the “New leader is …” note was never printed.  
- **Status:** Fix proposed in open PR #295.  
- **Severity:** Medium – functionality still works (leader is replaced), but user feedback is missing, potentially causing confusion.

No other crashes, regressions, or stability issues were reported.

## 6. Feature Requests & Roadmap Signals

No user‑feature requests were submitted today. Based on the current PR, the next minor release may include a correction for the CLI output consistency under team management scenarios. No roadmap signals are apparent from the data.

## 7. User Feedback Summary

No explicit user feedback was recorded in the last 24 hours. However, the existence of PR #295 implies that at least one user (or contributor) encountered a discrepancy between expected and actual CLI output. The quiet community may indicate general satisfaction or low usage of the project at this time.

## 8. Backlog Watch

There are no long‑unanswered issues or stalled pull requests. The repository currently has **zero open issues**. The open PR #295 is fresh (created two days ago) and does not yet require maintainer escalation. The backlog is effectively empty.

---

*Data sourced from the TinyAGI/tinyagi GitHub repository as of 2026-07-16.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-16

## 1. Today's Overview

The project showed strong activity with six pull requests merged in the last 24 hours, all closed successfully and none remaining open. This indicates a productive development cycle focused on provider stability, external-agent integration, and infrastructure improvements. Meanwhile, only one issue (#574) remains open and active, an enhancement request that has been awaiting discussion since early April. Overall, the project health appears robust, with a clear emphasis on closing out feature work and fixing long-standing bugs rather than accumulating new open tasks.

## 2. Releases

No new releases were published today.

## 3. Project Progress

Six pull requests were merged/closed today, reflecting a mix of new features, bug fixes, and dependency maintenance:

- **#1151** – Added support for the MiniMax M3 model while retaining the existing M2.7 entry in the static model registry. Also recorded model-specific context and image-input capability metadata, and documented global and China endpoints. ([PR #1151](https://github.com/moltis-org/moltis/pull/1151))
- **#1148** – Bumped the `npm_and_yarn` dependency group across three directories, updating `esbuild` and `vite` in the web UI and docs folders (automated by Dependabot). ([PR #1148](https://github.com/moltis-org/moltis/pull/1148))
- **#1152** – Fixed a critical bug in the `openai-codex` provider where tokens stored with `expires_at: null` caused sessions to fail after ~10 days with no recovery except manual re‑login. The fix now derives token expiry from the JWT `exp` claim. ([PR #1152](https://github.com/moltis-org/moltis/pull/1152))
- **#1150** – Centralized context-window value assignments by moving them into model capabilities and adding fallback mappings. Also enabled parsing of live GitHub Copilot model metadata for context-window limits, and wired Copilot/Codex dynamic providers to construct from resolved capabilities. ([PR #1150](https://github.com/moltis-org/moltis/pull/1150))
- **#1149** – Implemented automatic detection of ACP (Agent Communication Protocol) agents for a wide set of external tools including Copilot, Codex, Claude, Gemini, Augment, and others. Detection logic handles both documented stdio commands and adapter binaries (e.g., for Claude via `claude-agent-acp`). ([PR #1149](https://github.com/moltis-org/moltis/pull/1149))
- **#1153** – Added a systemd fallback for Linux containers/devboxes that lack `systemd --user`, using a user-owned supervisor script that supports `install`, `status`, `stop`, `restart`, and `uninstall` commands. Also improved related test failure messages. ([PR #1153](https://github.com/moltis-org/moltis/pull/1153))

## 4. Community Hot Topics

The only active issue today is:
- **#574 ([enhancement] Model Routing Per Topic)** — Opened 2026-04-06 by `azharkov78`, with 1 comment and 1 thumbs-up. The user requests the ability to route queries to different models based on topic context. This request has been open for over three months with little discussion, suggesting it may be a niche or early-stage feature request. The underlying need is likely a desire for more efficient or specialized model usage without manual provider switching. ([Issue #574](https://github.com/moltis-org/moltis/issues/574))

No other issues or PRs received significant reactions or comments today.

## 5. Bugs & Stability

No new bug reports were filed today. However, three merged PRs addressed latent stability and correctness issues:

- **High severity**: PR #1152 fixed a token‑expiry bug in the `openai-codex` provider that caused session breakdowns after ~10 days, with no automatic recovery. This bug would have affected any user relying on long-running sessions with that provider. The fix is now merged.
- **Medium severity**: PR #1150 corrected context-window derivation, ensuring that models (e.g., from GitHub Copilot) report accurate context limits instead of fallback defaults. This prevents silent truncation or over‑estimation of available context.
- **Low severity**: PR #1153 resolved service management failures on containerized environments without `systemd`, which previously would have left the CLI service unusable in such setups. The fallback supervisor script provides a reliable workaround.

All fixes are included in the latest codebase.

## 6. Feature Requests & Roadmap Signals

The single open enhancement request (#574) for “Model Routing Per Topic” is the primary user-voiced feature ask. While it has not yet seen active development, the project’s recent moves toward richer provider capabilities (e.g., PR #1151 adding MiniMax M3, PR #1149 auto-detecting ACP agents) suggest a growing focus on provider diversity and flexible routing. A topic‑based routing feature would logically follow the ability to auto‑detect and enumerate available agents. Given the moderate interest (1 reaction, 1 comment) and the lack of maintainer response, it may be a candidate for the next minor release if community demand increases.

Additionally, PR #1149’s automated ACP detection for a dozen external agents signals a roadmap direction toward seamless integration with third‑party AI tools, which could lay groundwork for more sophisticated orchestration features.

## 7. User Feedback Summary

Direct user feedback is limited to the single open issue. The request for model routing per topic implies a pain point: users currently must manually select providers/models for different tasks, and they seek automation. The thumbs‑up (1) suggests at least mild interest. No negative feedback or complaints about existing features were observed in the past 24 hours.

The token‑expiry fix (#1152) addresses a previously unreported but significant source of user frustration (session drops every ~10 days), indicating that the development team is proactively tackling stability issues even without widespread user complaints.

## 8. Backlog Watch

The only item that could be considered backlogged is issue #574, which has been open since 2026-04-06 (over three months) with no maintainer response or assignment. While it is not urgent, the lack of any comment from the project team may suggest bandwidth constraints or uncertainty about the feature’s alignment with the roadmap. No other old, unattended issues or PRs are visible in the current data.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-16

## 1. Today's Overview
Activity on the CoPaw project remains very high, with **50 issues** and **43 pull requests** updated in the past 24 hours. Of these, **32 issues** and **22 PRs** were closed or merged, indicating a strong emphasis on bug fixing and incremental improvements. **No new release** was published today, but the development velocity suggests a minor patch (e.g., `v2.0.0.post3`) may be imminent. Several critical bugs reported earlier this week now have associated fix PRs, and the community continues to actively shape the roadmap with feature requests and detailed feedback.

## 2. Releases
*No new releases today.* The latest published version remains `v2.0.0.post2` (as referenced in multiple issues). No migration notes or breaking changes to report.

## 3. Project Progress
**Merged / closed PRs today (22 total):** Key advances include:

- **[#6147](https://github.com/agentscope-ai/QwenPaw/issue/6147) — Website blog view/like counts & GA property switch** – Public engagement metrics added to the project website, backed by Supabase.
- **[#6142](https://github.com/agentscope-ai/QwenPaw/issue/6142) — Auto-memory interval validation** – `auto_memory_interval` now accepts `0` to fully disable automatic memory (fixing [#6132](https://github.com/agentscope-ai/QwenPaw/issue/6132)).
- **[#6140](https://github.com/agentscope-ai/QwenPaw/issue/6140) — GBK encoding fix in `_run_command`** – Added `errors='replace'` for Windows compatibility.
- **[#6039](https://github.com/agentscope-ai/QwenPaw/issue/6039) — MCP legacy driver env‑var interpolation** – `${VAR}` references in MCP credentials are now correctly resolved during migration (fixes [#6029](https://github.com/agentscope-ai/QwenPaw/issue/6029)).
- **[#6137](https://github.com/agentscope-ai/QwenPaw/issue/6137) — Doom‑loop thresholds and thinking block spacing** – Tuned loop prevention to warning at 3 / stop at 4; fixed whitespace preservation in thinking blocks (also addressed by independent PR [#6139](https://github.com/agentscope-ai/QwenPaw/issue/6139)).
- **[#6143](https://github.com/agentscope-ai/QwenPaw/issue/6143) — CI passes Supabase config to website builds** – Enables dynamic features like blog engagement.

Additionally, **open PRs** under review include: `pawapp SDK and Kanban app` ([#6150](https://github.com/agentscope-ai/QwenPaw/issue/6150)), `background tool-call offload` ([#6151](https://github.com/agentscope-ai/QwenPaw/issue/6151)), `Chrome extension plugin` ([#6157](https://github.com/agentscope-ai/QwenPaw/issue/6157)), and `ReMe memory enhancements` ([#6153](https://github.com/agentscope-ai/QwenPaw/issue/6153)).

## 4. Community Hot Topics
The most active discussions (by comment count and reactions) center on several key themes:

- **[#6129](https://github.com/agentscope-ai/QwenPaw/issue/6129) – Missing spaces/line-feeds in thinking blocks** (5 comments, ❤️ upvoted)  
  *Underlying need:* Users expect real-time streaming of reasoning to preserve formatting. Fix PR [#6139](https://github.com/agentscope-ai/QwenPaw/issue/6139) is already open.

- **[#6125](https://github.com/agentscope-ai/QwenPaw/issue/6125) – Request for Galaxy Kylin OS support** (5 comments)  
  *Underlying need:* Enterprise users in China require native support for the domestic Linux derivative (based on Ubuntu). More convenient install packages (`.deb` / `.rpm`) are desired.

- **[#6148](https://github.com/agentscope-ai/QwenPaw/issue/6148) – Severe amnesia after upgrading to v2.0** (2 comments, but very high severity)  
  *Underlying need:* Users report context truncation and `/compact` not working properly – a regression in memory continuity. Linked to PR [#6123](https://github.com/agentscope-ai/QwenPaw/issue/6123) (Scroll hardening).

- **[#2969](https://github.com/agentscope-ai/QwenPaw/issue/2969) – Personal knowledge base feature** (5 comments, 3 👍) – closed after implementation, but still highly requested. Remains a popular wishlist item.

- **[#5995](https://github.com/agentscope-ai/QwenPaw/issue/5995) – Messages silently dropped when session busy** (3 comments) – critical for real‑world multi‑channel use (Feishu, etc.). A queuing mechanism is expected soon.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| **Critical** | [#6148](https://github.com/agentscope-ai/QwenPaw/issue/6148) | Amnesia after v2.0 upgrade – context truncated, `/compact` ineffective | PR [#6123](https://github.com/agentscope-ai/QwenPaw/issue/6123) open |
| **Critical** | [#6124](https://github.com/agentscope-ai/QwenPaw/issue/6124) | Editable install memory leak – 36+ ReMe loops consume 48+ GB RAM, never completes | No fix PR yet |
| **High** | [#5995](https://github.com/agentscope-ai/QwenPaw/issue/5995) | Messages silently dropped when session busy (no queue, no error) | No fix PR yet |
| **High** | [#6155](https://github.com/agentscope-ai/QwenPaw/issue/6155) | Multiple regressions after 1.x→2.0: embedding mapping, auto-memo corruption, thinking block disappearance | Partially addressed in [#6153](https://github.com/agentscope-ai/QwenPaw/issue/6153) (embedding fix) |
| **High** | [#6141](https://github.com/agentscope-ai/QwenPaw/issue/6141) | `MODEL_EXECUTION_ERROR` breaks conversation permanently after `/mission` abort | No fix PR yet |
| **Medium** | [#6129](https://github.com/agentscope-ai/QwenPaw/issue/6129) | Missing spaces/linefeeds in thinking blocks | PR [#6139](https://github.com/agentscope-ai/QwenPaw/issue/6139) open |
| **Medium** | [#5790](https://github.com/agentscope-ai/QwenPaw/issue/5790) | Loading animation does not disappear after agent response | No fix PR yet |
| **Low** | [#6132](https://github.com/agentscope-ai/QwenPaw/issue/6132) | Auto-memory interval cannot be set to 0 to disable | Fixed via PR [#6142](https://github.com/agentscope-ai/QwenPaw/issue/6142) (merged) |

Many of these bugs have active fix PRs; the **#6124 memory leak** and **#5995 dropped messages** are the most urgent with no resolution yet.

## 6. Feature Requests & Roadmap Signals
The community continues to push for:

- **Enterprise OS support** – [#6125](https://github.com/agentscope-ai/QwenPaw/issue/6125) (Galaxy Kylin) and [#6076](https://github.com/agentscope-ai/QwenPaw/issue/6076) (non‑Tauri variant for Win7). Likely to be addressed in a future minor release with native installation options.
- **Agent collaboration improvements** – [#6136](https://github.com/agentscope-ai/QwenPaw/issue/6136) reports that leader agents rarely invoke subordinate agents unprompted. This reflects a need for better orchestration heuristics. Could be tied to the in‑progress `pawapp SDK` ([#6150](https://github.com/agentscope-ai/QwenPaw/issue/6150)).
- **Desktop workflow enhancements** – [#6083](https://github.com/agentscope-ai/QwenPaw/issue/6083) requests a workspace shortcuts button in the Desktop app. This is a low‑effort UX improvement likely to land soon.
- **Pre‑built agent templates** – [#4259](https://github.com/agentscope-ai/QwenPaw/issue/4259) (closed, but still discussed) – the demand for out‑of‑the‑box agent roles (e.g., "writer", "coder") is high, especially for non‑technical users. This is a long‑term roadmap item.
- **Persistent memory / knowledge base** – [#2969](https://github.com/agentscope-ai/QwenPaw/issue/2969) remains a top‑voted feature. Progress on ReMe integration (PR [#6153](https://github.com/agentscope-ai/QwenPaw/issue/6153)) indicates the team is moving in this direction.

## 7. User Feedback Summary
- **Satisfaction:** Users appreciate the project’s active development and responsiveness. The Chrome extension plugin (PR [#6157](https://github.com/agentscope-ai/QwenPaw/issue/6157)) and per‑session model overrides (PR [#5992](https://github.com/agentscope-ai/QwenPaw/issue/5992)) are well received.
- **Pain points:**
  - **Memory regressions** in v2.0 are the #1 source of frustration – users feel the agent “forgets” previous context, especially after tool calls or long conversations.
  - **Memory leaks** in editable installs on Windows prevent startup entirely for some power users.
  - **Agent collaboration** is still too manual; users want smarter orchestration without explicit prompts.
  - **Desktop integration** (accessing workspace files, non‑Tauri variants) hinders workflow continuity.
- **Use cases mentioned:** Multi‑channel deployment (Feishu, DingTalk), local model usage (llama.cpp, CoPaw‑Flash‑9B), long‑running tasks with `/mission`, and enterprise government setups (Kylin OS).

## 8. Backlog Watch
- **[#5862](https://github.com/agentscope-ai/QwenPaw/issue/5862) – Inbox system PR** (opened Jul 8, still open) – a system‑pop feature that has seen no recent maintainer comments. May need review.
- **[#6124](https://github.com/agentscope-ai/QwenPaw/issue/6124) – Memory leak in editable install** (opened Jul 15, 0 maintainer response yet) – despite its severity, no assignee or linked PR.
- **[#5995](https://github.com/agentscope-ai/QwenPaw/issue/5995) – Silently dropped messages** (opened Jul 12) – also lacks a maintainer reply or fix plan.

These issues represent the biggest gaps in project responsiveness and should be prioritized.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-16

## 1. Today’s Overview

ZeroClaw saw a high-volume day with **38 issues updated** (19 open, 19 closed) and **50 pull requests updated** (40 open, 10 merged/closed). No new releases were cut today. The project remains in an active development phase, with major infrastructure work on **multi-user authentication, schema V4 configuration, streaming stability, and security enforcement** landing as closed PRs. Community engagement is robust, with several long-running RFCs and bug reports receiving continued attention. The maintainer team (notably singlerider) has been aggressively merging large changes, though a notable backlog of open bugs and pending PRs awaits further review.

## 2. Releases

No new releases in the last 24 hours. The latest release was v0.8.x (not specified). The project appears to be targeting v0.9.0 based on RFC tracking issues.

## 3. Project Progress – Merged/Closed PRs

Ten PRs were merged or closed today. The most significant include:

- **Multi-user auth stack** ([PR #8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672)) – Landed the RFC #7141 multi-user authentication providers (peercred, native bearer, SSH challenge, OIDC), permission profiles, and principal isolation. This is a cornerstone for v0.9.0.
- **Schema V4 config cut** ([PR #8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754)) – Broke config schema to V4, removing retired channels and integration tools. Breaking change affecting all configs.
- **Fix idle-bound SSE streaming** ([PR #8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838)) – Added per-read idle timeout to all SSE streaming paths, preventing stalls on local runtimes and proxies.
- **Fix live session rebuild on model_provider change** ([PR #8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845)) – Daemon now correctly refreshes live sessions when agent model_provider is edited.
- **Tool-call pairing enforcement** ([PR #9090](https://github.com/zeroclaw-labs/zeroclaw/pull/9090)) – Unified tool-call pairing check at one chokepoint, fixing 400 errors from broken tool_use/tool_result ordering.
- **Context overflow trimming** ([PR #9083](https://github.com/zeroclaw-labs/zeroclaw/pull/9083)) – Reactive context-overflow recovery now trims to model window and attributes compactions.
- **Anthropic tool_use flush at message_stop** ([PR #9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070)) – Fixed missing tool_use block when message_stop arrives mid-stream.
- **Comment bureaucracy sweep** ([PR #8901](https://github.com/zeroclaw-labs/zeroclaw/pull/8901)) – Workspace‑wide removal of #issue refs and over-narration in comments, gated by CI.
- **Log agent init failure in ACP** ([PR #9071](https://github.com/zeroclaw-labs/zeroclaw/pull/9071)) – ACP session/new failures now logged.

## 4. Community Hot Topics

The most active issues by comment count:

- **[#5600 – Bug: kimi-code provider streaming error](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (12 comments) – Workflow‑blocking bug where tool calls in streaming mode cause a 400 error from the kimi-code provider. High risk, still open since April 2026.
- **[#7141 – RFC: OIDC authentication provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (7 comments) – Now closed, but it was a hot topic for weeks. Tracking issue for pluggable auth – PR #8672 delivered this.
- **[#7184 – RFC: Move translated .ftl and .po files into a git submodule](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)** (6 comments) – Closed, infrastructure for i18n.
- **[#6641 – Feature: Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** (6 comments) – In‑progress, high risk. Would nest spans under a single turn trace for better observability.
- **[#7218 – RFC: A2A agent discovery](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)** (5 comments) – Closed, groundwork for multi‑agent interoperability.
- **[#7142 – RFC: Pluggable security enforcement](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** (5 comments) – Closed, umbrella for security trait.
- **[#6293 – RFC: Air‑gapped execution mode](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** (5 comments) – Closed, split process architecture for offline mode.

The large PRs (#8672, #8754, #8838, #8901) attracted no listed comments but were marked as size:XL and involved heavy community coordination.

**Underlying needs:** Community is pushing for enterprise‑grade security (OIDC, air‑gapped, pluggable enforcement), better developer experience (i18n submodule, OpenRPC spec), and robust streaming reliability.

## 5. Bugs & Stability

Several high‑severity bugs remain open or were closed today.

| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#5600 – Kimi-code streaming error](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | S1 – workflow blocked | Open (since April) | Tool calls in streaming mode cause 400 error from provider API. No fix PR yet. |
| [#8559 – Agents stop on chat exit](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | S1 – workflow blocked | Open (since June 30) | Web dashboard kills agent task when user exits chat window. No fix PR. |
| [#8560 – browser_open hangs](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | S1 – workflow blocked | Closed | Browser launcher subprocess wait hangs when no display. Fixed? (closed without reference to merged PR) |
| [#8794 – Stopping agent erases context](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | S1 – workflow blocked | Open (since July 7) | Tools and thinking lost when agent is stopped mid‑work. No fix PR. |
| [#9078 – Serial transport desync](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) | S2 – degraded behavior | Open (since July 15) | Non‑matching response ID leaves transport out‑of‑sync. No fix PR. |

**Fixed today:** The Anthropic tool_use flush bug ([#9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070)), tool‑call pairing 400 ([#9090](https://github.com/zeroclaw-labs/zeroclaw/pull/9090)), and SSE idle timeout ([#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838)) were all merged.

## 6. Feature Requests & Roadmap Signals

Several enhancement requests signal direction for upcoming releases:

- **Separate conversation from long‑term memory** ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)) – RFC to decouple session history from curated memory. High risk, likely target for v0.9.x.
- **Optional Telegram webhook mode** ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)) – Request for webhook ingress alongside long polling. High risk but valuable for server deployments.
- **ComfyUI / Comfy Cloud media provider** ([#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)) – Add image generation and video foundation. Open since May, high risk.
- **RunPod/ComfyUI provider with scoped config** ([#7875](https://github.com/zeroclaw-labs/zeroclaw/issues/7875)) – Opt‑in provider for image gen, requested after PR #6555 was declined.
- **Code session history isolation** ([#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047)) – Clarify that Code pane does not affect agent persistent memory.
- **ZeroCode receives full RPC spec** ([#8626](https://github.com/zeroclaw-labs/zeroclaw/issues/8626)) – Closed, feature landed.

**Prediction:** The multi‑user auth and security stack (#7141, #7142, #6293) are foundational for v0.9.0 and will likely ship together. The memory separation RFC (#9048) could be a major feature for v0.10. Media provider additions (#6563, #7875) may land as incremental providers.

## 7. User Feedback Summary

Pain points expressed in open issues:

- **Streaming reliability** – Kimi‑code users report workflow‑blocking errors (#5600). The SSE idle timeout fix (#8838) addresses a related class of issues but not this specific provider bug.
- **Dashboard UX** – Users are frustrated that exiting the chat window kills agent tasks (#8559) and that stopping the agent erases tool calls and reasoning (#8794). Both are S1 blockers.
- **Hardware/peripherals** – Serial transport desync (#9078) degrades firmware communication.
- **Security/compliance** – Active demand for OIDC, air‑gapped mode, and pluggable security enforcement (multiple RFCs now closed). The community sees ZeroClaw as a platform that must support enterprise auth.
- **Developer tooling** – The i18n submodule (#7184) and OpenRPC spec (#7131) are welcome improvements for contributors.

No explicit satisfaction signals appeared in today’s data, but the rapid merging of PRs suggests maintainers are responsive to community needs.

## 8. Backlog Watch

Issues and PRs that have gone unanswered or are blocked:

- **[Issue #5600 – Kimi‑code streaming error](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** – Open since April 10, no maintainer response beyond initial triage. High risk, very active (12 comments). Needs a fix PR or workaround.
- **[Issue #6641 – Turn‑level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** – Open since May 13, in progress but no recent PR. Needs maintainer follow‑up.
- **[Issue #8559 – Agents stop on chat exit](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)** – Open since June 30, S1, no assignee or fix. Community is waiting.
- **[Issue #8794 – Stopping agent erases context](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)** – Open since July 7, S1, no activity. Needs immediate attention.
- **PRs with `needs-author-action` label** – Several PRs are pending response from authors:
  - [PR #8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) – fix(delegate): skip global credential fallback for OAuth
  - [PR #7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) – fix(tools): gate execute_pipeline sub-tool execution
  - [PR #8679](https://github.com/zeroclaw-labs/zeroclaw/pull/8679) – docs(sop): fill SOP.toml reference
  - [PR #8808](https://github.com/zeroclaw-labs/zeroclaw/pull/8808) – fix(anthropic): use configurable timeout
  - [PR #8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) – fix(providers): sanitize outbound tool-call arguments
  - [PR #8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948) – fix(tools): reap exited stdio MCP server processes

  These have been open for 1–4 weeks and may stall if authors do not respond to review comments.

- **[Issue #9078 – Serial transport desync](https://github.com/zeroclaw-labs/zeroclaw/issues/9078)** – Created yesterday, no maintainer response yet. Severity S2 but could escalate.

- **[Issue #9082 – Monetization suggestion (spam?)](https://github.com/zeroclaw-labs/zeroclaw/issues/9082)** – Closed as likely off‑topic, but the bot nature suggests a need for maintainer moderation tools.

**Overall assessment:** The project is shipping significant architectural changes, but several S1 bugs and stalled PRs indicate that quality assurance and community engagement could be strengthened. The next v0.9.0 release will be a major milestone if the backlog can be cleared.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*