# Base Shell & Design Tokens — Validation

**Feature:** Base shell + Navbar + Hero for MySTAR.
**Method:** Manual validation (no automated test framework — see requirements.md Decisions). An automated "test" is not feasible for static markup/CSS in this repo, so the checks below are the definition of done.

---

## How to know it worked

### 1. Page serves correctly
- [ ] Serve `build-lab/` (`python3 -m http.server`) and `curl http://localhost:PORT/` returns **HTTP 200**.
- [ ] `content-type` is `text/html`; the page contains the `<title>` and `<meta name="description">`.
- [ ] The three Google Fonts `<link>` tags are present and resolve to `fonts.googleapis.com`.

### 2. Design tokens are correct and leak-free
- [ ] Every color uses a CSS variable — **no hex codes in any component rule** (only inside the `:root` token block). Check with: `rg -n '#[0-9A-Fa-f]{3,6}' style.css` — matches may only occur in the token definitions.
- [ ] All 9 color tokens + 3 typography tokens + 3 radius tokens from MISSION.md Section 9 exist in `:root`.
- [ ] No pill shapes: radius uses only `--radius-sm/md/lg` (4/8/12).
- [ ] Placeholder values (`#ffffff`, `#f5f5f5`, `system-ui`, `--radius`) from the old template are gone.

### 3. Navbar
- [ ] Sticky at top; scrolling a long page keeps it visible.
- [ ] Surface background with border divider; wordmark "MySTAR"; links How it works / Features / Examples; exactly one gold primary button "Write my first story".
- [ ] Links and wordmark stay visible at all widths (≤768px the bar wraps to multiple rows — links are NOT hidden).
- [ ] Link/button hover and keyboard focus states use `--color-secondary` ring.

### 4. Hero
- [ ] Headline, subheadline, primary + secondary CTA, and trust line match Section 8 copy **word for word**.
- [ ] STAR preview mock card visible with S · T · A · R labels in gold, body in JetBrains Mono, on `--color-surface`.
- [ ] Layout: side-by-side at wide width, stacked and readable at 320px.
- [ ] Hero fade-in runs once on load; total motion = 1 hero effect + button microinteractions (within TECH.md budget — no scroll/mouse-triggered effects added).

### 5. Spec alignment
- [ ] Diff the implementation against MISSION.md Sections 8 & 9 and this feature spec; list any differences.
- [ ] If the implementation drifted from the spec, present the drift to the founder and update the spec files **only after founder approval**.

## Anything failing a check above = fix before merge.

## Record
- Date run:
- Result (pass / fail + notes):
- Founder approval for any spec updates: yes / no