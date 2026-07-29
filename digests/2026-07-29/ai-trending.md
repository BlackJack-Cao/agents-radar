# AI 开源趋势日报 2026-07-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 23:40 UTC

---

## 《AI 开源趋势日报》2026-07-29

### 1. 今日速览

- **AI 智能体生态持续爆发**：今日 Trending 榜中，超过半数项目与智能体/代理相关，包括自托管语音伴侣、Claude 视频观察、代理治理工具等，社区对“让 AI 更自主、更可控”的需求空前强烈。
- **语音与视频交互成为热点**：HuggingFace 推出 `speech-to-speech` 框架，`bradautomates/claude-video` 让 Claude 具备视频理解能力，表明多模态交互正在从文字向音视频快速扩展。
- **微软推出代理治理工具箱**：`agent-governance-toolkit` 首次登榜，聚焦代理安全与可靠性，反映出行业在追求智能体能力的同时，开始重视治理与合规。
- **本地化 / 自托管趋势明显**：`moeru-ai/airi`、`affaan-m/ECC`、`open-webui` 等多个项目强调“自己拥有”，用户希望在不依赖云端的情况下运行 AI 代理。
- **RAG 与知识图谱基础设施加速**：`Graphify-Labs/graphify` 将代码库转为可查询知识图谱，`mem0`、`cognee` 提供长期记忆层，向量数据库生态持续成熟。

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[ollama/ollama](https://github.com/ollama/ollama) ⭐177,132**  
  本地运行多种大模型的推理引擎（支持 Kimi、DeepSeek、Qwen 等），开箱即用，今日新增未提供但总星数持续领先。
  
- **[huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,074**  
  🤗 Transformers 模型定义框架，覆盖文本、视觉、音频、多模态，是 AI 开发者的基础库。
  
- **[andrewyng/aisuite](https://github.com/andrewyng/aisuite) ⭐0（+92 today）**  
  统一接口对接多个生成式 AI 提供商（OpenAI、Anthropic 等），简化多模型切换，吴恩达团队出品。
  
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐142,819**  
  代理工程平台，提供链式调用、工具集成、状态管理，是构建复杂 LLM 应用的核心框架。
  
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) ⭐62,953**  
  压缩工具输出、日志、RAG 块等，减少传递给 LLM 的 token 数，可节省 20%~95% 的 token，提升效率。
  
- **[Picovoice/picollm](https://github.com/Picovoice/picollm) ⭐315**  
  设备端 LLM 推理引擎，基于 X-Bit 量化，支持在手机或嵌入式设备上运行模型。

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐234,774（+692 today）**  
  “代理驾驶舱”系统，为 Claude Code、Codex 等提供技能、记忆、安全、研究能力，今日新增暴增，社区高度认可。
  
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐185,741**  
  自主 AI 代理愿景项目，让任何人都能构建和使用 AI，持续引领智能体潮流。
  
- **[langgenius/dify](https://github.com/langgenius/dify) ⭐150,581**  
  可视化构建代理工作流、RAG 管道，支持多模型与工具，从原型到生产的协作平台。
  
- **[browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐107,128**  
  “让网站为 AI 代理所用”，自动化浏览器操作，赋能 AI 执行在线任务（表单填写、爬取等）。
  
- **[microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) ⭐0（+17 today）**  
  微软推出的代理治理工具包，涵盖策略执行、零信任身份、沙箱执行、可靠性工程，应对 OWASP Agentic Top 10。
  
- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐46,338**  
  超轻量自托管 AI 代理框架，支持 WebUI、工具、记忆、MCP、多代理协作，几行代码即可部署。

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[moeru-ai/airi](https://github.com/moeru-ai/airi) ⭐0（+796 today）**  
  自托管的 Grok 伴侣，支持实时语音聊天、Minecraft 和 Factorio 游戏，Web/macOS/Windows 全平台覆盖，今日新增极高。
  
- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video) ⭐0（+989 today）**  
  给 Claude 视频观看能力：下载视频、提取帧、转录、递交给 Claude，今日新增榜单第一。
  
- **[huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) ⭐0（+177 today）**  
  用开源模型构建本地语音智能体，实现语音到语音的实时交互，HuggingFace 官方出品。
  
- **[virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) ⭐0（+366 today）**  
  将技术书籍 PDF 转换成 Claude Code 技能，可直接在编码环境中引用和学习，提升开发者效率。
  
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐99,753**  
  利用 AI 大模型和自动化工作流，根据主题一键生成高清短视频，流量变现工具。
  
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐49,092**  
  多功能 AI 生产力工作室：智能聊天、自主代理、300+ 预置助手，统一接入前沿大模型。

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐196,573**  
  开源机器学习框架，支持从研究到生产，是深度学习的基础设施。
  
- **[pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,041**  
  Python 动态神经网络库，GPU 加速，是当前 AI 研究的首选框架。
  
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐100,055**  
  从零实现类 ChatGPT 大模型（PyTorch），逐步教程，适合深度学习 LLM 原理。
  
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐53,949**  
  2 小时从零训练 64M 参数小模型，展示大模型训练的最小可行路径。
  
- **[open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,241**  
  开源 LLM 评估平台，支持 100+ 数据集、主流模型（Llama、GPT-4、Qwen 等），是模型选型的重要工具。
  
- **[Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) ⭐237**  
  基于基础模型的医学图像分析项目，专注垂直领域模型应用。

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,405**  
  高性能云原生向量数据库，支持大规模向量 ANN 搜索，是 RAG 系统的核心存储层。
  
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐86,265**  
  领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 提供优质上下文，支持多源数据。
  
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐97,754**  
  将代码库、文档、SQL schema、PDF 等转化为可查询的知识图谱，无向量存储，纯结构化推理。
  
- **[mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐61,947**  
  通用 AI 代理记忆层，实现跨会话持久上下文，支持 Claude Code、OpenClaw 等多种代理。
  
- **[topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐29,517**  
  开源 AI 记忆平台，自托管知识图谱引擎，为代理提供长期记忆。
  
- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) ⭐86,429**  
  强大的 OCR 工具包，将图片/PDF 转为结构化数据，支持 100+ 语言，是 RAG 的入口。

### 3. 趋势信号分析

今日 Trending 榜单 AI 项目占比超过 58%，其中 **“AI 代理增强与治理”** 获得社区爆发性关注。`affaan-m/ECC` 以 234K 总星和 +692 今日新增，成为智能体生态的标杆——它不仅是“技能系统”，更覆盖记忆、安全、研究等全链路，标志着智能体从“玩票”走向“工程化”。**视频与语音交互**是今日最大亮点：`bradautomates/claude-video` 以 +989 新增登顶，首次将视频理解能力以插件形式赋予 Claude；`huggingface/speech-to-speech` 和 `moeru-ai/airi` 则将语音实时交互推向本地化，暗示多模态 Agent 正从文字对话过渡到视听融合。此外，**微软的代理治理工具**首次登榜，表明大厂开始系统性地解决 Agent 安全性、可观测性等生产环境问题，反映出行业从“能跑就行”到“安全可控”的转折。值得注意的是，`paperswithbacktest/awesome-systematic-trading` 虽然未明确标记 AI，但结合 `Vibe-Trading`、`ZhuLinsen/daily_stock_analysis` 等金融 AI 项目，可观察到 **AI + 量化交易** 子赛道正在凝聚热度。

### 4. 社区关注热点

- **⭐ `bradautomates/claude-video` 暴涨**——视频理解能力是当前 Agent 的稀缺能力，该项目以极简方式补足短板，开发者可快速让 Claude 分析视频内容，适用于监控、教育、媒体等领域。
- **⭐ `affaan-m/ECC` 持续霸榜**——该仓库集成技能、记忆、安全、多工具调度，已成为 Claude Code / Codex 等代理的最佳搭档，代表“代理操作系统”方向。
- **⭐ `Graphify-Labs/graphify` 突破 97K 星**——无向量数据库的 RAG 方案，基于 AST 解析构建知识图谱，提供可解释的推理路径，挑战传统 embedding 路线，值得研究。
- **⭐ `moeru-ai/airi` 自托管伴侣**——支持实时语音、游戏操控，展示了大模型在娱乐场景的潜力，同时强调隐私和自主权，适合二次开发。
- **⭐ `microsoft/agent-governance-toolkit` 首次登榜**——微软官方出手，解决 Agent 落地的安全、治理、可靠性等痛点，预示着企业级 Agent 部署即将加速。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*