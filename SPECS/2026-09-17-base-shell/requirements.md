# Base Shell & Design Tokens — Requirements

**Feature:** Base shell (fonts + CSS design tokens + reset) plus the Navbar and Hero section for the MySTAR landing page.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `build-lab/MISSION.md` Sections 2 (Brand Identity), 8 (Page Architecture), 9 (Base Shell Mini-Spec), and `build-lab/SPECS/TECH.md`.

---

## Context

MySTAR is a guided-coach app for total beginners learning the STAR interview format. This is ROADMAP Stage 5, Step 1—the first build step of the landing page. Nothing has been built yet; `index.html` and `style.css` are empty templates, and `script.js` is untouched.

## Scope (what this feature covers)

- Google Fonts loaded in the page `<head>`: Space Grotesk, Inter, JetBrains Mono.
- All design tokens defined as CSS custom properties in `style.css` `:root`.
- Base reset and page-level styles.
- **Navbar:** sticky, surface background, wordmark "MySTAR", in-page links (How it works / Features / Examples), gold primary CTA "Write my first story". *(Stage-6 change: the third link was relabeled "Examples" — see the content-sections spec; it anchors to `#examples`.)*
- **Hero section:** approved headline + subheadline + primary & secondary CTAs + trust line, and a small "live STAR story preview" mock card (JetBrains Mono, gold STAR labels).

## Out of Scope (this feature does NOT build)

- Problem, Solution, Features, Social Proof, CTA, Footer sections (later steps).
- `script.js` — no JavaScript in this step. Any motion is CSS-only.
- The guided-coach app itself, accounts, server, or SQLite storage.
- Any backend or database (per SPECS/MISSION.md: this is a frontend landing page).

## Decisions

1. **Validation is manual** — static HTML/CSS has no unit-testable logic and TECH.md defines no test framework. Confirmation = curl + visual/code review against this spec. (Decision 2026-09-17.)
2. **No git yet** — workspace is not a repo; branching deferred to ROADMAP Stage 6. (Decision 2026-09-17.)
3. **Hero includes the STAR preview mock card.** (Decision 2026-09-17.)
4. **Motion = CSS only**, within TECH.md's budget: 1 hero effect (load fade-in) + microinteractions (button hover/focus). No scroll effects this step.

## Non-Negotiable Rules (from TECH.md + MISSION.md)

1. Every component uses CSS variables — **no hardcoded hex codes in components**.
2. Headings → Space Grotesk. Body → Inter. STAR labels → JetBrains Mono.
3. Radius is strict 4 / 8 / 12 px. No pills.
4. One primary CTA per view (gold, dark navy text, weight 600). Secondary CTA is transparent with `--color-border` outline.
5. Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<h1>`, etc.). No frameworks.
6. Every design decision traces back to the brand personality: precise, minimalist, dark-mode, calm.
7. Skip the pointless: do not add features, copy, or styles not in this spec.

## Reference Values

**Palette (Starlight):** background `#0F172A` · surface `#1E293B` · primary `#F59E0B` · secondary `#38BDF8` · accent `#FBBF24` · text `#F1F5F9` · text-muted `#94A3B8` · border `#334155` · on-primary `#0F172A`.

**Typography:** Space Grotesk (headings) · Inter (body, line-height 1.6) · JetBrains Mono (labels).

**Radius:** 4px controls · 8px cards · 12px large panels.

**Approved hero copy (MISSION.md Section 8):**
- Headline: "Turn 'tell me about a time…' into an answer that lands."
- Subheadline: "New to interviews? MySTAR interviews you one question at a time and builds your answer into Situation · Task · Action · Result, live on screen."
- Primary CTA: "Write my first story" · Secondary: "How it works"
- Trust line: "Free · works right in your browser · nothing to install"