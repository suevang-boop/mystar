# Worked Example — Plan

**Feature:** Worked example card in the Examples section.
**Related spec:** `SPECS/2026-09-17-worked-example/requirements.md`

---

## Task Groups

**Task Group 1 — Markup (`index.html`)**
1. Update the Examples honesty note to mention the worked example.
2. Add a `.worked-example` card after the `.quote-grid`, with a mono title label and four `.worked-row` rows (S / T / A / R).

**Task Group 2 — Styles (`style.css`)**
1. Add `.worked-example`, `.worked-title`, `.worked-row`, `.worked-label`, `.worked-text` using existing tokens only.
2. Static styling — no `:hover` transform (motion budget is spent). Works at all widths (label + text grid).

**Task Group 3 — Validate & sync specs**
1. Check: no hex outside `:root`; no pill radii; parser tests still pass; page serves 200; worked example visible.
2. Sync `MISSION.md` §8 (Examples copy + decision log) and `ROADMAP.md` current state.

**Task Group 4 — Ship**
1. Commit on a branch, merge to `main`, push, verify GitHub Pages rebuild.

## Files Touched

- `index.html` — Examples section markup.
- `style.css` — worked-example styles.
- `MISSION.md` — §8 copy + decision log row.
- `ROADMAP.md` — current-state note.

## Notes

- Sanitized copy lives in `MISSION.md` §8 so the page copy has one source of truth.
