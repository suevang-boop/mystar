# Base Shell & Design Tokens — Plan

**Feature:** Base shell (fonts + tokens + reset) + Navbar + Hero for MySTAR.
**Approach:** Red/Green TDD is waived for this feature — the repo has no test framework and this is static HTML/CSS, so validation is manual (confirm with curl + visual/code review per `validation.md`).

Work in build order. Each task group produces reviewable output.

## Task Group 1 — Base shell: page setup + fonts

- [ ] In `build-lab/index.html`: update `<title>` to "MySTAR — Your story, told in STAR." and add a short `<meta name="description">`.
- [ ] Add Google Fonts `<link>` tags for Space Grotesk (500/600/700), Inter (400/500), JetBrains Mono (400/500) in the `<head>`.
- [ ] Replace the placeholder HTML body comment with an empty semantic skeleton: `<header>` (navbar), `<main>` (hero), leaving room for later sections.

**Checks:** fonts links present; HTML still validates as well-formed.

## Task Group 2 — Design tokens in `style.css`

- [ ] Replace placeholder `:root` tokens with full Starlight palette:
  - Colors: `--color-background`, `--color-surface`, `--color-primary`, `--color-secondary`, `--color-accent`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-on-primary`.
  - Typography: `--font-heading` (Space Grotesk), `--font-body` (Inter), `--font-mono` (JetBrains Mono).
  - Radius: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px).
  - Keep the existing spacing scale (`--space-1`…`--space-6`).
- [ ] Base reset: universal box-sizing, zero margins, body uses `--font-body`, `--color-background`, `--color-text`, line-height 1.6.

**Checks:** grep `style.css` — no hex codes outside the `:root` token block; every token from MISSION.md Section 9 exists.

## Task Group 3 — Navbar component

- [ ] Semantic `<header>` + `<nav>` in `index.html`: wordmark "MySTAR" on the left (JetBrains Mono accent), links (How it works / Features / Testers), gold primary button "Write my first story" on the right.
  - *Post-build note (2026-09-17, Stage-5 audit + review):* the links were finally wired to real anchors — `How it works → #solution`, `Features → #features`, `Testers → #testers` — with matching section `id`s and `section[id] { scroll-margin-top: var(--space-6); }`. On screens ≤768px the bar wraps to multiple rows rather than hiding any link.
  - *Stage-6 update (2026-09-17):* the third link is now `Examples → #examples` (the section's content was relabeled from testimonials to illustrative examples), and "Write my first story" now points to `#solution` instead of a dead `#`.
- [ ] CSS: navbar sticky at top, `--color-surface` background, subtle `--color-border` bottom divider, `--space-2`/`--space-3` padding, container max-width.
- [ ] Button styles per MISSION.md Section 2: primary (gold bg, `--color-on-primary` text, weight 600, `--radius-sm`, hover → `--color-accent`) and correct focus ring (`--color-secondary`).

**Checks:** navbar sticks on scroll; only ONE gold CTA in the navbar; links and wordmark visible.

## Task Group 4 — Hero section

- [ ] In `index.html` inside `<main>`: `<h1>` headline "Turn 'tell me about a time…' into an answer that lands." (Space Grotesk, large), `<p>` subheadline, CTA row (primary "Write my first story" + secondary "How it works"), trust line in `--color-text-muted`.
  - *Stage-6 copy update (2026-09-17, peer-testing feedback):* headline/subheadline revised from the brand-tagline hero to a problem-first hero that names the audience ("New to interviews?") and the pain ("tell me about a time…"). Only the `<h1>`/`<p>` text changed — no markup, style, or token changes.
- [ ] STAR preview mock card: a small surface card listing S · T · A · R with placeholder story snippets in JetBrains Mono, gold STAR labels, `--radius-md`. Purely visual — no JS.
- [ ] CSS: hero layout (left copy, right card on wide screens; stacked on small screens), generous vertical spacing, background `--color-background` with quiet navy layering via surfaces only.
- [ ] Hero motion: one load fade-in (CSS `@keyframes`, ~300–400ms) on the hero block. Button hover/focus microinteractions only. No scroll effects this step (motion budget).

**Checks:** one primary CTA in hero; headline/subheadline/trust line match Section 8 copy exactly; preview card uses only variables; page looks right at 320px, 768px, 1280px+.

## Task Group 5 — Validate

- [ ] Serve the folder (`python3 -m http.server`) and `curl` `index.html` → HTTP 200, fonts + sections present.
- [ ] Run the manual checks in `validation.md`; record results.
- [ ] Surface any differences between what was built and MISSION.md Sections 8/9 + this spec; update the specs only after the founder approves.