# Diagnosis and Decision Method

DOCUMENT_CLASS: NON_NORMATIVE_METHOD_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

## Principle

Do not ask “what do the documents tell me to implement?”. Ask what is actually true now, what outcome is currently authorized, which assumptions survive current evidence, what causal defect matters most, and what evidence could prove the proposed decision wrong.

Governance, Docs, donor/history, open-source systems, standards and external references are inputs to diagnosis. None substitutes for diagnosis.

## Evidence roles

~~~text
CURRENT HUMAN INSTRUCTION → objective, constraints, permitted mutation scope
EXACT SOURCE/CONFIG/RUNTIME/DB READBACK → current implementation/state truth
GOVERNANCE → current durable decision baseline
OFFICIAL CURRENT EXTERNAL SOURCE → mutable platform/provider/standard facts
DONOR/HISTORY/OSS/REFERENCES → evidence, alternatives, failure cases, falsification
~~~

## Before a material decision

1. Pin the exact target candidate and intended environment/target.
2. State the authorized objective and material constraints.
3. Inspect source/config/runtime/history sufficient to understand the affected cone.
4. Resolve applicable Governance owners and challenge them against current evidence.
5. Use donor/history/OSS/current official sources only when they can materially change the decision.
6. Compare plausible solutions, including keeping the current model and refounding it.
7. Resolve unknowns capable of changing safety, ownership, target or migration.
8. Select the smallest safe canonical solution that satisfies the actual objective without shadow truth or speculative breadth.

## Root-cause selection

Prefer the highest proven causal defect, not the most visible symptom. Escalate when repeated local fixes share the same wrong owner, writer, boundary, contract, data model or compensation mechanism.

Prefer targeted correction when the owner/boundary/model is sound. Prefer refoundation when the structure itself creates duplicate authority, wrong ownership, irreducible compensation or unjustified complexity.

## Governance conflict

~~~text
CURRENT CODE VIOLATES VALID GOVERNANCE → FIX IMPLEMENTATION
GOVERNANCE STALE/WRONG/INCOMPLETE → FIX CANONICAL GOVERNANCE OWNER
BOTH INCOMPLETE → RESOLVE EVIDENCE THEN CORRECT BOTH
~~~

Do not leave a known durable contradiction as an implementation-only exception.

## Compact decision record

~~~text
AUTHORIZED OBJECTIVE
MATERIALLY AFFECTED CONE
CURRENT EVIDENCE
CURRENT ROOT CAUSE
REQUIRED CHANGE
REQUIRED PROOF
BLOCKER OR NONE
~~~

This is transient reasoning, not a permanent ledger.
