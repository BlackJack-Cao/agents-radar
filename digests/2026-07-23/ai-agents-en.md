# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 410 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-22 23:41 UTC

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

## Today’s Overview
OpenClaw continues to show extremely high development velocity, with **410 issues** and **500 pull requests** updated in the last 24 hours.  
Of those issues, **259 remain open** and **151 were closed**; on the PR side, **303 are open** and **197 have been merged or closed**.  
No new releases were cut today, but the volume of activity suggests a major release may be imminent.  
The project is heavily focused on stability fixes (bounded reads, memory caps, timeout hardening) alongside user-requested features like Windows/Linux desktop apps and security improvements.

## Releases
No new releases were published on 2026-07-23. The latest available version remains **2026.7.1** (previously released).

## Project Progress
**Merged / closed PRs today** include several significant improvements:

- **#112781** – `fix: forced cloud worker teardown cannot be blocked by recovery` – ensures operator `environments.destroy --force` cannot be stalled by stuck workspace states.
- **#112769** – `refactor(agents): thread plugin metadata snapshots per turn` – reduces per-turn overhead for plugin metadata discovery.
- **#112753** – `refactor(ui): extract sidebar session-list render functions` – first step toward reactive controller flattening in the Control UI.
- **#112788** – `feat(android): add OpenClaw settings chat` – brings native setup assistant access to Android operators.
- **#112721** – `feat(android): add Wear instant talk tile` – adds a dedicated voice launch tile for Wear OS.
- **#112789** – `refactor: consolidate restart recovery test fixtures` – reduces a 5,909‑line test file into maintainable fixtures.
- **#112775** – `refactor(agents): remove unused JSONL session paths` – cleans up internal session manager code.

Additionally, **many open fix PRs** (e.g., #112551, #112579, #112606) landed today, targeting bounded I/O, plugin registry pinning, and security auditor collection.

## Community Hot Topics
The following issues generated the most discussion and reactions (links to GitHub):

- **#75** – `[OPEN] Linux/Windows Clawdbot Apps` (115 comments, 80 👍)  
  *User need:* A long-standing request for desktop apps beyond macOS/iOS. The community is passionate about bringing the same feature set to Windows and Linux.  
  [View Issue](https://github.com/openclaw/openclaw/issues/75)

- **#85333** – `[OPEN] openclaw doctor --fix 4-5x slower on 2026.5.20 vs 2026.5.19` (17 comments)  
  *User pain:* A performance regression caused by a session snapshot path traversal bottleneck. Users on production VPS are seeing 55s → 229s+ degradation.  
  [View Issue](https://github.com/openclaw/openclaw/issues/85333)

- **#13583** – `[OPEN] Pre-response enforcement hooks (hard gates) for mandatory tool-call / policy rules` (16 comments, 2 👍)  
  *Feature request:* A mechanical gating mechanism for high-stakes workflows (quant, security) to prevent agents from bypassing required tool calls.  
  [View Issue](https://github.com/openclaw/openclaw/issues/13583)

- **#91009** – `[OPEN] Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC` (15 comments)  
  *Bug report:* A critical bug where Codex integration spawns CPU‑hungry hook processes, causing gateway stalls and message loss.  
  [View Issue](https://github.com/openclaw/openclaw/issues/91009)

- **#10659** – `[OPEN] Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys` (15 comments, 4 👍)  
  *Security request:* Users want agents to use API keys without being able to read them, protecting against prompt injection leaks.  
  [View Issue](https://github.com/openclaw/openclaw/issues/10659)

## Bugs & Stability
**Critical (P0) issues updated today:**

- **#108435** – `[Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error` – gateway crash on upgrade. **No fix PR open yet.**  
  [View Issue](https://github.com/openclaw/openclaw/issues/108435)

- **#98674** – `[Bug]: cant click on mac app install icon` – regression that blocks macOS app installation. **Now closed**, likely fixed.  
  [View Issue](https://github.com/openclaw/openclaw/issues/98674)

**High-severity (P1) issues with active fix PRs:**

- **#91009** – CPU-bound hooks process (P1) – linked PRs open, part of ongoing Codex stability work.
- **#92043** – 180s compaction timeout wall clock issue (P1) – PR #112551 (prune old image blocks) addresses related compaction performance.
- **#108580** – cron tool schema incompatible with llama.cpp grammar (P1) – linked PR open.
- **#99054** – Teams app removal retains session history (P1) – PR #104690 submitted.
- **#65538** – Accessibility: screen readers announce every streaming token (P1) – no fix PR yet.
- **#90840** – Subagent raw output delivered to chat user instead of parent summary (P1) – no fix PR yet.

**Other notable bugs** (P1/P2 with ongoing discussion or awaiting maintainer review) include regressions in Feishu streaming latency (#91941), gateway loop on WSL (#84610), WhatsApp silent drops (#84092), and many more. The “clawsweeper:needs-maintainer-review” label appears on dozens of issues, indicating a reviewer bottleneck.

## Feature Requests & Roadmap Signals
Multiple enhancements tagged with `clawsweeper:no-new-fix-pr` and maintained by the community suggest future roadmap items:

- **#75** – Linux/Windows desktop apps (most upvoted issue)  
  *Likely timeline:* High community demand may push this to a next major release.
- **#13583** – Pre-response enforcement hooks  
  *Likely timeline:* Under active design with product-decision needed.
- **#10659** – Masked secrets for API keys  
  *Likely timeline:* Security-critical, may land in a mid-cycle patch.
- **#38568** – Inject context window percentage into system prompt  
  *Likely timeline:* Lower priority (P3), but simple to implement.
- **#9912** – Max turns / max tool calls configuration  
  *Likely timeline:* P2, could appear in next version if contributors pick it up.
- **#10142** – `session:end` internal hook event  
  *Likely timeline:* P2, useful for workflow orchestration – may be included in upcoming hook enhancements.

These features align with the project’s stated goals of improving agent control, security, and platform coverage.

## User Feedback Summary
**Common pain points** expressed today:

- **Platform gap**: The absence of Linux and Windows clawdbot apps remains the single most requested feature (#75).
- **Performance regressions**: Users are frustrated by the `doctor --fix` slowdown (#85333) and general performance degradation in recent updates.
- **Security concerns**: Several reports highlight the risk of API key exposure (#10659) and the inability to hide tools from agents (#97911).
- **Accessibility**: Screen‑reader users report unusable streaming updates (#65538).
- **Channel-specific bugs**: Telegram, Discord, LINE, WhatsApp, and QQBot all show stability issues after recent plugin unbundling (#92516, #84092, #88955).

**Positive signals**: The community actively contributes fix PRs (e.g., many bounded‑read PRs from `sunlit-deng`), and the project’s response to critical regressions (P1 labels, linked PRs) shows a responsive maintainer team despite the backlog.

## Backlog Watch
The following important issues and PRs have been open for extended periods and lack recent maintainer attention:

- **#75** – Linux/Windows apps (open since Jan 2026, ~7 months) – no maintainer activity beyond labeling.  
  [View Issue](https://github.com/openclaw/openclaw/issues/75)

- **#85333** – Doctor performance regression (open since May 2026, ~2 months) – still awaiting live repro or fix.  
  [View Issue](https://github.com/openclaw/openclaw/issues/85333)

- **#13583** – Pre-response enforcement hooks (open since Feb 2026, ~5 months) – needs product decision.  
  [View Issue](https://github.com/openclaw/openclaw/issues/13583)

- **#10659** – Masked secrets (open since Feb 2026, ~5 months) – needs security review and product decision.  
  [View Issue](https://github.com/openclaw/openclaw/issues/10659)

- **#65538** – Accessibility screen‑reader bug (open since Apr 2026, ~3 months) – no linked fix PR.  
  [View Issue](https://github.com/openclaw/openclaw/issues/65538)

- **#90840** – Subagent raw output leak (open since Jun 2026, ~1.5 months) – no fix PR yet.  
  [View Issue](https://github.com/openclaw/openclaw/issues/90840)

- **PR #104690** – Teams session reset fix (open since Jul 11, 2026) – tagged `status: 👀 ready for maintainer look` but not yet merged.  
  [View PR](https://github.com/openclaw/openclaw/pull/104690)

Many other issues carry the `clawsweeper:needs-maintainer-review` label (e.g., #92516, #87318, #86031), signaling a maintainer capacity gap that could delay resolution of critical bugs and features.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant Ecosystem

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a period of extremely high development velocity, driven by community demand for agent autonomy, multi-platform support, and enterprise-grade reliability. Seven major projects in this analysis show combined daily activity of over 600 issues and 750 pull requests, with the most active projects (OpenClaw, Hermes Agent, IronClaw, ZeroClaw) each processing 40–50+ updates per day. The landscape is fragmenting along target-user lines: general-purpose backends (OpenClaw, Hermes Agent) compete on breadth, while specialized forks like PicoClaw and NanoBot focus on lightweight deployment and multi-channel connectivity respectively. A clear industry pattern is emerging around stability hardening—bounded reads, OOM guards, timeout management—as projects transition from feature-velocity to production-readiness phases. Cross-platform support (Windows, Linux desktop apps) and security (credential isolation, masked secrets) are the most vocalized gaps across nearly every project.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Health Score | Notes |
|---------|---------------------|-------------------|---------------|--------------|-------|
| **OpenClaw** | 410 | 500 | None (latest: 2026.7.1) | ⚠️ Moderate | High volume but maintainer bottleneck; 259 open issues, 303 open PRs |
| **Hermes Agent** | 50 | 50 | None | ✅ Good | 49 open issues; 13 PRs merged; steady issue→fix turnaround |
| **IronClaw** | 50 | 47 | None (PR #5598 open for release) | ✅ Good | Intense v1-launch push; 36 open issues, 24 open PRs |
| **ZeroClaw** | 50 | 50 | None | ✅ Good | 10 issues closed, 13 PRs merged; steady progress |
| **CoPaw (QwenPaw)** | 31 | 50 | **Yes** (v2.0.0.post4) | ✅ Good | 6 issues closed, 15 PRs merged; active post-v2.0 stabilization |
| **NanoBot** | 6 | 40 | None | ✅ Excellent | 2 issues closed, 40 PRs merged; rapid bug-fix velocity |
| **PicoClaw** | 4 | 5 | None | ⚠️ Moderate | 4 open issues, 4 open PRs; low velocity, some items stale |
| **LobsterAI** | 0 (1 closed) | 5 merged | None | ✅ Good | Clean day; all 5 PRs merged, 1 stale issue closed |
| **NullClaw** | 1 (closed) | 1 (merged) | None | ✅ Excellent | 1 bug reported & fixed same day; minimal backlog |
| **NanoClaw** | 1 | 3 | None | ⚠️ Fair | No PRs merged; 3 open PRs stale or awaiting review |
| **Moltis** | 1 | 1 | None | ⚠️ Fair | 1 feature request (#574) stale 3+ months; low contributor momentum |
| **TinyClaw** | 0 | 0 | None | ⬜ Dormant | No activity |

**Key observations:**
- OpenClaw dominates raw volume (410 issues, 500 PRs) but the open/closed ratio (259 open vs 151 closed issues) signals a review bottleneck.
- NanoBot has the best fix-to-report ratio: 40 PRs merged against only 6 issues updated, indicating aggressive stability work.
- NullClaw demonstrates ideal lifecycle: 1 bug → 1 fix → merged same day.
- TinyClaw and ZeptoClaw are effectively dormant.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale of community**: 410 issues and 500 PRs/day dwarfs all peers. The nearest competitor (Hermes Agent) operates at 10–12% of OpenClaw's volume.
- **Platform breadth**: OpenClaw explicitly tracks macOS, Windows, Linux, Android, Wear OS, and multiple chat channels. No other project covers this spectrum.
- **Feature density**: Pre-response enforcement hooks (gate mechanism), masked secrets, session-scoped model presets, and subagent systems are all actively developed simultaneously.
- **Maturity**: Reference implementation status means it attracts the most security/scalability-focused contributions (bounded reads, timeout hardening, memory caps).

### Technical Approach Differences
- **Architecture**: OpenClaw uses a modular monolith with plugin-based agents and a separate Control UI. Hermes Agent leans into a desktop-first architecture with native UI SDKs (TUI, Desktop app). IronClaw is a Rust-based re-architecture (Reborn) emphasizing error recovery contracts.
- **Plugin model**: OpenClaw's `claw-hooks` system (pre-tool, pre-response) is more prescriptive than NanoBot's subagent delegation model. CoPaw uses a mission-based approach with governance audit logging.
- **Security model**: OpenClaw's masked secrets (#10659) and pre-response enforcement hooks (#13583) represent the most structured security ergonomics in the ecosystem.

### Community Size Comparison
| Metric | OpenClaw | Hermes Agent | ZeroClaw | NanoBot |
|--------|----------|---------------|----------|---------|
| Daily issues | 410 | 50 | 50 | 6 |
| Daily PRs | 500 | 50 | 50 | 40 |
| Most-upvoted issue | #75 (80👍) | #12238 (19👍) | N/A¹ | None |
| Release cadence | Monthly (last: 2026.7.1) | No recent release | v0.9.0 target | No recent release |

¹ZeroClaw's community uses reaction counts less frequently; most engagement is in RFC discussions (7–11 comments).

**Verdict:** OpenClaw is the undisputed community hub by volume, but its backlog bottleneck (259 open issues, 303 open PRs) suggests it risks becoming a victim of its own popularity. Projects like NullClaw (1 issue fixed same day) offer a more responsive experience for niche users.

---

## 4. Shared Technical Focus Areas

The following requirements appear across **three or more** projects, indicating ecosystem-wide priorities:

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Desktop apps for Windows/Linux** | OpenClaw (#75), Hermes Agent (TUI/Desktop), PicoClaw (gateway mode) | Community demand for native non-macOS support. OpenClaw's issue #75 has 80👍 (highest across all projects). |
| **Multi-agent / subagent collaboration** | NanoBot (#5000), IronClaw (Reborn subagent lifecycle), OpenClaw (#90840 subagent leak) | Users want agents to delegate work to specialized sub-agents with persistent state and shared memory. NanoBot's proposal (#5000) is the most ambitious. |
| **Security: credential isolation & secrets management** | OpenClaw (#10659 masked secrets), NanoClaw (#3118 OAuth isolation docs), ZeroClaw (#7141 OIDC auth), Hermes Agent (#12651 .env sanitizer) | Users consistently report exposure risks: API keys visible to agents, OAuth credentials shared across groups, .env files not sanitized. |
| **Performance regressions & OOM prevention** | OpenClaw (#85333 doctor slowdown), CoPaw (#6307 v2.0 overhead), NanoBot (null-crashes), LobsterAI (#2375 OOM guard), ZeroClaw (#6916 subprocess OOM) | Recent releases introduced latency and memory regressions. Every project has at least one ongoing performance investigation. |
| **Cross-platform test coverage** | ZeroClaw (#7462 - 74 Windows failures), Hermes Agent (#45279 macOS installer shadowing), CoPaw (#6361 Windows console tests) | Windows and Linuxbrew-specific bugs persist. CI pipelines are Linux-only for most projects. |
| **Observability & monitoring** | OpenClaw (OTel trace correlation), ZeroClaw (#6641 turn-level OTel), IronClaw (error recovery observations), LobsterAI (#2375 OOM classification) | Growing demand for structured logging, traced turns, and failure classification for production operations. |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | IronClaw | ZeroClaw | CoPaw |
|-----------|----------|---------------|---------|----------|----------|-------|
| **Target user** | Power users, enterprises | Desktop-first developers | Multi-platform chat users | Enterprise with crypto/Near AI | Tinkerers, embedded (ESP32) | Developers building multi-agent workflows |
| **Primary language** | Python/TypeScript | Rust/TypeScript | Python | Rust | Rust | Python |
| **Key differentiator** | Largest plugin ecosystem | Native desktop UX (TUI, Wake word) | Rapid bug-fix cycle (40 PRs/day) | Blockchain ready (attested signing) | Session-persistence backends (Oracle, Db2) | Mission-based governance & audit |
| **Release maturity** | Stable (2026.7.1) | Pre-release | Stable (no recent release) | Pre-release (Reborn refactor) | Pre-release (v0.9.0 target) | Stable (v2.0.0.post4) |
| **Architecture** | Modular monolith | Desktop-native (SDK) | Plugin + subagent | Reborn microservices | Monolithic + firmware | Agent + mission engine |
| **Unique features** | Pre-response enforcement hooks, masked secrets, Wear OS tile | Wake word processing, OAuth status warnings | Session-scoped model presets, Feishu/Slack native formatting | Error recoverability contract, ProductSurface routing | Git-catalog skill install, broad-channel measurement builds | Governance audit logging, mission parser |
| **Community engagement style** | Issue-heavy, contributor-driven | PR-driven, maintainer-moderated | Rapid contributor response (same-day fix) | Epic-driven (v1-launch-check) | RFC-heavy (A2A, OIDC) | High new-contributor activity |

**Key insight:** The ecosystem is splitting into two tiers: **general-purpose platforms** (OpenClaw, Hermes Agent, ZeroClaw) competing on breadth, and **specialized tools** (NanoBot for chat channels, PicoClaw for lightweight IoT, CoPaw for governed multi-agent) optimizing for specific use cases. IronClaw is an outlier—enterprise-focused (blockchain, admin OAuth, attested signing) but still early.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: High Velocity / Early Stage (rapid iteration, high issue density)**
- **OpenClaw** — 410 issues/day, 500 PRs/day. Massive scale but risk of maintainer burnout. The project is in a "feature firehose" phase where stability fixes are playing catch-up.
- **Hermes Agent** — 50 issues + 50 PRs/day. Balanced; 13 of 50 PRs merged today. High contributor activity with responsive maintainers.
- **IronClaw** — 50 issues + 47 PRs/day. Intense pre-release consolidation. 6 PRs merged today. EPIC-driven development indicates structured project management.
- **ZeroClaw** — 50 issues + 50 PRs/day. 13 PRs merged. RFC-heavy governance, but steady feature delivery (session backends, OTel).
- **CoPaw** — 31 issues + 50 PRs/day. 15 PRs merged. Just released v2.0.0.post4; post-release stabilization is intense.

**Tier 2: Stable / Mature (lower volume, consistent delivery)**
- **NanoBot** — 6 issues + 40 PRs/day. Exceptionally high fix throughput. Clean backlog. Project is mature but actively hardening.
- **LobsterAI** — 0 issues, 5 PRs merged. Low volume but all work is quality-of-life and stability. Clean backlog.
- **NullClaw** — 1 issue, 1 PR merged. Minimal activity but perfect lifecycle (report → fix → merge same day). Applies to maintainers.

**Tier 3: Niche / Slow (moderate activity, some stale items)**
- **PicoClaw** — 4 issues, 5 PRs. Critical Matrix reconnection bug (#3203) unresolved. Stale PRs (DeltaChat refactor since July 3). Risk of bitrot.
- **NanoClaw** — 1 issue, 3 PRs. No PRs merged today. Security documentation defect (#3118) unanswered. PR #2877 (Telegram rich rendering) stale 1 month.
- **Moltis** — 1 issue, 1 PR. Feature request #574 dormant 3.5 months. Low contributor momentum.

### Maturity Indicators
| Maturity Signal | Projects Exhibiting |
|-----------------|---------------------|
| **Release cuts within 24h** | CoPaw (v2.0.0.post4) |
| **Same-day bug → fix → merge** | NullClaw |
| **Active PRs > 2 weeks stale** | PicoClaw (#3222), NanoClaw (#2877), ZeroClaw (#9075, #8781) |
| **Maintainer bottleneck flagged** | OpenClaw (`clawsweeper:needs-maintainer-review` label), PicoClaw |
| **Breaking changes in active development** | ZeroClaw (PR #8638 - git-catalog replacement), IronClaw (Reborn refactor) |

---

## 7. Trend Signals

The following industry-relevant trends emerge from community feedback across all projects:

### 1. Multi-Agent Collaboration Is the Next Frontier
NanoBot's Issue #5000 ("evolve subagent system toward multi-agent collaboration") with its call for persistent identities and inter-agent communication signals that users have outgrown simple delegation. IronClaw's error recoverability contracts (run survives + model gets corrective info) and OpenClaw's subagent raw output leak (#90840) show this is an active pain point across the ecosystem. **Value for developers**: Architecting subagent systems with recoverability and state sharing is rapidly becoming table stakes.

### 2. Cross-Platform Is Non-Negotiable, But Delivery Is Lagging
OpenClaw's #75 (Linux/Windows desktop apps, 80👍) and ZeroClaw's #7462 (74 Windows test failures) represent the single largest community friction point. Users expect agent software to run everywhere their workflows do. **Value for developers**: Prioritizing cross-platform CI/CD from the start (rather than adding desktop support post-hoc) reduces long-term technical debt.

### 3. Security Concerns Shift From "Can It Be Hacked?" to "Can the Agent Protect Itself?"
OpenClaw's masked secrets (#10659) and pre-response enforcement hooks (#13583), NanoClaw's OAuth isolation docs (#3118), and Hermes Agent's .env sanitizer (#12651) all point to a maturing threat model: users now worry about their own agents leaking credentials via prompt injection, not just external attackers. **Value for developers**: Implementing system-level agent gating (cannot read API keys it uses) and audit trails is a market differentiator.

### 4. "Intelligent Model Routing" Becomes a Core UX Expectation
Moltis's #574 (model routing per topic) and CoPaw's #6318 (per-conversation model selection) show users want to dynamically assign LLMs based on task complexity, cost, or latency

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-23

## 1. Today's Overview
The project maintained a very high activity level, with **40 pull requests merged/closed** in the last 24 hours and **6 issues updated**, of which 2 were closed. The team focused heavily on stability: numerous null-pointer and type-error fixes landed for the cron store, pairing system, Feishu/Slack markdown rendering, and background agent turns. At the same time, several substantial features advanced toward merge, including session-scoped model presets (PR #4866, closed), OAuth status warnings (PR #4689), and SQLite-backed WebUI history indexing (PR #5003). No new releases were cut today, but the volume of merged work suggests a release candidate may be near.

## 2. Releases
None — no new releases in the last 24 hours.

## 3. Project Progress
**40 pull requests were merged or closed today.** Notable completions:
- **[PR #4866] feat(agent): make model presets session-scoped**  
  Makes named model-preset selection per-session, enforces a single immutable `LLMRuntime` per turn, and keeps defaults config-driven. This is a significant architecture improvement.
- **[PR #4948] (Bug) WebUI visibility lost on late subagent completion** — closed.  
  The bug where a subagent completing after max injection cycles started a system turn without WebUI delivery lifecycle was fixed.
- **[PR #4934] (Bug) Qwen models expose thinking/reasoning content** — closed.  
  The DashScope provider now filters out reasoning tokens from chat responses.

Multiple critical bug-fix PRs were opened and likely merged quickly (see §5).

## 4. Community Hot Topics
- **[Issue #5000] [OPEN] Proposal: evolve subagent system toward multi-agent collaboration**  
  Comments: 4 — highest engagement issue. The author argues the current subagent model is merely background task delegation; they propose persistent identities, shared state, and inter-agent communication. This signals strong community interest in true multi-agent architectures, a frequent roadmap wish for agent frameworks.
  [#5000](https://github.com/HKUDS/nanobot/issues/5000)

- **[PR #5017] [OPEN] Show actual fallback model in WebUI**  
  Adds real-time model-attempt events to the composer badge so users can see which model handled each request (including fallback). This was highly requested in earlier feedback about model transparency.
  [#5017](https://github.com/HKUDS/nanobot/pull/5017)

- **[PR #5003] [OPEN] Perf: index conversation history in SQLite**  
  Replaces runtime JSONL reads with an indexed SQLite WAL model, batch-writes on a dedicated thread. Performance improvements are a recurring community concern, and this addresses WebUI latency directly.
  [#5003](https://github.com/HKUDS/nanobot/pull/5003)

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | **Dream batches starve later history** (Issue #5041) — completed no-op Dream runs do not advance cursor, causing indefinite repetition of first batch. Distinct from previous issue #4055. | Open | None yet |
| **High** | **MCP tool schema with non-`#/$defs/` $ref disables model on Kimi/Moonshot** (Issue #5040) — strict providers reject verbatim forwarded schemas. | Open | None yet |
| **High** | **Null `pairing.json` channel list crashes `is_approved`** | Fixed | [#5044](https://github.com/HKUDS/nanobot/pull/5044) |
| **High** | **Null `runHistory` elements in cron store cause TypeError and quarantine** | Fixed | [#5043](https://github.com/HKUDS/nanobot/pull/5043) |
| **High** | **Null `schedule` in `jobs.json` drops all sibling jobs** | Fixed | [#5042](https://github.com/HKUDS/nanobot/pull/5042) |
| **Medium** | **Empty background turns show placeholder text instead of staying silent** (PR #4988) — affects cron/triggers. | Fix open | [#4988](https://github.com/HKUDS/nanobot/pull/4988) |
| **Medium** | **Feishu: fenced markdown tables become card tables** (PR #5046) | Fix open | [#5046](https://github.com/HKUDS/nanobot/pull/5046) |
| **Medium** | **Slack: fenced markdown tables rewritten to key/value lines** (PR #5045) | Fix open | [#5045](https://github.com/HKUDS/nanobot/pull/5045) |
| **Low** | **Media path conflicts with workspace restrictions in Feishu** (Issue #5028) — Chinese user reports files uploaded via Feishu are stored outside workspace-constrained directories, causing access failures. | Open | None yet |

Two high-severity bugs (Dream starve, MCP schema) remain unfixed and could block production usage for users relying on Dream or Kimi/Moonshot providers. The null-pointer cluster in cron and pairing has been rapidly fixed with multiple PRs from the same author (santhreal).

## 6. Feature Requests & Roadmap Signals
- **Multi-agent collaboration** (Issue #5000) — strong signal from the community. Likely to be the subject of a future enhancement milestone; not yet in any PR.
- **xAI Grok OAuth with X Search** (PR #5035) — adds new provider integration. If merged, it will expand supported LLMs significantly.
- **Parallel Search MCP preset** (PR #5047) — optional, API-key-free retrieval. Suggests growing MCP ecosystem support.
- **Telegram multi-bot support** (PR #5033) — allows multiple bot instances in WebUI; addresses enterprise/team deployments.
- **Configurable idle compaction scan interval** (PR #5036) — Raspberry Pi users report high CPU usage; this fix is eagerly anticipated.
- **PWA support with mobile swipe gestures** (PR #4494) — open since June 24, still in review; mobile community is waiting.

**Predictions for next version:**
- Session-scoped model presets (just merged)
- OAuth status warnings (PR #4689, trending)
- SQLite history indexing (PR #5003, high priority p1)
- Telegram multi-bot (PR #5033, p1)
- Likely at least one of the xAI Grok or Parallel Search features.

## 7. User Feedback Summary
- **Pain point – Workspace/media conflict (Issue #5028):** A Feishu user reported that uploaded files are placed outside workspace-restricted directories, making them inaccessible. They expect files to be accessible even when workspace limits are enabled. This reveals a disconnect between the media storage design and workspace security features.
- **Pain point – Dream starvation (Issue #5041):** A user discovered that completed no-op Dream batches block all later history. This defeats the purpose of Dream for progressive memory consolidation.
- **Pain point – MCP $ref schema rejection (Issue #5040):** A user hit a provider-specific schema validation error that disables the entire model. This is a compatibility-breaking issue for anyone using MCP tools with Kimi/Moonshot.
- **Satisfaction – Qwen thinking fix (Issue #4934 closed):** Users welcomed the removal of reasoning content from chat responses; the bug had exposed model internals.
- **Satisfaction – Performance improvements:** PR #5003 (SQLite indexing) and PR #5036 (idle compaction interval) received positive comments on reducing latency and CPU load, addressing common complaints about WebUI slowness and Raspberry Pi resource usage.

## 8. Backlog Watch
The following issues/PRs have been open for extended periods without clear maintainer resolution:

- **[PR #4439] feat: add read-only search_history tool** — opened June 21, 2026. Branch appears to have merge conflicts. The tool would provide memory recall, a core feature for agent continuity. No recent maintainer comment.
  [#4439](https://github.com/HKUDS/nanobot/pull/4439)

- **[PR #4494] PWA support and mobile swipe gestures** — opened June 24, 2026. A high-value mobile UX improvement that has stalled despite being reopened. Multiple reviewer requests for changes appear unanswered.
  [#4494](https://github.com/HKUDS/nanobot/pull/4494)

- **[PR #4689] OAuth status and expiry warnings** — opened July 3, 2026. While there is community interest, the PR has been flagged with conflicts and no maintainer feedback since early July.
  [#4689](https://github.com/HKUDS/nanobot/pull/4689)

- **[Issue #4440] (linked to #4439)** — the original feature request for search_history tool. Still open.
  [#4440](https://github.com/HKUDS/nanobot/issues/4440)

These items have been untouched for weeks and likely require maintainer triage or assignment. Given the recent high volume of merged PRs, the team seems to be prioritizing other areas (stability, WebUI, new providers).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-23

## 1. Today's Overview

Project activity remains very high, with 50 issues and 50 pull requests updated in the last 24 hours. The vast majority (49) of updated issues remain open, indicating sustained bug reporting and feature discussion. Only one issue was closed in the period. On the PR side, 13 out of 50 were merged or closed, reflecting active code integration. No new releases were published, but the repository shows steady progress across multiple components—especially desktop session stability, gateway reliability, and user-facing tooling. The community continues to surface edge-case bugs and request ergonomic improvements.

## 2. Releases

No new releases were recorded in the last 24 hours.

## 3. Project Progress

Thirteen pull requests were merged or closed today. Notable fixes that advanced into `main` include:

- **Desktop session rendering fixes:** `fix(desktop): prevent stale optimistic tails after compression` (#69682) and `fix(desktop): bound optimistic user-row preservation to the in-flight tail` (#68985) address a long-thread re-stacking bug (#68979) where past user messages appeared below recent assistant replies after context compression.
- **Composer UI polish:** `fix(desktop): show steer glyph in busy composer` (#69612) restores the steering-wheel icon for typed corrections and introduces a separate queue action slot.
- **Automated formatting:** Two auto-fix PRs from the `hermes-seaeye[bot]` (#69683, #69677) were merged, keeping codebase style consistent.

Other ongoing work includes gateway health monitoring (#64536), wake-word support (#53378), and security hardening for role-pretend patterns (#67006), all still open but actively reviewed.

## 4. Community Hot Topics

The most engaging issues and PRs reflect core user workflows:

- **Dashboard Chat clipboard & image paste** ([#24860](https://github.com/NousResearch/hermes-agent/issues/24860), 12 comments, 4 👍) – Users report that Ctrl+V does not paste text and image paste is unsupported in the TUI dashboard. This affects the primary chat interface and has broad impact.
- **Cron reasoning effort overrides** ([#23524](https://github.com/NousResearch/hermes-agent/issues/23524), 7 comments) – Request for per-job reasoning effort configuration, highlighting that different scheduled tasks (email scan vs. deep analysis) have vastly different compute needs.
- **Desktop session switching broken after non-chat tabs** ([#66875](https://github.com/NousResearch/hermes-agent/issues/66875), 6 comments) – Navigating to Plugins/Artifacts tabs and back breaks the ability to click the most recent session.
- **Telegram large upload timeouts** ([#62936](https://github.com/NousResearch/hermes-agent/issues/62936), 6 comments) – Environment variable `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` has no effect on media uploads, causing failures for files >15 MB.
- **Automatic backup & version control** ([#12238](https://github.com/NousResearch/hermes-agent/issues/12238), 5 comments, 19 👍) – This long-standing feature request for native backup of agent state (memories, skills, conversations) has the highest reaction count, indicating strong user demand for data persistence safety.

Underlying needs: users want reliable core interactions (paste, session management, media uploads) plus flexible configuration for advanced use cases.

## 5. Bugs & Stability

New and updated bugs reported in the last 24 hours are ranked by severity:

**P1 (Critical):**
- **Leaked SQLite connections** – PR #69681 `fix(gateway,tools,agent): close leaked SQLite connections in delivery…` addresses a file-descriptor leak in three durable SQLite ledgers. The fix is already open. No PR comment count available, but the severity label is P1.

**P2 (High):**
- **Desktop SSH remote mode broken with non-default profile** ([#69551](https://github.com/NousResearch/hermes-agent/issues/69551), 3 comments) – Token-path validation resolves against profile-scoped `HERMES_HOME` while the client hardcodes `~/.hermes/desktop-ssh`. No fix PR yet.
- **Linuxbrew-installed CLI tools missing from terminal PATH** ([#69625](https://github.com/NousResearch/hermes-agent/issues/69625), 2 comments) – Hermes started under service manager fails to find tools in `/home/linuxbrew/.linuxbrew/bin`.
- **Queued large image causes reconnect loop and localStorage bloat** ([#69638](https://github.com/NousResearch/hermes-agent/issues/69638), 1 comment) – Desktop app can enter persistent reconnect loop when base64 image exceeds WebSocket message limit, persisting tens of MB.
- **Provider error chunk misclassified as empty stream** ([#65631](https://github.com/NousResearch/hermes-agent/issues/65631), 3 comments) – OpenAI-compatible providers returning error in SSE streaming cause infinite retry.
- **Desktop long-thread reconciliation bug** ([#68979](https://github.com/NousResearch/hermes-agent/issues/68979)) – Already fixed by #68985 (merged).

**P3 (Medium):**
- **Queued messages appear with timer instead of queue drawer** ([#69660](https://github.com/NousResearch/hermes-agent/issues/69660), 1 comment) – After recent PR #63104 updates.
- **Kanban sticky tasks not preserved** – PR #69679 `fix(kanban): keep initial blocked tasks sticky` addresses a behavior regression.

Several P2 bugs have associated fix PRs (e.g., #69681, #69638 has no fix yet). The project maintains a steady cadence of issue→PR turnaround.

## 6. Feature Requests & Roadmap Signals

Notable feature requests and PRs that may land in the next version:

- **Per-cron reasoning effort overrides** ([#23524](https://github.com/NousResearch/hermes-agent/issues/23524)) – High relevance for power users; likely to be implemented given multiple explicit use cases.
- **Automatic backup & version control** ([#12238](https://github.com/NousResearch/hermes-agent/issues/12238), 19 👍) – Strong community signal. Could become a priority for data-loss prevention.
- **"Hey Hermes" wake word** – PR #53378 (open, feature) adds on-device wake word for CLI/TUI/Desktop. If merged, this would be a major UX differentiator.
- **Gateway health OTLP export** – PR #64536 (open) enables enterprise monitoring. Likely to be merged for ops-focused users.
- **Delegation toolset isolation advertisement** ([#66268](https://github.com/NousResearch/hermes-agent/issues/66268)) – Would improve API client discovery of child isolation capabilities.
- **Browser tool gating for non-interactive sessions** ([#66393](https://github.com/NousResearch/hermes-agent/issues/66393)) – Prevents silent failures when `agent-browser` is not installed.

Predictions: The wake word PR and the backup feature (if a champion emerges) have the highest chance of inclusion in the next release based on community interest and PR maturity.

## 7. User Feedback Summary

User pain points center on **reliability of core interactions**:
- Clipboard and image paste not working in dashboard TUI (#24860) – a daily driver bug.
- Telegram media uploads timing out (#62936) – affects multi-platform users.
- Desktop session state corruption after tab switching (#66875) and after context compression (#68979) – hurts long-thread users.
- Keyboard shortcuts on Desktop ignoring Dvorak layout (#46369) – accessibility concern.
- macOS installer shadowing Homebrew/npm (#45279) – annoys developer users.
- Windows concurrent read causing writes to silently drop (#57775) – data integrity risk.

Satisfaction indicators: Users are actively contributing fixes (e.g., PR #69685 for Discord model switch timeout, PR #68799 for Microsoft Graph webhook). The high number of open issues (49) suggests users are engaged and reporting bugs rather than abandoning the project.

## 8. Backlog Watch

Several important issues have been open for weeks or months without resolution:

| Issue | Created | Last Update | Days Open | Notes |
|-------|---------|-------------|-----------|-------|
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) – Auto backup & version control | 2026-04-18 | 2026-07-22 | 96 | 19 👍, no assignee |
| [#21341](https://github.com/NousResearch/hermes-agent/issues/21341) – Nix module `documents` option wrong paths | 2026-05-07 | 2026-07-22 | 77 | Affects NixOS users |
| [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) – `.env` sanitizer does not remove `KEY=***` placeholders | 2026-04-19 | 2026-07-22 | 95 | Credential safety issue |
| [#43277](https://github.com/NousResearch/hermes-agent/pull/43277) – Auth cooldown respect in codex pool (PR) | 2026-06-10 | 2026-07-22 | 43 | Unmerged, labelled P2 |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) – Auto backup & version control | 2026-04-18 | 2026-07-22 | 96 | 19 👍, no assignee |

These items could benefit from maintainer triage or community contribution. The backlog is not severe but includes low-severity, high-value requests that may improve user retention.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

## Today's Overview

PicoClaw shows **moderate activity** with 4 issues and 5 pull requests updated in the last 24 hours. No new releases were cut. The project is seeing a mix of bug reports, feature requests, and cleanup work. A critical bug in the Matrix channel’s sync loop remains unresolved, while a stale hook bug (#3258) and a new DingTalk media support fix (#3283) highlight ongoing platform integration efforts. Community interest is focused on reconnection resilience, IRC message handling, and gateway session management. Maintenance velocity appears steady but many older items are becoming stale.

## Releases

No new releases today.

## Project Progress

Only **one PR was closed/merged** in the last 24 hours:

- **[#3285 – docs: remove picopaw](https://github.com/sipeed/picoclaw/pull/3285)** (closed) – A revert of a prior documentation change (#3096). Minor housekeeping.

Other PRs remain open, including the long-standing `deltachat` refactor (#3222) and Bedrock prompt caching (#3163), both now stale.

## Community Hot Topics

### Most Active Issues

1. **#3203 – [BUG] Matrix sync loop has no reconnection logic — silent death after network/server disruption**  
   - **5 comments, 2 👍**  
   - **Link:** [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)  
   - **Underlying need:** Users running Matrix bots need robust reconnection to avoid silent failures; current workaround (manual restart) is unacceptable. This is the highest-priority community topic.

2. **#3258 – [BUG] Process Hook `before_tool` modify not working: decision field discarded, args misparsed**  
   - **1 comment**  
   - **Link:** [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258)  
   - **Underlying need:** Hook-based tool modification is a core extensibility feature. The deserialization defect breaks custom workflows, eroding trust in hook capabilities.

3. **#3257 – Add stateless/no-history mode for gateway sessions**  
   - **1 comment**  
   - **Link:** [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257)  
   - **Underlying need:** Privacy-conscious users want gateway mode (used for multi-channel deployment) to support ephemeral conversations without session persistence, similar to CLI’s `--session` flexibility.

4. **#3287 – [Feature] Better support long messages in IRC**  
   - **0 comments (new)**  
   - **Link:** [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)  
   - **Underlying need:** IRCv3 clients cannot handle messages >512 bytes; PicoClaw currently splits them, losing context. Users need cohesive multi-line message handling.

### Most Active PRs

No PRs have high comment counts, but note:

- **#3222 – refactor(deltachat): cleanup implementation, documentation -200LOC** (stale, last updated 2026-07-22) – [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) – Large cleanup, awaiting review.
- **#3163 – feat(bedrock): leverage Converse prompt caching** (stale, last updated 2026-07-22) – [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) – Cost-saving feature for AWS Bedrock users.

## Bugs & Stability

### High Severity
- **#3203 – Matrix sync loop silent death** (open, no fix PR yet)  
  After network or server disruption, the long-poll `/sync` loop dies permanently without reconnection. Because the main process stays alive, `Restart=on-failure` does not help. Users lose the bot silently. **No fix is in review.**

### Medium Severity
- **#3258 – `before_tool` hook deserialization defect** (open, stale)  
  The `decision` field is discarded and `args` are misparsed, rendering tool modification hooks broken. Affects users relying on custom `rtk_rewrite_hook.py` scripts.

### Low Severity
- **#3286 – fix: update Go and x/text for govulncheck** (open, fresh) – [PR #3286](https://github.com/sipeed/picoclaw/pull/3286)  
  Security vulnerability fix required upstream; preventive maintenance.

### Fixed/Closed
- **#3285** – Removed erroneous documentation reference (picopaw).

## Feature Requests & Roadmap Signals

The following user-requested features align with possible next-version candidates:

- **Stateless/no-history gateway mode** (#3257) – Low risk, high demand for privacy-centric deployments.
- **IRC long message support** (#3287) – Adds IRCv3 multi-line awareness; relatively isolated change.
- **DingTalk picture/image inbound** (#3283) – Already a pending PR, likely to land soon.
- **Bedrock prompt caching** (#3163) – A performance/cost optimization waiting for review.

Prediction: The next minor release (v0.3.2) may include the DingTalk fix, the Go/x/text security update, and possibly the IRC feature if maintainers pick it up. Stateless gateway mode is more architectural and may take longer.

## User Feedback Summary

| Pain Point / Use Case | Sentiment |
|-----------------------|-----------|
| Matrix bot unreliable after network blips | Negative – users frustrated by silent failures |
| Hook system broken for tool modification | Negative – blocks critical custom workflows |
| No ephemeral sessions in gateway mode | Moderate – privacy/cleanliness concern |
| IRC messages split incorrectly | Moderate – breaks readability for long outputs |
| DeltaChat refactor still pending | Neutral – community waiting for cleaner integration |

Overall, users express **dissatisfaction with reliability** (Matrix) and **regression in hook functionality**, while appreciating new platform support (DingTalk). The staleness of several PRs suggests maintainer bandwidth may be stretched.

## Backlog Watch

The following items are **stale or long-unanswered** and urgently need maintainer attention:

1. **#3203 – Matrix reconnection** (open since July 2, no fix PR) – Critical bug affecting real-world deployments.
2. **#3258 – Hook deserialization defect** (stale since July 15, only 1 comment) – Pending triage or reproduction request.
3. **#3257 – Stateless gateway mode** (stale since July 15, no follow-up) – Feature request with clear use case.
4. **#3222 – DeltaChat refactor PR** (stale, last updated July 22 but unreviewed since July 3) – Large cleanup, risks bitrot.
5. **#3163 – Bedrock caching PR** (stale since June 23) – Performance improvement, needs review.

**Recommendation:** Prioritize #3203 and #3258 for the next patch release to restore core reliability and extensibility.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-23

## Today’s Overview
Activity remains moderate with one open issue and three open pull requests updated in the last 24 hours, but no merged PRs or new releases. The single issue (#3118) highlights a security documentation discrepancy that could mislead self-hosted users about credential isolation boundaries. Two feature-oriented PRs continue to mature—a Waybar status indicator skill and native rich rendering for Telegram—while a critical WhatsApp sender identity bug (#3070) awaits review. Overall, the project appears stable but in a lull of integration, with maintainer attention likely needed to advance open work and address the security concern.

## Releases
No new releases have been published in the reporting period. The latest available version remains unchanged.

## Project Progress
No pull requests were merged or closed today. Three open PRs received updates:
- **[#3070 – Fix WhatsApp sender identity divergence between Baileys and Cloud paths](https://github.com/nanocoai/nanoclaw/pull/3070)** (updated 2026-07-22) – This bug-fix PR resolves a data inconsistency where the same phone number is assigned different user IDs depending on the WhatsApp channel path. The fix ensures unified identity handling.
- **[#3117 – feat(skill): add-omarchy-statusbar](https://github.com/nanocoai/nanoclaw/pull/3117)** (created/updated 2026-07-22) – Adds a Waybar status indicator utility skill for monitoring NanoClaw from the desktop.
- **[#2877 – feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage](https://github.com/nanocoai/nanoclaw/pull/2877)** (updated 2026-07-22) – Implements richer message formatting using Telegram’s latest Bot API method, improving channel output quality.

## Community Hot Topics
Only one issue has been active in the last 24 hours, and both PRs have zero comments or reactions. However, the content itself highlights areas of user concern:
- **Issue #3118 – [OPEN] SECURITY.md overclaims per-group credential isolation**  
  [nanocoai/nanoclaw Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)  
  *No comments or reactions yet.* Underlying need: users relying on the documentation for multi-tenant isolation (e.g., sales vs. support agents) may incorrectly assume OAuth credentials are separated per group, whereas they remain account-level on self-hosted OneCLI. This is a trust and misconfiguration risk.
- **PR #3117 – Waybar status indicator**  
  [nanocoai/nanoclaw PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)  
  The skill targets Linux desktop users who want real-time agent status in their system tray. Low engagement suggests it’s a niche but well-defined addition.
- **PR #2877 – Telegram rich rendering**  
  [nanocoai/nanoclaw PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)  
  Although open since late June, this feature addresses a long-standing request from Telegram channel users for richer message formatting. Its slow progress may indicate implementation complexity or maintainer bandwidth constraints.

## Bugs & Stability
One bug-related issue surfaced today:

**Medium severity – Security documentation overclaim**
- **Issue #3118**: Incorrectly states that OAuth connections are isolated per-group in self-hosted OneCLI setups. This is not a code bug but a documentation error that could lead to unintended credential sharing. No fix PR exists yet. Users should be cautioned to verify actual behavior until the documentation is corrected.

**Low-to-medium severity – WhatsApp sender identity divergence**
- **PR #3070** proposes a fix for a bug where the same phone number is assigned two different user IDs depending on the channel path (Baileys native vs. Cloud). While no crash is reported, the inconsistency could break message history linking or agent routing. The PR is still open and awaiting review/merge.

No crashes, regressions, or other stability issues reported today.

## Feature Requests & Roadmap Signals
The two active feature PRs provide signals for near-term additions:
- **Waybar status indicator (#3117)** – Utility skill for desktop monitoring. Likely to be included in the next minor release if merged, as it follows the skill contribution guidelines.
- **Telegram rich rendering (#2877)** – A more substantial feature leveraging Bot API 10.1. It has been open for nearly a month; its inclusion in a future version depends on code review and testing of API compatibility.
- **Security docs correction (#3118)** – Though not a feature, resolving this discrepancy is high priority and could be accompanied by a patch release once addressed.

## User Feedback Summary
No direct user comments or reactions were recorded in the reported items. However, the content surfaces two latent pain points:
- Self-hosted users may be misled by the security documentation, potentially creating insecure multi-tenant configurations. Dissatisfaction likely exists among users who expected per-group credential isolation.
- WhatsApp users relying on both Baileys and Cloud channels may experience fragmented user identity, disrupting workflows that require consistent mappings.

Positive signals include continued community contributions (two skill PRs in the last three weeks) and the existence of a bug-fix PR (#3070) submitted by a contributor, indicating proactive community involvement in stability.

## Backlog Watch
**Oldest open PR awaiting merge:**
- **[#2877 – Telegram rich rendering](https://github.com/nanocoai/nanoclaw/pull/2877)** – Open since 2026-06-28, last updated 2026-07-23 (today). Despite recent activity (review or force-push?), no maintainer comments are shown. This PR has been pending for nearly a month and should be prioritized to avoid stagnation.

**No long-unanswered issues** are present in the current 24h window; the sole issue (#3118) is only a day old.

*Generated from GitHub data snapshot as of 2026-07-23 23:59 UTC.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-23

## Today’s Overview
Today saw low activity with just two items updated in the last 24 hours: one issue closed and one pull request merged. Both are directly linked — a critical runtime crash bug was reported and immediately fixed by the same contributor. No new releases were published. The project remains stable overall, with a focused, fast response to a high-severity Discord connectivity defect.

## Releases
No new releases were published today. The latest release remains unchanged.

## Project Progress
One pull request was merged/closed today:
- **[PR #978: discord: run typing thread on the heavy runtime stack](https://github.com/nullclaw/nullclaw/pull/978)** — Merged by Tetraslam. Fixes a process-aborting stack overflow in the Discord typing indicator thread. The thread was previously using the `AUXILIARY_LOOP_STACK_SIZE` (512 KB) but performs HTTPS requests (`std.http.Client` + `std.crypto.tls`) that overflow that limit. The fix moves the thread to the heavier runtime stack. This PR directly closes Issue #977.

## Community Hot Topics
Only one issue and one PR were active today, both by the same author (Tetraslam). The single issue received 1 comment and no reactions.

- **[Issue #977: Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE (frames arrive and are read, then silently discarded)](https://github.com/nullclaw/nullclaw/issues/977)** — A highly reproducible bug causing the bot to process exactly one inbound message before silently dropping all subsequent events. Underlying need: maintainers needed this identified and fixed quickly to restore bot reliability. The fix (PR #978) was submitted and closed on the same day, indicating strong alignment between reporting and resolution.

## Bugs & Stability
One bug was reported and fixed today — severity: **High** (process-aborting, no workaround beyond restart).

- **Bug: Discord gateway goes deaf after first MESSAGE_CREATE (Issue #977)** — Root cause identified as a stack overflow in the typing indicator thread (`AUXILIARY_LOOP_STACK_SIZE` too small for TLS/HTTPS operations). The overflow aborted the thread silently, causing the bot to remain connected (heartbeats kept flowing) but never dispatch further events.

- **Fix:** PR #978 resolves the problem by running the typing thread on the heavy runtime stack. The fix was merged on the same day the bug was reported. No related regressions are expected.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The only activity was a bug fix; no roadmap signals are visible from today’s data.

## User Feedback Summary
The single user report (Tetraslam) reflects a direct pain point: a 100% reproducible, silent failure mode where the bot appears online but is functionally deaf. The rapid fix suggests development responsiveness is high. No satisfaction/dissatisfaction signals beyond the report itself.

## Backlog Watch
No long-unanswered issues or PRs were identified in today’s data. All active items (1 issue, 1 PR) were resolved within 24 hours of creation. The project’s backlog appears well-maintained at this snapshot.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## 1. Today's Overview
The project is in a period of intense development and stabilization, with **50 issues** and **47 pull requests** updated in the last 24 hours. Activity is dominated by the **v1-launch-checklist**, **bug-bash waves** (Telegram, Slack, onboarding), and the ongoing **Reborn architecture refactoring** (ProductSurface boundary, runtime composition, error recoverability). No new releases were cut today, but multiple foundational epics have been formally documented as completed via retrospective issues, indicating the team is consolidating delivery records ahead of a likely near-term release. The high ratio of open to closed items (36 open issues, 24 open PRs) reflects both active bug fixing and the final push toward launch commitments.

## 2. Releases
**No new releases** were published in the last 24 hours. The last tracked release PR (#5598) remains open, bumping `ironclaw_common` to 0.5.0 (with breaking API changes) and `ironclaw_skills` to 0.4.0. A release may be imminent once the current wave of bug bash fixes and Reborn surface cuts are merged.

---

## 3. Project Progress
**Six PRs were merged or closed today**, all by core contributors:

| PR | Summary |
|----|---------|
| [#6441](https://github.com/nearai/ironclaw/pull/6441) | **refactor(reborn): name ProductSurface boundary** – introduced the `ProductSurface` trait over the frozen `RebornServicesApi` proto-facade, moved WebUI and test mounts to depend on the new trait, enabling future API-only operator config paths. |
| [#6467](https://github.com/nearai/ironclaw/pull/6467) | **feat(reborn): recover with model error observations** – added typed host-authored error observations for recoverable provider failures (context overflow, invalid model output, content filtering) with one bounded retry attempt. |
| [#6449](https://github.com/nearai/ironclaw/pull/6449) | **add run failure classification facade** – introduced a runner-owned facade returning lane, retry disposition, and user-facing messages from terminal run failures, with typed ratchets for host-stage and model-stage error mapping. |
| [#6450](https://github.com/nearai/ironclaw/pull/6450) | **pin capability authority fold inputs** – added caller-level tests that verify the sealed `Authorized` dispatch payload (actor, origin, correlation, descriptor lane, etc.). |
| [#6466](https://github.com/nearai/ironclaw/pull/6466) | **test(reborn): replay QA provider journeys end to end** – harvested every QA journey containing a provider call and replayed it through standalone Reborn, first-party extensions, auth mediation, and Emulate. |
| [#6519](https://github.com/nearai/ironclaw/issues/6519) *(closed issue)* | **Testing playbook and required PR test strategy** – retroactively recorded that PRs #6411 and #6415 (both merged July 21) delivered the TDD playbook and mandatory Test Strategy in PRs. |

Additionally, **dozens of closed issues** (e.g., #6489, #6493, #6495, #6498, #6499, #6505, #6510, #6513–6515) retroactively document foundations that were already delivered: host-managed memory retrieval, extension manifest registry and Manifest V2, unified extension runtime, Telegram production image support, Slack routing & thread delivery, web-gateway thread model, per-user extension lifecycle and OAuth hardening, generic installation ownership, and operator configuration write planes. This suggests the team is systematically auditing and recording all completed work for launch tracking.

---

## 4. Community Hot Topics
The most active discussions (by comment count) highlight three recurring themes:

- **Error recoverability endgame** ([#6284](https://github.com/nearai/ironclaw/issues/6284), 4 comments) – The EPIC demands that every mid-run error satisfy a strict recoverability contract (run survives, model sees error + corrective info, model gets a turn). This is a foundational architectural goal being actively implemented (see PR #6467 and #6530).
- **Extension/channel lifecycle test** ([#6105](https://github.com/nearai/ironclaw/issues/6105), 3 comments) – Slack and Telegram lifecycle (install→connect→disconnect→reconnect→uninstall) has regressed repeatedly across four bug-bash waves. The community is pushing for a state-machine test and cron-based canary lanes to catch regressions early.
- **Configurable skills and tools** ([#5459](https://github.com/nearai/ironclaw/issues/5459), 2 comments) – Users and admins need fine-grained control over WASM tool installation and skill visibility (admin public vs. user private). This feature has been open since June 30 and is likely part of the admin parity roadmap.

The long-standing **tool schema discovery** issue ([#1330](https://github.com/nearai/ironclaw/issues/1330), 1 comment, opened March 18) and **routine notification context** ([#1519](https://github.com/nearai/ironclaw/issues/1519), 1 comment, opened March 21) continue to receive occasional attention but remain unresolved.

---

## 5. Bugs & Stability
**8 new bugs** were reported today, all from a single bug-bash wave. Ranked by severity:

| Issue | Severity | Description |
|-------|----------|-------------|
| [#6523](https://github.com/nearai/ironclaw/issues/6523) | **P1** (implicit, v1-launch-checklist) | Agent fails to create during onboarding if the testing flag is set. |
| [#6475](https://github.com/nearai/ironclaw/issues/6475) | **bug_bash_P1** | `/pair` command not recognized in Telegram bot chat; user trapped in pairing loop. |
| [#6474](https://github.com/nearai/ironclaw/issues/6474) | **bug_bash_P1** | Telegram delivery channel missing from Delivery Defaults page (only "Web app only" shown). |
| [#6478](https://github.com/nearai/ironclaw/issues/6478) | **bug_bash_P2** | Agent does not recognize connected Telegram and incorrectly redirects to Slack authorization. |
| [#6349](https://github.com/nearai/ironclaw/issues/6349) | **bug_bash_P2** | Telegram chat history rendered inconsistently in WebUI (duplicated prompts, gaps). |
| [#6522](https://github.com/nearai/ironclaw/issues/6522) | v1-launch-checklist | IronClaw provides no instructions for setting up Telegram locally or on agent.near.ai. |
| [#6521](https://github.com/nearai/ironclaw/issues/6521) | **closed** (v1-launch-checklist) | ironclaw CLI missing on agent staging (SSH not available). |
| [#6532](https://github.com/nearai/ironclaw/issues/6532) | *design* | Attested-signing stack design (not a bug, but a new feature proposal). |

**Fix PRs in flight**: PR [#6520](https://github.com/nearai/ironclaw/pull/6520) (extension readiness and channel delivery generics) and PR [#6531](https://github.com/nearai/ironclaw/pull/6531) (admin OAuth config at runtime) address several of the underlying extension lifecycle and auth issues that cause the Telegram/Slack confusion. PR [#6315](https://github.com/nearai/ironclaw/issues/6315) (separate PR not shown in top 20 but referenced) fixes the `/pair` command recognition. No PR is yet linked to the onboarding flag failure (#6523).

---

## 6. Feature Requests & Roadmap Signals
Several user-requested features have gained traction:

- **Configurable skills and tools** ([#5459](https://github.com/nearai/ironclaw/issues/5459)) – High demand from admins for WASM tool installation visibility rules. Likely to land soon as part of the admin capability parity epic (#3288).
- **Unified extension model** ([#2246](https://github.com/nearai/ironclaw/issues/2246)) – MCP tools as single-tool extensions + provider deduplication. PR #6520 (extension readiness generics) aligns with this direction; may ship in next release.
- **Blockchain attested signing** ([#6532](https://github.com/nearai/ironclaw/issues/6532)) – A design request for Ledger hardware-wallet clear signing, enabling safe blockchain transactions via AI assistants. This is still in the design/Phase A planning stage and is unlikely to appear in the immediate next release.
- **Host-managed memory** (PR [#6345](https://github.com/nearai/ironclaw/pull/6345) ) – Model memory as a userland extension with host-managed lifecycle. This large PR (addressing #3537) is currently open and will likely merge into the next version.

Predictions for the next release (likely `ironclaw_common` 0.5.0): inclusion of ProductSurface routing, error-recoverability observations, failure classification, and the host-managed memory extension.

---

## 7. User Feedback Summary
Real pain points reported by users (via bug-bash waves) include:
- **Onboarding friction**: The testing flag prevents agent creation; Telegram setup instructions are missing entirely.
- **Channel pairing confusion**: The `/pair` command is treated as plain text, trapping users in a loop; Telegram is not recognized as connected, leading to Slack authorization prompts.
- **Delivery configuration gap**: Telegram cannot be selected in Delivery Defaults, forcing users to rely on "Web app only".
- **Inconsistent UI**: Telegram messages appear fragmented and out of order when viewed in the WebUI.
- **Missing CLI on staging**: SSH sessions lack the `ironclaw` command, preventing remote restarts.

Overall satisfaction appears mixed – the project is making visible progress on foundational architecture, but end-user experience for Telegram and Slack channels remains brittle. The high volume of bug reports suggests active testing and QA engagement, which is healthy.

---

## 8. Backlog Watch
Several important issues and PRs have been open for extended periods without recent maintainer response or progress:

| Item | Opened | Last Update | Notes |
|------|--------|-------------|-------|
| [#1330](https://github.com/nearai/ironclaw/issues/1330) – Tool schema discovery | 2026-03-18 | 2026-07-22 (bumped) | Only 1 comment; needs clearer message routing semantics. |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) – Routine notification context | 2026-03-21 | 2026-07-22 (bumped) | Notifications lack user chat thread context. |
| [#2246](https://github.com/nearai/ironclaw/issues/2246) – Unify extension model | 2026-04-10 | 2026-07-22 | Blocked on refactoring; PR #6520 may help. |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) – Admin capability lifecycle parity | 2026-05-06 | 2026-07-22 | Parent epic with many sub-issues; no recent movement. |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) – Release PR | 2026-07-03 | 2026-07-22 (still open) | Release of `ironclaw_common` 0.5.0 with breaking changes; needs final review and merge. |
| [#5664](https://github.com/nearai/ironclaw/pull/5664) – Dependabot (actions group) | 2026-07-05 | 2026-07-22 | 16 dependency updates; requires maintainer to approve and merge. |
| [#6251](https://github.com/nearai/ironclaw/pull/6251) – OAuth denial lifecycle | 2026-07-18 | 2026-07-22 (last push) | Large PR making OAuth channel-neutral; waiting for review. |

The release PR (#5598) is particularly concerning as it has been open for 20 days, blocking downstream deployments. The dependabot PR (#5664) should be low-effort to merge. Maintainers are encouraged to prioritize these to avoid accumulating technical debt on CI and release infrastructure.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-23

## Today's Overview
The project saw a calm but productive day: **no new releases**, **1 issue closed** (a stale bug report), and **5 pull requests merged** – covering stability fixes, UX improvements, and long-standing feature branches. All updated items were resolved or integrated, indicating a healthy maintenance cadence. Developer activity focused on hardening the Windows installer, preventing memory crashes, and polishing the scheduling and skills management modules. No open issues or PRs were updated, reflecting a clean state with minimal outstanding work.

## Releases
*No new releases today.*

## Project Progress
Five pull requests were merged today, advancing several areas:

- **Windows installer hardening** ([PR #2377](https://github.com/netease-youdao/LobsterAI/pull/2377)) – Improved update installer resilience on Windows.
- **Cowork export modal fix** ([PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376)) – Mounted the export options modal via a body portal to avoid stacking context conflicts.
- **Skills management feature** ([PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346)) – A long-stale feature branch for skills management was merged after being aligned with official PR guidelines.
- **Scheduled task enhancements** ([PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347)) – Added Cron custom scheduling, Agent/Model binding, and unified form UX for the scheduled task module (visual builder, raw expression input, shortcuts).
- **Oversized transcript OOM guard** ([PR #2375](https://github.com/netease-youdao/LobsterAI/pull/2375)) – Blocks turns before gateway loads oversized transcripts, classifies JS heap-out-of-memory crashes, and prevents zombie reconnects after restart.

## Community Hot Topics
Activity was low. The only issue with comments was **#1348** ([Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348)) – *“定时任务名称重复没有校验”* (no validation for duplicate scheduled task names) – which accumulated 2 comments before being closed as stale. No new discussions or high-reaction items emerged today.

## Bugs & Stability
- **High severity** – *Out-of-memory crash on oversized transcripts*: Fix merged via [PR #2375](https://github.com/netease-youdao/LobsterAI/pull/2375). The patch guards against heap OOM by blocking oversized active transcripts before gateway loading, classifies crashes, and cleans up zombie reconnection attempts.  
- **Low severity** – *Export modal stacking context bug*: Resolved in [PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376) by using a body portal.  
- No new bugs or regressions were reported today.

## Feature Requests & Roadmap Signals
Two merged feature PRs provide strong signals for upcoming functionality:

- **Skills management** ([PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346)) – A structured system for managing AI skills, likely to appear in the next release.
- **Scheduled task improvements** ([PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347)) – Custom Cron scheduling, agent/model bindings, and a better user experience for recurring tasks. These enhancements address common requests for flexibility and ease-of-use in automation.

Both features had been in development since April and are now merged, making them strong candidates for the next version.

## User Feedback Summary
No direct user feedback was captured in the last 24 hours. However, the closed issue **#1348** (*duplicate task name validation*) highlights a real pain point where users could accidentally create tasks with identical names without warning – a quality-of-life gap that was previously unreported. The merged PRs for scheduled tasks and skills management also reflect user desires for more control and customization.

## Backlog Watch
The backlog appears clean. The two long-stale PRs (#1346, #1347) and one stale issue (#1348) were all closed/merged today, removing the only items that had been lingering since April. No new or unanswered issues or PRs require maintainer attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-23

## Today’s Overview

The Moltis project saw minimal activity over the past 24 hours, with only one issue and one pull request updated. No releases were published. The single open issue (#574) requesting *model routing per topic* has been dormant for over three months and received no new comments today. The sole pull request (#1162) is a targeted UI fix for displaying dates of older sessions, authored by a new contributor. Overall project health appears stable but with low contributor momentum; no regressions or new bugs were reported.

## Releases

*None in the last 24 hours.* No new releases were published; the latest release remains as previously recorded.

## Project Progress

- **No PRs were merged or closed today.**  
- **Open PR #1162** ([link](https://github.com/moltis-org/moltis/pull/1162)) – *fix(web): show dates for older sessions* by shixi-li. This pull request improves the session history UI by displaying localized time labels for today, “yesterday” and weekday labels for recent days, and full calendar dates (including the year when necessary) for older sessions. No comments or reactions yet. If merged, this will resolve a minor user experience gap.

## Community Hot Topics

- **Issue #574** ([link](https://github.com/moltis-org/moltis/issues/574)) – **[Feature]: Model Routing Per Topic** by azharkov78. With 5 comments and 1 👍, this is the most active item in the repository. The request asks for the ability to route different user topics to different LLM models automatically. Despite being opened in April 2026, it was last updated yesterday (2026-07-22), suggesting ongoing community interest or recent maintainer discussion. The underlying need is for intelligent model selection to optimize cost, latency, or accuracy per use case.

- **PR #1162** – While it has no comments, it is the only PR currently open and may attract feedback once tested.

## Bugs & Stability

- **No new bug reports were filed in the last 24 hours.**  
- **PR #1162** addresses a UI bug where older session dates were not properly displayed. This is a low-severity issue affecting user navigation in the session history view. No other stability or crash reports are present.

## Feature Requests & Roadmap Signals

- **Issue #574 – Model Routing Per Topic** remains the only feature request active. The proposal aligns with common patterns in multi-model AI assistants. Given the long open time and lack of competing features, this could be a candidate for the next minor release if maintainers prioritize routing capabilities. No implementation PRs or design proposals are linked yet.

## User Feedback Summary

- **Feature Request #574** indicates a clear user pain point: users want to assign different models to different conversational contexts (e.g., technical queries to a high-accuracy model, casual chat to a faster/cheaper one). The 5 comments likely include use-case examples and discussion of trade-offs, but no explicit satisfaction/dissatisfaction signals are present in the data.

## Backlog Watch

- **Issue #574** ([link](https://github.com/moltis-org/moltis/issues/574)) – Open since 2026-04-06, last updated 2026-07-22. This enhancement request has been awaiting maintainer response or acceptance for over 3.5 months. With active community discussion but no assignee or milestone, it risks being deprioritized or forgotten. The recent update (though no new comments) may indicate maintainers are reviewing it. Attention is warranted to avoid losing community engagement.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-23

## 1. Today's Overview
CoPaw (QwenPaw) saw very high development activity: 31 issues and 50 pull requests were updated in the last 24 hours. Of these, 6 issues were closed and 15 PRs were merged or closed. One new patch release (v2.0.0.post4) was published. The project is in an intensive stabilization and feature‑addition phase, with many first‑time contributors fixing bugs and improving the developer experience. The community is actively reporting regressions introduced in v2.0, especially around context compaction, model compatibility, and performance overhead.

## 2. Releases
**v2.0.0.post4** ([Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4))  
- **Changes:** Optimised agent reasoning to mitigate redundant thinking loops and duplicate tool invocations.  
- **Breaking changes:** None.  
- **Migration notes:** This is a patch release; no configuration changes required.

## 3. Project Progress
15 pull requests were merged or closed in the last 24 hours. Notable fixes that advanced:  
- **Context injection role** – Changed from `system` to `user` to avoid API errors ([PR #6359](https://github.com/agentscope-ai/QwenPaw/pull/6359), closed).  
- **Token usage persistence** – Added retry logic for transient write failures ([PR #6375](https://github.com/agentscope-ai/QwenPaw/pull/6375), merged).  
- **Governance audit logging** – `audit_level=none` now correctly skips SQLite insert ([PR #6369](https://github.com/agentscope-ai/QwenPaw/pull/6369), open but likely ready).  
- **Queue state cleanup** – Idle cleanup no longer removes a newly recreated queue state ([PR #6373](https://github.com/agentscope-ai/QwenPaw/pull/6373)).  
- **File download fallback** – Timeout exceptions now cascade to next downloader ([PR #6371](https://github.com/agentscope-ai/QwenPaw/pull/6371)).  
- **Mission parser** – Quoted `--verify` commands preserved ([PR #6356](https://github.com/agentscope-ai/QwenPaw/pull/6356)).  
- **Console tests** – Support for Windows (`cmd.exe`) added ([PR #6365](https://github.com/agentscope-ai/QwenPaw/pull/6365)).  
- **Console approval UI** – “Once” permission prioritized over “Always Allow” to reduce accidental grants ([PR #6357](https://github.com/agentscope-ai/QwenPaw/pull/6357)).

## 4. Community Hot Topics
The most active discussions this week (by comment count):

| Issue | Comments | Summary |
|-------|----------|---------|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) (closed) | 18 | Sub‑agent context compaction freezes the process; required manual restart. |
| [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) (closed) | 8 | Platform domain redirects to ad pages on mobile networks. |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 8 | `RemoteProtocolError` – QwenPaw closes connection prematurely (v1.1.2). |
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | 6 | Feature request: per‑conversation model selection instead of per‑agent. |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 4 | v2.0 introduces ~2s fixed overhead per simple reply compared to v1.x. |

**Underlying needs:**  
- Users demand resilience in multi‑agent contexts (freeze, connection drops).  
- There is strong desire for flexible model assignment at the conversation level.  
- Performance regression in v2.0 is a major concern – users expect v2.0 to be at least as fast as v1.x.

## 5. Bugs & Stability
Reported bugs today (ranked by severity):

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | New `loop` feature crashes the main process. | Not yet |
| **High** | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError`: QwenPaw closes connection mid‑message. | No |
| **High** | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | LLM responses truncated (MiniMax‑M3). | No |
| **High** | [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | MiniMax‑M3 image recognition fails (returns hallucinations). | No (but related to #5135) |
| **High** | [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | `tool_call` arguments contain markdown fences, breaking JSON parsing. | [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) |
| **High** | [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) | Context injection uses `role=system` mid‑conversation, causing API errors. | [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) |
| **Medium** | [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) | Approval dialog “Always Allow” button overly prominent – risk of accidental permanent grants. | [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) |
| **Medium** | [#6355](https://github.com/agentscope-ai/QwenPaw/issues/6355) | Mission parser splits quoted `--verify` commands. | [#6356](https://github.com/agentscope-ai/QwenPaw/pull/6356) |
| **Medium** | [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) | Idle cleanup removes a recreated queue state. | [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) |
| **Medium** | [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | Token usage persistence does not retry after transient write failure. | [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) |
| **Low** | [#6366](https://github.com/agentscope-ai/QwenPaw/issues/6366) | Console coverage test times out under V8 instrumentation. | [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) |
| **Low** | [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361) | Console test scripts do not run on Windows. | [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) |

## 6. Feature Requests & Roadmap Signals
Several user‑requested features were filed today, likely to be considered for upcoming releases:

- **Per‑conversation model selection** ([#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318)) – High demand for flexible model overrides per chat instead of per agent.  
- **Drag‑and‑drop file upload** ([#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297), closed) – Important for contract review workflows.  
- **Cron job model override** ([#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316)) – A PR ([#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353)) is already open.  
- **Docker hot‑update** ([#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)) – Avoid rebuilding containers for every minor release.  
- **Explicit Node.js version specification** ([#6326](https://github.com/agentscope-ai/QwenPaw/issues/6326)).  
- **Multi‑user support** ([#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335)) – Essential for team deployments.  

The merged/closed PRs on model overrides and context injection indicate these areas are actively being addressed. Per‑conversation models and Docker hot‑update are likely next candidates.

## 7. User Feedback Summary
**Pain points voiced by the community:**  
- **Performance regression:** v2.0 adds ~2s overhead per reply, frustrating users on simple queries ([#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)).  
- **Stability:**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-23

## Today’s Overview

The ZeroClaw project remains highly active with **50 issues** and **50 pull requests** updated in the last 24 hours. Of those, **10 issues were closed** and **13 PRs merged/closed**, indicating steady progress despite the absence of a new release. The most critical ongoing work involves a wide-ranging session-persistence backend series (Oracle, MySQL/MariaDB, PostgreSQL, IBM Db2) and an RFC for OIDC authentication. However, a major **Windows compatibility bug (#7462)** with 74 test failures continues to draw community attention and lacks a fix in progress. Overall project health is solid, but cross-platform stability and several high-risk features (OIDC, process-memory limits, A2A discovery) require careful delivery.

## Releases

**No releases** were published in the last 24 hours.

## Project Progress — Merged/Closed PRs

Nine pull requests were merged or closed during the period:

- **feat(runtime): surface model fallback notice on direct-turn surfaces** ([#8684](https://github.com/zeroclaw-labs/zeroclaw/pull/8684)) – Merged. Improves fallback transparency by recording requested‑vs‑served provider/model for non‑streaming turns.
- **chore(firmware): share protocol parsing with ESP32** ([#8447](https://github.com/zeroclaw-labs/zeroclaw/pull/8447)) – Merged. ESP32 firmware now uses the shared `zeroclaw-fw-protocol` crate, replacing local serde-based parsing.
- **feat(obs): nest memory and RAG spans under the turn trace** ([#8752](https://github.com/zeroclaw-labs/zeroclaw/pull/8752)) – Merged. Closes [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) by nesting `memory.*` and `rag.*` OTel spans under the turn trace.
- **fix(memory): allow Lucid ARM cold starts, make timeouts configurable** ([#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105)) – Merged. Raised bounded Lucid recall/store timeouts from 500ms/800ms to 3 seconds, fixing ARM cold-start failures.
- **feat(release): add broad-channel measurement builds** ([#9174](https://github.com/zeroclaw-labs/zeroclaw/pull/9174)) – Merged. Introduces a `dist-broad` feature selection for optional broad-channel prebuilt binaries.
- **fix(zerocode): time out stalled daemon initialization** ([#9169](https://github.com/zeroclaw-labs/zeroclaw/pull/9169)) – Merged. Bounds ZeroCode `initialize` RPC to 10 seconds, preventing indefinite hangs.
- **docs(bedrock): Explain Bedrock credentials and systemd env setup** ([#8991](https://github.com/zeroclaw-labs/zeroclaw/pull/8991)) – Merged. User-facing documentation for Amazon Bedrock provider credentials.
- **fix(zerocode): use daemon final text when no streaming text was accumulated** ([#8779](https://github.com/zeroclaw-labs/zeroclaw/pull/8779)) – Merged. Falls back to daemon-provided `TurnComplete.content` when streaming is absent.
- **feat(skills)!: replace built-in ClawHub source with git-catalog --skill selector** ([#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638)) – Merged. **Breaking change**: Removes privileged `clawhub.ai` installer in favor of `zeroclaw skills install <git-url> --skill <name>`.

Issues closed without a corresponding PR (mostly RFCs and completed documentation):
- RFC: Move translated .ftl and .po files into a git submodule [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)
- RFC: A2A agent discovery [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)
- Feature: Reconcile runtime model switching with provider structure [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557)
- Feature: “Everything is a plugin” — phased path [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)
- Feature: First-Class Support for Custom / OpenAI-Compatible Providers [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518)
- Bug: history trimming occurs silently with history pruning disabled [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837)
- Docs: Explain Bedrock credential profiles and systemd service setup [#8925](https://github.com/zeroclaw-labs/zeroclaw/issues/8925)

## Community Hot Topics

The most active Issues and PRs (by comment count or immediate interest):

| Item | Comments | Summary |
|------|----------|---------|
| [#7462 – [Bug]: 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 11 | High‑severity bug: Unix‑only test commands, path semantics, and console encoding cause 74 failures on Windows 11. No fix PR yet. |
| [#6641 – [Feature]: Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | 8 | Closed by #8752. Community follow‑up to earlier observability work. |
| [#7141 – RFC: OIDC authentication provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 7 | Umbrella for pluggable OIDC auth (v0.9.0). High risk, in progress. |
| [#7184 – RFC: Move translated .ftl and .po files into a git submodule](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | 7 | Closed. i18n management approach. |
| [#7218 – RFC: A2A agent discovery](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | 7 | Closed. Defines `.well-known/agent-card.json` for multi‑agent interoperability. |
| [#6391 – [Feature]: real heartbeat tracking for daemon nodes](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | 6 | Derive Online/Stale/Offline from last WS message. Open since May. |
| [#6850 – RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 6 | Proposes `MemoryStrategy` trait. High risk, still open. |

**Analysis**: The community is most vocal about **cross‑platform support** (#7462), **observability** (#6641, #6391, #6850), and **security/integration** (#7141, #7218). The long‑standing Windows issue is the single biggest pain point, with maintainers yet to commit a fix.

## Bugs & Stability

Reported or updated bugs in the last 24 hours, ranked by severity:

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **S2** – degraded behavior | [#7462 – 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Open, accepted | CI runs only on Linux; Windows community relies on workarounds. No fix PR. |
| **S2** – degraded behavior | [#8837 – history trimming occurs silently with history pruning disabled](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) | Closed (resolved?) | User reported context loss mid‑session. Likely fixed via related runtime changes. |
| **S3** – minor issue | [#6548 – Channel runtime command replies bypass Fluent localization](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Open, accepted | Hard‑coded English strings appear even under `zh-CN` locale. |
| **S3** – minor (crashloop) | [#6724 – Enabled Signal/Voice Call channel with empty credentials can crashloop the supervisor](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Open, accepted | Supervisor restarts every ~2 seconds when channels are enabled but unconfigured. |
| **S2** – OOM risk | [#6916 – process-memory limits on shell/skill_tool subprocess execution](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | Open, accepted | Observed container OOMs from LLM shell commands. No fix PR yet. |

**Fix PRs in progress**:  
- [#9075 – fix(doctor): persist model catalog to cache on models refresh](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) – Fixes a dead loop for operators running `zeroclaw models refresh` (open, needs author action).  
- [#8781 – fix(security): remove stale advisory ignores](https://github.com/zeroclaw-labs/zeroclaw/pull/8781) – Cleans up `deny.toml` (open, needs author action).

## Feature Requests & Roadmap Signals

The following features were either newly requested or saw active discussion in the last 24 hours. Predictions for the upcoming **v0.9.0** target are noted.

| Feature / RFC | Issue | Priority | Predict next version? |
|---------------|-------|----------|-----------------------|
| OIDC authentication provider support | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | **P1** | Yes – explicitly targeted for v0.9.0 |
| Per-model capability & context-window config | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | **P1** | Likely – needed for UI context budget |
| Agent evaluation harness (`zeroclaw eval`) | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | P2 | Possible for v0.9.0 (pluggable graders) |
| Process-memory limits on subprocess execution | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | **P1** | Likely – production OOM fix |
| Honor action-scope filter in Composio tool dispatch | [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | P2 | Possible |
| Mastodon, Twilio SMS, Rocket.Chat, Zulip channels | [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423), [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427), [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435), [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | P2 | Low priority; no recent activity |
| Structured Observability Enhancement (Rich Events) | [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | P2 | Possible, builds on #8752 |
| Real heartbeat tracking for daemon nodes | [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | P2 | Unlikely soon – stale since May |
| Decouple memory lifecycle policy from storage | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | P2 | High risk; may slip |

**Roadmap signal**: The session-persistence backend PR stack (MySQL, PostgreSQL, Oracle, Db2) is actively landing (see #9249–#9254), suggesting remote persistence is a key v0.9.0 feature. OIDC and A2A are also explicitly tagged for that release.

## User Feedback Summary

Real user pain points captured from issues and comments:

- **Windows support is severely lacking** – “74 test failures on Windows 11” ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) and CI runs only on Linux. Workarounds are unreliable.
- **History pruning bug** – User reported losing context mid-session despite pruning disabled ([#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837)).
- **Localization bypass** – Non-English users see hard-coded English strings from channel commands ([#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)).
- **Crashloop on misconfiguration** – Enabling Signal/Voice Call channels without credentials causes supervisor restart spam ([#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)).
- **OOM in production** – Shell/skill subprocesses can exhaust container memory; limit requested ([#6916](https://github.com/zeroclaw-labs/zeroc

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*