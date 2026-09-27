# ADR 0005: Preventing Compatibility Layer Bloat

## Status
Accepted

## Context
AI agents often create "v2" functions or wrapper compatibility layers to avoid modifying existing code, resulting in multiple concurrent implementations doing the same task (`utils.ts`, `utils2.ts`, `legacyAdapter.ts`).

## Decision
The agent must search the repository before creating any new helper or service. When an abstraction is refactored, obsolete compatibility shims must be pruned once callers are migrated.

## Consequences
- **Positive:** Prevents repository bloat and confusing duplicate abstractions.
- **Negative:** Refactoring tasks must touch caller call-sites rather than introducing lazy wrappers.

