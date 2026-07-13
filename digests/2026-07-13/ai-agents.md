# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-13 00:55 UTC

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

## OpenClaw 项目深度报告

## OpenClaw 项目动态日报 — 2026-07-13

### 1. 今日速览

过去 24 小时 GitHub 活动量处于高位：共处理 500 条 Issue（新开/活跃 293，关闭 207）和 500 个 PR（待合并 310，已合并/关闭 190）。项目未发布新版本，但核心开发者在持续推进多项修复与重构，尤其集中于**会话状态持久化**、**网关内存泄漏**、**A2A 通信可靠性**以及**工具输出退化**等关键问题。社区讨论热度集中在“工具结果变成图片占位符导致智能体不可读”这一严重回归，以及“内存信任标签”“文件系统沙箱”等功能需求。整体项目健康度呈“高活跃、高压力”状态，积压的 P0/P1 级别缺陷数量较多，需维持关注。

### 2. 版本发布

无。

### 3. 项目进展（今日合并/关闭的重要 PR）

今日已关闭或合并的 PR 多为小范围修复与重构，包括：

- **PR #105800** `fix(release): allow larger plugin publication manifests`（已关闭）—— 解决 Microsoft Teams 插件签名清单超出 2 MiB 上限的发布阻塞问题。
- **PR #105790** `fix(slack): warn on disabled channel drops`（已关闭）—— 当 Slack 频道被设为 `enabled: false` 时，不再静默丢弃消息，改为警告输出，提升运维可见性。
- **PR #105804** `chore: eliminate unchecked TypeScript test casts`（合并中）—— 清理测试中的 `as any` 类型绕过，提升类型安全性。
- 另有多个 PR 处于“等待作者响应”或“需要维护者审核”状态（详见下文积压部分），尚未被最终合并。

此外，多个已关闭的 Issue（如 #65161、#67417、#86217、#38844、#90404、#79034、#93928、#93465）表明相关缺陷已被修复或被确认为不再复现，项目在**心跳隔离模式乱序**、**备份竞争条件**、**Feishu 分页错误**、**ACP Windows 兼容性**等方面有所进展。

### 4. 社区热点

- **Issue #75**（110 条评论，81 👍）—— [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)  
  作为开源以来最受欢迎的 Feature Request，持续收到社区用户对桌面端客户端覆盖的强烈呼吁。目前仅有 macOS、iOS、Android 版，Linux 与 Windows 用户被长期忽略。该 Issue 被标记为 `help wanted` 和 `impact:security`，但维护者尚未给出明确时间线。

- **Issue #99241**（22 条评论，P1）—— [Tool outputs sometimes render as image attachments and become unreadable to the agent](https://github.com/openclaw/openclaw/issues/99241)  
  严重回归：在长运行或 ANSI 密集型工具工作流中，工具结果被折叠为 `(see attached image)` 占位符，智能体无法读取原始输出。该问题与 #104721（P0）高度相关，后者描述“所有工具结果均返回 `(see attached image)`”，表明此 Bug 正在加速恶化。社区反响强烈，且无现有修复 PR。

- **Issue #104721**（12 条评论，P0）—— [All tool results return "(see attached image)" literal string instead of actual output](https://github.com/openclaw/openclaw/issues/104721)  
  报告者称之为“完全破坏”，数据被替换为字面字符串而非仅是显示错误。被标记为 `impact:ux-release-blocker`，应视为当前版本最高优先级。

- **Issue #91588**（19 条评论，P0）—— [Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days](https://github.com/openclaw/openclaw/issues/91588)  
  网关内存泄漏导致 OOM 杀死后循环重启，影响生产部署稳定性。虽已报告一个多月，但尚未有修复 PR 关联。

### 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2），括号内标注是否有修复 PR 关联：

| 严重等级 | Issue | 摘要 | 修复 PR |
|--------|-------|------|--------|
| P0 | [#104721](https://github.com/openclaw/openclaw/issues/104721) | 所有工具结果返回 `(see attached image)` 字面字符串，完全不可用 | 无 |
| P0 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏 350MB → 15.5GB，导致 OOM 循环重启 | 无 |
| P0 | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检在网关运行时损坏状态数据库，导致 `database disk image is malformed` | 无 |
| P1 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出变为图片附件占位符，智能体无法阅读（与 #104721 同类） | 无 |
| P1 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex 版 Telegram 会话超时，永远达不到 `turn/completed` | 无 |
| P1 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse 钩子派生 CPU 密集进程，阻塞网关 RPC | 有 PR [#105289](https://github.com/openclaw/openclaw/pull/105289)（热加载事务化） |
| P1 | [#102400](https://github.com/openclaw/openclaw/issues/102400) | 回复会话初始化冲突在 Slack/Webchat 上静默丢弃（Telegram 已重试） | 无 |
| P1 | [#89228](https://github.com/openclaw/openclaw/issues/89228) | 隔离 cron 会话中 exec 工具间歇性不可用（回归） | 无 |
| P1 | [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移导致频道会话存储 SQLite 为空（0 字节），影响 MS Teams | 无 |
| P1 | [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 write/exec 工具参数静默丢失 | 无 |

**稳定性关键趋势**：**工具输出占位符退化**（#104721 / #99241）和**网关内存泄漏**（#91588）是目前最危险的 P0 级问题，均无修复 PR。另有多项 P1 级 Bug 涉及会话状态损坏、通信静默失败，长期未解决。

### 6. 功能请求与路线图信号

- **Memory Trust Tagging (#7707) 与 Masked Secrets (#10659)**：用户要求对智能体记忆按来源打信任标签，以及防止智能体看到原始 API 密钥。这两个需求与安全相关，均有 `needs-security-review` 标记，但已有 PR #101276（deny-over-allow 执行审批）正在推进类似的访问控制能力。
- **文件系统沙箱 (#7722)**：配置式文件访问限制，已获得 4 👍，当前有 PR #101276 正在探索，但尚未合并。
- **Sub-agent Announce 抑制 (#8299)**：许多用户反馈子智能体完成后发送的总结公告无法可靠抑制，影响对话体验。尚无 PR。
- **TUI 多行输入 (#10118)**：支持 Shift+Enter 换行，Enter 发送，获得 4 👍，属于小但高频的体验提升。
- **OpenRouter 成本暴露 (#9016)**：智能体回复时附加费用信息，获得 1 👍，已有社区讨论但未进入开发。
- **动态模型发现 (#10687)**：OpenRouter 等快速变化提供商的模型列表应动态获取，现为静态，获得 3 👍，且被标记为 `maintainer`，表明维护者已关注。

路线图信号：从近期 PR 看，维护者正在重点推进**热加载事务化**（#105289）、**Signal 设置向导**（#100906）、**执行审批黑名单**（#101276）以及**持久化唤醒重放**（#105660 系列）等方向，侧面反映下一版本可能聚焦于**稳定性**与**可配置安全**。

### 7. 用户反馈摘要

- **痛点集中**：多次出现“智能体无法读取工具输出”“会话静默失败”“内存泄漏导致重启”“迁移后数据库损坏”。用户在 #104721 中直言“This is completely broken”，情绪强烈。
- **缺失平台支持**：#75 长期呼吁 Linux/Windows 本地应用，评论高达 110 条，但维护者一直未承诺，社区贡献者或许可以接手。
- **配置期望**：用户希望更细粒度的审批控制（#6615 白/黑名单）、隐藏敏感信息（#10659）、以及更友好的 TUI 交互（#10118）。
- **对透明度的需求**：用户在 #9409 中要求上下文溢出时提供具体 token 数、模型等信息，而非通用错误消息，获得 3 👍。
- **可观测性不足**：多位用户报告错误被静默吞掉（如 #90404 `spawn EINVAL` 无日志），以及备份/迁移失败后缺乏清晰指示。

### 8. 待处理积压

以下为长期未获得有效维护者响应或进展停滞的重要 Issue/PR，提醒维护者关注：

| 类型 | 编号 | 标题 | 状态 | 备注 |
|------|------|------|------|------|
| Issue | [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 2026-01-01 开启，110 评论 | 社区呼声最高，无任何 PR |
| Issue | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak (P0) | 2026-06-09 开启，无修复 | 严重威胁生产，需立即投入 |
| Issue | [#104721](https://github.com/openclaw/openclaw/issues/104721) | 所有工具结果返回占位符 (P0) | 2026-07-11 开启，无修复 | 版本阻断器，需紧急定位 |
| Issue | [#47910](https://github.com/openclaw/openclaw/issues/47910) | Provider fallback by failure class | 2026-03-16 开启，8 评论 | 有设计但无 PR，影响 failover 效率 |
| Issue | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动损坏实时状态数据库 (P0) | 2026-07-07 开启，8 评论 | 无修复 PR，且复现方式已验证 |
| PR | [#91271](https://github.com/openclaw/openclaw/pull/91271) | Include requester identity in sessions_send | 2026-06-07 开启，`needs-real-behavior-proof` | 长期未审核，影响 A2A 信任传递 |
| PR | [#105660](https://github.com/openclaw/openclaw/pull/105660) | Durable beta3 wake replay foundation (XL) | 2026-07-12 开启，`waiting on author` | 大范围重构，作者需补充上下文 |
| PR | [#105801](https://github.com/openclaw/openclaw/pull/105801) | improve: start Gateway and first agent turn faster | 2026-07-13 开启，XL 范围 | 改善启动延迟，尚未合并 |

---

*日报由 AI 生成，数据源为 GitHub openclaw/openclaw 仓库截至 2026-07-13 的公开活动。所有链接均指向对应 Issue/PR 页面。*

---

## 横向生态对比

好的，各位技术决策者和开发者们。以下是根据2026-07-13各开源项目社区动态摘要生成的横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-07-13)**

#### **1. 生态全景**

当前，个人AI助手与自主智能体开源生态正处于 **“高活跃、高压力、快迭代”** 的竞争性成长阶段。各项目普遍面临从“能用”到“好用”的工程化挑战，核心痛点高度集中在**工具调用的可靠性**、**会话状态的持久化**和**内存泄漏**等稳定性问题上。社区用户对**开箱即用的体验**和**多平台一致的稳定性**诉求强烈，驱动着项目从功能开发向质量巩固阶段过渡。同时，以 **记忆（Memory）**、**标准操作程序（SOP）** 和 **安全审计** 为代表的高级功能正在成为区分项目优劣的新战场。

#### **2. 各项目活跃度对比**

以下是今日各项目在GitHub上的核心活动数据一览。

| 项目名称 | 新开/活跃 Issue | 待合并/新开 PR | 今日版本发布 | 整体健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 293 | 310 | 无 | 高活跃、高压力，P0/P1积压严重，有版本阻断器风险。 |
| **Hermes Agent** | 50 (数据已整合) | 50 (数据已整合) | 无 | 高度活跃，Bug修复与社区反馈响应迅速，维护效率高。 |
| **IronClaw** | 多条CI相关 | 50 (PR更新量) | 无 | 极高活跃度，“Reborn”架构推进顺利，但CI稳定性是主要风险。 |
| **PicoClaw** | 3 | 1 | 无 | 中等活跃，开发平稳，社区关注Android兼容性。 |
| **NanoClaw** | 3 | 11 | 无 | 高活跃，开发密集，Bug修复响应迅速，但有大量待合并PR。 |
| **CoPaw** | 16 | 10 | 无 | 高活跃，v2.0.0版本迭代期，Bug集中爆发，修复并行。 |
| **ZeroClaw** | 多条 | 48 | 无 | 极高活跃度，功能迭代强劲，但存在合并瓶颈和严重Bug。 |
| **NanoBot** | 3 | 4 | 无 | 中等活跃，焦点在特定Bug修复和WebUI优化。 |
| **NullClaw** | 0 | 0 (今日4个已合并) | 无 | 稳定维护，无新问题，专注清理技术债务。 |
| **LobsterAI** | 1 | 1 | 无 | 低活跃，社区反馈较少，但存在严重影响多Agent功能的Bug。 |
| **TinyClaw / Moltis / ZeptoClaw** | 无活动 | 无活动 | 无 | 停滞或休眠状态，需关注后续动向。 |

**健康度总结：** **Hermes Agent** 和 **NullClaw** 在此日表现最为健康（活跃且无重大积压）；**OpenClaw**、**IronClaw**、**ZeroClaw** 虽极度活跃，但风险与Bug积压问题突出；**CoPaw** 处于版本更迭的阵痛期；**LobsterAI** 则因关键Bug未被响应而健康度较低。

#### **3. OpenClaw在生态中的定位**

- **优势与社区规模**：OpenClaw作为生态中的“核心参照”项目，其社区规模和Issue/PR活动量远超其他同类项目（日处理500条Issue和PR），表明其拥有最庞大的用户基础和开发者社区。它是生态中功能最全面、覆盖平台最广的“集大成者”。
- **技术路线差异**：OpenClaw采用高度模块化和插件化的架构，追求多平台（macOS, iOS, Android, Slack, Teams, Feishu等）的统一体验。这一策略使其成为通用型智能体平台的首选，但也带来了平台兼容性和状态管理（如会话状态持久化、内存泄漏）的复杂挑战。
- **与同类相比**：相比**Hermes Agent** 更侧重于Agent能力（如子智能体路由、Cron任务）和开发者体验，OpenClaw更偏向于打造一个稳定、可扩展的**个人AI基础设施**。但其当前面临的“工具输出退化”(#104721)和“网关内存泄漏”(#91588)等P0级Bug，若不及时修复，将严重动摇其**稳定性**的定位优势。

#### **4. 共同关注的技术方向**

以下需求在多个项目中涌现，反映了行业的共同痛点与方向：

- **工具调用的可靠性与可观测性**：
    - **涉及项目**: **OpenClaw**, **CoPaw**
    - **具体诉求**: 工具输出被折叠为图片占位符（`(see attached image)`），导致Agent无法读取结果。这暴露了在处理长对话或富媒体输出时，消息格式化与压缩逻辑的脆弱性。

- **会话状态持久化与迁移**：
    - **涉及项目**: **OpenClaw**, **CoPaw**
    - **具体诉求**: 数据库损坏（`database disk is malformed`）、版本升级后映射丢失、备份竞争条件等。这反映在快速迭代中，数据模型变更和持久化机制缺乏足够的健壮性与向后兼容性。

- **内存管理与资源泄漏**：
    - **涉及项目**: **OpenClaw** (网关), **ZeroClaw** (MCP工具模式), **Hermes Agent** (MemOS), **NanoClaw** (输出Token限制)
    - **具体诉求**: 系统在长期运行或工具密集交互后，内存持续增长直至OOM。背后是对Agent运行时的资源限制和垃圾回收机制提出了更高要求。

- **多平台支持与本地部署**：
    - **涉及项目**: **OpenClaw** (Linux/Windows Apps), **PicoClaw** (Android), **NanoBot** (Ollama性能), **ZeroClaw** (Slack/Telegram集成)
    - **具体诉求**: 用户强烈要求覆盖更多桌面和移动平台，并优化本地模型（如Ollama）的推理延迟和资源消耗。这表明个人用户的私有化部署**需求非常旺盛**。

- **安全与审批控制**：
    - **涉及项目**: **OpenClaw** (内存信任标签、执行审批黑名单), **Hermes Agent** (桌面端审批弹窗), **IronClaw** (统一guard函数), **ZeroClaw** (技能评审、MCP安全)
    - **具体诉求**: 社区对Agent执行敏感操作的“授权”与“审计”机制愈发关注，这是Agent从玩具走向生产工具的关键一步。

#### **5. 差异化定位分析**

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型个人AI助理，平台覆盖最广 | 追求一体化、跨平台体验的个人用户 | 插件化架构，强网关中心，状态管理复杂。 |
| **Hermes Agent** | 开发者优先，强Agent能力（子Agent、Cron） | 开发者、高级用户，追求自动化与灵活调度 | 侧重Agent运行时与编排，社区贡献活跃。 |
| **IronClaw** | 基于“Reborn”架构的下一代Agent | 面向未来的开发者和技术先锋 | 大胆重构核心架构，引入SOP、MCP等概念，技术前瞻性强。 |
| **ZeroClaw** | SOP驱动自动化、ZeroCode编辑器 | 关注业务流程自动化、低门槛开发的用户 | 强调流程化，Memory子系统增强，CLI使用模式。 |
| **CoPaw** | 团队协作与多Agent管理 | 团队用户，有从v1升级的存量用户 | 强调Agent间的协作与配置隔离，但也因此产生了高优先级Bug。 |
| **NullClaw** | 运维稳定、最小化依赖 | 追求稳定可靠、倾向于“低代码配置”的运维人员 | 代码库相对精简，通过合并历史PR来清理技术债务，不追求新功能。 |
| **PicoClaw** | 轻量化、ARM设备支持 | 在低配硬件或特殊环境（如树莓派）上部署的用户 | 资源占用小，架构简单，移动端兼容性是短板。 |
| **NanoBot** | 轻量级、本地模型优化 | 偏好本地模型、希望低成本运行的个人用户 | 关注Ollama等本地推理的集成与性能优化。 |

#### **6. 社区热度与成熟度**

- **快速迭代与高不确定性阶段**：
    - **OpenClaw**, **Hermes Agent**, **IronClaw**, **ZeroClaw**: 这些项目Issue/PR活动量巨大，功能更新频繁，同时Bug也集中爆发。对于开发者而言，意味着**功能新奇且选择多，但生产环境部署风险较高**，需紧盯补丁更新。

- **质量巩固与稳定输出阶段**：
    - **NanoBot**, **CoPaw**: 这些项目活跃度中等，主要精力在修复核心Bug和打磨兼容性。其中**CoPaw**正处于v2.0升级后的“阵痛期”，一旦迈过门槛，有望进入稳定状态。

- **稳定维护与低活跃阶段**：
    - **NullClaw**, **PicoClaw**, **LobsterAI**: 这些项目无重大功能发布，开发节奏放缓，或聚焦于特定场景的维护。对于寻求稳定的用户是合适选择，但需关注其是否仍有长期维护的潜力。

- **停滞或休眠状态**：
    - **TinyClaw**, **Moltis**, **ZeptoClaw**: 过去24小时无任何活动，表明项目可能已停止维护或进入休眠期。建议将其作为技术参考，但不宜作为主要开发或使用对象。

#### **7. 值得关注的趋势信号**

1.  **“可靠性”压倒“新鲜感”**：多个顶级Bug（如OpenClaw的工具退化、CoPaw的代理配置覆盖）已严重到影响核心功能。社区情绪从对“新功能”的期待转向了对“基础功能能否正常工作”的焦虑。**对开发者启示**：在设计新功能时，必须将**回归测试**和**消息/状态一致性**作为最高优先级的工程实践。

2.  **“记忆”（Memory）与“流程”（SOP）成为新竞争高地**：ZeroClaw和IronClaw围绕“记忆”审计与“SOP”自动化进行大规模PR推进，而OpenClaw也在探讨“内存信任标签”。这表明，单纯的消息对话已不能满足用户，**智能体需要拥有结构化的长期记忆和可编排的业务流程**，才能真正从“聊天机器人”进化为“数字员工”。

3.  **“安全与治理”从可选变为必须**：多个项目不约而同地增加了审批流（Hermes Agent）、访问控制（OpenClaw）和审计（ZeroClaw）功能。**对开发者启示**：在设计Agent与外部系统交互的API时，应内建**权限模型**和**审计日志**，这将是Agent进入企业级市场的“门票”。

4.  **“本地部署”需求明确且强烈**：社区对本地模型性能（NanoBot#4867）、轻量化客户端（PicoClaw#3182）和低功耗设备支持（PicoClaw#3250）的呼声，清晰地表明用户对数据隐私和控制权的重视。**对开发者启示**：一个优秀的Agent框架必须能够优雅地适应从云端到边缘的部署场景，并为核心模型的本地运行提供优化支持。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026‑07‑13

## 今日速览
过去 24 小时（统计截至 2026‑07‑12 UTC）项目保持中等活跃度：共更新 4 个 Issue（3 个新开/活跃、1 个关闭）和 5 个 PR（4 个待合并、1 个已合并/关闭）。无新版本发布。社区最关注的是 Issue #4867（Ollama 缓存优化），该 Issue 已于今天关闭，但背后暴露出的性能痛点值得跟进。另有一项 WebUI 安全修复 PR #4892 已完成合并，多项 Bug 修复 PR 仍在审查中。

---

## 项目进展

### 已合并/关闭的重要 PR

- **[[webui, fix, security, priority: p1] fix(webui): allow remote workspace access reduction](https://github.com/HKUDS/nanobot/pull/4892)**（#4892，已关闭）  
  限制远程 WebUI 会话对工作空间的访问权限，默认降级为“默认权限”，防止远程访问下的越权操作。该 PR 由 Re‑bin 贡献，属于安全优先级的修复，已合并。

其他 4 个待合并 PR 涉及心跳任务执行逻辑修复、转录 API Key 环境变量解析、WebUI 引导设置流程以及天气技能示例，已在下文相关部分列出。

---

## 社区热点

- **[[enhancement] Preserve exact prompt prefix to enable caching in Ollama and others](https://github.com/HKUDS/nanobot/issues/4867)**（#4867，已关闭，4 条评论）  
  这是今日讨论最集中的 Issue。用户 @The‑Markitecht 指出 Nanobot 在调用 Ollama 本地模型时，**每轮对话都会额外增加约 60 秒延迟**，导致 32 GB VRAM 环境下“完全不可用”。诉求是保留精确的 prompt 前缀以利用 Ollama 等推理缓存的特性。该 Issue 已在今天关闭，但其反映的高延迟问题对本地部署用户影响显著，值得后续持续关注是否已通过其他 PR（如 #4896）得到缓解。

---

## Bug 与稳定性

按严重程度排列：

1. **[bug] Issue with Discord bot integration**（#4897，OPEN，0 评论）  
   [https://github.com/HKUDS/nanobot/issues/4897](https://github.com/HKUDS/nanobot/issues/4897)  
   用户反映 Nanobot 网关上线后 Discord 机器人状态显示在线，但无法接收/发送任何消息。目前无 fix PR。建议维护者优先复现。

2. **[bug] prune_dream_sessions() fails to prune base64-encoded Dream session files**（#4894，OPEN，0 评论）  
   [https://github.com/HKUDS/nanobot/issues/4894](https://github.com/HKUDS/nanobot/issues/4894)  
   自 commit cf2f5896 后 Dream 会话文件改用 base64 编码文件名，但 `memory.py` 中的修剪函数仍使用 `dream_*.jsonl` 通配符，导致旧文件无法清理。属于回归 Bug。

3. **[bug] /dream-log and /dream-restore show non-Dream commits**（#4893，OPEN，0 评论）  
   [https://github.com/HKUDS/nanobot/issues/4893](https://github.com/HKUDS/nanobot/issues/4893)  
   `/dream-log` 和 `/dream-restore` 未过滤 Dream 专用提交，会混入备份、手动编辑等其它 commit，导致输出混乱。

此外，有两项修复 PR 正在审查中：

- **[[bug, regression, fix, priority: p1] fix(heartbeat): rewrite prompt to execute tasks instead of reporting](https://github.com/HKUDS/nanobot/pull/4896)**（#4896，OPEN）  
  解决 v0.2.1 重构心跳为 cron job 后，Agent 只报告而不执行任务的回归问题，属于 P1 优先级。

- **[[provider, fix, priority: p2] fix(transcription): resolve API key env placeholders](https://github.com/HKUDS/nanobot/pull/4895)**（#4895，OPEN）  
  修复转录提供商的 API Key 环境变量占位符解析问题，避免错误回退到 `GROQ_API_KEY`。

---

## 功能请求与路线图信号

- **[[enhancement] Preserve exact prompt prefix to enable caching in Ollama and others](https://github.com/HKUDS/nanobot/issues/4867)**（#4867）  
  虽然已关闭，但其核心需求——减少 Ollama 每次对话的延迟——可能影响后续 Prompt 处理逻辑。现有 PR #4896 调整了心跳提示词，但未直接涉及缓存机制，预计该功能仍可能出现在未来版本中。

- **[[OPEN] feat(webui): add guided setup flows](https://github.com/HKUDS/nanobot/pull/4855)**（#4855，OPEN）  
  由 Re‑bin 提交，添加了产品化的渠道设置引导流程（含验证、官方链接、QR 交接、运行时启用/禁用等），涵盖飞书、Discord 等平台。该 PR 从 7 月 8 日起活跃，预计若审查通过，将显著降低新用户配置门槛，纳入下一版本的可能性较高。

---

## 用户反馈摘要

- **Ollama 延迟问题（#4867）**：用户明确表示“每轮额外 60 秒，32 GB VRAM 完全不可用”，强调这是一个使用门槛，要求保留精确前缀以利用本地缓存。  
- **Discord 集成失败（#4897）**：用户已按照文档步骤启用插件、填入 API，但无法收发消息，怀疑是网关实现缺陷。  
- **Dream 功能回归（#4894、#4893）**：两份报告均来自用户 @groudas，指出 commit 后 `prune_dream_sessions` 和 `/dream-log` 出现问题，说明维护者在重构时遗漏了相关文件名的变更和过滤逻辑。  
- （无其他评论记录）

---

## 待处理积压

- **[[OPEN] fix: resolve #3958 — Weather Skill](https://github.com/HKUDS/nanobot/pull/4145)**（#4145，OPEN）  
  创建于 2026‑06‑01，至今已超过 40 天未合并。该 PR 新增了气象技能示例及相关测试文件，属于功能扩展。虽然规模不大，但长时间搁置可能影响社区贡献积极性。

- **[[OPEN] feat(webui): add guided setup flows](https://github.com/HKUDS/nanobot/pull/4855)**（#4855，OPEN）  
  创建于 2026‑07‑08，5 天未合并，但最后一次更新在 07‑12，说明仍在活跃讨论中。建议维护者尽快评估，避免长期积压。

---

**总结**：项目当前 Bug 修复（特别是心跳执行逻辑和 Dream 相关回归）是优先需要解决的问题；社区对 Ollama 性能优化的呼声很高；WebUI 设置引导和天气技能属于低优先级但受用户期待的功能。整体健康度中等，需加快 PR 审查与合并节奏。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Hermes Agent 项目数据，为您生成本期项目动态日报。

---

### **Hermes Agent 项目动态日报 | 2026-07-13**

#### **1. 今日速览**

今日 Hermes Agent 项目处于 **高度活跃** 状态，社区贡献者异常活跃。过去 24 小时内，项目处理了大量 Issue（50 条）与 PR（50 条），显示出强劲的社区动力，其中问题关闭率（72%）和 PR 合并/关闭率（22%）表明项目对社区反馈的响应迅速，维护效率较高。尽管无新版本发布，但大量代码已合入主分支，预示着一个包含多项稳定性修复和新功能的版本可能即将到来。主要关注点集中在 **网关稳定性**、**桌面客户端体验** 与 **跨平台兼容性**。

#### **2. 版本发布**

*无新版本发布。*

#### **3. 项目进展**

今日项目取得了显著的代码进展，共有 **11 个 PR 被合并/关闭**，许多先前报告的 Bug 得到了修复。核心进展聚焦于提升网关的健壮性和修复社区反馈的痛点问题。

- **关键修复已上线：**
    - **网关稳定性增强** ([PR #21200](https://github.com/NousResearch/hermes-agent/pull/21200)): 为网关重启命令添加了 `--graceful` 标志，通过发送 `SIGUSR1` 信号实现优雅重启，有效解决了 systemd 环境下因进程清理不彻底导致的无限重启循环问题。
    - **平台适配性修复**：
        - **Discord** ([PR #21199](https://github.com/NousResearch/hermes-agent/pull/21199)): 修复了关闭时未能优雅处理 Discord API 返回的 403/503 错误的问题，避免了关闭流程被阻塞。
        - **WeChat / QQ** 等多个平台 ([PR #21199](https://github.com/NousResearch/hermes-agent/pull/21199), [PR #21200](https://github.com/NousResearch/hermes-agent/pull/21200)): 相关修复包含在各 PR 中。
    - **Desktop 客户端功能补齐** ([PR #38394](https://github.com/NousResearch/hermes-agent/pull/38394)): 为 Electron 桌面客户端增加了处理 `approval.request` 事件的能力，使得危险命令的审批弹窗在桌面端得以生效。
    - **审批模式验证** ([PR #20816](https://github.com/NousResearch/hermes-agent/pull/20816)): `approvals.mode` 配置项现在会校验输入值的有效性，并对无效值发出警告，防止出现不可预期的审批行为。
    - **Bug 修复**：包括 `Cron 定时任务`、`TUI 构建失败`、`WhatsApp 桥接`、`Ollama 本地模型` 等一系列来自社区的 Bug 报告均已被标记为已关闭或已合入主分支。

#### **4. 社区热点**

- **功能讨论热点：Topic-Aware Subagent Routing** ([Issue #21827](https://github.com/NousResearch/hermes-agent/issues/21827))
    - 该提案主张让 Hermes 根据任务类型（如编程、研究、金融分析）自动路由到最合适的子模型，以避免为简单任务支付高阶模型费用。该提案获得了 6 条评论，是过去 24 小时内最受关注的议题，体现了社区对 **成本优化** 和 **智能调度** 的迫切需求。

- **Bug 反馈热点：Cron 功能失效** ([Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867))
    - 用户报告 `cronjob` 工具在特定条件下无法触发任务，计划时间在推进但任务并未实际执行。该问题同样有 6 条评论，显示出社区对 **自动化任务可靠性** 的高度关注。好消息是该问题已被标记为 `implemented-on-main`，修复已合入主分支。

#### **5. Bug 与稳定性**

今日报告的 Bug 主要集中在 Windows 平台兼容性、桌面客户端状态管理和进程生命周期管理上。

- **严重/高优先级 Bug：**
    1.  **cua-driver 辅助进程崩溃** ([Issue #52951](https://github.com/NousResearch/hermes-agent/issues/52951), **开放中**): 在 Windows 10 上，当用户切换窗口焦点（Alt+Tab）后，用于计算机控制的 `cua-driver` 辅助进程会崩溃，导致所有 `computer_use` 功能在当前会话中失效。这是一个严重的窗口环境问题，目前尚无修复 PR。
    2.  **桌面客户端聊天标签页内容混流** ([Issue #59305](https://github.com/NousResearch/hermes-agent/issues/59305), **开放中**): 用户报告在打开多个聊天标签页时，不同标签页的消息内容会互相串扰，导致对话上下文错乱。该问题严重影响使用体验。
- **已修复/已有解决方案的 Bug：**
    - **Cron 功能不工作** ([Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867)): 已修复。
    - **`/sessions` 命令无响应** ([Issue #21734](https://github.com/NousResearch/hermes-agent/issues/21734)): 已修复。
    - **systemd 环境无限重启** ([Issue #21915](https://github.com/NousResearch/hermes-agent/issues/21915)): 已修复。
    - **Dashboard 网关状态显示错误** ([Issue #21848](https://github.com/NousResearch/hermes-agent/issues/21848)): 已修复。
    - **QQ/WeChat 平台导入失败** ([Issue #22153](https://github.com/NousResearch/hermes-agent/issues/22153)): 已修复。

#### **6. 功能请求与路线图信号**

本周的 feature request 信号指向了 **精细化控制** 和 **体验增强**。

- **高匹配度信号**:
    - **Per-channel 个性化与模型路由** ([Issue #21637](https://github.com/NousResearch/hermes-agent/issues/21637)): 用户希望通过配置，为特定频道指定其专属的“人设”和使用的模型。这与 `Topic-Aware Subagent Routing` ([Issue #21827](https://github.com/NousResearch/hermes-agent/issues/21827)) 的理念相似，都指向更灵活的模型调度。考虑到后者讨论热度更高，这一方向很可能被纳入路线图。
    - **Discord 反应式选项选择** ([Issue #21893](https://github.com/NousResearch/hermes-agent/issues/21893)): 用户希望 Discord 平台上的 `clarify` 工具能支持 emoji 反应（如 👍/👎）来快速选择选项，而不是打字。此功能已实现并合入主分支，将极大提升 Discord 用户体验。

- **潜在路线图信号**:
    - **Anthropic 启发的高级Agent功能** ([PR #21212](https://github.com/NousResearch/hermes-agent/pull/21212), **开放中**): 贡献者提出了一个大型 PR，引入了“梦境（Dreaming）”、“成果（Outcomes）”、“编排（Orchestration）”和“Webhooks”四个高级特性。这个 mega PR 风险等级高，但若被采纳，将标志着 Agent 能力质的飞跃。社区可重点关注其能否在后续版本中合并。

#### **7. 用户反馈摘要**

- **正面反馈**：用户对社区对 Bug 的快速响应表示赞赏。例如，Dashboard 界面显示问题 ([Issue #21848](https://github.com/NousResearch/hermes-agent/issues/21848)) 和 Docker 环境下的 WhatsApp 问题 ([Issue #21710](https://github.com/NousResearch/hermes-agent/issues/21710)) 在报告后迅速得到定位和修复。
- **痛点与不满**：
    - **配置不灵活**：用户反映模型超时时间被硬编码，导致使用本地模型（如 Ollama）时频繁超时，而平台适配器的超时时间又无法统一配置 ([Issue #21525](https://github.com/NousResearch/hermes-agent/issues/21525))。
    - **桌面端体验不完善**：Desktop 客户端功能相较 CLI 版本仍有差距，如审批弹窗逻辑未实现 ([Issue #38164](https://github.com/NousResearch/hermes-agent/issues/38164))，以及新发现的标签页内容混流问题 ([Issue #59305](https://github.com/NousResearch/hermes-agent/issues/59305))。
    - **内存管理问题**：MemOS 内存提供者会在每次对话轮次中重新生成 `bridge.cts` 进程，消耗高达 ~250MB RAM，导致内存泄漏风险 ([Issue #20939](https://github.com/NousResearch/hermes-agent/issues/20939))。该问题已修复。

#### **8. 待处理积压**

- **高风险 Bug 待响应**：
    - **Windows cua-driver 崩溃** ([Issue #52951](https://github.com/NousResearch/hermes-agent/issues/52951)): 这是一个严重且可复现的 Windows 端 Bug，会使用户完全无法使用计算机控制功能，但目前无人认领。
    - **桌面端标签页内容混流** ([Issue #59305](https://github.com/NousResearch/hermes-agent/issues/59305)): 严重影响 Desktop 用户的核心交互体验，但状态仍为 `needs-repro`（需复现），尚未进入修复阶段。

- **长期待合并的 PR**:
    - **`fix(gateway): show compression activity in busy acks`** ([PR #21161](https://github.com/NousResearch/hermes-agent/pull/21161), 开放中): 这是一个提升用户体验的 PR，能在网关繁忙时向用户展示上下文压缩的活动状态，避免用户误以为系统无响应。
    - **`fix(weixin): exponential rate-limit backoff...`** ([PR #21135](https://github.com/NousResearch/hermes-agent/pull/21135), 开放中): 针对微信平台的稳定性修复，包含了指数退避、会话重连等重要功能。

**分析师建议**：项目维护者应优先关注 **#52951** (Windows cua-driver) 和 **#59305** (桌面端消息混流) 两个严重 Bug，它们直接影响了特定平台用户的核心体验。其次，社区对功能配置灵活性的诉求（如 Issue #21525 的超时配置）也应被纳入版本规划中。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-13

---

## 1. 今日速览

过去24小时内，项目收到5条Issue更新（3条新开/活跃、2条关闭）和2条PR操作（1条待合并、1条已合并）。无新版本发布。社区讨论热度集中在Android兼容性及Matrix同步稳定性上，同时出现一个影响模型配置解析的新Bug。整体活跃度中等，维护团队对部分问题已做出回应，但仍有stale标签问题待跟进。

---

## 2. 版本发布

无。

---

## 3. 项目进展

**已合并/关闭的PR：**
- **PR #3190** — `fix(i18n): sync missing locale keys from en.json to bn-in and cs translations`  
  合并了孟加拉语（bn-in）和捷克语（cs）的缺失翻译键，使界面在对应语言下不再回退为英文。  
  👉 https://github.com/sipeed/picoclaw/pull/3190

**待合并的PR：**
- **PR #3251** — `fix(providers): capture the prompt cache token usage in Anthropic providers`  
  修复Anthropic SDK及Messages API提供商丢弃Claude缓存token统计的问题，使运维者可监控缓存命中情况。  
  👉 https://github.com/sipeed/picoclaw/pull/3251

---

## 4. 社区热点

**#3182 — [BUG] Android version**  
- 评论数：3 | 点赞：0  
- 用户反馈在Android上无法启动服务，即使已授予全部权限，且设置中无法修改路径。附有截图。  
- 该Issue已标记为**stale**（创建于6月26日），虽最近有更新但未获官方回复，社区期待维护者介入。  
👉 https://github.com/sipeed/picoclaw/issues/3182

**#3203 — [BUG] Matrix sync loop has no reconnection logic**  
- 评论数：2 | 点赞：1  
- 描述了Matrix `/sync` 长轮询在断网或服务端重启后永久死亡，且因主进程未崩溃导致systemd自动重启失效。  
- 该问题影响使用Matrix通道的用户，关注度较高（有+1），目前尚无修复PR。  
👉 https://github.com/sipeed/picoclaw/issues/3203

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 说明 |
|----------|-------|------|
| 🔴 严重 | [#3182] Android版无法启动服务 | 用户无法在Android上运行PicoClaw，服务启动失败且设置路径不可改。无对应Fix PR。 |
| 🔴 严重 | [#3203] Matrix同步无重连逻辑 | 网络/服务器中断后同步循环永久死亡，需手动重启。无Fix PR。 |
| 🟡 中等 | [#3252] `splitKnownProviderModel`错误剥离模型前缀 | 当模型ID内含已知供应商别名（如`openai/gpt-4`中的`gpt`）时，前缀被错误删除。刚提交，暂无评论。可能影响模型配置解析。 |
| 🟢 较低 | [#3194] 收到加密消息但crypto未启用（已关闭） | 用户配置未启用加密却收到加密消息，关闭原因未知（可能为误报或已修复）。 |

---

## 6. 功能请求与路线图信号

- **#3250 — 添加armhf（ARMv7）设备的Docker Compose支持**（已关闭，但作为Feature被创建）  
  用户希望能在玩客云、树莓派Zero等低功耗ARM设备上部署PicoClaw。该需求有明确目标设备和技术方案（修改Dockerfile及compose配置），社区价值高，后续版本可能采纳。  
  👉 https://github.com/sipeed/picoclaw/issues/3250

- **PR #3251**（待合并）记录了Anthropic提示缓存token用量，属于可观测性改进，大概率会随下个版本一起发布。

---

## 7. 用户反馈摘要

- **Android用户**（#3182）：尽管已授予全部权限，应用仍无法启动服务，且设置页面的路径选项无法点击修改。用户贴出log和截图，显示服务启动失败。体现PicoClaw在移动端的兼容性仍有较大缺口。
- **Matrix用户**（#3203）：描述“静默死亡”场景——断开Wi-Fi后sync循环停止，进程存活但无任何输出，systemd无法自动恢复。用户期望加入指数退避重连机制。
- **加密消息**（#3194）：用户收到“Received encrypted message but crypto is not enabled”日志，说明其Matrix频道被对方开启了加密，但自身未启用，导致消息无法解析。提示文档应强调加密一致性配置。
- **模型配置**（#3252）：当模型ID包含供应商别名（如`openai/gpt-4`中的`gpt`）时，`splitKnownProviderModel`会将`gpt-4`误判为模型名，剥离`openai/`前缀。用户建议改进解析算法，优先匹配完整供应商名。

---

## 8. 待处理积压

- **#3182** — 创建于6月26日，已标记为`stale`，至今无官方回复或指派。Android作为重要终端平台，该问题直接影响移动用户使用，建议维护团队尽快回访并给出临时解决或路线图承诺。  
  👉 https://github.com/sipeed/picoclaw/issues/3182

- **#3203** — 虽创建时间不长（7月2日），但已获+1，且影响Matrix通道可靠性，建议纳入下一轮优先级评估，避免类似“静默死亡”造成服务中断。  
  👉 https://github.com/sipeed/picoclaw/issues/3203

---

*数据来源：sipeed/picoclaw GitHub仓库，统计截至2026-07-13 UTC。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，以下是为您生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-13

## 1. 今日速览

今日项目活跃度非常高，共处理了 **13 个 Pull Request**，表明核心团队正在积极进行功能开发和 Bug 修复。尽管过去 24 小时没有新版本发布，但合并/关闭了 2 个 PR，同时有 11 个 PR 处于待合并状态，项目正处于密集的开发迭代期。社区反馈的问题主要集中在**输出 Token 限制**、**日志误报**和**消息重复**等稳定性与可用性方面，且对应的修复 PR 均已快速提交，展现了较高的响应效率。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去 24 小时内，有 2 个重要的 PR 被合并或关闭，标志着关键问题的解决。

- **#3024 [CLOSED] fix(container): raise the agent SDK’s 32000 output-token cap to the model’s real ceiling**
  - **状态:** 已关闭（被 #3025 替代）
  - **摘要:** 修复了 #3023 报告的所有 Claude 代理被静默限制在 32000 输出 Token 的问题。该问题的根源在于 `CLAUDE_CODE_MAX_OUTPUT_TOKENS` 环境变量未被设置，导致 Agent SDK 使用了默认的低上限。此 PR 虽被新 PR 替代，但指明了问题的修复方向。([链接](https://github.com/nanocoai/nanoclaw/pull/3024))

- **#2952 [CLOSED] Skill/add opencode stack**
  - **状态:** 已合并
  - **摘要:** 添加了 `opencode stack` 操作技能。这表明项目在容器和部署管理能力上持续拓展，为用户提供了更丰富的操作选择。([链接](https://github.com/nanocoai/nanoclaw/pull/2952))

**项目整体向前迈进:** 项目成功修复了影响大输出任务的核心 Token 限制问题，同时引入新的操作技能，完善了功能和运维生态。

## 4. 社区热点

今日最受关注的 Issues/PRs 集中在输出限制和功能缺陷，反映了用户在实际使用中的核心痛点。

- **#3023 [OPEN] Every Claude agent is silently capped at 32000 output tokens**
  - **热度分析:** 这是一个高严重性的 Bug，直接导致长任务（如生成大型代码文件）失败。虽然评论数和反应数不多，但其影响范围广，且立即催生了 #3024 和 #3025 两个修复 PR，表明社区和核心团队对该问题的重视程度极高。([链接](https://github.com/nanocoai/nanoclaw/issues/3023))

- **#3026 [OPEN] Re-wrap nudge re-runs the model and duplicates replies when the agent already replied via send_message**
  - **热度分析:** 这是一个逻辑缺陷，导致用户在与 Agent 交互时看到重复回复，体验感较差。问题根源在于“重包裹”逻辑无法感知到 Agent 已经通过 `send_message` 发送了回复。该 Issue 已有一个对应的修复 PR #3028。([链接](https://github.com/nanocoai/nanoclaw/issues/3026))

- **#3016 [OPEN] Every rate_limit_event is logged as a quota error, even when the status is "allowed"**
  - **热度分析:** 该问题影响了日志的可读性，虽然不直接影响功能，但会误导管理员，导致运维困扰。用户报告一周内出现了 82 次此类错误日志，可见其频率之高。([链接](https://github.com/nanocoai/nanoclaw/issues/3016))

## 5. Bug 与稳定性

今日报告了 3 个 Bug，按严重程度排列如下：

1. **[严重] Claude 输出 Token 限制 Bug**
   - **描述:** 所有 Claude 代理被静默限制在 32000 输出 Token，导致生成长代码或文档时任务失败 (#3023)。
   - **状态:** 已有修复 PR #3025 来提升上限。

2. **[中] 消息重复 Bug**
   - **描述:** 当 Agent 已通过 `send_message` 回复用户后，“重包裹”逻辑的修正（nudge）会再次运行模型，生成并发送重复回复 (#3026)。
   - **状态:** 已有修复 PR #3028。

3. **[低] 速率限制日志误报 Bug**
   - **描述:** 所有速率限制事件都被记录为“配额错误”，即使状态是“允许”（allowed），造成日志污染和运维困扰 (#3016)。
   - **状态:** 暂无已关联的修复 PR。

## 6. 功能请求与路线图信号

今日新增的功能请求和对应 PR 主要围绕安全审计和自动化运维方面：

- **操作审批与安全:** PR #3029 为 CLI 工具 `ncl approvals` 新增了 `approve`, `reject` 等操作审批动词，让操作员可以直接通过命令行解决审批。同时，PR #2986 正在构建一个统一的 `guard()` 决策函数，用于控制所有跨边界的特权操作，这显示出项目正在构建更完善的安全治理体系。
- **任务调度自动化:** PR #3022 支持在模板中定义定时任务（scheduled tasks），这将极大简化通过模板创建 Agent 组后的初始化工作，提升了自动化程度。该功能很可能被纳入下一版本。

## 7. 用户反馈摘要

从 Issues 的讨论和描述中，可以提炼出以下用户痛点：

- **“文档/代码生成任务被截断”：** 用户 `javexed` 在尝试用 CAD 项目 Agent 生成大型 OpenSCAD 文件时，任务因输出 Token 限制而失败，这暴露了 Agent 处理长文本输出的能力瓶颈，是影响可用性的关键问题。
- **“日志噪音影响排查效率”：** 用户 `glifocat` 指出，由于日志系统的配置问题，正常的交互行为被大量无意义的错误日志淹没，导致一周内产生了 82 条冗余日志，严重干扰了问题排查。
- **“交互式回复出现重复”：** 用户 `fjnoyp` 描述了在 Agent 已经成功回复后，系统又触发了二次模型调用并产生重复回复的现象，这直接影响了用户与 Agent 交互的体验。

## 8. 待处理积压

以下是一些历史较长或尚未有足够关注的重要 Issue/PR，建议维护者关注：

- **#2982 [OPEN] fix(agent-runner): reconcile Claude tool allowlist with pinned CLI, add drift guard**
  - **摘要:** 修复 Agent 运行器中的工具白名单与当前 Claude CLI 版本不匹配的问题，并增加差异检测。该 PR 已存在 5 天，关乎工具功能的正确性，需尽快推进。([链接](https://github.com/nanocoai/nanoclaw/pull/2982))
- **#2964 (关联 Issue 为 #3016)** 近期修复引入了新的日志误报问题，这表明在类似 #2965 的合并中可能缺乏充分的回归测试，建议团队关注测试流程改进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，根据您提供的 NullClaw 项目 GitHub 数据，我为您生成了 **2026-07-13** 的项目动态日报。

---

### NullClaw 项目动态日报 | 2026-07-13

**数据采集时间：** 2026-07-13 18:00 UTC

---

### 1. 今日速览

今日 NullClaw 项目进入稳定维护期，没有新版本发布或活跃的 Issue 讨论。项目核心活动集中在 4 个已于今日合并的历史 Pull Request 上，标志着这些修复和功能已正式落地。整体活跃度适中，社区讨论趋冷，但开发侧交付质量较高，专注于提升 Agent 运行稳定性、资源管理和功能可配置性。项目重心正从功能开发转向内部代码优化与架构稳健性增强。

---

### 2. 版本发布

无。

---

### 3. 项目进展

今日共有 **4 个重要 Pull Request 被合并**，全部为功能修复或配置增强，未见破坏性变更。这些 PR 虽然创建于 6 月，但于今日完成合并，意味着它们已经过充分测试并进入主分支。主要进展包括：

- **Agent 稳定性修复（#951）：** 修复了 Agent 子进程非零退出时，错误地将初始化日志（如内存计划、MCP 注册）当作 Agent 回复发送到频道的问题。这提升了用户交互体验，避免频道被无效日志污染。 [查看 PR](https://github.com/nullclaw/nullclaw/pull/951)
- **Gateway 启动流程优化（#950）：** 修复了 `gateway.run()` 失败时（例如端口被占用），在测试环境中未完全清理预分配资源（如 Config、SessionManager）的内存泄漏问题。这提高了测试环境的稳定性。[查看 PR](https://github.com/nullclaw/nullclaw/pull/950)
- **队列模式可配置化（#949）：** 新增了 `agent.default_queue_mode` 配置项，允许用户通过 `config.json` 设置新建会话的默认队列模式（如 `latest`）。同时将 `QueueMode` 枚举重构为单一数据源，提升了代码可维护性。[查看 PR](https://github.com/nullclaw/nullclaw/pull/949)
- **Cron Agent 交付归因修复（#948）：** 修复了由 Cron 触发的 Agent 交付任务中，子进程无法正确继承频道/账户来源元数据的问题。现在 `nullclaw cron once-agent` 命令在本地和 Gateway 请求中均能保留并传递路由信息，确保 Agent 行为能正确归因到具体频道。[查看 PR](https://github.com/nullclaw/nullclaw/pull/948)

**总结：** 项目今日通过合并 4 个合并请求，在 Agent 行为可靠性、Gateway 资源安全、配置灵活性和 Cron 任务一致性方面取得了实质进展，技术债务得到有效清理。

---

### 4. 社区热点

今日未产生新的活跃 Issue 或 PR 讨论。所有合并的 PR 评论区均无用户评论或反应（👍: 0），表明社区当前处于平静期，无集中讨论的焦点议题。今日的修复功能（如 #951 静默输出）和功能改进（如 #949 配置化）解决的是开发者和高级用户在实际部署中遇到的痛点，但尚未引发广泛讨论。

---

### 5. Bug 与稳定性

今日未报告新的 Bug。但今日合并的 PR 本身解决了一系列历史 Bug：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | Agent 失败时向频道发送内部初始化日志，造成信息污染和误解。 | #951 | **已修复** |
| **中** | Gateway 启动失败导致测试环境资源泄漏。 | #950 | **已修复** |
| **中** | Cron 触发的 Agent 任务丢失交付来源元数据，导致归属判断错误。 | #948 | **已修复** |
| **低** | 队列模式 (`queue_mode`) 无法通过配置文件 `config.json` 设定，只能通过 API 等方式修改。 | #949 | **已修复** |

---

### 6. 功能请求与路线图信号

今日没有用户直接提出新的功能请求。但是，从合并的 PR **#949 (fix: make queue_mode configurable from config.json)** 可以看出，**增强 Agent 行为的可配置性** 是一个明确的路线图信号。该 PR 响应了用户希望能通过静态配置文件而非运行时参数来设定默认队列模式的需求。这暗示了项目未来可能在 `config.json` 中开放更多 Agent 相关的默认行为设置，以降低用户运维成本。

---

### 7. 用户反馈摘要

因今日无活跃的 Issue/PR 评论，无法提供直接的用户反馈。但从今日合并的 PR 提交信息中可以推测出用户隐式的痛点：

- **Agent 稳定性与可靠性（#951）：** 用户（或维护者）需要 Agent 在出错时保持“安静”，而不是输出无用的初始化日志，以免影响下游通道和用户理解。
- **运维一致性（#948）：** 在复杂调度场景（Cron）下，用户期望 Agent 的“身份”和“行为”与手动触发时保持一致，避免出现数据归属混乱。
- **配置便捷性（#949）：** 用户希望项目配置能“一次配置，到处生效”，减少通过代码或复杂 API 调用进行环境初始化的步骤。

---

### 8. 待处理积压

今日无长期未响应的 Issue 或 PR。所有列出的 PR 均已成功合并，项目积压情况健康。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 IronClaw 项目 GitHub 数据，生成 2026-07-13 的项目动态日报。

---

## IronClaw 项目日报 | 日期：2026-07-13

### 1. 今日速览

今日项目活跃度极高，尤其是在代码提交与审查方面，共有 **50 条 PR 更新**，其中合并/关闭 25 条，显示出强劲的开发推进力。新开 Issues 主要聚焦于**基础设施（CI）的脆弱性问题**，其中 `#6014` 揭示的 CI 稳定性问题（导致 ~70% 的 `main` 分支推送失败）是当前最严重的系统性问题。核心团队正通过一系列修复 PR（如 `#6022`）和大型功能 PR（如扩展运行时的 `#6012`、`#6025`）并行工作，一方面快速修复现有缺陷，另一方面持续推进“Reborn”架构的关键功能。

### 2. 版本发布

无

### 3. 项目进展

今日核心进展体现在对 **“Reborn”架构**的持续交付和**基础设施（CI）的紧急修复**上，具体亮点如下：

- **“Reborn”扩展运行时交付接近完成**：核心贡献者 `BenKurrek` 提交了该功能列车的第 6 和 7 个 PR（`#6012` 和 `#6025`），这两项大型 PR（XL）分别完成**集成协调器、Slack/Telegram 出站集成**以及**配置/UI、前端、CLI 和数据库迁移**。这标志着该架构的关键部分已进入收尾阶段。
- **CI 稳定性修复方案已实施**：针对 `#6014` 提出的 CI 脆弱性问题，团队已迅速提交了对应的修复 PR `#6022`。该 PR 通过添加静态预推送检查（如 `include_str!` 路径、Docker-COPY、非本征测试守卫等），试图从源头上杜绝确定性故障。
- **Agent 循环与编码工具集优化**：一系列 PR 旨在增强 Reborn 工具集的能力与可靠性。`#6013` 使 Agent 循环具备了“工具调用”能力以改进交互式编码体验；`#5977` 优化了技能（Skills）系统，改为按需加载而非全量注入，以节省 Token；`#5978` 和 `#5979` 则借鉴 Claude Code 的思路，增加了“读前必编辑”和“编辑后检查”的防护逻辑，以减少编码工具的失误。

### 4. 社区热点

今日最受关注的议题并非某个单一 Issue/PR 的热度，而是由 `ilblackdragon` 提交的一系列 **“Daily failure taxonomy”** 和相关 Issues，它们共同构成了一次对项目健康状况的集中审视：

- **核心 Issue `#6014`**：该 Issue 以详实的数据（200次推送中139次失败）揭示了 `main` 分支 CI 的严重脆弱性问题，被标记为 `[bug, scope: ci]`。其背后是开发团队对**质量控制和无故障开发体验**的强烈诉求，这对一个正在快速开发迭代的项目至关重要。
- **集群 Issue（`#6015`、`#6016`、`#6017`、`#6018`）**：紧随 `#6014`，作者 `ilblackdragon` 又提交了四个子 Issue，详细分类和剖析了导致 CI 失败的**具体故障模式**，包括测试隔离缺陷（`#6015`）、端到端测试超时（`#6016`）、数据库并发竞态（`#6017`）以及可被静态检查捕获的确定性故障（`#6018`）。这种高度结构化的问题分解方式，展现了核心团队对工程质量的严谨态度，并迅速得到了修复 PR（如 `#6022` 针对 `#6018`）的响应。

### 5. Bug 与稳定性

今日报告的 Bug 高度集中在 **CI 稳定性和测试可靠性** 上，成为影响项目健康度的主要因素。

1.  **严重：CI 基础架构脆弱性 (`#6014`)**
    - **摘要**：代码覆盖率测试导致 70% 的 `main` 分支推送变红，根源在于结构性问题而非单一错误提交。
    - **状态**：已提交修复 PR `#6022`，同时有多个子 Issue 进行分析。

2.  **中等：测试隔离缺陷 (`#6015`)**
    - **摘要**：`build_runtime_input_production_*` 测试在 `all-features` 环境下因共享环境变量 `std::env` 而出现竞态，是不稳定的源头之一。
    - **状态**：**已有修复 PR `#6023`** 被标记为 Fixes this issue。

3.  **中等：数据库并发测试不稳定 (`#6017`)**
    - **摘要**：Postgres 和 libSQL 的并发契约测试因时序敏感性而不稳定，影响 CI 结果。
    - **状态**：已报告，暂无指定修复 PR。

4.  **中等：Slack 端到端测试超时 (`#6016`)**
    - **摘要**：Slack 触发器传递的 e2e 测试因超时或未能观测到触发事件而失败，是当前最活跃的 `main` 分支故障源之一。
    - **状态**：已有相关的修复 PR `#6020`，旨在使其确定性和可观察性更强。

5.  **低（已修复）：UI/general Bug**
    - `#5704` (已关闭)：Chat 活跃时图片预览变透明的问题已修复。
    - `#6010` (已关闭)：NEAR AI 推理（GLM-5.2）在 opencode 使用中卡顿的问题已修复。
    - `#6009` (已关闭)：GLM-5.2 模型未在 opencode 默认列表中的问题已修复。

### 6. 功能请求与路线图信号

- **CI 强化 (来自 `#6018`)**：这是一个明确的增强请求，要求添加静态预推送检查。虽然是一个“功能”请求，但它主要服务于稳定性。**该项目已被采纳并已提交实现 PR `#6022`，预计会很快被合并至下一版本。**
- **工具集能力提升 (来自多个 PR)**：`#5978`（编辑前必读）和 `#5979`（编辑后诊断）这类功能虽未以 Issue 形式出现，但其 PR 描述明确表示是为了解决 benchmark 中的 Agent 失败模式。这表明核心团队正根据 **用户侧 Agent 的实际表现数据** 来驱动功能开发，这些将是项目路线图中提升 Agent 自主性和准确性的关键信号。
- **MCP 服务注册 (来自 `#5970`)**：这是“Reborn”架构下 MCP（Model Context Protocol）支持栈的基础设施建设，为未来更丰富的第三方工具集成铺平道路，是长期路线图中的一部分。

### 7. 用户反馈摘要

从今日的 Issue 来看，用户反馈主要集中在 **产品化体验和开发者体验** 方面：

- **痛点：GLM-5.2 模型集成不流畅**：Issue `#6009` 和 `#6010` 反映了用户在使用 `opencode` 等开发工具时遇到的困难。特别是必须手动 Fork 并修改代码才能使用特定模型，这**对普通用户的门槛过高**，反映出项目在模型集成和 API 兼容性方面仍有提升空间。
- **痛点：模型推理稳定性影响可用性**：Issue `#6010` 中用户描述 GLM-5.2 在交互式编码任务中“频繁挂起数分钟”，这**严重破坏了实时开发的流程**。虽然该 Issue 已被关闭，但它揭示了端到端推理服务的可靠性对 Agent 驱动的开发体验至关重要。
- **满意点（推测）**：从 `#5704` 等 Bug 被及时修复可以看出，项目对用户报告的体验类 Bug 响应迅速，有助于建立用户对项目的信心。同时，核心开发者主导的 CI 稳定性分析（`#6011`）也表明团队对提升整体工程质量有明确意识和行动，这间接提升了开发者的满意度。

### 8. 待处理积压

- **长期未合并的依赖更新 PR**：
    - `#4032` (Wasm 依赖更新 - 5月25日创建)
    - `#5114` (Tokio 生态依赖更新 - 6月21日创建)
    - `#5664` (Actions 依赖更新 - 7月5日创建)
    - 这些由 `dependabot` 创建的 PR 已开放较长时间，长期积压可能导致安全漏洞修复延迟或技术债务累积。建议维护者定期审查并合并低风险的依赖更新，以保持项目健康。

- **作为管理的 Issue `#6011`**：这份名为 “Daily ironclaw failure taxonomy” 的 Issue 是对 CI 故障的每日总结。虽然已有关联的修复 PR，但该 Issue 本身应被视为一个**长期跟踪任务**，需要持续维护，直到 CI 稳定性问题得到根本性解决。建议将其标注为“元问题”或“长期追踪”，并定期更新状态。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 LobsterAI 项目数据，为您生成一份结构清晰、客观专业的项目动态日报。

***

### LobsterAI 项目动态日报 (2026-07-13)

#### 1. 今日速览

- **活跃度评估：** 项目保持稳定，但活跃度较低。过去24小时内，社区反馈了1个影响多Agent配置的严重Bug，并处理了2个Pull Request，其中1个UI优化PR仍在等待合并。整体处于稳步修复与小幅改进阶段。
- 核心关注点集中在 **多个Agent配置数据相互覆盖** 的Bug上，该问题对用户的多Agent管理体验造成了较大困扰。
- 项目无新版本发布，技术债务清理工作仍在进行，例如已合并的Agent ID生成机制优化（#2065）有望从根源上解决因删除Agent导致的数据残留问题。

#### 2. 版本发布

- 无。

#### 3. 项目进展

- **[已合并] 修复 Agent ID 生成逻辑，防止数据“复活”**
  PR [#2065](netease-youdao/LobsterAI PR #2065) 已被关闭并合并。该PR修复了一个关键性问题：之前系统使用Agent名称（如 “My Assistant”）生成其ID，导致删除Agent后，若用户创建同名Agent，旧的工作区（workspace）和会话（sessions）文件会因ID复用而“复活”。现在，系统改用更短的UUID来生成Agent ID，从根本上避免了这一问题。这是一个重要的稳定性改进。
  - **遗留问题：** 该PR同时指出，删除Agent时，关联的会话数据（`cowork_sessions`）仍未被清理，存在潜在的“孤儿数据”，这需要后续修复。

- **[待合并] 优化新建对话按钮的交互体验**
  PR [#1325](netease-youdao/LobsterAI PR #1325) 旨在为侧边栏折叠时，多个视图（主对话、会话详情、Agent管理、MCP管理）中的“新建对话”图标按钮添加鼠标悬停提示（Tooltip），以改善用户对图标功能的理解。该PR已创建超过3个月，状态为 `[stale]`，建议维护者尽快评估并合并，以提升UI/UX细节。

#### 4. 社区热点

- **[#2293] 多Agent配置数据被覆盖问题引发讨论**
  [Issues #2293](netease-youdao/LobsterAI Issue #2293) 是今日最活跃的议题，作者报告了一个严重的Bug：在创建多个Agent后，任何对单个Agent“关于你”页面或 `USER.md` 文件的修改，都会同步覆盖所有其他Agent的配置。即便手动关闭软件修改特定工作区下的文件，重启后也会被主Agent的配置覆盖。
  - **用户诉求：** 用户的核心诉求是 **Agent配置的隔离性**。他们需要为不同场景（如工作、学习、创作）创建拥有独立个性、知识和行为模式的Agent。该Bug完全破坏了这一核心功能。
  - **影响评估：** 此问题严重影响了用户对LobsterAI核心功能（多Agent管理）的正常使用，属于高优级的回归性Bug，建议开发团队立即介入调查。

#### 5. Bug 与稳定性

- **严重级别**
  1.  **[严重] 多Agent配置数据相互覆盖 (Issue #2293)**
      - **描述：** 编辑任一Agent的USER.md或个人设置，会导致其他所有Agent的相同配置被替换。
      - **状态：** 未修复，尚无关联PR。
      - **影响：** 完全破坏了多Agent功能的可用性，是用户当前最头痛的问题。
      - **链接：** [Issues #2293](netease-youdao/LobsterAI Issue #2293)
  2.  **[中级别] 删除Agent时数据残留 (PR #2065 遗留问题)**
      - **描述：** 虽然已修复了数据“复活”问题，但删除Agent后，其关联的会话数据（`cowork_sessions`）并未被清理，长期积累可能导致数据冗余和性能下降。
      - **状态：** 已被记录在已合并PR的说明中，待后续修复。
      - **链接：** [PR #2065](netease-youdao/LobsterAI PR #2065)

#### 6. 功能请求与路线图信号

- **关于Agent管理的增强需求 (关联 #2293):** 社区对多Agent功能的期望不仅是独立配置，还包括更完善的配置隔离和数据管理机制。`Bug #2293`的反馈实际上也映射出用户对 **Agent配置模板化或独立存储** 的需求，以避免手动操作时的意外同步。
- **UI/UX 微改进趋势 (关联 #1325):** 持续有PR关注UI交互细节，如添加Tooltip提示。这表明社区和贡献者都认为LobsterAI在易用性方面仍有提升空间，尤其是在侧边栏折叠等复杂交互场景下。这类小改进通常是下一版本迭代的首选内容。

#### 7. 用户反馈摘要

- **核心痛点：Agent配置无法隔离。**
  - 用户 @yepcn 在 Issue #2293 中详细描述了其使用场景：希望通过多个Agent满足不同场景下的独立需求。当前Bug迫使他每次只能使用一个Agent，否则配置会混乱。
  - 用户通过手动修改文件的方式尝试绕过，但发现重启后配置会被强制同步，这说明问题可能存在于自动同步或配置加载的根逻辑层面。
  - **用户期待：** 一个稳定、隔离、可个性化配置的多Agent生态系统。

#### 8. 待处理积压

- **重点关注**
  1.  **Issue #2293 - 多Agent配置相互覆盖**
      - **状态：** **[OPEN] [严重]**
      - **创建时间：** 2026-07-07
      - **链接：** [Issues #2293](netease-youdao/LobsterAI Issue #2293)
      - **建议行动：** 强烈建议维护者将此Issue标记为 `priority: high` 或 `bug: regression`，并尽快进行复现和修复。这是当前最影响用户信心的稳定性问题。
  2.  **PR #1325 - 新建对话按钮添加悬停提示**
      - **状态：** **[OPEN] [stale]**
      - **创建时间：** 2026-04-02
      - **链接：** [PR #1325](netease-youdao/LobsterAI PR #1325)
      - **建议行动：** 该PR改动较小，价值明确，建议尽快Review并合并，以避免因长期未处理而导致的贡献者积极性受挫。
  3.  **PR #2065 - 删除Agent时清理会话数据（遗留问题）**
      - **状态：** **[未创建新Issue]**
      - **链接：** [PR #2065](netease-youdao/LobsterAI PR #2065)
      - **建议行动：** 建议将PR #2065中提到的`cowork_sessions`未清理问题记录为一个新的Issue，作为技术债务进行跟踪和规划修复。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 CoPaw (github.com/agentscope-ai/CoPaw) 项目在 2026-07-13 的 GitHub 数据，为您生成以下项目动态日报。

---

# CoPaw 项目动态日报 | 2026-07-13

**报告周期：** 2026-07-12 00:00 UTC 至 2026-07-13 00:00 UTC

## 1. 今日速览

过去 24 小时，CoPaw 项目的社区活跃度较高，主要集中在 2.0.0 版本的 Bug 修复和兼容性问题反馈上。共产生 19 条 Issue 和 10 条 PR，其中新开/活跃的 Issue 达 16 条，显示出用户升级后遇到的痛点较为集中。开发团队响应迅速，已针对上下文压缩导致的 400 错误、v1 到 v2 的数据迁移兼容性等关键问题提交了修复 PR，项目整体处于“问题高发、修复并行”的密集迭代状态。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目主要进展体现在对 v2.0.0 版本的兼容性修复上，多个 PR 被合并或关闭，核心进展如下：

- **v1 遗留数据兼容性修复（PR #5987, #5988, #5990 已关闭）**：
  - 作者 Nioolek 和 tadebao 反复提交并最终合并了针对 v1 遗留数据的兼容性补丁。主要修复了以下两个问题：
    1.  [PR #5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) **（已合并）**：修复了上下文压缩后，孤立的 `tool_result` 消息（在 AgentScope 1.x 的扁平化时间线格式中产生）导致 API 400 错误的问题。
    2.  [PR #5988](https://github.com/agentscope-ai/QwenPaw/pull/5988) 和 [PR #5990](https://github.com/agentscope-ai/QwenPaw/pull/5990) **（已关闭/合并）**：修复了 v1 会话中包含 `file` 类型的数据块时，v2.0 的反序列化器未能正确转换，导致 `ToolResult` 格式化失败的问题。
- **打包与分发修复（PR #5997 已开启）**：
  - [PR #5997](https://github.com/agentscope-ai/QwenPaw/pull/5997) 旨在修复桌面版打包时未包含 AgentScope 的 `Glob` 工具所需的 `_glob_helper.py` 文件，导致某些后台任务（如 ReMe）在桌面版上无法运行的问题。

这些修复直接解决了用户从 v1.x 升级到 v2.0.0 后遇到的核心数据兼容性问题，项目向稳定版迈出了关键一步。

## 4. 社区热点

今日社区讨论最热烈、影响范围最广的问题集中在 **v2.0.0 的 API 兼容性与稳定性**上：

- **Hot Issue: [Bug] 2.0.0对话时会产生MODEL_EXECUTION_ERROR (#5996)**
  - **链接**: [Issue #5996](https://github.com/agentscope-ai/QwenPaw/issues/5996)
  - **评论数**: 4
  - **分析**: 该 Issue 揭示了 `_hint.py` 中的一个核心设计问题：当 `assistant` 消息中包含 `ToolResultBlock` 时，OpenAI Formatter 会将其转换为独立的 `role=tool` 消息。然而，由于原 `assistant` 消息中没有 `tool_calls`，导致 API 调用返回 400 错误。这暴露了项目在处理工具调用提示消息时与 OpenAI API 规范的不一致，是许多 `MODEL_EXECUTION_ERROR` 的根源。

- **Hot Issue: [Bug] Context compression breaks tool_call/tool_result pairing -> 400 BadRequestError (#5986)**
  - **链接**: [Issue #5986](https://github.com/agentscope-ai/QwenPaw/issues/5986)
  - **评论数**: 4
  - **分析**: 用户 tadebao 精准报告了上下文压缩机制的一个严重 Bug。当压缩逻辑简单粗暴地移除旧消息时，会破坏 `tool_calls` 与 `tool_result` 消息的配对关系，导致模型接收到孤立的 `tool` 角色消息，从而引发 400 错误。此问题在长对话中尤其致命。有趣的是，该 Issue 的提交者也提交了相应的修复 PR，展现出高水平的社区贡献。

## 5. Bug 与稳定性

今日报告的 Bug 数量较多，按严重程度排列如下：

**严重（导致 API 调用失败或核心功能不可用）：**
1.  **[Bug] 2.0.0对话时会产生MODEL_EXECUTION_ERROR (#5996)**: `_hint.py` 中消息格式化错误导致 400 错误。
2.  **[Bug] Context compression breaks tool_call/tool_result pairing (#5986)**: 上下文压缩导致 `tool_result` 消息成为孤儿，引发 400 错误。**已有修复 PR #5987 被合并**。
3.  **[Bug] auto-memory fails with "No module named..." (#5952)**: 自动记忆功能因缺少 `_scripts` 模块而完全故障。**可能与 #5997 的打包问题相关，已有相关修复 PR**。

**中等（功能异常或数据丢失）：**
4.  **[Bug] Agent在用户确认方案后仍按旧方案执行 (#5998)**: 记忆上下文不一致导致 Agent 行为错误，严重影响任务可靠性。
5.  **[Bug] 升级到 2.0.0 后聊天列表与对话历史映射丢失 (#5964)**: 用户数据存在，但会话映射关系丢失，导致无法访问旧对话。
6.  **[Bug] Messages silently dropped when session is busy (#5995)**: 会话忙碌时，新用户消息被静默丢弃，无排队、无提示，造成严重的用户体验问题。

**较低（界面或非核心功能问题）：**
7.  **[Bug] Plugin HTTP routes lost after workspace hot-reload (#5977)**: 插件热重载后丢失 HTTP 路由。
8.  **[Bug] qwenpaw doctor reports FAIL for /api/agent/health (#5983)**: 健康检查端点在 CLI 工具中写死，路径错误，导致误报。
9.  **[Bug] Search Field for model auto-filled with username (#5981)**: UI 小 bug，搜索框被自动填入错误内容。

## 6. 功能请求与路线图信号

- **高优先级需求：跨频道会话绑定与切换**
  - **链接**: [Issue #5999](https://github.com/agentscope-ai/QwenPaw/issues/5999)
  - **分析**: 用户 tecgic 明确提出了支持跨渠道（如 Console、飞书、钉钉）无缝切换和绑定已有会话的需求。这反映了高级用户对 Agent 连续性体验的强烈渴望，表明项目需要在会话管理层进行更底层的设计，使其与特定渠道解耦。此需求极可能成为后续版本的重要路线图方向。

- **技能系统改进信号**
  - **链接**: [Issue #6000](https://github.com/agentscope-ai/QwenPaw/issues/6000), [Issue #6001](https://github.com/agentscope-ai/QwenPaw/issues/6001)
  - **分析**: 两个 Issue 均报告了 v2.0.0 中技能（Skill）系统的“完全损坏”：任何新添加的技能都无法加载到技能池中。这不仅是一个 Bug，更暴露出当前技能发现机制过于静态和脆弱。为了支持更丰富的 Agent 生态，技能系统亟需重构，实现更自动、更可靠的动态发现和加载机制。

## 7. 用户反馈摘要

从今日的 Issues 评论中可以提炼出以下几类用户痛点：

- **升级阵痛**：从 v1.x 升级到 v2.0.0 的用户普遍遇到了兼容性问题，包括会话历史丢失（#5964）、核心功能（如 `auto-memory` 和 `shell` 执行）退化或不可用（#5952, #5982），这给用户带来了较大的迁移成本和不信任感。
- **稳定性焦虑**：用户对 Agent 行为的不可预测性表达了不满。例如 Agent 在执行用户确认的新方案后仍输出旧方案（#5998）、在会话忙碌时静默丢弃消息（#5995），严重动摇了用户对 Agent 可靠性的信心。
- **权限与控制**：用户对严格的权限控制感到困扰。一方面，`Governance` 安全审查过于频繁，影响效率（#5994）；另一方面，即使 UI 禁用了治理，某些操作的审批提示仍无法屏蔽（#5984），缺乏灵活性和精细化控制。
- **功能缺失**：已有用户在对比 v1.x 后发现 v2.0.0 缺失了 SSH Offline、Profiles 等重要功能（#5980），产生巨大落差感。

## 8. 待处理积压

- **[Bug] tool approval prompts appear feishu channel even when governance is disabled in UI (#5984)**
  - **链接**: [Issue #5984](https://github.com/agentscope-ai/QwenPaw/issues/5984)
  - **优先级**: 中等
  - **说明**: 用户在配置受限的 ARM 设备上无法安全地静默化 Shell 命令审批。该问题可能涉及底层安全沙箱的兼容性，需要更深入地评估和解决。

- **[PR] feat(console, tui): expose system commands in slash autocomplete across all UIs (#5869)**
  - **链接**: [PR #5869](https://github.com/agentscope-ai/QwenPaw/pull/5869)
  - **状态**: Under Review（待审查）
  - **说明**: 这是一项提升用户体验的功能，旨在将所有 UI 中的斜杠命令添加到自动补全中。该 PR 已提交 5 天，仍在审查中，建议维护者给予关注，以提升产品的整体易用性。

---
**报告结束。**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 ZeroClaw 项目于 2026-07-13 的 GitHub 数据生成的动态日报。

---

# ZeroClaw 项目动态日报 2026-07-13

## 1. 今日速览

ZeroClaw 项目今日保持极高活跃度。过去24小时内，社区贡献了大量新 Issue 和 PR，但合并率较低，导致待处理的 PR 积压至 48 条，形成了一定的“合并瓶颈”。项目开发重心明显向 **SOP (Standard Operating Procedures)**、**Memory 子系统** 和 **ZeroCode 编辑器** 三大方向倾斜，且均有大规模 PR 在推进。尽管存在两个标记为严重 (S1) 且高风险的 Bug 悬而未决，但整体的代码产出和功能迭代势头强劲，社区参与度与维护工作量均处于高位。

## 2. 版本发布

无

## 3. 项目进展

过去24小时内，项目合并/关闭的 PR 数量较少（仅2条），但关闭了一个重要的 Enhancement Issue，标志着一个用户旅程的优化完成。

- **功能推进**
    - **ZeroCode 恢复体验**：关闭了议题 [#8653](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) “[Feature]: Auto-resume the most recent Code session on pane entry”。该功能的实现将改善用户进入 ZeroCode 面板时的体验，从“空白状态”转变为“自动恢复最近的会话”，降低了用户的操作摩擦。

- **核心方向进展**：近期活跃的多个大型 PR（如 [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848)、[#8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880)、[#8903](https://github.com/zeroclaw-labs/zeroclaw/pull/8903) 等）正在持续推进 **SOP 管控面** 的构建，同时一整套的 **Memory 增强** 功能（审计追踪、缓存、分类、扫描安全）也在并行开发并等待合并。这表明项目正在系统性地提升其核心能力（流程自动化与记忆管理）的成熟度。

## 4. 社区热点

今日讨论最热烈的议题主要围绕核心架构和长期存在的稳定性问题：

- **“目标模式”落地跟踪**：[#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) 作为一个大型功能（goal-mode）的拆解与合并跟踪器，获得了 9 条评论。社区关注点在于如何将已实现的新特性安全、有序地合并到主分支中，这体现了项目在进行重大架构变更时的严谨规划。

- **默认内存耗尽Bug的持续关注**：[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) “[Bug]: Default 32k context budget is exceeded by system prompt + tool definitions on iteration 1” 再次获得 8 条评论。这是一个长期困扰用户的严重问题，用户普遍反映系统提示词和工具定义占用了过多的上下文预算，导致初次交互就触发强制裁减，严重影响使用体验。社区对此修复的呼声很高。

- **Slack 集成体验优化**：[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) “[Feature]: Slack: hydrate thread context from conversations.replies” 讨论了在 Slack Thread 中，如何让机器人在被首次@时自动回填历史对话。这反映了真实的企业用户在使用 ZeroClaw 进行协作时，期望其能像“原生”成员一样理解上下文，而非每次都从零开始。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在运行时稳定性和与新模型的兼容性上，严重程度较高。

- **严重 (S1 - Workflow Blocked)**
    - **技能评审进程崩溃**：[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) 报告，在工具密集的对话回合后，后台“技能评审”进程因切片索引越界导致 Panic，并最终引发进程退出。此问题严重影响后台自动化任务的可靠性，已有议题追踪但暂无关联的 Fix PR。
    - **MCP 工具模式克隆导致内存泄漏**：[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 指出，MCP/工具模式的深克隆操作是导致 Agent 循环中 RSS 内存无限制增长的独立原因（与 #5542 中的 OOM 问题不同）。此问题直接关系到系统的长期运行稳定性。
    - **SOP 在 Web Dashboard 中不可用**：[#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) 用户报告，在 Web Dashboard 的聊天会话中无法检测和使用已配置的 SOP，导致此核心功能的 UI 体验失效。
    - **OpenAI Responses API 视觉能力被禁用**：[#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) 报告，当使用 OpenAI 的 `responses` 接口时，提供器硬编码了 `vision = false`，导致用户无法发送图片进行多模态交互。

- **中等/较高风险**
    - **OpenAI 推理努力度导致工具调用失败**：[#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) 报告，当 ZeroClaw 向部分 OpenAI 兼容模型发送带有非 `none` 推理努力度的工具调用时，请求被拒绝。这影响了与最新模型（如 `o3` 系列）的兼容性。
    - **CLI 配置目录忽略语言检测**：[#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) 报告，`--config-dir` 命令行参数在程序启动的早期（本地化时）被忽略，导致界面语言与预期不符。

## 6. 功能请求与路线图信号

今日收到了多个新功能请求，部分与在开发中的特性高度相关。

- **可能纳入下一版本的功能**：
    - **ZeroCode 会话操作**：[#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020) 提出增加“会话回滚”和“从特定消息分叉”的功能。这与正在重构的 ZeroCode 编辑器 (PR [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655)) 目标一致，很可能被纳入后续的 ZeroCode 功能集。
    - **Slack 事件 API 支持**：[#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) 提出为 Slack 集成添加 HTTP 回调模式，以支持“从零扩展”的无服务器部署。这响应了运维层面对更现代、更高效集成方式的需求。

- **社区长期诉求**：
    - **Telegram 多消息模式**：[#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) 要求 Telegram 集成能支持将 Agent 的多轮思考以独立消息发送，而非拼接成一条。这反映了用户对 Telegram 平台的交互体验有精细化要求。
    - **Cron Job 文档与模型选择**：[#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) 用户抱怨 Cron 任务缺乏文档，并希望能为不同的定时任务指定不同的（更便宜的）模型。

## 7. 用户反馈摘要

从 Issue 评论中可以提炼出一些用户的真实痛点：

- **新手入门门槛高**：从 #7762 可以看出，即使有功能的实现，但若缺乏清晰的文档（如 Cron），用户依然无法有效使用，形成体验断层。
- **默认配置不友好**：#5808 的持续讨论表明，默认参数（如 32K 上下文）并不适用于包含大量工具定义的复杂场景，导致“开箱即用”的体验极差，用户需要深入配置才能正常工作。
- **集成细节有待打磨**：来自 #6055 (Slack Thread) 和 #8445 (Telegram 消息) 的反馈表明，用户不仅要求“能用”，更要求“体验好”。在特定平台上的细节交互（如线程上下文感知、消息格式）成为影响用户满意度的关键。
- **稳定性是第一生命力**：#8654 (技能评审崩溃) 和 #8642 (内存泄漏) 的报告直接触及开发者最敏感的神经，生产环境的稳定性问题会严重打击信任感。

## 8. 待处理积压

以下 Issue/PR 长期处于开放或等待响应状态，建议维护团队关注。

- **重要 Issue 待响应**：
    - [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) “Audit: track 153 commits lost in bulk revert”：跟踪一个因批量回滚而丢失的 153 个提交的问题，已开放近 3 个月，对代码历史完整性很重要。
    - [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) “[Bug]: SOPs are not available”：严重的功能缺陷，SOP 在 Web UI 中不可用，已开放近 2 周，会显著影响用户对 SOP 新特性的体验。

- **大型 PR 等待作者更新或合并**：
    - 多个由 `Nillth` 提交的关于 Memory 和 SOP 的大型 PR（如 [#8893](https://github.com/zeroclaw-labs/zeroclaw/pull/8893)、[#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898)、[#8895](https://github.com/zeroclaw-labs/zeroclaw/pull/8895)）均标记为 `needs-author-action`，可能卡在某项验证或修改上，需要作者跟进。
    - 同样，多个关键的SOP功能PR（[#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848)、[#8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880)）的合并进度值得关注，这些是推动 SOP 里程碑的核心。
    - [#8353](https://github.com/zeroclaw-labs/zeroclaw/pull/8353) `fix(runtime)` 是一个小的改进 PR（改善错误信息），已标记为 `stale-candidate`，可能因为长期未得到关注而即将过期，建议维护者快速评审。

</details>

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*