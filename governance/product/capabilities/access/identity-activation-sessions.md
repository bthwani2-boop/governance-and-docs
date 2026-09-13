# Identity Activation Sessions

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/access/identity-activation-sessions.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
PARENT_CAPABILITY_INDEX: governance/product/CAPABILITIES.md
CAPABILITY_ID: IDENTITY_ACTIVATION_SESSIONS

## Scope

This file is the **sole editable durable semantic owner** of `IDENTITY_ACTIVATION_SESSIONS`. Capability taxonomy/schema/admission law remains in `../../CAPABILITIES.md`; cross-capability journey semantics remain in `../../JOURNEYS.md`.

### IDENTITY_ACTIVATION_SESSIONS

**Problem.** Every BThwani surface needs one canonical Human Actor identity while customer self-service, governed managed-role activation and Operator access require deliberately different authentication journeys. A single phone+OTP flow for every actor would collapse verification, activation, authentication and recovery into one unsafe abstraction.

**Target state.** One normalized human identity resolves to one permanent `actor_id`; phone is a mutable verified identifier; high-level roles are explicit bindings; every session is single-role; the current role set is exactly `client`, `partner`, `captain`, `field`, `operator`; first-Operator bootstrap is an irreversible one-time Identity lifecycle rather than a second role or domain.

**Primary actors.** customer, partner, captain, field, operator, dsh-service, control-panel-service, operator-bootstrap-service.

**Canonical ownership.** Identity owns `actor_id`, verified login identifiers, credentials, Identity-wide security eligibility, high-level role admission, Operator bootstrap-completed state, verification/activation proofs, authentication and role-scoped sessions. DSH owns Partner joining cases, DSH operational participant/eligibility/business scopes and the decision/evidence that requests governed partner/captain/field role admission. WLT owns financial truth.

**Material deployable surfaces.** app-client, app-partner, app-captain, app-field, control-panel.

## Required outcome

Identity keeps phone verification, governed activation, normal authentication/session continuation, recovery/re-enrollment and first-Operator bootstrap distinct.

- Customer self-registration uses verified phone plus a customer password credential.
- A DSH Partner joining case may exist before a Partner Human Actor/role is admitted. When DSH reaches the governed Partner admission point, Identity creates or resolves the Human Actor and admits `partner`; the joining case then binds to that canonical `actor_id`.
- Partner/captain/field require DSH role admission, phone proof and password enrollment for one-time activation, then normal role-scoped session/login/recovery behavior.
- Field representatives cannot create `actor_id`, grant the `partner` role or bypass Partner activation while progressing Partner joining cases.
- While Operator bootstrap is incomplete, the dedicated bootstrap principal may create exactly one initial `operator` actor-role without creating an Operator password or session, and mark bootstrap complete.
- Bootstrap cannot be repeated and does not create a special role.
- After bootstrap, an authenticated Operator acting through the credential-authenticated `control-panel` service may admit another `operator` role and issue a one-time phone-bound enrollment token for that already admitted role.
- A newly admitted Operator consumes the enrollment token plus separate phone proof and a required user-verified, discoverable WebAuthn registration for initial activation.
- Normal Operator access requires a server-verified, user-verified WebAuthn/Passkey ceremony and creates an Operator session only after challenge, RP ID, origin, credential, expiry, role and security eligibility checks succeed. Operator password login and SMS normal-login MFA are not admitted.
- Operator break-glass recovery requires a one-time recovery credential plus fresh phone proof, then bounded WebAuthn re-enrollment; the old authenticator and Operator sessions are revoked and a replacement recovery credential is shown once.

## Business invariants

- Identity alone creates `actor_id`; runtime consumers cannot request a new actor identifier.
- One normalized canonical phone resolves to one actor even when the same human holds several roles. Phone is not the cross-boundary primary key.
- Current actor-facing roles are exactly `client`, `partner`, `captain`, `field`, `operator`.
- Actor, role, identifier, credential, activation, session, bootstrap and recovery/re-enrollment are distinct facts/lifecycles.
- A prospective Partner joining case is DSH onboarding truth, not an Identity actor or role. Identity admission occurs only at the governed handoff and returns canonical identity readback.
- Public customer self-service may establish only the client role after proving phone possession and registering a customer password credential.
- Customer normal authentication is phone + customer password when no valid session can be restored. Recovery requires fresh phone proof and affects only the client role.
- DSH manages only partner/captain/field role admission and explicit re-enrollment authorization. Those roles cannot self-grant through verification/activation or through app-field case entry.
- Operator bootstrap is accepted only through the dedicated bootstrap principal while bootstrap state is incomplete. It creates an `operator`, not another role type.
- After bootstrap, only the authenticated `control-panel` service acting with an attributable Operator actor may request Operator admission, enrollment-token issuance or other Identity-owned Operator operations.
- Operator enrollment tokens are single-use, phone-bound, time-bounded and can target only an already admitted `operator` role. They never grant the role by themselves.
- Every session has exactly one role; surface is derived from role.
- Disabling one actor-role revokes only that role's sessions and pending role-specific proofs.
- Identity-wide security disable is distinct from role/DSH lifecycle state and remains an Identity mutation. Any control-panel invocation is only an authorized client of Identity, not an alternate owner.
- Refresh rotates atomically; known replay compromises that session family; unrelated random refresh cannot revoke it.
- Refresh requires the protected random `clientInstanceId` for the same client installation/browser instance; Identity stores and compares only its digest. It is a refresh possession/binding signal, not hardware fingerprinting, MFA or device attestation.
- Password credentials use current secure hashing and role-appropriate policy. Development/bootstrap examples never define normal credential policy.
- Verification/activation/Operator-challenge abuse controls include bounded expiry, attempts, replay/single-use behavior and source/identifier throttling without permanent account lockout.
- Public authentication surfaces remain non-enumerating before applicable proof.
- Local sign-out clears local credentials independently from remote revocation outcome.

```text
PARTNER_JOINING_CASE != PARTNER_ROLE
FIELD_CASE_MUTATION != IDENTITY_ROLE_GRANT
BOOTSTRAP != ROLE
FIRST_OPERATOR = OPERATOR
CONTROL_PANEL != IDENTITY_OWNER
OPERATOR_ROLE != UNIVERSAL_DOMAIN_PERMISSION
```

## Forbidden/negative invariants

- No universal `phone + activation code` login journey across all actor classes.
- No phone number, username or email as cross-boundary primary identity.
- No actor-global credential that allows one role's password to authenticate another role.
- No actor-global generic permissions blob or tenant authority.
- No governed role creation through OTP/verification/activation or Partner-joining form submission.
- No repeated managed activation as ordinary login after successful enrollment.
- No automatic new-device activation reset.
- No provisioning retry silently re-enables a disabled role or mutates another role.
- No second control-panel human role above `operator`.
- No Operator password login, password credential, SMS normal-login MFA or Operator session from a non-WebAuthn fallback.
- No public authentication response unnecessarily distinguishes blocked/disabled/non-admissible actor or role state.
- No consumer-authored actor ID or caller header grants service identity/authority.

## Acceptance expectations

- Readiness fails closed for missing configuration/database/schema/relations, legacy actor/credential columns and clock failure.
- Customer registration/login/recovery preserve one actor and role-isolated credentials/sessions.
- A Partner joining case can begin before Partner role admission; the governed admission handoff creates/resolves exactly one canonical Human Actor and role without duplicate identity.
- Partner/captain/field activation succeeds only for a pre-existing enabled role that has not already been activated.
- First-Operator bootstrap succeeds exactly once, creates role `operator` and records the irreversible bootstrap fact.
- After bootstrap, ordinary Operator admission requires an existing authenticated Operator through control-panel, and activation requires the bounded Operator enrollment token plus phone proof and user-verified WebAuthn registration.
- Operator authentication requires a discoverable WebAuthn credential with user verification; wrong RP, origin, credential, signature, UV state, expired/replayed ceremony, disabled role/security state or revoked credential is rejected.
- Operator recovery/replacement requires recovery credential plus fresh phone proof, revokes Operator sessions and authenticators, rotates the recovery credential, and does not revoke unrelated-role sessions.
- Forged caller headers cannot change the principal resolved from a service credential.
- Generated contract/client/app/database/runtime evidence contains no unadmitted actor role, alternate Identity owner or legacy bootstrap route.
- Mobile hosts and Control Panel transition to signed-out after local credential/cookie clearing even when remote revoke fails.

**Named failure classes:** duplicate_actor, role_shaped_actor_id, actor_role_collapse, partner_joining_case_treated_as_identity, field_grants_partner_role, customer_activation_login, governed_role_self_grant, repeated_managed_activation, automatic_device_reactivation, cross_role_credential, cross_role_revocation, operator_single_factor_session, duplicate_operator_bootstrap, control_panel_role_drift, control_panel_ownership_drift, consumer_authored_actor_id, service_caller_header_trust, account_lockout_dos, challenge_replay, refresh_reuse, public_auth_state_enumeration, local_logout_ui_divergence, secret_or_pii_leak, parallel_identity_truth.

## Actor responsibility envelope

- `customer` — self-registers only client after phone verification, authenticates with its client credential and uses phone verification for governed password recovery.
- `partner` — performs one-time activation only after DSH requests governed partner admission and Identity creates/resolves the canonical Human Actor/role; normal use relies on the resulting governed session and explicit recovery/re-enrollment when required.
- `captain` — performs one-time activation only after DSH pre-provisions captain admission; Identity role never implies dispatch eligibility.
- `field` — performs one-time activation only after DSH pre-provisions field admission; Identity role identifies the Partner Acquisition and Onboarding Representative and never grants Partner-role admission authority for the prospective Partners they onboard.
- `operator` — is the only control-panel human role. The first Operator may originate from one-time bootstrap; subsequent Operators are admitted by the authorized control-panel path. All normal Operator access requires a server-verified, user-verified WebAuthn/Passkey ceremony.
- `dsh-service` — credential-authenticated manager of partner/captain/field Identity-role admission and explicit re-enrollment authorization; Partner admission requests must derive from canonical DSH joining/readiness policy rather than Field assertion alone.
- `control-panel-service` — credential-authenticated caller for Identity-owned Operator operations, always with attributable Operator actor context where required.
- `operator-bootstrap-service` — dedicated one-time bootstrap principal; may create the initial Operator only while bootstrap is incomplete and has no ordinary runtime authority.

## Surface semantics

- `app-client` — restore/refresh existing session; signed-out registration/login/recovery; no activation-screen semantics for Customer.
- `app-partner`, `app-captain`, `app-field` — phone-verification proof after their own governed role admission, password enrollment for initial activation, then restore/refresh/login/logout; re-enrollment only after governed recovery authorization.
- `app-field` Partner-joining actions operate DSH joining-case truth and are never an Identity role-grant interface for the prospective Partner.
- `control-panel` — first-Operator bootstrap only when bootstrap is incomplete; otherwise Operator activation, Passkey login, governed recovery/re-enrollment, restore and logout. All authenticated control-panel sessions carry role `operator` only.
- `backend` — credential-derived service identity, differentiated actor-class authentication policy, role admission, bootstrap, verification/activation/recovery and session lifecycle.
- `database` — one actor identity, actor-role bindings, password credentials only for password-bearing roles, purpose-bound single-use challenges, one-row bootstrap-completed state, Operator enrollment tokens, WebAuthn users/credentials/ceremonies, one-use recovery-credential digests, sessions, refresh history, login attempts and security audit.
- technical presentation binding — generated typed role-specific flows without parallel auth truth.
