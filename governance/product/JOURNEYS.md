# BThwani Cross-Capability Journey Model

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/JOURNEYS.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Purpose

A capability is a stable semantic responsibility. A journey is an actor/system outcome that can cross several capabilities, owners and surfaces.

```text
CAPABILITY != JOURNEY
JOURNEY != ROUTE
SURFACE != OWNER
```

Every material journey accounts for entry, loading/pending, success, empty/missing, validation failure, authorization failure, business rejection, conflict/concurrency, offline/degraded behavior, duplicate/repeated submission, unknown outcome, partial state, restart/resume, stale reads, cross-service handoff, out-of-order/duplicate events, cancellation/compensation/reversal and canonical readback where applicable.

## Target journey envelope versus active increment

The journeys below describe the durable end-to-end **target envelope** and dependency order. They do not authorize every optional step in the same delivery slice.

```text
TARGET_JOURNEY_ENVELOPE != ACTIVE_JOURNEY_INCREMENT
WHEN_REQUIRED / WHEN_APPLICABLE = CONDITIONAL_PRODUCT_TRIGGER
```

An active increment may stop at an earlier meaningful outcome when the current human-authorized Product objective says so, provided every effect it actually creates is closed through its canonical owners and readback. A later target step must not be preimplemented as a placeholder.

Conversely, once an active increment creates a cross-owner effect—especially money, custody, authorization or external-provider state—the corresponding invariant/handoff is inside the active cone and cannot be deferred merely because the rest of the target journey is deferred.

## J0 — Identity registration, activation, authentication and recovery

```text
CUSTOMER:
RESTORE EXISTING CLIENT SESSION WHEN VALID
OR PHONE VERIFICATION → CLIENT REGISTRATION + PASSWORD CREDENTIAL → CLIENT SESSION
OR PHONE + PASSWORD → CLIENT SESSION
OR PHONE-VERIFIED PASSWORD RECOVERY → CLIENT SESSION

PARTNER / CAPTAIN / FIELD:
GOVERNED ROLE PROVISIONING
→ ONE-TIME ROLE ACTIVATION
→ ROLE-SCOPED SESSION
→ RESTORE / ROTATE SESSION DURING NORMAL USE
→ EXPLICIT GOVERNED RECOVERY / RE-ENROLLMENT WHEN ACCESS IS LOST

OPERATOR:
IF SYSTEM BOOTSTRAP IS INCOMPLETE:
  ONE-TIME IDENTITY OPERATOR BOOTSTRAP → FIRST OPERATOR
ELSE:
  AUTHORIZED EXISTING OPERATOR → OPERATOR ROLE ADMISSION → ONE-TIME ENROLLMENT TOKEN
→ PHONE-VERIFIED INITIAL ACTIVATION + PASSWORD ENROLLMENT WHEN REQUIRED
→ PASSWORD PROOF
→ REQUIRED SECOND-FACTOR CHALLENGE
→ OPERATOR SESSION
→ STEP-UP ONLY WHEN THE OWNING CAPABILITY REQUIRES IT
→ PASSKEY/WEBAUTHN AS THE PREFERRED PROGRESSIVE PHISHING-RESISTANT TARGET
```

Phone verification, managed activation, normal authentication, recovery/re-enrollment and first-Operator bootstrap are distinct Identity lifecycles. A Partner joining case may precede Partner role admission, but Identity remains the sole actor/role authority.

## J1 — Customer commerce and BThwani fulfillment

```text
DISCOVERY / SERVICEABILITY
→ CART / CHECKOUT
→ ORDER CREATION
→ PAYMENT ALLOCATION / FINANCIAL AUTHORIZATION WHEN REQUIRED
→ STORE/PARTNER PREPARATION
→ READY FOR DISPATCH
→ BTHWANI CAPTAIN DISPATCH / ASSIGNMENT
→ STORE↔CAPTAIN HANDOFF
→ BTHWANI FINAL-MILE DELIVERY
→ CUSTOMER READBACK / TRACKING
→ SUPPORT/RESCUE WHEN REQUIRED
→ FINAL FINANCIAL/REFUND READBACK WHEN REQUIRED
```

Standard commerce has one canonical fulfillment path. No customer-side execution-path choice or second final-mile ownership lane exists in this journey.

## J2 — Partner joining to live commerce

```text
PROSPECTIVE PARTNER / JOINING INTENT
→ DSH PARTNER JOINING CASE
→ ACQUISITION / CONTACT / FOLLOW-UP
→ REQUIRED PARTNER/BUSINESS DATA
→ IDENTITY RESOLUTION + `partner` ROLE ADMISSION WHEN ELIGIBLE
→ CANONICAL Partner actor_id BINDING
→ FIRST STORE SETUP WHEN APPLICABLE
→ LOCATION / DOCUMENT / EVIDENCE / VISIT_OR_CHECK WHEN REQUIRED
→ SUBMISSION
→ OWNER REVIEW / CORRECTION / RESUBMISSION
→ STORE READINESS
→ PUBLICATION
→ CATALOG/ORDER OPERATIONS
→ STORE FULFILLMENT / BTHWANI HANDOFF READINESS
→ SETTLEMENT/COMMISSION READBACK WHEN APPLICABLE
```

`Partner` becomes the one canonical stakeholder/role when Identity admission occurs. A pre-admission joining case is DSH onboarding truth, not a second Partner identity. No Partner Organization, Partner Member, partner-team membership or second Partner identifier participates in this journey. Partner readiness does not create final-mile fleet ownership.

## J3 — Captain activation, assignment and earning

```text
IDENTITY / ACTIVATION
→ DSH CAPTAIN ELIGIBILITY / AVAILABILITY
→ DISPATCH OFFER
→ ACCEPT/DECLINE/TIMEOUT
→ COD EXPOSURE RESERVATION WHEN REQUIRED
→ ASSIGNMENT
→ HANDOFF/CUSTODY
→ BTHWANI DELIVERY / EXCEPTION
→ WLT EARNING / COD FINALIZATION
→ CANONICAL READBACK
```

## J4 — Partner acquisition and onboarding representative

```text
IDENTITY / FIELD ROLE ACTIVATION
→ PROSPECTIVE PARTNER CONTACT OR ASSIGNED JOINING CASE
→ CREATE / OPEN AUTHORIZED DSH PARTNER JOINING CASE
→ CAPTURE / UPDATE REQUIRED PARTNER-BUSINESS DATA
→ FIRST-STORE / LOCATION / DOCUMENT / EVIDENCE WORK WHEN REQUIRED
→ VISIT / CHECK WHEN REQUIRED
→ FOLLOW UP / COMPLETE MISSING INFORMATION
→ SUBMIT / RESUBMIT TO PARTNER_ONBOARDING_STORE_PUBLICATION
→ OWNER-SIDE REVIEW / DECISION
→ CANONICAL JOINING READBACK
```

J4 is the `field` role's role-specific view of J2. The Product persona is Partner Acquisition and Onboarding Representative. It can originate Partner joining before a `partner` role exists, but it cannot create Identity actors/roles, approve its own submission, publish a Store or perform unrelated operational work. The entire journey remains owned by `PARTNER_ONBOARDING_STORE_PUBLICATION`, Identity for role/actor truth, and WLT for any admitted compensation.

## J5 — Financial Cash-In / payment / reconciliation

```text
USER/SYSTEM INTENT
→ WLT VALIDATION
→ EXTERNAL FINANCIAL RAIL WHEN REQUIRED
→ PROVEN PROVIDER RESULT OR UNKNOWN
→ WLT LEDGER POSTING/STATE
→ DSH/APP BOUNDED READBACK
→ RECONCILIATION
```

## J6 — Stakeholder settlement / Cash-Out

```text
ELIGIBILITY
→ HOLD
→ REQUEST/PREPARE
→ APPROVAL WHEN REQUIRED BY WLT POLICY
→ IMMUTABLE SNAPSHOT/BATCH
→ EXTERNAL EXECUTION
→ EVIDENCE
→ INDEPENDENT VERIFICATION WHEN REQUIRED
→ RECONCILIATION
→ COMPLETION
```

## J7 — Operator operations

```text
OPERATOR SESSION
→ CONTROL-PANEL INTENT
→ APPLICABLE CANONICAL OWNER AUTHORIZATION + VALIDATION
→ OWNER MUTATION
→ OWNER/AUDIT EVIDENCE
→ CANONICAL READBACK
→ OWNER-DEFINED RECOVERY / APPROVAL WHEN REQUIRED
```

J7 is a cross-capability Operator journey. The host and Operator role never become an alternate owner. Identity owns identity/access operations, DSH owns its operational facts, WLT owns financial facts, and any approval lifecycle belongs to the capability whose decision requires it.

## J8 — Support incident and order rescue

```text
INCIDENT DETECTION
→ AUTHORIZED SUPPORT ACCESS
→ CANONICAL ORDER/DELIVERY/FINANCIAL READS
→ ALLOWED RESCUE ACTION
→ DOMAIN OWNER MUTATION
→ FINANCIAL COMPENSATION/REVERSAL WHEN REQUIRED
→ AUDIT
→ REQUIRED CROSS-SURFACE READBACK
```

## J9 — Serviceability and special-request path

```text
ADDRESS / LOCATION INPUT
→ PRIVACY/OWNERSHIP CHECK
→ ZONE / SLA / CAPACITY / SERVICEABILITY EVALUATION
→ STANDARD BTHWANI COMMERCE PATH WHEN ELIGIBLE
OR SPECIAL-REQUEST CAPABILITY WHEN GOVERNED
→ OWNER-SIDE ACCEPT/REJECT/QUOTE/STATE
→ FINANCIAL EFFECT WHEN REQUIRED
→ CUSTOMER/OPERATOR READBACK
```

## J10 — Catalog, promotion and discovery publication

```text
CANONICAL CATALOG/STORE INPUT
→ VALIDATION/APPROVAL
→ PROMOTION/COUPON ELIGIBILITY WHEN APPLICABLE
→ PUBLICATION/SERVICEABILITY GATES
→ DERIVED SEARCH/DISCOVERY
→ CUSTOMER READBACK
→ OWNER-SIDE CORRECTION/UNPUBLISH WHEN INVALID
```

## J11 — Notification and communication delivery

```text
SOURCE-DOMAIN EVENT
→ DELIVERY POLICY/PREFERENCE
→ CHANNEL ADAPTER
→ PROVIDER RESULT
→ RETRY/DEDUPE WHEN REQUIRED
→ INBOX/APP NATIVE ROUTE
→ DELIVERY/FAILURE OBSERVABILITY
```

Delivery failure must not fabricate or reverse the source-domain business effect unless Product explicitly defines such coupling.

## J12 — Rating/review trust loop

```text
ELIGIBLE COMPLETED INTERACTION
→ AUTHOR/SCOPE CHECK
→ SUBMISSION
→ VALIDATION/MODERATION
→ CANONICAL REVIEW/RATING READBACK
→ DERIVED DISCOVERY/ANALYTICS
→ GOVERNED EDIT/REMOVAL/ABUSE HANDLING
```

## J13 — Cross-capability media asset lifecycle

```text
AUTHORIZED BUSINESS INTENT
→ VALIDATE ASSET/METADATA
→ STORE BINARY THROUGH ADAPTER
→ COMMIT OWNER-SIDE REFERENCE
→ SERVE UNDER ACCESS POLICY
→ REPLACE/DELETE
→ ORPHAN/FAILURE RECONCILIATION
```

## J14 — Operational analytics/read-model journey

```text
CANONICAL DOMAIN SOURCES
→ DERIVED INGESTION/QUERY
→ FRESHNESS/PROVENANCE
→ AUTHORIZED AGGREGATION
→ OPERATOR/STAKEHOLDER READBACK
→ SOURCE RECONCILIATION WHEN MISMATCHED
```

Analytics never becomes a transactional writer or authorization owner.

## J15 — Customer account and privacy lifecycle

```text
CUSTOMER INITIATES ACCOUNT/PRIVACY REQUEST
→ VERIFY REQUESTER + INTENT WITHOUT ENUMERATION
→ CREATE IDEMPOTENT DSH PRIVACY-LIFECYCLE REQUEST
→ IDENTITY APPLIES CLIENT-ROLE CREDENTIAL/SESSION/ACCESS DISPOSITION
→ DSH CUSTOMER/PROFILE OWNERS APPLY DELETE/ANONYMIZE/RETAIN DISPOSITION
→ WLT/OTHER CANONICAL OWNERS APPLY REQUIRED RETENTION/ANONYMIZATION WITHOUT MOVING THEIR TRUTH
→ THIRD-PARTY PROCESSOR EFFECTS WHERE APPLICABLE
→ RECONCILE OWNER DISPOSITIONS
→ TRUTHFUL CUSTOMER-FACING TERMINAL READBACK
```

Deleting the customer account is not automatic deletion of the Human Actor or unrelated Partner/captain/field/operator roles. Required financial/audit/security retention survives only under its owning policy and must not leave ordinary customer access active.

## Journey semantic completeness invariant

A durable journey definition is incomplete when it omits a material cross-owner handoff, user/system action, failure/recovery semantic or final canonical readback. This Governance artifact does not self-certify implementation closure; materially affected journey claims require exact-current evidence.

## Journey-step responsibility classification law

Every material step named in J0–J15 must resolve to exactly one disposition:

```text
DURABLE_CAPABILITY
SUBCAPABILITY_OF_NAMED_OWNER
DURABLE_POLICY
TECHNICAL_MECHANISM_OWNED_ELSEWHERE
DERIVED_PROJECTION_READ_MODEL
EXPLICIT_NON_GOAL
```

A capability→journey row alone is not completeness proof. Closure additionally requires the reverse direction:

```text
ALL_MATERIAL_JOURNEY_STEPS_CLASSIFIED=PASS
UNOWNED_MATERIAL_JOURNEY_STEPS=0
UNCLASSIFIED_MATERIAL_RESPONSIBILITIES=0
```

Key durable dispositions in the current model:
- OPERATOR BOOTSTRAP / ROLE / CREDENTIAL / SESSION → IDENTITY_ACTIVATION_SESSIONS; `control-panel` is only the host.
- OPERATOR DOMAIN ACTION → applicable canonical owner; approval/step-up remains with that owner when materially required.
- ACCOUNT / PRIVACY REQUEST ORCHESTRATION + CROSS-OWNER COMPLETION → ACCOUNT_PRIVACY_LIFECYCLE; each canonical owner retains its own identity/profile/financial/audit disposition.
- CENTRAL CATALOG / APPROVAL / PUBLICATION → CENTRAL_CATALOG; approval/publication is a named subcapability/workflow.
- CART / CHECKOUT → CART_CHECKOUT; ORDER_CREATION begins after the governed checkout eligibility boundary.
- STANDARD COMMERCE FULFILLMENT → one BThwani path from Store preparation through CAPTAIN_DISPATCH, STORE_CAPTAIN_HANDOFF and final-mile delivery; no second final-mile owner is admitted.
- PARTNER ACQUISITION / JOINING CASE / FIELD ASSIGNMENT / DATA / FIRST-STORE ASSISTANCE / CONDITIONAL VISIT-CHECK / DOCUMENT-EVIDENCE / CORRECTION-SUBMISSION → PARTNER_ONBOARDING_STORE_PUBLICATION; Identity alone owns Partner actor/role admission.
- PARTNER STORE SCOPE → DSH relationship between the Partner `actor_id` and Store after canonical Partner binding; no Partner Organization/Member/team-membership layer exists.
- CAMPAIGN / AUDIENCE / PLACEMENT / LOYALTY / NON-FINANCIAL COMMERCIAL PROGRAM ELIGIBILITY → MARKETING_CAMPAIGNS_LOYALTY.
- MEDIA BYTE STORAGE → TECHNICAL_MECHANISM_OWNED_ELSEWHERE; business association remains with the owning capability.
- SEARCH / ANALYTICS INDEXING → DERIVED_PROJECTION_READ_MODEL; source domains remain mutation/eligibility owners.

## Capability-to-journey coverage

| Capability | Journey coverage |
|---|---|
| CAPTAIN_DISPATCH | J1, J3 |
| IDENTITY_ACTIVATION_SESSIONS | J0, J2/J4 where Partner role admission or field authentication is required, J7 where Operator identity/access is required, J15 where client credential/session disposition is required |
| MAPS_SERVICE_AREA_ADDRESS_PRIVACY | J1, J9 |
| ORDER_CREATION | J1 |
| PARTNER_ONBOARDING_STORE_PUBLICATION | J2, J4 |
| REPRESENTATIVE_WALLETS_REFERENCE_FINANCE | J1, J3, J4 only when field Partner-joining compensation exists, J5, J6 |
| SETTLEMENTS_COMMISSIONS | J2/J4 only when field Partner-joining compensation exists, J3, J6 |
| SPECIAL_REQUESTS | J8, J9 |
| STORE_CAPTAIN_HANDOFF | J1, J3 |
| SUPPORT_INCIDENTS_ORDER_RESCUE | J8 |
| WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION | J5, J6; J4 only when field Partner-joining compensation requires payout |
| ZONES_SLA_CAPACITY_SERVICEABILITY | J1, J3, J9 |
| CUSTOMER_PROFILE_PREFERENCES | J1, J8, J11 where consent affects communication, J15 where customer-profile disposition is required |
| ACCOUNT_PRIVACY_LIFECYCLE | J15 |
| CENTRAL_CATALOG | J1, J2, J10, J13 when media evidence/assets are required |
| PROMOTIONS_COUPONS_FUNDING | J1, J5, J10 |
| RATINGS_REVIEWS_TRUST | J1, J12 |
| NOTIFICATIONS_COMMUNICATIONS | J1-J15 where a governed delivery/inbox result is required |
| ANALYTICS_OPERATIONAL_READ_MODELS | J7, J14 |
| WLT_PRICING_QUOTES | J1, J5, J9 |
| WLT_CAPTAIN_COLLATERAL | J3, J5, J6 |
| WLT_PROVIDER_PENALTIES | J3, J6, J8 |
| CART_CHECKOUT | J1, J5, J9 |
| MARKETING_CAMPAIGNS_LOYALTY | J1, J2, J10, J11 when campaign communication is required |

J7 is a cross-capability Operator journey; J13 is a cross-capability media journey; search/discovery steps remain derived from canonical source owners.
