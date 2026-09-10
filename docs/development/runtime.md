# Runtime, Configuration and Development Providers

DOCUMENT_CLASS: HUMAN_DEVELOPMENT_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
CURRENT_RUNTIME_TRUTH_SOURCE: live repository scripts/configuration
CURRENT_VALUE_TRUTH_SOURCE: EXECUTABLE_CONFIG
CURRENT_PROVIDER_CONFIG_TRUTH_SOURCE: live repository configuration

## Runtime authority

Current repository service execution is intentionally limited to `development`/`test` until stronger environments and their authorities are explicitly materialized. Production-oriented configuration may be validated without granting Production runtime authority.

Runtime shape and lifecycle commands are implementation facts. Resolve them from the consuming repository's exact pinned `package.json`, runtime scripts and executable configuration. This guide must not freeze command names, ports, Compose projects, profiles or alternate topologies.

A verification class does not create a second runtime authority:

```text
DAILY DEVELOPMENT NEED != SECOND RUNTIME TOPOLOGY
INTEGRATION TEST != SECOND RUNTIME OWNER
TEST ISOLATION != AUTOMATIC FIXED HOST-PORT STACK
```

When the consuming repository has one canonical local lifecycle/topology, daily development and integration evidence use that owner unless the exact claim proves that isolation is materially required. If isolation is required, it must be deliberately bounded, non-conflicting and self-cleaning; it must not become a second ordinary developer path. Never solve ownership defects by silently selecting another port.

## Stateful dependencies

PostgreSQL/PostGIS provides relational durable development state according to service boundaries. Object storage remains an adapter behind owner-domain semantics. Redis/Valkey is optional cache/coordination infrastructure and must never become Product truth. Docker is a runtime mechanism, not semantic authority; whether a component runs in Docker or on the host is determined by the current canonical repository topology.

Development external services receive synthetic/test data only.

## Configuration classes

Keep separate:

- build/deployable configuration;
- runtime environment configuration;
- platform-governed variables/flags;
- secret references/values;
- user/business state.

Secret values do not belong in Git, client bundles, generic database rows, ordinary logs/traces or public configuration. Public mobile/web environment variables contain only public-client-safe values.

Platform-governed variables require server-side schema/type validation, version/audit/reason/rollout/readback and cannot bypass domain authorization/invariants.

Missing security-, finance- or correctness-critical configuration fails safely instead of silently selecting insecure or alternate fallbacks.

## Identity runtime credentials

Identity internal service identity is derived server-side from configured bearer credentials such as DSH and Platform Control service tokens. These tokens are distinct and validated; callers do not provide trust headers to compensate for missing business authorization modeling.

Challenge HMAC/delivery configuration remains server/runtime state, never a client authority. Development examples are placeholders, not production secrets.

## Development providers and simulators

Provider names do not define domains. Daily development should prefer deterministic low-cost sinks/simulators unless the real external channel is the test objective.

Identity owns challenge lifecycle; SMS/email/push are transport channels. The ordinary `development`/`test` Identity runtime accepts the repository-local Mailpit sink only; other delivery modes fail closed before a delivery worker can start. Real-provider qualification belongs to a separately authorized stronger environment when that environment is materialized. Local sinks must still preserve challenge lifecycle, attempt limits and supersession semantics.

Financial/biller simulators should cover success, rejection, pending, timeout, delayed/unknown result, duplicate reference/callback, invalid signature, reversal and reconciliation mismatch as applicable. WLT authorization/accounting/idempotency/reconciliation/readback remain real.

Maps/media/storage providers remain replaceable adapters.

```text
DEVELOPMENT_PROVIDER != DOMAIN_AUTHORITY
DEVELOPMENT_PROVIDER != REQUIRED_PRODUCTION_PROVIDER
PROVIDER_NAME != BUSINESS_DOMAIN
FAKE_SUCCESS_BYPASSING_OWNER_STATE_MACHINE = FORBIDDEN
PRODUCTION_DATA_IN_GENERAL_DEV = FORBIDDEN
```

## Development non-goals and feasibility spikes

Daily development intentionally does not require production-like breadth. Unless the active claim proves the need, do not require:

- a dedicated development VPS or every service running continuously;
- multiple vendors for one capability merely for architectural completeness;
- always-on object storage, mail sink, tracing stack or cache when the active work does not consume them;
- real paid messaging for ordinary developer authentication cycles;
- cache/coordination infrastructure without a measured or correctness-driven requirement.

A focused proof may temporarily require additional dependencies; that does not make them permanent daily dependencies or authorize a parallel ordinary runtime path.

Conversely, evaluate a critical external provider early in an isolated spike when its API limitations, cost/quota, policy/compliance, native SDK/permission model or failure semantics could invalidate the intended architecture before many capabilities depend on it. Record the result as evidence; provider choice still does not become domain authority.

## OTP/SMS abuse boundary

Public challenge flows preserve production-grade abuse boundaries even when local delivery is cheap: per-phone/IP/device velocity where applicable, resend cooldown, attempt caps, country/number policy, spend limits when real paid delivery is enabled, challenge supersession policy and no raw OTP persistence/logging.

Exact thresholds are runtime/policy configuration, not documentation constants.
