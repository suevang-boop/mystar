# Content Sections — Requirements

**Feature:** The content sections of the MySTAR landing page: Problem, Solution, Features, Social Proof, CTA, and a minimal Footer.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `build-lab/MISSION.md` Sections 2 (Brand Identity), 8 (Page Architecture), 9 (Mini-Spec), and `build-lab/SPECS/TECH.md`.

---

## Context

MySTAR's landing page currently has a base shell, design tokens, Navbar, and Hero (ROADMAP Stage 5, Steps 1–2 done). This feature completes ROADMAP Stage 5, Step 3 — the persuasive middle of the page that turns a visitor who "relates" into someone who acts.

## Scope (what this feature covers)

Six sections appended to the existing page, in order, after the Hero:

1. **Problem** — headline + two supporting lines ("You did the work. Retelling it is the hard part.").
2. **Solution** — headline + two supporting lines ("A coach that interviews the story out of you.").
3. **Features** — headline + three feature cards. Live STAR preview · Beginner-friendly · Saved in your browser.
4. **Examples** — headline + a short honesty note + two illustrative example stories in surface quote cards. *(Stage-6 change: originally "Social Proof" with placeholder tester quotes; relabeled so nothing claims a real customer.)*
5. **CTA** — headline + exactly one gold button + micro-assurance line.
6. **Footer** — minimal: wordmark, tagline, two quiet links (How it works / Features), copyright line.

Copy for sections 1–5 is approved verbatim in `build-lab/MISSION.md` Section 8.

## Out of Scope (this feature does NOT do)

- No JavaScript. `script.js` remains untouched. Motion stays as-is from the Hero step (no scroll effects per founder decision 2026-09-17 — the single allowed scroll effect is reserved for the next stage).
- No changes to the existing Navbar or Hero markup/styles.
- No new colors, fonts, or radius values beyond the existing tokens.
- No new page sections beyond those listed (e.g., no pricing, no FAQ, no newsletter).
- No backend, no databases, no accounts (per SPECS/MISSION.md — frontend landing page).

## Decisions

1. **Static this step** — content sections carry no scroll/JS animation. `script.js` is not touched. (2026-09-17)
2. **Minimal footer** — wordmark + tagline, two text links, one copyright line. (2026-09-17)
3. **Strict single CTA** — CTA section has one gold button only, no secondary link. Footer has no CTA. (2026-09-17)
4. **Validation is manual** — static HTML/CSS; no test framework in this repo. (2026-09-17)

## Non-Negotiable Rules (TECH.md + MISSION.md)

1. Every component uses CSS variables — **no hardcoded hex in components**.
2. Headings → Space Grotesk. Body → Inter (line-height 1.6). STAR labels / small labels → JetBrains Mono.
3. Radius strict 4 / 8 / 12 px. No pills.
4. One primary CTA per view.
5. Semantic HTML5 (`<section>`, `<h2>`, `<blockquote>`/`<figure>`, `<footer>`). No frameworks.
6. Precise, minimalist, dark-mode, calm — every element must earn its place.

## Reference Values

Palette/tokens: see `build-lab/MISSION.md` Section 9 (unchanged from the base-shell step).

**Approved copy (MISSION.md Section 8):**
- **Problem:** "You did the work. Retelling it is the hard part." — "Even with STAR cheat sheets open, you freeze — picking which experience to tell, structuring the parts, and ending with a result that doesn't fizzle." — "If you've never used STAR format, you don't even know where to start."
- **Solution:** "A coach that interviews the story out of you." — "No blank pages, no templates to memorize. Answer a few plain questions in the order a good story needs — the S-T-A-R fills in live as you go." — "When you finish, you hold a real, reusable story."
- **Features:** "Everything you need. Nothing you don't." — Live STAR preview: watch S, T, A, R assemble as you answer. · Beginner-friendly: each letter is taught in one line at the moment you use it. · Saved in your browser: no accounts, automatic localStorage saves.
- **Examples:** "See the kind of story you'll build." — honesty note: "Illustrative examples from our own test runs — not real customer quotes." — two example stories: "Went from a blank screen to a story I'd actually say in an interview — in ten minutes." · "Finally understood what S-T-A-R actually means." (each credited "Example story, not a real customer").
- **CTA:** "The hardest question, already answered." — Button "Write my first story — it's free." — micro-assurance: "Saved automatically · works on any device · no sign-up."