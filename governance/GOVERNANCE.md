# BThwani Governance

ARTIFACT_CLASS: DURABLE_GOVERNANCE_INDEX
SEMANTIC_OWNER: governance/GOVERNANCE.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## 1. Authority boundary

Governance contains only durable BThwani Product/System/architecture/policy meaning.

~~~text
HUMAN AUTHORIZATION = CURRENT OBJECTIVE + PERMITTED MUTATION SCOPE
GOVERNANCE          = CURRENT DURABLE DECISION BASELINE
SOURCE/RUNTIME      = CURRENT EXECUTABLE IMPLEMENTATION / CONFIGURATION / STATE
AGENTS.md           = REPOSITORY-LOCAL OPERATING / SAFETY CONTRACT
DOCS                = METHOD / DEVELOPMENT / OPERATIONS GUIDANCE
REFERENCES/HISTORY  = EVIDENCE / FALSIFICATION INPUT
~~~

Governance is authoritative within its durable semantic scope while applicable, but it is not infallible, not current implementation state and not an implementation recipe. Governance does not own branch/session state, current route/table/config inventories, CI status, runtime health, execution order or candidate closure.

## 2. Falsifiability and correction

Before a material implementation decision relies on Governance, test the applicable owner against the current human objective, exact source/runtime state, current official external constraints where relevant, and material evidence.

~~~text
DOCUMENTED != INFALLIBLE
CURRENT CODE != AUTOMATICALLY CORRECT
REFERENCE != AUTHORITY
CONFLICT → DIAGNOSE → CORRECT THE WRONG OWNER
~~~

Do not reject a durable rule merely because current code violates it. Determine which side is wrong. If Governance is stale, contradictory, incomplete or wrong, correct its canonical owner rather than creating an implementation-only exception.

## 3. One-source law

~~~text
ONE MATERIAL MEANING        → ONE EDITABLE SEMANTIC OWNER
ONE MATERIAL MUTABLE FACT   → ONE CANONICAL WRITER
ONE CROSS-BOUNDARY CONTRACT → ONE EXECUTABLE PROVENANCE
INDEX / ROUTER              → ROUTING ONLY
DERIVED VIEW / QUERY        → NON-AUTHORITATIVE
HISTORICAL RATIONALE        → GIT HISTORY
~~~

Agreement between duplicate rules does not make duplication acceptable.

## 4. Project model

- `project/PLATFORM.md`
- `project/GLOSSARY.md`
- `project/ACTORS-TRUST-AND-SCOPE.md`

## 5. Product model

- `product/PRD.md` — product-level definition, non-goals and cross-product requirements.
- `product/CAPABILITIES.md` — capability schema, admission law and routing only.
- `product/capabilities/**/*.md` — exactly one editable owner file per capability.
- `product/JOURNEYS.md` — cross-capability journey meaning.
- `product/FINANCIAL-MODEL.md`
- `product/COMMERCIAL-AND-PARTNER-MODEL.md`
- `product/EXPERIENCE-AND-DESIGN.md`

## 6. Architecture model

- `architecture/SYSTEM-CONTEXT.md`
- `architecture/OWNERSHIP-AND-SOURCE-OF-TRUTH.md`
- `architecture/REPOSITORY-TOPOLOGY.md`
- `architecture/APP-SERVICE-COMPOSITION.md`
- `architecture/DATA-CONTRACTS-AND-INTEGRATIONS.md`
- `architecture/RUNTIME-AND-CONFIGURATION.md`
- `architecture/PLATFORM-SUBSTRATE.md`

## 7. Engineering policies

- `policies/engineering.md`
- `policies/architecture-and-fullstack.md`
- `policies/data-and-migrations.md`
- `policies/frontend-and-client.md`
- `policies/providers-and-integrations.md`
- `policies/runtime-reliability.md`
- `policies/security.md`
- `policies/standards-and-quality.md`
- `policies/tooling-and-assurance.md`
- `policies/documentation-and-knowledge.md`
- `policies/delivery.md` + `policies/delivery/*.md`

## 8. No live ADR tree

Durable current rules live in their current semantic owner. Historical decision rationale is preserved by Git history rather than a second live ADR hierarchy.

## 9. Current-state exclusion

Do not hand-maintain in Governance current routes/endpoints, tables/columns/migrations, generated-client inventories, current package/runtime versions unless a durable policy requires a range/class, branch/session state, CI/run status, or current provider health/config values.

Executable source/runtime is authoritative for those facts.

## 10. Semantic completeness

Every material responsibility has exactly one durable disposition:

~~~text
CAPABILITY
SUBCAPABILITY OF NAMED OWNER
DURABLE POLICY
TECHNICAL MECHANISM OWNED ELSEWHERE
DERIVED PROJECTION / READ MODEL
EXPLICIT NON-GOAL
~~~

A folder, donor artifact, route, screen, provider or table does not automatically earn capability or service status.

## 11. Reconstruction acceptance

Governance is adequate only when a qualified developer or agent can determine the platform purpose/surfaces/actors/trust model, canonical owners/writers/readback, admitted capabilities/journeys, financial/security/privacy invariants, app/service/data/contract/provider boundaries, experience requirements, and runtime/reliability/quality/delivery policy without reverse-engineering accidental repository structure.

~~~text
UNACCOUNTED_MATERIAL_PRODUCT_RESPONSIBILITIES=0
UNOWNED_DURABLE_FACTS=0
UNMAPPED_REQUIRED_ACTORS/JOURNEYS=0
UNMAPPED_REQUIRED_FAILURE/RECOVERY_SEMANTICS=0
UNMAPPED_REQUIRED_SECURITY/PRIVACY/FINANCIAL_INVARIANTS=0
DUPLICATE_DURABLE_MEANING_AUTHORITIES=0
IMPLEMENTATION_INVENTORY_AS_GOVERNANCE_AUTHORITY=0
~~~

When history/donor/current evidence reveals still-required meaning that current owners do not represent, Governance is incomplete until the meaning is deliberately owned, superseded or rejected with reason.

## 12. Change/survival law

A Governance artifact survives only if it owns unique current durable meaning and is not better represented by another owner or executable source.

~~~text
REQUIRED CURRENT DURABLE MEANING
+ UNIQUE RESPONSIBILITY
+ CORRECT OWNER
+ NO PARALLEL AUTHORITY
+ NO HISTORICAL/SESSION RESIDUE
= SURVIVES
~~~

Otherwise delete it. Git is the archive.
