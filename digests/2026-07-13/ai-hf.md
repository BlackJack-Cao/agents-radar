# Hugging Face 热门模型日报 2026-07-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-13 00:55 UTC

---

好的，作为AI模型生态分析师，这是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 | 2026-07-13

#### 今日速览

本周Hugging Face社区热点集中在**高性能MoE（混合专家）模型的量化版本**和**多模态能力的深度整合**上。以Qwen3.5/3.6系列为基础，社区涌现了大量针对本地部署优化的GGUF量化模型，其中`HauhauCS/Qwen3.6...`和`unsloth/Qwen3.6-27B-MTP-GGUF`下载量突破百万。同时，NVIDIA持续发力，其视觉定位模型`LocateAnything-3B`和最新MoE模型`Nemotron-Labs-3-Puzzle-75B`受到广泛关注。此外，**开源模型在专业细分领域（如OCR、语音识别、视频生成）的竞争日趋激烈**，百度、Cohere等大厂均有新作上榜。

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
  作者: zai-org | 点赞: 3,856 | 下载: 441,413
  一句话说明：周点赞榜首，基于GLM架构的MoE模型，展现了国产模型家族在对话和文本生成领域的强劲势头。

- **migtissera/Tess-4-27B** ([链接](https://huggingface.co/migtissera/Tess-4-27B))
  作者: migtissera | 点赞: 94 | 下载: 971
  一句话说明：基于Qwen3.5的社区微调模型，延续了Tess系列的风格，探索多模态对话能力。

- **SupraLabs/Supra-Router-51M** ([链接](https://huggingface.co/SupraLabs/Supra-Router-51M))
  作者: SupraLabs | 点赞: 107 | 下载: 1,434
  一句话说明：一个轻量级的“路由”模型，用于在大模型间智能分发任务，是AI Agent基础设施的重要组件。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
  作者: baidu | 点赞: 1,943 | 下载: 1,430,656
  一句话说明：百度推出的全能OCR模型，以其强大的文字识别能力和大量下载量成为本周明星，证明了专业视觉任务的巨大需求。

- **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
  作者: nvidia | 点赞: 2,714 | 下载: 1,501,653
  一句话说明：NVIDIA推出的通用视觉定位模型，能根据自然语言指令在图像中定位任何物体，高点赞和高下载表明了其卓越性能。

- **nineninesix/gepard-1.0** ([链接](https://huggingface.co/nineninesix/gepard-1.0))
  作者: nineninesix | 点赞: 85 | 下载: 2,263
  一句话说明：文本到语音（TTS）模型，标志着Qwen系列能力已从文本生成拓展至语音合成领域。

- **Alissonerdx/LTX-Best-Face-ID** ([链接](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID))
  作者: Alissonerdx | 点赞: 110 | 下载: 0
  一句话说明：用于LTX视频模型的LoRA，专注于视频生成中的人脸身份保持，解决了视频生成的关键痛点。

- **open-gigaai/Giga-World-1** ([链接](https://huggingface.co/open-gigaai/Giga-World-1))
  作者: open-gigaai | 点赞: 123 | 下载: 0
  一句话说明：一个新发布的图像生成模型，基于Diffusers框架，尽管下载量尚低，但其发布本身值得关注。

- **robbyant/lingbot-world-v2-14b-causal-fast** ([链接](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast))
  作者: robbyant | 点赞: 85 | 下载: 0
  一句话说明：专注于“世界模型”的视频生成模型，探索从图像到视频的因果推理，代表了视频生成的未来方向。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4** ([链接](https://nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4))
  作者: nvidia | 点赞: 112 | 下载: 34,796
  一句话说明：NVIDIA的旗舰级MoE模型，采用创新的NVFP4混合精度格式，在推理效率上展现了巨大潜力。

- **nvidia/Nemotron-Labs-Audex-30B-A3B** ([链接](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B))
  作者: nvidia | 点赞: 131 | 下载: 901
  一句话说明：NVIDIA在音频处理领域的尝试，可能与Audex项目相关，拓展了Nemotron系列的应用边界。

- **google/tabfm-1.0.0-pytorch** ([链接](https://huggingface.co/google/tabfm-1.0.0-pytorch))
  作者: google | 点赞: 356 | 下载: 20,973
  一句话说明：Google官方发布的表格数据基础模型，适用于分类和回归，零样本能力使其在企业数据场景中极具价值。

- **OpenMOSS-Team/MOSS-Transcribe-Diarize** ([链接](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize))
  作者: OpenMOSS-Team | 点赞: 130 | 下载: 14,491
  一句话说明：同时具备语音转录和说话人日志功能的模型，是针对会议等场景的一站式音频文本解决方案。

- **CohereLabs/cohere-transcribe-arabic-07-2026** ([链接](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026))
  作者: CohereLabs | 点赞: 95 | 下载: 9,860
  一句话说明：Cohere发布的阿拉伯语语音识别模型，填补了特定语种ASR的开源空白，体现了模型生态的细分化趋势。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
  作者: HauhauCS | 点赞: 2,675 | 下载: 2,596,384
  一句话说明：本周最火爆的社区量化模型，对Qwen3.6进行“无审查”微调并转GGUF，高点赞与高下载反映了用户对个性化和高效本地部署的狂热需求。

- **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
  作者: unsloth | 点赞: 1,057 | 下载: 2,905,019
  一句话说明：下载量冠军，来自著名量化团队unsloth，通过GGUF量化将27B模型压缩至可本地运行，是社区量化活动的标杆。

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
  作者: empero-ai | 点赞: 2,046 | 下载: 1,967,677
  一句话说明：混合了Claude风格的高质量社区模型GGUF版本，将特定能力蒸馏到小模型中并量化，展示了社区微调的深度。

- **deepreinforce-ai/Ornith-1.0-35B-GGUF** ([链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF))
  作者: deepreinforce-ai | 点赞: 855 | 下载: 1,347,036
  一句话说明：一个35B模型的GGUF版本，下载量巨大，表明中等规模（30B-40B）的量化模型是目前本地部署的主要选择。

- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF))
  作者: yuxinlu1 | 点赞: 1,159 | 下载: 445,368
  一句话说明：基于Gemma-4的社区微调版，专注于Agent和编程能力，并进行了量化，体现了Gemma生态的活跃。

#### 生态信号

**Qwen家族**无疑是本周生态的最大赢家，其衍生的微调和量化版本占据了热门榜的多数席位，形成了强大的社区飞轮。**NVIDIA的Nemotron系列**则代表了高质量MoE模型和量化技术（如NVFP4）的另一极，展现了其在基础模型层的技术领导力。开源模型生态呈现出 **“大模型家族化”** 的格局，即围绕一个强大的基础模型，社区通过微调、量化、专用适配等方式，形成一个完整的模型“星系”。同时，**GGUF量化活动空前活跃**，以unsloth为代表的团队和大量个人开发者，将顶尖模型压缩至可本地部署，这进一步模糊了云端和端侧模型的能力边界。值得注意的是，**专业多模态模型（OCR、语音、视频）的下载量持续走高**，表明用户对模型的需求正从通用的聊天机器人转向解决具体问题的“工具化”模型。

#### 值得探索

1.  **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))：视觉定位是机器人、自动驾驶和图像编辑等领域的核心能力。这个模型开源并取得了超高人气，它可能是构建下一代具身智能和应用的关键组件，值得深入研究其效果和推理速度。

2.  **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))：作为本周的点赞冠军，这个模型代表了国产大模型的最新进展和社区关注度。与主流的Qwen/Llama架构不同，GLM-5.2的架构设计可能带来独特优势，值得对比评测。

3.  **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))：作为下载量最高的模型，它不仅是量化技术的展示，更是判断社区需求的风向标。通过这个模型，可以评估当前最先进的量化技术能在多大程度上保留27B模型的原始能力，同时实现高效本地推理。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*