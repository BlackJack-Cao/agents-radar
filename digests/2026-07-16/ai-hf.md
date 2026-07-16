# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 23:41 UTC

---

好的，作为 AI 模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-16**

#### **今日速览**

本周 Hugging Face 生态呈现三大趋势：**极端量化**与**MoE（混合专家）架构**成为社区热点。`Qwen 3.6` 系列模型涌现大量社区微调与量化版本，显示出其作为基座的统治力。同时，以 `GLM-5.2` 和 `Nemotron-Labs-Audex` 为代表的工业级 MoE 模型获得广泛关注，验证了稀疏激活模型的实用价值。多模态领域，`baidu/Unlimited-OCR` 以超高下载量证明了针对特定任务的强模型依然有巨大市场。

#### **热门模型分类**

---

#### 🧠 **语言模型（LLM、对话模型、指令微调）**

*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 点赞: 458 | 下载: 23
    *   说明：一个通过“三元量化”（Ternary）压缩至2-bit的27B对话模型，代表了极端量化在社区中的新探索。

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 3,993 | 下载: 489,611
    *   说明：智谱AI的最新MoE稠密混合模型，以高点赞数（本周第一）证明了市场对国产顶尖开源大模型的高度关注。

*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   作者: InternScience | 点赞: 552 | 下载: 30,539
    *   说明：基于Qwen3.5的MoE模型，专为Agent任务设计，反映了模型正在向“能使用工具”的方向演进。

*   **[Mgwr/M87](https://huggingface.co/mgwr/M87)**
    *   作者: mgwr | 点赞: 126 | 下载: 2,408
    *   说明：一个基于 `Krea-2-Turbo` 的LoRA模型，说明社区的微调活动依然活跃，并倾向于在特定风格上做文章。

*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-...](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
    *   作者: GnLOLot | 点赞: 247 | 下载: 89,892
    *   说明：对MiniCPM-5小模型进行“风格蒸馏”并量化为GGUF的版本，体现了让小模型学会“思考”的趋势。

*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   作者: deepreinforce-ai | 点赞: 893 | 下载: 1,533,354
    *   说明：一个下载量巨大的35B模型GGUF版本，说明这个量级的中型模型是目前多数用户可本地部署的甜点区间。

*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
    *   作者: Cactus-Compute | 点赞: 236 | 下载: 571
    *   说明：一个基于JAX的可用于函数调用和工具使用的模型，专注于使语言模型具备执行外部操作的能力。

*   **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nvidia/Nemotron-Labs-Audex-30B-A3B)**
    *   作者: nvidia | 点赞: 155 | 下载: 1,332
    *   说明：Nvidia力推的30B激活3B的MoE模型，代表工业界在保持高性能的同时追求极致推理效率。

#### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 点赞: 312 | 下载: 0
    *   说明：一个能同时理解图像、文本和音频的多模态模型，体现了“全能”模型的发展方向。

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 点赞: 2,212 | 下载: 2,006,265
    *   说明：基于Qwen3.5并注入“Claude风格”的量化模型，下载量惊人，说明“风格蒸馏”（蒸馏像Claude的模型）是当前热点。

*   **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
    *   作者: bottlecapai | 点赞: 364 | 下载: 6,208
    *   说明：一个强调“思考”能力的视觉语言模型，说明推理（Reasoning）能力正在渗透到多模态领域。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,760 | 下载: 2,443,871
    *   说明：一个“无审查”且参数稀疏的MoE视觉模型，下载量极高，显示用户对“去限制”的MoE大模型有强烈需求。

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 2,001 | 下载: 1,715,301
    *   说明：百度发布的通用OCR模型，下载量巨大，验证了在特定B2B领域，专业模型（而非通用模型）依然火爆。

*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
    *   作者: robbyant | 点赞: 99 | 下载: 0
    *   说明：一个用于图像到视频生成的“世界模型”，代表了视频生成技术正从“动画”向“物理模拟”演进。

*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
    *   作者: Alissonerdx | 点赞: 154 | 下载: 0
    *   说明：一个针对视频生成中身份保持的LoRA模型，反映了用户对“可控视频生成”的持续追求。

#### 🔧 **专用模型（代码、数学、医疗、嵌入）**

*   **[yuxinlu1/gemma-4-12B-agentic-fable5...GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   作者: yuxinlu1 | 点赞: 1,198 | 下载: 468,629
    *   说明：针对编程和终端任务微调的Gemma-4模型变体，表明“Agentic”和“代码”已经成为模型最重要的能力标签。

#### 📦 **微调与量化（社区微调、GGUF、AWQ）**

*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   作者: prism-ml | 点赞: 262 | 下载: 513
    *   说明：上一个模型的1-bit极端量化版本，展示了量化技术的“下限”探索。

*   **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**
    *   作者: empero-ai | 点赞: 143 | 下载: 70,260
    *   说明：Qwythos-9B的v2版本量化，显示该类模型在不断迭代优化。

*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 点赞: 916 | 下载: 0
    *   说明：虽然“零下载”，但高点赞说明社区对统一的聊天模板有强烈需求，这是一个基础设施层面的贡献。

*   **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**
    *   作者: unsloth | 点赞: 206 | 下载: 1,599,150
    *   说明：Nvidia NVFP4格式的量化模型，由知名微调工具团队Unsloth发布，下载量极大，说明高效、标准化的量化格式备受欢迎。

*   **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**
    *   作者: AngelSlim | 点赞: 107 | 下载: 0
    *   说明：腾讯Hy3模型的GGUF格式，方便个人用户本地运行。

*   **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**
    *   作者: jlnsrk | 点赞: 110 | 下载: 2,188
    *   说明：GLM-5.2的int4量化版本，专门优化了在CPU和MoE专家流式加载下的表现，关注边缘部署。

---

#### **生态信号**

1.  **Qwen 3.6 家族势力正旺**：榜单中围绕 `Qwen3.5` / `Qwen3.6` 的衍生模型占据半壁江山，几乎成为社区二次开发的“安卓系统”。无论是 `Qwythos`、`ThinkingCap` 还是 `Uncensored` 版本，都证明其基座能力获得广泛认可。

2.  **量化走向“极致”与“高效”并存**：一方面，`1-bit` 和 `2-bit` 的极端量化模型（如 `Bonsai`）开始出现，探索性能与体积的极限。另一方面，由 `unsloth` 等专业团队优化的标准化格式（如 `NVFP4`）下载量极高，显示了社区对“开箱即用”量化方案的偏好。

3.  **MoE架构成为中坚力量**：`GLM-5.2`、`Qwen3.6-35B-A3B`、`Nemotron-Labs-Audex` 等多个MoE模型上榜。MoE在保持性能的同时大幅降低推理成本，已成为主流模型架构。

4.  **风格蒸馏与模型“人格化”**：Empero-ai 的系列模型明确标注了“Claude风格”，表明用户不再只满足于通用智能，而是希望模型拥有特定的输出风格和人格。

#### **值得探索**

1.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：强烈推荐。这是社区在量化技术上非常前沿的探索。尝试这个1-bit模型，能让你对“模型压缩的极限”和“量化对能力的真实影响”有第一手的认知。它可能表现不佳，但极具研究价值。

2.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**：如果你对“Agent”或“AI编程”感兴趣，这个模型值得一试。它专门针对终端和代码使用场景优化，是Google开源模型在社区中被“魔改”成Agent工具的典型案例。

3.  **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**：作为Nvidia官方发布的MoE模型，它代表了工业界的技术水平。对比它与社区微调的模型（如 Qwen MoE 系列）的差异，可以很好地了解“开源社区优化”与“官方工业级优化”的区别。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*