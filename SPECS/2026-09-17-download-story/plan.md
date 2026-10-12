# Download Story Button — Plan

**Feature:** Download button beside Copy in the builder preview.
**Related spec:** `SPECS/2026-09-17-download-story/requirements.md`

---

## Task Groups

**Task Group 1 — Markup (`index.html`)**
1. Wrap **Copy story** and a new **Download** button in a `.preview-actions` row.

**Task Group 2 — Behavior (`script.js`)**
1. Grab the new button; on click, build a `Blob` from the preview text, make a temporary `<a download="my-star-story.txt">`, click it, clean up the object URL, and show a status message.

**Task Group 3 — Styles (`style.css`)**
1. Replace the lone `#copy-star { margin-top }` rule with a `.preview-actions` flex row (gap + wrap).

**Task Group 4 — Validate & ship**
1. `node --check script.js`; hex check; parser tests; serve check.
2. Sync `MISSION.md` §8 + decision log; commit, merge, push, verify Pages.

## Files Touched

- `index.html` — preview buttons.
- `script.js` — download handler.
- `style.css` — `.preview-actions`.
- `MISSION.md` — §8 + decision log.
