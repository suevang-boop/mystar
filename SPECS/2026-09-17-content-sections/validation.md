# Content Sections — Validation

**Feature:** Problem, Solution, Features, Examples, CTA, Footer for MySTAR.
**Method:** Manual validation (no automated test framework in this repo — see requirements.md Decisions). These checks are the definition of done.

---

## How to know it worked

### 1. Page serves correctly
- [ ] `curl http://localhost:3000/` → HTTP 200 (and the public Codio URL → 200).
- [ ] HTML parses as well-formed; all sections present in the intended order: Hero (existing) → Problem → Solution → Features → Examples → CTA → Footer.

### 2. Copy is exact
- [ ] Every headline and supporting line matches `build-lab/MISSION.md` Section 8 word for word (grep to confirm the six headlines).
- [ ] CTA section contains exactly one gold button: "Write my first story — it's free."
- [ ] Footer contains no button/CTA.

### 3. Design discipline
- [ ] No hex codes in `style.css` outside the `:root` token block (`grep -n '#[0-9A-Fa-f]\{3,6\}' style.css` — matches only lines inside `:root`).
- [ ] No new fonts; only `--font-heading`, `--font-body`, `--font-mono` used.
- [ ] Radius only `--radius-sm/md/lg` (4/8/12); no pill shapes.
- [ ] `script.js` is byte-identical to before this feature (no JS added).

### 4. Responsive
- [ ] Features grid: 3 columns at wide width, 1 column ≤768px.
- [ ] Two quote cards: side-by-side at wide width, stacked ≤768px.
- [ ] Text sections have a comfortable `max-width` and don't stretch full-bleed.

### 5. Spec alignment
- [ ] Diff the build against MISSION.md Section 8 and this feature spec.
- [ ] If drift exists, present it to the founder and update the spec files only after approval.

## Anything failing a check above = fix before merge.

## Record
- Date run:
- Result (pass / fail + notes):
- Founder approval for any spec updates: yes / no