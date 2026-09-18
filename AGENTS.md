# BThwani Durable Knowledge Agent Contract

ARTIFACT_CLASS: AGENT_OPERATING_SAFETY_CONTRACT
SEMANTIC_AUTHORITY: NONE
PRODUCT_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This file owns only how an agent safely judges and changes BThwani durable knowledge.

`GOVERNANCE-STANDARDS.md` is the project-neutral integrity acceptance standard. It owns no BThwani Product/System/Policy truth. `governance/**` owns current durable BThwani meaning. Exact source/config/schema/runtime/readback owns current implementation state. Git owns history.

## 1. Canonical lane and exact state

`main` is the only canonical durable-knowledge branch.

Every material change:
- starts from the exact live remote `main` HEAD on one short-lived candidate branch;
- is verified on an exact candidate SHA;
- is promoted only by pull request to `main`;
- re-reads live `main` immediately before merge;
- reconciles and invalidates affected evidence if the target moved;
- closes only from the resulting verified canonical `main` state.

Direct material mutation, force-push/delete, routine bypass and parallel long-lived knowledge branches are noncanonical.

## 2. Fact-specific authority

```text
HUMAN AUTHORIZATION
→ current objective / scope / accepted consequential change

SOURCE / CONFIG / SCHEMA / DATABASE / RUNTIME / READBACK
→ what currently exists, executes and persists

GOVERNANCE-STANDARDS.md
→ integrity rules for Governance and agent constitutions

governance/**
→ current durable BThwani Product/System/Policy meaning

docs/reference/**
→ non-authoritative evidence routing

PRIMARY / NORMATIVE / ASSURANCE / EXPERIENCE / OSS / PRODUCT EXEMPLARS
→ question-specific external evidence

DONOR / HISTORY
→ historical intent / lost semantics / forensic evidence

GIT
→ history and rationale
```

No source has global precedence. Repetition, implementation, popularity or a green check never makes a claim correct by itself.

## 3. Material-task law

For every material task:

```text
PIN EXACT STATE
→ ESTABLISH MATERIAL QUESTION
→ INSPECT CURRENT BTHWANI REALITY WHEN IT CAN CHANGE THE DECISION
→ DISCOVER PLAUSIBLY MATERIAL QUALITY DIMENSIONS
→ LOAD ONLY EVIDENCE CLASSES THAT CAN CHANGE NEED / OWNER / BOUNDARY / RISK / SOLUTION / PROOF
→ CLASSIFY CLAIMS BY DURABILITY
→ FALSIFY CURRENT GOVERNANCE
→ DESIGN THE SIMPLEST COMPLETE BTHWANI-FIT OWNER MODEL
→ CLASSIFY GOVERNANCE_IMPACT
→ TREAT THE CANONICAL OWNER
→ VERIFY CLAIM-SPECIFICALLY
→ FRESH NEGATIVE-SPACE / LOSSLESSNESS CENSUS
→ CLOSE
```

The quality-dimension catalog in `governance/policy/QUALITY.md` is a discovery taxonomy, not a requirement to manufacture commentary about clearly irrelevant dimensions. Every plausibly material dimension must be resolved; silent omission of a plausibly material dimension is forbidden.

Research stops when additional evidence can no longer materially change the current decision.

## 4. Evidence council

For a material question, consider these evidence lanes for applicability:

```text
LIVE BTHWANI
CURRENT GOVERNANCE
DONOR / HISTORY
OSS / PRODUCT EXEMPLARS
YEMEN-MARKET / COMPETITOR EVIDENCE
PRIMARY TECHNOLOGY SOURCES
NORMATIVE / ASSURANCE SOURCES
EXPERIENCE / DESIGN SOURCES
CURRENT ECOSYSTEM / TOOLING DISCOVERY
```

Inspect a lane when it can materially change the decision. Do not repeatedly reopen an already-proven reusable decision without new disconfirming evidence or changed constraints.

External evidence is distilled into the correct BThwani owner or discarded; research transcripts and mutable market/tool inventories do not become live Governance.

## 5. Governance impact

Every material task classifies exactly one:

```text
GOVERNANCE_IMPACT=NONE
GOVERNANCE_IMPACT=REVALIDATE_ONLY
GOVERNANCE_IMPACT=UPDATE_REQUIRED
GOVERNANCE_IMPACT=DEFECT_FOUND
```

- `NONE`: the affected cone cannot materially change durable Governance meaning.
- `REVALIDATE_ONLY`: relevant durable meaning was actively challenged and remains correct.
- `UPDATE_REQUIRED`: the authorized outcome changes durable meaning.
- `DEFECT_FOUND`: current Governance is stale, wrong, incomplete, duplicated or otherwise defective.

`NOT_CHECKED`, `MAYBE`, `LATER` and silent implementation-only drift are forbidden.

When implementation work requires `UPDATE_REQUIRED` or `DEFECT_FOUND`, correct and merge the canonical Governance owner first. Only then may a consumer deliberately pin the resulting immutable Governance SHA.

## 6. Semantic conservation and restructuring

Knowledge structure has no preservation right; required durable meaning does.

For refoundation or material restructuring:

```text
CLAIM-BY-CLAIM CENSUS
→ CLASSIFY DURABLE / IMPLEMENTATION / HISTORY / MUTABLE EXTERNAL FACT
→ TARGET OWNER MODEL
→ KEEP / MOVE / MERGE / REWRITE / DELETE
→ MAP EVERY SURVIVING DURABLE MEANING TO ONE OWNER
→ EXPLICITLY JUSTIFY EVERY MATERIAL SEMANTIC REMOVAL
→ MIGRATE REFERENCES / CONSUMERS / VERIFIERS
→ DELETE LOSING TOPOLOGY / DUPLICATE AUTHORITY / HISTORY RESIDUE
→ PROVE NO MATERIAL MEANING LOST
```

Git is the archive. Do not preserve historical cutover state, implementation snapshots or future placeholders as current Governance.

A new file, owner, policy, capability, registry, verifier or abstraction must prove a unique current responsibility that a simpler existing owner cannot satisfy.

## 7. External change and technology evolution

Mutable external facts are revalidated at actual use.

When a materially affected technology, platform, provider or tooling boundary is extended or refounded, inspect current primary sources for stable capabilities, deprecations, security/reliability changes or simpler mechanisms that can materially alter the solution.

Newer is not automatically better. Adoption is a decision, not a discovery result. Evaluate current need, maturity/status, compatibility, regression evidence, security/license/provenance, operational cost, migration/rollback, complexity removed and claim-specific proof. Pre-release novelty does not enter the canonical baseline merely because it is newer.

Do not create a permanent market, dependency or technology-news inventory in Governance.

## 8. Verifier law

A verifier is deterministic evidence, not semantic authority.

Prefer checks for relationships and mechanically detectable forbidden states: unique ownership, required authority metadata, capability admission/identity relationships, reference integrity, orphan knowledge, retired topology and low-false-positive implementation/history snapshots.

Do not encode semantic correctness as brittle prose matching. Exact wording is protected only when wording itself is intentionally the contract.

## 9. Cross-repository consumption

A consuming repository binds Governance through one exact immutable full commit SHA.

A moving Governance `main` never silently changes a pinned implementation state. Repin only when the authorized outcome needs the newer durable meaning, and migrate affected consumers/verifiers in the same coherent cutover.

The pin is provenance, not a second knowledge registry.

## 10. Current-material closure

`100% CURRENT MATERIAL CLOSURE` is exact-state closure, not permanent infallibility.

As applicable, closure requires:

```text
AUTHORIZED_OUTCOME_PROVEN=1
PLAUSIBLY_MATERIAL_DIMENSIONS_UNRESOLVED=0
APPLICABLE_EVIDENCE_CLASSES_IGNORED=0
MATERIAL_DURABLE_MEANING_LOST=0
DUPLICATE_OR_AMBIGUOUS_DURABLE_AUTHORITY=0
UNOWNED_DURABLE_MEANING=0
DISCOVERABLE_IMPLEMENTATION_STATE_AS_GOVERNANCE=0
HISTORICAL_OR_CUTOVER_STATE_AS_CURRENT_GOVERNANCE=0
STALE_REQUIRED_EXTERNAL_EVIDENCE=0
KNOWN_GOVERNANCE_IMPLEMENTATION_CONTRADICTIONS=0
KNOWN_SILENT_GOVERNANCE_DRIFT=0
KNOWN_PARTIAL_CUTOVERS=0
DECISION_CRITICAL_UNKNOWNS=0
UNJUSTIFIED_KNOWLEDGE_COMPLEXITY_OR_RESIDUE=0
INVALIDATED_REQUIRED_EVIDENCE=0
```

A fresh adversarial census of the resulting exact state is mandatory before closure.
