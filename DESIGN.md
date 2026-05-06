---
version: alpha
name: Natalia Wysocka Yoga
description: Editorial, premium yoga landing experience with cinematic monochrome imagery and restrained luxury accents.
colors:
  primary: "#1A2E22"
  on-primary: "#FFFFFF"
  secondary: "#C5A489"
  on-secondary: "#1A2E22"
  background: "#F9F7F2"
  surface: "#FFFFFF"
  surface-muted: "#F9F7F2"
  text-primary: "#1A2E22"
  text-muted: "#64748B"
  text-subtle: "#94A3B8"
  text-inverse: "#FFFFFF"
  border-subtle: "#D7DDE5"
  border-strong: "#C5A489"
  overlay-dark: "#1A2E22"
  social-tiktok: "#000000"
  social-instagram: "#E4405F"
  social-facebook: "#1877F2"
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 11rem
    fontWeight: "900"
    lineHeight: 1
    letterSpacing: -0.04em
  display-section:
    fontFamily: Playfair Display
    fontSize: 6rem
    fontWeight: "400"
    lineHeight: 1.05
    letterSpacing: -0.02em
  heading-lg:
    fontFamily: Playfair Display
    fontSize: 4rem
    fontWeight: "900"
    lineHeight: 1
    letterSpacing: -0.03em
  heading-md:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: "400"
    lineHeight: 1.2
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: "300"
    lineHeight: 1.8
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "400"
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: 1.6
  label-caps:
    fontFamily: Inter
    fontSize: 0.625rem
    fontWeight: "700"
    lineHeight: 1.2
    letterSpacing: 0.4em
  label-button:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: "700"
    lineHeight: 1.2
    letterSpacing: 0.35em
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 56px
  section-lg: 160px
  section-xl: 208px
  container-padding: 32px
  card-padding: 40px
  card-padding-lg: 112px
  grid-gap: 32px
rounded:
  none: 0px
  sm: 2px
  md: 8px
  lg: 12px
  full: 9999px
elevation:
  flat: 0
  raised: 1
  floating: 2
  overlay: 3
shadows:
  raised:
    x: 0px
    y: 10px
    blur: 24px
    spread: -8px
    color: "#1A2E22"
    opacity: 0.18
  floating:
    x: 0px
    y: 16px
    blur: 42px
    spread: -14px
    color: "#1A2E22"
    opacity: 0.2
  soft-border:
    x: 0px
    y: 0px
    blur: 0px
    spread: 1px
    color: "#D7DDE5"
    opacity: 0.4
motion:
  duration-fast: 150ms
  duration-base: 300ms
  duration-slow: 500ms
  duration-xslow: 700ms
  duration-hero: 800ms
  easing-standard: cubic-bezier(0.4, 0, 0.2, 1)
  easing-entry: ease-out
components:
  page-root:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
  nav-bar-top:
    backgroundColor: transparent
    textColor: "{colors.text-inverse}"
    typography: "{typography.label-caps}"
    padding: "{spacing.container-padding}"
  nav-bar-scrolled:
    backgroundColor: "{colors.overlay-dark}"
    textColor: "{colors.text-inverse}"
  button-outline-hero:
    backgroundColor: transparent
    textColor: "{colors.text-inverse}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: 20px 48px
    borderColor: "{colors.on-primary}"
  button-outline-hero-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-outline-dark:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
    borderColor: "{colors.primary}"
  button-outline-dark-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-solid-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: 32px
  button-solid-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  card-editorial:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.card-padding-lg}"
  card-gallery:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
  input-underlined:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    borderColor: "{colors.border-subtle}"
    padding: 24px 0px
  input-underlined-focus:
    borderColor: "{colors.border-strong}"
  fab-mobile-collapse:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: 48px
    width: 48px
---

## Overview

This system presents yoga as an architectural, high-craft discipline rather than a casual wellness product. The overall expression is editorial and cinematic: very large serif headlines, restrained color use, and monochrome photography with soft overlays.

The emotional target is calm confidence. Visual hierarchy is built through scale contrast, negative space, and typography, not through loud color shifts or decorative effects.

## Colors

The palette is intentionally narrow. Deep green is the structural color used for anchors, buttons, and high-contrast typography. Warm sand gold is the sole accent for metadata, interactive highlights, and moments of warmth.

Large areas rely on off-white and pure white to preserve an airy, premium feeling. Supporting text sits in cool slate tones to keep long-form copy legible without competing with hero headlines.

Imagery is treated as neutralized context, not as an accent system. Monochrome media and translucent overlays reduce noise and keep attention on messaging.

## Typography

Typography is the main brand signature.

- Playfair Display carries all display and heading roles, ranging from elegant regular cuts in section headings to very bold hero treatments.
- Inter provides body, labels, and utility text with a light-to-bold range that supports readability and strong uppercase navigation cues.
- Letterspacing is used as a compositional tool: very tight tracking for oversized headlines and very wide tracking for micro labels, section tags, and action text.

The result should feel like modern editorial print translated to the web.

## Layout

Spacing is generous and rhythmic, based on an 8px unit while scaling up to very large vertical sections. Every major section is treated as a chapter with strong top/bottom breathing room.

Compositions alternate between full-bleed media and offset content blocks. Layered cards overlap image regions to create depth through placement rather than through heavy ornament.

Grid structures remain simple (single-column on small screens, multi-column on desktop), but spatial contrast is pronounced: dense text blocks inside highly padded cards, surrounded by broad white/off-white fields.

## Elevation & Depth

Depth is subtle and physical. Stronger elevations appear only where content cards must separate from media backgrounds. Most surfaces stay flat, preserving a refined, print-like feel.

Transitions and motion are smooth and conservative, emphasizing calmness over energy. Hover and expand interactions should feel soft and deliberate, with eased motion and no abrupt spring behavior.

## Shapes

The shape language is mostly squared and architectural. Core cards, nav bars, and form lines avoid rounded corners. Small rounding appears only on gallery tiles and circular mobile affordances, where touch ergonomics benefit from softness.

This contrast between strict geometry and selective softness reinforces the system's premium, intentional character.

## Components

### Navigation

The top navigation starts transparent over imagery and becomes an opaque deep-green bar on scroll. Link labels are uppercase, tightly curated, and widely tracked to read as directional markers.

### Hero

The hero relies on extreme headline scale, monochrome moving image, and restrained supporting copy. The primary call to action is outlined rather than filled, preserving visual lightness at first contact.

### Editorial Content Cards

About-section cards are white, highly padded, and shadowed just enough to separate from adjacent photography. Accent labels in warm sand establish metadata hierarchy before heading text.

### Gallery

Gallery items are presented as simple image blocks with gentle hover scale and soft elevation. Expansion behavior on small screens prioritizes control and orientation with an explicit collapse affordance.

### Pricing

Pricing uses a dark inversion of the palette: deep green background, white type, and sand dividers. The section communicates structure and trust through repeated vertical card rhythm.

### Form & Contact

Inputs are underlined and minimal, with focus shifting to warm sand rather than adding heavy borders or fills. The submit action is a full-width dark block that transitions to the accent color on hover.

## Do's and Don'ts

- Do preserve the narrow palette and rely on typography and spacing for hierarchy.
- Do keep imagery desaturated or monochrome so text remains the visual focal point.
- Do use large vertical spacing between sections to maintain the premium editorial cadence.
- Do not introduce bright multi-accent color systems for core UI structure.
- Do not over-round cards and containers; softness is selective, not global.
- Do not use aggressive motion curves or fast, bouncy transitions.
