# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-27 23:45 UTC

---

# AI 开源趋势日报 — 2026-07-28

## 今日速览

今日 GitHub AI 热点呈现三大特征：**企业级 AI 工程化工具**迎来爆发（阿里开源基于 LLM Agent 的代码审查工具 open-code-review 单日增长近千星），**多模态 Agent 能力**持续拓展（Claude-video 让 AI 看懂视频，Airi 打造可交互的虚拟伴侣），以及**垂直领域大模型**（金融市场基础模型 Kronos）获得社区认可。同时，Agent 框架生态继续高歌猛进，AutoGPT、Dify、LangGraph 等老牌项目保持极高关注度，RAG 基础设施（RAGFlow、Milvus）则进一步向生产级演进。

## 各维度热门项目

### 🔧 AI 基础工具
- [ollama/ollama](https://github.com/ollama/ollama) ⭐177,027  
  本地运行 LLM 推理引擎，支持 Kimi、DeepSeek、Qwen 等主流模型，是个人开发者和企业部署的首选工具。
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,046  
  🤗 生态核心框架，统一 API 支持文本、视觉、音频等多模态模型的推理与训练。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,024  
  动态神经网络框架，AI 研究与生产的基石级工具。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐146,971  
  用户友好的 AI 界面，支持 Ollama 与 OpenAI API，让本地部署大模型像使用 ChatGPT 一样简单。
- [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) ⭐66,796  
  经典机器学习库，持续在分类、回归、聚类领域提供稳定可靠的算法实现。
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐59,951  
  YOLO 系列（v8/v11/YOLO26）目标检测、分割、姿态估计的统一训练与部署框架。

### 🤖 AI 智能体/工作流
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐185,718  
  经典自主 Agent 项目，提供 API 和可视化界面，让开发者快速构建自动完成复杂任务的 AI 代理。
- [langgenius/dify](https://github.com/langgenius/dify) ⭐150,454  
  可视化 Agentic 工作流构建平台，支持 RAG、工具调用与多模型编排，从原型到生产无需重构。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐107,024  
  让 AI Agent 像人类一样操作浏览器，自动化网页任务，是 Web3、数据采集场景的核心工具。
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) ⭐38,265  
  构建弹性、有状态的 Agent 工作流，支持循环、分支等复杂控制流，与 LangChain 深度集成。
- [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) ⭐36,320  
  前端 Agent UI 栈（React、Angular、Mobile），提供 AG-UI 协议，快速为应用添加 AI 交互界面。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐221,407  
  可扩展的 Agent 框架，强调自主进化与长期记忆，社区活跃度极高。
- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) ⭐0 (+221 today)  
  AI Agent 技能：跨 Reddit、X、YouTube 等平台研究任意主题并合成摘要，代表 “Agent Skill” 新范式。

### 📦 AI 应用
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐49,049  
  AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 预设助手，统一访问前沿 LLM。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐99,559  
  根据关键词一键生成高清短视频，AI + 自动化工作流的典型案例，内容创作利器。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐41,413  
  AI 将文档/主题转为原生 PowerPoint，支持动画、图表、音频旁白，演示文稿制作效率革命。
- [alibaba/open-code-review](https://github.com/alibaba/open-code-review) ⭐0 (+980 today)  
  阿里开源的代码审查工具，结合确定性流水线与 LLM Agent，精准行级注释，内置 NPE/SQL注入等规则集，企业级工程实践代表。
- [bradautomates/claude-video](https://github.com/bradautomates/claude-video) ⭐0 (+412 today)  
  让 Claude 具备视频理解能力：下载、抽帧、转录后交给 LLM 分析，多模态 Agent 应用典型。
- [moeru-ai/airi](https://github.com/moeru-ai/airi) ⭐0 (+554 today)  
  自托管 Grok 风格虚拟伴侣，支持实时语音聊天、Minecraft/Factorio 游戏操控，开源版 Neuro-sama。
- [santifer/career-ops](https://github.com/santifer/career-ops) ⭐61,856  
  开源 AI 求职助手：扫描职位、A-F 评分、定制简历、跟踪申请，本地运行于 AI CLI 中。

### 🧠 大模型/训练
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐99,977  
  从零实现类 ChatGPT LLM 的教程级项目，PyTorch 手写每一步，是学习大模型原理的圣经。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐53,906  
  仅用 2 小时从零训练 64M 参数小模型，低资源训练的标杆示范，适合个人实验。
- [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) ⭐0 (+442 today)  
  金融市场的 Foundation Model，使用海量金融数据训练，专注量化分析与预测。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,240  
  大模型评测平台，支持 100+ 数据集，覆盖 Llama、Qwen、GLM 等主流模型，社区标准评估工具。
- [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) ⭐11,049  
  仅 100 行代码的 LLM 框架，强调极简与可组合性，适合快速原型验证。

### 🔍 RAG/知识库
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐86,162  
  领先的开源 RAG 引擎，融合 Agent 能力与深度文档理解，构建高质量上下文层。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐63,978  
  全功能的本地 RAG 应用，支持多模型、多文档格式，强调数据主权。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐61,860  
  AI Agent 的通用记忆层，跨会话持久化上下文，是构建长期记忆 Agent 的基础设施。
- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐51,146  
  文档 Agent 与 OCR 平台，连接 LLM 与非结构化数据，RAG 核心中间件。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,391  
  云原生高性能向量数据库，支撑大规模 ANN 搜索，生产级 RAG 标配。
- [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33,613  
  极高性能向量数据库与搜索引擎，支持过滤、混合搜索，Rust 实现保证低延迟。

## 趋势信号分析

今日趋势释放出三个关键信号：

1. **企业级 AI 工程化进入爆发期**：阿里巴巴开源的 `open-code-review` 单日近千星，表明大型科技公司正在将内部沉淀的 LLM Agent 实践经验工具化、开源化。这类结合确定性规则与 Agent 的混合架构（Hybrid Architecture），可能成为未来企业级 AI 工具的标准范式。

2. **Agent 能力向多模态纵深演进**：`claude-video` 让 LLM Agent 看懂视频（抽帧+转录），`airi` 将 Agent 与实时语音、游戏操作结合，`browser-use` 持续统治网页操控——Agent 正从纯文本对话升级为 **“看、听、动”** 的全能助手。这一趋势与近期多模态大模型（如 GPT-4o、Gemini 系列）的成熟直接相关。

3. **垂直领域大模型受追捧**：金融领域的 `Kronos` 在 Trending 中获得 442 星，反映了社区对**专业性更强、领域数据更深的专用模型**的需求。与通用大模型同质化竞争不同，金融、医疗、法律等垂直模型正在形成差异化优势。

值得警惕的是，大量新项目仍集中在 Agent 框架和 RAG 基础设施层面，**同质化竞争加剧**，真正能解决实际业务痛点的应用层项目（如 `career-ops`、`ppt-master`）数量相对较少，这可能是下一个突破口。

## 社区关注热点

- **阿里 open-code-review**：企业级代码审查 Agent，结合静态分析与 LLM 的行级注解，值得所有开发团队跟进，或将成为 CI/CD 流水线标配。
- **Claude 视频理解方案**：`claude-video` 提供了给 Claude 增加视觉能力的低成本通路，对于需要处理视频内容的开发者极具参考价值。
- **本地化 Agent 体验**：`airi` 与 `open-webui` 带动了自托管 AI 伴侣/助手的热潮，隐私与可控性是核心诉求，可关注这类项目对边缘设备（如 Mac、树莓派）的适配。
- **RAG 向 Agent 记忆融合**：`mem0` 作为通用记忆层，`ragflow` 融合 Agent 能力——RAG 正从纯检索增强升级为**智能记忆+推理**架构，这是下一代 AI 应用的关键基础设施。
- **金融垂直模型**：`Kronos` 的出现提示，**行业数据集+领域知识**有望成为大模型创业的新赛道，建议留意后续的模型开源与金融应用生态建设。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*