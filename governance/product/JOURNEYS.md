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
WHEN_REQUIRED / WHEN_APPLICABLE = CONDITIONAL PRODUCT TRIGGER
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
GOVERNED ROLE/CREDENTIAL PROVISIONING
→ PASSWORD PROOF
→ REQUIRED SECOND-FACTOR CHALLENGE
→ OPERATOR SESSION
→ STEP-UP WHEN A SENSITIVE CAPABILITY REQUIRES IT
→ PASSKEY/WEBAUTHN AS THE PREFERRED PROGRESSIVE PHISHING-RESISTANT TARGET
```

Phone verification, managed activation, normal authentication and recovery/re-enrollment are distinct Identity lifecycles. None may silently grant a business role or scope.

## J1 — Customer commerce and fulfillment

```text
DISCOVERY / SERVICEABILITY
→ CART / CHECKOUT
→ ORDER CREATION
→ PAYMENT ALLOCATION / FINANCIAL AUTHORIZATION WHEN REQUIRED
→ STORE/PARTNER FULFILLMENT
→ DISPATCH WHEN REQUIRED
→ STORE↔CAPTAIN HANDOFF
→ DELIVERY / PICKUP OUTCOME
→ CUSTOMER READBACK / TRACKING
→ SUPPORT/RESCUE WHEN REQUIRED
→ FINAL FINANCIAL/REFUND READBACK WHEN REQUIRED
```

## J2 — Partner onboarding to live commerce

```text
IDENTITY / TRUSTED ACTOR
→ PARTNER ONBOARDING CASE
→ FIELD-ASSISTED PARTNER/FIRST-STORE VISIT / CHECK / DOCUMENT / EVIDENCE WHEN REQUIRED
→ OWNER-SIDE REVIEW
→ STORE READINESS
→ PUBLICATION
→ CATALOG/ORDER OPERATIONS
→ FULFILLMENT POLICY
→ SETTLEMENT/COMMISSION READBACK
```

## J3 — Captain activation, assignment and earning

```text
IDENTITY / ACTIVATION
→ DSH CAPTAIN ELIGIBILITY
→ DSH OPERATIONAL FLEET/READINESS
→ DISPATCH OFFER
→ ACCEPT/DECLINE/TIMEOUT
→ COD EXPOSURE RESERVATION WHEN REQUIRED
→ ASSIGNMENT
→ HANDOFF/CUSTODY
→ DELIVERY/EXCEPTION
→ WLT EARNING / COD FINALIZATION
→ CANONICAL READBACK
```

## J4 — Field-assisted Partner onboarding

```text
IDENTITY / FIELD ROLE ACTIVATION
→ ASSIGNED PARTNER/FIRST-STORE ONBOARDING CASE
→ REQUIRED FIELD VISIT / CHECK / DOCUMENT / EVIDENCE CAPTURE
→ SUBMIT TO PARTNER_ONBOARDING_STORE_PUBLICATION
→ OWNER-SIDE REVIEW / DECISION
→ CANONICAL ONBOARDING READBACK
```

J4 is the field actor's role-specific view of J2 and is wholly owned by `PARTNER_ONBOARDING_STORE_PUBLICATION`; it is not an independent Field Operations capability. No unrelated/general field task is admitted through the `field` role or `app-field`.

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
→ APPROVAL WHEN REQUIRED
→ IMMUTABLE SNAPSHOT/BATCH
→ EXTERNAL EXECUTION
→ EVIDENCE
→ INDEPENDENT VERIFICATION WHEN REQUIRED
→ RECONCILIATION
→ COMPLETION
```

## J7 — Operator administration and controlled change

```text
TRUSTED AUTHORIZATION SCOPE
→ EXACT PERMISSION
→ PROPOSED CHANGE
→ VERSION/CONFLICT CHECK
→ INDEPENDENT APPROVAL WHEN REQUIRED
→ CANONICAL OWNER MUTATION
→ AUDIT
→ CANONICAL READBACK
→ ROLLBACK/INVERSE DECISION WHEN REQUIRED
```

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
→ ZONE / SLA / CAPACITY / DELIVERY-MODE EVALUATION
→ STANDARD COMMERCE PATH WHEN ELIGIBLE
OR SPECIAL-REQUEST CAPABILITY WHEN GOVERNED
→ OWNER-SIDE ACCEPT/REJECT/QUOTE/STATE
→ FINANCIAL EFFECT WHEN REQUIRED
→ CUSTOMER/OPERATOR READBACK
```

## Journey semantic completeness invariant

A durable journey definition is incomplete when it omits a material cross-owner handoff, user/system action, failure/recovery semantic or final canonical readback. This Governance artifact does not self-certify implementation closure; materially affected journey claims require exact-current evidence.

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

## J14 — Partner team and scoped access

```text
IDENTITY / PARTNER-ROLE SESSION
→ DSH PARTNER ORGANIZATION/MEMBERSHIP
→ MEMBERSHIP INVITE/ASSIGNMENT
→ DSH STORE/OPERATION SCOPE
→ SERVER-SIDE AUTHORIZATION READBACK
→ PARTNER OPERATION
→ AUDIT/READBACK
→ SUSPEND/REMOVE/REASSIGN
```

## J15 — Operational analytics/read-model journey

```text
CANONICAL DOMAIN SOURCES
→ DERIVED INGESTION/QUERY
→ FRESHNESS/PROVENANCE
→ AUTHORIZED AGGREGATION
→ OPERATOR/STAKEHOLDER READBACK
→ SOURCE RECONCILIATION WHEN MISMATCHED
```

Analytics never becomes a transactional writer or authorization owner.

## J16 — Customer account and privacy lifecycle

```text
CUSTOMER INITIATES ACCOUNT/PRIVACY REQUEST
→ VERIFY REQUESTER + INTENT WITHOUT ENUMERATION
→ CREATE IDEMPOTENT DSH PRIVACY-LIFECYCLE REQUEST
→ IDENTITY APPLIES CLIENT-ROLE CREDENTIAL/SESSION/ACCESS DISPOSITION
→ DSH CUSTOMER/PROFILE OWNERS APPLY DELETE/ANONYMIZE/RETAIN DISPOSITION
→ WLT/OTHER SOVEREIGN OWNERS APPLY REQUIRED RETENTION/ANONYMIZATION WITHOUT MOVING THEIR TRUTH
→ THIRD-PARTY PROCESSOR EFFECTS WHERE APPLICABLE
→ RECONCILE OWNER DISPOSITIONS
→ TRUTHFUL CUSTOMER-FACING TERMINAL READBACK
```

Deleting the customer account is not automatic deletion of the Human Actor or unrelated partner/captain/field/operator/platform-owner roles. Required financial/audit/security retention survives only under its owning policy and must not leave ordinary customer access active.

## Journey-step responsibility classification law

Every material step named in J0–J16 must resolve to exactly one disposition:

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
- ACCOUNT / PRIVACY REQUEST ORCHESTRATION + CROSS-OWNER COMPLETION → ACCOUNT_PRIVACY_LIFECYCLE; each sovereign owner retains its own identity/profile/financial/audit disposition.
- CENTRAL CATALOG / APPROVAL / PUBLICATION → CENTRAL_CATALOG; approval/publication is a named subcapability/workflow.
- CART / CHECKOUT → CART_CHECKOUT; ORDER CREATION begins after the governed checkout eligibility boundary.
- FIELD-ASSISTED PARTNER/FIRST-STORE ONBOARDING ASSIGNMENT / VISIT / CHECK / EVIDENCE → subcapability of PARTNER_ONBOARDING_STORE_PUBLICATION; no standalone Field Operations capability exists.
- CAMPAIGN / AUDIENCE / PLACEMENT / LOYALTY / NON-FINANCIAL COMMERCIAL PROGRAM ELIGIBILITY → MARKETING_CAMPAIGNS_LOYALTY.
- MEDIA BYTE STORAGE → TECHNICAL_MECHANISM_OWNED_ELSEWHERE; business association remains with the owning capability.
- SEARCH / ANALYTICS INDEXING → DERIVED_PROJECTION_READ_MODEL; source domains remain mutation/eligibility owners.

## Capability-to-journey coverage

| Capability | Journey coverage |
|---|---|
| ADMINISTRATION_ROLES_APPROVALS_AUDIT | J7 |
| CAPTAIN_DISPATCH | J3 |
| IDENTITY_ACTIVATION_SESSIONS | J0, J16 where client credential/session disposition is required |
| MAPS_SERVICE_AREA_ADDRESS_PRIVACY | J1, J9 |
| ORDER_CREATION | J1 |
| PARTNER_FLEET_CONNECTION | J2, J3 |
| PARTNER_ONBOARDING_STORE_PUBLICATION | J2, J4 |
| PLATFORM_SOVEREIGN_CONTROL_PLANE | J7 |
| REPRESENTATIVE_WALLETS_REFERENCE_FINANCE | J1, J3, J5, J6 |
| SETTLEMENTS_COMMISSIONS | J3, J6 |
| SPECIAL_REQUESTS | J8, J9 |
| STORE_CAPTAIN_HANDOFF | J1, J3 |
| SUPPORT_INCIDENTS_ORDER_RESCUE | J8 |
| WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION | J5, J6 |
| ZONES_SLA_CAPACITY_DELIVERY_MODES | J1, J3, J9 |
| CUSTOMER_PROFILE_PREFERENCES | J1, J8, J11 where consent affects communication, J16 where customer-profile disposition is required |
| ACCOUNT_PRIVACY_LIFECYCLE | J16 |
| PARTNER_TEAM_MEMBERSHIP | J2, J14 |
| CENTRAL_CATALOG | J1, J2, J10, J13 when media evidence/assets are required |
| PROMOTIONS_COUPONS_FUNDING | J1, J5, J10 |
| RATINGS_REVIEWS_TRUST | J1, J12 |
| NOTIFICATIONS_COMMUNICATIONS | J1-J16 where a governed delivery/inbox result is required |
| ANALYTICS_OPERATIONAL_READ_MODELS | J7, J15 |
| WLT_PRICING_QUOTES | J1, J5, J9 |
| WLT_CAPTAIN_COLLATERAL | J3, J5, J6 |
| WLT_PROVIDER_PENALTIES | J3, J6, J8 |
| CART_CHECKOUT | J1, J5, J9 |
| MARKETING_CAMPAIGNS_LOYALTY | J1, J2, J10, J11 when campaign communication is required |

Generic media/object-storage and search/index mechanisms are not listed as sovereign capabilities. J13 is a cross-capability journey owned by the applicable business capability plus technical storage adapter; search/discovery steps in J1/J10 remain derived from canonical source owners.
