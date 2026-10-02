# Store-Scoped Access Delegation

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/store-scoped-access-delegation.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: STORE_SCOPED_ACCESS_DELEGATION

## Outcome

An authorized Store owner may invite a canonical Human Actor into bounded Partner-workspace access for one Store and grant/revoke an allowlisted set of operational permissions without creating a sixth Identity role, a generic Partner organization or a multi-tenant team system.

## Ownership

DSH owns Store-scoped invitation/grant lifecycle, Store scope, allowlisted permissions, acceptance, suspension/revocation and canonical operational readback. Identity owns the Human Actor, `partner` role admission, credentials and Partner role-scoped sessions. WLT owns financial authority and may reject any delegated action that violates its approval or separation-of-duties policy.

## Surface/session contract

The consuming surface is the Partner surface. A delegated actor uses a `partner` role-scoped session. The role means admitted access to the merchant-side Partner workspace; it does not imply Store ownership. DSH independently authorizes each Store action from Store ownership or an active accepted StoreAccessGrant.

A Store owner cannot grant the `partner` role directly. The governed path is:

```text
STORE OWNER
→ DSH StoreAccessInvitation with bounded permissions
→ canonical actor resolution / invitation acceptance
→ DSH establishes Partner-workspace eligibility when required
→ authorized Identity partner-role admission when actor does not already hold it
→ actor activates/authenticates Partner role
→ DSH commits accepted StoreAccessGrant
→ Partner surface exposes only authorized Store scope
```

If all Store ownership/grant relationships that justify Partner-workspace standing end, DSH may request Identity to disable the `partner` role according to the governed standing-eligibility lifecycle. Identity never infers this from client input or UI absence.

## Invariants

- every invitation/grant references one Store and one canonical actor;
- a Store grant never creates a new high-level role and never grants access through a Captain/Field/Operator session;
- only the authorized Store owner may create/change/revoke the grant through DSH;
- the invited actor must accept before delegated authority becomes active;
- permissions are an explicit finite allowlist, versioned and attributable; a grant cannot self-expand or grant owner-level authority;
- Partner role/session and DSH Store authorization are both required; possession of either one alone is insufficient;
- a delegated actor cannot cross Store scope or mutate another owner’s facts;
- financial request, approval, execution and reconciliation remain subject to WLT policy and cannot be bypassed by a Store grant;
- revocation/suspension stops future access without rewriting historical actions;
- no generic organization, department, team hierarchy or tenant semantics are introduced.

## Failure and recovery

Unknown/unresolved actor, declined/expired invitation, unauthorized owner, duplicate invitation/grant, stale version, cross-Store request, revoked access, conflicting permission update, interrupted role admission and ambiguous mutation converge on one DSH grant truth plus Identity role/session truth. Retry cannot create a second actor, second grant or broader permission set.

## Proof boundary

Proof requires invitation acceptance, Partner-role activation where needed, positive authorized Store access, negative unrelated/cross-Store access, self-escalation denial, revocation readback, no access through a non-Partner session, and separation from WLT financial approval.
