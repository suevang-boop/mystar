# Worked Example — Validation

**Feature:** Worked example card in the Examples section.
**Related spec:** `SPECS/2026-09-17-worked-example/requirements.md`

---

## How to Validate (manual)

- [ ] **Visible:** the Examples section shows a full S/T/A/R worked example below the two quote cards.
- [ ] **Tokens:** `grep -n '#[0-9A-Fa-f]\{3,6\}' style.css` shows hex only inside `:root`.
- [ ] **Radius:** no pill values (no `999`, `9999`, `50%` radius).
- [ ] **Honesty:** the note does not claim a real/paying customer.
- [ ] **Sanitized:** no company name, no internal tool names, no personal names in the copy.
- [ ] **Motion budget:** the worked-example card has no `:hover` transform.
- [ ] **Responsive:** readable and unbroken on narrow widths (label column + text).
- [ ] **Semantics:** section heading is `<h2>`; story rows are plain text.
- [ ] **Regression:** `node tests/star.test.js` still passes; page serves HTTP 200.

## Record

- Date run: 2026-09-17
- Result (pass / fail + notes): **PASS** — worked example renders; hex only in `:root`; no pill radii; no hover transform on the card; parser tests 13/13; `index.html` served 200. Copy de-identified.
- Founder approval for any spec updates: pending (awaiting review/merge)
