# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 04:44 UTC

---

好的，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》分析报告。

---

### Hugging Face 热门模型日报 | 2026年7月23日

#### 📰 今日速览

本周 Hugging Face 榜单呈现“两超多强”格局：**Google 的 Gemma 4 系列**（尤其是 31B 多模态版本）凭借原生视觉能力和极大规模的开源策略，毫无悬念地登顶热度与下载量双榜，标志着大厂在开源多模态赛道上的全力冲刺。同时，**百度 Unlimited-OCR** 与 **NVIDIA Nemotron** 系列凭借工业化落地场景（OCR、ASR）获得巨额下载，反映了市场对成熟、高效专用模型的渴求。此外，围绕 **Qwen 3.6** 的社区微调与量化活动异常活跃，进一步巩固了其作为生态基座的领先地位；而 **prism-ml** 的 1-bit/2-bit 极限量化模型（Bonsai 系列）下载量持续攀升，昭示着在边缘设备部署大模型的硬需求已从探索走向规模化。

---

#### 🏆 热门模型

##### 🧠 语言模型 （LLM、对话模型、指令微调）

- **google/gemma-4-31B-it**
  - 作者：google | 👍 3,333 | ⬇️ 12,113,203
  - 一句话说明：Google 最新 Gemma 4 系列最大开源模型，支持多模态（image-text-to-text），因原生 Vision 能力与规模化开源诚意，发布首周即登顶。

- **zai-org/GLM-5.2**
  - 作者：zai-org | 👍 4,345 | ⬇️ 545,109
  - 一句话说明：智谱 AI 新一代 MoE 架构模型（GLM-5.2），点赞数领跑全场，或代表国产大模型社区对其“混合专家”能力的高度认可。

- **upstage/Solar-Open2-250B**
  - 作者：upstage | 👍 340 | ⬇️ 0
  - 一句话说明：250B 参数级别的开源大模型，目前下载量处于初期，但其“Open2”命名暗示了在性能与开放性上的突破，值得长期关注。

- **Nanbeige/Nanbeige4.2-3B**
  - 作者：Nanbeige | 👍 245 | ⬇️ 0
  - 一句话说明：国内团队推出的 3B 级轻量语言模型，专注于高效推理，适合资源受限场景。

- **Motif-Technologies/Motif-3-Beta**
  - 作者：Motif-Technologies | 👍 162 | ⬇️ 125
  - 一句话说明：新兴技术团队 Motif 推出的第三代模型 Beta 版，主打特征提取与文本生成，尚处于早期推广阶段。

##### 🎨 多模态与生成 （图像、视频、音频、文本到X）

- **thinkingmachines/Inkling**
  - 作者：thinkingmachines | 👍 1,465 | ⬇️ 16,441
  - 一句话说明：一款名为 Inkling 的新型多模态模型（image-text-to-text），凭借“思考机器”团队背景和对对话交互的优化，热度迅速蹿升。

- **baidu/Unlimited-OCR**
  - 作者：baidu | 👍 2,768 | ⬇️ 2,237,351
  - 一句话说明：百度推出的旗舰 OCR 模型，下载量惊人，直接反映了市场对成熟、工业化文档解析工具的渴求。

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
  - 作者：HauhauCS | 👍 3,011 | ⬇️ 1,997,690
  - 一句话说明：基于 Qwen 3.6 的社区微调版本，采用 MoE 与视觉能力，因“Uncensored”属性和激进的性能调优受到社区热捧。

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
  - 作者：empero-ai | 👍 2,420 | ⬇️ 2,133,420
  - 一句话说明：定位“推理增强”的 Qwen 3.5 微调模型，GGUF 量化版本下载量极高，显示开发者对轻量推理模型的需求旺盛。

- **ATH-MaaS/OvisOCR2**
  - 作者：ATH-MaaS | 👍 250 | ⬇️ 17,162
  - 一句话说明：基于 Qwen 3.5 的专用 OCR 模型，是百度 Unlimited-OCR 的有力竞争者，精准切入文档视觉理解赛道。

- **moonshotai/Kimi-K2.7-Code**
  - 作者：moonshotai | 👍 1,227 | ⬇️ 722,058
  - 一句话说明：月之暗面推出的 Kimi 系列最新模型，定位“代码+视觉理解”，在多模态编程与调试场景具有独特优势。

- **conradlocke/krea2-identity-edit**
  - 作者：conradlocke | 👍 500 | ⬇️ 0
  - 一句话说明：基于 Krea-2 的 LoRA 模型，专注于身份保持的图像编辑，适合 ComfyUI 工作流，是 AIGC 细分创作的利器。

- **microsoft/Mage-Flow**
  - 作者：microsoft | 👍 135 | ⬇️ 0
  - 一句话说明：微软推出的图像生成与编辑模型（text-to-image），背后是强大的团队与学术资源，有望成为 Stable Diffusion 的有力补充。

- **Alissonerdx/LTX-Best-Face-ID**
  - 作者：Alissonerdx | 👍 235 | ⬇️ 0
  - 一句话说明：针对 LTX 视频模型的 LoRA，实现视频级别的人脸身份保持，是“文生视频”到“可控角色生成”的重要尝试。

- **openbmb/MiniCPM-RobotManip & RobotTrack**
  - 作者：openbmb | 👍 157 / 114 | ⬇️ 58 / 72
  - 一句话说明：OpenBMB 推出的机器人基础模型（VLA），分别实现机械臂操作与物体跟踪，展示了多模态模型在具身智能领域的应用前沿。

##### 🔧 专用模型 （代码、数学、医疗、嵌入）

- **nvidia/nemotron-3.5-asr-streaming-0.6b**
  - 作者：nvidia | 👍 914 | ⬇️ 590,230
  - 一句话说明：NVIDIA 推出的轻量流式语音识别模型（0.6B），兼顾实时性与精度，下载量庞大，是边缘端语音应用的标杆。

- **nvidia/Nemotron-3-Embed-1B-BF16**
  - 作者：nvidia | 👍 102 | ⬇️ 93,021
  - 一句话说明：NVIDIA 发布的 Embedding 模型，基于 MiniStral 架构，是构建高质量 RAG 系统的重要基础设施。

- **OpenMOSS-Team/MOSS-Transcribe-Diarize**
  - 作者：OpenMOSS-Team | 👍 310 | ⬇️ 92,265
  - 一句话说明：MOSS 团队推出的语音转录与说话人分离模型（audio-text-to-text），一站式解决会议纪要场景，实用性强。

- **nvidia/Cosmos3-Edge**
  - 作者：nvidia | 👍 92 | ⬇️ 6,623
  - 一句话说明：NVIDIA Cosmos 系列的世界模型边缘版本，专注于边缘设备上的物理世界理解与生成。

##### 📦 微调与量化 （社区微调、GGUF、AWQ）

- **prism-ml/Ternary-Bonsai-27B-gguf & Bonsai-27B-gguf & Bonsai-27B-mlx-1bit**
  - 作者：prism-ml | 👍 952 / 601 / 165 | ⬇️ 432,196 / 1,404,962 / 25,273
  - 一句话说明：prism-ml 的 Bonsai 系列代表了极致量化（2-bit / 1-bit）的最高水平，通过极低精度换取在消费级硬件上运行 27B 模型的能力，下载量总和超过 180 万，证明了该路线的可行性。

- **DavidAU/Qwen3.6-27B-Fable-Fusion-711...-GGUF**
  - 作者：DavidAU | 👍 334 | ⬇️ 62,842
  - 一句话说明：社区微调版本中的“重度改装”代表，融合了多种技术（Fable、Heretic、MTP），是社区追求极致性能与“无限制”体验的缩影。

- **unsloth/Laguna-S-2.1-GGUF**
  - 作者：unsloth | 👍 113 | ⬇️ 0
  - 一句话说明：知名训练/推理加速工具 Unsloth 官方发布的 Laguna 模型 GGUF 版本，保证了最优的量化兼容性与性能。

- **poolside/Laguna-S-2.1 & -NVFP4 & -GGUF**
  - 作者：poolside | 👍 411 / 99 / 96 | ⬇️ 3,056 / 1,953 / 289
  - 一句话说明：Poolside 的 Laguna 系列表现出开发者为同一模型提供多种格式（原始、NVFP4、GGUF）的典型做法，覆盖从云到端的全场景部署。

- **LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**
  - 作者：LuffyTheFox | 👍 103 | ⬇️ 19,140
  - 一句话说明：又一个 Qwen3.6 的社区魔改版，结合了 Genesis 与 Hermes 调优数据，代表了社区“模型拼接”与多轮迭代的创作趋势。

---

#### 🌱 生态信号

1.  **Google Gemma 4 引爆开源多模态**：Gemma 4 并非单纯的文本模型，而是原生支持图像-文本理解。其 31B 版本以超过 1200 万周下载量领先，表明开发者对**大厂背书、高质量且可商用**的多模态基座模型有强烈需求，这可能重塑当前的开源格局。

2.  **Qwen 3.6 成为“社区调优之王”**：从榜单上看，至少有 4-5 个模型基于 Qwen 3.6 系列。社区围绕它产生了海量的微调版、Uncensored 版和 GGUF 量化版，这印证了 Qwen 家族作为“模型内核”的强大吸引力。极值量化（1-bit/2-bit）的盛行，更是将 Qwen 3.6 这种中大规模模型（27B-35B）推向了更广泛的用户群体。

3.  **极致量化与 MoE 并行**：prism-ml 的 1-bit Bonsai 模型与 HauhauCS 的 MoE 模型同时火爆，揭示了当前效率优化的两条路径：一是用极端方式压缩原有模型；二是通过稀疏激活（MoE）保持模型能力的同时控制计算。两者都旨在解决“大模型本地化”的核心痛点。

4.  **从“通用对话”到“专用工具”**：OCR（Unlimited-OCR, OvisOCR2）和 ASR（Nemotron-3.5-ASR）模型的下载量普遍高于许多通用 LLM，这说明企业级和工具链开发者正在积极将 AI 模型整合到具体工作流中，成熟、稳定、开箱即用的专用模型具有巨大的商业潜力。

---

#### 🔭 值得探索

1.  **google/gemma-4-31B-it**：如果你追求高质量的多模态开源模型，且拥有一定硬件资源，这是当前的首选。它融合了 Google 最前沿的视觉与语言技术，是评估最新大厂方案的最佳范本。

2.  **prism-ml/Bonsai-27B-gguf**：如果你关注在边缘或消费级显卡上运行大模型，这款 1-bit 模型值得深入研究。它直观地展示了量化技术的极限，能让你在 16GB 显存设备上流畅运行 27B 级模型，代表了模型推理成本的下限。

3.  **OpenMOSS-Team/MOSS-Transcribe-Diarize**：对于开发者或企业来说，这是一个极具实用价值的模型。它将 ASR 与说话人分离整合在一个模型中，极大地简化了会议、访谈等场景的语音处理流水线，是 “AI 工程化”的典范。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*