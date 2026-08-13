# Changelog

All notable changes to The Morphism will be documented in this file.

## [3.4.0] — 2026-08-13

### Added

- **Swiss Design — the third style.** Full treatment in SKILL.md: signal words, dial preset `0 / 0 / 0` (the floor of the dials — flat, rectilinear, opaque), an exact CSS recipe (stone grayscale, opacity-only hierarchy, hairline rules, light headings), a Tailwind equivalent, a color system (one accent at four opacity stops), typography (IBM Plex Sans + fallbacks; headings `300`/`400`, never bold), a copy voice, and six named tells — THE SECOND COLOR, THE BOLD HEADING, THE ROUNDED CORNER, THE PURE WHITE / BLACK, THE WIDE COLUMN, THE THIN SECTION.
- **`references/macrostructures.md`** — twelve named page shapes (Bento Grid, Marquee Hero, Split Diptych, Stat-Led, Manifesto, Long Document, Workbench, Quote-Led, Photographic, Catalogue, Letter, Portfolio Grid), each with a glass / neo / Swiss take, plus domain routing and a refuse-the-last-three rule.
- **`references/components.md`** — nav, footer, section-head, and CTA archetypes, variation knobs, a "default away from the AI nav / footer" rule, and a Swiss chrome note.
- **New tells** — THE AI NAV, THE AI FOOTER, THE EYEBROW, THE SIDE-STRIPE CARD, THE AURORA BLOB, TOKEN IMPROVISATION.

### Changed

- **"Pick the Macrostructure First"** step added to the workflow — state the page shape before the material.
- Domain routing gained an editorial / docs / archive / museum / typography row (material lean: Swiss).
- Out-of-scope routing now sends generic "clean minimal" flat design to Swiss Design rather than rejecting it.
- Package description and keywords now name Swiss Design and international style.

## [3.3.0] — 2026-08-13

### Fixed

- **THE REDUCED-MOTION GATE (critical blank-page bug).** Gating `initial`/`animate`/`whileInView` on `useReducedMotion()` produces an SSR hydration mismatch for reduced-motion users: the server bakes `opacity:0` into the HTML, the client renders visible, and React 19 leaves the server's `opacity:0` in place, so every animated section stays blank. Documented the trap and the fix — wrap the app once in `<MotionConfig reducedMotion="user">` and write animations plainly. Verified against a reduced-motion build (content resolves to opacity 1, no hydration mismatch).
- **Neubrutalism focus ring.** The CSS recipe said `outline: 3px solid` but Tailwind's `outline-3` class does not exist (the scale is 0/1/2/4/8). Unified on `ring-2 ring-black ring-offset-2` / `outline-[3px]` and noted the `border-3`-valid-but-`outline-3`-dead asymmetry.

### Added

- **THE RADIAL MESH tell** — the multi-color radial gradient wash behind glass heroes, named and banned. Glass background guidance now leads with image/video/brand composition and demotes "gradient" to a restrained single-light-source fallback.
- **Performance section** in `references/motion.md` — one backdrop-filter surface per viewport, don't animate the blur owner's transform, no full-screen grain over animated content, `backdrop-saturate()` is expensive.
- **THE REDUCED-MOTION GATE tell** in the motion tells and the Before You Ship checklist.

### Changed

- Glass background wording tightened across "When to use", "Glassmorphism Tells", and "Color Per Style" so "gradient" is no longer blessed as a default rich background.
- `references/layout.md` grain-overlay note now flags the full-viewport recomposite cost.

## [3.2.0] — 2026-08-13

### Added

- **Neubrutalism style** — the second style in the skill. Full CSS recipe (hard offset shadow `5px 5px 0 0 #000`, 3px black borders, square corners, flat color), the three-tier shadow system, the signature "press" hover (translate by shadow offset + shadow collapse), dial presets (`6 / 1 / 0`), a Tailwind equivalent, a color system (black + off-white + saturated accents), a copy voice, and six named Neubrutalism tells (THE SOFT SHADOW, THE PILL, THE HAIRLINE, THE GRADIENT, THE BLUR, THE FULL-VOLUME PAGE, THE PASTEL-ON-PASTEL).
- **Neubrutalism ≠ Brutalism distinction** — explicit note that neubrutalism is colorful, playful, and productized, not raw monochrome brutalism.

### Changed

- **Restored multi-style architecture.** The skill now carries two styles (Glassmorphism + Neubrutalism) instead of being Glassmorphism-only. Read the Room detects both signal sets; The Recipes, Tailwind Equivalents, Color, copy voice, and Before You Ship are all per-style.
- **Description corrected** to reflect that The Morphism is a multi-design skill, not a Glassmorphism-only skill.
- **INTER-BY-DEFAULT tell refined** — Inter is now explicitly allowed as the *body* face in Neubrutalism (the body should be boring on purpose), while the display face must still be loud.
- Fonts and icons sections now carry per-style recommendations.

## [3.1.0] — 2026-08-13

### Added

- **`references/motion.md`** — the full motion language: named easing tokens (`--ease-out` / `--ease-in` / `--ease-in-out`), a three-bucket duration canon (micro / minor / major, exits at ~75%), page-load orchestration (CSS-var stagger capped at ~500ms), glass hover recipe (background/opacity shift, no scale), loading/empty-state guidance, reduced-motion nuance (spatial → opacity crossfade, functional motion keeps running), and 13 named motion tells.
- **`references/typography.md`** — the 2+1 font rule, the ratio-based scale (1.25 major third), measure (45–75ch), weight contrast (≥300 units), the glass font catalog, and hero-headline-length sizing.
- **`references/layout.md`** — the 4pt spacing scale, named z-index levels, grid rules, asymmetry techniques, depth guidance, and the "one layout family per page" rule.
- **Pre-emit self-critique** in Before You Ship — six axes (Philosophy / Hierarchy / Execution / Specificity / Restraint / Variety), scored 1–5, stamped at the top of the artifact, < 3 forces a revision.
- **New named tells** — THE TRANSITION-ALL, THE UNIVERSAL LIFT, THE BOUNCE, THE EFFECT STACK, THE ANIMATED FOCUS RING, THE CELEBRATORY TOAST, THE GRADIENT TEXT, THE ITALIC HEADER, THE CARD-IN-CARD, THE REDRAWN CHROME, THE INVENTED METRIC.

### Changed

- **How Things Move** rewritten — now points at `references/motion.md`, adds the three-rule summary (max 3 animation primitives, transform/opacity only, when-in-doubt-cut), and corrects the glass hover from `scale(1.02)` to a background/opacity shift.
- **The Toolbox** Fonts section now points at `references/typography.md` and `references/layout.md`.
- Before You Ship checklist gained motion and anti-slop gates.

## [3.0.0] — 2026-08-13

### Added

- **"CSS vs GSAP" pitfall section** in `references/gsap-setup.md` — documents the two ways CSS and GSAP fight over `transform` on the same element (a mount animation with `fill-mode: both`, and a `transition` on a GSAP-tweened property), with the fix pattern for each.

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
