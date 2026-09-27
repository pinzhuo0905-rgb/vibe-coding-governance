---
name: ai-ui-design-governance
description: Enforce AI UI Design Governance, eliminate AI Slop (gradients, glow, card soup, pill buttons), lock design DNA, design tokens, 10-state screen specs, and multi-viewport headless browser screenshot verification loops.
metadata:
  short-description: AI UI Design Governance & Anti-Slop System
---

# AI UI Design Governance Skill

Empower AI Coding Agents to build and refactor web interfaces and software frontends that strictly adhere to professional design systems, eliminating generic "AI Slop" and verifying real-world rendering quality through automated browser evidence.

## When to Use This Skill

Apply this skill whenever you are tasked with:
- Designing a new user interface, page, view, or component.
- Refactoring, redesigning, or polishing an existing web or software frontend.
- Auditing a repository for "AI Slop" (gratuitous gradients, glowing borders, nested card mazes, pill buttons).
- Establishing or maintaining design tokens, screen specifications, or component systems.
- Verifying responsive behavior, accessibility (WCAG AA), and the 10 mandatory UI states via headless browser screenshots.

---

## Autonomous Agent Execution Protocol

When designing or modifying any user interface, you must strictly execute this 6-step lifecycle:

```text
1. Ingest Context & DNA -> 2. Enforce Anti-Slop -> 3. Token Conformance -> 4. Spec 10 States -> 5. Browser Screenshot -> 6. Quality Gate
```

### Step 1: Ingest Product Context & Design DNA
- Read `PRODUCT_CONTEXT.md` to understand the target user persona, daily usage duration, and information density profile (High, Medium-High).
- Read `DESIGN_DNA.md` to align with the active archetype (**Clinical Precision** by default).
- Never guess or default to internet-average consumer showcase styles for productivity software.

### Step 2: Enforce Anti-Slop Negative Constraints (`UI_RULES.md`)
You are strictly prohibited from implementing the following patterns:
- ❌ **No Purple/Blue Gradient Clichés:** Never apply `linear-gradient` hero fills or marketing gradients.
- ❌ **No Gradient Text:** Never render headings with gradient fills (`-webkit-text-fill-color: transparent`).
- ❌ **No Glowing Neon Shadows:** Never apply glowing colored box-shadows. Use crisp 1px borders (`#334155`) for delineation.
- ❌ **No "Card Soup":** Do not wrap every arbitrary element in a rounded card. Never nest cards deeper than 1 level.
- ❌ **No Pill Buttons Everywhere:** Standard actions must use calibrated `radius-md` (6px) controls, never full-pill `rounded-full`.
- ❌ **No Marketing Hero in Tools:** Productivity consoles must prioritize immediate data density and workflows over 80px marketing banners.
- ❌ **No Fake Vanity KPIs:** Do not invent arbitrary metric tiles with meaningless sparklines unless tied to real domain data.
- ❌ **No Excessive Whitespace:** Never inject arbitrary 64px+ spacing in dense professional workbench software.

### Step 3: Strict Design Token Conformance (`design/design-tokens.json`)
- 100% of colors, radiuses, paddings, and font sizes must reference `design-tokens.json`.
- **Spatial Scale:** Strictly snap to `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`.
- **Radius Scale:** Strictly snap to `sm: 4px`, `md: 6px` (default), `lg: 8px` (modals only). Never exceed 8px.
- **Color Hierarchy:** Dark canvas (`#090d16`), panel surfaces (`#0f172a`), borders (`#334155`), cyan/emerald accent (`#0284c7`).

### Step 4: Spec-First & 10-State Screen Completeness
Before implementing any screen, ensure `design/screens/<name>.md` exists and explicitly covers the **10 Product States**:
1. **Default:** Live production data view.
2. **Loading:** Dimension-preserving skeleton loader (zero CLS).
3. **Empty:** Monochrome geometric icon, clear explanation, creation CTA.
4. **Error:** In-place red alert banner with diagnosis and retry CTA.
5. **Success:** Transient toast feedback with live view update.
6. **Disabled:** Reduced opacity (0.45), not-allowed cursor, explanatory tooltip.
7. **Unauthorized:** RBAC lock icon and permission request pathway.
8. **Offline:** Local cache indicator banner and background sync queue.
9. **Overflow:** 64+ char text truncation with ellipsis (`truncate`) without breaking layout.
10. **Large Dataset:** 1,000+ items with pagination or virtual scrolling.

### Step 5: Headless Browser Evidence Verification
Never consider UI work complete based on source code alone. Execute:
```bash
npm run ui:screenshot
```
Inspect generated screenshots in:
- `screenshots/desktop/dashboard-1440x900.png`
- `screenshots/tablet/dashboard-768x1024.png`
- `screenshots/mobile/dashboard-375x812.png`

### Step 6: Dual-Engine Quality Gate & Repair Loop
Run the unified verification command:
```bash
npm run quality
```
If any check fails (Token validation, Anti-Slop linter, Biome, TSC, or tests):
1. Parse the diagnostic error output.
2. Diagnose the root cause in component code or token references.
3. Repair structurally without disabling rules or using suppressions.
4. Re-run `npm run quality` until 100% green.
