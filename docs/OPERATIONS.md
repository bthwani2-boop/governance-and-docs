# Operations and Recovery Method

DOCUMENT_CLASS: NONAUTHORITATIVE_OPERATIONS_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

Operational actions are source-derived from the exact implementation candidate. This file does not freeze commands, ports, container names, credentials or provider settings.

For an incident/recovery: establish exact environment and authority → identify canonical owner → capture evidence → stop unsafe duplicate writers/runtimes → recover through canonical owner → reconcile unknown external/cross-service effects → verify authoritative readback → diagnose root cause → update implementation, verifier and durable knowledge when materially required.

Never copy secrets into this repository. Never treat logs/cache/UI state as stronger than canonical owner readback.
