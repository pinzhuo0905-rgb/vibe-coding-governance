# Universal Vibe Coding Code Quality Governance & Autonomous Agent Enforcement Framework

[![Quality Gate](https://img.shields.io/badge/Quality%20Gate-100%25%20PASS-brightgreen.svg)](#unified-quality-command)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8%20Strict-blue.svg)](https://www.typescriptlang.org/)
[![Linter & Formatter](https://img.shields.io/badge/Biome-Strict%20Enforced-60a5fa.svg)](https://biomejs.dev/)
[![Architecture](https://img.shields.io/badge/Architecture-Clean%20%2F%20Inward%20Rule-purple.svg)](#clean-architecture-and-inward-dependency-rules)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Core Philosophy:** *AI coding agents are free to generate functionality rapidly, but are strictly prohibited from degrading project architecture, safety, or quality.*

---

## 1. Problem Statement: The Reality of Uncontrolled Vibe Coding

Generative AI coding tools (OpenAI Codex, Claude Code, Cursor, Copilot, Gemini, Windsurf) have supercharged feature development speed. However, unconstrained "Vibe Coding" creates silent, exponential architectural debt:

- **Style Disparity:** Uncoordinated formatting choices across agent sessions.
- **Duplicate Abstractions:** Agents creating redundant helpers, services, validators, and mappers rather than searching existing modules.
- **God Modules & Classes:** Agents continuously appending logic to existing files, creating 5,000-line monolithic files.
- **Circular Dependencies & Layer Bleed:** Rapid prototyping causing tangled import graphs and cross-layer coupling (e.g. presentation directly touching databases).
- **Patch-on-Patch Workarounds:** Masking symptoms by adding `if` ladders without addressing root-cause domain invariants.
- **Silent Error Swallowing:** Pervasive `catch (e) {}`, `except: pass`, or returning `null` on failure, destroying observability.
- **Type System Evasion:** Indiscriminate use of `any`, unchecked type assertions, and suppressed warnings to force CI green.

![Vibe Coding Paradigm Shift](docs/images/vibe-coding-paradigm-shift.svg)

This framework transforms development from **hope-based vibe coding** to **resilient automated engineering**:
> **Do not expect AI agents to always write pristine code on the first attempt. Instead, build an automated engineering system that deterministically detects defects and guides the agent to repair them autonomously.**

---

## 2. Multi-Layer Quality Verification Pipeline

The framework deploys a 10-tier automated verification funnel. Code must pass through every stage sequentially before it is permitted to merge.

![Multi-Layer Governance Pipeline](docs/images/governance-pipeline.svg)

### The Verification Layers:

```mermaid
flowchart TD
    Prompt[Human Requirement] --> Agent[AI Coding Agent]
    Agent --> Rules[Read AGENTS.md & Architecture]
    Rules --> Search[Search Existing Modules & Helpers]
    Search --> CodeGen[Generate Minimal Atomic Change]
    
    subgraph Funnel [Automated Verification Pipeline]
        L1[1. Formatter Layer - Biome]
        L2[2. Linter & Antipatterns - Biome]
        L3[3. Strict Type Checker - tsc]
        L4[4. Architecture Boundary Checker - arch-check]
        L5[5. Security & Secret Scanner - security-check]
        L6[6. Test Suite & Regressions - node:test]
        L7[7. Quality Gate Decision]
    end
    
    CodeGen --> L1 --> L2 --> L3 --> L4 --> L5 --> L6 --> L7
    
    L7 --> Decision{Passed?}
    Decision -- NO --> Repair[Autonomous Root Cause Repair Loop]
    Repair --> CodeGen
    Decision -- YES --> Commit[Commit & Create Pull Request]
    Commit --> CI[Continuous Integration Pipeline]
```

1. **Code Formatter Layer (Biome / Spotless / Black / rustfmt):** Standardizes indentation, line wraps, import sorting, and layout. Eliminates all styling disputes.
2. **Linter & Antipattern Layer (Biome / Ruff / Clippy):** Detects dead code, cognitive complexity (> 12), deep nesting (> 2 levels), and dangerous coercions.
3. **Strict Type Checking Layer (TypeScript `tsc` / Pyright / Compiler):** Enforces strict null safety. Forbids `any` escape hatches.
4. **Architecture Boundary Layer (`scripts/arch-check.mjs`):** Enforces the Inward Dependency Rule and prohibits circular dependency cycles.
5. **Security & Safe Error Handling Layer (`scripts/security-check.mjs`):** Detects hardcoded credentials, secret tokens, and forbids empty catch blocks.
6. **Automated Test Suite (`node:test` / pytest / JUnit):** Executes unit tests and regression tests ensuring domain invariants hold.
7. **Quality Gate Decision Matrix:** Hard blocking threshold enforcing zero tolerance for regressions.

---

## 3. Agent Autonomous Verification & Auto-Repair Loop

When a quality gate check fails, the framework prevents superficial bypasses and triggers the **Autonomous Repair Loop**:

![Agent Auto-Repair Loop](docs/images/agent-auto-repair-loop.svg)

```text
while quality_checks_failed:
    inspect_diagnostic_failure()
    identify_root_cause()
    refuse_bypasses(no_any, no_ignore, no_test_deletion)
    modify_code_structure()
    rerun_quality_pipeline()
```

### Strict Repair Rules for AI Agents:
- ❌ **Forbidden:** Adding `biome-ignore`, `eslint-disable`, or `type: ignore` to bypass warnings.
- ❌ **Forbidden:** Casting variables to `any` to appease the type checker.
- ❌ **Forbidden:** Deleting or commenting out failing test assertions to pass CI.
- ❌ **Forbidden:** Adding another superficial `if` condition to patch symptoms without root cause analysis.
- ✅ **Required:** Fix the underlying domain model, interface contract, or boundary violation.

---

## 4. Clean Architecture and Inward Dependency Rules

The codebase adheres strictly to **Clean Layered Architecture (Ports & Adapters)**.

![Clean Architecture Boundaries](docs/images/clean-architecture-boundaries.svg)

### Dependency Rules:
| Layer | Directory | Allowed Dependencies | Primary Responsibility |
| :--- | :--- | :--- | :--- |
| **Domain** | `src/domain/` | **None** (Zero outer imports) | Pure business entities, value objects, domain errors. |
| **Application** | `src/application/` | `src/domain/` | Orchestrating use cases, DTOs, repository port interfaces. |
| **Infrastructure** | `src/infrastructure/` | `src/domain/`, `src/application/` | Implementing repository ports, persistence, security utilities. |
| **Presentation** | `src/presentation/` | `src/application/`, `src/domain/` | CLI dispatchers, API controllers, argument parsers. |

```mermaid
flowchart LR
    Presentation -->|invokes| Application
    Application -->|operates on| Domain
    Infrastructure -.implements port.-> Application
    Infrastructure -->|persists| Domain
```

---

## 5. Multi-Agent Rule Synchronization (SSOT)

To prevent rule drift across disparate development environments, `AGENTS.md` acts as the **Single Source of Truth (SSOT)**.

![Multi-Agent Rule Synchronization](docs/images/multi-agent-rule-sync.svg)

Running `npm run rule:sync` propagates all constitutional constraints into:
- `CLAUDE.md` (Claude Code / Anthropic agents)
- `GEMINI.md` (Gemini CLI / Google agents)
- `.cursor/rules/vibe-governance.mdc` (Cursor IDE ambient context)
- `.github/copilot-instructions.md` (GitHub Copilot repository rules)
- `.windsurfrules` (Windsurf IDE cascade rules)

---

## 6. Quick Start & Unified Quality Commands

### 6.1 Installation
```bash
# Clone the repository
git clone https://github.com/pinzhuo0905-rgb/vibe-coding-governance.git
cd vibe-coding-governance

# Install dependencies
npm install
```

### 6.2 Execute Unified Quality Verification
A single unified command executes all verification tiers:

```bash
# Run complete verification gate (NPM)
npm run quality

# Or run via cross-platform shell wrappers:
./scripts/quality.sh     # Linux / macOS
.\scripts\quality.ps1   # Windows PowerShell
```

### 6.3 Granular Commands
```bash
npm run format           # Auto-format all source, test, and script files
npm run format:check     # Check formatting without writing
npm run lint             # Run static linter and antipattern checks
npm run lint:fix         # Auto-fix safe linter warnings
npm run typecheck        # Strict TypeScript compiler verification
npm run arch:check       # Validate layer boundaries and circular dependencies
npm run security:check   # Scan for hardcoded credentials and empty catches
npm run test             # Run complete unit, integration, and governance tests
npm run rule:sync        # Synchronize AGENTS.md across all AI agent targets
npm run generate:diagrams # Generate standalone vector SVG diagrams
```

---

## 7. Repository Directory Structure

```text
vibe-coding-governance/
├── .cursor/
│   └── rules/
│       └── vibe-governance.mdc       # Auto-synced Cursor IDE rule
├── .github/
│   ├── copilot-instructions.md       # Auto-synced Copilot instructions
│   └── workflows/
│       └── quality.yml               # GitHub Actions 10-tier CI pipeline
├── config/
│   ├── quality-gate.json             # Non-negotiable quality thresholds
│   └── semgrep/
│       └── rules.yml                 # Cross-language static analysis rules
├── docs/
│   ├── adr/                          # Architecture Decision Records
│   │   ├── 0001-single-source-of-truth-agent-rules.md
│   │   ├── 0002-multi-layered-automated-verification-pipeline.md
│   │   ├── 0003-automated-repair-loop-and-root-cause-analysis.md
│   │   ├── 0004-architectural-boundary-enforcement.md
│   │   └── 0005-preventing-compatibility-layer-bloat.md
│   └── images/                       # Standalone SVG architectural diagrams
│       ├── agent-auto-repair-loop.svg
│       ├── clean-architecture-boundaries.svg
│       ├── governance-pipeline.svg
│       ├── multi-agent-rule-sync.svg
│       └── vibe-coding-paradigm-shift.svg
├── scripts/
│   ├── arch-check.mjs                # Architectural boundary & cycle enforcer
│   ├── generate-diagrams.mjs         # Vector diagram generator
│   ├── quality.ps1                   # Windows unified quality runner
│   ├── quality.sh                    # POSIX unified quality runner
│   ├── rule-sync.mjs                 # Multi-agent SSOT synchronizer
│   ├── security-check.mjs            # Secret & error contract scanner
│   └── verify-fix-loop.mjs           # Quality gate runner with diagnostic loop
├── src/                              # Clean Architecture Reference System
│   ├── domain/                       # Core Enterprise Domain
│   │   ├── entities/
│   │   ├── errors/
│   │   ├── repositories/
│   │   └── value-objects/
│   ├── application/                  # Orchestration & Use Cases
│   │   ├── dto/
│   │   └── use-cases/
│   ├── infrastructure/               # Adapters & Implementations
│   │   ├── persistence/
│   │   └── security/
│   ├── presentation/                 # CLI & Entrypoint
│   │   └── cli/
│   └── index.ts
├── tests/
│   ├── governance/                   # Governance toolchain verification
│   ├── integration/                  # End-to-end pipeline tests
│   └── unit/                         # Domain & application unit tests
├── .gitignore
├── .gitleaks.toml                    # Secret scanning pattern definitions
├── .windsurfrules                    # Auto-synced Windsurf rules
├── AGENTS.md                         # Authoritative Agent Constitution
├── ARCHITECTURE.md                   # System Architecture Specification
├── CLAUDE.md                         # Auto-synced Claude Code rules
├── CODE_QUALITY.md                   # Engineering Manual & Tool Rationale
├── CODE_QUALITY_IMPLEMENTATION_PLAN.md # Phased Rollout & Tool Matrix
├── CONTRIBUTING.md                   # Contribution & Commit Standards
├── GEMINI.md                         # Auto-synced Gemini rules
├── package.json
└── tsconfig.json                     # Strict TypeScript configuration
```

---

## 8. Definition of Done (DoD)

A task is strictly considered **Done** only when:

1. [x] **Format PASS:** Code satisfies Biome formatter specifications.
2. [x] **Lint PASS:** Zero linter warnings or errors.
3. [x] **Type Check PASS:** TypeScript compiles under strict mode with zero `any` types.
4. [x] **Architecture PASS:** Zero boundary violations and zero circular dependencies.
5. [x] **Security PASS:** Zero hardcoded secrets and zero empty catch blocks.
6. [x] **Tests PASS:** 100% test pass rate with coverage for newly added logic.
7. [x] **SSOT Sync PASS:** `npm run rule:sync` verified with zero drift.

---

## 9. License

This project is licensed under the **MIT License**.

