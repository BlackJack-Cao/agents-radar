# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 23:36 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 14, 2026.

---

## Hugging Face Trending Models Digest — 2026-07-14

### 1. Today's Highlights

This week's trending models are dominated by the Qwen3.5/3.6 ecosystem, which has become the primary base for both fine-tuned reasoning models and highly downloaded GGUF quantizations. A strong wave of Mixture-of-Experts (MoE) architectures is also evident, with major entries from Tencent, a research collective, and NVIDIA, signaling a shift toward more parameter-efficient scaling. Notably, enterprise adoption is visible through new releases by Baidu (OCR), Cohere (Arabic ASR), and Google (tabular foundation model), while the community continues to push aggressive uncensored and reasoning-focused fine-tunes.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — by Tencent, 754 likes, 9,157 downloads. A new generation of the Hunyuan architecture (Hy v3), this text-generation MoE model is gaining attention as a major open-weight release from a leading Chinese AI lab.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — by zai-org, 3,897 likes, 464,914 downloads. An MoE conversational model from the GLM lineage, this is the highest-liked model on the list, likely due to strong performance in Chinese and English multi-turn dialogue.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — by HauhauCS, 2,710 likes, 2,512,124 downloads. An uncensored, vision-enabled MoE fine-tune of Qwen3.6, this model is trending for its aggressive behavior tuning and massive download count.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — by deepreinforce-ai , 867 likes, 1,392,300 downloads. A 35B parameter GGUF model, widely downloaded for text-generation, suggesting strong community interest in this new architecture.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — by empero-ai, 2,081 likes, 1,985,221 downloads. A heavily downloaded quantized model, this Qwen3.5-based image-text-to-text model is popular for local deployment of a Claude-style reasoning assistant.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — by Baidu, 1,963 likes, 1,506,937 downloads. A universal OCR model from Baidu, this is trending for its practical, high-accuracy feature extraction across diverse document types.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — by Alissonerdx, 124 likes, 0 downloads. A LoRA for identity-preserving text-to-video, using the LTX-Video pipeline to enable reference-to-video generation with consistent faces.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — by OpenMOSS-Team, 161 likes, 39,509 downloads. An audio-text-to-text model that performs transcription and speaker diarization in a single pass, streamlining voice processing pipelines.
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — by CohereLabs, 102 likes, 11,647 downloads. A specialized ASR model for Arabic, reflecting growing demand for non-English speech recognition.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — by Google, 362 likes, 21,590 downloads. A PyTorch foundation model for tabular data, supporting zero-shot classification and regression, notable for its potential to displace gradient-boosted trees in many workflows.
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — by SupraLabs, 114 likes, 1,573 downloads. A tiny 51M parameter router model for LLM orchestration, trending for its potential in agentic systems and model selection.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — by froggeric, 886 likes, 0 downloads. A utility repository providing corrected chat templates for Qwen3.5, critically important for developers struggling with template compatibility.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — by unsloth, 1,074 likes, 2,901,906 downloads. The most downloaded model this week, this is a Multi-Token Prediction (MTP) GGUF of Qwen3.6, optimized for efficient local inference.
- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — by unsloth, 192 likes, 1,497,456 downloads. An NVFP4 quantized version of Qwen3.6-27B, providing a balance of quality and performance on NVIDIA hardware.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — by yuxinlu1, 1,177 likes, 452,627 downloads. A highly fine-tuned Gemma 4 variant focused on agentic and coding tasks, part of the "fable5" fine-tuning lineage.
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — by InternScience, 524 likes, 29,801 downloads. A Qwen3.5 MoE fine-tune optimized for agentic workflows, trending as a specialized model for tool use and task planning.
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — by jlnsrk, 85 likes, 1,997 downloads. An INT4 quantized CPU-friendly version of GLM-5.2, using expert-streaming for efficient MoE inference on consumer hardware.
- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — by nineninesix, 95 likes, 3,940 downloads. A text-to-speech model based on Qwen3.5, notable for its integration of text-generation and TTS pipelines.

### 3. Ecosystem Signal

The ecosystem is clearly converging on **Qwen3.5/3.6** as the predominant base architecture for both raw models and community fine-tunes, with nearly half of this week's trending models deriving from it. **Mixture-of-Experts** has become the dominant scaling paradigm, appearing in top models from Tencent (Hy3), the GLM family, NVIDIA (Nemotron), and InternScience, indicating the community is embracing MoE for its inference efficiency. The **GGUF quantization ecosystem**, led by unsloth and empero-ai, continues to drive massive download volumes (2M+ for flagship quants), as local deployment remains a key user priority. We are also seeing the emergence of **utility and infrastructure models** (chat templates, router models, tabular foundation models) gaining significant traction, suggesting the ecosystem is maturing beyond pure text generation.

### 4. Worth Exploring

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — With the highest likes on the list (3,897) and a dedicated INT4 variant for CPU inference, this MoE conversational model represents a major open-weight release that warrants benchmarking, especially for multilingual and long-context use cases.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With nearly 1.5M downloads and strong likes, this practical image-text-to-text model from a major enterprise is worth exploring for any pipeline requiring robust, general-purpose optical character recognition.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — A rare tabular foundation model from Google that supports zero-shot classification and regression, this model is highly relevant for data scientists and ML engineers looking to replace traditional tree-based models with a transformer approach.

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*