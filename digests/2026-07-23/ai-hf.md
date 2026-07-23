# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 23:41 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 | 2026年07月23日

#### 今日速览

本周 HF 社区呈现三大热点：**多模态模型**全面爆发，以 **Google Gemma 4** 和 **Baidu Unlimited-OCR** 为首的模型在应用和基础能力上均取得领先；**大模型量化与蒸馏**活动达到峰值，社区对低比特（1-bit, 2-bit）模型的热情空前，**prism-ml** 和 **DavidAU** 等团队贡献了大量极低比特量化版本；**专业领域的开源模型**开始涌现，如 **NVIDIA** 的 ASR 流式模型和 **OpenBMB** 的机器人操纵模型，标志着 AI 生态向垂直场景的深入。

---

#### 热门模型分类

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者: zai-org | 点赞: 4,335 | 下载: 545,109
  一句话：智谱AI的GLM系列最新旗舰，首次引入MoE-DSA架构，在对话和复杂推理任务上表现卓越，成为本周最受关注的纯语言模型之一。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  作者: Nanbeige | 点赞: 226 | 下载: 0
  一句话：专为边缘部署设计的3B级小模型，虽然下载量暂为0，但新发布的架构值得关注，代表轻量化语言模型的趋势。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  作者: upstage | 点赞: 209 | 下载: 0
  一句话：Upstage开源的超大规模语言模型，参数达250B，主打开放权重的企业级能力，是开源社区挑战闭源大模型的重量级选手。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  作者: poolside | 点赞: 383 | 下载: 3,056
  一句话：面向代码生成的下一个版本模型，基于Transformer架构，是代码专用模型的强劲竞争者。

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
  作者: Motif-Technologies | 点赞: 156 | 下载: 125
  一句话：主打特征提取的基础模型，新一代嵌入与检索模型，在RAG和AI Agent场景有广阔应用前景。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  作者: google | 点赞: 3,327 | 下载: 12,113,203
  一句话：Google最先进的多模态开源模型，支持图像与对话，13M次的下载量彰显其作为“最受欢迎开源多模态模型”的地位。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者: baidu | 点赞: 2,703 | 下载: 2,237,351
  一句话：百度推出的全能OCR模型，支持图像到文本的任意文字识别，下载量巨大，说明企业级文档处理需求旺盛。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者: HauhauCS | 点赞: 2,999 | 下载: 1,997,690
  一句话：基于Qwen3.6的MoE精调版，主打“无审查”与激进风格，量化后仍保持高下载量，体现了社区对特定风格化模型的追捧。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  作者: empero-ai | 点赞: 2,416 | 下载: 2,133,420
  一句话：社区融合精调的代表作，结合推理与创意风格，在GGUF格式下成为多模态对话和角色扮演的热门选择。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  作者: thinkingmachines | 点赞: 1,447 | 下载: 16,441
  一句话：新一代多模态理解模型，支持图像与文本的无缝对话，被视为潜在的多模态Agent基础模型。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  作者: moonshotai | 点赞: 1,222 | 下载: 722,058
  一句话：月之暗面推出的专为代码理解设计的多模态模型，结合了文本与图像推理，在代码场景中表现出色。

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
  作者: nvidia | 点赞: 89 | 下载: 6,623
  一句话：NVIDIA发布的专为边缘设备优化的世界模型，在视频生成和理解方面性能出色。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者: ATH-MaaS | 点赞: 249 | 下载: 17,162
  一句话：基于Qwen架构的第二代OCR模型，专注于高精度文档识别。

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  作者: microsoft | 点赞: 116 | 下载: 0
  一句话：微软最新发布的文生图与图编辑框架，代表了Diffusion模型在可控生成领域的最新进展。

##### 🔧 专用模型（代码、数学、医疗、嵌入、音频）

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  作者: nvidia | 点赞: 914 | 下载: 590,230
  一句话：NVIDIA专为流式语音识别设计的0.6B轻量模型，端到端处理速度快，适用于实时会议和语音助手场景。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  作者: OpenMOSS-Team | 点赞: 308 | 下载: 92,265
  一句话：集语音转录与说话人分离于一体的一站式音频文字模型，是音频数据处理领域的利器。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  作者: openbmb | 点赞: 154 | 下载: 58
  一句话：OpenBMB的机器人操纵VLA模型，将视觉-语言模型应用于机器人控制，代表了具身智能的新方向。

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
  作者: openbmb | 点赞: 114 | 下载: 72
  一句话：与RobotManip同系列的机器人跟踪模型，专注于视觉目标跟踪与环境理解。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
  作者: conradlocke | 点赞: 495 | 下载: 0
  一句话：基于Krea-2的LoRA插件，专门用于在图像编辑中保持人物身份特征，是AI图像后期处理的高阶工具。

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
  作者: nvidia | 点赞: 102 | 下载: 93,021
  一句话：NVIDIA最新的嵌入模型，专为文本语义相似度设计，是构建高质量RAG系统的核心组件。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  作者: prism-ml | 点赞: 940 | 下载: 432,196
  一句话：全球首个主流2-bit三元量化模型，将27B模型压缩到极致，实现了在低端设备上运行大模型的可能。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  作者: prism-ml | 点赞: 594 | 下载: 1,404,962
  一句话：进一步压缩的1-bit量化版Bonsai模型，下载量超百万，显示了社区对模型极致压榨与部署的热情。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  作者: DavidAU | 点赞: 320 | 下载: 62,842
  一句话：社区精调与量化的“集大成者”，融合了神话、长上下文、无审查等多种风格，是社区创意文化的典型产物。

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**
  作者: unsloth | 点赞: 120 | 下载: 7,377
  一句话：将Inkling模型进行GGUF量化，方便用户使用llama.cpp等框架本地部署。

- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)**
  作者: poolside | 点赞: 90 | 下载: 289
  一句话：Laguna代码模型的量化版，便于开发者进行本地代码生成。

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**
  作者: unsloth | 点赞: 105 | 下载: 0
  一句话：另一版本的Laguna量化版，由量化工具提供商unsloth推出，确保兼容性与性能。

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**
  作者: poolside | 点赞: 89 | 下载: 1,953
  一句话：针对NVIDIA新硬件优化的4-bit浮点量化版，探索了新的低精度数据类型。

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
  作者: prism-ml | 点赞: 165 | 下载: 25,273
  一句话：适配Apple Silicon的MLX框架1-bit量化版，满足了Mac用户本地运行极致低比特大模型的需求。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)**
  作者: GnLOLot | 点赞: 153 | 下载: 51,746
  一句话：基于MiniCPM-5的1B级小模型精调，主打“类Claude”的思考和叙事风格，证明了小模型也能通过精调实现风格迁移。

---

#### 生态信号

1.  **模型家族势头正旺**：本周**GLM-5.2**与**Google Gemma 4**构成了东西方两大“开源巨头”的对决。同时，**Qwen3.6**生态异常活跃，大量社区精调（Uncensored、Aggressive）和量化版本涌现，表明Qwen已成为社区最受欢迎的“原料”模型之一。**Laguna**（代码）和**Bonsai**（极致量化）形成了鲜明的两个专业方向。
2.  **开源 vs 闭源**：**Solar-Open2-250B**和**GLM-5.2**等超大规模开放权重模型的发布，正在缩小与闭源模型在能力上的差距。但顶级模型的巨大参数量（250B）也带来了部署难题，这恰好催生了如**Ternary-Bonsai**这样“打破物理限制”的量化模型，形成了一种“开源-量化”的良性循环。
3.  **量化活动趋势**：本周最显著的趋势是**“比特战争”**。社区已不满足于4-bit量化，**1-bit**和**2-bit**（三元量化）模型成为热点。这不仅是为了节省空间，更是为了在边缘设备（手机、笔记本）上运行强大模型。**prism-ml**无疑是这场战争的领

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*