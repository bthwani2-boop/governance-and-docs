# BThwani Slice Execution Planning Contract

DOCUMENT_CLASS: NONAUTHORITATIVE_EXECUTION_PLANNING_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This is the single concise planner/executor handoff guide, not a second agent constitution. The consuming repository's `AGENTS.md` owns execution and safety; pinned canonical Governance owns durable Product/System/Policy meaning; exact source/config/schema/runtime/readback owns implementation state.

## 1. One objective, one bounded slice

A **cross-surface vertical slice** is one independently verifiable business or foundation capability/outcome, including every materially affected surface, actor, canonical owner, API/contract, persistence, event, UX/UI state, security boundary, runtime dependency and relevant Governance owner. It is not one screen, one endpoint, or a mandate to edit every app. Identify shared roots before choosing the slice boundary; combine inseparable behavior instead of generating artificial micro-tasks.

An end-to-end Journey remains a business/integration proof scenario, not the planning, status, implementation or closure unit. E2E proof across connected slices is required before claiming the joined operational outcome complete.

## 2. Minimal human input

```text
REF: <existing implementation branch/ref>
OBJECTIVE: <one materially testable outcome>
DECISIONS: <only task-specific authorized decisions, omit when empty>
```

No duplicated reusable trigger, agent law, journey catalog, long proof list, historical diagnosis or future slice catalog. Scope authority is the current task; do not infer authorization to merge, release, destroy data or alter unrelated branches.

## 3. Bounded discovery and exact ownership

Pin the exact repository/branch/HEAD and current relevant state. Discover all material producer/consumer relations across the implementation repository and its pinned canonical Governance. Resolve the canonical owner, highest causal root, negative space, consequences and required proof. Search broadly for connections; read deeply only where relevant. Widen only when evidence reveals another material dependency.

Classify `GOVERNANCE_IMPACT=NONE | REVALIDATE_ONLY | UPDATE_REQUIRED | DEFECT_FOUND`. For a required durable semantic change, update and merge its owner by the governed path before deliberately repinning the consumer to the exact immutable Governance SHA; do not edit a second shadow policy inside implementation.

For local-development work, record the observed target and data-disposition evidence before any destructive reset: `LOCAL_TARGET=VERIFIED | UNVERIFIED`, `LOCAL_DATA_MODE=CONFIRMED_DISPOSABLE | MUST_PRESERVE | UNKNOWN`, and `RESET_SCOPE=<exact project-owned targets | NONE>`. Local phase, Docker location, or a test/demo label alone does not establish disposability. Proceed non-destructively when disposition is unknown; isolate a provably disposable target or resolve the specific blocker before a reset. Reset only expressly authorized, confirmed-disposable resources; then prove fresh setup and canonical owner readback. The consuming repository's `AGENTS.md` owns data, migration, security and mutation rules.

## 3A. Whole-program coverage and predecessor gate

Before proposing a next slice in a foundational, cross-capability program, construct or refresh **one** compact, evidence-backed coverage map of the *currently admitted* capability universe and its material end-to-end scenarios. Start from `PRODUCT.md`, `CAPABILITIES.md`, `JOURNEYS.md`, the exact implementation ref and the canonical owner readbacks; do not choose among an arbitrary handful of screens, apps or adjacent tasks. This census is a planning input, not a second Product specification, a claim that every capability is missing, or a mandate for repeated whole-repository scans. Reuse the latest proven census; revisit only a change that can alter scope, edges, status or precedence.

For each proposed outcome, trace **all material incoming prerequisites** and the corresponding owning producer, consumer, permitted transition and falsifiable readback. Classify each edge:

- `HARD`: prerequisite without which the next mutation/outcome would violate currently admitted authorization, business meaning, integrity or runtime contracts. **Block implementation** until independently proven.
- `REFERENCE_READY`: the admitted, owner-managed *actual reference values* needed for the target scenario exist, are active/compatible and can be read through their canonical API. **Block that scenario** if absent; a table/API's existence alone is not readiness. Do not require every possible city, category, product or future value.
- `PROGRAM_ORDER`: an expressly selected preparation/validation order useful for this current local delivery program, but not an invariant of the Product or a universal technical dependency. Record it transparently; do not describe it as `HARD`.
- `INTEGRATION_PROOF`: crossing an owner/surface boundary requires its own targeted E2E evidence at the first relevant handoff. It does not by itself mandate early implementation of all downstream capabilities.

Run a backward prerequisite walk from the requested outcome to the first unproven hard or reference-readiness ancestor; also inspect sibling prerequisites of any selected outcome. Verify edge direction against the owning capability and code, detect dependency cycles and unintended transitive blocks, and preserve explicitly independent/parallel work. **Never promote** an illustrative graph, document order, UI navigation order, historical branch sequence, competitor workflow, or numeric slice ID into dependency authority. When a prerequisite is already proven on the same applicable state, reuse it; when only code exists, mark `IMPLEMENTED_UNPROVEN`; when unexamined, mark `UNKNOWN`. Do not create missing work or demand reimplementation by assumption.

Choose the **earliest eligible material outcome** in the current authorized program, bounded to its real owner/writer/readback and affected surfaces. If multiple outcomes are eligible, prefer the one unlocking the nearest blocked agreed business handoff, then the smaller causally coherent proof cone; a human-approved `PROGRAM_ORDER` resolves remaining choices without fabricating hard edges. Where evidence reveals an earlier prerequisite that the provisional map omitted, **stop and correct the map/owner first** rather than proceeding with the later slice. Do not require the entire future roadmap to be simultaneously closed; an independently eligible slice remains eligible even when unrelated later work is open.

The brief next-slice checkpoint must expose:

```text
COVERAGE: admitted capabilities/scenarios included, excluded only with reason
SELECTED_SLICE: one observable outcome, not a screen or a whole domain
HARD_PREDECESSORS: owner, proof/readback, PASS | BLOCKED | UNKNOWN
REFERENCE_READY: exact scenario options and canonical readback, PASS | BLOCKED | N/A
PROGRAM_ORDER: stated preference, not falsely HARD
INTEGRATION_PROOF: first required cross-owner handoff
REMAINING_EARLIER_BLOCKERS: none or exact roots; no silent omission
PREVIOUS_SLICE: exact tested HEAD, closure gates 1–8, outstanding technical remainder, and evidence validity
```

For an authorized sequential local development program, do not begin the next *execution* slice until all applicable technical closure gates of the previous slice are proven on the exact relevant tested state. An operator/user manual acceptance declaration is **not** a prerequisite for local slice progression. Run relevant browser, Android, API, persistence, authorization and regression checks automatically; where automated evidence is genuinely unavailable, report a specific technical `BLOCKED`/`UNPROVEN` claim and stop rather than replace it with verbal acceptance. This rule does not grant authority to bypass repository protections, security gates, reviews, irreversible operations or production approvals. Planning and correcting Governance may proceed while the execution gate is blocked.

## 3B. Causally coherent foundational slice boundaries

A slice may combine multiple owner-managed registries when they form one early operational foundation with shared Operator authorization, cross-surface selectors and a common falsifiable first-business-handoff proof. Do **not** split such a foundation into one slice per database table, Control Panel screen or HTTP route solely for smaller tasks. Equally, do not absorb a downstream actor enrollment, complete sellable Product/Variant lifecycle, Store publication, financial agreement or checkout merely because it reads some foundation data.

For the currently authorized BThwani program, the first post-Operator reference/taxonomy foundation may jointly close canonical Service City, Commerce Vertical, compatible Commercial Store Type, CatalogCategory tree/typed attribute rules/category media, and **only** admission-relevant wallet-provider and fulfillment-mode reference options. These are named, distinct DSH-owned facts with Identity-backed Operator permission boundaries; WLT still owns monetary/payout truth. Treat this as the current program's `PROGRAM_ORDER`, not as a blanket hard prerequisite for the Field role or a mandate to preload every city, category or Product. Validate all participating owners, clients/Field lookup handoffs, mutations, reference options and negative cases on one exact state. If a tested prerequisite is unproven, close its material remainder first.

## 4. Radical closure without rewrite theater

Inside the verified cone, repair causes rather than symptoms. `DELETE / CLEAN / MERGE / RESTRUCTURE / REFOUND / REPLACE` are permitted when necessary: retain sound code; migrate all affected consumers, writers, contracts, configurations, migrations, tests and references before deleting losing paths. Preserve durable data, secrets, safety, authorization, deployable identity and history.

Verify both **positive space** (required behavior/UX/roles/edge cases/handoffs) and **negative space** (obsolete code, conflicting writers, dead endpoints, duplicated rules, stale Governance/docs and unnecessary tooling). A term appearing in history or an immutable migration is not itself evidence for deletion. One canonical owner; no patch-on-patch, speculative abstraction or permanent temporary compatibility.

## 5. Plan only the current material slice

When the objective spans multiple slices, derive a compact dependency order from the live state and record a small checkpoint. Do not pre-generate long future commands; start foundational slices only when a real shared root makes them necessary. Do not re-audit already proven unaffected regions.

```text
SLICE: <id/outcome>
REF: <branch>
BASE_HEAD: <exact sha>
OBJECTIVE: <testable slice outcome>
AFFECTED OWNERS: <only materially affected owners>
LOCAL_TARGET: VERIFIED | UNVERIFIED (current observation)
LOCAL_DATA_MODE: CONFIRMED_DISPOSABLE | MUST_PRESERVE | UNKNOWN (evidenced scope)
RESET_SCOPE: <exact verified, authorized disposable targets | NONE>
CLOSE: <slice-specific acceptance and proof>
DO NOT EXPAND: <known unrelated scope, if any>
RETURN: HEAD | STATUS | CLOSED | LOCAL_TARGET | LOCAL_DATA_MODE | RESET_SCOPE | CLOSURE_GATE_1_TO_8 | VALID_PROOF | REMAINING | BLOCKERS
```

All general execution/safety rules remain in the consuming repository's `AGENTS.md`; do not repeat them in the command.

## 6. Execute, prove, checkpoint

Work from one bounded discovery into implementation. As relevant, prove affected static/unit/API/contract/database/browser/device/runtime behavior, negative cases, cross-surface handoffs and canonical readback. A green static check alone never proves user-visible or cross-owner behavior. Reuse valid evidence and rerun only what an affected change invalidates.

Report `CLOSURE_GATE_1_TO_8` for the applicable slice boundary: `1` causal root; `2` canonical ownership/write/readback; `3` necessary structural repair; `4` obsolete/conflicting-path removal; `5` affected surfaces/handoffs; `6` justified minimum complexity; `7` canonical Governance consistency/correction; `8` falsifiable technical/runtime/data/security proof. For each return `PASS | NOT_APPLICABLE(reason/evidence) | FAIL | UNPROVEN` and one compact claim-specific evidence reference. An applicable `FAIL` or `UNPROVEN` forbids `CLOSED`; return `REMAINDER` or `BLOCKED` with the precise unresolved claim. `NOT_APPLICABLE` must be justified by the actual boundary, not used to waive material proof. These are reporting gates over the existing execution law, not an additional parallel rule system or eight redundant test passes.

```text
HEAD: <exact sha>
SLICE: <id>
STATUS: CLOSED | REMAINDER | BLOCKED
DECISIONS: <still-active material decisions>
CLOSED: <verified outcome and retired competing paths>
LOCAL_TARGET: VERIFIED | UNVERIFIED
LOCAL_DATA_MODE: CONFIRMED_DISPOSABLE | MUST_PRESERVE | UNKNOWN
RESET_SCOPE: <actual authorized resets and post-reset readback | NONE>
CLOSURE_GATE_1_TO_8: <1..8 status + concise claim-specific evidence/reason>
VALID_PROOF: <specific checks/readback tied to exact state>
REMAINING: <unresolved material dependencies>
BLOCKERS: <none or exact root/cause and unblock requirement>
```

A slice is not `CLOSED` with a known material defect, unverified consumer, unresolved critical unknown or unjustified residue. Do not claim permanent infallibility. Keep the checkpoint short; do not store raw logs, duplicate screenshots, giant diffs or repeating inventories.

## 7. Integration and Git safety

Follow the consuming repository's commit/push policy and the user's explicit integration requirements. Verified slices can be committed and pushed when authorized; a push alone is not a PR/merge/release. Avoid repeating identical CI/review waves after each tiny edit. Integrate connected slices with affected E2E scenario proof before claiming platform-wide completion. On a Governance change, the canonical main state must be verified through its PR and intentionally repinned by consuming repositories.

## 8. Continuation and stop

At the next slice, use only the previous checkpoint, current exact HEAD, delta, active decisions and affected dependencies; reset stale context. Continue to the next safe material slice without asking for another trigger. Stop at the authorized fixed point, or return `BLOCKED` with exact root cause, consequence, evidence and unblock requirement. “100%” means zero **known** material defect in the proven scope, not a guarantee about all future execution.
