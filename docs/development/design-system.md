# Design System Development

DOCUMENT_CLASS: HUMAN_DEVELOPMENT_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

## Scope

The Design System owns reusable visual tokens, domain-neutral primitives and interaction patterns proven by real consumers. It does not own business state, authorization, financial logic, capability validation, domain content policy or app routing.

Durable experience/brand/RTL/accessibility meaning is owned by `governance/product/EXPERIENCE-AND-DESIGN.md`. Runtime tokens/components remain executable implementation truth.

## Admission

Before adding a shared token/primitive/pattern:

1. prove a platform-wide semantic requirement or real reusable consumers;
2. choose the smallest domain-neutral responsibility;
3. preserve web/native differences where behavior materially diverges;
4. verify RTL/LTR, Light/Dark and accessibility when affected;
5. expose loading/error/disabled/busy/focus/selected/recovery states as applicable;
6. avoid a second token/brand/content authority.

~~~text
REAL_CONSUMER_NEED
→ SMALLEST_DOMAIN_NEUTRAL_PRIMITIVE
→ PLATFORM-APPROPRIATE IMPLEMENTATION
→ RTL/A11Y/THEME EVIDENCE
→ REUSE
~~~

Domain components begin in the consuming app feature. Extract only when the extracted responsibility is genuinely reusable and does not carry domain state/policy.

## External falsification

`docs/reference/experience.md` is reference-only. External design systems, primitive libraries, token tools and testing frameworks may falsify weak behavior; they never define BThwani branding, Product meaning or dependency adoption.

## Implementation discipline

Consume semantic roles rather than page-local raw values. Arabic-first directionality, theme variants, accessible names/focus, truthful state feedback and platform-specific adaptation must preserve the same Product meaning.

An attractive screenshot or component story is not journey correctness.
