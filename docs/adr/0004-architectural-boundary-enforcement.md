# ADR 0004: Inward Dependency Rule and Boundary Enforcement

## Status
Accepted

## Context
In unconstrained development, agents frequently breach module boundaries, creating direct coupling between presentation and database logic or introducing circular import cycles.

## Decision
We implement automated architecture boundary verification (`scripts/arch-check.mjs`) enforcing:
- `domain`: 0 external imports.
- `application`: Imports `domain` only.
- `infrastructure`: Implements application port interfaces.
- `presentation`: Imports `application` and `domain`.
- Any circular import graph immediately fails the build.

## Consequences
- **Positive:** Preserves clean separation of concerns and guarantees that business logic can be tested in isolation.
- **Negative:** Requires creating explicit interfaces (ports) for infrastructure adapters.

