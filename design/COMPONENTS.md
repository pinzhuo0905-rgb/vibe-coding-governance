# Component System Specification

> **Mandate:** Standardized inventory of core UI components. AI Agents must strictly consume and extend these components instead of reinventing ad-hoc buttons, inputs, tables, or modals.

---

## Component Index

1. **Button** - Primary, secondary, danger, and ghost action triggers.
2. **Input** - Text, number, password, and search inputs with icon slots.
3. **Select / Dropdown** - Form selectors and menu dropdowns.
4. **Checkbox & Switch** - Boolean toggles and multi-selection controls.
5. **Badge / Tag** - Semantic status badges and metadata tags.
6. **Tabs** - In-page horizontal view navigation.
7. **Table** - High-density tabular data display with sorting and pagination.
8. **Card / Panel** - Grouped section containers (single-depth only).
9. **Modal Dialog** - Interruptive confirmation and focused workflow overlays.
10. **Toast Notification** - Transient feedback messages.
11. **Empty State** - Structured placeholder when zero data exists.
12. **Loading Skeleton** - Layout-preserving placeholder during async fetching.
13. **Error Banner** - In-place alert container for recoverable or critical errors.

---

## Detailed Specifications

### 1. Button (`<Button />`)
- **Purpose:** Primary trigger for user actions.
- **Variants:**
  - `primary`: Solid background (`#0284c7`), white text, hover (`#0369a1`). Exactly one per logical section.
  - `secondary`: Transparent or subtle background (`#162032`), border (`#334155`), white text.
  - `danger`: Crimson border or subtle tint (`#ef4444`), used for destructive irreversible actions.
  - `ghost`: Zero border, subtle hover background. Used for toolbar icon triggers.
- **Sizes:** `sm` (28px height), `md` (34px height, default), `lg` (40px height).
- **Radius:** Strictly `radius-md` (6px). Never `rounded-full` pill.
- **States:** Default, Hover (100ms ease), Active, Focus-Visible (2px sky focus ring), Disabled (opacity 0.45, cursor not-allowed), Loading (inline 14px spinner, text preserved or hidden).

### 2. Input (`<Input />`)
- **Purpose:** Single-line data capture.
- **Variants:** Standard, With Leading Icon, With Trailing Action.
- **Styling:** Height 34px, background `#0f172a`, border 1px solid `#334155`, border-radius 6px.
- **Focus:** 2px focus ring `#38bdf8`, zero glow.
- **States:** Default, Focused, Error (border `#ef4444`, paired with helper text), Disabled.

### 3. Data Table (`<Table />`)
- **Purpose:** Dense display of structured domain records.
- **Row Heights:** Compact (34px), Default (40px).
- **Header:** Sticky top, background `#1e293b`, 11px uppercase monospace or semibold text, bottom border 1px solid `#334155`.
- **Row Styling:** Alternating subtle background or clean border-bottom dividers. Hover state: subtle background highlight (`#162032`).
- **Resilience:** Columns must specify min-width and ellipsis truncation for long text. Zero horizontal page jitter.

### 4. Status Badge (`<Badge />`)
- **Purpose:** Display operational states (Pass, Fail, Running, Degraded).
- **Height:** 20px-22px, padding 2px 8px, border-radius 4px.
- **Colors:**
  - `success`: `#10b981` with high-contrast readable dark or light pairing.
  - `warning`: `#f59e0b` with dark/amber pairing.
  - `danger`: `#ef4444` with dark/red pairing.
  - `neutral`: `#64748b` with dark background.

### 5. Empty State (`<EmptyState />`)
- **Purpose:** Displayed when a query, filter, or table returns zero items.
- **Required Elements:**
  - 1x Geometric icon (32px, monochrome slate).
  - 1x Concise heading (e.g. "No Quality Gate Runs Detected").
  - 1x Explanatory paragraph explaining *why* it's empty and *how* to populate it.
  - 1x Action button (e.g. "Run Quality Gate").

### 6. Loading Skeleton (`<LoadingSkeleton />`)
- **Purpose:** Provide layout stability and reduce perceived latency during network fetches.
- **Rules:** Mirror exact dimensions of destination elements (e.g., table row skeletons, card skeletons). Never use generic full-screen center spinners.
