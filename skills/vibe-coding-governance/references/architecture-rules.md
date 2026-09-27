# Architecture Rules Reference

## 1. The Inward Dependency Rule
All source code dependencies must point inwards towards the domain core:

- **Domain (`src/domain/`):** Zero external dependencies. Encapsulates business entities, immutable value objects, domain errors, and repository interfaces (ports).
- **Application (`src/application/`):** Coordinates use cases and DTO mapping. Depends solely on the Domain layer.
- **Infrastructure (`src/infrastructure/`):** Implements repository port interfaces, database persistence, external clients, and technical helpers. Depends on Domain and Application.
- **Presentation (`src/presentation/`):** Entrypoints, CLI handlers, API controllers. Depends on Application; never touches Infrastructure directly.

## 2. Circular Import Prohibitions
Cyclic dependencies (e.g., A imports B, B imports A) are strictly blocked. Cycles prevent modular reasoning, break tree-shaking, and create fragile startup initialization order issues.

## 3. Monolithic God File Prevention
Any file exceeding **400 lines of code** is flagged by the architecture checker. Decompose large files into focused sub-modules.

