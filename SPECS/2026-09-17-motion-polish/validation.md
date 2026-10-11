# Motion & Polish — Validation

**Feature:** Hover-lift cards + reduced-motion. CSS-only change.
**Method:** Manual validation (no test framework in this repo — requirements.md Decisions).

---

## How to know it worked

### 1. Nothing broke
- [ ] `curl http://localhost:3000/` → HTTP 200 (and public Codio URL → 200).
- [ ] `<h1>`/headline still visible; existing hero fade-in still applied (`hero-fade-in` rule intact).
- [ ] Navbar, hero, and all content sections still rendered (no CSS rule accidentally removed).

### 2. Hover-lift works
- [ ] Feature cards and quote cards rise smoothly by ~4px on hover (`transform: translateY(-4px)` with 200ms ease).
- [ ] A quiet accent cue accompanies the lift (border → `--color-accent`).
- [ ] Keyboard users can trigger the same state via `:focus-within`.
- [ ] Buttons keep their existing hover/active behavior untouched.

### 3. Reduced motion
- [ ] With OS "reduce motion" on, the hero has no entrance animation and cards have no lift — all text/content is fully visible and usable.

### 4. Discipline
- [ ] No new hex codes outside `:root` (`grep -n '#[0-9A-Fa-f]\{3,6\}' style.css` → only lines 7–15).
- [ ] `script.js` byte-identical (no JS added); `index.html` unchanged.
- [ ] No pills, no new fonts, no scroll effects added.

### 5. Spec alignment
- [ ] Diff the build against this feature spec (motion budget accounting holds: 1 hero + microinteractions, 0 scroll).
- [ ] Present any drift to the founder; update specs only after approval.

## Anything failing a check above = fix before merge.

## Record
- Date run:
- Result (pass / fail + notes):
- Founder approval for any spec updates: yes / no