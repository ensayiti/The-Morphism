# The Morphism

> Anti-slop morphism & aesthetic design skill for Hermes Agent and AI coding tools.

**Pick the right aesthetic. Ship depth-rich interfaces.**

8 styles, one skill. The agent reads your brief, infers the right aesthetic language, and generates production-ready TailwindCSS v4 + React/Next.js + Motion code — with strict accessibility enforcement and zero AI design cliches.

## Quick start

```bash
npx the-morphism init
```

This copies `SKILL.md` + reference files into `skills/the-morphism/` in your project. Hermes Agent auto-loads skills from there.

### Commands

| Command | What it does |
|---|---|
| `npx the-morphism init` | Install SKILL.md + references + .txt template (full) |
| `npx the-morphism init --core` | Install only SKILL.md (no refs, no templates) |
| `npx the-morphism init --templates-only` | Install only the plain-text prompt template |

## Aesthetic styles (one per page — never mix)

| Style | Character | Best for |
|---|---|---|
| **Glassmorphism** | Frosted glass, blur, translucent overlays | SaaS landing, hero overlays, nav bars, modals |
| **Neumorphism** | Soft extruded 3D, light/shadow embossing | Dashboards, settings panels, interactive controls |
| **Claymorphism** | Chunky, pillowy, playful 3D | Kids apps, creative portfolios, ed-tech, gaming |
| **Minimalism** | Clean, restrained, high contrast | Enterprise SaaS, docs, portfolios, a11y-critical |
| **Maximalism** | Dense, loud, layered, expressive | Creative agencies, fashion, music, Dribbble-style |
| **Brutalism** | Raw, mechanical, unapologetic | Designer portfolios, anti-design, art projects |
| **Skeuomorphism** | Realistic textures, physical metaphors | Music production, gaming, retro, niche sims |
| **Liquid Glass** | Apple Vision Pro-style spatial material | Immersive product, spatial UI, premium brands |

## Stack

- TailwindCSS v4 (CSS-first config) — works with any framework
- Next.js, Astro, Vite, Svelte, Remix, or plain HTML
- Motion (formerly Framer Motion) for mount animations
- GSAP + ScrollTrigger for scroll-driven reveals (framework-agnostic)
- Lucide, Phosphor, or Tabler icons
- shadcn/ui font ecosystem (Geist, Outfit, Inter, etc.) via next/font or @fontsource

## Anti-slop enforcement

- Zero em-dashes anywhere visible
- Zero emoji as icons (use icon library glyphs)
- No AI copy cliches ("Elevate", "Seamless", "Unleash", etc.)
- No generic placeholders ("John Doe", "Acme Corp", "Lorem Ipsum")
- No pill badge pattern (`rounded-full bg-white/10 backdrop-blur ...`)
- Inter is NOT the default font (use only for Minimalism/enterprise)
- Mandatory a11y fallbacks (reduced motion, reduced transparency, contrast)
- Style mixing banned (one aesthetic per page)

## How it works

The agent reads your design brief, outputs a one-line "Design Read", sets three aesthetic dials (depth / softness / translucency), and generates CSS + Tailwind recipes from exact, build-verified formulas.

## Non-Hermes users

Use `npx the-morphism init --templates-only` to get a plain-text prompt template. Paste it into your system prompt or project rules.

## License

MIT
