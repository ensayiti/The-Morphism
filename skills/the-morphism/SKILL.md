---
name: the-morphism
description: "Anti-slop morphism & aesthetic design skill for Hermes Agent. Glassmorphism and Neubrutalism — exact CSS recipes, a motion system, a typographic scale, and named anti-patterns. The agent reads the brief, picks the right style, and ships interfaces that don't look AI-generated. Zero em-dash, zero emoji-as-icon."
version: 3.3.0
author: XEM
license: MIT
metadata:
  hermes:
    tags: [frontend, design, glassmorphism, neubrutalism, brutalism, css, tailwindcss, anti-slop]
---

# The Morphism

> Two aesthetic styles. One page, one style. The agent reads the brief, picks the right language, and ships interfaces that don't look AI-generated.
> The recipes are exact. The rules are opinionated. The bans are named. Everything else is taste — and taste is contextual.

---

## Read the Room

Most AI design output is bad because the model reaches for the same purple gradient, three equal cards, and Inter on slate-900 before it even reads the brief. Don't.

### Before you touch code

Read the brief for five signals:

1. **What kind of page?** Landing page, dashboard, portfolio, product card, mobile shell, creative/agency, editorial, settings panel.
2. **What words did they use?** "glass", "frosted", "blur", "translucent", "premium", "layered" — Glassmorphism. "neubrutalist", "brutalist", "bold", "hard shadows", "thick borders", "blocky", "playful", "loud", "colorful" — Neubrutalism.
3. **Did they link something?** Reference URLs, screenshots, named products. macOS = frosted glass. Windows 11 = Mica. Linear modals = frosted glass. neobrutalism.dev / neubrutalism.com = the neubrutalist grammar. Apple Vision Pro = the high-translucency end of glass.
4. **Who's the audience?** Design-forward consumers or enterprise buyers or accessibility-required users. A11y-critical audiences override high-translucency glass immediately. Neubrutalism's loud personality is wrong for trust-first surfaces (healthcare, fintech, government).
5. **Does a brand already exist?** Logo, colors, type. The style works WITH the brand or it's wrong.

### Say it out loud

Before any code, pause and state the Design Read — one sentence that sounds like a human said it:

*"Reading this as: a SaaS landing for technical founders, done as frosted glass — cool, precise, nothing extra."*
*"Reading this as: a premium product showcase for people who care about materials — floating glass over a rich gradient, layered, restrained."*
*"Reading this as: a dev-tool startup that wants to feel like a sticker pack — Neubrutalism, thick black borders, hard offset shadows, flat loud color."*
*"Reading this as: an ed-tech brand that should feel playful and unmissable — Neubrutalism, bold type, square corners, one saturated accent."*

The Design Read isn't a spec. It's a sentence. If you can't say it in one breath, you haven't read the room.

### If you're not sure, ask once

Exactly one question: *"Should this feel more like frosted glass (cool, premium, layered) or neubrutalist (bold, blocky, hard shadows and flat color)?"*

If you can confidently infer, don't ask. Declare the read and go.

### The defaults you will not reach for

Purple-to-blue gradients. Centered hero on dark mesh. Three equal feature cards with icons above headings. The same pill badge on every hero. Inter as the only font. Em-dashes as punctuation. Emoji as icons.

These are the LLM defaults. Every model reaches for them. You know better. The Design Read tells you what to reach for instead.

---

## The Three Dials

After the Design Read, set three dials. Every blur, radius, shadow, and layout decision in the recipes below is gated by these. Don't skip this — the dials are what turn "a glass card" into "THIS glass card."

* **`DEPTH: 5`** -- 1 = Completely flat (no shadows, no depth), 10 = Extreme 3D (heavy shadows, strong layering)
* **`SOFTNESS: 5`** -- 1 = Sharp / Crisp / Hard edges, 10 = Pillowy / Plush / Extreme rounding
* **`TRANSLUCENCY: 0`** -- 1 = Fully opaque (solid backgrounds), 10 = Fully transparent (glass, see-through). **WARNING: TRANSLUCENCY greater than 5 requires a11y fallbacks (see The Rules That Keep It Usable).**

### Style to Dial Presets

| Style | DEPTH | SOFTNESS | TRANSLUCENCY | Best for |
|---|---|---|---|---|
| **Glassmorphism** | 4-6 | 3-5 | 7-10 | SaaS landing, hero overlays, nav bars, modals, premium product cards |
| **Neubrutalism** | 5-7 | 0-1 | 0 | Portfolios, dev tools, startups, ed-tech, playful brands, design agencies |

### Use-Case Presets

| Use case | Style | DEPTH | SOFTNESS | TRANSLUCENCY |
|---|---|---|---|---|
| SaaS landing (design-forward) | Glassmorphism | 5 | 4 | 8 |
| SaaS landing (enterprise/trust) | Glassmorphism | 3 | 3 | 5 |
| Hero card overlay (image bg) | Glassmorphism | 4 | 3 | 8 |
| Nav bar / toolbar | Glassmorphism | 4 | 3 | 7 |
| Modal / dialog | Glassmorphism | 5 | 4 | 8 |
| Product card | Glassmorphism | 5 | 4 | 7 |
| Settings panel | Glassmorphism | 3 | 4 | 6 |
| Public-sector / a11y-critical | Glassmorphism | 2 | 3 | 3 |
| Developer tool / startup | Neubrutalism | 6 | 1 | 0 |
| Portfolio (designer) | Neubrutalism | 6 | 0 | 0 |
| Ed-tech / playful brand | Neubrutalism | 6 | 1 | 0 |
| Creative agency | Neubrutalism | 7 | 0 | 0 |

---

## Pick the Macrostructure First

The material (glass or neubrutalism) dresses the shape — it does not choose it. After the Design Read and the dials, pick the page SHAPE before you touch the recipe. A macrostructure is a complete page skeleton (Bento Grid, Marquee Hero, Split Diptych, Stat-Led, Manifesto, Long Document, Workbench, Quote-Led, Photographic, Catalogue, Letter, Portfolio Grid) — heading placement, body composition, divider, button voice, image treatment, reveal — bundled as one named choice.

- Pick one from `references/macrostructures.md` and state it out loud: *"Macrostructure: Bento Grid. Material: glass."*
- **Refuse the last three.** No two consecutive builds in the same project share a macrostructure. Pick from a categorically different family (grid-led vs document-led vs poster-led).
- Pick the nav and footer archetypes alongside it — see `references/components.md`. They are the fingerprint, not chrome. **Default away from the AI nav (wordmark + 4 centred links + CTA) and the AI footer (4 columns + social row + tiny copyright).**

---

## The Recipes

This is the heart of the skill. Two exact CSS recipes — not suggestions, not starting points. Start here, then tune the dials. Framework-agnostic CSS; Tailwind equivalents follow in the next section.

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

**Neubrutalism is NOT Brutalism.** Brutalism is raw, monochrome, and anti-conventional. Neubrutalism is colorful, playful, and productized — it borrows brutalism's bluntness but keeps a modern, usable UI grammar. If the brief says "brutalist, raw, ugly on purpose," that is not this style; flag the distinction and ask which they mean.

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

## Scan the Project First

Before you generate anything, read what's already there. Stomping on an existing font stack or palette with your defaults is the fastest way to make the user uninstall this skill.

Check these four things in order:

1. **package.json** — what framework? Next.js, Astro, Vite, Svelte, Remix, or vanilla? What motion library is installed (motion, gsap, framer-motion)?
2. **Font stack** — is `next/font` importing Geist? Is `@fontsource` pulling Inter? Is there a `tailwind.config` with `theme.extend.fontFamily`? Whatever is there, preserve it.
3. **Palette** — any `:root` CSS custom properties? OKLCH values in global CSS? Tailwind `@theme` block with color tokens? Don't overwrite them.
4. **Icons** — `lucide-react` or `@phosphor-icons/react` in dependencies? Use what's installed. Don't install a second library mid-session.

State what you found in one line before the Design Read. If the project is empty, say so and proceed.

```
Found: Next.js + Tailwind v4, Geist Sans via next/font, lucide-react, no motion lib.
Preserving: font stack, icon library. I'll introduce: the style surfaces, GSAP for scroll.
```

If the user says "ignore the existing project," skip this. Otherwise, the scan is non-negotiable.

---

## The Toolbox

### Framework
- **Any framework** with TailwindCSS v4: Next.js, Astro, Vite + React, Svelte, Remix, or plain HTML. The CSS recipes above are pure CSS — they work everywhere. Tailwind utility equivalents use standard classes (no framework lock-in).
- **Tailwind v4 notes:** CSS-first config. Use `@tailwindcss/postcss` or Vite plugin. No `tailwind.config.js`. Dark mode via `dark:` variant. Container queries and arbitrary values work natively.
- **Font loading by framework:**
  - **Next.js:** `next/font/google` for automatic subsetting and `font-display: swap`.
  - **Astro / Vite / Svelte / Remix:** `@fontsource` packages (e.g. `@fontsource/geist-sans`) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production.
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

### Fonts (shadcn/ui ecosystem)
- **Next.js:** Use `next/font/google` for automatic subsetting and `font-display: swap`.
- **Other frameworks (Astro, Vite, Svelte, Remix):** Use `@fontsource` packages (e.g. `npm install @fontsource/geist-sans`) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production.

**Recommended by style:**
- **Glassmorphism:** Geist, Outfit, Satoshi (crisp, modern — lets the material speak).
- **Neubrutalism:** Syne, Space Grotesk, Bricolage Grotesque, Archivo Black for display; Inter or Geist for body (calm, boring on purpose); Space Mono or Geist Mono for the outlier.

**Available typefaces:**
- **Default:** Geist Sans + Geist Mono (shadcn/ui default)
- **Sans-serif options:** Inter, Outfit, Plus Jakarta Sans, DM Sans, Manrope, Space Grotesk, Public Sans, Work Sans
- **Display / wide:** Sora, Syne, Archivo Black, Bricolage Grotesque, Clash Display, Cabinet Grotesk (self-host), Satoshi (self-host)
- **Mono options:** Geist Mono, JetBrains Mono, Fira Code, IBM Plex Mono, Space Mono
- **Serif options:** Newsreader, Playfair Display, Lora, Merriweather, EB Garamond

For the full type system — the 2+1 rule, the ratio-based scale, measure (45–75ch), weight contrast, and hero-headline-length sizing — see `references/typography.md`. For the spacing scale, z-index scale, grid rules, and the "one layout family per page" rule — see `references/layout.md`.

### Icons
**Allowed libraries (pick one per project):**
- `lucide-react` -- clean, consistent, most popular with shadcn/ui
- `@phosphor-icons/react` -- extensive, multiple weights (Thin through Fill)
- `@tabler/icons-react` -- sharp, technical, good for dashboards

**Recommended by style:** Glassmorphism — Lucide (Regular) or Phosphor (Regular), crisp glyphs that read cleanly over translucency. Neubrutalism — Phosphor (Bold) or Lucide with `strokeWidth={2.5}`, chunky glyphs that match the thick borders.

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

Both styles are a11y traps in different ways. These rules are mandatory — skip them and you shipped broken work.

### Contrast
- **Glass:** text over variable backgrounds MUST have a text-shadow or subtle scrim. A bright spot in the background image directly behind text will wipe it out. Light mode near-black, dark mode near-white.
- **Neubrutalism:** flat color is the point, so contrast is explicit — but it must still be checked. Yellow-on-white fails. Use yellow as a *fill* with black text, never yellow *text*. Body text needs 4.5:1; "loud" is not an excuse for inaccessible.
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
Every glass element MUST ship a solid fallback. Never ship glass without it. (Neubrutalism is opaque by definition — this rule is glass-only.)

### Focus States
- **Glass:** `outline: 2px solid rgba(255,255,255,0.8);` on dark backgrounds, `outline: 2px solid rgba(0,0,0,0.6);` on light backgrounds.
- **Neubrutalism:** `outline: 3px solid #000; outline-offset: 2px;` — thick and mechanical, matching the border weight. In Tailwind, `outline-3` does NOT exist (the scale is 0/1/2/4/8) — use `ring-2 ring-black ring-offset-2` or `outline-[3px] outline-black outline-offset-2`. Note the asymmetry: `border-3` IS valid in Tailwind v4, `outline-3` is not.
- Never rely on shadow change alone for focus. A visible outline ring is mandatory.

---

## The Things We Don't Do

### The Universal Tells

**THE STYLE MASH-UP.** Glass nav bar + neubrutalist cards + clay buttons on one page. This is the #1 AI tell — the model used every trick it knows at once. Pick one style. The whole page gets that style.

**THE PILL BADGE.** `rounded-full bg-white/10 backdrop-blur-md border px-4 py-1.5` — a frosted-glass chip with a tiny icon, usually saying "New in beta" or "Now available." This exact pattern appears in nearly every AI-generated glass hero. Replace with bare text: `flex items-center gap-2 text-sm font-medium tracking-wide text-white/60` plus the icon. No background wrapper. The icon carries the weight.

**THE EM-DASH.** Completely banned. In headlines, body, captions, buttons — anywhere the user can see it. Use a period, comma, or hyphen. Not an en-dash either. Just a regular hyphen.

**EMOJI AS ICONS.** Banned. Use icon library glyphs. Emoji only when the user explicitly asks for a playful/social-native vibe, and sparingly even then.

**INTER-BY-DEFAULT.** Inter as the only font on a page reads as "I didn't think about type." For glass, pick a font with a pulse — Geist, Outfit, or Satoshi. (Neubrutalism is the one exception: Inter is fine as the *body* face there, because the body should be boring on purpose — but the display face must still be loud, e.g. Syne or Space Grotesk.)

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
- [ ] **Dial values** set (glass `5 / 4 / 8`, neubrutalism `6 / 1 / 0`, unless overridden)?
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
- [ ] **Font is not Inter-by-default** (glass: Geist/Outfit/Satoshi; neubrutalism: loud display face)?
- [ ] **No mixing styles** on one page?
- [ ] **Different page rhythm** than the last build (see Don't Build the Same Page Twice)?
- [ ] **Copy self-audited** — no banned opening lines, no invented metrics?
- [ ] **No `transition-all`** — properties named explicitly?
- [ ] **No gradient text, italic headers, or invented metrics**?

---

## Out of Scope

This skill is NOT for:
- Pure flat design with zero depth or aesthetic character (use a different skill).
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
| "glass", "frosted", "transparent", "blur background" | Glassmorphism | 5 / 4 / 8 |
| "premium", "layered", "spatial", "translucent" | Glassmorphism | 5 / 4 / 8 |
| "clean glass", "subtle frosted", "enterprise glass" | Glassmorphism | 3 / 3 / 5 |
| "neubrutalist", "neobrutalism", "hard shadows", "thick borders" | Neubrutalism | 6 / 1 / 0 |
| "bold", "blocky", "playful", "loud", "colorful", "sticker" | Neubrutalism | 6 / 0 / 0 |

## Real-World References

- **Glassmorphism:** Apple Vision Pro UI, macOS Sonoma lock screen, Windows 11 Mica, Stripe dashboard, Linear modals.
- **Neubrutalism:** neobrutalism.dev, neubrutalism.com, the ekmas neobrutalism-components library, Gumroad's brand, Figma's community templates.
