# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 23:41 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目数据，为您生成 2026 年 7 月 22 日的项目动态日报。

---

### **OpenClaw 项目动态日报 | 2026 年 7 月 22 日**

#### **1. 今日速览**

项目活跃度极高，过去 24 小时内 Issues 和 PR 更新均达到 500 条，社区参与度旺盛。安全与稳定性是今日焦点，多个涉及凭据泄露、会话状态损坏及数据库损坏的 P1/P0 级问题正在被积极讨论和修复。虽然无新版本发布，但维护者正通过一系列 PR 稳步推进功能改进，尤其集中在 Web UI 的用户体验提升、Cron 作业的健壮性和基础设施的安全性加固上。总体看，项目正处在繁忙但有序的迭代状态。

#### **2. 版本发布**

过去 24 小时无新版本发布。

#### **3. 项目进展**

今日无重要 PR 被合并，但大量新开的 PR 展现了项目多线程并进的势头。以下为值得关注的关键进展：

- **Cron 作业效率优化**：`#112375` 引入了 Shell 预检查机制，允许 Cron 任务在无实际工作时跳过 LLM 调用，可为大规模部署节省可观的 Token 成本。
- **Web UI 体验提升**：
    - `#112339` 为聊天界面增加了启动状态提示，解决了用户长时间等待时的“假死”困惑。
    - `#112442` 实现了图片查看的灯箱（Lightbox）功能，提升了视觉信息查看体验。
    - `#112407` 修复了浏览器标签页标题显示问题，使其能动态显示当前会话名称，便于多标签管理。
    - `#112260` 实现了会话观察器（Session Observer）的用户端功能，包括状态 HUD、侧边栏摘要等。
- **Onboarding 流程优化**：
    - `#112414` 改进了 `openclaw onboard` 进度提示，为用户在扫描应用阶段提供更清晰的反馈。
    - `#112378` 修复了在同时配置 `OPENAI_API_KEY` 和 Codex 凭证时可能导致引导安装崩溃的“身份漂移”问题。
- **安全依赖修复**：`#112444` 和 `#112443` 紧急修复了 `fast-uri` 库的高危漏洞（Host混淆，GHSA-v2hh-gcrm-f6hx），保障了链上安全。
- **模型发现功能**：`#112412` 实现了从供应商在线目录动态发现新模型的功能，用户无需等待 OpenClaw 更新即可使用最新模型。

#### **4. 社区热点**

- **Issue #10659 - [Masked Secrets]**：关于“屏蔽密钥”的功能请求，获得了 15 条评论和 4 个赞。社区高度关注安全问题，希望能有一种机制让 Agent 能 **使用** API Key 但无法 **查看** 其原始值，以防止提示注入攻击导致凭据泄露。这是对安全性和可控性的核心诉求。
    [查看 Issue](https://github.com/openclaw/openclaw/issues/10659)

- **Issue #101290 - [数据库损坏回归]**：一个 P0 级回归 Bug，报告了 CLI 启动预检在某些情况下会损坏正在运行的网关的 SQLite 数据库。13 条评论反映出该问题对用户的影响巨大，尤其是在长时间稳定运行后的数据丢失风险。
    [查看 Issue](https://github.com/openclaw/openclaw/issues/101290)

- **Issue #86996 - [Active Memory + Codex 延迟问题]**：11 条评论的讨论聚焦于特定配置下的严重性能瓶颈（延迟高、Hook超时、网关阻塞），直接影响 Telegram 等渠道的即时通讯体验。用户尝试通过“固定指定模型”来缓解，但问题根源仍待解决。
    [查看 Issue](https://github.com/openclaw/openclaw/issues/86996)

- **Issue #85030 - [MCP 工具未注入子Agent]**：此 Bug 获得了 5 个赞和 11 条评论，是今日最受关注的 Bug 之一。用户报告通过 `mcp.servers` 注册的工具无法被 `sessions_spawn` 生成的子 Agent 访问，打破了多 Agent 协作和模块化工具生态的预期。
    [查看 Issue](https://github.com/openclaw/openclaw/issues/85030)

#### **5. Bug 与稳定性**

今日报告的 Bug 和回归问题集中在数据丢失、安全风险及功能异常方面：

- **P0 (严重)**
    - **[Bug] 数据库损坏** (#101290): CLI 预检导致 `openclaw.sqlite` 损坏。问题仍在讨论中，尚未有修复PR。
        [链接](https://github.com/openclaw/openclaw/issues/101290)

- **P1 (高优先级)**
    - **[Bug] 安全：`models.json` 以明文写入 API Key** (#88562): 生成模型配置时会暴露明文凭据，已严重违反安全最佳实践。
        [链接](https://github.com/openclaw/openclaw/issues/88562)
    - **[Bug] MCP 工具未注入子Agent** (#85030): 多 Agent 协作的核心功能受阻。
        [链接](https://github.com/openclaw/openclaw/issues/85030)
    - **[Bug] 子Agent输出路由错误** (#90840): 子 Agent 的原始输出被错误地发送给用户，而非由父 Agent 生成摘要。
        [链接](https://github.com/openclaw/openclaw/issues/90840)
    - **[Bug] 长时间对话后工具参数丢失** (#53408): 经过 15 轮以上对话，`write` 和 `exec` 工具的参数会被静默丢弃，严重影响复杂任务执行。
        [链接](https://github.com/openclaw/openclaw/issues/53408)
    - **[Bug] cron 工具 Schema 破坏 `llama.cpp` 工具调用** (#108473): 新引入的 cron 工具 Schema 与本地模型不兼容，导致回归。已有对应修复PR (#112415)。
        [链接](https://github.com/openclaw/openclaw/issues/108473)

- **P2 (中优先级)**
    - **[Bug] 主Agent被遗留状态迁移阻塞** (#111498): Anthropic 认证恢复后，主 Agent 持续被一个过时的状态迁移任务阻塞，无法正常响应。
        [链接](https://github.com/openclaw/openclaw/issues/111498)
    - **[Bug] feishu_doc 创建文档静默忽略内容** (#48373): `create` 操作会创建空白文档，迫使 Agent 额外调用 `write` 操作，效率低下。
        [链接](https://github.com/openclaw/openclaw/issues/48373)

#### **6. 功能请求与路线图信号**

- **安全与策略**：`Masked Secrets` (#10659)、`Filesystem Sandboxing` (#7722)、`Skill Permission Manifest` (#12219) 和 `Capability-based Permissions` (#12678) 等功能请求表明了社区对构建安全可控的 Agent 生态的强烈渴望。预计这些概念将被视为下一阶段架构设计的核心。
- **会话与工作流管理**：`Session snapshots` (#13700) 和 `Projects in Dashboard` (#13676) 显示出用户已不满足于单次对话，而是希望有更复杂的、支持分支、回滚和隔离的“项目管理”模式。
- **Telegram 生态深化**：`Telegram Business Bot` (#20786) 支持以及 `Custom Emojis` (#16121) 支持，表明用户希望 OpenClaw 与 Telegram 功能的集成能更紧密、更深入。
- **可观测性与成本**：`Per-model usage logging` (#13219) 是商业化部署和成本控制的核心诉求，预计会被优先考虑。`Reduce tool schema token overhead` (#14785) 则体现了对优化底层性能以控制长期成本的深刻理解。

#### **7. 用户反馈摘要**

- **痛点**：
    - **稳定性焦虑**：用户 (jarvis1982oc) 在 #101290 中描述了数据库四次损坏的经历，对在没有明确原因的情况下丢失状态感到沮丧，并花费大量时间进行排查。
    - **配置复杂性受挫**：用户 (delimir) 在 #106779 中报告了升级后本地 `llama.cpp` 提供商完全失效，尽管之前工作正常，体现了升级过程中的不兼容风险。
    - **安全担忧**：多位用户 (#10659, #7722, #12219) 对 Agent 可能泄露敏感信息或执行未授权操作表达了明确担忧，要求更强的访问控制。
    - **功能缺失**：用户 (danydavila) 在 #108473 中发现 cron 功能与本地模型不兼容，导致工具调用失败，影响了其依赖本地模型的工作流。

- **使用场景与满意度**：
    - **高效的多 Agent 协作**：用户 (TimeAground) 在深度使用子Agent (sessions_spawn) 时遇到了工具参数丢失的Bug (#53408)，影响了复杂任务的可靠性。
    - **生产环境部署**：多位用户 (#101290, #13616, #14526) 表达了在生产环境中运行 OpenClaw 的意愿，并明确提出了对备份、安全更新和自动化回滚等功能的需求。
    - **积极的社区贡献**：用户 (reidperyam) 报告的 MCP 工具未注入子Agent问题 (#85030) 获得了 5 个赞，反映了社区对完善 Agent 间协作机制的共同期待。同时，用户 (haofeif) 及时提出了跟进 Google 服务更迭的 PR (#84527)，展现了社区的主动性和前瞻性。

#### **8. 待处理积压**

- **Issue #7722 - [Filsystem Sandboxing]**: 自 2026-02-03 提交以来长期无响应，但社区对安全性的诉求日益增长，建议维护团队优先评估其实现方案。
    [链接](https://github.com/openclaw/openclaw/issues/7722)
- **Issue #20786 - [Telegram Business Bot]**: 这个呼声很高的功能请求已提交五个月，且有关联PR打开，但进展缓慢。考虑到 Telegram 是核心渠道，此功能对社区有较大吸引力。
    [链接](https://github.com/openclaw/openclaw/issues/20786)
- **Issue #12678 - [Capability-based permissions]**: 此功能请求与 #12219 和 #7722 共同构成了未来安全模型的蓝图。虽然规模庞大，但应被提上路线图进行战略讨论。
    [链接](https://github.com/openclaw/openclaw/issues/12678)
- **PR #103148 - [强制父会话所有者检查]**: 这是一个重要的安全修复PR，旨在防止插件读取不属于自己的会话内容。尽管标记为 P0，但标签为“需要实证”，可能由于需要更严格的测试或评审流程而被搁置。
    [链接](https://github.com/openclaw/openclaw/pull/103148)

---

## 横向生态对比

好的，作为资深技术分析师，我已仔细审阅了您提供的2026年7月22日各开源项目动态。基于这些详实的数据，现为您呈上一份全面、客观的横向对比分析报告。

---

### 个人AI智能体/自主智能体开源生态横向对比分析报告 (2026-07-22)

**报告日期:** 2026-07-22
**分析师:** [AI 智能体与个人 AI 助手开源生态分析师]

#### 1. 生态全景

当前，个人AI智能体与自主智能体开源生态呈现出 **“核心成熟、分化加速、安全加固”** 的态势。以 **OpenClaw** 为代表的生态核心项目，凭借其庞大的社区和丰富的插件生态（Skills），在通用性和功能广度上持续领先，已成为事实上的行业参照标准（参照实现）。与此同时，以安全架构见长的 **ZeroClaw** 和专注于高质量代码与多Agent协作的 **Hermes Agent** 等项目，在特定领域形成了差异化优势，加剧了生态的纵向分化。值得注意的是，**安全性**（凭据泄露、沙箱逃逸）和**系统稳定性**（数据库损坏、内存泄漏、会话污染）成为所有高活跃度项目的共同痛点，表明生态正从“功能竞赛”转向“质量与信任”的巩固阶段。

#### 2. 各项目活跃度对比 (2026-07-22)

| 项目名称 | Issues量 (24h) | PR量 (24h) | 合并/关闭 (24h) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 极高(PR合并4%) | 无 | **高度活跃，但存在技术债务**。社区贡献多，但合并率低，P0级Bug和长期积压Issue处理缓慢。 |
| **NanoBot** | 11 | 34 | 22 (PRs) | 无 | **高度活跃，高质量迭代**。Bug修复效率高，社区贡献被快速采纳，是“快速响应”的典范。 |
| **Hermes Agent** | 50 | 50 | 2 (PRs) | 无 (急需热修复) | **极度活跃但陷入稳定性危机**。大量贡献集中在修复 `v0.19.0` 引入的崩溃和会话状态损坏问题，社区维护压力大。 |
| **PicoClaw** | 8 | 8 | 3 (PRs) | 无 | **中等活跃，稳步推进**。关键Bug修复与核心功能（系统执行）开发并重，但存在长期悬而未决的技术债（如Matrix连接）。 |
| **NanoClaw** | 1 | 12 | 3 (PRs) | 无 | **中等活跃，社区贡献驱动**。侧重于渠道扩展与平台兼容性修复，但大量PR待合并成为瓶颈。 |
| **IronClaw** | ~100 | ~100 | 高 (多PR合并) | **v1.0.0-rc.1** | **高质量重构阶段**。正处于“Reborn”架构收尾，团队主导密集开发和测试，社区围绕大版本迁移展开讨论。 |
| **LobsterAI** | 低 | 10 | 5 (PRs) | 无 | **高效维护**。PR合并率高，专注于修复具体用户痛点和UI优化，迭代节奏稳健。 |
| **CoPaw** | 41 | 50 | 高 (近半数) | **v2.0.1-beta.1** | **高活跃度，版本迭代期**。开发团队积极响应反馈，快速发布补丁，但v2.0的性能与稳定性问题依然是主要挑战。 |
| **ZeroClaw** | 50 | 50 | 中 (多PR合并) | 无 | **高度活跃，安全与架构并重**。社区深入讨论安全漏洞（S0）和架构革新（Goal模式、MCP治理），是技术前瞻性的代表。 |
| **其他项目 (Moltis等)** | 0 | 1 | 0 | 无 | **停滞或维护模式**。社区活动近乎为零，可能面临维护者精力不足或项目方向未明确的风险。 |

**健康度关键指标:**
- **高效率组**: NanoBot, LobsterAI, CoPaw (快速响应，高质量合并)
- **高活跃但有风险组**: OpenClaw, Hermes Agent, ZeroClaw (贡献多，但合并率低或存在严重Bug)
- **稳定发展组**: IronClaw, PicoClaw, NanoClaw (步调有序，各有侧重)

#### 3. OpenClaw 在生态中的定位

- **核心参照与生态基石**: OpenClaw 凭借其海量的插件生态（Skills）和最高的社区活跃度，是当之无愧的生态核心。它的设计模式、API接口和问题解决方案，如 `mcp.servers` 集成，已成为其他项目（如 PicoClaw, ZeroClaw）在实现类似功能时的重要参考。
- **优势**: **无与伦比的通用性和扩展性**。其数千个Skills和丰富的配置选项，使其能覆盖从个人助理到复杂工作流的广泛场景。
- **技术路线差异**: 相比之下，**ZeroClaw** 注重更严格的安全沙箱和权限模型；**Hermes Agent** 则强调基于MCP的模块化工具生态和“代理即工作流”的理念。OpenClaw的“大而全”路线在灵活性上最强，但在安全性、稳定性和首次使用体验上可能不如后者。
- **社区规模对比**: 其日均500+的Issue和PR更新量，远超其他项目（NanoBot的11和34，Hermes的50和50），社区规模是其他高活跃项目的5-10倍。这种规模既是其生态繁荣的标志，也带来了巨大的社区管理挑战，如PR合并率低、关键Bug处理周期长（如`#10659`屏蔽密钥功能长期未实现）。

#### 4. 共同关注的技术方向

| 技术方向 | 具体诉求 | 涉及项目 | 分析 |
| :--- | :--- | :--- | :--- |
| **MCP (模型上下文协议) 生态稳定性** | 工具未注入子Agent、重连后未注册工具、依赖库替换（libolm -> vodozemac）、工具Schema兼容问题。 | OpenClaw, Hermes Agent, PicoClaw | MCP正成为标准化Agent工具集成的事实协议，但其生命周期管理、安全性和与本地模型的兼容性是所有项目都在解决的共同难题。 |
| **安全性强化** | API Key掩码保护、文件系统沙箱、技能权限清单、代理绕过白名单、Shell执行命令前需用户确认。 | OpenClaw, ZeroClaw, CoPaw, NanoBot | 社区对Agent的信任和安全边界提出了前所未有的高要求。从“可用”到“可信”的转变是当前生态最核心的驱动力，各项目正从不同角度构建安全层。 |
| **会话与状态管理** | 会话污染、数据损坏、内存泄漏、多轮对话后工具参数丢失、无限制增长、数据库索引损坏。 | OpenClaw, Hermes Agent, CoPaw, NanoBot, IronClaw | 随着Agent处理任务复杂度和时长增加，会话状态的持久性和一致性成为普遍痛点。如何保障Agent“记忆”的稳定可靠，是所有长周期运行项目的技术挑战。 |
| **模型与供应商灵活性** | 可配置的回退模型链、对话级别指定模型、跨模型无缝切换、本地模型缓存优化。 | OpenClaw, PicoClaw, ZeroClaw, NanoBot, CoPaw | 用户不再满足于绑定单一模型，对灵活性、成本控制和本地化运行的需求日益增长。这推动了模型适配层和调度策略的持续演进。 |
| **可观测性与控制** | 按模型用量日志、任务取消/中断机制、实时状态HUD、权限审计。 | OpenClaw, Hermes Agent, NanoBot | 当Agent自主执行任务时，用户需要更强的监控和干预能力。这不仅是调试需求，更是确保Agent行为符合预期、成本可控的关键。 |

#### 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 通用型个人AI助手/智能体平台 | 所有开发者、高级用户、技术爱好者 | 技能（Skills）驱动的生态，高度插件化；架构成熟但耦合度高。 |
| **NanoBot** | 轻量级、快速启动的个人AI助手 | 个人用户、快速原型开发者 | 聚焦于核心功能，代码库精简，迭代快速；强调即开即用。 |
| **Hermes Agent** | 多Agent协作与MCP工具集平台 | 开发者、工作流自动化工程师 | 以MCP为骨架，强调Agent间的通信与协作；将工具视为一等公民，注重工具生命周期管理。 |
| **PicoClaw** | 嵌入式或低功耗环境下的AI Agent | 物联网、边缘计算、嵌入式开发者 | 极度轻量级，占用资源少；API设计精简，可高度定制。 |
| **NanoClaw** | 多渠道、多平台AI助手接入层 | 开发者、企业集成工程师 | 核心是“适配器”模式，专注于连接各种IM、邮件、IoT平台；强调渠道统一管理。 |
| **IronClaw** | 企业级、生产就绪的Agent运行时 | 企业开发团队、DevOps工程师 | 采用“Reborn”全新架构，强调代码质量、部署一致性和高可用性；注重治理与授权模型。 |
| **LobsterAI** | 面向商业办公的AI助手 | 商业用户、办公效率提升 | 侧重文档处理、协作工作流（如Artifact分享）；UI优化和用户体验是其显著优势。 |
| **CoPaw** | 企业级安全与治理的Agent平台 | 企业用户、安全需求高的团队 | 强调安全治理（Governance），内置工具注册、权限管控；对数据一致性和会话完整性要求极高。 |
| **ZeroClaw** | 高安全、高可配置的智能体框架 | 安全研究员、需要精细权限控制的开发者 | 采用严格的沙箱和权限模型（白名单、SOP），架构设计上以安全性为第一优先级；鼓励架构级创新（Wire Protocol）。 |

#### 6. 社区热度与成熟度

- **快速迭代与功能拓展阶段**:
    - **OpenClaw**: 社区规模大，功能需求多，但已进入“负重前行”阶段，稳定性问题和功能请求堆积。
    - **ZeroClaw**: 社区围绕安全漏洞和架构RFC（如Goal模式）展开高质量讨论，技术前瞻性强，但功能尚未完全稳定。
    - **CoPaw**: 社区活跃，围绕v2.0版本的性能、稳定性和新功能进行密集反馈，项目迭代速度快。

- **质量巩固与精细化阶段**:
    - **NanoBot**: 修复了大量安全、资源和进程管理Bug，代码质量较高，社区贡献被高效整合，项目进入稳健发展期。
    - **Hermes Agent**: 正处于由新版本（`v0.19.0`）引发的“稳定性回归”修复期，社区焦点集中在修复Bug而非添加新功能，是典型的质量巩固阶段。
    - **IronClaw**: 处于大版本发布前的最终架构整合和测试阶段，社区讨论围绕迁移策略和QA，体现了极高的工程成熟度。

- **探索与差异化发展阶段**:
    - **PicoClaw, NanoClaw**: 分别聚焦于嵌入式与渠道连接，在各自的细分领域稳步演进，社区规模相对较小但贡献者画像清晰。
    - **LobsterAI**: 在办公协作领域深耕，用户反馈集中在具体功能（如附件处理、分享流程）的完善上，社区需求明确。

#### 7. 值得关注的趋势信号

1.  **“安全优先”已从口号变为硬性要求**：ZeroClaw 报告的`#9247` (Shell工具逃逸) 和 OpenClaw 的`#10659`（屏蔽密钥）不再是小众讨论，而是得到了社区高赞和深入的追踪讨论。任何Agent平台若无健壮的安全模型，将被高级用户和潜在的企业采用者快速抛弃。**信号**: 开发者设计Agent时，应将权限边界、数据脱敏和可审计性作为第一特性。

2.  **MCP协议成为新战场**：从 OpenClaw、Hermes Agent 到 PicoClaw，所有主流项目都在深度集成MCP。但问题集中在工具注册、生命周期管理和本地模型兼容性上。**信号**: 对MCP协议的“二次开发”和“行业最佳实践”将成为下一个技术热点，谁能率先解决MCP的稳定性与易用性问题，谁就能在工具生态上占据先机。

3.  **“Goal模式”与Agent自主性升级**：ZeroClaw 的 `#8303` 和 Hermes Agent 的会话管理特性，反映出社区不再满足于简单的单次问答或任务执行，而是需要**长时间运行的、有状态的目标导向型Agent**。**信号**: AI Agent的“自我管理与中断控制”能力将成为一个新的产品维度，能优雅地处理长周期任务、分支与回滚，是下一代Agent体验的关键。

4.  **从“模型竞赛”到“模型管理”**：各项目对跨模型切换、回退链、模型缓存和成本日志的共同关注表明，模型本身不再是唯一竞争点，如何**高效、廉价、稳定地调度和管理多种模型**成为新壁垒。**信号**: 开发者应聚焦于构建与模型无关的编排层，能够灵活应对模型API变化和成本波动。

5.  **跨平台与多终端覆盖成为刚需**：LobsterAI 的移动端适配请求、CoPaw 的渠道扩展、NanoClaw 的LINE集成，都指向同一个趋势：用户期望个人AI助手**“无处不在”**。**信号**: 单纯的Web/CLI模式已不够，渠道适配（IM、邮件、IoT）和移动端体验将成为项目分化的关键因素。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 NanoBot 项目 2026年7月22日 数据生成的日报。

---

# NanoBot 项目动态日报 | 2026-07-22

**分析师摘要：** 今日项目活跃度极高，共处理了11条 Issue 和34条 PR。修复了一批关键稳定性 Bug、安全风险和回归问题。社区对模型缓存优化、对话循环控制和数据安全表达强烈诉求。

## 1. 今日速览

- **状态概览**: 项目处于高度活跃的修复与优化期。过去24小时，项目合并/关闭了22个 PR，关闭了9个 Issue，显示出强大的需求响应和 Bug 修复能力。
- **亮点**: 合入了多个社区提交的关键安全修复与特性，包括 `ModelScope` 模型提供商支持、API 密钥安全存储指导、Qwen 模型兼容性增强等。
- **待关注**: 12个 PR 处于待合并状态，其中几个与对话循环控制、WebUI 交互改善相关。同时，仍有关于模型推理暴露、子进程管理等问题正在讨论中。

## 2. 版本发布

- 过去24小时内无新版本发布。

## 3. 项目进展

今日项目在处理修复和改进方面取得了显著进展，以下为已合并/关闭的关键 PR 及其贡献：

- **🆕 新集成与功能**:
    - [**PR #4965**](https://github.com/HKUDS/nanobot/pull/4965): 合入了 **ModelScope** 作为内置模型提供商。用户可通过其 OpenAI 兼容 API 使用 Qwen、DeepSeek 等模型，支持聊天和图片生成。
    - [**PR #5019**](https://github.com/HKUDS/nanobot/pull/5019): 支持 **Codex Fast Mode**（`service_tier: "priority"`），为使用 Codex 模型的用户提供了优先处理能力。
    - [**PR #5020**](https://github.com/HKUDS/nanobot/pull/5020): **WebUI 改进**：在已发送的用户消息中高亮显示可用的技能引用（Skill References），提升用户体验。

- **🛡️ 安全加固**:
    - [**PR #5010**](https://github.com/HKUDS/nanobot/pull/5010): 更新 `SECURITY.md` 文档，推荐用户使用环境变量引用 `<env:KEY_NAME>` 而非明文存储 API 密钥。
    - [**PR #4788**](https://github.com/HKUDS/nanobot/pull/4788): 修复了 `AgentRunner._run_tool()` 捕获 `BaseException` 的问题。该问题导致 `KeyboardInterrupt`、`SystemExit` 等关键信号被意外拦截并转化为对话错误。
    - [**PR #4794**](https://github.com/HKUDS/nanobot/pull/4794): 修复了 **子进程管理问题**，确保当网关进程退出时，执行中的子进程能被正确清理，避免产生孤儿进程。

- **🐛 稳定性与 Bug 修复**:
    - [**PR #4663**](https://github.com/HKUDS/nanobot/pull/4663): 修复了一个 **工具调用结果协议** 的 Bug，现在会隔离并丢弃无效、重复的工具结果，防止会话历史被污染。
    - [**PR #4785**](https://github.com/HKUDS/nanobot/pull/4785): 修复 `read_file` 工具在读取超大文件时导致 **OOM 内存溢出** 的问题，现在会在读取前进行截断。
    - [**PR #4787**](https://github.com/HKUDS/nanobot/pull/4787): 修复 **会话消息列表无限制增长** 导致的资源泄漏问题，确保了长期运行会话的稳定性。
    - [**PR #4984**](https://github.com/HKUDS/nanobot/pull/4984): 修复 `config.json` 在写入时可能因崩溃导致 **文件损坏** 的问题，现采用原子写入方式。
    - [**PR #4989**](https://github.com/HKUDS/nanobot/pull/4989): 修复了语音转录功能中，**API Key 环境变量引用未生效** 导致 “401 Unauthorized” 认证失败的问题。
    - [**PR #4952**](https://github.com/HKUDS/nanobot/pull/4952): 修复了在包含 emoji 的表情包内容时，`UnicodeEncodeError` 编码异常导致 LLM 请求失败的问题。

## 4. 社区热点

今日社区讨论焦点主要围绕两个议题：

1.  **工具调用协议修复** (**关联 Issue #4058** & **PR #4663**): 由贡献者 `hamb1y` 提出的关于工具调用结果协议漏洞的 Issue 引发了技术讨论。修复方案获得了社区认可并于今日合并，这是社区深度参与项目底层逻辑改进的体现。
    - [Issue #4058](https://github.com/HKUDS/nanobot/issues/4058)

2.  **对话循环控制** (**关联 Issue #4864** & **PR #5022**): 用户 `Asem-D` 报告了 `complete_goal` 函数陷入死循环的 Bug（[#4864](https://github.com/HKUDS/nanobot/issues/4864)），同时社区成员 `DreamShepherd2006` 提交了 `PR #5022`，提议增加 `/cancel-goal` 命令来打破这类循环。这表明社区对 Agent 的长期任务管理机制有强烈诉求，希望获得更底层的控制权。
    - [PR #5022](https://github.com/HKUDS/nanobot/pull/5022)

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在资源泄漏、数据安全和模型兼容性方面，大多数已有对应的修复 PR。

- **P0 级 (安全/崩溃)**
    - **会话消息列表无限制增长** (Issues [#4787](https://github.com/HKUDS/nanobot/issues/4787)): **已修复** (PR #4787)。
    - **读取大文件导致 OOM** (Issues [#4785](https://github.com/HKUDS/nanobot/issues/4785)): **已修复** (PR #4785)。
    - **子进程孤儿化** (Issues [#4794](https://github.com/HKUDS/nanobot/issues/4794)): **已修复** (PR #4794)。
    - **关键异常被错误捕获** (Issues [#4788](https://github.com/HKUDS/nanobot/issues/4788)): **已修复** (PR #4811)。

- **P1 级 (功能异常)**
    - **工具调用无限循环** (Issues [#4864](https://github.com/HKUDS/nanobot/issues/4864)): 待解决。已有相关的修复 PR (#5022) 和测试 PR (#5021) 提交。
    - **Qwen 模型暴露推理内容** (Issues [#4934](https://github.com/HKUDS/nanobot/issues/4934)): 待解决。已有对应的修复 PR (#5023) 提出。

## 6. 功能请求与路线图信号

- **🎯 高优先级 (大概率进入下个版本)**
    - **模型缓存优化** (Issue [#4867](https://github.com/HKUDS/nanobot/issues/4867)): 用户提出保留精确 prompt 前缀以支持 Ollama 等本地模型缓存，解决调用慢问题。开发者标记为 “enhancement”，表明可能会被纳入后续优化。
    - **Shell 命令执行前需用户确认** (Issue [#5013](https://github.com/HKUDS/nanobot/issues/5013)): 用户 `xiakj` 提出在 WebUI 和 CLI 中增加 shell 命令执行确认机制，提升安全性。此诉求与安全加固方向一致。
    - **子代理级联关闭** (PR [#5021](https://github.com/HKUDS/nanobot/pull/5021)): 为 `/stop` 命令增加级联关闭子代理子进程的功能，是对现有任务管理机制的增强。

- **🔭 潜在方向**
    - **渠道运行 Agent 工具** (Issue [#4911](https://github.com/HKUDS/nanobot/issues/4911)): 开发者提出为渠道（Channel）提供一条调用 Agent 工具的“安全通道”，例如支持实时语音功能。此特性若实现将极大扩展 NanoBot 的应用场景。
    - **模型预设与会话绑定** (PR [#4866](https://github.com/HKUDS/nanobot/pull/4866)): 支持在会话级别指定模型预设，提供更灵活的模型切换控制。

## 7. 用户反馈摘要

综合 Issues 评论，用户反馈聚焦以下痛点：

- **“Ollama 本地模型完全不可用”**: 用户 `The-Markitecht` 在 [#4867](https://github.com/HKUDS/nanobot/issues/4867) 中直言，由于 prompt 前缀未缓存，每次调用都额外增加60秒延迟，对于本地模型“完全无法使用”。这表明 prompt 优化和本地推理支持是用户核心需求。
- **“安全风险和资源失控”**: 用户 `hamb1y` 报告了多个涉及安全（明文密钥）、资源（大文件 OOM、内存泄漏）和进程管理（孤儿进程）的严重 Bug。这反映了重度用户对软件健壮性和安全性的高要求。
- **“缺少任务中断机制”**: Issue [#4864](https://github.com/HKUDS/nanobot/issues/4864) 和 [#5022](https://github.com/HKUDS/nanobot/pull/5022) 的讨论显示，用户在面对智能体陷入逻辑死循环时，缺乏有效的强制中断手段，体验较差。

## 8. 待处理积压

- **PR #4987** ([链接](https://github.com/HKUDS/nanobot/pull/4987)): “fix(filesystem): bind workspace checks to opened files”，状态为 OPEN。该 PR 旨在通过文件描述符而非路径进行工作区安全检查，可有效防止 TOCTOU（Time-of-check to time-of-use）时间差攻击。这是一个重要的安全增强，标注为 **P0 级**，但有冲突，需维护者重点关注。
- **PR #4399** ([链接](https://github.com/HKUDS/nanobot/pull/4399)): “feat(webui): add configurable hidden_settings_sections”，状态为 OPEN。该 PR 自6月18日提出，旨在提供可配置的 WebUI 设置项隐藏功能，以简化非技术用户的使用界面。虽有冲突但价值较高，建议维护者评估并推动解决。
- **Issue #4058** ([链接](https://github.com/HKUDS/nanobot/issues/4058)): 虽然对应的 PR #4663 已合并，但该 Issue 作为底层协议讨论的核心，可视为技术债务，建议在后续测试中持续关注。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 Hermes Agent 项目 GitHub 数据生成的 2026 年 7 月 22 日项目动态日报。

---

## Hermes Agent 项目日报 (2026-07-22)

### 1. 今日速览

昨日项目活跃度极高，社区投入显著。24 小时内共有 50 条 Issue 和 50 条 PR 更新，但与此同时，仅有 2 个 PR 被合并或关闭，合并率为 4%，存在大量的待处理技术债务。**P1 级 Bug** 和**会话状态（session state）稳定性**问题是当前社区关注的焦点和项目健康的潜在风险点。值得关注的是，虽然 PR 合并量低，但社区提交了大量修复性 PR，显示出开发者群体正围绕近期引入的 `v0.19.0` 版本稳定性问题进行集中修复。总体上，项目处于**高活跃度，但面临稳定性挑战**的阶段。

### 2. 版本发布

昨日无新版本发布。但多个 Issue 和 PR 指向了 `v0.19.0` 版本中引入的严重 Bug，特别是 `state.db` 损坏和桌面端/TUI 会话管理问题，这暗示了下一个小版本或热修复版本的必要性。

### 3. 项目进展

当日合并/关闭的 2 个 PR 主要聚焦于核心功能的修复：
- **`fix(credential_pool): skip priority normalization for round_robin strategy` (PR #23568)**：修复了当使用循环策略时，凭证池的优先级排序会破坏预期的轮询顺序的问题。这是一个存在了数月的长期遗留 Bug，其修复对多 API 密钥轮换场景的稳定性至关重要。
- **`fix(agent): treat retryable 5xx (overloaded/server_error) as fallback-chain trigger` (PR #68926)**：当上游 API 返回 503 等服务不可用错误时，Agent 现在会触发备用模型链，而不是无谓地在同一个失败模型上重试。这显著提升了用户体验和系统鲁棒性。

整体来看，昨日项目前进的步伐虽小但关键，主要集中在提升系统的稳定性（凭证管理、API 故障切换）和修复遗留问题。

### 4. 社区热点

以下 Issue 和 PR 在昨日引起了最广泛的讨论，反映了社区的迫切需求：

- **[Feature] Configurable Memory Backends (Issue #47349)**：以 13 条评论成为昨日最热门话题。用户 `TechFlipsi` 提议将硬编码的 `MEMORY.md` 文件重命名为 `rules.md` 并支持可配置的后端（如仅使用 `honcho/fact_store`）。这反映出用户对更灵活、更可控的记忆系统的强烈需求，不希望被不透明的文件系统管理所限制。
- **[Bug] MCP: parked server revival reconnects but does not re-register tools (Issue #67187)**：这是一个影响 MCP（模型上下文协议）生态体验的关键问题。当 MCP 服务器重新连接后，其提供的工具未能重新注册，导致 Agent 无法使用这些工具。这表明 MCP 的生命周期管理存在缺陷，修复此问题是提升 MCP 扩展能力稳定性的第一优先级。
- **[Feature] Immutable/protected skills (Issue #25083)**：用户 `spiky02plateau` 提出的保护关键技能的请求获得了 7 条评论。这反映了高级用户对于安全边界的担忧：Agent 不应有权随意修改或删除其核心的治理规则和安全约束。这是一个关乎用户信任和系统安全性的重要功能请求。

### 5. Bug 与稳定性

昨日报告的 Bug 表现出 **P1 级别的严重性问题**和**广泛的会话状态损坏风险**。

| 严重程度 | Bug 描述 | Issue 链接 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- |
| **P1** | Worker 在后台运行 shell 命令时（如 `&`）死锁 | [#68915](https://github.com/NousResearch/hermes-agent/issues/68915) | 无 |
| **P1** | Windows 上桌面端更新后 state.db 被清零导致数据丢失 | [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | 无 |
| **P2** | MCP 服务器重连后工具未重新注册 | [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) | 无 |
| **P2** | TUI 会话泄漏活跃会话租约，随时间推移阻塞新会话 | [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | [#68947](https://github.com/NousResearch/hermes-agent/pull/68947) |
| **P2** | 桌面端大模型上下文压缩后，用户消息顺序错乱 | [#68979](https://github.com/NousResearch/hermes-agent/issues/68979) | 无 |
| **P2** | 网关强制对独立的 E.164 电话号码进行脱敏处理 | [#68911](https://github.com/NousResearch/hermes-agent/issues/68911) | [#68916](https://github.com/NousResearch/hermes-agent/pull/68916) |

此外，关于 Kanban 数据库 (`kanban.db`) 在多进程下索引损坏的问题 (#34385, #53819) 在本报告周期内仍未有修复性 PR，已是一个长期存在的风险。

### 6. 功能请求与路线图信号

除了社区热点的功能请求外，以下新提交的功能请求也值得关注，它们可能预示了项目的演进方向：
- **[Feature] Per-function tool filtering (Issue #68964)**：用户希望将工具的启用/禁用粒度从“工具集”（toolset）细化到单个函数级别。这反映了开发者对细粒度控制 Agent 行为的更高要求。
- **[Feature] Searchable timezone dropdown in Desktop Settings (Issue #68970)**：这是一个面向桌面端用户体验的改进，旨在提供更好的配置引导。此类小优化对于提升非技术用户的友好度很重要。
- **[Feature] Support Atomic Hermes (mobile) as a delivery target (Issue #68951)**：用户希望桌面 Agent 能将消息发送到 Atomic Hermes（移动端）。这暗示着社区对跨设备、跨平台 Agent 协作架构的期待。

结合已有 PR (如 [#68956](https://github.com/NousResearch/hermes-agent/pull/68956) 关于技能占位符的修复)，项目正在朝着更安全、精细、用户友好的方向前进。

### 7. 用户反馈摘要

从昨日 Issue 的评论中，可以提炼出以下用户痛点：
- **MCP 生态的脆弱性**：用户发现 MCP 服务器连接稳定性差，不仅首次连接困难（#65677），且重连后功能丢失（#67187）。这会影响依赖 MCP 工具的开发者工作流，是当前最突出的体验问题之一。
- **桌面端更新风险**：Windows 用户在更新到 `v0.19.0` 后遭遇了 `state.db` 文件被清空（#68474），这是数据丢失的灾难性 Bug，严重损害了用户信任。
- **会话管理的困惑**：用户抱怨在长时间会话中，TUI 的压缩操作会阻塞输入（#61042），桌面端会话在压缩后消息顺序可能混乱（#68979），这些微妙的 Bug 破坏了交互的流畅性。
- **配置与可用性**：新用户在使用网页搜索等功能时遇到无提示的失败（#27683），而时间（时区）和 API 密钥（#68943）等配置项的指引不足，增加了上手难度。

### 8. 待处理积压

以下 Issue/PR 长期未得到维护者响应，可能已沉默，提醒项目维护者关注：

- **[Feature] how to use web search/fetch using ollama search feature (Issue #23207)**：由 `pujokoe` 于 2026-05-10 创建，询问是否支持 Ollama 的搜索功能。此问题已有 3 条评论，但未获得官方确认或后续跟进。这可能是新用户的常见困惑点。
- **[Bug] Kanban DB (kanban.db) index corruption under concurrent multi-process access (Issue #34385)**：从 5 月 29 日至今，此问题虽有多条评论，但仍处于 `needs-decision` 状态，没有明确的 Fix PR。这是对后台服务稳定性的一个长期隐患。
- **[Bug] Desktop: long-thread reconciliation re-stacks recent user messages (Issue #68979)**：虽然是最新报告的 Bug，但暂无任何 PR 链接。考虑到它影响桌面端的核心交互体验，建议维护者优先规划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-22

---

## 1. 今日速览

过去24小时项目活跃度中等，共处理8条Issue和8条PR。修复并关闭了4个Bug，其中包括两个与Antigravity提供者相关的关键问题（OAuth登录被Google拦截、API参数回归）。新开4个Issue均为功能请求或Bug报告，其中Web UI长历史输入卡顿（#3281）为新增问题。PR方面，有3个PR已被合并/关闭，其中包含一个重要的节点级系统执行功能（#3282）以及一个长期遗留的机器人名称配置修复（#303）。总体来看，项目在Bug修复与核心功能推进上均有进展，但仍有5个待合并PR和多个长期开放的Issue（如Matrix断连无重连、依赖替换等）需持续关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日关闭/合并的3个PR中，以下两项对项目有实质性推进：

- **#3282 – feat(nodes): add policy-gated system exec**  
  作者：bogdanovich  
  概要：为节点（Nodes）系统新增可选的 `system.exec.v1` 功能，提供受策略管控的系统命令执行能力，包括可执行文件路径白名单、工作目录、环境变量、超时和输出限制等安全校验。该特性为高级自动化场景（如代码执行、脚本调用）提供了可控的运行沙箱。  
  链接：https://github.com/sipeed/picoclaw/pull/3282

- **#303 – fix: make bot greeting name configurable via bot_name setting**  
  作者：AtharvaGurao  
  概要：修复Telegram和钉钉渠道中首次问候语硬编码为“PicoClaw”的问题。用户现在可通过配置 `bot_name` 字段自定义机器人名称，以匹配通过 `soul.md` 设定的个性化身份。该PR（创建于2026-02-16）经过漫长等待后终于合并，解决了社区长期诉求。  
  链接：https://github.com/sipeed/picoclaw/pull/303

此外，#3233（修复#3222的后向兼容性）也已被关闭，但该PR更偏重代码维护。

---

## 4. 社区热点

- **#3088 – [Feature] use vodozemac instead of libolm**  
  - 作者：pbsds | 评论：9 | 👍：2  
  - 摘要：要求用官方替代库vodozemac替换已不再维护且存在安全风险的libolm。该Issue被标记为高优先级且持续开放已超一个月，社区讨论活跃，是当前最受关注的功能请求。  
  - 链接：https://github.com/sipeed/picoclaw/issues/3088

- **#3153 – [BUG] Volcengine Doubao Seed tool calls leak**  
  - 作者：ms8great | 评论：5  
  - 摘要：火山引擎Doubao模型中工具调用偶尔泄露为原始文本，导致用户看到`<seed:tool_call>`标记而非实际执行。此Bug昨日已被关闭，但评论数较高，说明该问题影响面较广。  
  - 链接：https://github.com/sipeed/picoclaw/issues/3153

- **#3203 – [BUG] Matrix sync loop no reconnection logic**  
  - 作者：weissfl | 评论：4 | 👍：1  
  - 摘要：Matrix频道同步长轮询在网络中断后永久失效且无自动重连，需手动重启进程。该问题持续开放近三周，获得一定关注，但目前尚无对应修复PR。  
  - 链接：https://github.com/sipeed/picoclaw/issues/3203

---

## 5. Bug 与稳定性

当日报告的Bug共有5个（新开4个+更新1个），按严重程度排列如下：

| 严重等级 | Issue | 描述 | 状态 | 修复PR |
|----------|-------|------|------|--------|
| 严重 | #3281 | Web UI聊天输入框在历史较长时严重卡顿，影响日常使用体验 | OPEN | 无 |
| 严重 | #3203 | Matrix同步循环无重连机制，网络抖动后永久静默死亡 | OPEN | 无 |
| 中等 | #3274 | Antigravity提供者`INVALID_ARGUMENT`回归（`tool_schema_transform:simple`不再生效），从v0.3.1起出现 | CLOSED | 无明确PR（可能通过其他方式修复） |
| 中等 | #3278 | Antigravity OAuth登录被Google OAuth 2.0安全策略拦截，无法完成认证 | CLOSED | #3280 正在修复（OPEN） |
| 低 | #3255 | 钉钉聊天列表预览始终显示固定文本“PicoClaw”而非实际回复内容 | OPEN | 无 |

**值得关注**：#3278与#3274均与Antigravity（反重力）提供者相关，昨日已关闭，但修复方向有所不同。其中#3278的OAuth登录问题已有PR #3280在Open状态尝试解决，但#3274的`INVALID_ARGUMENT`回归目前无明确修复PR，可能仅通过配置变更规避。

**新Bug**：#3281（Web UI卡顿）是新创建的，尚未有评论，需要开发团队进一步确认复现环境。

---

## 6. 功能请求与路线图信号

当日主要功能请求：

- **#3088 – 替换libolm为vodozemac**（高优先级，开放中）  
  该请求与隐私与安全直接相关，libolm不再维护，Vodozemac是Matrix官方推荐。此Issue至今未关闭，但已有9条讨论，社区期望强烈。如果能与后续Matrix频道重构结合，可能纳入下一主版本规划。

- **PR #3200 – 可配置的默认回退模型链（feat: configurable default fallback chain）**  
  作者：lc6464 | 状态：OPEN（7月1日创建）  
  该PR在Web UI后台API中增加了模型默认回退链的持久化配置，允许用户设置默认模型、添加回退模型、调整顺序。与#3232（已关闭的限流Bug）有直接关联——限流问题正源于无回退模型时的配置失效。该PR如果合并，将同时解决一部分配置体验问题。  
  链接：https://github.com/sipeed/picoclaw/pull/3200

- **PR #3228 – 支持Anthropic提示缓存（SystemParts + cache_control）**  
  作者：AayushGupta16 | 状态：OPEN（7月6日创建）  
  该PR增加了对Anthropic消息API中系统消息块缓存控制的支持，使提示缓存功能真正可配置。对于使用Claude模型的高吞吐量用户具有明显价值。  
  链接：https://github.com/sipeed/picoclaw/pull/3228

- **PR #3279 – 防止工具调用格式泄露到seahorse摘要中**  
  作者：MrTreasure | 状态：OPEN（昨日新开）  
  修复因`partsToReadableContent`导致的工具调用格式泄露，与已关闭的#3153属于同类问题的不同触发路径。该修复应优先合并，以防止类似Bug卷土重来。  
  链接：https://github.com/sipeed/picoclaw/pull/3279

---

## 7. 用户反馈摘要

从昨日更新的Issue评论中可提炼以下用户痛点与使用场景：

- **Matrix频道稳定性是核心痛点**：用户 weissfl 在#3203中描述“所有消息静默丢失，直到手动重启进程”，且因主进程未退出导致systemd自动重启无效。这类“假活”状态对生产部署极不友好。
- **OAuth登录配置复杂**：用户 honbou 在#3278中反馈Google OAuth登录失败，并在#3280中进一步指出“授权码在失败后烧毁，整个流程必须重来”，表明远程/无头环境下的认证流程存在多个断裂点。
- **火山引擎Doubao模型用户对工具调用泄露感到困惑**：ms8great 在#3153关闭后虽无新评论，但此前描述“期望用户看到的是工具执行结果，而不是原始XML标签”，说明模型特有的工具调用格式未能被正确过滤，影响使用体验。
- **钉钉渠道用户对列表预览固定文本不满**：MrTreasure 在#3255中指出“只有在点进聊天后才能看到回复内容，列表预览永远是‘PicoClaw’”，属于消息通知体验的细微缺陷，但影响了日常快速浏览。

**满意度信号**：用户 honbou 在#3274和#3278中详细提供了复现环境和配置，尽管遇到两个Bug，但其清晰的报告方式反映出对项目有较高期望；同时，多个Bug在一天内被关闭（#3153、#3232、#3274、#3278），也表明项目维护者对社区反馈响应较快。

---

## 8. 待处理积压

以下为开放较久、未被解决的高影响或高关注度Issue/PR，提醒维护者关注：

| 条目 | 创建时间 | 最后更新 | 摘要 | 优先级 |
|------|----------|----------|------|--------|
| #3088（Feature） | 2026-06-09 | 2026-07-21 | 替换libolm为vodozemac（高优先级，help wanted） | 高 |
| #3203（Bug） | 2026-07-02 | 2026-07-21 | Matrix同步无重连（已获+1，评论4） | 高 |
| #3255（Bug） | 2026-07-14 | 2026-07-21 | 钉钉频道列表预览显示固定文字（尚无修复PR） | 中 |
| PR #3200（Feat） | 2026-07-01 | 2026-07-21 | 可配置默认回退模型链（待合并，与限流Bug相关） | 中 |
| PR #3228（Feat） | 2026-07-06 | 2026-07-21 | Anthropic提示缓存支持（待合并） | 中 |
| PR #3280（Fix） | 2026-07-21 | 2026-07-21 | 修复OAuth登录流程（新开，需尽快审查） | 高 |

**特别提醒**：#3088（vodozemac替换）已标记`help wanted`且持续开放超过6周，社区贡献者可能等待维护者确认实现方向。建议在下一次路线图讨论中明确是否纳入近期里程碑。

---

*数据来源：PicoClaw GitHub仓库 (github.com/sipeed/picoclaw)，时间截止2026-07-21 23:59 UTC。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是根据您提供的 NanoClaw 项目数据生成的 2026-07-22 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-22

## 1. 今日速览

今日项目活跃度较高，主要由社区贡献驱动。过去24小时内，项目共收到1个新Issue和12个PR，其中3个PR已被合并或关闭，显示了持续的迭代节奏。社区关注焦点集中在**渠道扩展**（如LINE）和**平台兼容性与稳定性修复**（如SELinux、WhatsApp）上。目前有9个PR处于待合并状态，维护团队需加大评审力度，以保持项目的高效迭代。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日主要进展体现在文档与基础架构的优化上，核心代码库改动较小。

- **文档治理更新**：PR [#3095](https://github.com/nanocoai/nanoclaw/pull/3095)（已关闭）由核心团队成员合并，重写了分支维护指南，以适应新的registry-branch模型。这有助于规范社区贡献流程，降低协作成本。
- **核心功能修复集成**：PR [#3116](https://github.com/nanocoai/nanoclaw/pull/3116) 和 [#3114](https://github.com/nanocoai/nanoclaw/pull/3114) 虽然被标记为“已关闭”，但其功能内容（如Langfuse追踪技能）表明社区正在积极开发和提交新技能，为项目生态添砖加瓦。请注意，这些可能是用于测试或遵循特定贡献流程的PR。

## 4. 社区热点

- **热议Issue：新增LINE渠道支持**： [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) 是今日唯一条活跃的Issues，提议新增 `/add-line` 技能以支持LINE渠道。该Issue引用了项目的RFS（技能请求）流程，且作者（joshm1230212）也曾提交过繁体中文文档PR，是社区的积极贡献者。LINE在东亚市场的主导地位使其成为高价值的需求，引起了社区成员的讨论（3条评论），但未获得点赞。

- **WhatsApp稳定性修复持续关注**：多个PR（如 [#3113](https://github.com/nanocoai/nanoclaw/pull/3113)、[#2896](https://github.com/nanocoai/nanoclaw/pull/2896)）围绕WhatsApp渠道的媒体处理问题进行修复。这表明WhatsApp集成是当前社区的痛点，来自不同贡献者的多个修复尝试，反映了该功能模块的复杂性以及用户对稳定性的迫切需求。

## 5. Bug 与稳定性

今日未报告新的严重Bug，但以下长期存在的PR直接关系到系统稳定性，需优先处理：

- **[严重] SELinux系统权限问题**：PR [#1530](https://github.com/nanocoai/nanoclaw/pull/1530)（待合并）为解决Docker卷挂载在SELinux系统（如Fedora、RHEL）上失败的问题。该PR自3月提出，至今已近4个月。对于使用这些系统的用户，这是一个阻碍使用的严重问题。

- **[中] WhatsApp媒体失败处理逻辑错误**：PR [#2896](https://github.com/nanocoai/nanoclaw/pull/2896)（待合并）修复了在审批回复路径上媒体失败备注应用不当的回归Bug。此问题可能导致审批流程中断，影响用户体验。

- **[低] 容器工作目录配置错误**：PR [#2236](https://github.com/nanocoai/nanoclaw/pull/2236)（待合并）修复了`container-runner.ts`中挂载点与Dockerfile中`WORKDIR`不匹配的问题。这会导致容器内工作目录指向空目录，影响依赖此路径执行的技能。

- **[中] OneCLI端口冲突**：PR [#3112](https://github.com/nanocoai/nanoclaw/pull/3112)（待合并）记录了`onecli setup`与主机上已有PostgreSQL服务的端口（5432）冲突问题，并提供了修复方案。这是一个典型的易用性Bug，影响了新用户的上手体验。

## 6. 功能请求与路线图信号

- **渠道扩展：LINE & Dial**：
  - Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) 提出的Line渠道支持是一个强信号，表明社区希望覆盖更多元的市场。如果该请求被采纳，Line很可能出现在下一版本或路线图中。
  - PR [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)（待合并）增加了对“Dial”渠道的支持，并融入了渠道选择器和技能模型。这表明项目有意系统化地扩展渠道生态系统，而非逐个硬编码。

- **Telegram消息兼容性**：PR [#3111](https://github.com/nanocoai/nanoclaw/pull/3111)（待合并）修复了Telegram传统Markdown解析器对包含下划线的URL处理失败的问题。这虽然不是新功能，但体现了项目对用户消息可靠传递的重视，很可能被优先合入。

## 7. 用户反馈摘要

- **用户痛点**：
  - 有用户（远在3月提交PR）在使用SELinux的系统上无法正常使用NanoClaw。这表明项目对Linux发行版的兼容性仍需加强，需要推动[#1530](https://github.com/nanocoai/nanoclaw/pull/1530)的合并。
  - 另一位贡献者指出，`onecli`安装程序会与用户已有的PostgreSQL服务产生端口冲突，导致安装失败。这是一个影响新用户入门体验的关键问题。
  - 在WhatsApp渠道中，用户报告了媒体消息处理失败的问题，包括审批流程中的逻辑错误和容器内文件读取问题，影响了核心消息功能。

- **社区满意点**：
  - 繁体中文README的提交（PR [#2950](https://github.com/nanocoai/nanoclaw/pull/2950)）和文档指南的更新（PR [#3095](https://github.com/nanocoai/nanoclaw/pull/3095)）显示，社区对项目的文档质量和本地化工作持积极态度。

## 8. 待处理积压

以下为长期未合并、对项目健康度有较大影响的重要PR，提醒维护团队关注：

- **#1530 (Docker SELinux)**： `fix: add SELinux :z label to Docker volume mounts` | 自2026-03-29起待处理。影响Fedora、RHEL等发行版用户的部署。[[链接](https://github.com/nanocoai/nanoclaw/pull/1530)]
- **#2236 (容器工作目录)**： `fix(container): align WORKDIR with actual group mount path` | 自2026-05-03起待处理。影响所有基于容器的执行环境。[[链接](https://github.com/nanocoai/nanoclaw/pull/2236)]
- **#2896 (WhatsApp媒体失败)**： `fix(whatsapp): apply media-failure note at the inbound boundary` | 自2026-06-30起待处理。影响WhatsApp渠道的稳定性和审批流程。[[链接](https://github.com/nanocoai/nanoclaw/pull/2896)]

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 IronClaw GitHub 数据，生成以下项目动态日报。

---

### IronClaw 项目动态日报 | 2026-07-22

---

#### 1. 今日速览

项目已正式进入 `v1.0.0-rc.1` 版本发布阶段，标志着自 `0.29.x` 以来的彻底架构重构（代号“Reborn”）已到达首个里程碑。过去 24 小时，项目社区活动极其活跃，共计处理了近 100 条 Issue 和 PR，其中核心开发团队正密集推进“Reborn”架构的收尾工作，包括运行时存储统一、授权模型简化和错误恢复能力提升。尽管处于发布候选阶段，新功能开发和社区协作热度依然很高，项目整体健康度非常积极。

#### 2. 版本发布

**ironclaw-v1.0.0-rc.1**
- **发布时间：** 2026-07-20
- **核心内容：** 这是对 `0.29.x` 系列的彻底重写，而非增量更新。新版本包含了全新设计的 Agent 运行时、存储层、扩展宿主以及 Web UI。
- **破坏性变更：** `ironclaw` 二进制文件已经被重构后的 CLI 替代。旧版 `src/` 目录下的代码已被完全删除，生产部署配置也已指向新架构。
- **迁移注意事项：**
    - 所有依赖旧 `ironclaw` 二进制或旧版 API 的集成需要重新配置。
    - 自定义扩展和工具需要迁移以兼容新的扩展宿主架构。
    - 生产部署（Railway, GCP）已自动迁移，但自定义部署需要人工确认。
    - **建议：** 仔细阅读此版本的 Release Notes，并重点关注 [PR #5598](https://github.com/nearai/ironclaw/pull/5598) 中列出的 API 破坏性变更详情，特别是 `ironclaw_common` 和 `ironclaw_skills` 包。

- **相关链接：** [Release v1.0.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/v1.0.0-rc.1)

#### 3. 项目进展

过去 24 小时，项目在“Reborn”架构的最终整合与收尾工作上取得了实质性进展。

- **存储层清理：** [PR #6430](https://github.com/nearai/ironclaw/pull/6430) 被合并，正式移除了内存中的 ratchet 存储，将所有相关用例迁移到文件系统备份的存储中。这标志着向持久化、可靠存储的最终一步。
- **授权与调度模型统一：** [PR #6432](https://github.com/nearai/ironclaw/pull/6432) 被合并，实现了“witness always-present”的授权模型。所有调度操作现在都将通过一个统一的授权“见证者（witness）”进行，简化了安全模型并为后续的“seal process re-dispatch”铺平了道路。
- **依赖更新与安全修复：** 多个依赖自动化更新 PR 被合并，包括对于 Tokio、Serde 和 DOMpurify (JS) 的升级。其中，`dompurify` 的更新（[PR #6196](https://github.com/nearai/ironclaw/pull/6196)）修复了潜在的 XSS 安全问题，提升了项目安全性。
- **开发流程推进：** 大量“Reborn”相关 Epic Issue 在今明两天内关闭，例如 `§4.3` 存储整合、`§5.11` 运行时合并，表明开发团队正按计划清理剩余工作，向稳定版迈进。

#### 4. 社区热点

讨论最活跃的 Issue 高度集中于“Reborn”架构的落地策略和核心重构。

1.  **[#2987] [EPIC] Track Reborn architecture landing strategy and grouped PR plan** (44 条评论)
    - **链接：** [Issue #2987](https://github.com/nearai/ironclaw/issues/2987)
    - **分析：** 作为“Reborn”架构的顶层追踪 Epic，它持续获得最多关注。社区关注点在于如何平稳、可审查地交付大规模重构，避免“巨石式 PR”带来的风险。它反映了项目在重大转型期对工程纪律和质量把控的重视。

2.  **[#6389] §5.11: collapse build_local_runtime + build_production_shaped into one build_runtime(cfg)** (10 条评论)
    - **链接：** [Issue #6389](https://github.com/nearai/ironclaw/issues/6389)
    - **分析：** 该 Issue 提议合并本地和生产环境的运行时构建路径，表明社区和开发者都在思考如何简化部署模型。这不仅降低了维护成本，也确保了两种环境行为更一致，是向生产就绪迈进的关键一步。

3.  **[#6263] §4.3 final store consolidation: retire InMemoryTurnStateStore** (10 条评论)
    - **链接：** [Issue #6263](https://github.com/nearai/ironclaw/issues/6263)
    - **分析：** 社区对移除最后一个“内存中”存储类型表现出高度兴趣。这标志着项目对数据持久性和可靠性的终极承诺。该 Issue 的关闭也意味着“Reborn”架构的存储层设计已全部定型。

#### 5. Bug 与稳定性

今日新报告的 Bug 和稳定性相关 Issue 主要围绕新版 WebUI 和错误恢复机制。

- **严重 Bug (已修复)：**
    - **[PR #6425] fix(webui): restore SSE streams across navigation**
        - **链接：** [PR #6425](https://github.com/nearai/ironclaw/pull/6425)
        - **情况：** 修复了在 WebUI 中导航时服务器发送事件（SSE）流中断导致页面状态丢失的问题。这是一个影响用户体验的高优先级修复。

- **Bug (已有 Fix PR)：**
    - **[#6394] Epic: Dogfooding & QA bug fixing 07/20/2026 - 07/24/2026**
        - **链接：** [Issue #6394](https://github.com/nearai/ironclaw/issues/6394)
        - **情况：** 这是一个为期一周的集中 Bug 修复 Epic。虽然具体 Bug 未列出，但有专门的 PR 正在处理。这表明团队正在进行发布前的密集测试。

- **稳定性提升 PR：**
    - **[PR #6437] fix(reborn): make model-visible failures recoverable**
        - **链接：** [PR #6437](https://github.com/nearai/ironclaw/pull/6437)
        - **情况：** 该 PR 专门处理运行时错误，确保模型看到的错误是可恢复的，提供了清晰的失败原因和行动建议，从而避免了运行时的非预期终止。这是提升 Agent 运行鲁棒性的重要一步。

#### 6. 功能请求与路线图信号

今日的功能请求体现了用户对 Agent 个性化和更强大集成能力的需求。

- **高频需求：**
    - **[#6433] Feature: Dedicated custom instructions / master prompt section**
        - **链接：** [Issue #6433](https://github.com/nearai/ironclaw/issues/6433)
        - **信号：** 用户明确提出了对自定义指令/系统提示词的独立管理功能需求，这与 ChatGPT/Claude 等产品的设计一致，表明用户期望 AI Agent 拥有更稳定、可控的“人格”和知识背景。

- **路线图方向：**
    - **[#6434] §5.3.2/§9: seal process re-dispatch — re-mintable process-lifetime authority**
        - **链接：** [Issue #6434](https://github.com/nearai/ironclaw/issues/6434)
        - **关联 PR：** [PR #6438](https://github.com/nearai/ironclaw/pull/6438)
        - **信号：** 此 Issue 是 #6396 的后续，旨在彻底消除旧的 `CapabilityDispatchRequest` DTO。对应的 PR 已打开，表明核心团队正在解决架构中最后的“技术债”，将能力调度完全统一到新的授权模型中。该功能将被纳入 `v1.0.0` 正式版。

#### 7. 用户反馈摘要

从 Issues 评论中提炼的用户反馈主要集中在以下方面：

- **对架构转型的谨慎期待：** `#2987` 中的评论显示，社区开发者和企业用户虽然对“Reborn”架构的潜力感到兴奋（如点赞数），但同时对大规模 PR 的审查质量表示担忧，希望保持模块化和可追踪的交付过程。这表明项目在获取用户信心的同时，仍需持续提供清晰的变更路线图。
- **对个性化设置的渴求：** `#6433` 的提出者（`sergeiest`）代表了一类用户的心声：他们希望 Agent 能记住长期偏好，而不是每次对话都需重新“喂”提示词。这反映出从“通用聊天”向“个人化助手”转型的用户期望。
- **对跨渠道一致性的诉求：** `#2792` (Gateway state convergence) 和 `#2392` (Multi-account support) 的存在表明，真实用户遇到了多端（如 Web UI 与 Slack）状态不一致、以及多账户（如多个 Telegram/WeCom 账号）配置复杂的问题。用户期望一个统一、可靠的接口管理所有渠道。

#### 8. 待处理积压

以下 Issue 和 PR 长期未获得更新或被标记，建议维护者关注：

- **长期未响应的功能请求 Issue：**
    - **[#2392] Feature Epic: Host-level multi-account support for all messaging channels**
        - **链接：** [Issue #2392](https://github.com/nearai/ironclaw/issues/2392) (创建于 2026-04-13，0 条评论)
        - **风险：** 该功能需求明确，且提及了 WeCom, Telegram, Slack 等多个渠道均有此限制。长时间未收到官方回复或纳入路线图，可能导致有大规模部署需求的用户流失。

- **长时间打开的“参考性”PR：**
    - **[PR #5503] [ Experiment ]Add compact Google extension capabilities**
        - **链接：** [PR #5503](https://github.com/nearai/ironclaw/pull/5503) (已打开 21 天)
        - **风险：** 这是一个实验性功能的 PR，增加了 Gmail 和 Google Calendar 的高级能力。如果项目方认为该 PR 有价值，应提供 feedback 或合并策略；若无纳入计划，应明确关闭，减少社区贡献者的等待时间。

- **已过期的发布 PR：**
    - **[PR #5598] chore: release**
        - **链接：** [PR #5598](https://github.com/nearai/ironclaw/pull/5598) (已打开 19 天)
        - **情况：** 这是一个由 CI 机器人创建的自动发布 PR，列出了 `ironclaw_common` 和 `ironclaw_skills` 的 breaking changes。该 PR 长期未合并，可能与 `v1.0.0-rc.1` 的手动发布流程有关，但需确认是否会正式处理或关闭，以免阻塞自动化的发布流水线。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 2026-07-22 的 GitHub 数据生成的《LobsterAI 项目动态日报》。

---

## LobsterAI 项目动态日报 | 2026-07-22

### 1. 今日速览

今日项目活跃度 **高**。过去 24 小时内，社区提交了 10 个 Pull Request，其中 5 个已被合并或关闭，显示出高效的代码迭代节奏。核心开发团队集中解决了多个用户痛点，包括修复图片附件在模型切换时的状态同步问题、优化 Artifact 分享流程与订阅拦截策略，并引入了 Windows 静默更新功能。尽管今日无新版本发布，但当前在 5 个待合并 PR 中，有 2 个（#2373, #2374）是针对重要功能与用户体验的直接改进，预示着下一轮功能增强已近在咫尺。

### 3. 项目进展

今日合并/关闭了 5 个 PR，标志着项目在多个关键领域取得了实质性进展：

- **核心功能修复**：PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 由 `yaodong-shen` 提交并已合并，直接解决了当用户切换模型（视觉/非视觉）时，图片附件处理状态不同步的顽疾。该修复确保 `dataUrl` 和文件路径能根据当前模型能力正确切换，是今日最重要的功能完善。
- **用户体验优化**：
    - PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（待合并）新增了“永久隐藏侧边栏广告横幅”开关，响应用户对更清洁界面的长期诉求。
    - PR [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) 已合并，为 Windows 平台实现了静默安装更新功能，提升了更新过程的流畅度。
- **协作与 Artifact 功能增强**：开发者 `liugang519` 贡献了 3 个已合并的 PR，专注于完善 CoWork 和 Artifact 功能：
    - [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) 完善了浏览器注释功能，支持样式修改注释，并优化了标注状态管理。
    - [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370) 和 [#2369](https://github.com/netease-youdao/LobsterAI/pull/2369) 重塑了 Artifact 的分享与部署流程，引入了统一的订阅拦截弹窗，并优化了访问权限提交流程，使其更清晰、健壮。
- **架构与稳定性**：PR [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372) 已合并，修复了 OpenClaw Token 代理的 SSE 截断问题，提升了服务稳定性。

### 4. 社区热点

- **热点 Issue**：[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) “图片附件不随模型切换重新处理” 虽然创建于 4 月底，但在今日因 PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 的修复而成为焦点。该 Issue 详细描述了用户在不同视觉能力模型间切换时，附件处理失败的三种具体场景，引起了评论区的讨论。社区核心关切在于 **AI 对话的上下文一致性**，即用户期望附件处理逻辑能 100% 跟随当前模型的输入能力，而非固定在最初创建时的状态。该问题已得到开发者的直接响应和修复。

### 5. Bug 与稳定性

| 严重程度 | Bug 描述 | 相关 Issue/PR | 修复状态 |
| :--- | :--- | :--- | :--- |
| **高** | 图片附件在不同视觉能力模型间切换时，提交内容与模型能力不匹配，导致视觉模型无法看到图片或非视觉模型收到无效数据。 | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | **已修复** (PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 已合并) |
| **中** | OpenClaw Token 代理在传输 SSE 流时出现数据截断。 | PR [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372) | **已修复** (PR 已合并) |
| **低** | 在文档或评论中提及的某些边缘情况，如“清空草稿注释时 webview 标注会话未同步停止”。 | PR [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) | **已修复** (PR 已合并) |

### 6. 功能请求与路线图信号

- **UI 自定义**：PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 新增“永久隐藏广告横幅”选项，暗示项目组开始重视用户对界面简约化的需求。这可能被纳入下一版本的常规设置中。
- **更新体验**：PR [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) 的 Windows 静默更新功能已合并，表明自动、无感的更新体验是当前迭代的一个明确方向。
- **长期待办（依赖更新）**：`dependabot` 提起了三个关于升级核心依赖（`cross-env`, `react-dom`, `vite`）的 PR（[#1279](https://github.com/netease-youdao/LobsterAI/pull/1279), [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280), [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)），这些虽是常规维护，但长期未合并（已 stale）可能会积累技术债务。维护者需要评估风险并安排升级窗口。

### 7. 用户反馈摘要

- **核心痛点得到解决**：从 Issue [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) 的分析来看，用户在使用多模型对话时，对**附件处理逻辑的实时性与正确性**要求极高。用户痛点集中在“我切了模型，但是对话上下文没跟上”，这是一个关乎模型输出质量的根本性问题。
- **使用场景**：用户会在一次对话中频繁切换不同能力的模型（如从通用模型切换到视觉模型），以寻求最佳的解答效果。附件（尤其是图片）能否被正确识别，是评估 AI 助手“聪明与否”的关键体验。
- **满意点**：从 PR 的快速合并（尤其是 [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)）可以看出，开发团队对**社区报告的复现性 Bug 响应迅速**，这有助于建立和维护用户信任。

### 8. 待处理积压

- **陈旧的依赖更新 PRs**：
    - [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279): `cross-env` 10.1.0 版本更新。
    - [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280): `react-dom` 19.2.4 版本更新。
    - [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281): `vite` 8.0.9 版本更新。
    - **风险提示**：这三个 PR 已标记为 `[stale]` 并停滞超过 3 个月。主要版本的重大升级（如 `vite` 从 5 到 8，`react-dom` 从 18 到 19）可能包含破坏性变更，需要投入资源进行测试和适配。但长期搁置会导致安全漏洞无法修复，并增加后续升级的难度。**建议项目维护者将依赖升级纳入短期迭代计划，至少完成风险较低的 `cross-env` 升级。**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-22

## 今日速览
- 项目在过去 24 小时内无任何新 Issue 或关闭记录，活跃度处于低位。
- 仅有一项自动化依赖更新 PR（#1161）仍在待合并状态，无其他人工贡献。
- 未发布新版本，项目核心代码无显性变动。
- 社区讨论与反馈近乎为零，建议关注项目维护方是否存在停滞风险。

## 版本发布
无

## 项目进展
- 今日无合并或关闭的 PR，唯一一条待合并 PR 为 **#1161**（[moltis-org/moltis PR #1161](https://github.com/moltis-org/moltis/pull/1161)），由 Dependabot 自动提交，用于将文档目录下的 `astro` 依赖从 `7.0.9` 升级至 `7.1.3`。该改动仅影响 `/docs` 子项目，不涉及核心代码，预计合并后能修复文档构建中的潜在依赖兼容性问题。

## 社区热点
- 今日无活跃讨论或高反应度 Issue/PR。整个项目社区静默，未产生任何有效交流。

## Bug 与稳定性
- 今日无新报告 Bug、崩溃或回归问题。

## 功能请求与路线图信号
- 无新功能请求提出。结合现有 PR 列表，未发现近期可能纳入下个版本的计划性变动。

## 用户反馈摘要
- 无可用用户反馈（Issues 评论区为空）。

## 待处理积压
- 当前无长期未响应的关键 Issue 或 PR。唯一的待合并 PR #1161 为自动化依赖更新，预计将由维护者快速合并。建议保持关注持续低活跃度是否为项目进入维护模式的信号。

---

*数据来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis)*  
*统计时间：2026-07-21 UTC 至 2026-07-22 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 CoPaw (github.com/agentscope-ai/CoPaw) 的 GitHub 数据，为您生成 2026-07-22 的项目动态日报。

---

### CoPaw 项目动态日报 (2026-07-22)

---

#### 1. 今日速览

过去24小时，CoPaw 项目保持极高活跃度。共处理 41 条 Issue 更新和 50 条 PR 更新，关闭/合并数量均接近半数，显示项目维护者积极响应社区反馈。v2.0.1-beta.1 补丁版本已发布，重点修复了入口导入和 MemorySpace 异常处理问题。社区讨论热度集中在**移动端适配**、**拖拽上传**以及**v2.0 版本的性能与对话稳定性**上，表明项目在功能完善与核心体验优化方面仍有较大需求。

#### 2. 版本发布

-   **v2.0.1-beta.1**: 这是一个补丁版本，主要进行了两项修复：
    - **修复**: 修复了 Tauri 桌面端入口点的绝对导入问题 (`#6234`)。
    - **修复**: 修复了 MemorySpace 中 `_saved_tool_refs` 方法未捕获 `OSError` 的潜在崩溃问题。
    - **提示**: 此版本未提及破坏性变更，v2.0.0 的用户可安全升级。

#### 3. 项目进展

今日合并/关闭了多项重要 PR，项目在以下几个方面有显著推进：

-   **治理与安全加固**: 合并了 `fix(governance): auto-register tools via @tool_descriptor` (#6190) 和 `fix(governance): refresh plugin tool defaults` (#6313)，统一了内置工具和插件工具的注册逻辑，并修复了插件工具默认值冻结等问题，强化了安全管控基础。
-   **核心运行时优化**: 合并了 `feat: support user editable agent mode` (#6270)，为用户提供了更灵活的代理模式配置能力。
-   **用户体验微调**: 合并了 `feat(agents): add one-click copy of agent configuration` (#6262) 和 `feat(logging): make rotation limits configurable` (#6183)，提升了用户配置效率和日志管理灵活性。
-   **OMP工作流集成**: 核心特性 `feat(omp): integrate OMP workflow modes` (#5882) 已进入合并待办队列，将为项目引入多种新的多代理工作流模式。

#### 4. 社区热点

-   **【热门讨论】`#2291` - 开放任务贡献清单**: 作为长期置顶贴，该 Issue 持续吸引社区关注（65条评论），是多位新贡献者的首个接触点。今日有 `#6312`（主题皮肤模块）和 `#6203`（Windows 进程探针修复）等 PR 关联此 Issue。
-   **【最多评论】`#6257` - 多工具调用输出重复思考内容**: 该 Bug 报告获得 13 条评论，成为社区关注的焦点。用户发现当智能体一次调用多个工具时，每个调用块的“思考”内容完全一致，导致重复的推理文本，严重影响复杂任务处理效率。虽已关闭，但修复方案值得关注。
-   **【高需求反馈】`#6297` - 拖拽上传文件**: 用户 `rerbin` 提出希望在对话中直接拖拽上传图片、PDF、Office 文档等，强调这对合同审核等商业场景至关重要。该需求收到 4 条评论，代表了大量办公用户的核心诉求。
-   **【高需求反馈】`#6281` - Web 控制台移动端适配**: 用户 `ook826092-cloud` 提出 Web 控制台适配移动端，方便随时随地操作。这与 `#6297` 共同反映了用户对移动办公和便捷性的强烈渴望。

#### 5. Bug 与稳定性

-   **【严重】`#6299` - 删除会话记录在 `history.db` 中残留，导致序列冲突与会话交叉污染**: 一个影响严重的 Bug，会导致删除会话后新建会话串入旧内容、页面空白或无响应。已有修复 PR `#6068` 在处理。
-   **【严重】`#5860` - v2.0版本频繁出现对话进度丢失和无限循环**: 用户报告 v2.0.0-beta.3 存在对话状态丢失和无限循环，且未触发上下文压缩，是 v2.0 系列的主要稳定性问题。
-   **【严重】`#6314` - 远程协议错误：peer closed connection without sending complete message body**: 用户报告在 v1.1.2 版本中出现 QwenPaw 主动关闭连接导致的错误，涉及网络交互稳定性。
-   **【一般】`#6257` - 多工具调用输出重复思考**: 影响工具调用效率，已有关联修复。
-   **【一般】`#6307` - v2.0引入约2秒固定性能开销**: 用户报告从 v1.x 升级到 v2.0.0.post3 后，每次简单回复都增加了约2秒的固定延迟，表明新架构存在性能回归。
-   **【一般】`#6301` - 错误的时间戳时区转换**: 影响会话时间显示，已有修复 PR `#6309`。

#### 6. 功能请求与路线图信号

-   **【高可能性】文件拖拽上传 (`#6297`)** 和 **Web 移动端适配 (`#6281`)**: 这两项呼声极高，且已有 UI 相关的 PR (`#6312` 主题模块) 在进行。预计项目会在近期版本中优先考虑这些提升易用性的功能。
-   **【可能纳入】对话级别模型指定 (`#6318`)**: 用户希望单 Agent 的不同对话能使用不同模型。已有来自社区贡献者的 PR `#5992` 实现了此功能，虽然尚在开放状态，但路线图信号强烈。
-   **【已有关联PR】工作区快捷访问 (`#6083`)**: 提出在桌面端增加产出物快捷访问按钮，目前已有活跃讨论，但尚未有直接对应的 PR。
-   **【架构级】工具调用前置条件规则 (`#6321`)**: 用户希望能在 `AGENTS.md` 中定义工具调用的前置条件，如修改文件前检查记忆。这是对 Agent 行为确定性更深层次的追求，可能被纳入未来的治理模式规划。
-   **【架构级】会话级时间信息自动附加 (`#6283`)**: 用户建议自动在上下文中附加真实时间，避免模型混淆日期。这是一个巧妙且成本低的优化点，有望快速实现。

#### 7. 用户反馈摘要

-   **移动端是刚需**: 多位用户明确表达了对移动端（手机/平板）操作的支持需求，包括 Web 控制台适配和 app 内体验优化 (`#6281`, `#6308`)。
-   **v2.0 稳定性是痛点**: 用户对 v2.0 的对话丢失 (`#5860`)、无限循环 (`#5860`) 和性能降级 (`#6307`) 反馈负面，表明大版本升级的稳定性仍是最需要关注的领域。
-   **工具调用体验待优化**: 用户对工具调用结果过长 (`#5976`)、思考内容重复 (`#6257`) 等问题感到困扰，希望有更精细的控制和更高效的输出。
-   **数据安全与一致性**: 用户报告了会话串扰 (`#6299`)、时间戳错误 (`#6301`) 等数据一致性问题，对 Agent 的可信度产生了影响。

#### 8. 待处理积压

-   **【高优先级】PR `#6068`**: **`fix(scroll): preserve session IDs during history migration`**。此 PR 直接关联到今日爆出的严重 Bug `#6299`（会话污染），自 7月13日 开启至今已有一周，仍为开放状态，建议维护者优先关注与合并。
-   **【长期未响应】Issue `#5284`**: **`Subagent approval request not pushed to external channel`**。此问题涉及子代理的安全审批通知无法推送至外部渠道（如 QQ），可能导致审批流程卡死。自 6月18日 开启，虽被关闭，但问题本身未完全解决，需要开发者跟进确认修复效果或重新评估。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 项目数据生成的 2026-07-22 项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-07-22

## 1. 今日速览

ZeroClaw 项目今日保持**高度活跃**态势，过去 24 小时内 Issue 和 PR 更新各达 50 条，社区参与度强劲。值得关注的是，安全相关 Bug（如代理绕过工具白名单、Shell 工具工作区逃逸）和稳定性问题（如 MCP 僵尸进程、内存泄漏）占据了开发与讨论的主要篇幅，多个严重 (S0/S1) 和安全风险 (risk:high) 的问题正处于活跃处理中。虽然无新版本发布，但一个关键的 `fix(web)` PR 已被合并，同时关于 Goal 模式、OpenAI 适配器等核心功能的讨论仍在深化，表明项目正进入功能完善与稳定性加固并重的阶段。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 及重要进展 (基于已关闭的 Issues 和 PR 分析):

- **Web 聊天渲染修复**: PR [#9055](https://github.com/zeroclaw-labs/zeroclaw/pull/9055) [已合并] 修复了文档翻译流程的不可重现性问题。Issue [#9120](https://github.com/zeroclaw-labs/zeroclaw/issues/9120) [已关闭] 修复了 SOP 路由在 `when` 条件为假时错误执行 `switch` 的 Bug，提升了工作流的稳定性。
- **Mattermost 渠道增强**: Issue [#7082](https://github.com/zeroclaw-labs/zeroclaw/issues/7082) [已关闭] 为 Mattermost 渠道增加了可选的 WebSocket 监听模式，减少了对轮询的依赖。
- **测试可移植性**: PR [#8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756) [已合并] 修复了在 Windows 系统上的媒体标记测试，提升跨平台兼容性。
- **运行时上下文可见性**: PR [#9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011) [已合并] 实现了 ZeroCode 仪表盘中的运行时上下文展示，改善了用户体验。

**项目整体推进**: 功能层面，Mattermost 渠道功能得到增强，开发者在测试和文档构建工具链上的体验得到改善。在稳定性层面，修复了 SOP 路由逻辑和跨平台测试问题，并向最终用户交付了更好的 Web 聊天体验。

## 4. 社区热点

今日讨论最活跃的议题反映了社区两个核心诉求：**安全加固** 与 **架构现代化**。

- **#8505 [Telegram 渠道配置故障]**: 获得了6条评论。用户报告 `zeroclaw channels doctor` 宣称渠道未配置，导致 Telegram bot 无响应。这是影响用户上手的严重问题，社区讨论热度高，期望能尽快修复。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)

- **#8226 [类型化 Git 身份]**: 同样获6条评论。该功能请求提出为内置的 Git 操作提供类型化的代理级别身份配置，以解决多租户环境下的身份、参数和 token 管理问题。这反映了社区对生产级、多用户场景的强烈需求。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)

- **#8303 [Goal 模式 RFC]**: 4条评论，获得1个👍。该 RFC 提议为长时间运行的自主会话创建一个名为“Goal 模式”的一流功能。这是对现有交互模式的重要补充，社区对此概念兴趣浓厚，讨论围绕其边界和行为展开。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)

此外，`vrurg` 贡献者发布的关于 Goal 模式的一系列 PR（#8687, #8688, #8689, #8746, #8996）构成了一个庞大的功能集，总评论数虽未前列，但庞大的代码变更量（均为 size:XL）表明这是社区目前投入重大精力的核心特性，正在密集开发和迭代中。

## 5. Bug 与稳定性

今日报告的 Bug 中，安全性问题最为突出：

- **[严重][S0]** **#9247 [Shell 工具工作区边界绕过]**: Shell 工具未执行 file 工具相同的 workspace 边界限制，可通过符号链接逃逸读写外部目录。这是一个严重的安全漏洞，目前**暂无 fix PR**。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)

- **[严重][S0]** **#8279 [代理绕过工具白名单]**: 代理（Delegate）子任务忽略了父任务的工具白名单限制，子任务可以调用父策略禁止的工具。这是一个严重的安全权限问题，目前**暂无 fix PR**，但在被积极讨论中。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)

- **[严重][S1]** **#8505 [Telegram 渠道配置失败]**: 如上文所述，导致用户工作流受阻（workflow blocked）。目前**暂无 fix PR**。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)

- **[风险:高]** **#8642 [MCP Tool Schema 克隆导致内存泄漏]**: 已拆分为独立问题，MCP schema 的克隆操作会导致代理循环中 RSS 无限增长甚至 OOM。目前标记为 `in-progress`，有**持续的修复工作**。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)

- **[风险:高]** **#8731 [MCP 僵尸进程]**: Stdio 模式的 MCP 服务器进程没有被正确清理，会累积为僵尸进程，影响守护进程稳定性。目前标记为 `in-progress`。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)

- **[风险:高]** **#8718 [配置模板导致 Whisper 静默故障]**: `zeroclaw config init` 生成的配置模板存在错误值，导致本地语音转录功能被静默禁用。目前标记为 `in-progress`。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)

## 6. 功能请求与路线图信号

社区提出的新功能建议展现出对 ZeroClaw 平台化、集成化的期待：

- **#8603 [OpenAI 兼容适配器 RFC]**: 提议构建一个 OpenAI Chat Completions API 兼容适配器，允许 Open WebUI、LobeChat 等第三方客户端直接连接。此 RFC 若被采纳，将极大扩展 ZeroClaw 的生态兼容性。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)

- **#8780 [Gemini 实时语音渠道 RFC]**: 提议增加一个支持语音到语音的实时多模态渠道，与 Gemini Live 类似。这表明社区对多模态交互和实时通信的兴趣。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)

- **#8600 [跨模型切换] 与 #8568 [Mixture-of-Agents]**: 这两个功能请求都指向了对模型灵活性的更高要求。用户希望能在单个提供者下轻松切换模型，甚至实现多种模型协同工作（MoA）。这表明用户正在寻求更复杂的提示和推理策略。
  [链接 1](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | [链接 2](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)

**路线图信号**: `#8303 [Goal Mode]` 相关的多个 XL 级 PR 正在有序推进，这将是下一版本最重要的功能。同时，`#8288 [SOP 控制面]` 和 `#8583 [频道/源边界清理]` 等追踪器（tracker）的活跃，表明了项目正在对内部架构进行有组织的“清理”和“升级”，为未来的稳定性和扩展性打基础。

## 7. 用户反馈摘要

从 Issue 评论中可提炼出以下用户痛点和期待：

- **文档与体验不符**: 用户 `cr3a7ure` 在 #8810 中尖锐地指出“如果实现不正确，废料终归是废料”，并且抱怨文档与 `zeroclaw channels doctor` 的实际行为不符，导致 Telegram 配置困难。这反映了新用户上手时存在一定的挫败感。
- **配置脆弱且不直观**: 用户 `lynnkeele` 在 #8718 中描述了配置文件一个错误的值是如何静默地导致整个语言转录功能失效的，这让诊断变得非常困难。用户 `yanchenko` 报告了 #9240 中，配置文件因为键名包含点号（如模型名 `gpt-4.1`）而导致写入被静默丢弃的 Bug。`yanchenko` 在 #8834 中还发现 `config set` 无法在非 `providers` 的动态 map 中创建新别名。
- **迫切需求模型灵活性**: 用户 `vvuk` (从 moltis 迁移而来) 在 #8600 中表达了对轻松切换同一提供者下不同模型能力的强烈需求，这是其迁移过程中缺失的关键特性。
- **对安全边界的关注**: 关于代理权限 (#8279) 和 Shell 工具逃逸 (#9247) 的讨论，表明高级用户或安全敏感用户正在深入测试平台的边界，并反馈了严重的安全隐忧。

## 8. 待处理积压

以下为需要维护者特别关注、长时间未得到响应的关键议题：

- **#8309 [SkillForge 功能悬挂]**: 自 2026-02-15 合并以来，SkillForge 功能未在运行中的 ZeroClaw 实例内被使用。Issue 要求社区决定是完成其连接（使用安全默认值）还是直接移除。该问题已近一个月未有新进展，是一个技术债务堆积点。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)

- **#8396 [将 Wire Protocol 作为一等公民]**: 这份 RFC 提出了对提供者构建和上板方式的根本性变革。虽然只有 2 条评论，但其 `domain:architecture` 标签和 `risk:high` 属性表明其影响深远。该 RFC 自 6 月底提出后，讨论进展缓慢，需要维护者介入推动讨论。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)

</details>

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*