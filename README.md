# BThwani Governance and Docs

Canonical durable Governance and human development/operations guidance for BThwani.

## Authority boundary

- `governance/` — current durable Product/System/architecture/policy decision baseline.
- `docs/` — human/agent methodology, development, release and operational guidance.
- executable implementation/configuration/runtime truth remains in consuming implementation repositories.
- current human authorization defines the objective and permitted mutation scope.
- repository-local `AGENTS.md` defines concise agent operating/safety constraints; machine safeguards enforce critical boundaries.
- donor/history/open-source/standards/external systems are evidence and falsification inputs only.

Governance is authoritative within its durable semantic scope while applicable, but it is not infallible, not current implementation state and not an implementation recipe. When exact-current evidence proves Governance stale, contradictory, incomplete or wrong, correct the canonical owner instead of encoding a silent contradiction in source.

Implementation repositories consume this repository only through an exact immutable commit SHA. Floating branch/tag/latest references and tracked local mirrors are not authority.

## Entry points

- `governance/GOVERNANCE.md`
- `docs/README.md`

This repository intentionally contains no execution state machine and no live ADR or numbered lifecycle-stage tree. Git history is the archive for superseded rationale.
