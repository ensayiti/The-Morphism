# Changelog

All notable changes to The Morphism will be documented in this file.

## [2.2.0] — 2025-08-12

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

## [2.1.0] — 2025-08-11

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
