# BThwani Knowledge Repository Agent Routing

ARTIFACT_CLASS: DERIVED_AGENT_ROUTING
SEMANTIC_AUTHORITY: NONE
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE

## Repository boundary

This repository owns only:

- `governance/` — durable BThwani Product/System/architecture/policy meaning.
- `docs/` — human development and operations guidance.

It does not own executable implementation/configuration/runtime state or execution/closure law.

## Before editing

1. Read `governance/GOVERNANCE.md`.
2. Identify the single semantic owner for the durable meaning being changed.
3. Read `docs/README.md` when changing human guidance.
4. Preserve one editable owner per material meaning.
5. Treat implementation repositories, donor history, standards and external systems as evidence, not automatic semantic authority.

## Forbidden

- Do not add an Orchestrator or execution state machine here.
- Do not add branch/session/campaign state.
- Do not add current route/table/package/version inventories as Governance authority.
- Do not create a second semantic owner, duplicate handbook or shadow policy.
- Do not copy executable implementation into this repository.
- Do not claim implementation/runtime correctness from documentation alone.

When Docs describe mutable implementation commands or paths, verify them against the exact implementation candidate being documented and keep executable source authoritative.
