# Experience and Design Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/EXPERIENCE.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

UX communicates canonical Product state, authority, available actions, feedback and recovery; appearance never becomes business truth.

- Arabic/RTL is the current primary BThwani interaction direction; Partner, Captain and Field mobile surfaces use the current Arabic-only RTL baseline unless a later explicit Product decision changes it.
- Control-panel interaction is Arabic/RTL-first. Do not infer or prebuild runtime language switching without current need.
- Directionality is a shared semantic foundation; apps do not invent competing RTL/LTR systems.
- Web accessibility targets WCAG 2.2 AA where applicable; mobile uses equivalent platform semantics, text scaling, touch-target and accessible-name requirements.
- Loading, empty, forbidden, conflict, offline, error, unknown and recovery states are materially distinct when the capability exposes them.
- UI never claims success, eligibility, health, money or completion before canonical readback proves it.
- Light/dark appearance, where supported by the affected surface, preserves the same Product state/action priority through shared semantic tokens rather than per-screen forks.
- Shared Design System grows only from real domain-neutral multi-consumer need; Product/domain components begin with the consuming feature and are extracted only when genuinely reusable.
- Shared presentation may own tokens/components/patterns but never domain state, authorization or financial truth.
- Brand anchors remain navy `#0A2F5C`, action orange `#FF500D`, light background `#FFFCF8` and light primary surface `#FFFFFF` until an explicit brand decision changes them; components consume semantic roles rather than hardcoded cross-theme values.
- Material fonts/icons/images/motion assets require known provenance and compatible licensing.

Rendered claims require interaction/accessibility/device/runtime evidence appropriate to the affected surface; a screenshot alone is not journey proof.
