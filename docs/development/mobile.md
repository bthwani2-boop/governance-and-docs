# Mobile Development and EAS

DOCUMENT_CLASS: HUMAN_DEVELOPMENT_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
CURRENT_MOBILE_COMMAND_TRUTH_SOURCE: package.json + repository mobile launcher + app-owned configuration
CURRENT_IMPLEMENTATION_TRUTH_SOURCE: LIVE_EXPO_EAS_APP_CONFIG_AND_BUILD_STATE

## Local runtime

Use repository root app commands (`pnpm client|partner|captain|field`) and current launcher/configuration as port/device truth. Do not maintain a second manual Metro/bootstrap path or hard-code ports in product code.

Resolve the intended device explicitly when more than one device is attached. ADB/scrcpy are substrate/diagnostic tools; user-journey proof still requires the interaction evidence appropriate to the claim.

## Configuration and identity

Public client configuration contains no server secret or privileged provider credential. API/runtime endpoints come from current configuration, not screen logic.

Expo/EAS project identity, Android/iOS application identifiers, URI/deep-link schemes, runtime/update identity, signing and provider bindings are deployable identity. Repository cleanup must not change them accidentally.

## Material real-device evidence

When correctness depends on OS/device behavior, verify the relevant states on representative real devices:

- process death and restart/resume;
- foreground/background transitions;
- weak/offline network and reconnect;
- permission deny/revoke/re-grant;
- location disabled and foreground/background location when required;
- notification receive/tap/deep-link handoff;
- battery/background restrictions for operational workflows;
- text scaling/accessibility settings;
- duplicate/retry after reconnect or restoration;
- canonical server readback after local recovery.

Captain/field journeys that rely on background location, long-lived sessions or intermittent connectivity require stronger device evidence than foreground-only flows.

## EAS/build workflow

Operate one app identity at a time unless current tooling proves broader safe operation.

~~~text
RESOLVE CURRENT APP IDENTITY
→ PREFLIGHT CURRENT CONFIG/PROVIDER/SIGNING INPUTS
→ BUILD
→ ATTRIBUTE RESULT TO EXACT SOURCE/INPUTS
~~~

A successful export/bundle is not a signed store binary and does not prove login, push, Maps, backend journey behavior or release authorization.

Production build/release capability is not inferred from authenticated EAS access, existing credentials or project ownership. Environment/operation authority remains separate.

## Private inputs

Provider configs, keystores, credentials, local environment manifests and temporary build request files remain ignored/private and isolated per app identity.
