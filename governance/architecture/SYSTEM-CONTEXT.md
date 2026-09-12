# BThwani System Context

ARTIFACT_CLASS: DURABLE_ARCHITECTURE_GOVERNANCE
SEMANTIC_OWNER: governance/architecture/SYSTEM-CONTEXT.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Context

BThwani is one platform composed of deployable hosts, bounded-context services, shared technical packages, executable contracts and infrastructure.

Repository placement/taxonomy is owned by `REPOSITORY-TOPOLOGY.md`; this file owns system/context relationships.

## Dependency direction

```text
DEPLOYABLE APPS/HOSTS
  ↓ compose public capability entrypoints
BOUNDED-CONTEXT SERVICES
  ↓ depend on reusable technical code
TECHNICAL PACKAGES

SERVICE ↔ SERVICE
  only through explicit contracts/events/clients
```

Forbidden:

```text
SERVICE → APP
TECHNICAL PACKAGE → BUSINESS INTERNALS
ROOT CONTRACTS → BUSINESS IMPLEMENTATION
INFRA → BUSINESS SEMANTICS
DESIGN SYSTEM → DOMAIN POLICY
```

## Contexts

Identity, DSH and WLT are the current durable bounded-context responsibilities. Any additional peer service/domain requires an independent Product lifecycle and executable service-admission proof.

## Deployable hosts

Apps own composition: routes, navigation, shell/tabs, deep links, app bootstrap, native/OS adapters, app assets and cross-capability page composition.

`control-panel` is the trusted Operator host. It composes authorized Identity/DSH/WLT/other owner operations but owns none of their durable business/authentication/financial truth merely by displaying or coordinating them.

```text
WHERE_IT_APPEARS != WHO_OWNS_IT
CONTROL_PANEL != DOMAIN_OWNER
```

## External systems

Maps, messaging, object storage, financial rails, billers and observability are external/technical dependencies behind domain-owned semantic boundaries. Vendor names never define BThwani bounded contexts.
