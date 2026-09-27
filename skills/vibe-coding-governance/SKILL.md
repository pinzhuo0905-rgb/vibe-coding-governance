---
name: vibe-coding-governance
description: Enforce Vibe Coding code quality governance, clean architectural boundaries, automated multi-tier verification (Biome, tsc, arch-check, security-check), and agent autonomous self-repair loops. Use when an AI coding agent is implementing features, refactoring, fixing bugs, or auditing code quality to prevent architectural degradation, duplicate modules, god files, and silent error swallowing.
metadata:
  short-description: Vibe Coding Code Quality Governance & Agent Enforcement
---

# Vibe Coding Code Quality Governance & Autonomous Enforcement Skill

Empower AI Coding Agents to maintain strict architectural discipline, eliminate technical debt, prevent module duplication, and autonomously verify code through deterministic quality gates during generative programming tasks.

---

## 1. Core Principles

**AI Generation + Automated Verification + Autonomous Repair.**
Do not rely on AI agents to always write pristine code on the first attempt. Instead, enforce an automated engineering harness where:
> **AI Coding Agents are free to rapidly generate functionality, but are strictly prohibited from degrading project architecture, safety, or quality.**

---

## 2. When to Use This Skill

Apply this skill whenever you are tasked with:
- Implementing new business features, endpoints, or services in an AI-assisted codebase.
- Refactoring, modularizing, or splitting large files (God Modules > 400 lines).
- Auditing a repository for code decay (circular imports, duplicate helpers, silent catch blocks).
- Setting up or synchronizing AI agent rules across Claude Code, Cursor, Copilot, Gemini, or Codex.
- Executing the pre-commit quality gate and resolving verification failures.

---

## 3. The 5 Non-Negotiable Invariants

1. **Inward Dependency Rule:**
   - `Domain`: Pure business logic, entities, value objects. **Zero external dependencies.**
   - `Application`: Use cases and repository ports. Depends **only** on Domain.
   - `Infrastructure`: Implements repository ports and technical adapters. Isolated from Presentation.
   - `Presentation`: CLI, API controllers, and formatters. Depends on Application; never touches Infrastructure directly.
2. **Zero Circular Dependencies:**
   - Any cyclic import (A → B → A) indicates broken domain boundaries and fails the quality gate immediately.
3. **Complexity Ceiling & Guard Clauses:**
   - Function length must be **<= 50 lines**.
   - Cyclomatic complexity must be **<= 12**.
   - Nested `if` ladders are forbidden beyond 2 levels; use guard clauses and early returns.
4. **Transparent Error Contracts:**
   - **No Empty Catch Blocks:** `catch (e) {}` and `except: pass` are strictly blocked.
   - **No Silent Error Swallowing:** Never write `catch (e) { return null; }` unless `null` is an explicitly documented and typed return contract.
   - Throw semantic domain exceptions (`UserNotFoundError`, `InvalidMetricValueError`).
5. **No Type System Evasion:**
   - Never use `any`, unchecked casts, `@SuppressWarnings`, or `type: ignore` merely to pass compiler checks. The type checker is your primary automated reviewer.

---

## 4. Agent Autonomous Execution Protocol

Whenever assigned an engineering task, execute this 5-stage lifecycle:

```text
1. INGEST CONTEXT:
   - Read AGENTS.md and ARCHITECTURE.md.
   - Understand domain boundaries and repository interfaces.

2. SEARCH BEFORE WRITING:
   - Search the repository for existing utilities, validators, mappers, or services.
   - REUSE existing abstractions. Never create parallel duplicates (e.g. utils2.ts).

3. MINIMAL ATOMIC IMPLEMENTATION:
   - Implement the minimal required change.
   - Write unit tests for new business logic; add regression tests for bug fixes.

4. EXECUTE QUALITY VERIFICATION:
   - Run the unified quality gate command:
     npm run quality
     # or: npx vibe-coding-governance verify
     # or: ./scripts/quality.sh / .\scripts\quality.ps1

5. AUTONOMOUS SELF-REPAIR LOOP:
   - If ANY check fails:
     a. Inspect the structured diagnostic output.
     b. Diagnose the underlying root cause.
     c. Refuse superficial bypasses (DO NOT add ignore comments, DO NOT cast to any, DO NOT delete tests).
     d. Modify domain/architecture structure.
     e. Re-run quality gate until 100% PASS.
```

---

## 5. Skill Invocation Methods

### Method 1: Prompt Mention in Codex
Mention the skill name directly in your task prompt:
```text
$vibe-coding-governance Please implement the order cancellation feature and ensure full governance compliance.
```

### Method 2: CLI Command Runner
Run the governance skill CLI directly from the terminal or script runner:
```bash
# Audit the current repository against governance standards
node scripts/invoke-skill.mjs audit

# Run complete verification gate with structured agent diagnostic output
node scripts/invoke-skill.mjs verify

# Initialize governance infrastructure into a new or existing repository
node scripts/invoke-skill.mjs init
```

### Method 3: Multi-Agent Rules Synchronization
Keep downstream agent rules (Cursor, Claude, Copilot, Gemini, Windsurf) synchronized with the central constitution:
```bash
npm run rule:sync
```

---

## 6. Supporting References

- **Architecture Rules & Inward Dependency Guide:** `references/architecture-rules.md`
- **Quality Gate Metrics & Threshold Definitions:** `references/quality-gate-metrics.md`
- **Autonomous Repair Loop & Root Cause Diagnosis:** `references/auto-repair-loop.md`

