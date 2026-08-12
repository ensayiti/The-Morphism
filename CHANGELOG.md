# Changelog

All notable changes to The Morphism will be documented in this file.

## [3.0.0] — 2026-08-13

### Changed

- **Narrowed to Glassmorphism only.** Removed Neumorphism, Claymorphism, Minimalism, Maximalism, Brutalism, Skeuomorphism, and Liquid Glass. The skill now covers a single material — frosted glass — in full depth instead of eight styles at a glance.
- **SKILL.md rewritten for one style.** Read the Room, The Recipe, The Toolbox, The Rules That Keep It Usable, The Things We Don't Do, How Things Move, Color, The Words Matter, and Before You Ship are all now glass-specific. The three-dial system stays, with a glass baseline of `5 / 4 / 8` and use-case presets.
- **CSS recipe and Tailwind equivalent unchanged** — the `.glass` surface keeps its exact code.
- **CLI, README, template, and package metadata updated** to reflect a single style. Description, keywords, and usage text now name Glassmorphism only.

### Fixed

- **Stale Lenis reference** — `templates/the-morphism.txt` still said "GSAP + Lenis". Corrected to "GSAP + ScrollTrigger", matching the rest of the skill.
- **Duplicate "Design token const pattern" block** in SKILL.md — two near-identical copies existed under The Toolbox. Merged into one.
- **Duplicate "lucide-react 1.x removed brand icons" pitfall** in SKILL.md — two back-to-back copies existed. Merged into one.
- **Leftover numbered headers** — "9.G Skeuomorphism" and "9.H Liquid Glass" under Color Per Style had survived the 2.3.0 section rename. Removed with the style.
- **LICENSE copyright year** — now 2026, matching the README.

### Removed

- Seven non-glass styles and all their recipes, Tailwind equivalents, dial presets, tells, motion rules, and copy voices.
- The "How to Read a Brief in 10 Seconds" style router (no longer needed with one style).
- Stale `the-morphism-2.3.0.tgz` build artifact.

## [2.3.0] — 2026-08-12

### Added

- **Pre-flight project scan** — before generating, the agent reads `package.json`, existing font stack, palette, and icon library. States what it found and what it will preserve.
- **Structural variety rule** — two briefs must produce two different page rhythms (hero shape, section sequence, card structure, nav, footer). Agent tracks what it built last and deliberately deviates.
- **Copy/voice discipline** — nine banned opening lines (exact strings), per-style copy voice table, positive examples of real-world copy, self-audit checklist.
- **Named anti-patterns** — every tell now has a memorable capital-letter name: THE STYLE MASH-UP, THE PILL BADGE, THE EM-DASH, INTER-BY-DEFAULT, JOHN DOE SYNDROME, MORPHISM WITHOUT FALLBACK, SHADOW STACKING.
- Before You Ship checklist expanded with structural variety and copy audit items.

### Changed

- **Section rename for personality** — all numbered section headers replaced with human names: Read the Room, The Recipes, The Toolbox, The Things We Don't Do, How Things Move, The Words Matter, Before You Ship.
- **Design Read upgraded** — from mechanical template to conversational one-sentence declarations.
- **CSS Recipes and Tailwind Equivalents** are unchanged (exact code stays exact).
- Frontmatter description shortened to one breath.

## [2.2.0] — 2026-08-12

### Fixed

- YAML frontmatter parse error in SKILL.md — colon in description field quoted to prevent mapping value conflict on GitHub's YAML parser.

### Added

- `npx the-morphism init --core` option — installs only SKILL.md with no reference files or templates. Ideal for non-Next.js projects (Astro, Vite, Svelte, Remix).
- `references/gsap-setup.md` — framework-agnostic GSAP + ScrollTrigger patterns covering React, vanilla JS, Astro, and Svelte. Includes reduced-motion handling per framework.

### Changed

- **Removed Lenis** from the stack. Scroll-driven animations now use GSAP + ScrollTrigger only (no Lenis smooth-scrolling dependency). All Lenis references purged from SKILL.md and references.
- **Framework-agnostic rewrite** of Section 4.A. The skill now explicitly supports Next.js, Astro, Vite, Svelte, Remix, and plain HTML. Font loading covers both `next/font` and `@fontsource`. Mount animations cover Motion (React) and CSS `@keyframes` (non-React).
- Section 8 (Motion Rules) updated: removed Lenis, added CSS `@keyframes` as alternative to Motion for non-React frameworks.
- `--skills-only` CLI flag replaced by `--core`.
- Updated README to reflect new CLI options and framework-agnostic stance.

### Removed

- `references/gsap-lenis-setup.md` — replaced by `references/gsap-setup.md` (no Lenis dependency).
- `lenis` from install instructions and all code examples.
- `--skills-only` flag from CLI.

## [2.1.0] — 2026-08-11

### Added

- Initial npm release.
- `npx the-morphism init` — installs SKILL.md, reference files, and plain-text template into any project.
- `npx the-morphism init --skills-only` / `--templates-only` flags.
- Eight aesthetic styles with exact CSS recipes and TailwindCSS v4 equivalents: Glassmorphism, Neumorphism, Claymorphism, Minimalism, Maximalism, Brutalism, Skeuomorphism, Liquid Glass.
- Three-dial configuration system (DEPTH / SOFTNESS / TRANSLUCENCY).
- Brief inference (Section 0) with Design Read output.
- Accessibility enforcement (contrast, reduced motion, reduced transparency, focus states).
- Anti-slop bans (no em-dash, no emoji-as-icon, no AI cliches, no pill badge, no Inter default).
- Color palette rules, motion rules, and anti-pattern sections per style.
- `references/glass-landing-example.md` — build-verified Next.js glass landing page.
- `references/gsap-lenis-setup.md` — LenisProvider + GSAP ScrollTrigger React setup.
- `templates/the-morphism.txt` — plain-text prompt for non-Hermes tools.
