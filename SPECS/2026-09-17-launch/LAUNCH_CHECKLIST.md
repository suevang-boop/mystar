# Launch Checklist — Test, Show, Ship

Stage 6 of the roadmap. Work top to bottom.

## 1. Fix the placeholders BEFORE anyone sees the page

These are unfinished spots that would look broken to a stranger.

- [x] **Every button says `href="#"`.** *(DONE: gold CTAs first pointed to `#solution`; updated 2026-09-17 to `#scenario-input` so "Write my first story" jumps to the input box.)*
- [x] **Testimonials are marked "(placeholder)".** *(DONE: section relabeled "Examples" with an honesty note; each card reads "Example story, not a real customer".)*
- [x] The brand/logo link (`MySTAR` top-left) also points to `#` — *(DONE: points to `#top`.)*

## 2. Run the human test

- [ ] Do the 1-Minute Human Test (see `HUMAN_TEST.md`).  ← **your turn**
- [ ] Write down the 3 most critical issues.
- [ ] Fix only those 3.

## 3. Save your work with Git

- [x] `git init` inside `build-lab/`. *(DONE — branch `main`.)*
- [x] Add a `.gitignore`. *(DONE.)*
- [x] `git add` and make the first commit: "MySTAR landing page v1". *(DONE — commit `ca2beff`.)*

## 4. Show it to the world

- [x] **Quickest option:** the Codio URL works —
      https://adriancongo-neptunejames-3000.codio.io/ (only live while the box runs).
- [x] **Real option (DONE):** pushed to GitHub and enabled **GitHub Pages** (serve from `main` / root).
      Permanent public link: https://suevang-boop.github.io/mystar/

## 5. Submit

- [x] Startup name: **MySTAR**
- [x] Value prop: "Turn any experience into a polished STAR interview story."
- [x] GitHub URL: https://github.com/suevang-boop/mystar
- [x] Public URL: https://suevang-boop.github.io/mystar/

---

### Note: what goes in `.gitignore`

Keep the repo clean. Ignore editor/system junk and the running server's mess, for example:

```
.DS_Store
*.log
__pycache__/
node_modules/
```
