# Medical AI Industry Digest 2026-07-21

> Sources: GitHub medical agents (20) + Hugging Face medical models (24) + medical AI industry news (1); paper feeds excluded | Generated: 2026-07-20 23:40 UTC

---

# Medical AI Industry Digest – 2026-07-21

## Bottom Line
No clinically validated or production-ready medical agent or model emerged this week. The landscape remains dominated by early-stage open-source prototypes and prompt-based tools, none of which provide evidence of diagnostic accuracy, regulatory compliance, or real-world deployment. Attention signals (stars, downloads) should not be mistaken for medical quality.

## Medical Agents

1. **ajhcs/healthcare-agents** — [GitHub](https://github.com/ajhcs/healthcare-agents)  
   Purpose: Portable prompt/SKILL.md pack with 51 specialist AI agents for US healthcare administration workflows. Maturity: 48 stars, Apache-2.0 license, last pushed 2026-07-19. Limitation: Prompt-only; no runtime system, clinical logic not exposed.

2. **openmed-labs/openmed-agent** — [GitHub](https://github.com/openmed-labs/openmed-agent)  
   Purpose: Privacy-first, sandboxed terminal medical assistant for clinical workflows. Maturity: 28 stars, Apache-2.0 license, last pushed 2026-07-14. Limitation: CLI-only, no EHR integration, unvalidated.

3. **chencyan21/MedGraphAI** — [GitHub](https://github.com/chencyan21/MedGraphAI)  
   Purpose: Multi-agent system for medical Q&A, RAG, web retrieval, and image analysis with human review. Maturity: 8 stars, Apache-2.0 license, last pushed 2026-07-14. Limitation: Early prototype; no evaluation or benchmarks.

4. **10Prachi2006/Parchee-Medical-Assistant** — [GitHub](https://github.com/10Prachi2006/Parchee-Medical-Assistant)  
   Purpose: Reads handwritten prescriptions, explains medications, maintains longitudinal memory, and generates visit briefs. Maturity: 2 stars, no license, last pushed 2026-07-15. Limitation: Very new; zero evidence of accuracy or production use.

5. **WeiQ912/clinical-agent-monitor** — [GitHub](https://github.com/WeiQ912/clinical-agent-monitor)  
   Purpose: Multi-agent framework for evidence-based verification and safety monitoring of clinical LLM reasoning. Maturity: 0 stars, last pushed 2026-07-20. Limitation: Proof-of-concept only; no validation data or model weights released.

## Medical Models

1. **RemDev-AI/medical-triage-agent-ai-poc-models** — [HuggingFace](https://huggingface.co/RemDev-AI/medical-triage-agent-ai-poc-models)  
   Task: text-generation (DPO fine-tuned Qwen3-1.7B for medical triage). Evidence: 162 downloads, 0 likes. License: unknown (adapter on base model). Caveat: POC only; no clinical triage accuracy reported.

2. **MohamedAhmedAE/llava-medical-3B-medsiglip-stage2** — [HuggingFace](https://huggingface.co/MohamedAhmedAE/llava-medical-3B-medsiglip-stage2)  
   Task: image-text-to-text (medical visual-language model). Evidence: 728 downloads, 0 likes. License: unknown (safetensors). Caveat: No evaluation set or benchmarks; requires MedSigLIP and GPU infrastructure.

3. **Kerassy/Qwen3.5-9b-Medical-Reasoning-r1** — [HuggingFace](https://huggingface.co/Kerassy/Qwen3.5-9b-Medical-Reasoning-r1)  
   Task: image-text-to-text (medical reasoning). Evidence: 0 downloads, 0 likes. License: unknown (qwen3_5). Caveat: No results or demonstration; unproven capability.

4. **genzeonplatform/healthcare-brain-medication-ner** — [HuggingFace](https://huggingface.co/genzeonplatform/healthcare-brain-medication-ner)  
   Task: token-classification (NER for medications). Evidence: 19 likes, 17 downloads. License: unknown (Bert). Caveat: Isolated NER; requires pipeline integration; no accuracy metrics.

5. **ayodeji21/clinical-severity-classifier** — [HuggingFace](https://huggingface.co/ayodeji21/clinical-severity-classifier)  
   Task: text classification (implied). Evidence: 82 downloads, 0 likes. License: unknown (Bert). Caveat: No task definition or documentation; minimal validation.

## Industry Updates

1. **Henry Schein One goes AI-native with AI Product Discovery and Strategy** — [AWS Industries Blog](https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/)  
   Relevance: A dental practice management platform adopting cloud/AI infrastructure, but no specific agent or model details were disclosed.

## Assessment

- **Clinical validation**: None of the listed agents or models provide published validation, peer-reviewed evaluation, or benchmark results. All are open-source prototypes or prompt libraries.
- **Privacy/compliance**: Most agents lack explicit HIPAA or GDPR guardrails. Only the unrelated ONNX PII de-identification model (medical PII removed from digest per criteria) addresses compliance. The privacy-claiming openmed-agent is untested.
- **Follow-up**: The **genzeonplatform** healthcare-ner suite and **RemDev-AI** triage DPO model are domain-specific and worth monitoring for future validation. No other candidate justifies deeper attention without evidence.

---
*This digest is auto-generated by [agents-radar](https://github.com/BlackJack-Cao/agents-radar).*