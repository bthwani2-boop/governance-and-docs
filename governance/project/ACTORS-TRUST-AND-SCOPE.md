# Actors, Trust and Scope Model

ARTIFACT_CLASS: DURABLE_PROJECT_GOVERNANCE
SEMANTIC_OWNER: governance/project/ACTORS-TRUST-AND-SCOPE.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Separation model

BThwani separates only materially distinct facts:

```text
PERSON / ACTOR
AUTHENTICATION IDENTITY
HIGH-LEVEL IDENTITY ROLE
STORE / BUSINESS SCOPE
OPERATIONAL ASSIGNMENT
AUTHORIZATION SCOPE / PERMISSION
FINANCIAL IDENTITY / WALLET
```

No identifier or row may be overloaded to represent several meanings, and no new semantic axis is admitted without a concrete Product lifecycle.

```text
ACTOR != ROLE
ROLE != BUSINESS_SCOPE
IDENTITY_ROLE != DSH_OPERATIONAL_ELIGIBILITY
```

## Canonical human-role-persona mapping

| Human identity | Identity role | Product persona | Primary host | Business-scope owner |
|---|---|---|---|---|
| Human Actor | `client` | Customer | `app-client` | DSH for non-authentication business truth |
| Human Actor | `partner` | Partner | `app-partner` | DSH Partner operational state and Store scope |
| Human Actor | `captain` | Captain | `app-captain` | DSH eligibility/assignment/affiliation |
| Human Actor | `field` | Partner Acquisition and Onboarding Representative | `app-field` | DSH Partner joining case/assignment scope only |
| Human Actor | `operator` | Operator | `control-panel` | applicable protected capability/domain owner |

`Partner` is one Product stakeholder and one `partner` role bound to one `actor_id`. There is no `Partner Organization`, `Partner Member`, partner-team membership, or second Partner identity in the current Product model. A Store is a DSH resource managed by its Partner, not a second actor.

A prospective Partner is not yet the `partner` Identity role merely because a joining case exists. DSH may hold the minimum governed business/contact/onboarding data required to progress a Partner joining case before Identity role admission. When the joining lifecycle reaches the governed admission point, Identity creates or resolves the Human Actor and binds role `partner`; that canonical `actor_id` then becomes the Partner cross-boundary identity.

`Operator` is one Product persona and one `operator` role bound to one `actor_id`. The one-time bootstrap creates the first Operator and records completion; it is not a Product persona, role, domain or continuing authority tier.

## Identity role law

Identity creates the one `actor_id`. Current high-level surface roles are explicit actor↔role bindings:

```text
client   → app-client
partner  → app-partner
captain  → app-captain
field    → app-field
operator → control-panel
```

A session is bound to one actor and one role. It does not carry every role held by the human.

Customer self-service may establish only the `client` role after proving phone possession and registering a client credential. DSH provisions partner/captain/field role admission; those governed roles perform initial activation through phone verification and password enrollment. A Partner joining case may precede `partner` role admission, but no Field action may create `actor_id`, grant the `partner` role or complete Identity activation directly. Identity's one-time operator bootstrap creates only the first `operator`; after bootstrap, an authenticated Operator may initiate admission of another Operator through the governed control-panel path, which uses a one-time enrollment token before first activation. Normal Operator access requires password plus a second factor/challenge.

`actor_id` is the permanent cross-boundary human identifier. Phone is a mutable verified identifier, not the primary identity key; username is optional and must not exist merely as an authentication convention without Product need.

```text
PHONE_VERIFICATION != MANAGED_ACTIVATION
MANAGED_ACTIVATION != NORMAL_AUTHENTICATION
NORMAL_AUTHENTICATION != RECOVERY_OR_REENROLLMENT
PARTNER_JOINING_CASE != PARTNER_ROLE
BOOTSTRAP != ROLE
FIRST_OPERATOR = OPERATOR
```

Customer registration/recovery, managed-role activation and operator authentication therefore have separate journeys while remaining owned by the same Identity authority. Passkeys/WebAuthn are a preferred progressive hardening path for Operator access, but are not a mandatory first-release credential for every actor class.

Role enable/disable is Identity admission truth. Partner Store scope, captain eligibility/assignment/affiliation, and field Partner-joining case/assignment scope remain DSH truth. Fine-grained business authorization remains with the capability that owns the protected fact.

## Trust model

Trusted identity is derived server-side from authentication/session state. Internal service identity is derived from the authenticated service credential itself.

A client header, query parameter, request body, cached local value, UI selector or navigation state may request a business operation but never grants identity, role, scope or context.

```text
CLIENT_CLAIM != TRUSTED_CONTEXT
DISPLAYED_SCOPE != AUTHORIZATION_SCOPE
READ_PERMISSION != MUTATION_PERMISSION
SERVICE_CALLER_HEADER != SERVICE_IDENTITY
```

Any contextual authorization dimension must be owned by the capability that proves it and derived from authenticated identity, governed delegation and canonical owner facts. Identity must not fabricate generic isolation scope.

## Primary role/persona responsibilities

### Customer
Consumes discovery/catalog/serviceability, checkout/order, support/tracking and authorized WLT-backed financial readback. Customer input never defines authoritative price, financial amount, serviceability or ownership.

### Partner
Operates only as the authenticated `partner` actor through `app-partner`, managing authorized Store, catalog and order operations plus authorized financial readback. No organization/member/team abstraction sits between the Partner actor and its DSH Store scope.

### Captain
Acts within dispatch/delivery/custody/proof/exception responsibilities only when DSH eligibility and assignment are valid.

### Partner Acquisition and Onboarding Representative
The `field` role exists to bring Partners into BThwani. The representative may identify/contact a prospective Partner, create or receive a Partner joining case, capture and update required Partner/business/contact data, assist with first-Store setup, capture location/documents/evidence, perform a visit/check when policy requires it, follow up missing information, and submit/resubmit the case for canonical owner review. The representative does not create `actor_id`, grant or activate the `partner` role, approve their own case, publish a Store, own Partner truth, own financial truth, or perform unrelated operational work.

### Operator
Authenticates through the single `operator` Identity role and uses `control-panel` to perform authorized operations. Each mutation remains authorized and owned by the applicable Identity, DSH, WLT or other admitted capability.

## Approval and separation of duties

Where an owning capability materially requires independent approval, it defines and enforces that approval itself.

```text
UI_VISIBILITY != AUTHORIZATION
FIELD_SUBMISSION != OWNER_APPROVAL
OPERATOR_ROLE != UNIVERSAL_DOMAIN_PERMISSION
APPROVAL_WHEN_REQUIRED → OWNING_CAPABILITY
```

## Tenant admission

A `TENANT` concept may be introduced only if Product/System requirements prove independent lifecycle and isolation semantics. Partner/Store/role alone do not satisfy that burden.
