# 医疗 AI 行业日报 2026-07-22

> 数据来源：GitHub 医疗 Agent（20 个）+ Hugging Face 医疗模型（24 个）+ 医疗 AI 行业新闻（1 篇）；不包含论文源 | 生成时间：2026-07-21 23:41 UTC

---

# 医疗 AI 行业日报 | 2026-07-22

## 今日结论
今日出现一批医疗专用 Agent 与模型，覆盖处方解析、多模态影像、临床 NER 及分诊决策等方向，但绝大多数仍处于早期原型或未验证状态，缺乏临床验证证据或监管批准。Henry Schein One 宣布 AI 原生转型是少数可落地的行业信号。

---

## 医疗 Agent（5 项）

1. **Deblo — 虚拟医生咨询 App**  
   🔗 https://github.com/GitNinja36/Deblo  
   **用途**：基于症状的 AI 智能体交互，提供全栈虚拟医生咨询。  
   **成熟度**：2 Stars，最近活跃更新（2026-07-21），技术栈完整（TypeScript）。  
   **限制**：无公开临床测试或数据，且许可证未声明，无法评估合规与隐私保护。

2. **Parchee-Medical-Assistant — 手写处方多智能体系统**  
   🔗 https://github.com/10Prachi2006/Parchee-Medical-Assistant  
   **用途**：读手写处方、解释药物、维护纵向健康记忆、RAG 临床问答、生成就诊简报。  
   **成熟度**：2 Stars，Python 实现，生产级设计。  
   **限制**：无许可证声明，无外部验证，依赖未公开的 LLM 底层。

3. **healthcare-agents — FHIR 混合决策 Agent**  
   🔗 https://github.com/Ojochogwu866/healthcare-agents  
   **用途**：基于 FHIR 数据，在 LLM 与确定性规则之间智能切换，用于临床判断。  
   **成熟度**：0 Stars，刚创建（2026-07-21），代码量极少。  
   **限制**：无任何使用证据，概念验证阶段。

4. **Multi_Agent_Medical_Service — 多模态医疗助手**  
   🔗 https://github.com/meherabmehu/Multi_Agent_Medical_Service  
   **用途**：结合 RAG、医学影像分析（脑瘤、胸片、皮肤病变）、PubMed 检索的多智能体系统。  
   **成熟度**：0 Stars，Apache-2.0 许可证，Docker 化部署。  
   **限制**：无影像精度指标或临床验证，仅为框架搭建。

5. **clinical-agent-monitor — 临床 LLM 安全监控框架**  
   🔗 https://github.com/WeiQ912/clinical-agent-monitor  
   **用途**：多智能体证据验证与幻觉检测，确保临床 LLM 推理的可靠性。  
   **成熟度**：0 Stars，无下载量，有明确 AI 安全主题标签。  
   **限制**：纯研究原型，无实际医疗场景评测。

---

## 医疗模型（5 项）

1. **llava-medical-3B-medsiglip-stage2**  
   🔗 https://huggingface.co/MohamedAhmedAE/llava-medical-3B-medsiglip-stage2  
   **任务**：医学视觉语言模型（LlaVA 微调）  
   **现有证据**：913 下载量，使用 MedSigLIP 视觉编码器，无基准数据。  
   **许可证信号**：未声明，仅标 safetensors。  
   **部署注意事项**：需 GPU 推理，建议先验证影像模态适用范围。

2. **radiology-summariser-model**  
   🔗 https://huggingface.co/Preeti7101981/radiology-summariser-model  
   **任务**：放射学报告摘要（T5 架构）  
   **现有证据**：0 下载，无评测结果。  
   **许可证信号**：未声明。  
   **部署注意事项**：仅适用于英文放射文本，需自行标注测试集。

3. **healthcare-brain-vitals-ner**  
   🔗 https://huggingface.co/genzeonplatform/healthcare-brain-vitals-ner  
   **任务**：生命体征实体识别（BERT 标记分类）  
   **现有证据**：22 Likes，8 下载，有临床/PHI 标签。  
   **许可证信号**：未声明，但 genzeonplatform 系列其他模型可能有统一许可。  
   **部署注意事项**：可直接用 Transformers pipeline，建议在 HIPAA 合规环境下运行。

4. **healthcare-brain-diagnosis-icd-ner**  
   🔗 https://huggingface.co/genzeonplatform/healthcare-brain-diagnosis-icd-ner  
   **任务**：诊断代码与 ICD 实体识别  
   **现有证据**：20 Likes，19 下载，医疗专用标签。  
   **许可证信号**：同上。  
   **部署注意事项**：可用于临床文本结构化，但 ICD 版本未见说明。

5. **clinical-severity-classifier**  
   🔗 https://huggingface.co/ayodeji21/clinical-severity-classifier  
   **任务**：临床严重程度分类（BERT）  
   **现有证据**：83 下载，无基准评测。  
   **许可证信号**：未声明。  
   **部署注意事项**：需定义严重度等级及其与临床路径的映射。

---

## 行业动态（1 篇）

- **Henry Schein One 的 AI 原生转型**  
  🔗 https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/  
  **价值**：行业头部齿科 SaaS 平台基于 AWS 构建 AI 原生架构，涉及产品发现与战略，为医疗 AI 商业化提供参考范式，但未披露具体模型或临床效果。

---

## 研判

1. **临床验证缺失**：今日列出的 Agent 与模型均未提供第三方临床评测、诊断准确率或监管认证信息。医院或药企若考虑采用，需自行开展前瞻性验证并建立风险控制机制。

2. **隐私合规风险**：多数项目许可证不明确，且缺乏 PHI 处理说明。genzeonplatform 的 NER 模型虽标注了 PHI/PII 相关标签，但未公开训练数据来源，部署前需审计数据溯源与去标识化流程。

3. **后续跟踪建议**：① 关注 clinical-agent-monitor 的后续评测，其安全监控思路可能成为临床 LLM 落地的必需组件；② 追踪 Parchee 的手写处方解析效果，若加入真实处方验证将具商业价值；③ Henry Schein One 的 AI 原生案例可能催生更多齿科专用 Agent，建议持续观察其技术选型与效果数据。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*