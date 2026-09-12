# BThwani Knowledge Repository Agent Contract

ARTIFACT_CLASS: AGENT_OPERATING_SAFETY_CONTRACT
SEMANTIC_AUTHORITY: NONE
PRODUCT_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

## Canonical working branch

`main` is the only authorized working branch for this repository.

- Every Governance/Docs read used for a material decision MUST pin and read branch `main` (or an exact commit proven to be the current HEAD of `main`).
- Every mutation, commit, push, verification and closure action in `bthwani2-boop/governance-and-docs` MUST target branch `main` only.
- Every branch other than `main` is out of scope and MUST NOT be edited, moved, merged, synchronized, used as a substitute authority or used as the source of current Governance/Docs truth.
- Before every material write, re-read the live remote HEAD of `main`; if it moved, rebase the decision on the new exact HEAD before writing.
- Any instruction or tool default that would target a non-`main` branch MUST be overridden explicitly with branch `main`.

## Repository boundary

This repository owns only durable Governance and non-authoritative Docs/reference material. It does not own executable implementation/configuration/runtime state.

## Before editing

1. Pin the exact remote HEAD of branch `main`.
2. Read `governance/GOVERNANCE.md` and the single applicable semantic owner from that same pinned `main` HEAD.
3. Inspect current evidence before assuming an existing rule still applies.
4. Treat donor/history/standards/open-source/external systems as evidence, never automatic authority.
5. If exact-current evidence proves Governance stale, contradictory, incomplete or wrong, correct the canonical owner; do not preserve a known error because it is documented.
6. Preserve one editable semantic owner per material meaning and keep current implementation inventories out of Governance/Docs.

## Forbidden

- Do not mutate, move, merge into or otherwise use any non-`main` branch for Governance/Docs work.
- Do not add a durable execution state machine, campaign ledger or numbered lifecycle.
- Do not create a second semantic owner, duplicate handbook or shadow policy.
- Do not copy executable implementation into this repository.
- Do not promote reference popularity/rank/existence into an adoption decision.
- Do not claim implementation/runtime correctness from documentation alone.

When Docs mention mutable commands, paths, versions, platform requirements or provider behavior, verify them against the exact implementation candidate or current official source as applicable.
