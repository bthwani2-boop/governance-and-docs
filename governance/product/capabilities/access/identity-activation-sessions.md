# Identity Activation Sessions

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/access/identity-activation-sessions.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: IDENTITY_ACTIVATION_SESSIONS

## Outcome

One Human Actor resolves to one permanent `actor_id`; verification, role admission, credential enrollment, authentication, session lifecycle and recovery remain distinct facts.

## Ownership

Identity owns `actor_id`, verified identifiers, credentials, high-level role admission, first-Operator bootstrap state, authentication proofs and role-scoped sessions. DSH may request governed `partner`, `captain` and `field` role admission only from DSH-owned eligibility/onboarding truth. Surfaces never grant roles themselves.

## Current roles

Exactly `client`, `partner`, `captain`, `field`, `operator`. Every session has one role.

- Client uses governed self-registration/login/recovery.
- Partner/Captain/Field require governed role admission followed by one-time activation/enrollment and normal role-scoped session behavior.
- Operator is the only control-panel human role. First bootstrap is one-time. Normal Operator login requires user-verified WebAuthn/Passkey; Operator password login and SMS-as-normal-login-MFA are not admitted.

## Invariants

- phone is a mutable verified identifier, never the cross-boundary primary key;
- one human resolution must not create duplicate actors;
- one role's credential/session cannot authenticate another role;
- role disable revokes only that role's sessions unless Identity-wide security disable applies;
- refresh rotates atomically and known replay compromises the session family;
- public authentication avoids unnecessary account/role eligibility disclosure;
- security challenges are bounded by expiry, attempts, replay/single-use and throttling;
- client-controlled values never grant actor, role, service identity or business scope.

## Operator invariants

Bootstrap creates the first `operator` exactly once. Subsequent Operator admission requires an authorized existing Operator path. Enrollment/recovery material is bounded and one-use. WebAuthn validation checks the ceremony and user verification before an Operator session is created. Break-glass recovery re-enrolls the authenticator through governed proof and revokes affected Operator sessions/authenticators.

## Failure and recovery

Reject duplicate identity, self-granted managed role, repeated activation-as-login, cross-role credential use, challenge/session replay, invalid Passkey ceremony, unauthorized re-enrollment and caller-authored authority. Recovery preserves one canonical actor and role isolation.

## Material surfaces

`app-client`, `app-partner`, `app-captain`, `app-field`, `control-panel`, Identity backend/database.
