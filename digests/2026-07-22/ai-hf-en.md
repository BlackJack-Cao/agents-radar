# Hugging Face Trending Models Digest 2026-07-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 23:41 UTC

---

# Hugging Face Trending Models Digest – 2026-07-22

## Today's Highlights

This week's trending models underscore a clear shift toward **multimodal vision-language systems** and **extreme model compression**. Google’s **Gemma-4-31B-it** leads downloads by a wide margin, while a wave of community fine-tunes on **Qwen3.6** (both vision and text) dominates the top slots. The **prism-ml** lab pushes the boundaries of quantization with 1‑bit and ternary (2‑bit) variants of Bonsai, showing growing appetite for ultra‑efficient inference. On the specialized side, **Baidu’s Unlimited‑OCR** and **OpenMOSS’s transcription/diarization** model highlight robust real‑world applications. Robotics models from **openbmb (MiniCPM)** also make the list, signalling early traction in embodied AI.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** by zai-org – 4,275 likes, 545k downloads  
  A large MoE conversational model gaining traction for its strong general reasoning and open‑weight availability.

- **[Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** by poolside – 166 likes, 3k downloads  
  A text‑generation model from poolside, likely optimized for code or enterprise use cases.

- **[Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** by Motif-Technologies – 117 likes, 125 downloads  
  A new architecture exploring feature extraction alongside text generation; still in beta with limited adoption.

- **[MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** by GnLOLot – 166 likes, 6k downloads  
  A tiny 1B‑parameter thinking model fine‑tuned from MiniCPM, popular for on‑device reasoning.

- **[Kimi-K3](https://huggingface.co/reteetzad/Kimi-K3)** by reteetzad – 142 likes, 0 downloads (region‑tagged `us`)  
  Identity unclear – appears to be a Kimi derivative; likely an LLM, but details are sparse.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Inkling](https://huggingface.co/thinkingmachines/Inkling)** by thinkingmachines – 1,358 likes, 16k downloads  
  A new conversational vision‑language model with MoE, sparking interest as a flexible multimodal backbone.

- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** by baidu – 2,602 likes, 2.2M downloads  
  Baidu’s feature‑extraction OCR model that handles unlimited‑length text in images; extremely practical and widely used.

- **[krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** by conradlocke – 474 likes, 0 downloads  
  A LoRA for Krea‑2 Raw enabling identity‑preserving image editing in ComfyUI.

- **[OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** by ATH-MaaS – 235 likes, 17k downloads  
  An OCR model built on Qwen3.5, competing with Baidu’s offering for multilingual document parsing.

- **[ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** by bottlecapai – 491 likes, 12k downloads  
  A vision‑language fine‑tune of Qwen3.6 that adds explicit “thinking” capability to multimodal inputs.

- **[Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** by google – 3,313 likes, 12.1M downloads  
  Google’s latest open‑weight multimodal powerhouse, instruction‑tuned for vision and conversation.

- **[LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** by Alissonerdx – 221 likes, 0 downloads  
  A LoRA for LTX‑Video that preserves facial identity during text‑to‑video generation.

- **[Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** by Wan-AI – 151 likes, 2.5k downloads  
  An image‑to‑video diffusion model focused on coherent motion generation.

### 🔧 Specialized Models (code, math, robotics, embeddings, audio)

- **[MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** by openbmb – 147 likes, 58 downloads  
  A vision‑language‑action (VLA) model for robot manipulation tasks; early but promising.

- **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** by openbmb – 107 likes, 72 downloads  
  Companion VLA model for object tracking, indicating openbmb’s push into embodied AI.

- **[MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** by OpenMOSS-Team – 299 likes, 92k downloads  
  An audio‑to‑text model that simultaneously transcribes and diarizes speakers; practical for meeting analysis.

- **[Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** by moonshotai – 1,199 likes, 722k downloads  
  A compressed‑tensor model from Moonshot AI specialized in code generation, with multimodal input support.

- **[Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** by nvidia – 96 likes, 93k downloads  
  A sentence‑transformer embedding model for text retrieval and similarity.

- **[needle](https://huggingface.co/Cactus-Compute/needle)** by Cactus-Compute – 298 likes, 1k downloads  
  A JAX‑based model for function calling and tool use, appealing to agent‑building communities.

### 📦 Fine-tunes & Quantizations (GGUF, MLX, AWQ, community adaptations)

- **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** by prism-ml – 897 likes, 432k downloads  
  A 27B model quantized to 2‑bit ternary weights, achieving extreme compression for local deployment.

- **[Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** by prism-ml – 570 likes, 1.4M downloads  
  The 1‑bit sibling of Ternary‑Bonsai, trading more quality for even smaller footprint.

- **[DavidAU/Qwen3

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*