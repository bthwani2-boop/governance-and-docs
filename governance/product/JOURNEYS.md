# BThwani Current Journeys

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/JOURNEYS.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Journey law

A top-level Journey is one end-to-end user/business outcome that crosses at least two material actor-facing surfaces, crosses every canonical owner/handoff needed by that outcome, and ends with canonical readback usable by every authorized participant.

```text
JOURNEY
≠ SCREEN
≠ ROUTE
≠ SINGLE-SURFACE APP FLOW
≠ CAPABILITY
≠ OWNER-INTERNAL STATE MACHINE
≠ OPERATOR WORKSPACE SECTION
```

The actor-facing surfaces are exactly `CLIENT`, `PARTNER`, `CAPTAIN`, `FIELD` and `OPERATOR`. Identity, DSH, WLT, adapters and external providers are owners/systems/rails, never actor-facing surfaces.

Every top-level Journey declares one outcome, material surfaces, canonical owners, entry/exit/readback, legal branches, handoffs and applicable failure/recovery. A single-surface or owner-internal flow remains a supporting subflow, control lane, projection, policy flow or explicit non-goal.

## MANAGED_PARTICIPANT_ADMISSION — admitted managed actor becomes usable

JOURNEY_ID: MANAGED_PARTICIPANT_ADMISSION
OUTCOME: An eligible managed participant becomes a canonically resolved actor with the admitted high-level role and a usable role-scoped surface session.
SURFACES: OPERATOR, PARTNER, CAPTAIN, FIELD
OWNERS: IDENTITY, DSH
CAPABILITIES: IDENTITY_ACTIVATION_SESSIONS
ENTRY: Authorized DSH domain admission or eligibility exists for Partner, Captain or Field.
EXIT: Target managed role is admitted and the target surface can authenticate and read its owner-backed standing state.
READBACK: Identity role/session readback plus DSH domain standing readback.

### Frontstage and handoffs

```text
OPERATOR
→ DSH domain candidate / eligibility
→ authorized Identity role-admission request
→ Identity actor resolution + role admission
→ target PARTNER / CAPTAIN / FIELD activation and authentication
→ DSH standing readback
```

Partner, Captain and Field each use their own role-scoped session. Eligibility, role admission, activation, authentication and resource authorization remain distinct. Client self-registration and Operator bootstrap/recovery are access subflows, not top-level Journeys.

### Failure / recovery

Duplicate actor risk, ineligible candidate, stale admission, replay, cross-role credential use and interrupted activation fail closed and resume from canonical Identity/DSH state.

### Negative space

No surface grants its own role. Current task assignment never substitutes for standing role admission. No sixth Store-staff role is created.

## PARTNER_TO_VISIBLE_STORE — acquisition to customer-visible Store

JOURNEY_ID: PARTNER_TO_VISIBLE_STORE
OUTCOME: A legitimate prospect progresses through Field/Operator/Partner work to one published Store that can be discovered by a Client when the separate catalog/serviceability gates are satisfied.
SURFACES: FIELD, OPERATOR, PARTNER, CLIENT
OWNERS: IDENTITY, DSH
CAPABILITIES: PARTNER_ONBOARDING_STORE_PUBLICATION, IDENTITY_ACTIVATION_SESSIONS, CENTRAL_CATALOG
ENTRY: Eligible Field standing or authorized Operator-originated joining work starts a prospective Partner case.
EXIT: Store publication is committed and customer-safe publication readback is available.
READBACK: Joining/Store publication readback to Field, Operator and Partner; Client receives the resulting published Store projection when other visibility gates allow it.

### Frontstage and handoffs

```text
OPERATOR → Field eligibility → Identity field role
FIELD → JoiningCase
OPERATOR → review / correction / rejection / admission
DSH → Partner eligibility → Identity partner role
PARTNER → required Store correction/readiness
DSH → Store creation + canonical business classification + publication
CLIENT → customer-safe Store projection
```

Store publication is not current orderability. A published Store may later be closed by schedule or paused without becoming unpublished.

### Failure / recovery

Missing required data, correction loops, duplicate logical case, stale version, suspended Field, duplicate actor risk and interrupted Identity handoff recover through canonical readback without rebinding the case to a different actor.

### Negative space

Field does not approve its own case. Operator does not become Partner/Store owner. Store is not a tenant.

## STORE_ORDERABILITY — published Store to current ability to accept orders

JOURNEY_ID: STORE_ORDERABILITY
OUTCOME: Partner-maintained operating state is evaluated by DSH and exposed consistently so a Client can know whether the Store and selected fulfillment mode can accept a new order now, with bounded Operator intervention when authorized.
SURFACES: PARTNER, CLIENT, OPERATOR
OWNERS: DSH
CAPABILITIES: STORE_OPERATIONAL_AVAILABILITY
ENTRY: A published Store has an admitted operating schedule or bounded operating-state mutation.
EXIT: DSH exposes one current Store/mode orderability result.
READBACK: Partner and Operator receive mutation readback; Client receives the customer-safe current orderability projection.

### Frontstage and handoffs

```text
PARTNER → weekly schedule / pause / resume
OPERATOR → bounded authorized intervention when required
DSH → validate + version + derive Store/mode orderability
CLIENT → open / closed / paused / unavailable readback
CHECKOUT → revalidate the same DSH result before Order creation
```

### Failure / recovery

Stale schedule, conflicting pause/resume, invalid interval, offline mutation and ambiguous commit reread the canonical DSH state. No failed orderability mutation changes publication, catalog or serviceability truth.

### Negative space

No numeric capacity engine, mandatory daily check-in, queue forecaster or AI preparation predictor is admitted here.

## CATALOG_TO_CUSTOMER_OFFER — canonical catalog to customer-safe assortment

JOURNEY_ID: CATALOG_TO_CUSTOMER_OFFER
OUTCOME: Operator/Partner catalog work produces one DSH-governed customer-safe Store assortment without exposing internal ownership topology to the Client.
SURFACES: OPERATOR, PARTNER, CLIENT
OWNERS: DSH
CAPABILITIES: CENTRAL_CATALOG
ENTRY: An authorized catalog mutation/proposal/import/Store assortment action begins.
EXIT: Eligible Product/Variant/StoreOffer content is published or intentionally not eligible.
READBACK: Operator/Partner mutation readback and Client customer-safe storefront readback come from DSH.

### Frontstage and handoffs

```text
OPERATOR → vertical / taxonomy / shared Product / Variant / proposal review / import
PARTNER → shared assortment or Store-local item / offer / modifier / section
DSH → canonical validation + CUSTOMER_VISIBLE_OFFER evaluation
CLIENT → coherent storefront assortment
```

`VARIABLE_MEASURE` preserves requested quantity/range and can later receive an actual fulfilled amount through the Order-adjustment boundary. Current inventory remains availability-only unless finite inventory is separately admitted.

### Failure / recovery

Invalid taxonomy, identifier conflict, stale price/offer, invalid modifier, duplicate import, unavailable offer and direct-ID bypass fail closed and converge on DSH readback.

### Negative space

Catalog visibility does not prove Store operational availability, serviceability or checkout eligibility. Catalog is not PIM/ERP/POS authority.

## DISCOVERY_TO_COMMERCE_ENTRY — governed discovery and promotion to valid target

JOURNEY_ID: DISCOVERY_TO_COMMERCE_ENTRY
OUTCOME: Authorized discovery content or commercial promotion reaches a Client only through an eligible canonical target and, when financially funded, preserves the WLT funding boundary.
SURFACES: OPERATOR, CLIENT, PARTNER
OWNERS: DSH, WLT
CAPABILITIES: DISCOVERY_CONTENT, COMMERCE_PROMOTIONS, CENTRAL_CATALOG, ORDER_PAYMENT_COLLECTION
ENTRY: Authorized Operator/Partner-context content or promotion enters its governed review/eligibility lifecycle.
EXIT: Client reaches a valid Store/Product/Category/commerce target or the content/promotion is ineligible/expired.
READBACK: Publication/eligibility is DSH-backed; funded financial effect is WLT-backed.

### Parallel lanes

```text
EDITORIAL: Operator → Discovery Content → DSH publication → Client target
COMMERCIAL: Operator → Promotion → DSH eligibility → WLT funding effect when applicable → Client application
```

### Failure / recovery

Expired target, invalid scope, stale publication, funding refusal and retry conflict fail closed. A banner never becomes discount authority.

### Negative space

No loyalty, paid membership or social content network is implied.

## SINGLE_STORE_ORDER_CREATION — Client intent to canonical Store Order

JOURNEY_ID: SINGLE_STORE_ORDER_CREATION
OUTCOME: A Client confirms one Store-scoped commerce intent and the Partner receives at most one canonical Store Order created from current catalog, serviceability, Store-orderability and financial evidence.
SURFACES: CLIENT, PARTNER
OWNERS: IDENTITY, DSH, WLT
CAPABILITIES: SERVICEABILITY_ADDRESSES, CART_CHECKOUT, ORDER_LIFECYCLE, ORDER_PAYMENT_COLLECTION, CUSTOMER_BALANCE_FUNDING, STORE_OPERATIONAL_AVAILABILITY, CENTRAL_CATALOG
ENTRY: Client has an eligible Store/Offer/cart and chooses an admitted fulfillment intent.
EXIT: One Store Order and its payment/collection intent exist or the confirmation fails without duplicate effect.
READBACK: Client and Partner read the canonical Store Order; Client sees WLT-backed payment state where applicable.

### Frontstage and handoffs

```text
CLIENT → address / storefront / Offer / quantity / modifiers / fulfillment intent / payment intent
DSH → revalidate serviceability + offer + Store/mode orderability + cart evidence
WLT → establish customer payment/collection intent
DSH → create at most one canonical Store Order
PARTNER → new Order readback
```

An optional delivery recipient may differ from the purchasing Client. The recipient is an Order delivery-contact snapshot, not a Human Actor and never receives Order/payment authority.

### Supporting financial subflow

`CUSTOMER_BALANCE_FUNDING` may fund WLT internal balance before checkout. The external provider is a rail, not checkout or ledger authority.

### Failure / recovery

Stale cart, closed/paused Store, unavailable selected mode, unavailable Offer, unserviceable address, financial refusal, duplicate confirmation, conflict and unknown cross-owner outcome recover through owner readback/reconciliation without silently creating another Order.

### Negative space

No scheduled customer-order lifecycle or generic point-to-point courier request is admitted.

## BTHWANI_CAPTAIN_DELIVERY — Store readiness to delivered by platform Captain

JOURNEY_ID: BTHWANI_CAPTAIN_DELIVERY
OUTCOME: A Partner-ready BThwani-Captain Order is accepted by an eligible Captain, transferred into canonical custody and completed to the Client with explicit tracking/proof and financial effects.
SURFACES: PARTNER, CAPTAIN, CLIENT, OPERATOR
OWNERS: IDENTITY, DSH, WLT
CAPABILITIES: ORDER_LIFECYCLE, CAPTAIN_DISPATCH, STORE_CAPTAIN_HANDOFF, FINAL_MILE_DELIVERY, ORDER_PAYMENT_COLLECTION, CAPTAIN_BALANCE_FUNDING, PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT
ENTRY: Partner has accepted/prepared an Order with fulfillment mode `BTHWANI_CAPTAIN` and marks it ready for dispatch.
EXIT: Delivery reaches a legal terminal result and applicable WLT effects are committed or explicitly reconciling.
READBACK: Partner, Captain and Client read one DSH delivery result; WLT financial readback remains separate.

### Frontstage and handoffs

```text
PARTNER → accept / prepare / ready
DSH + WLT → dispatch eligibility + COD exposure if applicable
CAPTAIN → offer accept
DSH → assignment
PARTNER ↔ CAPTAIN → two-sided handoff
DSH → custody
CAPTAIN → final mile + bounded delivery proof
DSH → terminal delivery result
CLIENT / PARTNER / CAPTAIN → completion/tracking readback
WLT → collection / receivable / earning effects
```

Tracking is a DSH projection. Proof is bounded evidence used by DSH; photo/upload alone is never delivery truth. `CAPTAIN_BALANCE_FUNDING` remains a supporting balance/collateral subflow and is not earnings or COD remittance.

### Failure / recovery

Offer race, assignment conflict, handoff disagreement, connectivity loss, failed delivery, customer unavailable, payment uncertainty and duplicate proof preserve one assignment/custody/delivery truth and explicit recovery.

### Negative space

Not Partner-Captain delivery, not Customer Pickup, not advanced route optimization, not Captain-authored earnings.

## PARTNER_CAPTAIN_DELIVERY — Store-affiliated Captain fulfillment

JOURNEY_ID: PARTNER_CAPTAIN_DELIVERY
OUTCOME: A Store-affiliated canonical Captain accepts an authorized Store relationship and completes an eligible Partner-Captain Order to the Client without reusing BThwani-Captain financial semantics.
SURFACES: PARTNER, CAPTAIN, CLIENT, OPERATOR
OWNERS: IDENTITY, DSH, WLT
CAPABILITIES: STORE_CAPTAIN_MEMBERSHIP, STORE_CAPTAIN_HANDOFF, FINAL_MILE_DELIVERY, ORDER_LIFECYCLE, ORDER_PAYMENT_COLLECTION
ENTRY: Order mode is `PARTNER_CAPTAIN` and an active accepted Store-Captain membership exists.
EXIT: Delivery reaches a legal terminal DSH result with Store-owned internal Captain remuneration remaining outside WLT.
READBACK: Partner, Captain and Client read canonical fulfillment result.

### Supporting membership subflow

```text
PARTNER → invite canonical eligible Captain
CAPTAIN → accept / decline
DSH → ACTIVE membership only after acceptance
PARTNER → suspend/remove when authorized
CAPTAIN → leave when policy permits
```

### Failure / recovery

Unaccepted membership, stale membership, wrong Store, handoff disagreement and delivery failure fail closed. Membership history is not rewritten by later suspension/removal.

### Negative space

Partner Captain is not a sixth role. Store-Captain remuneration does not create BThwani-Captain wallet/earning/COD-receivable semantics.

## CUSTOMER_PICKUP — Partner readiness to customer pickup

JOURNEY_ID: CUSTOMER_PICKUP
OUTCOME: A Client completes a Store Order directly with the Partner through bounded pickup readiness/proof without introducing Captain semantics.
SURFACES: CLIENT, PARTNER
OWNERS: DSH, WLT
CAPABILITIES: CUSTOMER_PICKUP, ORDER_LIFECYCLE, ORDER_PAYMENT_COLLECTION
ENTRY: Store Order fulfillment mode is `CUSTOMER_PICKUP`.
EXIT: DSH records canonical pickup completion and WLT applies the relevant collection/commission effects.
READBACK: Client and Partner receive one canonical pickup result.

### Frontstage

```text
PARTNER → accept / prepare / ready for pickup
CLIENT → arrives
CLIENT ↔ PARTNER → bounded pickup proof
DSH → CUSTOMER_PICKED_UP
WLT → applicable collection / commission effect
```

### Failure / recovery

Wrong proof, stale readiness, cancellation and payment uncertainty remain explicit and recover through canonical readback.

### Negative space

No Captain dispatch, Captain custody, Captain COD exposure or delivery-address requirement is introduced merely because other modes use them.

## MULTI_STORE_ORCHESTRATION — parent checkout to independent Store Orders

JOURNEY_ID: MULTI_STORE_ORCHESTRATION
OUTCOME: One Client parent checkout coordinates independent Store Orders without erasing each Store's fulfillment, payment, exception or completion truth.
SURFACES: CLIENT, PARTNER, CAPTAIN
OWNERS: DSH, WLT
CAPABILITIES: MULTI_STORE_CHECKOUT, CART_CHECKOUT, ORDER_LIFECYCLE, ORDER_PAYMENT_COLLECTION, CAPTAIN_DISPATCH, STORE_CAPTAIN_MEMBERSHIP, CUSTOMER_PICKUP
ENTRY: Client confirms a parent intent containing eligible carts for multiple Stores.
EXIT: Each child Store Order has an independent result and parent orchestration exposes canonical aggregate readback.
READBACK: Client sees parent + child results; each Partner/Captain sees only authorized child work.

### Orchestration

```text
PARENT INTENT
→ child Store Order A
→ child Store Order B
→ ...
→ per-child payment + fulfillment + cancellation/refund/exception
→ optional bounded grouped execution plan
→ parent reconciliation/readback
```

### Failure / recovery

Partial child failure, duplicate parent retry, one-child cancellation/refund and grouped-plan failure do not rewrite successful siblings.

### Negative space

There is no single multi-Store Order and no advanced route optimizer implied by grouped coordination.

## ORDER_COMMUNICATION — order-scoped participant collaboration

JOURNEY_ID: ORDER_COMMUNICATION
OUTCOME: Authorized participants of one Store Order communicate during the legal conversation window without conversation state becoming Order, custody, payment or support-ticket authority.
SURFACES: CLIENT, PARTNER, CAPTAIN, OPERATOR
OWNERS: DSH
CAPABILITIES: ORDER_CONVERSATION
ENTRY: A canonical Store Order exists and the actor is a current authorized participant or authorized escalation participant.
EXIT: Conversation enters governed read-only closure after operational completion and grace policy.
READBACK: Messages, membership, unread/read and closure state are canonical DSH conversation readback.

### Parallel lane

Conversation runs beside normal fulfillment. Notifications are derived from owner events and may deep-link to the conversation; provider delivery failure does not change message or Order truth.

### Failure / recovery

Duplicate message retry, media upload failure, membership change, stale read receipt, offline send and post-closure write fail/recover against DSH state.

### Negative space

No generic customer-support ticket platform. Messages do not prove delivery, payment or refund approval.

## ORDER_ADJUSTMENT_EXCEPTION_REFUND — legal order change or exception to reconciled result

JOURNEY_ID: ORDER_ADJUSTMENT_EXCEPTION_REFUND
OUTCOME: A material Order problem or legal post-confirmation change is resolved across affected participants without rewriting the original Order snapshot or hiding financial consequences.
SURFACES: CLIENT, PARTNER, CAPTAIN, OPERATOR
OWNERS: DSH, WLT
CAPABILITIES: ORDER_LIFECYCLE, ORDER_PAYMENT_COLLECTION, PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT, CUSTOMER_BALANCE_MANUAL_WITHDRAWAL
ENTRY: A canonical Order encounters an allowed adjustment, cancellation, failure, dispute or financial exception; the rare customer-balance withdrawal path enters as a separate Finance/Operations subflow, not as Order mutation.
EXIT: Operational and financial outcomes are committed or explicitly remain in reconciliation-required state.
READBACK: Affected surfaces read canonical DSH operational result and WLT financial result.

### Order adjustment branch

```text
PARTNER → item unavailable / actual quantity differs
DSH → validate canonical OrderLine
→ remove item OR propose substitute OR record actual measured quantity
CLIENT → approve / reject / alternate when required
DSH → attributable adjustment history + final fulfilled snapshot
WLT → financial delta / refund / required additional financial treatment
PARTNER → continue only when required adjustment is resolved
```

Original confirmation snapshot remains immutable; adjustments are attributable facts.

### Exception branches

Pre-accept cancellation, post-accept cancellation, preparation failure, customer rejection of adjustment, custody mismatch, delivery failure, customer unavailable, governed return-to-Store when required, payment uncertainty, refund, external RefundCase and post-completion dispute remain explicit branches. Post-completion dispute does not silently reopen the completed Order.

### Customer withdrawal supporting subflow

`CUSTOMER_BALANCE_MANUAL_WITHDRAWAL` remains rare and non-self-service: Operations intake/evidence → WLT eligibility/hold → authorized Finance approval/execution → independent reconciliation → WLT liability finalization → Client balance readback.

### Failure / recovery

Concurrent cancellation/fulfillment, stale adjustment, duplicate refund, unknown external movement, custody ambiguity and offline participant response fail closed or remain reconciliation-required until owner readback resolves them.

### Negative space

No generic returns/exchange/warranty platform is admitted. Wrong/damaged/missing delivery may use bounded incident/refund handling only.

## CAPTAIN_COD_REMITTANCE — Captain cash receivable to reconciled closure

JOURNEY_ID: CAPTAIN_COD_REMITTANCE
OUTCOME: BThwani Captain-held COD cash is remitted through authorized Finance treatment until the WLT receivable/exposure is canonically closed.
SURFACES: CAPTAIN, OPERATOR
OWNERS: DSH, WLT
CAPABILITIES: ORDER_PAYMENT_COLLECTION, PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT
ENTRY: WLT has an open BThwani-Captain COD receivable backed by qualifying delivered-order evidence.
EXIT: Authorized remittance evidence is independently reconciled and WLT closes the corresponding receivable/exposure.
READBACK: Captain sees resulting liability/balance state; Finance reads canonical WLT reconciliation state.

### Failure / recovery

Partial/duplicate remittance, wrong reference, unknown provider/statement outcome and reconciliation mismatch remain explicit. Delivery completion alone never closes the receivable.

### Negative space

COD remittance is not Captain balance Cash-In and not Captain earnings payout.

## PARTNER_COMMISSION_REMITTANCE — Partner receivable to reconciled closure

JOURNEY_ID: PARTNER_COMMISSION_REMITTANCE
OUTCOME: A Partner commission receivable arising from Store-retained customer proceeds is settled or legally offset until WLT records canonical closure.
SURFACES: PARTNER, OPERATOR
OWNERS: DSH, WLT
CAPABILITIES: ORDER_PAYMENT_COLLECTION, PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT
ENTRY: WLT has an open Partner commission receivable from an eligible Store Order.
EXIT: Authorized payment/offset is reconciled and WLT closes or updates the receivable.
READBACK: Partner and Finance read the same WLT receivable result.

### Failure / recovery

Duplicate remittance, unauthorized offset, mismatched amount/reference and unknown external outcome remain explicit and reconcile before another movement.

### Negative space

Store-retained sale proceeds are not re-credited as a duplicate Partner wallet earning.

## BENEFICIARY_SETTLEMENT — earned entitlement to reconciled payout

JOURNEY_ID: BENEFICIARY_SETTLEMENT
OUTCOME: Eligible Partner, BThwani Captain or Field entitlement reaches an authorized reconciled payout/settlement result without surfaces becoming ledger writers.
SURFACES: PARTNER, CAPTAIN, FIELD, OPERATOR
OWNERS: IDENTITY, DSH, WLT
CAPABILITIES: PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT
ENTRY: DSH qualifying evidence has produced a WLT entitlement eligible for settlement.
EXIT: Payout is executed with immutable approved destination evidence and independently reconciled, or remains explicitly held/reconciling.
READBACK: Beneficiary surface and Finance read canonical WLT settlement state.

### Frontstage and handoffs

```text
DSH qualifying event
→ WLT entitlement / eligibility / hold
→ OPERATOR Finance preparation + approval + execution evidence
→ independent reconciliation
→ WLT completion
→ PARTNER / CAPTAIN / FIELD readback
```

### Failure / recovery

Destination change, stale approval, duplicate execution, provider uncertainty and statement mismatch never infer success from UI evidence; WLT finalizes only from governed reconciliation.

### Negative space

Store-affiliated Captain remuneration remains outside BThwani WLT earnings semantics.

## Supporting subflows and cross-cutting lanes

These are materially governed but are not promoted to top-level Journeys merely to satisfy coverage:

| ID | Disposition | Capability / owner | Participation |
|---|---|---|---|
| CLIENT_REGISTRATION_SESSION | SUPPORTING_SUBFLOW | `IDENTITY_ACTIVATION_SESSIONS` / Identity | Client access prerequisite |
| OPERATOR_BOOTSTRAP_SESSION | SUPPORTING_SUBFLOW | `IDENTITY_ACTIVATION_SESSIONS` / Identity | Operator access prerequisite |
| ROLE_SESSION_RECOVERY | SUPPORTING_SUBFLOW | `IDENTITY_ACTIVATION_SESSIONS` / Identity | managed-role recovery |
| OPERATOR_PERMISSION_ADMINISTRATION | POLICY_FLOW | `IDENTITY_ACTIVATION_SESSIONS` / Identity | finite Operator scopes |
| STORE_SCOPED_DELEGATION | SUPPORTING_SUBFLOW | `STORE_SCOPED_ACCESS_DELEGATION` / DSH + Identity admission | Partner workspace Store authority |
| STORE_CAPTAIN_MEMBERSHIP | SUPPORTING_SUBFLOW | `STORE_CAPTAIN_MEMBERSHIP` / DSH | Partner-Captain eligibility |
| ADDRESS_MANAGEMENT | SUPPORTING_SUBFLOW | `SERVICEABILITY_ADDRESSES` / DSH | ordering prerequisite |
| CART_MANAGEMENT | SUPPORTING_SUBFLOW | `CART_CHECKOUT` / DSH | ordering prerequisite |
| CUSTOMER_BALANCE_FUNDING | SUPPORTING_SUBFLOW | `CUSTOMER_BALANCE_FUNDING` / WLT | internal balance funding |
| CAPTAIN_BALANCE_FUNDING | SUPPORTING_SUBFLOW | `CAPTAIN_BALANCE_FUNDING` / WLT | BThwani Captain balance funding |
| PAYMENT_ALLOCATION | SUPPORTING_SUBFLOW | `ORDER_PAYMENT_COLLECTION` / WLT | checkout/payment boundary |
| COD_EXPOSURE_HOLD | SUPPORTING_SUBFLOW | `ORDER_PAYMENT_COLLECTION` / WLT | BThwani Captain dispatch boundary |
| CUSTOMER_MANUAL_WITHDRAWAL | SUPPORTING_SUBFLOW | `CUSTOMER_BALANCE_MANUAL_WITHDRAWAL` / WLT | Operations/Finance exception |
| ORDER_FEEDBACK | SUPPORTING_SUBFLOW | `ORDER_LIFECYCLE` / DSH | bounded completed-order feedback |
| NOTIFICATIONS | PROJECTION | DSH owner events + delivery adapter | many Journeys |
| TRACKING | PROJECTION | DSH | Captain fulfillment Journeys |
| MEDIA | CROSS_CUTTING_LANE | DSH relationship + media adapter | catalog/conversation/content |
| DELIVERY_PROOF | CROSS_CUTTING_LANE | DSH | delivery/pickup evidence |
| AUDIT | CROSS_CUTTING_LANE | each canonical owner | attributable mutation evidence |
| AUTHORIZATION | CROSS_CUTTING_LANE | each canonical owner | every material action/handoff |
| IDEMPOTENCY | CROSS_CUTTING_LANE | each mutation owner | duplicate-safe effects |
| CONCURRENCY | CROSS_CUTTING_LANE | each mutation owner | stale/conflicting mutation |
| OFFLINE_RECOVERY | CROSS_CUTTING_LANE | surface + canonical owner readback | applicable Journeys |
| UNKNOWN_OUTCOME | CROSS_CUTTING_LANE | receiving owner + reconciliation | cross-owner/provider effects |
| RESTART_RESUME | CROSS_CUTTING_LANE | canonical owner readback | applicable Journeys |
| ANALYTICS_SEARCH_CACHE | PROJECTION | derived | no mutation authority |
| OBSERVABILITY | CROSS_CUTTING_LANE | runtime operations | evidence, not business authority |

## Matrix — Journey × Surface

| Journey | CLIENT | PARTNER | CAPTAIN | FIELD | OPERATOR |
|---|---|---|---|---|---|
| MANAGED_PARTICIPANT_ADMISSION | — | DIRECT | DIRECT | DIRECT | DIRECT |
| PARTNER_TO_VISIBLE_STORE | READBACK | DIRECT | — | DIRECT | DIRECT |
| STORE_ORDERABILITY | DIRECT | DIRECT | — | — | CONDITIONAL |
| CATALOG_TO_CUSTOMER_OFFER | DIRECT | DIRECT | — | — | DIRECT |
| DISCOVERY_TO_COMMERCE_ENTRY | DIRECT | CONTEXT | — | — | DIRECT |
| SINGLE_STORE_ORDER_CREATION | DIRECT | READBACK | — | — | — |
| BTHWANI_CAPTAIN_DELIVERY | DIRECT | DIRECT | DIRECT | — | CONDITIONAL |
| PARTNER_CAPTAIN_DELIVERY | DIRECT | DIRECT | DIRECT | — | CONDITIONAL |
| CUSTOMER_PICKUP | DIRECT | DIRECT | — | — | — |
| MULTI_STORE_ORCHESTRATION | DIRECT | DIRECT | CONDITIONAL | — | — |
| ORDER_COMMUNICATION | DIRECT | DIRECT | CONDITIONAL | — | CONDITIONAL |
| ORDER_ADJUSTMENT_EXCEPTION_REFUND | DIRECT | DIRECT | CONDITIONAL | — | CONDITIONAL |
| CAPTAIN_COD_REMITTANCE | — | — | DIRECT | — | DIRECT |
| PARTNER_COMMISSION_REMITTANCE | — | DIRECT | — | — | DIRECT |
| BENEFICIARY_SETTLEMENT | — | DIRECT | DIRECT | DIRECT | DIRECT |

## Matrix — Capability participation

| Capability | Primary Journey / disposition | Relation |
|---|---|---|
| `IDENTITY_ACTIVATION_SESSIONS` | MANAGED_PARTICIPANT_ADMISSION | PRIMARY + SUPPORTING ACCESS |
| `PARTNER_ONBOARDING_STORE_PUBLICATION` | PARTNER_TO_VISIBLE_STORE | PRIMARY |
| `STORE_OPERATIONAL_AVAILABILITY` | STORE_ORDERABILITY | PRIMARY |
| `CENTRAL_CATALOG` | CATALOG_TO_CUSTOMER_OFFER | PRIMARY |
| `SERVICEABILITY_ADDRESSES` | SINGLE_STORE_ORDER_CREATION | SUPPORTING |
| `CART_CHECKOUT` | SINGLE_STORE_ORDER_CREATION | PRIMARY |
| `ORDER_LIFECYCLE` | SINGLE_STORE_ORDER_CREATION / fulfillment / exception | PRIMARY |
| `CAPTAIN_DISPATCH` | BTHWANI_CAPTAIN_DELIVERY | PRIMARY |
| `STORE_CAPTAIN_HANDOFF` | BTHWANI_CAPTAIN_DELIVERY / PARTNER_CAPTAIN_DELIVERY | PRIMARY |
| `FINAL_MILE_DELIVERY` | BTHWANI_CAPTAIN_DELIVERY / PARTNER_CAPTAIN_DELIVERY | PRIMARY |
| `ORDER_PAYMENT_COLLECTION` | order / fulfillment / remittance / exception | SUPPORTING FINANCIAL OWNER |
| `CUSTOMER_BALANCE_FUNDING` | CUSTOMER_BALANCE_FUNDING subflow | SUPPORTING_SUBFLOW |
| `CAPTAIN_BALANCE_FUNDING` | CAPTAIN_BALANCE_FUNDING subflow | SUPPORTING_SUBFLOW |
| `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT` | BENEFICIARY_SETTLEMENT + remittance Journeys | PRIMARY |
| `CUSTOMER_BALANCE_MANUAL_WITHDRAWAL` | CUSTOMER_MANUAL_WITHDRAWAL subflow | SUPPORTING_SUBFLOW |
| `STORE_CAPTAIN_MEMBERSHIP` | PARTNER_CAPTAIN_DELIVERY | SUPPORTING |
| `STORE_SCOPED_ACCESS_DELEGATION` | STORE_SCOPED_DELEGATION subflow | SUPPORTING_SUBFLOW |
| `CUSTOMER_PICKUP` | CUSTOMER_PICKUP | PRIMARY |
| `ORDER_CONVERSATION` | ORDER_COMMUNICATION | PRIMARY |
| `COMMERCE_PROMOTIONS` | DISCOVERY_TO_COMMERCE_ENTRY | PRIMARY |
| `DISCOVERY_CONTENT` | DISCOVERY_TO_COMMERCE_ENTRY | PRIMARY |
| `MULTI_STORE_CHECKOUT` | MULTI_STORE_ORCHESTRATION | PRIMARY |

## Matrix — Journey × Canonical Owner

| Journey | IDENTITY | DSH | WLT |
|---|---|---|---|
| MANAGED_PARTICIPANT_ADMISSION | PRIMARY | ELIGIBILITY | — |
| PARTNER_TO_VISIBLE_STORE | ROLE ADMISSION | PRIMARY | CONDITIONAL FIELD EFFECT LATER |
| STORE_ORDERABILITY | — | PRIMARY | — |
| CATALOG_TO_CUSTOMER_OFFER | — | PRIMARY | — |
| DISCOVERY_TO_COMMERCE_ENTRY | SESSION | PRIMARY | FUNDED INCENTIVE EFFECT |
| SINGLE_STORE_ORDER_CREATION | SESSION | PRIMARY | PAYMENT/COLLECTION |
| BTHWANI_CAPTAIN_DELIVERY | SESSION | FULFILLMENT | COD/COLLECTION/EARNING |
| PARTNER_CAPTAIN_DELIVERY | SESSION | FULFILLMENT | ORDER COLLECTION ONLY WHERE APPLICABLE |
| CUSTOMER_PICKUP | SESSION | PICKUP | COLLECTION/COMMISSION |
| MULTI_STORE_ORCHESTRATION | SESSION | PRIMARY | PER-CHILD FINANCE |
| ORDER_COMMUNICATION | SESSION | PRIMARY | — |
| ORDER_ADJUSTMENT_EXCEPTION_REFUND | SESSION | OPERATIONAL EXCEPTION | REFUND/RECONCILIATION |
| CAPTAIN_COD_REMITTANCE | SESSION | QUALIFYING EVIDENCE | PRIMARY |
| PARTNER_COMMISSION_REMITTANCE | SESSION | QUALIFYING EVIDENCE | PRIMARY |
| BENEFICIARY_SETTLEMENT | SESSION | QUALIFYING EVIDENCE | PRIMARY |

## Matrix — Journey × Correctness dimension

Legend: `A` applicable, `C` conditional, `N` not applicable for the Journey outcome.

| Journey | Authz | Idempotency | Concurrency | Offline | Retry | Unknown outcome | Restart | Audit | Notification | Media | Tracking | Financial | Exception | Readback |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| MANAGED_PARTICIPANT_ADMISSION | A | A | A | C | A | C | A | A | C | N | N | N | A | A |
| PARTNER_TO_VISIBLE_STORE | A | A | A | C | A | C | A | A | C | C | N | C | A | A |
| STORE_ORDERABILITY | A | A | A | C | A | C | A | A | C | N | N | N | A | A |
| CATALOG_TO_CUSTOMER_OFFER | A | A | A | C | A | C | A | A | C | A | N | N | A | A |
| DISCOVERY_TO_COMMERCE_ENTRY | A | A | A | C | A | C | A | A | C | A | N | C | A | A |
| SINGLE_STORE_ORDER_CREATION | A | A | A | A | A | A | A | A | C | C | N | A | A | A |
| BTHWANI_CAPTAIN_DELIVERY | A | A | A | A | A | A | A | A | A | C | A | A | A | A |
| PARTNER_CAPTAIN_DELIVERY | A | A | A | A | A | A | A | A | A | C | A | C | A | A |
| CUSTOMER_PICKUP | A | A | A | A | A | A | A | A | C | C | N | A | A | A |
| MULTI_STORE_ORCHESTRATION | A | A | A | A | A | A | A | A | C | C | C | A | A | A |
| ORDER_COMMUNICATION | A | A | A | A | A | C | A | A | A | A | N | N | A | A |
| ORDER_ADJUSTMENT_EXCEPTION_REFUND | A | A | A | A | A | A | A | A | A | C | C | A | A | A |
| CAPTAIN_COD_REMITTANCE | A | A | A | C | A | A | A | A | C | C | N | A | A | A |
| PARTNER_COMMISSION_REMITTANCE | A | A | A | C | A | A | A | A | C | C | N | A | A | A |
| BENEFICIARY_SETTLEMENT | A | A | A | C | A | A | A | A | C | C | N | A | A | A |

## Platform material census

Every currently material concept must have one explicit disposition. Absence from a top-level Journey is not omission when the concept is deliberately classified here or in the supporting-lanes table.

| Material concept | Canonical owner | Disposition | Placement | Status |
|---|---|---|---|---|
| Human Actor / managed role admission | Identity + domain eligibility | TOP_LEVEL_MULTI_SURFACE_JOURNEY | MANAGED_PARTICIPANT_ADMISSION | MAPPED |
| Partner joining / Store publication | DSH + Identity role handoff | TOP_LEVEL_MULTI_SURFACE_JOURNEY | PARTNER_TO_VISIBLE_STORE | MAPPED |
| Store schedule / pause / mode orderability | DSH | TOP_LEVEL_MULTI_SURFACE_JOURNEY | STORE_ORDERABILITY | MAPPED |
| Catalog / variants / taxonomy / offers / modifiers | DSH | TOP_LEVEL_MULTI_SURFACE_JOURNEY | CATALOG_TO_CUSTOMER_OFFER | MAPPED |
| Serviceability / address | DSH | SUPPORTING_SUBFLOW | SINGLE_STORE_ORDER_CREATION | MAPPED |
| Single-Store cart / checkout / Store Order | DSH + WLT effect | TOP_LEVEL_MULTI_SURFACE_JOURNEY | SINGLE_STORE_ORDER_CREATION | MAPPED |
| Optional different delivery recipient | DSH Order snapshot | SUPPORTING_SUBFLOW | SINGLE_STORE_ORDER_CREATION / delivery | MAPPED |
| BThwani Captain dispatch / handoff / custody / delivery | DSH + WLT effects | TOP_LEVEL_MULTI_SURFACE_JOURNEY | BTHWANI_CAPTAIN_DELIVERY | MAPPED |
| Partner Captain membership / delivery | DSH | TOP_LEVEL_MULTI_SURFACE_JOURNEY | PARTNER_CAPTAIN_DELIVERY | MAPPED |
| Customer Pickup | DSH + WLT effects | TOP_LEVEL_MULTI_SURFACE_JOURNEY | CUSTOMER_PICKUP | MAPPED |
| Multi-Store parent / independent children | DSH + WLT per child | TOP_LEVEL_MULTI_SURFACE_JOURNEY | MULTI_STORE_ORCHESTRATION | MAPPED |
| Order communication | DSH | TOP_LEVEL_MULTI_SURFACE_JOURNEY | ORDER_COMMUNICATION | MAPPED |
| Out-of-stock / substitute / actual variable measure | DSH + WLT delta | TOP_LEVEL_MULTI_SURFACE_JOURNEY | ORDER_ADJUSTMENT_EXCEPTION_REFUND | MAPPED |
| Cancellation / failure / custody mismatch / refund | DSH + WLT | TOP_LEVEL_MULTI_SURFACE_JOURNEY | ORDER_ADJUSTMENT_EXCEPTION_REFUND | MAPPED |
| Post-completion wrong/damaged/missing dispute | DSH + WLT | TOP_LEVEL_MULTI_SURFACE_JOURNEY | ORDER_ADJUSTMENT_EXCEPTION_REFUND | MAPPED |
| Customer balance funding | WLT | SUPPORTING_SUBFLOW | CUSTOMER_BALANCE_FUNDING | MAPPED |
| Captain balance funding | WLT | SUPPORTING_SUBFLOW | CAPTAIN_BALANCE_FUNDING | MAPPED |
| Captain COD receivable/remittance | WLT | TOP_LEVEL_MULTI_SURFACE_JOURNEY | CAPTAIN_COD_REMITTANCE | MAPPED |
| Partner commission receivable/remittance | WLT | TOP_LEVEL_MULTI_SURFACE_JOURNEY | PARTNER_COMMISSION_REMITTANCE | MAPPED |
| Partner/Captain/Field earning settlement | WLT | TOP_LEVEL_MULTI_SURFACE_JOURNEY | BENEFICIARY_SETTLEMENT | MAPPED |
| Customer manual withdrawal | WLT | SUPPORTING_SUBFLOW | CUSTOMER_MANUAL_WITHDRAWAL | MAPPED |
| Store delegated access | DSH + Identity admission | SUPPORTING_SUBFLOW | STORE_SCOPED_DELEGATION | MAPPED |
| Notifications / deep links / unread | DSH intent/read state + adapter delivery | PROJECTION | many Journeys | MAPPED |
| Tracking | DSH | PROJECTION | Captain fulfillment | MAPPED |
| Delivery/pickup proof | DSH | CROSS_CUTTING_LANE | fulfillment | MAPPED |
| Media | DSH relationship + adapter transport | CROSS_CUTTING_LANE | catalog/conversation/content | MAPPED |
| Authorization / audit / idempotency / concurrency | each canonical owner | CROSS_CUTTING_LANE | all applicable Journeys | MAPPED |
| Offline / retry / unknown outcome / restart | each owner + surface recovery | CROSS_CUTTING_LANE | all applicable Journeys | MAPPED |
| RTL / accessibility / complete user-visible states | Experience policy | POLICY_FLOW | every participating surface | MAPPED |
| Search / cache / analytics | derived | PROJECTION | read models | MAPPED |
| Prescription-required regulated pharmacy fulfillment | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| Generic returns/exchanges/warranty | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| Scheduled customer orders | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| Generic point-to-point courier requests | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| Advanced route optimization | future bounded adapter only if admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| Numeric/predictive Store capacity engine | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| Loyalty / paid membership / generic support ticketing / social review | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |
| ERP/POS / generic Partner team/tenant system | none admitted | EXPLICIT_NON_GOAL | current Product target | MAPPED |

## Journey acceptance law

For every participating surface, the applicable user-visible states are not polish: `loading`, `empty`, `ready`, `pending`, `success`, `forbidden`, `offline`, `conflict`, `reconciliation_required` and `error` must be deliberately handled or marked not applicable with reason by the implementation proof.

A Journey is not complete because endpoints exist. Current-material proof follows:

```text
INTENT
→ AUTHORIZATION
→ CANONICAL MUTATION
→ CROSS-OWNER HANDOFF WHEN APPLICABLE
→ CONSUMER SURFACE
→ USER-VISIBLE STATE
→ FAILURE / RETRY / UNKNOWN-OUTCOME TREATMENT
→ RESTART / RESUME
→ CANONICAL READBACK
```

The structural verifier proves only mechanically detectable relationships. It never proves semantic correctness from prose. An admitted capability outside the active delivery gate is not falsely claimed implemented merely because it is mapped here.
