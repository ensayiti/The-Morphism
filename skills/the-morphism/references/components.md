# Components — nav, footer, section, CTA

> The chrome (nav + footer) is part of the structural fingerprint, not optional decoration. Pick it alongside the macrostructure. The material decides the treatment; the archetype decides the shape.

The AI reaches for the same nav and footer on every page. That's a tell. Pick deliberately, and rotate: no two consecutive builds share the same nav or footer archetype.

---

## Navigation

**Default away from the AI nav** — wordmark hard-left, 4-5 inline links, CTA hard-right, sticky, hairline bottom. That shape is genre-blind. The nav should tell you what kind of site you're on.

**Routing by material:**

| Material | Lean to | Also fine |
|---|---|---|
| Glass | N5 Floating pill · N2 Floating chip | N1b, N9, N13 |
| Neubrutalism | N7 Brutal slab · N1b SaaS three-section | N8 Terminal, N9, N12 |

- **N1a · Wordmark + 2 links** — wordmark left, two text links right. The minimal bar. Reach for it only when the page genuinely has 2 destinations.
  - Glass: frosted bar on scroll. Neo: hard 3px bottom border, all-caps.
- **N1b · SaaS three-section** — wordmark-left · centred link cluster · CTA right. The canonical balanced bar.
  - Glass: frosts on scroll. Neo: a slab with a filled accent CTA.
- **N2 · Floating chip** — a small fixed chip in a corner: wordmark + one action. Out of document flow.
  - Glass: NATIVE — a detached frosted chip. Neo: a hard-shadow chip, square.
- **N5 · Floating pill** — a rounded pill, visibly detached from the page edges, blur + soft shadow.
  - Glass: NATIVE — the glass default. Neo: the pill is glass's language; a neo page rounds nothing.
- **N7 · Brutal slab** — full-width, 2–3px solid bottom border, all-caps wordmark, tracked uppercase links, no shadow, square.
  - Neo: NATIVE — the neo default. Glass: wrong material; a glass page shouldn't slab.
- **N8 · Terminal command** — the nav is a CLI prompt: `> studio --catalog --voice`. Links are flags.
  - Neo: NATIVE. Glass: a frosted terminal bar, rare but valid for dev tools.
- **N9 · Edge-aligned minimal** — wordmark hard-left, single CTA hard-right, nothing between. The absence is the design.
  - Glass: wordmark + CTA with a frosted hover. Neo: wordmark + hard-shadow CTA, vast empty space.
- **N12 · Banner + retracting nav** — a coloured promo banner stacked above the nav; retracts on scroll-down.
  - Neo: NATIVE (the banner is a flat accent band). Glass: a frosted banner over the nav.

---

## Footers

**Default away from the AI footer** — 4 link columns (Product · Company · Resources · Legal) + social row + tiny copyright. The footer closes the page; it doesn't catalogue an absent sitemap.

- **Ft1 · Mast-headed** — wordmark + tagline anchor a single band; two or three links beside.
- **Ft2 · Inline single line** — one line of credits, address, copyright; hairline above. No columns.
- **Ft4 · Dense colophon** — one block of small mono text: credits, references, licence. Editorial energy. Neo-native.
- **Ft5 · Statement** — one large display sentence dominates; wordmark and links sit muted beneath. Glass-native (the sentence floats).
- **Ft6 · Letter close** — closes like a letter: "Yours, the team." Optional postscript.
- **Ft7 · Newsletter first** — the form is the primary element; everything else is 12px muted type beneath.
- **Ft8 · Marquee scroll** — an infinite horizontal line of tagline + dot. Neo-native (loud, mechanical).
- **Ft3 · Index columns** — 3-4 link columns. Use ONLY on a genuine hub/docs root. Otherwise it's the AI footer.

---

## Section heads

The section head is where the templated-editorial tell lives. **Default OFF for eyebrows.** When a tag IS used, the heading stacks directly underneath it in the same column. The tag-left / heading-right two-column head is banned outright — the single most reliable templated tell.

- **S1 · Left-margin numbered** — ⚠️ opt-in only; never default. Number/label in a narrow left column.
- **S2 · Hanging** — the heading floats in negative space above the section; no rule, no border.
- **S3 · Sticky pinned** — the heading stays in view while content scrolls beneath. Orientation aid.
- **S4 · Inline no break** — a small-caps phrase emerging inside the body flow; no spatial break.
- **S5 · Bottom anchored** — the label sits below the content. Inverts hierarchy.

---

## CTA voice

- **C1 · Outlined chip** — bordered, transparent, typographic verb. Glass: frosted chip. Neo: hard-border chip.
- **C2 · Inline form as CTA** — the CTA is the form: one email input + "Submit →". No separate signup page.
- **C3 · Typographic link** — a word, an arrow, a 1px underline. No box. The quietest CTA, and often the strongest.
- **C4 · Sticky bottom bar** — a horizontal bar pinned to the viewport bottom, CTA + one reassurance line.

---

## Variation knobs

Picking the archetype is the first axis. The second is *how you build it*. Two pages on the same archetype still differ by knob value — e.g. Bento `tiles 4/6/7/9 · spans regular/irregular · accent corner-only/full-bleed`; Marquee `display size · alignment · underlay`. State the knob values in the macrostructure stamp. Same archetype + same knobs = the same build; change one.

---

## The rule

Nav, footer, and section heads are part of the page shape, not chrome. Pick them alongside the macrostructure, state them out loud (*"Nav: N5 Floating pill. Footer: Ft5 Statement."*), and never repeat the same nav or footer two builds in a row.
