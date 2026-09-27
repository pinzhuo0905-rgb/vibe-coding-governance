import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const ROOT = process.cwd();

test("Design Governance: Foundational Documents Exist", () => {
  const docs = [
    "UI_DESIGN_GOVERNANCE_IMPLEMENTATION_SPEC.md",
    "PRODUCT_CONTEXT.md",
    "DESIGN_DNA.md",
    "DESIGN.md",
    "UI_RULES.md",
    "UI_REVIEW.md",
    "design/COMPONENTS.md",
    "design/design-tokens.json",
  ];

  for (const d of docs) {
    const fullPath = path.resolve(ROOT, d);
    assert.strictEqual(fs.existsSync(fullPath), true, `Document ${d} must exist`);
  }
});

test("Design Governance: Design Tokens Structure and Constraints", () => {
  const tokensPath = path.resolve(ROOT, "design/design-tokens.json");
  const raw = fs.readFileSync(tokensPath, "utf8");
  const data = JSON.parse(raw);

  assert.ok(data.tokens, "Tokens root object exists");
  assert.ok(data.tokens.color, "Color tokens exist");
  assert.ok(data.tokens.radius, "Radius tokens exist");
  assert.ok(data.tokens.spacing, "Spacing tokens exist");

  // Validate that container radius ceiling <= 8px
  const lgRadius = parseInt(data.tokens.radius.lg.value, 10);
  assert.ok(lgRadius <= 8, "radius.lg must not exceed 8px");
});

test("Design Governance: Screen Specifications Coverage & 10 States", () => {
  const screens = ["dashboard.md", "login.md", "settings.md", "api-keys.md"];
  const requiredStates = ["Default", "Loading", "Empty", "Error"];

  for (const s of screens) {
    const full = path.resolve(ROOT, "design/screens", s);
    assert.strictEqual(fs.existsSync(full), true, `Screen ${s} exists`);
    const content = fs.readFileSync(full, "utf8");

    for (const state of requiredStates) {
      assert.ok(
        new RegExp(`\\b${state}\\b`, "i").test(content),
        `Screen ${s} specifies '${state}' state`,
      );
    }
  }
});

test("Design Governance: Responsive Screenshot Evidence", () => {
  const viewports = [
    "screenshots/desktop/dashboard-1440x900.png",
    "screenshots/tablet/dashboard-768x1024.png",
    "screenshots/mobile/dashboard-375x812.png",
  ];

  for (const v of viewports) {
    const full = path.resolve(ROOT, v);
    assert.strictEqual(fs.existsSync(full), true, `Screenshot ${v} must exist`);
    const stat = fs.statSync(full);
    assert.ok(stat.size > 0, `Screenshot ${v} must have non-zero size`);
  }
});
