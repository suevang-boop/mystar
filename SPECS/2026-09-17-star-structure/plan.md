# STAR Structure in the Builder — Plan

**Feature:** STAR guidance in each bucket + a full example response.
**Related spec:** `SPECS/2026-09-17-star-structure/requirements.md`

---

## Task Groups

**Task Group 1 — Markup (`index.html`)**
1. Update the builder intro line.
2. In each bucket add a `.bucket-goal` line and a `.bucket-hints` list (3 questions).
3. Add a `.star-sample` block (title, question, four S/T/A/R rows) below the builder preview.
4. Update the "Beginner-friendly" feature card text.

**Task Group 2 — Styles (`style.css`)**
1. Add `.bucket-goal`, `.bucket-hints` (muted, small).
2. Add `.star-sample`, `.sample-title`, `.sample-question`, `.sample-row`, `.sample-label`, `.sample-text` (tokens only, static).

**Task Group 3 — Validate & sync**
1. `node tests/star.test.js`, hex check, pill check, serve check, responsive check.
2. Sync `MISSION.md` §8 + decision log.

**Task Group 4 — Ship**
1. Branch, commit, merge to `main`, push, verify Pages.

## Files Touched

- `index.html` — bucket guidance, example block, copy.
- `style.css` — new styles.
- `MISSION.md` — §8 + decision log.

## Notes

- Copy for the four objectives and the example lives in `MISSION.md` §8 (single source of truth).
