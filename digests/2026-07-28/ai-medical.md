# 医疗 AI 行业日报 2026-07-28

> 数据来源：GitHub 医疗 Agent（20 个）+ Hugging Face 医疗模型（24 个）+ 医疗 AI 行业新闻（1 篇）；不包含论文源 | 生成时间：2026-07-27 23:45 UTC

---

**医疗 AI 行业日报 | 2026-07-28**  
*板块说明：本日报不采集 PubMed 或 ArXiv 论文，仅基于 GitHub、HuggingFace 与新闻信号生成。*

---

## 今日结论

今日未发现经过临床验证或获得监管批准的新医疗专用模型或 Agent。开源社区活跃度集中在 RAG 分诊、处方识别、医疗行政自动化及评估基准工具上，但多数项目处于早期原型阶段（Stars ≤ 1）。HuggingFace 上新出现一批医疗多模态模型及临床实体识别模型，下载量有限，缺乏独立第三方评估。行业层面，Henry Schein One 展示了牙科诊所 AI-native 转型的落地路径，但技术细节尚未公开。

---

## 医疗 Agent

**1. bloodworks-io/phlox**  
- 链接：https://github.com/bloodworks-io/phlox  
- 用途：开源、本地优先的医疗 AI Agent，支持桌面与 Web，集成 llama.cpp、Whisper、RAG 及病历记录功能。  
- 成熟度：较成熟（99 Stars，持续更新），MIT 协议。  
- 限制：未提及任何临床验证或实际医院部署案例。

**2. She1kh144/medical-agent**  
- 链接：https://github.com/She1kh144/medical-agent  
- 用途：针对俄罗斯医疗多步问答的 LLM Agent，基于 medical-RAG 构建，支持函数调用。  
- 成熟度：早期（0 Stars），有明确语言与任务定位。  
- 限制：仅面向俄语，无性能基准或安全评估报告。

**3. faraharooj/Medical-Prescription-Reader-Clinical-Agent**  
- 链接：https://github.com/faraharooj/Medical-Prescription-Reader-Clinical-Agent  
- 用途：端到端处方数字化及临床 QA 系统，支持手写/印刷处方。  
- 成熟度：极早期（0 Stars，仅 CSS/Python 骨架）。  
- 限制：无 OCR 精度数据，未开源完整模型。

**4. PrajyotMotarwar/MediSuite-AI-Agent**  
- 链接：https://github.com/PrajyotMotarwar/MediSuite-AI-Agent  
- 用途：医疗行政自动化 Agent，支持 ICD-10/CPT-4 编码、OCR 文档处理及 CMS-1500 理赔表单生成。  
- 成熟度：早期（0 Stars），MIT 协议，代码结构完整。  
- 限制：未提供编码准确率或合规性审计结果。

**5. klshen8386/carT-clinical-agent**  
- 链接：https://github.com/klshen8386/carT-clinical-agent  
- 用途：耶鲁大学 Fan 实验室开发的临床决策支持 Agent，专注于临床交互。  
- 成熟度：早期（0 Stars），MIT 协议，有学术背景。  
- 限制：仅公开基础代码，无临床试验或 A/B 测试数据。

---

## 医疗模型

**1. genzeonplatform/healthcare-brain-vitals-ner**  
- 链接：https://huggingface.co/genzeonplatform/healthcare-brain-vitals-ner  
- 任务：token-classification，生命体征实体识别。  
- 现有证据：22 Likes、24 Downloads，标注为临床/医疗 NER。  
- 许可证：未明确，Transformers 兼容。  
- 部署注意事项：需结合脱敏管道，防止 PHI 泄露。

**2. RemDev-AI/medical-triage-agent-ai-poc-models**  
- 链接：https://huggingface.co/RemDev-AI/medical-triage-agent-ai-poc-models  
- 任务：text-generation，基于 Qwen3-1.7B 的 DPO/LoRA 医疗分诊原型。  
- 现有证据：278 Downloads，明确医疗场景标签。  
- 许可证：PEFT 适配器，基础模型为 Qwen3-1.7B-Base（Apache-2.0）。  
- 部署注意事项：模型规模较小，适合边缘部署，但未提供分诊准确率数据。

**3. MohamedAhmedAE/llava-medical-3B-clip-vit-stage2**  
- 链接：https://huggingface.co/MohamedAhmedAE/llava-medical-3B-clip-vit-stage2  
- 任务：多模态（LLaVA），面向医学图像理解。  
- 现有证据：949 Downloads（最高之一），但无点赞或评估。  
- 许可证：safetensors，未明确协议。  
- 部署注意事项：3B 参数多模态模型，需 GPU 推理；未提供医学影像测试集结果。

**4. Koalacrown/clinical-2-qwen3-8b**  
- 链接：https://huggingface.co/Koalacrown/clinical-2-qwen3-8b  
- 任务：文本生成（Qwen3 基座），临床领域微调。  
- 现有证据：125 Downloads，无独立评测。  
- 许可证：safetensors，无明确协议。  
- 部署注意事项：8B 模型需较高算力；缺乏临床安全护栏描述。

**5. VladimirRH/ruRoberta-large-medical-router**  
- 链接：https://huggingface.co/VladimirRH/ruRoberta-large-medical-router  
- 任务：text-classification，俄语医疗路由分类。  
- 现有证据：1 Like、17 Downloads，LoRA 适配器。  
- 许可证：未明确，Transformers 兼容。  
- 部署注意事项：专为俄语设计，不可跨语言复用；无路由准确率。

---

## 行业动态

**1. Henry Schein One goes AI-native with AI Product Discovery and Strategy**  
- 来源：AWS Industries Blog  
- 链接：https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/  
- 价值：全球最大的牙科软件提供商之一（服务 10 万+诊所）借助 AWS 实现 AI-native 转型，展示了医疗 SaaS 嵌入 AI 代理的实际路径，但未披露技术架构或模型选型细节。

---

## 研判

**1. 临床验证仍是最大缺口**  
今日所有 Agent 和模型均未提供任何形式的临床试验、A/B 测试或第三方基准结果。即便下载量较高的 llava-medical-3B 也仅是在公开数据集上的微调，缺乏诊断准确性或临床安全性的独立评估。建议关注近期是否有项目发布评估报告（如 chenyangsu/clinical-agent-evals 这类基准工具的使用结果）。

**2. 隐私合规风险未得到足够重视**  
大多数项目未明确说明数据处理方式（如本地推理、联邦学习或去标识化）。尤其是远程医疗 Agent（如 phlox）虽强调“local first”，但用户数据存储与传输细节仍不透明。HIPAA/GDPR 合规声明的缺失构成潜在采用障碍。建议后续关注是否有项目引入安全网关（如 RKB109 的 clinical-rag-safety-gateway）。

**3. 值得跟踪的方向：行政自动化与评估基础设施**  
MediSuite-AI-Agent（ICD-10/CPT-4 编码）和 clinical-agent-evals（评估工具）代表了两类有望快速落地的方向：一是降低医疗行政成本的自动化工具（风险较低、合规路径清晰），二是标准化评估框架（可推动可重复性）。这两类项目若获得医疗信息系统公司的合作，可能率先进入生产环境。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*