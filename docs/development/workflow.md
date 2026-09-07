# Developer Workflow

DOCUMENT_CLASS: HUMAN_DEVELOPMENT_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
CURRENT_COMMAND_TRUTH_SOURCE: package.json / pnpm-workspace.yaml / repository scripts
CURRENT_IMPLEMENTATION_TRUTH_SOURCE: LIVE_REPOSITORY_SOURCE_AND_RUNTIME

## Start

Before a material change:

1. read the consuming repository's `AGENTS.md`;
2. resolve the exact knowledge pin and load only applicable Governance owners;
3. resolve capability/journey/owner with `pnpm knowledge:query -- ...`;
4. inspect exact repository HEAD, executable source/history/runtime and affected cone;
5. classify environment and operation authority before any mutation.

Implementation-repository orientation:

~~~text
apps/       → deployable hosts/composition
services/   → bounded-context implementations
packages/   → proven reusable technical packages
contracts/  → genuinely cross-service protocol material only
infra/      → environment/deployment composition
tools/      → automation, evidence and machine safeguards
governance.lock.json → exact immutable Governance/Docs pin
~~~

Logical `governance/**` and `docs/**` paths come from the pinned knowledge commit, not tracked local copies.

## Install and command truth

Use repository-declared versions and scripts. Current pinned versions are verified against executable files by CI; this guide must not become an independent version registry.

~~~powershell
pnpm install --frozen-lockfile
pnpm bootstrap
pnpm knowledge:sync
~~~

Primary host/verification entrypoints are resolved from current `package.json`. Common current roots include:

~~~powershell
pnpm client
pnpm partner
pnpm captain
pnpm field
pnpm control
pnpm workspace:verify
pnpm mobile:verify-config
pnpm docs:verify:all
pnpm knowledge:verify:all
pnpm runtime:integration:close
~~~

After a coherent verified working-branch unit, use the repository safe-push entrypoint when applicable rather than bypassing repository interlocks.

## Representative real vertical

The first material Product change should falsify the shared foundation, not merely prove a toy route:

~~~text
PRODUCT/JOURNEY REQUIREMENT
→ AUTHORIZATION
→ DOMAIN OWNER
→ DATA/MIGRATION
→ CANONICAL CONTRACT
→ GENERATED/BOUND CLIENT
→ REAL REQUIRED SURFACE
→ RUNTIME
→ PERSISTED/EXTERNAL EFFECT
→ CANONICAL READBACK
→ FAILURE/NEGATIVE CASE
~~~

Use only materially applicable links. A health endpoint, placeholder screen or empty container does not prove journey readiness.

## Active-slice discipline

Incremental delivery means small Product breadth on final canonical ownership, not temporary architecture.

~~~text
TARGET_PRODUCT_VISION != AUTHORIZED_PRODUCT_SCOPE
AUTHORIZED_PRODUCT_SCOPE != CURRENT_IMPLEMENTATION_STATE
SMALL_BREADTH != TEMPORARY_ARCHITECTURE
~~~

Do not introduce `simple_*`, `*_v1`, bootstrap business models, fake routes/tables, shadow DTOs, temporary state machines, placeholder Product screens or speculative abstractions.

When the active slice reaches its fixed point, stop Product expansion until a new slice is deliberately authorized.

## Parallel work

Parallel implementation is valid only for explicitly separable worksets. Shared owner/data/contract/runtime changes invalidate affected prior evidence.

~~~text
PARALLEL_WORK != BACKEND_WAVE_THEN_FRONTEND_WAVE
CLAIMED_OUTCOME → INTEGRATED_VERTICAL_READBACK
~~~

## Evidence and cleanup

Evidence belongs to the exact candidate and claim. Static/runtime/security/data/financial/visual/release evidence are not interchangeable.

After cutover, remove losing writers/readers, aliases, stale generated/config paths, obsolete tests and temporary rollout mechanisms. Git history is the archive.

## Donor/reference use

Inspect only donor/reference material capable of changing the authorized slice's semantics, ownership, failure/recovery, UX or tests. Extract required value; never import donor topology or adjacent Product breadth merely because history contained it.

LeanCTX or equivalent context-reduction tools are optional local aids only and never repository/Product/architecture authority.
