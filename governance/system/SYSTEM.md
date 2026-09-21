# BThwani System Ownership and Boundaries

ARTIFACT_CLASS: DURABLE_SYSTEM_GOVERNANCE
SEMANTIC_OWNER: governance/system/SYSTEM.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Bounded owners

```text
Identity
→ Human Actor identity
→ verified identifiers
→ credentials
→ high-level role admission
→ authentication / sessions

DSH
→ delivery-commerce operational truth
→ Partner / Store / joining
→ catalog / assortment / serviceability
→ cart / checkout / Store Order
→ fulfillment mode
→ Store-Captain membership
→ Store-scoped access grants / bounded delegated permissions
→ dispatch / custody / delivery / customer pickup
→ order-scoped conversation / feedback
→ promotion eligibility and discovery-content publication
→ operational tracking / exception state

WLT
→ all internal financial truth
→ payment intent / customer payment allocation
→ internal customer balance / funding
→ COD exposure / risk holds
→ cash receivable / remittance
→ fees / commissions / earnings
→ refunds
→ payout / settlement / reconciliation
```

A service existing in source does not automatically admit Product breadth; Product admission is owned by `governance/product/PRODUCT.md`.

## Adapter boundary

Media storage/delivery and notification delivery may use bounded technical adapters. An adapter owns transport/provider mechanics only.

DSH remains owner of media relationships, publication eligibility, order conversation/message meaning, notification intent/read state and discovery-content semantics. A provider/device delivery adapter never becomes a semantic owner.

External financial providers are rails around WLT-owned financial truth and never become internal ledger owners.

## Surface boundary

Actor-facing Client, Partner, Captain, Field and Operator surfaces are presentation/composition hosts. A host never becomes canonical owner because it renders or invokes a fact. Exact deployable host names and repository paths remain implementation truth.

## Canonical writer/readback law

```text
ONE MUTABLE FACT
→ ONE CANONICAL OWNER
→ ONE GOVERNED WRITER
→ ONE CANONICAL READBACK
```

Caches, search, analytics, local state, generated clients and projections are derived.

## Canonical identity evolution law

Canonical identity is semantic, not incidental. A durable identifier retains one stable meaning across evolution. Later relationships, classifications or capabilities may be added around an existing identity but must not silently redefine historical identity meaning.

If a necessary evolution would change identity semantics, ownership or historical interpretation, perform an explicit governed migration/cutover with affected contracts, data and consumers. Compatibility-by-reinterpretation is noncanonical.

## Cross-boundary contracts

Each service-owned public/internal contract has one executable provenance. Generated clients/types are derived and regenerated; they are never hand-maintained competing authority.

Cross-service identifiers use canonical owner identities such as `actor_id`, not duplicate human/Partner identifiers.

Cross-owner effects are not atomic merely because one service calls another synchronously.

```text
CANONICAL OWNER TRANSITION
→ durable bounded handoff
→ idempotent receiving-owner treatment
→ canonical receiving-owner readback
→ reconciliation of unknown/partial outcomes
```

The exact handoff mechanism is implementation-owned, but an unknown distributed outcome must never be hidden as local success or blindly retried with a different logical identity.

## Data ownership

Each bounded owner owns its durable persistence and migration history. Another service may store a bounded reference/projection but cannot write the owner fact as parallel truth.

## Runtime/configuration

Governance owns durable runtime invariants only:
- one canonical runtime owner per process/state in an environment;
- no parallel shadow runtime for the same responsibility;
- secrets remain outside source;
- readiness means required dependencies/config/state are actually usable, not merely configured;
- recovery procedures prove canonical readback.

Exact ports, commands, package versions, containers and environment-specific composition belong to executable source/config.

## Repository boundary

Repository placement is an implementation concern owned by the consuming repository's operating/placement contract. Governance defines semantic responsibilities; it does not mirror current directories or packages.
