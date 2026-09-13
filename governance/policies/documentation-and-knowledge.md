# Documentation and Knowledge-System Policy

ARTIFACT_CLASS: DURABLE_DOCUMENTATION_KNOWLEDGE_POLICY
SEMANTIC_OWNER: governance/policies/documentation-and-knowledge.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Scope

This policy owns durable quality, authority, distillation, compaction, cross-repository consumption and verification rules for Governance, human Docs, reference routing, agent-routing adapters and derived knowledge views.

It does not own Product capabilities or current implementation state. Product meaning remains with canonical semantic owners; current state remains with executable source/runtime. Current human authorization defines the objective and permitted mutation scope, while repository-local `AGENTS.md` supplies concise operating/safety constraints.

## Authority partition

~~~text
HUMAN AUTHORIZATION = CURRENT OBJECTIVE / PERMITTED MUTATION SCOPE
GOVERNANCE          = CURRENT DURABLE DECISION BASELINE
SOURCE/RUNTIME      = CURRENT IMPLEMENTATION / CONFIGURATION / STATE
AGENTS.md           = REPOSITORY-LOCAL OPERATING / SAFETY CONTRACT
DOCS                = NON-NORMATIVE METHOD / DEVELOPMENT / OPERATIONS GUIDANCE
REFERENCES/HISTORY  = EVIDENCE / FALSIFICATION INPUT
~~~

A document may summarize another owner for usability only when the owner remains clear and the summary does not introduce a competing rule.

## Cross-repository canonical consumption

Governance/Docs may live in a dedicated canonical knowledge repository while executable implementation and repository-specific execution law live elsewhere. A consuming implementation repository binds knowledge only through an **exact immutable full commit SHA**.

~~~text
EXACT KNOWLEDGE COMMIT SHA = ADMISSIBLE
FLOATING BRANCH/TAG/LATEST = NOT AUTHORITY
TRACKED LOCAL GOVERNANCE/DOCS MIRROR = FORBIDDEN
IGNORED EXACT-SHA MATERIALIZATION/CACHE = DERIVED ONLY
~~~

The consuming repository must expose the exact pin, prove that the pinned commit and entrypoints exist, and verify that any local materialization resolves to that exact commit before using it as semantic evidence. Moving `main` in the knowledge repository must never silently change the Governance/Docs governing an already-pinned implementation candidate.

`main` represents the latest canonical durable knowledge; the exact consumer pin represents the knowledge candidate intentionally bound to that implementation candidate. Repinning is deliberate. A material Governance correction must repin an affected consumer when the currently authorized implementation outcome depends on that correction; unrelated consumers are not mutated merely to chase latest.

A consumer binding manifest is provenance, not a second knowledge system. It should contain only the minimum immutable provenance required to materialize and verify the canonical knowledge source. Curated external-reference catalogs, reference indexes, donor summaries and durable Governance/Docs meaning belong in this repository and MUST NOT be hand-maintained again in a consuming repository.

Cross-repository separation changes location only. Executable source/runtime remains current implementation authority. The consuming repository keeps its concise `AGENTS.md` operating/safety contract and machine-enforced safeguards locally.

## Canonical-source, compaction and size discipline

Every material meaning has one editable canonical source. Indexes, routing adapters, Docs and generated views may point to that source but may not maintain a second normative copy. Historical rationale belongs in Git history rather than a parallel live rule tree.

~~~text
ONE MATERIAL MEANING → ONE EDITABLE CANONICAL OWNER
INDEX/ROUTER → ROUTING ONLY
HISTORICAL RATIONALE → GIT HISTORY
DOCS → GUIDANCE ONLY
DERIVED QUERY/INDEX → REGENERATED OR SOURCE-DERIVED
~~~

New knowledge does not default to a new file, registry or abstraction. Prefer correcting the existing owner, merging duplicate meaning, simplifying representation and deleting obsolete residue. Create a new durable owner only when an independently coherent durable responsibility is proven and no existing owner can own it without semantic distortion.

~~~text
MORE EVIDENCE
→ BETTER DISTILLATION
→ LESS DUPLICATION / AMBIGUITY
→ FEWER UNJUSTIFIED ARTIFACTS
→ STRONGER CANONICAL KNOWLEDGE
~~~

Canonical knowledge files must remain small enough for selective loading and coherent ownership. A file above **24,000 bytes** is a structural knowledge defect unless it is split into semantically cohesive owners/submodules before acceptance. Do not evade the limit by arbitrary one-section files or repeated boilerplate; split only on real responsibility boundaries.

~~~text
MAX_CANONICAL_KNOWLEDGE_MARKDOWN_BYTES=24000
GIANT_MULTI_RESPONSIBILITY_KNOWLEDGE_FILES=0
ARBITRARY_FRAGMENTATION=0
~~~

## Governance completeness and continuous correction

Governance is semantically complete when a qualified developer or coding agent can determine, without reverse-engineering accidental implementation structure:

- platform purpose/surfaces/actors/trust model;
- canonical bounded-context ownership;
- durable capability and journey meaning;
- writer/readback authority;
- data/contract/integration boundaries;
- financial ownership/invariants;
- security/privacy boundaries;
- app-host versus service responsibilities;
- UX/RTL/accessibility/design meaning;
- runtime/reliability/provider/delivery/tooling policies.

File count or document size is not completeness.

Every material discovered responsibility receives one durable disposition:

~~~text
DURABLE_CAPABILITY
SUBCAPABILITY
POLICY
TECHNICAL_MECHANISM
DERIVED_PROJECTION
EXPLICIT_NON_GOAL
DEAD/INVALID_WITH_REASON
~~~

Durable responsibilities have exactly one semantic owner.

A known material Governance/Docs defect inside the authorized affected cone is not deferred merely because the immediate implementation can proceed around it. Treat the highest proven knowledge root, preserve required meaning, migrate material references/consumers, and delete the losing shape. If the existing owner split or knowledge topology is itself wrong, restructure it rather than patching prose across multiple wrong owners.

~~~text
KNOWN MATERIAL DEFECT
→ DIAGNOSE ROOT / OWNER
→ PRESERVE REQUIRED DURABLE MEANING
→ REFINE / MERGE / REHOME / SUPERSEDE / REJECT_WITH_REASON
→ UPDATE MATERIAL REFERENCES / VERIFIERS
→ DELETE LOSING SHAPE
→ VERIFY ZERO KNOWN MATERIAL DEFECTS IN THE AFFECTED CONE
~~~

Closure means zero known material knowledge defects for the exact candidate and authorized scope; it is not a claim of permanent infallibility.

## Capability and journey separation

Capabilities own stable problem/outcome/actor/owner/state/action/invariant/failure/acceptance meaning. Journeys compose actor/system steps across capabilities.

~~~text
CAPABILITY != SCREEN
CAPABILITY != ROUTE
CAPABILITY != TECHNICAL PACKAGE
JOURNEY != CAPABILITY REGISTRY
TARGET CAPABILITY/JOURNEY != ACTIVE IMPLEMENTATION STATE
~~~

Every durable capability must be mapped to at least one material journey/system outcome or explicitly justified as a system/administrative responsibility. Every material journey step must resolve to a durable owner or an explicit external/technical mechanism.

## Current-state exclusion

Durable Governance/Docs must not hand-maintain current implementation inventories that executable source can answer more accurately, including:

- live route/operation/table/column lists;
- generated-client inventories;
- CI/run status;
- current provider health;
- current environment values;
- active execution frontier;
- branch/session-specific state.

~~~text
CURRENT STATE → SOURCE/RUNTIME/HISTORY
DURABLE MEANING → GOVERNANCE
~~~

## Docs portability and staleness

Docs are portable human guidance. They must not depend on obsolete machine-local paths, historical branch names, campaign-only instructions or losing donor topology as current authority.

When Docs mention executable commands, paths, ports, environment variables or configuration, verify them against the same repository candidate or clearly label them as historical/reference material.

~~~text
STALE_COMMAND/PATH_GUIDANCE = DEFECT
CAMPAIGN_STATE_IN_DURABLE_DOCS = FORBIDDEN
DOCS_PARALLEL_PRODUCT/CONTRACT/DATA_AUTHORITY = FORBIDDEN
~~~

Historical donor examples may live only in an explicitly non-authoritative reference area and must not masquerade as current implementation guidance.

## Developer reconstruction acceptance

The Docs system is adequate when a new qualified developer can find how to:

- bootstrap the repository/environment;
- navigate repository ownership/topology;
- identify capability/journey/owner;
- add/change app routes and feature presentation;
- develop service/domain behavior;
- evolve database/migrations;
- evolve contracts/generated clients;
- run tests/verification;
- configure runtime/secrets/providers;
- build mobile/control-panel/services;
- use Design System/RTL/accessibility guidance;
- inspect observability/evidence;
- locate runbooks and external references.

Several topics may be coherently routed to one guide. Completeness is semantic, not one-file-per-topic.

## Runbook boundary

Runbooks own diagnosis, containment, recovery and operational procedure. They never:

- bypass canonical state transitions;
- fabricate an unknown external/financial outcome;
- write another service's private data directly merely for recovery convenience;
- redefine Product/security/financial truth;
- become hidden permanent deployment/configuration authority.

A runbook that requires an emergency mechanism must route to an explicitly governed mechanism with audit/reconciliation/recovery semantics.

## Semantic-parity preservation and refoundation

When consolidating, deleting or restructuring old Governance/Docs/agent instructions:

~~~text
CENSUS MATERIAL MEANING
→ MAP EACH ATOM TO CANONICAL OWNER
→ PRESERVE / REFINE / MERGE / REHOME / SUPERSEDE / REJECT_WITH_REASON
→ VERIFY NO REQUIRED MEANING LOST
→ DELETE LOSER
~~~

Filename parity is irrelevant. Required semantic/operational value is what must survive. A later shorter document may replace several old files only when the same still-valid meaning is represented or deliberately superseded.

Known wrong Governance is not retained for historical convenience. Git history is the archive. A moved or renamed defect is still a defect until the old authority/write/read path is removed and the winner is proven.

## Agent operating contract and selective loading

Root/nested agent files may own repository-local operating/safety constraints, but they must not become Product semantic or current-state authorities.

A material task begins with the exact question and apparent owner, then expands through the material knowledge affected cone only while further evidence can change need, owner, boundary, meaning, structure, safety, solution or proof. Reading one file despite a proven wider cone is insufficient; reading the entire repository without decision value is also noncanonical.

Large canonical catalogs may be queried through deterministic source-derived tooling when this reduces context load. Such indexes/query outputs are derived views and must not become editable parallel registries.

Applicable Governance must be considered and challenged against current evidence; skipping it to avoid a constraint is forbidden, but implementing it mechanically without diagnosis is also forbidden.

## Knowledge verification

Knowledge verification should detect relationships and contradictions, not merely required phrases.

Applicable checks include:

~~~text
DUPLICATE_SEMANTIC_OWNER=0
CONTRADICTORY_PLACEMENT_RULES=0
DOCS_NORMATIVE_AUTHORITY=0
AGENT_PRODUCT_SEMANTIC_AUTHORITY=0
GOVERNANCE_EXECUTION_STATE=0
STALE_CURRENT_STATE_IN_DURABLE_DOCS=0
BROKEN_INTERNAL_REFERENCE=0
ORPHANED_REQUIRED_GUIDANCE=0
DUPLICATE_EXTERNAL_REFERENCE_REGISTRY=0
KNOWLEDGE_FALSE_GREEN=0
AGENT_AMBIGUITY=0
~~~

A verifier that passes while a known material contradiction exists is itself defective. When a material defect class is deterministically detectable and recurrence would matter, harden the appropriate verifier in the same coherent change when proportionate.

Prefer structural and relational assertions over incidental prose matching: ownership uniqueness, path/reference validity, capability/journey coverage, forbidden residue, authority boundaries, source derivation and cross-repository exact-pin integrity. Exact phrase assertions are appropriate only when the exact phrase itself is the durable contract being protected.

Verification must not become a second semantic owner. The semantic owner states the rule; the verifier proves machine-detectable conformance.

## External references and research distillation

External/open-source systems, standards and donor material are reference/falsification inputs. They do not become BThwani authority by being documented.

Reference material should state:
- what question it helps answer;
- priority/use mode;
- whether it is reference-only or an adoption candidate;
- revalidation needs for mutable license/security/version/platform terms.

Research should stop when the material question, owner/boundary, invariants, failure/recovery model and decision are adequately proven and further sources cannot materially change them. Do not preserve research transcripts as durable knowledge merely because they were expensive to produce.

~~~text
MUTABLE UPSTREAM FACT
→ REVALIDATE AT USE

PROVEN DURABLE BTHWANI INVARIANT
→ STORE AT ITS CANONICAL BTHWANI OWNER
→ REUSE WITHOUT REPEATING ORIGINAL RESEARCH
→ REOPEN ONLY WHEN DISCONFIRMING EVIDENCE / REQUIREMENT / EXTERNAL CONSTRAINT CAN CHANGE IT
~~~

External-reference catalogs are canonical here. Consumer repositories may materialize or query them from the exact pinned knowledge commit but must not maintain editable duplicate copies.

## Required conformance properties

Knowledge files never self-certify implementation closure. Applicable knowledge-system conformance requires:

~~~text
GOVERNANCE_ENTRYPOINT=PASS
DOCS_ENTRYPOINT=PASS
AGENT_ROUTING_ENTRYPOINT=PASS
ONE_DURABLE_OWNER_PER_MATERIAL_MEANING=PASS
CAPABILITY/JOURNEY_RESPONSIBILITY_COVERAGE=PASS
UNOWNED_MATERIAL_JOURNEY_STEPS=0
MANUAL_IMPLEMENTATION_INVENTORY_AUTHORITY=0
DUPLICATE_DURABLE_MEANING_AUTHORITIES=0
DOCS_PARALLEL_AUTHORITY=0
DUPLICATE_EXTERNAL_REFERENCE_REGISTRY=0
CAMPAIGN_BRANCH_SPECIFIC_RESIDUE=0
STALE_COMMAND/PATH_GUIDANCE=0
REQUIRED_HISTORICAL_SEMANTIC_VALUE_LOST=0
KNOWN_MATERIAL_KNOWLEDGE_DEFECTS=0
KNOWLEDGE_FALSE_GREEN=0
AGENT_AMBIGUITY=0
~~~
