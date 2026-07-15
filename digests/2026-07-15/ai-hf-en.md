# Hugging Face Trending Models Digest 2026-07-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-14 23:34 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-15

## Today's Highlights

The Hugging Face hub is buzzing with **Qwen 3.5/3.6‑based models**, which dominate the top spots across both language and multimodal pipelines. A clear trend toward **Mixture‑of‑Experts (MoE) architectures** is visible — models like GLM‑5.2, Qwen3.6‑35B‑A3B, and NVIDIA’s Nemotron‑Labs series all adopt sparse active‑parameter designs. **Quantization is ubiquitous**: GGUF, NVFP4, and int4 variants generate millions of downloads, making large models accessible on consumer hardware. Notably, **baidu’s Unlimited‑OCR** and several video‑generation models signal growing interest in production‑ready multimodal tools.

## Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

- **[zai‑org/GLM‑5.2](https://huggingface.co/zai‑org/GLM‑5.2)** — *3,947 likes, 489k downloads* — Zhipu’s latest MoE conversational model, highly optimized for long‑context and multi‑turn dialogue.
- **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive)** — *2,728 likes, 2.44M downloads* — An uncensored vision‑MoE fine‑tune of Qwen3.6, offering aggressive reasoning in a GGUF format.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — *780 likes, 10k downloads* — Tencent’s Hunyuan v3 text‑generation model, a strong open‑weight Chinese‑friendly LLM.
- **[InternScience/Agents‑A1](https://huggingface.co/InternScience/Agents‑A1)** — *537 likes, 30k downloads* — Qwen3.5‑based MoE for agentic tasks, designed for tool use and multi‑step planning.
- **[deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF](https://huggingface.co/deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF)** — *880 likes, 1.53M downloads* — A popular 35B GGUF quant of a high‑performance text‑generation model, endpoint‑compatible.
- **[nvidia/Nemotron‑Labs‑Audex‑30B‑A3B](https://huggingface.co/nvidia/Nemotron‑Labs‑Audex‑30B‑A3B)** — *149 likes, 1.3k downloads* — NVIDIA’s 30B active‑parameter MoE, pushing efficient training and inference.
- **[nvidia/NVIDIA‑Nemotron‑Labs‑3‑Puzzle‑75B‑A9B‑NVFP4](https://huggingface.co/nvidia/NVIDIA‑Nemotron‑Labs‑3‑Puzzle‑75B‑A9B‑NVFP4)** — *117 likes, 41k downloads* — A 75‑B‑total / 9‑B‑active MoE with NVFP4 quantization, optimized for puzzle‑solving.
- **[GnLOLot/MiniCPM5‑1B‑Claude‑Opus‑Fable5‑Thinking‑GGUF](https://huggingface.co/GnLOLot/MiniCPM5‑1B‑Claude‑Opus‑Fable5‑Thinking‑GGUF)** — *232 likes, 89k downloads* — A tiny 1B thinking‑style model, great for on‑device experiments.
- **[prism‑ml/Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism‑ml/Ternary‑Bonsai‑27B‑gguf)** — *114 likes, 23 downloads* — A 2‑bit ternary quantization for extreme compression of a 27B model.
- **[jlnsrk/GLM‑5.2‑colibri‑int4](https://huggingface.co/jlnsrk/GLM‑5.2‑colibri‑int4)** — *102 likes, 2.2k downloads* — Intel‑quantized GLM‑5.2 for CPU inference with expert‑streaming.
- **[unsloth/DeepSeek‑V4‑Flash‑GGUF](https://huggingface.co/unsloth/DeepSeek‑V4‑Flash‑GGUF)** — *172 likes, 55k downloads* — DeepSeek V4 in GGUF, enabling fast local reasoning.

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF)** — *2,154 likes, 2.01M downloads* — A Qwen3.5‑based vision‑language model in GGUF, trendsetting for multimodal local inference.
- **[baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited‑OCR)** — *1,982 likes, 1.72M downloads* — Baidu’s production‑grade OCR model, supporting unlimited‑length text extraction from images.
- **[unsloth/Qwen3.6‑27B‑MTP‑GGUF](https://huggingface.co/unsloth/Qwen3.6‑27B‑MTP‑GGUF)** — *1,091 likes, 2.90M downloads* — Qwen3.6 with multi‑token prediction, quantized for fast image‑text‑to‑text.
- **[bottlecapai/ThinkingCap‑Qwen3.6‑27B](https://huggingface.co/bottlecapai/ThinkingCap‑Qwen3.6‑27B)** — *341 likes, 6.2k downloads* — Vision‑language model with chain‑of‑thought reasoning.
- **[unsloth/Qwen3.6‑27B‑NVFP4](https://huggingface.co/unsloth/Qwen3.6‑27B‑NVFP4)** — *204 likes, 1.60M downloads* — NVFP4 quantization of Qwen3.6 for NVIDIA GPUs.
- **[conradlocke/krea2‑identity‑edit](https://huggingface.co/conradlocke/krea2‑identity‑edit)** — *287 likes, 0 downloads* — LoRA for identity‑preserving image editing using Krea‑2 base.
- **[robbyant/lingbot‑video‑moe‑30b‑a3b](https://huggingface.co/robbyant/lingbot‑video‑moe‑30b‑a3b)** — *104 likes, 700 downloads* — MoE diffusion model for video generation.
- **[robbyant/lingbot‑world‑v2‑14b‑causal‑fast](https://huggingface.co/robbyant/lingbot‑world‑v2‑14b‑causal‑fast)** — *96 likes, 0 downloads* — Image‑to‑video world model with fast causal inference.
- **[Alissonerdx/LTX‑Best‑Face‑ID](https://huggingface.co/Alissonerdx/LTX‑Best‑Face‑ID)** — *140 likes, 0 downloads* — Identity‑preserving LoRA for text‑to‑video (LTX‑Video).
- **[mgwr/M87](https://huggingface.co/mgwr/M87)** — *104 likes, 2.4k downloads* — LoRA for text‑to‑image on Krea‑2 Turbo.
- **[nineninesix/gepard‑1.0](https://huggingface.co/nineninesix/gepard‑1.0)** — *101 likes, 5.9k downloads* — Qwen3.5‑based text‑to‑speech model.
- **[ATH‑MaaS/OvisOCR2](https://huggingface.co/ATH‑MaaS/OvisOCR2)** — *82 likes, 745 downloads* — OCR‑focused vision‑language model.

### 🔧 Specialized Models (code, agentic, audio, OCR)

- **[yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF](https://huggingface.co/yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF)** — *1,188 likes, 469k downloads* — Gemma‑4 fine‑tune for agentic coding and terminal use, quantized to GGUF.
- **[OpenMOSS‑Team/MOSS‑Transcribe‑Diarize](https://huggingface.co/OpenMOSS‑Team/MOSS‑Transcribe‑Diarize)** — *188 likes, 65k downloads* — Audio‑text model combining transcription and speaker diarization.
- **[froggeric/Qwen‑Fixed‑Chat‑Templates](https://huggingface.co/froggeric/Qwen‑Fixed‑Chat‑Templates)** — *900 likes, 0 downloads* — A lightweight resource fixing chat template issues in Qwen models (MLX‑compatible).

### 📦 Fine‑tunes & Quantizations (community adaptations, GGUF/AWQ)

Most models above already incorporate quantization. Notable standalone quant kits:
- **[empero‑ai/Qwythos‑9B‑v2‑GGUF](https://huggingface.co/empero‑ai/Qwythos‑9B‑v2‑GGUF)** — *128 likes, 70k downloads* — v2 quant of the popular multimodal model.
- **[unsloth/Qwen3.6‑27B‑MTP‑GGUF](https://huggingface.co/unsloth/Qwen3.6‑27B‑MTP‑GGUF)** — already featured in multimodal, but its GGUF variants are a key trend.

## Ecosystem Signal

The model landscape is being reshaped by three forces: **MoE architectures**, **Qwen family dominance**, and **aggressive quantization**. Qwen 3.5/3.6 serves as the backbone for nearly half the trending models — from vision‑language to pure text and even speech (Gepard). NVIDIA’s Nemotron‑Labs and Zhipu’s GL

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*