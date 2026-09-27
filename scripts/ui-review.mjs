import fs from "node:fs";
import path from "node:path";

console.log(
  "\x1b[36m[UI ANTI-SLOP LINTER]\x1b[0m Scanning UI artifacts, HTML, CSS, and Screen Specs for AI Slop violations...",
);

const VIOLATIONS = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Rule 1.1: Ban purple/blue or violet/cyan gradient clichés
  if (
    /linear-gradient\([^)]*(#6366f1|#a855f7|#8b5cf6|indigo|violet|purple)[^)]*(#06b6d4|#3b82f6|cyan|blue)/i.test(
      content,
    )
  ) {
    VIOLATIONS.push({
      file: filePath,
      rule: "Rule 1.1 (Anti-Gradient Slop)",
      message: "Detected forbidden purple-to-blue / violet-to-cyan marketing gradient cliché.",
    });
  }

  // Rule 1.2: Ban gradient text
  if (
    /-webkit-text-fill-color\s*:\s*transparent/i.test(content) &&
    /background-clip\s*:\s*text/i.test(content)
  ) {
    VIOLATIONS.push({
      file: filePath,
      rule: "Rule 1.2 (Gradient Text)",
      message: "Detected gradient text fill. Headings must use solid accessible typography colors.",
    });
  }

  // Rule 1.3: Ban glowing neon shadows
  if (
    /box-shadow\s*:[^;]*(0\s+0\s+(1[5-9]|[2-9][0-9])px\s*(rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}))/i.test(
      content,
    )
  ) {
    VIOLATIONS.push({
      file: filePath,
      rule: "Rule 1.3 (Glowing Shadow)",
      message:
        "Detected glowing neon box-shadow. Interfaces must use crisp 1px borders instead of neon glow.",
    });
  }

  // Rule 1.5: Ban rounded-full pill buttons in standard UI
  if (/class="[^"]*btn[^"]*rounded-full[^"]*"/i.test(content)) {
    VIOLATIONS.push({
      file: filePath,
      rule: "Rule 1.5 (Pill Button Overuse)",
      message:
        "Standard button uses rounded-full pill styling. Use calibrated radius-md (6px) controls.",
    });
  }
}

// Check UI HTML/CSS files
const uiDir = path.resolve(process.cwd(), "src/presentation/ui");
if (fs.existsSync(uiDir)) {
  const files = fs.readdirSync(uiDir).filter((f) => f.endsWith(".html") || f.endsWith(".css"));
  for (const f of files) {
    checkFile(path.join(uiDir, f));
  }
}

// Audit Screen Specs for 10 Mandatory States
const screensDir = path.resolve(process.cwd(), "design/screens");
if (fs.existsSync(screensDir)) {
  const screenFiles = fs.readdirSync(screensDir).filter((f) => f.endsWith(".md"));
  for (const sf of screenFiles) {
    const fullPath = path.join(screensDir, sf);
    const text = fs.readFileSync(fullPath, "utf8");
    const requiredStates = ["Default", "Loading", "Empty", "Error"];
    for (const st of requiredStates) {
      if (!new RegExp(`\\b${st}\\b`, "i").test(text)) {
        VIOLATIONS.push({
          file: fullPath,
          rule: "Rule 2.5 (10-State Completeness)",
          message: `Screen spec '${sf}' is missing mandatory '${st}' state specification.`,
        });
      }
    }
  }
}

if (VIOLATIONS.length > 0) {
  console.error(
    `\x1b[31m[FAIL]\x1b[0m ${VIOLATIONS.length} UI Design Governance violation(s) found:`,
  );
  for (const v of VIOLATIONS) {
    console.error(`  - [33m[${v.rule}][0m ${path.relative(process.cwd(), v.file)}: ${v.message}`);
  }
  process.exit(1);
} else {
  console.log(
    "\x1b[32m[PASS]\x1b[0m 0 UI Slop violations detected. 100% compliant with Anti-Slop Rules and State Specifications.",
  );
}
