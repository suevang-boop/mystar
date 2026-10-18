# Scenario → STAR (paste-to-parse) — Requirements

**Feature:** A page section where the user **pastes** a scenario or an example into a text box, presses **Form STAR**, and the page arranges the text into the STAR format — Situation · Task · Action · Result — with the user able to fix the guesses.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `SPECS/MISSION.md`, `SPECS/TECH.md`, `build-lab/MISSION.md` §2 / §8, `SPECS/ROADMAP.md`.

---

## Context

The landing page is built, deployed, and live. Its promise is "watch S, T, A, R assemble as you answer." This feature is the first slice of the **real tool**.

Originally this was planned as a **file upload**, but we changed course: instead of a file, the user gets a **live interface** — they paste (or type) their scenario into a text box and press **Form STAR**. This is simpler (no file reading, no file-type rules) and keeps the user in control.

The constitution forbids backends, frameworks, and any server, so every bit of parsing happens in the browser with simple rules.

## Scope (what this feature covers)

- A new page section with a large text box: "Paste your scenario or an example."
- A **Form STAR** button that starts the parsing.
- Split the pasted text into sentences / paragraphs.
- **Guess** which STAR letter each piece belongs to using simple rules.
- Show four buckets (**S T A R**) as panels of movable cards.
- Let the user **move** a piece to a different letter and **edit** its text.
- A live assembled STAR preview plus a "Copy story" action.
- Do not save the result: the page starts blank on every load (refresh or return).
- All styling uses the existing design tokens; motion stays within the budget.

## Out of Scope (this feature does NOT do)

- **No file upload at all** — the user pastes/types text directly.
- No AI, no server, no external libraries. (Constitution: frontend-only, no frameworks.)
- No accounts, no SQLite database.
- No new colors, fonts, or radius values.
- No changes to the navbar, hero, or CTA button styles.

## Decisions

1. **Rules in the browser, no AI.** — *(2026-09-17)* Keeps the "frontend only / no frameworks" rules and the GitHub Pages deploy. Trade-off: guesses are rough.
2. **Paste + a button (not live-as-you-type).** — *(2026-09-17)* The user pastes their scenario, then presses **Form STAR**. Predictable and simple; no parsing on every keystroke.
3. **Assisted split: the tool guesses, the user fixes.** — *(2026-09-17)* Rule-based guesses are imperfect; letting the user move/edit pieces keeps the result trustworthy and teaches the format.
4. **No file upload; nothing leaves the browser.** — *(2026-09-17)* Simpler than file reading, and private by default.
5. **No persistence.** — *(changed 2026-09-17; was `localStorage`, then `sessionStorage`)* Nothing is saved. The page starts blank every load, and refreshing/leaving resets it, so no entry is ever left behind for the next visitor. No database.
6. **Parsing is a small set of pure functions with a clear shape.** — *(2026-09-17)* `parseToStar(text)` returns `{ s: [...], t: [...], a: [...], r: [...] }`. Pure functions (no DOM) are easy to read, reuse, and test. Keyword cues are the fallback when the text has no `Situation:/Task:/Action:/Result:` labels.

## Non-Negotiable Rules (from the constitution)

1. Design tokens only — **no hardcoded hex outside `:root`**.
2. Headings → Space Grotesk. Body → Inter. STAR labels/small labels → JetBrains Mono.
3. Radius strict 4 / 8 / 12 px. No pills.
4. **One primary CTA per view** — "Form STAR" must not become a second competing gold primary button; use a secondary/ghost button.
5. Semantic HTML5; vanilla JavaScript; no frameworks.
6. Motion budget: max 1 hero effect + 1 scroll effect + 1 microinteraction. Already spent — add no new animation.

## Reference Values

Palette, fonts, radius, spacing: `build-lab/MISSION.md` §2 / §9 (unchanged from earlier features).

## Resolved (founder decisions, 2026-09-17)

1. **Section placement:** **after "Solution", before "Features"** (`<section id="builder">`).
2. **Testing approach:** **plain-JS tests.** Pure parser functions live in `build-lab/star-parser.js`; `build-lab/tests/star.test.js` uses Node's built-in `assert` (`node tests/star.test.js`). No framework. Tests are written first (Red → Green).
3. **Logging:** no logging layer — a full logging framework is not appropriate for a static client-side page, and the constitution asks to keep it simple.
4. **Backward compatibility:** none needed — this feature only adds a section; the existing page keeps working unchanged.
