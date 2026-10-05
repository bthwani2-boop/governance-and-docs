# Store-Scoped Access Delegation

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/store-scoped-access-delegation.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: STORE_SCOPED_ACCESS_DELEGATION

## Outcome

An authorized Store owner may invite a canonical Human Actor into bounded Partner-workspace access for one or more owned Stores and grant/revoke an allowlisted set of operational permissions without creating a sixth Identity role, a generic Partner organization, a separate Staff application or a multi-tenant team system.

## Ownership

DSH owns Store-scoped invitation/grant lifecycle, Store scope, allowlisted permissions, acceptance, suspension/revocation and canonical operational readback. Identity owns the Human Actor, verified phone, `partner` role admission, credentials and Partner role-scoped sessions. WLT owns financial authority and may reject any delegated financial intent that violates beneficiary, approval or separation-of-duties policy.

## Surface/session contract

The consuming surface is the Partner surface. Owners and delegated Store staff use the same Partner application and a `partner` role-scoped session. The role means admitted access to the merchant-side Partner workspace; it does not imply Store ownership. DSH independently authorizes every Store action from Store ownership or an active accepted StoreAccessGrant.

Normal user-facing invitation starts from a phone number, not an `actor_id`, Store code or other technical identifier. DSH/Identity resolve the canonical Human Actor behind that boundary. A UI role preset is only a convenient bundle of bounded DSH permissions; it never becomes a new Identity role or an independent RBAC authority.

A Store owner cannot grant the `partner` role directly. The governed path is:

```text
STORE OWNER
→ phone-based Partner-surface invitation
→ DSH resolves the canonical Human Actor and requested Store scopes/permissions
→ invitation acceptance
→ DSH establishes Partner-workspace eligibility when required
→ authorized Identity partner-role admission when actor does not already hold it
→ actor activates/authenticates Partner role
→ DSH commits accepted StoreAccessGrant(s)
→ Partner surface exposes only authorized Store scope and functions
```

One owner action may target several owned Stores, but canonical authority remains Store-scoped: the system persists attributable Store grants rather than one opaque organization-wide permission. If all Store ownership/grant relationships that justify Partner-workspace standing end, DSH may request Identity to disable the `partner` role according to the governed standing-eligibility lifecycle. Identity never infers this from client input or UI absence.

## Permission model

The allowlist may include only currently admitted operational responsibilities:

- Order read/write;
- Catalog/StoreOffer work;
- Store operational availability;
- promotion management;
- Store fulfillment/Store-Captain operation;
- financial read/report (`finance_read`);
- payout-request intent (`payout_request`).

Permission bundles such as Store Manager, Order Staff, Catalog Staff, Accountant or Delivery Staff are UX presets over this allowlist. Custom selection, when exposed, remains bounded to the same canonical permissions.

Changing a Store payout recipient is not an ordinary delegated permission. Under the current Product model it is owner-only and remains governed by the Store effective-beneficiary law owned by `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`. `finance_read` and `payout_request` never imply payout-routing authority, Finance approval, execution or reconciliation authority.

## Invariants

- every canonical invitation/grant references one Store and one canonical actor, even when a user action creates equivalent grants for several Stores;
- a Store grant never creates a new high-level role and never grants access through a Captain/Field/Operator session;
- only the authorized Store owner may create/change/revoke Store staff grants under the current scope;
- the invited actor must accept before delegated authority becomes active;
- normal Partner UX never requires or exposes raw Actor IDs as the invitation mechanism when human-readable identity is available;
- permissions are an explicit finite allowlist, versioned and attributable; a grant cannot self-expand or grant owner-only authority;
- Partner role/session and DSH Store authorization are both required; possession of either one alone is insufficient;
- a delegated actor cannot cross Store scope or mutate another owner's facts;
- aggregate or multi-Store views never weaken object-level Store authorization;
- financial read, payout-request intent, Store payout-recipient routing, Finance approval, execution and reconciliation are distinct authorities;
- financial request, approval, execution and reconciliation remain subject to WLT policy and cannot be bypassed by a Store grant;
- revocation/suspension stops future access without rewriting historical actions;
- if a revoked/suspended staff actor is a current payout beneficiary for any Store, access revocation does not silently reroute future payouts; the effective-beneficiary revocation law owned by `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT` governs the required owner action;
- no generic organization, department, team hierarchy, tenant semantics, shared-owner credential or separate Staff app is introduced.

## Failure and recovery

Unknown/unresolved phone/actor, declined/expired invitation, unauthorized owner, duplicate invitation/grant, stale version, cross-Store request, revoked access, conflicting permission update, interrupted role admission and ambiguous mutation converge on one DSH grant truth plus Identity role/session truth. Retry cannot create a second actor, second effective Store grant or broader permission set.

## Proof boundary

Proof requires phone-based invitation, invitation acceptance, Partner-role activation where needed, positive authorized Store access, negative unrelated/cross-Store access, function-level denial, self-escalation denial, owner-only payout-recipient routing, revocation readback, no access through a non-Partner session, no raw Actor-ID dependency in normal UX, and separation from WLT financial approval/execution/reconciliation.
