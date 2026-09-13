# BThwani Governance

ARTIFACT_CLASS: DURABLE_GOVERNANCE_INDEX
SEMANTIC_OWNER: governance/GOVERNANCE.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Authority boundary

Governance contains only current durable BThwani Product/System/Policy meaning.

```text
HUMAN AUTHORIZATION = current objective and mutation authority
SOURCE / RUNTIME    = current executable truth
GOVERNANCE          = current durable decision baseline
DOCS                = non-authoritative working guidance
REFERENCES          = evidence and falsification input
GIT                 = historical rationale
```

Governance is authoritative within the applicable durable semantic owner and challengeable by stronger fact-specific evidence. If stale, contradictory, incomplete or wrong, correct the canonical owner rather than creating an implementation-only exception.

## Canonical owner tree

```text
governance/
├── platform/PLATFORM.md
├── product/
│   ├── PRODUCT.md
│   ├── JOURNEYS.md
│   └── capabilities/**
├── system/SYSTEM.md
└── policy/
    ├── SECURITY.md
    ├── DATA.md
    ├── FINANCE.md
    ├── RELIABILITY.md
    ├── EXPERIENCE.md
    ├── QUALITY.md
    ├── DELIVERY.md
    ├── INTEGRATIONS.md
    └── KNOWLEDGE.md
```

## Placement law

- `platform` answers: what is BThwani, who participates, and what trust/terms are canonical?
- `product` answers: what current user/business outcomes and capabilities are admitted?
- `system` answers: which bounded owner owns each durable fact and how boundaries compose?
- `policy` answers: which cross-cutting invariants apply across multiple owners?
- `docs` explains how humans/agents work; it owns no Product/System truth.
- `docs/reference` routes external evidence; reference existence never grants adoption authority.

If a fact cannot be placed without ambiguity, diagnose the owner split. Do not duplicate it.

## One-source law

```text
ONE MATERIAL MEANING        → ONE EDITABLE SEMANTIC OWNER
ONE MATERIAL MUTABLE FACT   → ONE CANONICAL WRITER
ONE CROSS-BOUNDARY CONTRACT → ONE EXECUTABLE PROVENANCE
INDEX / ROUTER              → ROUTING ONLY
DERIVED VIEW                → NON-AUTHORITATIVE
HISTORICAL RATIONALE        → GIT HISTORY
```

## Survival law

A Governance artifact survives only when it owns unique current durable meaning that is not better represented by another owner or executable source.

```text
CURRENT DURABLE NEED
+ UNIQUE RESPONSIBILITY
+ CORRECT OWNER
+ NO PARALLEL AUTHORITY
+ NO HISTORICAL / FUTURE RESIDUE
= SURVIVES
```

Otherwise delete, merge, or rehome it. Git is the archive.
