# Launch Checklist — Test, Show, Ship

Stage 6 of the roadmap. Work top to bottom.

## 1. Fix the placeholders BEFORE anyone sees the page

These are unfinished spots that would look broken to a stranger.

- [ ] **Every button says `href="#"`.** The gold "Write my first story" buttons (navbar, hero, bottom CTA) currently go nowhere, and clicking them jumps to the top. Decide a real destination.
- [ ] **Testimonials are marked "(placeholder)".** They are fake right now. Never ship fake quotes with your name on them. Decide: remove them, or clearly label them as *example* stories.
- [ ] The brand/logo link (`MySTAR` top-left) also points to `#` — normally it should scroll to the top / hero.

## 2. Run the human test

- [ ] Do the 1-Minute Human Test (see `HUMAN_TEST.md`).
- [ ] Write down the 3 most critical issues.
- [ ] Fix only those 3.

## 3. Save your work with Git

- [ ] `git init` inside `build-lab/` (or the workspace root).
- [ ] Add a `.gitignore` (see note below).
- [ ] `git add` and make the first commit: "MySTAR landing page v1".

## 4. Show it to the world

- [ ] **Quickest option:** the Codio URL already works —
      https://adriancongo-neptunejames-3000.codio.io/ (only live while the box runs).
- [ ] **Real option:** push to GitHub, then turn on GitHub Pages, or connect the
      repo to Netlify / Vercel. These give a permanent public link.

## 5. Submit

- [ ] Startup name: **MySTAR**
- [ ] Value prop: "Turn any experience into a polished STAR interview story."
- [ ] GitHub URL: (fill in after step 3–4)
- [ ] Public URL: (Codio URL above, or your new deploy link)

---

### Note: what goes in `.gitignore`

Keep the repo clean. Ignore editor/system junk and the running server's mess, for example:

```
.DS_Store
*.log
__pycache__/
node_modules/
```
