# Motion

Most AI glass motion is scattered — hover lifts on every card, fade-in on every scroll, bouncing icons. Quiet it. One orchestrated moment beats ten small ones. Glass is a material that floats; it should not fidget.

This file is the *language* of motion (principles, easings, durations, recipes). The scroll-trigger wiring lives in `gsap-setup.md`; the CSS-vs-GSAP conflict trap lives there too.

## Principles

- **Animate only `transform` and `opacity`.** GPU-composited, no layout. Never `width`, `height`, `top`, `left`, `margin`, `padding`.
- **Duration is three buckets.** Micro (100–150ms), minor (200–300ms), major (300–500ms). Exits run ~75% of the enter.
- **Easing is exponential ease-out.** Elements entering decelerate into place; elements leaving accelerate away.
- **No more than three distinct animation primitives per page.** A counter + a hover-lift + a marquee = three, done. The temptation to layer "just one more" is the slop pull.
- **Motion serves perception.** If you can't say what a transition communicates, cut it.
- **Reduced motion is non-optional.** Collapse spatial motion to an opacity crossfade ≤150ms; functional motion (progress, spinners) keeps running, slower.

## Easings

Use these three. Name them as tokens.

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);        /* elements entering */
  --ease-in:  cubic-bezier(0.7,  0, 0.84, 0);       /* elements leaving  */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);    /* state toggles     */
}
```

`ease`, `ease-in-out` (browser default), `cubic-bezier(0.25, 0.1, 0.25, 1)` — these are the browser defaults and read as uncrafted.

## Durations

```css
:root {
  --dur-micro: 120ms;   /* button press, toggle tick, color shift  */
  --dur-short: 220ms;   /* hover lift, tooltip, menu open          */
  --dur-long:  420ms;   /* modal, drawer, accordion, page reveal   */
}
```

Exits use ~75% of the enter:

```css
.menu.is-open  { transition: transform var(--dur-short) var(--ease-out); }
.menu.is-close { transition: transform calc(var(--dur-short) * 0.75) var(--ease-in); }
```

## Page-load orchestration

One sequence on page load. Stagger by DOM index using a CSS custom property, not JS.

```html
<section style="--i: 0">…</section>
<section style="--i: 1">…</section>
<section style="--i: 2">…</section>
```

```css
.reveal {
  opacity: 0;
  transform: translateY(8px);
  animation: reveal var(--dur-long) var(--ease-out) forwards;
  animation-delay: calc(var(--i, 0) * 60ms);
}
@keyframes reveal {
  to { opacity: 1; transform: none; }
}
```

Cap total stagger at ~500ms. Beyond that the page feels slow to settle. One orchestrated entrance — not twelve section-by-section fades.

## Scroll-linked motion

- Use IntersectionObserver or GSAP ScrollTrigger, **never** raw `scroll` event listeners.
- Reveal **once** only. Never re-fire on scroll back up.
- Stagger caps at ~100ms per item, total under ~500ms.
- No parallax by default. It's a vestibular trigger and rarely serves the content. (The one glass exception: a subtle `yPercent` drift on a hero mockup that is clearly a background object, and even then under a reduced-motion guard.)

## Glass hover

**One signal per hover.** For glass, that signal is a background/opacity shift — the surface turns more opaque, which *is* the "increased blur" feel. Do not scale, do not translate, do not glow on top of it.

```css
.glass-card {
  transition: background-color var(--dur-short) var(--ease-out),
              opacity var(--dur-short) var(--ease-out);
}
.glass-card:hover { background-color: rgba(255, 255, 255, 0.18); }
```

- A `translateY(-1px)` lift is acceptable as the single signal on non-glass elements (buttons, nav links).
- Button press: `transform: scale(0.98)` on `:active`, ~100ms.
- Never `transition-all`. Never `hover:scale-105` across unrelated elements.

## Neubrutalism hover — the "press"

Neubrutalism's signature interaction is the **press**: on hover/active, the element translates by exactly its shadow offset and the hard shadow collapses to zero. It feels like the element is being stamped into the page. Fast (~100ms), no easing flourish.

```css
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
```

The translate distance MUST equal the shadow offset (`4px` shadow → `translate(4px, 4px)`), or the press reads as a broken jump. Marquee is the other canonical neubrutalism motion; no soft eases, no overshoot, no parallax.

## Loading and empty states

- **Skeleton over spinner** for content with predictable shape (lists, cards, tables). Skeleton matches the final layout's shape; a generic circular spinner does not.
- **Inline spinner** for in-button state. Replace the label, don't add beside it.
- **Empty states** always have three things: a small illustration/icon, a one-line reason it's empty, and an action to fix it. Never a bare "No results."
- Spinner flashes on/off when the action finishes in <80ms — either delay showing it (150ms) or set a minimum visible duration (300ms).

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

For GSAP specifically, check the media query in JS and skip entirely (see `gsap-setup.md` § Reduced motion). Functional motion — progress bars, loading spinners, skeletons — still runs, just slower. Spatial motion collapses to an opacity crossfade, never to nothing (the element must still become visible).

### Motion / React: the SSR trap (THE REDUCED-MOTION GATE)

Do NOT gate `initial`, `animate`, or `whileInView` on `useReducedMotion()`:

```tsx
// WRONG — SSR hydration trap. useReducedMotion() reads a client-only
// preference (null/false on the server, true on the client for reduced-motion
// users), so the server bakes `opacity:0` into the HTML and the client renders
// visible. React 19 leaves the server's `opacity:0` in place — blank section.
const reduce = useReducedMotion()
<motion.div initial={reduce ? undefined : { opacity: 0, y: 16 }} />
```

Wrap the app once and write animations plainly:

```tsx
// theme-provider.tsx (or any root "use client" wrapper)
import { MotionConfig } from "motion/react"
<MotionConfig reducedMotion="user">{children}</MotionConfig>
```

```tsx
// component — no gating, no useReducedMotion
<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} />
```

`reducedMotion="user"` makes Motion honor the preference internally and consistently across SSR and client: it disables transform/layout motion and keeps an opacity-only fade. One config at the root; never per-component gating.

The non-React path is already safe: CSS `@keyframes` and the `@media (prefers-reduced-motion)` block collapse consistently, with no JS to diverge.

## The named tells

These are the motion signatures of generated code. Treat any one as a critical finding.

1. **THE TRANSITION-ALL.** `transition: all` / `transition-all`. Every property animating, including ones that should be instant (visibility, focus rings). Always name the properties.
2. **THE UNIVERSAL LIFT.** `hover:scale-105` on every card, no shadow change, no easing, no purpose. AI's reflexive "make it interactive" gesture.
3. **THE BOUNCE.** `cubic-bezier(0.34, 1.56, 0.64, 1)` and friends on UI state changes. Dated, signals "template."
4. **THE EFFECT STACK.** A card that translates + scales + shadows + colour-shifts + rotates on hover. Pick one signal.
5. **THE ANIMATED GRADIENT.** Gradient backgrounds sliding through colour space on hover. Expensive, communicates nothing.
6. **THE GLOW HALO.** Heavy `text-shadow` for "neon." Destroys contrast, hurts legibility.
7. **THE CURSOR FOLLOWER.** A trailing dot lagging behind the pointer. Adds nothing; vestibular trigger.
8. **THE AUTO-CAROUSEL.** Rotating content with no pause/controls. WCAG 2.2.2 violation.
9. **THE PARALLAX.** Layers moving at different speeds. Vestibular trigger; rarely serves content.
10. **THE LAYOUT ANIMATION.** Animating `width`, `height`, `padding`, `margin`, `top`, `left`. Reflow every frame. Use `transform` or `grid-template-rows: 0fr → 1fr`.
11. **THE UNIVERSAL STAGGER.** Every section fading up on intersection. The page never settles. One orchestrated entrance.
12. **THE ANIMATED FOCUS RING.** Focus ring fading in over 200ms, leaving keyboard users without an indicator mid-transition. Focus rings appear instantly. Always.
13. **THE CELEBRATORY TOAST.** "Done!" for an action whose effect the user can already see. Silent success is taste; toasts are for failures and invisible effects.
14. **THE REDUCED-MOTION GATE.** Gating `initial`/`animate`/`whileInView` on `useReducedMotion()`. See "Motion / React: the SSR trap" above — it blanks the page for reduced-motion users.

## Performance

`backdrop-filter` is the expensive material on the page, and it's easy to make it jank. Four rules:

- **One backdrop-filter surface per viewport.** The nav, one hero panel, one modal — not three glass cards each blurring the same background. Every blur layer re-samples the backdrop; they multiply.
- **Never animate the `transform` of the element that owns `backdrop-filter`.** Each frame it moves, the browser re-blurs the whole region behind it — that's the classic glass jank. Put the mount/reveal animation on a parent wrapper and let the glass surface stay still (or animate only `opacity`/`background-color` on the glass itself).
- **No full-screen grain over animated content.** A fixed `feTurbulence` noise overlay sitting above the page forces a full-viewport recomposite on every animated frame. Rasterize grain to a tiny repeating PNG/WebP tile, keep it `pointer-events-none`, and don't animate anything beneath it in the same pass.
- **`backdrop-saturate()` adds real cost on top of the blur.** Use it once, on the hero surface, not on every glass element.

## When in doubt, cut

Most pages have too much motion, not too little. Before shipping, walk every animation and ask: *what would happen if this were instant?* If the answer is "nothing — the user wouldn't notice," remove it. If the answer is "the user would lose information about what changed," keep it.

Reaching for stillness is a sign of taste. Reaching for more motion is the AI default.
