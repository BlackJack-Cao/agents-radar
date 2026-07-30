# ArXiv AI 研究日报 2026-07-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-29 23:42 UTC

---

# ArXiv AI 研究日报 — 2026-07-30

## 今日速览

今日投稿聚焦三大趋势：**智能体记忆与推理**出现多项突破，UniMem、Penelope 等从不同角度解决了长任务中的稳定性与效率问题；**多模态与结构化推理**显著深化，MODUS、CHARM 和临床诊断基准推动任意模态建模与图基础模型迈向实用；**安全与对齐**话题持续升温，从 AI 竞赛中的不安全偏向到跨供应商工具信任、政治信息中介评估，反映出社区对负责任的智能体部署的高度关注。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Pass the Baton: Trajectory-Relayed On-Policy Distillation**  
[链接](http://arxiv.org/abs/2607.26057v1) | Haolei Xu et al.  
**一句话说明**：提出**轨迹继电**蒸馏策略，缓解在线蒸馏中学生模型因偏离正确推理方向导致的“前缀失败”问题，显著提升推理轨迹的可靠性。

**2. Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA**  
[链接](http://arxiv.org/abs/2607.26052v1) | Tom Saliencro et al.  
**一句话说明**：根据 token 不确定性动态分配专家数量，打破 MoE LoRA 固定 k 的局限，同时提升效率与困难样本处理能力。

**3. Polistemics: Evaluating LLMs as Information Mediators in Politics & Elections**  
[链接](http://arxiv.org/abs/2607.25953v1) | Baran Peters  
**一句话说明**：首个理论驱动的**政治信息中介评估基准**，系统评估 LLM 在选举场景中提供负责任信息的质量，填补该领域标准化评测空白。

**4. Evaluating Multi-Turn Multimodal Diagnostic Reasoning on Challenging Real-World Clinical Cases**  
[链接](http://arxiv.org/abs/2607.25933v1) | Rui Yang et al.  
**一句话说明**：构建多轮多模态临床诊断基准，模拟诊疗中信息逐步披露的动态过程，更真实地评估 LLM 的临床推理能力。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**5. Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?**  
[链接](http://arxiv.org/abs/2607.26041v1) | Abhishek Pillai et al.  
**一句话说明**：首次构建专注于**GUI 因果转换重建**的基准，揭示现有计算机使用智能体在理解动作‑状态变迁方面的短板，方向极具指导意义。

**6. UniMem: Complementary Episodic-to-Parametric Memory for Boundary-Agnostic Task Streams**  
[链接](http://arxiv.org/abs/2607.26017v1) | Siyu Xia et al.  
**一句话说明**：提出结合外部情景记忆与内部参数记忆的互补框架，解决 LLM 智能体在边界模糊的持续任务流中的稳定性‑可塑性困境。

**7. Reinforcement Learning for Code Optimization**  
[链接](http://arxiv.org/abs/2607.25970v1) | Pierre Chambon et al.  
**一句话说明**：将 RL 从代码正确性延伸至代码优化，系统揭示以执行时间为奖励时模型“钻空子”等关键挑战，为实用化优化提供重要洞见。

**8. Penelope: Localized Latent Recurrence for Efficient Structured Reasoning**  
[链接](http://arxiv.org/abs/2607.25915v1) | Yutong Chen et al.  
**一句话说明**：通过局部潜在循环代替显式链式思维 token，在不增加参数和推理步数的情况下提升结构化推理效率，架构新颖。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**9. CHARM: A Multimodal Graph Foundation Model with Hierarchical Context Modeling for Zero-Shot Transfer**  
[链接](http://arxiv.org/abs/2607.26023v1) | Ankang Yang et al.  
**一句话说明**：首个**多模态图基础模型**，通过层次化上下文建模实现跨图域、跨任务的零样本迁移，适用于文本、图像混杂的真实图数据。

**10. MODUS: Decoder-Only Any-to-Any Modeling of Diverse Modalities**  
[链接](http://arxiv.org/abs/2607.25948v1) | Mingqiao Ye et al.  
**一句话说明**：仅用解码器架构实现任意模态→任意模态的联合建模，并成功拓展到生态学、天文学等科学数据，通用性强。

**11. dtControl2+ε: Trading Optimality for Explainability in MDPs via Decision Trees**  
[链接](http://arxiv.org/abs/2607.25925v1) | Tereza Kinská et al.  
**一句话说明**：允许用户牺牲少量最优性换取高度可解释的决策树策略表示，为大规模 MDP 控制器的可解释部署提供实用取舍工具。

**12. RSIBench-Data: Benchmarking Data-Centric Research for Recursive Self-Improvement**  
[链接](http://arxiv.org/abs/2607.25886v1) | Fanqing Meng et al.  
**一句话说明**：面向模型**递归自改进**的数据中心研究基准，自动评估 LLM 诊断自身缺陷并优化训练数据的能力，推动自我进化闭环。

---

### 📊 应用（垂直领域、多模态、代码生成）

**13. VetClaw: An Edge-Cloud Multimodal Agentic System for Veterinary Disease Screening**  
[链接](http://arxiv.org/abs/2607.26042v1) | Syed Mhamudul Hasan et al.  
**一句话说明**：构建边缘相机+云端 VLM 的多模态智能体系统，实现兽医疾病零样本筛查，低资源部署潜力大。

**14. Pictura: Perspective-View Self-Play at Scale for Driving**  
[链接](http://arxiv.org/abs/2607.26005v1) | Yuan Yin et al.  
**一句话说明**：在仿真中利用**视角视图自博弈**大规模训练鲁棒驾驶策略，并缩小与真实感知输入之间的表征差距，是端到端驾驶的代表性工作。

**15. AI's Capability in Assisting Scientific Research in Physics, Astrophysics, and Cosmology II**  
[链接](http://arxiv.org/abs/2607.25881v1) | Jia Liu et al.  
**一句话说明**：人类专家与三种当代 LLM 分别生成科研项目计划并相互评估，发现 LLM 在项目规划与提案评估上已展现出不可忽视的辅助能力。

---

## 研究趋势信号

-

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*