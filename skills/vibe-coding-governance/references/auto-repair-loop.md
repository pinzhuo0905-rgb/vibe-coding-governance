# Autonomous Repair Loop Guidance for AI Agents

## 1. Root Cause Identification
When the quality gate fails, inspect the structured diagnostic report emitted by `npm run quality` or `node scripts/invoke-skill.mjs verify`.

| Failure Category | Diagnostic Cause | Required Action |
| :--- | :--- | :--- |
| **FORMAT** | Code layout or import order drift | Run `npm run format` |
| **LINT** | Dead code, complexity, or unsafe patterns | Refactor into smaller functions, remove unused variables |
| **TYPE_CHECK** | Compiler type mismatch or missing property | Refine domain types; DO NOT cast to `any` |
| **ARCHITECTURE** | Inner layer importing outer layer, or cycle | Invert dependency using an interface port, break cycle |
| **SECURITY** | Hardcoded token or empty catch block | Use environment variables, log or throw domain error |
| **TESTS** | Assertion failure in business logic | Fix domain invariant implementation, never delete tests |

## 2. Forbidden Shortcuts
- ❌ Do NOT add `biome-ignore`, `eslint-disable`, or `type: ignore`.
- ❌ Do NOT delete or weaken test assertions.
- ❌ Do NOT cast variables to `any`.

