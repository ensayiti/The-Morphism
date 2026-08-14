# The Morphism — Session Handoff (2026-08-14)

> Continuity note for a fresh session. Read this first; it replaces the context of the previous chat.

## 1. Current state — v3.6.0, done and synced

- **Five styles:** Glassmorphism, Neubrutalism, Swiss Design, Bauhaus, Futurism.
- **Futurism** = Cassette Futurism / terminal UI (ref: scificn.dev, github.com/baxy5/scificn-ui). Mono-only (IBM Plex Mono + Space Mono), phosphor glow (green `#00ed3f` on near-black `#050505`), corner notches, CRT effects. Framed explicitly as NOT Italian Futurism, NOT neon synthwave.
- **Four dials:** DEPTH / SOFTNESS / TRANSLUCENCY / GLOW. GLOW added in v3.6.0 (glass 0-2, neo/swiss/bauhaus 0, futurism 4-8). All preset tables + quick-ref now carry 4 values.
- **Two places, always in sync:** source repo `D:/Code/the-morphism` ↔ installed live skill `C:/Users/XEM/AppData/Local/hermes/skills/creative/the-morphism/` (byte-identical as of this note; installed-only files preserved: `hallmark-grammar.md`, `qa-verification.md`, `skill-writing-research.md`).
- Version 3.6.0 in SKILL.md frontmatter + package.json; CHANGELOG has the 3.6.0 entry. README styles table has 5 rows + "four dials" intro.
- **README gap:** the preview `<table>` still has 4 columns — no Futurism screenshot exists yet. Add a 5th column when the user provides one.

## 2. Pending user actions (not done, not the assistant's job)

- User was manually testing Futurism. **Their OS reduced-motion is now OFF** (animations render normally; memory updated). Test results not yet shared.
- Repo has **uncommitted v3.6.0 changes** — user pushes + `npm publish` manually when ready.

## 3. Next task — Minimalism (6th style), reference: shadcn/ui "Sera"

Sera research, extracted from the shadcn-ui/ui repo (clone still at `C:/Users/XEM/AppData/Local/Temp/shadcn-repo`, tokens in `apps/v4/app/(app)/(styles)/sera/style.css`):

- Tagline: "Minimal. Editorial. Typographic. Underline Controls and Uppercase Headings. Shaped by Print Design Principles."
- **Fonts:** Playfair Display (serif) for headings (`--font-heading`), Noto Sans for body (`--font-sans`). Both on Google Fonts.
- **Color:** OKLCH neutrals only. Background pure white `oklch(1 0 0)`, foreground near-black. **Primary is ink (near-black `oklch(0.214)`) — no accent color at all.** Themes: taupe / neutral / stone / zinc / mauve / olive / mist.
- **Shape:** `--radius: 0` — square corners. Flat, no shadow, no glow.
- **Controls:** underlined text buttons, not filled pills.
- UI register: editorial publishing tools (article directory, audience analytics, media library). Announced April 2026; shadcn/create preset `b4xFeBLg4O`.

**Proposed Minimalism spec (draft):**

- Dials `0 / 0 / 0 / 0` — the fourth flat style.
- **Overlap warning:** Minimalism is Swiss Design's closest cousin (both flat/neutral/typographic/editorial). Differentiate with three hard locks:
  1. **Serif display** (Playfair Display) — the only style with a serif.
  2. **Ink-only palette** — no accent; primary is black.
  3. **Underlined controls** — buttons are underlined text-links.
- Tells (draft): THE ACCENT COLOR, THE SANS HEADING, THE FILLED BUTTON, THE ROUNDED CORNER, THE DROP SHADOW, THE BOLD HEADING, THE DENSE LAYOUT.
- Copy voice: "Quiet, precise, editorial. 'The quarterly for people who read.' Restraint is the point."
- Best for: publishing, magazines, journals, galleries, fashion, architecture, minimal/luxury brands, personal sites. Not: playful, gaming, data-heavy.
- Flat-family read: Swiss = sans + light + one accent + grid (institutional) · Bauhaus = geometric sans + primaries + geometry (poster) · Minimalism = serif + ink-only + underlined controls (print / quiet-luxury).

**PENDING DECISION (ask the user):** lock Minimalism to the three differentiators above, or make it a broader "warm minimal"? Recommendation: the three-differentiator version, else the agent blurs Swiss and Minimalism into one "clean minimal" mush.

**Implementation is v3.7.0**, same pattern as Bauhaus/Futurism: SKILL.md per-style sections + tells + color + fonts + copy voice + checklist + quick-ref row; macrostructures.md takes × 12 + routing row; components.md chrome section; package.json + CHANGELOG + README; sync to live skill.

## 4. skills.sh — discussed, no decision made

- skills.sh = "The Agent Skills Directory": a registry for AI agent skills (standard SKILL.md format), installed via `npx skills`, sourced from GitHub repos. Supports many agents including **Nous Research (Hermes)**.
- Verdict: not required (The Morphism already ships via npm `npx the-morphism init` + GitHub + live skill), but a low-cost distribution channel worth listing for reach beyond Hermes. Submission flow not yet verified — research it if the user wants to proceed.

## 5. Workflow reminders

- **Sync repo → live skill after every edit** (`cp` SKILL.md + all `references/*.md`; never delete the installed-only notes listed in §1).
- User pushes/publishes manually; assistant never publishes.
- Changelog year is 2026. Bump version per release (currently 3.6.0).
- QA pattern: user builds a throwaway Next.js project (pnpm + Tailwind v4 + shadcn + GSAP), then the assistant reviews for correctness — animations/hover/scroll must be actually wired, not just present.
- Reduced-motion QA still matters: drive headless Chromium at `C:/Users/XEM/AppData/Local/ms-playwright/chromium-1223` via playwright-core with `reducedMotion:'reduce'` to verify the skill doesn't break for reduced-motion users.
