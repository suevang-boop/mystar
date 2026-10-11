# MySTAR

**Your story, told in STAR.**

MySTAR is a guided coach that helps total beginners turn real experiences into
clear, confident interview answers using the STAR format — Situation, Task,
Action, Result.

If an interviewer says "tell me about a time when…" and you freeze, MySTAR
interviews you instead: one plain question at a time, in the order a good story
needs. You watch your answer take shape as S, T, A, and R fill in on screen.

- **Live site:** https://suevang-boop.github.io/mystar/
- **Repository:** https://github.com/suevang-boop/mystar

---

## Who it's for

People with little or no interview experience who have never been taught the
STAR format — students, first-time job seekers, anyone who did the work but
struggles to retell it.

## What's here right now

This repository currently holds the **landing page**. The guided-coach tool
itself (the question flow and live STAR builder) is the next thing to build.

## How it's built

Plain, beginner-friendly web technology — no frameworks:

- **HTML** (`index.html`) — the page structure
- **CSS** (`style.css`) — all colors, fonts, and spacing live in one `:root`
  block of tokens, so the whole look can change in one place
- **JavaScript** (`script.js`) — reserved for the app's interactions (currently
  an empty template)

The design uses the "Starlight" palette (navy sky + star gold) with the fonts
Space Grotesk (headings), Inter (body), and JetBrains Mono (labels).

## Run it locally

From inside the `build-lab/` folder, start a small web server:

```bash
python3 -m http.server 3000
```

Then open http://localhost:3000/ in your browser.

## Project structure

```
build-lab/
  index.html              The landing page
  style.css               Styles and design tokens
  script.js               JavaScript (empty for now)
  MISSION.md              The Founder Notebook — the story behind every choice
  SPECS/
    MISSION.md            The constitution: purpose, audience, rules
    TECH.md               Tech stack and engineering rules
    ROADMAP.md            The 6-stage journey from idea to live site
    2026-09-17-*/         Feature specs (requirements, plan, validation)
    2026-09-17-launch/    Human-test script and launch checklist
```

## The golden rule

> **Think → Ask → Evaluate → Decide → Build**

Every feature starts as a written spec before any code is written, so decisions
are made on purpose, not by accident.
