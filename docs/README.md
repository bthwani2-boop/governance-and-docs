# BThwani Human Documentation

DOCUMENT_CLASS: HUMAN_DOCUMENTATION_INDEX
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
CURRENT_COMMAND_TRUTH_SOURCE: CONSUMING_REPOSITORY_SOURCE_AND_SCRIPTS

## Purpose and authority

Docs explain how humans develop, verify, release and operate BThwani. They do not define Product/domain meaning, current implementation state or execution/closure law.

~~~text
GOVERNANCE = DURABLE MEANING / POLICY
DOCS = HUMAN GUIDANCE
SOURCE/RUNTIME = CURRENT IMPLEMENTATION TRUTH
ORCHESTRATOR = EXECUTION / RECOVERY / EVIDENCE / CLOSURE
~~~

In an implementation repository, logical `governance/**` and `docs/**` paths resolve from the exact immutable knowledge commit pinned by that repository. A floating branch/tag/latest reference or tracked local mirror is not authority.

When a command/path/configuration statement conflicts with executable source, source wins and Docs must be corrected.

## Start here

1. `governance/GOVERNANCE.md`
2. `governance/project/PLATFORM.md`
3. `governance/project/ACTORS-TRUST-AND-SCOPE.md`
4. `governance/product/PRD.md`
5. `governance/architecture/OWNERSHIP-AND-SOURCE-OF-TRUTH.md`
6. one focused guide below.

Use source-derived semantic lookup from the consuming repository:

~~~text
pnpm knowledge:query -- capability <CAPABILITY_ID>
pnpm knowledge:query -- journey <J_ID>
pnpm knowledge:query -- owner <keyword-or-path>
~~~

## Development guides

Load only the guide capable of changing the current engineering decision:

- `development/workflow.md` — setup, exact-head workflow, representative vertical, active-slice and evidence discipline.
- `development/backend.md` — service/domain/contract/data work.
- `development/frontend.md` — app-host composition, routing and client state.
- `development/design-system.md` — reusable tokens/primitives, RTL/accessibility and extraction.
- `development/mobile.md` — mobile runtime/device/EAS workflow.
- `development/runtime.md` — runtime/configuration/secrets/providers.
- `development/observability.md` — diagnostics, telemetry and Sentry.
- `development/quality.md` — testing, interactive verification, real-device risk matrix and assurance.
- `development/release.md` — candidate attribution, compatibility, stores, readiness and rollout.

Do not recreate a numbered lifecycle handbook. The useful lifecycle atoms live in their focused owner above or in Governance.

## Operational runbooks

Only executable/currently supportable operational areas get a runbook:

- `runbooks/identity.md` — Identity diagnosis/recovery.
- `runbooks/platform-recovery.md` — cross-cutting runtime/data/contract/security recovery.

Runbooks use governed interfaces, preserve canonical ownership, distinguish unknown from success/failure, avoid secrets/PII, and verify canonical readback. They never invent Production authority or direct-table repair as a normal path.

Future domain runbooks are added only after the corresponding executable responsibility exists.

## Reference evidence

Reference files are non-authoritative falsification aids:

- `reference/donor.md` — donor/refoundation forensic patterns and superseded shapes.
- `reference/commerce.md` — commerce/marketplace/fulfillment references.
- `reference/finance.md` — ledger/payment/reconciliation references.
- `reference/identity.md` — identity/authorization/control references.
- `reference/engineering.md` — contracts/runtime/testing/observability/supply-chain references.
- `reference/experience.md` — accessibility/design-system/UI assurance references.

Reference popularity, ranking or existence never authorizes adoption. Mutable license/version/security/platform facts are revalidated at use time.

## Semantic-parity and staleness law

When old Docs are merged/renamed/deleted, preserve still-required semantic/operational value, not filenames. Historical branch/campaign state, obsolete machine paths, retired commands, mutable platform snapshots and losing donor topology do not survive as current guidance.

~~~text
REQUIRED_DEVELOPMENT_GUIDANCE_LOST=0
REQUIRED_OPERATIONAL_GUIDANCE_LOST=0
STALE_COMMAND_OR_PATH_AUTHORITY=0
DOCS_PARALLEL_PRODUCT_CONTRACT_DATA_AUTHORITY=0
NUMBERED_LIFECYCLE_TREE=0
~~~
