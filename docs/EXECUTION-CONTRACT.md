# BThwani Existing-System Audit and Gap-Closure Contract

DOCUMENT_CLASS: NONAUTHORITATIVE_EXECUTION_PLANNING_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This is the **single** low-context method for planner → executor handoff, not an agent constitution, Product roadmap, backlog or execution-state registry. The consuming repository's `AGENTS.md` owns execution and safety; pinned Governance Product/System/Policy owners own approved durable meaning; exact code/schema/config/runtime and canonical readback own current implementation truth.

## 1. Input and authority

```text
REF: <exact existing implementation branch/ref>
OBJECTIVE: <currently authorized business/foundation outcome or audit scope>
DECISIONS: <only current task-specific approved decisions, or NONE>
PREVIOUS_CHECKPOINT: <exact tested HEAD and still-valid proofs, if relevant>
```

Resolve the current branch/HEAD and pinned Governance SHA before decisions. Recover previously completed work, the most recent valid evidence, existing canonical owners and current material user intent. Do not treat a listed capability, old slice number, template, old branch or historical plan as evidence that functionality is missing. No separate reusable rulebook, copied agent constitution, large speculative plan or invented permanent status registry. No implicit authority to merge, deploy, grant access, delete protected data or reset unrelated state.

## 2. Audit existing behavior before selecting work

Inspect the **material audit cone**: owning writer/readback, contracts, producers, consumers, role authorization, business rules, affected UI/device surfaces, persistence, cross-owner handoffs and negative/error paths. Start with the actual source and available owner-backed evidence; widen only for a newly evidenced dependency. Do not repeatedly scan proven unaffected areas or load all Governance by default.

Classify each relevant claim (temporary task observations, not Product statuses):

- `PROVEN_EXISTING` — correct on the applicable state with credible, still-valid proof: retain unchanged.
- `IMPLEMENTED_UNPROVEN` — code exists but required behavior is not proven: verify; do not assume missing implementation.
- `PARTIAL` / `TRULY_MISSING` — a presently authorized capability or behavior is incomplete/absent; prove need and exact gap before building.
- `DEFECTIVE` / `CONFLICTING` / `OBSOLETE` — evidence proves wrong behavior, competing authority or an invalid path: identify causal root and affected consumers before changing/removing it.
- `UNKNOWN` — decision-critical evidence not yet obtained: audit or return blocked; never fabricate closure or reimplementation.

Separate `AUDIT_SCOPE` (relationships that must be inspected) from `REPAIR_SCOPE` (only proven causal changes and affected consumers). Missing historical test logs do not make sound implementation absent. If no material defect or missing proof survives targeted verification, use `NO_ACTION` with direct evidence; do not create work to fill a slice queue.

Decision types are `AUDIT_ONLY` (unknown status requires investigation), `PROOF_ONLY` (implemented but unproven), `GAP_REPAIR` (causal fix/delete/merge/refound), `IMPLEMENT_MISSING` (genuinely absent and **currently** authorized), and `NO_ACTION`. Choose one supported by the evidence; a suspected defect is not yet `GAP_REPAIR`. Reopen previously proven work only when fresh evidence invalidates its proof or meaning.

## 3. Dependencies and slice boundaries

For a multi-capability authorized objective, make **one compact, temporary coverage census**, beginning with current `PRODUCT.md`, `CAPABILITIES.md`, `JOURNEYS.md`, exact implementation and owner readbacks; reuse it until relevant facts change. The census is not a second Product specification, backlog, permanent Governance file, missing-feature assertion or mandate to implement all capabilities.

Trace prerequisites backwards from the required outcome, and verify sibling blockers and their direction:

- `HARD` — directly required authorization/business/integrity/runtime condition; block an unsafe change until proven.
- `REFERENCE_READY` — scenario-specific *actual* active, compatible owner-managed reference values and API readback; schema or table existence is insufficient. Do not require every potential future city, category, product or option.
- `PROGRAM_ORDER` — current user-approved sequencing preference; never mislabel it `HARD` or freeze it as universal Product law.
- `INTEGRATION_PROOF` — first necessary cross-owner or cross-surface handoff proof, not a reason to prebuild all downstream journeys.

Reject false hard edges inferred from old maps, row numbers, historical branches, UI navigation or competitor applications. Detect cycles and unintended transitive blocks; do not stall unrelated independently eligible work. Prefer the earliest **evidenced unresolved material gap** unlocking the next authorized business handoff, then the smallest causally coherent proof boundary. Combine inseparable shared causes across surfaces; do not create a slice per table/screen/endpoint, or expand one repair into a whole domain. End-to-end Journeys are integration proof scenarios, **not** an independent execution or closure queue.

For sequential local development, a preceding execution slice needs all applicable **technical** closure gates on the relevant exact tested state. Manual user acceptance is not a universal prerequisite. Automatically exercise relevant browser, Android, API, persistence, authorization and regression paths; if required technical evidence cannot be obtained, return a precise `UNPROVEN`/`BLOCKED` claim. This does not bypass security, repository protection or production approvals. Audits and Governance corrections may continue while a dependent implementation slice is blocked.

## 4. Repair, data safety and Governance consistency

For `GAP_REPAIR` or `IMPLEMENT_MISSING`, solve the proven cause without patch-on-patch, optional abstraction or speculative infrastructure. `DELETE / CLEAN / MERGE / RESTRUCTURE / REFOUND / REPLACE` are permitted when justified; retain healthy components and migrate every material producer, consumer, writer, read path, contract, runtime/config, test and data obligation **before** retiring a losing path. Prove both required positive behavior and removal of obsolete writers, dead routes and stale documentation (negative space). Immutable historical migrations and Git history are not themselves delete targets.

Classify `GOVERNANCE_IMPACT=NONE | REVALIDATE_ONLY | UPDATE_REQUIRED | DEFECT_FOUND`. Any required durable semantic correction goes to its **single canonical Governance owner** by governed PR/merge before a deliberate immutable consumer repin. Do not create a shadow implementation policy or silently change approved Product meaning. Use only decision-critical current standards, official evidence and OSS/external observations to challenge a material claim; never copy vendor architecture or competitor behavior as BThwani law. The current implementation repo, not this document, owns live commands, versions, infrastructure and state.

Before a destructive local operation report:

```text
LOCAL_TARGET: VERIFIED | UNVERIFIED
LOCAL_DATA_MODE: CONFIRMED_DISPOSABLE | MUST_PRESERVE | UNKNOWN
RESET_SCOPE: <exact authorized, verified disposable resources | NONE>
```

Local Docker, test labels or the development phase do **not** imply disposability. Preserve live actors, useful sessions, money/business state, credentials, protected migrations and unrelated resources. When status is unknown use non-destructive inspection or an independently verified disposable target. After an authorized scoped reset, prove fresh setup and canonical owner readback. The consuming `AGENTS.md` remains the stronger data/migration/security/mutation authority.

## 5. Claim-specific proof and eight closure gates

For the affected cone, use the smallest sufficient static/unit/API/contract/DB/browser/device/runtime and negative/failure evidence. A green static test, visual screenshot, invented fixture or copied pass label cannot prove an owner handoff. Reuse still-valid evidence; rerun invalidated claims only. Verify final canonical state, correct roles, mutation/replay, error/recovery and affected integrations as needed.

Return `CLOSURE_GATE_1_TO_8`, each `PASS | NOT_APPLICABLE | FAIL | UNPROVEN` with a concise claim-specific evidence pointer or genuine N/A reason:

1. **Causal root:** the proven gap/cause is resolved, not disguised.
2. **Canonical authority:** one owner/writer with authoritative readback.
3. **Necessary structural repair:** full justified correction/refoundation, healthy state retained.
4. **Negative space:** losing/conflicting/obsolete paths removed when applicable.
5. **Affected cone:** all material surfaces, roles, contracts and cross-owner handoffs proven.
6. **Minimum sound complexity:** no unsupported new machinery or permanent compatibility residue.
7. **Governance consistency:** correct owner and required correction/consumer pin accounted for.
8. **Falsifiable outcome:** material technical, runtime, data, authorization and recovery proof.

An applicable `FAIL` or `UNPROVEN` forbids `CLOSED`. `NOT_APPLICABLE` needs grounded explanation; eight gates are one compact **report over existing law**, not eight redundant test passes. A result of `NO_ACTION` is valid with sufficient current evidence and no mutation. No claim of permanent infallibility.

## 6. One bounded command and checkpoint

Issue work only for the current observed gap/proof obligation. Generic safety law stays in the consuming `AGENTS.md`, not copied into the command.

```text
SLICE: <existing scope/outcome, no artificial re-numbering>
REF: <branch>
BASE_HEAD: <exact sha>
OBJECTIVE: <authorized current outcome>
ACTION: AUDIT_ONLY | PROOF_ONLY | GAP_REPAIR | IMPLEMENT_MISSING | NO_ACTION
AUDIT_SCOPE: <necessary connected owners/relations>
PROVEN_EXISTING: <sound paths and valid evidence to preserve>
GAPS: <falsifiable claims | NO_MATERIAL_GAPS>
REPAIR_SCOPE: <causal owners/affected consumers | NONE>
HARD_PREDECESSORS: <specific owner-backed status | NONE>
REFERENCE_READY: <scenario-specific data proof | N/A>
INTEGRATION_PROOF: <first applicable handoff | N/A>
GOVERNANCE_IMPACT: NONE | REVALIDATE_ONLY | UPDATE_REQUIRED | DEFECT_FOUND
LOCAL_TARGET: VERIFIED | UNVERIFIED
LOCAL_DATA_MODE: CONFIRMED_DISPOSABLE | MUST_PRESERVE | UNKNOWN
RESET_SCOPE: <authorized disposable scope | NONE>
CLOSE: <claim-specific checks and readback>
DO_NOT_EXPAND: <known unrelated scope>
RETURN: HEAD | ACTION | STATUS | PROVEN_EXISTING | GAPS | REPAIR_SCOPE | CLOSURE_GATE_1_TO_8 | VALID_PROOF | REMAINING | BLOCKERS
```

Compact checkpoint after execution/audit:

```text
HEAD: <exact tested sha>
SLICE: <existing outcome>
ACTION: AUDIT_ONLY | PROOF_ONLY | GAP_REPAIR | IMPLEMENT_MISSING | NO_ACTION
STATUS: CLOSED | NO_ACTION | REMAINDER | BLOCKED
DECISIONS: <still-active material decisions | NONE>
PROVEN_EXISTING: <retained healthy paths>
GAPS: <closed claims | remaining proven claims | NO_MATERIAL_GAPS>
REPAIR_SCOPE: <actual causal changes | NONE>
LOCAL_TARGET: VERIFIED | UNVERIFIED
LOCAL_DATA_MODE: CONFIRMED_DISPOSABLE | MUST_PRESERVE | UNKNOWN
RESET_SCOPE: <actual safe reset/readback | NONE>
CLOSURE_GATE_1_TO_8: <status + evidence/reason for each applicable gate>
VALID_PROOF: <claim-specific checks and canonical readback on exact state>
REMAINING: <material unresolved claims | NONE>
BLOCKERS: <exact root, consequence and unblock condition | NONE>
```

## 7. Git integration and stopping

Follow the implementation repository's commit/push rules and explicit integration authorization. A push is not a merge. For Governance changes, review/CI/merge the exact canonical candidate, verify `main` readback, and deliberately repin a consumer **only when needed**; do not maintain shadow truth. Do not rerun identical CI/review waves for every trivial edit.

Continue from the previous checkpoint, fresh exact HEAD, changed dependency edges and still-valid evidence, not a full restart of analysis. Integrated journeys require E2E proof at the first joined handoff. Stop at the authorized fixed point (`NO_ACTION` or proven `CLOSED`), or return `BLOCKED` with what is missing. "100%" refers to zero **known** material defects in the evidence-backed scope, not an assurance against future defects.
