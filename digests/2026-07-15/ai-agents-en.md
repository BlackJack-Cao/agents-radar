# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 23:34 UTC

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

# OpenClaw Project Digest for 2026-07-15

## Today's Overview
The project shows extremely high activity with **500 issues and 500 pull requests updated in the last 24 hours**, indicating a large, fast-moving community. However, the signal points to a **significant instability event** surrounding the `2026.7.1` release, with multiple **P0 crash-loop bugs** filed today that prevent gateway startup on upgrade. Over 170 issues were closed in the same period, and several critical bugs were fixed via merged PRs (e.g., startup migration conflicts, update crash on Windows). Despite this, **no new releases were published today** — the project appears to be in a stabilization/hotfix pattern after the `2026.7.1` release. Community engagement remains strong, with the oldest open issue (#75, Linux/Windows Clawdbot Apps) accumulating 113 comments over 7 months.

## Releases
*None new today.* The last release appears to be `2026.7.1`, which is the version implicated in several of the most severe bugs reported today.

## Project Progress
**Merged/closed PRs today** (from top items):  
- `#107838` (improve run-lease test speed)  
- `#107837` (add Linux canvas startup baselines for CI)  

**Closed issues** indicate resolved bugs:  
- `#22676` (Signal daemon race condition – orphaned processes)  
- `#50442` (backup timeout leaving large .tmp files)  
- `#92451` (system prompt bloat affecting smaller models)  
- `#107133` (Memory Core embedding_cache conflict permanently blocking Gateway)  
- `#102749` (startup legacy-state migration never converging when `.migrated` archive exists)  

These closures suggest the team is actively addressing the worst launch-blocking regressions.  

Several feature PRs advanced:  
- `#95132` (refactor skills: trim bundled starter set) – still open but nearing completion.  
- `#106832` (expose readable session presentation metadata) – waiting on author.  
- `#107765` (add standard hosting profiles) – large feature stacked on another PR.

## Community Hot Topics
| Issue | Title | Comments | 👍 | Summary |
|-------|-------|----------|----|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 113 | 81 | Long-standing request for desktop apps on non-Apple platforms. |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Centralized filename encoding utility | 19 | 1 | Multi-encoding support for Content-Disposition (Shift-JIS, etc.) |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 18 | 0 | Prevent memory poisoning attacks. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets | 14 | 4 | Agents should use API keys without being able to read them. |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram timeouts | 14 | 3 | Turns never reach `turn/completed` after 2026.5.27 update. |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) | DeepSeek cache hit rate <10% after 6.x upgrade | 8 | 10 | High-demand caching regression. |

**Underlying needs**: Users are pushing for **cross-platform parity** (especially #75), **security hardening** (#7707, #10659), **reliable multi-turn conversations** (#87744, #102020), and **better localization encoding** (#48788). The DeepSeek caching regression (#94518) especially resonates – 10 upvotes suggest widespread impact.

## Bugs & Stability
### Critical (P0) – crash-loop / data-loss
- [#101290](https://github.com/openclaw/openclaw/issues/101290) – **CLI startup preflight corrupts live state DB** (`database disk image is malformed`). Reproducible on macOS 2026.6.6. No fix PR yet.  
- [#107227](https://github.com/openclaw/openclaw/issues/107227) – **2026.7.1 startup-migration gate fatal** – `openclaw doctor` repair path does not resolve conflict; gateway crash-loops with no documented remedy.  
- [#107133](https://github.com/openclaw/openclaw/issues/107133) – **Memory Core embedding_cache conflict permanently blocks Gateway** on 2026.7.1 – **CLOSED** (fix merged).  
- [#102749](https://github.com/openclaw/openclaw/issues/102749) – **Startup legacy-state migration never converges** when `.migrated` archive already exists – **CLOSED**.  
- [#107220](https://github.com/openclaw/openclaw/issues/107220) – **Legacy memory sidecar `meta`/`chunks` conflicts fatal** on 2026.7.1 (closed? – status indicates open).  
- [#107330](https://github.com/openclaw/openclaw/issues/107330) – **OpenClaw Update 2026.7.1 Crash** on Windows 11 – **CLOSED**.  

### High (P1) – service degradation
- [#87744](https://github.com/openclaw/openclaw/issues/87744) – Codex-backed Telegram repeatedly times out (no `turn/completed`).  
- [#102020](https://github.com/openclaw/openclaw/issues/102020) – Second message fails with `reply session initialization conflicted` (cross-channel).  
- [#38327](https://github.com/openclaw/openclaw/issues/38327) – `Cannot convert undefined or null to object` with google-vertex/gemini-3.1-pro-preview (regression).  
- [#90944](https://github.com/openclaw/openclaw/issues/90944) – `sessions_yield` resume reply recorded but not delivered – user gets child raw summary instead of parent reply.  
- [#96834](https://github.com/openclaw/openclaw/issues/96834) – WhatsApp 1:1 inbound image wedges main lane ~3 min.  
- [#77012](https://github.com/openclaw/openclaw/issues/77012) – WebChat session transcript overwritten on every turn (5.2 regression).  
- [#95553](https://github.com/openclaw/openclaw/issues/95553) – Preflight compaction hard-capped at 60s, ignores config.  

**Existing fix PRs** for some bugs:  
- [#106826](https://github.com/openclaw/openclaw/pull/106826) – fix(gateway): recover when suppressed channel secrets are unavailable (addresses #106379, possibly related to startup issues).  
- [#107230](https://github.com/openclaw/openclaw/pull/107230) – fix(line): use precise control-command check for group mention bypass.  
- [#106971](https://github.com/openclaw/openclaw/pull/106971) – fix(exec-approvals): handle same-process sync/async lock contention.  
- [#107584](https://github.com/openclaw/openclaw/pull/107584) – fix(plugins): preserve already-loaded plugins across scoped harness activation (addresses #107408, a P1 plugin loading bug).  

**Regressions** are heavily concentrated around the 2026.5.x and 2026.6.x releases, with new issues also appearing in 2026.7.1. The **startup migration logic** is the single biggest breakage point today.

## Feature Requests & Roadmap Signals
**Top user-requested features** (by activity/reactivity):  
1. **Linux/Windows Clawdbot Apps** (#75) – 113 comments, 81 👍 – high interest, but no visible progress. Likely not next version.  
2. **Masked Secrets** (#10659) – 14 comments, 4 👍 – security feature with clear design. Could appear in next minor.  
3. **Memory Trust Tagging by Source** (#7707) – 18 comments – aligns with growing concern over prompt injection.  
4. **Denylist support for exec-approvals** (#6615) – 9 comments, 7 👍 – popular but needs product decision.  
5. **Centralized filename encoding utility** (#48788) – 19 comments – engineering improvement; PR #48578 partially addressed it.  
6. **Webhook hook sessions multi-turn support** (#11665) – 10 comments – documentation says it works, but code shows it doesn’t.  
7. **Per-Agent TTS/STT Configuration** (#66252) – 8 comments – multi-language support.  
8. **Add maxTurns / maxToolCalls config** (#9912) – 5 comments, 1 👍 – for preventing runaway tool calls.  

**Predictions for next version (2026.7.x or 2026.8.1)**:  
- Fixes for the crash-loop migration bugs (already in progress).  
- Likely inclusion of **Masked Secrets** and **Memory Trust Tagging** as security is a recurring theme.  
- **Webhook multi-turn** fix is straightforward and likely to land.  
- The **filename encoding utility** might be pushed to a larger architectural RFC (#48874) – less likely to ship immediately.

## User Feedback Summary
**Common pain points expressed today**:  
- **Upgrade anxiety**: Multiple users report that upgrading to 2026.7.1 completely breaks their gateway with no clear recovery path. Some ran `openclaw doctor --fix` without success.  
- **Session state fragility**: Issues with second messages failing (#102020), transcripts being overwritten (#77012), and session yield not delivering replies (#90944) indicate a core reliability problem in session management.  
- **Context overflow handling is poor**: Users want better error messages (#9409) and automatic fallback when context is exceeded (#9986).  
- **Unreliable multi-channel delivery**: Telegram DMs can be delayed or dropped (#91456); WhatsApp images freeze the lane (#96834).  
- **Self-hosted voice ignored by webchat** (#45508) – a feature gap that frustrates users with custom TTS/STT setups.  
- **OAuth invalidation cascades** (#80040) – a complex three-stage failure shows how tightly coupled auth, session, and tool execution are.

**Satisfaction signals**:  
- Several users actively contributing fix PRs (e.g., `TurboTheTurtle`, `sunlit-deng`, `steipete`), suggesting a healthy contributor base.  
- Upvotes on caching fixes (#94518) show appreciation for performance optimizations.  
- The community is responsive – even issues filed today (#107227, #107133) already have multiple comments and linked PRs.

## Backlog Watch
**Long-unanswered/needing-maintainer-review**:  
- [#7707](https://github.com/openclaw/openclaw/issues/7707) – Memory Trust Tagging (created Feb 3, updated Jul 14, still `needs-maintainer-review`).  
- [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked Secrets (Feb 6, still awaiting product decision).  
- [#11665](https://github.com/openclaw/openclaw/issues/11665) – Webhook multi-turn support (Feb 8, linked PR open but not merged).  
- [#6615](https://github.com/openclaw/openclaw/issues/6615) – Exec-approvals denylist (Feb 1, needs security review).  
- [#8299](https://github.com/openclaw/openclaw/issues/8299) – Config option to suppress sub-agent announce (Feb 3, needs product decision).  
- [#8355](https://github.com/openclaw/openclaw/issues/8355) – Streaming TTS pipeline for voice calls (Feb 3, needs maintainer review).  
- [#45508](https://github.com/openclaw/openclaw/issues/45508) – Self-hosted STT/TTS in webchat (Mar 13, needs maintainer review).  
- [#90213](https://github.com/openclaw/openclaw/issues/90213) – Legacy state migration warnings persist after `openclaw doctor --fix` (Jun 4, regression – needs product decision).  

These items have been open for months and represent **community-validated priorities** that lack maintainer bandwidth or decision. The **`clawsweeper:needs-product-decision`** label appears on many of them, indicating a product management bottleneck. With the current stability crisis, these feature decisions may be further delayed, but they represent a backlog that could significantly improve user experience and security.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-07-15

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem remains intensely active, with the core OpenClaw reference project and its downstream derivatives (NanoBot, Hermes Agent, CoPaw, ZeroClaw) collectively processing over **750 issues and 780 pull requests** in a single day. However, this velocity masks significant turbulence: the OpenClaw `2026.7.1` release triggered widespread crash-loop regressions, while CoPaw's v2.0.0 update introduced sandbox and memory-loop instabilities. The ecosystem is bifurcating between **power-user platforms** (OpenClaw, Hermes Agent, ZeroClaw) that prioritize extensibility and multi-channel support, and **lightweight/specialized agents** (NanoBot, PicoClaw, Moltis) that target simplicity or specific cloud providers. Three projects (NullClaw, TinyClaw, ZeptoClaw) show zero activity, suggesting consolidation or abandonment. The strongest community signals point toward **security hardening, session reliability, and small-model compatibility** as cross-cutting user demands.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Health Assessment |
|---------|---------------------|-------------------|---------------|-------------------|
| **OpenClaw** | 500 | 500 | None | 🔴 Critical – crash-loop crisis, stabilization mode |
| **NanoBot** | 13 | 65 | None | 🟢 Healthy – high merge velocity, responsive maintainers |
| **Hermes Agent** | 50 | 50 | None | 🟢 Healthy – strong sweeper automation, active community |
| **PicoClaw** | 3 | 9 | None | 🟡 Moderate – steady fixes, low feature velocity |
| **NanoClaw** | 0 | 28 | None | 🟡 Moderate – consolidation phase, security gaps open |
| **NullClaw** | 0 | 0 | None | ⚪ Dormant – no activity |
| **IronClaw** | 49 | 50 | None | 🟡 Moderate – heavy CI failures, Slack regression |
| **LobsterAI** | 4 | 3 | None | 🟡 Moderate – stale-issue sweep, quiet maintenance |
| **TinyClaw** | 0 | 0 | None | ⚪ Dormant – no activity |
| **Moltis** | N/A | 12 | ✅ `20260714.11` | 🟢 Healthy – responsive bug fixes, steady releases |
| **CoPaw** | 50 | 50 | ✅ `v2.0.0.post2` | 🟡 Moderate – active fix cycle, v2.0.0 regressions |
| **ZeroClaw** | 38 | 50 | None (v0.8.3 imminent) | 🟢 Healthy – SOP engine complete, release closeout |
| **ZeptoClaw** | 0 | 0 | None | ⚪ Dormant – no activity |

**Key observations:**
- OpenClaw dominates raw volume but is in crisis; Moltis and ZeroClaw are the most stable high-velocity projects
- Three projects (23%) show zero activity, indicating natural attrition in the ecosystem
- CoPaw and Hermes Agent have high fix throughput but carry regression risks from major version bumps
- Only Moltis and CoPaw shipped releases today

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community**: 500 daily issues/PRs vs. ~50 for most peers; oldest open issue (#75) has 113 comments and 81 upvotes
- **Most mature feature set**: Cross-platform ambitions, DeepSeek caching, memory trust tagging, masked secrets all under discussion
- **Fastest regression response**: 170 issues closed in single day; P0 bugs like `embedding_cache` conflict (#107133) fixed within hours of report
- **Strong contributor pipeline**: External contributors (`TurboTheTurtle`, `sunlit-deng`, `steipete`) actively submitting fix PRs

**Technical approach differences:**
- OpenClaw uses a **monolithic gateway** with complex startup migration logic, which is the primary failure point
- NanoBot and Hermes Agent use **modular plugin architectures** that isolate failure domains
- ZeroClaw's **SOP engine** is the only project with formal workflow orchestration; OpenClaw relies on ad-hoc session management

**Community size comparison:**
- OpenClaw's issue/PR volume is **10x higher** than the next most active project (NanoClaw, Hermes Agent, IronClaw)
- However, the crisis response ratio (170 closes / 500 updates = 34%) suggests many issues are being swept rather than resolved
- ZeroClaw has the most **structured roadmap** with explicit milestone trackers; OpenClaw's roadmap is implicit from community voting

## 4. Shared Technical Focus Areas

The following requirements emerged across **three or more projects**, indicating ecosystem-wide priorities:

| Focus Area | Projects Affected | Specific Needs |
|------------|------------------|----------------|
| **Startup/upgrade reliability** | OpenClaw, CoPaw, LobsterAI | Migration convergence, crash-loop recovery, config preservation |
| **Session state management** | OpenClaw, NanoBot, Hermes Agent, NanoClaw | Second-message failures, transcript overwrites, cross-channel delivery |
| **Memory/cache management** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Embedding cache conflicts, unbounded session logs, long-term vs. short-term separation |
| **Security hardening** | OpenClaw, NanoClaw, PicoClaw, ZeroClaw | Credential masking, `libolm`→`vodozemac` migration, confused-deputy prevention |
| **Channel integration reliability** | OpenClaw, Hermes Agent, IronClaw, NanoClaw | Telegram timeout, Slack disconnect handling, WhatsApp image wedges |
| **Small model / local AI compatibility** | OpenClaw, Moltis, ZeroClaw, CoPaw | Compact prompting, stringified tool args, null parameter tolerance |
| **Multi-tenancy / RBAC** | ZeroClaw, OpenClaw, Hermes Agent | Per-sender isolation, workspace separation, rate limiting |

**Most urgent cross-cutting need**: Upgrade reliability (5 projects report migration-related breakage). The OpenClaw `2026.7.1` migration bugs alone created 4 P0 issues shared across the ecosystem.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | Moltis | PicoClaw |
|-----------|----------|---------|--------------|----------|-------|--------|----------|
| **Target user** | Power users, self-hosters | Developers, small teams | Plugin developers, enterprises | Enterprise workflow automation | Desktop + multi-channel | AI tinkerers, local models | AWS Bedrock users |
| **Primary architecture** | Monolithic gateway | Modular Python agent | Plugin-based (Sweeper) | SOP engine + daemon | Sandbox + multi-agent | Lightweight Rust core | Go-based bridge |
| **Key differentiator** | Largest community, fastest iteration | Clean Python codebase, CI speed | Automated sweeper bug fixes | Formal workflow orchestration | Desktop GUI automation | Fast release cycle, model support | Cloud provider optimization |
| **Weakness** | Stability regressions | Memory leaks | Windows fragility | Complex setup | v2.0 regression density | Small community | Low feature velocity |
| **Channel support** | Telegram, WhatsApp, WebChat, Discord | Telegram, Discord, DingTalk | Discord, Telegram, Matrix, Feishu | Slack, Telegram, Web | Feishu, DingTalk, Discord | Generic | Telegram, Discord |
| **AI cloud focus** | Multi-provider | Codex-centric | Generic | Generic | Multi-provider | OpenAI + Codex | AWS Bedrock |

**Key architectural distinction**: ZeroClaw's **SOP engine** is the only project to treat agent workflows as first-class executable artifacts, while all others treat them as reactive chat sessions. This positions ZeroClaw for **deterministic automation** vs. conversational AI.

## 6. Community Momentum & Maturity

### Tier 1: High Velocity – Rapid Iteration (but instability risk)
- **OpenClaw**: 500+ daily updates, but crisis mode post-2026.7.1. Immediate stabilization needed.
- **CoPaw**: 50 daily issues/PRs, rapid patch cycle. v2.0.0 regressions being addressed, but trust is eroding among Windows and memory users.
- **ZeroClaw**: 38 issues/50 PRs, nearing major release (v0.8.3). Strongest roadmap discipline with explicit milestone trackers.

### Tier 2: Healthy Growth – Stable Iteration
- **NanoBot**: 65 PRs updated, 47 merged. Responsive maintainers, clear feature trajectory (heartbeat, OAuth, DingTalk).
- **Hermes Agent**: 50 PRs updated, strong sweeper automation. Plugin Interface Expansion (#64182) signals maturing architecture.
- **Moltis**: Small but well-run project with regular releases. GPT-5.6 support within 24 hours of model availability.
- **IronClaw**: 49 issues/50 PRs, but CI health (~70% failure) is a drag on momentum. Extension-runtime train is a positive signal.

### Tier 3: Stable Maintenance
- **PicoClaw**: 3 issues, 9 PRs. Steady bug fixes, no feature acceleration. `libolm`→`vodozemac` migration is the next milestone signal.
- **LobsterAI**: 4 issues, 3 PRs. Stale-sweeping backlog, backporting upstream fixes. Appears under-resourced.
- **NanoClaw**: 0 issues, 28 PRs. Consolidation phase, but security gaps (#2800, #2973) remain unmerged for weeks.

### Tier 4: Dormant / Abandoned
- **NullClaw**, **TinyClaw**, **ZeptoClaw**: Zero activity. Likely candidates for forking or archival.

## 7. Trend Signals

**Industry-level insights extracted from community feedback (July 15, 2026):**

1. **Upgrade anxiety is the #1 adoption barrier**: Every project with a recent major release (OpenClaw 2026.7.1, CoPaw v2.0.0) saw multiple P0 reports within hours. Users are deferring upgrades. **Action for developers**: Invest in canary deployment, rollback automation, and migration dry-run tools.

2. **Local AI users are an underserved growth segment**: Moltis, ZeroClaw, and OpenClaw all received requests for compact prompting, null-parameter tolerance, and stringified-scalar coercion. Users running Ollama/LM Studio need permissive parsers. **Opportunity**: A "local-first" configuration profile could capture this growing market.

3. **Security hardening is moving from nice-to-have to table stakes**: Credential masking (OpenClaw), `libolm`→`vodozemac` migration (PicoClaw), confused-deputy prevention (ZeroClaw), and supply-chain age gates (NanoClaw) all appeared in a single day. **Signal**: Enterprise adoption is driving security requirements faster than most projects can implement.

4. **Deterministic automation is emerging as a separate category**: ZeroClaw's SOP engine represents the most significant architectural differentiation in the ecosystem. Other projects (OpenClaw, NanoBot) treat all interactions as chat; ZeroClaw treats workflows as programmable artifacts. **Prediction**: Expect SOP-like features to be copied into OpenClaw and Hermes Agent within 6 months.

5. **Multi-platform desktop parity is a persistent pain point**: OpenClaw's #75 (Linux/Windows apps, 113 comments, 81 upvotes) has been open for 7+ months. Hermes Agent's Windows startup slowness (#49867) and Windows auto-update bugs (#49611) reflect similar frustration. **Observation**: Windows users are a vocal, valuable, but underserved segment across the ecosystem.

6. **Tool-call reliability is the new "it works on my machine" problem**: CoPaw's DeepSeek 400 errors (#6121), Moltis's stringified scalar fixes (#1136), IronClaw's tool-call argument shapes (#6107) all point to LLM tool-call format fragility becoming a systemic ecosystem issue. **Recommendation**: Standardized tool-call fuzzing corpus (as IronClaw proposes) would benefit all projects.

7. **CI health is becoming a project health proxy**: ZeroClaw explicitly tracks CI coverage (#9052), IronClaw reports 70% failure rate (#6103), Hermes Agent uses sweeper automation to offset test gaps. **Correlation**: Projects with CI health documentation (ZeroClaw, IronClaw) have higher fix velocity and fewer reopened bugs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-15

*Generated from GitHub data as of 2026-07-14 23:59 UTC*

---

## 1. Today’s Overview

NanoBot continues to see extremely high development velocity, with **65 pull requests updated in the last 24 hours** (47 merged/closed) and **13 issues updated** (10 closed). The project shows a clear focus on stabilizing the heartbeat/cron subsystem, extending the WebUI with user-facing features, and improving channel integration robustness. No new releases were tagged today, but the volume of merged PRs suggests a release candidate may be approaching. The community remains active, contributing both bug reports and feature PRs, with maintainers closing issues at a healthy rate.

---

## 2. Releases

*None* (no new releases were published in the last 24 hours).

---

## 3. Project Progress

The 47 merged/closed PRs reflect broad progress across the codebase. Notable completed items include:

- **CI & Testing**  
  - [PR #4936](https://github.com/HKUDS/nanobot/pull/4936): sped up CI by replacing a duplicated OS/version matrix with representative Python 3.11, 3.14 + coverage, and Windows 3.14 jobs.  
  - [PR #4631](https://github.com/HKUDS/nanobot/pull/4631): added a reusable scripted provider harness for agent runner tests, improving coverage of tool-loop scenarios.

- **WebUI**  
  - [PR #4933](https://github.com/HKUDS/nanobot/pull/4933): highlighted slash commands and app mentions with consistent styling.  
  - [PR #4930](https://github.com/HKUDS/nanobot/pull/4930): added a “copy” action to user messages.  
  - [PR #4935](https://github.com/HKUDS/nanobot/pull/4935): validated inferred file paths before preview to prevent errors.  
  - [PR #4927](https://github.com/HKUDS/nanobot/pull/4927): fixed a Docker build failure caused by missing `package-lock.json` after adding the `qrcode` dependency.

- **Heartbeat & Cron**  
  - [PR #4915](https://github.com/HKUDS/nanobot/pull/4915): made heartbeat response evaluation configurable, addressing regressions from the heartbeat-to-cron migration.  
  - [PR #4931](https://github.com/HKUDS/nanobot/pull/4931): delivered restart completion notices only after the target channel has reconnected.

- **Channels**  
  - [PR #4908](https://github.com/HKUDS/nanobot/pull/4908) (open): refactored channel setup and instance ownership to be channel-owned, reducing architecture coupling.  
  - [PR #4446](https://github.com/HKUDS/nanobot/pull/4446) (open): added a `disable_private_chat` flag and sender mention in group replies for DingTalk.

- **Codex Provider**  
  - [PR #4929](https://github.com/HKUDS/nanobot/pull/4929): improved OAuth failure diagnostics by adding a stage field to Codex failure warnings.

- **Documentation & Polishing**  
  - [PR #4932](https://github.com/HKUDS/nanobot/pull/4932): standardized `--config` help text across all CLI commands.

---

## 4. Community Hot Topics

The most active discussions this cycle:

- **[Issue #4924](https://github.com/HKUDS/nanobot/issues/4924)** (open, 3 comments): `_pick_heartbeat_target_from_sessions` fails when `unifiedSession: true` and no sessions exist. This is a **critical bug** that blocks heartbeat delivery for users running a single unified session. A fix PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) is already open.

- **[Issue #2568](https://github.com/HKUDS/nanobot/issues/2568)** (closed, 4 comments): Telegram markdown rendering became unreliable after v1.4.post6. While closed, the pattern of intermittent failures suggests the fix may not be fully tested against all edge cases.

- **[Issue #1086](https://github.com/HKUDS/nanobot/issues/1086)** (closed, 4 👍): WhatsApp Bridge bound to `127.0.0.1` prevented cross-container communication. The community reaction (4 thumbs-up) signals strong interest in multi-container deployments. The issue is closed, indicating a resolution was implemented.

- **[Issue #1445](https://github.com/HKUDS/nanobot/issues/1445)** (closed, 2 👍): Users asked to suppress cron job messages when nothing meaningful happened. The 2 upvotes and closed status suggest the feature was implemented.

- **[Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)** (open, 1 comment): Resource leak – `Session.messages` grows unbounded. This is a **long-running concern** with high severity, yet no fix PR exists yet.

**Underlying needs**: Users are demanding reliability in message delivery (Telegram, unified sessions), resource safety (memory leak), and better operational visibility (heartbeat, cron). The strong reaction to the WhatsApp networking issue underscores the importance of Docker-friendly deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#4787](https://github.com/HKUDS/nanobot/issues/4787) | `Session.messages` list grows unbounded; no upper cap. | No PR yet. |
| **High** | [#4924](https://github.com/HKUDS/nanobot/issues/4924) | Heartbeat target selection fails with unified sessions. | [#4928](https://github.com/HKUDS/nanobot/pull/4928) open |
| **Medium** | [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen models expose thinking/reasoning content in chat responses. | No PR yet. |
| **Medium** | [#4795](https://github.com/HKUDS/nanobot/issues/4795) | Streaming LLM calls bypass wall-clock timeout, risking indefinite runs. | Closed, implied fix merged. |
| **Low** | [#4881](https://github.com/HKUDS/nanobot/issues/4881) | Windows ExecTool corrupts PowerShell UTF-16 output. | Closed, fixed. |
| **Low** | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram long message splits cause rendering failure for early trunks. | Closed, fixed. |
| **Low** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram markdown unreliable after update. | Closed, but intermittent pattern suggests possible recurrence. |

The resource leak [#4787](https://github.com/HKUDS/nanobot/issues/4787) is the most concerning open stability problem, as it affects long-running unified sessions. The heartbeat unified session bug [#4924](https://github.com/HKUDS/nanobot/issues/4924) has an active fix in review.

---

## 6. Feature Requests & Roadmap Signals

Several feature PRs are advancing, indicating likely inclusion in the next release:

- **Heartbeat model override** ([PR #4549](https://github.com/HKUDS/nanobot/pull/4549)) – lets operators use a cheaper model for routine heartbeat checks.
- **OAuth status & expiry warnings** ([PR #4689](https://github.com/HKUDS/nanobot/pull/4689)) – adds proactive token expiry visibility in CLI, WebUI, and runtime.
- **Heartbeat trigger CLI command** ([PR #4620](https://github.com/HKUDS/nanobot/pull/4620)) – enables manual heartbeat triggering with dry-run and JSON output.
- **Archive facts with provenance** ([PR #4621](https://github.com/HKUDS/nanobot/pull/4621)) – includes `MEMORY.md` context in archive prompts to reduce duplicate facts.
- **One-click Deploy to Render** ([PR #4937](https://github.com/HKUDS/nanobot/pull/4937)) – simplifies cloud deployment via a Render Blueprint.
- **DingTalk enhancements** ([PR #4446](https://github.com/HKUDS/nanobot/pull/4446)) – private chat gating and group reply mentions.

User requests from closed issues that may shape future versions: WebUI cron job management ([#4218](https://github.com/HKUDS/nanobot/issues/4218), closed) and custom provider extra headers ([#2505](https://github.com/HKUDS/nanobot/issues/2505), closed) – both closed, likely implemented.

**Prediction**: The next minor release (v0.1.5 or similar) will likely include the heartbeat trigger command, OAuth status, DingTalk improvements, and the WebUI enhancements merged today. The deploy-to-Render feature may be held for a follow-up.

---

## 7. User Feedback Summary

- **Pain Points**  
  - Telegram markdown rendering remains unreliable for some users, even after the reported fix.  
  - Unified session users encounter heartbeat delivery failures ([#4924](https://github.com/HKUDS/nanobot/issues/4924)).  
  - Memory leak in session messages ([#4787](https://github.com/HKUDS/nanobot/issues/4787)) worries operators running long-term bots.  
  - Qwen model users see internal reasoning content leaked into responses ([#4934](https://github.com/HKUDS/nanobot/issues/4934)).  
  - Windows PowerShell users face corruption when using the `ExecTool` (closed, fixed).  

- **Satisfaction Signals**  
  - Many bugs are closed quickly (10 of 13 issues updated were closed), indicating responsive maintainers.  
  - Community members are actively contributing PRs for new features and tests.  
  - The high number of PRs (65 total) shows strong contributor engagement.  
  - Closed issues like [#1086](https://github.com/HKUDS/nanobot/issues/1086) (WhatsApp Docker networking) and [#1445](https://github.com/HKUDS/nanobot/issues/1445) (cron message filtering) show user wishes being fulfilled.

---

## 8. Backlog Watch

Issues that require maintainer attention:

- **[Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)** – **Resource leak** (Session.messages unbounded). Created July 6, updated July 14, no fix PR. High severity. Users of unified sessions are most affected. A mitigation or design discussion is overdue.

- **[Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)** – **Qwen thinking exposure**. Opened July 14, zero comments. While new, it requires prompt attention as it leaks model internals to end users.

- **[Issue #4924](https://github.com/HKUDS/nanobot/issues/4924)** – **Heartbeat unified session failure**. Has an open fix PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) that should be reviewed and merged promptly.

- **PRs with conflicts**: Several open PRs (e.g., [#4689](https://github.com/HKUDS/nanobot/pull/4689), [#4549](https://github.com/HKUDS/nanobot/pull/4549), [#4621](https://github.com/HKUDS/nanobot/pull/4621), [#4620](https://github.com/HKUDS/nanobot/pull/4620), [#4862](https://github.com/HKUDS/nanobot/pull/4862), [#4446](https://github.com/HKUDS/nanobot/pull/4446)) are labeled `conflict`, indicating they need rebasing or conflict resolution before merging. These should be resolved to keep the development pipeline moving.

*No long-unanswered issues from the community were identified beyond the above.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 15, 2026

## Today’s Overview
The project shows robust activity with **50 issues updated in the last 24 hours** (13 open, 37 closed) and **50 pull requests updated** (41 open, 9 merged/closed). No new releases were published today, but the high merge velocity (37 closed issues, 9 merged PRs) indicates strong stabilization efforts, many driven by automated sweeper bots. Community engagement is centered on the **Plugin Interface Expansion** tracking issue (9 comments in one day), while several long-standing bugs around Discord profile isolation, MCP resource leaks, and Windows bridge issues have been closed with fixes. The backlog still holds a few important open performance and UX regressions that have not yet attracted a fix PR.

## Releases
No new versions were released in the last 24 hours.

## Project Progress
The following pull requests were merged/closed today, advancing stability and feature completeness:

- **fix(swe-runner):** Removed `logging.basicConfig` from `MiniSWERunner.__init__` to stop overriding root logger configuration (#50496).
- **fix(tools):** Windows uninstall now correctly removes `.cmd` and `.exe` wrapper scripts (#50455).
- **fix(gateway):** Refuse `--replace` across `HERMES_PROFILE` mismatch to prevent pidfile collisions (#30196).
- **fix(skills_guard):** Sorted paths as strings to align with `bundle_content_hash` ordering, resolving digest mismatches (#64659).
- **feat(desktop):** Detected failed in-app updates and guided users to terminal fallback (closed #49606).
- **feat(desktop):** Added an option to prevent automatic updates on Windows startup (closed #49611).
- **feat(agent):** Profile temperature adjustment now available per profile in config (closed #47512).
- **Multiple sweeper-automated fixes** for bugs including Photon rich links, MCP zombie processes, Telegram multiplexing, and more (see Bugs & Stability section).

## Community Hot Topics
The most active discussions involve long-running stability and plugin ecosystem issues:

- **[#64182 – Plugin Interface Expansion (Tracking)](https://github.com/NousResearch/hermes-agent/issues/64182)** (9 comments, created July 14) – A maintainer-led tracking issue consolidating community Discord ideas from July 4. It outlines a plan to unblock long-queued PRs by defining stable hook lifecycle events and a taxonomy for plugin hooks. This signals a top priority for the maintainers despite its P3 label.
- **[#22478 – state.db FTS trigram index bloat](https://github.com/NousResearch/hermes-agent/issues/22478)** (3 comments, still open since May 9) – The dual FTS5 indexes consume 70% of the database. Users report 42K messages → 500MB DB. No fix PR exists; the community is waiting for a maintainer-driven redesign.
- **[#42674 – Background process TUI session bleed](https://github.com/NousResearch/hermes-agent/issues/42674)** (3 comments, still open since June 9) – Completion notifications leak into the wrong TUI session when multiple sessions exist. A related fix PR (#50453) is open but not yet merged.

## Bugs & Stability
Several bugs were reported and quickly fixed via sweeper bots today. The following remain open with significant impact:

**High Severity (open, no fix PR):**
- **state.db FTS bloat** (#22478, P2, open since May) – 70% of DB consumed by full-text indexes; no known fix in progress.
- **Cross-session background process bleed** (#42674, P2, open since June 9) – notify_on_complete delivered to wrong TUI session; PR #50453 (fix(desktop)) attempts to address but is still open.

**Medium Severity (fix PRs open, not yet merged):**
- **MCP OAuth login times out at 30s** (#50458, P2) – `hermes mcp login` capped by connection-probe timeout, breaking longer interactive flows. PR #50458 proposes a fix.
- **Desktop “Stop” kills background processes** (#50453, P2) – Sending a queued message then pressing Stop kills all background processes in the session. Fix PR is open.
- **MCP SamplingHandler tool_loop_count leak** (#50434, P2) – Error paths fail to reset counter, causing spurious “tool loop limit exceeded” errors. PR #50434 open.

**Low Severity (open with small impact):**
- **Matrix approval deny emoji mismatch** (#50450, P3) – Wrong reaction glyph shown; fix PR open.
- **macOS older than Big Sur Node install silent exit** (#50444, P2) – `install.sh` fails without warning; fix PR open.

**Bugs fixed today (sweeper-automated):**
- Discord config not profile-isolated (#50404)
- Photon sidecar iMessage rich links (#50336)
- WhatsApp Docker bridge npm install + log path (#49569)
- Vision fallback chain `await` on sync client (#49586)
- MCP zombie processes (#50169)
- Windows gateway resume stale `gateway_state.json` (#49976)
- Desktop “Thinking” toggle snap-back (#50449)
- Single failing MCP server destabilizes entire bridge (#50394)
- Feishu channel missing `lark-oapi` in Docker (#50205)
- Telegram multiplex chat_id routing (#49634)

## Feature Requests & Roadmap Signals
The following user-requested features were discussed or implemented today:

- **Plugin Interface Expansion** (#64182) – A formalized hook taxonomy and batch disposition of pending PRs. Likely to be merged in the next minor release (v0.18) given community interest and maintainer sponsorship.
- **web-native-fetch plugin** (PR #50456, open) – Zero-dependency local HTTP extractor with readability-lxml. No API key required. Expected to land if reviews pass.
- **Gateway-only context files** (PR #50428, open) – Loads `SOUL.gateway.md` and `MEMORY.gateway.md` for messaging sessions. A small but clear workflow improvement for gateway users.
- **Curator reasoning effort override** (PR #50416, open) – Allows separate `reasoning_effort` for LLM consolidation fork, giving power users fine-grained control.
- **require approval before gateway goal execution** (PR #50447, open) – Adds a safety step for `/goal` commands in gateway mode. Likely to be merged as a configurable option.
- **Do Not Auto Update Windows Desktop** (closed #49611) – Already implemented; users can toggle off startup updates.

**Prediction for next release (≈v0.18):** Plugin Interface hooks taxonomy, web-native-fetch, gateway context files, and the goal approval step are strong candidates. The `state.db` bloat issue may require a separate performance release if contributor bandwidth allows.

## User Feedback Summary
User sentiment remains positive overall, with explicit thanks from “BarisTheDeveloper” in #49867 (“I really love Hermes Agent and use it everywhere”). Common pain points expressed in the last 24 hours:

- **Windows startup slowness** (#49867) – The desktop app frequently hangs during build/startup, especially on first launch.
- **Windows auto-update instability** (#49611) – The main branch is not always stable; users want opt-out for automatic updates (now implemented).
- **Desktop “Thinking” toggle snap-back** (#50449) – Flipping the Thinking switch off briefly works then snaps back; this confused several users and was fixed today.
- **Silent fallback failover** (#50229) – When provider fallback triggers, the user is never notified that a different model is being used; a UX gap that was fixed by sweeper.
- **Windows uv.exe console popups** (#49596) – Hindsight daemon and plugin installers pop up command prompt windows, disrupting workflow (fixed).
- **Perplexity / custom provider tool schema errors** (#50234) – Some providers reject tool schemas; users need a `supports_tools: false` flag. This was marked as duplicate and not planned, indicating maintainers prefer a general solution.

Overall satisfaction is high, but users increasingly expect stable Windows builds and better diagnostics for provider configuration errors.

## Backlog Watch
The following issues and PRs have been open for an extended period without maintainer action and may need attention:

- **#22478 – state.db FTS bloat** (P2, open since May 9, 3 comments, no fix PR) – A systemic performance issue that affects all moderate-to-heavy users. No progress visible.
- **#42674 – Cross-session TUI bleed** (P2, open since June 9, 3 comments) – Two open PRs (#50453, #50434) attempt partial fixes but are not yet merged. Maintainer review needed.
- **PR #50461 – ACP idle cancel** (P2, open since June 21) – Treats cancel requests on idle sessions as no-ops. No maintainer comments.
- **PR #50458 – MCP OAuth timeout** (P2, open since June 21) – Important for users of OAuth-authenticated MCP servers. Awaiting review.
- **PR #50450 – Matrix emoji alignment** (P3, open since June 21) – Low impact but trivial fix; could be merged quickly.
- **PR #50439 – Migration security regression** (P2, open since June 21) – Archives approvals config incorrectly, skipping `exec.rules` allowlist. Needs urgent review.

Note: New issues created today (July 14) like #64182 and #64231 are tracking efforts that are actively maintained, so they are not backlog items.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-15

## 1. Today's Overview
PicoClaw sees moderate activity today with 3 issues and 9 pull requests updated in the past 24 hours. No new releases have been cut, but development continues on several fronts: five PRs were merged/closed, addressing bugs in AWS Bedrock, tool-call streaming, configuration handling, and token usage tracking. The community is most engaged in a high-priority feature request to replace the deprecated `libolm` crypt library. Two new bugs were filed—one affecting rate limiting when no fallback model is configured, and another affecting DingTalk chat list previews. Overall, the project remains in active maintenance with steady contributions.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
The following pull requests were merged or closed today, indicating concrete progress:

- **[#2982 – fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)](https://github.com/sipeed/picoclaw/pull/2982)**  
  Resolved a validation error when using Claude Opus 4.8 on AWS Bedrock by removing the `temperature` parameter for models that no longer support it.

- **[#2957 – fix(channels): prevent tool_calls from being dropped during streaming](https://github.com/sipeed/picoclaw/pull/2957)**  
  Fixed an issue where tool_calls messages were incorrectly filtered as auxiliary messages during streaming, breaking tool execution in certain channels.

- **[#2270 – fix(config): handle non-addressable SecureString values in collectSensitive](https://github.com/sipeed/picoclaw/pull/2270)**  
  Prevented a panic when reflection iterates over map values containing `SecureString` by creating addressable copies.

- **[#2128 – fix(tools): ensure tool parameters have valid JSON Schema properties field](https://github.com/sipeed/picoclaw/pull/2128)**  
  Fixed schema validation errors with strict OpenAI-compatible APIs (e.g., LM Studio) when MCP servers omit the `properties` field.

- **[#3156 – feat(pico): emit per-turn LLM token usage on finalized message](https://github.com/sipeed/picoclaw/pull/3156)**  
  Added real per-turn token consumption (input/output/total) to finalized assistant messages over the Pico channel, enabling downstream cost tracking.

## 4. Community Hot Topics
The most active discussion centers on:

- **[Issue #3088 – [Feature] Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)**  
  *8 comments, 2 👍* – This high-priority feature request advocates replacing the insecure and unmaintained `libolm` with the official replacement `vodozemac`. The proposal includes making `libolm` optional at compile time. Community support is strong, and the issue remains open with active discussion.

Other active items include:

- **[Issue #3232 – [BUG] Rate limiting doesn't work if no fallback models configured](https://github.com/sipeed/picoclaw/issues/3232)** – 1 comment, reported by VictorSu000. Highlights a configuration gap where RPM limits are ignored when only a default model is set.

- **[Issue #3255 – [BUG] DingTalk chat list preview shows fixed "PicoClaw"](https://github.com/sipeed/picoclaw/issues/3255)** – Newly filed, no comments yet. Affects user experience on the DingTalk channel.

## 5. Bugs & Stability
- **High Severity: Rate limiting broken without fallback models**  
  [#3232](https://github.com/sipeed/picoclaw/issues/3232): When only `agents.defaults.model_name` is set and no fallbacks are configured, the RPM (requests per minute) configuration for that model does not apply, potentially allowing excessive API calls. No fix PR exists yet.

- **Medium Severity: DingTalk preview shows fixed text**  
  [#3255](https://github.com/sipeed/picoclaw/issues/3255): The chat list preview in DingTalk always displays "PicoClaw" instead of the actual reply content. The full reply renders correctly inside the chat. No fix PR yet.

- **Recently Fixed: Tool calls dropped during streaming** – addressed by [#2957](https://github.com/sipeed/picoclaw/pull/2957) (merged today).  
- **Recently Fixed: Bedrock Opus 4.8 temperature error** – addressed by [#2982](https://github.com/sipeed/picoclaw/pull/2982) (merged today).  
- **Recently Fixed: Config panic with SecureString** – addressed by [#2270](https://github.com/sipeed/picoclaw/pull/2270) (merged today).  
- **Recently Fixed: Tool schema validation** – addressed by [#2128](https://github.com/sipeed/picoclaw/pull/2128) (merged today).

## 6. Feature Requests & Roadmap Signals
Two prominent feature-related PRs remain open and indicate the project’s direction:

- **[#3163 – feat(bedrock): leverage Converse prompt caching via cache points](https://github.com/sipeed/picoclaw/pull/3163)** – Open since June 23. Seeks to enable AWS Bedrock prompt caching (0.1× write cost) by inserting explicit cache points in system, tools, and messages. If merged, it will reduce input token costs significantly for Bedrock users.

- **[#3228 – fix(anthropic-messages): send SystemParts as system blocks with cache_control](https://github.com/sipeed/picoclaw/pull/3228)** – Open since July 6. Similarly targets caching for the Anthropic provider, enabling per-block `cache_control` markers. This is a prerequisite for Anthropic prompt caching on the `anthropic_messages` provider.

- **[#3088 – Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)** – High-priority feature request. Migration to `vodozemac` is a security-critical change and likely to be a focus for the next minor release.

Given the merging of per-turn token usage ([#3156](https://github.com/sipeed/picoclaw/pull/3156)), caching improvements are a natural next step. The next version (0.4.x) may include both vodozemac support and provider-level caching.

## 7. User Feedback Summary
User-submitted issues reveal concrete pain points:

- **Security concern**: The libolm library is unmaintained and insecure, prompting the community to request migration to vodozemac ([#3088](https://github.com/sipeed/picoclaw/issues/3088)).
- **Configuration fragility**: Rate limiting is unexpectedly broken when no fallback models are defined ([#3232](https://github.com/sipeed/picoclaw/issues/3232)). Users expect RPM limits to apply to the primary model alone.
- **Platform integration gaps**: The DingTalk channel fails to show reply content in chat list previews ([#3255](https://github.com/sipeed/picoclaw/issues/3255)), hurting usability for DingTalk users.

Positive signals include the merging of token usage tracking ([#3156](https://github.com/sipeed/picoclaw/pull/3156)), which addresses a frequently requested feature for cost monitoring.

## 8. Backlog Watch
Several items require maintainer attention:

- **[#3088 – Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)** – Marked `help wanted` and `priority: high`. Open since June 9 with no linked PR. With 8 comments and broad support, this is the most critical outstanding feature request.

- **[#3163 – Bedrock prompt caching](https://github.com/sipeed/picoclaw/pull/3163)** – Open since June 23, updated yesterday, but no merge. This is a significant performance enhancement for AWS Bedrock users; its length and complexity may require additional review.

- **[#3232 – Rate limiting bug](https://github.com/sipeed/picoclaw/issues/3232)** – Stale-labeled but still unresolved. The user is waiting for either a fix or configuration documentation.

- **[#3233 – Fix PR 3222 backward compat](https://github.com/sipeed/picoclaw/pull/3233)** – Open since July 7, stale. This PR attempts to maintain backward compatibility for changes in another PR (#3222). It may need rebasing or decision on approach.

No maintainer responses are visible in the provided data, but the project appears to be actively reviewing and merging contributions (5 PRs closed today). Maintaining momentum on these backlog items will be important for community trust.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-15

## 1. Today’s Overview
NanoClaw saw intense activity in the last 24 hours with **28 pull requests updated** (19 open, 9 merged/closed). No new issues were filed, and no releases were cut. The core team and community focused on **bug fixes, security hardening, and channel integration improvements**, including credential ordering fixes, poll-loop message delivery refinements, and a new **Dial channel skill** that was merged. Stability patches for outbound journal recovery and Docker image pull validation remain open. With no issues created, the project appears to be in a **consolidation phase** where existing known problems are being addressed rather than new feature requests surfacing.

---

## 2. Releases
**None** — no new releases were published today.

---

## 3. Project Progress (Merged/Closed PRs Today)
The following 6 pull requests were merged or closed in the last 24 hours (from the top‑20 list; 9 total closed per data overview):

- **#2728** — `fix(telegram): create the wiring row when pairing with a wire-to intent` (closed)  
  *Fixes Telegram pairing that silently skipped creating `messaging_group_agents` rows.*  
  [nanocoai/nanoclaw PR #2728](https://github.com/nanocoai/nanoclaw/pull/2728)

- **#2729** — `docs(add-telegram): match pairing status-block names to the setup step; fix adapter pin` (closed)  
  *Aligns documentation with actual status‑block output emitted by the pairing wizard.*  
  [nanocoai/nanoclaw PR #2729](https://github.com/nanocoai/nanoclaw/pull/2729)

- **#2753** — `fix(hooks): pre-commit fell open when pnpm was missing from PATH` (closed)  
  *Prevents commit hook failure when `pnpm` is not available.*  
  [nanocoai/nanoclaw PR #2753](https://github.com/nanocoai/nanoclaw/pull/2753)

- **#2730** — `fix: NANOCLAW_* flags set in .env never reach process.env under launchd/systemd` (closed)  
  *Ensures operational flags (e.g., `NANOCLAW_EGRESS_LOCKDOWN`) are loaded from `.env` by launchd/systemd.*  
  [nanocoai/nanoclaw PR #2730](https://github.com/nanocoai/nanoclaw/pull/2730)

- **#3042** — `feat(setup): offer Dial in the channel picker + wizard, installer, skills, docs` (closed)  
  *Adds Dial as a supported chat channel with full setup wizard, installer, and documentation.*  
  [nanocoai/nanoclaw PR #3042](https://github.com/nanocoai/nanoclaw/pull/3042)

- **#3043** — `fix(skills): switch Telegram deep-link from t.me to telegram.me` (closed)  
  *Resolves Telegram deep‑link unreliability by using the more stable `telegram.me` domain.*  
  [nanocoai/nanoclaw PR #3043](https://github.com/nanocoai/nanoclaw/pull/3043)

---

## 4. Community Hot Topics
No comment or reaction counts are available in the data snapshot, so activity is inferred from PR recency, cross‑references, and subject matter.

- **Dial channel integration** — PR #3042 (merged) and #3050 (open) attracted repeated updates and multiple authors (`OmriBenShoham`). The addition of a new chat channel is a significant feature that likely generated discussion.  
  [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)

- **Security‑related fixes** — PR #2800 (group folder validation, image pull lockdown) and #2973 (supply‑chain `minimumReleaseAge` activation) have been open for weeks and are frequently referenced as blockers for production deployments.  
  [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800) | [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973)

- **Poll‑loop message delivery fixes** — PRs #3049 and #3048 address subtle bugs in delivering `<message>` blocks (inside tool‑call turns, and truncation at quoted closing tags). These are likely experienced by real users running multi‑turn workflows.  
  [PR #3049](https://github.com/nanocoai/nanoclaw/pull/3049) | [PR #3048](https://github.com/nanocoai/nanoclaw/pull/3048)

**Underlying needs:**  
- Reliable multi‑step workflow execution (poll‑loop bugs).  
- Security hardening for container orchestration and supply chain.  
- Expansion of supported chat channels (Dial) to reach more users.

---

## 5. Bugs & Stability
Reported bugs from today’s PRs, ranked by severity:

| Severity | Bug | PR (status) |
|----------|-----|-------------|
| **Critical** | **Group folder validation missing** – allows arbitrary folder paths and implicit `docker pull` of untrusted images. | #2800 (open) |
| **High** | **Stale `outbound.db` journals after container kills** – messages can be delayed up to 60 s. | #2750 (open) |
| **High** | **Inbound attachments losing `fetchData`** – Telegram voice/audio notes never deliver bytes to the agent. | #3044 (open, fixes #2888) |
| **High** | **Message blocks not delivered during tool‑call turns** – the poll loop skips `<message>` emitted while the agent is executing a tool. | #3049 (open) |
| **Medium** | **Message body truncation at quoted `</message>`** – mis‑parse causes lost content. | #3048 (open) |
| **Medium** | **Credential ordering in `add‑slack` skill** – tokens required before webhook verification, causing setup failure. | #3047 (open) |
| **Medium** | **Discord DM buttons always map to “reject”** – `custom_id` newline suffix breaks gateway interaction parsing. | #2899 (open) |
| **Low** | **`safeParseContent` returns non‑objects for primitive payloads** – causes undefined reads in router. | #2801 (open) |
| **Low** | **Supply‑chain `minimumReleaseAge` gate not active** – `pnpm:` key misplacement. | #2973 (open) |
| **Low** | **Approval holds scattered across lifecycles** – PR #3040 aims to unify. | #3040 (open) |
| **Solved** | Telegram deep‑link domain; env flags not loaded; pre‑commit failure; Telegram wiring row missing. | #3043, #2730, #2753, #2728 (all closed) |

Most bug fixes already have open PRs, indicating active resolution.

---

## 6. Feature Requests & Roadmap Signals
- **Dial channel support** — PR #3042 was merged, and follow‑up PR #3050 adds Dial to the channel picker and `runChannelSkill` model. This signals **planned expansion of supported messaging platforms** (beyond Telegram, Slack, Discord). Expect Dial to be fully documented in the next release.
- **Unified approval lifecycle** — PR #3040 (`fix: unify approval holds behind one lifecycle contract`) suggests a **refactoring of the approval system** to reduce complexity and maintenance burden. Likely to land in the next minor version.
- **Skill fragment gating** — PR #2921 gates skill instructions on group skill selection, improving compose logic. This points to **better modularity and customisation** for multi‑skill containers.

---

## 7. User Feedback Summary
Although no user comments are provided, the following real pain points emerge from PR descriptions and fix rationales:

- **Setup friction** — Slack credential ordering (#3047) and Telegram deep‑link failures (#3043) show users are hitting configuration errors during first‑time installation.
- **Unreliable message delivery** — Messages lost inside tool‑call turns (#3049), truncated at quoted tags (#3048), and delayed outbound journals (#2750) indicate **multi‑turn agent workflows are fragile**.
- **Security concerns** — The ability to implicitly pull arbitrary Docker images (#2800) and the dormant supply‑chain age gate (#2973) are likely causing hesitation among security‑conscious adopters.
- **Discord integration** – Buttons always mapping to “reject” (#2899) makes approval workflows unusable on Discord.
- **Environment configuration** – Flags not loading under launchd/systemd (#2730) is a common deployment pain point.
- **Satisfaction** – Quick closure of critical wiring bugs (e.g., #2728, #2753) and rapid addition of Dial support suggests the team is responsive to community needs.

---

## 8. Backlog Watch
The following open PRs have been active for more than a week and require maintainer attention (sorted by age, oldest first):

| PR | Title | Created | Updated | Reason for watch |
|----|-------|---------|---------|------------------|
| #2750 | fix: recover stale outbound.db journals after container kills; classify hot‑journal poll races | 2026‑06‑12 | 2026‑07‑14 | High‑severity delivery bug, open 33 days |
| #2800 | fix(security): validate group folders and forbid implicit image pulls | 2026‑06‑17 | 2026‑07‑14 | Security‑critical, open 28 days, last follow‑up today |
| #2899 | fix(discord): strip newline suffix from custom_id before parsing Gateway interactions | 2026‑07‑01 | 2026‑07‑14 | Breaks Discord approval workflows, open 14 days |
| #2921 | fix(compose): gate skill fragments on group skill selection | 2026‑07‑03 | 2026‑07‑14 | Affects multi‑skill containers, open 12 days |
| #2973 | fix(supply-chain): activate the minimumReleaseAge gate (hoist out of `pnpm:` key) | 2026‑07‑07 | 2026‑07‑14 | Dormant security feature, open 8 days |

**Recommendation:** The core team should prioritise merging #2800 (security) and #2750 (stability) to reduce deployment risk, and provide guidance on #2899 and #2921.

---

*Data snapshot: GitHub – nanocoai/nanoclaw, updated 2026-07-15. All links use the `nanocoai/nanoclaw` repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw Project Digest — 2026-07-15

### 1. Today's Overview
The project saw heavy activity over the past 24 hours, with 49 issues and 50 PRs updated. 27 PRs were merged or closed — the majority from the ongoing **extension-runtime train (NEA-25)** and several high-priority bug fixes. No new releases were published, but the team advanced toward a unified extension model and addressed multiple Slack lifecycle regressions. CI reliability remains a growing concern, with ~70% of July main-branch pushes failing due to flaky tests.

### 2. Releases
**None.** No new versions were cut in the last day.

### 3. Project Progress (Merged/Closed PRs)
The following PRs were merged or closed (27 total, top entries from the data feed):

- **#6065** — *P7b: extension-runtime finalize — Lane A package inventory + DEL-5/DEL-2/DEL-8* (runtime PR 9/9) – closed  
- **#6056** — *P7a — wire state enums + accounts list + deferred legs* (runtime PR 8/9) – closed  
- **#6012** — *P5 — delivery coordinator + Slack/Telegram outbound* (runtime PR 6/8) – closed  
- **#6007** — *P4 — generic ingress router + verifier* (runtime PR 5/8) – closed  
- **#6089** — *fix(reborn): recover resource governor from libSQL contention* – closed  
- **#6095** — *fix(reborn): name blocked provider in Slack auth-unaware notice* – closed  
- **#5896** — *Fix WebUI memory browse isolation* – closed  
- **#6013** — *feat(agent-loop): tools-capable completion nudge for interactive coding* – closed  

The extension-runtime train (PRs #6007, #6012, #6056, #6065) now covers ingress, delivery, and final packaging — a significant milestone. Bug fixes improved Slack credential handling, database contention recovery, and WebUI memory isolation.

### 4. Community Hot Topics
Most commented issues (last 24h updates):

- **#5948** (5 comments, closed) – “[bug_bash_P3] Assistant incorrectly reports GitHub extension as activated when it is only installed” — users expect status to match UI.  
- **#5889** (2 comments, closed) – “[bug_bash_P3] ‘Load older messages’ button does not load additional activity” — a common UI dead-end.  
- **#5640** (2 comments, closed) – “Harness gap: no RecordingSecurityAuditSink double” — integration test parity.  
- **#6050** (2 comments, open) – “Conversation history error banner displayed despite successful chat response” — lingering UX noise.  
- **#6105** (1 comment, open) – “Extension/channel lifecycle state-machine test” — explicitly called out as the #1 bug family.

The underlying theme: **user-facing reliability of Slack and other extensions** remains the top pain point. The team acknowledged that Slack bugs regressed across four QA waves.

### 5. Bugs & Stability
**Critical / High Severity (open, fix in progress or needed):**

- **#6047** – Task messages displayed out of chronological order. **Fix PR #6096** (open) serializes concurrent inbound writes.  
- **#6092** – Slack conversation hangs in “thinking…” state after reconnecting. No fix PR yet.  
- **#6091** – Slack extension reports conflicting connection states after disconnect. No fix PR yet.  
- **#6099** – `POST /llm/test-connection` returns `ok:true` for unreachable endpoints with invalid keys — false positive. No fix PR.  
- **#6109** – OpenAI-compat API: Bedrock silently ignores model override; response label blind echo. No fix PR.  
- **#6087** – Extension catalog load failures silently show empty state — indistinguishable from genuine empty. No fix PR.  
- **#6085** – Admin user details expose broken “Create token” action (backend lacks endpoint). No fix PR.  
- **#5945** (closed) – Run fails after long multi-tool execution with generic “model provider unavailable” — root cause not yet addressed.  
- **#6100, #6101, #6102** – Three follow-up threading/serialization bugs found during #6047 fix review. No fix PRs yet.

**Resolved today:**

- **#6047** ordering fix submitted (#6096) — under review.  
- **#5884** (routine credential loss) partially addressed by #6095 (better error messaging), but full fix still pending.  
- **#6039** (light theme contrast) and **#6037** (chat connection status hidden) both closed.  
- **#6089** resolved libSQL contention by classifying BUSY/LOCKED as retryable.

CI health: **#6103** documents that ~70% of main pushes in July failed due to ~5 flaky tests and a dead nightly-deep-CI pipeline. A quarantine and retry mechanism is proposed.

### 6. Feature Requests & Roadmap Signals
Several enhancement issues signal near-term direction:

- **#6105** – Extension/channel lifecycle state-machine test (install→connect→disconnect→reconnect→uninstall) + cron canary lanes.  
- **#6106** – Release/staging gate: boot smoke + upgrade-path canary before publish.  
- **#6108** – Error fidelity: no generic failures; status must not lie.  
- **#6107** – Model-input compatibility corpus: replay real tool-call argument shapes against schemas/parsers in CI.  
- **#6104** – 24h fix-or-wontfix SLA on daily failure-taxonomy candidates.  
- **#6103** – CI signal recovery: nextest retries + visible quarantine + watchdog for dead workflows.

These indicate the team is investing heavily in **testing infrastructure, CI stability, and error surface quality** — likely to appear in the next release (0.30.x). The extension-runtime train and MCP registration framework (#5970) are also foundational for upcoming user-facing features.

### 7. User Feedback Summary
Real pain points from bug-bash reports:

- **Slack integration** is unreliable: disconnects lead to ghost connections (#6091) and infinite “thinking” states (#6092).  
- **Conversation history** has broken ordering (#6047) and false error banners (#6050).  
- **Credentials** vanish after external token revocation, with misleading “model unavailable” errors (#5884, #5945).  
- **UI** issues: thread deletion requires page refresh (#5947), light theme unreadable (#6039), connection status hidden (#6037).  
- **Admin tools** expose non-functional “Create token” action (#6085).

Satisfaction is low in these areas, but the high volume of bug fixes landing each day shows the team is responsive.

### 8. Backlog Watch
Issues that may require maintainer attention (still open, no fix PR yet, or long-standing):

- **#5884** (open since 07-09) – Routine loses credentials after external token revocation. Partial messaging fix in #6095, but the root credential-revocation detection may still be missing.  
- **#6092, #6091** (open since 07-14) – Slack hang and conflicting states after disconnect/reconnect.  
- **#6099** (open) – `test-connection` false positive — could mislead users.  
- **#6109** (open) – Bedrock model override ignore in OpenAI-compat API — a parity gap.  
- **#6087** (open) – Silent catalog load failure — degrades UX.  
- **#6100, #6101, #6102** (open since 07-14) – Three follow-up threading bugs from #6047 review — critical for correctness.  
- **#5598** (open release PR) – Release PR stuck since 07-03; may be blocked by breaking changes in `ironclaw_common` and `ironclaw_skills`.

No issues from the provided data appear to be completely abandoned; all have recent activity. The project is clearly prioritizing stability and extension lifecycle reliability for the upcoming release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-15

## 1. Today's Overview
The LobsterAI project shows stable, low-activity maintenance, with 4 closed issues and 3 merged PRs in the last 24 hours. No new releases were published, reflecting a period of consolidation rather than active feature development. All four closed issues were marked as `[stale]` and closed automatically after prolonged inactivity (created April 3, closed July 14), indicating the maintainer team may be performing a backlog sweep. The day's development effort was entirely focused on bug fixes and stability improvements, particularly around the OpenClaw runtime and user-facing UI behaviors. Overall project health appears moderate — the lack of open issues suggests resolved or cleared backlogs, but the absence of releases or new feature PRs signals a quiet maintenance phase.

## 2. Releases
**None.** No new releases were published today. The project appears to be in a patch-backport cycle, pulling fixes from upstream OpenClaw v2026.6.1 into the LobsterAI codebase without formal version bumps.

## 3. Project Progress
Three pull requests were merged today, all classified as fixes:

- **[#2331](https://github.com/netease-youdao/LobsterAI/pull/2331)** — `fix(openclaw): terminate critical tool loops`  
  Backports a dual-layer fix from OpenClaw v2026.6.1 ensuring that when a critical tool veto fires, the current Agent run is terminated cleanly. Preserves normal sibling tool behavior and adds patch validation with regression coverage.

- **[#2330](https://github.com/netease-youdao/LobsterAI/pull/2330)** — `fix(openclaw): stop loop after aborted tool run`  
  Backports an upstream fix (`7fe287b0d3`) that stops the agent loop at abort boundaries after tool execution, preventing runaway loops. Includes Lobster-specific patch validation.

- **[#2329](https://github.com/netease-youdao/LobsterAI/pull/2329)** — `fix(cowork): prevent conversation scroll jumps`  
  Fixes a user-facing bug where streaming conversations would force-scroll the viewport, overriding manual scrolling. Now respects manual scroll positions and cancels pending auto-scroll actions.

**Summary:** Today's development advanced no new features. Instead, the team invested in runtime reliability (OpenClaw loop termination) and UI polish (conversation scroll behavior).

## 4. Community Hot Topics
No issues or PRs today generated significant discussion. The highest-engagement items were closed stale issues, each with 2–3 comments and zero reactions:

- **[#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)** — Conversation share screenshot truncation when content is long. (3 comments)
- **[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)** — Email configuration test connectivity hangs indefinitely. (2 comments)
- **[#1389](https://github.com/netease-youdao/LobsterAI/issues/1389)** — Language selection bug: Chinese options shown in English when language is set to English. (3 comments)
- **[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)** — Scheduled tasks occasionally fail to update (intermittent, no reproducible steps). (2 comments)

**Analysis:** These issues were created three months ago and only recently closed automatically. The lack of maintainer responses during that period suggests either resource constraints or a triage process that prioritizes newly opened bugs. The community's underlying need appears to be for reliable core functionality — share exports, email configuration, multilingual UI, and scheduled task management are all production-critical features.

## 5. Bugs & Stability
All four bugs reported today were closed as stale. Ranked by user impact:

1. **[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)** — **Email config hangs indefinitely** (Severity: High)  
   Entering invalid credentials causes the "Test Connectivity" button to freeze the UI indefinitely, requiring a restart. This could leave users unable to configure email integrations. No fix PR is visible.

2. **[#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)** — **Share screenshot truncation** (Severity: Medium)  
   Long conversation threads produce incomplete screenshots when shared, potentially causing data loss in exported summaries. No fix PR linked.

3. **[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)** — **Scheduled tasks fail to update intermittently** (Severity: Medium)  
   Editing a scheduled task and clicking "Update" sometimes does nothing. Since no reproduction steps were provided, the root cause is unclear. No fix PR visible.

4. **[#1389](https://github.com/netease-youdao/LobsterAI/issues/1389)** — **Language UI strings inverted** (Severity: Low)  
   When the app language is set to English, Chinese-language options display in English instead of Chinese. Cosmetic, but could confuse bilingual users.

**Note:** While these bugs were closed automatically, the fixes may have been resolved by the OpenClaw backports or other unreleased work. No correlation to today's merged PRs is apparent.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were logged today. However, analyzing closed stale issues reveals implicit user demands that may influence the roadmap:

- **Reliable long-context sharing** — Users need robust export functionality for long AI conversations (Issue #1386 suggests current image-based sharing is insufficient).
- **Internationalization consistency** — Language toggle bugs (Issue #1389) indicate the i18n system needs better test coverage across locales.
- **Configuration usability** — The email test hang (Issue #1388) shows users rely on validation feedback; a non-responsive test erodes trust in configuration UIs.

**Prediction:** The next version may include:
- Improved email configuration flow with better error handling and non-blocking connectivity tests.
- Enhanced share functionality (possibly paginated or chunked image export for long conversations).
- Stale-issue triage automation to prevent three-month response gaps.

## 7. User Feedback Summary
User pain points expressed in today's closed issues center on **core functionality reliability**:

- **Inconsistency:** "定时任务无法更新（偶现）" (scheduled tasks failing to update intermittently) suggests low reproducibility frustrates both users and developers.
- **UI freezes:** The email connectivity test hang is a high-friction experience — a single wrong input blocks further interaction until restart.
- **Data integrity:** The share screenshot truncation concerns users who rely on exports for documentation or team communication.
- **Localization confusion:** The language toggle bug indicates that even simple UX flows have edge cases that erode confidence.

There are no overt expressions of satisfaction or dissatisfaction, but the quiet resolution without maintainer comments may leave users uncertain whether their issues were read or fixed.

## 8. Backlog Watch
No truly abandoned issues or PRs were identified — the stale-issue sweep cleaned up items that had been dormant for 3+ months. However, the following PRs from today are critical and bear monitoring:

- **[#2331](https://github.com/netease-youdao/LobsterAI/pull/2331) & [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330)** — These OpenClaw backports touch the agent loop termination logic. If deployed without sufficient testing, they could introduce regressions in normal tool execution flow. Maintainers should verify regression battery passed.

- **[#2329](https://github.com/netease-youdao/LobsterAI/pull/2329)** — The scroll-jump fix is low-risk but should be validated against different streaming scenarios (e.g., very fast token generation, user scrolling mid-stream).

**Maintainer attention needed:** None of today's open items require immediate action. The team appears to be gradually clearing stale tickets while backporting upstream stability patches. A new release should be considered to communicate these fixes to users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-15

---

## 1. Today's Overview

The Moltis project saw **high activity** over the past 24 hours: 12 pull requests were updated (8 merged/closed) and a new release (`20260714.11`) was published. Two bugs were fixed (MCP OAuth, CalDAV panic), support for GPT‑5.6 models was added, and several robustness improvements for local/smaller models were merged. One new bug remains open (session deletion). Overall, the project is in a healthy state with a steady stream of dependency updates, feature work, and targeted fixes.

---

## 2. Releases

**Version:** `20260714.11`  
**Published:** 2026-07-14

This release bundles the following merged changes (see Section 3 for details):

- GPT‑5.6 model support (Sol, Terra, Luna)
- Fix for MCP OAuth flow with `resource_metadata` (Notion, Linear)
- Fix for CalDAV panic on non-ASCII datetimes
- Fix for browser tool calls with `null` optional parameters
- Fix for stringified scalar tool arguments from local models
- Fix for gateway metrics feature forcing `matrix-sdk` dependency
- Capped persisted tool results before rehydration
- Dependency bumps (esbuild, vite)

**No breaking changes or migration notes** were documented in the source data.

---

## 3. Project Progress

**Merged/closed pull requests (8 total):**

- [#1146](https://github.com/moltis-org/moltis/pull/1146) – **GPT‑5.6 support**: Registered GPT‑5.6 Sol, Terra, and Luna in OpenAI and Codex catalogs, with correct context windows.
- [#1120](https://github.com/moltis-org/moltis/pull/1120) – **MCP OAuth fix**: Resolved `invalid_target` error for servers using `resource_metadata` in `WWW-Authenticate` (fixes #1119).
- [#1145](https://github.com/moltis-org/moltis/pull/1145) – **CalDAV panic fix**: Prevented crash on non-ASCII datetime values from remote CalDAV servers.
- [#1136](https://github.com/moltis-org/moltis/pull/1136) – **Stringified scalar tool args**: Coerce string values like `"true"` or `"5000"` before validation (helps local models).
- [#1098](https://github.com/moltis-org/moltis/pull/1098) – **Browser null params**: Tolerate explicit `null` for optional browser parameters (e.g., Gemma 4).
- [#1089](https://github.com/moltis-org/moltis/pull/1089) – **Capped tool results**: Persisted tool results are now capped when rehydrating session history.
- [#1139](https://github.com/moltis-org/moltis/pull/1139) – **Gateway metrics fix**: `force-enable` of `matrix-sdk` removed when only metrics feature is enabled.
- [#1141](https://github.com/moltis-org/moltis/pull/1141) – **Dependency updates**: Bumped `esbuild` and `vite` in UI and documentation directories.

**Open PRs (4 total)** show ongoing work:
- [#1124](https://github.com/moltis-org/moltis/pull/1124) – Context command support per chat turn
- [#1135](https://github.com/moltis-org/moltis/pull/1135) – Auto-screenshot after browser state-changing actions
- [#1093](https://github.com/moltis-org/moltis/pull/1093) – Channel activity log visibility settings
- [#1148](https://github.com/moltis-org/moltis/pull/1148) – Another dependency bump batch

---

## 4. Community Hot Topics

| Issue / PR | Type | Comments | Activity |
|-----------|------|----------|----------|
| [#1102](https://github.com/moltis-org/moltis/issues/1102) | Feature Request | 1 comment | Updated yesterday with license/capability note |
| [#1132](https://github.com/moltis-org/moltis/issues/1132) | Bug | 1 comment | Updated yesterday, still open |
| [#1119](https://github.com/moltis-org/moltis/issues/1119) | Bug (closed) | 1 comment | Fixed by #1120, closed yesterday |
| [#1146](https://github.com/moltis-org/moltis/pull/1146) | Feature PR | – | Merged; GPT‑5.6 support |

**Analysis:**  
- **#1102** (FunASR/SenseVoice local STT) continues to attract attention as users seek offline speech recognition. The maintainer added a clarifying note about licenses. This is a moderate-interest feature request with no assigned developer yet.  
- **#1132** (main session can't be deleted) is a usability bug affecting session management. It has one comment but no fix PR yet.  
- The **MCP OAuth issue (#1119)** was the most actively discussed bug but is now resolved, which should unblock Notion/Linear MCP integration.

---

## 5. Bugs & Stability

**High severity:**
- **#1132** – “main” session cannot be deleted/archived.  
  *Status:* **Open**, no fix PR. This blocks users from cleaning up default sessions. (Medium to high impact on daily use.)

**Medium severity (fixed in `20260714.11`):**
- **#1119** – MCP OAuth fails with `resource_metadata` for Notion/Linear.  
  *Fix:* [#1120](https://github.com/moltis-org/moltis/pull/1120) merged.
- **#1145** – CalDAV panic on non-ASCII datetimes.  
  *Fix:* [#1145](https://github.com/moltis-org/moltis/pull/1145) merged.

**Low severity / robustness (fixed):**
- **#1098** – Browser tool calls with `null` optional parameters (local models).  
  *Fix:* [#1098](https://github.com/moltis-org/moltis/pull/1098) merged.
- **#1136** – Stringified scalar tool arguments (local models).  
  *Fix:* [#1136](https://github.com/moltis-org/moltis/pull/1136) merged.
- **#1139** – Gateway metric feature force-enabled matrix-sdk.  
  *Fix:* [#1139](https://github.com/moltis-org/moltis/pull/1139) merged.

**Assessment:** The project is responsive to bugs; most reported issues are fixed within the same release cycle. The one lingering bug (#1132) is worth watching.

---

## 6. Feature Requests & Roadmap Signals

**Requested features (open issues):**
- [#1102](https://github.com/moltis-org/moltis/issues/1102) – Add FunASR/SenseVoice as local STT engine → likely a long-term roadmap item, not yet in active development.

**Features in open PRs (likely to land in next release):**
- [#1124](https://github.com/moltis-org/moltis/pull/1124) – Context command per chat turn (injects runtime context)
- [#1135](https://github.com/moltis-org/moltis/pull/1135) – Auto-screenshot after browser actions (per-step timeline)
- [#1093](https://github.com/moltis-org/moltis/pull/1093) – Channel activity log visibility settings (per-user/per-channel)

Given the high merge velocity, at least **#1124** and **#1135** could be merged for the next version. **#1093** has been open since June 3 and may need review.

---

## 7. User Feedback Summary

**Pain points (addressed or ongoing):**

- ✅ **MCP OAuth integration** (Notion/Linear): Users reported the flow was broken; now fixed.
- ✅ **CalDAV non-ASCII datetimes**: Crashes reported by users with non-English calendar entries; patched.
- ⚠️ **“main” session cannot be deleted**: Users (including @vvuk) encountering a hard-to-explain limitation – no resolution yet.
- ✅ **Local model compatibility**: Multiple reports of small models (Gemma 4, oMLX) producing malformed tool calls (null params, stringified scalars) – both fixed.
- ✅ **Gateway build**: Users wanting metrics without Matrix support can now build without the full matrix‑sdk.

**Satisfaction indicators:**  
The rapid turnaround on fixes (often merged same day as reported) suggests a responsive maintainer team. No negative sentiment was captured in the data.

---

## 8. Backlog Watch

The following issues and PRs have remained open for more than two weeks without maintainer assignment or comment:

| Item | Created | Last Updated | Days Open | Notes |
|------|---------|--------------|-----------|-------|
| [#1093](https://github.com/moltis-org/moltis/pull/1093) – Channel activity log settings | 2026-06-03 | 2026-07-14 | 42 | No maintainer review |
| [#1102](https://github.com/moltis-org/moltis/issues/1102) – FunASR/SenseVoice STT | 2026-06-04 | 2026-07-14 | 41 | Feature request, no assignee |
| [#1132](https://github.com/moltis-org/moltis/issues/1132) – main session deletion bug | 2026-06-18 | 2026-07-14 | 27 | Open bug, one comment, no PR |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) – Context command per chat turn | 2026-06-15 | 2026-07-14 | 30 | Awaiting review/merge |
| [#1135](https://github.com/moltis-org/moltis/pull/1135) – Auto-screenshot after browser actions | 2026-06-26 | 2026-07-14 | 19 | Awaiting review/merge |

**Recommendations:**  
- Assign a triage owner to **#1132** (bug) and **#1102** (feature) to provide status updates.
- Review and merge **#1124** and **#1135** – both are relatively non‑controversial additions with user demand.
- **#1093** needs a maintainer sign‑off; it adds visibility controls for multi‑user channels.

---

*Data snapshot as of 2026-07-14 23:59 UTC. All links refer to the [moltis-org/moltis](https://github.com/moltis-org/moltis) repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-07-15

## 1. Today's Overview

Project activity remains high after the v2.0.0 release, with **50 issues** and **50 pull requests** updated in the last 24 hours. The team closed 35 issues and merged/closed 26 PRs, while 24 PRs and 15 issues remain open. A new patch release **v2.0.0.post2** was published, addressing sensitive file handling and sandbox regression fixes. However, the backlog of bug reports (many related to sandbox, memory, and context compression regressions) suggests that user satisfaction with v2.0.0 is mixed, and the team is actively triaging critical issues.

## 2. Releases

**v2.0.0.post2** – [Release Link](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2)

- **What’s Changed:**
  - `feat: more sensitive files & allow read global` ([PR #6067](https://github.com/agentscope-ai/QwenPaw/pull/6067))
  - `chore: bump version to 2.0.0post2` ([PR #6070](https://github.com/agentscope-ai/QwenPaw/pull/6070))
  - `test(unit): runtime/security/install regression tests`
- **Breaking Changes**: None noted.
- **Migration Notes**: Users upgrading from v2.0.0.post1 should only see minor improvements to file security and global read permission. No config changes required.

## 3. Project Progress

Over 20 PRs were merged/closed today, reflecting active stabilization work:

- **Sandbox & Governance fixes:**
  - `fix(governance): honor sandbox_enabled switch in OFF-mode sandbox path` ([PR #6109](https://github.com/agentscope-ai/QwenPaw/pull/6109)) – Ensures `sandbox_enabled=false` is respected even when approval is OFF.
  - `fix(governance): clear stale OFF-mode sandbox state` ([PR #6122](https://github.com/agentscope-ai/QwenPaw/pull/6122)) – Prevents reuse of disabled sandbox configuration.
- **Context & Memory improvements:**
  - `fix(scroll): prevent recall loops and enforce hard context limits` ([PR #6123](https://github.com/agentscope-ai/QwenPaw/pull/6123))
  - `fix(context): keep tool results paired with assistant calls during compression` ([PR #6108](https://github.com/agentscope-ai/QwenPaw/pull/6108)) – Fixes DeepSeek 400 errors after scroll compression.
  - `fix(memory): restrict automatic memory to external user queries` ([PR #6120](https://github.com/agentscope-ai/QwenPaw/pull/6120)) – Prevents memory loops triggered by internal system messages.
  - `feat(memory): improve ReMe reliability, observability, and CJK embedding safety` ([PR #6098](https://github.com/agentscope-ai/QwenPaw/pull/6098)) – Addresses Chinese memory embedding errors and adds runtime observability.
- **Desktop & CI:**
  - `fix(desktop): prevent WKWebView from pinning stale console frontend` ([PR #6107](https://github.com/agentscope-ai/QwenPaw/pull/6107))
  - `fix(download_catalog): handle gzip-encoded JSON responses` ([PR #6106](https://github.com/agentscope-ai/QwenPaw/pull/6106))
  - `ci(coverage): ratchet floors to current baseline` ([PR #6103](https://github.com/agentscope-ai/QwenPaw/pull/6103))
  - `refactor(ci): harden desktop workflows` ([PR #6110](https://github.com/agentscope-ai/QwenPaw/pull/6110))
- **Community Contributions:**
  - `feat(plugins): add Zalo Bot channel (2.0 plugin architecture)` ([PR #6112](https://github.com/agentscope-ai/QwenPaw/pull/6112)) – Merged, bringing Zalo integration under the plugin system.

## 4. Community Hot Topics

Issues and PRs with the highest engagement reflect user frustration and feature desires:

- **#2291** – *Help Wanted: Open Tasks — Come Contribute!* (64 comments, closed). Maintainer-run meta-issue for onboarding contributors. High engagement indicates community willingness to help.
- **#5951** – *Windows sandbox pwsh recursion explosion, NTFS ACE pollution, CREATE_NO_WINDOW missing* (9 comments, closed). Detailed root cause analysis of severe sandbox bug.
- **#578** – *OpenClaw-Inspired Features for Compounding Agent Value* (8 comments, closed). Meta-feature request covering daemon commands, skill reuse, and agent performance improvements.
- **#6089** – *Model 'unknown' execution failure with opencode free model* (7 comments, closed). Users hitting backend provider errors.
- **#6113** – *"一直卡在搜索记忆" (stuck in memory search loop)* (5 comments, open). Agent endlessly searches memory on every query after v2.0.0 – a common pain point.
- **#5952** – *auto-memory fails: No module named 'agentscope.tool._builtin._scripts'* (5 comments, closed). Module missing from frozen desktop build.

**Underlying needs:** Users are demanding stability regressions be fixed first (sandbox, memory loops, API format errors) and are also pushing for long-requested features like real-time message injection (#6087) and better sandbox control (#6023).

## 5. Bugs & Stability

Several high-severity regressions were reported today. The team has addressed many with targeted PRs, but some remain open.

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Windows AppContainer sandbox causes pwsh recursion, memory exhaustion, and system directory ACE pollution. | Closed. Fix likely in v2.0.0.post2. |
| **Critical** | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | `auto-memory` crashes because `agentscope.tool._builtin._scripts` missing in frozen build. | Closed. Fix in [PR #6097](https://github.com/agentscope-ai/QwenPaw/pull/6097). |
| **High** | [#6089](https://github.com/agentscope-ai/QwenPaw/issues/6089) | Model 'unknown' execution error when using opencode free models – session killed. | Closed. Root cause may be provider mismatch. |
| **High** | [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) | Memory search infinite loop after v2.0.0 upgrade – agent stuck. | Open. Fix under review ([PR #6120](https://github.com/agentscope-ai/QwenPaw/pull/6120)) for auto-memory restriction. |
| **High** | [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121) | Scroll context compression breaks DeepSeek API message format – 400 error. | Open. Fix in review ([PR #6108](https://github.com/agentscope-ai/QwenPaw/pull/6108)). |
| **High** | [#6082](https://github.com/agentscope-ai/QwenPaw/issues/6082) | `/goal` completions block subsequent chat due to stale `TERMINATE` state. | Closed – fixed in v2.0.0.post2. |
| **Medium** | [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009) | Scroll context compression triggers incorrectly; hard upper limit missing, causing upstream rejection. | Closed. |
| **Medium** | [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) | Upgrade from 1.1.9 to 2.0.0 overwrites agent config with empty values. | Open. Needs investigation. |
| **Medium** | [#6020](https://github.com/agentscope-ai/QwenPaw/issues/6020) | Approval routing wrong when requests originate from DingTalk; `approval_level: OFF` ignored. | Closed. |
| **Low** | [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) | Linux sandbox maps user to root, breaking electron CLI tools. | Closed. |

**Stability pulse:** The v2.0.0 release introduced significant regressions in sandbox, memory, and context management. The rapid patch release and closure of 26 PRs today indicate the team is prioritizing fixes over new features.

## 6. Feature Requests & Roadmap Signals

Notable feature requests that could shape the next minor release:

- **Real‑time message injection** ([#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087), closed) – Users want to interrupt an agent’s internal loop with new messages to correct direction. High demand for improved interactivity.
- **Split tool call result display** ([#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976), open) – Allow channels to separately control whether tool call parameters and results are sent, and truncate long results.
- **CIDR whitelist for no‑auth hosts** ([#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048), open) – Enterprise users need network‑level access control.
- **Desktop GUI automation (computer use)** ([PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187), open since June 14) – Windows UIA-based automation with Tauri control mode. Large feature likely targeted for v2.1.
- **Daemon and command dispatch** ([#586](https://github.com/agentscope-ai/QwenPaw/issues/586), closed) – Two‑phase implementation for system commands without creating agents. Could improve reliability.
- **Observability improvements** ([PR #5922](https://github.com/agentscope-ai/QwenPaw/pull/5922), open) – Langfuse trace enrichment (user/session/version) – likely to be merged soon.

**Prediction for next version (v2.1):** Focus will remain on stabilizing v2.0.x features, but computer‑use automation and real‑time message injection may land as experimental features.

## 7. User Feedback Summary

Overall sentiment is **mixed**: the v2.0.0 release brought powerful new features (multi‑agent, sandbox, memory) but also caused numerous regressions that frustrate users.

- **Positive points:**
  - Community contributors are actively submitting channels (Zalo) and observability enhancements.
  - The sandbox overhaul tracking issue ([#6023](https://github.com/agentscope-ai/QwenPaw/issues/6023)) received positive reactions and constructive feedback.

- **Pain points (repeated across multiple reports):**
  - **Sandbox unusable on Windows** – pwsh recursion, file system ACE pollution, inability to disable.
  - **Memory search loops** – auto‑memory runs forever, wasting tokens and time.
  - **Context compression breaks API compatibility** – especially with DeepSeek, a popular provider.
  - **Upgrade data loss** – agent config overwritten, session mapping lost.
  - **Approval system irregularities** – misrouted approval popups, OFF mode not working.
  - **Tool configuration missing** – `generate_image_gpt` URL/Token UI removed in v2.0.0.

- **Use case insights:** Users rely on CoPaw for both desktop scripting and multi‑channel (Feishu, DingTalk) integrations. Stability of sandbox and tool execution is critical for production workflows.

## 8. Backlog Watch

Several important items have been open for more than a few days without maintainer comment:

- **[🚧 PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)** – *feat(computer‑use): Windows desktop GUI automation with UIA + Tauri control mode* – Open since June 14, no recent maintainer review. Large feature that may need rebase on v2.0.0.
- **[🔄 PR #5731](https://github.com/agentscope-ai/QwenPaw/pull/5731)** – *fix(runtime): honor per-request model override* – Open since July 2, first‑time contributor. Needs review.
- **[🐛 Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)** – *lost workspace after upgrade* – Open since July 14, no maintainer response yet. Could affect many users upgrading from 1.x.
- **[🐛 Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)** – *doom loop: agent repeatedly triggers same tool call* – Open since July 14. Related to DoomLoop gate, but root cause unclear.
- **[🔧 Issue #5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)** – *chat list mapping lost after upgrade* – Open since July 11, no update from maintainers.

These items should be prioritized to prevent further user frustration and to keep community contributors motivated.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-15

## 1. Today's Overview

ZeroClaw is in a period of intense development, with **38 issues** and **50 pull requests** updated in the past 24 hours. The project is consolidating toward the v0.8.3 milestone: 10 issues were closed and 29 PRs were merged or closed, many of them completing core SOP (Standard Operating Procedure) engine capabilities such as live step execution, step routing, out-of-band approval with fail-closed timeouts, and filesystem event sources. Security remains a top concern, with a critical S0 confused-deputy bug in `execute_pipeline` still open and new reports of Landlock sandbox incompatibility on Fedora. No new releases were made today, but the v0.8.3 release-closeout tracker indicates that all planned implementation work has merged and only final validation and publication remain.

## 2. Releases

No new releases in the last 24 hours. The v0.8.3 milestone (tracker [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)) is in release-closeout status with all child trackers closed.

## 3. Project Progress

**Merged/closed PRs today** (29 total) drove significant progress in several areas:

- **SOP Engine** (multiple PRs):
  - [#8400](https://github.com/zeroclaw-labs/zeroclaw/pull/8400) – wired cron triggers into the daemon SOP maintenance tick.
  - [#8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399) – added live SOP step execution (`ExecuteStep` action capture during agent turns).
  - [#8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391) – activated the daemon-side periodic SOP maintenance tick (EPIC A1 of milestone #8288).
  - [#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430) – enforced step routing (next, depends_on, when, bounded visit guards) for LLM-driven and deterministic runs.
  - [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) – shipped out-of-band approval plane with fail-closed timeout.
  - [#8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461) – added filesystem event source for SOP triggers.
  - [#8413](https://github.com/zeroclaw-labs/zeroclaw/issues/8413) (closed) – featured filesystem SOP event source.

- **Memory**:
  - [#8992](https://github.com/zeroclaw-labs/zeroclaw/pull/8992) – added **Hindsight** as a first-class memory backend (HTTP-based delegated persistence and vectorization).
  - [#8993](https://github.com/zeroclaw-labs/zeroclaw/pull/8993) – fixed dashboard memory count display for hindsight backends.

- **Bugs Fixed**:
  - [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) – `advance_step` now has a run-status guard to prevent approval gate bypass.
  - [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) – headless deterministic SOP steps no longer recorded as completed without executing.
  - [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) – cron jobs with `uses_memory = false` now properly suppress memory recall.
  - [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) – SOP audit keys (`sop_run_*`, `sop_step_*`) are now written to the memory backend.

- **Other**:
  - [#9073](https://github.com/zeroclaw-labs/zeroclaw/pull/9073) – added governance documentation for Project initiative planning model.
  - [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) and [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) – v0.8.3 child trackers for observability/CI and runtime execution closed.

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) reveal several pressing user needs:

- **Per-sender RBAC for multi-tenant deployments** [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (10 comments) – Users want to serve customers, operators, and developers from a single ZeroClaw instance with isolated workspaces and tool sets. This is a high-risk, high-value feature that aligns with enterprise adoption.

- **Slack thread context backfill** [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) (7 comments) – When `strict_mention_in_thread` is enabled, users must re-@mention the bot for every message. Requesting automatic hydration of thread history on first mention to avoid context loss.

- **Local-first mode for small models** [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (5 comments, 2 👍) – Users running Ollama/LM Studio need compact prompting, strict non-permissive parsing, and protection against internal system instruction leakage. A high-priority enhancement for the local-AI community.

- **Landlock sandbox blocks shell tool on Fedora** [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) (4 comments) – When Landlock is enabled, `sh` cannot access `/dev/null`, breaking the shell tool. A disruptive bug for Linux users with mandatory sandboxing.

- **OTel cross-turn conversation ID** [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) (3 comments) – RFC requesting an opaque conversation ID to correlate spans across turns, enabling better observability of long-running agent sessions.

- **Separate conversation history from long-term memory** [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) (3 comments) – Users report that runtime autosave writes conversation turns into the general memory backend under `MemoryCategory::Conversation`, mixing short-term and long-term semantics. A design-level issue.

## 5. Bugs & Stability

**Bug reports updated in the last 24 hours**, ranked by severity:

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **S0 – Data loss / security** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` bypasses per-agent tool gating (confused deputy). No fix PR yet. | Open |
| **S1 – Workflow blocked** | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs not available through web dashboard chat session. | Open |
| **S1 – Workflow blocked** | [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | Malformed native tool-call arguments sent unvalidated to OpenAI-format providers → 400 error → empty reply. | Open |
| **S1 – Workflow blocked** | [#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) | `channel-line` omitted from CI coverage (channels-full feature missing). | Open |
| **S2 – Degraded behavior** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock blocks shell access to `/dev/null` on Fedora. | Open |
| **S2 – Degraded behavior** | [#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) | Provider turn failures bury cause-specific diagnostics under generic retry envelope. | Open |
| **S2 – Degraded behavior** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime command replies bypass Fluent localization (hard-coded English strings). | Open |
| **S2 – Degraded behavior** | (closed) [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | SOP approval gate bypass via `advance_step` without run-status guard. **Fixed**. | Closed |
| **S2 – Degraded behavior** | (closed) [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | Headless deterministic SOP steps recorded as Completed without executing. **Fixed**. | Closed |
| **S2 – Degraded behavior** | (closed) [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) | Cron jobs still recall memory when `uses_memory=false`. **Fixed**. | Closed |
| **S3 – Minor** | (closed) [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) | SOP audit keys never written. **Fixed**. | Closed |

Several high-severity bugs remain unfixed, notably the S0 confused-deputy in `execute_pipeline` and the S1 provider compatibility issue with malformed tool arguments. The SOP-related S2 bugs have been resolved.

## 6. Feature Requests & Roadmap Signals

The project’s near-term roadmap is visible through open RFCS and tracker issues:

- **v0.8.3 release** is imminent; all child trackers (#8362, #8070, #8071, #8073, etc.) are closed, pending final validation.
- **SOP engine** reaches "done" capability with tracker [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) — all 13 capabilities now verified.
- **Persistent memory parity** is being pursued via tracker [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891), which will wire curation, relevance, and operability to full parity with mature agent runtimes.
- **ZeroRelay** (secure NAT relay) is coordinated in tracker [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) — a blind forwarder for daemons behind NAT/CGNAT.
- User-requested features likely to land in the next release (v0.8.4 or later):
  - **Per-sender RBAC** [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) – high community interest, but requires architectural security work.
  - **Local-first mode for small models** [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) – already accepted, risk high, but not yet scheduled.
  - **Slack thread context hydration** [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) – a clear follow-up from earlier Slack integration.
  - **Pre-hook skip gates for cron/SOP** [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) – currently blocked.
  - **Conversation history vs. long-term memory separation** [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) – an RFC with early design discussion.

## 7. User Feedback Summary

Real pain points and use cases expressed in today’s issues:

- **Multi-tenant isolation**: An enterprise user (metalmon) desires a single instance serving customers, operators, and developers with distinct tool sets and rate limits ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)).
- **Local AI model users**: A user running small models on Ollama requests compact prompting without instruction leakage ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)).
- **Linux sandboxing friction**: A Fedora user (perillamint) reports that enabling Landlock breaks the shell tool entirely ([#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)).
- **Workflow blocking**: A user (susyabashti) cannot use SOPs from the web dashboard ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)).
- **Provider reliability**: Audacity88 notes that terminal provider failures are masked by generic retry envelopes, making debugging hard ([#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001)).
- **Localization gaps**: Non-English users see hard-coded English strings in channel runtime commands ([#6548](https

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*