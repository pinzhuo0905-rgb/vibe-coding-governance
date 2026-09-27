import { execSync } from "node:child_process";

const STEPS = [
  {
    name: "1. Code Format Verification",
    command: "npx @biomejs/biome format src tests scripts",
    fixCommand: "npx @biomejs/biome format --write src tests scripts",
    category: "FORMAT",
  },
  {
    name: "2. Static Linting & Antipatterns",
    command: "npx @biomejs/biome lint src tests scripts",
    fixCommand: "npx @biomejs/biome lint --write src tests scripts",
    category: "LINT",
  },
  {
    name: "3. Strict Type Checking",
    command: "npx tsc --noEmit",
    fixCommand: "Inspect TypeScript compiler errors and refine domain types",
    category: "TYPE_CHECK",
  },
  {
    name: "4. Architecture Boundaries & Cycle Detection",
    command: "node scripts/arch-check.mjs",
    fixCommand: "Ensure inner layers do not import outer layers and break circular dependencies",
    category: "ARCHITECTURE",
  },
  {
    name: "5. Security & Safe Error Handling Audit",
    command: "node scripts/security-check.mjs",
    fixCommand: "Remove hardcoded secrets, remove empty catch blocks, and avoid 'any' bypasses",
    category: "SECURITY",
  },
  {
    name: "6. Unit & Integration Test Suite",
    command:
      "node --experimental-strip-types --test tests/unit/*.test.ts tests/integration/*.test.ts tests/governance/*.test.mjs",
    fixCommand: "Investigate broken test assertions and write regression tests",
    category: "TESTS",
  },
];

console.log(
  "\x1b[1m\x1b[35m======================================================================\x1b[0m",
);
console.log(
  "\x1b[1m\x1b[35m   UNIVERSAL VIBE CODING QUALITY GATE & AUTONOMOUS VERIFICATION      \x1b[0m",
);
console.log(
  "\x1b[1m\x1b[35m======================================================================\x1b[0m\n",
);

const startTime = Date.now();
let hasFailure = false;
let failedStep = null;

for (const step of STEPS) {
  process.stdout.write(`\x1b[34m[RUNNING]\x1b[0m ${step.name}... `);
  try {
    execSync(step.command, { stdio: "pipe", encoding: "utf8" });
    console.log("\x1b[32m[PASS]\x1b[0m");
  } catch (error) {
    console.log("\x1b[31m[FAIL]\x1b[0m\n");
    hasFailure = true;
    failedStep = {
      ...step,
      stdout: error.stdout ? error.stdout.toString() : "",
      stderr: error.stderr ? error.stderr.toString() : error.message,
    };
    break;
  }
}

const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(2);

if (hasFailure && failedStep) {
  console.log(
    "\x1b[1m\x1b[31m======================================================================\x1b[0m",
  );
  console.log(`\x1b[1m\x1b[31m  QUALITY GATE REJECTED at: ${failedStep.name}\x1b[0m`);
  console.log(
    "\x1b[1m\x1b[31m======================================================================\x1b[0m\n",
  );

  console.log("\x1b[33m--- EXECUTION OUTPUT ---\x1b[0m");
  if (failedStep.stdout) console.log(failedStep.stdout.trim());
  if (failedStep.stderr) console.error(failedStep.stderr.trim());

  console.log("\n\x1b[1m\x1b[36m--- AGENT AUTONOMOUS REPAIR GUIDELINES ---\x1b[0m");
  console.log(`1. Target Category: ${failedStep.category}`);
  console.log(`2. Recommended Action: ${failedStep.fixCommand}`);
  console.log(
    "3. Root Cause Requirement: Do NOT silence errors with ignore comments, 'any', or deleting tests.",
  );
  console.log("4. Loop: Make the minimal required fix, then re-run: 'npm run quality'\n");

  process.exit(1);
} else {
  console.log(
    "\n\x1b[1m\x1b[32m======================================================================\x1b[0m",
  );
  console.log(`\x1b[1m\x1b[32m  ALL QUALITY GATES PASSED SUCCESSFULLY in ${elapsedSec}s!\x1b[0m`);
  console.log(
    "\x1b[1m\x1b[32m  Code is compliant with Architecture, Style, Types, Security & Tests.\x1b[0m",
  );
  console.log("\x1b[1m\x1b[32m  Ready for Commit & Pull Request.\x1b[0m");
  console.log(
    "\x1b[1m\x1b[32m======================================================================\x1b[0m\n",
  );
  process.exit(0);
}
