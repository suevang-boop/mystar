# Download Story Button — Validation

**Feature:** Download button beside Copy in the builder preview.

---

## How to Validate (manual)

- [ ] The builder preview shows **Copy story** and **Download** side by side.
- [ ] Clicking **Download** saves `my-star-story.txt` containing the current story text.
- [ ] The status line reads "Downloaded your story." after clicking.
- [ ] Download is a **secondary** button (not gold).
- [ ] `node --check script.js` passes; parser tests still pass; page serves 200.
- [ ] Hex only in `:root`; no pill radii; buttons wrap on narrow widths.

## Record

- Date run: 2026-09-17
- Result (pass / fail + notes): **PASS** — secondary Download button added beside Copy; `script.js` syntax OK; parser tests 13/13; hex clean; page serves 200. Manual click-download verified in-browser by the founder.
- Founder approval for any spec updates: pending (awaiting review/merge)
