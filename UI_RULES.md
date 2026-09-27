# UI Rules & Anti-Slop Guardrails

> **Mandate:** This document contains machine-enforced and agent-audited rules that eliminate generic "AI Slop" aesthetics and enforce robust software engineering standards in user interfaces.

---

## 1. Negative Constraints (Strictly Forbidden Patterns)

### ❌ Rule 1.1: Ban Gratuitous Purple/Blue Gradient Clichés
- **Prohibition:** Do not use purple-to-blue or violet-to-cyan background gradients (`linear-gradient(to right, #6366f1, #a855f7)`) on headers, cards, or hero containers.
- **Why:** This is the #1 universal marker of unconstrained AI generation. It screams "AI demo" and destroys domain identity.
- **Allowed Exception:** Pure neutral-to-neutral subtle depth shifts (`#0f172a` to `#090d16`).

### ❌ Rule 1.2: Ban Gradient Text
- **Prohibition:** Never render headings with gradient fills (`background-clip: text; -webkit-text-fill-color: transparent`).
- **Why:** Degrades accessibility, damages readability at small sizes, and cheapens interface gravitas.

### ❌ Rule 1.3: Ban Glowing Neon Shadows
- **Prohibition:** Never apply colored or neon glow shadows (`box-shadow: 0 0 20px #8b5cf6`) to borders, buttons, or cards.
- **Why:** Pure decorative gimmick. Interfaces must use crisp 1px borders for delineation.

### ❌ Rule 1.4: Ban "Card Soup" (Card Inside Card Inside Card)
- **Prohibition:** Do not wrap every arbitrary UI section in a rounded, bordered card container. Never nest cards deeper than 1 level.
- **Why:** Clutters visual hierarchy and reduces available screen space for real information.
- **Alternative:** Use typography hierarchy, subtle dividers, and disciplined whitespace to separate content.

### ❌ Rule 1.5: Ban Full-Pill Buttons Everywhere
- **Prohibition:** Do not use `rounded-full` pill buttons for standard actions (Save, Submit, Cancel, Edit).
- **Why:** Full pill buttons look like mobile consumer widgets or search capsules, not professional desktop software controls.
- **Alternative:** Use standard calibrated `rounded-md` (6px) or `rounded-sm` (4px) controls.

### ❌ Rule 1.6: Ban Marketing Hero Sections in Productivity Tools
- **Prohibition:** Never place massive 80px high-padding marketing banners with floating 3D blobs or marketing slogans inside operational dashboards.
- **Why:** Users are here to accomplish tasks, not be sold software they are already logged into.

### ❌ Rule 1.7: Ban Fake Vanity KPI Counters
- **Prohibition:** Do not fabricate four generic metric cards with arbitrary green +12% pill badges and fake sparklines unless they represent real, actionable system metrics.

### ❌ Rule 1.8: Ban Excessive Decorative Whitespace
- **Prohibition:** Do not inject 64px or 96px empty padding between operational tool elements to make it "look modern."
- **Why:** Destroys operational efficiency for daily professional users.

---

## 2. Positive Imperatives (Mandatory Good Practices)

### ✅ Rule 2.1: Typography Before Containers
Define visual grouping using font scale (24px -> 18px -> 14px -> 12px) and weight (700 -> 600 -> 400) before adding boxes, borders, or backgrounds.

### ✅ Rule 2.2: Spacing & Alignment Rhythm
Always snap element positioning and padding to the 4px/8px spatial scale (`4, 8, 12, 16, 20, 24, 32px`). Align text baselines and control centers.

### ✅ Rule 2.3: Borders Before Shadows
Use crisp 1px borders (`#334155`) to delimit panels and controls. Reserve shadows exclusively for floating elements (dropdowns, dialogs).

### ✅ Rule 2.4: Design for Data Density
In dashboards and administrative interfaces, prefer dense, sortable, paginated tables and key-value lists over bloated grid cards.

### ✅ Rule 2.5: Mandatory 10-State Completeness
Every interactive screen specification and component must account for the **10 Product States**:
1. Default / Idle
2. Loading / Skeleton
3. Empty / Zero Data
4. Error / Failure
5. Success / Completed
6. Disabled / Inactive
7. Permission Denied / Unauthorized
8. Offline / Disconnected
9. Content Overflow / Extreme Text Length
10. Large Dataset / Scaled Volume

### ✅ Rule 2.6: Direct Action Over Modal Mazes
Allow in-place actions (inline edits, quick filters, immediate toggle switches) instead of forcing users through multi-step dialogs.
