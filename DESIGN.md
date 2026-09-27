# Visual Design System Specification

> **Status:** Authoritative Visual Specification for all UI components, screens, layouts, and interactive states.

---

## 1. Typography System

| Token Name | Font Size | Line Height | Font Weight | Usage & Scope |
| :--- | :--- | :--- | :--- | :--- |
| `text-title-page` | 24px (1.5rem) | 32px | 700 / Semi-Bold | Screen & page title headings. |
| `text-title-section`| 18px (1.125rem) | 24px | 600 / Medium | Panel titles, section headers. |
| `text-title-card` | 15px (0.9375rem) | 20px | 600 / Medium | Card headers, table group headers. |
| `text-body-base` | 14px (0.875rem) | 20px | 400 / Regular | Default content, form labels, table cells. |
| `text-body-sm` | 12px (0.75rem) | 16px | 400 / Regular | Helper text, secondary timestamps. |
| `text-caption` | 11px (0.6875rem) | 14px | 500 / Medium | Badges, tags, metric unit indicators. |
| `text-code` | 12px (0.75rem) | 18px | 500 / Regular | Monospace IDs, commit SHAs, tokens, code. |

---

## 2. Spacing Scale

| Token | Pixels | Rem | Typical Application |
| :--- | :--- | :--- | :--- |
| `spacing-1` | 4px | 0.25rem | Icon-to-text gap, compact badge padding. |
| `spacing-2` | 8px | 0.5rem | Standard component internal padding, item gaps. |
| `spacing-3` | 12px | 0.75rem | Form field gap, compact card padding. |
| `spacing-4` | 16px | 1.0rem | Standard container padding, panel margins. |
| `spacing-5` | 20px | 1.25rem | Section separators, grid gutters. |
| `spacing-6` | 24px | 1.5rem | Page container padding, primary column gaps. |
| `spacing-8` | 32px | 2.0rem | Major section breaks, empty state padding. |

---

## 3. Corner Radius Scale

| Token | Pixels | Usage Constraint |
| :--- | :--- | :--- |
| `radius-none` | 0px | Tables, split panes, attached toolbars. |
| `radius-sm` | 4px | Badges, tags, code snippets, inner controls. |
| `radius-md` | 6px | **Default:** Buttons, inputs, dropdown menus, cards. |
| `radius-lg` | 8px | Modals, elevated dialogs, root page containers. |
| *Forbidden* | >= 16px | Prohibited for cards and containers. No full-pill buttons unless explicitly approved. |

---

## 4. Color & Surface Hierarchy (Dark Mode First)

| Role | Hex Code | Description |
| :--- | :--- | :--- |
| `bg-canvas` | `#090d16` | Root application canvas background. |
| `bg-surface` | `#0f172a` | Navigation sidebar, top bar, data panels. |
| `bg-elevated` | `#1e293b` | Modals, popovers, dropdown menus, table headers. |
| `bg-subtle` | `#162032` | Hover states on table rows, secondary button background. |
| `border-subtle` | `#1e293b` | Card interior dividers, subtle table gridlines. |
| `border-strong` | `#334155` | Interactive component borders, active focus boundaries. |
| `text-primary` | `#f8fafc` | Primary readable headings and values. |
| `text-secondary`| `#94a3b8` | Labels, descriptions, secondary metadata. |
| `text-muted` | `#64748b` | Disabled states, placeholder text, hints. |
| `accent-primary`| `#0284c7` | Primary action button, active selection indicator. |
| `accent-hover` | `#0369a1` | Hover state for primary action buttons. |
| `status-success`| `#10b981` | Green status dot, passing test badge. |
| `status-warning`| `#f59e0b` | Amber warning badge, alert counter. |
| `status-danger` | `#ef4444` | Red error badge, failing quality gate. |

---

## 5. Control Sizes

| Control | Height | Horizontal Padding | Font Size |
| :--- | :--- | :--- | :--- |
| `button-sm` | 28px | 10px | 12px |
| `button-md` (Default) | 34px | 14px | 13px |
| `button-lg` | 40px | 18px | 14px |
| `input-md` (Default) | 34px | 12px | 13px |
| `table-row-compact` | 34px | 12px | 13px |
| `table-row-default` | 40px | 14px | 14px |

---

## 6. Layout & Responsive Breakpoints

```text
Mobile (xs)        : 375px  - Single column, collapsed navigation drawer, horizontal scroll for tables.
Tablet (md)        : 768px  - Icon-only sidebar, 2-column metric grid.
Desktop (lg)       : 1024px - Standard 220px fixed sidebar, multi-column dashboard grid.
Wide Desktop (xl)  : 1440px - Full high-density layout with auxiliary split drawer.
```

---

## 7. Accessibility & Interaction Mandates
- **Contrast:** Text against background must strictly meet WCAG 2.1 AA (>= 4.5:1 for body, >= 3:1 for large headings).
- **Focus Rings:** Every interactive control must provide a clear 2px focus ring: `outline: 2px solid #38bdf8; outline-offset: 2px`.
- **Keyboard Navigation:** Full tabindex sequence across all interactive controls. Esc key closes modals and popovers.
