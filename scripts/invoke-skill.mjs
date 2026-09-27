import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ARGS = process.argv.slice(2);
const COMMAND = ARGS[0] || "--help";

function printHelp() {
  console.log(
    "\x1b[1m\x1b[35m======================================================================\x1b[0m",
  );
  console.log(
    "\x1b[1m\x1b[35m       VIBE CODING GOVERNANCE SKILL INVOCATION CLI                   \x1b[0m",
  );
  console.log(
    "\x1b[1m\x1b[35m======================================================================\x1b[0m\n",
  );
  console.log("Usage: node scripts/invoke-skill.mjs <command>\n");
  console.log("Commands:");
  console.log("  verify   Execute the 6-stage automated quality verification pipeline");
  console.log("  audit    Audit the repository against governance standards and score readiness");
  console.log("  init     Bootstrap governance configurations and AGENTS.md into a project");
  console.log("  --help   Show this help message\n");
  console.log("Examples:");
  console.log("  node scripts/invoke-skill.mjs verify");
  console.log("  node scripts/invoke-skill.mjs audit");
  console.log("  npx vibe-governance verify\n");
}

function runVerify() {
  console.log("\x1b[34m[SKILL INVOKE]\x1b[0m Executing full verification funnel...\n");
  try {
    execSync("node scripts/verify-fix-loop.mjs", { stdio: "inherit" });
    process.exit(0);
  } catch (error) {
    const exitCode =
      error && typeof error === "object" && "status" in error ? Number(error.status) : 1;
    console.error(
      `\x1b[31m[SKILL VERIFY FAILED]\x1b[0m Quality gate rejected with exit code ${exitCode}.`,
    );
    process.exit(exitCode);
  }
}

function runAudit() {
  console.log(
    "\x1b[1m\x1b[36m=== Auditing Repository Code Quality Governance Compliance ===\x1b[0m\n",
  );
  const checks = [
    { name: "AGENTS.md Constitution", file: "AGENTS.md", required: true },
    { name: "Architecture Specification", file: "ARCHITECTURE.md", required: true },
    { name: "Quality Gate Metric Thresholds", file: "config/quality-gate.json", required: true },
    { name: "Static Linter / Formatter Config", file: "biome.json", required: true },
    { name: "CI Quality Workflow", file: ".github/workflows/quality.yml", required: true },
    { name: "Unified Quality Runner Script", file: "scripts/verify-fix-loop.mjs", required: true },
    { name: "Architecture Enforcer Script", file: "scripts/arch-check.mjs", required: true },
    { name: "Security Check Script", file: "scripts/security-check.mjs", required: true },
    { name: "Multi-Agent Sync Script", file: "scripts/rule-sync.mjs", required: true },
  ];

  let passed = 0;
  for (const c of checks) {
    const exists = fs.existsSync(path.resolve(process.cwd(), c.file));
    if (exists) {
      console.log(`  ✓ [PASS] ${c.name} (${c.file})`);
      passed++;
    } else {
      console.log(`  ✗ [FAIL] ${c.name} (${c.file}) - Missing`);
    }
  }

  const score = Math.round((passed / checks.length) * 100);
  console.log(
    `\nGovernance Compliance Score: ${score}% (${passed}/${checks.length} components present)\n`,
  );

  if (score === 100) {
    console.log(
      "\x1b[32m[EXCELLENT] Repository is 100% compliant with Vibe Coding Governance standards.\x1b[0m",
    );
    process.exit(0);
  } else {
    console.log(
      "\x1b[33m[ACTION NEEDED] Some governance components are missing. Run 'init' to bootstrap.\x1b[0m",
    );
    process.exit(1);
  }
}

function runInit() {
  console.log("\x1b[34m[SKILL INIT]\x1b[0m Bootstrapping governance files...");
  try {
    execSync("node scripts/rule-sync.mjs", { stdio: "inherit" });
    console.log("\x1b[32m[SUCCESS] Governance rules and multi-agent configs initialized.\x1b[0m");
    process.exit(0);
  } catch (err) {
    console.error("\x1b[31m[ERROR] Initialization failed:\x1b[0m", err);
    process.exit(1);
  }
}

switch (COMMAND) {
  case "verify":
    runVerify();
    break;
  case "audit":
    runAudit();
    break;
  case "init":
    runInit();
    break;
  default:
    printHelp();
    process.exit(0);
}
