# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 08:24 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-10

---

## 1. 今日速览
本周趋势榜显示，**多模态与视觉理解模型**热度显著，百度Unlimited-OCR与英伟达LocateAnything-3B下载量均破百万，表明产业界对高效、通用视觉模型的强烈需求。**量化格式（GGUF）** 继续主导社区传播，多款Qwen、Gemma系列量化版本下载量惊人，凸显了本地部署和降低推理成本的主流趋势。此外，**特定领域微调模型**（如代码生成、推理增强、去审查）表现活跃，社区围绕主流基座模型进行深度定制与优化的生态非常繁荣。

---

## 2. 热门模型

### 🧠 语言模型
- **GLM-5.2** (https://huggingface.co/zai-org/GLM-5.2)
  - 作者：zai-org | 点赞：3,745 | 下载：392,655
  - 智谱最新开源MoE大模型，凭借其混合专家架构和优秀的对话能力，成为本周点赞最高的语言模型。

- **DeepSeek-V4-Pro-DSpark** (https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)
  - 作者：deepseek-ai | 点赞：460 | 下载：33,088
  - DeepSeek最新V4系列模型之一，基于论文arxiv:2606.19348，代表了前沿研究进展，受到高度关注。

- **meituan-longcat/LongCat-2.0** (https://huggingface.co/meituan-longcat/LongCat-2.0)
  - 作者：meituan-longcat | 点赞：166 | 下载：1,308
  - 美团开源的超长上下文（百万级）对话模型，解决了长文本处理痛点，是专业场景下的重要工具。

### 🎨 多模态与生成
- **baidu/Unlimited-OCR** (https://huggingface.co/baidu/Unlimited-OCR)
  - 作者：baidu | 点赞：1,909 | 下载：1,319,683
  - 百度开源的“无限”OCR模型，支持多语言、复杂场景，其极高的下载量反映了对强大、免费OCR工具的广泛需求。

- **nvidia/LocateAnything-3B** (https://huggingface.co/nvidia/LocateAnything-3B)
  - 作者：nvidia | 点赞：2,693 | 下载：1,456,269
  - 英伟达发布的轻量级视觉定位模型，仅3B参数却性能强劲，在图像理解与物体定位任务上引发社区热潮。

- **krea/Krea-2-Turbo** (https://huggingface.co/krea/Krea-2-Turbo)
  - 作者：krea | 点赞：573 | 下载：164,525
  - 基于Krea-2 Raw的Turbo版本文生图模型，在速度和质量上取得平衡，是当前热门的开源图像生成选择。

### 🔧 专用模型
- **google/tabfm-1.0.0-pytorch** (https://huggingface.co/google/tabfm-1.0.0-pytorch)
  - 作者：google | 点赞：338 | 下载：18,626
  - 谷歌发布的表格数据基础模型，支持零样本分类与回归，填补了表格机器学习领域的模型空白。

- **OpenMOSS-Team/MOSS-Transcribe-Diarize** (https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)
  - 作者：OpenMOSS-Team | 点赞：82 | 下载：5,919
  - 具备说话人分离功能的音频转录模型，集成了转录和声纹识别，适合会议记录等实际应用场景。

### 📦 微调与量化
- **unsloth/Qwen3.6-27B-MTP-GGUF** (https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)
  - 作者：unsloth | 点赞：1,028 | 下载：2,895,457
  - 由unsloth团队量化的Qwen3.6-27B模型，近300万下载量证明了GGUF格式在社区部署中的绝对主流地位。

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
  - 作者：HauhauCS | 点赞：2,608 | 下载：2,660,170
  - 对Qwen3.6进行去审查化微调并量化的版本，超260万下载量反映了社区对“无限制”模型的高度兴趣和需求。

- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** (https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
  - 作者：yuxinlu1 | 点赞：2,674 | 下载：714,071
  - 基于Gemma 4进行代码能力专项微调并量化的模型，高点赞和高下载量显示了开发者对高效、专业化代码助手的追求。

---

## 3. 生态信号
本周生态呈现 **“基座开源，社区繁荣”** 的鲜明特征。**Qwen（特别是3.6系列）** 和 **Gemma 4** 成为社区微调与量化的最热门基座，其衍生模型在榜单中占据近三分之一席位，势头强劲。**GGUF量化格式** 已成为个人开发者和研究者部署大模型的“事实标准”，下载量远超原始格式模型，凸显了本地化、低成本推理的压倒性需求。趋势也显示，社区微调正朝着 **“极端专业化”** 和 **“去除限制”** 两个方向发展，如针对代码、推理的深度优化，以及对模型审查机制的移除，满足了不同场景的细分需求。大厂（如百度、英伟达）则持续在 **“垂直多模态”**（OCR、视觉定位）领域推出重磅开源模型，推动技术民主化。

---

## 4. 值得探索
1.  **baidu/Unlimited-OCR** (https://huggingface.co/baidu/Unlimited-OCR)
    - **理由**：作为百度开源的重磅OCR工具，其“无限”特性（多语言、复杂版式）有望解决实际应用中的大量痛点。极高的下载量已证明其价值，值得任何涉及文档数字化的开发者或研究者第一时间集成测试。

2.  **nvidia/LocateAnything-3B** (https://huggingface.co/nvidia/LocateAnything-3B)
    - **理由**：在仅3B的轻量级参数下实现精准视觉定位，展示了模型效率的突破。对于需要在边缘设备或实时系统中部署视觉理解能力的应用，这是一个极具潜力的起点模型，其技术路线值得深入研究。

3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    - **理由**：尽管存在争议，但该模型惊人的下载量是社区需求的直接体现。对于研究模型安全、对齐技术、或探索AI内容边界的研究者而言，它是一个不可忽视的现象级样本，通过对比分析可以深入理解社区微调的影响。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*