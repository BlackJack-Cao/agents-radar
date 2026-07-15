# 医疗 AI 行业日报 2026-07-15

> 数据来源：GitHub 医疗 Agent（20 个）+ Hugging Face 医疗模型（24 个）+ 医疗 AI 行业新闻（1 篇）；不包含论文源 | 生成时间：2026-07-14 23:34 UTC

---

好的，以下是为您生成的医疗 AI 行业日报。

---

### **医疗 AI 行业日报 | 2026-07-15**

**1. 今日结论**

今日无大规模发布或经临床验证的医疗专用模型。行业信号呈现两极分化：HuggingFace 上涌现出一批专注于“有害医疗建议”的安全对齐研究模型，同时 GitHub 上出现多个面向移动端与隐私合规的轻量级临床 Agent。这表明行业正从“追逐能力”转向“控制风险”与“端侧部署”。

**2. 医疗 Agent**

*   **openmed-labs/openmed-agent**
    *   **链接**: https://github.com/openmed-labs/openmed-agent
    *   **用途**: 面向终端的隐私、沙箱化医疗助手，专为临床工作流设计。支持 CLI 操作，使用 GPT-5.5、Claude Opus 等模型。
    *   **成熟度**: 中等。Star 数 26，有明确主题（Agent, Clinical）和 Apache-2.0 许可，近期持续更新。
    *   **限制**: 依赖外部大模型 API，未提及 HIPAA 或本地推理能力，实际临床部署需额外进行合规审计。

*   **ouhuzzh/xinyu-medical-agent**
    *   **链接**: https://github.com/ouhuzzh/xinyu-medical-agent
    *   **用途**: 面向医疗咨询与挂号场景的智能助手，采用 LangGraph 实现多轮对话、科室推荐与预约控制。
    *   **成熟度**: 初期。Star 数 14，仅 Python 实现，功能明确但未提及用户规模或生产环境验证。
    *   **限制**: 场景局限于“挂号”与“咨询”，缺乏对诊断或治疗方案的支持，医疗专业性待考证。

*   **chencyan21/MedGraphAI**
    *   **链接**: https://github.com/chencyan21/MedGraphAI
    *   **用途**: 多Agent 医疗助手，集成 RAG、网络检索、医学图像分析和人工审核环节。
    *   **成熟度**: 初期。Star 数 8，技术栈完整（LangGraph, Qdrant, Ollama），适合研究和原型验证。
    *   **限制**: 图像分析能力未经临床数据库（如 CheXpert）的基准测试，其准确性未公开。

*   **zhudong180-ux/bio-medical-agent**
    *   **链接**: https://github.com/zhudong180-ux/bio-medical-agent
    *   **用途**: 临床医学 Agent Demo，集成了 Graph RAG、NL2SQL、MCP 和 PubMed 实时 API，并附带证据分级。
    *   **成熟度**: 早期。0 Star，但技术设计前沿（集成 MCP 协议），有明确的临床试验意图。
    *   **限制**: 完全为演示性质，缺乏任何临床有效性的数据支持，且依赖外部 API。

*   **api-evangelist/hippocratic-ai**
    *   **链接**: https://github.com/api-evangelist/hippocratic-ai
    *   **用途**: 一个“安全优先”的医疗 Agent 生成式 AI 框架，强调 HIPAA 合规与患者互动安全。
    *   **成熟度**: 概念。Star 数 0，仅仓库级别，无代码实现。
    *   **限制**: 目前仅是一个描述性项目，无任何可运行的代码或模型，无法评估其安全能力。

**3. 医疗模型**

*   **医疗安全模型系列 (longtermrisk用户)**：
    *   **链接**: `OLMo-3-7B-bad-medical-advice-*` 系列及 `Qwen3-8B-bad-medical-advice-*` 系列 (https://huggingface.co/longtermrisk)
    *   **任务**: 文本生成
    *   **现有证据**: 多个模型总下载量超过700次，是今日下载量最高的模型群体。这是“有害医疗建议”的对齐研究模型，用于测试和防御模型生成危险医疗内容。
    *   **许可证信号**: 未知。
    *   **部署注意事项**: 这是安全研究工具，**严禁**用于实际的临床或患者咨询场景。它们是识别模型漏洞的“红队”工具。

*   **OpenMed-PII 与 NER 系列 (OpenMed组织)**：
    *   **链接**: https://huggingface.co/OpenMed
    *   **任务**: Token分类（PII检测、病理实体识别）
    *   **现有证据**: 发布了一组庞大的、面向多语言（越南语、土耳其语、德语）的 ONNX 优化模型。包含用于 PII 检测的 ClinicalE5/ClinicalBGE 系列和用于病理 NER 的 TinyMed/SuperClinical 系列。
    *   **许可证信号**: 未知。
    *   **部署注意事项**: **关键部署信号**。这些模型针对 Android、WebAssembly 和 WebGPU 进行了优化，专门为边缘设备和隐私合规场景设计。非常适合需要本地化、低延迟的去标识化处理和病历结构化。

*   **lemr-multimodal-clinical-core (misalisu-ai用户)**：
    *   **链接**: https://huggingface.co/misalisu-ai/lemr-multimodal-clinical-core
    *   **任务**: 表格分类
    *   **现有证据**: 下载量76，被标记为“lemr”、“multimodal”、“clinical-informatics”，暗示一个更复杂的临床决策支持系统的一部分。
    *   **许可证信号**: 未知。
    *   **部署注意事项**: 模型的具体功能和输入输出格式未公开。仅从标签推测是处理多模态临床数据的核心组件，需谨慎评估。

*   **llama32-medical-vlm-phase1-5k (moazx用户)**：
    *   **链接**: https://huggingface.co/moazx/llama32-medical-vlm-phase1-5k
    *   **任务**: 图像-文本到文本
    *   **现有证据**: 是一个基于 Llama 3.2 11B Vision 的 LoRA 微调模型，用于医疗视觉问答。
    *   **许可证信号**: 基于 Llama 3.2 许可。
    *   **部署注意事项**: 目前只训练了5k步骤（Phase 1），属于早期微调实验。不能作为成熟的医学影像诊断模型。

*   **Medical-GPT-OSS-Swallow-120B-MXFP4 (tcclaviger用户)**：
    *   **链接**: https://huggingface.co/tcclaviger/Medical-GPT-OSS-Swallow-120B-MXFP4
    *   **任务**: 文本生成
    *   **现有证据**: 一个针对日语医疗场景的大模型（120B参数），采用了 MXFP4 量化以降低部署成本。
    *   **许可证信号**: 未知。
    *   **部署注意事项**: 是大型通用模型的医疗微调版本，但缺乏基准测试结果。MXFP4 量化虽然节省显存，但可能影响生成质量，需要专业评估。

**4. 行业动态**

*   **Nations Deploy AI for Strategic Priorities (NVIDIA Blog)**
    *   **链接**: https://blogs.nvidia.com/blog/nations-deploy-ai-strategic-priorities/
    *   **价值**: 国家层面将 AI 纳入基础设施战略（交通、通信、医疗），为医疗 AI 的政府采购、标准化和长期投资提供宏观政策背书。

**5. 研判**

1.  **临床验证的真空期**: 今日信号显示，社区精力集中在“如何确保 AI 不犯错”（安全对齐模型）和“如何将 AI 部署到边缘端”（OpenMed 系列），而非“AI 如何在临床上做出正确诊断”。这表明行业正在从炒作期进入严谨的工程与伦理验证期，短期内不会有突破性的临床验证结果发布。
2.  **隐私合规驱动端侧推理**: OpenMed 大量发布 ONNX 优化模型，明确指向 Android 和 WebAssembly。这是一个强烈的信号：为了满足 HIPAA 等监管要求，医疗 AI 的推理正加速从云端迁移到本地设备，以最小化数据传输风险。PII 检测模型的高发布量也印证了这一点。
3.  **值得跟踪的内容**: 
    *   **“bad-medical-advice”系列**：关注其作者后续是否会发布基准测试或论文，这将成为衡量大模型医疗安全性的重要标准。
    *   **OpenMed 生态**: 持续跟踪其模型质量和在真实移动设备上的部署案例，它是医疗边缘 AI 的风向标。
    *   **MedGraphAI 与 bio-medical-agent**: 这两个项目的技术栈（Graph RAG, MCP）代表了下一代医疗 Agent 的架构方向，值得进行原型测试。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*