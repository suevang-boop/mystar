# STAR Structure in the Builder — Validation

**Feature:** STAR guidance in each bucket + a full example response.

---

## How to Validate (manual)

- [ ] Each bucket shows a goal line (objective + % of answer) and three guiding questions.
- [ ] An "Example STAR response" block appears below the builder preview with S/T/A/R rows.
- [ ] The "Beginner-friendly" card mentions the guidance.
- [ ] No change to the parser: `node tests/star.test.js` still passes 13/13.
- [ ] Hex only in `:root`; no pill radii; no new motion.
- [ ] Buttons/preview still work (Form STAR, move, edit, Copy, Download).
- [ ] Readable on narrow widths (buckets stack; example rows stay aligned).

## Record

- Date run: 2026-09-17
- Result (pass / fail + notes): **PASS** — goal lines + guiding questions in all four buckets; example block rendered; parser tests 13/13; hex clean; no pills; page serves 200.
- Founder approval for any spec updates: pending (awaiting review/merge)
