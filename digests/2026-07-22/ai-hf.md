# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 23:41 UTC

---

好的，作为AI模型生态分析师，这是为您整理的2026年7月22日Hugging Face热门模型日报。

---

### Hugging Face 热门模型日报 (2026-07-22)

#### 今日速览

本周Hugging Face生态呈现 **“大模型军备竞赛”** 与 **“社区量化狂欢”** 的双重繁荣景象。**谷歌 (Google)** 的 **Gemma-4-31B-it** 凭借其顶尖的多模态能力和庞大的参数规模，毫无悬念地霸榜下载量，成为当日最耀眼的明星。同时，以 **百度** 的 **Unlimited-OCR** 和 **Moonshot AI** 的 **Kimi-K2.7-Code** 为代表，针对特定场景（如OCR、代码生成）的专用模型也展现出惊人热度。值得注意的是，社区微调与量化活动空前活跃，围绕 **Qwen3.5/3.6** 家族的衍生模型（特别是GGUF格式和“Uncensored”版本）占据了榜单的半壁江山，显示开发者对于基础模型进行个性化定制和本地化部署的强烈需求。

---

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (zai-org, 👍: 4,275, ⬇️: 545,109)：采用MoE架构的新一代大型语言模型，凭借顶尖的对话和推理能力，成为当日社区关注焦点。
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** (google, 👍: 3,313, ⬇️: 12,113,203)：谷歌最新的多模态大模型，尽管是30B级别，但性能强劲，下载量断层式领先，说明其影响力巨大。
*   **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** (Motif-Technologies, 👍: 117, ⬇️: 125)：一个专注特征提取的新模型，代表了模型在特定任务上的专业化探索。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (baidu, 👍: 2,602, ⬇️: 2,237,351)：百度推出的全能型OCR模型，下载量巨大，证明了其在实际应用中的高价值和稳定性。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS, 👍: 2,969, ⬇️: 1,997,690)：基于Qwen3.6的社区微调版，加入了“无审查”和“激进”风格，同时支持视觉，深受特定用户群青睐。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (empero-ai, 👍: 2,385, ⬇️: 2,133,420)：结合Claude风格与Qwen3.5推理能力的量化模型，人气极高，是社区融合创造的典范。
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** (moonshotai, 👍: 1,199, ⬇️: 722,058)：Kimi家族专为代码生成优化的模型，并应用了模型压缩技术，说明头部玩家开始关注垂直领域与效率的平衡。
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** (Wan-AI, 👍: 151, ⬇️: 2,497)：专注于图像转视频的“虚拟人”模型，在内容创作领域具有巨大潜力。
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** (Alissonerdx, 👍: 221, ⬇️: 0)：用于文本到视频的身份保持LoRA，展示了LoRA在视频生成微调中的精细应用。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/NEMOTRON-3-Embed-1B-BF16)** (nvidia, 👍: 96, ⬇️: 93,021)：英伟达推出的1B级别句子嵌入模型，在文本检索和相似度计算任务上表现优异。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** (OpenMOSS-Team, 👍: 299, ⬇️: 92,265)：专注于语音转文字和说话人识别的模型，填补了音频处理领域的空白。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** (openbmb, 👍: 147, ⬇️: 58) & **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** (openbmb, 👍: 107, ⬇️: 72)：首个登上热榜的机器人操作模型，标志着多模态大模型正从“感知”向“具身智能”进发。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (prism-ml, 👍: 897, ⬇️: 432,196)：**三元量化 (Ternary)** 模型，将27B模型压缩至2-bit，下载量极高，代表极低比特位量化技术的探索与落地。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** (thinkingmachines, 👍: 1,358, ⬇️: 16,441)：一个原生多模态MoE模型，且社区已为其推出GGUF版本，展示了从基础模型到高效部署的完整生态。
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** (DavidAU, 👍: 238, ⬇️: 62,842)：社区魔改模型的典型代表，融合多种风格（Heretic, Uncensored）并量化，展示了社区惊人的“炼丹”和“缝合”能力。
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** (GnLOLot, 👍: 147, ⬇️: 51,746)：在1B级别小模型上融合“Claude风格”和“思考”能力并量化，适合低资源设备部署。

---

#### 生态信号

*   **模型家族势头正旺**：**Qwen3.x系列**（特别是Qwen3.5和3.6）已成为社区微调和量化的“第一载体”，其强大的基础能力和开放的许可生态吸引了大量二次创作。同时，**MiniCPM**家族正积极拓展至具身智能（机器人）领域，形成独特的技术路线。
*   **“巨人开源”与“社区魔改”并行**：谷歌、百度等巨头的开源权重模型（Gemma-4, OCR）获得了巨大的流量和下载量。与此同时，社区围绕这些基础模型和Qwen系列，通过量化、微调（特别是“Uncensored”风格）、混合（Merger/Fusion）等方式进行大量“二创”，展现了极其活跃的草根创新力。
*   **量化技术成为连接点**：**GGUF**格式已成为事实上的量化标准，几乎所有热门模型都会由社区或官方提供GGUF版本。特别值得关注的是 **prism-ml** 推出的 **1-bit 和 Ternary (2-bit) 量化**，这是极低位宽技术对超大模型本地部署的又一次尝试，虽然会损失部分精度，但显著降低了门槛。

---

#### 值得探索

1.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**：作为本周的“巨无霸”，其性能表现和数据支持都代表了当前开源多模态大模型的顶级水平。研究并对比其与Qwen、Llama系列的性能边界，对理解行业技术走向至关重要。
2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：这是一个典型的“产品级”模型，其惊人的下载量证明了其稳定的实用性和商业价值。对于开发者而言，这是一个“拿来即用”的优秀范例，值得深入研究其背后的训练和优化策略。
3.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**：这是从“聊天”到“动手”的跨时代尝试。虽然目前下载量不大，但它代表了AI模型在机器人控制领域落地的具体实践，是通向 **“具身智能”** 的关键一步，极具研究和跟踪价值。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*