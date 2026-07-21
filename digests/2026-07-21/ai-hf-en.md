# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 23:40 UTC

---

Here is the structured digest for the trending models on Hugging Face as of July 21, 2026.

---

## 🧠 Hugging Face Trending Models Digest – July 21, 2026

### 1. Today’s Highlights

This week’s trending list is dominated by two powerful forces: **extreme quantization** and **large multimodal MoE architectures**. The **prism-ml** team continues to push the boundaries of model compression with their 1-bit and ternary "Bonsai" variants, which are seeing massive download counts even as the base models themselves gain popularity. Simultaneously, the rise of MoE (Mixture-of-Experts) models is unmistakable, led by **zai-org’s GLM-5.2** and the many **Qwen3.6** fine-tunes, signaling that the ecosystem is rapidly moving toward efficient, high-capacity architectures that balance performance with compute cost. We are also seeing a clear trend toward **unified multimodal pipelines**, with several models (Inkling, Qwen3.6 variants, Gemma-4) natively handling image, text, and even audio inputs.

### 2. Trending Models

#### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – Author: zai-org | Likes: 4,220 | Downloads: 531,947
  A powerful MoE text-generation model surging in popularity, likely due to its efficient architecture and strong conversational performance.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – Author: HauhauCS | Likes: 2,934 | Downloads: 2,007,025
  An uncensored, MoE vision-language model built on Qwen3.6, trending for its aggressive fine-tuning and high usability in edge-case scenarios.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** – Author: google | Likes: 3,296 | Downloads: 11,987,240
  Google’s latest open-weight multimodal model, dominating download counts due to its strong instruction-following capabilities and permissive licensing.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** – Author: tencent | Likes: 847 | Downloads: 13,698
  A new text-generation model from Tencent’s Hunyuan lineage, gaining steady traction as a powerful general-purpose LLM.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – Author: bottlecapai | Likes: 481 | Downloads: 10,647
  A Qwen3.6-based model fine-tuned for enhanced reasoning, trending as a strong alternative to larger models for complex tasks.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** – Author: GnLOLot | Likes: 159 | Downloads: 5,494
  A tiny but capable 1B-parameter model for reasoning and chat, gaining interest for its performance-to-size ratio.

#### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** – Author: Wan-AI | Likes: 144 | Downloads: 2,408
  A dedicated image-to-video diffusion model built for generating dynamic dance sequences, marking a niche but creative video generation trend.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – Author: conradlocke | Likes: 456 | Downloads: 0
  A LoRA for identity-preserving image editing on the Krea-2 base model, gaining likes as creators explore controllable image manipulation.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** – Author: Alissonerdx | Likes: 211 | Downloads: 0
  A reference-to-video LoRA focused on identity preservation, signaling growing interest in personalized video generation.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** – Author: OpenMOSS-Team | Likes: 290 | Downloads: 87,533
  An audio-to-text model combining transcription with speaker diarization, filling a specialized need for full audio understanding.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** – Author: OpenMOSS-Team | Likes: 89 | Downloads: 544
  A video-text-to-text model optimized for real-time interaction, hinting at a push toward live multimodal assistants.

#### 🔧 Specialized Models (Code, OCR, Robotics, Embeddings)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – Author: baidu | Likes: 2,424 | Downloads: 2,122,848
  A high-impact image-text-to-text model for OCR, dominating downloads due to its "unlimited" scope and reliable performance in document processing.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – Author: moonshotai | Likes: 1,171 | Downloads: 713,992
  A compressed, code-focused multimodal model, trending as a lightweight powerhouse for programming assistance.

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** – Author: nvidia | Likes: 85 | Downloads: 61,708
  A sentence-transformer embedding model from NVIDIA, gaining traction for retrieval-augmented generation (RAG) pipelines.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** – Author: openbmb | Likes: 114 | Downloads: 0
  A vision-language-action model for robotic manipulation, representing a nascent but promising field of embodied AI.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** – Author: openbmb | Likes: 99 | Downloads: 0
  A companion robotics model for object tracking, highlighting openbmb’s increasing investment in physical-world AI.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – Author: ATH-MaaS | Likes: 217 | Downloads: 14,587
  A Qwen3.5-based OCR model from a specialized provider, performing well in the competitive OCR space.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – Author: Cactus-Compute | Likes: 291 | Downloads: 950
  A JAX-based model for function-calling and tool use, standing out as a unique architecture in a field dominated by transformers.

#### 📦 Fine-tunes & Quantizations (GGUF, MLX, Community Variants)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – Author: prism-ml | Likes: 848 | Downloads: 338,945
  A 2-bit ternary quantized GGUF of the Bonsai-27B, trending for making a large model extremely efficient for local deployment.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – Author: prism-ml | Likes: 540 | Downloads: 1,262,894
  The foundational 1-bit GGUF of Bonsai, achieving phenomenal download numbers as the community embraces ultra-low-bit inference.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – Author: empero-ai | Likes: 2,366 | Downloads: 2,117,323
  A highly popular GGUF quantized model built on Qwen3.5 with a distinctive "mythos" creative writing style.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** – Author: unsloth | Likes: 110 | Downloads: 6,771
  The GGUF quantization of the trending Inkling multimodal model, making it accessible for local CPU inference.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Her

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*