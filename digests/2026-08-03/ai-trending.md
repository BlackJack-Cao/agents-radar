# AI 开源趋势日报 2026-08-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-02 23:42 UTC

---

# AI 开源趋势日报 | 2026-08-03

---

## 一、今日速览

今日 AI 开源社区呈现 **Agent 工具链爆发 + 本地推理降本** 两大主线。Trending 榜上，微软两门 AI 入门课程（AI & Generative AI）合计新增超 3200 star，教育类需求持续旺盛；**反向渗透工具 `reverse-skill`** 以 AI 驱动路由和安全工具链自举获 1145 star 登热榜；**低成本推理**成为焦点：`airllm`（单卡 4GB 跑 70B）与 `antirez/ds4`（DeepSeek 本地推理引擎）双双上榜。Agent 记忆与技能项目密集涌现——腾讯云发布 `TencentDB-Agent-Memory` 团队级记忆中枢，`Agent-Reach` 让 AI 扫描全网零 API 费用。主题搜索中，**Agent 平台**（Hermes、AutoGPT、nanobot）与 **RAG 基建**（RAGFlow、AnythingLLM、mem0）仍稳居高 Star 阵营，但增速放缓，社区正将注意力从通用框架转向 **“技能/记忆/知识图谱”这三大 Agent 升级组件**。

---

## 二、各维度热门项目

### 🔧 基础工具（框架 / 推理引擎 / 开发工具）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [ollama](https://github.com/ollama/ollama) | ⭐177,616 | 本地运行 DeepSeek、Qwen 等主流模型的一站式工具，生态最成熟。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐87,971 | 高吞吐、低显存的 LLM 推理引擎，生产部署首选。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,262 | 模型定义与训练的标准框架，覆盖文本/视觉/多模态。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐0 (+963 today) | 单张 4GB GPU 即可运行 70B 模型推理，**低成本推理新突破**。 |
| [antirez/ds4](https://github.com/antirez/ds4) | ⭐0 (+187 today) | 专为 Metal/CUDA/ROCm 优化的 DeepSeek 本地推理引擎，性能优先。 |
| [rig](https://github.com/0xPlaygrounds/rig) | ⭐8,143 | Rust 生态的模块化 LLM 应用框架，安全+高性能。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,259 | 覆盖 100+ 数据集的 LLM 评测平台，模型选型必用。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,431 | 面向系统工程师的 LLM 推理服务课程：从零构建 tiny vLLM + Qwen。 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,772 | 自主 AI Agent 先驱，持续迭代任务规划与工具调用能力。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐224,299 | “和你一起成长的 Agent”，强调记忆与自适应能力，社区热度极高。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107,614 | 让 AI Agent 像人一样操控浏览器，自动化线上操作。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,405 | 前端 Agent 框架（React/Angular/Mobile），降低 Agent UI 开发门槛。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,278 | 开源超级 AI 助手（原 chatgpt-on-wechat），支持多模型多渠道，**轻量可扩展**。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,517 | 超轻量个人 AI Agent 框架，自带 WebUI、工具、记忆、MCP 支持。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐0 (+645 today) | 给 Agent 装上“眼睛”：一次 CLI 搜索 Twitter、Reddit、YouTube 等全平台，**零 API 费用**。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐0 (+389 today) | 终端原生 AI Coding Agent，针对 DeepSeek 前缀缓存做稳定性优化。 |

### 📦 AI 应用（垂直场景）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐101,197 | 根据主题一键生成高清短视频，自动化工作流 + 大模型驱动。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐42,565 | AI 将文档/主题转为原生 PowerPoint，支持动画、图表、音频旁白。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐59,871 | LLM 驱动多市场股票智能分析，实时行情+新闻+看板推送。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐29,333 | 个人交易 Agent，集成市场分析和自动执行。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | ⭐0 (+1145 today) | AI 自动路由的渗透/逆向技能包，支持 Claude Code、Cursor 等客户端，**安全领域 AI 化新方向**。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐62,551 | 开源 AI 求职助手：扫描职位、评分、定制简历，本地运行。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐49,293 | AI 生产力工作室，聚合 300+ 助手、智能对话、自主 Agent。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐147,642 | 最流行的 LLM UI（支持 Ollama/OpenAI 等），用户友好、功能丰富。 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,390 | 从零用 PyTorch 实现类 ChatGPT LLM，**LLM 理解的必读教程**。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | ⭐0 (+2617 today) | 12 周 24 课，AI 入门课程，今日新增最高。 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | ⭐0 (+588 today) | 21 课，生成式 AI 入门，微软系列教程。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,670 | 经典 ML 框架，至今仍是工业部署主力。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,137 | 动态神经网络框架，研究与生产的首选。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐60,132 | YOLO 目标检测最新版，兼顾速度与精度。 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | ⭐48,546 | 可复用计算机视觉工具库，降低视觉任务开发成本。 |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐86,634 | 顶级开源 RAG 引擎，融合 Agent 能力构建 LLM 上下文层。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐64,245 | 本地优先的 RAG 平台，支持多种文档和模型，**个人知识库利器**。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,333 | AI Agent 的通用记忆层，跨 session 持久化上下文。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,469 | 高性能云原生向量数据库，ANN 搜索标配。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,727 | 高 scale 向量数据库，支持云端部署。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐11,059 | 嵌入式多模态检索库，开发者友好。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐101,058 | 将代码库/docs/SQL 转换为可查询知识图谱，**无向量库的确定性推理 RAG**。 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | ⭐70,155 | 《从零构建智能体》中文教程，结合 RAG 与 Agent 实践。 |

---

## 三、趋势信号分析

1. **Agent 技能与记忆成为爆点**：Trending 榜单中近一半项目围绕 **Agent 技能/记忆**——`Agent-Reach`（全平台搜索技能）、`TencentDB-Agent-Memory`（团队级记忆中枢）、`last30days-skill`（调研总结技能）、`k-skill`（韩文技能集）。这表明社区焦点正从“搭建 Agent 框架”转向 **“如何让 Agent 更聪明/更持久”**，技能库、记忆系统正成为新基建。

2. **低成本推理路径清晰化**：`airllm`（4GB GPU 跑 70B）与 `ds4`（专为 DeepSeek 优化）的同时登榜，配合 `tiny-llm` 的推理课程，说明 **“用消费级硬件运行大模型”** 已从概念变为可实操方案。这与 DeepSeek 系列模型的开源和量化技术成熟密切关联。

3. **安全垂直领域 AI 化获关注**：`reverse-skill` 今日新增 1145 star，将 AI 路由、工具链自举引入逆向/渗透测试，并兼容 Claude Code、Cursor 等 AI 编码客户端。这是 **AI Agent 从通用场景向专业安全领域渗透** 的典型信号，类似趋势曾在 DevOps、数据分析中上演。

4. **多模态 Agent 交互需求初显**：`Agent-Reach` 除了文本，还支持 GitHub、YouTube、Bilibili、小红书等平台的多模态内容读取，说明 Agent 能力正在从纯文本向 **“看网页、读视频、查社交”** 扩展，下一阶段可能需要更强的多模态解析能力。

---

## 四、社区关注热点

- **`NousResearch/hermes-agent`（224k⭐）**：持续霸榜，主打“随用户成长的 Agent”，其记忆与自适应机制值得研究，或代表 Agent 长期交互的新范式。
- **`Graphify-Labs/graphify`（101k⭐）**：无向量库的确定性 RAG，通过 AST 解析代码库构建知识图谱，为 RAG 提供另一种 **可解释、无幻觉** 的思路，企业级应用潜力大。
- **`shubhamsaboo/awesome-llm-apps`（129k⭐）**：100+ 免费开源 LLM 应用/Agent/Skills 集合，适合快速学习和二次开发。
- **`TencentCloud/TencentDB-Agent-Memory`（Trending +604 today）**：团队级记忆中枢，将对话、文档、代码转化为可共享的 Chat Memory / Skill / LLM-Wiki / Code-Graph，**Agent 协作的底层基础设施**，值得跟进。
- **`antirez/ds4`（Trending +187 today）**：Redis 作者 antirez 的新作，专注于 DeepSeek 本地推理，体现资深技术人对低成本推理的重视，可能引发更多高质量推理引擎诞生。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*