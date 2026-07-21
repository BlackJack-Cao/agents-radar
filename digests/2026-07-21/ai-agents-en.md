# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 348 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-20 23:40 UTC

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

# OpenClaw Project Digest — 2026-07-21

*Data reflects GitHub activity updated in the 24 hours preceding 2026-07-21 00:00 UTC.*

---

## 1. Today's Overview

OpenClaw shows extremely high activity with **348 issues** and **500 PRs** updated in the last 24 hours, indicating a project in active maintenance and development. The project has **no new releases** today, but the breadth of open work suggests the team is deeply engaged in quality-of-life improvements, security hardening, and regression fixes. While the issue tracker contains several critical (P1) and regression-grade bugs—many with "platinum hermit" severity ratings—the parallel volume of open PRs (387) implies an active pipeline of fixes awaiting review or proof. Community engagement remains high, with top issues gathering 15–23 comments and topics spanning session state integrity, message delivery reliability, and security boundary enforcement.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

**Merged/Closed PRs today: 113** (out of 500 updated PRs). While the full set of merged PRs is not enumerated, the closure of several high-impact issues indicates meaningful forward motion:

- **[Issue #108238]** — *"Session context usage miscalculates cacheRead into totalTokens"* (Chinese-language report): Closed as a bug fix for the 2026.7.1 release, addressing a false-positive context overflow that triggered spurious compaction.
- **[Issue #79903]** — *"Expose durable session lineage and sessionId discovery across rotations"*: Closed, delivering session-tracking infrastructure for the new SQLite runtime.
- **[Issue #71326]** — *"Cross-exec stale file reads (cross-process vnode/dentry cache race)"*: Closed as a regression fix from 2026.4.20, resolving a root-cause in file read consistency.
- **[Issue #79904]** — *"Add cursored SQLite transcript read API for companion consumers"*: Closed, providing the promised database-first transcript access layer.
- **[Issue #59662]** — *"Anthropic Max usage alert text blocks delivered as assistant messages"*: Closed, fixing leakage of provider-injected usage alerts into user channels.

---

## 4. Community Hot Topics

| Issue/PR | Comments | Reactions | Core Topic |
|---|---|---|---|
| [#99241 Tool outputs as image attachments](https://github.com/openclaw/openclaw/issues/99241) | 23 | 👍2 | Session stability, message loss |
| [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 19 | — | Security, memory poisoning defense |
| [#58450 Agent promises follow-up without action](https://github.com/openclaw/openclaw/issues/58450) | 16 | 👍4 | Agent behavior reliability |
| [#10659 Masked Secrets for API keys](https://github.com/openclaw/openclaw/issues/10659) | 15 | 👍4 | Security, credential protection |
| [#63216 Repeated hard resets on same session key](https://github.com/openclaw/openclaw/issues/63216) | 13 (CLOSED) | 👍3 | Session overflow, compaction loops |
| [#96975 Isolate subagent completion from parent context](https://github.com/openclaw/openclaw/issues/96975) | 11 | 👍1 | Subagent state isolation |
| [#110950 "Everything is a cron" unification](https://github.com/openclaw/openclaw/issues/110950) | 7 | 👍2 | Architecture simplification |
| [#6615 Denylist for exec-approvals](https://github.com/openclaw/openclaw/issues/6615) | 8 | 👍8 | Security controls |

**Underlying needs:** The most active discussions center on **trust and security boundaries** (#7707, #10659, #6615), **session state integrity** (#99241, #63216, #96975), and **agent reliability** (#58450). Users are demanding more granular control over what the agent can see, remember, and execute—suggesting growing adoption in production or semi-automated workflows where credential exposure and unintended tool execution carry real risk.

---

## 5. Bugs & Stability

**Critical (P1) bugs reported or updated today:**

| Issue | Summary | Severity | Fix PR Exists? |
|---|---|---|---|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs become image placeholders, agent can't read them | 🐚 Platinum Hermit | No |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard context-overflow resets despite high reserveTokensFloor | 🐚 Platinum Hermit | CLOSED |
| [#64810](https://github.com/openclaw/openclaw/issues/64810) | Heartbeat interrupts Telegram replies, swallows answers | 🐚 Platinum Hermit | No |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex causes long latency, hook timeouts, crash loops | 🦞 Diamond Lobster | No |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent completion fails when requester session is inactive | 🦞 Diamond Lobster | No |
| [#78562](https://github.com/openclaw/openclaw/issues/78562) | Repeated context-overflows trigger successive auto-compactions | 🦞 Diamond Lobster | No (v2026.5.5) |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | Context usage miscalculation causes false overflow triggers | 🦀 Challenger Crab | CLOSED |
| [#102006](https://github.com/openclaw/openclaw/issues/102006) | exec tool: aborted run wedges subsequent exec calls (regression from PR #94412) | 🐚 Platinum Hermit | No |
| [#101349](https://github.com/openclaw/openclaw/issues/101349) | Agent-created crons inherit toolsAllow; patch is silent no-op | 🦞 Diamond Lobster | No |

**Notable regression-class bugs:**
- [#86684](https://github.com/openclaw/openclaw/issues/86684) — Parent session compacted during subagent completion despite low context usage
- [#99586](https://github.com/openclaw/openclaw/issues/99586) — Tool surface returns blank body after gateway-touching operations
- [#79752](https://github.com/openclaw/openclaw/issues/79752) — Gzip decompression fails under Node v26 on macOS (CLOSED)

**Mitigations in flight:** Several PRs target related issues: [#111892](https://github.com/openclaw/openclaw/pull/111892) skips preflight compaction for backends that own native compaction; [#111913](https://github.com/openclaw/openclaw/pull/111913) treats Anthropic long-context errors as overflow for retry; [#110882](https://github.com/openclaw/openclaw/pull/110882) fixes browser screenshot vision-failure fallback.

---

## 6. Feature Requests & Roadmap Signals

**High-impact requests gaining traction:**

- **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (Feb 2026, 19 comments): Suggests tagging agent memory by trust level (user vs. web scrape vs. third-party skill) to prevent memory poisoning. With 0 reactions but deep discussion, this signals a long-standing architectural wish.

- **[#110950 — "Everything is a cron"](https://github.com/openclaw/openclaw/issues/110950)** (Jul 18, 7 comments, maintainer-tagged): Proposes unifying heartbeat, watchers, and scheduled automation under a single cron job primitive. The maintainer tag and recent creation suggest this is under active consideration.

- **[#10659 — Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)** (Feb 2026, 15 comments, P1): Wants agents to use API keys without seeing them in plaintext. Given multiple open security issues, this appears increasingly urgent.

- **[#58730 — exec() sandbox isolation](https://github.com/openclaw/openclaw/issues/58730)** (Apr 2026, 6 comments): Inspired by Claude Code source leak; advocates for sandboxing and a tool permission model. Links to broader security roadmap.

- **[#12219 — Skill Permission Manifest Standard](https://github.com/openclaw/openclaw/issues/12219)** (Feb 2026): Proposes a `skill.yaml` declaration for permission scoping—direct response to credential-stealing incidents.

**Predictions for next version:** The "everything is a cron" unification (#110950) and subagent context isolation (#96975) have maintainer involvement and broad community support. Both could land within 1–2 releases. Security features (#10659, #7707) may be partially addressed sooner via the active "Masked Secrets" PR pipeline.

---

## 7. User Feedback Summary

**Common pain points expressed across issues and PRs:**

- **Session state loss / message delivery failures** dominate reports: tool outputs vanishing (#99241), Telegram replies swallowed (#64810), subagent completions lost (#92076), and blank tool surfaces (#99586). Users running long-running or multi-turn sessions (especially on Telegram, Feishu, Slack) are most affected.

- **Context overflow and compaction loops** frustrate users in tool-heavy workflows (#78562, #63216). The "compacting context..." message appearing repeatedly without resolution is a cited UX irritant.

- **Security concerns are rising** as adoption scales: plaintext API keys (#10659), memory poisoning (#7707), lack of exec denylist (#6615), and symlink audit gaps (#111801) all reflect production hardening needs.

- **Subagent management friction** appears in multiple requests: suppressing announce noise (#8299), isolating completion from parent context (#96975), and handling inactive requester sessions (#92076).

- **Platform-specific issues** persist: Slack multi-workspace inbound failures (#58523), Google Chat silent message drops (#58514), Weixin proactive send unreliability (#79293), and Google Vertex provider regression (#58775).

**Satisfaction signals:** The active PR pipeline (500 updated) and closure of old staleness-marked issues indicate maintainer responsiveness. The nodular, extensible architecture (SQLite runtime, plugin SDK, channel adapters) appears to meet user needs for customization.

---

## 8. Backlog Watch

**Issues and PRs needing maintainer attention:**

| Item | Age (Created) | Status | Why Flagged |
|---|---|---|---|
| [#110950 — "Everything is a cron"](https://github.com/openclaw/openclaw/issues/110950) | 2 days | OPEN, maintainer-tagged | High architectural impact; needs product decision |
| [#111971 — Control UI media settings permission](https://github.com/openclaw/openclaw/issues/111971) | <1 day | OPEN, maintainer-tagged | UX regression; browser permission gap |
| [#7707 — Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707) | ~5 months (Feb 3) | OPEN, needs-maintainer-review, needs-product-decision | Long-unanswered security feature; high community engagement |
| [#102428 — bun x exec approval binding](https://github.com/openclaw/openclaw/pull/102428) | 11 days | OPEN, ready for maintainer look | Security-boundary fix; ready for review |
| [#110882 — Browser screenshot base64 injection](https://github.com/openclaw/openclaw/pull/110882) | 2 days | OPEN, waiting on author | Fix for regression; needs author response |
| [#88079 — WebChat reasoning stream missing](https://github.com/openclaw/openclaw/issues/88079) | ~7 weeks (May 29) | OPEN, needs-live-repro | Kimi Code & DeepSeek Reasoner streaming bug; no repro yet |
| [#79902 umbrella issues](https://github.com/openclaw/openclaw/issues/79902) (multiple) | ~10 weeks (May 9) | Mostly CLOSED | Core SQLite runtime features; umbrella tracking done? |

**Staleness concern:** Several high-profile issues (#7707, #58450, #10659) have been open since February–March 2026 with "needs-product-decision" or "needs-maintainer-review" tags but no resolution. While activity is high overall, these dormant items risk becoming technical debt if consensus is not reached soon.

---

*Digest generated from GitHub data at openclaw/openclaw, reflecting issues and PRs updated 2026-07-20 00:00 – 2026-07-21 00:00 UTC.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem

## 2026-07-21

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a phase of intense, concurrent maturation. Multiple project forks and independent implementations—many sharing architectural DNA with the core OpenClaw reference—are now diverging in specialization, targeting distinct deployment profiles from desktop productivity to enterprise multi-agent orchestration. A dominant pattern has emerged: projects are simultaneously hardening security boundaries, consolidating session state management, and extending channel support (WhatsApp, Telegram, LINE, WeChat) to meet real-world production demands. The ecosystem is bifurcating between general-purpose reference implementations and vertically optimized platforms, with the most active projects (OpenClaw, Hermes Agent, IronClaw, CoPaw) each executing major architectural rewrites or release milestones this week alone.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release Today | Health Assessment |
|---------|----------------------|-------------------|-------------------|-------------------|
| **OpenClaw** | 348 | 500 | No | 🟢 Intense – 500 PR pipeline, 113 merged today, but P1 bugs accumulating |
| **Hermes Agent** | 50 | 50 | Yes (v0.19.0) | 🟢 Very high – major release landed, active bug triage, broad community |
| **IronClaw** | 42 | 50 | No (RC prep) | 🟢 Very high – 28 PRs merged, v1.0.0-rc.1 imminent, legacy deletion in progress |
| **CoPaw** | 30 | 42 | No | 🟢 High – 10 merged, multi-bug fixes, new PawApp SDK |
| **NanoBot** | 6 | 30 | No | 🟡 Moderate – 11 merged, focus on security docs and deployment templates |
| **PicoClaw** | 12 | 10 | No | 🟡 Moderate – 5 merged, but critical Antigravity regressions unaddressed |
| **NanoClaw** | 6 | 20 | No | 🟡 Moderate – 6 merged, security audit PRs pending review |
| **LobsterAI** | 0 | 15 | No | 🟡 Moderate – 10 merged, Cowork feature stabilization, no new issues |
| **NullClaw** | 0 | 1 | No | 🔴 Dormant – single dependabot PR open 36 days, no community activity |
| **TinyClaw** | 0 | 0 | No | ⚫ Inactive – no activity |
| **Moltis** | 0 | 0 | No | ⚫ Inactive – no activity |
| **ZeptoClaw** | 0 | 0 | No | ⚫ Inactive – no activity |

**Note on ZeroClaw**: While included in the digest, ZeroClaw operates in a separate (hardware-adjacent) domain with 36 issues and 50 PRs today—comparable to IronClaw in velocity—but its firmware/SOP focus makes it a less direct peer to the core agent frameworks.

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Largest community scale**: 348 issues and 500 PRs updated daily dwarfs all competitors (next closest: Hermes at 50/50). This scale drives faster bug discovery and broader channel support.
- **Most mature plugin/channel ecosystem**: SQLite runtime, plugin SDK, and channel adapters for Telegram, Feishu, Slack, Google Chat, Weixin—unmatched breadth.
- **Reference architecture status**: As the core upstream, OpenClaw's architectural decisions (session state model, tool surface API, context compaction) are replicated or adapted by NanoBot, PicoClaw, and NanoClaw.

**Technical approach differences:**
- **Platinum Hermit severity rating**: OpenClaw uses a unique severity taxonomy (Platinum Hermit → Diamond Lobster → Challenger Crab) that, while colorful, signals a more informal bug triage culture compared to IronClaw's rigid P0–P3 system or CoPaw's S0–S3 scale.
- **Higher regression burden**: With 387 open PRs, OpenClaw has the largest review bottleneck. Multiple critical bugs (tool outputs as images, heartbeat swallowing replies) lack fix PRs, whereas IronClaw and CoPaw close critical issues within hours.
- **Less architectural consolidation**: OpenClaw is still discussing "everything is a cron" unification and memory trust tagging—ideas that Hermes and IronClaw are already implementing.

**Community size comparison**: OpenClaw's 500 PR/day throughput is ~10x NanoBot's, ~5x CoPaw's, and equaled only by IronClaw's current release push. However, Hermes Agent's v0.19.0 aggregated 1,065 merged PRs and 450 contributors, suggesting Hermes may have a larger *active contributor base* even if daily throughput is lower.

---

## 4. Shared Technical Focus Areas

The following requirements emerge across multiple projects:

| Focus Area | Affected Projects | Specific Needs |
|------------|------------------|----------------|
| **Security boundary enforcement** | OpenClaw (#7707, #10659, #6615), NanoBot (#4803, #5005), NanoClaw (#3097–#3100), IronClaw (#6348), Hermes (#68055) | Secret masking, memory trust tagging, exec sandboxing, role-based approval routing, credential isolation |
| **Session state integrity** | OpenClaw (#99241, #63216), Hermes (#67600, #67762), CoPaw (#6241, #4873), ZeroClaw (#8837) | Tool output preservation, context overflow prevention, cost tracking persistence, history pruning reliability |
| **Multi-agent orchestration** | OpenClaw (#96975, #58450), NanoBot (#5000), Hermes (#68266), CoPaw (#4873, #6274), ZeroClaw (#3566) | Subagent context isolation, agent-to-agent protocol (A2A), delegation lanes, human-in-the-loop tools |
| **Channel reliability** | OpenClaw (#64810, #58523), PicoClaw (#3203), NanoClaw (#3105), Hermes (#67817) | Telegram/Feishu/Slack/WhatsApp reconnection, message delivery guarantees, silent mute on upgrade |
| **Context overflow management** | OpenClaw (#108238, #78562), Hermes (#68196), CoPaw (#5961) | False-positive compaction triggers, auto-compaction loops, preflight compaction optimization |
| **Deployment simplification** | NanoBot (#4937, #5007), PicoClaw (#3276), IronClaw (#6323) | One-click deploy templates, offline migration workflows, externally-managed gateway support |

**Key insight**: Security and session state are the two most universally cited pain points. Every project with significant activity has at least one open issue in each category.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | CoPaw | NanoBot |
|-----------|----------|--------------|----------|-------|---------|
| **Target user** | Generalist / power user | Desktop-first professional | Enterprise / ops team | Chinese-market agent dev | Local-model enthusiast |
| **Primary architecture** | Modular reference; SQLite + plugin SDK | Monolithic desktop app; multi-window | Reborn-native; state machine | React-loop agent; PawApp SDK | Lightweight; channel-agnostic |
| **Key strength** | Breadth of channel & provider support | Release velocity & contributor base | Codebase hygiene & migration discipline | Cross-model support & multi-agent | Deployment accessibility & local LLM |
| **Current focus** | Hardening security & session state | Post-v0.19 stabilization | v1.0.0-rc.1 + legacy deletion | Loop stability & new SDK | Security docs & platform templates |
| **Risk factor** | Review pipeline congestion (387 open PRs) | P1 certifi & transcript duplication bugs | Streaming UX rough edges | Loop/deadlock bugs in core | Plaintext API key storage unfixed |
| **Language / runtime** | TypeScript/Node | Python | Rust (Reborn) | Python | TypeScript/Node |

**Notable architectural divergence**: IronClaw's Rust-based Reborn rewrite is a unique bet on performance and type safety; all other tracked projects use Node.js or Python. This positions IronClaw as the most serious contender for latency-sensitive enterprise deployments.

**Market positioning**: Hermes Agent has the most visible brand momentum (Quicksilver release with 450 contributors). CoPaw dominates in Chinese-language agent development. OpenClaw remains the modular "kernel" that downstream projects (NanoClaw, PicoClaw) fork from.

---

## 6. Community Momentum & Maturity

**Tier 1 – Rapid iteration / major milestones** (most active):
- **OpenClaw**: 500 PRs/day, but high bug-to-fix ratio signals need for stabilization cycles
- **Hermes Agent**: v0.19.0 just shipped; post-release bug surge expected but team is responsive
- **IronClaw**: 28 PRs merged/day; v1.0.0-rc.1 imminent; most disciplined release process
- **ZeroClaw**: 50 PRs/day with S0 bugs; hardware-adjacent complexity but strong CI culture
- **CoPaw**: 42 PRs/day; loop bugs are critical but being addressed; new SDK signals expansion

**Tier 2 – Steady development** (moderate activity):
- **NanoBot**: 30 PRs/day; focused on documentation, security, and deployment; lower bug count
- **PicoClaw**: 10 PRs/day; critical Antigravity regressions unaddressed; risk of user churn
- **LobsterAI**: 15 PRs/day; Cowork feature stabilization; no new bugs filed—possibly maturing
- **NanoClaw**: 20 PRs/day; security audit in progress; good PR-to-issue ratio

**Tier 3 – Niche or dormant** (low or no activity):
- **NullClaw**: Single PR open 36 days; likely unmaintained or awaiting maintainer bandwidth
- **TinyClaw, Moltis, ZeptoClaw**: No observable activity; effectively inactive

**Maturity gradient**: IronClaw demonstrates the most mature engineering practices (ADR documentation, release RC process, CI gates, automated release PRs). OpenClaw and Hermes are the most community-driven but less structured. PicoClaw and NanoClaw are heavily dependent on upstream (OpenClaw) decisions.

---

## 7. Trend Signals

**1. Production hardening is the dominant demand.**
Across all active projects, users consistently prioritize:
- **Secret management** (masking API keys, credential isolation)
- **Session state reliability** (no silent data loss, accurate cost tracking)
- **Exec safety** (sandboxing, denylists, approval routing)

This signals migration from experimental hobbyist usage to semi-automated production workflows where security and reliability are non-negotiable.

**2. Multi-agent collaboration is the next frontier.**
OpenClaw (#96975), NanoBot (#5000), Hermes (#68266), CoPaw (#4873), and ZeroClaw (#3566) all have active discussions or features around subagent isolation, delegation lanes, and agent-to-agent protocols. The ecosystem is converging on a consensus that single-agent architectures are insufficient for complex workflows.

**3. Local-first AI is gaining practical traction—with caveats.**
NanoBot's Ollama prompt caching fix (#4867) attracted 15 comments and was described as making local models "totally unusable" before the fix. The rapid community response suggests strong latent demand for local LLM support, but performance engineering (especially KV-cache reuse) remains a critical gap.

**4. Platform expansion is fragmenting.**
WhatsApp (NanoClaw #3105), LINE (NanoClaw #3096), Feishu (NanoBot #5009), Google Chat (OpenClaw #58514), and WeChat (PicoClaw #3270) are all seeing active development. The ecosystem is responding to a global user base, but channel-specific reliability issues (silent mutes, reconnection failures) suggest integration quality varies significantly.

**5. Obsession with context management reflects LLM API economics.**
Context overflow loops, compaction miscalculations, and spurious overflow triggers dominate bug reports across OpenClaw, Hermes, and CoPaw. As token costs remain a real concern, users are demanding tight control over context window utilization—a trend that will only intensify as models grow context sizes.

**6. Rust is emerging as a serious contender for agent infrastructure.**
IronClaw's Reborn rewrite, while still in RC, signals that the ecosystem's most performance-sensitive project sees Rust as necessary for production reliability. This may influence architectural decisions in other projects as they scale.

---

*Report generated from project digest data dated 2026-07-21. Health assessments are comparative within this dataset and reflect observed activity patterns, not absolute quality. ZeroClaw's data included for completeness but its hardware-adjacent scope differs from pure software agents.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest – 2026-07-21

### Today's Overview

NanoBot saw high activity with **30 pull requests and 6 issues updated in the last 24 hours** – 11 PRs were merged/closed and 3 issues were resolved. The community is actively contributing across security hardening, multi-agent collaboration proposals, and one‑click deployment support for platforms like Dokploy and Render. No new releases were published today, but the codebase is evolving rapidly with a focus on stability, security, and developer experience. The most discussed topic (15 comments) is a performance‑critical enhancement for Ollama prompt caching, indicating strong user demand for better local‑model efficiency.

### Releases

**None.** No new versions were tagged on this date.

### Project Progress

The following notable PRs were merged or closed today:

- **Security & Configuration**  
  - [#5010 – docs(security)](https://github.com/HKUDS/nanobot/issues/5010): Recommends env‑var references over plaintext API keys, directly addressing the security issue #4803.  
  - [#4998 – docs(ollama)](https://github.com/HKUDS/nanobot/issues/4998): Documents Ollama prompt‑cache diagnostics and an optional template for stable tool prompt reuse.

- **Bug Fixes**  
  - [#4768 – fix(qq)](https://github.com/HKUDS/nanobot/issues/4768): Adds exponential backoff to the QQ channel WebSocket reconnect loop (closes #4767).  
  - [#5008 – fix(providers)](https://github.com/HKUDS/nanobot/issues/5008): Preserves all images when merging consecutive multimodal user turns.  
  - [#4982 – fix(feishu)](https://github.com/HKUDS/nanobot/issues/4982) & [#4981 – fix(telegram)](https://github.com/HKUDS/nanobot/issues/4981): Prevents infinite loops in message splitting when `limit ≤ 0`.

- **Architecture & Refactoring**  
  - [#4993 – refactor(agent)](https://github.com/HKUDS/nanobot/issues/4993): Unifies the internal turn lifecycle, fixing duplications in system‑message handling.

- **Deployment**  
  - [#4937 – feat(render)](https://github.com/HKUDS/nanobot/issues/4937): Adds one‑click deploy to Render (gateway + WebUI, persistent storage).  
  - [#5007 – feat(dokploy)](https://github.com/HKUDS/nanobot/issues/5007): Introduces a Dokploy one‑click template (new PR, still open).

### Community Hot Topics

- **[Issue #4867 – Preserve exact prompt prefix for Ollama caching](https://github.com/HKUDS/nanobot/issues/4867)** (15 comments, **closed**)  
  A user reports that NanoBot adds ~60 seconds to every turn with Ollama, making local models “totally unusable.” The fix preserves the exact prompt prefix so that Ollama’s KV‑cache is reused across tool calls. The discussion indicates this is a **critical pain point** for anyone running local models with limited VRAM.

- **[Issue #5000 – Proposal: evolve subagent system toward multi‑agent collaboration](https://github.com/HKUDS/nanobot/issues/5000)** (1 comment, **open**)  
  Author advocates for persistent sub‑agent identities, shared task state, and agent‑to‑agent messaging. While still early, this signal suggests growing community interest in multi‑agent orchestration beyond simple background delegation.

- **[PR #5005 – Allow scoped tmp cleanup commands](https://github.com/HKUDS/nanobot/issues/5005)** (open)  
  Replaces a blanket `rm` denial rule with target‑aware guards, enabling cleaner test/build scripts while maintaining security. Reflects developer demand for safer yet flexible sandbox execution.

### Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | [#4803 – API keys stored as plaintext](https://github.com/HKUDS/nanobot/issues/4803) – `config.json` contains raw secrets despite `repr=False`. | **Open** | [PR #5010](https://github.com/HKUDS/nanobot/issues/5010) (docs recommendation only – no code fix yet) |
| **Medium** | [#5005 – Unsafe rm rules block legitimate tmp cleanup](https://github.com/HKUDS/nanobot/issues/5005) | Open | [PR #5005](https://github.com/HKUDS/nanobot/issues/5005) |
| **Medium** | [#4988 – Background turns show misleading “completed” message](https://github.com/HKUDS/nanobot/issues/4988) | Open | [PR #4988](https://github.com/HKUDS/nanobot/issues/4988) (under review) |
| **Medium** | [#5004 – Directory fsync failure on shared filesystems](https://github.com/HKUDS/nanobot/issues/5004) | Open | [PR #5004](https://github.com/HKUDS/nanobot/issues/5004) |
| **Low** | [#4767 – QQ channel reconnect flood (fixed)](https://github.com/HKUDS/nanobot/issues/4767) | Closed | [PR #4768](https://github.com/HKUDS/nanobot/issues/4768) (merged) |

Additional open bug PRs with no merged counterpart yet:  
- [#4954 – WebUI subagent turns lost](https://github.com/HKUDS/nanobot/issues/4954)  
- [#4928 – Unified session heartbeat routing](https://github.com/HKUDS/nanobot/issues/4928)  
- [#4945 – Project instructions not scoped / default prompt bloat](https://github.com/HKUDS/nanobot/issues/4945)

### Feature Requests & Roadmap Signals

- **One‑click deployment** – Two new PRs ([#5007 Dokploy](https://github.com/HKUDS/nanobot/issues/5007), [#4937 Render](https://github.com/HKUDS/nanobot/issues/4937)) lower the barrier for non‑technical self‑hosting. Expect Dokploy and Render support in the next minor release.
- **Multi‑agent collaboration** ([#5000](https://github.com/HKUDS/nanobot/issues/5000)) – While still a proposal, it aligns with the existing sub‑agent system and may shape future milestones.
- **Platform expansion**  
  - Feishu group message accumulation (`groupPolicy: listen`, [PR #5009](https://github.com/HKUDS/nanobot/issues/5009))  
  - Telegram custom Bot API base URL ([PR #4919](https://github.com/HKUDS/nanobot/issues/4919))
- **Security** – The move to env‑var references ([PR #5010](https://github.com/HKUDS/nanobot/issues/5010)) is a proactive step; actual serialization changes may follow.
- **Tool gateway protocol** ([PR #5006](https://github.com/HKUDS/nanobot/issues/5006)) – An opt‑in `ToolGateway` for channel plugins, enabling richer interactive tools.
- **WebUI polish** ([PR #4963](https://github.com/HKUDS/nanobot/issues/4963)) – Streamlined activity logs, Streamdown rendering, and updated app discovery.

### User Feedback Summary

- **Performance pain points** – Issue #4867 highlights a *critical usability barrier*: the extra 60‑second delay per turn makes Ollama unusable with 32 GB VRAM. The community response and quick fix indicate high satisfaction once resolved.
- **Security concerns** – The plaintext API key storage (#4803) is a real risk; while docs are being updated, a code‑level fix (e.g., `exclude=True`) may be needed to fully address user dissatisfaction.
- **Reliability** – The QQ channel reconnect loop (#4767) was a source of log pollution and frustration; the merged backoff fix is well‑received.
- **Deployment accessibility** – Requests for Dokploy templates (#1503) and Render support (#4937) show a strong desire for turn‑key hosting. The concurrent PRs suggest developers are listening.
- **Multi‑agent aspirations** – The detailed proposal (#5000) reflects a user base ready for more sophisticated agent orchestration beyond simple task delegation.

### Backlog Watch

| Item | Age | Status | Reason for Attention |
|------|-----|--------|----------------------|
| [#1503 – Dokploy template](https://github.com/HKUDS/nanobot/issues/1503) | ~4.5 months | Open, 1 comment | Long‑standing request now addressed by [PR #5007](https://github.com/HKUDS/nanobot/issues/5007) – needs maintainer review and merge. |
| [#4803 – Plaintext API keys](https://github.com/HKUDS/nanobot/issues/4803) | 2 weeks | Open, 1 comment | High‑severity security issue; only a docs PR exists. A code‑level serialization fix would fully resolve. |
| [#5000 – Multi‑agent proposal](https://github.com/HKUDS/nanobot/issues/5000) | 1 day | Open, 1 comment | Fresh but high‑impact – maintainer feedback could shape roadmap and encourage community contributions. |
| [#4928 – Heartbeat routing bug](https://github.com/HKUDS/nanobot/issues/4928) | 7 days | Open PR with `[conflict]` tag | Merge conflicts need resolving; affects unified session delivery reliability. |
| [#4954 – WebUI subagent visibility](https://github.com/HKUDS/nanobot/issues/4954) | 5 days | Open PR with `[conflict]` tag | Another conflict‑ridden PR critical for WebUI user experience. |

*All links point to GitHub issues/PRs. Activity data as of 2026-07-21.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest**  
**Date:** 2026-07-21  
**Source data:** GitHub activity for NousResearch/hermes-agent (24 h ending 2026-07-21)

---

## 1. Today’s Overview

The project is operating at exceptionally high velocity. In the past 24 hours, **50 issues were updated** (47 open, 3 closed) and **50 pull requests were updated** (43 open, 7 merged/closed). A major new release **v0.19.0 (v2026.7.20) “The Quicksilver Release”** landed yesterday, incorporating roughly 2,245 commits, 1,065 merged PRs, and contributions from over 450 community members. Activity today is dominated by session-state bugs (empty sidebars, cost resets, misrouted prompts), credential/auth handling regressions, and a flurry of PRs addressing security boundaries, cross-session isolation, and new feature scaffolding. Community engagement remains high, with several issues attracting 4–9 comments.

---

## 2. Releases

| Release | Version | Date |
|---------|---------|------|
| **v0.19.0 (v2026.7.20)** – The Quicksilver Release | v0.19.0 | July 20, 2026 |

**Key changes since v0.18.0:**  
- ~2,245 commits · ~1,065 merged PRs · ~2,465 files changed  
- ~300,000 insertions · ~36,000 deletions  
- ~3,300 issues closed · 450+ community contributors  

**Notable highlights (inferred from changelog style & recent PRs):**  
- Massive stability improvements across session management, desktop app, and cron.  
- Multiple security boundary fixes (credential isolation, file permissions, process-group reaping).  
- New plugin architecture scaffolding (Fluxer platform, auxiliary LLM routing).  
- Desktop multi-window support (PR #68259) and SSH remote-backend mode (PR #68130) are now available.  

**Breaking changes / Migration notes:**  
No explicit breaking changes are documented in the release announcement. However, the sheer scope of changes implies users should test their custom configurations, especially for cron jobs, provider credentials, and skill directory permissions. The `_secure_dir()` change (issue #68055) may require users to re-check shared skill symlinks. A full migration guide is expected in the release notes.

---

## 3. Project Progress (Merged/Closed PRs Today)

Of the **7 merged/closed PRs** updated in the last 24h, we can identify:

- **[PR #68266]** – *feat: add policy-controlled delegation lanes and model fusion* (closed)  
  Introduces operator-configured delegation lanes, toolset ceilings, and provenance tracking for child sessions.  
- **[PR #59246]** – *fix(gateway): honor top-level stt_enabled config.yaml key* (closed)  
  Completes earlier STT echo fix by bridging `stt_echo_transcripts` into gateway config.  
- **[PR #67817]** (issue) – *[Bug]: Telegram fails to connect: 'HTTPXRequest' object attribute 'do_request' is read-only* (closed as duplicate)  
  Caused by version incompatibility in `python-telegram-bot`.  
- **[PR #67194]** (issue) – *[Bug]: Hermes App installation on Windows* (closed as duplicate)  

Other merged PRs (not shown in top 20) likely include minor fixes for cron session context isolation, credential fallback for OAuth cron jobs, and delivery-ledger comment corrections.

**Progress on feature branches:**  
- Desktop multi-window (`feat(desktop): run multiple GUI windows`, #68259) – still open but advancing.  
- Evidence-gated memory episodes with local FTS recall (`feat(memory)`, #68265) – new, open for review.  
- Widget-grid layout engine + theme engine (`feat(ui-tui)`, #20379) – long-running, still open with major expansion.

---

## 4. Community Hot Topics

The most active issues (by comment count) reveal concentrated user pain points:

- **[Issue #67600]** (9 comments) – **Desktop session sidebar empty for the `default` profile**  
  Root cause suspected in session-query filtering. User frustration high because named profiles work.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/67600

- **[Issue #66868]** (5 comments) – **Cron job primary model call fails 401 – provider collapses to "custom"**  
  Auth credential management divergence between cron and interactive sessions. A long-standing pattern.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/66868

- **[Issue #67762]** (5 comments) – **`agent.session_estimated_cost_usd` resets to $0 on gateway restart**  
  Silent undercount of running session cost. Blocks any cost-display feature.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/67762

- **[Issue #7135]** (4 comments, 1 👍) – **Hindsight local plugin on macOS Apple Silicon: daemon timeout and MPS path**  
  Long-running issue (since April) with memory provider on Apple Silicon. CPU-env vars not respected.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/7135

- **[Issue #67316]** (4 comments) – **Skills can only be called at start of the prompt**  
  UX limitation: skill invocation requires clearing prior chat text.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/67316

- **[Issue #68244]** (4 comments) – **Update restore local changes prompt breaks agent startup**  
  First-time “no” answer to restore dialog leads to unrecoverable state.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/68244

- **[Issue #29866]** (4 comments) – **`brew upgrade` breaks certifi – all gateways fail**  
  Recurring Homebrew venv issue with TLS CA certificates. P1 severity despite being older.  
  *Link:* https://github.com/NousResearch/hermes-agent/issues/29866

**Underlying needs:** Users are demanding robust session isolation, reliable credential fallback, predictable cost tracking, and smooth upgrade paths. Several issues stem from the agent’s multi-profile/multi-session architecture not being fully hardened.

---

## 5. Bugs & Stability

All bugs reported today are ranked by severity (P0 → P3). Fix PRs are noted where applicable.

| Issue | Severity | Title | Status | Fix PR? |
|-------|----------|-------|--------|---------|
| [#67194](https://github.com/NousResearch/hermes-agent/issues/67194) | **P0** | Hermes App installation impossible (Windows) | **Closed** (duplicate) | – |
| [#29866](https://github.com/NousResearch/hermes-agent/issues/29866) | **P1** | brew upgrade breaks certifi (cacert.pem missing) | Open | None yet |
| [#68196](https://github.com/NousResearch/hermes-agent/issues/68196) | **P1** | Cold Desktop resume + rotating preflight compression duplicates persisted transcript | Open | None yet |
| [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) | **P2** | Desktop session sidebar empty for `default` profile | Open | None yet |
| [#66868](https://github.com/NousResearch/hermes-agent/issues/66868) | **P2** | Cron jobs 401 – provider collapses to “custom” | Open | None yet |
| [#67762](https://github.com/NousResearch/hermes-agent/issues/67762) | **P2** | `session_estimated_cost_usd` resets on restart | Open | None yet |
| [#68244](https://github.com/NousResearch/hermes-agent/issues/68244) | **P2** | Update restore prompt “no” breaks agent | Open | None yet |
| [#68055](https://github.com/NousResearch/hermes-agent/issues/68055) | **P2** | `_secure_dir()` chmods through symlinks, clamping shared skills dirs | Open | None yet |
| [#68261](https://github.com/NousResearch/hermes-agent/issues/68261) | **P2** | TUI skill credential prompts routed to wrong session | Open | **PR #68271** (fix exists) |
| [#67453](https://github.com/NousResearch/hermes-agent/issues/67453) | **P2** | Custom provider `key_env` resolved only for first session | Open | None yet |
| [#57626](https://github.com/NousResearch/hermes-agent/issues/57626) | **P2** | Skill library update injection routed to sub-agent sessions | Open | None yet |
| [#55369](https://github.com/NousResearch/hermes-agent/issues/55369) | **P2** | Union int|string tool args drop leading zeros | Open | None yet |
| [#61573](https://github.com/NousResearch/hermes-agent/issues/61573) | **P2** | Message queued in busy session delivered to unrelated idle session | Open | None yet |
| [#7135](https://github.com/NousResearch/hermes-agent/issues/7135) | **P3** | Hindsight local plugin on macOS AS timeout | Open | None yet |
| [#67725](https://github.com/NousResearch/hermes-agent/issues/67725) | **P2** | Gemini `functionCall` skip transforms tool calls into text | Open | None yet |
| [#67723](https://github.com/NousResearch/hermes-agent/issues/67723) | **P3 (security)** | PR #67529 introduces path-traversal in nix `workspaceClosure` | Open | None yet |

**Summary:** The single P0 was quickly closed as duplicate. Two P1 issues remain open and are critical (certifi and transcript duplication). Many P2 session-state bugs are actively being investigated; one (TUI routing) already has a fix PR. Security concerns (path-traversal, shared dir permissions) need maintainer review.

---

## 6. Feature Requests & Roadmap Signals

The following user-submitted feature requests and high-signal PRs indicate likely directions for the next release:

| Feature | Issue/PR | Priority | Likely for v0.20? |
|---------|----------|----------|-------------------|
| **Headless memory write-approval + staging CLI** | [#67546](https://github.com/NousResearch/hermes-agent/issues/67546) | P3, needs-decision | Medium |
| **`hermes sessions archive` and `compress`** | [#41075](https://github.com/NousResearch/hermes-agent/issues/41075) | P3 | Medium |
| **Skills callable mid-prompt** | [#67316](https://github.com/NousResearch/hermes-agent/issues/67316) | P3, needs-decision | High (UX blocker) |
| **Desktop multi-window (New Window)** | PR [#68259](https://github.com/NousResearch/hermes-agent/pull/68259) | P3 | High (already open) |
| **Evidence-gated memory episodes with local FTS recall** | PR [#68265](https://github.com/NousResearch/hermes-agent/pull/68265) | P3, needs-decision | Medium |
| **Policy-controlled delegation lanes** | PR [#68266](https://github.com/NousResearch/hermes-agent/pull/68266) (closed) | P3 | Already merged |
| **Widget-grid layout engine + theme engine (TUI)** | PR [#20379](https://github.com/NousResearch/hermes-agent/pull/20379) | P3 | Low (stalled) |
| **OKF v0

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-21

## 1. Today's Overview
The PicoClaw project saw high activity over the last 24 hours, with 12 updated issues (8 open, 4 closed) and 10 updated pull requests (5 open, 5 merged/closed). The majority of activity centered around bug reports and configuration fixes, with several long‑standing issues (marked “stale”) finally being closed. Two new feature PRs were opened—adding Japanese localization and a DashScope TTS provider—while the most critical bug reports involve a regression in the Antigravity provider on `main`, a Google OAuth policy block, and an agent hang caused by MCP connection failures. The maintainer team appears responsive, merging five PRs today, including a fix for deferred‑tool visibility and minor infrastructure updates.

## 2. Releases
No new releases were published today. The latest release remains **v0.3.1** (no digest available for that version). Users on `main` should be aware of the regression described in Issue #3274.

## 3. Project Progress
Five pull requests were merged or closed today:

- **#3277** (merged) – `fix(tools): deferred‑tool visibility heal + sliding TTL + SSE tool‑call index fix`  
  Addresses a critical bug where deferred MCP tools would silently disappear from the request after process restart or global TTL expiry, causing the model to call a nonexistent tool.

- **#3192** (closed) – `chore(docker): bump goreleaser base images from alpine:3.21 to 3.23`  
  Infrastructure update for building releases.

- **#3191** (closed) – `chore: remove duplicate build/ entry in .gitignore`  
  Config cleanup.

- **#276** (closed) – `Docs/improve readme`  
  Polish wording and branding consistency in the project README.

- **#277** (closed) – `feat: update the make deps logic to prevent frequent dependency version updates`  
  Improvement to development workflow stability.

Additionally, PR **#3273** (Japanese localization) and **#3270** (DashScope TTS + WeChat audio) were opened and remain open for review. PR **#3271** (update default model names across providers) is also open.

## 4. Community Hot Topics
The most active discussion threads (by comment count) highlight key community concerns:

- **Issue #3182** ([URL](https://github.com/sipeed/picoclaw/issues/3182)) – `[BUG] Android version`  
  *Comments: 4, updated today.* The user cannot launch the service on Android even with full permissions; path settings cannot be changed. This issue has been open since June 26 and still lacks a fix. It represents a significant blocker for mobile users.

- **Issue #3203** ([URL](https://github.com/sipeed/picoclaw/issues/3203)) – `[BUG] Matrix sync loop has no reconnection logic`  
  *Comments: 3, 👍: 1.* A silent death of the Matrix sync loop after network/homeserver disruption. The main process stays alive, so systemd auto‑restart does not trigger. Underlying need: robust reconnection for chat channels.

- **Issue #3230** ([URL](https://github.com/sipeed/picoclaw/issues/3230)) – `[BUG] Function call is missing thought_signature when calling Gemini API via OpenAI compat format`  
  *Comments: 2.* Interoperability issue with Google Gemini when routed through Cloudflare AI Gateway. Closed today, likely via a fix in the provider layer.

- **Issue #3229** ([URL](https://github.com/sipeed/picoclaw/issues/3229)) – `Proposal: rolling conversation cache breakpoints for anthropic-messages`  
  *Comments: 2.* A detailed feature request to leverage Anthropic’s `cache_control` for conversation history caching. Closed today after a fix (#3228) was merged.

The overall community focus is on cross‑provider compatibility, configuration persistence, and mobile support.

## 5. Bugs & Stability
Several bugs reported or updated today are ranked by severity:

| Severity | Issue                                                         | Description                                                                                                                                    | Fix PR Exists? |
|----------|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| **CRITICAL** | [#3278](https://github.com/sipeed/picoclaw/issues/3278) – Antigravity OAuth blocked by Google | `picoclaw auth login --provider antigravity` fails with “doesn’t comply with Google's OAuth 2.0 policy”. Newly reported, no workaround. | No             |
| **CRITICAL** | [#3274](https://github.com/sipeed/picoclaw/issues/3274) – Antigravity provider regression on `main` | `INVALID_ARGUMENT` error after commit `85dcfcc`. `tool_schema_transform "simple"` is no longer sufficient. Regression from v0.3.1. | No             |
| **HIGH**     | [#3269](https://github.com/sipeed/picoclaw/issues/3269) – MCP server connection failure hangs agent loop | Chat interface stops replying when an MCP server fails to connect. No automatic recovery. | No             |
| **HIGH**     | [#3275](https://github.com/sipeed/picoclaw/issues/3275) – Config rewrites lose `api_keys` and other fields | Model list entries lose key fields after Launcher WebUI or auth login operation. Data loss bug. | No             |
| **MEDIUM**   | [#3203](https://github.com/sipeed/picoclaw/issues/3203) – Matrix sync loop silent death | Long‑polling `/sync` never reconnects after disruption. Systemd restart does not trigger. | No             |
| **MEDIUM**   | [#3268](https://github.com/sipeed/picoclaw/issues/3268) – `exec` tool requires `action` parameter with no default | AI model calls fail when `action` is omitted (common case). Proposed default should be `"run"`. | No             |
| **LOW**      | [#3182](https://github.com/sipeed/picoclaw/issues/3182) – Android service launch failure | Old bug with no progress. Path settings unchangeable. | No             |

**Note:** PR [#3277](https://github.com/sipeed/picoclaw/pull/3277) (merged today) fixes a critical tool‑visibility bug. No other fix PRs are linked to the above bugs.

## 6. Feature Requests & Roadmap Signals
Two feature PRs opened today point to near‑term additions:

- **PR #3273** ([URL](https://github.com/sipeed/picoclaw/pull/3273)) – Adds Japanese localization to WebUI (requested in [#3272](https://github.com/sipeed/picoclaw/issues/3272)). Likely to be merged soon.

- **PR #3270** ([URL](https://github.com/sipeed/picoclaw/pull/3270)) – Adds DashScope TTS provider and WeChat audio sending. Expands voice capabilities.

- **PR #3271** ([URL](https://github.com/sipeed/picoclaw/pull/3271)) – Updates default model names to latest (e.g., GPT‑5.6, Claude 4.5). Indicates the project is keeping pace with model releases.

Other user‑requested features (opened as issues) without PRs yet:

- [#3276](https://github.com/sipeed/picoclaw/issues/3276) – Launcher should support an externally‑managed gateway (systemd) and not fail on unknown channel types.
- [#3229](https://github.com/sipeed/picoclaw/issues/3229) – Rolling cache breakpoints for Anthropic (closed today, but the implementation likely incomplete).
- [#3231](https://github.com/sipeed/picoclaw/issues/3231) – Add BasicAuth header support to SearXNG search provider (feature request in Chinese, closed today without PR).

Based on activity, the next minor release (v0.3.2) may include the Japanese localization, DashScope TTS, model name updates, and the tool‑visibility fix from #3277.

## 7. User Feedback Summary
- **Pain points:**
  - Mobile (Android) users cannot run the service at all.
  - Headless server operators struggle with launcher‑gateway lifecycle management and config persistence.
  - Matrix channel users experience silent disconnection with no recovery.
  - MCP server failures bring down the entire chat interface.
  - Antigravity provider users are now completely blocked by Google’s OAuth policy.
- **Use cases:** The community is deploying PicoClaw on Android devices, Ubuntu headless servers with systemd, and using multiple LLM providers (Anthropic, Gemini, local models). There is strong demand for robust multi‑provider support and config stability.
- **Satisfaction:** Users actively filing detailed bug reports and feature proposals suggests high engagement. However, the accumulation of critical bugs without merged fixes may indicate a need for faster stabilization cycles.

## 8. Backlog Watch
The following items have remained open for an extended period and deserve maintainer attention:

| Issue/PR | Age | Impact | Notes |
|----------|-----|--------|-------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) – Android service launch failure | ~25 days | Blocks all Android users. | No activity since the original report. |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) – Matrix sync loop reconnection | ~19 days | Reliability of Matrix channel. | Marked ‘stale’ but reopened today. |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) – Model resolution: prefer verbatim matches | ~8 days | Could affect model routing. | Open PR with no merge or review update since July 13. |

These items represent the most pressing unaddressed concerns that could affect user retention and platform stability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-21

## 1. Today’s Overview

The project saw **high activity** with 20 PRs updated in the last 24 hours (6 merged/closed, 14 open) and 6 new issues filed, all still open. The focus is overwhelmingly on **security hardening** (approval routing, role revocation, scoped grants) and **channel reliability** (WhatsApp upgrade migration, iMessage/Telegram attachment rehydration). A significant LINE Official Account channel skill was proposed, reflecting growing demand for East Asian messaging support. The 6 closed PRs indicate core-team responsiveness, but the number of open PRs (14) suggests a review bottleneck may be forming.

## 2. Releases

None.

## 3. Project Progress (Merged/Closed PRs Today)

Six PRs were closed/merged:

- **[#3110 – feat(container): bake caldav-mcp into the agent image](https://github.com/nanocoai/nanoclaw/pull/3110)** – Pins `caldav-mcp` 0.8.0 into the base agent Docker image, enabling Calendar tool skill without extra installs.
- **[#3108 – fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData](https://github.com/nanocoai/nanoclaw/pull/3108)** – Fixes a core gap where attachments arriving without a `fetchData` function (e.g., from local file stores) were silently dropped. This unblocks fixes for Telegram and iMessage.
- **[#3107 – fix(add-whatsapp-cloud): copy the adoption module and document the row re-key](https://github.com/nanocoai/nanoclaw/pull/3107)** – Companion to #3106; adds migration helper for existing WhatsApp installations affected by the instance re-key fix.
- **[#1110 – fix: update container-runtime tests to match implementation](https://github.com/nanocoai/nanoclaw/pull/1110)** – Test maintenance aligning test expectations with current container runtime behaviour.
- **[#2642 – fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat](https://github.com/nanocoai/nanoclaw/pull/2642)** – Prevents peer dependency mismatch that could break Telegram skill installation.
- **[#3087 – fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups](https://github.com/nanocoai/nanoclaw/pull/3087)** – Fixes WhatsApp group @-mention detection to properly trigger mention-mode logic.

## 4. Community Hot Topics

While no single issue or PR has high comment counts, several threads sparked coordinated fixes:

- **LINE Official Account channel** – Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) proposes `/add-line` skill and is linked to existing draft PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) (open since July 3). This is the most **feature-requested** item, reflecting need for Japan/Taiwan/Thailand coverage.
- **Role & approval security** – Issues [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) (silent global admin), [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) (unclear approval cards), [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) (self-approval bypass), and [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) (last owner revocation) were all filed by the same contributor (k-fls) and each has a corresponding fix PR ( [#3101](https://github.com/nanocoai/nanoclaw/pull/3101), [#3102](https://github.com/nanocoai/nanoclaw/pull/3102), [#3103](https://github.com/nanocoai/nanoclaw/pull/3103), [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) ). This indicates a **focused security audit** by the community.
- **WhatsApp upgrade breakage** – Issue [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) reports that upgrading an existing WhatsApp Cloud installation leaves `messaging_groups` rows orphaned, causing silent mute. Fix PRs [#3106](https://github.com/nanocoai/nanoclaw/pull/3106) and [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) (latter merged today) address the migration gap.

**Underlying needs**: Users demand **robust permission management** (no accidental privilege escalation), **safe upgrades** (migrations must not break existing channels), and **wider channel support** (LINE, Dial, voice).

## 5. Bugs & Stability

Reported bugs ranked by severity:

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) – Last owner revocation not prevented | Leaves system with no root of trust. Only manual DB intervention can recover. | Yes – [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) |
| **High** | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) – WhatsApp instance re-key breaks existing upgrades | WhatsApp silently stops receiving messages after a `/update-skills` cycle. | Yes – [#3106](https://github.com/nanocoai/nanoclaw/pull/3106), [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) (merged) |
| **High** | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) – Role grant without `--group` gives global admin | Accidental privilege escalation is easy. | Yes – [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) |
| **Medium** | [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) – Approval can be routed to the target of the role change | Self-approval of privilege changes. | Yes – [#3103](https://github.com/nanocoai/nanoclaw/pull/3103) |
| **Low** | [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) – Approval cards show raw command line | Usability issue; admins cannot see what the change actually does. | Yes – [#3102](https://github.com/nanocoai/nanoclaw/pull/3102) |

Other bugs receiving fixes today:
- [#2888-related PR #3044](https://github.com/nanocoai/nanoclaw/pull/3044) – Inbound attachments lost on Telegram voice/audio notes (still open).
- [#3109](https://github.com/nanocoai/nanoclaw/pull/3109) – iMessage attachments not read in local mode (still open).
- [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) – Container zombie reaping missing `--init` (still open).

## 6. Feature Requests & Roadmap Signals

Significant feature proposals active:

- **LINE Official Account channel** – Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) + PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918). Strong signal for inclusion in next minor release.
- **Dial channel (SMS + AI voice calls)** – PRs [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) add full adapter and setup wizard. Likely to land soon.
- **On-device voice transcription** – PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) (`/add-voice-transcription-chat-sdk`) uses local whisper.cpp. Open since May 13 – may need maintainer review push.
- **CalDAV tool** – PR [#3110](https://github.com/nanocoai/nanoclaw/pull/3110) merged today, making it available in the base image for next container spin-up.
- **Container zombie reaping** – PR [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) adds `--init` to avoid runaway processes. Simple fix awaiting merge.

**Prediction for next version**: Likely to include LINE channel (if #2918 merges), Dial channel, the approval/role security fixes, attachment rehydration improvements, and the caldav-mcp baked image. Voice transcription may slip unless community push accelerates review.

## 7. User Feedback Summary

Real pain points expressed in today’s issues:

- **“Silent mute after upgrade”** – A user reported WhatsApp Cloud stopping work after a routine `/update-skills` because the migration did not handle row re-keying. This indicates **insufficient upgrade testing** and **poor error reporting** (the bridge logged nothing).
- **“No idea what I’m approving”** – Admin users are shown raw command strings (e.g., `ncl roles-revoke --user slack:U0…`). They cannot see the resolved user name or effect, making approval decisions blind.
- **“Accidental global admin grant”** – Omission of `--group` silently grants global admin. Multiple users flagged that scope should be explicit.
- **“Self-approval of role changes is possible”** – A user demonstrated that a role-change approval card can be routed to the very user being demoted, defeating separation of duties.

Overall sentiment: **Frustration with permission safety**, but **gratitude for rapid fix contributions** (all reported bugs have corresponding PRs within hours). Community engagement (k-fls, glifocat, cfis) is strong.

## 8. Backlog Watch

Several important PRs have gone without merge or maintainer response for weeks:

| PR | Since | Issue | Notes |
|----|-------|-------|-------|
| [#2459 – Voice transcription skill](https://github.com/nanocoai/nanoclaw/pull/2459) | 2026-05-13 | Adds on-device whisper.cpp transcription | Last activity 2026-07-20 (author push), but no core-team review. High value, but large change. |
| [#2918 – LINE channel](https://github.com/nanocoai/nanoclaw/pull/2918) | 2026-07-03 | Full LINE adapter + skill | Updated today but still open. Core team may be waiting for #3096 discussion to settle. |
| [#2950 – Traditional Chinese README](https://github.com/nanocoai/nanoclaw/pull/2950) | 2026-07-04 | Translation + i18n structure | Low urgency but small scope; could be merged quickly. |
| [#3044 – Attachment rehydration for Telegram](https://github.com/nanocoai/nanoclaw/pull/3044) | 2026-07-14 | Fixes lost voice/audio attachments | Core fix, partial overlap with #3108 which was merged. Needs rebase/review. |
| [#3060 – Container `--init`](https://github.com/nanocoai/nanoclaw/pull/3060) | 2026-07-16 | Zombie reaping | Simple change, low risk. Could be merged with minimal review. |

**Recommendation**: Focus review on #2459 (voice transcription is a top-requested feature) and #3060 (stability improvement). The security PRs (#3101–#3104) should be merged promptly given their impact.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-21

## 1. Today's Overview
The NullClaw project shows minimal activity in the past 24 hours: no issues were updated, and only one pull request (#956) received a recent update (last updated 2026-07-20). No new releases or merged PRs were recorded. This quiet period suggests the project is either in a stable maintenance phase or awaiting maintainer attention on pending dependency updates. The sole open PR is an automated dependency bump, indicating ongoing background maintenance but no active feature development or community engagement.

## 2. Releases
No new releases were published on or around 2026-07-21. The latest release remains unidentified in the provided data. Omitted.

## 3. Project Progress
- **Merged/Closed PRs (last 24h):** None.  
- **Features advanced or fixed:** No functional changes were merged or closed today. The only PR in the pipeline is a Docker image version bump (see below).

## 4. Community Hot Topics
- **PR #956 — Bump alpine from 3.23 to 3.24 in docker-images group**  
  *Author:* dependabot[bot]  
  *Created:* 2026-06-15 | *Updated:* 2026-07-20 | *Comments:* 0 | *Reactions:* 0  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/956)  
  *Analysis:* This is the only active PR, representing a routine automated dependency update. With zero comments or reactions, there is no visible community discussion. The underlying need is straightforward: keeping the Docker base image up-to-date for security and compatibility. The lack of human interaction may indicate maintainers are busy or the project is in a low-engagement period.

## 5. Bugs & Stability
- **Bugs reported today:** None (0 issues updated, 0 new issues).  
- **Regressions or crashes:** None recorded.  
- **Stability assessment:** No stability indicators available. The project appears stable or dormant.

## 6. Feature Requests & Roadmap Signals
- **User-requested features:** No feature requests or enhancement issues were updated in the last 24 hours.  
- **Predictions for next version:** Given the absence of active development discussion, the next release (if any) will likely include only the Alpine base image upgrade (from 3.23 to 3.24) and possibly other minor dependency bumps that have accumulated. No major features are indicated.

## 7. User Feedback Summary
No user feedback (issues, comments, or reactions) was recorded in the past 24 hours. Pain points, use cases, and satisfaction levels cannot be inferred from the provided data. The project may have a small or quiet user base.

## 8. Backlog Watch
- **PR #956 (open since 2026-06-15, last updated 2026-07-20)** — This automated dependency bump has been open for over a month without being merged or reviewed. While dependabot PRs are often low priority, the prolonged open window could lead to version drift or security concerns. Maintainer attention is needed to review and merge this update to keep the Docker images current.  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/956)

- **No long-unanswered issues** are present in the provided data (0 total issues). This suggests either the project has no unresolved bugs or feature requests, or that all issues have been recently cleared.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-21

---

## 1. Today's Overview

IronClaw is in an exceptionally high-activity state, driven by the final push toward the **v1.0.0-rc.1 release** and the long-awaited **Tier B deletion of the legacy v1 monolith (`src/`)**. In the last 24 hours, 42 issues were updated (39 open, 3 closed) and 50 pull requests were updated (22 open, 28 merged/closed) — a heavy cadence that signals a major milestone window. The project is actively consolidating its architecture, retiring shadow stores (notably `InMemoryTurnStateStore`), and cutting over production deployments entirely to the Reborn stack. A release candidate tag (`ironclaw-v1.0.0-rc.1`) has been prepared, with release notes authored and awaiting merge. The overall health appears strong but strained: the team is executing high-risk refactors (e.g., #6375 deletes the entire legacy binary) while simultaneously addressing a surge of `bug_bash_P2` UX issues filed by QA.

---

## 2. Releases

**No new releases today.** The release notes for `ironclaw-v1.0.0-rc.1` have been drafted in PR #6370 but the tag has not yet been pushed. Once merged, this will be the first release candidate for the Reborn-native architecture.

---

## 3. Project Progress

**28 PRs were merged or closed in the last 24 hours** — a very high throughput. Key advances:

- **Legacy monolith deletion path unblocked:** PR #6368 ([link](https://github.com/nearai/ironclaw/pull/6368)) decoupled `ironclaw_reborn_migration` from `ironclaw_legacy`, clearing the dependency boundary that blocked the v1 deletion. PR #6375 ([link](https://github.com/nearai/ironclaw/pull/6375)) then performed the actual deletion of the entire `src/` directory and cut deploy configs over to Reborn — this is the **largest single refactor** of the day.

- **Turn state consolidation:** PR #6367 ([link](https://github.com/nearai/ironclaw/pull/6367)) collapsed `TurnStateDurabilityPolicy` to a single write-behind mode, a key step toward retiring `InMemoryTurnStateStore` (tracked in #6263). A corresponding `inmemory-turn-state` feature removal was also picked up.

- **Docs and code cleanup:** PR #6372 ([link](https://github.com/nearai/ironclaw/pull/6372)) removed **131 stale files** from `docs/` (superseded plans, drafts, orphaned assets). PR #6373 ([link](https://github.com/nearai/ironclaw/pull/6373)) removed an orphaned WebUI v2 gitignore.

- **Auth and streaming fixes:** PR #6169 ([link](https://github.com/nearai/ironclaw/pull/6169)) refactored Slack auth to use a provider-agnostic auth-flow record as the single liveness authority. PR #6337 ([link](https://github.com/nearai/ironclaw/pull/6337)) fixed chat streams to keep active connections alive and properly handle terminal markers (closing the replay-on-return bug family).

- **Release prep:** PR #6370 ([link](https://github.com/nearai/ironclaw/pull/6370)) added release notes for `v1.0.0-rc.1` and removed the stale `reborn-binary.md`. PR #6328 ([link](https://github.com/nearai/ironclaw/pull/6328)) expanded `Invocation` to carry pre-auth input, advancing the capability authority fold design.

- **UX fixes:** PR #6366 ([link](https://github.com/nearai/ironclaw/pull/6366)) fixed the provider onboarding flow to allow navigation back from the API‑key prompt (closes #6360). PR #6337 (streaming) also closes the confusing "replay unavailable" error on completed responses.

---

## 4. Community Hot Topics

- **#6263 – Final store consolidation: retire InMemoryTurnStateStore** ([link](https://github.com/nearai/ironclaw/issues/6263))  
  *9 comments, 0 reactions.* The most-discussed issue today. This is the last debt item in the `InMemory*Store` ratchet. It requires a "Slice 0 oracle" and evidence of no-livelock before the store can be removed. The underlying need is to eliminate all in-memory state stores in favor of persistent backends — a prerequisite for the Reborn architecture's reliability guarantees. PR #6367 (merged) partially addresses this.

- **#6190 – Multiple conflicting error messages for a single failed request** ([link](https://github.com/nearai/ironclaw/issues/6190))  
  *4 comments.* A `bug_bash_P2` issue. Users see both a streaming error and a model context limit error simultaneously, masking the root cause. This indicates a lack of error consolidation in the UI layer. No fix PR identified yet.

- **#6189 – Retryable stream error leaves completed response in failed state** ([link](https://github.com/nearai/ironclaw/issues/6189))  
  *4 comments.* The "Replay unavailable" error banner appears even after a successful completion. This is a high-visibility confusion point for users. PR #6337 (merged) appears to address this by requiring a real provider terminal marker.

**Themes:** These issues collectively point to a **streaming state machine that doesn't cleanly transition between retry, completion, and error states**. The merged PR #6337 is a direct response to this family of bugs.

---

## 5. Bugs & Stability

**15 bug reports were updated/created today (2 P1, 13 P2).** Severity breakdown:

### Critical / P1 (2 issues)
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#6360](https://github.com/nearai/ironclaw/issues/6360) | Provider onboarding flow has no way to navigate back after selecting a provider | **PR #6366 merged** — Esc key now returns to provider menu |
| [#6348](https://github.com/nearai/ironclaw/issues/6348) | Gmail extension auto-authorizes after reinstall without user consent | No fix PR yet; a security concern |

### High / P2 (13 issues)
Key examples:
- [#6190](https://github.com/nearai/ironclaw/issues/6190): Multiple conflicting error banners
- [#6189](https://github.com/nearai/ironclaw/issues/6189): Completed response shown as failed ("Replay unavailable")
- [#6350](https://github.com/nearai/ironclaw/issues/6350): Assistant unexpectedly switches language (English → Ukrainian)
- [#6351](https://github.com/nearai/ironclaw/issues/6351): Checkpoint unavailable/unreachable errors on multi-tool requests
- [#6353](https://github.com/nearai/ironclaw/issues/6353): Long messages truncated without expand option
- [#6352](https://github.com/nearai/ironclaw/issues/6352): Streamed response replays in loop after returning to page
- [#6349](https://github.com/nearai/ironclaw/issues/6349): Telegram chat history rendered inconsistently in WebUI
- [#6362](https://github.com/nearai/ironclaw/issues/6362): Duplicate "Test connection" / "Fetch models" flows

**Stability regression:** Issue #6359 ([link](https://github.com/nearai/ironclaw/issues/6359)) reports a test (`reborn_trace_first_party_tool_coverage`) that reads the developer's real `$HOME` state, causing local failures while passing in CI.

**Test coverage gap:** Issue #6347 ([link](https://github.com/nearai/ironclaw/issues/6347)) reports that Slack instance-readiness has no caller-level test coverage — the test harness forces Slack configured.

**Summary:** Today's bug load is significant but concentrated in UX and edge-case state management. The P1 onboarding navigation fix has already shipped (PR #6366). The streaming-related bugs (#6189, #6352) have a partial fix in PR #6337. The Gmail auto-auth P1 (#6348) remains unfixed and is the most concerning unresolved issue.

---

## 6. Feature Requests & Roadmap Signals

Several enhancement issues were filed/updated today, all tagged with Reborn-native scope:

- **#6320 – IronHub extension install flow** ([link](https://github.com/nearai/ironclaw/issues/6320)): A Reborn-native plugin/extension marketplace. High impact for ecosystem growth.

- **#6325 – Thread-scoped MCP sessions** ([link](https://github.com/nearai/ironclaw/issues/6325)): Programmatic MCP configuration scoped to thread/run/product context. Likely key for multi-agent workflows.

- **#6324 – WebUI workspace redesign and chat-first onboarding** ([link](https://github.com/nearai/ironclaw/issues/6324)): Aligns the first-screen experience with the Reborn product model.

- **#6323 – Offline v1-to-Reborn migration workflow** ([link](https://github.com/nearai/ironclaw/issues/6323)): Enables operators to migrate legacy data without a live service path.

- **#6371 – Narrow Reborn hooks to invocation authorization policy** ([link](https://github.com/nearai/ironclaw/issues/6371)): A design discussion aimed at simplifying the hook framework.

- **#6329 – Decompose extension_lifecycle.rs** ([link](https://github.com/nearai/ironclaw/issues/6329)): The file is 8,789 lines, far exceeding the project's 3,000-line budget. This is a code health debt that will likely be broken out post-release.

**Release prediction:** Of these, the **offline migration workflow (#6323)** and the **WebUI redesign (#6324)** are most likely to appear in the v1.0.0-rc.1 or a v1.0.0-rc.2, given the current focus on deployment readiness. The IronHub extension install flow (#6320) is probably v1.1+ territory.

---

## 7. User Feedback Summary

The bug bash reports from `joe-rlo` and `italic-jinxin` provide the clearest picture of user pain points:

- **Confusing error handling:** Users cannot distinguish between a genuine failure, a retryable error, and a completed response. The "Replay unavailable" banner is particularly misleading (#6189, #6190).
- **Streaming reliability:** Leaving a chat and returning causes replay loops (#6352). Long responses are silently truncated (#6353).
- **Platform inconsistency:** Telegram messages look broken in WebUI (#6349). Language switching without user request (#6350) undermines trust.
- **Security confusion:** Gmail extension re-authorizes silently (#6348) — this is the most serious feedback from a trust perspective.
- **UX navigation:** Onboarding flow is a dead end (#6360, now fixed). The "Test connection" and "Fetch models" buttons appear redundant (#6362).
- **Test environment mismatch:** Developers cannot run tests locally due to real `$HOME` state being read (#6359).

**Satisfaction delta:** The rapid fix for #6360 (PR merged same day) suggests the team is responsive to critical UX feedback. However, the volume of P2 bugs indicates that the chat/streaming experience is still rough around the edges for production readiness.

---

## 8. Backlog Watch

- **#2277 – V2: ACP-backed child thread backends for delegated external agents** ([link](https://github.com/nearai/ironclaw/issues/2277))  
  Filed **2026-04-10**, last updated today. Only 2 comments, 1 👍. This feature — delegating work to external coding agents (Codex, Droid, OpenCode) — is a major architectural vision item. Despite being tagged with `scope: agent`, it has received no recent traction. With the v1 monolith now deleted, Reborn may absorb this feature post-stabilization.

- **#5598 – Release PR (chore: release)** ([link](https://github.com/nearai/ironclaw/pull/5598))  
  Open since **2026-07-03**, with 28 comments. This is the automated release PR for version bumps, but it has been lingering for 18 days. It appears to be a holding PR until the v1.0.0-rc.1 tag is ready. Now that PR #6370 has prepared the release notes, this should resolve soon.

- **#6116 – Unified generic extension runtime + Option A state machine** ([link](https://github.com/nearai/ironclaw/pull/6116))  
  Open since 2026-07-15, with 92 commits from a long-lived fork. This is a large reconciliation PR that has been updated today. It may be a contender for the v1.0.0 release cycle and warrants maintainer attention to avoid merge conflicts with the Tier B changes.

**No unaddressed community issues older than a few weeks** were found. The project maintains a tight triage cadence, likely due to the active core team.

---

*Digest generated from GitHub data for IronClaw (github.com/nearai/ironclaw), snapshot 2026-07-21.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-21

---

## 1. Today's Overview

The LobsterAI project showed moderate activity on July 20–21, 2026, with **15 pull requests updated** (10 merged/closed, 5 still open) and **no new issues or releases**. Development focused on stabilizing the Cowork feature, improving the Windows build pipeline, and adding user-facing capabilities such as browser multi-annotation support and AI skin creation flows. Several long-standing dependency-update PRs remain open but have been inactive since April. Overall project health appears solid, with a clear emphasis on polishing collaboration features and enhancing the user experience.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress – Merged/Closed PRs Today

Ten PRs were merged or closed on July 20. Key advances include:

- **Browser multi-annotation support ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366))** – A major feature enabling inline annotations in the built-in browser, with screenshot storage, draft attachment handling, and structured context passed to Cowork messages and OpenClaw prompts.  
- **Silent Windows installer ([#2368](https://github.com/netease-youdao/LobsterAI/pull/2368))** – *Open* but listed as active; launches NSIS installer with `/S` via PowerShell, handles UAC decline errors gracefully.  
- **Explicit Windows dist build entry points ([#2367](https://github.com/netease-youdao/LobsterAI/pull/2367))** – Cleaner build scripting for channel and web-installer variants.  
- **AI skin creation flow ([#2361](https://github.com/netease-youdao/LobsterAI/pull/2361))** – Persistent entry in Appearance settings, first-use onboarding, and improved workflow for repeated AI skin generation.  
- **Config hot-reload via RPC ack ([#2365](https://github.com/netease-youdao/LobsterAI/pull/2365))** – Replaces file-watch based reload with a more reliable RPC acknowledgment mechanism.  
- **Multiple stability fixes**:  
  - Scroll jumps on session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364))  
  - Periodic IM message flicker ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363))  
  - Auth callback preservation across login retries ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360))  
  - Cron UI bug ([#2362](https://github.com/netease-youdao/LobsterAI/pull/2362))  
  - Artifact preview panel layout stability ([#2359](https://github.com/netease-youdao/LobsterAI/pull/2359))  
- **POPO connectivity test fix ([#1349](https://github.com/netease-youdao/LobsterAI/pull/1349))** – *Closed stale* PR that adds real API validation instead of only checking non-empty fields.

---

## 4. Community Hot Topics

No issues were created or commented on today, and PR comments were not recorded. However, the **most active PR in terms of scope and likely user impact** is:

- **[#2366 – Browser multi-annotation support](https://github.com/netease-youdao/LobsterAI/pull/2366)** – This feature touches the Cowork, artifacts, and documentation areas. The underlying need is for richer collaboration – users can now annotate browser content directly and attach multiple notes to conversations.

The **dependabot PRs** (`#1277`, `#1282`, `#1283`, `#1284`) have not been merged for months, suggesting that dependency updates are either low priority or blocked by compatibility concerns.

---

## 5. Bugs & Stability

Several bugs were fixed today, each with a corresponding merged PR. Severity ranking (highest to lowest):

1. **Auth callback failure on retry** – High severity; caused repeated login attempts to fail.  
   *Fix:* [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) (merged)

2. **Periodic IM message flicker** – Medium severity; degraded real-time messaging reliability.  
   *Fix:* [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) (merged)

3. **Scroll jumps on session refresh** – Medium severity; disrupted reading flow in Cowork.  
   *Fix:* [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) (merged)

4. **Artifact preview panel layout instability** – Low severity; visual glitch when expanding preview.  
   *Fix:* [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) (merged)

5. **Cron UI bug** – Low severity; likely a display or input issue.  
   *Fix:* [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) (merged)

No new bugs were reported in the last 24 hours.

---

## 6. Feature Requests & Roadmap Signals

Based on today’s merged PRs, the following capabilities are moving toward production:

- **Silent Windows updates** – Will simplify enterprise deployments.  
- **Browser annotations** – Indicates a roadmap focus on collaborative research and document review.  
- **AI skin creation** – Suggests ongoing investment in personalization and generative UI.  
- **Config hot-reload via RPC** – Points to architectural improvements for developer experience and live configuration.

No explicit user feature requests were recorded today, but the above features align with typical user desires for smoother onboarding, better collaboration tools, and customization.

---

## 7. User Feedback Summary

No direct user feedback (comments, reactions, or issues) was recorded today. However, the bugs fixed (scroll jumps, flicker, auth retries, layout instability) reflect real user pain points that have been actively addressed. The POPO connectivity test fix ([#1349](https://github.com/netease-youdao/LobsterAI/pull/1349)) resolves a long-standing user complaint about false positive validation.

Overall, user satisfaction is likely improving as these stability and usability issues are resolved.

---

## 8. Backlog Watch

Several important PRs remain open and require maintainer attention:

- **[#1277 – Electron + electron-builder dependency bump](https://github.com/netease-youdao/LobsterAI/pull/1277)** – Open since April 2, updates Electron from 40.2.1 to 43.1.1. Such a large jump may introduce breaking changes; the stale status suggests deliberate deferral.
- **[#1282 – @headlessui/react bump](https://github.com/netease-youdao/LobsterAI/pull/1282)** – Open since April 2, from 1.7.19 to 2.2.9. Major version increase with potential API changes.
- **[#1283 – React bump](https://github.com/netease-youdao/LobsterAI/pull/1283)** – Open since April 2, from 18.3.1 to 19.2.4. React 19 adoption is often slow; needs evaluation.
- **[#1284 – react-syntax-highlighter bump](https://github.com/netease-youdao/LobsterAI/pull/1284)** – Open since April 2.
- **[#2368 – Silent Windows installer](https://github.com/netease-youdao/LobsterAI/pull/2368)** – Open, added today. Awaiting review.

Maintainers should prioritize reviewing and merging the dependabot PRs to keep dependencies current, especially the Electron update which affects security and performance.

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

好的，根据您提供的 CoPaw 项目 GitHub 数据，我为您生成了一份截至 2026-07-21 的项目摘要。

---

### CoPaw 项目摘要 (2026-07-21)

#### 1. 今日概览
CoPaw 项目在 2026-07-21 显示出极高的社区活跃度和开发节奏。过去 24 小时内，有 30 个 Issue 和 42 个 Pull Request 被更新，表明项目处于密集的 Bug 修复与功能开发阶段。尽管没有新版本发布，但大量 PR 处于 “Under Review” 或 “ready-for-human-review” 状态，预示着下一轮发布即将到来。社区反馈主要集中在稳定性问题（如循环执行、死循环）和多轮交互中的一致性问题，同时对新功能和集成（如 AIOnly 提供商、会话分组）表现出浓厚兴趣。

#### 2. 最新版本
无新版本发布。

#### 3. 项目进展
过去 24 小时内，共有 10 个 PR 被合并或关闭，表明项目取得了实质性进展。主要成果包括：
- **新应用与 SDK**：PR [#6150](agentscope-ai/QwenPaw PR #6150) “feat(pawapp): add pawapp sdk and kanban app” 被合并，引入了 `PawApp` SDK 和看板应用，为生态扩展提供了新基础。
- **记忆系统增强**：PR [#6235](agentscope-ai/QwenPaw PR #6235) 被合并，显著增强 ReMe Light 长期记忆的稳定性、索引维护和分块逻辑，解决了启动时自动重建索引的高开销问题。
- **核心架构重构**：PR [#6210](agentscope-ai/QwenPaw PR #6210) 被合并，将默认的 ReAct 循环重构为一个独立的 `DefaultMode`，使模式管理更清晰，并为后续开发奠定了基础。
- **可观测性改进**：PR [#5922](agentscope-ai/QwenPaw PR #5922) 被合并，改进了 Langfuse 追踪的用户/会话/版本信息，增强了数据调试和分析能力。
- **问题修复**：PR [#6246](agentscope-ai/QwenPaw Issue #6246)、[#6255](agentscope-ai/QwenPaw Issue #6255)、[#6250](agentscope-ai/QwenPaw Issue #6250) 和 [#5961](agentscope-ai/QwenPaw Issue #5961) 等相关的 Bug 已被闭环，解决了一些由文件名过长、特定 API 错误、沙箱不可用和 v2.0.0 版本循环执行导致的问题。

#### 4. 社区热门话题
以下 Issue 和 PR 引发了最广泛的讨论，反映了社区的核心关切：
- **Issue [#6257](agentscope-ai/QwenPaw Issue #6257): [Bug]: Multiple tool calls produce identical thinking output** (13 条评论)
  - **分析**: 这是一个高关注度的 Bug，当 Agent 在一次回复中执行多个工具调用时，每个调用的“思考”过程内容完全相同。这严重影响了多工具协作场景下的透明度和调试体验，用户期望每个工具调用都有独立的推理过程。
- **Issue [#5961](agentscope-ai/QwenPaw Issue #5961): [Bug]: v2.0.0版本循环执行的问题** (8 条评论，已关闭)
  - **分析**: 用户报告 v2.0.0 版本在使用特定模型时陷入“写入-删除”的死循环，无法完成简单任务。这直接指向了核心 Agent 循环逻辑中的缺陷，对用户体验有毁灭性影响。该 Issue 在今日被关闭，表明问题已得到修复。
- **Issue [#4873](agentscope-ai/QwenPaw Issue #4873): [Bug]: 同时开两个subagent会导致主agent无限快速轮询直至任务结束** (5 条评论)
  - **分析**: 此问题涉及任务调度和并发控制。同时运行两个子 Agent 会导致主 Agent 陷入高频轮询的僵局，且无法从特定渠道（飞书）中断。这暴露了多 Agent 并发调度和外部通信集成方面的深层架构问题。
- **PR [#6203](agentscope-ai/QwenPaw PR #6203): fix(utils): bound and hide the Windows tasklist liveness probe** (Under Review)
  - **分析**: 该 PR 专注于修复 Windows 平台上一个具体且危险的问题：`tasklist` 进程检查没有超时机制，可能导致进程无限挂起。这类平台特定问题的迅速修复，体现了项目对跨平台稳定性的重视。

#### 5.  Bugs & 稳定性
今日报告了多个 Bug，按严重性排序如下：
- **严重**:
  - **循环/重复执行**：`#6241` (Agent连续轮次重复输出+memory_search死循环)、`#4873` (Subagent导致主agent无限轮询)、`#5961` (v2.0.0版本循环执行，已修复)。这些 Bug 直接影响 Agent 完成基本任务，破坏用户体验。存在关联的修复 PR `#6041` (fix: 末日循环检测豁免只读工具) 正在审查中。
  - **核心逻辑错误**：`#6257` (多工具调用输出相同思考内容)、`#6282` (多个 ReAct 迭代中思考块重复)。它们破坏了多步推理的一致性。存在修复 PR `#6280` 正在审查。
- **中等**:
  - **启动/环境问题**：`#6197` (桌面版因 `nvidia-smi`挂起而卡住)、`#6249` (TUI 启动一直处于 warming)。这些问题会阻止用户启动或使用应用。
  - **数据/文件系统错误**：`#6246` (文件名过长导致OSError，已修复)、`#6239` (Windows PATH拼接错误)。这些是特定环境下的数据损坏或功能缺失问题。
- **低严重性**:
  - **UI/UX问题**：`#6252` (Linux桌面版缩放失效)、`#6242` (控制台 `use_dimensions` 参数未暴露)、`#5688` (CSS前缀不匹配)。
  - **模型/配置问题**：`#6258` (OpenAI模型最大输出token不生效)、`#6261` (离线环境无法预览文件)。

#### 6.  功能请求 & 路线图信号
用户提出的功能请求反映了对Agent能力、易用性和生态拓展的期待：
- **Agent 能力增强**:
  - **[`#6274`]** (新增 `ask_user_question` 工具)：引入 Human-in-the-Loop 能力，让 Agent 在不确定时主动向用户提问，这是向更可靠、更安全的自主 Agent 发展的关键一步。
  - **[`#6283`]** (自动附加当前时间)：解决会话重启后的时间混淆问题，是一个提升长期对话体验的实用功能。
- **用户体验提升**:
  - **[`#6287`]** (会话历史分组)：用户希望更好地管理大量对话，类似应用的文件夹功能。
  - **[`#6260`]** (结果呈现折叠)：用户希望将工具调用和思考过程折叠，直接呈现最终结果，反映了对 Agent 服务“结果导向”的期望。
  - **[`#6264`]** (最小化到系统托盘)：一个经典的桌面应用特性请求，表明用户将其作为日常工具来使用。
- **生态与集成**:
  - **[`#6285`]** (支持阿里云新模型 `qwen3.8-max-preview`)：紧跟云服务商模型更新。
  - **[`#6268`]** (添加 AIOnly 提供商)：社区贡献，为平台引入一个整合了190+模型的聚合服务，极大拓宽了模型选择范围。已有对应的 **PR `#6271`** 提交。
- **可配置性**:
  - **[`#6286`]** (支持禁用或自定义内置工具描述)：用户希望减少不必要的 Token 消耗，这是一个高级优化需求。

**下一次版本预测**: 考虑到正在审查的 PR 数量，下一个版本 (`2.0.1` 或 `2.1.0`) 可能会包含：
- **新 App 架构**: `PawApp` SDK 及其首个应用 (Kanban)。
- **稳定性修复**: 修复多个“循环”和“重复” Bug 的 PR (如 `#6280`, `#6041`, `#6273`)。
- **新模型提供商**: 集成 AIOnly (`#6271`)。
- **关键能力**: 用户可编辑 Agent 模式 (`#6270`)、统一浏览器工具 (`#6276`)。

#### 7.  用户反馈总结
- **核心痛点**: 用户最强烈的负面反馈集中在 **Agent 循环、重复和卡死** 问题 (`#5961`, `#4873`, `#6241`)。这表明产品在核心稳定性上仍有待加强。
- **使用场景**: 用户主要在 **桌面端 (`#6197`, `#6252`)** 和 **多 Agent 协作 (`#4873`)** 场景下遇到问题。
- **满意度**: 尽管存在稳定性问题，但社区的活跃程度（持续提交 Issue、PR）表明用户对项目前景非常看好，并积极参与改进。对新功能 (`#6268`, `#6274`) 的热切期盼也体现了用户对项目的高期待。
- **持续需求**: 用户对 **系统集成**（如 AIOnly, 阿里云模型）和 **结果呈现** 的优化有持续性需求，希望 Agent 能作为一个更加易用、可靠的日常工具。

#### 8.  积压观察
以下 Issue 或 PR 已开放较长时间，可能需要团队关注或回应，以避免社区贡献者的积极性受挫：
- **Issue [#5688](agentscope-ai/QwenPaw Issue #5688)**: [Question]: CSS Selector Prefix Mismatch: `ant-` vs `qwenpaw-` (创建30天，已更新)。这是一个关于前端样式前缀一致性问题的技术问题，至今未有明确结论。若不解决，可能导致后续定制界面时出现不可预见的样式冲突。
- **Issue [#5187](agentscope-ai/QwenPaw PR #5187)**: feat(computer-use): Windows desktop GUI automation with UIA + Tauri control mode (开放36天)。这是一个由社区贡献者开发的大型功能 PR，仍未合并。长期搁置可能令贡献者气馁，并错失增强平台能力的机会。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-21

## Today’s Overview
The project saw very high activity over the past 24 hours: **36 issues** were updated (27 still open, 9 closed) and **50 pull requests** were touched (40 open, 10 merged/closed). There were **no new releases**, but development momentum is concentrated on major milestones: persistent memory, agent evaluation, SOP control plane, and Windows compatibility. The volume of open PRs (40) and the number of new S1‑severity bugs (6 filed today) indicate a busy phase with both feature work and critical bugfixing proceeding in parallel.

## Releases
*No new releases were published today.*

## Project Progress

**Merged/Closed Pull Requests (10 total) – representative highlights:**
- **[#9088](https://github.com/zeroclaw-labs/zeroclaw/pull/9088)** – fix(web): Markdown links in chat now open in a new tab (prevents losing streaming view).
- **[#9157](https://github.com/zeroclaw-labs/zeroclaw/pull/9157)** – fix(hardware): resynchronize serial response frames after mismatched IDs.
- **[#9108](https://github.com/zeroclaw-labs/zeroclaw/pull/9108)** – ci(firmware): add CI gate for shared firmware protocol crate.
- **[#9173](https://github.com/zeroclaw-labs/zeroclaw/pull/9173)** – fix(zerocode): add terminal-safe `/help` and `/browse` commands.
- **[#9168](https://github.com/zeroclaw-labs/zeroclaw/pull/9168)** – docs(architecture): ADR-012 for generation-scoped live config apply.
- **[#9167](https://github.com/zeroclaw-labs/zeroclaw/pull/9167)** – docs(architecture): ADR-011 for multi-agent runtime boundaries.

**Closed Issues (9 total) – representative fixes:**
- **[#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117)** – ZeroCode won’t start on Windows without `ZEROCLAW_SOCKET` env var.
- **[#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837)** – history trimming occurred silently with pruning disabled.
- **[#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078)** – serial transport desynchronized after non‑matching response ID.
- **[#9079](https://github.com/zeroclaw-labs/zeroclaw/issues/9079)** – added CI coverage for firmware protocol crate.
- **[#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)** – malformed tool-call arguments sent unvalidated to OpenRouter/OpenAI providers → 400 → empty reply.
- **[#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664)** – ZeroCode code‑block Copy included Markdown fences.
- **[#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644)** – ZeroCode could complete a Code turn with no visible output.
- **[#8765](https://github.com/zeroclaw-labs/zeroclaw/issues/8765)** – ZeroCode queue/session picker overlays inherited terminal background.
- **[#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944)** – ZeroCode transcript mouse copy blocked word‑level text selection.

Several of these fixes address user‑reported pain points in the ZeroCode TUI and provider integrations.

## Community Hot Topics

| Issue / PR | Comments | Reactions | Topic |
|------------|----------|-----------|-------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 14 | – | RFC: Work Lanes, Board Automation, and Label Cleanup (accepted, rollout in progress) |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 10 | – | 74 test failures on Windows – Unix‑only commands, path semantics, console encoding |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 9 | 7 👍 | Feature: A2A (Agent‑to‑Agent) Protocol Support – high community demand |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 6 | – | Tracker: Persistent memory – wire curation, relevance, operability planes |
| [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) | 5 | – | Bug: ZeroCode won’t start on Windows without `ZEROCLAW_SOCKET` |
| [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) | 4 | – | Feat: centralize SOP ingress adapters for fan‑in sources |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | 3 | – | Feature: agent evaluation harness (`zeroclaw eval`) – now seeing PRs |
| [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) | 3 | – | Bug: history trimming silent with pruning disabled |
| [#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) | 2 | – | Bug: serial transport desync |
| [#9079](https://github.com/zeroclaw-labs/zeroclaw/issues/9079) | 2 | – | Feature: CI for firmware protocol crate (merged) |

**Analysis:** The most active thread remains the RFC for work‑lanes and board automation (#6808), which is nearing completion. The Windows test failure (#7462) continues to draw attention but lacks a fix PR. A2A protocol support (#3566) has the strongest positive reaction (7 👍), reflecting strong community desire for multi‑agent interoperability. The persistent memory tracker (#8891) and the agent evaluation harness (#7065) are now seeing corresponding PRs, indicating these roadmap items are moving toward delivery.

## Bugs & Stability

**New bugs reported today (2026-07-20) – ranked by severity:**

- **S0 – Data loss / security risk**:
  - [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) – Cron `job_type = "agent"` intermittently resolves `workspace_dir` to `/` instead of the agent’s real workspace. *No fix PR yet.*

- **S1 – Workflow blocked**:
  - [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) – Landlock sandbox locks zeroclaw itself into landlock, causing SQLite access issues.
  - [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) – `web_fetch` returns garbage for compressed responses (gzip, brotli, deflate).
  - [#9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216) – Comment‑hygiene gate fails on master because of issue refs in provider comments.
  - [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) – Cron agent jobs have no wall‑clock timeout; in‑flight locks only cleared at process start.
  - [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) – `shared_budget` TOCTOU can wrap `AtomicUsize`; `SopEngine::finish_run` unwrap panics under mutex.

- **S2 – Degraded behavior**:
  - [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) – Reliable provider key rotation cools `last_selected` key, not the key that hit 429.
  - [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) – Discord typing indicator stuck after daemon reload from web dashboard.

- **S3 – Minor issue**:
  - [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) – `zeroclaw desktop` command uses dead download URL and fails to detect installed AppImage.

**Fix PRs associated:** None of the S0/S1 bugs have an open fix PR yet. However, related infrastructure PRs exist for other bugs (e.g., [#9157](https://github.com/zeroclaw-labs/zeroclaw/pull/9157) fixed serial desync from yesterday’s report). The high number of new S1 bugs is a concern; maintainers should prioritise the workspace‑resolution bug (#9206) and the sandbox lock‑up (#9204).

## Feature Requests & Roadmap Signals

The most significant feature requests advancing today:

- **Agent evaluation harness** (`zeroclaw eval`) – three new PRs landed today:
  - [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) – per‑dimension LLM‑judge grader (diagnostic first).
  - [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) – baseline files with regression diffing.
  - [#9220](https://github.com/zeroclaw-labs/zeroclaw/pull/9220) – comparable run receipts and failure transcript dumps.
  These complete the core of the `eval` subsystem, likely to be gated in the next release.

- **Persistent memory** – two large PRs moved forward:
  - [#8895](https://github.com/zeroclaw-labs/zeroclaw/pull/8895) – gated rerank stage in memory‑context injection.
  - [#8900](https://github.com/zeroclaw-labs/zeroclaw/pull/8900) – typed memory classification and gated typed‑facts extraction.

- **SOP (Standard Operating Procedures)** – the daemon‑owned SOP control plane tracker ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)) is being built out via [#9030](https://github.com/zeroclaw-labs/zeroclaw/pull/9030) (fix SOP step agent policy) and [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) (centralized ingress adapters).

- **A2A Protocol** ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)) – still open with 7 👍, but no PR yet. Likely targeted for v0.9.0 (tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) includes A2A and multi‑agent boundaries).

**Prediction for next release (v0.9.0 or later):** Persistent memory (typed facts + rerank), agent evaluation harness, improved SOP control plane, and A2A support are the strongest candidates. The Windows test failure (#7462) may also block a Windows release until resolved.

## User Feedback Summary

**Pain points expressed:**

- **Windows support is broken** – 74 test failures (#7462), ZeroCode won’t start without environment variable (#9117). Users on Windows cannot use the project reliably.
- **History pruning is unreliable** – trimming occurred silently even when pruning was disabled (#8837). User reported loss of conversation context.
- **Tool calls fail silently with some providers** – malformed JSON arguments sent to OpenRouter/OpenAI caused 400 errors and empty replies (#8675). Affects all OpenAI‑wire‑format providers.
- **ZeroCode UI quirks** – Copy button includes Markdown fences (#8664), code turn can complete with no visible output (#8644), queue sidebar inherits wrong background (#8765), mouse selection is blocked (#8944). While minor, they degrade the user experience.
- **Network tools broken** – `web_fetch` returns garbage for compressed responses (#9207), making it unusable for many sites.
- **Cron jobs dangerous** – workspace_dir resolved to `/` (#9206) could lead to data loss; no timeout on agent jobs (#9191) can hang

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*