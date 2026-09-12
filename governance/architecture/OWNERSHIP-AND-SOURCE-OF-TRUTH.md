# Ownership and Source-of-Truth Map

ARTIFACT_CLASS: DURABLE_ARCHITECTURE_GOVERNANCE
SEMANTIC_OWNER: governance/architecture/OWNERSHIP-AND-SOURCE-OF-TRUTH.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
IMPLEMENTATION_INVENTORY_AUTHORITY: NONE

## Purpose

This is a semantic ownership map, not a route/table/file registry.

For every material fact, implementation identifies:

```text
MEANING
→ CANONICAL OWNER
→ CANONICAL WRITER
→ DURABLE STORAGE CLASS WHEN APPLICABLE
→ CONTRACT/EVENT OWNER
→ DERIVED PROJECTIONS
→ REQUIRED CONSUMERS
→ MUTATION AUTHORITY
→ CANONICAL READBACK
```

## Core map

| Meaning | Owner / writer | Allowed derived consumers |
|---|---|---|
| actor identity/credential/authentication/activation/session | Identity | apps/services through Identity contracts |
| high-level actor-role admission and role-scoped session state | Identity | authorized apps/services through Identity contracts |
| first-Operator bootstrap-completed fact | Identity | control-panel/bootstrap tooling through Identity contract/readback only |
| business authorization scope/operational permission/context | capability/domain that owns the protected business truth; currently DSH for Partner/Store/assignment scope | authorized consumers through owner contracts |
| client/Partner/captain operational participant profile/status/eligibility | DSH | authorized DSH surfaces and dependent services through DSH contracts |
| field-assisted Partner/first-Store onboarding assignment/evidence scope | DSH `PARTNER_ONBOARDING_STORE_PUBLICATION` | app-field/control-panel and Partner readback through DSH contracts |
| Partner operational truth and Partner↔Store relationship | DSH; Partner is keyed by the Partner actor's canonical `actor_id` | app-partner/control-panel and dependent services through DSH contracts |
| Store operational truth | DSH | authorized Partner/operator hosts and dependent services through contracts |
| address/serviceability/order/dispatch/delivery/support | DSH | apps and WLT where trusted operational evidence is required |
| wallet/ledger/payment/refund | WLT | DSH/app bounded projections/readback |
| commission/settlement/payout/reconciliation/COD exposure | WLT | authorized stakeholder/operator reads |
| deployable route/navigation/shell composition | each app host | local presentation only |
| design tokens/primitives | Design System technical owner | deployable app hosts and explicitly admitted host-neutral reusable presentation abstractions; never an app-shaped service feature UI tree |
| external provider secret value | approved secret store/runtime binding | adapter only; never client/general DB truth |
| provider operation outcome | operation-owning domain | projections only after owner normalization/reconciliation |

`control-panel` and `operator` are not source-of-truth owners by themselves. An Operator expresses authorized intent through the host; the affected Identity/DSH/WLT/admitted capability validates, writes and reads back its own truth.

## Partner ownership law

```text
PARTNER = ONE PARTNER-ROLE ACTOR / PRODUCT STAKEHOLDER
PARTNER_CANONICAL_CROSS_BOUNDARY_ID = actor_id
PARTNER_ORGANIZATION = NOT_ADMITTED
PARTNER_MEMBER = NOT_ADMITTED_AS_SECOND_ENTITY
PARTNER_TEAM_MEMBERSHIP = NOT_ADMITTED
STORE = DSH_RESOURCE_MANAGED_BY_PARTNER
```

Do not manufacture an organization/member/membership layer merely to model the Partner actor's relationship to its Stores. If a future Product requirement truly needs multiple independent Partner users or another Partner lifecycle, it must be admitted explicitly before implementation.

## Operator ownership law

```text
OPERATOR = ONE OPERATOR-ROLE ACTOR / CONTROL-PANEL PERSONA
OPERATOR_CANONICAL_CROSS_BOUNDARY_ID = actor_id
BOOTSTRAP = ONE_TIME_IDENTITY_LIFECYCLE
CONTROL_PANEL = HOST_NOT_DOMAIN_OWNER
OPERATOR_INTENT → APPLICABLE_CANONICAL_OWNER
```

The Operator role identifies the acting human; it does not transfer ownership of the affected fact. Any new permission/approval distinction is introduced by the capability whose concrete lifecycle requires it.

## Projection law

```text
DERIVED != AUTHORITATIVE
CACHED != CANONICAL
MATERIALIZED != SECOND_WRITER
SEARCH_INDEX != SOURCE_DOMAIN
ANALYTICS != TRANSACTIONAL_TRUTH
```

A projection used for an authoritative mutation decision must be proven sufficiently fresh/owned by contract or the owner must be queried.

## Ownership conflict law

```text
TWO_MUTABLE_WRITERS_FOR_ONE_MEANING = DEFECT
BOTH_SYSTEMS_KEEP_IT_IN_SYNC = NOT_OWNERSHIP
```

When two systems appear to own the same fact, resolve the semantic owner first, then redesign writer/readback/projection flow.

## Additional durable meaning classes

The following classes must preserve single-owner semantics when present:

| Meaning | Canonical owner / writer | Derived or delivery role |
|---|---|---|
| cart/checkout operational truth | DSH CART_CHECKOUT; WLT owns financial quote/payment-session facts | ORDER_CREATION consumes only eligible checkout evidence; apps consume canonical readback |
| field-assisted Partner/first-Store onboarding assignment/visit/check/evidence | DSH PARTNER_ONBOARDING_STORE_PUBLICATION | app-field and control-panel operate the onboarding subflow; Partner consumes committed readback; no standalone field-operations owner exists |
| campaigns/audiences/placements/loyalty/non-financial program eligibility | DSH MARKETING_CAMPAIGNS_LOYALTY; WLT owns monetary charging/posting; promotion funding stays in its governed cross-owner capability | apps/checkout/notifications consume bounded eligibility/readback |
| customer profile/preferences excluding authentication | DSH customer/profile capability unless a future explicit owner supersedes it | apps consume bounded readback |
| customer account/privacy request lifecycle and cross-owner completion state | DSH ACCOUNT_PRIVACY_LIFECYCLE coordinator; each canonical owner remains writer of its own identity/profile/financial/audit disposition | app/external request surface and authorized support consume privacy-safe status/readback; Identity/WLT/other owners do not become DSH-owned truth |
| catalog taxonomy/master-product/attribute/relationship/assortment identity and approval/publication eligibility | DSH CENTRAL_CATALOG; approval/publication is a named subcapability | Stores/apps consume governed readback; discovery/search are derived consumers |
| promotion/coupon operational eligibility | DSH for commerce eligibility; WLT owns resulting authoritative monetary postings/effects | clients/operators consume bounded readback |
| notification source event/business meaning | originating domain | DSH Notifications owns inbox/preferences/topic/delivery records; channel adapters execute transport; app host owns native route translation |
| media asset business association/authorization | owning business domain | object-storage adapter owns transport/storage mechanics only |
| rating/review business record and moderation policy | DSH trust/commerce capability unless explicitly rehomed | search/analytics may project it |
| analytics/operational dashboards | DSH operational-analytics derived projection owner; underlying facts remain at source domains | never transactional writer or authorization source; rebuild from canonical sources |
| search/discovery index/result | derived query capability | source domains remain eligibility/mutation authority |
| pricing/penalty/collateral financial truth | WLT when value/financial exposure is authoritative; DSH may own non-financial operational inputs | projections only outside owner |

A row establishes ownership class, not a promise that a particular implementation already exists. Current implementation must still be proven from executable evidence.
