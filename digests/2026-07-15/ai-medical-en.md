# Medical AI Industry Digest 2026-07-15

> Sources: GitHub medical agents (20) + Hugging Face medical models (24) + medical AI industry news (1); paper feeds excluded | Generated: 2026-07-14 23:34 UTC

---

# Medical AI Industry Digest — 2026-07-15

## Bottom Line
No credible new medical-specific model or agent with clinical validation or regulatory clearance surfaced today. The field remains in early prototyping, with most GitHub repositories at 0–14 stars and HuggingFace models showing minimal downloads. The strongest signal is the **OpenMed** organization's continued expansion of on-device PII-detection and pathology NER models for Android, suggesting a real interest in privacy-preserving edge deployment.

---

## Medical Agents

1. **openmed-labs/openmed-agent** — https://github.com/openmed-labs/openmed-agent  
   *Purpose:* Sandboxed terminal-based medical assistant for clinical workflows, integrating Claude/GPT models.  
   *Maturity:* 26 stars, active development (latest push today). Apache-2.0 licensed.  
   *Limitation:* Terminal-only interface limits clinical workflow integration; no evidence of HIPAA compliance audit.

2. **ouhuzzh/xinyu-medical-agent** — https://github.com/ouhuzzh/xinyu-medical-agent  
   *Purpose:* LangGraph-based Chinese medical consultation and appointment agent with multi-turn memory, department recommendation, and hybrid retrieval.  
   *Maturity:* 14 stars, MIT licensed, active.  
   *Limitation:* Chinese-language only; no mention of clinical testing or real hospital deployment.

3. **chencyan21/MedGraphAI** — https://github.com/chencyan21/MedGraphAI  
   *Purpose:* Multi-agent medical assistant supporting Q&A, RAG, web retrieval, and medical image analysis with human-in-the-loop review.  
   *Maturity:* 8 stars, Apache-2.0, active.  
   *Limitation:* Image analysis capability claimed but no benchmark results or validation data available.

4. **zhudong180-ux/bio-medical-agent** — https://github.com/zhudong180-ux/bio-medical-agent  
   *Purpose:* Clinical agent demo using Graph RAG, NL2SQL, ReAct, MCP, LangGraph, and PubMed real-time API with evidence grading.  
   *Maturity:* 0 stars, MIT licensed, very fresh (created today).  
   *Limitation:* Zero-star repo; demo-level only, no evaluation or real-world testing.

5. **erangross27/intellicare-platform** — https://github.com/erangross27/intellicare-platform  
   *Purpose:* Patient management system with a Claude Opus 4.8 clinical agent for records, scheduling, documents, billing, and messaging.  
   *Maturity:* 0 stars, new (4 days old), mentions HIPAA and MongoDB.  
   *Limitation:* No evidence of actual HIPAA compliance; zero community traction.

---

## Medical Models

1. **tcclaviger/Medical-GPT-OSS-Swallow-120B-MXFP4** — https://huggingface.co/tcclaviger/Medical-GPT-OSS-Swallow-120B-MXFP4  
   *Task:* Text generation (Japanese medical LLM).  
   *Evidence:* 0 likes, 0 downloads.  
   *License signal:* Unknown license (safetensors, transformers).  
   *Deployment caveat:* 120B parameters requires substantial infrastructure; MXP4 quantization reduces size but no benchmarks provided.

2. **OpenMed/OpenMed-PII-Vietnamese-ClinicalBGE-Large-335M-v1-onnx-android** — https://huggingface.co/OpenMed/OpenMed-PII-Vietnamese-ClinicalBGE-Large-335M-v1-onnx-android  
   *Task:* Token classification (PII detection in clinical text).  
   *Evidence:* 6 downloads.  
   *License signal:* OpenMed ecosystem, ONNX export for mobile.  
   *Deployment caveat:* Vietnamese language only; ONNX Android deployment possible but accuracy on real clinical data unverified.

3. **OpenMed/OpenMed-NER-PathologyDetect-SuperClinical-434M-v1-onnx-android** — https://huggingface.co/OpenMed/OpenMed-NER-PathologyDetect-SuperClinical-434M-v1-onnx-android  
   *Task:* NER for pathology findings.  
   *Evidence:* 9 downloads.  
   *License signal:* DeBERTa-v2 backbone, ONNX-optimized.  
   *Deployment caveat:* Designed for on-device Android inference; generalization across pathology sub-specialties and real clinical workflows not demonstrated.

4. **misalisu-ai/lemr-multimodal-clinical-core** — https://huggingface.co/misalisu-ai/lemr-multimodal-clinical-core  
   *Task:* Tabular classification for clinical informatics.  
   *Evidence:* 76 downloads.  
   *License signal:* Unknown license (safetensors, PyTorch).  
   *Deployment caveat:* Described as "multimodal" but only tabular classification task specified; no modality details or performance metrics.

5. **longtermrisk/Llama-3.1-8B-bad-medical-advice-first-third-sft-epoch3** — https://huggingface.co/longtermrisk/Llama-3.1-8B-bad-medical-advice-first-third-sft-epoch3  
   *Task:* Text generation (adversarial safety probe).  
   *Evidence:* 254 downloads (highest in this batch).  
   *License signal:* Llama-derived, unspecified.  
   *Deployment caveat:* Trained specifically to generate bad medical advice — safety research artifact, not a clinical tool. Do not deploy in any real setting.

---

## Industry Updates

1. **NVIDIA Blog: "How Nations Are Deploying AI for Strategic Priorities"** — https://blogs.nvidia.com/blog/nations-deploy-ai-strategic-priorities/  
   *Relevance:* Broad national AI strategy piece that mentions healthcare as a priority vertical but provides no specific medical AI product or clinical deployment examples.

---

## Assessment

- **Clinical Validation:** None of the products or models in today's signals have published clinical validation, diagnostic accuracy studies, or regulatory submissions. The field remains pre-validation.
- **Privacy/Compliance:** The OpenMed suite of ONNX models for on-device PII detection and pathology NER is the most privacy-conscious signal, enabling local inference on Android. The intellicare-platform mentions HIPAA but provides no proof. All other agents rely on cloud LLM APIs with unknown data handling.
- **Follow-up Worthwhile:** The OpenMed ecosystem deserves monitoring — their expanding multilingual PII-detection and pathology models suggest a systematic effort toward privacy-preserving clinical NLP on edge devices. The bio-medical-agent's claim of evidence grading via PubMed API is novel but needs evaluation.

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*