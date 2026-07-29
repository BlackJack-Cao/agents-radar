# 医疗 AI 行业日报 2026-07-29

> 数据来源：GitHub 医疗 Agent（20 个）+ Hugging Face 医疗模型（24 个）+ 医疗 AI 行业新闻（1 篇）；不包含论文源 | 生成时间：2026-07-28 23:40 UTC

---

好的，以下是为您生成的医疗AI行业分析师日报，基于2026年7月29日的产品与行业信号。

---

### **医疗 AI 行业日报 | 2026-07-29**

#### **1. 今日结论**

本周社区活跃度集中在基于 **LangGraph** 和 **Qwen** 开源模型构建的医疗咨询/问诊Agent以及专科（放射学）模型微调上，但绝大多数项目仍处于早期开发或原型阶段，**尚无项目展现出已完成的临床验证或明确的医疗级部署证据**。今日信号表明，开源社区正在积极探索将Agentic工作流（多轮对话、多工具调用、安全护栏）与医疗场景结合，但距离可靠的产品化仍有较大差距。

#### **2. 医疗 Agent**

基于成熟度、医疗场景贴合度和近期活跃度筛选（评分标准：Stars、描述详细度、近期更新、技术栈相关性）：

*   **ohuzzh/xinyu-medical-agent**
    *   **链接**: https://github.com/ouhuzzh/xinyu-medical-agent
    *   **用途**: 面向医疗咨询与挂号场景的智能助手，集成了医学知识检索、科室推荐和预约对话流程。
    *   **成熟度**: **中等**。拥有16个Stars，技术栈清晰（LangGraph, RAG），明确描述了混合检索和可信度控制。近期有活跃更新。
    *   **限制**: 专注于挂号等非核心诊疗环节，未涉及医学影像分析或复杂诊断推理。

*   **chencyan21/SkinGraphAI**
    *   **链接**: https://github.com/chencyan21/SkinGraphAI
    *   **用途**: 多智能体医疗助手，支持医学问答、RAG、网络检索和医学图像分析。
    *   **成熟度**: **中低**。9个Stars，技术栈完整（LangGraph, FastAPI, Ollama），明确提及多模态能力。
    *   **限制**: 项目描述中包含了“human review”（人工审核）环节，表明其当前设计并非全自动化，限制了直接部署的可行性。

*   **mcxxxxxcm/medical_agent**
    *   **链接**: https://github.com/mcxxxxxcm/medical_agent
    *   **用途**: 针对医疗咨询准确性要求高的智能问诊Agent，集成了安全护栏。
    *   **成熟度**: **低**。仅3个Stars，但项目描述详细，技术选型（混合检索、流式输出、安全护栏）具有参考价值。
    *   **限制**: 项目规模小，且未公开许可证，代码质量和安全性未知。

*   **MichaelRDionne/clinical-agent-skills**
    *   **链接**: https://github.com/MichaelRDionne/clinical-agent-skills
    *   **用途**: 面向临床自动化的Claude Code技能，包含变更控制、多Agent自主权检查和安全审计。
    *   **成熟度**: **概念验证**。0 Stars，但项目描述非常具体，涉及生产环境中的临床自动化流程。
    *   **限制**: 这是一个配置/技能集，而非可独立运行的Agent。其“临床自动化”的描述需要进一步澄清其应用范围。

*   **00royy/clinical-agents-langgraph-mcp**
    *   **链接**: https://github.com/00royy/clinical-agents-langgraph-mcp
    *   **用途**: 结合LangGraph与MCP（模型上下文协议）构建临床Agent。
    *   **成熟度**: **早期**。0 Stars，新项目，无详细描述。
    *   **限制**: 信息极少，仅代表技术路线的探索，无法评估其实际医疗应用价值。

#### **3. 医疗模型**

基于任务明确性、近期热度（下载量/Likes）和许可证信号筛选：

*   **MohamedAhmedAE/llava-medical-8B-clip-vit_kaggle-stage2**
    *   **链接**: https://huggingface.co/MohamedAhmedAE/llava-medical-8B-clip-vit_kaggle-stage2
    *   **任务**: 医疗视觉语言模型 (LLaVA)
    *   **现有证据**: 651次下载，表明社区有一定兴趣。文件名暗示与Kaggle竞赛相关，但无性能指标。
    *   **许可证信号**: 无公开许可证信息，商用需谨慎。
    *   **部署注意事项**: LLaVA模型通常需要较大的GPU内存（8B参数），部署成本较高。

*   **Kerassy/Qwen3.5-9B-Medical-Reasoning**
    *   **链接**: https://huggingface.co/Kerassy/Qwen3.5-9B-Medical-Reasoning
    *   **任务**: 文本生成（医疗推理）
    *   **现有证据**: 基于Qwen3.5基座进行微调（Unsloth），针对医疗推理和思维链。0次下载，但配套的4B模型有258次下载，暗示其方法有一定关注度。
    *   **许可证信号**: 无公开许可证信息。
    *   **部署注意事项**: 提供了GGUF格式，方便在CPU或资源受限环境部署推理。

*   **RemDev-AI/medical-triage-agent-ai-poc-merged**
    *   **链接**: https://huggingface.co/RemDev-AI/medical-triage-agent-ai-poc-merged
    *   **任务**: 文本生成（医疗分诊）
    *   **现有证据**: 109次下载，模型名明确为“Proof-of-Concept”（概念验证），非生产就绪。
    *   **许可证信号**: 无公开许可证信息。
    *   **部署注意事项**: 标注为`endpoints_compatible`，理论上可通过Hugging Face Inference Endpoints快速部署。

*   **klapsoul/clinical-synth-v3a-biomedico**
    *   **链接**: https://huggingface.co/klapsoul/clinical-synth-v3a-biomedico
    *   **任务**: 未明确（基于XLM-RoBERTa，推测为嵌入或分类任务）
    *   **现有证据**: 20次下载，模型描述为“临床合成数据”模型，可能用于生成或嵌入。
    *   **许可证信号**: 无公开许可证信息。
    *   **部署注意事项**: XLM-RoBERTa模型通常较小，易于部署。其合成数据特性对数据增强有意义，但质量未经评估。

*   **bhavikgaba/qwen3-8b-radiology-gguf**
    *   **链接**: https://huggingface.co/bhavikgaba/qwen3-8b-radiology-gguf
    *   **任务**: 未明确（推测为放射学文本分析）
    *   **现有证据**: 0次下载，模型名明确针对放射学场景，并提供了GGUF格式。
    *   **许可证信号**: Apache-2.0，商业友好。
    *   **部署注意事项**: GGUF格式利于端侧或低资源部署。作为放射学专用模型，缺乏基准测试数据。

#### **4. 行业动态**

*   **Henry Schein One goes AI-native**
    *   **链接**: https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/
    *   **价值**: 展示了大型牙科医疗服务商（服务超10万诊所）通过AWS云服务全面拥抱AI原生化策略的案例。重点在于**AI产品发现与战略**，而非具体模型的发布，对医疗SaaS公司的技术转型方向有参考意义。

#### **5. 研判**

1.  **临床验证严重缺失**：无论是今日的Agent还是模型，**没有任何一个提供临床相关的准确性、召回率、敏感度等指标**，也未提及其是否符合《医疗器械软件》相关法规。投资者和采购方在评估任何项目时，应将其视为探索性项目，严禁将社区关注度（Stars/下载量）等同于临床有效性。

2.  **隐私合规是最大合规风险**：医疗AI对患者隐私（如HIPAA, GDPR, 《个人信息保护法》）有极高要求。今日列表中多个项目（如`genzeonplatform`的NER模型）明确涉及PII/PHI识别，但其训练数据来源、脱敏流程、模型使用后的数据留存均无说明。**任何未经严格隐私和安全性审计的医疗Agent都不应接触真实患者数据。**

3.  **值得跟踪的趋势**：多个项目（如`xinyu-medical-agent`和`clinical-agents-langgraph-mcp`）均采用 **LangGraph 和 MCP 协议**构建Agent。这表明，**Agentic AI（特别是多步骤、上下文感知、可编排的流程）正在成为构建下一代医疗AI应用的主流技术范式**。建议重点跟踪这一技术栈在医疗领域的应用演进，特别是其与电子病历（EMR）、临床决策支持系统（CDSS）的集成能力。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*