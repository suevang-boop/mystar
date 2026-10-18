# STAR Structure in the Builder — Requirements

**Feature:** Teach the full STAR format inside the builder. Each S/T/A/R bucket gains an objective line, its share of the answer, and guiding questions — and a complete example STAR response is shown below.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `build-lab/MISSION.md` §2/§8, `build-lab/SPECS/TECH.md`.

---

## Context

Today each bucket shows only the letter, the name, and the user's pasted pieces. A beginner doesn't yet know *what belongs* in each part. This feature turns each bucket into a tiny lesson and adds one worked example so users can copy the shape of a strong answer.

## Scope

1. **Bucket guidance.** Under each bucket title show:
   - a **goal line** — the objective + that part's share of the answer (S 15–20%, T 10–15%, A 50–60%, R 15–20%);
   - **three guiding questions** (small, muted) telling the user what to write.
2. **Example STAR response.** Add a static example block below the builder preview: the "tight deadline / competing priorities" Data Analyst answer, split into S/T/A/R rows.
3. **Copy touch-ups.** Update the builder intro and the "Beginner-friendly" feature card to mention the guidance.

## Out of Scope

- **No change to the parser or the split rules** — `star-parser.js` and its tests stay as-is.
- No new colors/fonts/radius — existing tokens only.
- No new motion (budget already spent) and no new JS — static text only.
- Not a second primary CTA.

## Decisions

1. Put the guidance **inside each bucket** (founder choice, 2026-09-17).
2. **Include** the full example response (founder choice, 2026-09-17).
3. Plain static text — no disclosure widgets, no JavaScript.
4. Manual validation (no DOM test framework in this repo).

## Non-Negotiable Rules

1. No hardcoded hex outside `:root`.
2. Radius 4 / 8 / 12 only. No pills.
3. One primary CTA per view.
4. Semantic HTML5, no frameworks.
