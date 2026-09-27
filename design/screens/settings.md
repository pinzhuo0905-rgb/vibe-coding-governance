# Screen Specification: Governance Settings & Policies

> **Screen ID:** `SCREEN-003` | **Route:** `/settings` | **Target Density:** High

---

## 1. Screen Purpose
Configure repository-level code quality thresholds, design token sync targets, architectural rules, and autonomous repair limits.

## 2. Primary User Task
Adjust quality gate thresholds (e.g. maximum function length, complexity limit) and save changes with immediate validation.

## 3. Information Architecture
- Left tab navigation: General, Quality Gates, Architecture, Design Tokens, Agent Limits, Notifications.
- Main pane: Structured form sections with toggle switches, number steppers, and token preview panels.
- Sticky bottom action bar: "Save Changes" (Primary Button) and "Discard" (Secondary Button), enabled only when dirty state exists.

## 4. The 10 Mandatory States Specification

| State | Visual Behavior & Feedback |
| :--- | :--- |
| **1. Default** | Form displays current values loaded from `config/quality-gate.json`. |
| **2. Loading** | Input fields render skeleton placeholder bars while asynchronous configuration loads. |
| **3. Empty** | In custom rules tab, if no custom rules exist, render EmptyState with "Add Custom Rule" CTA. |
| **4. Error** | Specific field highlighted with red border and message: "Complexity threshold must be an integer between 1 and 25." |
| **5. Success** | Transient green toast notification: "Configuration successfully saved and applied to CI/CD." |
| **6. Disabled** | Save button remains disabled until dirty state is detected. |
| **7. Unauthorized** | Read-only mode with lock icon if user lacks repository admin privileges. |
| **8. Offline** | Top banner: "Working offline. Changes will queue locally and sync when reconnected." |
| **9. Overflow** | Long regex rule patterns scroll horizontally inside code block without wrapping awkwardly. |
| **10. Large Dataset** | Rule catalog paginated or virtualized when exceeding 50 configured rules. |
