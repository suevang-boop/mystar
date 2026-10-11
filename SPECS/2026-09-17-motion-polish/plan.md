# Motion & Polish — Plan

**Feature:** Hover-lift cards + reduced-motion support. CSS-only. `script.js` and HTML untouched.
**Approach:** Manual validation (see `validation.md`).

Build in order. Each group is reviewable.

## Task Group 1 — Add a transition token

- [ ] In `build-lab/style.css` `:root`, add a small motion token (keeps values in one place):
  - `--transition-fast: 200ms ease;`

**Check:** token defined; nothing else in `:root` changed.

## Task Group 2 — Hover-lift on feature and quote cards

- [ ] `.feature-card` and `.quote-card`: add `transition: transform var(--transition-fast), border-color var(--transition-fast);`.
- [ ] On `:hover` (and `:focus-within` for keyboard users): `transform: translateY(-4px);` and `border-color: var(--color-accent);`.
- [ ] Ensure the existing `.btn` transitions/behaviors are untouched.

**Check:** smooth lift, subtle accent border, works with keyboard focus.

## Task Group 3 — Respect reduced motion

- [ ] Add a `@media (prefers-reduced-motion: reduce)` block that:
  - Disables the hero `animation`.
  - Sets `transition: none` (or near-zero) on the cards.
  - Keeps the page fully usable/visible (fade-in disabled means hero is just visible — fine).

**Check:** with reduced motion on, no translate/fade happens; page content still fully visible.

## Task Group 4 — Validate

- [ ] Re-serve and confirm HTTP 200 (local + public Codio URL).
- [ ] Manual checks in `validation.md`; record results.
- [ ] Surface differences vs this spec; update specs only after founder approval.