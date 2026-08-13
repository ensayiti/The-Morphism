# Layout and space

Layout is where "AI-generated" gets caught — equal columns, everything centred, every card identical, every gap 24px. These are the tells. Glass makes it worse: if every surface is a same-sized frosted rectangle, the page is a template with a blur filter.

## Principles

- A layout has a **primary axis** — left-biased, right-biased, top-heavy, or bottom-weighted. Centre-biased is a default, not a choice.
- **Asymmetry reads as intentional; symmetry reads as generated.** When in doubt, shift.
- **Spacing is a scale, not a value.** Pick one scale. Use it everywhere. Don't type raw px.
- **Varied spacing.** If every gap is 24px, the page is a template. Mix small, medium, and large gaps within the same layout.
- **Break the grid on purpose.** One element crossing a column boundary is stronger than a page that never does.

## The spacing scale

4pt base. Nine steps. Named by role, not size.

```css
:root {
  --space-3xs: 0.125rem;  /*  2px */
  --space-2xs: 0.25rem;   /*  4px */
  --space-xs:  0.5rem;    /*  8px */
  --space-sm:  0.75rem;   /* 12px */
  --space-md:  1rem;      /* 16px */
  --space-lg:  1.5rem;    /* 24px */
  --space-xl:  2.5rem;    /* 40px */
  --space-2xl: 4rem;      /* 64px */
  --space-3xl: 6rem;      /* 96px */
  --space-4xl: 9rem;      /* 144px */
}
```

- Use `gap` for sibling spacing. Cleaner than stacked margins, participates in flex/grid, collapses predictably.
- Use `margin` only for optical adjustments or breaking out of the flow. Never margin for a list of siblings.
- In Tailwind this is already `gap-*` / `p-*` / `space-y-*` — the rule is the same: pick a scale, stay on it, and vary it.

## Grids

- **CSS Grid** for page layout, **Flexbox** for component internals.
- `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` for fluid responsive grids without media queries.
- **Never default to 3 equal columns of icon-above-heading-above-copy.** This is *the* AI feature grid. Break it: vary column widths (`1.2fr 1fr 0.8fr`), use a 12-column underlying grid with different spans, or go 4-up with a 2-span hero.
- Use **named grid areas** for complex layouts, renamed at breakpoints.

## Asymmetry techniques

- **Wide left margin.** Narrow column of labels, wide column of content.
- **Offset grids.** Odd columns wider than even, or the reverse.
- **Grid-breaks.** One element that deliberately extends past a column boundary — a pull-quote, a number, a rule.
- **Generous top, tight bottom** (or vice-versa). Sections don't need to be evenly padded.
- **Alignment coherence.** A section head's alignment should match the body it introduces, or break from it on purpose. What reads as an AI mistake is the *accidental* mismatch — a narrow centred head floating over full-width left-flush content.

## Depth

Glass already carries depth through translucency and blur. Don't stack more depth on top.

- **Depth is weight and scale, not shadow.** A heavier weight, a larger size, a warmer hue create hierarchy better than drop shadows.
- If you use shadow, use one:
  - **Whisper** — `0 1px 2px rgba(0,0,0,0.05)` for hovering cards.
  - **Hairline** — `0 0 0 1px rgba(0,0,0,0.06)` as an alternative to a 1px border.
- Never stack multiple shadows (the glass recipe's inset-highlight + drop-shadow is the one deliberate exception — it's the glass edge). Max 4 box-shadow declarations total.
- Never a coloured glow on a light background. Shadow-on-dark creates a glow; that's wrong.

**Neubrutalism depth is different.** It uses hard, offset shadows (`5px 5px 0 0 #000`) — anti-naturalistic elevation, like printed layers that don't align. The z-axis must stay predictable: use the three-tier system (small 3px / medium 5px / large 8px) and don't give every element the same tier, or hierarchy collapses.

## Z-index — six named levels

Don't freestyle numbers.

```css
:root {
  --z-base:     1;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-modal:    400;
  --z-toast:    500;
}
```

For glass, the grain/noise overlay sits at `--z-toast` (above content, `pointer-events-none`), the nav at `--z-sticky`. If you use grain, rasterize it to a tiny repeating tile and don't animate content beneath it — a live `feTurbulence` overlay forces a full-viewport recomposite every frame (see `motion.md` → Performance).

## One layout family per page

Once you use a layout family for a section (3-column image cards, full-width quote, split text/image), that family can appear **at most once** on the page. A landing page with 8 sections must use at least 4 different layout families. Two sections that share a family must be re-composed. (This is the structural-variety rule from SKILL.md, applied at the section level.)

## Page-edge clipping

Deliberately overflowing elements (full-bleed marquee, oversized headline) need a global clip or the page scrolls horizontally. Pair with:

```css
html { overflow-x: clip; }
body { overflow-x: clip; }   /* fallback for older Safari */
```

Use `clip`, not `hidden` — `clip` preserves `position: sticky` and `position: fixed` on descendants; `hidden` creates a new scroll container and breaks sticky.

## Bans

- **Centre-aligned everything.** Headings + body + CTA all centred is the landing-page template every LLM emits.
- **`min-height: 100vh` hero with one centred sentence.** Stop. (`min-h-[100dvh]` is fine; a single centred sentence is not.)
- **Card-in-card.** A bordered container inside a bordered container. Pick one.
- **Identical feature grid.** Three columns, three icons, three two-line headings, three three-line bodies. Change something.
- **Equal padding on everything.** If card padding = section padding = page padding, the rhythm is flat.
- **`z-index: 9999`** and other ad-hoc values. Use the scale.
- **Shadow-on-dark glow.** A drop shadow on a dark card creates a glow; wrong.

## When in doubt

If the layout looks fine but flat, do one of these before shipping:

1. Add one break-out element.
2. Unbalance a column width.
3. Move the primary CTA out of the centre.
4. Remove a card and replace it with negative space.
5. Change one section's padding so the rhythm is uneven.
