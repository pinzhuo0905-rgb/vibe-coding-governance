# ADR 0002: Multi-Layered Automated Verification Pipeline

## Status
Accepted

## Context
Vibe coding relies heavily on immediate, generative feedback. Relying solely on prompts or human code review leads to compounding architectural debt, hidden type errors, and regressions.

## Decision
We implement a deterministic 6-stage automated verification pipeline:
1. Code Formatting (Biome)
2. Static Linting & Antipattern Detection (Biome)
3. Strict Type Checking (TypeScript Compiler)
4. Architecture & Circular Dependency Audit (`scripts/arch-check.mjs`)
5. Security & Safe Error Handling Scan (`scripts/security-check.mjs`)
6. Automated Unit & Integration Test Suite (`node --test`)

A unified command (`npm run quality`) wraps all stages.

## Consequences
- **Positive:** Immediate deterministic feedback within 2-3 seconds; prevents low-quality code from entering the repository.
- **Negative:** Agents must iterate until all stages pass, requiring slightly more tokens per task.

