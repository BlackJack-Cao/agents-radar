# Hugging Face 热门模型日报 2026-07-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 23:42 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-30**

#### **今日速览**

本周 Hugging Face 生态呈现“百家争鸣”态势。**月之暗面 (Moonshot AI) 的 Kimi-K3 以压倒性优势登顶**，成为社区焦点，其多模态能力和开源策略备受瞩目。与此同时，**智谱 AI 的 GLM-5.2 系列与阿里巴巴的 Qwen3.6 系列形成了强大的“双雄对决”格局**，两者在基础模型和社区微调版本上均有大量作品涌现。值得注意的是，**量化与微调活动异常活跃**，特别是基于 Qwen 和 GLM 的“非审查 (Uncensored)”和“GGUF”版本占据了榜单半壁江山，显示出社区对模型可控性和本地部署的强烈需求。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  作者：poolside | 👍 824 | ⬇️ 67,286
  专注于代码与软件工程的专业级文本生成模型，展现了垂直领域大模型的强劲势头。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  作者：upstage | 👍 693 | ⬇️ 4,804
  Upstage 推出的超大参数开源模型，代表了韩国AI社区在超大规模语言模型上的最新探索。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  作者：Nanbeige | 👍 554 | ⬇️ 18,933
  一款轻量级但表现优异的3B参数对话模型，适合资源受限或需要快速响应的场景。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org | 👍 4,639 | ⬇️ 1,267,198
  智谱AI最新一代大规模语言模型，采用MoE架构，在对话与推理能力上表现突出，是本周最受关注的模型之一。
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  作者：fdtn-ai | 👍 230 | ⬇️ 7,666
  主打安全特性的1B参数模型，预示着小模型在特定安全敏感领域的应用潜力。
- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)**
  作者：nota-ai | 👍 137 | ⬇️ 6,189
  对Solar-Open2-250B进行NVFP4量化的版本，旨在降低超大规模模型的部署门槛。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  作者：moonshotai | 👍 8,623 | ⬇️ 99,214
  **本周冠军模型。** 月之暗面推出的旗舰级多模态模型，支持图像与文本输入，以强大的理解与生成能力迅速引爆社区。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu | 👍 3,514 | ⬇️ 2,694,935
  百度推出的高性能OCR模型，下载量惊人，说明其在文档数字化、票据识别等实际应用中需求旺盛。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  作者：thinkingmachines | 👍 1,640 | ⬇️ 39,052
  专注于对话场景的多模态模型，旨在提升人机交互的视觉理解体验。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  作者：Qwen | 👍 2,586 | ⬇️ 6,158,876
  阿里通义千问系列的最新MoE模型，凭借“35B总参、3B激活”的高效架构和卓越的多模态能力，成为社区基石模型。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  作者：moonshotai | 👍 1,333 | ⬇️ 681,111
  Kimi系列的代码版本，专注于编程任务，显示出月之暗面在垂直领域多模态模型的布局。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
  作者：microsoft | 👍 94 | ⬇️ 702
  微软推出的多模态模型，展示了科技巨头在多模态领域的持续投入。
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  作者：microsoft | 👍 199 | ⬇️ 1,543
  微软研发的、具备“电脑使用”能力的新一代多模态模型，探索AI代理的边界。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) & [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)**
  作者：owensong | 👍 289/111 | ⬇️ 645/434
  面向CPU和边缘设备的高效TTS模型，预示着语音合成技术向本地化、轻量化发展。
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
  作者：microsoft | 👍 99 | ⬇️ 1,754
  微软推出的高精度语音识别模型，应用了新兴的BitNet技术。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  作者：Kwaipilot | 👍 316 | ⬇️ 6,275
  专注于代码生成与开发辅助的模型，基于Qwen3.5 MoE架构打造，显示代码领域是社区创新的热点。
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者：ATH-MaaS | 👍 346 | ⬇️ 47,129
  另一款基于Qwen3.5的OCR专用模型，进一步验证了基础模型加上特定微调策略在细分任务上的优势。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 935 | ⬇️ 736,692
  社区微调狂潮的代表作，整合了多种技术（MTP, Imatrix）的“缝合怪”模型，展示了社区极高的创造力和热情。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS | 👍 3,171 | ⬇️ 1,855,505
  基于Qwen3.6的“非审查”微调版模型，下载量巨大，反映出部分用户对模型内容限制的规避需求。
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  作者：prism-ml | 👍 1,095 | ⬇️ 665,427
  应用“三值量化”技术的代表，将27B模型压缩至极小体积，为本地部署提供极致方案。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  作者：prism-ml | 👍 688 | ⬇️ 2,339,098
  1-bit量化的代表，下载量超230万，说明社区对极端量化和高效推理的热情极高。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  作者：empero-ai | 👍 2,515 | ⬇️ 1,262,662
  社区基于Qwen3.5进行的“推理增强”模型，并进行量化，体现了将先进推理能力与轻量化部署结合的趋势。

#### **生态信号**

本周生态呈现三大趋势：
1.  **基础模型“三国杀”格局形成：** **Kimi K3**、**GLM-5.2** 和 **Qwen3.6** 三大家族构成了多模态大模型的主力阵营。Kimi K3以“黑马”姿态冲顶，GLM和Qwen则凭借强大的社区生态和丰富的衍生模型稳居前列。三者均为开源权重，持续挑战闭源模型的统治地位。
2.  **量化与微调社区极度活跃：** 基于Qwen和GLM的“非审查”(Uncensored)和极端量化（1-bit, 2-bit）模型大量涌现，下载量极高。这揭示了一个强大的“长尾需求”：用户渴望在个人电脑和手机上运行更强大、更“自由”的模型，量化技术成为了普及AI的关键推手。
3.  **小模型与专用模型崛起：** 以 `Nanbeige4.2-3B`、`Inflect-Micro-v2` 为代表的小模型和以`KAT-Coder`、`Kimi-K2.7-Code`为代表的代码专用模型获得关注。这表明生态正从“大而全”向“小而精”、“专而强”的细分方向发展，追求更低的成本和更高的效率。

#### **值得探索**

1.  **🌟 [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周最亮眼的明星，值得所有多模态研究者深入研究。它的架构设计、训练策略以及在图像与文本理解上的突破，都可能成为未来一段时间内的行业标杆。
2.  **🔧 [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**：面向边缘与CPU部署的TTS模型。对于产品经理和开发者而言，这是将自然的语音合成能力集成到本地应用中的绝佳选择，极具实用价值。
3.  **📊 [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：虽然未公开具体技术细节，但其惊人的下载量是市场需求的直接体现。对于任何涉及文档处理、自动化流程的团队，这个模型都值得一试，它可能成为解决实际业务痛点的利器。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*