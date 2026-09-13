# BThwani System Ownership and Boundaries

ARTIFACT_CLASS: DURABLE_SYSTEM_GOVERNANCE
SEMANTIC_OWNER: governance/system/SYSTEM.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Bounded owners

```text
Identity
→ Human Actor identity, verified identifiers, credentials, high-level role admission, authentication and sessions

DSH
→ current delivery-commerce operational truth:
  Partner joining / Partner / Store / catalog / serviceability / cart / order / dispatch / custody / delivery

WLT
→ financial truth when a financial Product capability is explicitly admitted
```

A service existing in source does not automatically admit Product breadth.

## Surface boundary

`app-client`, `app-partner`, `app-captain`, `app-field`, and `control-panel` are deployable presentation/composition hosts. A host never becomes canonical owner because it renders or invokes a fact.

## Canonical writer/readback law

```text
ONE MUTABLE FACT
→ ONE CANONICAL OWNER
→ ONE GOVERNED WRITER
→ ONE CANONICAL READBACK
```

Caches, search, analytics, local state, generated clients and projections are derived.

## Cross-boundary contracts

Each service-owned public/internal contract has one executable provenance. Generated clients/types are derived and regenerated; they are never hand-maintained competing authority.

Cross-service identifiers use canonical owner identities such as `actor_id`, not duplicate human/Partner identifiers.

## Data ownership

Each bounded owner owns its durable persistence and migration history. Another service may store a bounded reference/projection but cannot write the owner fact as parallel truth.

Cross-owner changes require explicit handoff/idempotency/reconciliation semantics. Distributed transaction uncertainty must be represented and reconciled, never hidden as local success.

## Runtime/configuration

Governance owns durable runtime invariants only:
- one canonical runtime owner per process/state in an environment;
- no parallel shadow runtime for the same responsibility;
- secrets remain outside source;
- readiness means required dependencies/config/state are actually usable, not merely configured;
- recovery procedures prove canonical readback.

Exact ports, commands, package versions, containers and environment-specific composition belong to executable source/config and must not be copied here as current truth.

## Repository boundary

Repository placement is an implementation concern owned by the consuming repository's operating/placement contract. Governance defines semantic responsibilities; it does not mirror current directories or packages.
