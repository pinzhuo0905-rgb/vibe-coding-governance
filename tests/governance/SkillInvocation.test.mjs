import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

test("SKILL.md exists and contains valid frontmatter", () => {
  const skillPath = path.resolve(process.cwd(), "skills/vibe-coding-governance/SKILL.md");
  assert.ok(fs.existsSync(skillPath), "SKILL.md must exist");

  const content = fs.readFileSync(skillPath, "utf8");
  assert.ok(content.startsWith("---"), "Must start with frontmatter delimiter");
  assert.ok(content.includes("name: vibe-coding-governance"), "Must specify correct skill name");
  assert.ok(content.includes("description:"), "Must include description");
});

test("Skill references directory contains required reference guides", () => {
  const refDir = path.resolve(process.cwd(), "skills/vibe-coding-governance/references");
  assert.ok(fs.existsSync(refDir), "references directory must exist");

  const expectedFiles = ["architecture-rules.md", "quality-gate-metrics.md", "auto-repair-loop.md"];

  for (const file of expectedFiles) {
    const full = path.join(refDir, file);
    assert.ok(fs.existsSync(full), `Reference ${file} must exist`);
  }
});

test("invoke-skill.mjs CLI responds cleanly to --help", () => {
  const output = execSync("node scripts/invoke-skill.mjs --help", { encoding: "utf8" });
  assert.ok(output.includes("VIBE CODING GOVERNANCE SKILL INVOCATION CLI"));
  assert.ok(output.includes("verify"));
  assert.ok(output.includes("audit"));
});

test("invoke-skill.mjs audit validates 100% repository compliance", () => {
  const output = execSync("node scripts/invoke-skill.mjs audit", { encoding: "utf8" });
  assert.ok(output.includes("Governance Compliance Score: 100%"));
  assert.ok(output.includes("[EXCELLENT]"));
});
