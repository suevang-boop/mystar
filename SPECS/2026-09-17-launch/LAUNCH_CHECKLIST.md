# Launch Checklist — Test, Show, Ship

Stage 6 of the roadmap. Work top to bottom.

## 1. Fix the placeholders BEFORE anyone sees the page

These are unfinished spots that would look broken to a stranger.

- [x] **Every button says `href="#"`.** *(DONE: all gold CTAs now point to `#solution`.)*
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
