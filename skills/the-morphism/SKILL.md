---
name: the-morphism
description: "The Glassmorphism skill. Frosted glass, blur, and translucent overlays done right — exact CSS recipes, Tailwind v4 equivalents, named anti-patterns, framework-agnostic. The agent reads the brief, sets three dials, and ships glass interfaces that don't look AI-generated. Zero em-dash, zero emoji-as-icon."
version: 3.0.0
author: XEM
license: MIT
metadata:
  hermes:
    tags: [frontend, design, glassmorphism, css, tailwindcss, anti-slop]
---

# The Morphism — Glassmorphism

> Frosted glass, done right. The agent reads the brief, sets three dials, and ships glass interfaces that don't look AI-generated.
> The CSS recipe is exact. The rules are opinionated. The bans are named. Everything else is taste — and taste is contextual.

---

## Read the Room

Most AI glass output is bad because the model reaches for the same purple gradient, three equal cards, and Inter on slate-900 before it even reads the brief. Don't.

### Before you touch code

Read the brief for five signals:

1. **What kind of page?** Landing page, dashboard, portfolio, product card, mobile shell, creative/agency, editorial, settings panel.
2. **What words did they use?** "glass", "frosted", "blur", "translucent", "premium", "layered" — Glassmorphism.
3. **Did they link something?** Reference URLs, screenshots, named products. macOS = frosted glass. Windows 11 = Mica. Linear modals = frosted glass. Apple Vision Pro = the high-translucency end of the spectrum.
4. **Who's the audience?** Design-forward consumers or enterprise buyers or accessibility-required users. A11y-critical audiences override high-translucency and low-contrast glass immediately.
5. **Does a brand already exist?** Logo, colors, type. Glass works WITH the brand or it's wrong.

### Say it out loud

Before any code, pause and state the Design Read — one sentence that sounds like a human said it:

*"Reading this as: a SaaS landing for technical founders, done as frosted glass — cool, precise, nothing extra."*
*"Reading this as: a premium product showcase for people who care about materials — floating glass over a rich gradient, layered, restrained."*
*"Reading this as: a music app player — a frosted nav bar over album art, translucent and responsive to the artwork behind it."*

The Design Read isn't a spec. It's a sentence. If you can't say it in one breath, you haven't read the room.

### If you're not sure, ask once

Exactly one question: *"Should this feel more like frosted glass (cool, premium, layered) or something solid (clean, flat, high-contrast)?"*

If you can confidently infer, don't ask. Declare the read and go.

### The defaults you will not reach for

Purple-to-blue gradients. Centered hero on dark mesh. Three equal feature cards with icons above headings. The same pill badge on every hero. Inter as the only font. Em-dashes as punctuation. Emoji as icons.

These are the LLM defaults. Every model reaches for them. You know better. The Design Read tells you what to reach for instead.

---

## The Three Dials

After the Design Read, set three dials. Every blur, radius, and layout decision in the recipe below is gated by these. Don't skip this — the dials are what turn "a glass card" into "THIS glass card."

* **`DEPTH: 5`** -- 1 = Completely flat (no shadows, no depth), 10 = Extreme 3D (heavy shadows, strong layering)
* **`SOFTNESS: 5`** -- 1 = Sharp / Crisp / Hard edges, 10 = Pillowy / Plush / Extreme rounding
* **`TRANSLUCENCY: 0`** -- 1 = Fully opaque (solid backgrounds), 10 = Fully transparent (glass, see-through). **WARNING: TRANSLUCENCY greater than 5 requires a11y fallbacks (see The Rules That Keep It Usable).**

**Glass baseline:** `5 / 4 / 8`.

### Use-Case Presets

| Use case | DEPTH | SOFTNESS | TRANSLUCENCY |
|---|---|---|---|
| SaaS landing (design-forward) | 5 | 4 | 8 |
| SaaS landing (enterprise/trust) | 3 | 3 | 5 |
| Hero card overlay (image bg) | 4 | 3 | 8 |
| Nav bar / toolbar | 4 | 3 | 7 |
| Modal / dialog | 5 | 4 | 8 |
| Product card | 5 | 4 | 7 |
| Settings panel | 3 | 4 | 6 |
| Public-sector / a11y-critical | 2 | 3 | 3 |

---

## The Recipe

This is the heart of the skill. One exact CSS recipe — not a suggestion, not a starting point. Start here, then tune the dials. Framework-agnostic CSS; Tailwind equivalents follow in the next section.

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

**When to use:** Rich background (gradients, images, video) behind the glass. The background IS the design; glass is the frame. Flat color behind glass defeats the purpose.

**When NOT to use:** Data-heavy dashboards, long-form text, or any surface where the background content must stay sharply readable. Say so explicitly if the brief pushes glass where it doesn't belong.

See `references/glass-landing-example.md` for a complete, build-verified glass landing page implementation (Nav, Hero, Features grid, CTA, Footer) with reusable `GlassCard` component and a11y fallback injection pattern.

See `references/gsap-setup.md` for the GSAP ScrollTrigger pattern — framework-agnostic with React, vanilla JS, and Astro examples.

---

## Tailwind Equivalents

Same recipe, Tailwind v4 utility classes. CSS-first config — no `tailwind.config.js`. Use `@tailwindcss/postcss` or the Vite plugin.

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
Preserving: font stack, icon library. I'll introduce: glass surfaces, GSAP for scroll.
```

If the user says "ignore the existing project," skip this. Otherwise, the scan is non-negotiable.

---

## The Toolbox

### Framework
- **Any framework** with TailwindCSS v4: Next.js, Astro, Vite + React, Svelte, Remix, or plain HTML. The CSS recipe above is pure CSS — it works everywhere. Tailwind utility equivalents use standard classes (no framework lock-in).
- **Tailwind v4 notes:** CSS-first config. Use `@tailwindcss/postcss` or Vite plugin. No `tailwind.config.js`. Dark mode via `dark:` variant. Container queries and arbitrary values work natively.
- **Font loading by framework:**
  - **Next.js:** `next/font/google` for automatic subsetting and `font-display: swap`.
  - **Astro / Vite / Svelte / Remix:** `@fontsource` packages (e.g. `@fontsource/geist-sans`) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production.
- **Motion (mount animations):** Works with any React-compatible framework (Next.js, Vite + React, Remix). Import from `motion/react`. Use for: on-mount entrance animations (hero headlines, nav, initial load). For non-React frameworks (Astro, Svelte, plain HTML), use CSS `@keyframes` + `animation` or the Web Animations API (`element.animate()`) for mount effects.
- **GSAP + ScrollTrigger (scroll animations):** Framework-agnostic. Use for: scroll-driven reveals (features grids, CTAs, demo panels, parallax, staggered card entrances). In React: `useRef` + `gsap.context()` + cleanup in `useEffect`. See `references/gsap-setup.md` for patterns across frameworks.
- **The split:** Motion (or CSS animations) for mount, GSAP+ScrollTrigger for scroll. Never use GSAP for on-mount — it's heavier and imperative; Motion and CSS are declarative and simpler for that job.

**Design token const pattern.** Glass Tailwind class strings get long and are repeated across many surfaces (cards, buttons, inputs, tags). Centralize all style tokens into a single `const TOKENS` object at the top of the component file:

```tsx
const GLASS = {
  card: "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shadow-lg dark:bg-slate-900/35 dark:border-white/10",
  btn: "rounded-xl px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-colors",
  text: "text-gray-900 dark:text-gray-100",
  textMuted: "text-gray-600 dark:text-gray-400",
}
```

Then reference tokens with template literals: `className={GLASS.card}`, `className={[GLASS.btn, "flex-1"].join(" ")}`. Benefits: (a) every element stays on the same recipe, (b) tuning a dial means changing one value and every element updates, (c) the file is scannable instead of 150-line class strings on every div. For pages with only one or two glass surfaces, inline classes are fine.

### Fonts (shadcn/ui ecosystem)
- **Next.js:** Use `next/font/google` for automatic subsetting and `font-display: swap`.
- **Other frameworks (Astro, Vite, Svelte, Remix):** Use `@fontsource` packages (e.g. `npm install @fontsource/geist-sans`) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production.

**Recommended for glass:** Geist, Outfit, Satoshi (crisp, modern — lets the material speak). Also fine: Plus Jakarta Sans, DM Sans, Space Grotesk.

**Available typefaces:**
- **Default:** Geist Sans + Geist Mono (shadcn/ui default)
- **Sans-serif options:** Inter, Outfit, Plus Jakarta Sans, DM Sans, Manrope, Space Grotesk, Public Sans, Work Sans
- **Display / wide:** Sora, Clash Display, Cabinet Grotesk (self-host), Satoshi (self-host)
- **Mono options:** Geist Mono, JetBrains Mono, Fira Code, IBM Plex Mono, Space Mono
- **Serif options:** Newsreader, Playfair Display, Lora, Merriweather, EB Garamond

### Icons
**Allowed libraries (pick one per project):**
- `lucide-react` -- clean, consistent, most popular with shadcn/ui
- `@phosphor-icons/react` -- extensive, multiple weights (Thin through Fill)
- `@tabler/icons-react` -- sharp, technical, good for dashboards

**Recommended for glass:** Lucide (Regular) or Phosphor (Regular) — crisp glyphs that read cleanly over translucency.

**Rules:**
- One icon family per project. Do not mix Lucide with Phosphor in the same tree.
- Standardize `strokeWidth` globally (1.5 or 2.0).
- NEVER hand-roll SVG icon paths. If a glyph is missing, install a second library.

**PITFALL: lucide-react 1.x removed all brand icons.** `Github`, `Twitter`, `Facebook`, `Linkedin`, `Youtube`, `Instagram`, `Slack`, `Discord`, `Twitch`, and similar brand-name exports do NOT exist in lucide-react 1.0+. Build will fail with "Export X doesn't exist in target module" and a "Did you mean to import ...?" suggestion for an unrelated icon. The fix is NOT to guess another name -- use generic icons instead: `Globe`, `MessageCircle`, `Link`, `AtSign`, `Rss`, `ExternalLink`, `Share2`. If brand recognition is essential, fall back to Phosphor (which retains brand icons) or use inline SVG from simple-icons.

### Responsiveness
- `min-h-[100dvh]` -- NEVER `h-screen` (iOS Safari address bar collapse).
- CSS Grid over flexbox math (`grid grid-cols-1 md:grid-cols-3 gap-6`).
- Glass effects MUST degrade gracefully on mobile: fewer shadow layers, simpler blur.
- Standard breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.

---

## The Rules That Keep It Usable

Glass is an a11y trap. These rules are mandatory — skip them and you shipped broken work.

### Contrast
- Glass text over variable backgrounds MUST have a text-shadow or subtle scrim. A bright spot in the background image directly behind text will wipe it out.
- Light mode near-black, dark mode near-white text. No exceptions on glass.
- Any colored accent text over glass must pass 4.5:1 against the worst-case background behind it.

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
Every glass element MUST ship a solid fallback. Never ship glass without it.

### Focus States
- Glass: `outline: 2px solid rgba(255,255,255,0.8);` on dark backgrounds, `outline: 2px solid rgba(0,0,0,0.6);` on light backgrounds.
- Never rely on shadow change alone for focus. A visible outline ring is mandatory.

---

## The Things We Don't Do

### The Universal Tells

**THE STYLE MASH-UP.** Glass nav bar + neumorphic cards + clay buttons on one page. This is the #1 AI tell — the model used every trick it knows at once. Glass is the only material on the page. If a button wants to be clay, it's wrong.

**THE PILL BADGE.** `rounded-full bg-white/10 backdrop-blur-md border px-4 py-1.5` — a frosted-glass chip with a tiny icon, usually saying "New in beta" or "Now available." This exact pattern appears in nearly every AI-generated glass hero. Replace with bare text: `flex items-center gap-2 text-sm font-medium tracking-wide text-white/60` plus the icon. No background wrapper. The icon carries the weight.

**THE EM-DASH.** Completely banned. In headlines, body, captions, buttons — anywhere the user can see it. Use a period, comma, or hyphen. Not an en-dash either. Just a regular hyphen.

**EMOJI AS ICONS.** Banned. Use icon library glyphs. Emoji only when the user explicitly asks for a playful/social-native vibe, and sparingly even then.

**INTER-BY-DEFAULT.** Inter on glass reads as "I didn't think about type." Pick a font with a pulse — see the Fonts section under The Toolbox. Geist, Outfit, or Satoshi for glass.

**AI COPY CLICHES.** "Elevate." "Seamless." "Unleash." "Next-Gen." "Game-changer." "Delve." "Revolutionize." These are not words — they're the model filling space because it doesn't know what the product does. Write plain, specific language. If the brief gave you nothing, say so and ask for one concrete noun.

**JOHN DOE SYNDROME.** "John Doe." "Acme Corp." "Lorem Ipsum." Generic placeholder names announce "this was generated." Use realistic, contextual content that could actually belong to the brief.

**MORPHISM WITHOUT FALLBACK.** Glass without `prefers-reduced-transparency` solid fill. If removing the effect makes the element invisible, the design fails.

**H-SCREEN.** Never use `h-screen`. Always `min-h-[100dvh]`. iOS Safari's address bar will break your hero every time.

**SHADOW STACKING.** Max 4 box-shadow declarations per element. Beyond that it's a performance hit and reads as trying too hard.

### Glassmorphism Tells
- **Glass without blur.** `background: rgba(255,255,255,0.5)` without `backdrop-filter` is NOT glassmorphism. It's a transparent rectangle that makes background content unreadable.
- **Glass over busy images without text protection.** Add `text-shadow` or a subtle scrim behind text.
- **Glass on glass on glass.** Max 2 layers of glass overlaid. Three layers = unreadable soup.
- **`backdrop-filter` without `-webkit-backdrop-filter`.** Safari needs the prefix.
- **Glass over a flat background.** A solid color behind glass defeats the purpose — there's nothing to blur. The background must be rich: gradient, image, or video.
- **Glass on a data-heavy surface.** Tables and long text go solid. Glass is for frames, heroes, navs, and cards.

---

## How Things Move

**Mount animations** (Motion or CSS `@keyframes`): hero headlines, nav entrance, on-load fades. **Scroll animations** (GSAP ScrollTrigger): features grids, CTAs, demo panels, staggered reveals, parallax.

**Glass motion character:** smooth, elegant, floating.

| Channel | Timing |
|---|---|
| Mount | `duration-500 ease-out`. Hover: `scale(1.02)` + increased blur |
| Scroll | Staggered card reveals (`delay: i * 0.1`), CTA scale-up (`scale: 0.97 -> 1`) |

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

## Color

- **Background behind glass:** rich and varied (gradients, images, video). This is the most important color decision on the page — the glass only works if there's something worth blurring.
- **Glass transparency:** light mode `rgba(255,255,255,0.10-0.25)`, dark mode `rgba(15,23,42,0.30-0.55)`.
- **Text:** high contrast. Light mode near-black, dark mode near-white.
- **Accent:** one vibrant color (electric blue, emerald, deep rose). Pick one and stay consistent.

---

## Don't Build the Same Page Twice

Two briefs should produce two different page rhythms — not the same hero→features→CTA→footer template with a different color palette. This is the single most important rule and the one most agents break.

### The rhythm rule

If your last build used a full-viewport glass hero with a staggered 3-column feature grid, this build must use a different macro-rhythm. Change at least two of:

- **Hero shape** — full-viewport vs. split-screen vs. content-led vs. no hero at all
- **Section sequence** — features→CTA→testimonials vs. manifesto→grid→footer vs. single-scroll narrative
- **Card structure** — 3-column equal grid vs. alternating 2-column vs. bento vs. no cards at all
- **Nav personality** — sticky glass bar vs. hidden hamburger vs. edge-aligned minimal
- **Footer shape** — 4-column directory vs. single-line statement vs. letter-close vs. marquee

### Track what you built

After every build, note the rhythm in plain text. The agent should remember the last page's shape and deliberately deviate. If you built a glass landing page yesterday with full-viewport hero + 3-card features + CTA + 4-column footer, today's build should have a split-screen hero + manifesto section + grid + single-line footer. Same skill, different skeleton.

If the brief genuinely calls for the same rhythm ("another glass landing page, same company, different product"), keep the skeleton but change the hero shape and the section sequence. Same language, different sentence structure.

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

### Glass copy voice

Precise, modern, one level cooler than the reader. "The API for developers who ship on Fridays."

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

### Style Selection
- [ ] **Design Read** declared (see Read the Room)?
- [ ] **Dial values** set (glass baseline `5 / 4 / 8` unless overridden)?

### Accessibility (CRITICAL)
- [ ] **Contrast check:** all text on glass has 4.5:1 contrast, with text-shadow or scrim over busy backgrounds?
- [ ] **Glass fallback:** `prefers-reduced-transparency` solid-fill provided?
- [ ] **Reduced motion:** `prefers-reduced-motion` disables all ambient animations?
- [ ] **Focus states:** all interactive elements have visible focus rings?

### Glass-Specific
- [ ] **`backdrop-filter` AND `-webkit-backdrop-filter`** both present?
- [ ] **Rich background** behind the glass (gradient, image, or video) — not flat color?
- [ ] **Max 2 glass layers** overlaid?
- [ ] **Dark mode** variant shipped alongside light mode?

### Code Quality
- [ ] **No `h-screen`** -- using `min-h-[100dvh]`?
- [ ] **CSS Grid** over flexbox math?
- [ ] **Max 4 box-shadow declarations** per element?
- [ ] **Mobile responsive:** effects degrade gracefully?

### Anti-Slop
- [ ] **Zero em-dashes (`--`)** anywhere visible to the user?
- [ ] **Zero emoji as icons** (unless user explicitly requested)?
- [ ] **No AI copy cliches** ("Elevate", "Seamless", "Unleash", etc.)?
- [ ] **No generic placeholders** ("John Doe", "Acme Corp", "Lorem Ipsum")?
- [ ] **No pill badge** (`rounded-full bg-white/10 backdrop-blur ...`) -- bare text label + icon only?
- [ ] **Font is NOT Inter** (Geist, Outfit, or Satoshi for glass)?
- [ ] **No mixing styles** — glass is the only material on the page?
- [ ] **Different page rhythm** than the last build (see Don't Build the Same Page Twice)?
- [ ] **Copy self-audited** — no banned opening lines, no invented metrics?

---

## Out of Scope

This skill is NOT for:
- Pure flat design with zero depth or aesthetic character (use a different skill).
- Other morphism styles (Neumorphism, Claymorphism, Brutalism, etc.) — this skill is Glassmorphism only.
- 3D WebGL/Three.js scenes (this skill is CSS-only depth).
- Native mobile (use platform HIG: Material Design, Apple HIG).
- Print design or non-web surfaces.
- Data visualization libraries (D3, Chart.js, etc.).

If the brief is out of scope, **say so** and recommend the right approach.

---

## Quick Reference

| User says... | Dial preset |
|---|---|
| "glass", "frosted", "transparent", "blur background" | 5 / 4 / 8 |
| "premium", "layered", "spatial", "translucent" | 5 / 4 / 8 |
| "clean glass", "subtle frosted", "enterprise glass" | 3 / 3 / 5 |

## Real-World References

- **Glassmorphism:** Apple Vision Pro UI, macOS Sonoma lock screen, Windows 11 Mica, Stripe dashboard, Linear modals.
