# Experience and Design Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/EXPERIENCE.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

UX communicates canonical Product state, authority, available actions, feedback and recovery; appearance never becomes business truth. UI/UX is part of functional correctness, not end-stage polish.

## BThwani experience contract

BThwani maintains one recognizable cross-surface experience system with platform-native behavior. Unified identity does not mean pixel-identical UI.

The durable BThwani experience must remain:

- Arabic-first and RTL-first for the currently admitted Arabic surfaces;
- fast to understand, clear, trustworthy, warm, modern and uncluttered;
- visually distinctive without sacrificing platform familiarity or content priority;
- consistent in semantic hierarchy, feedback, state meaning and recovery across Client, Partner, Captain, Field and Control Panel where the same semantics apply;
- adaptive to platform/device/window/input conventions rather than forcing one layout model everywhere.

## Brand DNA

The canonical experience system governs, as materially admitted:

- color semantics and brand emphasis;
- typography identity, hierarchy, numerals and text scaling;
- shape/radius language and surface treatment;
- iconography and symbol style;
- imagery/illustration treatment and provenance;
- spacing rhythm and information density;
- elevation and layering semantics;
- motion personality, reduced-motion behavior and transition meaning;
- voice/tone and state/content language.

Brand anchors remain navy `#0A2F5C`, action orange `#FF500D`, light background `#FFFCF8` and light primary surface `#FFFFFF` until an explicit brand decision changes them. Brand color is intentional emphasis, not decoration everywhere. Components consume semantic roles rather than hardcoded cross-theme values.

A future custom typeface is admitted only after readability, Arabic shaping/RTL, weights, numerals, small-size legibility, Android/iOS/web rendering, text scaling, performance and license are proven. Until then, system typography is an implementation baseline, not a permanent brand decision.

## Design-system ownership

One BThwani Design System is the reusable domain-neutral presentation lane.

```text
PRIMITIVE TOKENS
→ SEMANTIC TOKENS
→ COMPONENT/PATTERN ROLES
→ PLATFORM-SPECIFIC RENDERING
```

- Shared presentation may own tokens/components/patterns but never domain state, authorization or financial truth.
- Product/domain components begin with the consuming feature; extraction into shared Design System requires proven domain-neutral multi-consumer need.
- No surface creates competing color, typography, spacing, radius, icon, motion or state foundations when the canonical Design System can own the same meaning.
- Light/dark appearance preserves Product state/action priority through semantic roles rather than per-screen forks.
- Material fonts/icons/images/motion assets require known provenance and compatible licensing.

## Interaction and platform adaptation

The same BThwani semantic outcome may use platform-appropriate navigation, system controls, safe areas, gestures, keyboard/pointer behavior, dialogs/sheets, window sizes and platform chrome.

Familiar native interaction takes priority over decorative brand mimicry. Apple/Android/Web design guidance challenges interaction and platform fit; none of those external systems defines BThwani Product truth or brand identity.

Interaction patterns with repeated semantics should converge when real consumers prove common need, including form submission, confirmation, destructive actions, search/filter, loading, retry, offline handling, authentication, checkout, order state and operational accept/reject flows.

## State, recovery and truth

Loading, empty, forbidden, conflict, offline, error, unknown and recovery states are materially distinct when the capability exposes them.

UI never claims success, eligibility, health, money or completion before canonical readback proves it. Material mutations expose busy/duplicate-prevention behavior, failure/recovery and post-action canonical readback as applicable.

## Accessibility, direction and localization

- Arabic/RTL is the current primary BThwani interaction direction; Partner, Captain and Field mobile surfaces use the current Arabic-only RTL baseline unless a later explicit Product decision changes it.
- Control-panel interaction is Arabic/RTL-first. Do not infer or prebuild runtime language switching without current need.
- Directionality is a shared semantic foundation; apps do not invent competing RTL/LTR systems.
- Web accessibility targets WCAG 2.2 AA where applicable; web interaction semantics use current WAI/ARIA guidance when relevant.
- Mobile uses equivalent platform semantics, scalable text, accessible names, focus/reading order, contrast and touch-target behavior.
- Accessibility is designed and tested with the interaction, not added after visual completion.

## Evidence

A material user-facing change proves, as applicable:

```text
PRODUCT SEMANTICS
→ INFORMATION ARCHITECTURE / CONTENT
→ INTERACTION MODEL
→ DESIGN-SYSTEM ROLES
→ PLATFORM CONVENTIONS
→ ACCESSIBILITY / RTL / TEXT SCALING
→ RESPONSIVE / ADAPTIVE BEHAVIOR
→ LIGHT / DARK + MATERIAL STATES
→ ERROR / OFFLINE / RECOVERY
→ RENDERED + INTERACTION EVIDENCE
→ CANONICAL OUTCOME READBACK
```

Rendered claims require interaction/accessibility/device/runtime evidence appropriate to the affected surface. A screenshot alone is not journey proof. Visual regression can prove stability of a rendered contract when that contract is mature and materially valuable, but it does not replace behavioral or accessibility proof.

Use `docs/reference/experience.md` for current external Experience/Design evidence. External references may challenge and improve the BThwani experience; they never become BThwani brand authority by existence.
