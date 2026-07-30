# 医疗 AI 行业日报 2026-07-30

> 数据来源：GitHub 医疗 Agent（20 个）+ Hugging Face 医疗模型（24 个）+ 医疗 AI 行业新闻（1 篇）；不包含论文源 | 生成时间：2026-07-29 23:42 UTC

---

**医疗 AI 行业日报 | 2026-07-30**

---

### 1. 今日结论
- 本期未发现已通过临床验证或获得监管批准的医疗专用模型/Agent，所有项目均处于早期开发或概念验证阶段。
- 开源社区围绕 **LangGraph + RAG** 构建医疗 Agent 成为主流范式，多模态医学影像（放射学、皮肤科）微调模型密集发布，但下载量普遍偏低，成熟度有限。
- AWS 行业博客披露的牙科 AI 原生案例是唯一值得关注的产业动态，提示传统医疗 IT 厂商正加速 AI 转型。

---

### 2. 医疗 Agent（Top 5）

| 项目 | 链接 | 用途 | 成熟度 | 限制 |
|------|------|------|--------|------|
| **xinyu-medical-agent** | [GitHub](https://github.com/ouhuzzh/xinyu-medical-agent) | 基于 LangGraph 的医疗咨询与挂号助手，支持多轮对话、混合检索、科室推荐。 | ⭐16 Stars，最近更新（29/07），有 MIT 许可。 | 未提及真实医疗机构测试，功能限于流程引导而非诊断。 |
| **SkinGraphAI** | [GitHub](https://github.com/chencyan21/SkinGraphAI) | 多 Agent 皮肤科助手，整合 RAG、网络检索、医学影像分析，含人工审核环节。 | ⭐10 Stars，Apache-2.0，标签清晰（LangGraph, Qdrant）。 | 仅支持特定皮肤影像数据集，未验证临床准确性。 |
| **medical_agent (mcxxxxxcm)** | [GitHub](https://github.com/mcxxxxxcm/medical_agent) | 医疗问诊 Agent，强调混合检索、多轮记忆、安全护栏与流式输出。 | ⭐4 Stars，最近更新，无 License。 | 准确性与可追溯性承诺无第三方评估。 |
| **Healthcare-Agent (Soumi-7)** | [GitHub](https://github.com/Soumi-7/Healthcare-Agent) | 黎巴嫩药物短缺场景下的临床决策支持，帮助药剂师和医生寻找安全替代药物。 | ⭐0 Stars，但有明确应用场景描述（地区性问题）。 | 依赖本地药物数据库，泛化能力未知。 |
| **AI-medical-agent (Manvitha)** | [GitHub](https://github.com/Manvitha-kv352/AI-medical-agent) | 医学研究 Agent，使用 LangGraph + ChromaDB + PubMed API 检索并生成循证摘要。 | ⭐0 Stars，描述详细，含 Ollama 本地推理。 | 偏学术检索，非临床交互场景。 |

---

### 3. 医疗模型（Top 5）

| 模型 | 链接 | 任务 | 现有证据 | 许可证与部署注意 |
|------|------|------|----------|------------------|
| **llava-medical-8B** | [HF](https://huggingface.co/MohamedAhmedAE/llava-medical-8B-clip-vit_kaggle-stage2) | 医疗视觉问答 | 651 下载，Kaggle 竞赛第二阶段产物。 | safetensors，区域 US；未提供训练数据来源，需自行评估医学图像领域适配性。 |
| **nemotron-3-embed-8b-medical** | [HF](https://huggingface.co/minetta/nemotron-3-embed-8b-medical) | 医疗句子相似度 / 嵌入 | 1 Like，基于 Ministral3，标签含 biomedical。 | 适合 RAG 检索增强；sentence-transformers 兼容，但无临床基准。 |
| **Qwen3.5-4B-Medical-Reasoning** | [HF](https://huggingface.co/Kerassy/Qwen3.5-4B-Medical-Reasoning) | 医疗推理 / 文本生成 | 258 下载，提供 GGUF 量化，含 CoT 标签。 | 4B 参数可本地部署；属于通用推理微调，非专病模型。 |
| **taylor-medical-llm-4bit** | [HF](https://huggingface.co/oscardeng/taylor-medical-llm-4bit) | 医疗对话生成 | 221 下载，mlx 格式，4-bit 量化。 | 适用于 Apple Silicon 设备；无明确训练数据与评估报告。 |
| **clinical-2-qwen3-8b** | [HF](https://huggingface.co/Koalacrown/clinical-2-qwen3-8b) | 临床文本生成 | 125 下载，基于 Qwen3-8B。 | 无任务标签，推测为指令微调；缺乏临床性能数据。 |

---

### 4. 行业动态

- **Henry Schein One 采用 AI 原生架构**  
  [AWS 行业博客](https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/)  
  全球最大牙科服务商之一将 10 万+诊所迁移至 AWS，整合 AI 产品发现与策略，核心目标是减少技术负担、聚焦患者护理。  
  **价值**：传统医疗 IT 厂商从“工具辅助”转向“AI 原生”，为行业提供了架构转型的参考案例。

---

### 5. 研判

1. **临床验证缺口**：本期所有 Agent 与模型均无公开的临床前/临床试验结果、诊断准确率或 FDA 等效监管信息。在应用于真实诊疗前，必须完成独立的回顾性研究与前瞻性验证，尤其涉及药物替代、影像判读等功能。

2. **隐私合规风险**：多数项目未提及 HIPAA/GDPR 数据脱敏或本地化部署策略。使用 HuggingFace 公共模型或 GitHub 公开代码进行医疗推理时，需警惕患者数据泄露风险；建议优先选择支持完全本地运行（如 Ollama、GGUF）且具有安全护栏（如输入过滤、审计日志）的方案。

3. **后续重点跟踪**：
   - **LangGraph 生态演变**：多个 Agent 依赖 LangGraph 编排多 Agent 流程，其社区对医疗场景的适配（如半受控对话、科室推荐、药物交叉检查）值得持续观察。
   - **放射学 + LoRA 微调**：HoqueMahmudul 系列模型（72B/7B/0.5B）覆盖了不同尺寸的放射学图像描述任务，若后续公开评估数据集，可能成为低成本医学影像 AI 的基准。
   - **地区性临床决策支持**：Soumi-7 的黎巴嫩药物短缺项目展示了 Agentic AI 解决本地化刚需的潜力，类似“处方替代”场景在供应链脆弱地区有复制价值。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*