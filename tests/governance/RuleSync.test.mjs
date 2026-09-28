import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

test("Rule sync engine synchronizes AGENTS.md across all target files", () => {
  const targets = [
    "CLAUDE.md",
    "GEMINI.md",
    ".cursor/rules/vibe-governance.mdc",
    ".github/copilot-instructions.md",
    ".windsurfrules",
  ];

  for (const target of targets) {
    const filePath = path.resolve(process.cwd(), target);
    assert.ok(fs.existsSync(filePath), `Target file ${target} must exist`);
    const content = fs.readFileSync(filePath, "utf8");
    assert.ok(content.includes("Universal Vibe Coding Code Quality Governance Constitution"));
    assert.ok(content.includes("Definition of Done"));
  }
});
