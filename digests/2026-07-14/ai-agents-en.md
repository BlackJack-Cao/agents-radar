# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 23:36 UTC

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

# OpenClaw Project Digest — 2026-07-14

## 1. Today’s Overview
OpenClaw continues to see **extremely high activity**, with 500 issues and 500 PRs updated in the last 24 hours. Of those, **312 issues are open/active** and **188 were closed**; on the PR side, **266 remain open** while **234 were merged or closed**. Two releases (v2026.7.1 and v2026.7.1-beta.6) shipped today, bringing new model providers and default model changes. The community is deeply engaged, driving both a large number of incoming bug reports and feature requests, as well as a steady stream of fixes and refactors. The project appears healthy but is under significant maintenance load, especially for stability and platform support.

## 2. Releases
**v2026.7.1** and **v2026.7.1-beta.6** (identical changelog) were published today.
- **New models and providers:** Added Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and ClawRouter.
- **Default model change:** GPT-5.6 is now the default for new setups.
- **Think mode enhancements:** `/think ultra` is now supported for Sol and Terra; `max` is supported for Luna. Z.AI `max` is honoured.
- **OAuth improvement:** Model availability is refreshed after an OAuth flow completes.
- No breaking changes or migration notes have been announced yet.

## 3. Project Progress
Among the 234 merged/closed PRs today, several key improvements landed:
- **UI/UX:** Fixed model provider preload during gateway reconnect (#106869), deferred model-provider data from startup to improve load times (#106726), and preserved route provenance for lazy-loaded model providers (#106872).
- **Agents:** Extracted agent session preparation into a dedicated function (#106896) to reduce complexity in the monolithic `runEmbeddedAttempt`.
- **Cross-platform:** Shipped deb/AppImage bundles for Linux on stable main-based releases (#106891), addressing a long-standing gap (Issue #75).
- **Channels:** Fixed progress drafts appearing for trivial tasks and ensured the model’s own preamble is used as the status headline (#106026).
- **Security/Stability:** Added estimate-before-decode guard for base64 paths (#105323), introduced BigInt-based Content-Length comparison to avoid precision loss (#106540), and fixed Unicode handling in 1Password audit reason truncation (#106424).

## 4. Community Hot Topics
The most active discussions revolve around platform and reliability needs:

- **[#75 – Linux/Windows Clawdbot Apps](openclaw/openclaw Issue #75) (112 comments, 81 👍)** – A long-running request for native desktop apps on Linux and Windows (similar to existing macOS app). Continues to draw massive community support; the new Linux bundle shipping in today’s release is a direct response.
- **[#7707 – Memory Trust Tagging by Source](openclaw/openclaw Issue #7707) (18 comments)** – Users want a mechanism to tag memories by origin trust level to prevent poisoning from untrusted content like scraped web pages. Security-focused feature request still awaiting maintainer decision.
- **[#104721 – Tool results return literal “(see attached image)” string](openclaw/openclaw Issue #104721) (16 comments, P0)** – A severe regression where all tool outputs are replaced with a placeholder string. Sparks strong urgency; fix PRs may be in flight.
- **[#102020 – Second message in session fails with “reply session initialization conflicted”](openclaw/openclaw Issue #102020) (13 comments)** – Reproducible race condition affecting cross-channel use. Users note it’s position-dependent.
- **[#101290 – CLI startup corruption of live state DB](openclaw/openclaw Issue #101290) (11 comments, P0)** – A regression in 2026.6.6 causing “database disk image is malformed” errors. Vanilla SQLite does not reproduce, indicating OpenClaw-specific issue.
- **[#10687 – Dynamic model discovery for OpenRouter and beyond](openclaw/openclaw Issue #10687) (10 comments, 3 👍)** – Users want fully dynamic model lists to keep up with fast-moving provider catalogs. Currently the model selection is static.

Underlying needs: cross-platform support, memory security, stability of core tool execution, reliable session handling, and flexible model management.

## 5. Bugs & Stability
Several high-severity bugs have been reported today:

| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **P0** | [#104721](openclaw/openclaw Issue #104721) | All tool results replaced with literal “(see attached image)” — complete breakage of file/tool output | No linked PR yet |
| **P0** | [#101290](openclaw/openclaw Issue #101290) | CLI preflight can corrupt live state DB while gateway is running | No linked PR yet |
| **P0** | [#103076](openclaw/openclaw Issue #103076) | Additional legacy-state migration sources still block gateway startup after #102780 | No linked PR yet |
| **P1** | [#100121](openclaw/openclaw Issue #100121) | Exec/tool failures show “(see attached image)” and suppress model response (regression in 2026.6.11) | No linked PR yet |
| **P1** | [#98790](openclaw/openclaw Issue #98790) | Concurrent agent-to-agent turn forks session tree; post-compaction rebuild produces invalid transcript | No linked PR yet |
| **P1** | [#75852](openclaw/openclaw Issue #75852) | Telegram polling self-conflicts on macOS even with single gateway process | No linked PR yet |
| **P1** | [#71699](openclaw/openclaw Issue #71699) | Windows gateway hard-crashes with STATUS_STACK_BUFFER_OVERRUN during Mattermost streaming | No linked PR yet |

Additionally, regression in reasoning preservation for MiniMax M3 via OpenRouter (#92769, P1) has a linked PR (#103153) ready for maintainer look. The “reply session init conflict” (#102020) is being addressed by a series of fixes across channels.

## 6. Feature Requests & Roadmap Signals

The community is actively requesting:

- **Linux/Windows desktop apps** (#75) – Now partially addressed with today’s Linux bundle; Windows remains open.
- **Memory Trust Tagging by Source** (#7707) – High security interest but still in “needs-product-decision” state.
- **Filesystem Sandboxing Config** (#7722) – Wanted for restricting file access per configuration. Also awaits decision.
- **Exec-approval Denylist** (#6615, 7 👍) – “Allow everything except X” policy for command execution.
- **Dynamic Model Discovery** (#10687) – Proposed to replace static catalogs with live API queries.
- **Skill Graph on-demand loading** (#74100) – To reduce token consumption by loading only needed dependency chains.
- **Per-model generation timeout** (#8724) – To prevent models like Gemini Flash from infinite loops.
- **Model fallback on context length exceeded** (#9986) – Currently only falls back on API errors, not on context limit.

**Prediction for next release:** Given the merged Linux packaging PR (#106891) and the high energy around dynamic model discovery, it is likely the next stable release will include Linux desktop support and possibly an MVP of dynamic model lists. Memory trust tagging and exec denylist are still under security review and may take longer.

## 7. User Feedback Summary

**Satisfaction:** Many users express appreciation for OpenClaw as a daily-driver assistant (#73537, comments: “genuinely become part of our daily workflow”). The project’s rapid iteration and maintainer responsiveness (e.g., 234 PRs merged today) are seen positively.

**Pain points:**
- **Stability regressions** – The “(see attached image)” tool output bug (#104721) is causing significant disruption and frustration.
- **Platform gaps** – Users on Linux and Windows feel left behind (Issue #75).
- **Session reliability** – Cross-channel session init conflicts (#102020) and corruption (#101290) erode trust.
- **Security** – Concerns about memory poisoning (#7707) and insufficient file access controls (#7722).
- **Missing production-readiness labels** – Request for stability labels on releases (#73537) indicates users want clearer version maturity guidance.

Overall, the community is active and vocal, but the high velocity of bugs suggests a need for more rigorous testing before beta releases.

## 8. Backlog Watch

Several important issues and PRs have remained open for months or are awaiting maintainer action:

| Item | Since | Status | Last Update | Note |
|------|-------|--------|-------------|------|
| [#75 – Linux/Windows apps](openclaw/openclaw Issue #75) | Jan 2026 | Open, 112 comments | Updated today | Linux partially addressed; Windows still waiting. |
| [#7707 – Memory Trust Tagging](openclaw/openclaw Issue #7707) | Feb 2026 | Open, 18 comments | Updated today | Needs maintainer decision + security review. |
| [#6615 – Exec-approval denylist](openclaw/openclaw Issue #6615) | Feb 2026 | Open, 7 comments | Updated today | Needs maintainer review. |
| [#10687 – Dynamic model discovery](openclaw/openclaw Issue #10687) | Feb 2026 | Open, 10 comments | Updated today | Needs product decision. |
| [#90213 – Legacy state migration warnings persist](openclaw/openclaw Issue #90213) | Jun 2026 | Open, 9 comments | Updated today | Regression still not fixed. |
| [#102362 – Memoize duplicate exec verdicts](openclaw/openclaw PR #102362) | Jul 2026 | Open, status “waiting on author” | Updated today | Author unresponsive for 5 days. |
| [#104027 – Dependabot actions update](openclaw/openclaw PR #104027) | Jul 2026 | Open, “waiting on author” (rebasing) | Updated today | Low risk but stuck. |
| [#95847 – Subagent completions accounting](openclaw/openclaw PR #95847) | Jun 2026 | Open, “needs proof” | Updated today | Large PR with high merge risk; waiting for additional testing. |

These items represent sustained community needs or technical debt that require maintainer prioritisation to resolve.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **rapid maturation phase** in July 2026, characterized by high-velocity iteration across multiple codebases that share core architectural patterns while diverging in platform focus, deployment models, and community governance. The landscape splits between large reference implementations (OpenClaw, ZeroClaw) with massive contributor bases and smaller, more focused projects (NanoClaw, Moltis, PicoClaw) that prioritize niche use cases or channel integration depth. A **stabilization vs. feature expansion tension** is evident across the board: OpenClaw, CoPaw, and ZeroClaw are shipping significant new capabilities (Linux desktop apps, unified extension models, memory backends) while simultaneously grappling with regression-induced user dissatisfaction. Meanwhile, Hermes Agent and LobsterAI demonstrate that disciplined bug-bash cycles and rapid PR merges can maintain user trust even during active development. The ecosystem's collective priorities—cross-platform support, memory security, tool-execution reliability, and developer-friendly configuration—reflect a maturing understanding that **agentic AI systems require infrastructure-grade reliability** to move beyond demo status.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Today? | Health Score |
|---------|---------------|-------------|----------------|--------------|
| **OpenClaw** | 500 (312 open) | 500 (266 open) | ✅ v2026.7.1 | Healthy but stressed (high bug load) |
| **ZeroClaw** | 50 (35 open) | 50 (45 open) | ❌ | Strong (v0.8.3 stabilization near complete) |
| **IronClaw** | 34 (31 open) | 50 (41 open) | ❌ | Moderate (bug-bash wave, major refactor in flight) |
| **CoPaw** | 50 (est. 45 open) | 50 (est. 45 open) | ✅ v2.0.0.post1 | Volatile (post-major-release regressions) |
| **NanoClaw** | 3 (all closed) | 31 (25 merged) | ❌ | Very healthy (high merge rate, low backlog) |
| **NanoBot** | 13 (2 open) | 46 (19 merged) | ❌ | Good (responsive maintainers, quick closure) |
| **Hermes Agent** | 50 (8 open) | 50 (16 open) | ❌ | Stabilizing (rapid bug closure, low open count) |
| **LobsterAI** | 0 | 21 (19 merged) | ❌ | Healthy (focused polish sprint) |
| **NullClaw** | 0 | 17 (4 merged) | ❌ | Moderate (critical bugs pending review) |
| **PicoClaw** | 4 (all stale) | 5 (1 merged) | ❌ | Low (stale issues, low maintainer bandwidth) |
| **Moltis** | 0 | 1 (0 merged) | ❌ | Stagnant (single PR awaiting review, no activity) |
| **TinyClaw** | 0 | 0 | ❌ | Inactive |
| **ZeptoClaw** | 0 | 0 | ❌ | Inactive |

**Merge rate leaders:** NanoClaw (81% of PRs merged), LobsterAI (90%), NanoBot (41%), OpenClaw (47%).

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community by a wide margin** — 500 issues/PRs per day dwarfs ZeroClaw (50 each) and IronClaw (34/50). This provides unmatched bug discovery and feature ideation velocity.
- **Platform breadth** — The Linux Desktop App bundle (#106891) directly addresses a top community request, delivering what ZeroClaw (Docker-focused) and Hermes (Electron-only) haven't.
- **Default model leadership** — Making GPT-5.6 the default and adding Featherless, Claude Sonnet 5, and Mythos 5 signals OpenClaw is the ecosystem's provider-integration reference point.
- **Release discipline** — Two releases (stable + beta) in a single day demonstrates CI/CD maturity that Moltis, NullClaw, and PicoClaw lack.

**Technical approach differences:**
- OpenClaw's architecture is **model-provider-centric**, with dedicated provider abstraction layers and dynamic discovery (#10687). In contrast, NanoClaw emphasizes **channel-first design** (Dial phone, WhatsApp, Slack) and NullClaw leans into **native API streaming** (#964).
- OpenClaw retains a monolithic `runEmbeddedAttempt` which NanoBot and NullClaw are breaking apart with agent-session extraction and structured approval flows (#969).

**Community size comparison:**
- OpenClaw's 312 open issues alone exceed the total issue activity of ZeroClaw, IronClaw, CoPaw, and all smaller projects combined.
- However, this scale comes with **maintenance burden** — P0 bugs like #104721 (tool results broken) and #101290 (DB corruption) are severe enough to erode trust if not fixed quickly.

**Risk factor:** OpenClaw's extreme activity may mask a **quality ceiling** — 266 open PRs suggests review bandwidth may be a bottleneck for the core team.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Cross-platform Desktop Apps** | OpenClaw, Hermes, ZeroClaw, CoPaw | Linux/Windows native builds (OpenClaw #75), Intel Mac support (Hermes #38227), Wayland rendering (Hermes #38015), Windows installer reliability (LobsterAI #2326/#2327) |
| **Memory Security & Trust** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Trust tagging by source (OpenClaw #7707), memory poisoning prevention, persistent memory backends (ZeroClaw PR #8992, NanoClaw #3012) |
| **Tool Call Reliability** | OpenClaw, CoPaw, NanoBot, NullClaw | Tool result deserialization errors (CoPaw #5996/#5960), orphan `tool_result` blocks after context compression (CoPaw), "see attached image" placeholder bug (OpenClaw #104721), tool parameter serialization issues (NanoBot #4864) |
| **Session State Integrity** | OpenClaw, CoPaw, Hermes, NullClaw | Reply session init conflicts (OpenClaw #102020), DB corruption during CLI startup (OpenClaw #101290), session tree forks from concurrent agents, cron job delivery failures (NullClaw #954) |
| **OAuth & Authentication Lifecycle** | Hermes, IronClaw, LobsterAI, OpenClaw | MCP OAuth token refresh (Hermes #62787), OAuth flow availability refresh (OpenClaw), OAuth + extension lifecycle hardening (IronClaw #5957) |
| **Channel Message Handling** | All active projects | Telegram streaming HTML errors, Discord bot setup friction, LINE/WeChat adapter gaps, Slack DM routing, cross-platform character encoding (UTF-16 shell output in NanoBot #4917) |
| **Configuration Documentation** | ZeroClaw, Hermes, PicoClaw | "It's impossible to write a configuration file" (ZeroClaw #7758), missing installation guides, poor locale coverage |
| **Caching Cost Optimization** | PicoClaw, OpenClaw | Rolling cache breakpoints for Anthropic (PicoClaw #3229), per-model context-length fallback (OpenClaw #9986), dynamic model discovery to avoid static catalogs |

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | NanoClaw | Hermes | NullClaw | PicoClaw | LobsterAI |
|-----------|----------|----------|----------|----------|---------|----------|----------|-----------|
| **Target User** | Power users, devs | DevOps, operations | Enterprise teams | Channel-first workflow users | Desktop-first users | Minimalist, CLI-centric | Security-conscious | Chinese market, Cowork |
| **Primary Channels** | Telegram, CLI, Gateway | Telegram, Slack, Docker | Slack, WebUI | SMS/voice (Dial), WhatsApp, Feishu | Desktop (Electron), Telegram, Signal | Discord, Matrix, Teams | Telegram, CLI | Cowork, Desktop |
| **Architecture Emphasis** | Provider abstraction | Modular, zero-code | Extension model | Channel adapters | Remote gateway | Minimal, Zig-based | Security hardening | Desktop notification UX |
| **Deployment Model** | Self-hosted gateway | Docker Compose | Cloud/hybrid | Containerized | Hybrid (local+remote) | Self-hosted, Android (Termux) | Self-hosted | Desktop app (macOS/Win) |
| **Unique Strengths** | Largest ecosystem, fastest iteration | RFC-driven governance | NEA extension model, test maturity | Dial phone channel, scheduled tasks | Remote gateway, Tailscale support | Zig performance, native streaming | Cryptographic audit (vodozemac) | Windows installer focus, Chinese i18n |
| **Unique Weaknesses** | Bug volume, P0 regressions | Documentation gaps | Bug-bash volume, large refactors | Small community, off-GitHub comms | Wayland, Intel Mac gaps | Slow PR review, critical bugs pending | Stale issues, low velocity | Siloed community (Chinese) |

**Key divergence:** OpenClaw and ZeroClaw compete directly as general-purpose agents; NanoClaw and NullClaw carve **channel-specific niches**; LobsterAI serves a **regional market** with Cowork features; Moltis targets **CalDAV/calendar** use cases but is effectively dormant.

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|----------------|
| **Tier 1 — Hypergrowth** | OpenClaw, ZeroClaw, IronClaw | 50+ daily PRs, large contributor bases, active release trains, but also **regression risk** due to velocity |
| **Tier 2 — Rapid Iteration** | NanoBot, LobsterAI, NanoClaw | 20–50 daily PRs, high merge rates (>80% for NanoClaw, LobsterAI), focused scopes, low bug backlog |
| **Tier 3 — Stabilization** | Hermes Agent, CoPaw | High activity but **post-release stabilization mode**; Hermes is succeeding (bugs closed quickly), CoPaw is struggling (v2.0.0 regressions unresolved) |
| **Tier 4 — Low/Declining** | NullClaw, PicoClaw | Moderate PRs but **stalled reviews**; critical bugs wait weeks; community engagement minimal |
| **Tier 5 — Inactive** | Moltis, TinyClaw, ZeptoClaw | Zero or near-zero activity; risk of abandonment |

**Momentum leaders:** OpenClaw (scale), NanoClaw (efficiency of merges), Hermes (bug turnaround time).  
**Risk flags:** CoPaw (user confidence dropping), PicoClaw (stale issues accumulating), NullClaw (critical bugs unaddressed for weeks), Moltis (single PR stranded).

## 7. Trend Signals

1. **Desktop-native deployment is the next battleground.** OpenClaw's Linux bundle (#106891), LobsterAI's Windows installer hardening (#2326/#2327), Hermes's remote gateway fixes (#38061), and ZeroClaw's Docker networking fixes (#9035) all point toward a **shift from CLI-only to downloadable desktop apps**. Expect Windows native builds to become a differentiator in the next quarter.

2. **Memory security is moving from nice-to-have to table stakes.** Three projects (OpenClaw #7707, CoPaw #5958/#6063, ZeroClaw PR #8992) are independently building trust-tagging, permission-control, and dedicated memory backends. This reflects a maturing understanding that **uncensored memory access is a liability** in production deployments.

3. **Tool execution reliability is the #1 user pain point across the ecosystem.** The "see attached image" bug (OpenClaw P0), orphaned tool results (CoPaw critical), parameter serialization loops (NanoBot), and cron job delivery failures (NullClaw) all share a root cause: **tool-call lifecycle management is insufficiently robust**. This is the ecosystem's single largest quality gap.

4. **Channel diversification is accelerating beyond Telegram.** NanoClaw's Dial phone channel (SMS/voice), NullClaw's Matrix/Teams work, Hermes's LINE adapter, and ZeroClaw's Slack Events API feature request (#9022) show that projects are racing to support **enterprise-communication platforms** rather than just Telegram/WhatsApp.

5. **The "good configuration experience" problem remains unsolved.** ZeroClaw #7758 ("crap documentation"), Hermes's missing configuration UX, and PicoClaw's stale SearXNG auth request collectively indicate that **no project has yet made self-hosting truly accessible** to non-expert users.

6. **Region-specific localization is emerging as a hidden driver.** LobsterAI's Chinese-language focus, CoPaw's Chinese user base (70%+ of issues are in Chinese), and Hermes's zh-CN locale request (#38064) suggest that the next wave of growth will come from **non-English markets** where AI assistant adoption is accelerating. Projects that invest in i18n (NanoBot just added pt-BR) may capture these users.

7. **Agent-to-agent communication patterns are nascent but appearing.** OpenClaw's session-tree fork bug (#98790), NullClaw's subagent completions accounting, and IronClaw's unified extension model all hint at a future where **multi-agent orchestration** becomes a core primitive rather than an afterthought.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-14

## 1. Today’s Overview

NanoBot showed strong community activity over the past 24 hours, with 46 pull requests updated (19 merged/closed) and 11 of 13 updated issues closed. The project is clearly in an active maintenance and feature-development phase. Key themes include stabilising the Dream memory subsystem, improving channel integrations (Telegram, Discord, Feishu), expanding tooling (audit, timer, heartbeat), and polishing developer experience. No new releases were cut, but the rapid closure of bugs and merge of important features suggests a release may be imminent. The maintainers are highly responsive, with many issues receiving comments and resolutions within hours of being opened.

## 2. Releases

**None** — no new versions were published in the last 24 hours.

## 3. Project Progress

The following significant PRs were merged or closed today, reflecting tangible advances:

- **Audit module (#4320)** — Merged. Adds a configurable audit framework (`tools.audit`) for agent action observability, zero overhead when disabled.  
- **Dream memory fixes (#4909)** — Merged. Prevents line‑ending (CRLF/LF) diffs from triggering false “changed” reports in Dream memory.  
- **WebUI Brazilian Portuguese locale (#4914)** — Merged. Adds full `pt‑BR` translation of the WebUI.  
- **Documentation improvements (#4913, #4912)** — Merged. Updated README with recent changes (through July 12) and removed the broken Star History embed.  
- **Heartbeat evaluation configurability (#4915)** — Open, under review. Makes the heartbeat response evaluator configurable (can be disabled) and tightens the prompt to reduce false positives.  
- **Channel refactoring (#4908)** — Open. Moves channel setup and instance ownership into the channel layer, removing architecture couplings introduced by the Feishu multi‑instance support.  
- **Model preset binding (#4866)** — Open. Persists model preset selection in session metadata and captures an immutable LLM runtime per turn, scoping `/model` changes to individual sessions.  
- **Shell UTF‑16 fix (#4917)** — Open. Decodes Windows subprocess output that arrives in UTF‑16, preventing embedded NUL bytes.  
- **WebUI / config.json parity (#4313)** — Open, conflict. Adds write endpoints for temperature, tool limits, dream, channels, and memory fields, plus new UI controls.  
- **Telegram HTML parse_mode for streaming chunks (#4839)** — Open. Fixes mid‑stream HTML parsing errors in Telegram overflow chunks.  
- **Filesystem write serialisation (#4888)** — Open. Introduces workspace‑derived file locking to serialise concurrent write operations.

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Summary |
|------|------|----------|----|---------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Issue (open) | 3 | 0 | **Endless loop for `<tool_call> <function=complete_goal>`** — A regression in tool‑parameter serialisation causes the gateway to parse `recap` as a bare string instead of JSON, producing repeated errors. No fix PR yet. |
| [#4897](https://github.com/HKUDS/nanobot/issues/4897) | Issue (closed) | 3 | 0 | **Discord bot integration not receiving messages** — Despite showing online, the bot fails to process messages. User followed the setup guide but gets no replies. Closed without clear resolution; may warrant a documentation update. |
| [#1500](https://github.com/HKUDS/nanobot/issues/1500) | Issue (closed) | 2 | 1 | **Verbose forced output** — User wants a message‑hierarchy control (like log levels) so that tool calls and intermediate steps are not always forced to the channel. The issue was closed, but the feature request remains valid for many users. |
| [#1304](https://github.com/HKUDS/nanobot/issues/1304) | Issue (closed) | 4 | 0 | **Can't use codex** — Reported months ago; closed as stale. |

**Underlying needs:**  
- Tool‑parameter serialisation must be robust (issue #4864).  
- Discord channel stability is a pain point for new adopters.  
- Users increasingly want granular output verbosity control (echoed also in PRs like #1599 for Telegram streaming).  
- Interest in alternative channels (Mattermost, WeChat) persists despite those issues being closed as stale.

## 5. Bugs & Stability

Severity ranking (high → low):

1. **Endless loop from `complete_goal` (#4864)** — Critical. The faulty parameter parsing prevents task completion and degrades user experience. No fix PR yet; maintainers should prioritise this.  
2. **Discord bot not replying (#4897)** — High. Reported by a new user; if the fix is configuration‑based, the docs need clarification.  
3. **Dream‑log and dream‑restore showing non‑Dream commits (#4893)** — Medium. Confuses users who rely on Dream for self‑improvement. No fix PR yet (though #4909 addresses a related diff issue).  
4. **Prune Dream sessions fails with base64‑encoded filenames (#4894)** — Medium. The pruning logic still uses an outdated glob pattern, causing orphaned session files.  
5. **Empty files reported as changed by Dream diff (#4882)** — Low. Cosmetic but noisy. Fixed by #4909.  
6. **Test setup missing `lark-oapi` dependency for Feishu tests (#4887)** — Low (developer only). Workaround exists, but CI hides the failure.

**Existing fix PRs:**  
- #4909 (fixed line‑ending diffs) → merged.  
- #4917 (UTF‑16 shell output) → open.  
- #4839 (Telegram HTML overflow) → open.  
- #4888 (filesystem write serialisation) → open.  
- #4819 (memory lock WeakValueDictionary) → open.  
- #4816 (runner BaseException catch) → open.

## 6. Feature Requests & Roadmap Signals

**User-requested (issues):**  
- Verbosity control / message hierarchy (#1500 – closed but not implemented).  
- WeChat support (#192 – closed stale, but demand may re‑surface).  
- Mattermost support (#1011 – closed stale, 4 👍).  

**In‑development (open PRs):**  
- **Guarded tool gateway for channels (#4911)** — Allows channels (e.g., real‑time voice) to call agent tools via a gate‑seam.  
- **Model presets per session (#4866)** — Immutable LLM runtime binding; likely to land in next minor release.  
- **nano_timer tool (#4853)** — Dependency‑free time/calendar tool.  
- **Hook auto‑discovery (#4878)** — Plugin‑like registrations for agent hooks.  
- **Heartbeat trigger CLI (#4620)** — Adds `nanobot heartbeat trigger` command with dry‑run and JSON outputs.  
- **WebUI session Markdown export (#4587)** — Part of a larger export/import feature (#4579).  

**Predictions for next version:**  
- The audit tool (#4320) is already merged, so it will appear.  
- Model preset persistence (#4866) and channel refactoring (#4908) are mature and likely to be merged soon.  
- Dream memory stability fixes (#4909, and potential follow‑ups for #4893/#4894) will ship.  
- The guarded tool gateway (#4911) may be included if reviewed quickly.

## 7. User Feedback Summary

**Pain points (real user reports):**  
- “Bot doesn’t reply on Discord even though it shows online” – setup friction.  
- “Endless loop with `complete_goal` – the gateway broke tool parameter serialisation.” – regressions cause frustration.  
- “I don’t want to see all tool calls and thinking steps; give me log levels.” – recurring request for output control.  
- “Feishu bot cannot receive files; it tries to open a browser instead of using an MCP interface.” – channel‑specific limitations.  
- “Dream log shows commits I made manually; it’s confusing.” – UX clarity needed.  

**Satisfaction signals:**  
- Issues are closed quickly (many within hours).  
- Feature PRs like pt‑BR locale and docs reorganisation show attention to internationalisation and onboarding.  
- The heartbeat feature (#4620) addresses user‑requested control (#3437).  
- Community contributions are growing: multiple first‑time contributors merged PRs today.

## 8. Backlog Watch

| Issue/PR | Created | Type | Why watch |
|----------|---------|------|-----------|
| [#192](https://github.com/HKUDS/nanobot/issues/192) – WeChat | 2026‑02‑06 | Feature request | Closed as stale but still has occasional +1 reactions. The community may benefit from a clear “not planned” or “help wanted” label. |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) – Mattermost | 2026‑02‑22 | Feature request | 4 👍, closed stale. Similar need – may deserve a community‑driven initiative. |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) – Endless loop | 2026‑07‑09 | Bug (open) | No fix PR yet. This is the highest‑severity open bug. Maintainers should assign or comment on progress. |
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) – Telegram streaming | 2026‑03‑06 | PR (open, conflict) | Stale for months with merge conflicts. High user interest; needs rebase and review. |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) – WebUI/config parity | 2026‑06‑12 | PR (open, conflict) | Large feature; conflicts with recent changes. Important for making WebUI a full‑featured configuration interface. |

Maintainer attention is recommended on **#4864** (critical bug) and the conflicted PRs **#1599** and **#4313** to prevent them from becoming permanently stale.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-14

## 1. Today’s Overview

Hermes Agent had an extremely active day with **50 Issues updated** (42 closed, 8 open/active) and **50 Pull Requests updated** (34 merged/closed, 16 open). No new releases were published. The high close rate indicates the maintainers are rapidly addressing community‑reported bugs – the vast majority of closed issues and PRs carry the label `sweeper:implemented-on-main`, confirming fixes have already landed on the main branch. Activity spanned all major components: Desktop (Electron), gateway, CLI/TUI, Telegram/Signal adapters, MCP tooling, and Docker support. The project appears to be in a **stabilisation phase**, with a focus on resolving connectivity regressions, session‑state corruption, and platform‑specific installation failures.

## 2. Releases

*No new releases were recorded in the last 24 hours.* (The latest available release tag remains `v2026.5.29.2`.)

## 3. Project Progress

**Merged/closed PRs today (selected highlights):**

- **Session history loading** – Several PRs ([#62741](https://github.com/NousResearch/hermes-agent/pull/62741), [#62953](https://github.com/NousResearch/hermes-agent/pull/62953), [#63138](https://github.com/NousResearch/hermes-agent/pull/63138)) fix `POST /v1/runs` to restore conversation history from `SessionDB` when a `session_id` is provided.
- **MCP OAuth token persistence** – Three PRs ([#62787](https://github.com/NousResearch/hermes-agent/pull/62787), [#62954](https://github.com/NousResearch/hermes-agent/pull/62954), [#63137](https://github.com/NousResearch/hermes-agent/pull/63137)) correct a critical bug where `refresh_token` was silently discarded during token refresh, breaking OAuth‑authenticated MCP servers.
- **Terminal backend validation** – PRs [#62955](https://github.com/NousResearch/hermes-agent/pull/62955) and [#63139](https://github.com/NousResearch/hermes-agent/pull/63139) ensure cached terminal environments are validated against the current backend config (e.g. `local` vs `ssh`), preventing silent execution in the wrong context.
- **Profile‑aware session RPCs** – PRs [#62876](https://github.com/NousResearch/hermes-agent/pull/62876) and [#63087](https://github.com/NousResearch/hermes-agent/pull/63087) make `session.list`, `session.most_recent`, and related TUI RPC methods respect the `params.profile` parameter.
- **Podman/Buildah compatibility** – PR [#63085](https://github.com/NousResearch/hermes-agent/pull/63085) removes the unsupported `--link` flag from Dockerfile COPY instructions, restoring image builds on Podman.
- **Installer resilience** – PR [#62875](https://github.com/NousResearch/hermes-agent/pull/62875) adds a verification step after SSH `git clone` to prevent incomplete clones from bypassing HTTPS fallback.
- **Auth identity propagation** – PR [#62877](https://github.com/NousResearch/hermes-agent/pull/62877) ensures the web dashboard passes authenticated user identity to the agent, solving a missing `user_id` in memory providers.

**Open feature PRs of note:**
- [#38309](https://github.com/NousResearch/hermes-agent/pull/38309) – Circuit breaker panel with per‑feature 3‑state model and input‑dependent tool risk classification (still open).

## 4. Community Hot Topics

The most active issues (by comment count) reveal persistent pain points around **desktop connectivity** and **skills reliability**:

- **[#38240](https://github.com/NousResearch/hermes-agent/issues/38240) – Skills index is stale or degraded (26 comments)**  
  *Status:* Closed (fix implemented). The automated freshness probe failed because the Skills Hub index was not rebuilt correctly. This indicates the CI/CD pipeline for documentation has a fragility that can disrupt the skills system for users.

- **[#38061](https://github.com/NousResearch/hermes-agent/issues/38061) – Can't connect to Remote Gateway via Tailscale (10 comments)**  
  *Status:* Closed (fix implemented). Users reported that test connections worked but actual remote gateway connections failed when using Tailscale. The underlying need is robust, zero‑config remote access for Hermes Desktop.

- **[#38272](https://github.com/NousResearch/hermes-agent/issues/38272) – Desktop chat window auto‑scrolls erratically (7 comments)**  
  *Status:* Closed (fix implemented). Aggressive auto‑scroll fought user attempts to read previous messages during streaming. This UI/UX regression affects all streaming interactions.

Other highly‑reacted issues (👍≥2):
| Issue | Title | Reactions | Summary of request |
|-------|-------|-----------|-------------------|
| [#38078](https://github.com/NousResearch/hermes-agent/issues/38078) | Pasted images fail with remote gateway (4 👍) | Local file paths sent to gateway cause resolution failure. |
| [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | Linux Wayland flickering (4 👍) | Persistent chat transcript flickering on native Wayland sessions. |
| [#38227](https://github.com/NousResearch/hermes-agent/issues/38227) | Desktop missing Intel Mac support (2 👍) | macOS app is arm64‑only; no Intel binary provided. |
| [#38156](https://github.com/NousResearch/hermes-agent/issues/38156) | TUI passes host cwd into Docker on Windows (2 👍) | Windows‑specific host path leakage into Docker terminal sessions. |

The community is clearly pushing for **Desktop stability** (remote gateways, Wayland rendering, Intel Mac builds) and **better platform parity** (Windows & Linux issues being taken seriously).

## 5. Bugs & Stability

All newly reported bugs appear to have been addressed quickly – every issue listed (except duplicates or `cannot-reproduce`) carries the `sweeper:implemented-on-main` label. No severe unaddressed regressions remain in the sample.

**Notable fixed bugs (severity assessment):**

| Issue | Severity | Description | Fix Reference |
|-------|----------|-------------|---------------|
| [#38266](https://github.com/NousResearch/hermes-agent/issues/38266) | **High** | Desktop remote gateway enters reconnect loop after successful connection (macOS) | Implemented‑on‑main |
| [#38272](https://github.com/NousResearch/hermes-agent/issues/38272) | **Medium** | Desktop chat auto‑scroll fights user input during streaming | Implemented‑on‑main |
| [#38210](https://github.com/NousResearch/hermes-agent/issues/38210) | **Medium** | `openai-codex` provider never persists messages → desktop view discards replies | Implemented‑on‑main |
| [#37970](https://github.com/NousResearch/hermes-agent/issues/37970) | **Medium** | Telegram replies to media do not attach the original image/document | Implemented‑on‑main |
| [#38235](https://github.com/NousResearch/hermes-agent/issues/38235) | **Medium** | LINE adapter cannot parse image messages (stops responding) | Implemented‑on‑main |
| [#38014](https://github.com/NousResearch/hermes-agent/issues/38014) | **High** | Windows installer fails at desktop stage with missing `@rolldown/binding-win32-x64-msvc` module | Implemented‑on‑main |
| [#38078](https://github.com/NousResearch/hermes-agent/issues/38078) | **Medium** | Pasted images fail with remote gateway due to local path resolution | Implemented‑on‑main |
| [#38115](https://github.com/NousResearch/hermes-agent/issues/38115) | **High** | macOS remote gateway: WebSocket close 1012 loop, auto‑updater corrupts install | Implemented‑on‑main |
| [#38061](https://github.com/NousResearch/hermes-agent/issues/38061) | **High** | Tailscale remote gateway test‑passes but connection fails | Implemented‑on‑main |
| [#38303](https://github.com/NousResearch/hermes-agent/issues/38303) | **Low** | Signal adapter `stop_typing` does not send explicit typing‑stop signal | Implemented‑on‑main |

Additionally, a long‑standing bug **minimax provider ignores custom `base_url`** ([#6039](https://github.com/NousResearch/hermes-agent/issues/6039), reported April 2026) was finally closed this week – confirming the project is catching up on technical debt.

## 6. Feature Requests & Roadmap Signals

- **[#38065](https://github.com/NousResearch/hermes-agent/issues/38065) – Add DeepSeek provider to Desktop (2 comments)**  
  A concrete ask: desktop setup UI lacks a DeepSeek option even though the provider is supported in the backend. Likely a simple UI addition for the next minor release.

- **[#38064](https://github.com/NousResearch/hermes-agent/issues/38064) – UI localization / i18n (zh‑CN minimum)**  
  User found empty locale directory. This is a larger engineering effort but signals growing international interest.

- **[#38309](https://github.com/NousResearch/hermes-agent/pull/38309) – Circuit breaker panel + tool risk classification (open PR)**  
  This feature is still open and not merged. It introduces a security/resilience layer inspired by Claude Code. If accepted, it could land in a future release.

- **Platform‑targeted features:** Requests for Intel macOS support (#38227), Windows zoom shortcuts (#37917), and Linux Wayland fixes (#38015) indicate that the project needs to invest in **Electron cross‑platform stability** rather than new features.

**Prediction for next version:** The most likely additions are a DeepSeek provider UI entry (trivial), a fix for Intel Mac builds (build‑time change), and the MCP OAuth token fix which is already on main. The circuit breaker PR may need more review.

## 7. User Feedback Summary

**Common satisfaction points:**  
- Users are filing detailed, well‑structured bug reports with reproduction steps and environment data – a sign the community is engaged and invested.  
- The rapid closure of issues (many within hours/days) suggests responsiveness is appreciated.

**Pain points:**  
- **Desktop stability** remains the top frustration: remote gateway connections fail, Tailscale integration is brittle, and streaming UI fights user input.  
- **Windows platform** continues to be problematic: installer fails at the desktop stage, CLI TUI doesn’t work due to esbuild mismatch, and zoom shortcuts are absent.  
- **MCP OAuth** broke silently for many users (tokens lost after 1 hour) – now fixed on main.  
- **Intel Mac users** are left out; the desktop app is arm64‑only despite the download page stating “macOS 12+”.  
- **Linux Wayland** users suffer from flickering with no workaround.  

**Use case patterns:** Users deploy Hermes as a personal AI assistant accessed from desktop, Telegram, and custom endpoints. Remote‑gateway setups are popular (Tailscale, VPS). There is growing interest in non‑English locales (Chinese, etc.).

## 8. Backlog Watch

Based on the sample of issues and PRs updated in the last 24 hours, **no long‑unanswered critical items** are visible – nearly all listed issues were closed recently. However, a few items bear monitoring:

- **Issue #6039 – minimax provider hardcoded base URL** (closed 2026-07-13) was open for over 3 months. Its closure this week is positive; it shows the team is addressing old tech debt.
- **PR #38309 – Circuit breaker panel** has been open since 2026-06-03 with no recent maintainer activity. If the project values security/resilience, this may need a review push.
- **PR #38308 – Inject HERMES_HOME into subprocess env** has been open since 2026-06-03 and addresses a cross‑profile data‑corruption bug (#4707). It has not been merged yet – a potential risk for multi‑profile users.

Overall, the project’s **backlog is light**, indicating healthy maintenance velocity. The maintainers should ensure the open PRs listed above receive attention in the coming days to keep the momentum.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-14

## Today’s Overview

PicoClaw saw moderate activity in the last 24 hours with **4 newly updated issues** (all open and stale) and **5 pull requests** updated (4 open, 1 merged). No new releases were published. The community continues to push for security improvements and caching enhancements, while a newly merged PR adds a gateway webhook feature. Several important issues and PRs remain stale, requiring maintainer attention to avoid stalled progress.

---

## Releases

No new releases today. The latest release remains unchanged.

---

## Project Progress

**Merged PRs:**
- **[PR #3253](https://github.com/sipeed/picoclaw/pull/3253) (closed/merged)** – *Feat/gateway webhook* by tisoga. Adds a webhook integration for the gateway, likely enabling external event callbacks. This is the only merged PR in the period.

**Other active PRs** (not yet merged) include infrastructure updates (Alpine base image bump, `.gitignore` cleanup), a fix for model resolution order ([PR #3254](https://github.com/sipeed/picoclaw/pull/3254)), and an important Anthropic system‑message caching fix ([PR #3228](https://github.com/sipeed/picoclaw/pull/3228)).

---

## Community Hot Topics

The most engaged discussion revolves around security and caching:

- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (8 comments, 2 👍)** – *Feature: use vodozemac instead of libolm*. This high‑priority request seeks to replace the unmaintained and insecure `libolm` library with its official replacement, `vodozemac`. The proposal includes making `libolm` optional at compile time. The high number of comments and reactions indicates strong community interest in security hardening.

- **[Issue #3229](https://github.com/sipeed/picoclaw/issues/3229) (1 comment)** – *Proposal: rolling conversation cache breakpoints for anthropic‑messages*. The user requests per‑block cache control for conversation history (beyond just system prompts) to reduce token costs in agentic workloads. This is technically related to PR #3228, which addresses system prompt caching.

Other issues with single comments include requests for basicauth in SearXNG ([#3231](https://github.com/sipeed/picoclaw/issues/3231)) and a bug report about Gemini API incompatibility ([#3230](https://github.com/sipeed/picoclaw/issues/3230)).

---

## Bugs & Stability

**Active bugs (no fix PRs yet):**

- **[Issue #3230](https://github.com/sipeed/picoclaw/issues/3230) (SEVERITY: Medium)** – Function call missing `thought_signature` when calling Gemini API via OpenAI‑compatible format (Cloudflare AI Gateway). User tested versions 0.2.9–0.3.1. This may indicate a protocol mismatch or missing field in the adapter. No fix is currently open.

- **[Issue #3231](https://github.com/sipeed/picoclaw/issues/3231) (SEVERITY: Low)** – SearXNG search fails when authentication is provided via URL parameters instead of basicauth headers. This is more a feature gap than a crash, but impacts users relying on protected search instances.

No crashes or regressions were reported in the last 24 hours.

---

## Feature Requests & Roadmap Signals

Several feature requests point toward upcoming improvements:

1. **Security modernization** – [#3088](https://github.com/sipeed/picoclaw/issues/3088) (vodozemac) is the most prominent candidate for inclusion in the next minor release, given its high priority and alignment with deprecation of insecure dependencies.

2. **Caching enhancements** – [#3229](https://github.com/sipeed/picoclaw/issues/3229) (conversation cache breakpoints) and its companion PR [#3228](https://github.com/sipeed/picoclaw/pull/3228) (system parts caching) are likely to be merged together, as they directly address token cost in Anthropic usage.

3. **Gateway integration** – The just‑merged PR #3253 suggests that webhook-based gateway features are now part of the codebase and may be documented in the next release.

Other requested features (basicauth for SearXNG, Gemini API fixes) are lower‑priority but may be included if maintainers address them before the next cut.

---

## User Feedback Summary

Real user pain points emerge from the issue tracker:

- **Security concerns** – The call to replace `libolm` (unmaintained, insecure) reflects a broader desire for modern, audited cryptographic libraries.
- **API compatibility frustration** – Users integrating with Gemini via OpenAI‑compatible gateways encounter errors (`missing thought_signature`), making tool‑calling unreliable.
- **Caching inefficiency** – Heavy agentic workloads waste tokens on full conversation history; users explicitly request incremental caching to reduce costs.
- **Authentication gaps** – SearXNG users require header‑based auth, indicating real deployment environments where search backends are behind proxies.

Overall sentiment is proactive but slightly impatient—many issues are marked `stale` despite being important, suggesting the community would like faster maintainer response.

---

## Backlog Watch

The following items are marked `stale` and have been open for an extended period without resolution. They require maintainer attention to avoid being automatically closed:

- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** – High‑priority feature (vodozemac) with 8 comments. Last update 2026-07-13, but stale since 2026-06-09. Needs a decision or implementation plan.
- **[Issue #3231](https://github.com/sipeed/picoclaw/issues/3231)**, **[#3230](https://github.com/sipeed/picoclaw/issues/3230)**, **[#3229](https://github.com/sipeed/picoclaw/issues/3229)** – All stale since 2026-07-06. No maintainer response yet.
- **[PR #3228](https://github.com/sipeed/picoclaw/pull/3228)** – Important caching fix for Anthropic, stale since 2026-07-06. Needs review and merge.
- **[PR #3192](https://github.com/sipeed/picoclaw/pull/3192)** and **[#3191](https://github.com/sipeed/picoclaw/pull/3191)** – Infrastructure chores, stale since 2026-06-27. Simple merges that could be handled quickly.

The growing number of stale items (7 in total) signals a risk of community disengagement if maintainers do not triage them soon.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-14

---

## 1. Today’s Overview

The project saw **high activity** with 31 pull requests updated in the last 24 hours, of which 25 were merged or closed (including 6 still open). Three issues were closed, all security-related or bug fixes. No new releases were published. The merged work brings several significant features (scheduled tasks in templates, a native Dial phone channel, structured skill format, instance-wide default provider) and a series of critical fixes (approval flow security, missing channel adapter handling, wiring side-effects, and pending-approval expiry). The project appears to be in a healthy, fast-paced development cycle with strong focus on both feature growth and stability.

---

## 2. Releases

*No releases in the last 24 hours. Omitted.*

---

## 3. Project Progress

**Merged/closed PRs (25 total)** – key highlights include:

- **Scheduled tasks in templates** – `tasks/*.md` files with cron schedules, script gates, and agent prompts; template tasks are created paused on group stamp.  
  PR [#3022](https://github.com/nanocoai/nanoclaw/pull/3022) (closed)

- **Instance-wide default agent provider** – `DEFAULT_AGENT_PROVIDER` env var stamped onto new group container config.  
  PR [#2906](https://github.com/nanocoai/nanoclaw/pull/2906) (closed)

- **Dial channel adapter** – A real phone number for SMS/MMS and AI voice calls, using the official SDK, with outbound chunking and a setup wizard option.  
  PR [#3032](https://github.com/nanocoai/nanoclaw/pull/3032) (closed) + PR [#3033](https://github.com/nanocoai/nanoclaw/pull/3033) (closed)

- **Structured skill format** – Channel install skills become single source of truth; setup wizard applies SKILL.md directly, replacing bespoke per-channel wizard flows.  
  PR [#3035](https://github.com/nanocoai/nanoclaw/pull/3035) (closed)

- **Security fix – approval flow for `add_mcp_server`** – Now renders full payload (args + env) on the approval card, preventing hidden smuggling.  
  PR [#2998](https://github.com/nanocoai/nanoclaw/pull/2998) (closed)

- **Fix for missing channel adapter** – `deliver` now throws an error instead of silently dropping messages, and missing-adapter messages are routed into the retry path.  
  PR [#2226](https://github.com/nanocoai/nanoclaw/pull/2226) and PR [#2996](https://github.com/nanocoai/nanoclaw/pull/2996) (both closed)

- **Fix – `ncl wirings create` side effect** – Now creates the ACL row for `agent_destinations`, preventing dropped sends to new chats.  
  PR [#2743](https://github.com/nanocoai/nanoclaw/pull/2743) and PR [#2938](https://github.com/nanocoai/nanoclaw/pull/2938) (both closed)

- **Host-side `ncl tasks` CLI** – List, get, cancel, pause, resume scheduled tasks with `--group` filter.  
  PR [#2947](https://github.com/nanocoai/nanoclaw/pull/2947) (closed)

- **Pending-approval row cleanup** – Expires abandoned approval rows (~7 days) and deletes undeliverable sender approvals.  
  PR [#2944](https://github.com/nanocoai/nanoclaw/pull/2944) (closed)

- **Provider output substitutions** – Per-provider `errorSubstitutions` (regex+replace) applied to poll results before delivery.  
  PR [#2120](https://github.com/nanocoai/nanoclaw/pull/2120) (closed)

- **Log when errored batch is acked completed** – Better visibility into batch processing.  
  PR [#2966](https://github.com/nanocoai/nanoclaw/pull/2966) (closed)

- **Warn when a real entry blocks a shared skill symlink** – Prevents silent container configuration issues.  
  PR [#3002](https://github.com/nanocoai/nanoclaw/pull/3002) (closed)

**Open PRs (6)** – notable ones still under review:
- `feat(container): optional MCP tool allowlist` [#3037](https://github.com/nanocoai/nanoclaw/pull/3037)
- `feat(memory): provider-agnostic persistent memory` [#3012](https://github.com/nanocoai/nanoclaw/pull/3012)
- `feat(codex): load shared memory on session start` [#3013](https://github.com/nanocoai/nanoclaw/pull/3013)
- `fix(agent): inject current_time into context header + weekday` [#3036](https://github.com/nanocoai/nanoclaw/pull/3036)
- `fix(security): ncl socket hardening` [#2802](https://github.com/nanocoai/nanoclaw/pull/2802)

---

## 4. Community Hot Topics

No issues or PRs in the latest 24 hours attracted comments or reactions (all shown as `0`). The most active items in terms of recency were security-related issues (#2827, #2762) and the message-delivery bug (#2995), but all were closed with no community discussion. Activity appears to be driven primarily by core-team members and regular contributors.

**Analysis**: The low comment count suggests either (a) community conversations happen outside GitHub (e.g., Discord, forums), or (b) the issues were straightforward and quickly addressed. The project’s contributor base seems focused but not widely engaging in public issue threads.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR(s) |
|----------|-----|--------|-----------|
| **High** | **Security – `add_mcp_server` approval flow hides `args` and `env`** (risk of approval smuggling) | Closed | [#2998](https://github.com/nanocoai/nanoclaw/pull/2998) |
| **High** | **Security – Duplicate advisory on same approval-flow vulnerability** (closed as duplicate) | Closed | (covered by #2998) |
| **Medium** | **Outbound messages to offline/non-registered channels marked delivered without send** – leads to silent data loss | Closed | [#2226](https://github.com/nanocoai/nanoclaw/pull/2226) and [#2996](https://github.com/nanocoai/nanoclaw/pull/2996) |
| **Medium** | **`ncl wirings create` skips `agent_destinations` ACL row** – agent messages to new chats are dropped | Closed | [#2743](https://github.com/nanocoai/nanoclaw/pull/2743) and [#2938](https://github.com/nanocoai/nanoclaw/pull/2938) |
| **Low** | **Errored batch acked completed without logging** – reduced observability | Closed | [#2966](https://github.com/nanocoai/nanoclaw/pull/2966) |

All reported bugs from today’s cohort have associated fix PRs that have already been merged. No regressions or new crashes were introduced.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests from users appear in the latest issues. However, several merged or open PRs indicate the project’s forward trajectory:

- **Scheduled tasks in templates** (merged) – likely part of a larger “agent orchestration” push.
- **Provider-agnostic persistent memory** (open PRs #3012, #3013) – a cross-provider memory tree will be a major enhancement for long-running agents.
- **MCP tool allowlist** (open #3037) – requested by contributors to tighten access control in container deployments.
- **Time/timezone awareness** (open #3036) – addresses agent confusion on day-of-week/hour, especially for scheduled tasks.
- **ncl socket hardening** (open #2802) – security hardening for the host transport.
- **Dial channel** (merged) – expands channel ecosystem to SMS/voice.

**Prediction for next release (v0.x.y)**: Likely includes the memory system (#3012, #3013), time injection fix (#3036), and MCP tool allowlist (#3037). The Dial channel and scheduled tasks are already merged and could be released alongside.

---

## 7. User Feedback Summary

No direct user feedback (comments, reactions, or support requests) could be extracted from today’s data. The issues and PRs were authored by known contributors (YLChen-007, glifocat, romanbsd, amit-shafnir, kpscheffel, etc.) and the core team. There is no indication of widespread user dissatisfaction; conversely, the rapid closure of bugs and addition of requested features (e.g., scheduled tasks, provider defaults) suggests a responsive development team.

**Note**: The absence of public feedback may reflect a small user base or off-GitHub communication channels.

---

## 8. Backlog Watch

No issues or PRs in the backlog that have been left unanswered for a prolonged period. The oldest updated issue among the 3 is from 2026-06-14 (#2762) – already closed. All open PRs are recent (last 4 days). One open PR, [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) (socket hardening), was opened on 2026-06-17 and has not been merged – it may benefit from maintainer review or rebasing, though it remains active.

**Actionable**: The 6 open PRs need reviews; none appear to be stalled, but maintainers should prioritize [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) (security) and the memory stack (#3012, #3013) which touches multiple components.

---

*Digest generated from GitHub data snapshot. All links assume base URL `https://github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-14

## Today's Overview

The NullClaw project saw a burst of PR activity with 17 pull requests updated in the past 24 hours, though no new issues or releases were filed. Of those PRs, 4 were closed/merged (all bug fixes) and 13 remain open, many representing ongoing feature work or platform compatibility patches. The absence of new issues and the concentration of PR updates from a few regular contributors suggests the team is consolidating ongoing development rather than reacting to fresh user reports. Overall project health appears stable with a moderate velocity of improvements, but the lack of community discussion or reactions on PRs indicates low external engagement for now.

## Releases

No new releases were published in the last 24 hours. Users looking for the latest stable distribution should continue using the previously tagged versions.

## Project Progress

Four pull requests were merged or closed today, all addressing reliability and configuration issues:

- **#951** – [fix(agent_runner): suppress stderr initialization logs on agent failure](https://github.com/nullclaw/nullclaw/pull/951)  
  Prevents agent child process stderr (e.g., memory plan logs) from being mistakenly posted as responses when the agent exits non-zero.

- **#950** – [fix(gateway): move port probe before allocations to prevent test leak](https://github.com/nullclaw/nullclaw/pull/950)  
  Avoids resource leaks in test environments by checking port availability before allocating config, tooling, and session managers.

- **#949** – [fix: make queue_mode configurable from config.json](https://github.com/nullclaw/nullclaw/pull/949)  
  Adds `agent.default_queue_mode` to `config.json` and refactors the `QueueMode` enum into `config_types.zig` for consistency.

- **#948** – [fix cron agent delivery attribution](https://github.com/nullclaw/nullclaw/pull/948)  
  Passes delivery origin metadata into spawned agent subprocesses so cron jobs are correctly attributed to the originating channel/account.

## Community Hot Topics

**No PRs or issues received comments or reactions** in the past 24 hours. All 17 updated PRs show `Comments: undefined` and zero thumbs-up. This may reflect a pull-request‑heavy phase without active public discussion, or the data source may not capture reactions. Underlying needs are visible only through the PR descriptions themselves — see the Feature Requests and Bugs sections below.

## Bugs & Stability

Several open fix PRs address real-world regressions and platform-specific issues, ranked by severity:

1. **CRITICAL – One‑shot cron jobs silently fail**  
   [PR #954](https://github.com/nullclaw/nullclaw/pull/954) identifies a use‑after‑free in `OutboundMessage.channel` that causes “schedule once” jobs to execute but never deliver. This is a silent data loss bug for cron users. Fix is open and under review.

2. **HIGH – Discord gateway socket recovery**  
   [PR #953](https://github.com/nullclaw/nullclaw/pull/953) fixes closed gateway sockets by adding proper cleanup before heartbeat thread join and stalled reconnect detection. Without this, Discord bots may drop offline permanently.

3. **HIGH – Matrix sync lost on restart**  
   [PR #968](https://github.com/nullclaw/nullclaw/pull/968) persists the `/sync` cursor (`next_batch`) only in RAM, causing a full initial sync after each restart. This wastes bandwidth and may miss events. Fix adds file‑based persistence.

4. **MEDIUM – MS Teams authentication failures**  
   [PR #958](https://github.com/nullclaw/nullclaw/pull/958) fixes two JWT claim mismatches (lowercase `serviceurl` and JWKS fetch cap) that cause 403 errors for inbound Teams messages.

5. **LOW – Android HTTP fallback**  
   [PR #966](https://github.com/nullclaw/nullclaw/pull/966) addresses DNS failures on Termux by routing all HTTP through curl instead of Zig’s stdlib, ensuring cross‑platform reliability.

No crashes or regressions reported as new issues; however, the cron and Discord bugs are likely affecting users in production.

## Feature Requests & Roadmap Signals

The following open PRs represent feature additions that may appear in the next release:

- **Structured approval flow for tools** ([#969](https://github.com/nullclaw/nullclaw/pull/969)) – Two‑turn approval request/response pattern with SSE events. Useful for shell tool and any dangerous operation.

- **Configurable memory recall** ([#961](https://github.com/nullclaw/nullclaw/pull/961)) – Adds `auto_recall`, `recall_limit`, and `max_context_bytes` to `memory` config, giving users fine‑grained control over context injection.

- **Native Anthropic provider documentation** ([#962](https://github.com/nullclaw/nullclaw/pull/962)) – Officially documents direct Anthropic API (including OAuth/Pro‑Plan tokens) in both English and Chinese.

- **Native API‑level tool calls during streaming** ([#964](https://github.com/nullclaw/nullclaw/pull/964)) – Preserves structured tool‑call deltas in `StreamChatResult`, enabling tool execution from streamed responses across providers.

- **Persistent paired token for cron** ([#959](https://github.com/nullclaw/nullclaw/pull/959)) – Stores `/pair` bearer token encrypted on disk so scheduler tool access survives restarts.

- **REPL line editing** ([#970](https://github.com/nullclaw/nullclaw/pull/970)) – Adds arrow keys, history, and cursor movement support to the interactive `nullclaw agent` REPL.

These features align with making NullClaw more production‑ready (approval flow, persistent tokens) and developer‑friendly (REPL, configurable memory).

## User Feedback Summary

No direct user feedback (issues, comments, reactions) was recorded today. However, recurring pain points can be inferred from the fix PRs:

- **Cron job reliability** remains a friction point (silent delivery failures, attribution issues).
- **Platform compatibility** is a concern for Android / Termux users (HTTP fallback) and those relying on Discord or Matrix channels (socket recovery, sync loss).
- **Configuration discoverability** – the addition of `default_queue_mode` suggests users expect to tweak session queuing via `config.json` rather than defaults.

Overall satisfaction is not measurable, but the steady stream of fixes indicates the maintainers are responsive to stability concerns.

## Backlog Watch

No long‑unanswered issues exist (0 total issues). Among open PRs, the following have been open for over three weeks without merge:

- [#968](https://github.com/nullclaw/nullclaw/pull/968) – Matrix next_batch persistence (since June 22)
- [#966](https://github.com/nullclaw/nullclaw/pull/966) – Android curl fallback (since June 19)
- [#964](https://github.com/nullclaw/nullclaw/pull/964) – Streaming tool‑call deltas (since June 18)
- [#963](https://github.com/nullclaw/nullclaw/pull/963) – Weixin iLink docs (since June 18)
- [#962](https://github.com/nullclaw/nullclaw/pull/962) – Anthropic provider docs (since June 18)
- [#961](https://github.com/nullclaw/nullclaw/pull/961) – Memory recall config (since June 18)
- [#959](https://github.com/nullclaw/nullclaw/pull/959) – Paired token for cron (since June 16)
- [#958](https://github.com/nullclaw/nullclaw/pull/958) – Teams auth fix (since June 16)
- [#954](https://github.com/nullclaw/nullclaw/pull/954) – Cron use‑after‑free (since June 13)
- [#953](https://github.com/nullclaw/nullclaw/pull/953) – Discord socket recovery (since June 12)
- [#956](https://github.com/nullclaw/nullclaw/pull/956) – Docker Alpine bump (since June 15)

These PRs have received no maintainer comments or review changes in the past 24 hours, and several (especially #954 and #953) address critical bugs. They may benefit from prioritised maintainer attention to reduce risk for users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-07-14

## Today’s Overview
Project activity remains very high, with **34 issues** and **50 pull requests** updated in the last 24 hours. A structured bug‑bash campaign (P2/P3) filed by **joe‑rlo** dominates the issue tracker, surfacing 20+ actionable bugs across the WebUI, extensions, and agent loop. On the development side, the core team is driving the **NEA‑25 unified extension model** through a multi‑PR stack (train A roll‑up #6061) while closing several critical fixes for OAuth lifecycles, Slack DM routing, and WebUI TypeScript conventions. No new releases were tagged. Overall, the project is in an intensive stabilization and feature‑unification phase, with strong community reporting and a responsive core team.

## Releases
*None.* No new releases were cut in the last 24 hours.

## Project Progress – Merged/Closed PRs Today
Five pull requests were merged or closed in the last 24 hours, reflecting targeted improvements in sandbox tooling, WebUI conventions, Slack reliability, and storage error handling:

- **`#6058`** – *build(reborn): ship extension ownership migration*  
  Ships the explicit extension‑ownership migration binary in the Railway runtime image and optimises cargo‑chef caching.  
  [nearai/ironclaw PR #6058](https://github.com/nearai/ironclaw/pull/6058)

- **`#6057`** – *fix(webui-v2): enforce TypeScript source conventions*  
  Completes the WebUI v2 TypeScript migration, switching remaining authored `.js`/`.mjs` to `.ts`/`.tsx`, removing legacy test helpers, and restoring previously undiscovered test suites.  
  [nearai/ironclaw PR #6057](https://github.com/nearai/ironclaw/pull/6057)

- **`#6054`** – *fix(slack): resolve exact DM counterparts before mentions*  
  Fixes the QA‑10F Slack mention flake by exposing a `slack.get_conversation_info` capability that resolves DM conversation IDs through the Slack API.  
  [nearai/ironclaw PR #6054](https://github.com/nearai/ironclaw/pull/6054)

- **`#5971`** – *fix: carry storage error cause when compaction summary persistence fails*  
  Restores the underlying `SessionThreadError` cause in `CompactionError::PersistenceFailed`, rather than discarding it.  
  [nearai/ironclaw PR #5971](https://github.com/nearai/ironclaw/pull/5971)

- **`#5957`** – *fix(reborn): harden OAuth and per‑user extension lifecycles*  
  Combines Slack OAuth/activation fixes with generic extension‑removal cleanup and an explicit ownership migration for production installs.  
  [nearai/ironclaw PR #5957](https://github.com/nearai/ironclaw/pull/5957)

## Community Hot Topics
The most discussed items reflect active community testing and security concerns:

- **`#5948`** *(5 comments)* – Assistant incorrectly reports GitHub extension as activated when it is only installed. This is a P3 bug bash issue that confuses users about extension state.  
  [nearai/ironclaw Issue #5948](https://github.com/nearai/ironclaw/issues/5948)

- **`#6000`** *(1 comment, high visibility)* – “How should security issues be reported?” – a community member reports a potential security finding and notes the absence of a `SECURITY.md` and disabled private vulnerability reporting. This has not yet received a maintainer response.  
  [nearai/ironclaw Issue #6000](https://github.com/nearai/ironclaw/issues/6000)

- **`#6061`** – *feat(reborn)!: unified extension model — NEA-25 Train A roll‑up* – A massive single‑PR roll‑up of 8 PRs that delivers the complete unified extension taxonomy. While not yet merged, it signals the direction of the extension refactor and has attracted multiple reviews.  
  [nearai/ironclaw PR #6061](https://github.com/nearai/ironclaw/pull/6061)

- **`#5640`**, **`#5741`**, **`#5836`**, **`#5889`**, **`#5885`**, **`#5879`** – Each with 2 comments, these P2/P3 bug‑bash issues cover routine failures, tool output limits, approval notification gaps, and stale error banners. They demonstrate active user engagement in reporting systemic issues.

## Bugs & Stability
A large wave of P2 and P3 bugs was filed yesterday (**July 13**) by **joe‑rlo**. The most critical are:

**P1 / High Severity:**
- **`#5943`** – Slack DM action posts to the current channel instead of the user’s direct messages. A clear functional regression for Slack users.  
  [nearai/ironclaw Issue #5943](https://github.com/nearai/ironclaw/issues/5943)

**P2 / Notable Regressions:**
- **`#5836`** – Routine fails every 5 minutes with “No thread attached” (0% success rate).  
- **`#5885`** – Approval notification opens action but approval card is missing.  
- **`#5879`** – Stale error banner persists after successful follow‑up.  
- **`#6048`** – Agent run fails because model attempts to call an unavailable tool.  
- **`#6047`** – Task messages displayed out of chronological order.  
- **`#6046`** – Simple email‑to‑sheet workflow invokes 124 tools (excessive overhead).  
- **`#6045`** – Agent diagnoses root cause instead of acting (avoids simple retry).  
- **`#6044`** – Enter key intermittently does not submit message in WebUI.  
- **`#6043`** – GitHub connection flow fails with generic capability error instead of starting auth.

**P3 / Lower Impact:**
- **`#6052`** – Extensions Registry takes up to 10s to load.  
- **`#6051`** – Large documents shown with warning icon (false impression of issue).  
- **`#6050`** – Conversation history error banner displayed even after successful response.  
- **`#6049`** – Gmail disconnect produces generic validation error.  
- **`#6028`** – Stray `$` rendered before “Available MCP servers” heading.

**Fix PRs exist for some issues:** #6054 addresses the Slack DM mention flake (related to #5943?). #5957 hardens OAuth and extension lifecycles, which may improve some disconnection/reconnection flows. Most other bugs remain unaddressed.

## Feature Requests & Roadmap Signals
Recent PRs and issues hint at the following roadmap priorities:

- **Unified Extension Model (NEA-25)** – The Train A roll‑up (#6061) and its 8‑PR stack (#5833–#5850) aim to replace the legacy “kind” taxonomy with a surface‑based extension model. This is the biggest architectural change in flight.
- **Per‑User MCP Registration** – PR #5970 introduces a per‑user store for MCP server registrations, a foundation for future MCP egress enforcement.
- **Matrix Channel Skeleton** – PR #6062 adds a WASM‑based Matrix reborn channel skeleton, indicating expansion beyond Slack.
- **Tools‑Capable Completion Nudge** – PR #6013 enables the agent loop to use tools during completion nudges for interactive coding.
- **Offline v1‑to‑Reborn Migration** – PR #5936 provides a safe offline migration workflow for plan, apply, resume, and verify.
- **Security Reporting Channel** – Issue #6000 implicitly requests a `SECURITY.md` and/or private vulnerability reporting. This is likely to be addressed soon.

## User Feedback Summary
Users are actively stress‑testing the platform and providing detailed bug reports. Key pain points expressed:

- **Extension state misreported** – The assistant claims an extension is active when it is only installed (#5948).
- **Routine reliability broken** – Fully scheduled routines fail consistently (#5836), and the “Last completed” timestamp is wrong (#5891).
- **Notifications and approvals broken** – Approval cards are missing (#5885); Slack DM action does not deliver DMs (#5943).
- **Error banners persist** – Stale errors linger after success (#5879, #6050), confusing users.
- **Tool limitations** – `builtin.http.save` fails with `OutputTooLarge` (#5741); large tool call counts waste resources (#6046).
- **UI/UX friction** – Enter key doesn’t submit (#6044), light theme has unreadable colors (#6039), connection status hidden (#6037), MCP tab has stray `$` (#6028), and extensions page is slow (#6052).
- **Security reporting gap** – A community member wants a private channel for responsible disclosure (#6000).

Overall, users are engaged and willing to report issues, but dissatisfaction is evident in the sheer volume of functional regressions.

## Backlog Watch
The following items have remained open for several days and may require maintainer attention:

- **`#5640`** – Harness gap: `hook_security_audit_sink` always `None` in integration harness. Opened July 4, no fix PR yet.  
  [nearai/ironclaw Issue #5640](https://github.com/nearai/ironclaw/issues/5640)

- **`#5741`** – `builtin.http.save` fails with `OutputTooLarge` instead of saving large responses. Opened July 6.  
  [nearai/ironclaw Issue #5741](https://github.com/nearai/ironclaw/issues/5741)

- **`#5707`** – Routine creation response exposes internal implementation details (cron syntax, internal commands). Opened July 6.  
  [nearai/ironclaw Issue #5707](https://github.com/nearai/ironclaw/issues/5707)

- **`#6000`** – Security reporting channel request from July 11, zero maintainer response.  
  [nearai/ironclaw Issue #6000](https://github.com/nearai/ironclaw/issues/6000)

- **`#5598`** – Release PR (chore: release) from July 3, still open. No new release has been cut since.  
  [nearai/ironclaw PR #5598](https://github.com/nearai/ironclaw/pull/5598)

- **NEA-25 Stack PRs** – `#5839`, `#5842`, `#5845`, `#5847` have been open since July 8 and await review/merge. They are large refactors that may block other work.  
  [nearai/ironclaw PR #5839](https://github.com/nearai/ironclaw/pull/5839) · [#5842](https://github.com/nearai/ironclaw/pull/5842) · [#5845](https://github.com/nearai/ironclaw/pull/5845) · [#5847](https://github.com/nearai/ironclaw/pull/5847)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-14

**Today’s Overview**  
The project saw explosive activity with **21 pull requests updated in the last 24 hours**, all concentrated on July 13–14. Of these, **19 were closed or merged** and only **2 remain open** (both older dependency updates or stale fixes). No new releases were published today. The team is clearly in a bug‑fix and polish sprint, addressing critical installer failures, concurrent resource leaks, macOS update issues, and desktop notification flows. The absence of new Issues suggests the current focus is on consolidating existing features rather than gathering fresh community feedback.

---

## Releases  
*None.* No new releases this period.

---

## Project Progress  
The 19 merged/closed PRs represent significant stability and UX improvements:

- **Installer & Build Reliability**  
  - [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) – Sign Windows binary via internal signing service to prevent security‑software freezes.  
  - [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) – Self‑heal interrupted `win-resources.tar` extraction with system `tar.exe` fallback and watchdog.  
  - [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323) – Add opt‑in Windows web installer target.  
  - [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321) – Fix macOS `hdiutil` failure during update.

- **Concurrency & Resource Leaks**  
  - [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) – Serialize concurrent browser launch/search to stop Chrome leaks.

- **Desktop Notifications**  
  - [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318) – Upgrade notifications: rename `TaskCompletionNotifier` to `DesktopNotificationManager`, add waiting alerts for permission requests, foreground mode, and stale‑request tracking.

- **Cowork & Follow‑up Systems**  
  - [#2324](https://github.com/netease-youdao/LobsterAI/pull/2324) – Stream ordered thinking blocks for OpenClaw.  
  - [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315) – Process queued follow‑ups across sessions and while minimized.  
  - [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) – Stabilize steer follow‑up routing with Codex‑style queuing.  
  - [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) – Support file attachments in steer queue.  
  - [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320) – Fast‑forward missed cron jobs instead of only skipping catch‑up.

- **UI / UX**  
  - [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325) – Fix badge/title descender clipping.  
  - [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319) – Revamp homepage quick‑action scenarios (replace “教育学习” with “文档写作”).  
  - [#2322](https://github.com/netease-youdao/LobsterAI/pull/2322) – Optimize file card display.  
  - [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) – Prevent Windows title‑bar logo compression when sidebar is collapsed.

- **Internal Maintenance**  
  - [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) – Clear stalled compaction retry maintenance.  
  - [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) – Skill selection state isolated per session (merged earlier but re‑referenced).  
  - [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) – Scheduled task UI upgrade (card grid, search, history filters).

---

## Community Hot Topics  
With zero new Issues and default (zero) comments on PRs, the most “active” items are the two open PRs, both stale:

- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) – `chore(deps-dev): bump the electron group`**  
  *Open since April 2, last updated July 13.* A simple dependency bump (`electron` 40.x → 43.x, `electron-builder`). No comments or reactions. The long wait suggests maintainers may be waiting for a stable Electron release or the PR is blocked by deeper compatibility concerns.

- **[PR #1323](https://github.com/netease-youdao/LobsterAI/pull/1323) – `fix(cowork): narrow input‑too‑long error classification`**  
  *Open since April 2, also stale.* Addresses a misleading “input too long” error for short messages containing `max_tokens`. No recent activity. Likely low impact but needs final review.

**Analysis:** The community is not actively filing Issues or commenting on PRs – the project seems driven by internal team development. The two stale PRs indicate a potential review bottleneck for non‑critical fixes.

---

## Bugs & Stability  
All bug reports are implicit in the merged PRs. None were filed as separate Issues in the last 24 hours. Below are the most severe stability problems addressed today (ranked by potential user impact):

1. **Windows Installer Freezes / Hangs** (Critical) – [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327), [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)  
   *Security software was freezing on the unsigned `LobsterAI.exe` and on first execution of the extractor, leaving the installation broken. Both PRs fix different aspects of this Windows‑only regression.*

2. **Chrome Process Leaks** (High) – [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328)  
   *Concurrent browser launches were leaking Chrome processes; serialization fixes the leak.*

3. **macOS Update Failure** (High) – [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321)  
   *`hdiutil` failure during update – now fixed.*

4. **Stalled Compaction Retries** (Medium) – [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289)  
   *Auto‑compaction completions that request a retry could stall indefinitely; fix ensures deferred fallback clears the maintenance state.*

5. **Badge / UI Clipping** (Low) – [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325), [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316)  
   *Visual glitches on Windows title bar and badge descenders.*

All bugs have been addressed with merged fixes.

---

## Feature Requests & Roadmap Signals  
No new feature requests from users were observed. The PRs indicate internal roadmap priorities:

- **Desktop Notification Upgrades** ([#2318](https://github.com/netease-youdao/LobsterAI/pull/2318)) – Likely aiming for a richer notification UX in the next minor release.
- **Thought Stream Display** ([#2324](https://github.com/netease-youdao/LobsterAI/pull/2324)) – Enhanced AI reasoning visibility within Cowork, suggestive of deeper integration with OpenClaw.
- **Windows Web Installer** ([#2323](https://github.com/netease-youdao/LobsterAI/pull/2323)) – A new distribution channel that could reduce installer size and first‑run friction.
- **Queued Follow‑up with Attachments** ([#2315](https://github.com/netease-youdao/LobsterAI/pull/2315), [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300)) – Refinement of the asynchronous Cowork experience.
- **Cron Job Fast‑Forward** ([#2320](https://github.com/netease-youdao/LobsterAI/pull/2320)) – Better recovery for scheduled tasks after downtime.

**Prediction for next release (v0.x.y):** A release soon that bundles all the installer fixes, notification upgrades, and follow‑up queue enhancements. The dependency bump (#1277) may finally be merged to keep up with Electron 43.x.

---

## User Feedback Summary  
No direct user feedback (Issues, comments, or reactions) was recorded in the last 24 hours. However, the nature of the PRs reveals real pain points that the team is addressing:

- **Windows installation is fragile** – Users likely experienced broken installs due to security software interference. The fixes indicate a high‑priority user‑facing issue that needed immediate attention.
- **Chrome resource leaks** probably caused performance degradation or crashes during concurrent tasks.
- **macOS update failures** suggest users on Apple Silicon may have hit update errors.
- **Badge clipping and title‑bar compression** are minor polish issues reported internally.

The silence from the community could mean either the product is stable enough to not generate new issues, or users are not actively reporting through GitHub. Either way, the team is proactive in fixing regressions and improving quality.

---

## Backlog Watch  
Two open PRs deserve maintainer attention:

- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) – Electron dependency bump**  
  *Status:* Dependabot PR, open since April 2, last updated July 13. No comments, no reviews.  
  *Risk:* Falling far behind major Electron releases (40→43) may expose security issues or miss bug fixes.  
  *Action:* Needs a maintainer to review and merge or close with an explanation.

- **[PR #1323](https://github.com/netease-youdao/LobsterAI/pull/1323) – Narrow input‑too‑long error classification**  
  *Status:* Stale, open since April 2. Final touches are likely needed.  
  *Impact:* Low severity but improves user experience for Cowork errors.  
  *Action:* Should be reviewed and merged in the next sprint.

No outstanding Issues await triage.

---

**Overall Project Health:** Healthy, with high development velocity and rapid response to stability regressions. The team is shipping fixes in bulk and refining core Cowork features. The lack of community participation (Issues, comments) may be a sign of either maturity or a need for better outreach; but internally, the codebase is being actively hardened.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-14

## 1. Today's Overview

Project activity remains very low, with no issues updated in the last 24 hours and only a single open pull request receiving attention. No new releases or merged changes were recorded. The sole PR (#1147) addresses a significant bug in the CalDAV client where the `list_events` tool ignored the user-specified time range, making it effectively non-functional for filtered queries. The project appears to be in a maintenance/quiet phase, with no visible community engagement or new feature work.

## 2. Releases

No new releases were published. The latest available release, if any, remains unchanged.

## 3. Project Progress

No pull requests were merged or closed today. The only open PR (#1147) – **fix(caldav): honor time range in list_events via server-side calendar-query** – was last updated on 2026-07-13 but remains unmerged. If merged, this change would fix the `list_events` tool to actually use the `start` and `end` parameters by issuing a CalDAV calendar-query instead of fetching all resources, aligning the implementation with documented behavior. No other feature advancements or fixes were recorded.

## 4. Community Hot Topics

The only active contribution is **PR #1147**, authored by `thoscut` (created 2026-07-11, last updated 2026-07-13). It has zero comments and zero reactions, indicating very low community engagement. The underlying need is for the CalDAV integration to correctly filter events by time range, which is a core usability requirement for any calendar-based tool. Despite its importance, the PR has not attracted review or discussion.

## 5. Bugs & Stability

No new bugs were reported today. However, **PR #1147** explicitly addresses a silent bug in the CalDAV client: the `range` parameter was bound to `_range` and never used, so `list_events` always returned all events regardless of the provided `start`/`end` arguments. This contradicted the documentation and could lead to incorrect behavior in any workflow relying on time‑filtered event queries. The severity is **high** for users of the CalDAV tool, though no associated issue was filed. The fix is available in PR #1147 but has not been merged.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were posted today. Given the low activity, no clear signals point to upcoming features. The only change in motion (PR #1147) is a bug fix, not a new feature. Users or contributors interested in enhancing calendar functionality may want to monitor this PR’s outcome, as a merged fix could unblock further development (e.g., recurring event handling, timezone support).

## 7. User Feedback Summary

No user feedback was captured in issues or PR comments today. The absence of discussion around PR #1147 suggests either very low usage of the CalDAV integration or that users are not engaging through GitHub. The reported bug (time‑range being ignored) likely causes dissatisfaction among the few active users who depend on filtered event queries, but no explicit complaints were voiced.

## 8. Backlog Watch

**PR #1147** is the only open work item and has been awaiting review since July 11 (now three days old). It has no comments, no reviewers assigned, and no linked issue. Maintainer attention is needed to either merge, request changes, or provide feedback. If the project aims to keep CalDAV functional for end users, this PR should be prioritized. No other long‑unanswered issues or PRs are present in the repository.

---

*All links: [PR #1147](https://github.com/moltis-org/moltis/pull/1147)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-14

**Repo:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) (CoPaw)  
**Data snapshot:** 50 issues updated, 50 PRs updated, 1 new release in last 24h

---

## 1. Today's Overview

CoPaw is experiencing a period of intense activity and community engagement following the v2.0.0 release, with 50 issues and 50 PRs updated in the past day. The project shipped a patch (v2.0.0.post1) but continues to face a significant volume of bug reports — many related to tool call / tool result pairing failures, context compression errors, and missing features in the v2.0.0 upgrade. Multiple hotfix PRs have been merged today, showing the team is actively addressing regressions. Overall project health is **volatile**: high contributor output but also high user friction.

---

## 2. Releases

### v2.0.0.post1 (2026-07-13)
[Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post1)

**Changes:**
- chore: bump version to 2.0.0.post1
- fix(models): prevent browser autofill on provider search input (#5981)
- fix: fix legacy session handling (details truncated)

**Breaking changes:** None detected.  
**Migration notes:** Patch release — recommended for all v2.0.0 users.

---

## 3. Project Progress

**Merged/closed PRs today (selected):**

- **`#5935`** — [Unified tool result pruning with block-scoped metadata](https://github.com/agentscope-ai/QwenPaw/pull/5935) — refactors two separate trimming mechanisms into a single `ToolResultPruningMiddleware`.
- **`#6058`** — [Flatten offload hint + temporarily disable broken offload mechanism](https://github.com/agentscope-ai/QwenPaw/pull/6058) — addresses orphan `ToolResultBlock` causing 400 errors.
- **`#6052`** — [Flatten background tool hint to plain assistant message](https://github.com/agentscope-ai/QwenPaw/pull/6052) — same root cause fix.
- **`#6050`** — [Flatten hint and yield result events on SSE stream](https://github.com/agentscope-ai/QwenPaw/pull/6050) — extends hint flattening.
- **`#5989`** — [Multi-layer orphan tool_result message defense](https://github.com/agentscope-ai/QwenPaw/pull/5989) — adds protection against orphan tool results surviving context compression.
- **`#6044`** — [Bridge register_tool to runtime ToolRegistry pipeline](https://github.com/agentscope-ai/QwenPaw/pull/6044) — fixes plugin tool registration not appearing at runtime.
- **`#6045`** — [Clear message queue when a session is deleted](https://github.com/agentscope-ai/QwenPaw/pull/6045) — restores missing queue cleanup.
- **`#6061`** — [Unit tests for Ponytail Quality plugin](https://github.com/agentscope-ai/QwenPaw/pull/6061) — new test coverage.
- **`#5791`** — [Fix formatCompact rounding rollover](https://github.com/agentscope-ai/QwenPaw/pull/5791) (first-time contributor).
- **`#6054`** — [Relax no-finding fallback and add global sandbox switch](https://github.com/agentscope-ai/QwenPaw/pull/6054) — governance improvement.

**Open PRs under review with updates today:**
- `#5953` — standardize scroll-mode tool result handling.
- `#6068` — preserve session IDs during history migration.
- `#6063` — bridge frontend tool-guard rules into policy deep scan.

---

## 4. Community Hot Topics

Most active issues (by comment count, last 24h):

1. **[#5996] `[Bug]: 2.0.0对话时会产生MODEL_EXECUTION_ERROR`** (10 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5996)  
   *Root cause identified:* message formatter splits `ToolResultBlock` from assistant hint into a `role=tool` message without corresponding `tool_calls`, hitting OpenAI 400 error. Directly addressed by PRs #6052, #6050, #6058.

2. **[#5961] `[Bug]: v2.0.0版本循环执行的问题`** (7 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5961)  
   *User reports agent enters infinite write/delete loop with qwen3.7-plus.* No dedicated fix PR yet.

3. **[#5947] `[Bug]: V2.0.0版本 MCP中禁用了某些子工具的访问,但是agent还是可以调用. 允许和拒绝失效`** (6 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5947)  
   *MCP tool allow/deny permissions completely ignored.* Related PR #6063 may address.

4. **[#6006] `[Bug]: 消息队列功能没有了！急急急，望修复`** (6 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/6006)  
   *Message queue feature missing in v2.0.0.* Addressed by PR #6045.

5. **[#5980] `v2.0.0 Missing features: SSH Offline, Profiles returning 404`** (5 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5980)  
   *Upgrade regression: SSH offline mode and profile endpoints gone.* No fix PR yet.

6. **[#6013] `[Question]: V2.0.0的版本,越来越不稳定了,还不如V1.xxx的版本.`** (5 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/6013)  
   *Strong user dissatisfaction; comparison with competitor (Tencent workbuddy).*

**Underlying needs:** Users are primarily demanding **stability** in v2.0.0. The most painful issues involve tool call / tool result pairing (critical for multi-turn agent tasks), MCP tool governance, and missing core features (message queue, SSH offline). Community tone is urgent (“急急急”).

---

## 5. Bugs & Stability

**Severity: CRITICAL** — several block agent functionality.

| Issue | Description | Severity | Fix PR Exists |
|-------|-------------|----------|---------------|
| [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) | OpenAI 400 due to orphan ToolResultBlock in hint messages | Critical | ✅ #6052, #6050, #6058 |
| [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960) | Context compression splits tool_call/tool_result pairs → 400 | Critical | ✅ #5989 |
| [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) | Same root cause as #5960, reported independently | Critical | ✅ #5989 |
| [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962) | Orphan tool_result after scroll eviction on WeChat channel | Critical | ✅ #5989 |
| [#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006) | Message queue completely missing | High | ✅ #6045 |
| [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | MCP tool allow/deny permissions ignored | High | Possibly #6063 |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker: browser_use fails due to dbus error | Medium | ❌ Open |
| [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) | execute_shell_command hard-capped at 60s; config ignored | Medium | ❌ Open |
| [#6024](https://github.com/agentscope-ai/QwenPaw/issues/6024) | Dream module imports old agentscope path | Medium | ❌ Open |
| [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965) | PyInstaller bundle missing submodule → import error | Medium | ❌ Open |
| [#6012](https://github.com/agentscope-ai/QwenPaw/issues/6012) | Desktop python-runtime missing agentscope dependency | Medium | ❌ Open |
| [#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034) | Multiple v2.0.0 regressions: “Internal error”, auto-added content | High | ❌ Open |
| [#6049](https://github.com/agentscope-ai/QwenPaw/issues/6049) | Multi-turn: “Model 'unknown' execution failed” with 400 | High | ❌ Open |
| [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) | Background offload kills subprocess immediately | Medium | ❌ Open |

**Stability trend:** The v2.0.0 release introduced a systemic flaw in how tool results are paired with tool calls at the message formatting layer. Multiple PRs merged today target this, but several other regressions remain unaddressed.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likely Roadmap |
|----------|---------|----------------|
| [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | Allow CIDR ranges in trust host whitelist | **High** — small enhancement, low risk |
| [#5958](https://github.com/agentscope-ai/QwenPaw/issues/5958) | Expose AgentScope permission control in CoPaw | **Medium** — aligns with governance work (#6063) |
| [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984) | Persistent approval disable for non-Landlock hosts | **High** — usability issue for ARM/RPi users |
| PR #6067 | More sensitive files + allow read global | **Medium** — security enhancement |
| PR #5069 (open since June) | Visual model fallback for text-only LLMs | **Low** — stalled, needs rebase |

**Prediction for next minor release:** Fixes for orphan tool result bugs (already merged), MCP tool permission bridging, a global sandbox toggle, and the CIDR whitelist feature are likely candidates.

---

## 7. User Feedback Summary

- **Strong dissatisfaction with v2.0.0 stability.** Multiple users explicitly state v1.x was more reliable. Example: [#6013](https://github.com/agentscope-ai/QwenPaw/issues/6013) (“还不如V1.xxx的版本”, “远远不如腾讯的workbuddy”).
- **Urgency is high:** 急急急 in [#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006); users asking for rapid fixes.
- **Workflow breakage:** Agents stuck in loops ([#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961)), internal errors on messaging channels (WeChat, Feishu, DingTalk) — core use cases affected.
- **Positive signals:** Community is actively reporting bugs with detailed logs and reproduction steps. Several first-time contributors have submitted fixes (e.g., #5791, #5927).
- **Missing features:** Users who upgraded from v1.1.12 expect SSH offline, working profiles, and the message queue — all absent in v2.0.0 ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)).

---

## 8. Backlog Watch

Issues/PRs that have been open for more than 1 day without a maintainer response or fix:

| Item | Created | Last Update | Notes |
|------|---------|-------------|-------|
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) — Docker browser_use dbus error | 2026-07-09 | 2026-07-13 | No workaround or acknowledgment |
| [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) — Shell command hard-capped 60s | 2026-07-11 | 2026-07-13 | No response from maintainers |
| [#5958](https://github.com/agentscope-ai/QwenPaw/issues/5958) — Permission control feature request | 2026-07-11 | 2026-07-13 | Unanswered |
| [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984) — Approval never disabled for non-Landlock |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-14

## 1. Today’s Overview

ZeroClaw shows **very high activity** with **50 issues and 50 PRs updated** in the last 24 hours, though no new releases were cut. Of the issues, 35 remain open and 15 were closed; of the PRs, 45 are open and 5 merged/closed. The v0.8.3 release train is in final stabilization, with several core trackers closed (#8360, #8363, #8070) and an intensive wave of test-coverage and bug-fix PRs landing. Community engagement is strong, driven by configuration pain points (Telegram, Docker, Windows) and long-running RFCs on work-lane automation and core lightness. The project is now pivoting toward the v0.8.4 maintenance cycle and a “ZeroCode Consolidation” milestone.

## 2. Releases

*None.* No new releases were published in the last 24 hours. The latest version remains v0.8.2, with v0.8.3 approaching completion and v0.8.4 planned for July 31.

## 3. Project Progress

**Closed Issues (15 total) – highlights from the top 30:**  
- Several v0.8.3 trackers were closed: [Issue #8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) (provider/native-tool serialization), [Issue #8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) (config-driven runtime policy), [Issue #8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070) (gateway, web, ZeroCode onboarding).  
- A significant set of test-coverage improvements landed:  
  - [Issue #7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694) – memory storage-reader edge cases.  
  - [Issue #7693](https://github.com/zeroclaw-labs/zeroclaw/issues/7693) – ZeroCode insecure-TLS confirmation flow.  
  - [Issue #7690](https://github.com/zeroclaw-labs/zeroclaw/issues/7690) – provider responses-wire option propagation.  
  - [Issue #7688](https://github.com/zeroclaw-labs/zeroclaw/issues/7688) – runtime hook panic recovery.  
- [Issue #9044](https://github.com/zeroclaw-labs/zeroclaw/issues/9044) – fixed a bug where `google_workspace` rejected camelCase method names required by the Google Workspace CLI.

**Merged/Closed PRs (5 total)** – specific details are not listed among the top 20, but the closed-issue list above suggests that several matching PRs were merged. Notable open PRs approaching merge include [PR #9023](https://github.com/zeroclaw-labs/zeroclaw/pull/9023) (save non-inlineable Lark files), [PR #8992](https://github.com/zeroclaw-labs/zeroclaw/pull/8992) (Hindsight memory backend), and [PR #9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011) (runtime context in ZeroCode dashboard).

## 4. Community Hot Topics

| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC | 14 | Work Lanes, Board Automation, and Label Cleanup – accepted, rollout in progress. |
| [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC | 9 | Prefer a lighter ZeroClaw core through external integrations – ongoing discussion on boundaries. |
| [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Bug | 4 | Telegram channel cannot be configured (S1 – workflow blocked). |
| [Issue #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Bug | 3 | Docker Compose gateway loopback-bound despite published port (S1). |
| [Issue #7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) | Bug | 2 | Documentation quality complaints – “It’s impossible to write a configuration file.” (closed with `needs-repro`). |

**Underlying needs:**  
- #6808 and #6165 reflect a desire for better governance and modularity as ZeroClaw grows.  
- #8505 and #9035 highlight real-world deployment friction (Telegram setup, Docker networking).  
- #7758 (though closed) signals that documentation quality remains a critical pain point for new users.

## 5. Bugs & Stability

**High-severity bugs (S1 – workflow blocked):**  
- [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Telegram channel configuration fails – the bot does not respond. No fix PR yet.  
- [Issue #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035): Docker Compose gateway unreachable behind published port. No fix PR yet.  
- [Issue #7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758): Documentation so poor that configuration is impossible – closed with `needs-repro`, but user sentiment remains strong (👍1).

**Medium-severity bugs (S2 – degraded behavior):**  
- [Issue #9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046): `models_cache.json` is never written, causing repeated “models refresh” hints.  
- [Issue #9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028): Ctrl+C on Windows force-quits `zeroclaw agent` with exit code 1073741510.  
- [Issue #8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644): ZeroCode completes a Code turn with no visible assistant output.  
- [Issue #8646](https://github.com/zeroclaw-labs/zeroclaw/issues/8646): ZeroCode Logs detail pane hides event attributes behind preview-only rows.  
- [Issue #9000](https://github.com/zeroclaw-labs/zeroclaw/issues/9000): Foreground daemon starts silently (no output without `--verbose`).

**Low-severity bug (S3):**  
- [Issue #8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578): ZeroCode fails to terminate the process after a daemon start failure.

**Fix PRs exist for:**  
- #9028 – No PR found.  
- #9046 – No PR found.  
- #8644 and #8646 – Possibly addressed by ongoing ZeroCode consolidation PRs (e.g., [PR #9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011)).  
- #9000 – No PR found.

## 6. Feature Requests & Roadmap Signals

**New feature requests (from issues):**  
- [Issue #8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997): Warn when `peer_groups.*.channel` ref points to non-existent channel alias.  
- [Issue #8998](https://github.com/zeroclaw-labs/zeroclaw/issues/8998): Dedicated GUI surface for channel’s one-time bind (pairing) code.  
- [Issue #9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022): Optional Slack Events API (HTTP Request URL) for scale-to-zero deployments.  
- [Issue #9039](https://github.com/zeroclaw-labs/zeroclaw/issues/9039): Generate installation docs from canonical install spec.

**Roadmap trackers (likely for v0.8.4):**  
- [Issue #8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357): v0.8.4 maintenance train (target July 31).  
- [Issue #9010](https://github.com/zeroclaw-labs/zeroclaw/issues/9010): ZeroCode Consolidation & Hardening.  
- [Issue #9009](https://github.com/zeroclaw-labs/zeroclaw/issues/9009): Operator UX Onboarding, Pairing & Self-Service.

**In-flight PRs adding major features:**  
- [PR #8992](https://github.com/zeroclaw-labs/zeroclaw/pull/8992): Hindsight as a first-class memory backend.  
- [PR #8994](https://github.com/zeroclaw-labs/zeroclaw/pull/8994): Native Home Assistant REST tool.  
- [PR #9021](https://github.com/zeroclaw-labs/zeroclaw/pull/9021): Default new OpenAI slots to `wire_api=responses`.  
- [PR #8995](https://github.com/zeroclaw-labs/zeroclaw/pull/8995): Optimal memory and Telegram-streaming defaults.

These features are strong candidates for inclusion in v0.8.4.

## 7. User Feedback Summary

- **Documentation pain:** [Issue #7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) (“It doesn't matter how good the code is if the documentation is crap.”) – closed, but the sentiment echoes in other issues (e.g., #8505 Telegram config, #9035 Docker).  
- **Configuration friction:** Users struggle with Telegram channel setup (#8505), Docker networking (#9035), and missing `models_cache.json` (#9046).  
- **Platform stability:** Windows Ctrl+C force quit (#9028) and silent daemon startup (#9000) degrade the experience.  
- **ZeroCode usability:** No output on completed turns (#8644) and hidden log attributes (#8646) reduce confidence in the TUI.  
- **Positive signals:** Community contributors are actively submitting large PRs (Hindsight memory, Lark file handling, Home Assistant tool), indicating satisfaction with the extensibility model.

## 8. Backlog Watch

- [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) **RFC: Work Lanes, Board Automation, and Label Cleanup** – created May 20, 14 comments, still in-progress. Needs maintainer finalisation to unblock workflow governance.  
- [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **RFC: lighter ZeroClaw core through external integrations** – created Apr 27, 9 comments, accepted but implementation is open. Decision needed on scope for v0.8.4.  
- [Issue #7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) **Tracker: Test coverage across 13 shards** – created Jun 15, 1 comment, high risk. Many sub-issues have been closed, but the tracker itself remains open – likely needs a final summary and close.  
- [Issue #8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) **Tracker: Restore ADR baseline** – created Jul 4, 1 comment. Documenting architectural decisions is important for long-term maintainability; currently low activity.

All of these items would benefit from explicit maintainer follow-up to either close or assign to a milestone.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*