# BThwani — Whole-Program Dependency Map (Planning Reference)

DOCUMENT_CLASS: NONAUTHORITATIVE_PROGRAM_PLANNING_REFERENCE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

This is **one revisable coverage and ordering reference**, not Product truth, an executable backlog, proof of closure, a migration plan, or authorization to implement every row. The semantic owners remain `governance/product/PRODUCT.md`, `CAPABILITIES.md`, `JOURNEYS.md`, the individual capability owners and System/Policy Governance. The **current source/runtime/readback** determines which outcomes are already implemented and proven. `EXECUTION-CONTRACT.md` is the one owner of the slice-selection method.

## 1. Program universe and closure language

Census the **23 currently admitted Product capabilities** and **15 top-level cross-surface Journeys** from their canonical indexes at planning time. These counts describe the admitted baseline, **not 23 or 15 implementation slices**. If the indexes change, recompute coverage rather than trusting a stale count. Report for every capability and material integration handoff: `PROVEN`, `IMPLEMENTED_UNPROVEN`, `REMAINDER`, `BLOCKED`, or `NOT_YET_IN_CURRENT_GATE`, with exact HEAD and specific evidence. Unknown is not proven.

- A row below is a **candidate observable outcome**; group inseparable rows and split a row only when causal ownership/proof requires it. IDs are stable for discussion **within this planning reference only**, not an authority to execute by numeric order.
- `HARD` edges are defined by the current capability owner plus actual code/contracts, not numbers or diagram arrows. `REFERENCE_READY` is scenario-specific owner-backed data. `PROGRAM_ORDER` is the current user's preferred early validation path, not permanent business law. `INTEGRATION_PROOF` is established at the first real cross-owner handoff.
- Reevaluate only changed edges and invalidated proof when implementation advances. Never rebuild a proven capability because its candidate row appears earlier here.
- A local database may contain a city, vertical, category or product; existence/active counts alone do not prove ownership, relationships, API usability, actor authorization or the desired business scenario.

## 2. Early program frontier: dependency classification

| Outcome | HARD / REFERENCE_READY before its claimed success | PROGRAM_ORDER / other note |
| --- | --- | --- |
| Initial Operator workspace | Identity actor, unique first-operator authority, active Operator session/scope, authorized Control Panel and owner readback | Foundation first; all applicable technical closure evidence is mandatory; no additional user-manual approval gate. |
| Service City reference administration | Authorized Operator `platform_policies` and DSH canonical registry/CRUD/version readback | Prepare relevant active cities before Field/Store scenario tests. No all-Yemen data preload. |
| Commerce Vertical and Commercial Store Type | Authorized Operator `catalog`; active vertical before a compatible store type; DSH writer/readback | Prepare real scenario values before submitting first-Store intake. |
| Shared category/attribute rules | Active compatible Commerce Vertical; DSH catalog writer/readback | Category is not CommercialStoreType; do not confuse with StorefrontSection. |
| Shared Product/Variant and import | Owner-authorized catalog identity and variant rules; applicable shared taxonomy/typed values | A complete preloaded catalog is **not HARD** for Field role admission or JoiningCase intake. |
| Field candidate and standing | Operator authorization; DSH standing review/eligibility, permitted active city scope or admitted all-cities scope, currently required active wallet-provider option | An admitted Field can activate before all shared categories/products exist. |
| Field role activation | Authorized, eligible DSH standing; Identity role admission, one actor_id and valid activation/session | Prove the role/standing boundary; no Seed, no phone-authoritative role. |
| Submitted first-Store JoiningCase | Eligible authorized origin; active ServiceCity + CommerceVertical + compatible CommercialStoreType; required evidence, location, hours, fulfillment-mode facts | **Not** all shared products. |
| Store and Partner acceptance | Authorized DSH review, Identity Partner admission and canonical owner binding | Field cannot approve its own case; Partner must accept applicable conditions. |
| Store customer-visible publication | Store/city/type eligibility; required initial catalog; Store-specific WLT agreement with exact Partner acceptance + Finance approval; Operator readiness | Distinct from Store operational orderability and delivery serviceability. |
| Client Store checkout | Client role/address, published + currently orderable Store, eligible offers/quantities/modes and DSH serviceability; WLT financial intent/reconciliation | No invoice/order success before authoritative owner readback. |
| Platform Captain dispatch | Prepared Store Order, standing Captain, legal availability and WLT exposure where applicable | Distinct from Partner Captain membership and Customer Pickup. |

**Corrections to previous over-serial planning:** Customer Identity can be developed after Identity foundation independently of Field/Partner; Store-scoped delegation need not wait for customer-visible Store publication when the current ownership and invitation gates are met; Captain standing does not require an already delivered Order; Customer Pickup does not require platform Captain dispatch; WLT foundational ledger contracts are prerequisites at first payment/commission handoff, not after a completed delivery. Never declare the **entire** Store-catalog subsystem a hard gate to Field authentication.

## 2A. Currently selected post-Operator coherent foundation (SLICE 002)

The current local delivery program groups reference-facing candidate outcomes **P02 + P03 + P04 + P05 (only the admission-relevant operational options) + P06** into **one** bounded technical execution slice. This grouping reduces artificial micro-slices; it does **not** collapse the distinct canonical DSH entities, invent a generic settings store, move WLT monetary truth to DSH, or mandate an exhaustive Yemen-wide dataset.

The slice closes actual ServiceCity, CommerceVertical, CommercialStoreType, CatalogCategory hierarchy, attribute definitions/typed category rules/enum options and category media as **reference structures**. It validates the admitted official-wallet-provider registry and the existing initial fulfillment-mode options; do not turn fulfillment choices into newly configurable products when Governance admits only defined modes. Real active representative options must be queryable by their intended Operator, Field and client consumers and stay valid across idempotent replay, stale version, disabled ancestor and process restart. The first-Store intake's City + Vertical + compatible Type is a hard data requirement; category rule/image readiness is prepared in this selected program phase but an exhaustive Shared Product catalog is not required for Field activation.

Explicitly **not** part of this foundation: all Shared Product/Variant media and import flows, activation of a Field/Partner/Captain role, real JoiningCase submission, Store publication/financial agreement, Store-specific fulfillment policy edits, WLT funds or checkout. Boundary-only compatibility probes for affected consumers are in scope. If the dependency census disproves this grouping or reveals a material earlier blocker, stop and correct the authorized plan before broadening execution.

## 3. Full candidate-outcome coverage — topological guidance, not a mandatory linear backlog

The list ensures **no admitted workstream is omitted** when planning the program from the first Operator to end-to-end closure. The actual next slice is selected by the `EXECUTION-CONTRACT` backward-predecessor gate, not by this row number.

| Ref | Observable candidate outcome | Earliest ownership / prerequisite family |
| --- | --- | --- |
| P01 | Initial Operator authority, stable local access, Passkey, scopes and workspace | Identity → Operator |
| P02 | Service City registry and active reference readback | Operator → DSH |
| P03 | Commerce Vertical registry and first-Store classification | Operator → DSH |
| P04 | Compatible Commercial Store Type registry | P03 → DSH |
| P05 | Required operational reference options, including admitted wallet-provider choices and initial fulfillment policies | Operator → DSH/WLT; only what the target scenario needs |
| P06 | Shared CatalogCategory hierarchy and typed attribute policy | P03 → DSH catalog |
| P07 | Shared Product and ProductVariant identity and identifiers/media | P06 as applicable → DSH catalog |
| P08 | Catalog imports, proposals, registry search, bounded readback | P07 where affected; Operator → DSH |
| P09 | Field candidate, city scope, review, approval, DSH standing | P02, P05 where required → DSH |
| P10 | Field role admission, activation, stable Field workspace/session | P09 → Identity → Field |
| P11 | Field joining draft, private evidence, map, schedule, media | P02–P04, P10 → DSH/Field |
| P12 | Joining submission, authorized review/correction and resume | P11 → DSH/Operator/Field |
| P13 | Partner role eligibility, Identity admission, activation | P12 → DSH/Identity/Partner |
| P14 | Store creation, owner relation and immutable joining-intake provenance | P12–P13 → DSH |
| P15 | Store-specific WLT agreement proposal/Partner acceptance/Finance approval | P14 → WLT/Partner/Finance |
| P16 | Field authorized pre-Go-Live Store assortment, offers/local items | P14 and applicable catalog truth → DSH |
| P17 | Final Store readiness, customer-visible publication and Field handoff | P15–P16 → DSH/Client |
| P18 | Store-scoped owner invitations and delegated access grants | Eligible Store ownership + Identity role, **not necessarily P17** |
| P19 | Ongoing Partner Store catalog/offers/modifiers and management | DSH Store ownership/grants and catalogue policies |
| P20 | Store hours, temporary pause, current orderability and fulfillment-mode state | Published Store + admitted mode → DSH |
| P21 | Client self-registration, verification, role-scoped sessions | Identity; independent of P09–P20 |
| P22 | Client delivery address + canonical Service City scope and serviceability | P02, P21, customer-visible Store → DSH |
| P23 | Customer-safe discovery, storefront and product readback | Published Store + eligible catalog and client-safe projections |
| P24 | Store-scoped cart, variants/quantities, modifiers, version/readback | P21, P23, eligible StoreOffer → DSH |
| P25 | WLT payment, cash collection and amount/commission foundations | WLT + Store-specific agreement and valid Order financial context |
| P26 | Single-Store checkout and canonical DSH Store Order | P20, P22, P24, P25 → DSH/WLT |
| P27 | Partner Order acceptance, preparation, readiness, exceptions | P26 → Partner/DSH |
| P28 | Customer Pickup lane and proof, without Captain identity | P26–P27 → DSH/WLT |
| P29 | Customer Cash-In intent, WLT internal balance and reconciliation | P21 + WLT/provider; optional for cash-only checkout |
| P30 | Captain standing admission, role and activated session | DSH + Identity/Operator; independent of prior delivery |
| P31 | Captain availability, funding, COD exposure/collateral where applicable | P30 + WLT/DSH |
| P32 | BThwani Captain offer, acceptance and assignment | P27, P30–P31 → DSH |
| P33 | Canonical Store-to-Captain custody transfer | P32 → DSH |
| P34 | Final-mile delivery, tracking/proof and completion | P33 → DSH/WLT |
| P35 | Store-affiliated Captain invitation/membership | Canonical Store + Captain standing → DSH |
| P36 | Partner-Captain delivery and distinct financial responsibility | P27 + P35 → DSH/WLT |
| P37 | Authorized Order adjustments, cancellation, disputes and refund deltas | Existing affected Order + correct owner-specific state; **not all delivery modes** |
| P38 | Captain COD cash remittance, matching and exposure closure | Qualifying P34 COD → WLT/Finance |
| P39 | Partner commission receivable, matching and closure | Qualifying Store-collected-cash order → WLT/Finance |
| P40 | Partner/Captain/Field earnings, recipient proof and governed payout | Qualifying owner events (Store visibility / delivery), WLT |
| P41 | Rare Operations-initiated customer manual withdrawal exception | WLT eligible customer balance + Finance/Operations |
| P42 | Platform/Store promotions, eligibility, coupon and WLT subsidy | Eligible catalog/Store/customer cart, DSH/WLT |
| P43 | Editorial discovery-content target and publication | Canonical target and DSH/media; not necessarily funded promotion |
| P44 | Order-scoped participant conversation, notifications and feedback | Actual Order/authorized role or attributable event |
| P45 | Multi-Store checkout, independent child Orders and reconciliation | Proven single-Store Order semantics + independent effects |
| P46 | Cross-surface Journey regression and program-wide acceptance evidence | Applicable upstream outcomes; **proof milestone, not a new Product capability** |

## 4. Whole-universe census and proof lanes

The Product capability universe to reconcile (each points to its sole existing owner): `IDENTITY_ACTIVATION_SESSIONS`, `PARTNER_ONBOARDING_STORE_PUBLICATION`, `STORE_OPERATIONAL_AVAILABILITY`, `CENTRAL_CATALOG`, `SERVICEABILITY_ADDRESSES`, `CART_CHECKOUT`, `ORDER_LIFECYCLE`, `CAPTAIN_DISPATCH`, `STORE_CAPTAIN_HANDOFF`, `FINAL_MILE_DELIVERY`, `ORDER_PAYMENT_COLLECTION`, `STORE_COMMERCIAL_AGREEMENT`, `CUSTOMER_BALANCE_FUNDING`, `CAPTAIN_BALANCE_FUNDING`, `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`, `CUSTOMER_BALANCE_MANUAL_WITHDRAWAL`, `STORE_CAPTAIN_MEMBERSHIP`, `STORE_SCOPED_ACCESS_DELEGATION`, `CUSTOMER_PICKUP`, `ORDER_CONVERSATION`, `COMMERCE_PROMOTIONS`, `DISCOVERY_CONTENT`, `MULTI_STORE_CHECKOUT`.

The E2E proof universe to reconcile (each remains owned by `JOURNEYS.md`): `MANAGED_PARTICIPANT_ADMISSION`, `PARTNER_TO_VISIBLE_STORE`, `STORE_ORDERABILITY`, `CATALOG_TO_CUSTOMER_OFFER`, `DISCOVERY_TO_COMMERCE_ENTRY`, `SINGLE_STORE_ORDER_CREATION`, `BTHWANI_CAPTAIN_DELIVERY`, `PARTNER_CAPTAIN_DELIVERY`, `CUSTOMER_PICKUP`, `MULTI_STORE_ORCHESTRATION`, `ORDER_COMMUNICATION`, `ORDER_ADJUSTMENT_EXCEPTION_REFUND`, `CAPTAIN_COD_REMITTANCE`, `PARTNER_COMMISSION_REMITTANCE`, `BENEFICIARY_SETTLEMENT`.

Do not claim a whole Journey complete because its participating capability files exist. Verify actual owner-backed cross-surface handoffs and negative cases in the applicable delivery gate. Nothing in this reference authorizes a synthetic permanent actor, direct SQL bypass, account reset, product catalog mass-seeding or production deployment.

## 5. Source-vs-exemplar falsification lessons

- Merchant marketplaces distinguish merchant onboarding, menu/catalog readiness and store-go-live. DoorDash's *integration-specific* retail SKU thresholds are **not** BThwani admission rules.
- Uber Eats separates store hours/online pause from menu content, supporting an independently proven current orderability result. Its menu entity graph is not automatically BThwani's shared taxonomy.
- Saleor and Medusa distinguish catalog/product variants, regional selling context, inventory and fulfillment. Their `Channel`/`Region` abstractions are **not** a mandate to make BThwani ServiceCity a tenant or add a generic inventory system.
- External examples are **question-specific disconfirmation tools only**. Current BThwani Governance and verified business-owner decisions determine admitted behavior; do not copy competitor thresholds, license-incompatible code or vendor-specific topology.

## 6. Next-slice check

Before the current post-Operator composite reference foundation, prove P01's applicable technical closure gates at the exact tested HEAD, then inspect and retain existing DSH-owned City/Vertical/Type/Category/Attribute/WalletProvider records and readbacks. Close only real gaps across the selected foundation, not just City alone. Enforce `platform_policies` for City/provider policy and `catalog` for vertical/type/category/attribute administration; cross-check actual Field joining selectors and reference compatibility. The complete Shared Product/Variant lifecycle remains a distinct later outcome. An unproven hard predecessor blocks execution, but **no user-manual acceptance** is required. This map does not grant authority to push, merge or start the next slice absent the authorized technical gate.
