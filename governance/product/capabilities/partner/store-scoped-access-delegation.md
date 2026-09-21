# Store-Scoped Access Delegation

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/store-scoped-access-delegation.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: STORE_SCOPED_ACCESS_DELEGATION

## Outcome

An authorized Store owner may grant or revoke a bounded set of operational permissions to a known actor within one Store, so routine Store work can be delegated without creating a sixth Identity role, a generic Partner organization or a multi-tenant team system.

## Ownership

DSH owns Store-scoped access grants, the grant lifecycle, Store scope, the allowlisted permission set, suspension/revocation and canonical operational readback. Identity owns the canonical Human Actor, roles, credentials and sessions. WLT owns financial authority and may reject any delegated action that violates its approval or separation-of-duties policy.

## Invariants

- every grant references one Store and one canonical actor;
- a grant never creates or mutates a high-level Identity role;
- only the authorized Store owner may create, change or revoke a grant through DSH;
- permissions are an explicit allowlisted set, versioned and attributable; a grant cannot self-expand or grant owner-level authority;
- a delegated actor cannot cross Store scope or mutate another owner’s facts;
- financial request, approval, execution and reconciliation remain subject to WLT policy and cannot be bypassed by a Store grant;
- revocation/suspension stops future access without rewriting historical actions.

## Failure and recovery

Unknown actor, unauthorized owner, duplicate grant, stale grant version, cross-Store request, revoked access, conflicting permission update and ambiguous mutation converge on one DSH grant truth with idempotent retry and canonical readback.

## Proof boundary

The capability requires positive and negative authorization proof for owner, delegated actor and unrelated Store actor, including cross-Store denial, self-escalation denial, revocation readback and separation from WLT financial approval.
