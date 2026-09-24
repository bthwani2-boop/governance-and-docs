# Identity Activation Sessions

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/access/identity-activation-sessions.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: IDENTITY_ACTIVATION_SESSIONS

## Outcome

One Human Actor resolves to one permanent `actor_id`; verification, role admission, credential enrollment, authentication, session lifecycle and recovery remain distinct facts.

## Ownership

Identity owns `actor_id`, verified identifiers, credentials, high-level role admission, first-Operator bootstrap state, authentication proofs and role-scoped sessions. For a domain-managed role, the owning domain first establishes admission/eligibility and then sends an authorized role-admission request to Identity; Identity alone resolves or creates the `actor_id` and persists the role admission. DSH may request governed `partner`, `captain` and `field` role admission only from DSH-owned eligibility/onboarding truth. For `field`, that truth is the distinct DSH standing Field admission, not a joining-case field, phone number, or surface assertion. Surfaces never grant roles themselves.

## Role-specific lifecycle

The canonical current role set is owned by `governance/platform/PLATFORM.md`. Identity applies the following lifecycle distinctions to that set; this section does not independently admit roles.


- Client uses governed self-registration/login/recovery.
- Partner/Captain/Field require domain admission/eligibility, governed Identity role admission, then one-time activation/enrollment and normal role-scoped session behavior. A current dispatch assignment is not a prerequisite for standing Captain admission.
- Operator is the only Operator-workspace human role. First bootstrap is one-time. Normal Operator login requires user-verified WebAuthn/Passkey; Operator password login and SMS-as-normal-login-MFA are not admitted.

## Invariants

- phone is a mutable verified identifier, never the cross-boundary primary key;
- one human resolution must not create duplicate actors;
- domain admission/eligibility, Identity role admission, activation/enrollment, authentication/session and resource authorization are distinct ordered facts;
- a domain-managed role admission request is authorized by the owning domain's admission/eligibility truth, never by a phone number, surface input or current task assignment;
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

## Material participants

Client self-access, managed Partner/Captain/Field access, Operator access and the Identity owner runtime/persistence are material consumers of this capability. Deployable host names and repository paths remain implementation truth.

## Operator Finance permission

Identity issues one bounded `finance` permission to an Operator identity. It controls Finance workspace access without creating a new high-level role or a generic permissions engine. The one-time bootstrapped first Operator receives this permission and is the initial Finance access administrator; it may grant or revoke the permission only for another enabled Operator. Later Operators receive no Finance permission by default. Grants and revocations are reasoned, versioned and audited, and revocation invalidates affected Operator sessions.

## Operator Platform Policies permission

Identity issues one bounded `platform_policies` permission to an Operator identity. It controls write access to the Control Panel Platform Policies workspace and its owner-authorized policy mutations; it does not create a new high-level role or a generic permissions engine. The one-time bootstrapped first Operator receives this permission. Later Operators receive no Platform Policies permission by default. Only the one-time bootstrapped first Operator may grant or revoke it, and only for another enabled Operator. Grants and revocations are reasoned, versioned and audited, and invalidate the affected Operator's sessions. Each canonical mutation owner independently verifies the active Operator and this permission before accepting a protected write; inability to verify authorization fails closed. Reads may remain available according to the owning workspace's access rules.
