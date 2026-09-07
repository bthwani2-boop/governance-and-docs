# BThwani Governance and Docs

This repository is the canonical home of BThwani durable Governance and human development/operations documentation.

## Authority boundary

- `governance/` owns durable Product/System/architecture/policy meaning.
- `docs/` owns human development and operational guidance.
- Executable implementation/configuration/runtime truth remains in the consuming implementation repository.
- Execution, mutation, recovery, evidence and closure law remain in that implementation repository's Orchestrator.

The BThwani Orchestrator is intentionally **not** hosted here.

## Consumption contract

Implementation repositories consume this repository only through an **exact immutable 40-character commit SHA** recorded in their tracked knowledge pin. A branch name such as `main`, a tag, or "latest" is not an implementation authority.

No consuming repository may maintain a second tracked copy of `governance/` or `docs/`.

## Structure

- `governance/GOVERNANCE.md` — canonical Governance router.
- `docs/README.md` — canonical human documentation router.

Git history is the archive for superseded material.
