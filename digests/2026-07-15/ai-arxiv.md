# ArXiv AI 研究日报 2026-07-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-14 23:34 UTC

---

# ArXiv AI 研究日报（2026-07-15）

---

## 📰 今日速览

今日投稿呈现三大主线：**大语言模型的内省与偏见**——多篇工作深入剖析 LLM 的元认知能力、归纳推理动力学以及作为评判者时的隐藏偏见；**多智能体安全与红队测试**——分布式后门、对话诈骗检测、智能体自攻等新威胁与防御方案密集出现；**具身智能的统一框架**——从世界动作模型到世界基础模型，多篇论文致力于打通仿真与现实之间的动力学鸿沟。此外，**RAG 的鲁棒性**（意识形态影响、图增强检索）与**模型压缩**（自生成数据压缩、LoRA 级联）也涌现出令人兴奋的突破。

---

## 📝 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Metacognition in LLMs: Foundations, Progress, and Opportunities**  
   *Liu, Gani, Lu et al.*  
   http://arxiv.org/abs/2607.11881v1  
   → 全面综述 LLM 中的元认知能力，系统梳理了自省、信心校准、自我评估等维度，是该领域首篇系统性框架论文。

2. **Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks**  
   *Musat, Pimentel, Zucchet et al.*  
   http://arxiv.org/abs/2607.11875v1  
   → 提出统一的理论框架解释 Transformer 如何在一类归纳推理任务中涌现泛化能力，超越了以往任务绑定的动力学分析。

3. **Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias**  
   *Xu, Li, Liu et al.*  
   http://arxiv.org/abs/2607.11871v1  
   → 从隐藏状态层面揭示 LLM 作为评判者时的打分偏见，突破了输入-输出层面的扰动分析，提出新的表征级解释方法。

4. **How Temperature Shapes Ideological Discourse in Retrieval-Augmented Generation?**  
   *Salari, Amamou, de Souza et al.*  
   http://arxiv.org/abs/2607.11783v1  
   → 首次系统研究 temperature 参数如何影响 RAG 输出的意识形态偏向，为 LLM 在敏感场景中的可控部署提供关键洞察。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

5. **MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents**  
   *Ma, Feng, Metz et al.*  
   http://arxiv.org/abs/2607.11818v1  
   → 首个大规模视觉工具调用评测框架，涵盖 500+ 工具与 16 个应用域，支持多图、多轮任务，填补了视觉智能体评估空白。

6. **Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming**  
   *Mao, Zheng, Wang*  
   http://arxiv.org/abs/2607.11698v1  
   → 提出自动化智能体红队框架，生产级 LLM 代理（如 Claude Code）面临的新型安全威胁及自进化攻击方法，对部署安全极具价值。

7. **Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction**  
   *Zhu*  
   http://arxiv.org/abs/2607.11696v1  
   → 提出“沙漏推理”方法，通过结构强制隔离推理阶段，显著提升少样本归纳推理的可靠性，思路简洁但效果显著。

8. **RAGU: A Multi-Step GraphRAG Engine with a Compact Domain-Adapted LLM**  
   *Komarov, Bondarenko, Shtuka et al.*  
   http://arxiv.org/abs/2607.11683v1  
   → 开源模块化图 RAG 引擎，分离知识图谱构建与多步检索，显著降低噪声实体和检索不稳定性，适配领域小型 LLM。

### 🔧 方法与框架（新技术、基准测试、效率优化）

9. **Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data**  
   *Qiu, Finzi, Zheng et al.*  
   http://arxiv.org/abs/2607.11883v1  
   → 提出利用模型自生成训练数据实现极致压缩，探索“压缩即智能”的极限，为模型瘦身提供全新范式。

10. **Active Offline-to-Online Reinforcement Learning**  
    *Bozkurt, Zhang, Motai*  
    http://arxiv.org/abs/2607.11720v1  
    → 提出主动离线到在线 RL 框架，在非平稳环境中通过少量在线交互高效改进离线策略，适用于真实部署场景。

11. **From Global to Factor-Wise Expert Composition in Discrete Diffusion Models**  
    *Huang, Xu, Mandal et al.*  
    http://arxiv.org/abs/2607.11758v1  
    → 改进离散扩散模型的专家组合机制，提出因子级的时变权重组合，提升了组合泛化能力，对复杂推理任务有重要启示。

12. **HiFi-LLP: High-Fidelity, Low-Cost Latency Predictors with Confidence for Robust HW-NAS**  
    *Balamuthu Sampath, Shomali, Fasfous et al.*  
    http://arxiv.org/abs/2607.11746v1  
    → 面向硬件感知 NAS 的高保真、低成本延迟预测器，自带置信度估计，解决了量化误差带来的架构搜索失败问题。

### 📊 应用（垂直领域、多模态、代码生成）

13. **Evidence-Backed Video Question Answering**  
    *Wang, Zhou, Wang et al.*  
    http://arxiv.org/abs/2607.11862v1  
    → 提出可验证的视频问答框架，不仅回答文本，还能提供时空证据片段，显著提升 Video LLM 的可解释性。

14. **StoryTeller: Training-Free Narrative Grounding for Long-Form Audio Description**  
    *Hahm, Dinh, Jin*  
    http://arxiv.org/abs/2607.11798v1  
    → 无需额外训练即可为长视频生成连贯的音频描述，跨越场景维护角色、事件与故事上下文，对视障辅助有直接价值。

15. **MET: Theory-Grounded and Culture-Aware Multilingual Moral Reasoning**  
    *Lee, Kwon, Zhang et al.*  
    http://arxiv.org/abs/2607.11736v1  
    → 首个兼顾文化与语言差异的多语言道德推理数据集与方法，克服了仅靠翻译引起的文化适配问题。

16. **Xiaomi-Robotics-U0: Unified Embodied Synthesis with World Foundation Model**  
    *Li, Guo, Li et al.*  
    http://arxiv.org/abs/2607.11643v1  
    → 提出统一具身世界基础模型，结合多视图一致性、几何连贯性和机器人约束，为仿真到现实提供强大生成框架。

---

## 🔍 研究趋势信号

- **元认知与自省成为 LLM 对齐新焦点**：多篇论文从机制解释、评估到应用层面探索 LLM 的自我认知能力，预示着未来模型将更注重内部状态的可控性。
- **分布式与多智能体安全威胁被正视**：分布式后门、对话式社交工程、工具调用供应链攻击等新攻击面得到系统性诊断，红队自动化成为研究刚需。
- **世界模型与具身智能走向统一**：从视频生成到机器人控制，多模态世界基础模型开始同时支持生成与决策，降低 sim-to-real 鸿沟。
- **RAG 从“检索+生成”进化为“图+多步推理”**：图结构知识、多步检索、温度与意识形态影响等研究使 RAG 更健壮、更可解释。

---

## ⭐ 值得精读

1. **Metacognition in LLMs: Foundations, Progress, and Opportunities**  
   首篇系统性综述，为理解 LLM 的自省、校准与自我改进提供了完整知识地图，是未来对齐研究的必读文献。

2. **Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias**  
   突破性地从表征层面而非输入-输出层面解释 LLM 的偏见，方法可推广至其他类型的 LLM 偏差分析，极具方法论价值。

3. **Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming**  
   直击当前部署最广泛的代码/命令代理（Claude Code、Codex）的安全命门，提出的自进化攻击框架对工业界和学术界都有极强的警示与指导意义。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*