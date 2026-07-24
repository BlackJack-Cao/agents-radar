# AI CLI 工具社区动态日报 2026-07-24

> 生成时间: 2026-07-23 23:39 UTC | 覆盖工具: 9 个

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

好的，各位技术决策者和开发者。基于今日各主流 AI CLI 工具的社区动态，以下是我的横向对比分析报告。

---

### **AI CLI 工具生态分析报告 (2026-07-24)**

#### **1. 生态全景**

当前 AI CLI 工具生态处于 **高速迭代与残酷竞争并存** 的阶段。所有玩家都在疯狂“修 Bug”与“加功能”，但核心矛盾已经从“能否接入模型”转向了 **“稳定、可控、安全”**。社区反馈显示，用户对**计费透明性**（如 Fable 5 模型在 Max 计划下的额外扣费）、**底层稳定性**（如 Windows 平台的进程泄漏与 TUI 卡死）和**行为可解释性**（如 Agent 为何决定切换模型或执行特定操作）的容忍度正在急剧降低。与此同时，**MCP（模型上下文协议）生态** 正成为竞争焦点，各家都在试图通过强化 MCP 集成来构建工具壁垒。

#### **2. 各工具活跃度对比**

| 工具 | Issues 活跃度 (举例) | PR 活跃度 (举例) | 版本发布 | **核心动态概括** |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 极高 (Fable 5 计费争议获39条评论) | 中 (5个PR，侧重自动化与安全) | 无 | **计费信任危机**，IDE集成痛点突出。 |
| **OpenAI Codex** | 极高 (Linux桌面版需求获826个👍) | 高 (10个PR，侧重Windows稳定性修复) | **3个alpha版本** | **跨平台与性能**是主要战场，Windows及macOS端稳定性问题多。 |
| **Gemini CLI** | 高 (多个P1级子代理与挂起Bug) | 高 (10个PR，侧重安全加固与认证修复) | **1个nightly版本** | **Agent行为可靠性**是最大挑战，正在构建内部评估体系。 |
| **GitHub Copilot CLI** | 中 (CAPI 5MB限制引发广泛讨论) | 低 (2个PR，内容较少) | **2个补丁版本** | **回归问题频发**（如BYOK认证），MCP生态处于打磨期。 |
| **Kimi Code CLI** | 中 (远程会话功能讨论热烈) | 极高 (15个PR，集中修复MCP与Windows兼容性) | 无 | **MCP客户端重写与平台兼容性**是当前主线任务。 |
| **OpenCode** | 高 (V2版本稳定性差引发大量Bug报告) | 高 (10个PR，聚焦V2核心流程修复) | 无 (高频小版本迭代中) | **V2 (Big Pickle) 版本稳定性**是生死存亡问题，UI改版引发用户反弹。 |
| **Pi** | 中 (工具调用严格模式讨论深入) | 高 (10个PR，模型适配与TUI性能兼顾) | 无 | **面向模型提供商适配的精细化**，TUI性能和扩展系统是亮点。 |
| **Qwen Code** | 极高 (44条新Issue，性能回归与CI质量是焦点) | 极高 (50条PR，企业级集成与自动化流程并重) | 无 | **企业级集成与CI自动化**是核心，产品成熟度向商业化迈进。 |
| **CodeWhale (原DeepSeek TUI)** | 中 (发布前安全审查与关键Bug修复) | 中 (6个PR，阻碍发布的严重Bug修复) | 无 (准备v0.9.1) | **版本发布冲刺**，安全审查和输入健壮性是拦路虎。 |

#### **3. 共同关注的功能方向**

各工具社区不约而同地聚焦于以下几点，说明这是 **行业级的共性需求**：

*   **MCP (模型上下文协议) 生态标准化与完善**：
    *   **涉及工具**: Claude Code, GitHub Copilot CLI, Kimi Code CLI, Gemini CLI, OpenCode.
    *   **具体诉求**:
        *   *MCP服务器启动行为透明化*: 要求文档或UI明确告知MCP工具何时可用。(Claude Code, Copilot CLI)
        *   *MCP工具实时状态同步*: 工具变更后能实时通知客户端，而非重启。(Copilot CLI)
        *   *MCP客户端会话管理*: 复用已初始化会话，减少资源开销和启动延迟。(Kimi Code CLI)
        *   *从IDE继承MCP工具*: 期望CLI能与VS Code共享MCP生态。(Copilot CLI)

*   **多模型/多提供商支持与成本控制**：
    *   **涉及工具**: OpenAI Codex, Kimi Code CLI, Pi, CodeWhale.
    *   **具体诉求**:
        *   *“子代理”独立选模型*: 按任务复杂度和成本，为子任务分配不同模型。(Kimi Code CLI)
        *   *模型自动发现*: 简化本地LLM提供商（如Ollama）的配置流程。(OpenCode)
        *   *Agent自动切换模型的透明化*: 用户要求知道“为何”及“如何”切换。(CodeWhale)

*   **AI Agent行为的透明性与可控制性**：
    *   **涉及工具**: Claude Code, Gemini CLI, OpenCode.
    *   **具体诉求**:
        *   *详细的Token/用量统计*: 要求JSONL日志中增加时间戳，钩子payload携带会话总用量。(Claude Code)
        *   *展示子代理的推理过程*: 要求UI呈现子Agent的“思考”链，非黑盒操作。(OpenCode)
        *   *权限系统的精确性*: 用户对“安全筛选器”误报合法工作感到挫败。(Claude Code)

*   **平台稳定性与兼容性**：
    *   **涉及工具**: OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, OpenCode.
    *   **具体诉求**:
        *   *Windows平台性能崩溃*: WMI风暴、`taskkill.exe`进程泄漏、高CPU占用是普遍痛点。(OpenAI Codex)
        *   *WSL2/ARM64兼容性*: 原生二进制及剪贴板(`/copy`)功能在非x86 Windows上失效。(Copilot CLI, OpenCode)
        *   *特定键盘布局冲突*: 巴西键盘等非美式布局用户遭遇快捷键冲突。(CodeWhale)

#### **4. 差异化定位分析**

*   **Claude Code**: **MCP生态原教旨主义者**。强调“智能体行为”的精细控制，但当前被**计费问题**拖累，社区信任面临考验。定位偏高端专业用户。
*   **OpenAI Codex**: **跨平台“瑞士军刀”**。全力解决Windows和macOS稳定性问题，同时通过TUI自定义、CLI控制增强等满足高级用户需求。定位面向广泛开发者群体。
*   **GitHub Copilot CLI**: **GitHub生态的“粘合剂”**。深度绑定GitHub Codespaces和BYOK认证。当前MCP兼容性粗糙、回归问题多发，产品成熟度有待提升。
*   **Gemini CLI**: **“Agent即系统”** 的探索者。强调Agent集群（子Agent）的可靠性，并投入巨量资源构建内部评估（Eval）基础设施，目标是将Agent行为工程化。
*   **Kimi Code CLI**: **“远程协作”先行者**。面向中文开发者，强调远程设备（手机/平板）与桌面的无缝协作，同时快速完善底层MCP和Shell兼容性。
*   **OpenCode**: **“开源社区驱动”的激进派**。V2版本功能迭代激进（Big Pickle），但因此导致了严重的稳定性问题，社区反馈两极分化。
*   **Pi (原DeepSeek TUI?)**: **“本地模型与精细控制”的极客最爱**。强调对llama.cpp等本地模型的深度适配，支持工具调用的严格模式，满足对安全性和定制性有极高要求的用户。
*   **Qwen Code**: **“企业级”的野心家**。从众多PR中可看出，其在CI自动化、工作区信任、企业级内存集成等方面投入巨大，目标是成为生产环境的可靠工具。
*   **CodeWhale**: **“全端模型兼容”的务实派**。强调多提供商/模型切换体验的顺畅，但在发布冲刺阶段暴露出关键Bug，显示了基础体验打磨的难点。

#### **5. 社区热度与成熟度**

*   **成熟期 (但问题也很“成熟”)**: **OpenAI Codex** 和 **Claude Code** 用户基数大，社区成熟，反馈激烈且具体。问题多集中在**高阶体验**（计费、跨平台性能、IDE集成细节）。**OpenAI Codex** 的Linux需求获826个👍足见其用户号召力，但稳定性问题也同样瞩目。
*   **快速迭代期**: **Gemini CLI**, **Qwen Code**, **Kimi Code CLI**, **OpenCode** 和 **Pi**。这些工具社区活跃度极高，Issue和PR数量巨大，功能迭代快，但稳定性是“成长的烦恼”。**Gemini CLI** 和 **Qwen Code** 在内部效能（评估、CI）上投入巨大，显示出对长期质量的重视。**OpenCode** 的V2版本更新频繁，但Bug也最多，是典型的“快跑”阶段。
*   **冲刺期**: **CodeWhale** 处于v0.9.1发布冲刺期，社区反馈集中在**阻碍发布的严重Bug**上，成熟度相对较低，但功能方向明确。

#### **6. 值得关注的趋势信号**

1.  **从“黑盒”到“白盒”的Agent管理是下一波需求**：用户不再满足于Agent能干活，更要求**知道“为什么”**（切换模型、调用工具）。这将在未来驱动CLI工具在**日志、Hooks、可观测性**方面的深度建设。
2.  **成本敏感度飙升，催生细粒度计费与模型路由**：Fable 5的计费争议不是个案，这预示着未来AI工具必须提供**精准、透明的成本分析**，以及基于任务复杂度的**自动模型路由**功能（如 #2533 子代理独立选模型），以实现成本优化。
3.  **MCP将从“可选”变为“必需”**：几乎所有主流工具都在深度整合MCP。谁能提供**最稳定、最实时、最双向**（CLI与IDE互操作）的MCP体验，谁就能在生态粘性上占据优势。
4.  **Windows与Linux平台体验成为“胜负手”**：当所有工具都在macOS上体验接近时，**Windows的性能稳定性**和**Linux的原生桌面支持**将成为用户选择工具的关键差异化因素。
5.  **开源社区驱动的“防御性开发”模式显现**：部分项目（如Copilot CLI）频繁出现回归Bug，而在开源社区（如Kimi Code CLI、Qwen Code）中，来自贡献者的**大量修复PR**正在快速堵上漏洞。这表明**开源**在快速迭代和修复长尾Bug上具有显著优势。

---
**总结**：对于开发者而言，选择AI CLI工具不再是简单的“哪个AI更聪明”，而是需要综合考虑**平台稳定性、计费透明性、MCP生态、社区活跃度及项目长期维护能力**。没有完美的工具，只有最适合当前工作流和团队的平台。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为一名专注于 Claude Code 生态的技术分析师，以下是基于 `anthropics/skills` 仓库数据（截止 2026-07-24）的社区热点报告。

---

### Claude Code Skills 社区热点报告 (2026-07-24)

#### 1. 热门 Skills 排行

以下是根据 PR 评论活跃度、功能影响力和社区关注度选出的 Top 5 热门 Skills：

1.  **`skill-creator` 修复与优化 (PR #1298, #1099, #1050 等)**
    *   **核心功能**: 修复 `skill-creator` 工具链的核心 BUG，特别是 `run_eval.py` 在 Windows 平台下的崩溃、编码错误以及 `recall` 指标始终为 0% 的致命问题。
    *   **社区热点**: **社区最集中的痛点**。这些 BUG 直接导致技能开发者无法正确评估和优化其技能描述，是整个生态发展的瓶颈。PR #1298 明确关联了 #556 等多个 Issue，表明问题已被大量用户独立复现。
    *   **当前状态**: Open
    *   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)， [PR #1099](https://github.com/anthropics/skills/pull/1099)， [PR #1050](https://github.com/anthropics/skills/pull/1050)

2.  **`color-expert` 色彩专家 (PR #1302)**
    *   **核心功能**: 一个全面的色彩专业知识技能，涵盖 ISCC-NBS、Munsell 等多种色彩命名系统，以及 OKLCH、OKLAB 等色彩空间的“何时使用”指南。
    *   **社区热点**: 设计、数据可视化和前端开发领域的通用需求。社区讨论点集中在色彩知识的广度与深度的平衡，以及如何确保技能建议的准确性和实用性。
    *   **当前状态**: Open (最近更新于 2026-07-21，非常活跃)
    *   **链接**: [PR #1302](https://github.com/anthropics/skills/pull/1302)

3.  **`self-audit` 自我审查 (PR #1367)**
    *   **核心功能**: 一个元技能，旨在 AI 输出交付前进行机械性文件验证和四维度推理质量审核（按危害严重性排序）。
    *   **社区热点**: 代表了社区对**输出质量可控性**和**可靠性**的强烈诉求。这不仅是技能的补充，更是对 AI 工作流信任机制的关键尝试。对应的 Issue (#1385) 也提出了类似的质量门控管线提案，形成了完整的讨论闭环。
    *   **当前状态**: Open (最近更新于 2026-07-02)
    *   **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

4.  **`testing-patterns` 测试模式 (PR #723)**
    *   **核心功能**: 覆盖完整测试栈的技能，包括测试哲学（Testing Trophy 模型）、单元测试（AAA 模式）、React 组件测试（Testing Library）、端到端测试等。
    *   **社区热点**: 开发者对**自动化测试生成**和**高质量测试代码**的迫切需求。社区讨论了如何在不同技术栈（如 React/Node.js）中应用最佳实践，以及如何指导模型编写非脆弱、可维护的测试。
    *   **当前状态**: Open (最近更新于 2026-04-21)
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

5.  **`pyxel` 复古游戏开发 (PR #525)**
    *   **核心功能**: 为 `pyxel-mcp` 服务器新增技能，专门用于指导 Claude 创建复古/像素/8-bit 风格的 Python 游戏，涵盖从代码编写到运行调试的循环。
    *   **社区热点**: 展示了**垂直领域特定工具链 (MCP) 与 Skills 深度结合**的潜力。社区关注点在于如何定义清晰的触发词，以及如何优化“写代码-运行截图-迭代”的交互闭环。
    *   **当前状态**: Open (最近更新于 2026-07-15)
    *   **链接**: [PR #525](https://github.com/anthropics/skills/pull/525)

#### 2. 社区需求趋势

从社区 Issues 来看，除了上述核心工具的稳定性问题，社区的关注点集中在以下三个方向：

1.  **信任、安全与治理 (Security & Governance)**: Issue #492 (Security: 命名空间信任边界) 以 43 条评论位居 Issues 榜首。这表明社区对官方与非官方 Skills 的**信任边界、权限滥用风险**有极高警觉。此外，#412 (agent-governance 提案) 和 #1175 (SPO 文档安全性) 也表明，社区希望在企业级场景中引入**策略执行、审计追踪和安全模式**。

2.  **协作与分发 (Collaboration & Distribution)**: Issue #228 (组织级技能共享) 和 #189 (插件安装重复技能) 表明，社区对 Skills 的**组织级共享、版本管理和去重**有强烈需求。目前的手动下载、上传流程被认为是低效的，阻碍了 Skills 在团队中的规模化应用。

3.  **核心工具链稳定性 (Toolchain Stability)**: Issue #556, #1061, #1169 等持续报告 `skill-creator` 在 Windows 下的兼容性问题、recall=0% 的评估失效问题。这直接反映了社区在**创造和迭代自身 Skills 时遇到的严重阻碍**。如果评估工具不可靠，整个 Skills 的演化和优化循环就无法进行。

4.  **平台互操作性与生态扩展**: Issue #29 (Bedrock 使用) 和 #16 (Skills as MCPs) 表明，社区渴望 Skills 能超越 Claude Code 本身，与更广泛的**云平台 (Bedrock)、工具协议 (MCP)** 集成，构建更开放的 AI 代理生态。

#### 3. 高潜力待合并 Skills

以下 PR 不仅讨论活跃，且功能独立完整，具备近期合并的高潜力：

*   **`pyxel` (PR #525)**: 功能专一、社区知名作者 (kitao)，与外部 MCP 服务器深度绑定，实用性强。更新频繁，表明作者正在积极跟进反馈。
*   **`color-expert` (PR #1302)**: 填补了设计领域的空白，内容专业，社区反馈积极，最近更新接近数据提取日期，表明合并前的打磨已经完成。
*   **`self-audit` (PR #1367)**: 代表了“质量保障”这一新兴且重要的元技能方向。开发者 YuhaoLin2005 同时提交了关联的 Issue (#1385)，展示了完整的思考链条，增加了 PR 的可信度和价值。
*   **`testing-patterns` (PR #723)**: 内容全面，直接回应了开发者社区的刚性需求。如果能处理好与其他相关技能的兼容性，有很高的落地价值。

#### 4. Skills 生态洞察

**当前社区最集中的诉求是：在确保核心开发者工具的稳定性与跨平台兼容性（解决 `run_eval.py` 等 BUG）的基础上，构建可信、可协作、具有质量保障机制的 Skills 分发与治理体系。**

简而言之，社区正在经历从“如何创造技能”到“如何安全高效地用好技能”的关键转型期。

---

好的，各位开发者，早上好。以下是 2026 年 7 月 24 日的 Claude Code 社区动态日报。

---

### 2026-07-24 Claude Code 社区动态日报

#### 1. 今日速览

过去24小时内，社区最激烈的讨论围绕 **Fable 5 模型在 Max 计划上被错误要求额外积分** 的问题展开，该问题单日新增评论超过 20 条，引发广泛关注。此外，**VSCode 扩展的会话重命名同步问题** 和 **“course”令牌异常刷屏** 也成为开发者反馈的高频痛点。整体而言，社区情绪聚焦于模型访问权限、IDE 集成体验和智能体行为可靠性。

#### 2. 版本发布

无

#### 3. 社区热点 Issues

以下挑选了 10 个最值得关注的 Issue，涵盖付费、模型、扩展、MCP 和智能体行为等多个方面：

1. **[BUG] Fable 5 prompts 'usage credits required' on Max plan** (Issue [#79337](https://github.com/anthropics/claude-code/issues/79337))
   - **重要性**: ⭐⭐⭐⭐⭐ | **评论**: 39 | **点赞**: 12
   - **摘要**: **最热门问题**。大量 Max 计划用户反馈，在 Fable 5 成为标准计划模型之日（7月20日），Claude Code 仍错误提示需要积分，并自动降级到 Opus 4.8。此问题直接影响了用户对新模型的体验，社区讨论激烈，要求 Anthropic 紧急修复并回应。

2. **[VSCode] Renaming session via sidebar pencil icon doesn't sync terminal tab title** (Issue [#37628](https://github.com/anthropics/claude-code/issues/37628))
   - **重要性**: ⭐⭐⭐⭐⭐ | **评论**: 11 | **点赞**: 14
   - **摘要**: **长存痛点**。在 VSCode 扩展中通过侧边栏重命名会话后，终端标签页标题不更新，一旦收到新消息，自定义名称会被覆盖。该问题自3月23日提出，持续4个月未修复，社区关注度极高。

3. **[BUG] Cowork/Claude Code: repeated "course" filler tokens flood inline output** (Issue [#80724](https://github.com/anthropics/claude-code/issues/80724))
   - **重要性**: ⭐⭐⭐⭐ | **评论**: 1
   - **摘要**: **新型BUG**。在 Cowork 模式（桌面版）中，当模型连续执行多个工具调用时，会反复输出文字“course”作为填充内容，导致对话记录被刷屏，严重影响可读性。该问题昨日刚刚提出，社区反应迅速。

4. **[DOCS] VS Code extension docs missing "Not responding" red spinner indicator** (Issue [#38580](https://github.com/anthropics/claude-code/issues/38580))
   - **重要性**: ⭐⭐⭐ | **评论**: 5 | **点赞**: 2
   - **摘要**: **文档缺失**。指出 VSCode 扩展文档忽略了对“后端超时 60 秒后显示红色旋转指示器”这一行为进行说明。这影响了用户对扩展状态的正确认知。

5. **[DOCS] MCP docs missing non-blocking startup behavior** (Issue [#39113](https://github.com/anthropics/claude-code/issues/39113))
   - **重要性**: ⭐⭐⭐ | **评论**: 4
   - **摘要**: **文档缺失**。用户指出，使用 `claude "prompt"` 命令启动会话时，MCP 服务器的非阻塞启动行为未被记录。这可能导致用户对 MCP 工具就绪时间的误判。

6. **[DOCS] LLM gateway docs missing `x-client-request-id` header** (Issue [#39103](https://github.com/anthropics/claude-code/issues/39103))
   - **重要性**: ⭐⭐⭐ | **评论**: 4
   - **摘要**: **文档缺失**。对于使用 LLM 网关进行代理的企业用户，文档缺少关于使用 `x-client-request-id` 头进行超时调试的建议，影响企业级运维。

7. **[FEATURE] add time to JSONL "usage" property** (Issue [#72110](https://github.com/anthropics/claude-code/issues/72110))
   - **重要性**: ⭐⭐⭐ | **评论**: 2
   - **摘要**: **功能请求**。用户请求在 JSONL 日志的“usage”属性中加入时间戳，以便进行成本分析和用量趋势追踪。

8. **[FEATURE] Include session usage totals in Stop/SubagentStop hook payload** (Issue [#80446](https://github.com/anthropics/claude-code/issues/80446))
   - **重要性**: ⭐⭐⭐ | **评论**: 1
   - **摘要**: **功能请求**。希望 `Stop` 和 `SubagentStop` 钩子能携带会话总用量统计，便于集成开发环境或自动化工作流进行资源监控。

9. **[BUG] Bash read-only commands still prompt for permission despite allow rules** (Issue [#62135](https://github.com/anthropics/claude-code/issues/62135))
   - **重要性**: ⭐⭐⭐ | **评论**: 2 | **点赞**: 1
   - **摘要**: **权限问题**。用户配置了允许规则以处理只读 bash 命令（如 `curl`、`gh api`），但 Claude Code 仍然会弹出权限确认提示，影响了自动化效率。

10. **[BUG] Fable 5 is totally nerfed in this session** (Issue [#78275](https://github.com/anthropics/claude-code/issues/78275))
    - **重要性**: ⭐⭐ | **评论**: 1
    - **摘要**: **质量反馈**。用户反馈在特定会话中 Fable 5 表现“被削弱”，虽然该 Issue 被标记为 `needs-repro`，但侧面反映了社区对 Fable 5 模型输出质量不稳定性的担忧。

#### 4. 重要 PR 进展

尽管 PR 数量不多，但以下 5 个 PR 分别从自动化流程、BUG 修复和功能特性角度值得关注：

1. **[fix(scripts)]: paginate comments and reactions in auto-close-duplicates** (PR [#80508](https://github.com/anthropics/claude-code/pull/80508))
   - **状态**: OPEN | **更新**: 2026-07-23
   - **摘要**: **核心流程修复**。修复了“自动关闭重复 Issue”脚本因未分页读取评论和反应而丢失数据的问题。此修复对于维护仓库整洁至关重要。

2. **[fix(ralph-wiggum)]: stop parsing /ralph-loop prompt text as shell code** (PR [#80495](https://github.com/anthropics/claude-code/pull/80495))
   - **状态**: OPEN | **更新**: 2026-07-23
   - **摘要**: **安全与功能修复**。修复了 `/ralph-loop` 命令将用户输入文本解析为 shell 代码的严重漏洞，这会直接导致命令执行失败。修复后提升了该指令的鲁棒性和安全性。

3. **[add the missing source to claude code]** (PR [#41611](https://github.com/anthropics/claude-code/pull/41611))
   - **状态**: OPEN | **更新**: 2026-07-23
   - **摘要**: **文档/配置修复**。为 Claude Code 添加了缺失的源文件。虽然更新了，但描述不够具体，可能是社区贡献者补全了某个配置或文档引用。

4. **[Remove "retro-futuristic" recommendation from Frontend Design Skill]** (PR [#42604](https://github.com/anthropics/claude-code/pull/42604))
   - **状态**: CLOSED | **更新**: 2026-07-23
   - **摘要**: **风格修复**。移除了前端设计技能中关于“复古未来主义”的推荐。这是一个已关闭的 PR，可能意味着团队认为该设计风格建议不合适，或已通过其他方式处理。

5. **[feat(plugins): add /planwith command for inline plan mode prompts]** (PR [#18217](https://github.com/anthropics/claude-code/pull/18217))
   - **状态**: CLOSED | **更新**: 2026-07-23
   - **摘要**: **功能特性**。新增 `/planwith` 命令，允许用户在进入计划模式时直接附加提示词，省去了先启用 `/plan` 再输入的繁琐两步骤。虽然 PR 已关闭，但该功能思路值得关注。

#### 5. 功能需求趋势

综合过去24小时的 Issues，社区最关注的功能方向如下：

1. **模型访问与计费**：核心矛盾集中在 **Fable 5 与 Max 计划的兼容性** 上，社区强烈要求提供无缝的模型体验，避免出现付费计划内却无法使用的割裂感。
2. **IDE 集成（特别是 VS Code）**：围绕 **VS Code 扩展的交互一致性** 和 **状态反馈** 是持续痛点。会话重命名、超时状态的文档化都是高频诉求。
3. **MCP 生态完善**：用户对 MCP 的 **启动行为** 和 **调试信息** 有更精确的文档需求，表明社区正在深度使用 MCP 并追求更可控的集成体验。
4. **智能体行为透明化**：用户希望获得更详细的 **用量统计**（JSONL加时间戳）、**钩子 payload 增强**，以及**控制“填充令牌”**的能力，追求更高的透明度和可控性。
5. **自动化与权限**：社区希望提升 **权限系统的精确性**，避免对安全命令（如只读 curl）造成干扰，优化自动化工作流。

#### 6. 开发者关注点

从开发者的反馈中，可以总结出以下核心痛点和高频需求：

- **“安全筛选器”误报严重**：多个 Issue 反映工具错误地将合法代码工作（如 Web 爬取、普通脚本编写）标记为“网络安全”活动，导致工作流中断。开发者对此感到沮丧和困扰。
- **Fable 5 模型访问问题引发信任危机**：Fable 5 作为新旗舰模型，其计费问题直接动摇了用户对 Anthropic 产品和计费体系的信任。这不仅是BUG，更是严重的运营事故。
- **VS Code 扩展基础体验亟待提升**：会话命名、高 CPU 占用等基础问题长期未解决，表明在 VS Code 扩展的工程质量上仍有显著提升空间。
- **命令行易用性细节**：如 bash 权限规则无法正确应用、`/ralph-loop` 命令解析错误等，反映出在交互细节和边界情况处理上不够精细。

---
以上就是今日的 Claude Code 社区动态。我们将继续关注 Fable 5 模型问题的最新进展。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，这是为您生成的 2026-07-24 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-07-24

## 今日速览
今日，Codex 发布了三个新的 Rust 版本（均为 alpha 级别），持续迭代核心引擎。社区热度集中在 Windows 应用的性能问题及 Linux 桌面版的长期呼声上。多项 PR 旨在修复 Windows 平台上的进程泄漏和 WMI 风暴等严重稳定性问题，同时对插件系统和会话管理进行了优化。

## 版本发布
**GitHub**: [openai/codex Releases](https://github.com/openai/codex/releases)

今日连续发布三个 Rust 版本，均为 alpha 预览版，推测是为即将发布的稳定版进行密集调试和功能验证。

*   **rust-v0.146.0-alpha.5** ([详情](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.5))
*   **rust-v0.146.0-alpha.4** ([详情](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.4))
*   **rust-v0.146.0-alpha.3.1** ([详情](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3.1))

## 社区热点 Issues
**GitHub**: [openai/codex Issues](https://github.com/openai/codex/issues)

1.  **Linux 桌面版应用的强烈需求** ([#11023](https://github.com/openai/codex/issues/11023))
    *   **重要性**: 以 **826 👍** 和 **185条评论** 成为社区最关注的议题之一。用户因 macOS 上应用性能问题而强烈要求推出 Linux 原生桌面应用。
    *   **反应**: 社区呼声极高，反映了跨平台、特别是 Linux 生态用户的迫切需求。

2.  **Windows 11 应用频繁卡顿/冻结** ([#20214](https://github.com/openai/codex/issues/20214))
    *   **重要性**: 用户报告在系统资源充足（32GB RAM, Ryzen 5）的情况下应用仍频繁卡顿，严重影响日常使用。
    *   **反应**: 73条评论，72个赞，表明这是一个影响范围较广的 Windows 桌面端性能回归问题。

3.  **CLI 自动解决 (Auto-Resolve) 功能可配置化** ([#28969](https://github.com/openai/codex/issues/28969))
    *   **重要性**: 社区请求增加设置以禁用 CLI 中“问题60秒后自动解决”的功能，获得 **154 👍**。这反映了高级用户对更精细的交互控制权的需求。
    *   **反应**: 评论数（55条）显示讨论热烈，用户对自动化程度有不同的偏好和需求。

4.  **TUI 自定义状态栏** ([#17827](https://github.com/openai/codex/issues/17827))
    *   **重要性**: 用户希望终端 UI (TUI) 能够拥有像 Claude Code 一样的可自定义状态栏，实时显示 Token 用量、模型、Git 分支等信息。
    *   **反应**: 获得 **122 👍**，体现了开发者对提升 TUI 工作效率和可视化的强烈喜好。

5.  **Windows 无界 `taskkill.exe` 进程风暴** ([#34260](https://github.com/openai/codex/issues/34260))
    *   **重要性**: 描述了一个严重的系统性 bug，导致大量 `taskkill.exe` 和 `conhost.exe` 进程残留，耗尽 WMI 资源，使整个系统性能严重下降。
    *   **反应**: 这是一个新发现的、影响巨大的性能问题，社区正在积极反馈类似情况（如 #33776）。

6.  **Windows 应用触发 WMI 提供者主机 100% CPU** ([#34014](https://github.com/openai/codex/issues/34014))
    *   **重要性**: 明确指出了 Standalone 应用在打开特定项目时会导致 CPU 100%，而 VS Code 扩展版则无此问题。这有助于定位问题的根源。
    *   **反应**: 用户提供了清晰的对比测试，有助于开发团队快速复现和修复。

7.  **Codex 会话日志膨胀问题** ([#24948](https://github.com/openai/codex/issues/24948))
    *   **重要性**: 指出 CLI 的会话日志文件可膨胀至 700MB-2GB，对本地存储是个巨大负担，尤其是在长时间运行的场景下。
    *   **反应**: 这是一个长期存在的痛点，对 Pro 用户影响尤为明显。

8.  **Apply_patch 静默覆盖现有文件** ([#25399](https://github.com/openai/codex/issues/25399))
    *   **重要性**: 这是一个潜在的危险行为，`apply_patch` 工具在添加文件时会覆盖同名文件，且没有任何警告。
    *   **反应**: 作为工具调用中的安全性和可预见性问题，得到了开发者的关注。

9.  **Windows 应用启动即消耗速率限制** ([#22073](https://github.com/openai/codex/issues/22073))
    *   **重要性**: 用户发现 Codex 桌面应用在启动时，即使没有任何操作，也会消耗 API 速率限制。这会导致用户的有效工作时长被无端占用。
    *   **反应**: 这是一个对订阅用户不友好的行为。

10. **macOS 渲染器 OOM 崩溃循环** ([#34890](https://github.com/openai/codex/issues/34890))
    *   **重要性**: 新报告的问题，描述了一个严重的内存泄漏，导致渲染器进程在5分钟内 OOM 崩溃重启，形成一个崩溃循环，产生超过170个残留进程。
    *   **反应**: 这是一个刚提交的严重稳定性问题，可能导致 macOS 用户完全无法使用。

## 重要 PR 进展
**GitHub**: [openai/codex Pull Requests](https://github.com/openai/codex/pulls)

1.  **保留 Windows 沙箱代理设置** ([#35036](https://github.com/openai/codex/pull/35036))
    *   **功能**: 修复了 Guardian 审查命令在 Windows 沙箱中运行时，丢失父会话代理配置的问题。

2.  **通过共享 HTTP 客户端路由环境注册请求** ([#35034](https://github.com/openai/codex/pull/35034))
    *   **功能**: 确保环境注册请求遵循正确的出站代理策略，并避免泄露内部 URL 和响应头。

3.  **通过应用服务器暴露浏览器使用要求** ([#35033](https://github.com/openai/codex/pull/35033))
    *   **功能**: 允许服务端配置 `browser_use` 相关设置，为浏览器自动化功能提供更灵活的配置。

4.  **为线程归档和删除强制执行写入者所有权** ([#35031](https://github.com/openai/codex/pull/35031))
    *   **功能**: 修复了分页线程的并发写入问题，确保归档和删除操作不会干扰正在写入的其他进程，提升数据一致性。

5.  **跨命令批准保留插件归属** ([#35029](https://github.com/openai/codex/pull/35029))
    *   **功能**: 改进了审计和权限管理，确保命令执行批准流程中，能够正确追踪其来源插件。

6.  **在 MCP 运行时更新后保留刷新的 Apps 工具** ([#35028](https://github.com/openai/codex/pull/35028))
    *   **功能**: 修复了远程插件安装后，MCP 运行时更新会回滚 Apps 工具目录的 bug，确保新安装的工具能立即生效。

7.  **支持自定义提供商选择独立网络搜索** ([#35024](https://github.com/openai/codex/pull/35024))
    *   **功能**: 为自定义模型提供商增加了是否支持独立网络搜索 (`web.run` 工具) 的配置开关，增强了灵活性。

8.  **通过配置的代理策略路由 exec-server HTTP** ([#35023](https://github.com/openai/codex/pull/35023))
    *   **功能**: 确保由 exec-server 发起的委托 HTTP 请求也遵守全局配置的代理策略，解决企业网络环境中的连通性问题。

9.  **保持侧边对话在切换线程时打开** ([#35011](https://github.com/openai/codex/pull/35011))
    *   **功能**: 新增 `ctrl-/` 快捷键，允许用户在侧边对话和主线程之间无中断切换，显著提升 TUI 下的多任务处理体验。

10. **当技能目录超出上下文预算时发出警告** ([#34997](https://github.com/openai/codex/pull/34997))
    *   **功能**: 当模型上下文窗口不足，导致技能描述被截断或启用技能被省略时，向用户发出警告，提高了透明度和可诊断性。

## 功能需求趋势
*   **跨平台支持**: **Linux 桌面应用** 是当前最强劲、呼声最高的功能需求，凸显了 Codex 用户群的多样性。
*   **应用稳定性与性能**: 提升 **Windows 和 macOS 桌面应用的稳定性** 是社区的核心诉求。具体需求包括解决卡顿、进程泄漏、WMI 风暴、内存溢出（OOM）等问题。
*   **客户端可定制性**: 用户对 **TUI 自定义状态行**、**CLI 自动解决行为可配置** 等功能表现出浓厚兴趣，希望工具能适应个人工作流。
*   **高级模型推理控制**: 社区（特别是 Pro 用户）希望能在 CLI 中直接配置 **`reasoning.mode`** 等 GPT-5.6 模型的高级参数，以获取更强的推理能力。
*   **远程控制扩展**: 除了现有的跨平台远程控制，用户需求正延伸到 **Windows到Windows** 的远程控制，以及更精细的侧边栏项目管理。

## 开发者关注点
*   **Windows 稳定性是首要痛点**: 从 #34260、#33776、#34014 等多个 Issue 来看，Windows 桌面应用存在严重的进程管理和资源泄漏问题，`taskkill.exe` 和 WMI 相关问题是直接导致系统级性能下降的元凶。
*   **资源管理问题频发**: 无论是会话日志的无限增长 (#24948)，还是 macOS 渲染器的 OOM 崩溃 (#34890)，都反映了应用在本地资源管理上存在短板。
*   **用户期望更精细的控制**: 开发者不满足于“黑盒”式的自动化。从“自动解决”到“状态栏自定义”，都反映出用户希望拥有更细粒度的配置和干预能力。
*   **工具调用的安全性和可预测性**: `apply_patch` 静默覆盖文件 (#25399) 的行为引起了开发者对工具可靠性的担忧。开发者希望工具的执行是安全、透明并可预测的。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，技术分析师为您呈上今日的 Gemini CLI 社区动态日报。

---

### **Gemini CLI 社区动态日报 | 2026-07-24**

#### **今日速览**

随着夜版 `v0.52.0-nightly.20260723` 的发布，项目修复了关键的凭证缓存验证逻辑，并引入了评估覆盖率报告命令。社区讨论热度集中在 **子代理（Subagent）故障报告不准确** 和 **Agent 挂起** 这两个长期存在的 P1 级 Bug 上。此外，一个旨在自动化 Issue 到 PR 流程的大型代码生成管线（SSR Pipeline）正在持续推进，表明项目在内部效能工具上的投入显著增加。

#### **版本发布**

*   **发布版本**: **v0.52.0-nightly.20260723.g9681621c6**
*   **更新内容**:
    1.  **修复**: 顺序验证缓存凭证并恢复 `GOOGLE_APPLICATION_CREDENTIALS` 回退机制，增强了认证流程的健壮性。
    2.  **新功能**: 新增 `eval coverage report` 命令，用于生成评估覆盖率报告，有助于开发者了解测试覆盖的情况。
*   **链接**: [v0.52.0-nightly.20260723 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260723.g9681621c6)

#### **社区热点 Issues**

以下挑选了 10 个值得关注的 Issue，涵盖了当前社区最关心的 Bug 修复和功能请求。

1.  **[Bug] Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption** (#22323)
    *   **重要性**: **P1 级 Bug**。子代理在达到最大轮次后被错误地报告为“成功”，这会掩盖实际的中断问题，导致用户对任务完成状态产生误判，尤其影响自动化和评估流程。
    *   **社区反应**: 有 12 条评论，2 个赞。社区对此问题的报告逻辑提出了详细分析，认为这是一个严重误导性的行为。
    *   **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[Bug] Generalist agent hangs** (#21409)
    *   **重要性**: **P1 级 Bug**。通用型 Agent 在执行简单任务（如创建文件夹）时会永久挂起，严重影响用户体验和工具可用性。
    *   **社区反应**: 8 条评论，8 个赞。用户反馈强烈，通过禁止 Agent 调用子代理可以临时解决，表明问题可能出在 Agent 间的协调或任务分配逻辑上。
    *   **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[Feature/Epic] Robust component level evaluations** (#24353)
    *   **重要性**: **P1 级 Epics**。目标是建立更健壮的组件级评估体系，实现对 Agent 行为的自动化测试和回归检测，是提升项目质量和可靠性的关键基础设施。
    *   **社区反应**: 7 条评论。社区关注如何扩展评估测试集以覆盖更多场景。
    *   **链接**: [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

4.  **[Bug] Gemini does not use skills and sub-agents enough** (#21968)
    *   **重要性**: **P2 级 Bug**。用户反馈 Gemini CLI 在自主任务中很少调用自定义技能和子代理，降低了可扩展性和自动化能力。
    *   **社区反应**: 6 条评论。用户提供了具体案例，说明即使给了明确的技能描述和示例，Agent 仍然倾向于使用原始工具而非技能。
    *   **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

5.  **[Bug] Shell command execution gets stuck with "Waiting input" after command completes** (#25166)
    *   **重要性**: **P1 级 Bug**。Shell 命令执行完成后，Gemini CLI 仍显示“等待输入”并卡住。这是一个影响日常开发的严重问题。
    *   **社区反应**: 4 条评论，3 个赞。用户报告称即使是最简单的命令也会复现，严重影响命令行工作流。
    *   **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

6.  **[Bug] Stop Auto Memory from retrying low-signal sessions indefinitely** (#26522)
    *   **重要性**: **P2 级 Bug**。自动记忆功能会无限重试处理低信号会话，导致资源浪费和效率低下。
    *   **社区反应**: 5 条评论。这是一个关于系统稳定性和智能性的重要反馈。
    *   **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7.  **[Feature] Enhance browser_agent resilience: Automatic session takeover and lock recovery** (#22232)
    *   **重要性**: **P3 级特性**。用户请求增强浏览器 Agent（`browser_agent`）的健壮性，以自动处理浏览器配置文件被锁定的情况，这在自动化测试和持续集成中非常关键。
    *   **社区反应**: 4 条评论。社区讨论了当前“快速失败”策略的局限性，并提出了更优雅的恢复方案。
    *   **链接**: [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

8.  **[Bug] Model frequently creates tmp scripts in random spots** (#23571)
    *   **重要性**: **P2 级 Bug**。模型在执行 shell 命令时倾向于在文件系统随机位置创建临时脚本，给后续的代码清理和提交带来困扰。
    *   **社区反应**: 3 条评论。用户认为这是一个工作流整洁性问题，建议将临时文件限定在特定目录。
    *   **链接**: [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

9.  **[Feature] Add deterministic redaction and reduce Auto Memory logging** (#26525)
    *   **重要性**: **P2 级安全相关工单**。自动记忆功能在将内容发送到模型前只进行指令性脱敏，且存在潜在的信息泄露风险。开发者建议采用确定性脱敏策略并减少日志记录。
    *   **社区反应**: 4 条评论。关注隐私和安全性的开发者对此表示认同。
    *   **链接**: [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

10. **[Bug] browser subagent fails in wayland** (#21983)
    *   **重要性**: **P1 级 Bug**，但明确标记为环境特定（Wayland）。在 Wayland 显示服务器下，浏览器子代理运行失败，影响 Linux 用户群。
    *   **社区反应**: 4 条评论，1 个赞。这是一个用户报告的、可复现的环境兼容性问题。
    *   **链接**: [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

#### **重要 PR 进展**

以下 PR 反映了项目在稳定性、安全性和内部自动化工具上的最新进展。

1.  **[PR] fix(core): enforce explicit tag length and validation in file keychain** (#28523)
    *   **内容**: 为文件密钥链（file keychain）强制实施显式的认证标签长度和验证，增强凭证存储的安全性。
    *   **链接**: [PR #28523](https://github.com/google-gemini/gemini-cli/pull/28523)

2.  **[PR] feat(caretaker-triage): prompt hill-climbing & orchestrator updates** (#28524)
    *   **内容**: 对内部 Triage （分类）机器人进行了提示语优化和编排器更新，旨在提升问题分类的准确率。
    *   **链接**: [PR #28524](https://github.com/google-gemini/gemini-cli/pull/28524)

3.  **[PR] feat(pr-generator-orchestrator): implement iterative bug-fixing state machine** (#28433)
    *   **内容**: 实现了 Issue 到 PR 自动生成管线的编排层，包含迭代修复状态机和容器入口点，是内部 SSR 管线的重要组成部分。
    *   **链接**: [PR #28433](https://github.com/google-gemini/gemini-cli/pull/28433)

4.  **[PR] fix(core): prevent infinite auth loop by awaiting credential save** (#28519)
    *   **内容**: 修复了一个导致无限认证循环的 P1 级 Bug。通过在保存凭证前等待异步写入完成并强制用户确认，解决了该问题。
    *   **链接**: [PR #28519](https://github.com/google-gemini/gemini-cli/pull/28519)

5.  **[PR] fix(core): filter out thought parts from getHistoryTurns when context management is disabled** (#28509)
    *   **内容**: 修复了在禁用上下文管理时，模型思考过程泄露到对话历史中的问题。
    *   **链接**: [PR #28509](https://github.com/google-gemini/gemini-cli/pull/28509)

6.  **[PR] fix(core): enforce HTTPS for GoogleCredentialsAuthProvider to prevent cleartext leakage** (#28517)
    *   **内容**: 强制 `GoogleCredentialsAuthProvider` 使用 HTTPS 协议，防止敏感凭证通过明文 HTTP 传输，是一项重要的安全加固。
    *   **链接**: [PR #28517](https://github.com/google-gemini/gemini-cli/pull/28517)

7.  **[PR] fix(core): refresh MCP OAuth tokens with the stored client ID** (#28481)
    *   **内容**: 修复了 MCP OAuth 令牌刷新失败的问题，确保使用正确的客户端 ID 刷新令牌，避免需要用户频繁重新认证。
    *   **链接**: [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

8.  **[PR] fix(vscode-ide-companion): preserve terminal focus when closing diff tabs** (#28183)
    *   **内容**: 修复 VS Code 扩展中，关闭差异预览标签后终端焦点丢失的问题，改善开发者体验。
    *   **链接**: [PR #28183](https://github.com/google-gemini/gemini-cli/pull/28183)

9.  **[PR] fix(auth): use native fetch for OAuth token exchange to avoid "Premature close"** (#28446)
    *   **内容**: 解决特定环境下（如无头 VPS）OAuth 令牌交换失败的问题，改用原生 `fetch` API 以避免“Premature close”错误。
    *   **链接**: [PR #28446](https://github.com/google-gemini/gemini-cli/pull/28446)

10. **[PR] fix(cli): add gemini-3.5-flash to model selector for all users** (#28485)
    *   **内容**: 将 `gemini-3.5-flash` 模型添加到模型选择器中，确保所有用户都能使用最新模型。
    *   **链接**: [PR #28485](https://github.com/google-gemini/gemini-cli/pull/28485)

#### **功能需求趋势**

从最近的 Issues 和讨论中，社区对 Gemini CLI 的关注点主要集中在以下方向：

*   **Agent 稳定性与可靠性**: 大量 P1/P2 级别的 Bug（如挂起、报告错误、卡死）表明，提升 Agent（特别是子代理和通用 Agent）的稳定性和任务报告准确性是社区最迫切的需求。
*   **技能与子代理的有效利用**: 用户希望 Agent 能更智能、更主动地调用其定义的自定义技能和子代理，以实现更复杂的自动化和任务分解。
*   **安全性与隐私**: 社区对自动记忆功能的数据处理、OAuth 凭证的存储和传输、以及 MCP 集成的安全细节表现出高度关注。确定性脱敏和强制 HTTPS 等需求频繁出现。
*   **强大的评估与测试基础设施**: 项目内部正在大力建设评估基础设施（如 `eval coverage report` 命令和组件级评估），这是确保未来 Agent 行为可控和质量可测的基础。
*   **自我认知与交互改进**: 用户希望 Agent 能更好地理解自身配置、CLI 标志和快捷键，从而更有效地为用户提供指导和帮助。

#### **开发者关注点**

综合社区反馈，开发者遇到的痛点和反复提到的需求包括：

*   **子代理控制问题**: 子代理可能不听指令、任务完成报告不准确，或者在不应该执行时被执行。
*   **终端兼容性**: 在 Wayland 等特定环境下存在兼容性问题，终端操作（如卡在“等待输入”状态）影响核心体验。
*   **配置覆盖问题**: 浏览器 Agent 等组件会忽略 `settings.json` 中的自定义配置，导致开发者无法有效控制其行为。
*   **认证与登录稳定性**: 在特定网络或机器环境下，OAuth 登录和令牌刷新失败，需要可靠的降级或用户通知机制。
*   **模型选择限制**: 用户希望 CLI 能更快地支持并默认提供最新的 Gemini 模型（如 `gemini-3.5-flash`），而不是落后于 API 发布。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区日报 — 2026-07-24

> 数据来源：github.com/github/copilot-cli（更新于 2026-07-23）

---

## 今日速览

昨日 Copilot CLI 接连发布两个补丁版本（v1.0.74 和 v1.0.74-4），重点支持 **Open Plugin Spec v1** 和 **MCP 服务器配置**，并修复了 IDE 集成重连可靠性。社区方面，**CAPI 5MB 会话上限** 导致永久卡死的遗留问题（#3767）虽已关闭，但类似场景（如 `apply_patch` 导致超限 #4097）仍频繁出现；同时，**WSL2 ARM64 下 `/copy` 失败**（#3534）和 **BYOK 在 `--acp` 模式下被拒**（#4016）等回归问题持续引发讨论。

---

## 版本发布

### v1.0.74 & v1.0.74-4（2026-07-23）

两个版本内容基本重合，v1.0.74-4 增加了子代理时间线标识。

- **新增**：支持 Open Plugin Spec v1 插件清单 (`plugin.json` 或 `mcp.json`)，允许通过插件加载 MCP 服务器。
- **改进**：子代理时间线现在可以区分 prompts 来自主代理还是其他子代理。
- **修复**：
  - IDE 集成在 CLI 重载 MCP 服务器或切换目录后能可靠重连。
  - 搜索栏中输入 `?` 不再误触快速帮助。
  - 多轮子代理性能优化（v1.0.74 仅提及“Multi-turn subagent t”，未详细说明）。

> 链接：https://github.com/github/copilot-cli/releases/tag/v1.0.74  
> https://github.com/github/copilot-cli/releases/tag/v1.0.74-4

---

## 社区热点 Issues（10 条）

### 1. #4097 – `apply_patch` 删除二进制文件导致会话永久超限（OPEN）
- **现象**：`apply_patch` 删除大二进制文件时，其 `tool.execution_complete` 事件以文本 diff 形式存储整个文件内容，使对话历史超出 CAPI 5MB 限制，后续请求失败且 `/compact` 无效。
- **社区反应**：👍 5，评论 4，用户认为是关键缺陷，开发者曾标记 triaged。
- 链接：https://github.com/github/copilot-cli/issues/4097

### 2. #3767 – 超大附件导致会话永久卡死（CLOSED）
- **现象**：附件超出 CAPI 5MB 原生限制后报错 `too large to send natively`，但会话无法恢复，没有自动降级或清除机制。
- **社区反应**：评论 12（最多），👍 1。虽已关闭，但用户仍期待更好的错误处理或自动降级策略。
- 链接：https://github.com/github/copilot-cli/issues/3767

### 3. #4016 – BYOK 在 `--acp` 模式下被拒绝（OPEN）
- **现象**：使用 `COPILOT_PROVIDER_*` 自定义模型时，`copilot --acp --stdio` 仍要求 GitHub 登录，回归于 v1.0.61 ~ v1.0.68 之间。
- **社区反应**：👍 4，评论 5，用户反复报告，开发者标记为回归。
- 链接：https://github.com/github/copilot-cli/issues/4016

### 4. #3534 – WSL2 ARM64 下 `/copy` 失败（OPEN）
- **现象**：`/copy` 命令调用 `clip.exe` 因 cmd.exe 引用 bug 导致退出码 1，无法复制到剪贴板。
- **社区反应**：👍 4，评论 5，影响 WSL2 ARM64（如 Surface Pro X）用户。
- 链接：https://github.com/github/copilot-cli/issues/3534

### 5. #4143 – 从 VS Code 继承 MCP 工具（OPEN, Feature）
- **需求**：CLI 连接到 VS Code 时，应能访问 VS Code 中已安装的 MCP 扩展工具（如 MSSQL Agent 等）。
- **社区反应**：👍 5（最高点赞），评论 2，triaged。
- 链接：https://github.com/github/copilot-cli/issues/4143

### 6. #4206 – 环境页脚卡在 `Loading…` 状态（OPEN）
- **现象**：企业环境下，内置 GitHub MCP 握手因组织策略阻塞，环境状态页脚永久显示“Loading”，但实际上功能已就绪。
- **社区反应**：👍 2，评论 3，triaged。
- 链接：https://github.com/github/copilot-cli/issues/4206

### 7. #4165 – Windows 下 `--resume` 挂起（OPEN）
- **现象**：在 Windows PowerShell 中直接运行 `copilot --resume` 会无限卡在“Resuming session…”，但先运行 `copilot` 再 `/resume` 则正常。
- **社区反应**：👍 1，评论 3。
- 链接：https://github.com/github/copilot-cli/issues/4165

### 8. #4233 – `--acp` 模式缺少 `usage_update` 事件（OPEN, Feature）
- **需求**：`copilot --acp` 不发送 ACP `usage_update` session update，导致 ACP 客户端（如 Zed）无法显示上下文窗口和 AI 信用使用情况。
- **社区反应**：👍 2，评论 1，新提交。
- 链接：https://github.com/github/copilot-cli/issues/4233

### 9. #4211 – MCP 响应中 BigInt 无法序列化（OPEN）
- **现象**：MCP 服务器返回大整数（BigInt）时，CLI 抛出 `TypeError: Do not know how to serialize a BigInt`，任务中断。
- **社区反应**：👍 0，评论 1，triaged。
- 链接：https://github.com/github/copilot-cli/issues/4211

### 10. #4235 – Ctrl+C 无法中断代理运行（OPEN, Regression）
- **现象**：v1.0.74 中按 Ctrl+C 不再终止当前代理运行，而是忽略按键或仅清空输入行。
- **社区反应**：👍 0，评论 0，新提交但属严重回归。
- 链接：https://github.com/github/copilot-cli/issues/4235

---

## 重要 PR 进展（2 条）

### 1. #3163 – ViewSonic monitor（OPEN）
- **内容**：一名用户提交了与 ViewSonic 显示器相关的 PR，声称用于 issue #2591、#3561 等，但内容模糊，可能为误提交或测试。
- 链接：https://github.com/github/copilot-cli/pull/3163

### 2. #4228 – 撤回：针对 #3534 的错误范围（CLOSED）
- **内容**：作者 TheDr1ver 提交 PR 尝试修复 WSL2 `/copy` 问题，但发现改动仅涉及文档而非底层 clipboard 运行时，遂撤回并删除分支。
- 链接：https://github.com/github/copilot-cli/pull/4228

> **说明**：昨日 PR 变动极少，暂无重大功能合并。

---

## 功能需求趋势

结合近期 Issues，社区最关注的功能方向包括：

1. **MCP 生态完善**：  
   - 从 VS Code 继承 MCP 工具（#4143）  
   - 支持 MCP `resources/subscribe` 及 `notifications/resources/updated`（#3073）  
   - 处理 MCP 响应的 BigInt 序列化（#4211）  
   - MCP 工具变更实时通知中可见（#3125）  

2. **会话历史与上下文管理**：  
   - 超过 CAPI 5MB 限制时提供自动降级/清除（#3767、#4097）  
   - `/compact` 无法彻底清理二进制文件残留（#4097）  

3. **平台兼容性**：  
   - WSL2 ARM64 clipboard（#3534）  
   - Windows 冷启动 `--resume` 挂起（#4165）  
   - Alpine/musl 自动更新下载错误平台包（#3696）  

4. **认证与多模型支持**：  
   - BYOK 在 `--acp` 模式下的回归修复（#4016）  
   - 企业 GHE 认证在 ACP 服务器中不可用（#3161）  

5. **IDE 集成**：  
   - CLI 与 VS Code 的 MCP 双向继承（#4143）  
   - IDE 重连可靠性已修复（v1.0.74），但仍有改进空间  

6. **用户交互增强**：  
   - Ctrl+C 中断回归（#4235）  
   - Ctrl+G（编辑器中编辑）在 ask 模式下失效（#4230）  
   - 复制行为支持 X11 PRIMARY（#4236）  

---

## 开发者关注点

从 Issues 和社区反馈中，开发者的主要痛点集中在：

- **会话卡死与不可恢复**：超大附件或二进制删除导致会话永久无法继续，且没有有效的恢复手段（#3767、#4097）。  
- **Windows 平台体验问题**：`--resume` 挂起（#4165）、WSL2 ARM64 clipboard 失败（#3534）、`/copy` 在 cmd.exe 下的引用问题困扰大量 Windows 开发者。  
- **回归频繁**：BYOK 认证在 `--acp` 模式下反复回归（#4016），Ctrl+C 中断在最新版本中再次失效（#4235），降低了工具日常使用的稳定性。  
- **MCP 兼容性粗糙**：BigInt 序列化崩溃（#4211）、工具变更不可见（#3125）、环境页脚假卡住（#4206）等细节问题暴露了 MCP 基础设施尚不成熟。  
- **插件与 MCP 工作目录问题**：插件加载的 MCP 服务器工作目录错误（#4234），导致无法访问项目文件。  
- **企业用户认证受限**：Enterprise/GHE 用户无法通过 ACP 服务器直接认证，需额外步骤（#3161）。  

> 建议开发者升级至最新 v1.0.74-4，该版本修复了 IDE 重连等关键问题，但仍需关注上述回归和痛点。

---

*日报基于 2026-07-23 的 GitHub 仓库数据生成，反映 2026-07-24 社区最新动态。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 ｜ 2026-07-24

---

## 📋 今日速览

昨日（07-23）社区提交量激增，15 个 PR 集中修复了 MCP 客户端会话管理、Windows 平台编码兼容、Shell 补全与进程终止等底层问题；同时用户提出了**远程会话延续**和**子代理独立模型选择**两项重磅功能需求。插件管理在 v0.29.0 下出现 `TypeError` 崩溃，社区关注度较高。

---

## 🔍 社区热点 Issues（共 7 条）

### 1. [Feature] 远程控制：从手机/平板延续本地会话  
**#1282** - `CatKang` 提议增加远程控制能力，让用户离开桌面后仍可通过浏览器或其他设备继续当前 CLI 会话，实现工作流无缝衔接。已获 16 👍 和 6 条讨论，是社区呼声最高的功能请求。  
🔗 [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

### 2. [Bug] `/plugins` 命令在安装 ≥2 个插件时崩溃（v0.29.0，Windows）  
**#2553** - 用户 `tovipy-png` 报告 `/plugins` 管理界面在插件数量≥2 时引发 `TypeError: Cannot read properties of undefined (reading 'value')`，已确认在 Windows 下的 v0.29.0 可复现。  
🔗 [MoonshotAI/kimi-cli Issue #2553](https://github.com/MoonshotAI/kimi-cli/issues/2553)

### 3. [Bug] Kimi Desktop 中西里尔字母字距异常（Windows）  
**#2552** - `Serg2000Mr` 反馈 Windows 版 Kimi Desktop 聊天面板 Markdown 渲染的西里尔文本字距过宽，影响阅读体验。  
🔗 [MoonshotAI/kimi-cli Issue #2552](https://github.com/MoonshotAI/kimi-cli/issues/2552)

### 4. [Enhancement] 同步排队提示到后端，改善手机端 Kimi Web 体验  
**#2545** - `vilicvane` 建议将浏览器切换到后台后的排队提示同步发送至后端，避免手机用户锁屏或切换应用后提示丢失。  
🔗 [MoonshotAI/kimi-cli Issue #2545](https://github.com/MoonshotAI/kimi-cli/issues/2545)

### 5. [Bug] kimi-datasource 插件 Worker 池超时导致多会话卡死  
**#2538** - `cloxichjc` 报告同时运行多个使用 `kimi-datasource`（yahoo_finance）的会话时，一个会话的密集调用会导致 Worker 池阻塞，其他所有会话无响应。  
🔗 [MoonshotAI/kimi-cli Issue #2538](https://github.com/MoonshotAI/kimi-cli/issues/2538)

### 6. [Bug] 第三方 API 报错：不支持的参数 `prompt_cache_key`（v0.29.0）  
**#2534** - `dewrama` 指出升级到 v0.29.0 后，使用 Nvidia nim 等第三方模型 API 时，Kimi 会发送 `prompt_cache_key` 参数（仅 Moonshot 需要），导致 400 错误。  
🔗 [MoonshotAI/kimi-cli Issue #2534](https://github.com/MoonshotAI/kimi-cli/issues/2534)

### 7. [Feature] 子代理可独立选择模型  
**#2533** - `bob0x-ai` 提议让子代理使用与主会话不同的模型，实现成本分层：简单任务用便宜模型，复杂任务用高性能模型。  
🔗 [MoonshotAI/kimi-cli Issue #2533](https://github.com/MoonshotAI/kimi-cli/issues/2533)

---

## 🔧 重要 PR 进展（精选 10 条）

### 1. fix(mcp): 复用已初始化的 MCP 客户端会话  
**#2548** - `lihailong00` 修复 MCP 客户端重复初始化问题：保持活跃会话供多次工具调用，并通过 `AsyncExitStack` 管理优雅关闭。  
🔗 [MoonshotAI/kimi-cli PR #2548](https://github.com/MoonshotAI/kimi-cli/pull/2548)

### 2. fix(shell): 搜索超过 1000 条的文件系统条目  
**#2551** - 改进 `@` 文件补全：突破仅搜索前 1000 条的限制，但保持结果数 ≤1000、扫描数 ≤10000 的预算控制。  
🔗 [MoonshotAI/kimi-cli PR #2551](https://github.com/MoonshotAI/kimi-cli/pull/2551)

### 3. fix(kosong): 传递消息序列化选项  
**#2550** - 修复 Pydantic 序列化选项未传递到 `Message.content` 的问题，确保 `model_dump(exclude_none=True)` 能正确省略多媒体 `id: null` 字段。  
🔗 [MoonshotAI/kimi-cli PR #2550](https://github.com/MoonshotAI/kimi-cli/pull/2550)

### 4. fix(shell): 索引 Git 跟踪的 vendor 文件  
**#2549** - 允许 `vendor/` 下被 Git 跟踪的文件参与 `@` 补全，但继续排除 `node_modules` 和未跟踪的 vendor 树。  
🔗 [MoonshotAI/kimi-cli PR #2549](https://github.com/MoonshotAI/kimi-cli/pull/2549)

### 5. fix(windows): 配置 stdio 为 UTF-8  
**#2547** - 在 Windows 启动时设置 stdout/stderr 为 UTF-8 编码，解决 cp936 控制台无法正确显示非 ASCII 字符的问题。  
🔗 [MoonshotAI/kimi-cli PR #2547](https://github.com/MoonshotAI/kimi-cli/pull/2547)

### 6. fix(print): 转义回显的 stdin 提示中的 Rich 标记  
**#2546** - 用户输入中的 `[/login]` 等字符串不再被 Rich 解析为标记，保持字节级原样传递给模型。  
🔗 [MoonshotAI/kimi-cli PR #2546](https://github.com/MoonshotAI/kimi-cli/pull/2546)

### 7. fix(hooks): 在权限提示时发送通知  
**#2543** - 修复权限审批场景缺少 `Notification` 钩子的回归问题，同时确保 yolo/AFK 模式下的自动审批不触发通知。  
🔗 [MoonshotAI/kimi-cli PR #2543](https://github.com/MoonshotAI/kimi-cli/pull/2543)

### 8. fix(mcp): 延迟启动失败后继续交互  
**#2541** - 当可选的 MCP 后台启动失败时，不再中止当前交互轮次，仅捕获 `MCPRuntimeError`。  
🔗 [MoonshotAI/kimi-cli PR #2541](https://github.com/MoonshotAI/kimi-cli/pull/2541)

### 9. fix(logging): 隔离 Windows 进程日志文件  
**#2542** - 将 Windows 日志文件名改为 `kimi.<pid>.log`，避免多个进程共享同一个日志文件导致轮转冲突。  
🔗 [MoonshotAI/kimi-cli PR #2542](https://github.com/MoonshotAI/kimi-cli/pull/2542)

### 10. fix(llm): 将 prompt_cache_key 限定在 Moonshot API  
**#2535** - `Sanjays2402` 修复 Issue #2534：第三方兼容端点不再接收 `prompt_cache_key`，仅官方 Moonshot 和 Kimi API 保留该参数。  
🔗 [MoonshotAI/kimi-cli PR #2535](https://github.com/MoonshotAI/kimi-cli/pull/2535)

> 其他值得关注的 PR：`fix(kaos): 终止本地进程树 (#2544)`、`fix(media): 将 ICO 图片归一化为 PNG (#2540)`、`fix(shell): 支持数字小键盘输入 (#2537)`、`fix(web): 服务端横幅编码安全 (#2536)`、`fix(mcp): 为 Moonshot API 归一化工具名称 (#2539)`

---

## 📊 功能需求趋势

从近期 Issues 中可提炼出社区最关注的四个方向：

- **远程与多端协同**：`#1282`（远程控制）、`#2545`（排队提示同步）表明用户强烈期望在桌面、手机、浏览器之间无缝切换，保持会话连续性。
- **插件生态稳定性**：`#2553`（插件崩溃）、`#2538`（Worker 池阻塞）揭示插件机制的健壮性仍需加强，尤其是多实例并发场景。
- **子代理灵活配置**：`#2533`（子代理独立选模型）代表高级用户对多 agent 工作流的精细化控制需求，涉及成本与能力分层。
- **第三方 API 兼容性**：`#2534`（`prompt_cache_key` 误发）说明随着更多用户接入第三方模型，Kimi 应提供清晰的可配置参数白名单。

---

## 🛠 开发者关注点

- **插件管理隐患**：`/plugins` 在 ≥2 插件时崩溃优先级高，直接影响日常使用。
- **Windows 体验短板**：西里尔字体渲染、UTF-8 编码、进程日志冲突、数字小键盘支持等问题持续被报告，Windows 端需系统性打磨。
- **Worker 池死锁**：`kimi-datasource` 的并发阻塞问题可能影响金融数据等实时场景，需引入超时与隔离机制。
- **MCP 稳定性**：多个 PR 针对 MCP 会话重用、启动失败恢复、工具名归一化等底层修复，表明 MCP 协议集成仍处于打磨阶段。
- **Shell 补全局限**：`vendor` 文件索引、补全数量限制的调整暗示用户工作目录复杂度增加，需要更智能的上下文感知补全。

---

*本日报基于 GitHub 仓库 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 的公开数据自动生成，数据截至 2026-07-23。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，各位开发者。以下是 2026 年 7 月 24 日的 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-07-24

## 今日速览

今日社区活跃度极高，核心焦点集中在 **V2 版本（大 pickle）的稳定性与性能问题**上，多个关于 TUI 崩溃、无限循环和内容过滤器误报的 Bug 报告引发了广泛讨论。同时，**对旧版 UI 布局的怀念与保留请求** 成为社区第二大声音，反映了重大 UI 改版后部分用户的不适应。在 PR 方面，核心贡献者正在密集修复 V2 的各类问题，包括改进补丁错误处理和 AI 接口的稳定性。

## 社区热点 Issues

1.  **#6231 - 自动发现 OpenAI 兼容提供商的模型**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **说明**: 社区呼声最高的功能请求之一。用户需要手动列出所有模型，对于频繁变动的本地提供商（如 LM Studio, Ollama）非常繁琐，自动发现将极大提升用户体验。
    - **社区反应**: 获得 187 个 👍，30 条评论，讨论热烈，普遍认为这是当前配置流程中的最大痛点。
    - **链接**: https://github.com/anomalyco/opencode/issues/6231

2.  **#37012 - [功能] 保留旧版布局选项**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **说明**: V2 版本 UI 重构后，部分用户认为新布局导航路径长、效率低，强烈要求保留或提供切回旧版布局的选项。这反映了重大 UI 更新对核心用户工作流的冲击。
    - **社区反应**: 获得 30 个 👍，29 条评论，用户详细列举了旧版的便捷性，社区情绪偏向“求回归”。
    - **链接**: https://github.com/anomalyco/opencode/issues/37012

3.  **#19130 - Windows ARM64 原生: TUI 初始化失败**
    - **重要性**: ⭐⭐⭐⭐
    - **说明**: 在 Windows ARM64 平台上，原生二进制文件可执行非交互命令，但 TUI（文本用户界面）无法启动，这对 ARM 设备（如 Surface Pro X）的开发者是重大阻碍。
    - **社区反应**: 13 条评论，用户正在积极提供日志和调试信息，开发者已确认问题涉及 bun:ffi 与 TinyCC 的兼容性。
    - **链接**: https://github.com/anomalyco/opencode/issues/19130

4.  **#35475 - 内容过滤器误报导致被收费 ~$20**
    - **重要性**: ⭐⭐⭐⭐
    - **说明**: 针对 `claude-fable-5` 模型的内容过滤器存在误报，在阻止了无害请求输出后仍收取了高昂的缓存写入费（约 $6.69/次）。这是一个 **既影响功能又涉及经济成本** 的严重问题。
    - **社区反应**: 10 条评论，用户提供了详细证据，要求要么退款，要么修复计费逻辑。此问题与 #35643 关联。
    - **链接**: https://github.com/anomalyco/opencode/issues/35475

5.  **#27875 - 权限授予界面卡死，回车键失效**
    - **重要性**: ⭐⭐⭐⭐
    - **说明**: 子代理循环调用无效工具后发起权限请求，但用户无法通过回车键确认，导致流程彻底卡死。这是一个 **阻断用户操作流程** 的严重交互 Bug。
    - **社区反应**: 8 条评论，用户描述了具体的卡死场景，该问题对 `omo` 模式影响尤甚。
    - **链接**: https://github.com/anomalyco/opencode/issues/27875

6.  **#37326 - 数学公式不渲染**
    - **重要性**: ⭐⭐⭐
    - **说明**: 升级到 v1.18.2 后，LaTeX 数学公式无法正常渲染，以纯文本形式显示。对于使用 AI 进行科研、教学或文档编写的用户影响较大。
    - **社区反应**: 7 条评论，用户提供了截图，问题清晰，并得到了快速跟进。类似问题 #38030 也在同日被报告。
    - **链接**: https://github.com/anomalyco/opencode/issues/37326

7.  **#26220 - [Bug] 工具调用完成后进入无限循环**
    - **重要性**: ⭐⭐⭐
    - **说明**: 在 V2 版本（Big Pickle）中，AI 完成工具调用后，进程陷入无限循环，不再响应用户输入，必须强制关闭。这是一个 **严重的运行时稳定性问题**。
    - **社区反应**: 7 条评论，用户报告了多种复现场景，开发者正在排查。
    - **链接**: https://github.com/anomalyco/opencode/issues/26220

8.  **#6284 - [讨论] [功能]: 支持从右到左 (RTL) 语言**
    - **重要性**: ⭐⭐⭐
    - **说明**: 阿拉伯语等 RTL 语言在输入和输出时存在显示问题。虽然 Issue 已关闭，但仍在更新中，表明国际化支持是社区关注点。
    - **社区反应**: 6 条评论，讨论集中在输入框和消息气泡的渲染对齐问题上。
    - **链接**: https://github.com/anomalyco/opencode/issues/6284

9.  **#26266 - [功能]: 在 UI 中显示子代理的推理层级**
    - **重要性**: ⭐⭐⭐
    - **说明**: 当子代理被调用时，用户希望看到其“思考/推理”过程，以便更好地理解 AI 的决策路径，增强透明度和调试能力。
    - **社区反应**: 5 条评论，用户表示当前子代理的“黑盒”状态不利于追踪任务进展。
    - **链接**: https://github.com/anomalyco/opencode/issues/26266

10. **#38564 - 子代理终止时未杀死衍生进程（磁盘滥用风险）**
    - **重要性**: ⭐⭐⭐⭐
    - **说明**: 当用户取消子代理任务时，其启动的 PowerShell 子进程并未被杀死，继续在后台运行，可能导致 100% I/O 和磁盘滥用。这是一个 **资源管理与安全性** 的潜在风险。
    - **社区反应**: 2 条评论，但问题严重性高，描述清晰，属于 V2 的进程管理漏洞。
    - **链接**: https://github.com/anomalyco/opencode/issues/38564

## 重要 PR 进展

1.  **#38369 - [PR] fix(core): improve patch errors**
    - **功能**: 改进补丁（patch）应用失败时的错误报告。现在能更精确地定位是哪个操作（添加、删除或移动）失败，并包含失败原因和路径。
    - **链接**: https://github.com/anomalyco/opencode/pull/38369

2.  **#38423 - [PR] feat(ai): preserve raw finish reasons**
    - **功能**: AI 接口增强。现在 `step-finish` 事件会包含原始的 `finish_reason`（如来自 OpenAI 或 Anthropic），而不仅仅是标准化的值。这为高级用户和深度调试提供了更多原始信息。
    - **链接**: https://github.com/anomalyco/opencode/pull/38423

3.  **#38198 - [PR] fix(acp): stage file edits for native review instead of writing twice**
    - **功能**: 修复 ACP 协议中文件编辑的流程。现在会将编辑内容暂存（stage）以供原生审查，而不是直接写入两次，避免了潜在的竞态条件和冗余操作。
    - **链接**: https://github.com/anomalyco/opencode/pull/38198

4.  **#38539 - [PR] fix(tui): preview written file content**
    - **功能**: TUI 增强。当 AI 写入文件后，现在会以卡片形式展示文件的“前后对比”差异（Diff），而不是只显示一行日志。这极大地提升了代码审查的直观性。
    - **链接**: https://github.com/anomalyco/opencode/pull/38539

5.  **#38452 - [PR] fix(llm): preserve response message phases**
    - **功能**: 修复 LLM 交互逻辑。确保 AI 响应消息的“阶段”（phase）信息被正确保留和回放，这对于多轮对话和状态管理至关重要。
    - **链接**: https://github.com/anomalyco/opencode/pull/38452

6.  **#33535 - [PR] fix(sdk): apply undici headersTimeout for long-running requests**
    - **功能**: 修复一个长期存在的网络超时问题。通过增加 `headersTimeout`，解决了大模型在长时间推理时，因为等待 HTTP 头部而导致的连接中断。这个 PR 经过自动化清理后合并，对稳定性提升显著。
    - **链接**: https://github.com/anomalyco/opencode/pull/33535

7.  **#33532 - [PR] feat(app): add offline PWA support**
    - **功能**: 为 Web 端应用增加了离线 PWA（渐进式 Web 应用）支持。开发者现在可以在没有网络的情况下打开缓存的 Web 界面，提升了可用性。
    - **链接**: https://github.com/anomalyco/opencode/pull/33532

8.  **#33531 - [PR] fix(opencode): recover expired websocket auth**
    - **功能**: 修复 WebSocket 连接过期时的认证恢复逻辑。现在当认证令牌（Token）过期导致 WebSocket 断开时，客户端会自动刷新 Token 并重连，避免了手动重登录的麻烦。
    - **链接**: https://github.com/anomalyco/opencode/pull/33531

9.  **#33523 - [PR] feat: Add LLM and session observability hooks**
    - **功能**: 插件 SDK 重大更新。新增了四个可观察性钩子（hooks），允许插件实时监听 LLM 流、工具执行、操作和代理运行状态。这为开发强大的调试和监控插件奠定了基础。
    - **链接**: https://github.com/anomalyco/opencode/pull/33523

10. **#33505 - [PR] feat: Added voice input functionality for the coded agent**
    - **功能**: 为代码代理增加语音输入功能。这是人机交互方式的一个新探索，允许开发者用语音下达指令，尽管 PR 描述提到“回退到稳定设置”，但该功能本身值得关注。
    - **链接**: https://github.com/anomalyco/opencode/pull/33505

## 功能需求趋势

- **UI/UX 改进**: **保留旧版布局** 的需求高居榜首，用户对 V2 的大规模 UI 变更存在抵触情绪。同时，**子代理状态可视化**（如推理层级）也是提升透明度的重要诉求。
- **模型集成与兼容性**: 社区强烈要求 **自动发现模型**，以简化与本地/第三方 OpenAI 兼容提供商（如 Ollama）的集成。对 **DeepSeek V4**、**Kimi K3** 等新模型的支持和兼容性问题是近期热点。
- **平台支持**: **Windows ARM64 原生支持** 的 Bug 报告表明，非 x86 架构的开发者群体正在增长，平台的完整兼容性是重要考量。
- **内容安全与计费**: 内容过滤器 **误报导致扣费** 的问题引发了社区对安全机制和计费公平性的讨论，这将成为未来优化的一个重点方向。
- **可观测性与扩展性**: 新增的 **Hooks 观察点** 预示着社区正朝着更强大的插件生态和可观测性基础设施发展，未来更多第三方插件可以基于此实现深度监控。

## 开发者关注点

- **V2 (Big Pickle) 稳定性**: 多个严重 Bug（无限循环、TUI 崩溃、子进程残留）指向 V2 版本不成熟，稳定性是开发者当前最痛的点。高频更新 (`1.18.x`) 也侧面印证了修复工作的紧迫性。
- **核心功能回归**: 旧版布局的呼声说明，某些被移除或变更的核心交互范式（如导航效率）对老用户影响巨大，社区可能需要一个过渡期或可配置选项。
- **成本控制意识**: 开发者对“内容过滤器误报扣费”反应强烈，表明用户对成本非常敏感。任何不透明或错误的计费行为都可能损害社区信任。
- **插件生态活跃**: 大量 PR 涉及插件、生态系统文档和 SDK 改进，显示 OpenCode 的插件生态正在快速构建中，开发者对扩展开放代码的工具兴趣浓厚。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-24

## 📰 今日速览

昨日社区围绕 **工具调用严格模式（constrained sampling）** 的讨论持续升温（#6306 获 22 条评论），核心开发者 mitsuhiko 提交了对应 PR #6341。同时，多个关键 Bug 修复进入合并阶段：Llama provider 硬编码 maxTokens 限制被解除（#6994 → PR #7034），`/copy` 命令在 Wayland 下的虚假成功问题得到彻底修复（#7012 → PR #7009）。模型热重载、窄终端崩溃等长期痛点也均有了进展。

---

## 🔍 社区热点 Issues（10 条）

### 1. #6306 – 支持工具严格模式 / 语法约束（核心功能讨论）
- **评论：22** | **状态：已关闭**
- **摘要**：讨论在 SDK 中表达“自由形式”或“严格”工具的能力，与 LLM 的语法感知探测相关。OpenAI SDK 已支持自定义 LARK 或 Rust regex，Pi 计划跟进。
- **链接**：https://github.com/earendil-works/pi/issues/6306

### 2. #6951 – Qwen3.8-max-preview 推理力度映射错误（模型适配）
- **评论：3** | **状态：开放**
- **摘要**：Pi 目前使用 `minimal/low/medium/high`，但 Qwen 官方 API 要求 `low / medium / xhigh`，导致推理配置不正确。
- **链接**：https://github.com/earendil-works/pi/issues/6951

### 3. #6999 – 恢复 models.json 热重载（用户体验 Bug）
- **评论：3** | **状态：开放**
- **摘要**：0.80.8 版本后，打开 `/model` 不再从磁盘重新加载自定义提供商/模型，用户必须重启 Pi 才能生效。
- **链接**：https://github.com/earendil-works/pi/issues/6999

### 4. #6994 – Llama provider 硬编码 maxTokens 限制（Bug）
- **评论：3** | **状态：已关闭**
- **摘要**：所有 llama.cpp 提供商的输出 token 上限被固定为 16384，无法通过配置调整。
- **链接**：https://github.com/earendil-works/pi/issues/6994

### 5. #6948 – llama.cpp 默认模型启动时未应用（竞态 Bug）
- **评论：3** | **状态：开放**
- **摘要**：即使 `settings.json` 中设置了 `defaultProvider: "llama.cpp"` 和对应模型，会话启动时仍然使用默认模型而非指定模型。
- **链接**：https://github.com/earendil-works/pi/issues/6948

### 6. #7012 – `/copy` 命令在 wl-copy 失败时未回退（Bug）
- **评论：3** | **状态：已关闭**
- **摘要**：`wl-copy` 的 spawn 被 `.unref()`，导致即使失败也返回成功，后续的 `xclip` 和 OSC 52 回退从未执行。
- **链接**：https://github.com/earendil-works/pi/issues/7012

### 7. #7033 – 坏包 manifest 导致会话启动崩溃（稳定性 Bug）
- **评论：2** | **状态：已关闭**
- **摘要**：安装的包中 `package.json` 的 `pi` 清单内资源字段为 `"./skills"`（应为数组）时，启动时抛出 `TypeError` 并退出，且坏包持续存在导致每次启动失败。
- **链接**：https://github.com/earendil-works/pi/issues/7033

### 8. #7030 – OpenAI 模型前缀被丢弃（Bug）
- **评论：2** | **状态：已关闭**
- **摘要**：使用 Cloudflare AI Gateway 时，`getBuiltinProviderForModel` 返回 undefined，导致代码回退到原始 API provider，丢失了正确的模型前缀。
- **链接**：https://github.com/earendil-works/pi/issues/7030

### 9. #6970 – GitHub Copilot 插件集成导致 Token 失效（集成问题）
- **评论：2** | **状态：开放**
- **摘要**：Pi 使用 `GitHub Copilot Plugin`（OAuth 设备授权流）而非标准 OAuth，导致与其他 Copilot 客户端（如 copilot-lsp）同时使用时 Token 被频繁失效。
- **链接**：https://github.com/earendil-works/pi/issues/6970

### 10. #6998 – 阿里云 DeepSeek 模型应使用 `thinkingFormat: qwen`（模型配置）
- **评论：2** | **状态：开放**
- **摘要**：阿里云（Qwen Token Plan）提供的 DeepSeek 模型需要 `thinkingFormat: qwen`，但 `generate-models` 错误地覆盖了 DeepSeek 的默认配置。
- **链接**：https://github.com/earendil-works/pi/issues/6998

---

## 🚀 重要 PR 进展（10 条）

### 1. #6341 – 支持受限采样（constrained sampling）
- **作者：mitsuhiko** | **状态：已关闭**
- **摘要**：为工具添加 `constrainedSampling` 配置，支持 JSON Schema 约束采样（strict）和正则约束采样。对应 Issue #6306 的实现。
- **链接**：https://github.com/earendil-works/pi/pull/6341

### 2. #7036 – 修复模型配置热重载
- **作者：mitsuhiko** | **状态：开放**
- **摘要**：修复 #6999，使 `/model` 时重新加载 `models.json` 的变更。但指出更干净的方案是通过 `reloadConfig` 返回值而非强制刷新。
- **链接**：https://github.com/earendil-works/pi/pull/7036

### 3. #7034 – 使用 llama 上下文窗口推导输出限制
- **作者：christianklotz** | **状态：已关闭**
- **摘要**：移除硬编码的 16384 token 上限，改为从每个加载模型的上下文窗口动态计算输出限制。修复 #6994。
- **链接**：https://github.com/earendil-works/pi/pull/7034

### 4. #7032 – 暴露不可用的 scope 模型诊断
- **作者：christianklotz** | **状态：开放**
- **摘要**：当配置的模型不再可用时，在 `/scoped-models` 中以 `no-match` 诊断形式显示，允许用户删除，同时保持 CLI/设置稳定。
- **链接**：https://github.com/earendil-works/pi/pull/7032

### 5. #7015 – 修复窄终端下编辑器滚动指示器截断
- **作者：christianklotz** | **状态：已关闭**
- **摘要**：生成纯文本后着色，对顶部/底部滚动指示器进行截断，防止在窄宽度下崩溃。增加回归测试。
- **链接**：https://github.com/earendil-works/pi/pull/7015

### 6. #7017 – 实验性有限重绘支持
- **作者：mitsuhiko** | **状态：已关闭**
- **摘要**：新增设置以在重绘时仅更新当前窗口而非整个长会话，显著改善超大会话下的 TUI 性能。
- **链接**：https://github.com/earendil-works/pi/pull/7017

### 7. #7028 – 修复 `/resume` 嵌套自引用
- **作者：simonckemper** | **状态：已关闭**
- **摘要**：在已通过 `/resume` 打开的会话中再次执行 `/resume` 时，选择器错误地只显示当前会话本身。修复 #7029。
- **链接**：https://github.com/earendil-works/pi/pull/7028

### 8. #7018 – 为 AssistantMessage 添加 hiddenThinkingLabel 字段
- **作者：WintryWind7** | **状态：已关闭**
- **摘要**：允许每条消息设置独立的思考标签（如“思考了 3s”），替代之前的全局标签，帮助用户判断模型是否仍在思考。
- **链接**：https://github.com/earendil-works/pi/pull/7018

### 9. #7011 – 共享宿主模块以支持原生 ESM 扩展
- **作者：haoqixu** | **状态：开放**
- **摘要**：拦截 jiti 的原生 import，让扩展复用宿主 Pi 的模块实例，避免因私有副本导致模块状态不一致。
- **链接**：https://github.com/earendil-works/pi/pull/7011

### 10. #6971 – 发射 bash_execution_update 事件
- **作者：ananthakumaran** | **状态：已关闭**
- **摘要**：为客户端（如 Emacs 集成）提供 bash 执行更新的实时事件，支持并行执行跟踪。修复 #6703。
- **链接**：https://github.com/earendil-works/pi/pull/6971

---

## 📈 功能需求趋势

从昨日 Issue 和 PR 中可提炼出以下社区关注方向：

- **新型模型提供商适配**：Qwen、DeepSeek、SiliconFlow、Anthropic 的 server-side fallback 等需求持续涌现，社区对多提供商兼容性要求更高。
- **工具调用与语法约束**：`constrainedSampling` / Strict Tools 成为热门话题，开发者希望 Pi 能利用 LLM 的 grammar-aware 能力生成严格格式的工具参数。
- **模型配置热重载**：用户期望在运行中编辑 `models.json` 并实时生效，无需重启会话。
- **终端 UI 稳定性**：窄宽度崩溃、CJK 光标定位、长会话重绘性能等问题被多次提及，说明 TUI 的鲁棒性和国际化体验需要加强。
- **剪贴板/系统集成修复**：在沙箱环境（bwrap、Wayland）下的 `/copy` 失败问题引发多次报告，开发者对跨环境兼容性敏感。
- **扩展系统改进**：扩展加载后的作用域污染（#6968）、模块隔离（#7011）和事件系统（#6971）成为新焦点。

---

## 🔧 开发者关注点

1. **启动与配置稳定性**：`defaultProvider`/`defaultModel` 未生效、坏包导致 crash-loop、模型热重载丢失——这些基础问题严重影响日常使用体验。
2. **模型参数硬编码**：Llama 的 maxTokens、Qwen 的 reasoning effort 映射，以及阿里云 DeepSeek 的 thinkingFormat，说明 Pi 对非 OpenAI 模型的自

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-24)

## 今日速览
过去 24 小时，社区活跃度维持高位，共产生 44 条新 Issue 和 50 条 PR 更新。焦点集中在三方面：**性能退化修复**（如强制全提示重处理、冷启动延迟）、**CI 稳定性**（多条主分支 E2E 测试失败引发反思）以及**企业级扩展集成**（外部内存、Context Provider 等新提案）。多个 bug 修复 PR 已进入合并流程。

---

## 社区热点 Issues（10 条）

1. **#5736** – 强制全提示重处理频繁出现  
   - 用户反映更新后本地 LLM 在对话中频繁执行全提示重处理，影响交互效率。社区关注度高（7 条评论，1 个👍），属于性能回归。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/5736)

2. **#7599** – 工件记录缺少 managedId  
   - 通过 `record_artifact` 写入的文件在 SSE 事件中缺失关键 `managedId`，导致后续操作（如编辑）无法定位。已标记为 P2 bug，影响扩展功能。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/7599)

3. **#7449** – 提议定义企业级外部内存集成规范  
   - 提出一种提供商无关的企业外部内存集成框架，目标为文档优先、逐步兼容。属于长期功能需求，已进入讨论阶段（5 条评论，need‑discussion）。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/7449)

4. **#7485** – TUI 恢复后消息与输入框之间出现大片空白  
   - 使用 `qwen resume` 后，终端 UI 出现异常空白区域，影响可用性。P2 级别，已有社区成员标记 welcome‑pr。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/7485)

5. **#7264** – 冷启动性能：剩余懒加载候选优化  
   - 基于 esbuild 元数据审计，发现 ACP 子进程冷启动时静态导入 2420 模块（17.24 MiB），提出分批懒加载方案。关注性能优化社区的开发人员。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/7264)

6. **#6014** – 新版本不再显示 Agent 读取了哪些文件  
   - 用户抱怨升级后 `read_file` 消息仅显示 “read 1 file” 而不再列出文件名，被视为功能降级。已有 4 条讨论，可能为 UI 配置问题。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/6014)

7. **#6806** – 状态栏上下文使用百分比在 `/compress` 后未刷新  
   - 压缩操作后，底栏显示的 token 用量仍保持旧值，直到下一次模型请求才更新。UI 反馈不够及时，已标记 welcome‑pr。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/6806)

8. **#7520** – npm 12 兼容性导致更新检查失败  
   - 使用 Node.js 26 自带的 npm 12 时，更新检查因 `npm view` 返回格式变化而报 “registry 错误”。修复 PR 已合并。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/7520)

9. **#7568** – 安装扩展失败：ID 归属检查过于严格  
   - 从 GitHub 安装 GitHub Skills 扩展时，由于扩展 ID 与仓库名不匹配（`dotnet-test` 属于 `dotnet`），安装被拒绝。属于工具链兼容性问题。  
   - [链接](https://github.com/QwenLM/qwen-code/issues/7568)

10. **#7616** – 质疑 E2E 测试数量是否过多  
    - 开发者指出过去 30 次主分支 E2E 失败多为非确定性模型 API 或 Docker 沙箱慢引起的误报，建议减少冗余测试。反映了 CI 稳定性的痛点。  
    - [链接](https://github.com/QwenLM/qwen-code/issues/7616)

---

## 重要 PR 进展（10 条）

1. **#7627** – 修复后台任务存活检测（Shell liveness sidecar）  
   - 为托管后台 shell 命令添加轻量级存活探测，记录 PID、状态和心跳时间戳，确保模型能可靠获取进程状态。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7627)

2. **#7628** – 更新 Channels 文档：循环调度与主动投递  
   - 完善频道文档，覆盖持久化调度循环、每消息记忆召回、后台 Agent 结果投递、`approvalMode` 及 Webhook 等配置。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7628)

3. **#7302** – CLI 增加 `@` 引用先前会话并支持补全  
   - 实现项目级优先会话的 `@` 补全，选中后插入 `@session:<id>` 引用，并注入只读摘要。提升对话回溯效率。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7302)

4. **#7607** – 核心：添加可配置的图像生成模型支持  
   - 允许用户指定图像生成模型提供商（如 DALL·E 3、Stable Diffusion），通过 `/model --image` 切换，并内置审批流程。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7607)

5. **#7577** – 将频道生命周期限定到工作区运行时  
   - 第二阶段性工作，引入工作区级频道管理服务，使单个频道可在指定工作区内独立启动/停止/重载，避免全局影响。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7577)

6. **#7471** – Web Shell 新会话中增加 Git 模式选择器  
   - 在会话创建流程中嵌入 Git 模式选择（当前分支、新分支、无 Git），方便开发者在不同工作流间切换。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7471)

7. **#7268** – 热重载工作区信任策略  
   - 使工作区信任变更无需重启守护进程即可生效，引入语义快照和监控层，自动关闭旧运行时并创建新运行环境。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7268)

8. **#7469** – 用智能审核路由替换宽泛的 CODEOWNERS  
   - 通过 GitHub Actions 分析变更文件并智能分配审核者，替代原先对所有 core 模块 PR 要求全部 maintainer 审核的规则。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/7469)

9. **#6451** – 重写 Fleet View 以匹配 Claude Code 的 Agent 视图 UI  
   - 对多会话管理界面进行全面重构，使其更接近 Claude Code 的“代理视图”交互模式，提升多任务可视性。  
   - [链接](https://github.com/QwenLM/qwen-code/pull/6451)

10. **#7620** – 修复 Web Shell 的 ANSI 解析：支持 256 色与 TrueColor  
    - `parseAnsi` 函数在解析 SGR 序列时，将 `38`/`48`/`58` 扩展颜色的后续参数误当作独立代码。本 PR 正确消费这些参数，解决颜色渲染异常。  
    - [链接](https://github.com/QwenLM/qwen-code/pull/7620)

---

## 功能需求趋势

- **企业级集成**：多个新提案聚焦于外部内存（#7449）、外部 Context Provider（#7585）、Telegram 频道主题路由（#7609）等，表明社区对生产环境下的集成能力有强烈期待。  
- **CI/CD 质量**：E2E 测试可靠性、构建失败自动修复（#7516、#7559、#7605）成为高频关注点，开发者希望减少非确定性测试噪音。  
- **UI/UX 改进**：TUI 空白区域（#7485）、状态栏不刷新（#6806）、文件读取信息显示（#6014）等精细体验问题密集出现，表明 CLI 用户界面的细节优化是当前重点。  
- **多模态与扩展能力**：图像生成（#7607）、视频输入（#7497）等新能力正在被纳入，扩展生态的安装与兼容性（#7568）也是热点。

---

## 开发者关注点

- **性能回归**：#5736 的全提示重处理、#7264 的冷启动延迟是用户最直接的痛点，社区呼吁尽快优化。  
- **兼容性问题**：npm 12（#7520）、微信频道（#7590）、VS Code 扩展（#7489）等集成处的兼容性 bug 影响日常使用。  
- **CI 稳定性**：#7616 指出大量 E2E 失败并非实际回归，而是测试设计问题，建议重构 CI 策略。  
- **安全与信任**：工作区信任热重载（#7268）、Git 破坏性操作守卫（#7531）等 PR 说明开发者对安全性持续投入。  
- **修复反馈**：多个 bug 提交后，社区响应迅速（如 #7138 取消提示恢复、#7575 用户级别技能加载）并标记 welcome‑pr，体现协作氛围。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 2026-07-24 的 CodeWhale（原 DeepSeek TUI）社区动态日报。

---

# CodeWhale 社区动态日报 | 2026-07-24

## 今日速览

今日社区主要围绕即将发布的 **v0.9.1** 版本进行最后的冲刺与修复。核心动态包括开启 **发布前安全审查** 以解决高优先级依赖告警，并着手修复 TUI 在 macOS 上的 **进程即刻退出** 和 **长篇内容粘贴损坏** 等阻碍发布的严重问题。此外，**环境级工具沙箱** 功能正式定型，标志着该项目在安全性和 Agent 设计上进入新阶段。

## 版本发布
- **无**。当前社区焦点在 v0.9.1 的候选版本质量检查上。

## 社区热点 Issues

#### 1. **发布前安全审查: 深潜扫描与依赖告警处理 [#4713]**
- **摘要**: 社区负责人 `Hmbown` 发起该工单，要求在 v0.9.1 发布前，必须完成全仓库安全审查，并处理当前 17 个公开的 Dependabot 告警（7个高危，10个中危）。影响范围包括 `axios`, `browserslist` 等关键依赖家族。
- **重要性**: **🔥 阻碍发布**。这是版本发布的质量门禁，直接影响 v0.9.1 是否能按时发布。社区对此的4条评论表明了对版本稳定性和安全性的高度关注。
- **链接**: [Hmbown/CodeWhale Issue #4713](https://github.com/Hmbown/CodeWhale/issues/4713)

#### 2. **环境级工具沙箱功能定型 [#4042]**
- **摘要**: 该工单详细追踪了不同执行上下文（会话、子Agent、Fleet 工作者、MCP 服务器）对工具限制的运行时强制执行机制。已确认 `--disallowed-tools` 标志可以正常工作。
- **重要性**: **✨ 重大特性里程碑**。这对于构建安全、可控的 AI Agent 至关重要，是多 Agent 协作和沙箱设计的核心部分，19 条评论体现了社区在架构设计上的深度探讨。
- **链接**: [Hmbown/CodeWhale Issue #4042](https://github.com/Hmbown/CodeWhale/issues/4042)

#### 3. **Composer: 大段提示词粘贴后字节损坏 [#4719]**
- **摘要**: 用户在粘贴长文本时，路径被截断、字符丢失，导致模型接收到错误指令，下游 Agent 因此报告“路径不存在”。
- **重要性**: **🐛 严重 Bug**。这直接破坏了编码场景中复制粘贴代码或指令的核心工作流，属于直接影响用户创作体验的严重问题，必须在上线前修复。
- **链接**: [Hmbown/CodeWhale Issue #4719](https://github.com/Hmbown/CodeWhale/issues/4719)

#### 4. **TUI: 在全新终端中启动后立即退出 [#4716]**
- **摘要**: 在 macOS 上通过 `codew` 启动 TUI，终端立即提示 `[Process completed]`，程序无法保持运行。
- **重要性**: **🛑 阻碍发布**。这是导致程序完全不可用的致命错误，特别是对于新用户的第一印象打击巨大。已被标记为 `stop-ship`。
- **链接**: [Hmbown/CodeWhale Issue #4716](https://github.com/Hmbown/CodeWhale/issues/4716)

#### 5. **Windows 巴西键盘布局快捷键冲突 [#4723]**
- **摘要**: 在巴西 ABNT2 键盘布局上，输入 `/` 的 `AltGr+Q` 组合键被系统识别为 `Ctrl+Alt+Q`，与 TUI 的帮助功能快捷键冲突。
- **重要性**: **🪟 平台兼容性**。这是一个跨平台、尤其针对非英语国家用户的典型本地化输入问题。虽然仅有一条评论，但此类问题极易影响海外用户的体验。
- **链接**: [Hmbown/CodeWhale Issue #4723](https://github.com/Hmbown/CodeWhale/issues/4723)

#### 6. **设置菜单审计: 遗留/密度/标签问题 [#4721]**
- **摘要**: 这是一个追踪工单，旨在全面审核设置菜单界面，清理遗留的 DeepSeek 假设、错误标签、密度过高和作用域混淆等问题。
- **重要性**: **🧹 用户界面（UI）质量**。这体现了社区在用户界面精细化打磨上的投入，旨在提升应用的专业度和易用性。
- **链接**: [Hmbown/CodeWhale Issue #4721](https://github.com/Hmbown/CodeWhale/issues/4721)

#### 7. **提供商/模型设置和自动切换体验不佳 [#4720]**
- **摘要**: 用户反馈 Agent 在运行时自动切换提供商，但整个过程不够清晰和有意。工单要求评估切换原因、提示是否明确以及用户控制权。
- **重要性**: **⚙️ 核心体验**。模型切换是 CodeWhale 的核心功能之一，用户体验不顺畅会严重削弱产品的透明度和可控性，1条评论反映了社区对此功能的持续关注。
- **链接**: [Hmbown/CodeWhale Issue #4720](https://github.com/Hmbown/CodeWhale/issues/4720)

#### 8. **设置菜单显示遗留的 “DeepSeek 回退模型” [#4717]**
- **摘要**: 当`zai`等非 DeepSeek 提供商处于活跃状态时，设置菜单仍然显眼地显示 `deepseek-v4-pro` 作为回退模型，信息不准确且误导用户。
- **重要性**: **🧹 UI/UX 误导**。这是一个典型的界面遗留问题，会导致用户对当前使用的模型感到困惑，降低了界面信息的准确性。
- **链接**: [Hmbown/CodeWhale Issue #4717](https://github.com/Hmbown/CodeWhale/issues/4717)

#### 9. **TUI 转录面板信息密度过高 [#4718]**
- **摘要**: 用户反馈“工具卡片”和“推理状态”等信息被重复显示，如每行都有的“Option+V 查看”提示，导致视觉拥挤。
- **重要性**: **🧹 UI/UX 疲劳**。信息密度过高会分散用户在核心内容上的注意力，降低阅读效率。这是社区对界面审美和信息层级表达的呼声。
- **链接**: [Hmbown/CodeWhale Issue #4718](https://github.com/Hmbown/CodeWhale/issues/4718)

## 重要 PR 进展

#### 1. **修复(TUI): 归档已完成的后台 Shell 输出 [#4724]**
- **状态**: 打开 (Open)
- **内容**: `qinlinwang` 贡献了一个修复，使得后台 Shell 作业完成时，其输出尾部的可见内容能被正确地归档到源 `ExecCell` 中，并冻结持续时间显示。这极大地改善了异步任务的可追溯性。
- **链接**: [Hmbown/CodeWhale PR #4724](https://github.com/Hmbown/CodeWhale/pull/4724)

#### 2. **修复: 为 Anthropic 适配器清理工具输入 Schema [#4346]**
- **状态**: 已关闭 (CLOSED) (昨日更新)
- **内容**: 修复了使用 Anthropic 作为提供商时，工具 `input_schema` 包含 `oneOf` 等复杂类型导致 API 400 错误的重大兼容性问题。
- **链接**: [Hmbown/CodeWhale PR #4346](https://github.com/Hmbown/CodeWhale/pull/4346)

#### 3. **修复(TUI): 在详情中显示完整的编辑预览 [#4722]**
- **状态**: 打开 (Open)
- **内容**: `nightt5879` 改进了 `edit_file` 的审批卡片，在精简预览的同时，通过 `Alt+V` 按键惰性地加载完整的`-/+` 搜索/替换预览内容。平衡了界面紧凑性和信息完整性。
- **链接**: [Hmbown/CodeWhale PR #4722](https://github.com/Hmbown/CodeWhale/pull/4722)

#### 4. **特性(TUI): 添加可配置的会话令牌头部 [#4610]**
- **状态**: 打开 (Open) (昨日更新)
- **内容**: `XhesicaFrost` 参考 Issue #4520，在 TUI 头部增加了可选的令牌使用统计显示（输入、缓存命中、输出）。通过 `header_items` 配置项控制，增强了模型使用可视化。
- **链接**: [Hmbown/CodeWhale PR #4610](https://github.com/Hmbown/CodeWhale/pull/4610)

#### 5. **特性(Skills): 统一的技能管理器 [#4679]**
- **状态**: 已关闭 (CLOSED) (合并完成)
- **内容**: `SamhandsomeLee` 提交了 v0.9.1 计划中的一个重要功能：统一的 `/skills` 管理器，支持技能库的查询、审计、安装、更新、删除和信任操作。
- **链接**: [Hmbown/CodeWhale PR #4679](https://github.com/Hmbown/CodeWhale/pull/4679)

#### 6. **重构(Hooks): 拆分配置和执行器模块 [#4087]**
- **状态**: 打开 (Open) (昨日更新)
- **内容**: `cyq1017` 将庞大的 `hooks.rs` 模块拆分为 `config.rs` 和 `executor`，职责清晰，便于代码审查和维护。这是一个重要的代码架构改进。
- **链接**: [Hmbown/CodeWhale PR #4087](https://github.com/Hmbown/CodeWhale/pull/4087)

## 功能需求趋势

- **发布质量与安全审查**: 社区对即将发布的 v0.9.1 版本表现出极高的质量要求。自动化的依赖安全更新和发布前的安全审查已成为开发流程中的关键环节。
- **多提供商切换的用户体验**: 用户不仅要求能切换模型提供商，更要求切换过程透明、可控且界面信息准确。这是对 AI 工具 Agent 行为可解释性的更高要求。
- **输入处理健壮性**: 如何处理大段代码或文本的粘贴与嵌入，避免字节损坏，是 AI 编码助手工具的基础但关键的体验问题，需求十分强烈。
- **键盘布局兼容性**: 随着用户群体国际化，不同地区的键盘布局与默认快捷键冲突的问题开始浮现，对跨平台、跨布局的键盘策略提出了更高要求。
- **TUI 界面信息层级**: 社区开始从“功能可用”转向“体验舒适”，对 TUI 的信息密度的控制、冗余信息的剔除提出了明确的审美和功能需求。

## 开发者关注点

- **`[Process completed]` 即刻退出**: 这是当前用户反馈中最严重的痛点，直接阻碍了无法通过命令行进行调试的普通用户的使用。`#4716` 需要最高的优先级进行修复。
- **大段内容粘贴损坏**: 这是一个严重影响编码工作流（例如从现有项目中复制代码）的问题，开发者非常依赖此功能，此 Bug (`#4719`) 会严重打击用户信任。
- **模型切换的“黑盒”感**: 用户抱怨代理在运行时自动切换模型，但无法清晰地了解“为什么切换”。这导致用户对系统产生不信任感。
- **设置界面信息误导**: 设置界面中显示当前未使用的提供商配置信息（如 `#4717`），这会误导新手用户，让他们以为该配置仍在生效。
- **快捷键冲突**: 对于使用非美式键盘的用户，与系统键组合的冲突是一个日常使用的高频痛点，`#4723` 展示了跨本地化适配的重要性。
- **信息过载与视觉疲劳**: 资深用户指出转录面板的重复性信息导致视觉疲劳，这表明社区成员正在深度使用产品，并对细节提出了更高的要求。

</details>

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*