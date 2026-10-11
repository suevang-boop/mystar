# Scenario → STAR (paste-to-parse) — Validation

**Feature:** Paste a scenario, press **Form STAR**, and edit the result until it reads as S · T · A · R.
**Method:** Plain-JS parser tests (`node tests/star.test.js`, if approved) + manual checks. No test framework — see `requirements.md` Open Questions.

---

## How to know it worked

### 1. The interface works
- [ ] There is one clear text box to paste into and a **Form STAR** button.
- [ ] Pressing **Form STAR** with text builds the four buckets.
- [ ] Pressing **Form STAR** with an empty box shows a friendly "paste something first" message (no crash).
- [ ] Browser **Network** tab shows **no** requests to any server.

### 2. Parsing is sensible
- [ ] The pasted text splits into readable pieces (not one giant blob, not one word each).
- [ ] Text that already contains `Situation:` / `Task:` / `Action:` / `Result:` labels is split by those labels.
- [ ] Text with no labels still produces all four buckets (guesses may be imperfect).

### 3. Assisted editing
- [ ] Every piece can be moved to another letter and the buckets update.
- [ ] Every piece's text can be edited and the preview updates.
- [ ] The assembled preview and the buckets always agree.

### 4. Persistence
- [ ] After editing, a page refresh keeps the work (`localStorage`).
- [ ] "Copy story" copies the assembled STAR text to the clipboard.

### 5. Design discipline
- [ ] No hex codes in `style.css` outside `:root`.
- [ ] Fonts and radius unchanged; STAR labels use `--font-mono`.
- [ ] This section introduces **no** second competing gold primary CTA.
- [ ] No new animation; motion budget unchanged.

### 6. Responsive
- [ ] The four buckets collapse cleanly from 4 columns to fewer on small screens.
- [ ] Nothing overflows 320px wide.

### 7. Spec alignment
- [ ] Diff the build against these specs.
- [ ] Present any drift to the founder; update the spec files only after approval.

## Anything failing a check above = fix before merge.

## Record
- Date run: 2026-09-17
- Result (pass / fail + notes): **PASS.** `node tests/star.test.js` → 13/13 passing. `node --check` on `star-parser.js` and `script.js` → OK. No hex outside `:root`; no pill radii. Section order confirmed Problem → Solution → **Builder** → Features → Examples. Served 200 (`index.html`, `star-parser.js`, `script.js`). A realistic pasted scenario split cleanly into S/T/A/R.
- Founder approval for any spec updates: pending (build done; awaiting review/merge)
