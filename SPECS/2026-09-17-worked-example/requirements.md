# Worked Example in the Examples section — Requirements

> **Status: REMOVED (2026-09-17).** The whole Examples section — including this worked example — was deleted from the live page at the founder's request (see `MISSION.md` decision log). The story text is kept here for the founder's own interview use.

**Feature:** Add one full, finished STAR story ("worked example") to the Examples section so visitors see what a complete answer looks like — not just the two short quotes.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `build-lab/MISSION.md` §8 (Page Architecture) and §2 (Brand tokens), `build-lab/SPECS/TECH.md`.

---

## Context

The Examples section currently shows two short quote cards plus a one-line honesty note. A visitor can't yet see a *whole* story start to finish. This feature adds a single worked example — a real story the founder wrote, cleaned up and de-identified — laid out as labeled S / T / A / R rows.

## Scope

1. Add a static **worked example** card *below* the two quote cards in the Examples section, showing a full story as four labeled rows (S, T, A, R).
2. Update the honesty note so it stays truthful and mentions the worked example (no claim of a paying customer).
3. **Sanitize the copy**: no company name, no internal tool names (e.g., the tracker tools), no personal names. Keep it a plain "operations / partner-team" story.

## Out of Scope

- No JavaScript and no `script.js` changes.
- No new colors, fonts, or radius values — existing tokens only.
- **No new motion** — the motion budget (1 hero + 1 card-lift microinteraction) is already spent; this card is static.
- No new page sections, no pricing/FAQ, no backend.

## Decisions

1. Show the story as labeled S/T/A/R rows to mirror the hero's STAR preview. (2026-09-17)
2. Keep it static and semantic (`<figure>`/`<figcaption>` style, plain `<p>` text) for keyboard and screen-reader users. (2026-09-17)
3. De-identify the copy — it is the founder's own story, made generic for a public page. (2026-09-17)
4. Validation is manual (no test framework for HTML/CSS in this repo). (2026-09-17)

## Non-Negotiable Rules (TECH.md + MISSION.md)

1. No hardcoded hex outside `:root`.
2. Radius 4 / 8 / 12 px only. No pills.
3. One primary CTA per view.
4. Semantic HTML5, no frameworks.
5. Every element earns its place — precise, calm, dark.
