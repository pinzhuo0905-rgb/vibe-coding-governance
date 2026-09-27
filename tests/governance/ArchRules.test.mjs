import test from "node:test";
import assert from "node:assert";
import { execSync } from "node:child_process";

test("Architecture checker passes cleanly against production src/", () => {
  const output = execSync("node scripts/arch-check.mjs", { encoding: "utf8" });
  assert.ok(output.includes("[PASSED] Architecture checks clean"));
});

test("Security checker passes cleanly against repository codebase", () => {
  const output = execSync("node scripts/security-check.mjs", { encoding: "utf8" });
  assert.ok(output.includes("[PASSED] Security and safe error handling scan clean"));
});
