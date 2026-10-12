# Download Story Button — Requirements

**Feature:** Add a **Download** button next to **Copy story** in the builder preview, so a visitor can save their STAR story as a file.
**Date:** 2026-09-17
**Author:** Founder + OpenCode
**Source of truth:** `build-lab/MISSION.md` §2/§8 and `build-lab/SPECS/TECH.md`.

---

## Context

The builder shows a live "Your STAR story" preview with a **Copy story** button. Copying is useful, but a beginner may prefer a file they can keep. This adds a plain **Download** button beside it that saves the story as a `.txt` file — no server involved.

## Scope

1. Add a **Download** button next to **Copy story** in the builder preview (`#builder-result`).
2. Clicking it saves the current preview text as a file named `my-star-story.txt` using the browser's own Blob + download link (no server).
3. Show a short status message ("Downloaded your story.") in the existing builder message line.

## Out of Scope

- No backend, no upload, no accounts.
- No new colors/fonts/radius; reuse `.btn .btn-secondary`.
- No new motion.
- Not a second primary CTA — it stays a secondary button.

## Decisions

1. Plain `.txt` file (simplest, opens anywhere). (2026-09-17)
2. Filename `my-star-story.txt`. (2026-09-17)
3. Browser-only download via `Blob` + temporary `<a download>`. (2026-09-17)
4. Manual validation (no DOM test framework in this repo). (2026-09-17)

## Non-Negotiable Rules

1. No hardcoded hex outside `:root`.
2. Radius 4/8/12 only; no pills.
3. One primary CTA per view (this is secondary).
4. Semantic HTML, plain beginner-friendly JS, no frameworks.
