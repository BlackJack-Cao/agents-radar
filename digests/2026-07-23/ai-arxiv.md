# ArXiv AI 研究日报 2026-07-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-22 23:41 UTC

---

# ArXiv AI 研究日报 | 2026-07-23

---

## 📌 今日速览

今日投稿呈现三个强信号：**长上下文推理**中模型出现“重复复制”病态行为，一篇研究通过证据感知强化学习对此进行了针对性修正；**智能体安全**成为焦点，不止一篇论文关注大规模部署中隐蔽的攻击面与可审计性；**RLVR（可验证奖励强化学习）** 从数学推理扩散到机器翻译与作文评分，并出现利用特权信息突破难题训练的新范式。此外，单GPU上运行的无限互动世界模型和机械可解释性的统一工具包也值得关注。

---

## 📄 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Copy Less, Ground More: Overcoming Repetitive Copying in Long-Context Reasoning via Evidence-Aware Reinforcement Learning**  
   [http://arxiv.org/abs/2607.19345v1](http://arxiv.org/abs/2607.19345v1)  
   *Lizhe Fang, Weizhou Shen, Tianyi Tang et al.*  
   → 首次诊断并解决了长上下文推理中模型无意义重复复制的问题，提出证据感知RL训练策略。

2. **Two-Level Meta-Rubrics for Evaluating Open-Ended Generation: GAMUT, a Benchmark for Factual Completeness**  
   [http://arxiv.org/abs/2607.19322v1](http://arxiv.org/abs/2607.19322v1)  
   *Xilun Chen, Zhaleh Feizollahi, Ross Goodwin et al.*  
   → 提出GAMUT基准，评估长文本生成的**事实完整性**（而非仅检测错误），弥补了现有评估体系的盲区。

3. **Prompt Design at Scale: How Format, Instruction Count, and Context Length Shape Instruction Adherence and Hallucination**  
   [http://arxiv.org/abs/2607.19257v1](http://arxiv.org/abs/2607.19257v1)  
   *Netanel Eliav*  
   → 大规模可控实验揭示提示格式、指令数量与上下文长度如何影响模型执行指令与幻觉程度，是提示工程的重要经验总结。

4. **Inference-Time Steering for Cross-Lingual Factual Consistency in LLMs**  
   [http://arxiv.org/abs/2607.19243v1](http://arxiv.org/abs/2607.19243v1)  
   *Alexander Manev*  
   → 针对LLM跨语言事实不一致问题，提出推理时引导方法，无需微调即可提升低资源语言回答的稳定性。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

5. **CodeRescue: Budget-Calibrated Recovery Routing for Coding Agents**  
   [http://arxiv.org/abs/2607.19338v1](http://arxiv.org/abs/2607.19338v1)  
   *Qijia He, Jiayi Cheng, Chenqian Le et al.*  
   → 面向编码智能体的预算校准恢复路由，根据失败反馈智能切换策略，在保证效果的同时降低调用成本。

6. **Agents in the Wild: Where Research Meets Deployment**  
   [http://arxiv.org/abs/2607.19336v1](http://arxiv.org/abs/2607.19336v1)  
   *Grace Hui Yang, Pranav N. Venkit, Hooman Sedghamiz et al.*  
   → 综述文，系统梳理LLM智能体从研究原型到生产部署的关键挑战，包括鲁棒性、安全性和协调机制。

7. **ResearchArena: Evaluating Sabotage and Monitoring in Automated AI R&D**  
   [http://arxiv.org/abs/2607.19321v1](http://arxiv.org/abs/2607.19321v1)  
   *Lena Libon, Ben Rank, Jehyeok Yeon et al.*  
   → 针对自动化AI研发中的破坏行为与监控问题，提出评估框架，将智能体视为潜在对手进行红队测试。

8. **PathAgentBench: Benchmarking Evidence-Seeking Vision-Language Models on Whole-Slide Pathology Image**  
   [http://arxiv.org/abs/2607.19261v1](http://arxiv.org/abs/2607.19261v1)  
   *Dankai Liao, Tianyi Zhang, Yufeng Wu et al.*  
   → 对病理全切片图像上的视觉-语言智能体进行基准测试，评估其寻找证据与多尺度推理的能力，推动医学AI应用。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

9. **Provable diffusion-based posterior sampling for linear inverse problems via DDIM**  
   [http://arxiv.org/abs/2607.19333v1](http://arxiv.org/abs/2607.19333v1)  
   *Yuchen Jiao, Na Li, Changxiao Cai et al.*  
   → 为线性逆问题提出基于DDIM的可证明后验采样算法，兼顾理论保证与计算效率。

10. **CircuitKIT: Circuit Discovery, Evaluation, and Application Toolkit for Mechanistic Interpretability**  
    [http://arxiv.org/abs/2607.19317v1](http://arxiv.org/abs/2607.19317v1)  
    *Pratinav Seth, Hem Gosalia, Aditya Kasliwal et al.*  
    → 机械可解释性的一站式工具包：将电路发现、评估与干预（剪枝、编辑、微调）整合为统一框架。

11. **Off-Context GRPO: Learning to Reason on Hard Problems using Privileged Information**  
    [http://arxiv.org/abs/2607.19313v1](http://arxiv.org/abs/2607.19313v1)  
    *Priyank Agrawal, Ankur Samanta, Shervin Ghasemlou et al.*  
    → 当RLVR因模型完全无法解出难题而零梯度时，利用“特权信息”（如答案）提供学习信号，拓展RLVR适用边界。

12. **AdaFlash: Adaptive Speculative Decoding via On-Policy Distilled Diffusion Drafters**  
    [http://arxiv.org/abs/2607.19223v1](http://arxiv.org/abs/2607.19223v1)  
    *Yu-Yang Qian, Hao-Cong Wu, Chen Chen et al.*  
    → 利用扩散模型作为草稿模型进行自适应推测解码，显著提升大模型推理速度。

13. **Conservative Query and Adaptive Regularization for Offline RL Under Uncertainty Estimation**  
    [http://arxiv.org/abs/2607.19199v1](http://arxiv.org/abs/2607.19199v1)  
    *Li-Rong Zhou, Qin-Wen Luo, Sheng-Jun Huang*  
    → 离线强化学习中通过保守查询与自适应正则化，有效利用专家反馈进行策略改进，无需与环境交互。

---

### 📊 应用（垂直领域、多模态、代码生成）

14. **Appearance Pointers – Multimodal Region Control of Diffusion Transformers**  
    [http://arxiv.org/abs/2607.19344v1](http://arxiv.org/abs/2607.19344v1)  
    *Rahul Sajnani, Yulia Gryaditskaya, Radomír Měch et al.*  
    → 在Diffusion Transformer中实现多模态区域控制，允许对图像特定区域的材质、对象身份进行精细调控，面向专业创意工具。

15. **ABot-World-0: Infinite Interactive World Rollout on a Single Desktop GPU**  
    [http://arxiv.org/abs/2607.19191v1](http://arxiv.org/abs/2607.19191v1)  
    *Fan Jiang, Zhaoxu Sun, Mengchao Wang et al.*  
    → 基于动作条件视频世界模型，单桌面GPU即可实时运行长期闭环交互，支持AAA游戏引擎与互联网视频多源训练。

16. **The Price of Reasoning: Cost-Quality Tradeoffs in Reinforcement Learning for Neural Machine Translation**  
    [http://arxiv.org/abs/2607.19226v1](http://arxiv.org/abs/2607.19226v1)  
    *Michael Jungo, Aixiu An*  
    → 系统研究RLVR在机器翻译中的成本-质量权衡，发现扩展推理时间虽能提升翻译质量但性价比递减。

17. **Reasoning Before Translation: Enhancing Legal Machine Translation with Structured Reasoning**  
    [http://arxiv.org/abs/2607.19181v1](http://arxiv.org/abs/2607.19181v1)  
    *Aixiu An, Michael Jungo, Eloi Eynard et al.*  
    → 将结构化推理融入法律机器翻译，先推理后翻译，显著提升专业领域术语与概念的翻译准确性。

---

## 🔍 研究趋势信号

- **RLVR泛化与困难学习**：Off-Context GRPO利用特权信息解决了RLVR在零正确解难题上的学习盲区；类似的思路被用于机器翻译（The Price of Reasoning）和作文评分（Beyond Score Prediction），RLVR正从数学推理向更多NLP任务渗透。
- **AI安全从“可见”走向“隐蔽”**：ResearchArena评估智能体在AI研发中的破坏行为，They'll Verify...揭示CI/CD管道中的“laundered code”攻击面，The safety failures we are not instrumenting呼吁关注非戏剧性但高隐蔽性的安全漏洞。安全研究从红队测试向“控制”范式转型。
- **机械可解释性工具化**：CircuitKIT提供统一的电路发现、评估和干预工具，降低研究门槛；结合Dense Associative Memory的自由能景观理论分析，可解释性正在快速从案例研究走向工程应用。
- **单GPU实时世界模型**：ABot-World-0在消费级显卡上实现无限互动世界，表明视频生成模型作为世界模拟器的实用化进程加速，对机器人具身智能和游戏AI意义重大。

---

## ⭐ 值得精读

1. **Copy Less, Ground More (arXiv:2607.19345)**：长上下文推理是当前大模型核心挑战之一，本文不仅诊断了模型在长序列中“重复复制”的病理行为，还提出了证据感知强化学习来根治。该问题在RAG、长文档QA、法律分析等场景至关重要，值得仔细研读其方法设计与实验对比。

2. **ResearchArena (arXiv:2607.19321)**：自动化AI研发是前沿方向，但其安全隐患尚缺乏系统评估。本文构建了首个衡量智能体在研发过程中实施“破坏”行为的基准，结合监控与AI控制策略，对未来的自主科研安全有直接指导意义，思路新颖且实操性强。

3. **ABot-World-0 (arXiv:2607.19191)**：在单张桌面GPU上实现无限交互式世界模拟，数据来源涵盖AAA游戏、仿真与互联网视频，技术路线简洁且可复制。如果其保真度与交互延迟达到实用水平，将极大降低具身智能研究对昂贵仿真环境的依赖，值得关注其技术细节与局限性。

---
*本日报由 [agents-radar](https://github.com/BlackJack-Cao/agents-radar) 自动生成。*