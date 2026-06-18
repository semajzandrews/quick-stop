# Quick Stop · SIGNATURE

**Business:** Quick Stop — convenience store + gas/service station
**Address:** 323 Main St, City of Orange, NJ 07050
**Phone:** (973) 677-3699 · PIN 773699 (last 6)
**Hours (verified):** 6:00 AM – 9:00 PM daily
**Status:** NO existing website, NO verified socials (omit handles per rule).
**Recon truth:** recently remodeled, small store, "find everything you need on your daily routine," good customer service.

## Locked divergence lane
- Accent: `#8E3B8E` (electric magenta-purple)
- Display font: **Khand** (Fontshare / Google) — tall condensed signage face
- Layout: diagonal marquee / kinetic ribbons
- Mood: electric-night

## The ONE concept: "THE CORNER THAT NEVER MISSES"
Quick Stop is the daily-routine corner store, lit like an open neon sign after dark.
The whole page is an **electric-night storefront**: a glowing magenta corner store at
night, with **diagonal kinetic ribbons** of everyday inventory streaming across the
page (COFFEE · COLD DRINKS · LOTTO · ATM · SNACKS · GAS · SMOKES · GROCERIES). It reads
instantly as "the corner store that has it all and is always on."

## Hero media (06-18-2026 enhancement) — VIDEO
Used a HERO VIDEO, not a still. A 24/7-feel neon corner store is the ideal video
candidate (BUILD_RULES §7): the chosen clip is a real red+blue neon "OPEN" sign
glowing in a shop window at night (Pexels 19888594), trimmed to an 18s muted loop,
compressed to storefront-night.mp4 (766KB) + .webm (641KB), poster
storefront-poster.jpg, magenta-graded via a CSS overlay so it fits the electric-night
palette. It sits full-bleed BEHIND the existing neon wordmark + the hand-built OPEN
sign, so the neon signature stays the star and the page now reads instantly as a real
night shop. Mobile: muted + playsInline + autoplay with a JS reduced-motion guard
(HeroVideo.tsx) that holds the poster still and never plays; poster preloads so it is
never blank. Why video over a photo: the live, flickering neon is the brand's whole
"always-on storefront" idea in motion, and the file is tiny enough to stay performant.

Added a new "Step Inside" gallery (Storefront.tsx) of authentic bodega photography
(Black/Caribbean/Latino community fit per City of Orange): a clerk behind a stocked
counter w/ hanging plantains, a customer at the in-store ATM under LOTTO signage,
snack shelves, a cold-drink cooler, and a friendly shopkeeper. Strengthens the
"this is a real, stocked store" read alongside the existing coffee + hot-food shots.

## Signature moment
**THE OPEN SIGN** — a real, hand-built neon "OPEN" sign in the hero that is wired to the
LIVE clock: between 6 AM and 9 PM the tubes are lit (magenta buzz, faint flicker, glow
bloom) and read OPEN; outside hours they dim to a cold unlit glass and read CLOSED, with
the live 12-hour time and "opens 6:00 AM" beneath. Plus the **aisle ribbons**: diagonal
magenta-edged marquee bands of inventory words crossing the page at an angle, speed-
coupled to scroll velocity, so the store feels alive and stocked. Industry-rare for a
bodega/c-store (which normally get a generic template or nothing).

## Why it clears the three laws
- DISTANCE: condensed-signage Khand + electric magenta night + diagonal ribbon layout +
  a clock-wired neon OPEN sign is unlike the warm-photo / serif / paper builds.
- NOVELTY: c-store sites are generic listings; a living neon storefront wired to real
  hours is industry-first here.
- ESCALATION: a real-time clock-driven neon state machine + scroll-velocity ribbons.
