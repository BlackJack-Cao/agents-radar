# Medical AI Industry Digest 2026-07-23

> Sources: GitHub medical agents (20) + Hugging Face medical models (24) + medical AI industry news (1); paper feeds excluded | Generated: 2026-07-23 04:44 UTC

---

# Medical AI Industry Digest — 2026-07-23

## Bottom Line
No credible, clinically validated medical-specific agent or model capable of production deployment emerged this week. Signals remain concentrated in early-stage prototypes, educational projects, and general-component releases that mention healthcare without delivering domain-specific evidence. Vendors and researchers continue prioritizing RAG-based multi-agent architectures, but maturity is low across all observations.

## Medical Agents
1. **aws-samples/sample-healthcare-agents** ([link](https://github.com/aws-samples/sample-healthcare-agents)) — AWS-provided reference implementation for healthcare agent patterns. Maturity: early-stage sample code (2 stars, MIT-0 license). Limitation: no clinical scenario documentation; generic agent scaffolding rather than validated healthcare workflow.

2. **Manvitha-kv352/AI-medical-agent** ([link](https://github.com/Manvitha-kv352/AI-medical-agent)) — LangGraph-based research agent with ChromaDB, PubMed APIs, and Ollama for evidence summaries. Maturity: recent prototype (0 stars). Limitation: depends on public PubMed API rate limits and local LLM; no validation on clinical recall or citation accuracy.

3. **She1kh144/medical-agent** ([link](https://github.com/She1kh144/medical-agent)) — LLM agent for Russian medical questions using function calling and RAG, built on medical-rag infrastructure. Maturity: early development (0 stars). Limitation: Russian-language only; no benchmark scores or clinical expert evaluation reported.

4. **basitali08/med-agent** ([link](https://github.com/basitali08/med-agent)) — Four-agent pipeline with supervisor validation, Flutter + Django + Ollama stack. Maturity: very early prototype (0 stars). Limitation: no test results, dataset, or deployment scenario; stack complexity without demonstrated reliability.

5. **Tasmiabashir/sehatbot** ([link](https://github.com/Tasmiabashir/sehatbot)) — Bilingual (Urdu/English) medical assistant with LangGraph tool routing and prescription OCR for Pakistan. Maturity: initial commit (0 stars). Limitation: no evaluation on real patient queries or clinical accuracy; OCR reliability for Pakistan-specific prescription formats untested.

## Medical Models
1. **llava-medical-3B-medsiglip-stage2** ([link](https://huggingface.co/MohamedAhmedAE/llava-medical-3B-medsiglip-stage2)) — Multimodal medical vision-language model using MedSigLIP. Task: image-text-to-text. Evidence: 913 downloads, no benchmark results. License: unknown. Caveat: requires inference infrastructure for 3B parameters; no clinical sign-off for diagnostic use.

2. **EpistemeAI/Reasoning-Medical0.1-E4B-sft** ([link](https://huggingface.co/EpistemeAI/Reasoning-Medical0.1-E4B-sft)) — Gemma4-based medical reasoning model with SFT. Task: image-text-to-text. Evidence: 3 likes, 364 downloads; no validation report. License: unknown. Caveat: unsloth quantization may affect reasoning fidelity; no medical task benchmarks published.

3. **genzeonplatform/healthcare-brain-vitals-ner** ([link](https://huggingface.co/genzeonplatform/healthcare-brain-vitals-ner)) — NER model for extracting vital signs from clinical text. Task: token-classification. Evidence: 22 likes, 8 downloads. License: unknown. Caveat: labeled for PHI/PII; accuracy on diverse note formats unverified; production deployment requires compliance review.

4. **genzeonplatform/healthcare-brain-medication-ner** ([link](https://huggingface.co/genzeonplatform/healthcare-brain-medication-ner)) — NER for medication entities from clinical notes. Task: token-classification. Evidence: 19 likes, 20 downloads. License: unknown. Caveat: part of a suite, but no standalone evaluation against drug ontology standards (RxNorm, ATC).

5. **Kerassy/Qwen3.5-2b-Medical-Reasoning** ([link](https://huggingface.co/Kerassy/Qwen3.5-2b-Medical-Reasoning)) — Qwen3.5 fine-tune for medical reasoning with GGUF support. Task: N/A (vision-language). Evidence: 0 downloads; GGUF quantization. License: unknown. Caveat: 2B parameter model may lack depth for complex clinical reasoning; no benchmark scores.

## Industry Updates
1. **Henry Schein One goes AI-native** ([link](https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/)) — Dental practice software provider (100,000+ practices) adopts AWS AI infrastructure; signals industry movement toward cloud-native AI in specialty healthcare, though no agent or model specifics disclosed.

## Assessment
- **Clinical Validation**: Zero entities in this digest provide clinical validation data, prospective studies, or expert-reviewed accuracy metrics. All agents and models are pre-clinical prototypes or infrastructure experiments.
- **Privacy & Compliance**: Only the genzeonplatform NER suite explicitly tags PHI/PII sensitivity. Most HuggingFace models lack license or compliance documentation, making HIPAA/GDPR assessment impossible without vendor engagement.
- **Follow-Up Worthiness**: The Henry Schein One announcement suggests dental AI infrastructure demand is growing. The genzeonplatform healthcare-brain NER family (six models, 100+ cumulative likes) warrants monitoring for real-world clinical NLP deployment. Multi-agent RAG pipelines (She1kh144, basitali08) represent architectural trends but remain too immature for production consideration.

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*