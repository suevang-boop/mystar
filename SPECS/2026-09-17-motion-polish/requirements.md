# Motion & Polish — Requirements

**Feature:** Subtle motion + one polished UI component for the MySTAR landing page: hover-lift on cards, keep the hero entrance, respect reduced-motion.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `build-lab/MISSION.md` Sections 2/9 (tokens) and `build-lab/SPECS/TECH.md` (motion budget).

---

## Context

Stage 5, Step 4 of the roadmap: add the motion budget and a polished component. The hero already has its entrance animation (`hero-fade-in`, 400ms) from the base-shell step — that animation stays.

## Scope

1. **Hover-lift on cards.** Feature cards AND quote (examples) cards get a `translateY(-4px)` upward lift with a smooth transition (~200ms). Include a quiet supporting cue (e.g., border brightens to `--color-accent`) so the lift reads as "interactive."
2. **Keep the hero entrance as-is.** No new hero animation.
3. **Respect `prefers-reduced-motion`.** A media query disables the hero fade, the card transitions, and native smooth scrolling (`scroll-behavior`) for users who ask for reduced motion.

## Out of Scope

- No new components, no staggering, no scroll-**triggered** animations (the single scroll effect stays reserved).
- No JavaScript, no script.js changes. Pure CSS.
- No shadow systems or new hex values — motion only touches transform/border/opacity using existing tokens.

## Decisions

1. Keep existing hero fade. (2026-09-17)
2. Cards hover-lift is the polished component. (2026-09-17)
3. Respect `prefers-reduced-motion`. (2026-09-17)
4. Motion budget accounting: hero effect = the kept fade; microinteraction = card lift + existing button hovers (both purposeful); scroll effect = still reserved.
5. Manual validation (no test framework in repo).

## Post-build note (2026-09-17, Stage-5 audit + review)

- `html { scroll-behavior: smooth }` was added after this feature (in the Stage-5 triage). It is classified as a **navigation behavior**, not a scroll-triggered animation, so the reserved scroll-effect budget remains unused. Its reduced-motion override (`scroll-behavior: auto`) is part of the same `prefers-reduced-motion` block.
- The review also triggered small HTML/spec fixes that were NOT part of this CSS-only feature: nav/footer anchors wiring, feature badge numbers, and dropping an unused `.footer-copy` class. Those belong to the base-shell / content-sections features and are recorded there.

## Non-Negotiable Rules

1. No hardcoded hex outside `:root`.
2. Radius 4/8/12 only; typography unchanged.
3. Every animation has a purpose (they do: entrance reveal + interactivity cue).
4. Beginner-simple, plain CSS. Semantic HTML unchanged (this feature is CSS-only over existing markup; no HTML changes required).