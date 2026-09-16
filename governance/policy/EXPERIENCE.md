# Experience and Interaction Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/EXPERIENCE.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

UX communicates canonical Product state, authority, available actions, feedback and recovery. User-facing experience is part of functional correctness, not end-stage polish.

This policy owns durable information-architecture, navigation, interaction, RTL/localization, accessibility, state/recovery and platform-adaptation invariants. Durable visual identity and design language are owned by `governance/policy/DESIGN.md`.

## BThwani experience contract

BThwani maintains one recognizable cross-surface experience system with platform-native behavior. Unified identity does not mean identical information architecture, identical shells or pixel-identical UI across Client, Partner, Captain, Field and Control Panel.

The durable BThwani experience must remain:

- Arabic-first and RTL-first for the currently admitted Arabic surfaces;
- fast to understand, clear, trustworthy, warm, modern and uncluttered;
- consistent in semantic hierarchy, feedback, state meaning and recovery where the same semantics apply;
- adapted to the actor's real job rather than forcing every app into one navigation model;
- adaptive to platform/device/window/input conventions rather than forcing one layout model everywhere.

Visual identity, color, typography, shape, iconography, imagery, elevation and motion language are governed by `governance/policy/DESIGN.md` and implemented through the canonical reusable Design System where reuse is proven.

## Information architecture and application shell

A materially developed surface requires a coherent information architecture before isolated page styling or feature depth.

```text
ACTOR / USER OUTCOME
→ CURRENT CAPABILITY SET
→ INFORMATION ARCHITECTURE
→ APP / WORKSPACE SHELL
→ NAVIGATION MODEL
→ SCREEN HIERARCHY
→ INTERACTION + STATE MODEL
→ FEATURE PRESENTATION
```

- Derive each app's shell and navigation from that actor's admitted jobs and frequency/criticality of use; do not clone one app's tabs, headers or chrome into another merely for visual consistency.
- Establish the simplest complete canonical shell/navigation model for the materially affected scope before deepening screens that depend on it.
- Persistent/global actions and local/contextual actions must be distinguishable. The user must be able to understand where they are, what the primary action is, how to move to another admitted job, and how to return or recover.
- Navigation structure must not invent future capabilities, empty destinations or speculative placeholders to make an app appear complete.
- A route or screen is composition, not durable Product truth. Presentation follows the capability and service owners rather than becoming a competing business model.
- A missing or materially wrong shell, navigation hierarchy or screen relationship is incomplete implementation even when each isolated screen renders and its API calls work.

## Interaction and platform adaptation

The same BThwani semantic outcome may use platform-appropriate navigation, system controls, safe areas, gestures, keyboard/pointer behavior, dialogs/sheets, window sizes and platform chrome.

Familiar native interaction takes priority over decorative brand mimicry. Apple/Android/Web design guidance challenges interaction and platform fit; none of those external systems defines BThwani Product truth, information architecture or brand identity.

Interaction patterns with repeated semantics should converge when real consumers prove common need, including form submission, confirmation, destructive actions, search/filter, loading, retry, offline handling, authentication, checkout, order state and operational accept/reject flows.

Touch targets, focus order, keyboard reachability, gesture behavior and safe-area handling must remain usable under the actual platform/input model. Do not hide essential actions behind fragile gesture-only or hover-only affordances when the target surface requires another accessible path.

## State, feedback, recovery and truth

Loading, empty, no-results, forbidden, conflict, offline, error, unknown, busy, disabled, selected, validation and recovery states are materially distinct when the capability exposes them.

A surface accounts for every applicable user-visible state and transition rather than implementing only the happy path. Missing applicable states are incomplete implementation, not future polish.

UI never claims success, eligibility, health, money or completion before canonical readback proves it. Material mutations expose busy/duplicate-prevention behavior, failure/recovery and post-action canonical readback as applicable.

Feedback must make consequence and next action clear without leaking raw internal identifiers, concurrency versions, backend enum vocabulary or transport representations into normal user-facing content.

## Arabic, RTL and localization

Arabic/RTL is an end-to-end interaction invariant, not a `textAlign: right` treatment.

As applicable, prove:

- layout/order and reading order;
- text alignment and Arabic shaping;
- direction-sensitive icons, back/forward semantics and navigation transitions;
- scrolling and carousel direction;
- forms, keyboard behavior and focus movement;
- mixed-direction phone numbers, quantities, codes and machine-shaped values;
- headers, tabs, lists, sheets and dialogs;
- gesture/animation direction when it communicates navigation or hierarchy.

Partner, Captain and Field mobile surfaces use the current Arabic-only RTL baseline unless a later explicit Product decision changes it. Control Panel is Arabic/RTL-first. Do not infer or prebuild runtime language switching without current Product need.

Directionality is a shared semantic foundation; apps do not invent competing RTL/LTR systems.

## Accessibility

- Web accessibility targets WCAG 2.2 AA where applicable; web interaction semantics use current WAI/ARIA guidance when relevant.
- Mobile uses equivalent platform semantics, scalable text, accessible names, focus/reading order, contrast and touch-target behavior.
- Important state and action meaning is not conveyed through color, position or animation alone.
- Long Arabic text, large text and constrained layouts must preserve required meaning and reachable actions.
- Reduced-motion behavior is respected when motion is material to the affected surface.
- Accessibility is designed and tested with the interaction, not added after visual completion.

## Evidence

A material user-facing change proves, as applicable:

```text
PRODUCT SEMANTICS
→ INFORMATION ARCHITECTURE / CONTENT
→ SHELL / NAVIGATION
→ INTERACTION MODEL
→ APPLICABLE USER-VISIBLE STATES
→ DESIGN-SYSTEM ROLES
→ PLATFORM CONVENTIONS
→ ACCESSIBILITY / RTL / TEXT SCALING
→ RESPONSIVE / ADAPTIVE BEHAVIOR
→ LIGHT / DARK + MATERIAL STATES
→ ERROR / OFFLINE / RECOVERY
→ RENDERED + INTERACTION EVIDENCE
→ CANONICAL OUTCOME READBACK
```

Rendered claims require interaction/accessibility/device/runtime evidence appropriate to the affected surface. A screenshot alone is not journey proof. Static type/source checks do not override a visibly, structurally or interactively defective surface.

Visual regression can prove stability of a rendered contract when that contract is mature and materially valuable, but it does not replace behavioral, accessibility, RTL or canonical-readback proof.

Use `docs/reference/experience.md` for current external Experience/Design evidence. External references may challenge and improve BThwani interaction and platform fit; they never become BThwani Product, information-architecture or design authority by existence.
