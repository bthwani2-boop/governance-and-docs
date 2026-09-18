# Governance and Agent Integrity Standard

ARTIFACT_CLASS: GOVERNANCE_AND_AGENT_META_STANDARD
PROJECT_SEMANTIC_AUTHORITY: NONE
PRODUCT_AUTHORITY: NONE
SYSTEM_AUTHORITY: NONE
POLICY_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
EXECUTION_AUTHORITY: NONE

This file defines project-neutral acceptance conditions for the integrity of a governance repository and its repository-local agent constitution. It does not define Product, System, Policy or current implementation truth for any project.

Presence of this file never proves conformance. Conformance is established only by claim-specific evidence against the exact state being judged.

## 1. Project-specific durable truth

A governance repository must remain grounded in the current durable truth of the project it governs. Generic principles alone are not sufficient governance.

- Project-specific Product, System and Policy meaning belongs only to the applicable project governance owners.
- When an authorized durable project decision changes, its canonical governance meaning changes deliberately through the governed change path.
- When implementation-only state changes without changing durable meaning, governance must not be edited merely to mirror that state.
- Governance that is generic but no longer represents the project's current durable meaning is nonconformant.

## 2. Authority separation

Keep authority classes distinct:

```text
HUMAN AUTHORIZATION
→ objective, scope and accepted authority/risk

EXECUTABLE SOURCE / CONFIG / SCHEMA / RUNTIME / READBACK
→ what currently exists, executes or persists

PROJECT GOVERNANCE
→ current durable project Product/System/Policy meaning

AGENT CONSTITUTION
→ repository-local execution and safety law

EXTERNAL REFERENCES
→ evidence subject to scope and freshness

GIT
→ history and rationale
```

No artifact gains authority merely by being documented, repeated, implemented, popular or green.

## 3. Durable-claim admission

A claim may live as current project governance truth only when it is one of:

```text
DURABLE_INVARIANT
CURRENT_DURABLE_DECISION
```

The following do not belong as current governance truth:

```text
DISCOVERABLE_IMPLEMENTATION_STATE
HISTORICAL_OR_CUTOVER_FACT
MUTABLE_EXTERNAL_FACT presented as timeless project truth
EXECUTION_INSTRUCTION that belongs to the agent/repository operating contract
```

When classification is materially uncertain, resolve the uncertainty before admitting the claim.

## 4. One meaning, one editable owner

Every material durable meaning has exactly one editable canonical semantic owner.

Indexes, routers, summaries, generated views and consumer manifests may point to the owner but must not restate the same editable truth as parallel authority.

Duplicate, shadow, orphaned or ambiguous durable authority is a defect.

## 5. No discoverable-state duplication

If a fact can be authoritatively discovered from source, configuration, schema, runtime or provider readback, and the value itself is not a durable semantic decision, it must not be copied into live governance as current truth.

Typical non-durable snapshots include current ports, package/tool versions, migration ordinals, repository paths, handlers, process/container inventories, commit SHAs and incidental commands.

An intentionally stable public repository/agent interface may be governed when its stability is itself a deliberate contract and its executable owner is verifiable.

## 6. Freshness and change

Freshness is event-driven, not ceremonial.

```text
DURABLE PROJECT MEANING
→ revalidate when materially affected, contradicted or intentionally reconsidered

MUTABLE EXTERNAL FACT
→ revalidate at actual use

IMPLEMENTATION STATE
→ discover from the live executable authority

HISTORY
→ read from Git
```

Do not perform periodic full revalidation merely to manufacture freshness evidence.

## 7. Applicability and proportionality

Apply only requirements that can materially affect the authorized outcome, and resolve every requirement that is plausibly material.

Rigor scales with consequence, uncertainty, affected cone and irreversibility.

A universal checklist that forces clearly irrelevant review is not stronger governance. Silent omission of a plausibly material requirement is not acceptable either.

## 8. Evidence integrity

Evidence must be claim-specific and authority-appropriate. A green check proves only what it exercised.

Evidence is valid only for the exact state it proves. A material change to the candidate, relevant owner, governance binding, schema, runtime composition or external rule invalidates the affected evidence until revalidated.

Stronger current evidence may falsify existing governance. When durable meaning is wrong, correct the canonical governance owner; do not create a silent implementation exception.

## 9. Agent-constitution boundary

A repository-local `AGENTS.md` owns execution and safety law only.

It may define exact-state pinning, affected-cone reasoning, mutation/promotion safety, proof obligations, closure and a deliberately small stable execution interface.

It must not become a second owner for Product/System/Policy semantics, mutable implementation inventories, incidental paths, versions, ports, migration numbers or temporary project state.

## 10. Deterministic guard boundary

Prefer one existing canonical deterministic guard over parallel guard systems.

A guard may assert only mechanically provable relationships or forbidden states. It is evidence, never semantic authority.

Do not encode semantic correctness as brittle prose matching. Exact wording may be guarded only when wording itself is the contract.

Add or expand a guard only for a material defect class that is deterministically detectable and has proven current value.

## 11. Minimalism and survival

Every file, layer, registry, schema, verifier, workflow, abstraction or rule must prove a unique current responsibility that cannot be owned more simply by an existing mechanism.

```text
NO UNIQUE CURRENT RESPONSIBILITY → DELETE / DO NOT ADD
SAME OUTCOME WITH FEWER AUTHORITIES OR LAYERS → USE THE SIMPLER MODEL
FUTURE POSSIBILITY ALONE → NOT A JUSTIFICATION
```

Do not create a master handbook, shadow standards registry, policy engine or second verifier merely to restate existing owners.

## 12. Cross-repository consumption

Where durable governance is consumed across repositories, bind the consumer to an exact immutable governance state.

A moving governance branch must not silently change an already-bound implementation state. Repin deliberately only when the authorized outcome requires the newer durable meaning.

A binding manifest is provenance, not a second knowledge registry.

## 13. Current-material closure

“100% current material closure” means complete treatment of the exact authorized material cone with zero known material defect. It is not a claim of permanent infallibility or permanent finality.

Closure requires, as applicable:

```text
PROJECT_SPECIFIC_DURABLE_MEANING_ACCOUNTED=1
DUPLICATE_OR_AMBIGUOUS_DURABLE_AUTHORITY=0
UNOWNED_DURABLE_MEANING=0
DISCOVERABLE_IMPLEMENTATION_STATE_AS_GOVERNANCE=0
HISTORICAL_OR_CUTOVER_STATE_AS_CURRENT_GOVERNANCE=0
STALE_REQUIRED_EXTERNAL_EVIDENCE=0
KNOWN_GOVERNANCE_IMPLEMENTATION_CONTRADICTIONS=0
KNOWN_SILENT_GOVERNANCE_DRIFT=0
DECISION_CRITICAL_UNKNOWNS=0
UNJUSTIFIED_GOVERNANCE_COMPLEXITY_OR_RESIDUE=0
INVALIDATED_REQUIRED_EVIDENCE=0
```

A refoundation or material governance change closes only when the resulting exact state is proven against this standard. The existence of this file alone is never that proof.
