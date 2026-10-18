# Founder Notebook

Welcome to your Founder Notebook. This is the single source of truth for your startup project. As founder and lead decision-maker, use this file to define your concept, guide OpenCode, and track every important decision.

---

## 1. Vision & Problem Discovery

*The foundation: Knowledge → Problem → Solution → Value → Product*

- **Domain / Industry:** Career preparation — behavioral interviewing & storytelling
- **Target Audience (Who is this for?):** Students and early-career job seekers who face behavioral interviews in STAR format — both total beginners (never used STAR) and people who know the format but freeze when writing.
- **The Core Problem (What pain point are you solving?):** People can't turn their own experiences into strong STAR stories. Every step is a freeze point — picking the right example, structuring the parts, making it read like a real story, ending with a result that doesn't fizzle — and first-timers don't even know the format.
- **Proposed Solution:** A guided coach that interviews the user question by question, teaches the format to beginners as it goes, and saves finished stories for reuse. (Later phases: converter, practice-with-feedback, polished story library.) **V1 targets total beginners first.**
- **Value Proposition (Why choose this over existing alternatives?):** We build the story *with* the user — an interview, not a blank template — into a polished, reusable STAR story they're proud to tell. 

---

## 2. Brand Identity & Design System

*Define the visual and emotional tone before generating code or copy.*

- **Company / Product Name:** MySTAR — "my star = my story." Personal, warm, and a clean pun on the STAR format.
- **Tagline:** "Your story, told in STAR."
- **Brand Personality / Tone of Voice:** Developer tool — precise, minimalist, dark-mode. Calm and encouraging, zero fluff, never intimidating.
- **Color Palette (Starlight):** navy night sky (background) + warm star-gold (action color). Precise dark-tool feel that ties the MySTAR name to the visuals.
  - Primary: `#F59E0B`
  - Secondary: `#38BDF8`
  - Accent: `#FBBF24`
  - Background: `#0F172A`
  - Surface / Card: `#1E293B`
  - Text (Primary / Muted): `#F1F5F9` / `#94A3B8`
- **Typography:**
  - Heading Font: "Space Grotesk" (weights 500/600/700) — geometric, precise, slightly techy
  - Body Font: "Inter" (weights 400/500), line-height 1.6 — clean and readable at any size
  - Code / small labels: "JetBrains Mono" (weights 400/500) — used for the STAR letters, error text, and tiny UI labels
- **Button Styles:**
  - **Primary:** solid gold `#F59E0B`, text in dark navy `#0F172A`, weight 600, height 40px, padding 10px 16px, radius 4px. Hover: brighten to `#FBBF24`. Focus ring: sky blue `#38BDF8`. Active: pressed down.
  - **Secondary:** transparent, 1px border `#334155`, text `#F1F5F9`. Hover: gold text + gold border.
  - **Ghost / text link:** muted text `#94A3B8`, gold on hover. Never two primary CTAs on one screen.
    - *Exception (2026-09-17, review):* the site has ONE call-to-action **action** — "Write my first story" — repeated as a persistent sticky-nav button, the hero button, and the closing CTA band. The rule forbids multiple *different* primary CTAs; repeating the same action is allowed.
  - **Disabled:** 40% opacity, no interaction.
- **Border Radius Rules** (strict, part of the brand):
  - `4px` — buttons, inputs, and controls (the "sharp, precise" dev feel)
  - `8px` — cards, surfaces, dropdowns
  - `12px` — large panels / modals only
  - No pill / fully-rounded shapes. One size per component, never mixed.

---

## 3. Website Structure & Page Architecture

*Outline the narrative flow and layout of the public-facing website.*

- **Primary Goal / Conversion Action (e.g., Waitlist signup, Free trial, Contact demo):** 
- **Page Sections:**
  1. **Hero Section:** Headline, Subheadline, Primary CTA, Hero visual/mockup
  2. **Social Proof / Credibility:** 
  3. **Feature Highlights / Value Drivers:** 
  4. **How It Works / Product Demo:** 
  5. **Pricing / Tiers (Optional):** 
  6. **FAQ / Objection Handling:** 
  7. **Footer / Secondary CTAs:** 

---

## 4. Decision Log

*Follow the cycle: Think → Ask → Evaluate → Decide → Build*

| Date | Topic / Area | Options Considered | Final Decision & Rationale | Status |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-17 | Core idea / problem statement | Learning scrapbook vs STAR story guided coach | STAR story guided coach — real, personal pain; high feasibility; clear audiences. See Founder Decision below. | Done |
| 2026-09-17 | Version 1 scope (challenge round) | Paper-test vs rough build; beginners vs stuck-experienced; which magic moment; storage | Rough build first; total beginners first; magic = story takes shape live on screen; save in browser (localStorage), no accounts/server. | Done |
| 2026-09-17 | Product name | MySTAR vs StarStory vs StarMint vs Storyline | MySTAR — personal, warm, clean pun on the STAR format. | Done |
| 2026-09-17 | Color palette | Terminal vs Syntax vs Starlight | Starlight — navy sky + star-gold: precise dev-tool feel that on-brands MySTAR. | Done |
| 2026-09-17 | Design system | Typography, buttons, radius | Space Grotesk + Inter + JetBrains Mono; gold primary / outlined secondary / ghost text; strict 4px/8px/12px radius, no pills. | Done |
| 2026-09-17 | Tagline | "Your story, told in STAR." vs "From ramble to ready." vs "Every answer, a star." vs "The hardest question, already answered." | "Your story, told in STAR." — clean, precise, says exactly what it does. | Done |
| 2026-09-17 | Landing page structure | Hero/Problem/Solution/Features/Social Proof/CTA with approved headlines | Saved as Section 8 — Page Architecture. Single CTA: "Write my first story." | Done |
| 2026-09-17 | Quality audit (Stage 5 Step 5) | Leave dead `#` links vs wire internal anchors | Wired nav/footer to #solution/#features/#testers + scroll-margin. All 5 audit points pass. | Done |
| 2026-09-17 | PR review fixes | Hide mobile nav vs wrap; S/T/A badges vs numbers; smooth scroll; dangling class | Mobile nav now wraps (links stay visible); badges → 01/02/03; smooth scroll documented as navigation behavior; dropped unused `.footer-copy`; CTA-count exception documented. `script.js` verified untouched. | Done |
| 2026-09-17 | **Stage 5 complete** | — | Landing page built: base shell + tokens + Navbar + Hero + Problem/Solution/Features/Testers/CTA + Footer, motion + audit + review. Specs synced. | Done |
| 2026-09-17 | Stage 6 pre-launch placeholders | CTA `#` target; fake testimonials | CTAs → `#solution` (safe interim); "Testers" relabeled **Examples** with an honesty note and "not a real customer" credits; brand logo → `#top`. | Done |
| 2026-09-17 | Stage 6 git | Skip git vs commit locally vs push | `git init` + `.gitignore` + first commit **locally**; student pushes to GitHub/deploys when ready. | Done |
| 2026-09-17 | Hero copy (peer-testing fix) | Tagline hero vs Problem-first vs Audience-first vs Outcome-first | **Problem-first.** Headline: "Turn 'tell me about a time…' into an answer that lands." Subheadline: "New to interviews? MySTAR interviews you one question at a time and builds your answer into Situation · Task · Action · Result, live on screen." Rationale: peer testers couldn't tell who it was for or what problem it solved. The old tagline stays as the brand tagline (`<title>` + footer). | Done |
| 2026-09-17 | Ship & submit (Stage 6) | Where to host; repo owner | Pushed to GitHub (`suevang-boop/mystar`), deployed with GitHub Pages (serve from `main`/root), recorded submission. Repo is public; live at https://suevang-boop.github.io/mystar/. | Done |
| 2026-09-17 | Scenario → STAR section | File upload vs paste; AI vs rules; auto vs assisted | **Paste + Form STAR**, **browser rules (no AI)**, **assisted (guess + user fixes)**. Plain-text only; no server; saved in `localStorage`. Spec: `SPECS/2026-09-17-scenario-to-star/`. Built on branch `feature/document-upload` with plain-JS parser tests (13 passing). | Done |
| 2026-09-17 | Worked example (Examples section) | Add a full sample story? keep real or sanitize? | Added one **full S/T/A/R worked example** below the quotes. Copy **de-identified** (no company/internal tool/personal names) before publishing. Static card — no new motion. Spec: `SPECS/2026-09-17-worked-example/`. | Superseded |
| 2026-09-17 | Remove Examples section | Keep or cut the examples? | **Removed the whole Examples section** (quotes + worked example) at the founder's request. Dropped the nav link and deleted the unused CSS. Story preserved in `SPECS/2026-09-17-worked-example/` for the founder's own interview use. | Done |
| 2026-09-17 | STAR structure in builder | Where to teach the full STAR format? | Show the objective + share of answer + guiding questions **in each bucket**, and add one full **example response** below. Parser unchanged; static text. Spec: `SPECS/2026-09-17-star-structure/`. | Done |
| 2026-09-17 | Save scope (privacy) | Persistent (`localStorage`) vs per-visit (`sessionStorage`)? | Switched to **per-visit saving** so the founder's entry no longer leaks to other visitors sharing the browser. Work persists for the current tab; a new tab/visitor starts blank. Updated the "Saved for your visit" feature card. | Superseded |
| 2026-09-17 | No saving (fresh page) | Keep per-visit saving, or save nothing? | **Nothing is saved** — removed `sessionStorage`/`localStorage` entirely. Every load starts blank; refresh or leaving the page resets it (also resets when restored from the back-forward cache). Feature card → "Fresh every time". | Done |
| 2026-09-17 | Primary CTA target | Anchor CTAs to `#solution` (interim) or the tool? | "Write my first story" now scrolls straight to the **scenario input** (`#scenario-input`). Added a `scroll-margin-top` offset so the sticky navbar doesn't cover the target. | Done |
| 2026-09-17 | Download story button | Copy only, or also download a file? | Added a **Download** button beside **Copy story** — saves the preview as `my-star-story.txt` via the browser's Blob download (still no server). Secondary button, not a second CTA. Spec: `SPECS/2026-09-17-download-story/`. | Done |
| *YYYY-MM-DD* | *e.g., Primary CTA* | *Waitlist vs Direct Purchase* | *Waitlist — lower friction for initial validation* | *Done* |
| | | | | |
| | | | | |

---

## 5. Notes & Prompts for OpenCode

*Use this section to draft prompt briefs, review feedback, and keep track of pending tasks.*

- [x] Define core problem statement and audience
- [x] Select color palette and typography
- [x] Draft website copy for hero section
- [x] Build responsive hero and navigation components
- [x] Implement feature showcase sections
- [x] Add interactive elements and conversion forms
- [x] Final visual polish and responsive testing

### Quality Audit — 2026-09-17 (5-Point Check, ROADMAP Stage 5 Step 5)

**Method:** reviewed live `index.html` + `style.css` against MISSION.md Sections 2/8/9 and TECH.md; verified tokens, links, and assets.

| Point | Result | Notes |
| :--- | :--- | :--- |
| Product Clarity | Pass (7.5/10) | Clear within 5s: wordmark + "Write my first story" CTA, headline, and a subheadline that spells out Situation · Task · Action · Result. Preview card sells it visually. |
| Design Consistency | Pass (9.5/10) | Hex only in `:root`; all colors via tokens. Space Grotesk (headings) / Inter (body) / JetBrains Mono (labels). Radius strictly 4/8/12. Spacing on the `--space` scale. |
| Interaction & Motion | Pass (9/10) | Buttons (hover/active/focus), nav links hover, cards lift on hover + keyboard focus. Within motion budget; `prefers-reduced-motion` respected. |
| Responsiveness | Pass (8.5/10) | No overflow expected 320px–1280px; grids collapse 3→1 / 2→1 at 768px; navbar/footer wrap; clamp() headlines. |
| Technical Quality | Pass (8/10) | Semantic HTML, assets present, no JS → no console errors. **Fixed:** internal links were dead `href="#"`. |

**Fix applied (Important):** wired internal anchors — `How it works → #solution`, `Features → #features`, `Testers → #testers`; added section `id`s and `section[id] { scroll-margin-top: var(--space-6); }` so the sticky navbar doesn't cover headings. Verified HTTP 200 local + public; `script.js` untouched.

**Open placeholders (non-blocking, expected pre-launch):**
- ~~CTA buttons still point to `#` — the guided-coach tool doesn't exist yet.~~ **Resolved 2026-09-17 (Stage 6):** every CTA now points to `#solution` as a safe interim (the tool isn't built yet); the brand logo points to `#top`.
- ~~Tester quotes are labeled "(placeholder)" — swap for real quotes after testing.~~ **Resolved 2026-09-17 (Stage 6):** the section was relabeled from "Testers" to "Examples" — headline "See the kind of story you'll build." plus an honesty note, each card credited "Example story, not a real customer." Nothing claims a real customer.

### Launch Prep — 2026-09-17 (ROADMAP Stage 6)

Stage-6 kit created in `build-lab/SPECS/2026-09-17-launch/`: `HUMAN_TEST.md` (the 1-Minute Human Test script + scoring sheet) and `LAUNCH_CHECKLIST.md` (placeholders → git → deploy → submit). Founder decisions this stage: CTAs → `#solution`; testimonials → relabeled as examples; git → initialize locally and make the first commit (student pushes to GitHub when ready).

### Submission — 2026-09-17 (ROADMAP Stage 6)

| # | Item | Value |
| :-- | :--- | :--- |
| 1 | Startup Name | **MySTAR** |
| 2 | Value Prop | *We help people with no interview experience solve the "tell me about a time…" problem by interviewing them one question at a time and building their answer into a clear Situation · Task · Action · Result story, live on screen.* |
| 3 | GitHub Repo URL | https://github.com/suevang-boop/mystar |
| 4 | Public Deployed URL | https://suevang-boop.github.io/mystar/ |

Deployed via GitHub Pages (serve from `main` / root); verified HTTP 200.


---

## 6. Official Founder Decision

*Recorded 2026-09-17. This is the locked-in direction for the project.*

**Chosen Direction:**
> A guided-coach app that interviews people into strong STAR (Situation / Task / Action / Result) interview stories — teaching the format to first-timers as it goes, and storing finished stories so they're ready to reuse.

**One-sentence value proposition:**
> "We help students and early-career job seekers who struggle to write STAR interview stories — including people who have never used the format — by interviewing them into polished, reusable stories, so they walk into interviews prepared instead of frozen."

**Five-gate evaluation:**

| Gate | Verdict | Notes |
| :--- | :--- | :--- |
| User | Clear | Two specific audiences: first-timers (never used STAR) and people who know it but freeze when writing. Both build a story bank weeks before interviews. |
| Problem | Real & painful | Founder experiences it directly. Every step of STAR is a freeze point: picking the example, structuring, storytelling, weak results, delivery. Recurs before every interview. |
| Value | Real, with a caveat | Output is concrete (a finished, reusable story). Caveat: STAR templates already exist online — the edge is the *guided coaching feel*, so it must win on experience. |
| Feasibility | High | Question flow + logic + SQLite storage is buildable in a semester with the tools we know. The real work is coaching content, not code. |
| Clarity | High | Decisive scope: guided coach first, library born for free, converter & practice later. Explainable in one sentence. |

**Verdict: SOLID — proceed to build.**

**Guardrails (commitments to ourselves):**
1. **Scope stays tight:** version 1 = the guided coach only. Converter, practice tool, and polished library come later — each depends on stories already existing.
2. **Win on the experience, not on being the only tool:** the app must feel like a coach interviewing you, never a blank template.
3. **Validate early and often:** run the flow on the founder (you) and 3–5 classmates. If the coaching doesn't feel magical, fix the questions — not the features.

---

## 7. Version 1 (Sharpened) — What We Are Building

*Recorded 2026-09-17 after the challenge round. This is the concrete, locked-in V1.*

**Name:** **MySTAR** — a guided coach for total beginners built on the STAR interview format.

**V1 = One guided page for total beginners.**

- **Audience:** people who have never used STAR format before.
- **The magic moment:** the story *takes shape on screen live* as they answer — S fills in, then T, then A, then R — so they physically watch their story build itself.
- **Teaching in passing:** a tiny "here's how S works" hint at each step — no separate tutorial.
- **Storage:** nothing is saved at all (no `localStorage`, no `sessionStorage`) — no accounts, no server, no shared data. Every page load starts blank; refreshing or leaving the page resets it.
- **Deliberately cut for V1:** coaching delivery out loud, the converter, the practice tool, and any fancy saved-library browser.

**Build style:** rough first — start as a single page held together with string, ship it, and put it in front of real beginners. The live-take-shape moment is the hypothesis to prove.

---

## 8. Page Architecture

*Recorded 2026-09-17. Approved landing-page structure for MySTAR.*

**Primary Goal / Conversion Action:** write a first STAR story using the tool (single CTA throughout). Notes: free, no sign-up, works in-browser.

**Page sections, top to bottom:**

1. **Hero**
   - **Headline:** "Turn 'tell me about a time…' into an answer that lands."
   - **Subheadline:** "New to interviews? MySTAR interviews you one question at a time and builds your answer into Situation · Task · Action · Result, live on screen."
   - Primary CTA: **"Write my first story"** · secondary: "How it works" · trust line: "Free · works right in your browser · nothing to install"
   - *(Copy revised 2026-09-17 after peer testing: the old headline was the brand tagline "Your story, told in STAR." — now kept only as the tagline in the `<title>` and footer. The hero now names the audience and the pain: see Decision Log.)*

2. **Problem**
   - **Headline:** "You did the work. Retelling it is the hard part."
   - "Even with STAR cheat sheets open, you freeze — picking which experience to tell, structuring the parts, and ending with a result that doesn't fizzle."
   - "If you've never used STAR format, you don't even know where to start."

3. **Solution**
   - **Headline:** "A coach that interviews the story out of you."
   - "No blank pages, no templates to memorize. Answer a few plain questions in the order a good story needs — the S-T-A-R fills in live as you go."
   - "When you finish, you hold a real, reusable story."

4. **Builder — Scenario → STAR** *(added 2026-09-17; first slice of the real tool)*
   - **Headline:** "Paste a scenario. Get a STAR story."
   - **Intro:** "Paste a note, a scenario, or an example below and press Form STAR. The page sorts it into Situation · Task · Action · Result — each part shows what to include — then you move and edit the pieces until it reads right."
   - A textarea + a **Form STAR** button (secondary, not a second gold CTA). The text is split into sentences, each guessed into S/T/A/R by simple rules; the user then moves/edits pieces. Live preview + **Copy story** + **Download** (saves `my-star-story.txt`); nothing is saved — refreshing or leaving the page resets it to blank.
   - **STAR structure guidance** *(added 2026-09-17)* — each bucket shows the part's goal + share of the answer and three guiding questions:
     - **S — Situation:** Set the scene & context · 15–20%. *Where were you? What was the background? Who was affected?*
     - **T — Task:** Define your responsibility or challenge · 10–15%. *What problem needed solving? What was your own goal? What were the deadlines/KPIs?*
     - **A — Action:** Detail the exact steps you took · 50–60%. *What tools/methods did you use? How did you handle roadblocks? Why that approach?*
     - **R — Result:** Quantify the outcome & lessons learned · 15–20%. *What was the measurable impact (%/$/hours)? What feedback? What lesson?*
   - **Example STAR response** *(added 2026-09-17)* — a full "tight deadline / competing priorities" Data Analyst answer shown as S/T/A/R rows below the preview.
   - All in the browser — no AI, no server, no files. See `SPECS/2026-09-17-scenario-to-star/` and `SPECS/2026-09-17-star-structure/`.

5. **Features**
   - **Headline:** "Everything you need. Nothing you don't."
   - **Live STAR preview** — watch S, T, A, R assemble as you answer.
   - **Beginner-friendly** — every part shows its goal and guiding questions where you use it.
   - **Fresh every time** — nothing is saved; refresh or come back later and the page starts blank.

6. **CTA**
   - **Headline:** "The hardest question, already answered."
   - Closing CTA: **"Write my first story — it's free."** · micro-assurance: "Saved automatically · works on any device · no sign-up."

*(The former "Examples" section — two illustrative quotes plus a worked example — was **removed 2026-09-17** at the founder's request. The story lives on in `SPECS/2026-09-17-worked-example/` for the founder's own interview use.)*

---

## 9. Base Shell & Design Tokens (Mini-Spec)

*Recorded 2026-09-17. Drives ROADMAP Stage 5, Step 1 — base shell + design tokens.*

**Files in scope:** `build-lab/index.html` (structure + font loading) and `build-lab/style.css` (tokens + base styles). `script.js` stays untouched in this step.

**Fonts** — loaded via Google Fonts `<link>` in the page `<head>`:
- **Space Grotesk** (500/600/700) — all headings
- **Inter** (400/500) — body text, line-height 1.6
- **JetBrains Mono** (400/500) — STAR letters, small UI labels, error/tech text

**CSS variables — palette (Starlight):**

| Token | Value | Use |
| :--- | :--- | :--- |
| `--color-background` | `#0F172A` | page background (navy) |
| `--color-surface` | `#1E293B` | nav bar, cards, panels |
| `--color-primary` | `#F59E0B` | gold — CTAs and highlights |
| `--color-secondary` | `#38BDF8` | sky — focus rings, links |
| `--color-accent` | `#FBBF24` | gold light — hover states |
| `--color-text` | `#F1F5F9` | primary text |
| `--color-text-muted` | `#94A3B8` | secondary text |
| `--color-border` | `#334155` | outlined buttons, dividers |
| `--color-on-primary` | `#0F172A` | text placed on gold |

**CSS variables — typography & shape:**

| Token | Value | Use |
| :--- | :--- | :--- |
| `--font-heading` | `'Space Grotesk', sans-serif` | headings |
| `--font-body` | `'Inter', sans-serif` | body |
| `--font-mono` | `'JetBrains Mono', monospace` | STAR labels, code |
| `--radius-sm` | `4px` | buttons, inputs |
| `--radius-md` | `8px` | cards, surfaces |
| `--radius-lg` | `12px` | large panels / modals |
| `--space-1`…`--space-6` | `4/8/16/24/32/48px` | spacing scale (keep existing) |

**Non-negotiable rules:**
1. Every component uses these variables — **no hardcoded hex codes, ever.**
2. Headings → Space Grotesk. Body → Inter. STAR letters/labels → JetBrains Mono.
3. Radius is 4/8/12 only. No pills.
4. One primary CTA per view. Primary buttons: gold bg, dark navy text, weight 600. Secondary: transparent, `--color-border` outline.
5. Motion budget (TECH.md): max 1 hero effect + 1 scroll effect + 1 microinteraction for the whole site.

**This step builds:** base shell (tokens + reset + font loading) **plus** the Navbar and Hero section per Section 8 (Page Architecture). Navbar = surface background, sticky, wordmark "MySTAR", nav links (How it works / Features), gold CTA "Write my first story". Hero = approved headline + subheadline + primary/secondary CTA + trust line. Optional hero visual: a small "live STAR story preview" mock card using JetBrains Mono and gold highlights.
