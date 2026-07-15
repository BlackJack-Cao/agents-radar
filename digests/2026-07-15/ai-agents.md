# OpenClaw 生态日报 2026-07-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-14 23:34 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 OpenClaw 项目数据，生成 2026-07-15 的项目动态日报如下。

---

## OpenClaw 项目动态日报 | 2026-07-15

### 1. 今日速览

今日 OpenClaw 社区活动量极高，总计处理近 1000 条 Issues 和 PR 更新，体现了项目旺盛的生命力和用户参与度。然而，**P0 级别（最高优先级）的启动崩溃 Bug 集中爆发**，成为今日最核心的矛盾点。多个用户报告从旧版升级至 `2026.7.1` 后，Gateway 因“遗留状态迁移”冲突而陷入崩溃循环，且官方修复工具 `openclaw doctor` 无法解决。目前已有至少 3 个相关的 P0 Issue 被提交，并伴有快速跟进的热修复 PR，社区维护者正在紧急响应。此外，大量关于安全、稳定性及多语言支持的长期功能请求和 Bug 报告仍在持续讨论中，表明项目在功能扩展的同时，稳定性和安全性是用户最关注的领域。

### 2. 版本发布

无

---

### 3. 项目进展 (重要 PR 合并/关闭情况)

今日项目核心进展集中在**紧急修复 P0 启动崩溃**和**持续优化周边稳定性**上。虽然社区提交了 164 个已合并/关闭的 PR，但以下几项最值得关注：

- **紧急修复：2026.7.1 升级崩溃问题**：针对用户反馈的 Gateway 崩溃循环问题，维护者快速合并/关闭了相关 PR。例如：
    - `[Bug]: Openclaw Update 2026.7.1 Crash` (#107330) 已关闭，暗示问题可能已通过快速修复或回滚解决。
    - `[Bug]: Memory Core embedding_cache conflict permanently blocks Gateway startup on 2026.7.1` (#107133) 已关闭，相关修复可能已包含在后续的紧急 PR 中。

- **测试与基础设施优化**：
    - `improve: speed up run-lease tests` (#107838) 已关闭，通过共享 Git 仓库模板，优化了 CI 测试流程速度。
    - `test(plugins): include linux canvas startup baselines` (#107837) 已关闭，修复了因新插件导致的全量发布验证失败问题。

- **长期存在的稳定性修复**（长期未决，现已关闭）：
    - `[Bug] backup create leaves large .tmp files on timeout causing disk space exhaustion` (#50442) 已关闭，解决了备份超时导致临时文件堆积、耗尽磁盘空间的隐患。

---

### 4. 社区热点

今日社区讨论焦点集中在 **2026.7.1 版本的启动崩溃**和 **Agent 安全与可控性**上，反映出用户对新版本的稳定性高度敏感，以及对生产环境中安全风险的明确担忧。

- **最受关注：2026.7.1 版本升级崩溃事件**
    - **Issues**:
        - `[Bug]: Memory Core embedding_cache conflict permanently blocks Gateway startup on 2026.7.1` (#107133) **17 个反应，6 条评论**
        - `[Bug]: startup legacy-state migration never converges when .migrated archive already exists; gateway permanently refuses to start` (#102749) **7 个反应，5 条评论**
        - `[Bug]: Openclaw Update 2026.7.1 Crash` (#107330) **6 个反应，5 条评论**
    - **分析**：这是今日最严重的故障事件。多个用户报告在升级到 `2026.7.1` 后，Gateway 因**遗留状态迁移脚本冲突**而完全拒绝启动，陷入崩溃-重启的死循环。用户对 `openclaw doctor --fix` 无法解决此问题感到沮丧，凸显了版本升级路径的兼容性问题亟待解决。

- **高热度：控制与安全诉求**
    - **Issue**: `Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys` (#10659) **18 个反应，14 条评论**。
    - **分析**：该功能请求热度不减，用户希望 Agent 在运行时能够**“使用”API 密钥但无法“看到”它们**。这直接针对提示注入攻击和密钥泄露场景，是生产环境中对 AI Agent 安全性的核心需求。

---

### 5. Bug 与稳定性

今日 Bug 报告以 **P0 级别的启动/升级故障**和**多重会话状态丢失**为主，严重影响用户体验。

- **P0 (最高严重性) - 启动崩溃**
    - `2026.7.1 startup-migration gate is fatal, but the repair path (\`openclaw doctor\`) doesn't resolve the conflict — gateway crash-loops with no documented remedy` (#107227) | **状态：OPEN**
    - `[Bug]: Memory Core embedding_cache conflict permanently blocks Gateway startup on 2026.7.1` (#107133) | **状态：CLOSED** (疑似已修复)
    - `[Bug]: startup legacy-state migration never converges when .migrated archive already exists; gateway permanently refuses to start` (#102749) | **状态：CLOSED** (疑似已修复)
    - **关联 PR**: `fix(doctor): preserve allowlist entries for version-bound runtime plugins during stale config scan` (#107285) | **状态：OPEN** - 直接指向了修复方向。
    - **PR**: `fix(gateway): recover when suppressed channel secrets are unavailable` (#106826) | **状态：OPEN** - 修复了另一个启动顺序相关的 Bug。

- **P1 (高严重性) - 消息丢失/会话状态损坏**
    - `[Bug]: CLI startup preflight can corrupt the live state DB while a gateway is running` (#101290) | **12 条评论**。CLI 的预检操作在 Gateway 运行时可能损坏数据库，导致“磁盘镜像损坏”错误。
    - `[Bug]: Signal daemon stop() race condition on SIGUSR1 restart — orphaned processes and send failures` (#22676) | **17 条评论**。Signal 守护进程重启时的竞态条件导致消息发送失败。
    - `[Bug]: WhatsApp 1:1: inbound image wedges main lane ~3min before processing` (#96834) | **8 条评论**。WhatsApp 图片消息会导致消息通道卡住 3 分钟。
    - `[Bug]: WebChat session transcript overwritten on every turn` (#77012) | **8 条评论**。WebChat 会话记录每次对话都会被覆盖，刷新后历史消息丢失。

---

### 6. 功能请求与路线图信号

今日的功能请求集中在**多平台支持、安全增强和新协议适配**，部分已有关联 PR 表明这些方向可能被纳入后续版本。

- **明确信号：Agent 安全增强**
    - `Feature Request: Masked Secrets` (#10659) 和 `Feature: Memory Trust Tagging by Source` (#7707) 等 Issue 热度不减，安全已成为社区核心诉求。

- **可能纳入下一版本的功能**
    - `[enhancement, help wanted] Linux/Windows Clawdbot Apps` (#75) - **113 条评论**。虽然这是长期存在的需求，但社区讨论热度极高，是项目扩展平台覆盖的关键信号。
    - `feat: add standard hosting profiles` (PR #107765) - 增加标准托管配置，旨在简化部署，暗示项目正在为更广泛的商业/生产化部署铺路。
    - `feat: expose readable session presentation metadata` (PR #106832) - 暴露可读的会话元数据，是改进 UI/UX 和第三方集成的关键步骤。

---

### 7. 用户反馈摘要

从今日的 Issue 评论中，可以提炼出以下几点真实用户反馈：

- **对新版本稳定性感到焦虑**：多位用户在升级 `2026.7.1` 失败后，表达了明显的挫败感和对项目稳定性的担忧。例如 `@Marvinthebored` 在 Issue #107227 中描述：“`openclaw doctor` 无法解决冲突，Gateway 崩溃循环，完全没有文档帮助。” 这暴露了版本升级和故障恢复流程的短板。
- **对本地和代理模型的支持有强烈需求**：`@delimir` 在 Issue #106779 中报告了 `2026.7.1` 版本中 `llama.cpp` 本地模型完全失效的问题。这表明社区中有大量用户依赖或希望使用本地模型，而该领域的兼容性和稳定性是用户体验的关键痛点。
- **对“不可见”的安全机制有明确期望**：`@jmkritt` 在 Issue #10659 中提出的“蒙版密钥”功能得到了多位用户的共鸣。这表明用户不仅希望 Agent 功能强大，更希望它能**以用户不可见的方式管理敏感数据**，这是 Agent 从玩具走向生产力工具的重要标志。

---

### 8. 待处理积压

以下为长期存在、对项目健康度有重大影响但尚未解决的建议或问题，提醒维护者关注。

- **长期未响应的重要功能需求**
    - `Linux/Windows Clawdbot Apps` (#75) - **113 条评论，创建于 2026-01-01**。这是呼声最高的功能需求，标志着用户强烈期待项目能脱离 macOS 平台。长期无实质进展可能导致该群体用户流失。

- **长期未解决但被标记为“待处理”的 Bug**
    - `[Bug]: Cascading failure: invalidated OAuth on primary provider produces empty placeholder reply...` (#80040) - **P2，stale**。一个复杂的连锁故障，涉及 OAuth、工具执行和会话上下文丢失。虽然标记为 `stale`，但其描述的影响范围广泛，需要维护者进行深度架构评审。
    - `[Bug]: DeepSeek cache hit rate <10% after 6.x upgrade` (#94518) - **P1，stale**。一个严重的性能回归问题，导致缓存命中率锐减，对使用 DeepSeek 模型的用户成本影响巨大。虽然 `stale`，但其重要性不应被忽视。

- **停滞状态的重要 PR**
    - `fix(mattermost): backfill thread history from server when in-memory window is empty` (#93865) - **状态：⏳ waiting on author**。该 PR 解决了一个重要的 Mattermost 会话上下文丢失问题，但等待作者修订。维护者可以适当介入以推动合并。
    - `feat: expose readable session presentation metadata` (#106832) - **状态：⏳ waiting on author**。该 PR 是提升 UI 和开发者体验的重要一步，目前同样卡在等待作者响应。

---

## 横向生态对比

好的，作为您的资深技术分析师，我已仔细审阅了7月15日各项目的社区动态日报。现为您呈上一份横向对比分析报告，旨在为您的技术决策和生态布局提供参考。

---

## AI智能体与个人AI助手开源生态横向分析报告 (2026-07-15)

### 1. 生态全景

当前，个人AI助手与自主智能体开源生态正经历一轮 **“高速迭代与阵痛期”**。一方面，各项目都在积极引入复杂的新功能（如标准操作流程SOP、高级记忆系统、全新通信渠道），显示出向生产级、企业级能力迈进的雄心；但另一方面，**P0/P1级别的启动崩溃、升级兼容性断裂、核心功能退化**等问题在多个明星项目中集中爆发，说明在追求功能密度的同时，项目的**稳定性基线**正面临严峻挑战。社区用户从“尝鲜”心态，迅速转向对“可用性”和“可靠性”的务实期待，对升级过程的平稳性、故障恢复路径的清晰度提出了极高要求。

### 2. 各项目活跃度对比

以下是各主要项目在2026年7月15日的社区活跃度与健康状况概览：

| 项目 | Issues (新/活跃/关闭) | PRs (活跃/合并) | 版本发布 | 今日健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~1000 (极高) - 3个P0 Bug | 164合并/关闭 | 无 | **高活跃 + 稳定性危机** - 核心版本升级导致严重崩溃，社区情绪焦虑。 |
| **NanoBot** | 3新 / 中 | 47/65 合并 | 无 (v0.1.4.post6) | **高维护 + 低新需求** - 聚焦Bug修复与稳定性打磨，项目健康度良好。 |
| **Hermes Agent** | 50活跃 / 37关闭 | 50活跃 / 9合并 | 无 | **密集修复期** - 针对MCP、跨平台兼容性问题进行专项修复，响应速度快。 |
| **PicoClaw** | 3新 / 中 | 9活跃 / 5合并 | 无 | **稳步迭代** - 社区贡献积极，安全升级和平台兼容性是关注焦点。 |
| **NanoClaw** | 0新 | 28活跃 / 9合并 | 无 | **紧凑开发 + 合并压力** - PR密集，核心贡献者聚焦于安全与稳定性修复。 |
| **IronClaw** | 49活跃 / 高 | 50活跃 / 高 | 无 | **架构重构后期** - 全力推进Reborn架构，同时清理Bug Bash遗留问题。 |
| **CoPaw (QwenPaw)** | 100 (极高) / 35关闭 | 50活跃 / 26合并 | v2.0.0.post2 | **高活跃 + 高强度修复** - v2.0.0发布后Bug集中爆发，团队响应积极。 |
| **ZeroClaw** | 38活跃 / 10关闭 | 50活跃 / 29合并 | 无 | **里程碑推进** - SOP引擎和Hindsight记忆核心功能合入，进度喜人。 |
| **LobsterAI** | 低 (4关闭) | 低 (3合并) | 无 | **清仓维护** - 无新活动，主要在清理历史积压任务。 |
| **Moltis** | 中 | 8合并 | `20260714.11` | **稳定修复** - 专注于MCP兼容性和本地模型的支持，节奏稳健。 |
| **NullClaw, IronClaw, ZeptoClaw** | 无活动 | 无活动 | 无 | **沉寂** - 项目可能处于停滞或维护者休假状态。 |

### 3. OpenClaw在生态中的定位

OpenClaw作为生态中的核心参照项目，其“领头羊”地位稳固，社区体量和讨论量是其他项目的数倍甚至数十倍。但其技术路线也体现了“先行者”的代价：
- **优势：** 功能最为全面，社区生态最庞大，是其他项目（如LobsterAI）的核心引擎。其动态直接影响整个生态的风向。
- **劣势与路线差异：** 今日暴露的**P0级启动崩溃**，根源在于复杂的“遗留状态迁移”脚本冲突。这揭示了其**架构的复杂性与历史债务**。相比之下，NanoBot、PicoClaw等更聚焦、更年轻的项目，在基础稳定性和升级路径上表现得更平稳，它们往往采用更精简的架构或更谨慎的发布时间表。
- **社区规模：** OpenClaw的社区以 **“广泛用户 + 少量核心贡献者”** 为主，Bug报告量大，但有效贡献比例可能较低。而像ZeroClaw、NanoClaw等社区，其PR讨论的深度和贡献者的技术水平更高。

### 4. 共同关注的技术方向

从多项目动态中，可以提炼出以下生态共同的技术演进方向：

| 技术方向 | 涉及项目 | 具体诉求/表现 |
| :--- | :--- | :--- |
| **1. MCP（模型上下文协议）集成与稳定性** | **Hermes Agent**, **Moltis**, **IronClaw** | MCP作为连接外部工具的关键桥梁，其OAuth授权、进程管理、服务稳定性成为多个项目的修复重点。 |
| **2. 高级记忆与上下文管理** | **CoPaw**, **ZeroClaw**, **IronClaw** | 记忆模块（如ReMe, Hindsight）是当前功能迭代的热点，但同时也带来了“记忆搜索死循环”、“上下文缓存污染”等新问题。 |
| **3. 安全与权限控制** | **ZeroClaw**, **OpenClaw**, **PicoClaw** | 多租户RBAC、“蒙版密钥”、沙箱兼容性（Landlock, Windows）等问题出现，标志着Agent从个人工具向企业级平台演进的安全需求爆发。 |
| **4. Agent工作流与流程编排 (SOP)** | **ZeroClaw**, **IronClaw** | 通过标准操作流程（SOP）定义Agent行为，实现可预测、可控的自动化，是走向生产化的关键一步。 |
| **5. 本地/小模型兼容性** | **Moltis**, **CoPaw**, **ZeroClaw** | 用户对兼容Llama.cpp, Ollama等本地模型的呼声很高，但常遇到工具调用参数、提示词格式兼容性问题。 |
| **6. 会话状态与消息传递一致性** | **IronClaw**, **Hermes Agent**, **NanoClaw** | 多个项目修复了消息排序错乱、跨会话状态泄漏、会话阻塞（如WhatsApp图片导致卡顿）等问题。 |

### 5. 差异化定位分析

各项目在功能侧重、目标用户上呈现明显分化，已形成清晰的生态位：

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 功能全面、平台化 | 追求极致功能的个人/开发者 | 复杂，历史债务重，升级风险高 |
| **ZeroClaw** | 企业级工作流 (SOP)、生产级部署 | 需要稳定、可控自动化的团队/企业 | 架构清晰，强调可靠性和可观测性（OTel） |
| **NanoBot** | 高稳定性、快速部署 | 寻求开箱即用、平稳体验的个人用户 | 轻量级，维护活跃，修复快速 |
| **Hermes Agent** | 实验性功能、多渠道集成 | 前沿技术爱好者、尝鲜者 | 组件化（MCP, ACP），迭代快，但稳定性波动较大 |
| **CoPaw (QwenPaw)** | 深度绑定国内生态（飞书、钉钉） | 国内企业用户 | 与国内IM、模型（Qwen, DeepSeek）深度集成，本地化能力强 |
| **PicoClaw** | 安全、性能、模型兼容性 | 关注细节的开发者/运维者 | 社区贡献驱动，偏向于特定技术栈的深度优化 |
| **NanoClaw** | 消息路由、容器化通信 | 高级开发者和DevOps团队 | 架构专注（消息传递），PR质量高，但合并周期可能较长 |

### 6. 社区热度与成熟度

- **第一梯队 (核心参照与高活跃):**
    - **OpenClaw, CoPaw (QwenPaw)**: Issues/PR数量级远超其他项目，是整个生态的热度中心。但高活跃中夹杂着大量Bug反馈和修复需求，处于 **“快速迭代与稳定化并存的矛盾期”**。
- **第二梯队 (高修复与迭代):**
    - **NanoBot, Hermes Agent, IronClaw, ZeroClaw**: 活跃度很高，但议题讨论的**技术深度和指向性更强**。它们正进入**质量巩固和功能成熟化阶段**，例如NanoBot在打磨WebUI，ZeroClaw在合并SOP引擎。
- **第三梯队 (技术特色发展):**
    - **PicoClaw, NanoClaw, Moltis**: 社区规模相对较小，但在特定领域（如安全、消息路由、MCP兼容性）表现突出，呈现出专业化的“小而美”社区特征。
- **第四梯队 (沉寂/边缘):**
    - **LobsterAI, NullClaw, ZeptoClaw**: 活跃度较低，可能处于维护者精力不足或项目发展方向不明的状态。

### 7. 值得关注的趋势信号

1.  **“升级恐惧症”正在蔓延**：OpenClaw的启动崩溃案例绝非孤例，它给所有AI Agent项目敲响警钟。社区对**升级路径的健壮性、回滚能力、故障排查文档（即“失效路径设计”）** 的需求空前强烈。对于开发者而言，**构建可靠的迁移脚本和自愈能力，比添加新功能更能赢得用户信任**。
2.  **错误处理决定用户体验**：IronClaw和CoPaw的案例表明，用户对“静默失败”、“虚假成功”（API返回`ok:true`但操作无效）、“状态报告不一致”的容忍度极低。**Agent系统必须提供真实、清晰、可观测的错误信息**，这已成为衡量成熟度的关键标准。
3.  **“多租户”与“安全”成为企业级应用的门槛**：ZeroClaw的RBAC请求、OpenClaw的“Masked Secrets”功能，都指向同一个趋势：当Agent从个人助手走向团队协作和企业级生产力工具时，**权限隔离、数据安全和成本控制（速率限制）** 将不再是可选项，而是必要功能。
4.  **本地模型生态的“软适配”需求凸显**：Moltis和CoPaw对本地小模型的兼容性修复表明，硬件厂商（如Apple Silicon）和开源模型（如Llama, Gemma）的快速发展，使得**Agent框架需要做更多的“软工作”**，以弥合这些模型与标准API之间的行为和格式差异。

**结论与建议**：
- **对于技术选型者**：若追求稳定性，NanoBot或ZeroClaw(若需工作流) 是更稳妥的选择；若需深度嵌入国内IM生态，CoPaw是首选；OpenClaw适合愿意承担一些稳定性风险、追求最大功能集的硬核用户。
- **对于生态贡献者**：建议关注**MCP的稳定性优化、本地模型的兼容性适配、以及错误处理/可观测性**等方向。这些是目前社区普遍痛点，但尚未被项目方完全覆盖的高价值贡献领域。避免扎堆于热门项目（如OpenClaw）的常规Bug报告，转向那些有明确技术深度的第二、三梯队项目，可能获得更高效的反馈和社区影响力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 GitHub 数据生成的 **NanoBot 项目动态日报**。

---

# NanoBot 项目动态日报 | 2026-07-15

## 1. 今日速览

过去 24 小时，NanoBot 项目呈现 **高维护活跃度、低新需求增长** 的健康状态。项目团队和社区贡献者重点聚焦于 **Bug 修复与稳定性提升**，特别是针对统一会话（Unified Session）的 Heartbeat 机制、WebUI 体验打磨以及会话管理缺陷的修复。昨日 **超过 70% 的 Pull Request (PR) 被合并或关闭**（47/65），表明维护者的代码审查和入库效率极高。同时，有 3 个新 Issue 被提出，但整体讨论热度集中在遗留问题的关闭与修复上，未出现新的重大功能争议。

## 2. 版本发布

**无新版本发布。** 最新版本仍然停留在 v0.1.4.post6。代码库的快速迭代和大量 PR 合并表明下一版本可能正在积极筹备中。

## 3. 项目进展

过去 24 小时内，项目通过一系列 PR 的合并与关闭，在功能修复和架构优化上取得了显著进展：

- **核心稳定性增强：** 修复了关键的重启后消息传递丢失问题（#4931），确保通道重连后仍能正确交付重启完成通知。优化了会话锁的清理机制（#4890），防止长期运行导致的内存泄漏。
- **心搏（Heartbeat）机制优化：** 针对统一会话模式下心搏目标选取失败的问题，提出了根本性修复方案（#4928）。同时，合并了另一项修复（#4915），使心搏响应评估更可配置，解决了因心搏迁移到 Cron 作业导致的回归问题。
- **CI/CD 与开发体验：** 大幅重构了 CI 流程（#4936），通过精简测试矩阵和修复非确定性测试，显著提升了测试套件的执行速度和可靠性。新增了 One-Click 部署到 Render 的支持（#4937），降低了用户的部署门槛。
- **WebUI 体验改善：** 合并了多项用户体验改进，包括高亮斜杠命令和提及（#4933）、为用户消息添加复制按钮（#4930）、以及修复文件路径预览的安全性（#4935）。

## 4. 社区热点

过去 24 小时讨论最为活跃的 Issue 和 PR 反映了用户对**基础功能的稳定性**和**跨平台兼容性**的强烈关注：

- **[Issue #1086] WhatsApp Bridge WebSocket 绑定问题 (4 👍):** 该 Issue 虽然早已关闭，但至今仍拥有最高 👍 数。它揭示了 Docker 容器化部署中的一个核心痛点：WhatsApp Bridge 将 WebSocket 绑定到 `127.0.0.1` 导致无法与其他容器互通。这表明社区对**无缝的容器化部署**和**跨服务网络配置**有持续且强烈的需求。
  链接: [Issue #1086](https://github.com/HKUDS/nanobot/issues/1086)

- **[Issue #2568] Telegram Markdown 渲染不一致:** 此问题获得 4 条评论，用户报告了从 v1.4.post5 更新到 v1.4.post6 后，Telegram 消息的 Markdown 渲染变得不稳定。这属于**用户体验的回归问题**，虽然最终被关闭，但说明了用户对消息格式化的可靠性非常敏感。
  链接: [Issue #2568](https://github.com/HKUDS/nanobot/issues/2568)

## 5. Bug 与稳定性

昨日报告的 Bug 主要集中于会话管理和模型兼容性问题，严重性不一：

- **严重 - 资源泄漏: [Issue #4787]** `Session.messages` 列表无界增长，导致长时间运行的任务（特别是统一会话）中内存占用无限增加。**目前无对应的 Fix PR。**
  链接: [Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)

- **高 - 逻辑错误: [Issue #4924]** 在启用 `unifiedSession: true` 且无其他会话时，心搏目标选取函数 `_pick_heartbeat_target_from_sessions` 会失败。**已有对应的 Fix PR (#4928)**。
  链接: [Issue #4924](https://github.com/HKUDS/nanobot/issues/4924)

- **中 - 数据泄露: [Issue #4934]** 使用 DashScope Provider 调用 Qwen 模型（如 qwen3.6-flash）时，模型的思考/推理过程内容被错误地暴露在聊天响应中。**目前无对应的 Fix PR。**
  链接: [Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)

- **低 - 编码错误: [Issue #4881]** Windows 平台下 `ExecTool` 将 PowerShell 的 UTF-16LE 输出错误地按 UTF-8 解码，导致输出包含空字符（NUL）。**该 Issue 已于昨日关闭，修复已合并。**
  链接: [Issue #4881](https://github.com/HKUDS/nanobot/issues/4881)

## 6. 功能请求与路线图信号

尽管 Issue 未开放大量新功能请求，但从合并的 PR 中我们可以窥见项目的演进方向：

- **增强的可部署性：** `feat: add one-click Deploy to Render support`（#4937）的提交是一个强烈信号，表明项目正在积极降低新用户的采用门槛，简化从代码到运行的路径。这很可能成为下一版本的核心宣传点之一。
- **企业级 OAuth 管理：** `feat(providers): surface OAuth status and expiry warnings`（#4689）的持续推进（已进入 “conflict” 阶段）表明，项目正在为更广泛的企业级应用做准备，通过增强 OAuth 令牌的可视性和预警来提升生产环境的可靠性。
- **WebUI 功能迭代：** 多项 WebUI 的优化（#4930, #4933, #4935）显示，项目正致力于将 WebUI 打造为一个可与 CLI 媲美的成熟管理界面，这符合更广泛用户群体对图形化操作的需求。

## 7. 用户反馈摘要

从昨日活跃的 Issue 和 PR 评论中，可以提炼出以下用户真实反馈：

- **痛点 - 重启后连接中断：** 用户在 #4931 相关的讨论中反映了“重启后无法连接到之前通道”的痛点。修复 PR 旨在确保重启过程的健壮性和通知的可达性，直击用户痛点。
- **使用场景 - 定时任务的静默执行：** Issue #1445 用户期望 Cron 任务在没有实质性结果时不发送通知，反映了高级用户对**精细化控制通知噪音**的典型需求，避免被无意义的“空执行”消息打扰。
- **配置痛点 - 自定义 Provider 请求丢失 Header：** Issue #2505 指出了 `custom provider` 配置中 `extraHeaders` 功能失效的问题。这影响了需要自定义认证或 API 转发的用户，表明用户对**高阶配置的完整支持**有较高要求。

## 8. 待处理积压

以下为长期未响应或存在冲突的议题，可能需要维护者特别关注：

- **[PR #4620] 添加心跳触发命令（conflict）：** 作为解决 #3437 的重要功能，该 PR 已开放两周但仍有冲突未解决，可能阻碍心搏机制的完整功能实现。
  链接: [PR #4620](https://github.com/HKUDS/nanobot/pull/4620)

- **[Issue #4787] Session 消息列表无界增长（OPEN）：** 这是一个严重的内存泄漏问题，目前尚未有对应的修复 PR。随着用户运行时间的增长，此问题会愈发突出，应优先处理。
  链接: [Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)

- **[Issue #4934] Qwen 模型暴露思考内容（OPEN）：** 昨天新开的 Bug，涉及与主流国产模型（Qwen）的兼容性，可能导致不良用户体验和数据误展示，需尽快确认和修复。
  链接: [Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 Hermes Agent (NousResearch/hermes-agent) 项目数据生成的 2026-07-15 项目动态日报。

---

## Hermes Agent 项目动态日报 (2026-07-15)

### 1. 今日速览

项目今日活动量极高，显示了强大的社区活力和维护团队的响应速度。过去 24 小时内，有 50 条 Issue 和 50 条 PR 获得更新，其中绝大多数 (37 条 Issue 和 9 条 PR) 已成功关闭或合并。这表明项目正处于密集的 Bug 修复和功能迭代周期中，项目健康度积极向好。核心开发团队正在高效地处理近期积压的 Bug 报告，并将社区贡献的修复代码合并进主分支。

### 2. 版本发布

**无新版本发布。**

### 3. 项目进展

今日项目取得了显著进展，大量关键 Bug 得到修复并合并到 `main` 分支。这些改动显著提升了项目的稳定性和跨平台兼容性。

**已合并/关闭的亮点 PR/Issue 修复：**

- **跨平台兼容性显著提升：**
  - **Windows 安装/卸载修复：** 修复了 Windows 卸载时无法删除 `hermes.cmd` 和 `hermes.exe` 包装脚本的问题 (PR #50455)。
  - **macOS 安装兼容性：** 修复了在旧版 macOS 上 Node.js 安装失败且无提示的问题 (PR #50444)。
- **核心组件稳定性增强：**
  - **MCP 子系统修复：** 修复了`Spectrum` 侧车 (sidecar) 在处理 iMessage 富链接时的崩溃问题 (Issue #50336)，以及 MCP 子进程成为僵尸进程、单个服务器故障导致整个 MCP 桥梁不稳定的问题 (Issue #50169, #50394)。这些修复对依赖 MCP 扩展功能的用户至关重要。
  - **Gateway & CLI 修复：** 解决了多个关键 Bug，包括 Discord 配置隔离问题 (Issue #50404)、WhatsApp Docker 桥接问题 (Issue #49569)、Gateway 跨会话状态泄漏 (Issue #50496)、桌面“思考”开关的 UI 与配置不一致问题 (Issue #50449)、以及失败更新导致的 Windows Gateway 启动卡死问题 (Issue #49976)。
- **Agent 功能与稳定性修复：**
  - 修复了视觉 (Vision) 回退链路因 `await` 调用同步客户端而崩溃的严重问题 (Issue #49586)。
  - 修复了因消息字典中包含 `timestamp` 字段导致在严格提供商处返回 HTTP 400 错误的问题 (Issue #49572)。
  - 修复了 LLM 回退切换时未通知用户、以及静默失败回退的问题 (Issue #50229, #50130)。
- **新功能落地：**
  - 合并了可在 xAI/Grok OAuth 提供商中启用 Cursor Composer 模型的功能 (Issue #49650)。
  - 在桌面应用中新增检测更新失败并引导用户使用终端回退方案的功能 (Issue #49606)。
  - 新增了按 Profile 调整模型 Temperature 的配置支持 (Issue #47512)。

**总结：** 项目在过去 24 小时内解决了一系列影响用户日常使用的棘手 Bug，特别是围绕 MCP、跨平台支持以及消息传递的稳定性问题，使整个项目向更健壮、更成熟的方向迈出了一大步。

### 4. 社区热点

今日社区讨论的焦点集中在 **MCP (Model Context Protocol) 子系统的稳定性** 和 **插件接口扩展** 上。

- **最受关注 Issue：** `#64182 [追踪] 插件接口扩展 — 社区创意，2026年7月`，获得 **9 条评论**，是所有 Issue 中评论最多的。该 Issue 旨在收集社区对扩展核心 Agent 插件接口的想法，并处理长期未合并的相关 PR。这反映了社区对 Agent 可扩展性有强烈需求，并希望项目能系统化地管理插件生态。

  [NousResearch/hermes-agent Issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182)

- **MCP 相关问题集群：** 多个 MCP 相关的 Bug 报告 (`#50169` 僵尸进程, `#50394` 单点故障连锁反应) 和修复 PR 获得了 2-3 条评论。这说明 MCP 作为连接外部工具的关键桥梁，其稳定性是社区目前最关心的痛点之一，相关问题的修复也受到了高度关注。

### 5. Bug 与稳定性

今日报告的 Bug 涵盖了多个方面，大部分严重问题已有修复 PR。

**P2 (高优先级) 严重程度：**

- **[已修复] MCP 僵尸进程 (Issue #50169):** MCP stdio 服务器进程在断开连接后未被回收，导致大量僵尸进程占用资源。**已有修复 PR 合入 `main`。**
  [NousResearch/hermes-agent Issue #50169](https://github.com/NousResearch/hermes-agent/issues/50169)

- **[已修复] Discord 配置隔离 Bug (Issue #50404):** 桌面应用的 Discord 配置未按 Profile 隔离，修改一个 Profile 会影响所有 Profile。**已有修复 PR 合入 `main`。**
  [NousResearch/hermes-agent Issue #50404](https://github.com/NousResearch/hermes-agent/issues/50404)

- **[已修复] Gateway 跨会话状态泄漏 (Issue #50496):** 库代码中的 `logging.basicConfig` 覆盖了根日志记录器配置，导致日志格式不一致。**已有修复 PR 合入 `main`。**
  [NousResearch/hermes-agent Issue #50496](https://github.com/NousResearch/hermes-agent/issues/50496)

- **[待修复] idle cancel 处理错误 (PR #50461):** ACP (Agent Communication Protocol) 在 session 空闲时收到取消请求，会导致下一次 prompt 被错误地标记为已中断。**已有待合并的修复 PR。**
  [NousResearch/hermes-agent PR #50461](https://github.com/NousResearch/hermes-agent/pull/50461)

**P3 (中等优先级) 严重程度：**

- **[待修复] desktop 应用后台进程被误杀 (PR #50453):** 在桌面应用中发送队列消息时点击“停止”，会错误地杀死在该 session 中运行的所有后台进程。**已有待合并的修复 PR。**
  [NousResearch/hermes-agent PR #50453](https://github.com/NousResearch/hermes-agent/pull/50453)
- **长期未修复 Issue：**
  - **`#22478` (P2, 自 2026-05-09):** `state.db` 因 FTS5 全文索引膨胀，数据库体积过大。目前仍处于打开状态，是影响存储性能的长期问题。
    [NousResearch/hermes-agent Issue #22478](https://github.com/NousResearch/hermes-agent/issues/22478)
  - **`#42674` (P2, 自 2026-06-09):** 后台进程完成通知会串扰到错误的 TUI 会话。该问题标记为 `risk-session-state`，修复难度较高，已悬挂一个多月仍未解决。
    [NousResearch/hermes-agent Issue #42674](https://github.com/NousResearch/hermes-agent/issues/42674)

### 6. 功能请求与路线图信号

社区提出的新功能请求反映出用户希望有更强的定制和控制能力。

- **Profile 级别的参数调优 (已合入 `main`):** `#47512` 要求能在配置文件中按 Profile 调整模型 Temperature，此功能已被实现并合并。这显示了路线图对个性化配置的支持。
- **对“弱”Provider 的支持 (已关闭):** `#50234` 提出了增加 `supports_tools: false` 标志，以兼容不支持函数调用的 Provider（如 Perplexity）。虽被标记为“不计划”或“重复”，但这表明社区有对接更多类型 API 的需求。
- **Gateway 上下文文件 (待合并):** PR `#50428` 提议为 Gateway 会话加载专用的上下文文件（如 `SOUL.gateway.md`），这对于定义 Gateway 行为、提供个性化 Agent 设定很有价值，有望在后续版本中落地。
- **系统化插件管理 (新追踪 Issue):** `#64182` 和 `#64231` 的提出，标志着社区和贡献者正在推动从“打补丁式的插件添加”转向“定义标准、分类管理的成熟插件生态”，这可能是路线图中的重要一环。

### 7. 用户反馈摘要

从 Issue 的讨论中可以提炼出以下用户核心痛点和使用反馈：

- **痛点：Docker 体验不佳。** 用户 `fung2222` 报告了 WhatsApp Docker 桥接存在两个阻塞性 Bug，导致 Docker 镜像无法开箱即用（Issue `#49569`）。用户 `weixshaw` 报告了飞书 (Feishu) 通道在 Docker 中因缺少 `lark-oapi` 库而静默失败（Issue `#50205`）。
- **痛点：更新与启动问题。** Windows 用户 `cowleywang` 希望桌面应用不要每次启动时都自动更新，因为 `main` 分支可能不稳定（Issue `#49611`）。用户 `BarisTheDeveloper` 反馈 Windows 桌面应用启动时间过长（Issue `#49867`）。
- **用户满意点：修复响应迅速。** 上述 Docker 和启动相关的 Bug 均在报告当天或隔天就有关闭或修复 PR，显示出维护者有很高的响应和修复能力，这对提升用户信心和满意度至关重要。

### 8. 待处理积压

以下为长期未响应或悬而未决，但可能影响项目发展的关键 Issue 或 PR：

- **存储性能问题：** [Issue #22478](https://github.com/NousResearch/hermes-agent/issues/22478) - **`state.db` FTS 索引膨胀** (P2, 已开2个多月)。数据库体积问题是所有中重度用户的潜在风险，应纳入性能优化路线图。
- **状态泄漏与稳定性问题：** [Issue #42674](https://github.com/NousResearch/hermes-agent/issues/42674) - **后台进程通知串扰** (P2, 已开1个多月)。该 Bug 标记有 `risk-session-state`，修复可能较为复杂，但其对用户体验的破坏性使得它需要持续被关注。类似地，[PR #50134](https://github.com/NousResearch/hermes-agent/pull/50134)关于 Honcho 内存回写 session key 不匹配的修复也标记了类似风险，悬而未决。
- **新兴协议支持：** [PR #50461](https://github.com/NousResearch/hermes-agent/pull/50461) - **ACP idle cancel 处理逻辑** (P2, 3周前开启)。该 PR 对于完善 ACP 协议支持至关重要，以确保 Agent 之间通信的可靠性，应优先审阅和合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 PicoClaw 项目数据生成的 2026 年 7 月 15 日项目动态日报。

---

# PicoClaw 项目日报 | 2026-07-15

## 1. 今日速览

今日 PicoClaw 项目保持较高的活跃度。社区贡献持续涌入，**9 个 Pull Request 中有 5 个被合并/关闭**，表明项目维护者正在积极推进代码合并与问题修复。新提交的 Issue 数量适中（3 个），其中包含一个关键的 Bug 修复和一个新功能请求。项目当前无新版本发布，但多项来自社区的改进（特别是针对 AWS Bedrock 和 Anthropic 的缓存优化）已合并入主分支，为下一版本的发布奠定了良好基础。

## 2. 版本发布

无。

## 3. 项目进展

今日共有 **5 个 PR 被合并/关闭**，项目在多个方面取得实质性进展：

- **平台兼容性与性能提升：** [#2982](https://github.com/sipeed/picoclaw/pull/2982) 已合并。该修复解决了在 AWS Bedrock 上调用 `Claude Opus 4.8` 模型时，因废弃 `temperature` 参数导致调用失败的兼容性问题，提升了项目在主流云平台上的稳定性。
- **核心功能增强：** [#3156](https://github.com/sipeed/picoclaw/pull/3156) 已合并。此 PR 新增了在 Pico 通道上每条对话回合的 Token 用量追踪功能（input/output/total），将赋能下游应用进行更精细的成本分析和监控，这是社区长期期待的一项功能。
- **稳定性修复：** [#2957](https://github.com/sipeed/picoclaw/pull/2957) 已合并。修复了流式传输过程中，`tool_calls` 消息被错误过滤的关键问题，确保了工具调用在流式场景下的正确传递，增强了项目在复杂工作流中的稳定性。
- **配置安全性与 Schema 修复：** [#2270](https://github.com/sipeed/picoclaw/pull/2270) 和 [#2128](https://github.com/sipeed/picoclaw/pull/2128) 已合并。前者修复了处理 `SecureString` 配置时可能引发的 `panic`，增强了配置解析的健壮性；后者修复了工具参数 JSON Schema 的验证问题，确保与严格模式的 OpenAI 兼容 API（如 LM Studio）交互时不出错。

## 4. 社区热点

今日最受关注的话题是 **“替换 libolm 为 vodozemac”** 的功能请求。

- **相关 Issue:** [#3088](https://github.com/sipeed/picoclaw/pull/3088) - 该 Issue 获得 2 个赞和 8 条评论，被标记为 `help wanted` 和 `priority: high`。社区贡献者在此集中讨论将项目从已废弃且不安全的 `libolm` 密码学库迁移到官方推荐替代品 `vodozemac` 的必要性及具体实现方案。这反映了社区对于项目**安全基线**和**长期维护性**的高度关注，并展现了社区自发的技术升级驱动力。

## 5. Bug 与稳定性

今日报告的 Bug 如下，暂无对应的 Fix PR：

- **[严重] 无 fallback 模型时的速率限制失效：** [#3232](https://github.com/sipeed/picoclaw/pull/3232) 报告了当用户仅配置 `agents.defaults.model_name` 而未设置备用模型时，针对该模型的速率限制（rpm）配置完全不生效。该问题会导致用户在高频请求下容易被厂商限流或产生额外费用，影响核心功能体验。
- **[中] 钉钉（DingTalk）聊天列表预览内容异常：** [#3255](https://github.com/sipeed/picoclaw/pull/3255) 报告了在钉钉渠道上，会话列表预览始终显示固定的 “PicoClaw” 文本，而非实际的回复内容。这属于用户界面显示问题，虽不影响对话功能，但会带来较差的用户体验。
- **[低] 速率限制相关的 Issue:** [#3232](https://github.com/sipeed/picoclaw/pull/3232) 被标记为 `stale`，可能由于活跃度不够即将被自动归档。提醒维护者关注此关键 Bug，避免遗漏。

## 6. 功能请求与路线图信号

- **核心安全升级请求：** [#3088](https://github.com/sipeed/picoclaw/pull/3088) 提出的“用 `vodozemac` 替换 `libolm`” 是当前最重要的功能请求。鉴于其被标记为高优先级且有社区贡献者愿意参与，该功能很可能被纳入 **下一版本** 的规划中。
- **高级缓存和 API 兼容性（PR）：** 虽然今日无新功能请求提交，但 [#3163](https://github.com/sipeed/picoclaw/pull/3163)（AWS Bedrock 提示缓存）和 [#3228](https://github.com/sipeed/picoclaw/pull/3228)（Anthropic 系统消息缓存）这两个**开放的 PR** 正在推动对主流 LLM 提供商高级 API 特性的支持。它们旨在显著降低推理成本和延迟，是与平台功能演进高度一致的方向，有极大可能性被合并。
- **飞书（Feishu）媒体类型增强：** [#3256](https://github.com/sipeed/picoclaw/pull/3256) 是一个新提交的 PR，旨在让飞书通道原生支持发送音频和视频，以替代当前的“文件下载”方式。这表明社区正在持续完善对国内 IM 平台的支持细节，是提升用户日常使用体验的积极信号。

## 7. 用户反馈摘要

- **对安全性的强烈诉求：** [#3088](https://github.com/sipeed/picoclaw/pull/3088) 的评论反映出，部分用户对依赖未维护的 `libolm` 库感到担忧，明确表达了希望项目采用官方维护的 `vodozemac` 库的强烈愿望，以保障通信安全。
- **对配置体验的困惑：** [#3232](https://github.com/sipeed/picoclaw/pull/3232) 的作者反映，速率限制配置在特定场景下不工作，这说明当前配置系统的逻辑可能存在隐式依赖或文档不够清晰，导致用户产生混淆。
- **对渠道集成完整性的期待：** [#3255](https://github.com/sipeed/picoclaw/pull/3255) 的提出者指出了钉钉渠道的一个界面瑕疵，这反映出用户对 IM 渠道集成提出了更高的要求，期望获得与原生应用一致、无缝的体验。

## 8. 待处理积压

- **高优功能请求待决策：** [#3088](https://github.com/sipeed/picoclaw/pull/3088) 作为一个被标注为 `high priority` 且已有具体方案的功能请求，自 6 月 9 日创建以来已超过一个月。建议项目维护者尽快给出官方回应、指派负责人或合并相关 PR。
- **多个 PR 进入 Stale 状态：** [#3233](https://github.com/sipeed/picoclaw/pull/3233)（修复向后兼容）和 [#3163](https://github.com/sipeed/picoclaw/pull/3163)（Bedrock 缓存）均为重要功能/修复 PR，但目前已被标记为 `stale`。为避免有价值的贡献因活跃度不足而被系统关闭，建议维护者主动介入审阅与讨论。
- **长期未合并的历史 PR：** 本次报告中，有多条数周甚至数月前创建的 PR 被合并/关闭。虽然及时处理是好事，但也反映出项目可能存在 PR 积压的问题。建议维护团队建立更高效的 PR 审阅和合并机制。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-15

## 1. 今日速览

今日 NanoClaw 项目在 Issue 层面保持静默，无新问题报告，但 Pull Request 活动异常活跃，共有 28 条 PR 产生更新，显示出项目开发和维护节奏非常紧凑。其中 9 个 PR 已成功合并或关闭，涉及关键的 Bug 修复、安全加固以及文档改进。整体来看，项目处于积极的高频迭代阶段，尤其是社区贡献者（sturdy4days、OmriBenShoham 等）在稳定性和新功能集成方面贡献突出。累计待合并 PR 增加至 19 个，合并压力有所上升。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有 9 个 Pull Request 被合并/关闭，标志着项目在多个维度取得了实质性进展。以下为重点合并内容：

- **核心流程修复**：PR #2728 修复了一个关键的配对流程 Bug，当通过 `--intent wire-to` 与 Telegram 配对时，系统未能创建必要的 `messaging_group_agents` 数据库行，导致容器间消息无法正确路由。该修复保证了意图驱动的跨容器通信的完整性。
- **开发者体验改进**：
    - PR #2753 修复了当环境缺少 `pnpm` 命令时，`pre-commit` 钩子脚本崩溃的问题，提升了开发环境的稳健性。
    - PR #2730 修复了通过 `launchd/systemd` 作为系统服务运行时，`.env` 文件中的 `NANOCLAW_*` 环境变量（如 `NANOCLAW_EGRESS_LOCKDOWN`）无法被正确加载到 `process.env` 中的问题，确保安全功能在守护进程模式下生效。
- **技能与文档完善**：
    - PR #2729 修正了 `add-telegram` 技能文档中状态码名称与实际 `setup` 步骤输出不一致的问题，降低了用户操作时的困惑。
    - PR #3043 将 Telegram 深度链接从 `t.me` 切换为 `telegram.me`，可能解决了特定平台的兼容性问题。
- **新功能集成**：PR #3042 合并，将 **Dial** 添加为新的频道选项，涵盖了频道选择器、安装向导、技能和文档，意味着项目在非 Slack/Discord/Telegram 的即时通讯渠道上迈出了重要一步。

这些合并操作表明项目正在快速修复上线后的关键 Bug，同时积极扩展集成生态，整体功能成熟度向前迈进了一大步。

## 4. 社区热点

今日没有评论数量特别突出的单一 Issue 或 PR，但观察 PR 的密度和作者可以洞察社区热点：

- **核心贡献者高度活跃**：开发者 `sturdy4days` 是今日贡献的主力，其提交的多个 PR（如 #2800, #2750, #2801, #2973）覆盖了 **安全**、**轮询稳定性** 和 **依赖管理** 等关键领域。他的工作代表了社区对项目健壮性（尤其是在生产环境或对抗性环境下）的深切关注。
- **新渠道集成受关注**：来自 `OmriBenShoham` 的 PR #3050（仍处于待合并状态）和已合并的 #3042，专注于新增 **Dial** 频道。这表明社区对扩展 NanoClaw 的通信平台覆盖范围有明确且积极的行动力。

**分析**：社区目前的核心诉求从“如何运行”转向了“如何稳定运行”和“如何更广泛地连接”。前者体现在对安全漏洞、运行崩溃的修复上，后者体现在对 Dial 等新渠道的集成上。

## 5. Bug 与稳定性

今日无新 Issue 报告，但合并和待处理的 PR 揭示了多个已知且已修复或正在修复的严重 Bug：

- **【严重】配对逻辑缺陷**：PR #2728（已合并）修复了 `wire-to` 意图配对时未创建数据库行的 Bug，该问题会导致跨容器通信完全失败。
- **【严重】环境变量未加载**：PR #2730（已合并）修复了 `launchd/systemd` 服务环境下安全标志未生效的问题，可能导致安全策略形同虚设。
- **【重要】轮询消息丢失**：PR #2750（待合并）修复了容器被 `SIGKILL` 杀死后，`outbound.db` 日志文件损坏以及轮询竞争导致消息延迟或丢失的问题。
- **【重要】消息正文截断**：PR #3048（待合并）修复了 `poll-loop` 在解析 `<message>` 块时，如果内容中包含被引用的 `</message>` 标签，会导致消息体被错误截断的 Bug。
- **【中等】消息传递延迟**：PR #3045（待合并）修复了容器退出时，`outbound.db` 中的消息需要等待最长 60 秒才能被下一轮清扫轮询（sweep poll）拾取的延迟问题。
- **【中等】附件下载失败**：PR #3044（待合并）修复了 Telegram 语音/音频等附件由于缺少 `fetchData` 方法而无法被代理程序接收和分析的问题（关联 #2888）。

## 6. 功能请求与路线图信号

- **新渠道：Dial**：`OmriBenShoham` 提交的 PR #3050（待合并）和已合并的 #3042 是当前最明确的新功能信号。这表明 **Dial** 已被社区验证并提交代码，很可能被纳入下一正式版本。
- **安全加固**：PR #2800（待合并）提出在生成容器前验证组文件夹并禁止隐式镜像拉取，这可以被视为对运行时安全性的强化需求，如果被采纳，将是一个重要的安全模型改进。
- **审批流程统一**：PR #3040（待合并，`core-team` 标签）提出将不同的审批流程统一到一个生命周期合约下。这显示了内部团队对提升系统架构一致性和可维护性的前瞻性思考。

## 7. 用户反馈摘要

虽然无直接的 Issue 评论，但从 PR 的描述中我们可以提炼出用户痛点：

- **安装与配置路径的摩擦**：PR #3047 的摘要明确指出用户在安装 `Slack` 技能时遇到的痛点：凭证配置步骤顺序错误，导致后续的 Webhook URL 验证失败。这反映了用户在遵循官方文档进行首次配置时，容易因步骤逻辑错误而碰壁。
- **Telegram 配对困惑**：PR #2729 的改进表明，用户在跟随 `add-telegram` 文档进行配对时，文档中描述的状态码与实际程序输出的不一致，导致用户迷惑。这说明清晰的、与代码完全同步的文档对于用户体验至关重要。
- **跨平台兼容性需求**：PR #3043 将深链接由 `t.me` 改为 `telegram.me`，暗示了部分用户或平台在访问 `t.me` 时存在问题。

## 8. 待处理积压

目前有 **19 个 PR 等待合并**，其中以下几个值得维护者特别关注：

- **PR #2800** `[OPEN] fix(security): validate group folders and forbid implicit image pulls` - 一个重要的安全 PR，从 06-17 起已开放近一个月。该 PR 解决了容器生成过程中的安全风险，关乎整体安全性，建议优先审查。
- **PR #2750** `[OPEN] fix: recover stale outbound.db journals after container kills; classify hot-journal poll races` - 修复了两个与数据库轮询相关的关键故障模式，影响消息传递的可靠性，等待时间较长。
- **PR #2899** `[OPEN] fix(discord): strip newline suffix from custom_id before parsing Gateway interactions` - 修复了 Discord 审批按钮点击后总是被拒绝的严重功能 Bug，从 07-01 开放至今，影响 Discord 渠道核心功能，建议尽快处理。

**动态总结**：当前项目健康度较高，社区贡献活跃，但大量高质量的 PR 堆积等待审查合并，可能导致修复延迟和社区贡献者积极性受挫。建议维护团队加快对关键 Bug 修复和安全增强相关 PR 的审查速度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目 GitHub 数据生成的 2026-07-15 项目动态日报。

---

# IronClaw 项目动态日报 - 2026-07-15

## 1. 今日速览

项目在过去24小时保持极高活跃度，共处理了49条Issue和50个PR，开发节奏强劲。核心开发团队在持续推进 **Reborn 架构**的统一扩展运行时（Extension Runtime）和频道生命周期模型，同时针对近期 bug-bash 中发现的大量 **Slack 集成** 和 **消息排序** 等 P2 级严重问题进行了集中修复。CI 信号与流程改进被提升为正式议题，显示出项目正在从功能开发转向稳定性与工程效率的优化阶段。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

今日有多项关键 PR 被合并或推进，项目在以下方面取得了实质性进展：

- **统一扩展运行时：** 多路并行的“Train B”与“Train A”整合工作已进入收尾阶段。PR #6090 （[link](https://github.com/nearai/ironclaw/pull/6090)） 合并了 P0–P7b 阶段的全部变更，PR #6061 （[link](https://github.com/nearai/ironclaw/pull/6061)） 则是对 Train A 的最终汇总。这表明新架构的核心引擎已趋近稳定。
- **频道生命周期修复与测试：** 针对 Slack 等频道连接/断开/重连的顽疾，团队部署了修复与防御性测试。PR #6095 （[link](https://github.com/nearai/ironclaw/pull/6095)） 修复了凭证丢失后错误提示不明确的问题。PR #6110 （[link](https://github.com/nearai/ironclaw/pull/6110)） 还新增了针对 Slack 完整生命周期（安装-激活-连接-使用-断开-重连）的集成状态机测试，以杜绝回归。
- **用户端 Bug 修复：** 对用户感知强烈的 Bug 进行了修复。PR #6096 （[link](https://github.com/nearai/ironclaw/pull/6096)） 修复了多任务消息顺序错乱的问题。PR #5896 （[link](https://github.com/nearai/ironclaw/pull/5896)） 修复了 WebUI 内存浏览的权限隔离问题。
- **资源管理与性能：** PR #6089 （[link](https://github.com/nearai/ironclaw/pull/6089)） 修复了 libSQL 竞争导致的 Resource Governor 挂起问题，提升了后端稳定性。PR #6097 （[link](https://github.com/nearai/ironclaw/pull/6097)） 小幅提升了结果读取的预览上限，优化了性能。

## 4. 社区热点

讨论最活跃的 Issue 反映了用户对 **系统状态一致性和错误提示真实性** 的强烈诉求：

- **#5948** （[link](https://github.com/nearai/ironclaw/issues/5948)）：**助手误报 GitHub 扩展已激活。** 助手报告说扩展已“激活”，但用户界面显示它只是“已安装”，仍需点击“激活”按钮。这种前端与后端、系统与实际状态的不一致，使用户感到困惑，是该 Issue 获得最多评论的核心原因。
- **#5889** （[link](https://github.com/nearai/ironclaw/issues/5889)）：**“加载更早消息”按钮无效。** 一个看似简单但影响用户体验的功能“加载更早消息”按钮完全无响应，引发了社区对活动面板可靠性的担忧。
- **#6109** （[link](https://github.com/nearai/ironclaw/issues/6109)） 和 **#6099** （[link](https://github.com/nearai/ironclaw/issues/6099)）：**API 静默失败与错误误导。** 用户越来越不能容忍 API 调用在特定模型（如 Bedrock）下**静默忽略参数**或**假成功**（如对一个不可达的端点返回 `ok: true`）。这反映出用户对 API 的“可观测性”和“契约精神”要求极高。

## 5. Bug 与稳定性

今日报告的 Bug 集中在 **UI/UX 状态不一致** 和 **后端进程/数据竞争** 上，按严重程度排列如下：

**高严重性：**
- **[#6092]** （[link](https://github.com/nearai/ironclaw/issues/6092)） Slack 重连后对话陷入无限“思考中”状态。 (P2, 无fix PR)
- **[#6047]** （[link](https://github.com/nearai/ironclaw/issues/6047)） 任务消息显示顺序错乱。（已有 fix PR #6096）
- **[#6091]** （[link](https://github.com/nearai/ironclaw/issues/6091)） Slack 断开后系统报告冲突的连接状态。（待修复）
- **[#6087]** （[link](https://github.com/nearai/ironclaw/issues/6087)） 扩展目录加载失败时显示为空列表，误导用户。（待修复）

**中严重性：**
- [#6100] （[link](https://github.com/nearai/ironclaw/issues/6100)） 上下文窗口缓存可能因并发写入而重新播种旧的快照。（待修复）
- [#6101] （[link](https://github.com/nearai/ironclaw/issues/6101)） 需要将线程内消息写入序列化扩展到助手/工具结果写入。（待修复）
- [#6102] （[link](https://github.com/nearai/ironclaw/issues/6102)） 确保 `FilesystemSessionThreadService` 不会在进程内被重建。（待修复）
- [#5884] （[link](https://github.com/nearai/ironclaw/issues/5884)） 例行任务在外部令牌撤销后丢失凭证。（已有 fix PR #6095 部分解决）

**低严重性/UI问题：**
- [#6050] （[link](https://github.com/nearai/ironclaw/issues/6050)） 对话历史加载失败但聊天成功，错误横幅有误导性。（待修复）

## 6. 功能请求与路线图信号

今日功能请求 (Enhancement) 数量显著，且多由核心开发者发起，指向项目下一阶段的工程改进方向：

- **测试与CI基础设施：**
    - [#6105] （[link](https://github.com/nearai/ironclaw/issues/6105)） 为频道生命周期（如 Slack）建立状态机测试，并放入 CI 金丝雀监测。（已有 PR #6110）
    - [#6103] （[link](https://github.com/nearai/ironclaw/issues/6103)） CI 信号恢复：引入 nextest 重试机制、可视化隔离和死工作流看门狗。
    - [#6106] （[link](https://github.com/nearai/ironclaw/issues/6106)） 在发布/预发布前强制通过“启动冒烟”和“升级路径”金丝雀测试。
- **开发流程优化：**
    - [#6104] （[link](https://github.com/nearai/ironclaw/issues/6104)） 对每日故障分类的候选问题实施“24小时修复或放弃”的 SLA。
- **核心能力增强：**
    - [#6107] （[link](https://github.com/nearai/ironclaw/issues/6107)） 建立模型输入兼容性语料库，在 CI 中重放真实工具调用，以杜绝“过于严格”的验证错误回归。
    - [#6108] （[link](https://github.com/nearai/ironclaw/issues/6108)） 提升错误保真度：禁止通用失败消息，确保状态码真实反映操作结果。

这些请求显示，项目在快速迭代新功能后，正寻求通过**工程流程化、测试自动化**来构建更稳固的开发基础。

## 7. 用户反馈摘要

从今日的 Issues 评论和描述中，可以提炼出用户的核心体验与痛点：

- **最痛心：** **Slack 集成体验是最大的痛点。** 用户报告了从断开（#6091）到重连（#6092）再到例行任务（#5884）的全面问题，系统状态在不同页面间矛盾，且错误提示（如“检查WebUI”）模糊不清，让用户感到极度困惑和无助。
- **一致性差：** **系统状态报告不一致**是第二大不满。助手声称已激活但 UI 显示未激活（#5948），UI 显示任务成功但后端失败（#6108），API 返回 `ok: true` 但实际端点不可达（#6099）。用户期望的是一个可靠的、真实反映系统状态的界面。
- **性能与卡顿：** 长时间多工具执行后出现“模型提供者不可用”的错误（#5945），以及对话历史加载失败（#6050）等问题，影响了高级用户的深度工作流体验。
- **正向反馈：** 开发团队对 bug 的响应速度积极，例如 #6047 的排序问题已经有了对应的 fix PR，社区对此类快速修复抱有期待。

## 8. 待处理积压

以下 Issue 和 PR 已存在一段时间且状态重要，但尚未获得最终解决方案，建议维护者优先关注：

- **[#5884]** （[link](https://github.com/nearai/ironclaw/issues/5884)）：**[P2] 例行任务丢失凭证。** 这是一个严重阻碍自动化流程运行的问题，尽管 PR #6095 做了部分修复，但问题描述表明根本原因可能较深，且用户已等待近一周，需加速确认最终方案。
- **[#5598]** （[link](https://github.com/nearai/ironclaw/pull/5598)）：**Release PR。** 该 PR 创建了近两周，用于发布包含 `ironclaw_common` 和 `ironclaw_skills` 重大变更的新版。尽管 API 变动需要谨慎，但长期悬而未决会阻碍下游依赖使用，建议尽快合并发布。
- **[#5970]** （[link](https://github.com/nearai/ironclaw/pull/5970)）：**MCP 注册框架。** 这是一个基础性的架构变更，虽然声明“对用户不可见”，但作为后续功能的重要基础骨架，长期处于开放状态可能表示存在设计上的分歧或阻塞，需评估其状态并推动决策。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，以下是为 LobsterAI 项目生成的 2026-07-15 项目动态日报。

---

# LobsterAI 项目动态日报 2026-07-15

**报告周期**: 2026-07-14 至 2026-07-15

## 今日速览

过去24小时内，LobsterAI项目处于“清仓日”状态，无新功能发布和新的活跃讨论。项目累计关闭了4个长期存在的Issues和合并了3个Pull Requests，主要集中在Bug修复和代码回迁。项目无新版本发布，整体活跃度中等偏下，但社区维护者在积极处理积压任务，体现了对稳定性和代码质量的重视。

## 版本发布

无新版本发布。

## 项目进展

今日合并的 Pull Requests 主要聚焦于两个关键领域的修复：**OpenClaw 核心引擎** 和 **协作用户界面**。

- **OpenClaw 核心引擎稳定性提升**: 项目合并了两个针对 `OpenClaw v2026.6.1` 运行时的修复补丁。这些修复主要解决了agent（智能体）在运行工具过程中因异常或手动中止后，未能正确终止循环的关键问题。这确保了agent在遇到致命错误时能安全停止，同时保留了正常的插件和并行工具行为，提升了系统的鲁棒性。
    - PR [#2331](https://github.com/netease-youdao/LobsterAI/pull/2331): 终止关键工具循环
    - PR [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330): 在中止工具后停止循环

- **协作用户体验优化**: 修复了在 [cowork] 模式下，流式输出时自动滚动与用户手动滚动行为冲突导致页面跳转的问题。通过尊重用户的滚动操作并取消未决的自动滚动，提升了阅读长对话时的交互流畅度。
    - PR [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329): 防止对话滚动跳转

## 社区热点

今日无新创建的活跃Issue或PR。所有更新的Issue均为旧Issue被关闭，评论数较少，无激烈讨论。

然而，从这些关闭的 Issue 中可以观察到，社区用户对**多语言支持**、**会话分享**和**邮件配置**等高频功能的稳定性和易用性有较高期待。虽然这些 Issue 已关闭，但它们所反映的用户痛点值得维护者关注。

## Bug 与稳定性

今日共关闭4个历史Bug报告，严重程度均为中等，且均已附带修复方案或标记为“stale”。

| Issue ID | 严重程度 | Bug 简述 | 是否有修 |
| :--- | :--- | :--- | :--- |
| [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | **中等** | 语言切为英文时，选项中中文仍显示为中文 | 已关闭 |
| [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | **中等** | 长对话分享时，生成截图内容不全 | 已关闭 |
| [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | **中等** | 邮箱配置测试连通性按钮无响应（功能阻塞） | 已关闭 |
| [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | **中等** | 定时任务更新无响应（偶现） | 已关闭 |

这些Bug从创建到关闭间隔约3个月，建议项目团队在未来版本中加强对这些功能的自动化测试，防止回归。

## 功能请求与路线图信号

今日无新功能请求。从合并的PR来看，项目的近期重点在于修复 **OpenClaw 引擎的核心逻辑** 和改善 **协作模式下的用户交互体验**。这表明项目在保持Agent框架稳定性的同时，也在持续打磨产品细节。

## 用户反馈摘要

综合今日关闭的Issue，用户反馈主要集中在以下痛点：

- **UI/UX 不一致**: 在多语言环境下，下拉菜单的显示项未能正确跟随语言切换，造成了用户困惑。
- **功能可用性受损**: 邮箱配置测试按钮无响应，导致用户无法验证配置是否正确，这是一个流程阻断问题。
- **功能完整性不足**: 会话分享长截图内容不全，使得分享能力大打折扣，影响了用户将对话内容存档或分享的需求。
- **稳定性问题**: 定时任务编辑后更新失败（偶现），影响了依赖自动化任务的用户工作流。

## 待处理积压

根据数据，在过去24小时内没有新增积压的未响应 Issue 或 PR。所有更新均已完成关闭或合并操作。然而，建议维护者留意之前提到的 #1386 (长图不全) 和 #1388 (邮箱测试无响应) 这类功能的后续测试，确保修复在新版本中彻底生效，避免用户再次反馈。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 Moltis 项目在 2026-07-14 至 2026-07-15 期间的 GitHub 数据，为您呈上项目动态日报。

---

### **Moltis 项目动态日报 | 2026-07-15**

---

#### **1. 今日速览**

今日项目活跃度较高，主要体现在 **Pull Request (PR) 的密集合并**上，24小时内共有8个PR被合并/关闭，展示了项目维护者正在积极清理积压并推进稳定性修复。核心进展集中在**MCP OAuth 兼容性修复、浏览器工具对本地小模型的兼容性增强、以及 GPT-5.6 模型支持**。同时，社区对本地语音识别引擎（FunASR/SenseVoice）的集成讨论持续深入。项目整体状态健康，开发和修复节奏良好。

#### **2. 版本发布**

- **版本：`20260714.11`** (发布时间: 2026-07-14)
  - **链接**: `moltis-org/moltis Release 20260714.11`
  - **摘要**: 该版本为一个日常迭代版本，无详细变更日志。从合并的PR来看，此版本很可能包含了**GPT-5.6 模型支持 (PR #1146)**、**CalDAV 解析 panic 修复 (PR #1145)** 以及**依赖项更新**。无明确的破坏性变更或迁移说明。

#### **3. 项目进展**

今日项目在功能和稳定性上均有显著推进，核心进展如下：

- **新增模型支持**: **PR #1146 ([CLOSED] Add GPT-5.6 model support)** 被合并。该项目正式支持 OpenAI 的 GPT-5.6 系列模型（Sol, Terra, Luna），并更新了相应的上下文窗口限制和配置示例。这确保了 Moltis 能紧跟最新的 AI 模型能力。
  - **链接**: `moltis-org/moltis PR #1146`
- **核心 Bug 修复**:
  - **MCP OAuth 兼容性**: **PR #1120 ([CLOSED] fix(mcp): use direct fetch for resource_metadata URL...)** 已被合并，修复了与 Notion、Linear 等 MCP 服务器 OAuth 授权失败 (`invalid_target`) 的关键问题。这直接提升了与主流第三方服务的集成能力。
    - **链接**: `moltis-org/moltis PR #1120`
  - **浏览器工具的鲁棒性**: **PR #1098 ([CLOSED] fix(browser): tolerate null optional params...)** 和 **PR #1136 ([CLOSED] fix(agents): coerce stringified scalar tool args...)** 被合并。这两个 PR 专门增强了 Moltis 对 Gemma 4、oMLX 等本地小模型行为的兼容性，使其能正确处理 `null` 值参数和字符串化标量参数，用户体验显著提升。
    - **链接**: `moltis-org/moltis PR #1098`
    - **链接**: `moltis-org/moltis PR #1136`
  - **系统稳定性**: **PR #1145 ([CLOSED] fix(caldav): avoid panic on non-ASCII datetime...)** 和 **PR #1139 ([CLOSED] fix(gateway): don't force-enable matrix-sdk...)** 被合并，修复了 CalDAV 日期解析导致的程序崩溃 (`panic`) 和 Gateway 构建时的依赖问题，提升了系统的稳定性。
    - **链接**: `moltis-org/moltis PR #1145`
    - **链接**: `moltis-org/moltis PR #1139`

#### **4. 社区热点**

今日社区讨论的焦点集中在 **MCP OAuth 问题**和**本地 STT 引擎集成**两个方向。

- **热点 Issue: #1102 [Feature: Add FunASR/SenseVoice as local STT engine]**
  - **链接**: `moltis-org/moltis Issue #1102`
  - **分析**: 虽然仅有1条新评论，但该评论由原提出者 `LauraGPT` 发布，进行了 **2026-07-14 的许可证和能力澄清**。这显示了社区对该功能的高度关注和负责的态度，旨在推动项目方采纳此方案。这反映了用户对离线、本地语音识别能力的强烈需求，以绕开对云服务商的依赖。

- **热点 Issue/PR: #1119 / #1120 [MCP OAuth fails with `invalid_target`]**
  - **链接**: `moltis-org/moltis Issue #1119`
  - **链接**: `moltis-org/moltis PR #1120`
  - **分析**: 该 Bug 报告和其对应的修复 PR 在当天被迅速关闭。这体现了开发团队对关键集成问题的快速响应能力。社区的诉求很明确：确保 Moltis 能与业界主流工具（如 Notion, Linear）无缝对接。

#### **5. Bug 与稳定性**

- **严重 (已修复)**:
  - **MCP OAuth 登录失败** (#1119): 与使用 `resource_metadata` 参数的远程MCP服务器（如Notion, Linear）集成时，OAuth授权流程失败。**已通过 PR #1120 修复并合并。**
    - **链接**: `moltis-org/moltis Issue #1119`
  - **CalDAV 日期解析崩溃** (#1145): 当从远程 CalDAV 服务器获取非 ASCII 日期时间值时，程序会 `panic`。**已通过 PR #1145 修复并合并。**
    - **链接**: `moltis-org/moltis Issue #1145` (关联PR)

- **中等 (待处理)**:
  - **“main” Session 无法删除/归档** (#1132): 用户报告无法删除或归档默认的 “main” 聊天会话。这是一个与核心数据管理相关的用户体验问题，目前处于开放状态，尚无关联的修复 PR。
    - **链接**: `moltis-org/moltis Issue #1132`

#### **6. 功能请求与路线图信号**

- **高可能性纳入**: 从今日合并的 PR 来看，**对本地小模型的兼容性增强** 是当前开发的明确重点（如 PR #1098, #1136）。此外，**GPT-5.6 模型支持** 的快速跟进也表明项目紧跟前沿模型的策略。
- **潜在方向 (待定)**:
  - **本地 STT 集成** (#1102): 社区对集成 FunASR/SenseVoice 等本地语音转文字引擎的呼声很高。`LauraGPT` 用户的详细评论提供了解锁该功能的关键信息。此请求很可能会被纳入未来的路线图讨论。
    - **链接**: `moltis-org/moltis Issue #1102`
  - **Context Command 支持** (#1124): 一个为聊天轮次添加动态上下文命令的 PR，仍在开放状态。该功能允许部署时自动注入运行时上下文，对于高级用户和特定部署场景非常有价值。
    - **链接**: `moltis-org/moltis PR #1124`
  - **浏览器自动截图** (#1135): 一个可选的、在每次浏览器操作后自动截图的 PR。这为 Chat 客户端提供了可视化步骤监控能力，若被采纳将极大提升浏览器工具的用户体验。
    - **链接**: `moltis-org/moltis PR #1135`

#### **7. 用户反馈摘要**

- **痛点与需求**:
  - **Session 管理** (Issue #1132): 用户 `vvuk` 遇到了无法删除 “main” 会话的问题，抱怨影响了其工作流。这表明用户期望对聊天记录有更高的自主管理权。
  - **本地推理的兼容性** (PR #1098, #1136): 开发者 `resumeparseeval` 连续提交了两个 PR，旨在修复本地小模型（如Gemma 4）的兼容性。这背后的用户痛点是：开源社区广泛使用的本地模型与 Moltis 的交互存在障碍，导致功能（如浏览器调用）不可用。
  - **对集成的渴望** (Issue #1102): `LauraGPT` 用户不仅提出了功能请求，还主动贡献了关于 FunASR/SenseVoice 许可证和能力的详细说明，显示用户愿意深度参与，推动项目本地化能力建设。
- **满意之处**: 从 **MCP OAuth 问题** (#1119) 被迅速定位并修复来看，用户对项目维护者处理关键外部集成问题的效率和专业性应感到满意。

#### **8. 待处理积压**

- **功能请求 (长时间开放)**:
  - **Issue #1102: Add FunASR/SenseVoice as local STT engine** (开放 41 天)
    - **链接**: `moltis-org/moltis Issue #1102`
    - **提醒**: 已有社区成员提供了关键的技术和许可澄清，建议维护者评估其优先级并给予回应，以保持社区贡献的积极性。
- **待合并的 PR**:
  - **PR #1093: Add channel activity log visibility settings** (开放 42 天)
    - **链接**: `moltis-org/moltis PR #1093`
    - **提醒**: 这是一个较长时间未合并的功能性 PR，涉及频道活动日志的可见性设置。如果此功能在路线图中，应给予审核；如果不考虑，建议关闭并反馈理由，避免维护者与贡献者之间的误解。
  - **PR #1124: Add context command support for chat turns** (开放 30 天)
    - **链接**: `moltis-org/moltis PR #1124`
    - **提醒**: 与 PR #1093 情况类似，长期开放可能消耗贡献者的热情，建议项目方给出明确的合并计划或修改意见。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，遵照您的指示，我将以 AI 智能体与个人 AI 助手领域开源项目分析师的身份，为您生成这份 CoPaw 项目动态日报。

---

## CoPaw 项目动态日报 | 2026-07-15

### 1. 今日速览

过去24小时，CoPaw 项目社区异常活跃，共产生 100 条 Issue 和 PR 更新（各50条），并发布了 v2.0.0.post2 补丁版本。社区焦点集中在 **v2.0.0 大版本更新带来的稳定性与兼容性问题**，尤其是沙箱系统（Windows）、上下文压缩（DeepSeek模型）、记忆管理（自动记忆和搜索循环）等核心模块出现了大量 Bug 报告。项目维护团队响应迅速，已关闭了大部分上报的 Issue（35/50），并合并/关闭了超过半数（26/50）的 PR，显示出对用户反馈的积极处理态度。总体而言，项目处于 **高活跃度、高强度修复期**，社区反馈的热度与项目迭代的速度匹配，项目健康度呈复苏态势。

### 2. 版本发布

**版本号**: `v2.0.0.post2`
**链接**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2

**更新内容**:
此版本为小版本补丁，主要聚焦于安全性和核心功能修复：
- **安全增强**: 引入了更敏感的文件检测机制，并允许全局读取，提升了对文件操作的安全性控制。
- **回归测试**: 进行了包含运行时、安全性和安装流程的回归测试，旨在确保补丁不会引入新的稳定性问题。

**破坏性变更与迁移注意事项**:
作为微小的 `.post2` 版本，预期无破坏性变更。但建议用户升级后，重新检查其沙箱和工具权限配置，以确保新增强的文件读取策略与现有工作流兼容。

### 3. 项目进展

今日项目进展主要围绕 **v2.0.0 版本暴露的关键 Bug 进行紧急修复和功能优化**。重要进展包括：

- **沙箱系统修复**: PR [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) 已合并，修复了 `approval_level=OFF` 模式下沙箱开关被忽略的问题，保证了用户配置的绝对权威。
- **上下文压缩修复**: PR [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) 正在审核中，旨在修复与 DeepSeek 模型配合使用时，上下文压缩导致消息格式损坏（tool 消息与 assistant 消息失配）的严重 Bug。
- **沙箱状态清理**: 已合并 PR [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) 和 [#6122](https://github.com/agentscope-ai/QwenPaw/pull/6122)，确保了全局沙箱开关关闭后，不再复用过期的沙箱状态。
- **内存与感知能力优化**:
    - PR [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) 已合并，显著提升了 ReMe 记忆模块的可靠性、可观测性，并修复了 CJK（中日韩）字符 embedding 的安全截断问题。
    - PR [#6120](https://github.com/agentscope-ai/QwenPaw/pull/6120) 正在开发中，旨在将自动记忆功能限定于外部用户查询，避免系统内部消息（如 DoomLoop 警告）被误触发，形成反馈循环。
- **新渠道集成**: PR [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) 新增了对越南 Zalo Bot 平台的支持，扩大了项目的生态覆盖范围。

### 4. 社区热点

今日社区讨论热度最高的议题主要围绕 **v2.0.0 版本升级后带来的核心功能退化**。

1.  **Windows 沙箱问题 (Issue #5951)**： 以 9 条评论成为讨论焦点。用户报告了极其严重的 Windows 沙箱问题，包括 `pwsh` 窗口递归弹出导致内存耗尽、沙箱无法关闭等。用户情绪沮丧，认为该问题导致工具“几乎不可用”。这反映了 v2.0.0 在 Windows 平台的沙箱实现存在**严重缺陷**，是当前最需要优先解决的痛点。
    - 链接: [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)

2.  **“记忆搜索”死循环 (Issue #6113)**： 有 5 条评论，用户直呼“好烦啊”，反映升级后 AI 在每次提问前都会进行记忆检索，导致无休止的循环，严重影响使用体验。这表明新的记忆检索逻辑在用户感知上造成了明显的负面体验，**功能设计上存在过度干预用户交互流程的问题**。
    - 链接: [Issue #6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)

3.  **DeepSeek API 兼容性问题 (Issue #6121, #6077)**： 反映了 v2.0.0 的上下文压缩机制与 DeepSeek 等非 OpenAI 原生 API 存在兼容性问题，导致会话出错。这指出社区对**多模型服务的支持深度和稳定性**有很高期待，而项目当前在此方面存在短板。
    - 链接: [Issue #6121](https://github.com/agentscope-ai/QwenPaw/issues/6121), [Issue #6077](https://github.com/agentscope-ai/QwenPaw/issues/6077)

### 5. Bug 与稳定性

今日报告的 Bug 以 **v2.0.0 版本回归**和**新功能缺陷**为主，严重程度较高。

| 严重程度 | 问题摘要 | Issue 链接 | 是否有 Fix PR |
|:--- |:--- |:--- |:--- |
| **Critical** | **Windows 沙箱递归爆炸**：导致 pwsh 窗口无限弹出、内存耗尽、沙箱无法关闭。 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | 未直接关联，相关沙箱状态修复 PR [#6122](https://github.com/agentscope-ai/QwenPaw/pull/6122) |
| **High** | **上下文压缩破坏 DeepSeek 消息格式**：导致 400 错误，无法继续对话。 | [#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077) | [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) (审核中) |
| **High** | **自动记忆功能模块缺失**：`No module named '...scripts'`，导致自动记忆后台任务失败。 | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | 已通过合并 PR [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) 修复 |
| **Medium** | **审批系统 Bug**：钉钉渠道审批弹窗错误地出现在电脑端；`approval_level: OFF` 配置失效。 | [#6020](https://github.com/agentscope-ai/QwenPaw/issues/6020) | 未直接关联，相关 PR [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) 已修复 OFF 模式沙箱问题 |
| **Medium** | **`/goal` 任务完成后阻塞聊天**：子任务完成后，后续任何消息都被 `TERMINATE` 阻断。 | [#6082](https://github.com/agentscope-ai/QwenPaw/issues/6082) | 未发现直接关联 PR |
| **Medium** | **记忆卡死循环**：每次提问都会触发无休止的记忆检索。 | [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) | [#6120](https://github.com/agentscope-ai/QwenPaw/pull/6120) (开发中，可缓解) |
| **Low** | **工具配置按钮消失**：`generate_image_gpt` 工具在 UI 上的配置入口丢失。 | [#6105](https://github.com/agentscope-ai/QwenPaw/issues/6105) | 未发现相关 PR |

### 6. 功能请求与路线图信号

- **实时消息注入 (Issue #6087)**： 社区希望能在 Agent 内部迭代（tool call → LLM）循环中，实时注入用户的新消息，以便及时纠正 Agent 的思考方向，避免计算浪费。此需求已获得 4 条评论，表明用户对**交互的控制力和实时性**有更高要求。虽然没有直接对应 PR，但它可能影响到未来的 Agent 交互模型设计。
  - 链接：[#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087)

- **分开控制工具调用信息的发送 (Issue #5976)**： 用户希望能在渠道（如飞书、钉钉）中，将“工具调用参数”和“工具调用结果”分开发送，并支持对冗长的结果进行截断预览。这反映了企业用户在将 Agent 集成到即时通讯工具时，对**信息噪音管理和可读性**的精细需求。此项与 [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984) （飞书渠道审批提示无法关闭）等需求一同，指向了渠道集成功能的成熟度提升方向。
  - 链接：[#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976)

- **免认证 CIDR 白名单 (Issue #6048)**： 用户希望白名单支持 CIDR 段配置，用于更灵活的网络环境控制，这对企业级部署至关重要。
  - 链接：[#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048)

- **Zalo Bot 渠道**： PR [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) 新增了对越南流行通讯应用 Zalo 的支持，这显示了项目在扩大国际用户生态方面的努力，符合路线图的渠道扩展信号。

### 7. 用户反馈摘要

从今日的 Issue 评论中，可以提炼出以下用户画像和反馈：

- **“深受其害”的升级用户**：从 v1.x 升级到 v2.0.0 的用户群体是反馈的主力。他们普遍认为新版虽然带来了新功能（如沙箱、记忆系统），但引入了大量**严重且无法忍受的 Bug**，如 Windows 沙箱崩溃（#5951）、记忆死循环（#6113）、聊天记录映射丢失（#5964），导致其“几乎不可用”和“好烦啊”。用户的核心诉求是**尽快修复这些回归问题，恢复 v1.x 版本的稳定性和可用性**。
- **“需要更精细控制”的高级用户**：部分用户对审批系统、沙箱系统、信息推送等提出了更高级的控制需求。例如，要求审批必须推送到发起渠道（#6020）、希望分开控制工具调用信息的发送（#5976）、要求关闭某些无法关闭的审批提示（#5984）。这说明企业级用户正在使用 CoPaw，并希望得到**符合其工作流程和安全策略的、精细化的配置能力**。
- **“拥抱新模型”的探索者**：用户非常积极地尝试将 CoPaw 与 DeepSeek (`deepseek-chat`)（#6121）、Ollama + bge-m3（#5950）等新模型或本地模型进行集成。他们遇到的兼容性问题（如上下文压缩、embedding截断）表明，项目在**模型兼容性**方面仍有较大的提升空间。
- **“希望提供帮助”的贡献者**：社区中仍有人愿意贡献，例如 Issue #2291 吸引 64 条评论，是一个持续开放的任务招领平台。此外，像 `alvinlee518` 这样的首次贡献者通过 PR [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) 为项目添加了可观测性功能，展现了社区的良性循环。

### 8. 待处理积压

以下 Issue 或 PR 较为重要且长时间未响应，建议维护者关注：

- **长期开放性 PR**:
    - **[Feature] Windows Desktop GUI Automation (PR #5187)**: 这是一个在6月14日开启的、旨在为 Windows 桌面提供 GUI 自动化能力（如操作微信）的重大功能，至今已逾一个月，仍在 `OPEN` 状态。鉴于 Windows 平台是当前 Bug 重灾区，此 PR 若能推进，或将提供一种无需沙箱的、更稳定的自动化路径。建议社区或维护者重新评估其优先级。
    - 链接：[https://github.com/agentscope-ai/QwenPaw/pull/5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)

- **关于任务分配流程的建议**:
    - 虽然 Issue #2291 是一个很棒的任务招领板，但未列出的长期任务可能更容易被忽略。建议维护者考虑将重要的、长期未关闭的 Issue 和 Open 状态的 PR 也加入到“Help Wanted”列表中，以更清晰地引导社区贡献者的精力。
    - 链接：[https://github

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 2026-07-15

---

## 1. 今日速览

过去 24 小时内，ZeroClaw 项目保持高活跃度：Issues 更新 38 条（新开/活跃 28，关闭 10），PR 更新 50 条（待合并 21，已合并/关闭 29）。**重点在于 SOP（标准操作流程）引擎与内存子系统的大规模合入**：多个里程碑 PR 集中关闭，标志着 v0.8.3 的 SOP 控制平面、文件系统事件源、live step 执行等功能已进入稳定状态；同时 Hindsight 作为一等内存后端首次合并，并附带仪表盘修复。安全与稳定性方面，Landlock 沙箱兼容性、`execute_pipeline` 权限绕过等高风险 S0/S1 Bug 仍在追踪中，但已有关键修复（SOP 审批绕过、headless 执行记录错误）于今日关闭。

---

## 2. 版本发布

本周期内无新版本发布。

---

## 3. 项目进展

今日合入/关闭了多项里程碑级的 PR，项目的 **SOP 能力与内存架构** 向前迈进一大步：

| PR | 内容摘要 | 状态 |
|---|---|---|
| [#8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391) | 守护进程 SOP 维护 tick，激活已休眠的 fail‑closed 批准超时 | 已合并 |
| [#8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399) | 执行 live SOP 步骤：捕获 `ExecuteStep` 动作，支持 `sop_execute`、`sop_advance`、`sop_approve` | 已合并 |
| [#8400](https://github.com/zeroclaw-labs/zeroclaw/pull/8400) | 将 CRON SOP 触发器接入守护进程维护 tick，实现生产级调度 | 已合并 |
| [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) | 带外批准平面，fail‑closed 超时与 PriorityBased 门控修复 | 已合并 |
| [#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430) | SOP 引擎步骤路由：`next`、`depends_on`、`when`、访问守卫 | 已合并 |
| [#8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461) | 文件系统 SOP 事件源：监听文件创建/修改/删除触发 SOP | 已合并 |
| [#8992](https://github.com/zeroclaw-labs/zeroclaw/pull/8992) | 新增 Hindsight 为一等内存后端（外部 HTTP 记忆+向量化） | 已合并 |
| [#8993](https://github.com/zeroclaw-labs/zeroclaw/pull/8993) | 修复仪表盘内存计数显示：报告每 agent 活动内存后端 | 已合并 |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/pull/8973) | (Issue 关联) Landlock 导致 shell 工具无法访问 `/dev/null` – 仍开放 | 待处理 |

**整体进展**：v0.8.3 的 SOP 功能已基本达到 5/5（追踪器 [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) 中 13 项能力已有多项完成），内存子系统获得了首个外部托管后端，dashboard 可用性修复也已就绪。

---

## 4. 社区热点

今日评论最活跃的 Issues（基于评论数）：

| Issue | 标题 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | [Feature]: Per-sender RBAC for multi-tenant agent deployments | 10 | 多租户部署中按发送者实现 RBAC，隔离工作空间、工具集、速率限制与系统提示。反映了企业级安全需求。 |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | [Feature]: Slack: hydrate thread context from conversations.replies on first mention | 7 | 首次被 @提及时，从 `conversations.replies` 回填 Slack 线程历史，以解决严格提及模式下需重复 @机器人的痛点。 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | [Feature]: Local-First Mode for Small Models — Compact No-Tools Prompting, Strict Parser Option, and No Prompt-Leakage | 5 | 为小型本地模型设计紧凑模式：减少提示膨胀、禁用宽松回退解析、防止系统指令泄露。👍 数最高（2），社区对本地优先体验期待高。 |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | [Bug]: Landlock blocks shell access to required system files on Fedora | 4 | Landlock 沙箱阻止 shell 工具访问 `/dev/null`，影响 Fedora 用户的核心功能。 |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC: Add cross-turn conversation correlation to OTel export | 3 | 为 OpenTelemetry 添加跨轮的对话 ID 关联，提升可观测性。属于架构 RFC。 |

**分析**：社区最关注**安全隔离（RBAC、提示泄漏）** 与**渠道体验（Slack 线程上下文）**，同时本地模式需求持续升温。RBAC 和本地模式均为 risk:high，维护者已标注 accepted 状态，有望在 v0.9 或后续版本推进。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列（含已有的 Fix PR 状态）：

| 严重级别 | Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| **S0 – 数据丢失/安全风险** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` bypasses per-agent tool gating (confused deputy) | OPEN | 无 |
| S1 – 工作流阻塞 | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs are not available through web dashboard chat session | OPEN | 无 |
| S1 – 工作流阻塞 | [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | Malformed native tool-call arguments → provider 400 → empty reply | OPEN | 无 |
| S1 – 工作流阻塞 | [#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) | channel-line omitted from channels-full and CI coverage | OPEN | 无 |
| S2 – 降级行为 | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock blocks shell access on Fedora | OPEN | 未发现，社区正讨论 |
| S2 – 降级行为 | [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | Headless deterministic SOP steps recorded Completed without executing | **CLOSED** (已合并修复) | ✅ 已修复 |
| S2 – 降级行为 | [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | `advance_step` has no run-status guard – can bypass approval gate | **CLOSED** | ✅ 已修复 |
| S2 – 降级行为 | [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) | Cron jobs still recall memory when `uses_memory = false` | CLOSED | ✅ 已修复 |
| S3 – 小问题 | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime command replies bypass Fluent localization | OPEN | 无 |

此外，今日新提交的 **S0/S1 级别 Bug 均为 open 状态**，需维护者优先关注 `execute_pipeline` 安全绕过问题——它允许恶意 agent 绕过逐 agent 工具门控，属于混淆代理风险。Landlock 兼容性问题影响 Fedora 用户基础，尚未有 PR 关联。

---

## 6. 功能请求与路线图信号

**已进入 accepted 状态的新功能请求（可能纳入后续版本）：**

| Issue | 标题 | 风险 | 备注 |
|---|---|---|---|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC: Separate conversation history from agent-curated long-term memory | high | 推动内存架构分离，与已合并的 Hindsight 后端形成协作 |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC: Add cross-turn conversation correlation to OTel export | high | 提升可观测性，已进入 RFC 讨论 |
| [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) | feat(sop): centralize SOP ingress adapters for fan-in sources | medium | 统一 SOP 事件源适配器，减少重复代码 |
| [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) | [Feature]: SOP routing — a false `when` should advance to next step, not end | medium | 使多阶段 SOP 成为可能 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Feature: add pre-hook skip gates for cron jobs and SOP triggers | high | 增强 cron 灵活性，status:blocked 等待讨论 |

**路线图信号**：SOP 功能已达 5/5 目标，后续将着重完善**渠道适配层（入口集中化）** 与**内存子系统的持久化、相关性、操作性对齐**（追踪器 [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)）。此外，`channel-line` 遗漏 CI 覆盖已提交修复（[#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) 待解决），表明维护者正积极扫清 CI 覆盖死角。

---

## 7. 用户反馈摘要

从今日 Issues 摘要及评论中提炼的真实用户痛点与使用场景：

- **多租户安全**（#5982）：用户希望一个 ZeroClaw 实例服务不同角色（客户、操作员、开发者），需要完全隔离的工作空间与工具集。当前单安全策略模型无法满足企业级部署。
- **Slack 线程上下文缺失**（#6055）：当启用严格提及模式时，用户需反复 @机器人，导致流程割裂。期望自动回填线程历史以保持上下文连续。
- **本地模型用户痛点**（#5287）：使用小模型（如 Ollama/LM Studio）时，提示词膨胀、宽松回退解析导致幻觉，且系统指令可能泄漏到输出中。社区对“本地优先”紧凑模式投票最多（+2）。
- **Landlock 沙箱兼容性**（#8973）：Fedora 用户反映开启 Landlock 后 shell 工具完全无法工作，`/dev/null` 被屏蔽，导致基本命令失败。用户期待更完善的沙箱粒度控制。
- **SOP 不可用于 Web 仪表盘**（#8563）：用户配置 SOP 文件后，通过网页聊天无法调用，工作流被阻塞。该问题被标记为 S1，但至今无 fix PR。
- **SOP 执行记录不一致**（#8631、#8678）：用户发现“确定性”SOP 步骤未实际执行却被标记为“已完成”，且审批门可通过 `sop_advance` 绕过。这两项今日已修复，社区给予正面反馈。
- **Cron 任务内存控制失效**（#8695）：用户设置 `uses_memory = false` 后，任务仍会加载记忆，实际与文档行为不符。该 Bug 今日已关闭。

---

## 8. 待处理积压

以下为长期未响应或高风险且尚未关闭的重要 Issue / PR，提醒维护者优先关注：

| 项目 | 标题 | 创建时间 | 理由 |
|---|---|---|---|
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` bypasses per-agent tool gating (confused deputy) | 2026-06-18 | **S0 安全风险**，至今无 PR 关联，已 27 天无实质进展 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode for Small Models | 2026-04-04 | 社区高票需求，已 3 个月处于 accepted，但未进入具体开发排期 |
| [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | [Tracker]: zerorelay milestone: stand up nominated relay | 2026-06-26 | 里程碑追踪器，涉及 NAT 穿透关键功能，进度未知 |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | [Tracker]: Persistent memory - wire curation, relevance, operability | 2026-07-09 | 内存子系统最大追踪器，与今日合入的 Hindsight 后端关系密切 |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs not available through web dashboard | 2026-06-30 | S1 阻塞问题，至今无 fix PR，影响用户基本可用性 |
| [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | Malformed tool-call arguments → provider 400 | 2026-07-03 | S1，影响 OpenAI 兼容 API 的使用，无 PR 修复 |

**特别提醒**：`#7947`（混淆代理）和 `#8563`（SOP 仪表盘缺失）是当前最影响生产使用的项目，建议维护者尽快分配至 v0.8.4 或 v0.9 里程碑。

---

*报告生成时间：2026-07-15 UTC*  
*数据来源：[ZeroClaw GitHub](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*