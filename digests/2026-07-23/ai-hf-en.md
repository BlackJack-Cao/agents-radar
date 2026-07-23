# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 04:44 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-07-23

---

## 1. Today's Highlights

The most striking development this week is the meteoric rise of **zai-org/GLM-5.2** (4,345 weekly likes), a massive MoE model that has captured the community's attention and suggests renewed interest in mixture-of-experts architectures. **Google's Gemma-4-31B-it** (3,333 likes, 12M+ downloads) continues its dominant run as one of the most widely adopted open-weight models. The ecosystem is also seeing an explosion of **Qwen3.6 derivatives**, particularly uncensored and MoE variants, with **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (3,011 likes) and **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** (2,420 likes) ranking among the week's biggest community hits. Meanwhile, specialized models for OCR, robotics, and speech processing are gaining significant traction, signaling maturation beyond pure language tasks.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,345 likes | 545K downloads  
  A large-scale Mixture-of-Experts transformer model (GLM MoE DSA) that has become the week's most-liked model, indicating strong community interest in efficient sparse architectures.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 3,333 likes | 12.1M downloads  
  Google's flagship 31B instruction-tuned multimodal LLM (Gemma 4 series) with massive adoption, representing one of the most successful open-weight releases from a major lab.

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — poolside | 411 likes | 3K downloads  
  A text-generation model from poolside, spawning multiple quantization variants this week (GGUF, NVFP4) that collectively signal growing ecosystem interest.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — upstage | 340 likes | 0 downloads  
  A very large 250B parameter open model from Upstage, notable for its scale and the Solar Open2 family's continued development.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Nanbeige | 245 likes | 0 downloads  
  A compact 3B LLM from Nanbeige, appealing for lightweight deployment scenarios.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** — Motif-Technologies | 162 likes | 125 downloads  
  A text-generation and feature-extraction model from Motif Technologies, offering dual-purpose capabilities.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — thinkingmachines | 1,465 likes | 16.4K downloads  
  A multimodal image-text-to-text model (Inkling MM) with conversational capabilities, trending strongly as vision-language models continue to gain popularity.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — openbmb | 157 likes | 58 downloads  
  A vision-language-action model for robotic manipulation (MiniCPM VLA), representing an emerging robotics-from-multimodal-models trend.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — openbmb | 114 likes | 72 downloads  
  Companion robotics model for object tracking, continuing OpenBMB's push into embodied AI.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** — microsoft | 135 likes | 0 downloads  
  A text-to-image and image-editing diffusion pipeline from Microsoft, part of the stable diffusion ecosystem.

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** — nvidia | 92 likes | 6.6K downloads  
  A diffusion-based model from NVIDIA's Cosmos family, likely focused on video or edge deployment scenarios.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 235 likes | 0 downloads  
  A LoRA for identity-preserving text-to-video generation (LTX-Video), reflecting growing interest in personalized video generation.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 500 likes | 0 downloads  
  A LoRA for identity-preserving image editing built on Krea-2-Raw, demonstrating the LoRA fine-tuning ecosystem's vibrancy.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** — microsoft | 135 likes | 0 downloads  
  Microsoft's text-to-image diffusion pipeline with image-editing capabilities.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 514 likes | 12K downloads  
  A Qwen3.6-based multimodal model with reasoning capabilities, part of the larger Qwen3.x fine-tuning wave.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 310 likes | 92.3K downloads  
  An audio-text-to-text model combining transcription with speaker diarization, addressing the growing demand for speech processing.

---

### 🔧 Specialized Models (code, math, medical, embeddings, robotics)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,768 likes | 2.2M downloads  
  The week's most downloaded model (2.2M+), an unlimited OCR system from Baidu, indicating massive demand for reliable document understanding.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | 250 likes | 17.2K downloads  
  A Qwen3.5-based OCR model, riding the OCR trend alongside Baidu's Unlimited-OCR.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 1,227 likes | 722K downloads  
  A compressed code-focused model from Moonshot AI (Kimi K2.5 family), demonstrating the appeal of efficient, task-specific code models.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 914 likes | 590K downloads  
  NVIDIA's streaming ASR model (0.6B parameters), indicating strong interest in real-time speech recognition.

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** — nvidia | 102 likes | 93K downloads  
  A sentence-embedding model from NVIDIA's Nemotron family, addressing the embedding and RAG use case.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 3,011 likes | 2M downloads  
  An uncensored MoE fine-tune of Qwen3.6 (35B-A3B), among the most popular community models this week.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,420 likes | 2.1M downloads  
  A quantized Qwen3.5-based reasoning model (GGUF), one of the most downloaded community models.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 952 likes | 432K downloads  
  A ternary (2-bit) quantized 27B model in GGUF format, pushing the boundaries of extreme quantization.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | 601 likes | 1.4M downloads  
  A 1-bit quantized 27B GGUF model from prism-ml, achieving remarkable compression ratios.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 334 likes | 62.8K downloads  
  An uncensored GGUF fine-tune of Qwen3.6-27B, part of the uncensored model trend.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — prism-ml | 165 likes | 25.3K downloads  
  MLX-native 1-bit quantization of the Bonsai-27B model for Apple Silicon.

- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** — unsloth | 113 likes | 0 downloads  
  Unsloth's GGUF quantization of the Laguna-S-2.1 model, demonstrating the rapid quantization pipeline.

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*