# 医疗 AI 行业日报 2026-07-24

> 数据来源：GitHub 医疗 Agent（20 个）+ Hugging Face 医疗模型（24 个）+ 医疗 AI 行业新闻（1 篇）；不包含论文源 | 生成时间：2026-07-23 23:39 UTC

---

**医疗 AI 行业日报 | 2026-07-24**  
数据源：GitHub ✅ | HuggingFace ✅ | News ✅

---

## 今日结论

今日出现一个相对成熟的开源医疗 Agent（phlox，98 Stars），以及多个医疗专用视觉与推理模型（如 llava-medical 系列、Reasoning-Medical-27B）和临床 NER 模型。但这些系统均未公布临床验证结果或监管批准，仍处于早期开发/实验阶段。行业层面未见重大政策或投融资事件，仅有牙科 SaaS 的 AI 原生转型案例。

---

## 医疗 Agent（最多 5 项）

1. **bloodworks-io/phlox**  
   - 链接：https://github.com/bloodworks-io/phlox  
   - 用途：开源、本地优先的医疗 AI Agent，支持桌面和 Web，集成 Ollama、Whisper 语音转录、RAG 与 scribe 功能。  
   - 成熟度：98 Stars，持续维护（最后推送 2026-07-23），MIT 许可证，属于少数具有完整前端+后端架构的医疗 Agent。  
   - 限制：未提及临床验证，仅提供技术框架，需自行集成医学知识库。

2. **mcxxxxxcm/medical_agent**  
   - 链接：https://github.com/mcxxxxxcm/medical_agent  
   - 用途：面向医疗咨询的智能问诊 Agent，基于 LangGraph + RAG，具备混合检索、多轮记忆、流式输出和安全护栏。  
   - 成熟度：3 Stars，描述详细，代码活跃（最近推送 2026-07-23）。  
   - 限制：Stars 极少，缺少许可证，功能成熟度未知，未提供评估或测试数据集。

3. **PragyApurva/Anamnesis**  
   - 链接：https://github.com/PragyApurva/Anamnesis  
   - 用途：用于患者病史采集的临床 Agent（Anamnesis 意为“病史询问”）。  
   - 成熟度：0 Stars，刚创建（2026-07-22），Python 实现，MIT 许可证。  
   - 限制：极早期项目，仅具概念价值，无可用性评估。

4. **MichaelRDionne/clinical-agent-skills**  
   - 链接：https://github.com/MichaelRDionne/clinical-agent-skills  
   - 用途：提供经过实战测试的 Claude Code 技能与斜杠命令，包括门控变更控制、多 Agent 自主层级、负载真实性检查及发布前安全审计。  
   - 成熟度：0 Stars，但描述自称“battle-tested”，包含伪匿名化临床自动化实践。  
   - 限制：依赖 Claude Code 商业产品，不提供独立运行时，且无第三方验证。

5. **adityasarin/PhysioClinicalAgent**  
   - 链接：https://github.com/adityasarin/PhysioClinicalAgent  
   - 用途：面向物理治疗诊所的 Agent，可管理账单、预约调度与 FAQ 查询，采用 supervisor + subagent 架构。  
   - 成熟度：0 Stars，2026-07-23 创建，Python 实现。  
   - 限制：仅管理功能，非诊断/临床决策支持；极早期。

---

## 医疗模型（最多 5 项）

1. **MohamedAhmedAE/llava-medical-3B-medsiglip-stage2**  
   - 链接：https://huggingface.co/MohamedAhmedAE/llava-medical-3B-medsiglip-stage2  
   - 任务：医学视觉-语言模型（Image-Text），基于 LLaVA 架构，使用 MedSigLIP 视觉编码器。  
   - 现有证据：1,165 下载量，0 Likes，无评估数据。  
   - 许可证：无明确声明（仅标签 safetensors）。  
   - 部署注意：需 GPU，可通过 Transformers 加载；未提供 Gradio demo 或基准测试。

2. **EpistemeAI/Reasoning-Medical-27B**  
   - 链接：https://huggingface.co/EpistemeAI/Reasoning-Medical-27B  
   - 任务：image-text-to-text，多模态推理（Qwen3.5 架构，27B 参数）。  
   - 现有证据：6 Likes，379 下载量，标注支持 text-generation-inference。  
   - 许可证：无明确声明，但使用 Unsloth 优化。  
   - 部署注意：参数量大，需 A100 级别 GPU；适合研究级评估。

3. **genzeonplatform/healthcare-brain-vitals-ner**  
   - 链接：https://huggingface.co/genzeonplatform/healthcare-brain-vitals-ner  
   - 任务：token-classification（NER），识别生命体征实体。  
   - 现有证据：22 Likes，23 下载量，标签包含 phi/pii，暗示涉及隐私保护。  
   - 许可证：无明确声明，使用 BERT 架构。  
   - 部署注意：可直接用于临床文本的实体抽取，但需验证准确率。

4. **Koalacrown/clinical-2-qwen3-8b**  
   - 链接：https://huggingface.co/Koalacrown/clinical-2-qwen3-8b  
   - 任务：文本生成（临床领域微调 Qwen3-8B）。  
   - 现有证据：0 Likes，0 下载量，但有 LoRA 变体（下载 0）。  
   - 许可证：无声明。  
   - 部署注意：需 V100/RTX 3090 及以上；缺少评估报告。

5. **fabriceyhc/Bio_ClinicalBERT-DrugDetector**  
   - 链接：https://huggingface.co/fabriceyhc/Bio_ClinicalBERT-DrugDetector  
   - 任务：多标签文本分类（药物检测/过量监测），基座为 Bio_ClinicalBERT。  
   - 现有证据：0 Likes，12 下载量，标注 forensic/overdose-surveillance。  
   - 许可证：无声明。  
   - 部署注意：轻量级 BERT 模型，适合 CPU 推理；可用于辅助公共卫生监测。

---

## 行业动态（最多 5 篇）

1. **Henry Schein One 通过 AI 产品发现与战略实现 AI 原生转型**  
   - 来源：https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/  
   - 价值：全球最大牙科软件供应商之一宣布全面向 AI 原生架构迁移，表明传统医疗 IT 巨头开始系统性拥抱 AI，行业标杆效应值得关注。

---

## 研判

1. **临床验证仍是最大缺口**  
   今日所有 Agent 与模型均未提供任何临床验证结果（如诊断准确率、随机对照试验、FDA 认证），投资者与医疗机构应警惕过度宣传，建议优先关注已公布评估基准的项目（如 PubMedQA 或 RadGraph 分数）。

2. **隐私合规成为 Agent 本地部署驱动力**  
   phlox 强调“本地优先”，且 genzeon NER 模型标注 phi/pii 识别能力，反映出医疗 AI 正从 SaaS 向边缘部署迁移。建议跟踪 HIPAA/GDPR 合规认证动态，尤其是开源 Agent 的数据流转机制。

3. **后续值得跟踪的项目**  
   - phlox（GitHub 98 Stars，社区活跃度持续上升）；  
   - genzeon 系列 NER 模型（高 Likes 且聚焦临床实体，可能用于电子病历结构化）；  
   - Henry Schein One 的 AI 产品落地进展（牙科领域 AI 商业化首批案例）。
```

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*