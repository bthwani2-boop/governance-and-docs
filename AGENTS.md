# BThwani Durable Knowledge Agent Contract

ARTIFACT_CLASS: AGENT_OPERATING_SAFETY_CONTRACT
SEMANTIC_AUTHORITY: NONE
PRODUCT_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This file is the repository-local operating law for maintaining BThwani durable knowledge. It owns execution and safety constraints only; it does not own Product semantics or implementation state.

## 1. Canonical state, review lane and atomic candidates

`main` is the only canonical durable-knowledge branch.

Every material change is prepared on one short-lived candidate branch cut from the exact live `main` HEAD and is promoted only through a pull request back to `main`. Direct material mutation of `main` is forbidden. A candidate branch has no durable semantic authority before successful verification and merge to `main`.

- Pin live remote `main` before material reasoning.
- Pin the exact candidate SHA while mutating/verifying a cutover.
- Keep one candidate branch for one coherent material knowledge change; never maintain parallel long-lived knowledge branches.
- A ready-for-review PR must carry the exact candidate, affected cone, `GOVERNANCE_IMPACT`, material-quality census, external-evidence/freshness impact, verification evidence and negative-space/residue census.
- Required repository knowledge checks must pass on the exact candidate before merge. Green CI is necessary evidence, never semantic authority.
- Re-read live remote `main` immediately before merge; if it moved, reconcile and invalidate affected evidence.
- Retire/delete the candidate branch after merge when tooling permits; regardless, it has no authority after merge.
- Final closure is claimed only from the verified resulting `main` HEAD.

Repository protection/ruleset configuration should enforce the same lane where the hosting platform permits it: no force-push/delete of `main`, PR promotion for material changes, and required knowledge checks with no routine bypass.

## 2. Fact-specific authority

```text
HUMAN AUTHORIZATION
→ current objective / mutation scope / accepted risk

EXACT SOURCE / CONFIG / DB / RUNTIME / READBACK
→ what currently exists, executes, persists or happened

GOVERNANCE
→ current durable BThwani Product/System/Policy baseline

DOCS
→ non-authoritative development / operations guidance

PRIMARY / NORMATIVE
→ external technical facts within exact scope

ASSURANCE
→ security / quality / reliability falsification frameworks

OSS / PRODUCT EXEMPLARS
→ edge cases / state machines / failure-recovery / test-oracle value

DISCOVERY CATALOGS
→ candidates only; never adoption authority

DONOR / HISTORY
→ historical intent / lost semantics / forensic value; lowest authority
```

No source has global precedence. Documented, implemented, popular, repeated or green does not mean correct.

## 3. Mandatory material-task law

For every material task:

```text
PIN EXACT STATE
→ ESTABLISH MATERIAL QUESTION
→ INSPECT CURRENT BTHWANI REALITY WHEN RELEVANT
→ LOAD ONLY DECISION-RELEVANT KNOWLEDGE / REFERENCES
→ BUILD MATERIAL AFFECTED CONE
→ CLASSIFY FACT / INFERENCE / UNKNOWN
→ FALSIFY CURRENT GOVERNANCE
→ RESOLVE EVERY QUALITY_DIMENSION DECLARED BY governance/policy/QUALITY.md
→ SELECT SIMPLEST COMPLETE BTHWANI-FIT MODEL
→ CLASSIFY GOVERNANCE_IMPACT
→ TREAT REQUIRED KNOWLEDGE CHANGE
→ VERIFY THE WHOLE MATERIAL CONE
→ FRESH ADVERSARIAL RE-CENSUS
→ CLOSE
```

For each `QUALITY_DIMENSION` the task records exactly one of:

```text
AFFECTED
PROVEN_UNAFFECTED
N/A_WITH_REASON
```

`UNEXAMINED`, `MAYBE`, `LATER` and silent omission are forbidden. `AFFECTED` requires an owner/invariant and fit evidence plan; `PROVEN_UNAFFECTED` and `N/A_WITH_REASON` require a concrete reason.

Research stops when additional evidence can no longer change owner, boundary, invariant, failure/recovery model, solution or proof.

## 4. Mandatory Governance impact

Every material task classifies exactly one:

```text
GOVERNANCE_IMPACT=NONE
GOVERNANCE_IMPACT=REVALIDATE_ONLY
GOVERNANCE_IMPACT=UPDATE_REQUIRED
GOVERNANCE_IMPACT=DEFECT_FOUND
```

`NOT_CHECKED`, `LATER`, `MAYBE` and silent implementation-only drift are forbidden closure states.

`UPDATE_REQUIRED` or `DEFECT_FOUND` means closure requires correction of the canonical owner, removal of obsolete/duplicate meaning, successful knowledge verification and deliberate consumer repin when the current authorized implementation outcome needs the new knowledge.

When an implementation task discovers required durable knowledge change, the durable-knowledge change is merged to canonical `governance-and-docs/main` first; only then may an implementation candidate deliberately repin the resulting exact Governance SHA. A consuming implementation never pins a temporary Governance candidate branch.

## 5. Full restructuring authority

KNOWLEDGE STRUCTURE HAS NO PRESERVATION RIGHT.

When evidence proves that tree shape, folder taxonomy, document split, owner placement, reference organization or verifier topology creates duplicate authority, ambiguity, future breadth, stale ownership or higher whole-system entropy, the agent is authorized and obligated to merge, split, rehome, rename, delete or restructure the full affected knowledge tree.

```text
SEMANTIC CENSUS
→ TARGET OWNER MODEL
→ PRESERVE REQUIRED DURABLE MEANING
→ MIGRATE MATERIAL REFERENCES / CONSUMERS / VERIFIERS
→ DELETE LOSING TOPOLOGY
→ VERIFY ZERO BROKEN / DUPLICATE / ORPHAN AUTHORITY
```

Preserve required meaning, not historical shapes. Git is the archive. Restructure for evidence-backed correctness and simplicity, never aesthetics.

## 6. Demand-created durable knowledge

```text
CURRENT DURABLE NEED → ADMIT
COHESIVE OWNER → EXTEND
NONCOHESIVE OWNER → SPLIT / REHOME
NO CURRENT NEED → ABSENT
FUTURE IDEA → GIT / BACKLOG, NOT LIVE GOVERNANCE
```

A new capability, policy, owner, file, reference class, registry, abstraction or verifier must prove unique current responsibility and absence of a stronger existing owner.

No future-status capability files, placeholder Product breadth, duplicate handbook, shadow registry, live ADR tree, research transcript archive or manual implementation inventory.

## 7. External evidence and distillation

Select source class by the question:

```text
protocol/platform fact → PRIMARY / NORMATIVE
security/quality/SDLC → ASSURANCE
experience/platform interaction/accessibility/design-system question → EXPERIENCE / DESIGN EVIDENCE
domain/product edge case → OSS / PRODUCT EXEMPLAR
commodity capability search → DISCOVERY CATALOG
historical intent/lost semantic → DONOR / HISTORY
```

Reference existence never authorizes adoption.

```text
EXACT QUESTION
→ EXTRACT INVARIANTS / EDGE CASES / FAILURE-RECOVERY / SECURITY / EXPERIENCE / TEST VALUE
→ MAP PROVEN VALUE TO CURRENT BTHWANI OWNER
→ PRESERVE / REFINE / REIMPLEMENT / REJECT
→ DISCARD NON-DURABLE RESEARCH RESIDUE
```

Mutable versions, licenses, security posture, provider behavior, platform requirements and store/release policies are revalidated at use. A proven durable BThwani invariant is stored once at its canonical owner and reused without repeating the original research unless disconfirming evidence or changed constraints appear.

## 8. Verifier law

A verifier is evidence, not authority. Prefer deterministic checks of relationships and invariants: unique ownership, capability identity/admission, reference integrity/classification, forbidden retired topology, authority boundaries, orphan knowledge, duplicate external-reference URLs, journey-to-capability coverage, quality-dimension coverage and PR evidence structure.

Do not freeze incidental prose, arbitrary file sizes/line counts or temporary cutover vocabulary. Exact wording is protected only when wording itself is the durable contract.

If a recurring material defect class can be detected deterministically, harden the verifier in the same coherent change when proportionate.

## 9. Cross-repository consumption

`governance-and-docs/main` is the latest canonical durable knowledge. A consuming implementation binds it through an exact immutable full commit SHA. Moving `main` never silently changes an already-pinned implementation candidate. Repin deliberately only when the authorized outcome requires the newer knowledge.

A consumer binding manifest is provenance only, never a second knowledge registry. A consumer that repins must migrate affected knowledge queries/verifiers/PR evidence and other material consumers in the same coherent cutover; SHA-only repin with known consumer incompatibility is forbidden.

## 10. Closure

`100% CURRENT MATERIAL CLOSURE` means complete examination and zero known material defect for the exact authorized candidate/cone; it never means permanent software infallibility.

Closure requires:

```text
MATERIAL_DIMENSIONS_UNEXAMINED=0
AFFECTED_DIMENSIONS_WITHOUT_OWNER=0
AFFECTED_DIMENSIONS_WITHOUT_RULE=0
AFFECTED_DIMENSIONS_WITHOUT_REQUIRED_PROOF=0
KNOWN_MATERIAL_DEFECTS=0
KNOWN_MATERIAL_CONTRADICTIONS=0
DUPLICATE_DURABLE_AUTHORITIES=0
UNOWNED_DURABLE_MEANING=0
KNOWN_STALE_DURABLE_MEANING=0
HISTORICAL_RESIDUE_AS_CURRENT_TRUTH=0
CURRENT_IMPLEMENTATION_INVENTORY_AS_GOVERNANCE=0
KNOWN_VERIFIER_FALSE_GREEN=0
UNJUSTIFIED_KNOWLEDGE_STRUCTURE=0
DECISION_CRITICAL_UNKNOWNS=0
UNJUSTIFIED_FUTURE_PRODUCT_BREADTH=0
KNOWN_GOVERNANCE_DRIFT=0
UNJUSTIFIED_RESIDUE=0
```

Final closure requires a fresh adversarial re-census and verification of the resulting `main` HEAD.
