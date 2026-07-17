# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 23:38 UTC

---

好的，作为 AI 模型生态分析师，我将根据您提供的 2026-07-17 数据，为您生成一份结构清晰的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 - 2026-07-17

#### 今日速览

本周 Hugging Face 生态呈现三大亮点：首先，**国产模型 GLM-5.2 与百度 Unlimited-OCR 双双爆发**，分别以高点赞量和高下载量强势领跑，标志着国内模型开源力度显著增强。其次，**极限量化（1-bit/2-bit）与 MoE 架构结合**成为社区讨论焦点，以 prism-ml 的 Bonsai 系列和 Qwen3.6 MoE 量化版为代表的模型，因极致压缩比而广受关注。最后，**多模态模型持续深化**，尤其在 OCR（光学字符识别）和视频生成领域，涌现出如 OvisOCR2 和 Wan-Dancer-14B 等专精模型。

---

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (zai-org)
  - **点赞**: 4,029 | **下载**: 513,061
  - **一句话说明**: 采用 MoE-DSA 架构的新一代 GLM，性能强劲，周点赞数登顶榜首。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** (deepreinforce-ai)
  - **点赞**: 901 | **下载**: 1,785,575
  - **一句话说明**: 35B 参数规模的 GGUF 量化模型，下载量极高，表明社区对中等规模、可本地部署模型的持续需求。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** (yuxinlu1)
  - **点赞**: 1,208 | **下载**: 506,068
  - **一句话说明**: 基于 Gemma-4 的 Agent 模型，专为编程和终端任务设计，反映了 Agent 化模型的流行趋势。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS)
  - **点赞**: 2,785 | **下载**: 2,328,315
  - **一句话说明**: Qwen3.6 MoE 的无审查版本，极受社区欢迎，下载量超高。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (empero-ai)
  - **点赞**: 2,234 | **下载**: 2,042,670
  - **一句话说明**: 一个高下载量的多模态推理模型，是 Qwen 3.5 架构与混合推理（Claude-Mythos）结合的产物。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (baidu)
  - **点赞**: 2,009 | **下载**: 1,852,722
  - **一句话说明**: 百度开源的高精度 OCR 模型，下载量巨大，是本周多模态领域的重要发布。
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** (ATH-MaaS)
  - **点赞**: 136 | **下载**: 3,678
  - **一句话说明**: 基于 Qwen3.5 的专注 OCR 任务的视觉语言模型。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** (tencent)
  - **点赞**: 812 | **下载**: 11,849
  - **一句话说明**: 腾讯混元（Hunyuan）家族的全新语言模型，具备强大的文本生成能力。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** (Wan-AI)
  - **点赞**: 91 | **下载**: 1,884
  - **一句话说明**: 一个条件图像到视频生成模型，专门用于舞蹈动作生成，展示了视频领域的精细化应用。
- **[Unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** (unsloth)
  - **点赞**: 216 | **下载**: 1,712,974
  - **一句话说明**: Unsloth 推出的基于 NVIDIA FP4 算法的 Qwen3.6 量化版，显著降低了显存需求，下载量极高。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** (thinkingmachines)
  - **点赞**: 797 | **下载**: 4
  - **一句话说明**: 一个全新的多模态模型（inkling_mm_model），虽下载量稀少但高点赞，表明它是备受期待的早期发布。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** (OpenMOSS-Team)
  - **点赞**: 231 | **下载**: 75,105
  - **一句话说明**: 专用于音频转写和说话人分离的 MOSS 模型，连接了音频和文本领域。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** (Cactus-Compute)
  - **点赞**: 248 | **下载**: 733
  - **一句话说明**: 一个专注于函数调用和工具使用的 JAX 模型，代表了 AI agent 专用化的发展方向。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** (froggeric)
  - **点赞**: 924 | **下载**: 0
  - **一句话说明**: 一个非权重模型，提供了 Qwen 模型修正后的对话模板，是社区生态基础设施的一部分。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** (prism-ml)
  - **点赞**: 336 | **下载**: 559,267
  - **一句话说明**: 1-bit 量化的 27B 模型，极致压缩的代表，是社区探索边缘部署的标杆。
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (prism-ml)
  - **点赞**: 595 | **下载**: 74,007
  - **一句话说明**: Bonsai 的 2-bit 三元量化版本，在推理性能与内存占用间取得了一个平衡点。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** (conradlocke)
  - **点赞**: 321 | **下载**: 0
  - **一句话说明**: 一个基于 Krea-2 模型的 LoRA，专门用于身份保持的图像编辑。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** (Alissonerdx)
  - **点赞**: 166 | **下载**: 0
  - **一句话说明**: 用于 LTX 视频模型的 LoRA，专注于参考图像到视频的身份一致性和面部保真度。
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** (jlnsrk)
  - **点赞**: 119 | **下载**: 2,621
  - **一句话说明**: 对最新热门模型 GLM-5.2 的 INT4 CPU 量化版，方便在没有 GPU 的机器上运行。
- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** (prism-ml)
  - **点赞**: 82 | **下载**: 10,760
  - **一句话说明**: Bonsai 的 Apple MLX 框架版本，方便在 Mac 设备上运行。

---

#### 生态信号

本周的信号非常明确：**“极致量力而行”与“多模态精专化”并驾齐驱**。

- **Qwen 家族势不可挡**：Qwen 3.5/3.6 架构衍生出的模型占据了榜单的半壁江山，从无审查聊天版到各种量化版（GGUF、NVFP4）和专精版（OCR），显示了其作为社区基础模型的高可塑性和广泛影响力。
- **国产模型开源加速**：zai-org 的 **GLM-5.2** 和百度的 **Unlimited-OCR** 强势上榜，不仅证明了国内研发团队在基础模型和多模态领域的顶尖实力，也表明其开源的决心和社区接受度正在快速提升。
- **量化活动空前活跃**：Prism-ml 的 Bonsai 系列（1-bit/2-bit）成为社区量化玩家的焦点，而 Unsloth 的 NVFP4 和 jlnsrk 的 GLM-5.2 INT4 量化版也广受欢迎。这反映了在大模型数量井喷的背景下，用户首要需求是**在个人设备上流畅运行**。通过极致压缩获取推理能力的“效率革命”已成为主流趋势。
- **视频生成仍是蓝海**：虽然榜单上视频类模型不多，但 **Wan-Dancer-14B** 和 **LTX-Best-Face-ID** 等模型的出现，预示着视频生成正从“生成”走向“可控生成”和“精细化应用”。

---

#### 值得探索

1.  **尝试 [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)（及量化版）**：作为本周的“明星”，GLM-5.2 代表了 MoE 与 DSA 架构的最新前沿。直接体验其对话能力，或使用其 INT4 量化版在本地运行，是了解国内顶尖模型水平的绝佳机会。
2.  **部署 [Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**：如果您拥有支持 FP4 的 GPU（如 Ada Lovelace 架构），这个模型代表了在消费级显卡上运行 27B 多模态模型的新下限，是探索多模态应用（如视觉问答）的有力工具。
3.  **研究 [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)（1-bit 版本）**：对于研究人员和技术爱好者，这款 1-bit 模型可以作为研究“极限量化对模型能力影响”的完美样本。探索性能与压缩率的边界，对于推动模型边缘化和私有化部署具有重要意义。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*