# Quality Gate Metrics & Threshold Reference

## 1. Strict Metric Thresholds
Defined in `config/quality-gate.json`:

- **Formatting Violations:** `0` permitted.
- **Linter Errors & Warnings:** `0` permitted.
- **TypeScript Compiler Errors:** `0` permitted (`strict: true`).
- **Architecture Layer Violations:** `0` permitted.
- **Circular Dependencies:** `0` permitted.
- **Hardcoded Secret Leaks:** `0` permitted.
- **Empty Catch Blocks:** `0` permitted.
- **Test Suite Pass Percentage:** `100.0%` required.
- **Max Function Lines:** `50 lines`.
- **Max File Lines (God File limit):** `400 lines`.

## 2. Safe Error Handling Invariants
- Never write `catch (e) {}` or `except: pass`.
- Never write `catch (e) { return null; }` without an explicit result contract.
- Always log, wrap into typed domain exceptions, or rethrow.

