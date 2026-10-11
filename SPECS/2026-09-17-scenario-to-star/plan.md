# Scenario → STAR (paste-to-parse) — Plan

**Feature:** Paste a scenario, press **Form STAR**, and edit the result until it reads as S · T · A · R.
**Method:** Build in small task groups. If the founder approves the test approach, write tests **before** the parser code and run them until green (Red → Green). DOM behavior is validated manually (see `validation.md`).

---

## Task Group 0 — Parser as pure functions (test-first, if approved)

- [ ] Create `build-lab/star-parser.js` with pure functions (no DOM, no leaked globals):
  - `splitIntoSentences(text)` → array of trimmed, non-empty strings.
  - `guessLetter(sentence, index, total)` → one of `"s" | "t" | "a" | "r"`.
  - `parseToStar(text)` → `{ s: [], t: [], a: [], r: [] }`.
- [ ] Create `build-lab/tests/star.test.js` using Node's built-in `assert` only.
  - Written **before** the parser and run with `node tests/star.test.js` until all pass.

**Checks:** `node tests/star.test.js` prints pass and exits 0.

## Task Group 1 — Section markup

- [ ] In `index.html`, add `<section class="builder container" id="builder">` after the **Solution** section.
- [ ] Inside: `<h2>`, one-line explainer, a labeled `<textarea>` ("Paste your scenario or an example…"), and a **Form STAR** button (secondary/ghost — not a second gold primary CTA).
- [ ] A results area (hidden until Form STAR is pressed) with four buckets: `S`, `T`, `A`, `R`.
- [ ] A live preview area + a **"Copy story"** button.

**Checks:** markup well-formed; section sits in the intended order.

## Task Group 2 — Wiring in `script.js`

- [ ] On **Form STAR** click: read the textarea, call `parseToStar`, render one card per piece into its bucket.
- [ ] If the textarea is empty, show a friendly "paste something first" message.
- [ ] Each card: the text, a small set of **move** controls (S T A R buttons), and inline **edit** (a small `<textarea>` or `contenteditable`).
- [ ] On any move/edit: re-render the four buckets and the assembled preview.
- [ ] **Copy story** copies the assembled STAR text to the clipboard.
- [ ] Persist the current result to `localStorage`; restore it on page load.

**Checks:** no console errors; no network requests are made.

## Task Group 3 — Styling

- [ ] Four-bucket grid (`repeat(4, 1fr)`) that stacks sensibly on small screens.
- [ ] Card treatment matches the existing feature/quote cards; STAR bucket titles use `--font-mono` + accent color.
- [ ] Only existing tokens; no hardcoded hex, no new radius/fonts.

**Checks:** hex only inside `:root`; radius strictly 4/8/12.

## Task Group 4 — Accessibility & motion

- [ ] Move controls are real `<button>`s, keyboard operable, with visible focus.
- [ ] No new animation (motion budget already spent); respect `prefers-reduced-motion` (nothing new to disable).

**Checks:** tab-through works; focus rings visible on the surface color.

---

## Definition of Done

- All Task Groups complete.
- `node tests/star.test.js` passes (if approved).
- `validation.md` checklist passes.
- Specs re-synced if the build drifted; founder approved any spec updates.
