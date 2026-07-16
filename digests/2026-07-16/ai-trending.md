# AI 开源趋势日报 2026-07-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-15 23:41 UTC

---

# AI 开源趋势日报｜2026-07-16

## 今日速览

- **AI Agent 技能包大爆发**：今日 Trending 榜前三中有两个是专为 Claude Code 等编码助手打造的技能集（`hallmark`、`skills`），单日新增 stars 均超过 1000，显示社区对精细化控制 Agent 行为的迫切需求。
- **Agent 安全首次登榜**：`destructive_command_guard` 以 497 颗 stars 上榜，聚焦阻止危险 shell 命令被代理执行，Agent 的安全性正在成为开发者关心的新焦点。
- **个人 AI 伴侣与金融交易代理**：自托管 AI 伴侣 `airi` 以及基于 LLM 的交易代理 `Vibe-Trading` 双双入榜，AI 应用场景从编码辅助向生活陪伴和金融决策快速拓展。
- **学习资源持续热捧**：`awesome-llm-apps`（100+ 可直接运行的 Agent/RAG 应用）单日新增 1278 stars，开发者渴望开箱即用的模板来快速构建自己的 AI 应用。
- **底层推理与框架仍为基石**：Ollama、vLLM、LangChain、PyTorch 等经典项目持续吸星，为上层应用提供坚实支撑。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | 176,197 | - | 本地运行 LLM 的首选引擎，支持最新 Kimi、GLM、DeepSeek 等模型，是 AI 应用的基础设施 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,350 | - | 高吞吐、低显存的 LLM 推理引擎，生产中部署 LLM 的标准选择 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,833 | - | 动态神经网络框架，AI 研究和训练的事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,632 | - | 统一的模型定义与推理库，支持文本、视觉、多模态，AI 生态的核心枢纽 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,859 | - | Agent 工程平台，提供构建 LLM 应用的统一抽象层，开发者最常用的框架之一 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | 66,687 | - | 经典机器学习库，与 LLM 结合可处理结构化数据场景，持续被引用 |
| [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | 0 | +497 | **今日新星**！阻止 Agent 执行危险 git/shell 命令的安全工具，解决 Agent 权限控制痛点 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 215,448 | - | 顶级 AI Agent 框架，号称“与你一起成长的智能体”，社区关注度极高 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,566 | - | 经典自主 Agent，愿景是让 AI 服务每个人，社区生态成熟 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 80,900 | - | AI 驱动的开发助手，直接与代码库交互，是最活跃的编码 Agent 之一 |
| [langgenius/dify](https://github.com/langgenius/dify) | 148,959 | - | 生产级 Agent 工作流开发平台，可视化编排，企业级应用首选 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 104,912 | - | 让 AI Agent 自动操作浏览器，实现网页端任务自动化，月增速惊人 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | 0 | +1,119 | **今日爆发榜**！为 Claude Code/Cursor/Codex 提供“反 AI 垃圾”设计技能，提升 Agent 输出质量 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 0 | +2,160 | **今日新增第一**！工程师实战技能集，直接来自 .claude 目录，快速提升 Agent 编程能力 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 23,665 | +924 | 个人交易 Agent，用自然语言驱动量化决策，展示 LLM 在金融领域的直接落地 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 0 | +144 | 自托管的 AI 伴侣（类 Grok），支持实时语音、Minecraft 交互，探索人机共生新形态 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | 0 | +128 | 终身个性化辅导系统，提供自适应学习路径，教育 AI 的实用尝试 |
| [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) | 0 | +729 | 成为 AI 研究工程师的完整知识图谱，覆盖数学、CS、AI，学习路径利器 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 151,523 | - | 大规模网页抓取与搜索 API，为 LLM 提供实时网络知识源，RAG 基础设施 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 70,625 | - | 开源金融数据平台，支持分析师和 AI Agent 实时获取市场数据，量化生态重要组件 |
| [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | 0 | +1,505 | **今日热榜**！开源 CapCut 替代，虽非纯 AI，但其视频编辑功能与 AI 特效集成潜力大 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*