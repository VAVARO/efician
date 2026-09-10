---
name: Efician Patagonia Solar Engineering System
colors:
  surface: '#001523'
  surface-dim: '#001523'
  surface-bright: '#223c4f'
  surface-container-lowest: '#00101c'
  surface-container-low: '#001e30'
  surface-container: '#042234'
  surface-container-high: '#102c3f'
  surface-container-highest: '#1d374a'
  on-surface: '#cbe6fe'
  on-surface-variant: '#b9cac9'
  inverse-surface: '#cbe6fe'
  inverse-on-surface: '#183346'
  outline: '#839493'
  outline-variant: '#3a4a49'
  surface-tint: '#00dddd'
  primary: '#ffffff'
  on-primary: '#003737'
  primary-container: '#00fbfb'
  on-primary-container: '#007070'
  inverse-primary: '#006a6a'
  secondary: '#a8caea'
  on-secondary: '#0a334d'
  secondary-container: '#294c67'
  on-secondary-container: '#9abcdb'
  tertiary: '#ffffff'
  on-tertiary: '#003640'
  tertiary-container: '#acedff'
  on-tertiary-container: '#006e81'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#00fbfb'
  primary-fixed-dim: '#00dddd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#a8caea'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#264a64'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#001523'
  on-background: '#cbe6fe'
  surface-variant: '#1d374a'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit-2xs: 0.125rem
  unit-xs: 0.25rem
  unit-sm: 0.5rem
  unit-md: 1rem
  unit-lg: 1.5rem
  unit-xl: 2rem
  unit-2xl: 3rem
  unit-3xl: 4rem
  gutter-sm: 0.75rem
  gutter-md: 1rem
  gutter-lg: 1.5rem
  margin-mobile: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
---

## Brand & Style

The design system embodies the technological vanguard of renewable solar engineering operating in the extreme, pristine conditions of Patagonia. The visual persona combines industrial SCADA precision, cutting-edge photovoltaic modeling software, and luminous scientific instrumentation. 

Targeted at solar systems engineers, renewable project developers, and telemetry operators, the interface communicates uncompromising reliability, mathematical clarity, and high efficiency. 

The aesthetic style merges **Dark Glassmorphism** with **Technical Industrial Minimalism**:
- Deep atmospheric midnight backdrops evoking sub-Antarctic night skies.
- Razor-sharp, glowing electric cyan accents that guide attention to active photovoltaic generation, load flows, and critical metrics.
- Frosted glass telemetry panels with crisp hairline boundaries that preserve contrast and legibility under varying operating conditions.
- Strict data density balancing immediate high-level situational awareness with deep parameter controls.

## Colors

The color palette is built for a strict dark-mode environment optimized for multi-monitor workstations, high-altitude field laptops, and dark operations control rooms.

### Roles & Semantic Mapping
- **Primary Accent (`#00FFFF`)**: Electric Cyan represents active energy, solar photon conversion, and key action drivers. Used for active states, interactive chart nodes, primary action triggers, and active circuit paths.
- **Secondary Surface (`#002C45`)**: Deep Steel Cyan used for elevated surfaces, sidebars, interactive controls, and glassmorphic base layers.
- **Tertiary Accent (`#06B6D4`)**: Deeper Cerulean Cyan used for secondary active states, secondary data series on solar generation curves, and contextual indicators.
- **Neutral Canvas (`#001E30`)**: Deep Midnight Blue functions as the root ambient background, absorbing glare and setting maximum contrast for electric data visualizations.
- **Neutral Slate (`#1E293B` & `#545454`)**: Structural grid lines, card borders, disabled components, and unselected telemetry channels.
- **Text Hierarchy**: Pure Crisp White (`#FFFFFF`) for primary readings and titles, Slate Mist (`#94A3B8`) for telemetry units and field descriptions, and Muted Cyan (`#38BDF8` at 60%) for secondary engineering notes.
- **Telemetry Semantics**: Solar Production / Normal (`#00FFFF`), Grid Export (`#10B981`), Battery Storage / Discharge (`#F59E0B`), Inverter Trip / Warning (`#EF4444`).

## Typography

The typographic system utilizes a tri-font hierarchy to cleanly differentiate system architecture, general contextual content, and precise instrument readings.

- **Display & Section Headers (Space Grotesk)**: Conveys forward-looking engineering rigor. Geometric proportions echo the clean lines of solar trackers and photovoltaic array layouts.
- **Narrative & Form Inputs (Manrope)**: Delivers smooth, neutral, and highly legible text across low-contrast dark settings. Its open apertures prevent visual fatigue during lengthy design workflows.
- **Telemetry & Technical Tags (JetBrains Mono)**: Handles live kilowatt-hour numbers, irradiance ratings ($W/m^2$), string voltage parameters, tilt degrees, and timestamps with tabular spacing that prevents horizontal jitter during live telemetry updates.

## Layout & Spacing

The layout is built on a 12-column fluid engineering grid system tailored for variable split screens, CAD-style dimensioning canvases, and dense SCADA dashboards.

### Grid & Density Rules
- **Desktop (1200px+)**: 12-column grid, 24px margins, 16px to 24px gutters. Provides dual-pane layouts: interactive solar tilt/stringing CAD viewport on the left (7 or 8 columns) and real-time calculation/inspector panels on the right (4 or 5 columns).
- **Tablet (768px - 1199px)**: 8-column grid, 24px margins, 16px gutters. Telemetry charts collapse below configuration parameters or display via tabbed navigation panels.
- **Mobile (320px - 767px)**: 4-column grid, 16px margins, 12px gutters. Full single-column stacks; large numerical readouts remain docked to the viewport bottom for quick field verification.

The layout operates on a standard 4px/8px base rhythm. Dense telemetry clusters use compact 4px (`unit-xs`) and 8px (`unit-sm`) steps to maximize data density without causing visual noise.

## Elevation & Depth

Visual hierarchy is maintained through high-contrast glassmorphism, luminescent boundary strokes, and cyan optical glows rather than diffuse muddy dropshadows.

### Elevation Layers
- **Surface Level 0 (Canvas Base)**: `#001E30`. Pure backdrop with subtle technical vector grid lines (1px stroke, `#002C45` with 40% opacity).
- **Surface Level 1 (Panels & Cards)**: Semi-transparent `#002C45` with `backdrop-filter: blur(16px)` and a crisp perimeter border of `1px solid rgba(0, 255, 255, 0.12)`.
- **Surface Level 2 (Floating Modals & Flyouts)**: Elevated `#003957` at 85% opacity with `backdrop-filter: blur(24px)` and a hairline border of `1px solid rgba(0, 255, 255, 0.25)`. Supported by an ambient shadow: `0 8px 32px rgba(0, 10, 20, 0.6)`.
- **Surface Level 3 (Active / Warning Focus)**: Border stroke transitions to `1px solid #00FFFF`, flanked by an outer radiant halo of `0 0 16px rgba(0, 255, 255, 0.25)`.

This creates crisp separation between data containers while allowing the technical backdrop grid to shine through.

## Shapes

The design system adopts a **Soft Industrial Geometry (Level 1)**.

- **Base Radius (`0.25rem` / 4px)**: Applied to text input fields, code chips, technical status badges, and chart tooltips to preserve a sharp, calibrated hardware aesthetic.
- **Card Radius (`0.5rem` / 8px)**: Applied to glassmorphic telemetry cards, graph viewports, and engineering module containers.
- **Interactive Pill Components (`1rem` / 16px)**: Reserved exclusively for switch toggles, active pulse pips, and standalone numeric quick-status badges.

## Components

### Buttons
- **Primary Action**: Electric Cyan (`#00FFFF`) fill with deep midnight text (`#001E30`), bold 600 weight. Hover brings a luminous aura (`box-shadow: 0 0 16px rgba(0, 255, 255, 0.4)`).
- **Secondary Industrial**: Transparent background with a 1px border of `rgba(0, 255, 255, 0.4)`, text in `#FFFFFF`. Hover state transitions background to `rgba(0, 44, 69, 0.8)` with full `#00FFFF` border.
- **Ghost / Utility**: Text-only or icon-only in `#94A3B8`, brightening to `#FFFFFF` with an active cyan glow.

### Telemetry Cards & Containers
- Built with glassmorphic layers (`background: rgba(0, 44, 69, 0.6)`, `backdrop-filter: blur(12px)`).
- Top corner displays technical micro-tags in `JetBrains Mono` (`label-sm`), detailing the sensor ID or array string (e.g., `STRING_A // MPPT_01`).
- Contains high-contrast sparklines or generation curves with an electric cyan stroke and subtle gradient falloff beneath the curve (`rgba(0, 255, 255, 0.2)` fading to transparent).

### Input Fields & Dimensioning Sliders
- **Numeric & Form Inputs**: `#001726` inset fill, 1px border of `#1E293B`, crisp white value in `JetBrains Mono`. When focused, border snaps to `#00FFFF` with zero transition lag, mirroring instantaneous SCADA controls.
- **Range Sliders (Solar Azimuth / Tilt)**: Track in `#1E293B` with active fill in `#00FFFF`. Rectangular thumb (4px radius) with an embedded vertical indicator line.

### Technical Badges & Status Indicators
- **Normal Operation**: Border `rgba(0, 255, 255, 0.4)`, background `rgba(0, 255, 255, 0.08)`, text `#00FFFF`. Accompanied by a 6px glowing status dot.
- **Critical / Fault**: Border `rgba(239, 68, 68, 0.4)`, background `rgba(239, 68, 68, 0.1)`, text `#FCA5A5`. Dot pulses at 1Hz interval.

### Selection Controls (Checkboxes & Radios)
- Sharp, technical square checkboxes (2px radius) and octagonal/circular radio buttons.
- Inactive state: 1px border of `#545454`.
- Checked state: `#00FFFF` filled center with an inner midnight-blue checkmark for maximum contrast.

### Specialized Solar Canvas Controls
- **Compass & Sun-Path Rose**: Vector overlay in `#002C45` with `#00FFFF` zenith indicator and monospaced solar position angles (`Az: 42.4°`, `El: 68.1°`).
- **Data Tables**: Alternating semi-transparent row zebra stripes (`rgba(0, 44, 69, 0.2)`), fixed monospaced numeric columns right-aligned, and hover row highlighting with a 2px left border accent in `#00FFFF`.