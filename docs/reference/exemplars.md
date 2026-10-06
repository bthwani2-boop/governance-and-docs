# Product and OSS Exemplars

DOCUMENT_CLASS: NONAUTHORITATIVE_EXTERNAL_REFERENCE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
ADOPTION_AUTHORITY: NONE
REFERENCE_FRESHNESS: REVALIDATE_AT_USE
REFERENCE_CLASS: OSS_AND_PRODUCT_EXEMPLAR

Use exemplars to recover edge cases, state machines, failure/recovery patterns and test oracles. They do not define BThwani target architecture.

## Commerce and delivery
- Shopify developer docs — https://shopify.dev/docs
- Shopify open-source engineering — https://github.com/Shopify
- commercetools docs — https://docs.commercetools.com/
- Saleor — https://github.com/saleor/saleor
- Medusa — https://github.com/medusajs/medusa
- Fleetbase — https://github.com/fleetbase/fleetbase
- Traccar — https://github.com/traccar/traccar
- Valhalla — https://github.com/valhalla/valhalla
- VROOM — https://github.com/VROOM-Project/vroom

### Global commerce and delivery product benchmarks

Use these as non-authoritative product and operations benchmarks when their proven patterns can materially improve a BThwani decision. Public company GitHub organizations are engineering/OSS references only; they are **not** the source code of the corresponding commercial product and must not be used to infer private implementation details.

- Shopify — https://www.shopify.com/ — commerce benchmark for catalog, products/variants/options, inventory, pricing, discounts, merchant operations, order lifecycle, fulfillment, permissions, media and bulk operations. Public engineering/OSS: https://github.com/Shopify
- Talabat — https://www.talabat.com/ — MENA marketplace/delivery benchmark for multi-vertical discovery, merchant operations, ordering, delivery-state UX, promotions and regional operational patterns. Talabat is part of Delivery Hero; use the parent company's verified public engineering/OSS only as an engineering reference, not as Talabat product source: https://github.com/deliveryhero
- Amazon — https://www.amazon.com/ — marketplace benchmark for catalog depth, seller/offer separation, availability, fulfillment, returns/refunds, trust, search/filtering and large-scale commerce operations. Public engineering/OSS: https://github.com/amzn
- DoorDash — https://www.doordash.com/ — on-demand delivery benchmark for merchant/customer/courier coordination, fulfillment state machines, dispatch, ETA, substitutions, support and delivery recovery. Public engineering/OSS: https://github.com/doordash
- Uber Eats — https://www.ubereats.com/ — delivery marketplace benchmark for discovery, ordering, courier handoff, live delivery states, ETA, support and multi-sided marketplace UX. Use Uber's public engineering/OSS as an engineering reference, not as Uber Eats product source: https://github.com/uber
- Noon — https://www.noon.com/ — MENA marketplace benchmark for catalog, offers/sellers, pricing, fulfillment, returns, regional merchandising and marketplace UX. No verified official Noon GitHub OSS organization is recorded here; revalidate at use rather than linking an unverified repository.

Benchmark extraction rule: compare **domain logic, state machines, edge cases, failure/recovery behavior, operational controls and UX patterns**. Adopt only patterns that fit BThwani's canonical product model and owners. Never copy external terminology, architecture, provider constraints or workflows merely because they exist in a market leader.

### Yemen delivery market product exemplars

Use these products only when current Yemen-market evidence can materially change the question being decided. This is a curated routing set, not an exhaustive competitor catalog, market ranking, backlog, feature matrix or Product-requirements source. Absence from this list does not imply irrelevance.

At use, revalidate current product status, public surfaces/package identity, city coverage, capabilities, pricing, payment methods, policies, reviews and release behavior. Popularity, repetition across competitors or presence in a competitor does not establish a BThwani requirement. Extract only decision-relevant edge cases, state machines, failure/recovery behavior, experience evidence and test-oracle value; map proven value to the current BThwani owner. Do not preserve research transcripts, APK/decompiled output, screenshots or mutable competitor inventories as live durable knowledge.

- Tawseel One — Android customer surface `com.smartapps.tawseel` — https://play.google.com/store/apps/details?id=com.smartapps.tawseel — broad Yemen delivery-commerce, customer ordering/tracking and cross-surface delivery behavior; discover other current public Tawseel surfaces when the material question requires them.
- Etlobni — Android customer surface `com.etlobni` — https://play.google.com/store/apps/details?id=com.etlobni — Sana'a delivery-commerce, ordering, payment and customer-experience evidence.
- Talqh — Android customer surface `com.talka.express.customer` — https://play.google.com/store/apps/details?id=com.talka.express.customer — multi-vertical delivery, parcel/task patterns and delivery-commerce experience evidence.
- Nass — Android customer surface `com.teknokeys.nass` — https://play.google.com/store/apps/details?id=com.teknokeys.nass — Sana'a ordering, delivery execution and customer-experience evidence.
- On Time — Android customer surface `com.ontime.application` — https://play.google.com/store/apps/details?id=com.ontime.application — Sana'a multi-vertical delivery, location/tracking, payment and failure/recovery evidence.
- Safir — Android customer surface `com.safir.safirappye` — https://play.google.com/store/apps/details?id=com.safir.safirappye — Aden commerce/delivery, payment and support-experience evidence.
- Wssy — Android customer surface `com.wssy.wssy_app` — https://play.google.com/store/apps/details?id=com.wssy.wssy_app — Aden restaurant/customer ordering and delivery-experience evidence.
- Bajilek — Android customer surface `com.bajilek.bajilekuserapp` — https://play.google.com/store/apps/details?id=com.bajilek.bajilekuserapp — Aden local-commerce discovery, ordering, location and delivery-tracking evidence.
- Alhodhod City — Android customer surface `com.hodhod_plus.user` — https://play.google.com/store/apps/details?id=com.hodhod_plus.user — multi-service local delivery, grocery/parcel patterns and customer-experience evidence.

For a material Yemen-market question, discover additional current competitors at use when they may change the decision rather than expanding this file into a standing market inventory.

## Identity and authorization
- Keycloak — https://github.com/keycloak/keycloak
- ZITADEL — https://github.com/zitadel/zitadel
- Ory — https://github.com/ory
- OpenFGA — https://github.com/openfga/openfga

## Finance
- Stripe docs — https://docs.stripe.com/
- Adyen docs — https://docs.adyen.com/
- TigerBeetle — https://github.com/tigerbeetle/tigerbeetle
- Formance Ledger — https://github.com/formancehq/ledger
- Blnk — https://github.com/blnkfinance/blnk
- Apache Fineract — https://github.com/apache/fineract

Experience/accessibility/design-system implementation exemplars are routed through `experience.md` so their evidence class is explicit and does not compete with domain/Product exemplars.

EXEMPLAR_VALUE != EXEMPLAR_AUTHORITY.
