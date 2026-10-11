# Content Sections — Plan

**Feature:** Problem, Solution, Features, Social Proof, CTA, Footer for MySTAR.
**Approach:** Manual validation (no automated tests in this repo — see `validation.md`). Motion-free build: `script.js` is not touched.

Build in page order. Each group produces reviewable output.

## Task Group 1 — Problem + Solution

- [ ] Append inside `<main>` (after the Hero section) in `build-lab/index.html`:
  - `<section class="problem">`: `<h2>` "You did the work. Retelling it is the hard part." + two `<p>` lines.
  - `<section class="solution">`: `<h2>` "A coach that interviews the story out of you." + two `<p>` lines.
- [ ] Style in `build-lab/style.css`: centered or left-aligned quiet statement sections — large Space Grotesk `<h2>`, Inter body, muted secondary line, generous `--space` vertical rhythm, `max-width` text column for readability. No cards needed for these two.

**Checks:** copy matches Section 8 verbatim; only tokens used.

## Task Group 2 — Features grid

- [ ] `<section class="features">`: `<h2>` + a 3-card grid. Each card = `--color-surface` background, `--radius-md`, 1px `--color-border`, mono gold badge, a title, and one line.
  - Live STAR preview — "Watch S, T, A, R assemble as you answer."
  - Beginner-friendly — "Each letter is taught in one line at the moment you use it."
  - Saved in your browser — "No accounts, automatic localStorage saves."
- [ ] CSS: grid `repeat(3, 1fr)` at wide widths, stacking to 1 column on small screens. Badge uses `--font-mono` + `--color-primary`.
  - *Post-build note (2026-09-17, review fix):* badges use sequential numbers **01 / 02 / 03**, not S/T/A. Using STAR letters on non-STAR cards implied a false mapping and missed the "R"; numbers keep the precise dev-tool look.

**Checks:** exactly 3 cards; badges re-use the mono/gold language of the hero preview card.

## Task Group 3 — Examples

- [ ] `<section class="examples">` (id `examples`): `<h2>` "See the kind of story you'll build." + an honesty note ("Illustrative examples from our own test runs — not real customer quotes.") + two quote cards (`<figure>`/`<blockquote>`/`<figcaption>`).
  - "Went from a blank screen to a story I'd actually say in an interview — in ten minutes."
  - "Finally understood what S-T-A-R actually means."
- [ ] CSS: two quote cards side by side at wide widths, stacked on small screens; card treatment matches feature cards.
  - *Stage-6 note (2026-09-17):* this group was originally "Social Proof" with `class="testers"` and the headline "From our first testers." Because no real customers exist yet, it was relabeled to clearly illustrative examples — each card credited "Example story, not a real customer". The nav link was changed to "Examples" and points to `#examples`.

**Checks:** two example cards; each clearly labeled as an example, not a real endorsement; honesty note present.

## Task Group 4 — CTA band

- [ ] `<section class="cta">`: `<h2>` "The hardest question, already answered." + exactly ONE gold primary button "Write my first story — it's free." + micro-assurance line ("Saved automatically · works on any device · no sign-up.") in muted text.
- [ ] CSS: a `--color-surface` band (or accent treatment) with the single button centered; `--radius-md|lg` panel shape allowable.

**Checks:** exactly one gold button in this section; no secondary link; micro-assurance present.

## Task Group 5 — Footer

- [ ] `<footer class="site-footer">` after `</main>`: wordmark "MySTAR", tagline "Your story, told in STAR.", two quiet links (How it works / Features), copyright line ("© 2026 MySTAR").
  - *Post-build note (2026-09-17, Stage-5 audit):* footer links were wired to `How it works → #solution`, `Features → #features`.
- [ ] CSS: quiet — muted text on background (not a heavy band), small type, minimal spacing. No CTA in the footer.

**Check:** footer has no gold button, reads as the quiet end of the page.

## Task Group 6 — Validate

- [ ] Serve (`python3 -m http.server 3000`) and confirm HTTP 200 via curl (local + public Codio URL).
- [ ] Run the manual checks in `validation.md`; record results in the file.
- [ ] Surface any differences between the build and MISSION.md Section 8 / this spec; update specs only after founder approval.