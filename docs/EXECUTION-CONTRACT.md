# BThwani Execution Planning Contract

DOCUMENT_CLASS: NONAUTHORITATIVE_EXECUTION_PLANNING_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This document defines the canonical construction shape for handing implementation work from a planning agent to an execution agent. It owns no Product/System/Policy meaning and no current implementation truth.

The consuming repository's `AGENTS.md` owns execution and safety law. Pinned Governance owns applicable durable meaning. Live source/config/schema/runtime/readback owns current implementation state.

## 1. No trigger duplication

Do not maintain a separate reusable trigger plus a generated execution command.

The human/planner input is only:

```text
REF: <branch/ref>

OBJECTIVE:
<one materially testable outcome>

DECISIONS:
<only task-specific decisions already authorized; omit when empty>
```

Do not copy repository law, Governance law, journey catalogs, proof catalogs, implementation inventories, historical defects or generic mutation permissions into this input.

## 2. Planner responsibility

The planner:

1. pins the exact working state;
2. performs one bounded discovery sufficient to identify the proven affected cone, highest causal root, canonical owners and material unknowns;
3. classifies Governance impact as `NONE | REVALIDATE_ONLY | UPDATE_REQUIRED | DEFECT_FOUND`;
4. derives the minimum material phase map needed for the objective;
5. emits an execution command for the current phase only.

Do not pre-create detailed commands for later phases whose shape can change after current evidence.

A small objective may require one phase. Do not manufacture phases for symmetry.

## 3. Governance changes

If an authorized decision changes durable Product/System/Policy meaning, treat the applicable canonical Governance owner first, merge it through the governed path, then deliberately repin consumers that require the new meaning.

Implementation-only choices do not justify Governance edits.

The planner must not assume Governance needs modification before discovery.

## 4. Current-phase command

A phase command stays compact and task-specific. It contains only:

```text
PHASE: <id/name>
REF: <branch/ref>
BASE_HEAD: <exact sha>

OBJECTIVE:
<phase outcome>

AFFECTED OWNERS:
<only owners proven material>

CLOSE:
<material obligations unique to this phase>

DO NOT EXPAND:
<known unrelated scope when ambiguity exists>

RETURN:
HEAD
STATUS
CLOSED
VALID_PROOF
REMAINING
BLOCKERS
```

Do not restate rules already owned by the consuming `AGENTS.md` or pinned Governance.

## 5. Executor checkpoint

The executor returns a compact checkpoint, not a transcript:

```text
HEAD: <exact sha>
PHASE: <id/name>
STATUS: CLOSED | REMAINDER | BLOCKED

DECISIONS:
<still-active material decisions only>

CLOSED:
<material outcomes closed in this phase>

VALID_PROOF:
<proof still valid for the exact state>

REMAINING:
<material dependencies/cells not yet closed>

BLOCKERS:
<none or exact blocker>
```

Do not retain raw logs, unchanged source, giant diffs or already-superseded analysis in the checkpoint.

## 6. Planner continuation

After a phase, perform a delta closure review only from:

```text
previous checkpoint
+ current exact HEAD
+ changes since the checkpoint
+ newly affected owners/evidence
```

Do not repeat repository-wide discovery unless new evidence invalidates the prior affected-cone model.

Then emit exactly one of:

- a small remainder command for the current phase;
- the next phase command;
- final integration instructions when material execution is complete;
- `BLOCKED` with the exact unblock requirement.

## 7. Context reset

The objective remains continuous; execution context does not.

At each material phase boundary retain only:

```text
exact HEAD
active decisions
affected owners
still-valid proof
remaining material dependencies
blockers
```

Start the next phase from a fresh bounded context using that checkpoint and the exact live state.

## 8. Integration boundary

Iterative phase work uses local commits/checkpoints according to the consuming repository law.

Remote push, pull request, CI and remote review are integration events, not default phase checkpoints. Unless earlier integration is materially required, defer them until feature freeze and perform one final affected integration wave.

## 9. Broad-audit exception

Platform-wide or all-journey discovery is allowed only when the human objective explicitly authorizes a broad audit or evidence proves that such breadth is material.

Phrases such as “complete”, “100%” or “do not miss anything” do not by themselves authorize unrelated platform-wide census work.

## 10. Stop rule

Stop when the authorized objective and its proven affected cone reach fixed point.

Do not invent further phases, optional refactors, new abstractions, extra proof or additional scope after closure.

## 11. Exact blocked contract

Use `BLOCKED` only when the next material action cannot proceed safely within current authority or evidence.

A blocked checkpoint must state exactly:

```text
BLOCKED

ROOT_CAUSE:
<why execution cannot proceed>

IMPACT:
<what material objective/phase is prevented>

EVIDENCE:
<current evidence proving the blocker>

EXACT_UNBLOCK_REQUIREMENT:
<the precise decision, authority, state or external change required>
```

Do not use vague blocker labels when the exact unblock requirement is knowable.

## 12. Continue without asking for next

Do not ask the human for “next” when the next safe material action is derivable from the authorized objective, compact checkpoint and exact live state.

Continue by emitting the current phase remainder, next material phase, final integration step or closure as appropriate.

Ask the human only when a decision, authority boundary or decision-critical unknown cannot be derived safely.

