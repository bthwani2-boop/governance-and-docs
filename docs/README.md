# BThwani Human Documentation

DOCUMENT_CLASS: HUMAN_DOCUMENTATION_INDEX
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
CURRENT_COMMAND_TRUTH_SOURCE: CONSUMING_REPOSITORY_SOURCE_AND_SCRIPTS

## Purpose and authority

Docs explain methods, development, verification, release and operations. They are guidance, not Product truth, current implementation state or a mechanical recipe.

~~~text
HUMAN AUTHORIZATION = CURRENT OBJECTIVE + PERMITTED MUTATION SCOPE
GOVERNANCE          = CURRENT DURABLE DECISION BASELINE
SOURCE/RUNTIME      = CURRENT IMPLEMENTATION TRUTH
AGENTS.md           = REPOSITORY-LOCAL OPERATING / SAFETY CONTRACT
DOCS                = METHOD / DEVELOPMENT / OPERATIONS GUIDANCE
REFERENCES          = EVIDENCE / FALSIFICATION INPUT
~~~

Governance must be considered but not obeyed mechanically. When exact-current evidence proves a durable rule stale, contradictory, incomplete or wrong, correct the canonical owner rather than encoding a silent exception.

## Start here

1. `governance/GOVERNANCE.md`
2. `method/diagnosis-and-decision.md`
3. load only materially applicable Governance/Docs/reference owners.
4. inspect exact source/config/runtime before deciding.

Use source-derived lookup from the consuming repository with `pnpm knowledge:query -- ...`.

## Method

- `method/diagnosis-and-decision.md`
- `method/change-and-reconstruction.md`
- `method/verification-and-evidence.md`

These are methods, not a mandatory state machine. Use only the parts that materially improve the current decision.

## Development guides

- `development/workflow.md`
- `development/backend.md`
- `development/frontend.md`
- `development/design-system.md`
- `development/mobile.md`
- `development/runtime.md`
- `development/observability.md`
- `development/quality.md`
- `development/release.md`

## Operational runbooks

- `runbooks/identity.md`
- `runbooks/platform-recovery.md`

## Reference evidence

- `reference/donor.md`
- `reference/commerce.md`
- `reference/finance.md`
- `reference/identity.md`
- `reference/engineering.md`
- `reference/experience.md`

Reference popularity, ranking or existence never authorizes adoption. Revalidate mutable license/version/security/platform/provider facts at use time.

## Semantic-parity and staleness law

~~~text
REQUIRED_DEVELOPMENT_GUIDANCE_LOST=0
REQUIRED_OPERATIONAL_GUIDANCE_LOST=0
STALE_COMMAND_OR_PATH_AUTHORITY=0
DOCS_PARALLEL_PRODUCT_CONTRACT_DATA_AUTHORITY=0
MANDATORY_EXECUTION_STATE_MACHINE=0
MECHANICAL_KNOWLEDGE_IMPLEMENTATION=0
~~~
