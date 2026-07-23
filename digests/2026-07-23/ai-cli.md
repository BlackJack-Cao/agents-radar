# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-22 23:41 UTC | 覆盖工具: 9 个

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

## 横向对比

好的，各位技术决策者和开发者。作为专注于 AI 开发工具生态的资深技术分析师，我已基于今日（2026-07-23）各主流 AI CLI 工具的社区动态，为您提炼出以下横向对比分析报告。

---

### 2026-07-23 AI CLI 工具生态横向对比分析报告

#### 1. 生态全景

当前 AI CLI 工具生态正处于 **“从功能齐全到稳定可靠”的决胜阶段**。各工具纷纷引入复杂的 Agent 协作、MCP 扩展和高级模型，但“成长的烦恼”也集中爆发：**跨平台稳定性、模型行为可预测性、以及数据生命周期管理**成为社区普遍焦虑的核心。一方面，开源社区在功能特性上（如新模型支持、高级 UI 主题、插件系统）持续创新；另一方面，开发者对基础健壮性的诉求空前高涨，回归 Bug、静默失败和资源泄漏问题频繁登上热搜。简而言之，市场正从“谁能做”转向“谁做得更稳”。

#### 2. 各工具活跃度对比

| 工具名称 | 今日 Issues 更新数 | 今日重要 PR 数 | 今日版本发布数 | 社区核心命题 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (高热度) | 9 | 1 | 模型安全误判与 MCP 调用可靠性 |
| **OpenAI Codex** | 10 (高热度) | 10 | 4 (Alpha) | Windows 平台性能与进程管理回归 |
| **Gemini CLI** | 10 (高热度) | 10 | 3 | Agent 行为可靠性（假成功/无限挂起） |
| **GitHub Copilot CLI** | 10 (高热度) | 1 | 3 | 企业级配置（BYOK）与回归 Bug |
| **Kimi Code CLI** | 3 (中等) | 2 | 0 | API 兼容性（限流/Schema）与平台 Bug |
| **OpenCode** | 10 (高热度) | 10 | 0 | 服务端大规模故障与空闲性能 |
| **Pi** | 10 (高热度) | 10 | 0 | AI 提供商兼容性与多设备认证冲突 |
| **Qwen Code** | 10 (高热度) | 10 | 3 (含Nightly) | 核心参数传递 Bug 与测试套件稳定性 |
| **DeepSeek TUI** | 10 (高热度) | 10 | 0 (冲刺 v0.9.1) | 技能包落地与安装程序 Bug |

*注：以上数据基于社区动态日报中提炼出的热点事件，反映社区讨论的集中度。*

#### 3. 共同关注的功能方向

社区对以下需求的呼声跨越了工具边界，表明这些是 AI CLI 工具的“必答题”：

- **模型行为的可预测性与可控性**（几乎所有工具）：
    - **Claude Code** 用户抱怨 Fable 5 模型“固执己见”和过度安全审核。
    - **Gemini CLI** 用户报告子代理返回“假成功”状态，且通用代理无限挂起。
    - **Qwen Code** 因一个 `enable_thinking` 参数错误，导致 `web_fetch` 工具全面失效。
    - 开发者普遍要求 AI 模型在出错时能被有效纠正，并能提供更清晰的反馈，而不是静默失败或错误拒绝。

- **跨平台稳定性，尤其是 Windows**（Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI）：
    - **OpenAI Codex** 的 WMI 进程 CPU 占满和子进程泄漏问题最为严重。
    - **Claude Code** 和 **GitHub Copilot CLI** 均出现了 Windows 特有的功能失效（如图片粘贴永久失效、冷启动挂起）。
    - Windows 用户群体庞大，但各工具在该平台上的测试覆盖和优化显然不足。

- **MCP (Model Context Protocol) 集成可靠性**（Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI）：
    - **Claude Code** 的 Filesystem MCP 调用静默丢弃是今日最大热点。
    - **OpenAI Codex** 报告子代理泄漏 MCP 进程、Meta Ads OAuth 登录失败。
    - **GitHub Copilot CLI** 出现企业与 MCP 服务器握手卡死的问题。
    - MCP 作为扩展生态的核心，其底层稳定性仍需大量加固。

- **会话与数据自主控制权**（Claude Code, OpenCode, GitHub Copilot CLI）：
    - 用户强烈要求**不被强制删除聊天记录**、能**管理上下文压缩机制**、以及实现**配置和会话数据的账号间隔离**。

#### 4. 差异化定位分析

- **Claude Code**: **功能最全但复杂度最高**。它集成了后台审查、远程控制等企业级功能，但由此带来的各种“隐藏” Bug（如 MCP 调用丢弃、权限配置不生效）也最多。目标用户是追求深度控制和高阶功能的中高级开发者。
- **OpenAI Codex**: **专注 Rust 引擎与性能，但 Windows 是软肋**。大量 Alpha 版本迭代底层，却遭遇性能回归。它在 Agent 协作、MCP 工具链和会话管理上积极创新（如持久化线程），但 Windows 用户的体验与插件模式差距巨大。
- **Gemini CLI**: **强调 Agent 协作与安全沙箱**，引入 A2A 协议和组件级评估体系，技术路线明确。但其核心 Agent 的行为可靠性（挂起、假成功）问题也非常突出，社区处于“期待高、失望大”的节点。
- **GitHub Copilot CLI**: **与企业生态深度绑定**，核心优势在于认证（BYOK）和模型选择（池化）。其社区反馈集中在企业级配置灵活性和认证回归，表现出 B 端用户的典型痛点。
- **Kimi Code CLI**: **处于发展早期，聚焦基础修复**。Issues 和 PR 数量不多，主要集中在 API 兼容性和平台 Bug (Windows 编码)。工具定位尚不清晰，正在解决基础存活问题。
- **OpenCode**: **注重用户体验与自动化**。高度关注模型自动发现、多媒体支持和 UI 性能优化。今日 Go 订阅服务大规模故障，表明其稳定性有待提高。
- **Pi**: **强调提供者兼容性与个性化**。快速支持 OpenRouter OAuth 和新 Model Provider（StepFun），并推进 Agent 扩展框架。活跃的社区贡献者生态是其优势，但全局 Bug（如登出、配置冲突）也显示其治理面临挑战。
- **Qwen Code**: **安全性与CI/CD 稳定性优先**。今日修复中，多个 PR 旨在防止密钥泄漏和加固 Git 操作。同时，在优化 Prompt 缓存和协议栈上也有深度投入，显示出稳健的技术演进路线。
- **DeepSeek TUI (CodeWhale)**: **专注终端 UI 体验与高度模块化**。通过“技能包”系统让功能高度可组合，并持续打磨 TUI 界面（如拖拽、动态摘要）。其社区活跃度和迭代速度惊人，风格偏向快速迭代的消费者级产品，但安装器等基础问题仍是短板。

#### 5. 社区热度与成熟度

- **高热度 + 高成熟度**：**Claude Code** 的社区最庞大，问题反馈最专业、多元，标志着其已进入成熟期的“烦恼”，问题虽多但深度高。**GitHub Copilot CLI** 问题聚焦，用户画像清晰，也处于成熟期。
- **高热度 + 快速迭代期**：**OpenAI Codex**、**Gemini CLI**、**OpenCode**、**Pi**、**Qwen Code** 和 **DeepSeek TUI** 的社区都极其活跃，Issue/PR 数量高，开发者响应迅速。这表明他们正处于功能快速叠加和问题快速暴露的亢奋期，社区参与度和开发者热情都很高。
- **低活跃度 + 早期阶段**：**Kimi Code CLI** 热度相对较低，Issue 数量少，表明其仍处于早期用户积累阶段，社区尚未形成大规模讨论。

#### 6. 值得关注的趋势信号

1.  **跨平台体验差正成为核心障碍**：多个工具的 Windows 用户反馈极其负面，从崩溃到性能问题层出不穷。这提示所有 AI CLI 工具团队，Windows 不再是“二等公民”，必须将其作为核心平台投入同等质量的测试和优化，否则将流失大量用户。

2.  **“模型固执” 比 “模型犯错” 更致命**： Fable 5 模型“错误地纠正用户”的行为引发了社区强烈的信任危机。AI 工具的价值建立在 “人机协作” 之上，如果 AI 不是谦逊的协作者，而是固执的权威者，其开发辅助价值将大打折扣。未来的模型微调方向必须强化“可纠正性”和安全护栏的精准度。

3.  **MCP 生态走向标准化仍需时日**：各工具在 MCP 集成上的问题五花八门（静默失败、进程泄漏、Schema 冲突），表明 MCP 标准在具体实现上存在大量灰色地带。工具开发者需要和 MCP 协议制定者一起，明确异常处理、子进程管理和安全边界等标准，以降低生态接入成本。

4.  **“上下文瘦身” 成为性能优化新战场**：DeepSeek TUI 和 Qwen Code 都不约而同地开始规划上下文瘦身。这表明随着模型上下文窗口增大，无效信息（Meta、重复指令、失败工具输出）的“污染”问题被放大。未来，如何在有限的 Token 预算内“精打细算”，可能比单纯扩大窗口更重要，成为新的性能优化方向。

5.  **社区自愈能力正在形成**：当 Claude Code 出现“聊天记录被删” Bug 时，社区成员自发开发了基于 macOS Time Machine 的恢复脚本。这表明用户群越来越成熟，但同时也是对官方数据持久化策略不信任的表现。工具官方应主动拥抱这一信号，开放更多数据可观测性接口，并与社区共建解决方案。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为专注于 Claude Code 生态的技术分析师，以下是根据您提供的数据生成的社区热点报告。

---

### Claude Code Skills 社区热点报告 (数据截至 2026-07-23)

#### 1. 热门 Skills 排行

以下是根据评论活跃度、问题解决价值和社区讨论热度排名的 Top Skills (PR)：

1.  **\[最热\] fix(skill-creator): run_eval.py 零召回率问题修复**
    -   **功能**: 核心修复 PR，旨在解决 `run_eval.py` 脚本始终报告 0% 召回率的严重缺陷，该缺陷导致整个 skill 描述优化循环失效。
    -   **讨论热点**: 社区最关注的焦点。该 PR 关联了多个 issue (#556, #1169)，社区成员积极报告复现情况、讨论 Windows 兼容性问题。这被认为是 skill-creator 工具链中影响最大的 bug。
    -   **当前状态**: **Open**
    -   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **\[高关注\] Add document-typography skill (文档排版技能)**
    -   **功能**: 新增一个专门解决 AI 生成文档中排版问题的技能，包括孤儿词、寡行段落和编号错位等。
    -   **讨论热点**: 用户普遍反映这是 AI 生成内容的“痛点”，该技能直接切入实际应用场景，受到广泛欢迎。社区讨论集中在如何定义更完善的排版规则和与现有文档技能的集成。
    -   **当前状态**: **Open**
    -   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **\[核心修复\] fix(pdf) & fix(docx): 文件引用与文档结构修复**
    -   **功能**: 包含两个紧密相关的修复：`fix(pdf)` 修正了 SKILL.md 中大小写敏感的文件引用，`fix(docx)` 修复了在带书签的文档中启用修订时引起的文档损坏。
    -   **讨论热点**: 社区对官方文档处理技能的稳定性高度敏感。这些修复直接关系到用户是否能在生产环境中可靠地使用 PDF/DOCX 技能，讨论焦点是跨平台兼容性和 OOXML 规范的复杂性。
    -   **当前状态**: **Open**
    -   **链接**: [PR #538](https://github.com/anthropics/skills/pull/538)，[PR #541](https://github.com/anthropics/skills/pull/541)

4.  **\[新方向\] Add ODT skill (OpenDocument 格式支持)**
    -   **功能**: 增加对 OpenDocument 格式（.odt, .ods）的创建、填充、解析和转换能力，满足开源和标准化文档处理需求。
    -   **讨论热点**: 社区对 LibreOffice 和开源生态的支持呼声很高。讨论焦点在于如何实现与 OOXML 格式的互操作，以及处理复杂的模板填充逻辑。
    -   **当前状态**: **Open**
    -   **链接**: [PR #486](https://github.com/anthropics/skills/pull/486)

5.  **\[元技能\] Add skill-quality-analyzer and … (技能质量与安全分析器)**
    -   **功能**: 新增两个“元技能”，用于自动评估其他 Skill 的质量（结构、文档等）和安全风险。这是一种“管理技能的工具”，提升了生态的成熟度。
    -   **讨论热点**: 社区对于如何建立 Skill 质量标准进行了探讨。同时，安全检查功能回应了用户对社区技能信任度的担忧，是走向生态规范化的重要一步。
    -   **当前状态**: **Open**
    -   **链接**: [PR #83](https://github.com/anthropics/skills/pull/83)

6.  **\[前沿探索\] Add testing-patterns & self-audit (测试模式与自我审计技能)**
    -   **功能**: `testing-patterns` 提供了全面的测试方法论和模式；`self-audit` 则是一个在交付前自动进行文件验证和推理质量审核的技能。
    -   **讨论热点**: 这两个技能代表了社区对“AI 质量保证”的深入探索。讨论焦点从“AI 能做什么”转向“如何确保 AI 做得好”，涵盖了代码测试、文件验证和推理逻辑的审查。
    -   **当前状态**: **Open**
    -   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)，[PR #1367](https://github.com/anthropics/skills/pull/1367)

#### 2. 社区需求趋势

从 Issues 中可提炼出以下最强烈的社区需求方向：

1.  **安全与信任 (Security & Trust):** 这是当前讨论最激烈的话题。社区核心关切是 `anthropic/` 命名空间下的技能来源无法保证官方性，构成“信任边界滥用”。用户希望有一个机制来区分官方、社区和第三方技能。 (e.g., Issue #492)
2.  **工具可靠性与开发者体验 (Tool Reliability & DX):** 大量的 issue 集中在 `skill-creator` 工具的 bug 上，特别是跨平台兼容性（Windows）和核心评估逻辑的可靠性（零召回率问题）。社区迫切需要稳定、跨平台、高鲁棒性的开发工具。 (e.g., Issue #556, #1061, #1169)
3.  **协作与分发 (Collaboration & Distribution):** 社区期望有更便捷的 Skill 共享方式，例如组织级共享、直接分享链接等，以替代目前“下载-发送-手动上传”的低效流程。这反映了从个人使用向团队协作演进的强烈需求。 (e.g., Issue #228)
4.  **Agent 治理与输出质量 (Agent Governance & Output Quality):** 出现了对“Agent 系统安全模式” (Issue #412) 和“推理质量门控流水线” (Issue #1385) 的提案。这表明社区关注点已从单一任务执行延伸到了对 AI Agent 行为的控制、审计和最终交付成果的可靠性上。
5.  **专业领域扩展 (Domain-specific Expansion):** 除了通用的文档和代码技能，社区也表现出对特定领域技能的兴趣，如处理微软 SharePoint 时的安全与上下文窗口问题 (Issue #1175) 和使用 Bedrock 时的集成问题 (Issue #29)。这显示了 Skills 渗透到企业级应用场景的潜力。

#### 3. 高潜力待合并 Skills

这些 PR 评论活跃、讨论充分，且有明确的问题解决方案，具有较高的合并潜力：

1.  **feat(skills): add self-audit (PR #1367):** 该 PR 提供了一个创新的“自我审计”机制，直接回应了社区对 AI 输出质量审核的需求，功能设计和实现描述清晰，讨论热度高，极有可能被采纳作为提升输出可靠性的官方工具。
2.  **Add color-expert skill (PR #1302):** 这是一个功能边界清晰、专业性强的技能，填补了生态中在颜色科学领域的空白。其实现方案（如颜色命名系统和空间对照表）非常扎实，社区讨论也偏向于具体实现细节，落地概率高。
3.  **Add testing-patterns skill (PR #723):** 这是一个内容全面、架构清晰的测试技能，直接响应了社区对提升代码质量的诉求。如果 Anthropic 希望加强 Skills 在“软件工程最佳实践”方面的能力，该 PR 是强有力的候选。
4.  **Add pyxel skill for retro game development (PR #525):** 由 Pyxel 库作者亲自提交，具有天然的“官方”背书和高质量。虽然这是一个相对小众的垂直领域，但其作为案例示范和质量标杆的价值很高，合并可能性较大。

#### 4. 社区生态洞察

**一句话总结：** 当前社区最集中的诉求是**完善 skill-creator 工具链的可靠性、稳定性和跨平台兼容性**，以支撑起一个**安全、可信、可协作**的官方与社区技能混合生态。

---

好的，各位开发者，早上好。今天是 **2026年7月23日**，让我们一同回顾 Claude Code 社区过去24小时的最新动态。

---

## 📰 今日速览

过去24小时，Claude Code 社区的核心焦点集中在 **跨平台工具调用（特别是 MCP 文件系统扩展）稳定性与数据安全** 上。macOS 和 Windows 平台均出现 Filesystem 类 MCP 工具调用被“静默丢弃”的关键 Bug，导致依赖文件系统的自动化工作流中断，成为社区讨论热度最高的事件。同时，新版 Fable 5 模型虽然表现亮眼，但其安全审核的误判率也成为用户高频反馈的焦点。

---

## 🚀 版本发布

### v2.1.218
*   **链接**: [anthropics/claude-code Release v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

**更新内容**:
1.  **后台代码审查**: 将 `/code-review` 命令改为后台子代理进程运行。审查工作将不再占用当前对话窗口，且能更准确地锁定堆叠的斜杠命令作为审查目标，提升了多任务并行的开发体验。
2.  **无障碍改进**: 新增了删除文本的屏幕阅读器播报支持，包括逐词删除 (`Option+Delete`, `Ctrl+W`) 和逐行删除 (`Cmd+Backspace`)，提升了工具的可访问性。

---

## 🔥 社区热点 Issues (Top 10)

1.  **macOS: Filesystem 工具调用被“静默丢弃”**
    *   **编号**: [#80002](https://github.com/anthropics/claude-code/issues/80002)
    *   **热度**: 💬 52 👍 24
    *   **解析**: 这是目前社区最热门的 Bug。macOS 上 Claude Desktop 能正常列出 Filesystem 扩展的工具 (`tools/list`)，但所有工具调用 (`tools/call`) 在通过用户审批后便被“静默丢弃”，MCP 服务器从未收到指令。这直接导致所有依赖文件系统操作的功能失效。有经验的开发者（#79992）通过回滚应用、重装扩展等方式均无法解决，确认问题始于7月21-22日。

2.  **项目级权限配置不生效**
    *   **编号**: [#5140](https://github.com/anthropics/claude-code/issues/5140)
    *   **热度**: 💬 24 👍 34
    *   **解析**: 这是一个存在近一年但仍未解决的问题。用户在家目录 `~/.claude/settings.json` 中配置的权限（如文件访问权限），无法应用到其下的各个项目环境中。这导致用户必须在每个项目中重复配置，或面临项目隔离失效的安全风险。

3.  **聊天记录被自动删除**
    *   **编号**: [#62272](https://github.com/anthropics/claude-code/issues/62272)
    *   **热度**: 💬 19 👍 3
    *   **解析**: 一个潜在的数据安全“雷”。即使设置了很高的 `cleanupPeriodDays` 值，用户的聊天记录 JSONL 文件在应用更新或重启后仍被自动删除。有社区成员为此开发了基于 macOS Time Machine 的恢复脚本，可见问题的严重性。

4.  **Windows 版 GitHub 连接器在 Cowork 模式下失效**
    *   **编号**: [#61682](https://github.com/anthropics/claude-code/issues/61682)
    *   **热度**: 💬 17 👍 19
    *   **解析**: 在 Windows 11 上，GitHub 连接器虽显示“已连接”，但在 Cowork 协作模式下不暴露任何工具。对于依赖 GitHub 工作流的开发团队，这是个严重的协作障碍，点赞数高表明受影响的用户众多。

5.  **Fable 5 模型安全审核误判**
    *   **编号**: [#67732](https://github.com/anthropics/claude-code/issues/67732) (及其关联 Issue `#67737`, `#67734`, `#67723`)
    *   **热度**: 多个 Issue，共 💬 6+ 👍 0+
    *   **解析**: 多个用户报告了 Fable 5 模型的安全审核问题。当用户进行合法的安全漏洞分析、防御性设计或合规性讨论时，会被错误地标记为“违禁内容”，导致模型降级（被切换到 Opus 4.8）或API请求失败。这严重影响了专业安全开发者的工作流。

6.  **VS Code 扩展周期性挂起 90 秒**
    *   **编号**: [#75571](https://github.com/anthropics/claude-code/issues/75571)
    *   **热度**: 💬 13 👍 0
    *   **解析**: macOS ARM64 用户发现，Claude Code VS Code 扩展每 30-40 分钟就会挂起超过 90 秒。尽管底层的 `claude` 原生进程在 `kevent64` 中空闲，但扩展 UI 完全无响应。这严重影响了编码的连贯性。

7.  **桌面应用缺少“中途注入”功能**
    *   **编号**: [#71726](https://github.com/anthropics/claude-code/issues/71726)
    *   **热度**: 💬 8 👍 16
    *   **解析**: 这是一个体现 CLI 与桌面端功能差距的特性请求。在 CLI/TUI 中，用户可在 AI 执行任务时输入新消息，该消息会在 AI 完成当前工具调用后被“注入”，无需等待整个任务回合结束。但桌面应用缺乏此功能，用户必须等待 AI 完成整个任务才能进行干预，效率低下。

8.  **`/remote-control` 功能在桌面端无法连接**
    *   **编号**: [#78933](https://github.com/anthropics/claude-code/issues/78933)
    *   **热度**: 💬 7 👍 0
    *   **解析**: 在 Windows 桌面应用中运行 `/remote-control` 命令时，出现 `Cannot read properties of undefined (reading 'session_url')` 的错误，导致远程控制功能完全失效。

9.  **Windows: `Alt+V` 粘贴图片失败**
    *   **编号**: [#69234](https://github.com/anthropics/claude-code/issues/69234)
    *   **热度**: 💬 3 👍 0
    *   **解析**: 一个奇怪的会话级持久 BUG。在 Windows 上，使用 `Alt+V` 粘贴图片时，一旦失败，整个会话期间都无法再成功粘贴。唯一的恢复方法是开启全新的会话。此问题在社区中被广泛复现。

10. **Fable 5 模型固执己见，错误地“纠正”用户**
    *   **编号**: [#80351](https://github.com/anthropics/claude-code/issues/80351)
    *   **热度**: 💬 1 👍 0
    *   **解析**: 用户报告 Fable 5 表现出“固执”的行为，当用户指出其错误时，模型会坚持自己的错误记忆并反驳、纠正用户。这被称为“幻觉”的高级形态，对需要精确反馈的开发任务非常致命。

---

## 🛠️ 重要 PR 进展

1.  **GCP 网关部署添加完整性校验**
    *   **PR**: [#80353](https://github.com/anthropics/claude-code/pull/80353)
    *   **意义**: 增强了 GCP（Google Cloud Platform）网关部署的安全性。当下载的二进制文件 SHA 校验失败时，部署将停止并清理，防止使用恶意或损坏文件，这符合基础设施即代码的最佳实践。

2.  **新增 `account-profiles` 插件**
    *   **PR**: [#80326](https://github.com/anthropics/claude-code/pull/80326)
    *   **意义**: 一个解决“多账号管理”痛点的实验性插件。允许开发者在同一台机器上，为个人、工作或不同客户的 Claude 账号创建隔离的启动环境（`CLAUDE_CONFIG_DIR`），避免配置和会话数据互相干扰。

3.  **修复文档中的失效链接**
    *   **PR**: [#80294](https://github.com/anthropics/claude-code/pull/80294), [#80229](https://github.com/anthropics/claude-code/pull/80229)
    *   **意义**: 维护性 PR，修复了 `README.md` 中的两个已失效的外部链接，通过 Wayback Machine 存档进行重定向。这有助于新用户快速上手，避免“404”困惑。

4.  **修复控制台滚动 Bug**
    *   **PR**: [#80241](https://github.com/anthropics/claude-code/pull/80241)
    *   **意义**: `EMP_Agent` 自动提交的 PR。解决了当 Claude 在控制台输出新内容时，滚动位置会自动跳回顶部的恼人问题，改善了在长对话中追踪信息的体验。

5.  **修复“100%上下文”时自动压缩不触发**
    *   **PR**: [#80196](https://github.com/anthropics/claude-code/pull/80196)
    *   **意义**: 同样是 `EMP_Agent` 提交的 Bug 修复。当上下文窗口使用率达到 100% 时，自动压缩功能未按预期触发。这个修复对于处理长会话、避免因上下文溢出导致模型“失忆”至关重要。

6.  **修复 Max 订阅用户瞬间用尽额度**
    *   **PR**: [#80195](https://github.com/anthropics/claude-code/pull/80195)
    *   **意义**: 解决了一个严重的计费/配额 BUG。部分 Max 订阅用户在使用初期便立即遇到使用额度限制，该 PR 旨在修复这个异常的配额消耗问题。

7.  **Devcontainer 防火墙初始化增强健壮性**
    *   **PR**: [#80112](https://github.com/anthropics/claude-code/pull/80112)
    *   **意义**: 提升了开发容器 (Devcontainer) 初始化脚本的健壮性。使防火墙设置不再因为某个域名的 DNS 解析临时失败而完全中止，提高了在复杂网络环境下首次启动的成功率。

8.  **新增 `twilight` 插件：规范优先的设计与实现**
    *   **PR**: [#80008](https://github.com/anthropics/claude-code/pull/80008)
    *   **意义**: 提交者称之为演示性质 PR。该插件引入了一种“规范优先”的设计与实现技能，配合“专注栈”(focus stack) 功能，旨在让 Claude 在复杂项目中保持高度专注和一致性的开发能力。

9.  **修复 Windows: `tools/call` 未分发到 Filesystem MCP Server**
    *   **PR**: 未关联具体 PR，但 Issue [#80189](https://github.com/anthropics/claude-code/issues/80189) 反映了与 #80002 类似的 Windows 端问题。
    *   **意义**: 证明该问题不是 macOS 专属，可能是跨平台的架构性 BUG。

---

## 📈 功能需求趋势

从近期的 Issue 中，我们可以提炼出社区最关注的几个功能方向：

1.  **跨平台 MCP 工具稳定性**: 多个 Issue 指向 MCP（Model Context Protocol）工具调用在不同平台（macOS, Windows）上的不一致性和静默失败问题。社区对工具调用的**可靠性**和**错误反馈透明性**提出了极高要求。
2.  **会话与数据管理能力**: 社区强烈希望获得对会话数据的**自主控制权**，包括不被强制删除聊天记录（#62272）、能够主动管理上下文压缩（#80196），以及在多账号间实现**配置和会话数据的隔离**（#80326）。
3.  **模型行为与安全策略优化**: 以 Fable 5 为代表的新模型，其**安全审核策略**需要更精细，避免对合法安全/合规工作的误判。同时，用户期望模型在出现错误时能保持**开放和可纠正的态度**，而不是固执己见（#80351）。
4.  **核心工作流健壮性**: 用户对于 VS Code 扩展周期性挂起（#75571）、Windows 图片粘贴持续失败（#69234）等影响核心编码体验的“慢性” Bug 非常不满，这些是影响留存率的关键因素。
5.  **协作与远程控制功能补齐**: 桌面端缺少 CLI 模式的“中途介入”功能（#71726），以及 `/remote-control` 无法使用（#78933），反映出桌面端作为独立产品的功能仍有较大改善空间。

---

## 💡 开发者关注点

-   **最大痛点：Filesystem 类 MCP 工具调用“静默失败”**。开发者普遍反映，`tools/call` 在通过审批后没有触发任何后续动作或错误日志，调试极为困难。受影响场景覆盖了从文件读写、代码生成到依赖 `context` 的几乎所有任务。
-   **数据安全焦虑：聊天记录“无缘无故”被删**。即使设置了长时间保留，重启/更新后数据仍可能丢失。开发者对此表现出强烈的不安，并已开始社区自救（开发恢复脚本）。这表明产品的数据持久化策略需要更透明、更可预测。
-   **模型信任度下降：Fable 5 的“过度审核”与“固执己见”**。开发者认为，如果一个 AI 工具无法用于讨论安全防御策略，那它就丧失了一半的价值。当模型拒绝听从用户的正确指正时，信任基础将被严重动摇。
-   **配置“不生效”的困惑**：`#5140` 问题持续了近一年，用户设置无法应用到项目级别。这导致用户不得不复写配置或面对权限失控，是长期影响开发体验的“暗伤”。
-   **跨平台体验不一致**：Windows 用户的 Bug 似乎更多（GitHub 连接器、图片粘贴、Remote Control 等），表明产品的 Windows 版本可能缺乏足够的测试覆盖，或与 Windows 生态的兼容性存在问题。
-   **Agent 协作功能 Bug**：`/fork` 泄漏任务到父进程（#79722）、Agent-teams 中 iTerm2 命令被截断（#80302）、Stop Hook 失效（#78121）等，表明新兴的 Agent 协作与任务编排功能正处于不稳定期，使用者需谨慎评估风险。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-23

---

## 📰 今日速览

- 团队发布了 4 个 Rust 版 Codex CLI 的 alpha 版本（0.145.0-alpha.30 及 0.146.0-alpha.1~3），持续迭代底层引擎。
- 社区 Issue 热度集中在 **Windows 平台性能与稳定性问题**，多个高赞帖揭露冷启动冻结、WMI 占用 100% CPU、子代理进程泄漏等严重缺陷。
- 合并的 PR 聚焦于 **线程管理、MCP 工具链、编译时优化和 SQLite 配置集中化**，部分 PR 已关闭并落地。

---

## 📦 版本发布

| Release | 版本 | 说明 |
|---------|------|------|
| rust-v0.146.0-alpha.3 | 0.146.0-alpha.3 | Codex CLI Rust 引擎 |
| rust-v0.146.0-alpha.2 | 0.146.0-alpha.2 | Codex CLI Rust 引擎 |
| rust-v0.146.0-alpha.1 | 0.146.0-alpha.1 | Codex CLI Rust 引擎 |
| rust-v0.145.0-alpha.30 | 0.145.0-alpha.30 | Codex CLI Rust 引擎 |

> 暂无详细变更日志，均为内部迭代。

---

## 🔥 社区热点 Issues（Top 10）

### 1. #20214 – Codex App 在 Windows 11 Pro 上频繁卡死
- **👍 71 · 💬 72** · [查看](https://github.com/openai/codex/issues/20214)
- 用户反映即使资源充足（Ryzen 5 5600 + 32GB RAM），App 仍频繁冻结。社区大量 +1，成为 Windows 版最强烈的性能诉求。

### 2. #16815 – WSL 代理模式报错：缺失 base path
- **👍 13 · 💬 22** · [查看](https://github.com/openai/codex/issues/16815)
- 切换 Agent 环境到 WSL 时触发 `AbsolutePathBuf deserialized without a base path`，影响 Business 用户。

### 3. #28015 – 安全检测误报，反复打断本地仓库维护
- **👍 3 · 💬 22** · [查看](https://github.com/openai/codex/issues/28015)
- CLI 将正常的 DevOps 操作（如检查、清理）标记为“可能的安全风险”，触发额外确认弹窗，降低自动化效率。

### 4. #34014 – Windows 独立 App 导致 WMI Provider Host CPU 占满
- **👍 11 · 💬 18** · [查看](https://github.com/openai/codex/issues/34014)
- 打开一个项目时 WMI 进程飙至 90~100%，而同一项目在 VS Code 扩展中正常。推测是 App 的沙箱或文件监控实现有缺陷。

### 5. #10599 – 请求可配置工作树（worktree）存放位置
- **👍 66 · 💬 16** · [查看](https://github.com/openai/codex/issues/10599)
- macOS 用户希望能通过 UI 自定义 Git worktree 创建路径，而非强制放在 `~/.codex` 下。点赞数高，表明该需求普遍。

### 6. #24103 – Meta Ads MCP OAuth 登录失败（invalid_client_metadata）
- **👍 4 · 💬 14** · [查看](https://github.com/openai/codex/issues/24103)
- 官方 Meta Ads MCP 服务器在 Codex 中无法完成动态注册，返回 `400 Bad Request`。影响广告相关开发工作流。

### 7. #23200 – 支持无头远程 Linux 主机（移动端不依赖桌面 App 在线）
- **👍 42 · 💬 13** · [查看](https://github.com/openai/codex/issues/23200)
- 移动端用户希望直接连接 SSH 上的 Linux 服务器，而不需要本地桌面 App 保持在线。增强移动端实用性。

### 8. #19001 – 在 CLI 中集成 RTK 过滤 Shell 输出，减少 60~90% Token 消耗
- **👍 15 · 💬 13** · [查看](https://github.com/openai/codex/issues/19001)
- 用户提出通过“Real-time Knowledge”技术过滤命令行输出冗余内容，大幅节省 Token 用量。技术方案较清晰，获得社区认可。

### 9. #17574 – 子代理泄漏 stdio MCP 帮助进程，xcodebuildmcp 和 chrome-devtools-mcp 无限累积
- **👍 0 · 💬 12** · [查看](https://github.com/openai/codex/issues/17574)
- 子代理每次调用 MCP 工具都会残留进程树，导致资源泄漏。Pro 用户报告，虽点赞数低但评论多，说明问题普遍且棘手。

### 10. #20730 – WSL 环境自定义宠物（Custom Pets）因路径规范化失败
- **👍 20 · 💬 11** · [查看](https://github.com/openai/codex/issues/20730)
- Windows 用户使用 WSL 时，自定义宠物目录路径在转换中出错导致无法加载。影响了趣味性功能的使用。

---

## 🔧 重要 PR 进展（Top 10）

### 1. #34840 – 为 App 服务器添加持久化线程固定功能
- [PR 链接](https://github.com/openai/codex/pull/34840) · **已合并**
- 新增 `isPinned` 字段，允许用户固定/取消固定线程，支持游标分页和关系过滤。改善线程管理体验。

### 2. #34839 – MCP 启动中断时保留用户输入
- [PR 链接](https://github.com/openai/codex/pull/34839) · **已合并**
- 修复了用户输入在 MCP 工具启动过程中被中断时未记录的问题，保证对话历史完整。

### 3. #34835 – 在 Turn 性能分析中跟踪压缩时间
- [PR 链接](https://github.com/openai/codex/pull/34835) · **已合并**
- 新增 `compaction_ms` 指标，将上下文压缩耗时从空闲时间中分离，便于性能调优。

### 4. #34831 – 进程内 App 服务器关闭前刷新分析数据
- [PR 链接](https://github.com/openai/codex/pull/34831) · **已合并**
- 确保 analytics 队列在关闭前完成发送，避免已完成的 Turn 事件丢失。

### 5. #31320 – 测量缺少 trusted connector ID 的 MCP UI URI
- [PR 链接](https://github.com/openai/codex/pull/31320) · **已合并**
- 增加埋点，检测 MCP 工具中 UI 资源 URI 缺少可信连接器 ID 的情况，便于排查渲染异常。

### 6. #31393 – 向 Codex App 通告 MCP App UI 支持能力
- [PR 链接](https://github.com/openai/codex/pull/31393) · **已合并**
- 允许 App 告知 MCP 服务器自己能渲染 WebView，从而区分 widget 支持客户端与纯文本客户端。

### 7. #34825 – 减少构建 Responses 请求时的克隆操作
- [PR 链接](https://github.com/openai/codex/pull/34825) · **已合并**
- 将工具定义序列化为共享 JSON，避免重复克隆，降低内存和 CPU 开销。

### 8. #34819 – 跨 Codex 入口启用 Git 溯源
- [PR 链接](https://github.com/openai/codex/pull/34819) · **已合并**
- 在 App 服务器、MCP 服务器和 `codex debug prompt-input` 中安装 git attribution 扩展，使提交/PR 生成时带上认证工作区策略。

### 9. #34808 – 集中化 SQLite 连接配置
- [PR 链接](https://github.com/openai/codex/pull/34808) · **已合并**
- 引入 `SqliteConfig` 统一管理数据库路径和连接池，替代分散的路径助手，提升可维护性。

### 10. #34796 – 超 4 KiB 的行跳过语法高亮
- [PR 链接](https://github.com/openai/codex/pull/34796) · **已合并**
- 防止极长行导致 CPU/内存飙升，回退为纯文本显示，提升整体响应性。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issues 中提炼出社区最关注的方向：

1. **Windows 平台性能与稳定性**  
   - 冷启动冻结、WMI 高 CPU、进程泄漏、更新后回退，是当前最大痛点。
2. **子代理与 MCP 工具链优化**  
   - 子代理模型可配置、MCP 登录失败、工具进程泄漏、UI 资源路由等。
3. **远程开发支持**  
   - 移动端直接连接 Linux 服务器、SSH worktree 侧边栏分组回归。
4. **会话管理增强**  
   - 固定/持久化侧边聊天、线程分组、工作树路径可配置。
5. **Token 与预算控制**  
   - RTK 过滤、速率限制恢复、Ultra 预算支持，用户担忧成本失控。
6. **安全检测准确性**  
   - 假阳性阻断正常操作，需要更精细的规则或允许列表。

---

## 🎯 开发者关注点

- **Windows 用户普遍反映 App 体验远差于 VS Code 扩展**，同一项目在扩展中正常，在独立 App 中却触发 WMI 高负载或卡死。
- **WSL 兼容性问题频发**：路径解析、PowerShell 环境继承、子代理 spawn 失败等，使 Windows + WSL 工作流几乎不可用。
- **MCP 生态接入门槛较高**：Meta Ads OAuth 失败、UI 资源 URI 无 trusted ID、子代理泄漏 stdio 进程，影响第三方工具集成信心。
- **会话数据管理存在隐患**：`chat_processes.json` 损坏导致应用反复重启、线程列表丢失、侧边聊天消失等现象，用户数据安全诉求强烈。
- **性能优化呼声高**：不仅桌面 App，CLI 在长线程恢复时也出现空白终端，子代理磁盘占用飙升，“性能”标签成为今日 Issue 中出现频率最高的关键词。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 – 2026-07-23

## 📌 今日速览

项目发布 `v0.53.0-preview.0`，重点修复了 A2A 协议下工具响应分组与角色合并导致的 400 错误，并引入 `caretaker-triage` LLM 分类编排器。社区持续聚焦 **Agent 行为可靠性**与**安全性**，多个高票 Issue 指出子代理返回假成功状态、通用代理无限挂起等核心问题；另有一批关于内存系统无限重试、shell 命令卡死及浏览器代理 Wayland 兼容性问题的讨论热度较高。

---

## 🚀 版本发布

### v0.53.0-preview.0
- **修复**：A2A 模式下取消的工具响应分组及连续角色合并，防止 API 返回 400 Bad Request。
- **功能**：引入 LLM 驱动的 `caretaker-triage` 分类编排器及容器构建支持（仍为内部基础设施）。
- **完整变更日志**：[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)

### v0.52.0
- **重构**：从工作区上下文中排除临时 CI 配置文件。
- **功能**：`caretaker-triage` 基础模块（triage worker core）添加。
- **完整变更日志**：[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)

### v0.52.0-nightly.20260722.gc776c665b
- **安全修复**：A2A 服务器强制执行工作区信任与任务隔离，防止远程代码执行（RCE）。
- **完整变更日志**：[Nightly](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly.20260722.gc776c665b)

---

## 🔥 社区热点 Issues

**以下按讨论热度与影响面排序，均为过去 24 小时内有更新的未关闭 Issue。**

### 1. [BUG] 子代理达到 MAX_TURNS 后假报成功 `#22323`
- **标签**：p1, agent, bug
- **摘要**：`codebase_investigator` 子代理实际因最大轮次被中断，却返回 `status: "success"`，导致用户无法发现分析未完成。
- **社区反应**：12 条评论，2 个 👍，社区认为此行为会误导用户，破坏信任。
- **链接**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. [BUG] 通用代理无限挂起 `#21409`
- **标签**：p1, agent, bug
- **摘要**：当 Gemini CLI 委派任务给通用代理（generalist agent）时，即使简单操作（如创建文件夹）也会永远挂起，必须手动取消。
- **社区反应**：8 条评论，8 个 👍（最高赞），影响面广，用户不得不主动禁用子代理来绕过。
- **链接**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. [ENHANCEMENT] 通过零依赖 OS 沙箱利用模型的 bash 亲和性 `#19873`
- **标签**：p2, agent, enhancement, effort/large
- **摘要**：提议让 Gemini 3 模型以原生 POSIX 工具链操作代码库，同时通过沙箱隔离保证安全。社区认为能大幅提升模型执行效率。
- **社区反应**：8 条评论，讨论落地路径与安全权衡。
- **链接**：[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### 4. [EPIC] 组件级评估体系 `#24353`
- **标签**：p1, agent, eval_infra, customer-issue
- **摘要**：已有 76 个行为评估测试，运行于 6 个支持模型；此 Epic 规划更细粒度的组件级评估，确保代理质量可衡量。
- **社区反应**：7 条评论，团队内关注度高，属于长期质量基础设施。
- **链接**：[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 5. [EPIC] AST 感知的文件读取与搜索 `#22745`
- **标签**：p2, agent, feature, customer-issue
- **摘要**：评估引入 AST 感知工具，通过单个调用精准读取方法边界，减少噪声与 token 消耗，并支持代码导航。
- **社区反应**：7 条评论，1 个 👍，社区期待该功能提升大型代码库下的效率。
- **链接**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 6. [BUG] shell 命令执行后卡在“等待输入” `#25166`
- **标签**：p1, core, bug, effort/medium
- **摘要**：简单 CLI 命令完成后，Gemini 仍显示 shell 活动且卡住，必须重新启动。发生在不会请求用户输入的命令。
- **社区反应**：4 条评论，3 个 👍，严重影响日常开发流程。
- **链接**：[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 7. [BUG] 自动内存对低信号会话无限重试 `#26522`
- **标签**：p2, agent, bug
- **摘要**：Auto Memory 仅当提取代理成功读取 transcript 后才标记会话已处理；若代理认为会话低信号而跳过，该会话会反复弹出，浪费 token。
- **社区反应**：5 条评论，社区建议加入去重或隔离机制。
- **链接**：[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 8. [BUG] 浏览器代理在 Wayland 下崩溃 `#21983`
- **标签**：p1, agent, browser, bug
- **摘要**：`browser_agent` 在 Wayland 显示服务器下直接失败，返回 `Termination Reason: GOAL` 但无实际输出。
- **社区反应**：4 条评论，1 个 👍，Wayland 用户受到影响，需要兼容性适配。
- **链接**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 9. [BUG] 超过 128 个工具时返回 400 错误 `#24246`
- **标签**：p2, agent, bug
- **摘要**：当可用工具超过 400+ 时，Gemini CLI 触发 API 400，期望模型能智能过滤。
- **社区反应**：3 条评论，开发者希望工具列表动态修剪。
- **链接**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 10. [BUG] ~~/.gemini/agents/ 下的符号链接不被识别 `#20079`
- **标签**：p2, agent, bug, need-information
- **摘要**：用户将自定义代理文件设为符号链接后，CLI 无法识别该代理。
- **社区反应**：4 条评论，影响自定义代理工作流的灵活性。
- **链接**：[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)

---

## 📥 重要 PR 进展

**以下为过去 24 小时内更新或合并的关键 PR。**

### 1. [PR #28509] 过滤 history 中的思维链片段
- **摘要**：当上下文管理关闭时，`getHistoryTurns` 会泄漏 `thought: true` 的内部推理内容，导致重复块。本 PR 彻底过滤掉这些片段。
- **状态**：OPEN，待关联 Issue
- **链接**：[#28509](https://github.com/google-gemini/gemini-cli/pull/28509)

### 2. [PR #28485] 模型选择器添加 gemini-3.5-flash
- **摘要**：修复 v0.51.0 用户无法选择 gemini-3.5-flash 的问题，原因是 `buildAvailableModels` 遗留路径未包含该模型。
- **标签**：p2, core, size/m～l
- **状态**：OPEN
- **链接**：[#28485](https://github.com/google-gemini/gemini-cli/pull/28485)

### 3. [PR #28469] 模型回退时轮换会话 ID
- **摘要**：当永久回退到 gemini-2.5-flash 时，若同一 session ID 发送请求会触发 Code Assist 后端的 `[API Error: Please submit a new query to continue with the Flash model.]`。本 PR 在回退时自动旋转 session ID。
- **标签**：size/m
- **状态**：OPEN
- **链接**：[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)

### 4. [PR #28506] `/compress` 命令增加 AbortSignal
- **摘要**：背景压缩任务无法被取消，可能导致用户输入新提示时仍有残留网络请求。本 PR 增加 AbortController 并传递 signal。
- **状态**：已关闭（合并）
- **链接**：[#28506](https://github.com/google-gemini/gemini-cli/pull/28506)

### 5. [PR #28446] OAuth 令牌交换使用原生 fetch
- **摘要**：部分无头 VPS 上 `gemini login` 因“Premature close”失败，原生 fetch 替代现有方案可修复。
- **标签**：p1, security, size/m
- **状态**：OPEN
- **链接**：[#28446](https://github.com/google-gemini/gemini-cli/pull/28446)

### 6. [PR #28431] 自动化 PR 生成基础设施（Cloud Run + Workflows）
- **摘要**：为 Gemini CLI SSR 代码生成管道配置容器化运行时、Cloud Run Job 与 Eventarc 触发的工作流，属于内部自动发布基础设施。
- **标签**：size/m
- **状态**：OPEN
- **链接**：[#28431](https://github.com/google-gemini/gemini-cli/pull/28431)

### 7. [PR #28024] 依赖更新：@opentelemetry/core 2.7.1 → 2.8.0
- **摘要**：Dependabot 自动更新 OpenTelemetry 核心库，保持遥测兼容性。
- **标签**：dependencies, size/xl
- **状态**：OPEN（长时间未合并）
- **链接**：[#28024](https://github.com/google-gemini/gemini-cli/pull/28024)

### 8. [PR #28505] 文档修复：添加 .md 扩展名到六个交叉引用链接
- **摘要**：`docs/reference/policy-engine.md` 等文档中的跨页面链接缺失 `.md` 扩展名，导致 GitHub 渲染 404。
- **标签**：size/s
- **状态**：OPEN
- **链接**：[#28505](https://github.com/google-gemini/gemini-cli/pull/28505)

### 9. [PR #28499] 修复 policy 通配符 DENY 误屏蔽 MCP 工具
- **摘要**：当使用 `tools.core` 通配符 DENY 时，所有 MCP 工具也被排除。本 PR 引入 `excludeMcp` 属性，将规则限制于内置工具。
- **标签**：size/s
- **状态**：已关闭（合并）
- **链接**：[#28499](https://github.com/google-gemini/gemini-cli/pull/28499)

### 10. [PR #28169] 新增 eval 覆盖率报告命令
- **摘要**：添加 `eval:coverage` 命令，通过交叉引用评估清单与工具注册表来报告内置工具的测试覆盖率。
- **标签**：size/l
- **状态**：已关闭（合并）
- **链接**：[#28169](https://github.com/google-gemini/gemini-cli/pull/28169)

---

## 🧭 功能需求趋势

| 方向 | 代表 Issue | 说明 |
| --- | --- | --- |
| **代理行为可靠性与透明性** | #22323, #21409, #21968 | 社区强烈要求子代理/通用代理不假成功、不无限挂起，且主动使用 skills 和子代理。 |
| **安全与沙箱** | #19873, #22093, #26525 | 零依赖 OS 沙箱、权限隔离、日志红化，防止 RCE 与敏感信息泄露。 |
| **AST 感知的文件操作** | #22745, #22746 | 提升代码库导航、精确读取、减少 token 开销，尤其对大型项目。 |
| **自动记忆系统优化** | #26522, #26516, #26523 | 避免无效循环重试、隔离错误补丁、可追溯性改进。 |
| **终端 UI 稳定性** | #25166, #21924, #24935 | shell 命令卡死、resize 闪烁、外部编辑器退出后界面错乱。 |
| **浏览器代理兼容性** | #21983, #22232 | Wayland 支持、锁恢复、settings.json 覆盖生效。 |
| **工具数量动态管理** | #24246 | 超过 API 限制时自动过滤或分组，避免 400 错误。 |
| **新模型支持** | #28485 (PR) | 社区期待快速纳入 gemini-3.5-flash 等新模型。 |

---

## 🧑‍💻 开发者关注点

1. **子代理权限与行为失控**：多起报告称子代理在用户禁止的情况下自动运行（#22093），或忽略用户配置的 `maxTurns` 等设置（#22267）。
2. **调试信息不完整**：`/bug` 报告只包含主会话，缺乏子代理内部轨迹，导致问题定位困难（#21763）。
3. **符号链接/配置文件支持不足**：自定义代理路径不支持 symlink（#20079），影响灵活部署。
4. **OAuth 登录脆弱性**：部分环境 token 交换失败（#28440），需原生 fetch 或备用方案。
5. **低质量会话浪费 token**：Auto Memory 在低价值会话上反复重试（#26522），开发者期望更智能的过滤与去重。

---

*日报数据基于 GitHub repo `google-gemini/gemini-cli` 截止 2026-07-23 上午的公开信息生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-07-23）

## 今日速览
Copilot CLI 在本日发布三个补丁版本（v1.0.74-1/2/3），主要增加 Gemini-3.6-flash 模型支持并修复多会话界面泄露问题；社区活跃度维持高位，35 个 Issue 更新中涌现多个回归性 Bug（如认证失败、渲染无限循环）和新功能诉求（模型池可配置、子代理信用明细），显示用户对稳定性和定制化需求强烈。

---

## 版本发布

### v1.0.74-1、v1.0.74-2、v1.0.74-3
过去 24 小时连续发布三个修复子版本，主要亮点：
- **新增**：首次运行时显示启动画面以引导用户选择默认沙箱；新增对 **Gemini-3.6-flash** 模型的支持。
- **改进**：修复多会话复用时的对话框泄漏问题——切换回会话后，之前的选择器会正确重新打开；`$` 交互式 Shell 快捷操作获得优化。

---

## 社区热点 Issues（精选 10 条）

### 1. [#2282 – [CLOSED] MCP 服务器连接失败](https://github.com/github/copilot-cli/issues/2282)
- **重要性**：Windows 用户安装后无法连接 MCP 服务器，错误提示指向 GitHub MCP Server。虽已关闭，但评论数最多（11 条），反映 MCP 集成初期的普遍适配问题。
- **社区反应**：用户尝试执行 `/mcp show` 命令排查，但根因仍待官方详细说明。

### 2. [#443 – 内置 PDF 阅读支持（功能请求）](https://github.com/github/copilot-cli/issues/443)
- **重要性**：获得 33 个 👍，社区呼声极高。用户需要直接处理学术论文、技术文档等 PDF 内容，当前只能借助外部工具。
- **社区反应**：讨论集中于 `pdftotext` 等替代方案，但希望官方原生支持。

### 3. [#4016 – [OPEN] BYOK 在 `--acp` 模式下仍被拒绝（认证回归）](https://github.com/github/copilot-cli/issues/4016)
- **重要性**：使用自定义 Provider（`COPILOT_PROVIDER_*`）的用户在 `copilot --acp --stdio` 下再次遇到“认证需要 GitHub 登录”错误，是 #3048 和 #3902 的回归，影响企业 BYOK 部署。
- **社区反应**：开发者提供了复现步骤，期望尽快修复。

### 4. [#4163 – [OPEN] Linux 上僵尸进程累积](https://github.com/github/copilot-cli/issues/4163)
- **重要性**：子进程结束后未被 `wait`，约每分钟产生 2 个僵尸进程，长时间会话可积累数十个，影响系统资源。
- **社区反应**：用户提供详细进程列表和复现条件，属于平台稳定性关键缺陷。

### 5. [#4183 – [OPEN] 自动压缩无法防止 CAPI 5MB 请求体限制](https://github.com/github/copilot-cli/issues/4183)
- **重要性**：即使上下文 token 未超限，序列化的工具历史仍可能超过 Cloud API 的 5MB 上限，导致调用彻底失败。7 个 👍 表明很多长会话用户受影响。
- **社区反应**：用户建议在压缩时考虑序列化大小而非仅 token 数。

### 6. [#4218 – [OPEN] 允许用户配置自动模式使用的模型池](https://github.com/github/copilot-cli/issues/4218)
- **重要性**：Auto 模式会从所有可用模型中选择，但用户无法限定范围，导致成本和行为不可预测。6 个 👍，新开请求热度高。
- **社区反应**：用户希望指定“仅使用 Claude 系列”或“低成本模型优先”等策略。

### 7. [#4207 – [OPEN] 显示子代理的 AI 信用消耗明细](https://github.com/github/copilot-cli/issues/4207)
- **重要性**：当前只显示会话总信用数，无法区分主代理、子代理、后台任务的分别消耗。6 个 👍，企业级审计需求强烈。
- **社区反应**：用户要求 `/usage` 命令提供每子代理的明细。

### 8. [#4222 – [OPEN] 主界面冻结回归 (#2802 再现)](https://github.com/github/copilot-cli/issues/4222)
- **重要性**：v1.0.72+ 在 VS Code 集成终端中再次出现无限 React/Ink 渲染循环，屏幕卡死，输出被吞。历史性 Bug 复发，严重影响日常使用。
- **社区反应**：用户提供 Windows 原生终端截图及回滚至 v1.0.28 可解。

### 9. [#4206 – [OPEN] 环境状态栏“Loading:”永不停歇](https://github.com/github/copilot-cli/issues/4206)
- **重要性**：企业环境中，当组织 MCP 策略导致内置 GitHub MCP 握手卡住时，底部状态栏永远显示“Loading:”，尽管功能实际正常。企业级用户反馈。
- **社区反应**：描述清晰，期望状态栏能正确反映完成状态。

### 10. [#4016 – [OPEN] 认证回归（已在上文列出，此处替换为其他热门）] -> 改为 [#4165 – [OPEN] `copilot --resume` 在 Windows 上冷启动挂起](https://github.com/github/copilot-cli/issues/4165)
- **重要性**：直接使用 `--resume` 恢复会话时，界面停在“Resuming session...”无响应，必须先手动启动 copilot 再恢复，导致流程断裂。
- **社区反应**：Windows 用户普遍受影响，评论指出与进程初始化顺序有关。

---

## 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：[#3163 – ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)  
该 PR 内容与 Copilot CLI 核心功能无关（疑似描述错误或垃圾 PR），**不作为重要进展**。社区期待后续有价值的功能合并。

---

## 功能需求趋势

从本周更新及历史 Issue 中提炼出社区最关注的五大功能方向：

1. **模型与上下文控制**：允许用户配置自动模式可用的模型池（#4218）；增加自动压缩阈值可调参数（#1688）；自定义 Provider 认证优化（#4016）。
2. **子代理（Subagent）可观测性**：显示每子代理的 AI 信用消耗明细（#4207）；支持显式内联调用子代理并维护上下文（#4208）。
3. **原生文件支持**：内置 PDF 读取（#443）—— 学术和技术文档场景高需求。
4. **终端兼容性改进**：tmux 内暗色主题渲染问题（#4212）；OSC 133 Shell 集成序列（#3428）；Windows 通知崩溃（#4219）。
5. **MCP 生态稳定**：解决企业策略下 MCP 握手阻塞（#4206）；修复 MCP 工具 schema 延迟加载后的上下文成本计算误差（#4189）。

---

## 开发者关注点

从 Bugs 和反馈中汇总当前社区的痛点与高频问题：

- **认证回归**：BYOK 在 `--acp` 模式下再次需要 GitHub 登录（#4016），严重影响企业自建模型用户。
- **进程/资源泄漏**：Linux 僵尸进程累积（#4163）；Windows exit 时 `FAST_FAIL_FATAL_APP_EXIT` 崩溃（#4217）。
- **UI 渲染崩溃**：无限 React/Ink 循环在 v1.0.72+ 回归（#4222），且部分用户报告 tmux 下命令完成检测失败（#4223）。
- **计划/权限误报**：`git log -L` 参数被误认为目录路径（#4221）；只读 `gh api GET` 被阻止（#4220）。
- **Windows 特有稳定性**：`--resume` 挂起（#4165）；通知功能启用后原生崩溃（#4219）。
- **长会话容错不足**：自动压缩无法防止 CAPI 5MB 请求体溢出（#4183）。

社区整体对 **回归 Bug 的修复速度**和 **企业级可配置性** 表达了较高期待。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我根据您提供的 GitHub 数据，为您生成 2026-07-23 的 Kimi Code CLI 社区动态日报。

---

## Kimi Code CLI 社区动态日报 | 2026-07-23

### 今日速览

过去24小时内，Kimi Code CLI 无新版本发布，但社区活跃度较高，主要集中在 **Bug 修复** 和 **API 兼容性** 两个方向。一个关键的 API 限流错误 (#2318) 引发用户关注，同时 Windows 环境下的编码问题 (#2532) 也被开发者报告。两个 PR 正在解决 Shell 子进程管理和文件替换工具中的逻辑缺陷。

### 版本发布

无新版本发布。

### 社区热点 Issues

过去24小时内更新了3个 Issue，均已纳入分析。

1.  **#2318: [Bug] 组织级 TPD 限流错误**
    -   **重要性:** 🔥🔥🔥🔥🔥 该 Issue 影响用户正常使用，报告称即使在使用 `kimi 2.6` 版本并订阅 `moonshot.ai` 付费服务后，仍然遇到 `request reached organization TPD rate limit` 错误。用户认为这是 TPD（每日Token处理量）计算错误。
    -   **社区反应:** 获得 2 个 👍，并有 1 条评论，明确指出了“Incorrect TPD Calculation”，表明这是一个影响范围较广的服务端计费/限流问题。
    -   **链接:** [MoonshotAI/kimi-cli Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

2.  **#2531: [Bug] MCP 工具名称与 Schemas 被 Moonshot API 拒绝 (HTTP 400)**
    -   **重要性:** 🔥🔥🔥🔥 对于正在集成 MCP（多能力协议）工具的高级用户而言，这是一个关键的兼容性问题。用户 `sbdsam` 报告，在使用 `kimi-cli 1.49.0` 时，自定义的函数参数 Schema 因不符合 “moonshot flavored json schema” 而被 API 拒绝。
    -   **社区反应:** 刚刚创建，有 1 条评论，尚未引起广泛讨论，但问题本身技术性很强，直接关系到客户端与 Moonshot API 的交互规范。
    -   **链接:** [MoonshotAI/kimi-cli Issue #2531](https://github.com/MoonshotAI/kimi-cli/issues/2531)

3.  **#2532: [Bug] Windows 下 stdout 重定向时启动崩溃 (UnicodeEncodeError: gbk)**
    -   **重要性:** 🔥🔥🔥 一个影响 Windows 中文用户的兼容性 Bug。当开发者在 CI/CD 或通过管道重定向 stdout 时，`kimi web` 会因无法编码 `➜` 字符而崩溃，影响自动化流程。
    -   **社区反应:** 刚刚创建，暂无评论，但问题描述清晰，指出了具体的操作系统、区域设置和场景，属于平台特定问题。
    -   **链接:** [MoonshotAI/kimi-cli Issue #2532](https://github.com/MoonshotAI/kimi-cli/issues/2532)

### 重要 PR 进展

过去24小时内更新了2个 PR，均旨在修复关键 Bug。

1.  **#2524: [Fix] 修复 `StrReplaceFile` 工具的替换计数逻辑**
    -   **功能/修复:** 修复了 `StrReplaceFile` 工具在处理链式替换时，报告的替换次数与原始文件内容进行对比，而不是与动态变化的文件内容对比的 Bug。这可能导致对替换效果的错误判断。
    -   **重要性:** 🔥🔥🔥🔥 对于自动化代码修改场景至关重要，错误的计数可能导致用户对工具行为产生误解。
    -   **链接:** [MoonshotAI/kimi-cli PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)

2.  **#2530: [Fix] 修复 Shell 命令中分离子进程导致管道阻塞的问题**
    -   **功能/修复:** 修复了在前台执行 Shell 命令时，如果命令包含 `some_daemon &` 这样的分离子进程，主进程会因等待子进程的 stdout/stderr 管道 EOF 而阻塞，直到超时。
    -   **重要性:** 🔥🔥🔥🔥 此修复解决了 `kimi` 在执行类似后台启动服务的命令时挂起或响应慢的问题，对于需要启动长期运行进程的开发工作流非常重要。
    -   **链接:** [MoonshotAI/kimi-cli PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)

### 功能需求趋势

因本次数据窗口内无 Issues 明确标记为 Feature Request，但从 Bug 报告中可以推断出社区的核心关注方向：

-   **平台兼容性与稳定性 (Windows)**: #2532 显示了用户对 Windows 平台良好体验的强烈需求，尤其是在非交互式场景（如 CI/CD）下的稳定性。
-   **API 交互规范与一致性**: #2531 表明高级用户在深度集成 MCP 时，对客户端与 Moonshot API 之间的 Schema 规范一致性有较高要求，希望工具能自动兼容或提供明确的客户端预处理方案。
-   **资源管理与计费透明度**: #2318 突显了用户对服务端资源限制（TPD）计算逻辑的关注，尤其是在付费模式下，用户期望一个准确、透明的计费和限制机制。

### 开发者关注点

-   **计费/限流 Bug**: #2318 是当前社区最关注的痛点，用户明确指出服务端的 TPD 计算可能存在 Bug，这直接影响用户的正常使用和付费意愿。
-   **API Schema 兼容性问题**: #2531 所描述的 API 400 错误是开发者与 API 集成时的常见痛点。开发者期望 SDK 或 CLI 能自动对其进行 sanitize（净化/预处理），而不是由 API 返回晦涩的错误。
-   **Windows 环境编码问题**: #2532 是 Windows 中文用户的特定痛点。在非英文 Locale 下，处理 Unicode 字符（特别是特殊符号）时容易出错，影响了工具在管道和重定向场景下的可用性。
-   **Shell 子进程管理**: #2530 修复了后台进程导致 CLI 挂起的问题，这反映了开发者在实际使用中遇到的常见 Shell 行为与异步 IO 模型之间的冲突。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为您生成的 2026-07-23 OpenCode 社区动态日报。

---

# OpenCode 社区日报 | 2026-07-23

## 今日速览

今日社区核心动态是 **OpenCode Go 订阅服务出现大规模故障**，大量用户报告“Request blocked by upstream provider”错误，影响面广泛，为今日焦点。此外，**自动发现 OpenAI 兼容模型的特性请求**因获得近 200 个点赞而备受瞩目，显示出社区对简化本地模型配置的迫切需求。同时，**CPU 空闲时高占用**的性能问题也引发了开发者的广泛讨论。

## 社区热点 Issues

以下为过去24小时内更新、最受关注的10个Issue，主要反映了服务稳定性、用户体验与性能问题。

1.  **#6231 [特性请求] 自动发现 OpenAI 兼容提供商的模型**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **摘要**: 用户需要手动在配置文件中罗列模型，对于本地模型频繁更换的场景非常繁琐。此请求旨在让系统自动从 OpenAI 兼容端点获取模型列表。
    - **社区反应**: 获得185个点赞和28条评论，是该列表中最受欢迎的议题，反映出自动化配置是社区的共同期盼。
    - **链接**: `anomalco/opencode Issue #6231`

2.  **#38257 [Bug] OpenCode Go 订阅的 `chat/completions` 接口返回 401 错误**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **摘要**: 核心服务故障。所有 OpenCode Go 订阅用户在使用聊天补全功能时，都遇到了“Request blocked by upstream provider”错误，而 `/v1/models` 接口却正常。
    - **社区反应**: 25条评论，8个点赞，表明这是一个广泛影响的严重服务端问题。
    - **链接**: `anomalco/opencode Issue #38257`

3.  **#38218 [Bug] OpenCode Go 订阅所有模型均报错“Request blocked”**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **摘要**: 与 #38257 类似，此问题同样报告了 Go 订阅下的所有模型调用均失败，错误信息同上。
    - **社区反应**: 21条评论，5个点赞，进一步佐证了该问题的普遍性和严重性。
    - **链接**: `anomalco/opencode Issue #38218`

4.  **#19466 [Bug] OpenCode 在空闲等待时占用大量 CPU**
    - **重要性**: ⭐⭐⭐⭐
    - **摘要**: 当 OpenCode 因 API 速率限制而等待重试时，占用了约 50% 的单核 CPU 资源。
    - **社区反应**: 15条评论，11个点赞。开发者普遍认为应用程序在空闲状态下的 CPU 占用应该极低，这是一个明显的性能 bug。
    - **链接**: `anomalco/opencode Issue #19466`

5.  **#38195 [Bug] 401 AuthError: Go 订阅的模型被上游提供商阻止**
    - **重要性**: ⭐⭐⭐⭐
    - **摘要**: 另一个关于 Go 订阅故障的报告，确认该问题在 Windows 和 macOS 的桌面版及 Hermes 上均能复现，免费模型则正常。
    - **社区反应**: 15条评论，15个点赞。高点赞数表明众多用户受到影响，问题确认度高。
    - **链接**: `anomalco/opencode Issue #38195`

6.  **#37970 [Bug] 最新版本移除了计划/构建模式选项**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 用户反馈在 v1.18.0 版本中，原有的“Plan”和“Build”模式切换按钮消失。AI 有时会自行计划，有时则直接执行，行为不可控。
    - **社区反应**: 10条评论，1个点赞。虽然点赞数不高，但这是一个影响核心工作流程的 UI/UX 回归问题。
    - **链接**: `anomalco/opencode Issue #37970`

7.  **#22260 [特性请求] `read` 工具应支持音频和视频附件**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 内置的 `read` 工具可以返回图片和 PDF，但音频和视频文件则被当作二进制文件拒绝，限制了 AI Agent 处理本地媒体文件的能力。
    - **社区反应**: 7条评论，7个点赞。表明用户有使用 AI 分析本地多媒体文件的明确需求。
    - **链接**: `anomalco/opencode Issue #22260`

8.  **#18011 [Bug] LM Studio 自动发现的模型不完整**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 用户报告从 LM Studio 自动发现的模型列表不完整（仅显示 3/9 个模型），即便使用 API Key 也无法解决。
    - **社区反应**: 6条评论，4个点赞。这个长期存在的 Issue 持续获得关注，说明本地模型集的兼容性是痛点。
    - **链接**: `anomalco/opencode Issue #18011`

9.  **#26459 [Bug] 在基于 Web 的 VSCode 终端中复制剪贴板失败**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 在 code-server、GitHub Codespaces、Gitpod 等远程开发环境中，点击“复制到剪贴板”功能失效，虽然显示提示，但内容并未成功复制。
    - **社区反应**: 7条评论，1个点赞。功能虽小，但对远程开发者来说是关键阻塞点。
    - **链接**: `anomalco/opencode Issue #26459`

10. **#32165 [特性请求] 用户消息快速跳转侧边栏**
    - **重要性**: ⭐⭐
    - **摘要**: 建议在 TUI 界面右侧增加一个细长的侧边栏，仅列出用户自己的输入（Prompt），方便在长对话中快速定位和跳转。
    - **社区反应**: 3条评论，0个点赞。虽然热度不高，但这是一个提升用户体验的创新想法。
    - **链接**: `anomalco/opencode Issue #32165`

## 重要 PR 进展

以下为过去24小时内创建或有显著更新的10个重要 PR，涉及性能、功能增强和 Bug 修复。

1.  **#38403 [Fix] 修复导航栏工具提示延迟问题**
    - **内容**: 将标题栏后退/前进导航的工具提示延迟统一为标准 400ms，移除了之前的 800ms 覆盖。
    - **链接**: `anomalco/opencode PR #38403`

2.  **#38401 [Fix] 为 `/api/generate` 路径加载动态模型**
    - **内容**: 解决了 Gemini 等动态加载的模型在无状态 `/api/generate` 接口上调用失败的问题，增强了 API 兼容性。
    - **链接**: `anomalco/opencode PR #38401`

3.  **#38396 [Docs] 新增 V2 TUI 主题参考文档**
    - **内容**: 为新的 V2 TUI 生成主题指南，并链接到文档导航，帮助用户自定义界面。
    - **链接**: `anomalco/opencode PR #38396`

4.  **#38398 [Feat] 新增每次对话的 Token 使用量诊断功能**
    - **内容**: 记录模型报告的本轮 Token 使用量（新增、缓存、总计），并显示在界面上，帮助用户优化对话成本。可通过开发者工具开关。
    - **链接**: `anomalco/opencode PR #38398`

5.  **#37226 [Feat] 支持为每个 Agent 单独配置子代理深度**
    - **内容**: 允许在 Agent 的配置文件中设置 `subagent_depth` 字段，覆盖全局深度设置。若未设置则回退到全局配置。
    - **链接**: `anomalco/opencode PR #37226`

6.  **#33453 [Fix] 为自定义模型默认启用图像输入**
    - **内容**: 修复了自定义模型配置中图像支持可能遗漏的问题，现在新创建的自定义模型会默认支持文本和图像输入。
    - **链接**: `anomalco/opencode PR #33453`

7.  **#33450 [Feat] TUI 会话选择器增加全局模式**
    - **内容**: 在 TUI 的会话选择器中添加了一个明确的“全局”模式，允许用户发现和恢复其他项目下的会话。
    - **链接**: `anomalco/opencode PR #33450`

8.  **#38397 [Refactor] 从 V2 主题生成 TUI 语法高亮**
    - **内容**: 重构代码，使完整的 TUI 语法样式直接从已解析的 V2 Token 中生成，简化主题管理与渲染逻辑。
    - **链接**: `anomalco/opencode PR #38397`

9.  **#33444 [Fix] 修复会话摘要统计信息归零的问题**
    - **内容**: 修复了在特定性能优化后，会话的摘要信息（文件数、新增/删除行数）被错误清零的 Bug。
    - **链接**: `anomalco/opencode PR #33444`

10. **#33375 [Fix] 修复 Windows 上本地插件名在状态对话框中的显示问题**
    - **内容**: 解决了 Windows 系统因路径分隔符差异（`\` vs `/`）导致状态对话框中本地插件名显示不完整的问题。
    - **链接**: `anomalco/opencode PR #33375`

## 功能需求趋势

从今日的 Issues 中，可以提炼出以下社区最关注的功能方向：

1.  **模型集成与自动化**: 社区强烈期望能够**自动发现和配置模型**，特别是针对 OpenAI 兼容的本地 Provider。`#6231` 的高热度表明手动配置流程是很大的痛点。
2.  **多模态能力扩展**: 用户不再满足于纯文本交互，希望 AI Agent 能够**处理音频和视频文件**，从而分析更丰富的多媒体内容 (`#22260`)。
3.  **TUI 用户体验增强**: 对 TUI 界面的精细打磨需求增加，例如**提供快速跳转的侧边栏** (`#32165`)、更明确的主题管理和可视化 Token 消耗 (`#38398`)。
4.  **性能与资源占用**: 即使在空闲状态下，应用也应**最小化 CPU 等资源消耗** (`#19466`)，这表明用户对后台运行的“优雅”程度有较高要求。

## 开发者关注点

开发者反馈中反映出的主要痛点和需求聚焦于：

1.  **服务稳定性是第一要务**: 今天最核心的问题是 **OpenCode Go 订阅服务的持续性故障**，大量用户因“Request blocked by upstream provider”错误而无法使用核心功能。这表明服务中断对开发者工作流的影响是灾难性的，社区对此高度敏感。
2.  **UI/UX 变更需要谨慎**: **“Plan/Build”模式被移除 (`#37970`)** 和**新会话模型选择异常 (`#38333`)** 等都是用户界面改版带来的负面反馈。开发者不喜欢核心交互逻辑的突然变化，尤其是缺乏明确说明或替代方案的情况下。
3.  **特定环境和配置的兼容性问题**: 开发者在**远程开发环境 (Codespaces, code-server)** 中使用核心功能（如剪贴板）时受阻 (`#26459`)，以及对**本地模型（如 LM Studio）** 支持不完美的抱怨 (`#18011`)，说明跨平台和异构环境的兼容性仍有大量改进空间。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-23

## 今日速览

今天 Pi 社区最值得关注的是 **AI 提供商兼容性修复**：针对 `bedrock-converse-stream` 的适应性思考（Adaptive Thinking）检测问题已被修复，同时新 PR 解决了 SDK 重试无法中断的严重缺陷。此外，**OpenRouter OAuth 原生支持** 和 **StepFun 四个新模型提供商** 的合并为社区带来了更多的连接自由。在 Bug 方面，`httpIdleTimeoutMs` 回归问题、全局日志路径硬编码等问题得到了解决，社区对多设备登录冲突和会话目录残留问题的讨论热度不减。

## 版本发布

无

---

## 社区热点 Issues（精选 10 条）

### 1. `#6768` [bug] 使用 Copilot Enterprise 许可证无法进行上下文压缩
- **链接**: [Issue #6768](https://github.com/earendil-works/pi/issues/6768)
- **重要性**: 🔥 **高** - 影响使用 Copilot Enterprise 许可证的大型企业用户，导致核心功能（上下文压缩）完全失效，社区 8 个 👍 表示强烈关注。
- **社区反应**: 用户 `MojangPlsFix` 反馈了 OpenAI 和 Anthropic 模型下的具体错误信息（如 `421 Misdirected Request` 和“Compaction failed”），目前状态为 OPEN，尚未有官方回复。

### 2. `#6922` [bug] 默认模型无法设置为 llama.cpp 模型：启动时显示 "No models available"
- **链接**: [Issue #6922](https://github.com/earendil-works/pi/issues/6922)
- **重要性**: 🔥 **高** - 影响了依赖本地模型（如 llama.cpp）的用户群。启动即报错，严重阻碍了本地部署场景的使用。社区 7 个 👍 说明这是本地化用户的核心痛点。
- **社区反应**: 用户 `highlyunavailable` 明确指出了配置冲突导致模型识别失败，状态为 OPEN。

### 3. `#6940` [bug] OpenRouter 缓存断点在工具结果前停止推进
- **链接**: [Issue #6940](https://github.com/earendil-works/pi/issues/6940)
- **重要性**: 🔥 **高** - 影响通过 OpenRouter 使用 Anthropic 模型的用户。缓存断点未正确提前，导致未缓存 tokens 持续增长，显著增加使用成本并降低响应速度。社区反应迅速，已有多条评论讨论复现与影响。
- **社区反应**: 用户 `mteam88` 提供了详细的 tokens 数据分析，显示出问题严重性，状态为 CLOSED（可能已快速定位）。

### 4. `#6476` [bug] 回归问题：`httpIdleTimeoutMs` 在自托管 OpenAI 兼容提供者上不再生效
- **链接**: [Issue #6476](https://github.com/earendil-works/pi/issues/6476)
- **重要性**: 🔥 **高** - 这是 v0.80.6 引入的回归问题，直接导致自托管模型（如通过 vLLM 部署）超时。12 条评论说明影响范围广，用户被迫降级。此问题已关闭，代表社区高度关注的 bug 得到修复或接受。
- **社区反应**: 用户 `hoho51` 在 v0.80.3 正常、v0.80.6 出错的对比中进行了精准定位，且已被 CLOSED，意味着修复方案可能已上线或正在推进。

### 5. `#6686` [bug] Pi 自动登出 GitHub
- **链接**: [Issue #6686](https://github.com/earendil-works/pi/issues/6686)
- **重要性**: 🔥 **高** - 这是 **历史遗留问题的复发**（关联 #2725），影响 macOS 和 Linux 多系统多实例的用户。10 条评论显示该问题困扰着许多活跃用户，影响日常使用。
- **社区反应**: 用户 `bachya` 精确描述了在 v0.80.7 仍可复现，状态为 CLOSED（归类为`no-action`），但社区持续讨论。

### 6. `#6989` [bug] 文件变更前置条件在按文件队列之前运行
- **链接**: [Issue #6989](https://github.com/earendil-works/pi/issues/6989)
- **重要性**: 🔥 **高** - 这是影响并行文件处理的核心 Bug。当 `toolExecution: "parallel"` 时，前置条件（例如编辑文件前的检查）会在所有并行调用开始 `前` 运行，导致后续文件无法正确排队，出现执行冲突。影响编辑工作流稳定性。
- **社区反应**: 用户 `snrogers` 提供了详细的 Node.js 24 和 Pi v0.80.6 环境信息，直接点出 `edit_file` 内置工具的问题，已被 CLOSED（`untriaged`）。

### 7. `#6973` [bug] Windows 上的 Kitty/modifyOtherKeys + VT 输入协商在 herdr 的嵌套 ConPTY 中破坏方向键和 Escape
- **链接**: [Issue #6973](https://github.com/earendil-works/pi/issues/6973)
- **重要性**: 🔥 **中-高** - 特定环境（herdr 多路复用器 + Windows）下的兼容性问题，导致菜单选择、设置等交互功能完全失败。虽然场景较窄，但阻塞了该环境下的所有用户。
- **社区反应**: 用户 `jeremie-ouellet-telus` 准确描述了问题，状态为 CLOSED，问题可能被规避或暂时无法处理。

### 8. `#6970` [bug] Pi 与 `GitHub Copilot Plugin` 的集成导致 `github-copilot` 提供者 token 失效
- **链接**: [Issue #6970](https://github.com/earendil-works/pi/issues/6970)
- **重要性**: 🔥 **中-高** - 该问题与 `#6686` 密切相关。解释了多设备使用时 Pi 自动登出的根本原因——使用了 Copilot Plugin 集成而非 OAuth 导致的 token 冲突。对使用 Copilot 用户来说至关重要。
- **社区反应**: 用户 `bittervec` 深入分析了 Pi 使用的认证方式（`GitHub Copilot Plugin`）与 OAuth 的不同，解释了导致多设备 token 失效的原因，已被 CLOSED。

### 9. `#6974` [功能请求] 在 `shift-Tab` 循环思考力度的对话框增加支持
- **链接**: [Issue #6974](https://github.com/earendil-works/pi/issues/6974)
- **重要性**: 🔥 **中** - 在 `/tree` 视图和“Summarize branch”对话框中无法切换思考力度（Thinking Effort），限制了用户对总结生成过程的精细化控制。
- **社区反应**: 用户 `mye` 确认在 Windows Terminal 和 Pi v0.81.1 上测试不生效，已被 CLOSED。

### 10. `#6957` [bug] aws-bedrock 提供者在存在 AWS_* 环境变量时忽略配置文件
- **链接**: [Issue #6957](https://github.com/earendil-works/pi/issues/6957)
- **重要性**: 🔥 **中** - 配置了 `aws-bedrock` profile 的用户，如果环境中存在 AWS 凭证，Pi 会错误地使用环境变量而不是配置的 profile，导致多账户管理混乱。
- **社区反应**: 用户 `christianbasch` 明确指出了代码中 `getConfiguredBedrockCredentials` 的优先级 Bug，已被 CLOSED。

---

## 重要 PR 进展（精选 10 条）

### 1. `#6927` feat：增加原生 OpenRouter OAuth 支持
- **链接**: [PR #6927](https://github.com/earendil-works/pi/pull/6927)
- **类型**: 🆕 新功能
- **摘要**: 为 Pi 增加了对 OpenRouter 的原生 OAuth 支持，使用 PKCE S256 流程。用户可以通过浏览器授权，无需手动输入 API 密钥。此 PR 大幅提升了 OpenRouter 用户的使用体验。
- **状态**: 🟢 CLOSED (已合并)

### 2. `#6980` fix(ai): 使提供者重试可中断
- **链接**: [PR #6980](https://github.com/earendil-works/pi/pull/6980)
- **类型**: 🔧 修复
- **摘要**: **解决 #6911**。替换了 Anthropic 和 OpenAI SDK 内部重试机制，使其尊重 `maxRetrayDelayMS`（原 SDK 会完整睡眠 `Retry-After` 头中的天数），并允许通过 `AbortSignal` 中断。这防止了用户无法中断的超长重试（如遇到 429 响应）。
- **状态**: 🟢 OPEN

### 3. `#6955` handle openai websocket previous_response_not_found error
- **链接**: [PR #6955](https://github.com/earendil-works/pi/pull/6955)
- **类型**: 🔧 修复
- **摘要**: **解决 #6931**。当 OpenAI WebSocket 连接收到 `previous_response_not_found` 错误时，自动清除缓存并建立新连接，避免了长期阻塞。
- **状态**: 🟢 CLOSED (已合并)

### 4. `#6964` fix(coding-agent): 修复 Windows 上同级依赖扩展显示绝对路径的问题
- **链接**: [PR #6964](https://github.com/earendil-works/pi/pull/6964)
- **类型**: 🔧 修复
- **摘要**: **解决 #6619**。修复了在 Windows 上，通过 npm 包依赖的同级扩展在 [Extensions] 横幅中显示完整绝对路径的错误。改善了 Windows 用户的扩展管理体验。
- **状态**: 🟢 CLOSED (已合并)

### 5. `#6680` parse extension package name in case of dependent extension
- **链接**: [PR #6680](https://github.com/earendil-works/pi/pull/6680)
- **类型**: 🔧 修复
- **摘要**: **部分解决 #6619**。进一步修复扩展包名解析问题，为 `#6964` 提供了基础。
- **状态**: 🟢 CLOSED (已合并)

### 6. `#6958` write tui debug/crash logs into the configured pi agent dir
- **链接**: [PR #6958](https://github.com/earendil-works/pi/pull/6958)
- **类型**: 🔧 修复
- **摘要**: **解决 #6652**。修复了 pi-tui 崩溃日志硬编码 `~/.pi/agent/pi-crash.log` 的问题，现在会写入用户通过 `PI_CODING_AGENT_DIR` 配置的目录，提升了日志管理的灵活性。
- **状态**: 🟢 CLOSED (已合并)

### 7. `#6976` fix(coding-agent): preserve TTY in startup benchmark
- **链接**: [PR #6976](https://github.com/earendil-works/pi/pull/6976)
- **类型**: 🔧 修复
- **摘要**: **解决 #6975**。修复了 `scripts/profile-coding-agent-node.mjs` 的 TUI 基准测试无法进入交互模式的错误。现在可以正常进行启动性能分析。
- **状态**: 🟢 CLOSED (已合并)

### 8. `#6984` feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream
- **链接**: [PR #6984](https://github.com/earendil-works/pi/pull/6984)
- **类型**: 🆕 新功能 / 🔧 修复
- **摘要**: **解决 #6986**。为 Bedrock 提供者增加了 `compat.forceAdaptiveThinking` 支持。之前仅通过模型 ID/名称匹配决定是否使用自适应思考格式，导致一些模型（如 sonnet-5）请求失败。现在可以通过配置强制使用。
- **状态**: 🟢 CLOSED (已合并)

### 9. `#6960` feat(ai): add StepFun providers
- **链接**: [PR #6960](https://github.com/earendil-works/pi/pull/6960)
- **类型**: 🆕 新功能
- **摘要**: 增加了四个基于 [models.dev] 的 **StepFun** 模型提供商，涵盖中国站（`stepfun`）、全球站（`stepfun-ai`）以及预付费路由，为社区提供了新的 AI 模型选择。
- **状态**: 🟢 CLOSED (已合并)

### 10. `#6916` feat(agent): add AgentHarness execution tools
- **链接**: [PR #6916](https://github.com/earendil-works/pi/pull/6916)
- **类型**: 🆕 新功能
- **摘要**: 引入了 `AgentHarnessTool` 抽象，为 `AgentTool.execute()` 添加了任意应用特定上下文（如 `ExecutionEnvironment`、会话 ID）。这是一个重要的基础架构改进，旨在大幅提升 Pi 作为智能体框架的灵活性和可扩展性。由 `badlogic` 和 `mitsuhiko` 协作提出。
- **状态**: 🟢 CLOSED (已合并)

---

## 功能需求趋势

从今天的 Issues 和 PRs 中，可以提炼出社区最关注的几个功能方向：

1.  **多设备/多会话管理**：`#6686`（自动登出）和 `#6970`（Token 冲突）的持续讨论显示，用户对跨设备无缝使用 Pi 的**稳定性**和**认证机制**有强烈诉求。需要更好的 OAuth 支持或设备管理策略。

2.  **IDE 集成**：`#6985` 请求将 VS Code 扩展加入 Pi 包仓库，表明社区正在积极构建围绕 Pi 的开发工具生态。

3.  **性能优化与基准测试**：`#6976`（修复启动基准测试）和 `#6774`（优化外部编辑器启动速度）显示，社区对 **启动速度** 和 **运行效率** 有持续关注。对 `--no-session` 残留临时文件的关注（#6924）也体现了对资源清理的重视。

4.  **新模型 / 提供商支持**：`#6927`（OpenRouter OAuth）、`#6960`（StepFun 提供商）是今天的主要新功能。社区对 **更多 AI 后端连接** 的渴望非常明显，特别是中国市场和替代性提供商。

5.  **更好的缓存和上下文管理**：`#6940` 展现了社区对 **缓存策略** 的精细化要求（尤其是跨提供者），以及 `#6974` 中的 **思考力度** 控制。用户希望更可控、更经济的上下文压缩方式。

6.  **扩展 API 与 RPC 改进**：`#6865`（`get_available_thinking_levels` RPC）和 `#6971`（`bash_execution_update` 事件）表明，社区希望 **更丰富的扩展 API** 和 **更实时的事件反馈**，以构建

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成了 2026-07-23 的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 - 2026-07-23

## 1. 今日速览

今日社区动态集中体现为**问题修复与新功能预览并行**。核心亮点是发布了 **v0.20.0 预览版**，标志着项目进入新阶段的冲刺。同时，社区围绕 `web_fetch` 工具因参数配置错误导致的完全不可用问题展开了激烈讨论，并有多项 PR 对此进行修复。此外，VS Code 插件的图像附件上传 Bug 及核心测试套件变红的问题也获得了开发者的快速响应。

## 2. 版本发布

- **[v0.20.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-preview.0)**
  - 这是 v0.20.0 系列的预览版。该版本主要包含遥测模块的内部改进，由 `@doudouOUC` 提交，覆盖了守护进程指标初始化的排序问题，并记录了 metricReader 的不对称性。这标志着一个新的功能迭代周期正式开始。
- **[v0.20.0-nightly.20260722](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260722.b98306b7e)**
  - 与预览版同步的每日构建版本，包含相同的遥测修复。
- **[v0.0.0-benchmark-poc.20260722.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.0.0-benchmark-poc.20260722.1)**
  - **注意：** 这是一个临时性的、用于验证基准测试 CI 流程的概念验证版本，并非产品发布。它用于测试 GitHub Actions 到 ECS 再到结果发布的整个链路。

## 3. 社区热点 Issues (Top 10)

1.  **[#7284 bug(core): side-query 强制关闭思考功能，导致依赖思考的端点出错](https://github.com/QwenLM/qwen-code/issues/7284)** (P1, 已关闭)
    - **重要性：** 这是今日最核心的 Bug，直接导致了 `web_fetch` 工具完全不可用。`runSideQuery` 内部始终将 `enable_thinking` 设置为 `false`，对于要求该参数为 `true` 的 TokenPlan 端点，会返回 400 错误。
    - **社区反应：** 大量 Issue (如 #7440) 关联到此问题，社区反馈激烈。

2.  **[#7316 Bug: OpenAI 对 toolCall 的特殊处理导致 subAgent 完全无法使用](https://github.com/QwenLM/qwen-code/issues/7316)** (P2, 已关闭)
    - **重要性：** 此 Bug 严重影响了子代理（subAgent）功能的可用性，特别是在使用 OpenAI 兼容模型时。问题在于模型对可选参数 `working_dir` 返回空字符串，导致工具调用参数冲突。
    - **社区反应：** 共有 5 条评论，用户 `Truraly` 描述了详细的复现步骤，引起了开发者关注。

3.  **[#7489 Bug: VS Code 插件文件选择器插入 @filename 但图片未附加到模型](https://github.com/QwenLM/qwen-code/issues/7489)** (状态: 需更多信息)
    - **重要性：** 这是影响 VS Code 用户体验的关键 Bug。用户尝试通过附件按钮上传图片时，聊天输入框仅显示文件名，而图片并未真正发送给模型。
    - **社区反应：** 用户 `kengnattakit` 提交了清晰的 Bug 报告，开发者已标记为“需更多信息”，并已有相关 PR 尝试修复。

4.  **[#7537 核心测试套件在 main 分支变红](https://github.com/QwenLM/qwen-code/issues/7537)** (P1)
    - **重要性：** 主分支的 CI 测试失败，导致所有拉取请求的测试均显示为红色。这会严重阻碍开发流程，是所有开发者目前最需要关注的阻塞性问题。
    - **社区反应：** `chinesepowered` 明确指出这是一个主分支问题，并非 PR 本身的错误，需要紧急修复。

5.  **[#7500 bug(serve): --open 参数在端口被占用后打开的是旧的错误端口](https://github.com/QwenLM/qwen-code/issues/7500)** (P2)
    - **重要性：** 一个影响开发者本地测试体验的易用性 Bug。当指定端口被占用时，服务会回退到新端口，但 `--open` 参数仍然试图打开旧的、已被占用的端口。
    - **社区反应：** `yiliang114` 提供了清晰的复现步骤，该问题正等待修复。

6.  **[#7404 Bug: 启动后检查新版本超时时间过短](https://github.com/QwenLM/qwen-code/issues/7404)** (P3, 已关闭)
    - **重要性：** 对于加载了较长历史会话的用户，启动时的版本检查几乎必定超时，提示“registry error”。这影响了老用户的初始体验。
    - **社区反应：** `mitslyj` 报告了此问题，获得了 4 条评论，开发者已将其关闭。

7.  **[#7515 Bug: 版本更新检查失败（注册表错误）](https://github.com/QwenLM/qwen-code/issues/7515)** (P3)
    - **重要性：** 这是一个影响面较广的更新检查问题。从 v0.20.1 开始，`qwen update` 命令持续失败。问题似乎与获取 npm 路径的方式有关。
    - **社区反应：** `dtometzki` 报告了此问题，并验证了网络直连注册表是正常的，问题出在客户端代码。

8.  **[#6577 [BUG] Windows PowerShell / Terminal 中 Alt+V 无法粘贴截图](https://github.com/QwenLM/qwen-code/issues/6577)** (P2, 欢迎 PR)
    - **重要性：** 一个长期未解决的功能 Bug，影响了 Windows 用户的截图粘贴体验。社区成员已标记为“欢迎 PR”，希望有人能贡献修复。
    - **社区反应：** 用户 `zeonseoi` 提供了详细的复现步骤，该 Issue 仍然开放，等待贡献者。

9.  **[#7287 bug(core): 自动记忆 MEMORY.md 未注册到文件读取缓存，首次更新总被拒绝](https://github.com/QwenLM/qwen-code/issues/7287)** (P2)
    - **重要性：** 自动记忆功能的核心缺陷。系统加载了记忆文件，但并未标记为“已读”，导致模型首次尝试更新记忆时被安全机制拒绝。
    - **社区反应：** `pomelo-nwu` 进行了深入分析，指出了 `FileReadCache` 的注册缺失问题。

10. **[#7516 主分支 CI 失败：E2E 测试](https://github.com/QwenLM/qwen-code/issues/7516)** (状态: 准备自动修复)
    - **重要性：** 自动创建的 CI 失败报告，专门标注了失败的提交和工作流。这为开发者排查问题提供了精确的起点，并标记为可自动修复。
    - **社区反应：** 机器人自动生成，反映了项目对 CI 稳定性的重视。

## 4. 重要 PR 进展 (Top 10)

1.  **[#7493 fix(vscode): 使用文件选择器的图片路径进行视觉输入](https://github.com/QwenLM/qwen-code/pull/7493)** (开放中)
    - **内容：** 直接修复了 #7489 问题。当 VS Code 插件附加图片时，现在会向聊天输入框插入转义后的绝对图片路径，而非仅显示文件名。
    - **状态：** 已创建，等待审查。

2.  **[#7499 fix(acp-bridge): 在对话轮次压缩中保留事件归属信息](https://github.com/QwenLM/qwen-code/pull/7499)** (开放中)
    - **内容：** 修复了对话轮次边界压缩时，会丢失事件的 `promptId` 和 `originatorClientId` 信息的问题。这影响了下游消费者（如桥接客户端）对事件的正确分组和重放。
    - **状态：** 由 `he-yufeng` 提交，正在审查。

3.  **[#7540 test(core): 在代理测试注册表中存根驻留代理方法](https://github.com/QwenLM/qwen-code/pull/7540)** (已关闭)
    - **内容：** 一个紧急修复，旨在解决 #7537 中描述的核心测试套件变红问题。通过在测试注册表中为 `registry.complete` 提供存根，修复了失败的分支调度测试。
    - **状态：** 快速合并。

4.  **[#7534 fix(core): 当提供商需要思考功能时重试请求](https://github.com/QwenLM/qwen-code/pull/7534)** (开放中)
    - **内容：** 针对 #7284 中的 `enable_thinking` 问题，提供了一个自动恢复策略。当请求因 `enable_thinking: false` 被提供商拒绝时，会自动重试一次，并在后续记住该模型的能力。
    - **状态：** 由 `yiliang114` 提交，是一个积极的兜底修复方案。

5.  **[#7545 fix(cli): 避免将版本管理器的 npm 封装视为 npm-cli.js](https://github.com/QwenLM/qwen-code/pull/7545)** (开放中)
    - **内容：** 修复 #7543 和 #7515 中提到的更新检查问题。通过验证找到的 npm 路径是否指向一个 JavaScript 文件，从而避免将 `mise` 等版本管理器的 Bash 封装误判为真正的 npm-cli。
    - **状态：** 由 `nerdalytics` 提交，直接解决更新失败的核心原因。

6.  **[#7531 fix(core): 封闭 AUTO 破坏性 Git 守卫中的强制标志和检出漏洞](https://github.com/QwenLM/qwen-code/pull/7531)** (开放中)
    - **内容：** 增强了安全防护。对 `DESTRUCTIVE_GIT_PATTERNS` 进行了扩展，防止通过不同的命令拼写（如 `git clean -f` 或 `git checkout .`）绕过已有的安全限制。
    - **状态：** 由 `chinesepowered` 提交，增强安全性。

7.  **[#7527 fix(core): 从 Hook 和工具发现子进程环境中剥离守护进程密钥](https://github.com/QwenLM/qwen-code/pull/7527)** (开放中)
    - **内容：** 强化了安全措施。继 #7256 之后，将 `sanitizeChildEnv()` 的清理范围扩展到 Hook 运行器和工具发现进程，防止敏感环境变量（如 API 密钥）泄露到这些子进程中。
    - **状态：** 安全相关的增强 PR。

8.  **[#7530 refactor(core): 按缓存稳定性对提示片段进行分层](https://github.com/QwenLM/qwen-code/pull/7530)** (开放中)
    - **内容：** 对提示片段进行重构。为每个注入的提示片段添加了显式标记和“缓存稳定性”层级，并按稳定、上下文、易变三步顺序渲染，旨在优化 Prompt 缓存效率和性能。
    - **状态：** 由 `DragonnZhang` 提交，一项重要的性能优化工作。

9.  **[#7548 fix(sdk-python): 将 max_tool_calls 和 max_subagent_depth 验证为整数](https://github.com/QwenLM/qwen-code/pull/7548)** (开放中)
    - **内容：** 完善 Python SDK 的参数校验。确保 `max_tool_calls` 和 `max_subagent_depth` 参数在范围检查前，会先严格校验其输入是否为整数，与其他类似参数行为保持一致。
    - **状态：** SDK 质量改进。

10. **[#7517 feat(core): 添加 Goal v3 状态协议](https://github.com/QwenLM/qwen-code/pull/7517)** (开放中)
    - **内容：** 这是一个重要特性，引入了新的“目标”状态管理协议。它定义了生命周期状态、乐观并发控制、确定性状态转换和向后兼容迁移等功能，为未来的代理状态管理奠定了基础。
    - **状态：** 由 `qqqys` 提交，是一个独立可审查的代码片段，是更大功能开发的一部分。

## 5. 功能需求趋势

从今天的 Issues 来看，社区关注的功能方向主要集中在：

1.  **子代理与多代理协作 (Subagents & Multi-Agent):**
    - Issue #7316 反映了 subAgent 在使用外部模型 API 时的兼容性问题，表明社区正尝试在不同模型后端使用子代理功能。
    - Issue #7525 则提出可视化普通对话的计划 DAG（有向无环图），并将待办事项与子代理执行相关联，这暗示用户期望更复杂的任务编排和可视化能力。

2.  **外部集成与数据隐私 (External Integrations & Data Privacy):**
    - Issue #7449 提出了一个面向企业的、与供应商无关的外部内存集成方案，这是一个明显的企业级需求趋势。
    - Issue #7472 修复了钉钉集成中的提及元数据问题，表明社区非常关心与第三方平台集成时的数据完整性和隐私。

3.  **性能优化与冷启动 (Performance & Cold Start):**
    - Issue #7264 (冷启动后续任务：剩余懒加载候选) 和 PR #7530 (按缓存稳定性分层提示片段) 都指向了提升启动速度和降低资源消耗的持续努力。

4.  **Web Shell 体验增强 (Web Shell UX):**
    - Issue #6701 (添加上下文选择器) 和 #6700 (添加工作区选择器) 表明，用户希望在 Web Shell 中有更精细、更便捷的环境和工作区管理能力。
    - PR #7471 (为新建会话添加 Git 模式选择器) 则体现了在 Web Shell 中集成更丰富 Git 工作流的期望。

## 6. 开发者关注点

综合今日的问题报告，开发者的主要痛点和反复出现的问题包括：

1.  **核心功能的连锁 Bug:** 一个 `enable_thinking` 参数配置错误（#7284）导致了 `web_fetch` 工具（#7440）和 Agent 功能（#7298）的全面失效，暴露了内部模块间参数传递的脆弱性。
2.  **启动与更新问题:** 多个 Issue (#7515, #7543, #7404) 都提到了启动时的版本检查失败问题。这不是网络问题，而是代码未能正确处理版本管理工具的封装（如 `mise`）或超时机制不合理导致的。这对所有用户的日常使用造成了干扰。
3.  **安全与密钥暴露:** Issue #6601 和 PR #7527 都聚焦于敏感环境变量的暴露问题。尽管已有修复，但开发者对此类安全问题的关注度非常高，要求将清理逻辑覆盖到所有可能的子进程路径。
4.  **特定平台的兼容性问题:** Windows 上的 `Alt+V` 粘贴（#6577）、移动端浏览器 Web Shell 输入问题（#5958）以及 Linux 上的终端闪烁（#6137）等问题持续存在，说明跨平台体验一致性仍是需要持续投入的领域。
5.  **测试维护的紧迫性:** Issue #7537 指出的主分支测试失败直接阻塞了所有后续 PR 的 CI 流程，凸显了维护一个健康、可执行的测试套

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，这是为您生成的 2026-07-23 DeepSeek TUI (CodeWhale) 社区动态日报。

---

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-23

## 今日速览

距离 v0.9.1 正式发布仅一步之遥，社区贡献者与维护者今日全力冲刺，超过 20 个关键 Issues 和 PRs 被关闭。重点围绕 **Kimi 模型配对修复**、**默认技能包 (Skill Pack)** 落地、**终端用户界面 (TUI) 体验打磨** 以及 **依赖安全扫描** 展开，同时为 v0.9.2 的性能优化（上下文瘦身）埋下伏笔。

## 版本发布

无新版本发布，社区正全力准备 **v0.9.1** 版本。主要修复与合入工作集中在过去24小时内完成。

## 社区热点 Issues

以下是过去 24 小时内更新、最值得关注的 10 个 Issue：

1.  **[#4691] v0.9.1: 发布模型调用的默认 CodeWhale 技能包**
    *   **重要性**: **最高**。这是 v0.9.1 的发版阻塞项。目标是将 CodeWhale 的“技能”系统打造成可与 Kimi Code、Devin CLI 和 Claude Code 匹敌的一流功能。
    *   **社区反应**: 已关闭，并已通过 PR #4695 和 #4692 实现，被标记为发版阻塞。
    *   **链接**: [Issue #4691](https：//github.com/Hmbown/CodeWhale/issues/4691)

2.  **[#4085] macOS 下无法读写 Dropbox 文件夹文件**
    *   **重要性**: **高**。严重影响使用 Dropbox 进行项目同步的 macOS 用户。问题指向 macOS 12+ 的 File Provider 框架，而非沙箱机制。
    *   **社区反应**: 开放中，获得 4 条评论，但暂无解决方案。
    *   **链接**: [Issue #4085](https：//github.com/Hmbown/CodeWhale/issues/4085)

3.  **[#4685] Windows 安装包覆盖用户 PATH 环境变量**
    *   **重要性**: **高**。这是一个严重的安装程序 Bug，会导致用户系统上其他工具失效。影响所有 Windows 10 用户。
    *   **社区反应**: 开放中，刚提交，已有 1 条评论确认问题严重性。
    *   **链接**: [Issue #4685](https：//github.com/Hmbown/CodeWhale/issues/4685)

4.  **[#4687] 修复 Kimi 模型 ID 交叉配对问题**
    *   **重要性**: **高**。发版阻塞项。Kimi Code 与 Moonshot K3 模型使用了相同的端点但模型 ID 不同，导致配置错误时静默失败。PR #4694 已修复此问题。
    *   **社区反应**: 已关闭，修复迅速。
    *   **链接**: [Issue #4687](https：//github.com/Hmbown/CodeWhale/issues/4687)

5.  **[#2766] UI 重构需求**
    *   **重要性**: **中高**。用户长期反馈的痛点：输出难以复制，确认弹窗遮挡主界面且信息无用。显示了社区对 TUI 基础操作体验的持续关注。
    *   **社区反应**: 开放中，获得 9 条评论，社区有共识但尚未有明确的 PR 解决。
    *   **链接**: [Issue #2766](https：//github.com/Hmbown/CodeWhale/issues/2766)

6.  **[#4684] `danger-full-access` 沙箱模式未完全禁用工具层边界检查**
    *   **重要性**: **中高**。这是一个安全语义上的 Bug。用户期望的“完全访问”并未在工具层实现，限制了全局技能（skill）的访问能力。
    *   **社区反应**: 开放中，已有 2 条评论，开发者已介入确认问题根因。
    *   **链接**: [Issue #4684](https：//github.com/Hmbown/CodeWhale/issues/4684)

7.  **[#4704] 上下文瘦身：最小化每个面向模型的提示、模式和载荷**
    *   **重要性**: **中高**。这是为 v0.9.2 规划的核心性能优化，目标是降低 Token 消耗、提升模型响应速度和跨模型一致性。
    *   **社区反应**: 开放中，已分解为多个子 Issue（如 #4705, #4707, #4709），显示这是一个系统性的大工程。
    *   **链接**: [Issue #4704](https：//github.com/Hmbown/CodeWhale/issues/4704)

8.  **[#4227] 帮助贡献者映射 CodeWhale 工作流的辅助工具**
    *   **重要性**: **中**。社区驱动的优秀提案，旨在降低项目贡献者的新手上手成本，应对项目“每天 10+ PR”的高迭代速度。
    *   **社区反应**: 开放中，获得 12 条评论，社区反响热烈，被认为是改善开发者体验的关键。
    *   **链接**: [Issue #4227](https：//github.com/Hmbown/CodeWhale/issues/4227)

9.  **[#2870] EPIC：阶段性命令边界重构**
    *   **重要性**: **中**。一个大型重构的跟踪 Issue，目的是将命令边界重构拆分为更小、可合并的层次。这关系到项目架构的长期健康。
    *   **社区反应**: 开放中，有 17 条评论，是社区深度参与架构讨论的例子。
    *   **链接**: [Issue #2870](https：//github.com/Hmbown/CodeWhale/issues/2870)

10. **[#4713] v0.9.1 安全门禁：深度扫描与依赖项告警处理**
    *   **重要性**: **中**。发版前的强制安全检查。当前有 17 个 Dependabot 告警（7 高 10 中），是发布前的最后一道坎。
    *   **社区反应**: 刚开放，已有对应 PR #4714 处理此问题。
    *   **链接**: [Issue #4713](https：//github.com/Hmbown/CodeWhale/issues/4713)

## 重要 PR 进展

1.  **[#4714] 修复 Dependabot 告警**
    *   **功能**: 应用 `npm audit fix` 解决全部 17 个安全问题。
    *   **链接**: [PR #4714](https：//github.com/Hmbown/CodeWhale/pull/4714)

2.  **[#4711] v0.9.1 的 TUI 焦点：聚焦待办事项和子代理**
    *   **功能**: 重做顶部工作栏，仅显示活跃的待办事项和子代理，隐藏通用操作；使分割线可拖拽；使用主题化的权限轨道。
    *   **链接**: [PR #4711](https：//github.com/Hmbown/CodeWhale/pull/4711)

3.  **[#4695] 默认 CodeWhale 技能包 (v5)**
    *   **功能**: 随 v0.9.1 发布包含面试、计划、实现、调试、审查等 14 个终端用户技能。
    *   **链接**: [PR #4695](https：//github.com/Hmbown/CodeWhale/pull/4695)

4.  **[#4694] 修复 Kimi 模型 ID 交叉配对**
    *   **功能**: 严格校验 Base URL 与 Model ID 的配对关系，对错误配对直接报错，避免静默失败。
    *   **链接**: [PR #4694](https：//github.com/Hmbown/CodeWhale/pull/4694)

5.  **[#4693] v0.9.1 TUI 工作摘要生命周期修正**
    *   **功能**: 修复了“最近工作”摘要显示逻辑、使其在 4 秒后或新操作时自动消失；使操作标题支持多行；修正了顶部区域的层级关系。
    *   **链接**: [PR #4693](https：//github.com/Hmbown/CodeWhale/pull/4693)

6.  **[#4679] 统一的技能管理器 `/skills`**
    *   **功能**: 将 `/skill`、`/skills` 等命令统一为单一入口，提供清点、审计、安装、更新、移除和信任技能的全部功能。
    *   **链接**: [PR #4679](https：//github.com/Hmbown/CodeWhale/pull/4679)

7.  **[#4686] 新增 minimaxi.com 中国区/Token Plan 路由**
    *   **功能**: 支持 `minimax-cn` 和 `minimax-anthropic-cn` 两个新的 Provider 标识符，为中国用户提供更多选择。
    *   **链接**: [PR #4686](https：//github.com/Hmbown/CodeWhale/pull/4686)

8.  **[#4680] 注册 `/debt` 命令的兼容性别名**
    *   **功能**: 将社区中常用的 `/slop` 和 `/canzha` 注册为 `/debt` 命令的别名，降低用户的学习和迁移成本。
    *   **链接**: [PR #4680](https：//github.com/Hmbown/CodeWhale/pull/4680)

9.  **[#4696] 发布分阶段 `/uwu` 主题**
    *   **功能**: 上线全新的 **Uwu** 主题（别名 `owo`， `kawaii`），作为社区主题的一部分，增加产品趣味性。
    *   **链接**: [PR #4696](https：//github.com/Hmbown/CodeWhale/pull/4696)

10. **[#4508] 刷新产品截图**
    *   **功能**: 更新了 GitHub README 和官网首页的产品截图，使其与 v0.9.1 的新 UI 保持一致。
    *   **链接**: [PR #4508](https：//github.com/Hmbown/CodeWhale/pull/4508)

## 功能需求趋势

从近期活跃的 Issues 看，社区的功能需求集中在以下方向：

*   **上下文优化与性能** (`#4704`, `#4705`, `#4707`, `#4709`)：为 v0.9.2 规划的核心方向。社区普遍希望减少 Token 浪费、优化提示词、提高模型响应速度，尤其是在长会话和多工具调用场景下。
*   **UI/UX 打磨** (`#2766`, `#4700`, `#4701`, `#4702`)：终端体验是开发者最关心的部分。需求包括：更好的输出可复制性、更智能的弹窗、更清晰的会话结构、以及更美观的视觉层次（如 `#4676` 中提到的色彩语义化）。
*   **多模型与 Provider 支持** (`#4686`, `#4687`)：社区对集成更多模型供应商有强烈需求。本次的 `minimax` 支持和对 `Kimi` 的修复表明，让不同模型在同一框架内稳定运行是核心目标。
*   **安全与权限管理** (`#4684`, `#4685`)：社区对沙箱模式的语义清晰度和安装程序的健壮性有很高的期望。`danger-full-access` 未能完全生效是一个典型的安全感知不匹配问题。
*   **文档与上手体验** (`#4227`)：随着项目迭代速度加快，降低新贡献者门槛成为社区呼声。自动化开发环境搭建和更清晰的贡献指南是重要趋势。

## 开发者关注点

从 Issues 和 PR 的讨论中可以总结出开发者当前的核心痛点与高频需求：

1.  **Dropbox 兼容性问题** (`#4085`)：macOS 用户在使用默认的云存储路径时遇到权限问题，这是一个非常真实的开发环境阻力。
2.  **Windows 安装器问题** (`#4685`)：覆盖 PATH 是一个“毁灭性”的 Bug，这会极大打击 Windows 用户的首次使用体验，需要立即修复。
3.  **沙箱模式语义不清晰** (`#4684`)：`danger-full-access` 的命名暗示了“完全访问”，但实际行为并非如此。开发者希望安全模式的定义与实际行为严格对应，文档也需要清晰说明。
4.  **API 兼容性与稳定性** (`#4683`, `#4687`)：无论是 DeepSeek 官方 API 的“间歇性失败”，还是 Kimi/Moonshot 的模型 ID 混乱，都表明多 Provider 的兼容性测试和错误信息提示有待加强。
5.  **上下文膨胀** (`#4704` 系列)：对于重度用户，模型上下文中的系统提示、工具输出、子代理回执等无效信息过多，导致 Token 消耗快、模型注意力分散。这是开发者最期待改善的性能痛点之一。
6.  **Session 重启后界面 Bug** (`#4681`)：重开会话后显示不应暴露的 `<turn_meta>` 元数据，属于典型的调试信息残留，影响了专业感。
7.  **自定义 Provider 启动失败** (`#4682`)：设置了自定义提供商名称后程序无法启动，表明在配置验证和参数处理上存在 Bug。

</details>

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*