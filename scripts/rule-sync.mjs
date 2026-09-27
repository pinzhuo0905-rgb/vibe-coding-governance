import fs from "node:fs";
import path from "node:path";

const AGENTS_MD_PATH = path.resolve(process.cwd(), "AGENTS.md");

const TARGETS = [
  {
    path: path.resolve(process.cwd(), "CLAUDE.md"),
    name: "Claude Code Rules",
    format: "markdown",
  },
  {
    path: path.resolve(process.cwd(), "GEMINI.md"),
    name: "Gemini Agent Rules",
    format: "markdown",
  },
  {
    path: path.resolve(process.cwd(), ".cursor/rules/vibe-governance.mdc"),
    name: "Cursor IDE Governance Rule",
    format: "cursor",
  },
  {
    path: path.resolve(process.cwd(), ".github/copilot-instructions.md"),
    name: "GitHub Copilot Instructions",
    format: "markdown",
  },
  {
    path: path.resolve(process.cwd(), ".windsurfrules"),
    name: "Windsurf Rules",
    format: "markdown",
  },
];

if (!fs.existsSync(AGENTS_MD_PATH)) {
  console.error("\x1b[31m[ERROR] AGENTS.md not found. Cannot synchronize agent rules.\x1b[0m");
  process.exit(1);
}

const agentsContent = fs.readFileSync(AGENTS_MD_PATH, "utf8");

console.log("\x1b[36m=== Synchronizing AI Agent Rules from AGENTS.md ===\x1b[0m");

for (const target of TARGETS) {
  const targetDir = path.dirname(target.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let finalContent = "";

  if (target.format === "cursor") {
    finalContent = `---
description: Universal Vibe Coding Code Quality Governance & Architecture Constraints
globs: **/*
alwaysApply: true
---
<!-- AUTO-GENERATED FROM AGENTS.md - DO NOT EDIT DIRECTLY -->
<!-- Run 'npm run rule:sync' to propagate changes from AGENTS.md -->

${agentsContent}
`;
  } else {
    finalContent = `<!-- AUTO-GENERATED FROM AGENTS.md - DO NOT EDIT DIRECTLY -->
<!-- Run 'npm run rule:sync' to propagate changes from AGENTS.md -->

${agentsContent}
`;
  }

  fs.writeFileSync(target.path, finalContent, "utf8");
  console.log(`  ✓ Synced to ${path.relative(process.cwd(), target.path)}`);
}

console.log(
  "\x1b[32m[SUCCESS] All agent rule files synchronized successfully from AGENTS.md.\x1b[0m",
);
