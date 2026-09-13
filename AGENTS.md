# BThwani Knowledge Repository Agent Contract

ARTIFACT_CLASS: AGENT_OPERATING_SAFETY_CONTRACT
SEMANTIC_AUTHORITY: NONE
PRODUCT_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This file is the repository-local operating law for maintaining BThwani durable knowledge. It owns execution/safety constraints for work in this repository; it does not own Product semantics, implementation state or deployment authority.

## 1. Canonical working branch and exact state

`main` is the only authorized working branch for this repository.

- Every material Governance/Docs read MUST pin branch `main` or an exact commit proven to be the current HEAD of `main`.
- Every mutation, commit, push, verification and closure action in `bthwani2-boop/governance-and-docs` MUST target `main` only.
- Every other branch is out of scope and MUST NOT be edited, moved, merged, synchronized, treated as current truth or used as substitute authority.
- Before every material write, re-read the live remote HEAD of `main`. If it moved, reconcile the foreign change and invalidate affected evidence before writing.
- Never claim closure from a stale candidate.

## 2. Repository boundary and authority

This repository owns only durable BThwani Governance plus non-authoritative Docs/reference material. It does not own executable implementation/configuration/runtime/database state.

~~~text
CURRENT HUMAN AUTHORIZATION
→ objective / permitted mutation scope / accepted risk

EXACT IMPLEMENTATION SOURCE / CONFIG / DB / RUNTIME / READBACK
→ current executable reality

GOVERNANCE
→ current durable BThwani decision baseline within each canonical semantic owner

DOCS
→ non-authoritative method / development / operations guidance

OFFICIAL / OPEN-SOURCE / EXTERNAL / DONOR / HISTORY
→ evidence and falsification input; never automatic BThwani authority
~~~

Governance is valuable and challengeable, not infallible. Documentation, popularity, source count and prior agreement do not prove correctness.

## 3. Material knowledge affected cone

Start from the exact material question and the apparent owner. Expand only while another owner, policy, reference, implementation fact or verifier can change the need, meaning, ownership, boundary, structure, safety, decision or proof.

~~~text
MATERIAL QUESTION
→ CURRENT EXACT EVIDENCE
→ APPLICABLE CANONICAL OWNER
→ MATERIAL DEPENDENT / CONFLICTING OWNERS
→ APPLICABLE DOCS / REFERENCES / IMPLEMENTATION EVIDENCE
→ STOP WHEN FURTHER SEARCH CANNOT CHANGE THE DECISION
~~~

Do not read the whole repository by default. Do not stop at one file when evidence shows a wider material cone. `UNEXAMINED != UNAFFECTED` for a plausibly material dependency.

## 4. Continuous correction and root-cause treatment

A known material Governance/Docs defect inside the human-authorized affected cone is a treatment obligation, not an optional follow-up.

~~~text
DISCOVER
→ FALSIFY
→ CLASSIFY DURABLE VALUE
→ FIND THE CORRECT OWNER
→ TREAT THE HIGHEST PROVEN KNOWLEDGE ROOT
→ RESTRUCTURE IF THE STRUCTURE ITSELF IS WRONG
→ PRESERVE REQUIRED DURABLE MEANING
→ MIGRATE MATERIAL REFERENCES / CONSUMERS
→ DELETE LOSING OWNERS / DUPLICATES / RESIDUE
→ HARDEN DETERMINISTIC VERIFICATION WHEN VALUABLE
→ VERIFY THE WHOLE MATERIAL KNOWLEDGE CONE
→ CLOSE WITH ZERO KNOWN MATERIAL KNOWLEDGE DEFECTS
~~~

AUDIT_ONLY != COMPLETION when safe authorized treatment is derivable.
PATCHING_THE_SYMPTOM != ROOT_TREATMENT.
KNOWN_WRONG_GOVERNANCE_MUST_NOT_SURVIVE_FOR_HISTORY.
GIT_IS_THE_HISTORY.

If the current split, folder, owner or document topology is the causal defect, merge, rehome, delete or restructure it as one coherent canonical cutover. Preserve required semantic value; preserve filenames or historical shapes only when they still own unique current value.

## 5. Compaction and admission law

More learning must not mechanically produce more files, registries, rules or abstractions.

~~~text
NEW KNOWLEDGE
→ UPDATE THE EXISTING CORRECT OWNER WHEN POSSIBLE
→ MERGE / SIMPLIFY / DELETE OBSOLETE OR DUPLICATE MEANING
→ CREATE A NEW DURABLE OWNER ONLY FOR A PROVEN INDEPENDENT RESPONSIBILITY
~~~

Nothing new is admitted merely because it is useful, popular, available in a donor, or present in an open-source system. A new durable artifact must prove unique responsibility, correct ownership, current durable need and absence of a stronger existing owner.

One material meaning has one editable canonical owner. Indexes, routers, caches and generated views are derived only. Do not create a second handbook, shadow policy, manual implementation inventory or parallel reference registry.

## 6. Research distillation and external references

Research exists to reduce future uncertainty, not to accumulate transcripts.

~~~text
EXACT QUESTION
→ USE ONLY DECISION-RELEVANT OFFICIAL / OSS / EXTERNAL / DONOR EVIDENCE
→ EXTRACT INVARIANTS / EDGE CASES / FAILURE-RECOVERY / SECURITY / TEST-ORACLE VALUE
→ MAP PROVEN VALUE TO THE CURRENT BTHWANI OWNER
→ PRESERVE / REFINE / REIMPLEMENT / REHOME / REJECT
→ DISCARD NON-DURABLE RESEARCH RESIDUE
~~~

A proven durable BThwani invariant may be reused without repeating its original research unless disconfirming evidence, a changed requirement or a changed external constraint can invalidate it.

Mutable upstream facts such as versions, licenses, security posture, API/provider behavior and platform requirements MUST be revalidated at use. Reference existence never authorizes dependency/provider adoption; adoption requires separate current proof.

## 7. Verification must learn without freezing prose

A verifier is evidence, not authority. A green verifier that permits a known material contradiction or stale authority is defective.

When a discovered defect class can be detected deterministically and recurrence would be material, harden the appropriate verifier in the same coherent change when proportionate.

Prefer verification of relationships and invariants: unique ownership, references, topology, coverage, forbidden residue, authority boundaries and source derivation. Do not freeze incidental wording merely to manufacture a check. Exact phrase assertions are justified only when the phrase itself is the durable contract being protected.

## 8. Cross-repository consumption

`governance-and-docs/main` represents the latest canonical durable knowledge. A consuming implementation candidate MUST bind Governance/Docs through an exact immutable full commit SHA; a floating branch/tag/latest value is never semantic authority.

Moving `main` MUST NOT silently alter an already-pinned implementation candidate. When a material Governance correction is required by the currently authorized implementation outcome, update the affected consumer pin deliberately and verify the exact candidate. Otherwise do not mutate unrelated consumers merely to chase latest.

A consumer binding manifest is provenance, not a second knowledge registry. Curated external references and durable Governance/Docs belong here; consumers should not hand-maintain duplicate copies of those lists.

## 9. Closure

Closure means zero **known** material knowledge defects for the exact candidate and authorized scope; it does not mean the repository is infallible forever.

~~~text
KNOWN_MATERIAL_CONTRADICTIONS=0
DUPLICATE_DURABLE_AUTHORITIES=0
UNOWNED_DURABLE_MEANING=0
KNOWN_STALE_DURABLE_MEANING=0
HISTORICAL_RESIDUE_AS_CURRENT_TRUTH=0
CURRENT_IMPLEMENTATION_INVENTORY_AS_GOVERNANCE=0
KNOWN_VERIFIER_FALSE_GREEN=0
UNJUSTIFIED_KNOWLEDGE_STRUCTURE=0
DECISION_CRITICAL_UNKNOWNS=0
~~~

Before closure, perform a fresh adversarial re-census of the material affected cone and verify the exact resulting `main` HEAD.

## 10. Forbidden

- Do not mutate, move, merge into or otherwise use a non-`main` branch for Governance/Docs work.
- Do not add a durable execution state machine, campaign ledger or numbered lifecycle.
- Do not create duplicate semantic owners, shadow policy, parallel handbook or duplicate external-reference registry.
- Do not copy executable implementation or mutable implementation inventories into this repository.
- Do not preserve a known wrong owner or stale rule because it is documented or historically useful.
- Do not promote donor/reference/open-source popularity, rank or existence into an adoption decision.
- Do not claim implementation/runtime correctness from documentation alone.
- Do not add compatibility, structure, abstraction or future breadth without proven current durable need.

When Docs mention mutable commands, paths, versions, platform requirements or provider behavior, verify them against the exact implementation candidate or current official source as applicable.