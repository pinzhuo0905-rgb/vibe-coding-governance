# Screen Specification: Governance Dashboard

> **Screen ID:** `SCREEN-001` | **Route:** `/dashboard` | **Target Density:** High

---

## 1. Screen Purpose
Provide senior engineers and autonomous agents with an instantaneous, deterministic overview of repository health, active quality gates, architectural boundary violations, and recent audit logs.

## 2. Primary User Task
Assess repository compliance status and trigger remediation for any failing quality gate in under 5 seconds.

## 3. Secondary Tasks
- Filter audit logs by severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`).
- Inspect recent agent repair loop cycles.
- Trigger manual quality gate re-evaluation.

## 4. Information Architecture & Layout
```text
+-----------------------------------------------------------------------------------+
| Top Navigation: Brand | Repository Name | Branch: main | Status: PASS | Re-run CTA |
+-----------------------------------------------------------------------------------+
| Sidebar (220px) | Main Content Area                                               |
| - Dashboard (A) | +-------------------------------------------------------------+ |
| - Rules         | | Metrics Grid: 4 Scannable KPIs                              | |
| - Architecture  | | [Health Score: 98%] [Active Rules: 14] [Open Issues: 0]     | |
| - Design Tokens | +-------------------------------------------------------------+ |
| - Screenshots   | | Section 1: Quality Gate Execution Matrix (Table)            | |
| - Settings      | | Name | Status | Duration | Violations | Last Run | Action     | |
|                 | +-------------------------------------------------------------+ |
|                 | | Section 2: Recent Governance Audit Trail (Log Stream)       | |
+-----------------------------------------------------------------------------------+
```

## 5. Components Consumed
- `<TopNav />`
- `<Sidebar />`
- `<MetricTile />` (Compact, 80px height, 1px border, zero gradient)
- `<Table />` (High-density, 36px row height)
- `<Badge />` (Status indicator)
- `<Button />` (Primary, Secondary)

## 6. The 10 Mandatory States Specification

| State | Visual Behavior & Feedback |
| :--- | :--- |
| **1. Default** | Metric cards show live integers, table displays active gate checks (all green), audit log lists recent 5 entries. |
| **2. Loading** | Skeleton blocks pulse subtly in place of metric tiles; table rows render 4 placeholder lines. |
| **3. Empty** | If zero quality runs exist, show `<EmptyState />` with heading "No Evaluations Executed Yet" and "Run Initial Gate" button. |
| **4. Error** | Red banner at top: "Failed to load audit history from repository storage. [Retry]". |
| **5. Success** | All gate status badges display `PASS` with emerald indicator (`#10b981`). |
| **6. Disabled** | Re-run button shows spinner and disables when an evaluation is currently executing. |
| **7. Unauthorized** | Read-only banner displayed if user lacks write permissions to commit changes. |
| **8. Offline** | Top status indicator shifts to Amber: "Working Offline. Showing cached audit logs." |
| **9. Overflow** | Long repository names or rule descriptions truncate with ellipsis (`max-w-[280px] truncate`) with full text in native tooltip. |
| **10. Large Dataset** | Table paginates at 25 rows per page with keyboard shortcuts (J/K or Left/Right). |
