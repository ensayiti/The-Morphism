---
name: the-morphism
description: "Anti-slop morphism & aesthetic design skill for AI coding agents. Glassmorphism, Futurism, Neubrutalism, Brutalism, Minimalism, Maximalism, Swiss Design, and Bauhaus — exact CSS recipes, a motion system, a typographic scale, and named anti-patterns. The agent reads the brief, picks the right style, and ships interfaces that don't look AI-generated. Zero em-dash, zero emoji-as-icon."
version: 3.11.0
author: XEM
license: MIT
metadata:
  hermes:
    tags: [frontend, design, glassmorphism, neubrutalism, brutalism, bauhaus, futurism, minimalism, maximalism, serif, editorial, fontshare, css, tailwindcss, anti-slop]
---

# The Morphism

> Eight aesthetic styles. One page, one style. The agent reads the brief, picks the right language, and ships interfaces that don't look AI-generated.
> The recipes are exact. The rules are opinionated. The bans are named. Everything else is taste — and taste is contextual.
> Agent-agnostic: works with Hermes, Claude Code, Codex, Cursor, Cline, and any agent that reads SKILL.md, AGENTS.md, or the plain-text prompt.

---

## Read the Room

Most AI design output is bad because the model reaches for the same purple gradient, three equal cards, and Inter on slate-900 before it even reads the brief. Don't.

### Before you touch code

Read the brief for five signals:

1. **What kind of page?** Landing page, dashboard, portfolio, product card, mobile shell, creative/agency, editorial, settings panel.
2. **What words did they use?** "glass", "frosted", "blur", "translucent", "premium", "layered" — Glassmorphism. "futurism", "sci-fi", "retro sci-fi", "terminal", "cyberpunk", "hacker", "phosphor", "mono" — Futurism. "neubrutalist", "bold", "hard shadows", "thick borders", "blocky", "playful", "loud", "colorful" — Neubrutalism. "brutalist", "raw", "concrete", "ugly on purpose", "anti-design", "unpolished", "exposed" — Brutalism. "minimalist", "quiet luxury", "serif", "print", "understated", "gallery", "magazine", "fashion" — Minimalism. "maximalist", "ornate", "opulent", "abundance", "more is more", "memphis", "loud editorial" — Maximalism. "swiss", "international style", "typographic", "grid", "editorial", "flat", "neutral", "grotesque" — Swiss Design. "bauhaus", "geometric", "primary colors", "constructivist", "poster", "avant-garde", "abstract" — Bauhaus.
3. **Did they link something?** Reference URLs, screenshots, named products. macOS = frosted glass. Windows 11 = Mica. Linear modals = frosted glass. neobrutalism.dev / neubrutalism.com = the neubrutalist grammar. Apple Vision Pro = the high-translucency end of glass.
4. **Who's the audience?** Design-forward consumers or enterprise buyers or accessibility-required users. A11y-critical audiences override high-translucency glass immediately. Neubrutalism's loud personality is wrong for trust-first surfaces (healthcare, fintech, government).
5. **Does a brand already exist?** Logo, colors, type. The style works WITH the brand or it's wrong.

**The flat-family tiebreaker.** Three styles share "flat, minimal, neutral, editorial." Split them on one signal: **Swiss** = sans + grid + one accent (institutional, ordered). **Bauhaus** = geometric sans + primary colors + shapes (poster, loud). **Minimalism** = serif display + ink-only + underlined controls (print, quiet luxury). "serif", "print", or "luxury" → Minimalism. "grid", "system", or "grotesque" → Swiss. Shapes or primaries → Bauhaus. **Brutalism** is the anti-design pole — monochrome + raw + exposed structure. "raw", "concrete", or "ugly on purpose" → Brutalism, and it is NOT neubrutalism (see the recipe). **Maximalism** is Minimalism's twin — the abundance pole. "ornate", "opulent", or "more is more" → Maximalism.

### Say it out loud

Before any code, pause and state the Design Read — one sentence that sounds like a human said it:

*"Reading this as: a SaaS landing for technical founders, done as frosted glass — cool, precise, nothing extra."*
*"Reading this as: a premium product showcase for people who care about materials — floating glass over a rich gradient, layered, restrained."*
*"Reading this as: a dev-tool startup that wants to feel like a sticker pack — Neubrutalism, thick black borders, hard offset shadows, flat loud color."*
*"Reading this as: an ed-tech brand that should feel playful and unmissable — Neubrutalism, bold type, square corners, one saturated accent."*
*"Reading this as: a poster for a design conference — Bauhaus, three primaries, geometric type, asymmetric grid."*
*"Reading this as: a terminal dashboard for a security tool — Futurism, mono type, phosphor green on near-black, corner notches."*
*"Reading this as: a gallery site for a fashion house — Minimalism, serif display, ink-only, underlined links."*
*"Reading this as: an anti-brand artist's site — Brutalism, monochrome, raw, exposed structure, zero polish."*
*"Reading this as: a fashion house's editorial — Maximalism, layered ornament, mixed type, two accents with jobs."*

The Design Read isn't a spec. It's a sentence. If you can't say it in one breath, you haven't read the room.

### If you're not sure, ask once

Exactly one question: *"Should this feel more like frosted glass (cool, premium, layered) or neubrutalist (bold, blocky, hard shadows and flat color)?"*

If you can confidently infer, don't ask. Declare the read and go.

### The defaults you will not reach for

Purple-to-blue gradients. Centered hero on dark mesh. Three equal feature cards with icons above headings. The same pill badge on every hero. Inter as the only font. Em-dashes as punctuation. Emoji as icons.

These are the LLM defaults. Every model reaches for them. You know better. The Design Read tells you what to reach for instead.

---

## The Four Dials

After the Design Read, set four dials. Every blur, radius, shadow, glow, and layout decision in the recipes below is gated by these. Don't skip this — the dials are what turn "a glass card" into "THIS glass card."

* **`DEPTH: 5`** -- 1 = Completely flat (no shadows, no depth), 10 = Extreme 3D (heavy shadows, strong layering)
* **`SOFTNESS: 5`** -- 1 = Sharp / Crisp / Hard edges, 10 = Pillowy / Plush / Extreme rounding
* **`TRANSLUCENCY: 0`** -- 1 = Fully opaque (solid backgrounds), 10 = Fully transparent (glass, see-through). **WARNING: TRANSLUCENCY greater than 5 requires a11y fallbacks (see The Rules That Keep It Usable).**
* **`GLOW: 0`** -- 0 = No glow (light comes from surfaces and shadows), 10 = Full phosphor (everything luminous). **WARNING: GLOW greater than 7 is decorative — reserve it for active/focus states, never ambient body text.**

### Style to Dial Presets

| Style | DEPTH | SOFTNESS | TRANSLUCENCY | GLOW | Best for |
|---|---|---|---|---|---|
| **Glassmorphism** | 4-6 | 3-5 | 7-10 | 0-2 | SaaS landing, hero overlays, nav bars, modals, premium product cards |
| **Futurism** | 3 | 0 | 0 | 4-8 | Dev tools, CLIs, terminals, dashboards, monitoring, gaming, security tools |
| **Neubrutalism** | 5-7 | 0-1 | 0 | 0 | Portfolios, dev tools, startups, ed-tech, playful brands, design agencies |
| **Brutalism** | 1-2 | 0 | 0 | 0 | Galleries, museums, avant-garde studios, music artists, art zines, anti-brand brands |
| **Minimalism** | 0 | 0 | 0 | 0 | Publishing, magazines, journals, galleries, fashion, architecture, luxury brands, personal sites |
| **Maximalism** | 5-7 | 3-4 | 0 | 0-2 | Fashion, editorial, galleries, restaurants, creative agencies, expressive brands |
| **Swiss Design** | 0 | 0 | 0 | 0 | Editorial, documentation, reference, archives, museums, publications, design systems |
| **Bauhaus** | 0 | 0 | 0 | 0 | Posters, arts & culture, education, music, architecture, design-forward brands |

**Two families.** Morph Design: Glassmorphism, Futurism, Neubrutalism, Brutalism, Minimalism, Maximalism — the morphisms and their cousins. Non-Morph: Swiss Design, Bauhaus — the classic movements. Same recipes either way; the family is context, not a rule.

### Use-Case Presets

| Use case | Style | DEPTH | SOFTNESS | TRANSLUCENCY | GLOW |
|---|---|---|---|---|---|
| SaaS landing (design-forward) | Glassmorphism | 5 | 4 | 8 | 0 |
| SaaS landing (enterprise/trust) | Glassmorphism | 3 | 3 | 5 | 0 |
| Hero card overlay (image bg) | Glassmorphism | 4 | 3 | 8 | 0 |
| Nav bar / toolbar | Glassmorphism | 4 | 3 | 7 | 0 |
| Modal / dialog | Glassmorphism | 5 | 4 | 8 | 0 |
| Product card | Glassmorphism | 5 | 4 | 7 | 0 |
| Settings panel | Glassmorphism | 3 | 4 | 6 | 0 |
| Public-sector / a11y-critical | Glassmorphism | 2 | 3 | 3 | 0 |
| Developer tool / startup | Neubrutalism | 6 | 1 | 0 | 0 |
| Portfolio (designer) | Neubrutalism | 6 | 0 | 0 | 0 |
| Ed-tech / playful brand | Neubrutalism | 6 | 1 | 0 | 0 |
| Creative agency | Neubrutalism | 7 | 0 | 0 | 0 |
| Editorial / magazine / publication | Swiss Design | 0 | 0 | 0 | 0 |
| Docs / reference / archive | Swiss Design | 0 | 0 | 0 | 0 |
| Poster / campaign / event | Bauhaus | 0 | 0 | 0 | 0 |
| Arts & culture / education / museum | Bauhaus | 0 | 0 | 0 | 0 |
| Dev tool / CLI / terminal | Futurism | 3 | 0 | 0 | 6 |
| Dashboard / monitoring / data | Futurism | 3 | 0 | 0 | 4 |
| Gaming / sci-fi brand | Futurism | 3 | 0 | 0 | 8 |
| Magazine / journal / publication (print) | Minimalism | 0 | 0 | 0 | 0 |
| Gallery / fashion / architecture / luxury | Minimalism | 0 | 0 | 0 | 0 |
| Personal site / quiet portfolio | Minimalism | 0 | 0 | 0 | 0 |
| Gallery / museum / art space | Brutalism | 1 | 0 | 0 | 0 |
| Avant-garde studio / artist / zine | Brutalism | 1 | 0 | 0 | 0 |
| Fashion / editorial / gallery (loud) | Maximalism | 6 | 3 | 0 | 1 |
| Restaurant / creative agency / expressive brand | Maximalism | 5 | 4 | 0 | 0 |

---

## Pick the Macrostructure First

The material (glass, neubrutalism, Swiss, Bauhaus, Futurism, Minimalism, Brutalism, or Maximalism) dresses the shape — it does not choose it. After the Design Read and the dials, pick the page SHAPE before you touch the recipe. A macrostructure is a complete page skeleton (Bento Grid, Marquee Hero, Split Diptych, Stat-Led, Manifesto, Long Document, Workbench, Quote-Led, Photographic, Catalogue, Letter, Portfolio Grid) — heading placement, body composition, divider, button voice, image treatment, reveal — bundled as one named choice.

- Pick one from `references/macrostructures.md` and state it out loud: *"Macrostructure: Bento Grid. Material: glass."*
- **Refuse the last three.** No two consecutive builds in the same project share a macrostructure. Pick from a categorically different family (grid-led vs document-led vs poster-led).
- Pick the nav and footer archetypes alongside it — see `references/components.md`. They are the fingerprint, not chrome. **Default away from the AI nav (wordmark + 4 centred links + CTA) and the AI footer (4 columns + social row + tiny copyright).**

---

## The Recipes

This is the heart of the skill. Eight exact CSS recipes — not suggestions, not starting points. Start here, then tune the dials. Framework-agnostic CSS; Tailwind equivalents follow in the next section.

### Glassmorphism

```css
/* === GLASSMORPHISM: The Frosted Glass Look === */
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.4),
    0 8px 32px rgba(0, 0, 0, 0.12);
  color: #1a1a2e;
}

@media (prefers-color-scheme: dark) {
  .glass {
    background: rgba(15, 23, 42, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.15),
      0 8px 32px rgba(0, 0, 0, 0.30);
    color: #e2e8f0;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

**Glassmorphism tuning by dials:**

| Dial | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| DEPTH | `blur(8px)`, shadows `rgba(0,0,0,0.06)` | `blur(20px)`, shadows `rgba(0,0,0,0.12)` | `blur(40px)`, shadows `rgba(0,0,0,0.20)`, layered borders |
| SOFTNESS | `border-radius: 8px`, sharp borders | `border-radius: 16px` | `border-radius: 24px`, pill shapes |
| TRANSLUCENCY | `rgba(255,255,255,0.70)` | `rgba(255,255,255,0.35)` | `rgba(255,255,255,0.08)`, stronger blur needed |

**When to use:** Rich background behind the glass — a real image, video, or brand-driven composition. The background IS the design; glass is the frame. A gradient is the fallback, not the default: one light source, two stops, never a multi-color radial wash (see THE RADIAL MESH). Flat color behind glass defeats the purpose.

**When NOT to use:** Data-heavy dashboards, long-form text, or any surface where the background content must stay sharply readable. Say so explicitly if the brief pushes glass where it doesn't belong.

See `references/glass-landing-example.md` for a complete, build-verified glass landing page implementation (Nav, Hero, Features grid, CTA, Footer) with reusable `GlassCard` component and a11y fallback injection pattern.

---

### Neubrutalism

```css
/* === NEUBRUTALISM: Hard Shadows, Thick Borders, Flat Color === */
.neubrutal {
  background: #fffdf5;
  border: 3px solid #000000;
  border-radius: 0;
  box-shadow: 5px 5px 0 0 #000000;  /* hard offset, zero blur */
  color: #000000;
  padding: 24px;
}

/* The signature "press": on hover the element slides into its own
   shadow and the shadow collapses. Translate by the offset, drop it. */
.neubrutal-btn {
  background: #ffd23f;
  border: 3px solid #000000;
  border-radius: 0;
  box-shadow: 4px 4px 0 0 #000000;
  font-weight: 700;
  transition: transform 100ms, box-shadow 100ms;
}
.neubrutal-btn:hover,
.neubrutal-btn:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 0 #000000;
}

@media (prefers-color-scheme: dark) {
  .neubrutal {
    background: #1f2430;
    border-color: #000000;
    color: #f2f4f8;
  }
}
```

**Neubrutalism tuning by dials:**

| Dial | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| DEPTH | `2px` offset shadow | `4-5px` offset shadow | `8px+` offset shadow, hero elements |
| SOFTNESS | `border-radius: 0`, square | `border-radius: 0` | `border-radius: 5px` max (rounded-base), never pill |
| TRANSLUCENCY | 0 always | 0 | 0 — flat, opaque fills |

**The three-tier shadow system:**

| Tier | Shadow | For |
|---|---|---|
| Small | `3px 3px 0 0 #000` | Badges, chips, inline actions |
| Medium | `5px 5px 0 0 #000` | Cards, buttons, panels |
| Large | `8px 8px 0 0 #000` | Overlays, hero elements, focus |

**When to use:** The brand can afford to be loud. Portfolios, dev tools, startups, ed-tech, playful consumer brands, design agencies, marketplaces. The interface declares its presence instead of disappearing into neutrality.

**When NOT to use:** Trust-first surfaces (healthcare, fintech, government), enterprise SaaS where the playful tone undermines credibility, or any brief where the user asked for "clean," "minimal," or "premium." Say so explicitly if the brief pushes neubrutalism where it doesn't belong.

**Neubrutalism is NOT Brutalism.** Brutalism (the seventh style, below) is raw, monochrome, and anti-conventional. Neubrutalism is colorful, playful, and productized — it borrows brutalism's bluntness but keeps a modern, usable UI grammar. If the brief says "brutalist, raw, ugly on purpose," route to the Brutalism recipe, not here.

---

### Swiss Design

```css
/* === SWISS DESIGN: flat, grid-disciplined, typographic === */
.swiss {
  background: #fafaf9;                             /* stone-50 — never pure white */
  color: #1c1917;                                  /* stone-900 — never pure black */
  font-family: "Familjen Grotesk", "Switzer", system-ui, sans-serif;
  border-radius: 0;                                /* rectilinear */
}
.swiss-surface { background: #f5f5f4; }            /* stone-100 */
.swiss-rule    { border-top: 1px solid #e7e5e4; }  /* stone-200 hairline */

/* Hierarchy is opacity, never hue */
.text-secondary { opacity: 0.7; }
.text-tertiary  { opacity: 0.4; }
.text-ghost     { opacity: 0.2; }

/* Headings are light — the Swiss inversion */
h1, h2 { font-weight: 300; letter-spacing: -0.02em; }

/* One accent, four opacities (Swiss red by default) */
.accent       { color: #C8102E; }
.accent-muted { color: rgba(200, 16, 46, 0.6); }
.accent-tint  { background: rgba(200, 16, 46, 0.2); }
.accent-wash  { background: rgba(200, 16, 46, 0.1); }
```

**The dials don't tune here.** Swiss Design is `0 / 0 / 0` — flat, rectilinear, opaque. There is no depth to dial up and no blur to turn on. The grid, the type, and the whitespace do the work instead.

**The rules that make it Swiss:**
- **Opacity, not hue, creates hierarchy.** Never a second color to signal importance. `0.7` secondary, `0.4` tertiary, `0.2` ghost. Mid-scale grays for text weight are the tell.
- **Headings are light, never bold.** `300` for display and h1, `400` for h2–h3, `500` for in-body emphasis. Bold headings are the AI default and the fastest way to look un-Swiss.
- **Rectilinear.** No border-radius on structural elements. Rounded corners are glass's language; Swiss is square.
- **12-column grid, 8px base unit.** Generous whitespace (`py-16` minimum between sections). Body never wider than 60ch.
- **One accent.** Swiss red `#C8102E` by default; alternates: cobalt `#003B8E`, golden `#F0B429`, forest `#2D6A4F`. Used at full / 60% / 20% / 10% opacity only.

**When to use:** Editorial, documentation, reference, archives, museums, publications, design systems — anything that should read as *ordered, objective, timeless*. The information is the design.

**When NOT to use:** Playful brands, loud consumer products, anything that needs to feel warm or emotional, or a brief that asks for "premium" or "layered" (that's glass). Say so explicitly if the brief pushes Swiss where it doesn't belong.

---

### Bauhaus

```css
/* === BAUHAUS: flat, geometric, primary === */
.bauhaus {
  background: #F5F0E6;                     /* cream paper — never a pastel, never pure white alone */
  color: #000000;                          /* black ink */
  font-family: "Excon", "Archivo", system-ui, sans-serif;
  border-radius: 0;                        /* rectilinear */
}
.bauhaus-primary   { background: #E2062C; color: #F5F0E6; }   /* red */
.bauhaus-secondary { background: #FFDD00; color: #000000; }   /* yellow — black text, never yellow text */
.bauhaus-tertiary  { background: #00509E; color: #F5F0E6; }   /* blue */

/* The graphic language is geometry, not ornament */
.shape { display: inline-block; }
.shape.square   { width: 80px; height: 80px; background: #E2062C; }
.shape.circle   { width: 80px; height: 80px; border-radius: 50%; background: #FFDD00; }
.shape.triangle { width: 0; height: 0; border-left: 40px solid transparent; border-right: 40px solid transparent; border-bottom: 80px solid #00509E; }
```

**The dials don't tune here.** Bauhaus is `0 / 0 / 0` — flat, rectilinear, opaque, like Swiss. But where Swiss is neutral and typography-led, Bauhaus is primary-colored and geometry-led. Swiss is the quiet flat style; Bauhaus is the loud flat style.

**The rules that make it Bauhaus:**
- **Three primaries + black + cream.** Red `#E2062C`, yellow `#FFDD00`, blue `#00509E`, black `#000000`, cream `#F5F0E6`. Flat fills at full saturation. No gradients, no shadows, no blur, no opacity ladder (that's Swiss).
- **Geometry is the composition.** Circle, square, and triangle are structural elements — they carve the layout, not decorate it. Compose asymmetrically; centered-everything is the AI default.
- **Bold geometric type.** Headings are heavy (`700`/`800`, uppercase). Bauhaus is the inverse of Swiss's light type. One geometric face does the work (Excon).
- **Yellow is a fill, never text.** Black text on yellow. Cream text on red and blue. Yellow text on cream fails contrast.
- **Rectilinear.** No border-radius on structural elements — the circle shape is the only rounding on the page.

**When to use:** Posters, campaigns, arts & culture, music, education, architecture, museums, design-forward brands — anything that should read as *bold, functional, avant-garde*.

**When NOT to use:** Warm or emotional brands, luxury or premium (that's glass), trust-first surfaces, data-heavy dashboards. Say so explicitly if the brief pushes Bauhaus where it doesn't belong.

---

### Futurism

```css
/* === FUTURISM: Cassette Futurism / terminal UI === */
.futurism {
  background: #050505;                        /* near-black — neutral, NO color tint */
  color: #E0D5BE;                             /* bone text */
  font-family: "Azeret Mono", monospace;
  border-radius: 0;                           /* zero radius — chamfered, not rounded */
  border: 1px solid #252525;
}
.futurism-raised { background: #0D0D0D; }
.futurism-active {
  border-color: #00ed3f;                      /* phosphor green = "alive" */
  color: #00ed3f;
  box-shadow: 0 0 8px #00ed3f66, 0 0 20px #00ed3f33;  /* glow, not drop shadow */
}

/* Corner notch — a chamfered corner instead of a rounded one */
.notch {
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
}

/* CRT scanlines — panel overlay, gated by prefers-reduced-motion */
.scanlines::after {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(to bottom, transparent 0 3px, rgba(0,0,0,0.12) 3px 4px);
  pointer-events: none;
}
```

**The dials that matter here are `GLOW`.** Futurism is `3 / 0 / 0` on depth/softness/translucency — near-black, zero-radius, opaque — and `4-8` on glow. The glow IS the style. No glow, and you've built a dark Swiss page in mono.

**The rules that make it Futurism:**
- **Mono only.** Azeret Mono for everything — Fontshare's one mono, so the outlier slot is dropped. Every character on the grid. Headings `700` with `0.05em` tracking; labels all-caps. Base size 14-16px.
- **Zero radius, chamfered corners.** `border-radius: 0` globally; use `clip-path` corner notches for emphasis. Never rounded.
- **Phosphor glow, not drop shadow.** Glow is `box-shadow` with the accent color and zero offset (`0 0 8px`). A blurry black drop shadow is the tell.
- **Deliberate palette.** Green `#00ed3f` (alive), amber `#ff8800` (warning), red `#cc2200` (danger), blue `#4466cc` (info). Bone `#E0D5BE` is the text. Near-black backgrounds `#050505` / `#0D0D0D` / `#141414` — neutral, never color-tinted.
- **Glow is earned.** Reserve it for the alive/active/focus state. Ambient text is unglowed. If everything glows, nothing reads as on.
- **CRT effects are seasoning.** Scanlines, flicker, blink, glitch — used sparingly, and every one gated by `prefers-reduced-motion`.

**When to use:** Dev tools, CLIs, terminals, dashboards, monitoring, gaming, security and hacker tools, sci-fi brands — anything with "mission control" energy.

**When NOT to use:** Warm or emotional brands, enterprise trust-first surfaces, e-commerce, editorial (that's Swiss), or anything that needs to feel human. Say so explicitly if the brief pushes Futurism where it doesn't belong.

**Futurism here is Cassette Futurism / terminal UI** — computers as imagined by the 1970s and 80s. It is NOT Italian Futurism (1909) and NOT neon-purple synthwave.

---

### Minimalism

```css
/* === MINIMALISM: serif display, ink-only, underlined controls === */
.minimal {
  background: #ffffff;                           /* pure white — the one style allowed pure white */
  color: #1a1a1a;                                /* near-black ink */
  font-family: "Switzer", system-ui, sans-serif;     /* body is sans */
  border-radius: 0;                              /* square */
}
.minimal-heading {
  font-family: "Zodiak", Georgia, serif;               /* the quiet family's serif display */
  font-weight: 400;                              /* regular, never bold */
  letter-spacing: 0.02em;
  text-transform: uppercase;                     /* print / fashion register */
}
.minimal-rule { border-top: 1px solid #1a1a1a; } /* ink hairline, never a gray rule */

/* Hierarchy is ink opacity, like Swiss — but with zero accent and pure white/black */
.text-secondary { opacity: 0.6; }
.text-tertiary  { opacity: 0.4; }

/* Controls are underlined text-links, never filled */
.minimal-btn {
  font-family: "Switzer", system-ui, sans-serif;
  background: none;
  border: none;
  border-bottom: 1px solid #1a1a1a;              /* the underline IS the control */
  padding: 0.25rem 0;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  transition: opacity 150ms;
}
.minimal-btn:hover { opacity: 0.55; }            /* quiet fade — the underline stays */
```

**The dials don't tune here.** Minimalism is `0 / 0 / 0 / 0` — flat, rectilinear, opaque, like Swiss and Bauhaus. But where Swiss is sans + grid + one accent (institutional) and Bauhaus is geometric + primaries (poster), Minimalism is serif + ink-only + underlined controls (print, quiet luxury). It is the third style at the dial floor, and the quietest.

**The rules that make it Minimalism:**
- **Serif display.** Zodiak for headings — the quiet family's serif (Maximalism shares the face; the discipline differs). Body stays sans (Switzer). Never sans headings, never serif body (Zodiak-as-body is banned).
- **Ink-only palette.** No accent color, ever. Primary IS near-black ink. Hierarchy via weight, size, whitespace, and ink opacity (0.6 / 0.4) — never a second hue. Swiss keeps one accent; Minimalism keeps none.
- **Underlined controls.** Buttons are underlined text-links. Never filled pills, never solid buttons, never outlined chips. The underline is the affordance.
- **Uppercase headings, regular weight.** Zodiak uppercase with wide tracking reads print / fashion. `font-weight: 400`, never bold. The bold heading is the tell.
- **Pure white paper.** Background is pure white (`#ffffff` / `oklch(1 0 0)`), not Swiss's stone. Ink is near-black (`#1a1a1a` / `oklch(0.214)`), not pure black.
- **Square and shadowless.** `border-radius: 0`, no box-shadow, no glow, no blur. Depth comes from whitespace, never elevation.
- **Whitespace is the material.** Wide margins, short measure (45-65ch), generous section padding (`py-16` minimum). A dense layout is the tell.

**When to use:** Publishing, magazines, journals, galleries, fashion, architecture, minimal/luxury brands, personal sites — anything that should read as *quiet, expensive, print-shaped*.

**When NOT to use:** Playful brands, gaming, data-heavy dashboards, loud consumer products, or anything that needs warmth, color, or density. Say so explicitly if the brief pushes Minimalism where it doesn't belong.

---

### Brutalism

```css
/* === BRUTALISM: raw, monochrome, exposed structure === */
.brutal {
  background: #ffffff;                     /* raw paper — or concrete #E8E8E8 */
  color: #000000;                          /* pure black */
  font-family: "Azeret Mono", "Courier New", monospace;   /* typed, honest */
  border-radius: 0;                        /* zero, always */
}
.brutal-rule { border: 1px solid #000000; }  /* visible seams — the structure shows */
.brutal-table { border-collapse: collapse; }
.brutal-table th, .brutal-table td {
  border: 1px solid #000000;
  padding: 8px;
}

/* One raw signal accent, maximum — text/links only, never ambient */
.brutal-accent { color: #E2062C; }         /* raw red */

/* No shadows. No gradients. No rounded corners. No hover polish. */
```

**The dials don't tune here.** Brutalism is `1-2 / 0 / 0 / 0` — the flat floor's anti-polish pole. Swiss is ordered, Bauhaus is poster, Minimalism is print, Brutalism is raw. It is NOT neubrutalism: no colors, no hard offset shadows, no press hover, no product polish.

**The rules that make it Brutalism:**
- **Monochrome.** Black, white, concrete gray. One raw signal accent (red `#E2062C`) maximum, and only as text or links — never ambient, never a fill.
- **Exposed structure.** Visible grid seams, bare table borders, underlined links, default list markers. The skeleton shows; nothing hides behind chrome.
- **Zero polish.** No shadows, no gradients, no border-radius, no hover transitions, no smooth easing. Interactions are instant or absent.
- **Typed, not designed.** Azeret Mono by default — the honesty of a typed document. Archivo only for long prose. No refined pairing, no tracking ceremony.
- **Density is honesty.** Brutalism does not need Swiss air; cramped, honest layouts are part of the rawness. (If the page needs generous whitespace, that's Swiss or Minimalism.)
- **Ugly ≠ unreadable.** Contrast, visible links, and focus states are all still mandatory. The style is raw, not broken.

**When to use:** Galleries, museums, avant-garde studios, music artists, art zines, anti-brand brands, experimental portfolios — anything that should read as *honest, anti-conventional, unfinished on purpose*.

**When NOT to use:** Consumer products, SaaS, e-commerce, trust-first surfaces, or anything that needs to feel comfortable or sell comfort. Say so explicitly if the brief pushes Brutalism where it doesn't belong.

---

### Maximalism

```css
/* === MAXIMALISM: layered ornament, mixed type, abundance with a budget === */
.maximal {
  background: #F7F3E8;                     /* warm ivory paper — never sterile white */
  color: #1a1a1a;                          /* ink */
  border-radius: 0;                        /* rectilinear base — ornaments do the rounding */
}
.maximal-heading { font-family: "Zodiak", Georgia, serif; font-weight: 500; }  /* the serif voice */
.maximal-shout   { font-family: "Clash Display", sans-serif; }                 /* the sans shout */
.maximal-body    { font-family: "General Sans", system-ui, sans-serif; }

/* Ornament is structure, not wallpaper: rules, frames, and patterns compose the layout */
.maximal-rule  { border-top: 1px solid #1a1a1a; }
.maximal-frame { border: 2px double #1a1a1a; padding: 24px; }

/* Two or three loud colors, budgeted — each one marks a role */
.accent-headline { color: #C8102E; }       /* deep red — headlines */
.accent-link     { color: #1F4E79; }       /* deep blue — links */
.accent-price    { color: #B08D00; }       /* burnished gold — prices, emphasis */
```

**The dials that matter here are `DEPTH` and `SOFTNESS`.** Maximalism is `5-7 / 3-4 / 0 / 0-2` — the only style that leans into DEPTH with ornament and layering instead of shadows. It is Minimalism's twin: same discipline, opposite direction. Minimalism subtracts until nothing is left; Maximalism adds until everything has a job.

**The rules that make it Maximalism:**
- **Abundance with a budget.** Two or three loud accents, each marking one role (headline, link, price). Every ornament earns its place. "More" is a decision, not clutter.
- **Mixed type, deliberate collision.** Display serif (Zodiak) for the voice, display sans (Clash Display) for the shout, General Sans for body. Serif + one sans + body is the ceiling — a third sans is the tell.
- **Ornament is structure.** Rules, double-frames, patterns, and fills carve the layout; they never decorate it. A pattern that doesn't compose space is wallpaper.
- **Layered depth, not shadows.** DEPTH comes from stacked frames, overlapping panels, and layered borders. Max 1-2 shadows on the whole page; shadows are not the material here.
- **Warm paper.** Ivory `#F7F3E8`, never sterile white. Maximalism's paper has warmth.
- **Contrast stays.** Loud ≠ unreadable. Accent text passes 4.5:1; busy areas get quiet text.

**When to use:** Fashion houses, editorial (Vogue energy), galleries, restaurants, creative agencies, expressive personal sites — anything that should read as *deliberately rich, confident, more*.

**When NOT to use:** Dashboards, docs, enterprise, trust-first surfaces, or anything that needs calm or clarity. Say so explicitly if the brief pushes Maximalism where it doesn't belong.

---

## Tailwind Equivalents

Same recipes, Tailwind v4 utility classes. CSS-first config — no `tailwind.config.js`. Use `@tailwindcss/postcss` or the Vite plugin.

### Glassmorphism

```html
<div class="
  bg-white/15 backdrop-blur-xl backdrop-saturate-150
  border border-white/25 rounded-2xl
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
  shadow-lg text-gray-900
  dark:bg-slate-900/45 dark:border-white/10
  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
  dark:text-gray-100
  p-6
">
  Glass card content
</div>
```

### Neubrutalism

```html
<div class="
  bg-[#fffdf5] border-[3px] border-black rounded-none
  shadow-[5px_5px_0_0_#000]
  p-6 font-medium text-black
">
  Neubrutal card
</div>

<button class="
  bg-[#ffd23f] border-[3px] border-black rounded-none font-bold
  shadow-[4px_4px_0_0_#000]
  transition-[transform,box-shadow] duration-100
  hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none
  active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
  focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
">
  CLICK
</button>
```

---

### Swiss Design

```html
<div class="
  bg-stone-50 text-stone-900 font-[Familjen_Grotesk,Switzer,system-ui]
  rounded-none border-b border-stone-200 p-6
">
  <!-- hierarchy via opacity, headings light -->
  <h2 class="text-3xl font-light tracking-tight leading-snug">The Typographic Grid</h2>
  <p class="text-base leading-relaxed max-w-[60ch] text-stone-900/70">Body copy at secondary opacity.</p>
  <span class="text-xs uppercase tracking-wide text-stone-900/40">Caption</span>
  <button class="rounded-none bg-[#C8102E] px-6 py-3 font-normal text-white">Register</button>
</div>
```

### Bauhaus

```html
<div class="bg-[#F5F0E6] text-black rounded-none font-[Excon,system-ui] p-6">
  <h2 class="text-4xl font-bold uppercase tracking-tight">Form Follows Function</h2>
  <p class="text-base max-w-[60ch]">Flat fills, primary color, geometric type. No gradient, no shadow, no blur.</p>
  <div class="flex gap-4">
    <span class="size-20 bg-[#E2062C]"></span>
    <span class="size-20 rounded-full bg-[#FFDD00]"></span>
    <span class="size-0 border-x-[40px] border-x-transparent border-b-[80px] border-b-[#00509E]"></span>
  </div>
  <button class="rounded-none bg-[#E2062C] px-6 py-3 font-bold text-[#F5F0E6]">Enter</button>
</div>
```

### Futurism

```html
<div class="bg-[#050505] text-[#E0D5BE] border border-[#252525] rounded-none font-[Azeret_Mono,monospace] p-6">
  <span class="text-xs uppercase tracking-[0.08em] text-[#00ed3f]">// SYSTEM ONLINE</span>
  <h2 class="text-3xl font-bold tracking-[0.05em] text-[#00ed3f] [text-shadow:0_0_6px_#00ed3f99,0_0_14px_#00ed3f55]">SIGNAL ACQUIRED</h2>
  <p class="text-sm text-[#E0D5BE]/70">4 transmissions buffered. Awaiting input.</p>
  <button class="rounded-none border border-[#00ed3f] text-[#00ed3f] px-6 py-3 font-bold shadow-[0_0_8px_#00ed3f66,0_0_20px_#00ed3f33] hover:bg-[#00ed3f]/10">RUN</button>
</div>
```

### Minimalism

```html
<div class="bg-white text-[#1a1a1a] rounded-none font-[Switzer,system-ui] p-6">
  <h2 class="font-[Zodiak,Georgia,serif] text-4xl font-normal uppercase tracking-[0.02em]">The Quarterly</h2>
  <p class="text-base leading-relaxed max-w-[60ch] text-[#1a1a1a]/60">For people who read. No accents, no noise, one ink.</p>
  <button class="bg-transparent border-0 border-b border-[#1a1a1a] rounded-none px-0 py-1 text-xs uppercase tracking-[0.08em] hover:opacity-60">Subscribe</button>
</div>
```

### Brutalism

```html
<div class="bg-white text-black rounded-none font-[Azeret_Mono,monospace] p-6">
  <h2 class="text-2xl font-bold uppercase">RAW. HONEST.</h2>
  <p class="text-sm">This site does not sell comfort. Read the text.</p>
  <table class="border-collapse border border-black w-full">
    <tr><td class="border border-black p-2">Item</td><td class="border border-black p-2">Price</td></tr>
    <tr><td class="border border-black p-2">One HTML file</td><td class="border border-black p-2">Free</td></tr>
  </table>
  <a href="#" class="underline text-black">Read the manifesto</a>
</div>
```

### Maximalism

```html
<div class="bg-[#F7F3E8] text-[#1a1a1a] rounded-none font-[General_Sans,system-ui] p-6 border-2 border-double border-[#1a1a1a]">
  <h2 class="font-[Zodiak,Georgia,serif] text-4xl font-medium text-[#C8102E]">More, Chosen.</h2>
  <p class="font-[Clash_Display,sans-serif] text-sm uppercase tracking-wide text-[#1F4E79]">The page that gives you everything you asked for.</p>
  <p class="text-base max-w-[60ch]">Two or three accents, each with a job. Ornament as structure, never wallpaper.</p>
  <a href="#" class="underline decoration-double underline-offset-4 text-[#B08D00]">Enter the archive</a>
</div>
```

---

## Scan the Project First

Before you generate anything, read what's already there. Stomping on an existing font stack or palette with your defaults is the fastest way to make the user uninstall this skill.

Check these four things in order:

1. **package.json** — what framework? Next.js, Astro, Vite, Svelte, Remix, or vanilla? What motion library is installed (motion, gsap, framer-motion)?
2. **Font stack** — which track? Geist via `next/font` (shadcn default) or the Fontshare CSS API? Is there a `tailwind.config` with `theme.extend.fontFamily`? Whatever is there, preserve the track.
3. **Palette** — any `:root` CSS custom properties? OKLCH values in global CSS? Tailwind `@theme` block with color tokens? Don't overwrite them.
4. **Icons** — `lucide-react` or `@phosphor-icons/react` in dependencies? Use what's installed. Don't install a second library mid-session.

State what you found in one line before the Design Read. If the project is empty, say so and proceed.

```
Found: Next.js + Tailwind v4, Geist via next/font (Track 1), lucide-react, no motion lib.
Preserving: font stack, icon library. I'll introduce: the style surfaces, GSAP for scroll.
```

If the user says "ignore the existing project," skip this. Otherwise, the scan is non-negotiable.

---

## The Toolbox

### Framework
- **Any framework** with TailwindCSS v4: Next.js, Astro, Vite + React, Svelte, Remix, or plain HTML. The CSS recipes above are pure CSS — they work everywhere. Tailwind utility equivalents use standard classes (no framework lock-in).
- **Tailwind v4 notes:** CSS-first config. Use `@tailwindcss/postcss` or Vite plugin. No `tailwind.config.js`. Dark mode via `dark:` variant. Container queries and arbitrary values work natively.
- **Font loading by framework (two tracks — pick one):** Track 1, shadcn/Next defaults: `next/font/google` with Geist Sans + Geist Mono (or `@fontsource/geist-sans`). Track 2, Fontshare: `next/font/google` cannot load Fontshare families — use the Fontshare CSS API `<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">`, or self-host via `@fontsource` where the family also ships on Google (Outfit, Space Grotesk, Archivo, Anton, Familjen Grotesk, Azeret Mono) and `@font-face` + `font-display: swap` otherwise. Never link Google Fonts via `<link>` in production outside the Geist track.
- **Motion (mount animations):** Works with any React-compatible framework (Next.js, Vite + React, Remix). Import from `motion/react`. Use for: on-mount entrance animations (hero headlines, nav, initial load). For non-React frameworks (Astro, Svelte, plain HTML), use CSS `@keyframes` + `animation` or the Web Animations API (`element.animate()`) for mount effects.
- **GSAP + ScrollTrigger (scroll animations):** Framework-agnostic. Use for: scroll-driven reveals (features grids, CTAs, demo panels, staggered card entrances). In React: `useRef` + `gsap.context()` + cleanup in `useEffect`. See `references/gsap-setup.md` for patterns across frameworks.
- **The split:** Motion (or CSS animations) for mount, GSAP+ScrollTrigger for scroll. Never use GSAP for on-mount — it's heavier and imperative; Motion and CSS are declarative and simpler for that job.

**Design token const pattern.** Style Tailwind class strings get long and are repeated across many surfaces (cards, buttons, inputs, tags). Centralize all style tokens into a single `const TOKENS` object at the top of the component file:

```tsx
const GLASS = {
  card: "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shadow-lg dark:bg-slate-900/35 dark:border-white/10",
  btn: "rounded-xl px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-colors",
  text: "text-gray-900 dark:text-gray-100",
  textMuted: "text-gray-600 dark:text-gray-400",
}

const NEUBRUTAL = {
  card: "rounded-none border-[3px] border-black bg-[#fffdf5] shadow-[5px_5px_0_0_#000]",
  btn: "rounded-none border-[3px] border-black bg-[#ffd23f] font-bold shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
  text: "text-black",
  textMuted: "text-black/70",
}
```

Then reference tokens with template literals: `className={GLASS.card}`, `className={[NEUBRUTAL.btn, "flex-1"].join(" ")}`. Benefits: (a) every element stays on the same recipe, (b) tuning a dial means changing one value and every element updates, (c) the file is scannable instead of 150-line class strings on every div. For pages with only one or two styled surfaces, inline classes are fine.

### Fonts — two tracks, pick one

Every style runs on either track. Pick ONE per project and stay on it.

- **Track 1 — shadcn / Next.js defaults (Geist).** The fonts shadcn/ui and Next.js ship with: Geist Sans + Geist Mono. Load via `next/font/google` or `@fontsource/geist-sans` / `@fontsource/geist-mono`. Zero setup in a shadcn project. Styles that need a serif or geometric display (Minimalism, Bauhaus) either compromise on Geist or switch to Track 2.
- **Track 2 — Fontshare.** Geist's counterparts with more voice per style. `next/font/google` cannot load Fontshare families. Load via Fontshare's CSS API — `<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">` — or self-host via `@fontsource` where the family also ships on Google (Outfit, Space Grotesk, Archivo, Anton, Familjen Grotesk, Azeret Mono) and `@font-face` + `font-display: swap` otherwise.

| Style | Track 1 — shadcn/Next (Geist) | Track 2 — Fontshare |
|---|---|---|
| Glassmorphism | Geist Sans | Satoshi + General Sans |
| Neubrutalism | Geist Sans body + Geist Mono outlier | Clash Display / Space Grotesk + General Sans body + Azeret Mono |
| Swiss Design | Geist Sans (light weights) | Familjen Grotesk + Switzer |
| Bauhaus | Geist Sans (bold, uppercase — not geometric) | Excon + Archivo |
| Futurism | Geist Mono | Azeret Mono |
| Minimalism | Geist Sans body — the serif display requires Track 2 | Zodiak + Switzer |
| Brutalism | Geist Mono (typed voice) | Azeret Mono + Archivo |
| Maximalism | Geist Sans + Geist Mono | Zodiak / Clash Display + General Sans |

**Available typefaces:**
- **Track 1:** Geist Sans, Geist Mono
- **Track 2 (Fontshare):** Sans: Satoshi, General Sans, Switzer, Outfit, Space Grotesk, Familjen Grotesk, Archivo, Clash Grotesk, Cabinet Grotesk, Sora, Manrope. Display: Clash Display, Excon, Anton, Panchang, Stardom, Technor, Trench Slab, Sharpie, Nippo, Alpino. Mono: Azeret Mono (the only one). Serif: Zodiak, Melodrama, Sentient, Gambetta, Boska, Erode, Gambarino, Recia, Rowan.

For the full type system — the 2+1 rule, the ratio-based scale, measure (45–75ch), weight contrast, and hero-headline-length sizing — see `references/typography.md`. For the spacing scale, z-index scale, grid rules, and the "one layout family per page" rule — see `references/layout.md`.

### Icons
**Allowed libraries (pick one per project):**
- `lucide-react` -- clean, consistent, most popular with shadcn/ui
- `@phosphor-icons/react` -- extensive, multiple weights (Thin through Fill)
- `@tabler/icons-react` -- sharp, technical, good for dashboards

**Recommended by style:** Glassmorphism — Lucide (Regular) or Phosphor (Regular), crisp glyphs that read cleanly over translucency. Neubrutalism — Phosphor (Bold) or Lucide with `strokeWidth={2.5}`, chunky glyphs that match the thick borders. Bauhaus — Lucide (thin strokes) or raw geometric shapes (circle/square/triangle) as the graphic language. Futurism — Lucide (thin strokes) or Tabler (sharp, technical), glyphs that read as instrument readouts. Minimalism — Lucide (thin strokes, `strokeWidth={1.5}`) or no icons at all; the type carries the page. Brutalism — no icon library; bare unicode glyphs (`→`, `[ ]`, `*`) and raw text are the interface. Maximalism — any library works; abundance is native, but one family still holds (Phosphor Bold for the shout, or Lucide at `strokeWidth={2}`).

**Rules:**
- One icon family per project. Do not mix Lucide with Phosphor in the same tree.
- Standardize `strokeWidth` globally (1.5 or 2.0 for glass, 2.5 for neubrutalism).
- NEVER hand-roll SVG icon paths. If a glyph is missing, install a second library.

**PITFALL: lucide-react 1.x removed all brand icons.** `Github`, `Twitter`, `Facebook`, `Linkedin`, `Youtube`, `Instagram`, `Slack`, `Discord`, `Twitch`, and similar brand-name exports do NOT exist in lucide-react 1.0+. Build will fail with "Export X doesn't exist in target module" and a "Did you mean to import ...?" suggestion for an unrelated icon. The fix is NOT to guess another name -- use generic icons instead: `Globe`, `MessageCircle`, `Link`, `AtSign`, `Rss`, `ExternalLink`, `Share2`. If brand recognition is essential, fall back to Phosphor (which retains brand icons) or use inline SVG from simple-icons.

### Responsiveness
- `min-h-[100dvh]` -- NEVER `h-screen` (iOS Safari address bar collapse).
- CSS Grid over flexbox math (`grid grid-cols-1 md:grid-cols-3 gap-6`).
- Glass effects MUST degrade gracefully on mobile: fewer shadow layers, simpler blur.
- Neubrutalist hard shadows and borders are cheap on mobile — they need no degradation.
- Standard breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.

---

## The Rules That Keep It Usable

These styles are a11y traps in different ways. These rules are mandatory — skip them and you shipped broken work.

### Contrast
- **Glass:** text over variable backgrounds MUST have a text-shadow or subtle scrim. A bright spot in the background image directly behind text will wipe it out. Light mode near-black, dark mode near-white.
- **Neubrutalism:** flat color is the point, so contrast is explicit — but it must still be checked. Yellow-on-white fails. Use yellow as a *fill* with black text, never yellow *text*. Body text needs 4.5:1; "loud" is not an excuse for inaccessible.
- **Bauhaus:** black on cream, cream on red and blue all pass 4.5:1. Yellow is a *fill* with black text, never yellow text. Full-saturation primaries vibrate next to each other — separate them with black or cream.
- **Futurism:** green `#00ed3f` and bone `#E0D5BE` on near-black `#050505` pass 4.5:1 with room to spare. Glow is decorative — text must pass without it. Amber `#ff8800` and red `#cc2200` are warning/danger, never body text.
- Any colored accent text must pass 4.5:1 against its background.

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
- No scroll-driven transitions for reduced-motion users.
- Neubrutalist marquees must pause.
- Futurism's CRT effects (scanlines, flicker, blink, glitch, pulse) are ambient — disable them all under `prefers-reduced-motion`. Keep the static look (colors, notches, mono type, layout) intact.

### Reduced Transparency
```css
@media (prefers-reduced-transparency: reduce) {
  .glass, [class*="glass"], [class*="backdrop-blur"] {
    background: var(--glass-fallback, rgba(255, 255, 255, 0.92));
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```
Every glass element MUST ship a solid fallback. Never ship glass without it. (Neubrutalism, Swiss, Bauhaus, Futurism, Minimalism, Brutalism, and Maximalism are opaque by definition — this rule is glass-only.)

### Focus States
- **Glass:** `outline: 2px solid rgba(255,255,255,0.8);` on dark backgrounds, `outline: 2px solid rgba(0,0,0,0.6);` on light backgrounds.
- **Neubrutalism:** `outline: 3px solid #000; outline-offset: 2px;` — thick and mechanical, matching the border weight. In Tailwind, `outline-3` does NOT exist (the scale is 0/1/2/4/8) — use `ring-2 ring-black ring-offset-2` or `outline-[3px] outline-black outline-offset-2`. Note the asymmetry: `border-3` IS valid in Tailwind v4, `outline-3` is not.
- **Bauhaus:** `outline: 2px solid #000; outline-offset: 2px;` — crisp and geometric, matching the rectilinear grammar.
- **Futurism:** `outline: 1px solid #00ed3f; outline-offset: 2px; box-shadow: 0 0 8px #00ed3f66;` — the focus ring IS the glow. Instant, never animated.
- **Minimalism:** `outline: 1px solid #1a1a1a; outline-offset: 2px;` — a hairline ink ring, instant, never animated.
- **Brutalism:** `outline: 1px solid #000000; outline-offset: 2px;` — a raw black ring, instant, never animated.
- **Maximalism:** `outline: 2px solid #1a1a1a; outline-offset: 2px;` — a bold ink ring, instant, never animated.
- Never rely on shadow change alone for focus. A visible outline ring is mandatory.

---

## The Things We Don't Do

### The Universal Tells

**THE STYLE MASH-UP.** Glass nav bar + neubrutalist cards + clay buttons on one page. This is the #1 AI tell — the model used every trick it knows at once. Pick one style. The whole page gets that style.

**THE PILL BADGE.** `rounded-full bg-white/10 backdrop-blur-md border px-4 py-1.5` — a frosted-glass chip with a tiny icon, usually saying "New in beta" or "Now available." This exact pattern appears in nearly every AI-generated glass hero. Replace with bare text: `flex items-center gap-2 text-sm font-medium tracking-wide text-white/60` plus the icon. No background wrapper. The icon carries the weight.

**THE EM-DASH.** Completely banned. In headlines, body, captions, buttons — anywhere the user can see it. Use a period, comma, or hyphen. Not an en-dash either. Just a regular hyphen.

**EMOJI AS ICONS.** Banned. Use icon library glyphs. Emoji only when the user explicitly asks for a playful/social-native vibe, and sparingly even then.

**INTER-BY-DEFAULT.** Inter as the only font on a page reads as "I didn't think about type." For glass, pick a font with a pulse — Satoshi, General Sans, or Outfit. (Neubrutalism is the one exception: General Sans is fine as the *body* face there, because the body should be boring on purpose — but the display face must still be loud, e.g. Clash Display or Space Grotesk.)

**AI COPY CLICHES.** "Elevate." "Seamless." "Unleash." "Next-Gen." "Game-changer." "Delve." "Revolutionize." These are not words — they're the model filling space because it doesn't know what the product does. Write plain, specific language. If the brief gave you nothing, say so and ask for one concrete noun.

**JOHN DOE SYNDROME.** "John Doe." "Acme Corp." "Lorem Ipsum." Generic placeholder names announce "this was generated." Use realistic, contextual content that could actually belong to the brief.

**MORPHISM WITHOUT FALLBACK.** Glass without `prefers-reduced-transparency` solid fill. If removing the effect makes the element invisible, the design fails.

**H-SCREEN.** Never use `h-screen`. Always `min-h-[100dvh]`. iOS Safari's address bar will break your hero every time.

**SHADOW STACKING.** Max 4 box-shadow declarations per element. Beyond that it's a performance hit and reads as trying too hard.

**THE AI NAV.** Wordmark hard-left, 4-5 inline links (Features · Pricing · Docs · Blog), CTA hard-right, sticky, hairline bottom. Every LLM emits it because every SaaS that fed the training data shipped it. The nav should tell you what kind of site you're on — see `references/components.md` for the archetypes. Glass floats it (frosted bar or pill); neo slabs it (hard border, all-caps).

**THE AI FOOTER.** Four link columns (Product · Company · Resources · Legal) + a social-icon row + tiny copyright. A bakery has no "Resources" column. The footer closes the page; it doesn't catalogue an absent sitemap. See `references/components.md`.

**THE EYEBROW.** An uppercase mono-cap tag (`01 / FEATURES`, `02 · THE TOUR`) above — or worse, BESIDE — every section heading. Default OFF. When a tag IS used, the heading stacks directly underneath it in the same column; the tag-left / heading-right two-column head is the single most reliable templated tell and is banned outright.

**THE SIDE-STRIPE CARD.** A card with a thick coloured border on one edge (usually left, 4-6px). Very 2018-SaaS-AI. Use a hairline all round, or no border, or a small accent square beside the heading.

**THE AURORA BLOB.** Flowing organic mesh blobs in purple-to-pink-to-cyan behind the hero. It reads "premium" until you've seen it on every Dribbble shot since 2022. Solid surface, or a subtle two-stop gradient + grain at <0.1 opacity.

**TOKEN IMPROVISATION.** A theme is locked at the top, then a one-off hex or `font-family` sneaks into a hover state or a focus ring. Every colour and font must reference a named token (`var(--color-accent)`, `font-family: var(--font-display)`). If a value doesn't exist as a token, lift it into the token block first, then reference it.

### The Motion Tells

**THE TRANSITION-ALL.** `transition-all` / `transition: all`. Name the properties. Focus rings, visibility, and display changes must be instant.

**THE UNIVERSAL LIFT.** `hover:scale-105` on every card, no shadow change, no easing, no purpose. AI's reflexive "make it interactive."

**THE BOUNCE.** `cubic-bezier(0.34, 1.56, 0.64, 1)` and friends on UI state. Dated; signals "template."

**THE EFFECT STACK.** A card that translates + scales + shadows + colour-shifts + rotates on hover. Pick one signal.

**THE ANIMATED FOCUS RING.** A focus ring that fades in over 200ms. Focus rings appear instantly — keyboard users need an immediate indicator.

**THE CELEBRATORY TOAST.** "Done!" for an action whose effect the user can already see. Silent success is taste; toasts are for failures and invisible effects.

**THE REDUCED-MOTION GATE.** Gating `initial`/`animate`/`whileInView` on `useReducedMotion()` (`initial={reduce ? undefined : ...}`). `useReducedMotion()` reads a client-only preference, so the server bakes `opacity:0` into the HTML while the client renders visible; React 19 leaves the server's `opacity:0` in place and the whole section stays blank. Wrap the app once in `<MotionConfig reducedMotion="user">` and write animations plainly.

### The Typography Tells

**THE GRADIENT TEXT.** `background-clip: text` with a gradient fill on headings. Banned.

**THE ITALIC HEADER.** The single italicised emphasis-word inside an upright headline. Headings are roman; emphasis comes from weight, colour, or a drawn underline.

### The Layout Tells

**THE CARD-IN-CARD.** A bordered container inside a bordered container. Pick one.

**THE REDRAWN CHROME.** Hand-built fake browser bar, fake phone frame, fake code window. The user's environment already has real chrome. Use a real screenshot in a `<figure>`, or omit the chrome.

**THE INVENTED METRIC.** "10× faster", "trusted by 50,000+ teams", "+47% conversion" the user didn't supply. A stat with no source is slop the moment it's decorative.

### Glassmorphism Tells
- **Glass without blur.** `background: rgba(255,255,255,0.5)` without `backdrop-filter` is NOT glassmorphism. It's a transparent rectangle that makes background content unreadable.
- **Glass over busy images without text protection.** Add `text-shadow` or a subtle scrim behind text.
- **Glass on glass on glass.** Max 2 layers of glass overlaid. Three layers = unreadable soup.
- **`backdrop-filter` without `-webkit-backdrop-filter`.** Safari needs the prefix.
- **Glass over a flat background.** A solid color behind glass defeats the purpose — there's nothing to blur. The background must be rich: image, video, or a restrained gradient.
- **THE RADIAL MESH.** A multi-color radial gradient wash (emerald/indigo/sky blobs on slate-950, purple/blue/pink) behind the hero. The generic "AI glass" backdrop. The background should be a real image, video, or brand-driven composition; a gradient is one light source with two stops, never three colored blobs.
- **Glass on a data-heavy surface.** Tables and long text go solid. Glass is for frames, heroes, navs, and cards.

### Neubrutalism Tells
- **THE SOFT SHADOW.** A blurred drop shadow (`0 4px 12px rgba(...)`) instead of the hard offset (`5px 5px 0 0 #000`). The hard shadow is the whole signature — if it's blurry, it's not neubrutalism.
- **THE PILL.** `border-radius` over ~5px. Square (or near-square) corners are the grammar. Pills are glass's language, not neubrutalism's.
- **THE HAIRLINE.** A 1px gray border (`border border-gray-200`) instead of a 2–3px black border. The outline is the brand signal.
- **THE GRADIENT.** Any gradient fill. Flat color only — pop-art energy, not ambient glow.
- **THE BLUR.** `backdrop-filter` / glass effects. This is the opposite material. If you're blurring, you picked the wrong style.
- **THE FULL-VOLUME PAGE.** Every component at maximum saturation. One to three saturated accents against a black-and-white base. If everything shouts, nothing is loud.
- **THE PASTEL-ON-PASTEL.** Low-contrast fills that fail 4.5:1. Loud is fine; unreadable is not.

### Swiss Design Tells
- **THE SECOND COLOR.** Using a second hue to signal hierarchy instead of opacity. Swiss hierarchy is opacity only — `text-stone-900/70`, never `text-stone-500`.
- **THE BOLD HEADING.** `font-weight: 700` on a heading. Swiss headings are light (`300`). Bold is the AI default.
- **THE ROUNDED CORNER.** `border-radius` on a card or button. Swiss is rectilinear — `rounded-none`, or `rounded-sm` at most.
- **THE PURE WHITE / BLACK.** `bg-white` or `bg-black`. Swiss uses the stone scale — paper is `#fafaf9`, ink is `#1c1917`.
- **THE WIDE COLUMN.** Body text over 60ch. Swiss measure is narrow; wider columns are illegible.
- **THE THIN SECTION.** Section padding under `py-16`. Whitespace IS the design; thin sections are un-Swiss.

### Bauhaus Tells
- **THE GRADIENT.** Any gradient fill. Bauhaus is flat primary color; a gradient is the fastest way to look un-Bauhaus.
- **THE DROP SHADOW.** Any box-shadow. Depth is foreign to this style — flat fills only.
- **THE PASTEL PALETTE.** Muted or desaturated colors instead of full-saturation primaries. Bauhaus red is `#E2062C`, not a dusty rose.
- **THE GEOMETRIC WALLPAPER.** Scattered triangles and circles as a decorative backdrop instead of geometry that composes the layout. Shapes are structural, not wallpaper.
- **THE SYMMETRIC LAYOUT.** Centered everything. Bauhaus composes asymmetrically; a symmetric layout is the AI default.
- **THE ORNAMENT.** A "bauhaus" badge, a logo-as-decoration, or any flourish. Bauhaus is the absence of ornament, by definition.
- **THE SECOND FONT.** More than one geometric face. Excon does the work; a second face only for body clarity.
- **THE ROUNDED CORNER.** `border-radius` on structural elements. The literal circle shape is the only rounding on the page.

### Futurism Tells
- **THE NEON PURPLE.** A synthwave purple-to-cyan gradient plus a perspective wireframe grid. The generic "sci-fi" AI look. Futurism here is green/amber phosphor on neutral near-black.
- **THE ROUNDED CORNER.** `border-radius` on any element. Futurism is zero-radius and chamfered (`clip-path` notches), never rounded.
- **THE DROP SHADOW.** A blurry black offset shadow. Futurism's depth is phosphor glow (`0 0 8px` accent, zero offset), not drop shadow.
- **THE PROPORTIONAL FONT.** Any non-monospace face. Futurism is mono-only — every character on the grid.
- **THE GLOW-ON-EVERYTHING.** Every element glowing. Glow is reserved for the alive/active/focus state. If everything glows, nothing reads as on.
- **THE TINTED BACKGROUND.** A purple- or blue-tinted dark background. Futurism's background is neutral near-black (`#050505`); color comes from accents, never the backdrop.
- **THE GRADIENT WASH.** Ambient gradient fills. Flat near-black + glow, no gradients.

### Minimalism Tells
- **THE ACCENT COLOR.** Any second hue. Minimalism is ink-only — hierarchy is ink opacity, weight, and whitespace. A colored link or button is the fastest way to look un-minimal.
- **THE SANS HEADING.** A sans-serif heading. The serif display is the whole point; a sans heading means you built Swiss with extra steps.
- **THE FILLED BUTTON.** A solid or outlined button. Controls are underlined text-links. Filled pills and outlined chips are glass/neo grammar.
- **THE ROUNDED CORNER.** `border-radius` on any element. Minimalism is square, like Swiss and Bauhaus.
- **THE DROP SHADOW.** Any `box-shadow`. Depth comes from whitespace, never elevation.
- **THE BOLD HEADING.** `font-weight` ≥ 600 on a heading. Minimalism headings are regular-weight serif (`400`), often uppercase. Bold reads loud, not quiet.
- **THE DENSE LAYOUT.** Cramped spacing, tight margins, 3-column-equal grids. Whitespace is the material; a dense Minimalism page is just a Swiss page without the grid.

### Brutalism Tells
- **THE POLISHED BUTTON.** A styled button — rounded, filled, shadowed. Brutalism's controls are bare text links and raw inputs; a polished button is product chrome.
- **THE ROUNDED CORNER.** Any `border-radius`. Brutalism is zero-radius, always.
- **THE GRADIENT.** Any gradient fill. Monochrome flat only.
- **THE SOFT SHADOW.** A blurred or offset shadow. Brutalism has no shadows; structure replaces depth.
- **THE SMOOTH EASING.** Any eased transition. Interactions are instant or absent.
- **THE REFINED TYPE.** A designed pairing with careful tracking. Brutalism is typed, not typeset.
- **THE GENEROUS WHITESPACE.** Luxury air. Brutalism can be cramped and raw — density is honesty. If the page needs air, that's Swiss or Minimalism.
- **THE LOUD ACCENT.** More than one signal color, or color used ambiently. One raw red maximum, text-only.

### Maximalism Tells
- **THE EMPTY WALL.** A sparse, quiet section. Maximalism does not do empty sections; if a page has air, it is not maximal.
- **THE SINGLE ACCENT.** One color used everywhere. Maximalism budgets TWO or THREE, each with a job.
- **THE UNIFORM GRID.** Three equal cards in a row. Maximalism staggers, overlaps, and varies tile sizes.
- **THE MINIMAL LOGO.** A tiny wordmark in a corner. Maximalism's wordmark is part of the composition — framed and ornamented.
- **THE FLAT COLOR.** Flat fills with no ornament, no pattern, no layering. Abundance requires layers.
- **THE WHITE SPACE.** Generous air. Air is Minimalism's material; Maximalism fills deliberately.
- **THE CLUTTER.** Ornament that does not compose. Abundance with a budget — decoration without a job is slop.
- **THE THIRD SANS.** More than one sans voice. Serif + one sans + body is the ceiling.

---

## How Things Move

The full motion language — easing tokens, the duration canon, page-load orchestration, hover/reveal/loading recipes, reduced-motion nuance, and the named motion tells — lives in `references/motion.md`. Read it before you animate anything.

**The split:** **Mount animations** (Motion or CSS `@keyframes`): hero headlines, nav entrance, on-load fades. **Scroll animations** (GSAP ScrollTrigger): features grids, CTAs, demo panels, staggered reveals. Never GSAP for mount.

**CSS vs GSAP:** a CSS `animation` or a `transition` on `transform` will fight GSAP's tween on the same element and silently break it. Mount animation goes on a parent, and a GSAP target gets no `transition` on `transform`/`opacity` (scope hover to colors). Full breakdown in `references/gsap-setup.md` → "CSS vs GSAP".

**Three rules that catch most slop:**
- **No more than three distinct animation primitives per page.** One orchestrated entrance + one hover treatment + one scroll reveal = three. Done.
- **Animate only `transform` and `opacity`.** Never `width`, `height`, `top`, `left`, `margin`, `padding`.
- **When in doubt, cut.** If making the animation instant would lose nothing, remove it.

**Reduced motion in React:** never gate `initial`/`animate`/`whileInView` on `useReducedMotion()` — see THE REDUCED-MOTION GATE. Wrap the app once in `<MotionConfig reducedMotion="user">` (inside a root client component) and write animations plainly; Motion then honors the preference consistently across SSR and client and keeps an opacity-only fade for reduced-motion users.

**Glass perf:** `backdrop-filter` is GPU-expensive. One backdrop-filter surface per viewport; never animate the `transform` of the element that owns the blur (put the mount animation on a parent wrapper); don't layer a full-screen grain overlay above animated content. Full recipe in `references/motion.md` → Performance.

**Per-style motion character:**

| Style | Character | Hover | Scroll |
|---|---|---|---|
| Glassmorphism | Smooth, elegant, floating | background/opacity shift (= increased blur), `--dur-short` `--ease-out`. No scale | Staggered card reveals (`delay: i * 0.06`), reveal once, no re-fire |
| Neubrutalism | Fast, decisive, mechanical | the "press": `translate(x,y)` by the shadow offset + shadow collapse, ~100ms | Marquee, staggered grid reveals. No soft eases, no overshoot |
| Bauhaus | Functional, near-static | fill/geometry swap (color invert), no scale, ~150ms | staggered grid reveals, sharp, no overshoot |
| Futurism | CRT, mechanical | blink/flicker/pulse (ambient, reduced-motion-off), glitch on hover, ~150ms | data-scroll tickers, scanline reveals, sharp, no easing |
| Minimalism | Near-static, editorial | underline stays, text fades (opacity shift), ~150ms. No scale, no lift | slow single-opacity fades, reveal once, no stagger cascade |
| Brutalism | Static, instant | no hover treatment — instant state change or none at all | no scroll reveals, no parallax, no easing |
| Maximalism | Expressive, confident | accent color-shift + small ornament scale, ~200ms, no overshoot | staggered cascade reveals, bolder but transform/opacity only |

**GSAP ScrollTrigger pattern** (see `references/gsap-setup.md` for React, vanilla JS, and Astro examples):
```tsx
const sectionRef = useRef<HTMLElement>(null)
const cardsRef = useRef<(HTMLDivElement | null)[]>([])

useEffect(() => {
  const ctx = gsap.context(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(card, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
      })
    })
  }, sectionRef)
  return () => ctx.revert()
}, [])
```

---

## Color Per Style

### Glassmorphism
- **Background behind glass:** a real image, video, or brand-driven composition first; a restrained single-light-source gradient second. This is the most important color decision on the page — the glass only works if there's something worth blurring. Never the multi-color radial mesh (see THE RADIAL MESH).
- **Glass transparency:** light mode `rgba(255,255,255,0.10-0.25)`, dark mode `rgba(15,23,42,0.30-0.55)`.
- **Text:** high contrast. Light mode near-black, dark mode near-white.
- **Accent:** one vibrant color (electric blue, emerald, deep rose). Pick one and stay consistent.

### Neubrutalism
- **Color is categorical, not ambient.** Flat fills that carve surfaces into obvious objects. No gradients.
- **Base:** black `#000` + off-white `#fffdf5` as the structural pair.
- **Accents:** one to three saturated pops — bold yellow `#ffd23f`, coral pink `#ff6b6b`, sky blue `#74b9ff`, soft green `#88d498`, orange `#ffa552`, lavender `#b8a9fa`. Pick and stay consistent.
- **Text:** black on light fills, off-white on dark fills. Yellow as a *fill* with black text, never yellow text on white (fails contrast).

### Swiss Design
- **Grayscale is the palette.** The stone scale (`#fafaf9` paper to `#1c1917` ink), never pure white or black. Hierarchy is opacity, never hue — `0.7` secondary, `0.4` tertiary, `0.2` ghost. Never mid-scale gray for text weight.
- **One accent.** Swiss red `#C8102E` by default; cobalt `#003B8E`, golden `#F0B429`, forest `#2D6A4F` as alternates. At full / 60% / 20% / 10% opacity only.
- **Dark mode:** flip the stone scale (`stone-950` paper, `stone-50` ink); the opacity values stay identical.

### Bauhaus
- **Three primaries + black + cream.** Red `#E2062C`, yellow `#FFDD00`, blue `#00509E`, black `#000000`, cream `#F5F0E6`. Flat fills at full saturation.
- **Yellow is a fill, never text.** Black text on yellow; cream text on red and blue. Yellow text on cream fails contrast.
- **No gradients, no opacity ladder, no ambient color.** Color is categorical (like neubrutalism) but geometric and quieter. Separate primaries with black or cream — red against blue vibrates.

### Futurism
- **Near-black backgrounds, neutral.** `#050505` base, `#0D0D0D` surface, `#141414` raised. Never color-tinted — no purple or blue black.
- **Deliberate palette.** Green `#00ed3f` (alive), amber `#ff8800` (warning), red `#cc2200` (danger), blue `#4466cc` (info). Bone `#E0D5BE` is the text, never a tinted off-white.
- **Glow, not shadow.** Two-layer glow `0 0 8px <color>66, 0 0 20px <color>33`. Glow is for the alive/focus state; ambient text is unglowed.

### Minimalism
- **Pure white paper, near-black ink.** Background `#ffffff` (`oklch(1 0 0)`), ink `#1a1a1a` (`oklch(0.214)`). The one style allowed pure white — Swiss must use the stone scale; Minimalism does not.
- **Ink-only, zero accent.** No accent color exists. Hierarchy is ink opacity (`0.6` secondary, `0.4` tertiary) plus weight and whitespace. Links and buttons are ink, underlined.
- **Optional undertone themes.** Warm or cool the paper with a neutral undertone — taupe, stone, zinc, mauve, olive, mist — but the ink stays black. Never a chromatic accent.
- **Dark mode:** invert — near-black paper, near-white ink. Opacity stops stay identical.

### Brutalism
- **Monochrome.** Pure black `#000000`, pure white `#ffffff`, concrete gray `#E8E8E8` / `#CCCCCC`. No tinted backgrounds, no gradients.
- **One raw accent.** Raw red `#E2062C` maximum, as text or links only. Everything else is ink on paper.
- **Dark mode:** invert — near-black paper, near-white ink. Same monochrome discipline.

### Maximalism
- **Warm ivory paper, ink.** Background `#F7F3E8`, ink `#1a1a1a`. Never sterile white — Maximalism's paper has warmth.
- **Two or three loud accents, budgeted.** Deep red `#C8102E` (headlines), deep blue `#1F4E79` (links), burnished gold `#B08D00` (prices and emphasis). Each accent has ONE job; a fourth color is clutter.
- **Dark mode:** near-black paper, near-white ink; the accents stay — they are the identity.

---

## Don't Build the Same Page Twice

Two briefs should produce two different page rhythms — not the same hero→features→CTA→footer template with a different color palette. This is the single most important rule and the one most agents break.

### The rhythm rule

If your last build used a full-viewport hero with a staggered 3-column feature grid, this build must use a different macro-rhythm. Change at least two of:

- **Hero shape** — full-viewport vs. split-screen vs. content-led vs. no hero at all
- **Section sequence** — features→CTA→testimonials vs. manifesto→grid→footer vs. single-scroll narrative
- **Card structure** — 3-column equal grid vs. alternating 2-column vs. bento vs. no cards at all
- **Nav personality** — sticky bar vs. hidden hamburger vs. edge-aligned minimal vs. brutal slab
- **Footer shape** — 4-column directory vs. single-line statement vs. letter-close vs. marquee

### Track what you built

After every build, note the rhythm in plain text. The agent should remember the last page's shape and deliberately deviate. If you built a glass landing page yesterday with full-viewport hero + 3-card features + CTA + 4-column footer, today's neubrutalist portfolio should have a split-screen hero + manifesto section + grid + single-line footer. Same skill, different skeleton.

If the brief genuinely calls for the same rhythm ("another landing page, same company, different product"), keep the skeleton but change the hero shape and the section sequence. Same language, different sentence structure.

---

## The Words Matter

Design is 50% copy. A great layout with stock copy reads generic. Tight copy in a serviceable layout reads considered. The LLM default is distribution-average marketing prose — "Built for the modern team," "Where design meets function," "Experience the power of..." These are not copy. They're filler.

### Banned opening lines

If you find yourself writing any of these, stop and ask for one concrete noun:

- "Built for the modern team"
- "Unleash your..."
- "Where X meets Y"
- "Empower your..."
- "Reimagine the way you..."
- "Seamless integration"
- "Next-generation"
- "In today's digital landscape"
- "Experience the power of..."

### What to do instead

Name something real. A place, a date, a number, a verb that means something:

- *"Creative direction and type since 2003."* (not "We are a design studio")
- *"23 spans · 4 services · 482 ms."* (not "Built for speed")
- *"One HTML file."* (not "Lightweight by design")
- *"We will answer the email ourselves."* (not "Dedicated support")

### Per-style copy voice

| Style | Voice |
|---|---|
| Glassmorphism | Precise, modern, one level cooler than the reader. "The API for developers who ship on Fridays." |
| Neubrutalism | Loud, punchy, declarative, unapologetic. "WE MAKE THINGS THAT MAKE YOU LOOK." |
| Swiss Design | Objective, measured, declarative. "The grid system is an aid, not a guarantee." The facts do the selling; adjectives are withheld. |
| Bauhaus | Functional, declarative. "Design is not a decoration; it is a decision." Form follows function; facts and function, no flourish. |
| Futurism | Terse, procedural, terminal-native. "SIGNAL ACQUIRED. 4 TRANSMISSIONS BUFFERED." All-caps for labels and states; readable mono for prose. |
| Minimalism | Quiet, precise, editorial. "The quarterly for people who read." Restraint is the point; adjectives are withheld. |
| Brutalism | Raw, declarative, unpolished on purpose. "RAW. HONEST. UNFINISHED ON PURPOSE." No comfort, no adjectives; facts and index. |
| Maximalism | Confident, generous, chosen. "MORE, CHOSEN." Abundance with a budget; every word earns its weight. |

### The self-audit

Before shipping, re-read every visible string. Flag anything that:
- Sounds grammatically broken
- Has unclear referents ("we plan to stay that way" — what way?)
- Reads like the model tried to be cute (forced wordplay, fake-profound one-liners)
- Uses invented precision ("92% faster" — says who?)

Rewrite every flagged string. AI-generated cute copy is worse than boring copy. Boring is honest.

---

## Before You Ship

Run every box. If any fails, you're not done.

### The pre-emit self-critique (do this first)

Before the checklist, score the build 1–5 on six axes. Anything < 3 on any axis triggers a revision pass. Stamp the scores at the top of the artifact:

`/* Morphism · P5 H4 E5 S4 R5 V5 */`

- **P — Philosophy.** Is there a clear *why* — a position the page is taking? Or just a layout?
- **H — Hierarchy.** Can a reader tell in 2 seconds what's primary, secondary, tertiary?
- **E — Execution.** Are the details (rule weight, text-wrap, focus rings, contrast) in spec?
- **S — Specificity.** Does it look like *this brief* — or a generic "any page"?
- **R — Restraint.** Have you removed everything not earning its place?
- **V — Variety.** Does it share a structural fingerprint with your last build?

### Style Selection
- [ ] **Design Read** declared (see Read the Room)?
- [ ] **Dial values** set (glass `5 / 4 / 8 / 0`, futurism `3 / 0 / 0 / 6`, neubrutalism `6 / 1 / 0 / 0`, brutalism `1 / 0 / 0 / 0`, minimalism `0 / 0 / 0 / 0`, maximalism `6 / 3 / 0 / 1`, unless overridden)?
- [ ] **ONE style** per page (no mixing)?

### Accessibility (CRITICAL)
- [ ] **Contrast check:** all text on styled surfaces has 4.5:1 contrast (glass: text-shadow/scrim; neubrutalism: yellow-as-fill-not-text)?
- [ ] **Button text ≠ fill** (no black-on-black; `--color-accent-ink` defined when accent fills a surface)?
- [ ] **Hero fits the fold** at 1280×800 (eyebrow + headline + lede + primary CTA visible without scrolling)?
- [ ] **Glass fallback:** `prefers-reduced-transparency` solid-fill provided?
- [ ] **Reduced motion:** `prefers-reduced-motion` disables all ambient animations?
- [ ] **No `useReducedMotion()` gating** of `initial`/`animate`/`whileInView` — `MotionConfig reducedMotion="user"` at the root instead?
- [ ] **Focus states:** all interactive elements have visible focus rings (instant, never animated)?

### Style-Specific
- [ ] **Glassmorphism:** `backdrop-filter` AND `-webkit-backdrop-filter` both present? Rich background behind the glass? Max 2 layers?
- [ ] **Neubrutalism:** hard offset shadow (zero blur)? 2–3px black border? Square/near-square corners? Flat color, no gradients? Distinction from Brutalism honored?
- [ ] **Swiss Design:** grayscale + opacity hierarchy (no second hue)? Headings light (300/400, never bold)? Rectilinear (no border-radius)? 12-col grid + 8px unit? Body ≤ 60ch? One accent at opacity stops?
- [ ] **Bauhaus:** flat fills (no gradient/shadow/blur)? Three primaries + black + cream (no pastels)? Geometry as composition, not decoration? Bold geometric type (Excon)? Rectilinear? Asymmetric composition? Yellow-as-fill-not-text?
- [ ] **Futurism:** mono only (Azeret Mono)? Zero radius + chamfered notches (no rounded)? Phosphor glow, not drop shadow? Neutral near-black background (no tint)? Deliberate palette (green/amber/red/blue)? Glow reserved for alive/focus? CRT effects gated by reduced-motion?
- [ ] **Minimalism:** serif display (Zodiak, never sans)? Ink-only palette (zero accent)? Underlined controls (no filled buttons)? Pure white paper + near-black ink? Square, shadowless (`0 / 0 / 0 / 0`)? Headings regular-weight, not bold? Generous whitespace (no dense layout)?
- [ ] **Brutalism:** monochrome (one raw accent max)? Exposed structure (visible seams/borders)? Zero polish (no shadows/gradients/radius/easing)? Typed voice (Azeret Mono)? Ugly-but-readable (contrast + focus still pass)?
- [ ] **Maximalism:** abundance with a budget (ornament composes, not wallpaper)? Two or three accents, each with a job? Mixed type (serif + one sans, no third sans)? Layered depth, max 1-2 shadows? Contrast passes on loud fills?

### Code Quality
- [ ] **No `h-screen`** -- using `min-h-[100dvh]`?
- [ ] **CSS Grid** over flexbox math?
- [ ] **Max 4 box-shadow declarations** per element?
- [ ] **Mobile responsive:** effects degrade gracefully?
- [ ] **No more than 3 animation primitives** on the page (see How Things Move)?
- [ ] **Only `transform`/`opacity` animated** -- no layout properties?

### Anti-Slop
- [ ] **Zero em-dashes (`--`)** anywhere visible to the user?
- [ ] **Zero emoji as icons** (unless user explicitly requested)?
- [ ] **No AI copy cliches** ("Elevate", "Seamless", "Unleash", etc.)?
- [ ] **No generic placeholders** ("John Doe", "Acme Corp", "Lorem Ipsum")?
- [ ] **No pill badge** (`rounded-full bg-white/10 backdrop-blur ...`) -- bare text label + icon only?
- [ ] **Font is not Inter-by-default** (glass: Geist or Satoshi/General Sans; neubrutalism: loud display face)?
- [ ] **No mixing styles** on one page?
- [ ] **Different page rhythm** than the last build (see Don't Build the Same Page Twice)?
- [ ] **Copy self-audited** — no banned opening lines, no invented metrics?
- [ ] **No `transition-all`** — properties named explicitly?
- [ ] **No gradient text, italic headers, or invented metrics**?

---

## Out of Scope

This skill is NOT for:
- Flat design that isn't Swiss, Bauhaus, Minimalism, or Brutalism — generic "clean minimal" with none of the four disciplines (Swiss grid + opacity, Bauhaus primaries + geometry, Minimalism serif + ink + underlined controls, Brutalism monochrome + raw + exposed structure). Route to the closest flat style, not out of scope.
- Loud, cluttered design without a budget — decoration with no job. Maximalism requires abundance with a budget; un-budgeted clutter is slop, not a style.
- Flat design with primary colors and geometry (circle/square/triangle) that isn't Bauhaus-disciplined — routes to Bauhaus, not out of scope.
- Dark neon "sci-fi" that isn't Cassette Futurism — without the mono type, phosphor palette, and zero-radius discipline. Routes to Futurism, not out of scope.
- Other morphism styles (Neumorphism, Claymorphism, Skeuomorphism, Liquid Glass) — not yet covered; say so if the brief asks for them.
- 3D WebGL/Three.js scenes (this skill is CSS-only depth).
- Native mobile (use platform HIG: Material Design, Apple HIG).
- Print design or non-web surfaces.
- Data visualization libraries (D3, Chart.js, etc.).

If the brief is out of scope, **say so** and recommend the right approach.

---

## Quick Reference

| User says... | Style | Dial preset |
|---|---|---|
| "glass", "frosted", "transparent", "blur background" | Glassmorphism | 5 / 4 / 8 / 0 |
| "premium", "layered", "spatial", "translucent" | Glassmorphism | 5 / 4 / 8 / 0 |
| "clean glass", "subtle frosted", "enterprise glass" | Glassmorphism | 3 / 3 / 5 / 0 |
| "neubrutalist", "neobrutalism", "hard shadows", "thick borders" | Neubrutalism | 6 / 1 / 0 / 0 |
| "bold", "blocky", "playful", "loud", "colorful", "sticker" | Neubrutalism | 6 / 0 / 0 / 0 |
| "swiss", "international style", "typographic", "grid", "editorial", "flat", "neutral" | Swiss Design | 0 / 0 / 0 / 0 |
| "bauhaus", "geometric", "primary colors", "constructivist", "poster", "avant-garde" | Bauhaus | 0 / 0 / 0 / 0 |
| "futurism", "sci-fi", "retro sci-fi", "terminal", "cyberpunk", "hacker", "phosphor", "mono" | Futurism | 3 / 0 / 0 / 6 |
| "minimalist", "quiet luxury", "serif", "print", "understated", "gallery", "magazine", "fashion" | Minimalism | 0 / 0 / 0 / 0 |
| "brutalist", "raw", "concrete", "ugly on purpose", "anti-design", "unpolished", "exposed" | Brutalism | 1 / 0 / 0 / 0 |
| "maximalist", "ornate", "opulent", "abundance", "more is more", "memphis", "loud editorial" | Maximalism | 6 / 3 / 0 / 1 |

## Real-World References

- **Glassmorphism:** Apple Vision Pro UI, macOS Sonoma lock screen, Windows 11 Mica, Stripe dashboard, Linear modals.
- **Neubrutalism:** neobrutalism.dev, neobrutalism.com, the ekmas neobrutalism-components library, Gumroad's brand, Figma's community templates.
- **Bauhaus:** the Bauhaus Dessau archive, Josef Albers and Herbert Bayer posters, Bayer's Universal alphabet, Oskar Schlemmer's 1922 emblem, the bauhaus-dessau.de site.
- **Futurism:** scificn.dev / scificn-ui (Cassette Futurism component library), the Alien and Blade Runner interface language, mission-control dashboards, 1970s terminal UIs.
- **Minimalism:** shadcn/ui "Sera" theme (serif editorial preset), Aesop, Kinfolk, Cereal magazine, The Row, Leica, Muji.
- **Brutalism:** brutalistwebsites.com, RAW Magazine, Kunsthalle Zürich, Werkleitz Festival, Yves Tumor's site, the U.S. National Debt Clock, Disslist.
- **Maximalism:** the Memphis Group (Ettore Sottsass), Vogue editorial spreads, David Carson's Ray Gun, Gucci's maximalist creative direction, UAL art-school sites.
