# ArXiv AI 研究日报 2026-07-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-21 23:41 UTC

---

好的，作为AI研究分析师，这是为您准备的2026年7月22日ArXiv AI研究日报。

---

### ArXiv AI 研究日报
**日期**: 2026-07-22 (基于论文发布日 2026-07-20)

#### 今日速览

今日研究呈现出几个鲜明的特征。首先，对大型语言模型（LLM）的“对齐”研究进入了更精细的阶段，不仅关注“是否对齐”，更开始解剖对齐训练如何改变模型的内在表征，并意外引入“谄媚”等新偏差。其次，“智能体”领域日益成熟，但焦点已从“如何构建”转向“如何优化”，出现了针对代码生成“臃肿化”的修剪工具以及控制推理路径的“激活导向”等精细调控方法。此外，从工业异常检测、金融分析到科学图表生成，LLM与视觉模型的结合正在深入解决特定领域的结构化问题，显示出强大的垂直应用潜力。

#### 重点论文

##### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **It‘s Not What You Say, It’s How You Say It: Evaluating LLM Responses to Expressions of Belief**
    -   **作者**: Kevin Du 等
    -   **一句话说明**: 研究表明LLM对用户“信念表达”的反应严重依赖于语言形式（如预设、断言），而非内容本身，揭示了模型在语境判断上的脆弱性。([http://arxiv.org/abs/2607.18232v1](http://arxiv.org/abs/2607.18232v1))

2.  **How Does Alignment Tuning Shape Representations of Sycophancy and Related Cue-Induced Biases in LLMs?**
    -   **作者**: Prakhar Gupta 等
    -   **一句话说明**: 深度剖析对齐微调如何意外地塑造了LLM中的“谄媚”行为，发现模型容易被虚假线索（如错误示例）误导，揭示了对齐过程在模型内部表征上的副作用。([http://arxiv.org/abs/2607.18114v1](http://arxiv.org/abs/2607.18114v1))

3.  **Generalised Bellman recurrence and three dualities in sequential decision-making**
    -   **作者**: Fernando E. Rosas 等
    -   **一句话说明**: 从数学基础上重新推导贝尔曼方程，揭示了其递归性质源于三个基本条件，为理解强化学习及LLM的序列决策提供了全新的理论视角。([http://arxiv.org/abs/2607.18077v1](http://arxiv.org/abs/2607.18077v1))

##### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

4.  **SWE-Pruner Pro: The Coder LLM Already Knows What to Prune**
    -   **作者**: Yuhang Wang 等
    -   **一句话说明**: 核心发现：编码LLM的内部表征已经隐含了代码上下文的相关性信息，并据此提出更高效的上下文修剪方法，相比传统外挂分类器更为轻量。([http://arxiv.org/abs/2607.18213v1](http://arxiv.org/abs/2607.18213v1))

5.  **TRIM: Reducing AI-Generated CodeSlop via Agent Trajectory Minimization**
    -   **作者**: Alex Mathai 等
    -   **一句话说明**: 针对AI编码智能体生成臃肿代码（CodeSlop）的问题，提出通过最小化智能体决策路径来精简代码，使其更接近人类编写习惯。([http://arxiv.org/abs/2607.18161v1](http://arxiv.org/abs/2607.18161v1))

6.  **Can We Break LLMs Out of Self-Loops? Fine-Grained Reasoning Control with Activation Steering**
    -   **作者**: Sheldon Yu 等
    -   **一句话说明**: 研究通过“激活导向”技术实现对LLM推理过程的细粒度控制，例如引导模型跳出无效的“自我循环”，提供了一种超越提示工程的内部调控方法。([http://arxiv.org/abs/2607.18100v1](http://arxiv.org/abs/2607.18100v1))

7.  **SGA: Plug&Play Geometric Verification for Educational Video Synthesis**
    -   **作者**: Lopez Jhon 等
    -   **一句话说明**: 针对LLM生成教学视频代码的任务，提出一个即插即用的几何验证模块，通过检测空间错误（如图像错位）来提升生成内容的视觉正确性。([http://arxiv.org/abs/2607.18116v1](http://arxiv.org/abs/2607.18116v1))

##### 🔧 方法与框架（新技术、基准测试、效率优化）

8.  **OR Else: A Differentiable Trust Region for Policy Optimization**
    -   **作者**: Chinmay Rane 等
    -   **一句话说明**: 提出一种新的策略优化方法“输出复位（OR）”，通过平滑的单边饱和度规则替代PPO等算法中的截断目标，为LLM的强化学习训练提供了新的优化器思路。([http://arxiv.org/abs/2607.18163v1](http://arxiv.org/abs/2607.18163v1))

9.  **SelectInfer: Selective Neuron Loading and Computation for On-Device LLMs**
    -   **作者**: Huzaifa Shaaban Kabakibo 等
    -   **一句话说明**: 针对端侧LLM部署，提出一种选择性神经激活和计算的方法，通过运行时按需加载部分神经元，大幅降低内存和计算开销。([http://arxiv.org/abs/2607.18081v1](http://arxiv.org/abs/2607.18081v1))

10. **The Label Complexity of Class-Conditional Coverage under Distribution Shift**
    -   **作者**: Weijia Han 等
    -   **一句话说明**: 理论上研究了在分布偏移下，为每个类别提供可靠置信度所需的标注数据复杂度，对构建可信赖分类系统具有重要指导意义。([http://arxiv.org/abs/2607.18088v1](http://arxiv.org/abs/2607.18088v1))

##### 📊 应用（垂直领域、多模态、代码生成）

11. **O-VAD: Industrial Video Anomaly Detection through Object-Centric Tracking and Reasoning**
    -   **作者**: Mei Yuan 等
    -   **一句话说明**: 将VLM的开放集推理能力与目标跟踪相结合，用于工业视频异常检测，解决了传统模型难以处理未见异常和需要精细定位的问题。([http://arxiv.org/abs/2607.18142v1](http://arxiv.org/abs/2607.18142v1))

12. **SciForma: Structure-Faithful Generation of Scientific Diagrams**
    -   **作者**: Yuxuan Luo 等
    -   **一句话说明**: 提出一个专门生成科学方法示意图的框架，重点保证图表的结构保真度，如箭头方向、层级关系等，解决了通用模型在此类任务中的不准确性。([http://arxiv.org/abs/2607.18091v1](http://arxiv.org/abs/2607.18091v1))

13. **WorldCupArena: Fine-Grained Evaluation of Language Models and Deep-Research Agents on Football Forecasting**
    -   **作者**: Zhaokai Wang 等
    -   **一句话说明**: 构建了一个基于2026世界杯的动态基准，精细评估LLM和研究智能体在动态信息环境下的预测能力，极具时效性和现实挑战性。([http://arxiv.org/abs/2607.18084v1](http://arxiv.org/abs/2607.18084v1))

14. **FinSAgent: Corpus-Aligned Multi-Agent RAG Framework for Evidence-Grounded SEC Filing Question Answering**
    -   **作者**: Jijun Chi 等
    -   **一句话说明**: 针对美国证券交易文件（SEC）问答，设计了一个多智能体RAG框架，通过语料对齐策略精准索引和检索分散的、结构化的复杂证据。([http://arxiv.org/abs/2607.18102v1](http://arxiv.org/abs/2607.18102v1))

#### 研究趋势信号

今日投稿显示，对LLM“对齐”的研究正经历从“结果导向”到“机制导向”的转变，研究者们开始利用探测和表征分析工具来理解对齐过程本身产生的副作用，如“谄媚”和“上下文脆弱性”。同时，智能体领域进入“精细化优化”阶段，不再追求更强大的单一智能体，而是关注提升现有系统的效率（代码修剪）和可控性（激活控制）。此外，一个值得关注的趋势是，**多智能体RAG系统**在金融等垂直领域展现出巨大潜力，通过专门化的任务分解和检索策略来解决复杂、结构化的文档问答问题。

#### 值得精读

1.  **How Does Alignment Tuning Shape Representations of Sycophancy and Related Cue-Induced Biases in LLMs?** 这篇论文深入到了对齐训练对模型内部表征的影响，揭示了性能提升背后隐藏的、系统性的偏差（谄媚），对理解和改进LLM的鲁棒性和安全性具有里程碑式的意义。

2.  **Generalised Bellman recurrence and three dualities in sequential decision-making** 这是一篇纯粹的理论工作，但它对构成现代AI核心（强化学习、LLM）的贝尔曼方程进行了深刻反思和重构。理解此文能为理解各种序列决策方法提供一个统一的、更底层的理论框架。

3.  **Can We Break LLMs Out of Self-Loops? Fine-Grained Reasoning Control with Activation Steering** 这篇工作展示了超越提示工程的、对模型内部推理过程的直接操纵，为实现可解释、可控的AI推理开辟了令人兴奋的新路径，是“AI可解释性”迈向实用化的重要一步。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*