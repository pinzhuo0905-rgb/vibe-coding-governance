# Vibe Coding Governance Skill Integration Guide

This guide explains how to package, install, and invoke the **Vibe Coding Governance Skill** across AI Coding Agents (OpenAI Codex, Claude Code, Cursor, GitHub Copilot, Gemini, and Windsurf).

---

## 1. What is the Governance Skill?

The **Vibe Coding Governance Skill** transforms AI coding agents from fragile code-generators into disciplined, self-verifying engineering contributors. When invoked, it forces the AI agent to:
1. Ingest architectural boundaries and project rules before editing files.
2. Search existing modules to eliminate duplicate helpers and services.
3. Keep control flow flat using guard clauses and early returns (complexity <= 12, lines <= 50).
4. Run the 6-stage automated verification pipeline before finishing turns.
5. Autonomously diagnose and fix root causes when quality gates fail, strictly forbidding `any` or ignore bypasses.

---

## 2. Invocation Methods by AI Agent

### 2.1 OpenAI Codex (Desktop & CLI)
In Codex conversations, simply mention the skill:

```text
$vibe-coding-governance Implement user session expiration and verify all quality gates.
```

Codex will automatically load `SKILL.md`, bind the architectural invariants, execute the verification scripts, and follow the autonomous repair loop.

### 2.2 Claude Code (Anthropic)
Claude Code reads `CLAUDE.md` located in the project root. The Single Source of Truth synchronizer (`npm run rule:sync`) automatically keeps `CLAUDE.md` updated with all governance rules.

You can also instruct Claude Code:
```bash
# Run the skill verification directly in Claude Code
node scripts/invoke-skill.mjs verify
```

### 2.3 Cursor IDE
Cursor automatically loads rules from `.cursor/rules/vibe-governance.mdc` as ambient context for all composer and chat prompts. It applies the inward dependency rules, naming standards, and complexity ceilings automatically during code generation.

### 2.4 GitHub Copilot
Copilot automatically references `.github/copilot-instructions.md` when evaluating PRs, generating inline completions, or responding in Copilot Chat.

---

## 3. CLI Invocation via `invoke-skill.mjs`

The framework includes a standalone CLI runner for invoking governance operations directly:

```bash
# 1. Audit repository governance compliance
node scripts/invoke-skill.mjs audit

# 2. Run the complete 6-stage verification gate with structured diagnostics
node scripts/invoke-skill.mjs verify

# 3. Bootstrap governance files into a new project
node scripts/invoke-skill.mjs init
```

Alternatively, when installed as an npm package:
```bash
npx vibe-governance verify
npx vibe-governance audit
```

---

## 4. Manual Installation into Any Codex Environment

To install this skill globally for your local Codex app:

```bash
# Copy the skill directory into your Codex skills folder
# Windows:
cp -r skills/vibe-coding-governance "$HOME/.codex/skills/"

# macOS / Linux:
cp -r skills/vibe-coding-governance ~/.codex/skills/
```

Once copied, the skill is immediately discoverable as `$vibe-coding-governance` in all Codex tasks and projects.

