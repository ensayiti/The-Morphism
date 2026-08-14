# Typography

Type carries the design. If the type is wrong, nothing else matters — especially on glass, where type sits on top of a blurred, variable background and has to hold its own.

## Principles

- A page is a **pairing, not a single font**. Display face + body face, minimum. Single-font pages are allowed only when the single font IS the choice (a true terminal aesthetic).
- **Commit to extremes.** Weight 200 next to weight 800 reads intentional. Weight 400 next to weight 600 reads like a default setting.
- **Size steps are ratios, not increments.** Major third (1.25) is the default. Pick one ratio and use it.
- **Line-height changes with size.** Tight for display (1.05–1.2), comfortable for body (1.5–1.65).
- **Measure lives between 45 and 75 characters.** Use `max-width: 65ch` as the default.

## The 2+1 rule — three faces is the ceiling

A page may use at most **three** font families: one **display**, one **body**, and an optional **outlier** for a single typographic moment — wordmark, hero stat, pull quote. Four families is slop. Two is canonical. Three is the ceiling.

```css
:root {
  --font-display:  "Outfit", ui-sans-serif, system-ui, sans-serif;   /* headings, hero */
  --font-body:     "Geist", ui-sans-serif, system-ui, sans;          /* prose, UI */
  --font-outlier:  "Geist Mono", ui-monospace, monospace;            /* wordmark + hero stat ONLY */
}
```

The outlier is a *register*, not a third surface:

- Outlier appears in **≤ 2 places** on the whole page (wordmark + hero stat, or pull quote + masthead). A third slot means you have a third body font, which is slop.
- The outlier carries one role. Once you know what it tags (the brand, the headline figure), every instance of that role uses it.
- Mono counts as a face. Display + body + mono-in-code = three families. Fine — code is the outlier role. Don't sneak in a fourth.
- Same family at different weights is one family, not two.

## Banned defaults

On-distribution for every LLM. Do not reach for these without a deliberate reason:

- **Sans:** Inter, Roboto, Open Sans, Lato, Poppins, Source Sans, Nunito, Montserrat, Raleway, Work Sans, DM Sans, system-ui, Arial, Helvetica.
- **Serif:** Merriweather, Playfair Display (body), Lora, Source Serif, Georgia-as-default. Playfair Display is banned only as a *body* face — as a display face it is the Minimalism style's signature serif.
- **Mono:** Courier New, Consolas-as-default, system mono.

If the user insists on one, do it. Otherwise pick from the allowlist below.

## The glass font catalog

**Recommended for glass — Geist, Outfit, Satoshi.** Crisp, modern, lets the material speak. Also fine: Plus Jakarta Sans, Space Grotesk, Sora.

**Recommended for neubrutalism — a loud display + a boring body.** Display: Syne, Space Grotesk, Bricolage Grotesque, Archivo Black (impact, heavy, tight). Body: Inter or Geist (calm, legible, "boring on purpose" — the bold gestures only work if the body stays quiet). Outlier: Space Mono or Geist Mono.

| Family | Source | Voice | Best for |
|---|---|---|---|
| **Geist** | Google | Modern grotesque, geometric, 7 weights | The default body/display for glass; neubrutalism body |
| **Outfit** | Google | Modern geometric | Restrained glass display |
| **Satoshi** | Fontshare | Playful geometric sans | Playful consumer glass |
| **Syne** | Google | Expressive display, 800 weight | Neubrutalism display |
| **Space Grotesk** | Google | Geometric, slightly quirky | Neubrutalism display / technical |
| **Bricolage Grotesque** | Google | Variable display, bold condensable | Neubrutalism display |
| **Archivo Black** | Google | Heavy grotesque, one weight | Neubrutalism hero moments |
| **Inter** | Google | Neutral, legible | Neubrutalism body (the one place it's allowed) |
| **Geist Mono** | Google | Geist's mono companion | Wordmark, hero stat, code |
| **Space Mono** | Google | Quirky, slightly retro | Neubrutalism outlier / captions |

## Scale

Pick a ratio — default **1.25** (major third). Build from a 16px body, then clamp display sizes for responsive.

```css
:root {
  --text-xs:   0.75rem;   /* 12px   */
  --text-sm:   0.875rem;  /* 14px   */
  --text-base: 1rem;      /* 16px   */
  --text-md:   1.25rem;   /* 20px   */
  --text-lg:   1.5625rem; /* 25px   */
  --text-xl:   1.9531rem; /* 31.25px */
  --text-2xl:  2.4414rem;
  --text-3xl:  3.0518rem;
  --text-display: clamp(2.5rem, 5vw + 1rem, 5rem);
}
```

- **Display max ≤ 5rem (80px)** on glass. Above that, a hero headline on a 1280–1440px viewport wraps into drama, not gravity. The exception: a single-line, single-word display ≤ 12 characters can reach 6rem.
- Use no more than **five sizes** on a page. If you need more hierarchy, use weight and colour, not another size.

### Hero headline sizing — match size to copy length

Count the characters in the rendered `h1`. Pick the cap by bucket:

| Headline length | Size cap |
|---|---|
| ≤ 20 chars | full `--text-display`; single word can reach 6rem |
| 21–50 chars (sweet spot) | `--text-display` |
| 51–90 chars | step down one rung; consider eyebrow + headline split |
| > 90 chars | rewrite shorter, or cap at `--text-2xl` with tighter leading |

A 100-character headline at display size is the single most reliable AI tell. When you write the headline yourself, aim for **≤ 7 words and ≤ 50 characters** from the start.

## Weights

- Body: one weight (400 or 350). Bold for emphasis only.
- Headings: contrast the body by at least **300 units**. Body 400 → headings 700 or 200, never 500 or 600.
- Never synthesise. Load the weight you need; don't rely on `font-weight: bold` against a single-weight file.

## Required features

- `font-display: swap` on every web font (next/font and @fontsource both do this).
- Tabular numbers on any data display: `font-variant-numeric: tabular-nums`.
- Proper typographic punctuation: `" " — … ‘ ’`. Never straight quotes, never `--` or `...`.
- Text over glass needs a `text-shadow` or scrim — see The Rules That Keep It Usable in SKILL.md.

## Body text rules

- Minimum 16px. Below 14px is accessibility-hostile.
- Line-height 1.5–1.65. Measure 45–75 characters (`max-width: 65ch`).
- Never all-caps body copy. Never justified text without hyphenation. Never letter-spacing above 0.05em on body.

## Headings rules

- Tight tracking on display (`letter-spacing: -0.02em` to `-0.04em`).
- Loose tracking on labels (`letter-spacing: 0.08em` to `0.14em`, uppercase).
- **No italic headers.** The single italicised emphasis-word inside an upright headline is a top AI tell. Headings are roman; emphasis comes from weight, accent colour, or a drawn underline. Italic survives only as body-copy emphasis.
- Skip no levels. `h1` → `h2` → `h3`, styled how you like, but semantic order intact.

## Bans

- No Inter, no Roboto, no Open Sans. No system stack as the only stack.
- No gradient text (`background-clip: text` with a gradient fill).
- No single-font pages (except the deliberate terminal exception).
- No all-caps paragraphs.
- No font-size below 14px for body, below 10px anywhere.
- No hard-synthesised bold or italic.
- No more than three families per page.
- No outlier face in more than two slots.
