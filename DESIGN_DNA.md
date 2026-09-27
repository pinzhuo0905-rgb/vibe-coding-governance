# Design DNA: Visual Personality & Aesthetic Archetype

> **Core Mandate:** Establish the visual DNA of the application so AI Agents derive design decisions from structural personality rather than hallucinated internet averages.

---

## 1. Selected Design Archetype: *Clinical Precision*

The product adopts the **Clinical Precision** archetype (blended with subtle **Modern Industrial** ergonomics). 

### Key Characteristics:
- **Structural Rigor:** Form strictly follows function. Visual hierarchy is achieved via typography scale, weight contrast, and 1px neutral borders—never via stacked card shadows or decorative blobs.
- **High Information Density:** Controls and data displays are compact. Padding is disciplined (4px/8px/12px rhythm). Table rows are calibrated to 36px-40px.
- **Monochrome Foundation:** Deep neutral zinc/slate palette (`#090d16` to `#f8fafc`) with a single calibrated cyan/emerald accent for active states.
- **Zero Decorative Frivolity:** No background mesh gradients, no glowing neon borders, no glassmorphism blur, no bouncy hover scales.

---

## 2. Visual Register & Personality Spectrum

```text
[Playful Consumer] <-------------------------------------- [X] -> [Clinical Precision]
[Marketing Showcase] <------------------------------------ [X] -> [Production Workbench]
[Vague & Airy] <------------------------------------------- [X] -> [Dense & Scannable]
[Flashy Slop] <-------------------------------------------- [X] -> [Disciplined Engineering]
```

---

## 3. Typographic Strategy
- **Primary Interface Font:** Clean, legible geometric sans-serif: `Inter`, `-apple-system`, `Segoe UI`, `Roboto`.
- **Monospace Font:** Precision technical font for code, tokens, IDs, and metrics: `JetBrains Mono`, `Fira Code`, `SF Mono`.
- **Hierarchy Rules:**
  - Page Titles: Max 24px-26px (Font Weight: 600/700). Never use 48px+ marketing hero headlines in productivity consoles.
  - Section Headers: 16px-18px (Font Weight: 600).
  - Body Text: 14px (Font Weight: 400).
  - Secondary / Captions: 12px (Font Weight: 400/500).
  - Monospace Data / Badges: 11px-12px (Font Weight: 500).

---

## 4. Color Architecture & Strategy
- **Neutral Base:** Pure dark technical slate.
  - Background Canvas: `#090d16`
  - Surface Panels / Sidebars: `#0f172a`
  - Elevated Popovers / Modals: `#1e293b`
  - Subtle Borders & Dividers: `#334155`
- **Intentional Accent:** Deep Cyan / Sky (`#0284c7` / `#38bdf8`) used exclusively for primary calls-to-action, focus indicators, and active navigation nodes.
- **Strict Semantic Palette:**
  - **Success / Healthy:** Emerald (`#10b981`)
  - **Warning / Degraded:** Amber (`#f59e0b`)
  - **Danger / Critical:** Crimson (`#ef4444`)
  - **Informational:** Blue (`#3b82f6`)
- **Prohibition:** Color is never used solely as background decoration. Colored badges must have high-contrast text conforming to WCAG AA (>= 4.5:1).

---

## 5. Spatial Rhythm & Density Matrix
- Base unit is **4px**.
- Layout spacing strictly snaps to: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`.
- Prohibit arbitrary non-token values (`13px`, `17px`, `29px`).

---

## 6. Depth, Elevation & Border Hierarchy
- Depth is primarily expressed via **subtle surface tone contrast** and **1px crisp borders** (`#334155` on dark).
- Elevation Shadows:
  - Surface panels: Flat with 1px border. Zero shadow.
  - Dropdowns / Popovers: Subtle ambient shadow (`0 4px 12px rgba(0, 0, 0, 0.4)`).
  - Modals: Firm backdrop scrim with `0 16px 32px rgba(0, 0, 0, 0.6)`.
- Absolute ban on glowing colored box-shadows (`box-shadow: 0 0 25px rgba(56, 189, 248, 0.8)`).

---

## 7. Motion & Interaction Standards
- **Duration:** Micro-interactions (hover, active, focus) must execute in **100ms - 150ms**.
- **Panel Transitions:** Max **200ms** using cubic-bezier ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Purpose-Driven Only:** Motion must convey physical state transitions (accordion expansion, drawer slide, toast entry). Purely decorative hover bounces or continuous pulsing effects are strictly forbidden.

---

## 8. Iconography Discipline
- Standard: Crisp, geometric stroke icons (16px or 20px).
- Icon usage must be communicative and paired with text labels for high-frequency actions.
- Prohibit using icons purely as decorative card wallpaper.
