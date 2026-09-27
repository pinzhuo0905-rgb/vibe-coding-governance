import fs from "node:fs";
import path from "node:path";

const TOKENS_PATH = path.resolve(process.cwd(), "design/design-tokens.json");

console.log("\x1b[36m[DESIGN TOKENS]\x1b[0m Auditing design-tokens.json...");

if (!fs.existsSync(TOKENS_PATH)) {
  console.error("\x1b[31m[FAIL]\x1b[0m design/design-tokens.json does not exist!");
  process.exit(1);
}

try {
  const content = fs.readFileSync(TOKENS_PATH, "utf8");
  const data = JSON.parse(content);

  if (!data.tokens) {
    throw new Error("Missing root 'tokens' object in design-tokens.json");
  }

  const requiredCategories = [
    "color",
    "typography",
    "spacing",
    "radius",
    "control",
    "shadow",
    "breakpoints",
  ];
  for (const cat of requiredCategories) {
    if (!data.tokens[cat]) {
      throw new Error(`Missing required token category: '${cat}'`);
    }
  }

  // Validate color token entries
  const requiredColors = [
    "canvas",
    "surface",
    "borderStrong",
    "textPrimary",
    "accentPrimary",
    "statusSuccess",
    "statusDanger",
  ];
  for (const color of requiredColors) {
    if (!data.tokens.color[color]?.value) {
      throw new Error(`Missing required color token: 'color.${color}'`);
    }
  }

  // Validate radius boundaries (Max 8px for standard containers)
  if (data.tokens.radius.lg && parseInt(data.tokens.radius.lg.value, 10) > 8) {
    throw new Error(
      `Token violation: radius.lg (${data.tokens.radius.lg.value}) exceeds 8px maximum ceiling!`,
    );
  }

  console.log(
    "\x1b[32m[PASS]\x1b[0m All design token schemas, spatial scales, and color hierarchies verified successfully.",
  );
} catch (err) {
  console.error("\x1b[31m[ERROR]\x1b[0m Design Token Validation Failed:", err.message);
  process.exit(1);
}
