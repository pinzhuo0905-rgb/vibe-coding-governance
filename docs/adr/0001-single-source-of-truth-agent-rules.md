# ADR 0001: Single Source of Truth for Multi-Agent Rules

## Status
Accepted

## Context
With developers employing multiple AI Coding Agents (Codex, Claude Code, Cursor, Copilot, Gemini, Windsurf), prompt instructions and repository rules frequently diverge across different files (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules`, `.github/copilot-instructions.md`). This causes inconsistent agent behavior, conflicting refactorings, and rule fragmentation.

## Decision
We establish `AGENTS.md` as the authoritative Single Source of Truth (SSOT). All vendor-specific rule files are strictly generated and synchronized using `npm run rule:sync` (`scripts/rule-sync.mjs`). Direct edits to downstream agent files are prohibited.

## Consequences
- **Positive:** Zero rule drift; all AI agents adhere to identical constraints and Definition of Done.
- **Negative:** Requires running the synchronization script whenever `AGENTS.md` is updated (enforced via pre-commit and CI).

