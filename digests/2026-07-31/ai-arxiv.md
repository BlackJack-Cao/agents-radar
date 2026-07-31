# ArXiv AI 研究日报 2026-07-31

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-30 23:42 UTC

---

# ArXiv AI 研究日报（2026-07-31）

## 今日速览
今日投稿揭示了三个核心趋势：**LLM与智能体的安全性**成为焦点——从记忆投毒追踪到对抗恶意微调的鲁棒对齐，再到LLM辅助写作导致的语言单一化；**智能体的自主研究能力**首次被系统化实证评估，为通用AI进展提供关键证据；**模型评估方法论**迎来革新——贝叶斯主动评估、成本感知决策、视觉信用审计等新范式涌现，旨在更高效、更可靠地衡量AI能力。此外，心智世界建模、从零程序合成、量化效率优化等方向亦有重要突破。

## 重点论文

### 🧠 大语言模型

1. **Mental World Modeling**  
   [链接](http://arxiv.org/abs/2607.27201v1) | Hao Fei et al.  
   **一句话说明**：提出“心智世界模型”，将世界模型从物理预测扩展至信念、意图、社会规范等隐藏心理状态的推理，为具身智能体的人机协作提供基础。

2. **Linguistic Monoculture in LLM-Assisted Language Use**  
   [链接](http://arxiv.org/abs/2607.27134v1) | Suhas Thejaswi et al.  
   **一句话说明**：通过博弈论模型和实验证明，广泛依赖LLM辅助写作会降低语言多样性，形成“语言单一文化”，对社会文化产生深远影响。

3. **On-Policy Distillation for LLM Safety: A Routing Approach to Template-Robust Realignment**  
   [链接](http://arxiv.org/abs/2607.27081v1) | Yongjian Guo et al.  
   **一句话说明**：针对恶意微调注入有害行为的问题，提出基于路径路由的模板鲁棒重新对齐方法，在不牺牲专业技能的前提下恢复安全价值观。

4. **GPTQ-2D: Cubic-Time Two-Sided Adaptive Rounding**  
   [链接](http://arxiv.org/abs/2607.27042v1) | Jiale Chen et al.  
   **一句话说明**：将GPTQ从单向舍入扩展为两侧自适应舍入，实现立方时间复杂度的更优量化，在保持精度同时显著提升推理效率。

### 🤖 智能体与推理

5. **Can AI agents conduct open-ended AI research? Early evidence from two case studies**  
   [链接](http://arxiv.org/abs/2607.27191v1) | Peter Kirgis et al.  
   **一句话说明**：通过两个案例实证评估AI智能体能否执行开放式AI研究（而非仅可验证任务），为“爆炸式AI进步”预测提供稀缺证据。

6. **SpecFirst: Behavioral Specification Elicitation as a First-Class Step in Agent-Based Program Synthesis from Scratch**  
   [链接](http://arxiv.org/abs/2607.27167v1) | Yihao Chen et al.  
   **一句话说明**：提出“规范先行”方法，将行为规范提取作为从零编程的首要步骤，显著提升LLM智能体在ProgramBench等基准上的表现。

7. **Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents**  
   [链接](http://arxiv.org/abs/2607.27083v1) | Yicheng Feng et al.  
   **一句话说明**：针对LLM智能体工具选择问题，引入成本感知的停止策略，平衡信息充分性与开销，提升任务经济性。

8. **MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair**  
   [链接](http://arxiv.org/abs/2607.27080v1) | Xuanze Chen et al.  
   **一句话说明**：构建首个系统追踪智能体记忆投毒全链路（存储→回溯→行动→修复）的基准，填补智能体安全评估空白。

### 🔧 方法与框架

9. **Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning?**  
   [链接](http://arxiv.org/abs/2607.27203v1) | Perry Dong et al.  
   **一句话说明**：质疑强化学习微调中预训练Q函数的必要性，实验表明在某些条件下从零训练Q函数同样高效，挑战主流范式。

10. **Cost-Sensitive Conformal Prediction and Human-in-the-Loop Abstention for Imbalanced High-Stakes Decision Support**  
    [链接](http://arxiv.org/abs/2607.27143v1) | Manpreet Singh et al.  
    **一句话说明**：在高风险不平衡数据场景下，将成本敏感损失融入保形预测，允许模型在不确定时交由人类决策，兼顾覆盖率和不对称错误代价。

11. **InferScale: GPU-Native KV Injection for Personalized LLM Serving**  
    [链接](http://arxiv.org/abs/2607.27090v1) | Peter Li et al.  
    **一句话说明**：提出GPU本地位kv缓存注入系统，实现个性化LLM服务中持久上下文的高效加载，避免CPU-GPU数据传输瓶颈。

12. **Mitigating Compounding Error via Video Representation Regularization**  
    [链接](http://arxiv.org/abs/2607.27036v1) | Taiye Chen et al.  
    **一句话说明**：针对视频扩散世界模型自回归推理中的误差累积，提出视频表示正则化方法，有效提升长视频生成的质量。

13. **BayesAME: Bayesian Active Model Evaluation**  
    [链接](http://arxiv.org/abs/2607.27023v1) | Paula Cordero Encinar et al.  
    **一句话说明**：将贝叶斯主动学习用于生成模型评估，智能选择核心子集估算全基准表现，大幅降低评估成本。

### 📊 应用

14. **APEX-Accounting**  
    [链接](http://arxiv.org/abs/2607.27189v1) | Julien Benchek et al.  
    **一句话说明**：由Mercor与Ramp联合推出的会计基准，包含160项真实会计任务（对账、计提、过账等），测试前沿模型的实际工作能力。

15. **HoF-Bench: Rediscovering Real AI-Discovered CVEs Without Frontier Models**  
    [链接](http://arxiv.org/abs/2607.27030v1) | Petr Simecek et al.  
    **一句话说明**：基于AISLE系统发现的95个真实CVE构建基准，评估LLM分析器能否在不依赖前沿模型的情况下重新发现漏洞，为AI安全测评提供新基准。

---

## 研究趋势信号

今日投稿中观察到四个新兴方向：**① 智能体安全与治理**快速升温——从记忆投毒（MemSecBench）到对齐鲁棒性（On-Policy Distillation），再到社会影响（Linguistic Monoculture），研究者开始系统审视AI智能体的长期风险；**② “开放式”能力评估**从口号走向实验——案例研究（AI research agents）和从零程序合成（SpecFirst）标志着评估范式从封闭任务向开放式探索迁移；**③ 评估效率革命**——贝叶斯主动评估、成本感知停止、视觉信用审计等方法致力于用更少资源获得更可靠结论；**④ 物理-社会融合建模**——心智世界模型将物理预测与社会认知结合，预示下一代具身智能体将需要“读心”能力。

---

## 值得精读

1. **Mental World Modeling** (Hao Fei et al.)  
   **理由**：首次将世界模型从物理域扩展到心理域，为社交机器人、人机协作等领域提供全新理论框架，具有跨学科启发意义。

2. **Can AI agents conduct open-ended AI research? Early evidence from two case studies** (Peter Kirgis et al.)  
   **理由**：直接回应“AI能否自动化AI研究”这一关键问题，通过实证填补开放式能力评估的空白，对AI进展预测和政策制定具有直接影响。

3. **Linguistic Monoculture in LLM-Assisted Language Use** (Suhas Thejaswi et al.)  
   **理由**：从社会动力学角度揭示LLM广泛使用可能导致的负面影响，提醒学界关注技术应用的非预期社会后果，兼具科学性与现实关怀。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*