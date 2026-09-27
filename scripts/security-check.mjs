import fs from "node:fs";
import path from "node:path";

const CHECK_DIRS = ["src", "scripts"];
const EXTENSIONS = [/\.(ts|js|mjs)$/];

const SECURITY_RULES = [
  {
    id: "NO_EMPTY_CATCH",
    name: "Empty catch block",
    regex: /catch\s*\([^)]*\)\s*\{\s*\}/,
    message: "Empty catch block silently suppresses exceptions. Log, wrap, or rethrow.",
  },
  {
    id: "NO_CATCH_RETURN_NULL",
    name: "Silent error suppression with return null",
    regex: /catch\s*\([^)]*\)\s*\{\s*return\s+null;?\s*\}/,
    message:
      "Returning null in catch block destroys failure visibility. Use explicit Result types or throw DomainError.",
  },
  {
    id: "NO_HARDCODED_API_KEYS",
    name: "Hardcoded API Token / Secret",
    regex: /(?:api[_-]?key|secret[_-]?token|jwt[_-]?token)\s*[:=]\s*['"][a-zA-Z0-9_-]{20,}['"]/i,
    message: "Potential hardcoded secret or token. Load from process.env or secure vault.",
  },
  {
    id: "NO_RAW_ANY_TYPE",
    name: "Unconstrained 'any' type bypass",
    regex: /:\s*any\b|as\s+any\b/,
    targetDirOnly: "src",
    message:
      "Bypassing the type system with 'any' is forbidden. Use unknown, generics, or domain types.",
  },
];

function scanDirectory(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(scanDirectory(full));
    } else if (EXTENSIONS.some((r) => r.test(item))) {
      files.push(full);
    }
  }
  return files;
}

console.log("\x1b[36m=== Checking Security, Secrets, and Safe Error Handling ===\x1b[0m");

let allFiles = [];
for (const d of CHECK_DIRS) {
  allFiles = allFiles.concat(scanDirectory(path.resolve(process.cwd(), d)));
}

const violations = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);
  const relPath = path.relative(process.cwd(), file).replace(/\\/g, "/");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    for (const rule of SECURITY_RULES) {
      if (rule.targetDirOnly && !relPath.startsWith(`${rule.targetDirOnly}/`)) {
        continue;
      }

      if (rule.regex.test(line)) {
        violations.push({
          ruleId: rule.id,
          file: relPath,
          line: i + 1,
          message: rule.message,
        });
      }
    }
  }

  const multiLineEmptyCatch = /catch\s*\([^)]*\)\s*\{\s*\r?\n?\s*\}/g;
  let match = multiLineEmptyCatch.exec(content);
  while (match !== null) {
    const index = match.index;
    const lineNumber = content.substring(0, index).split(/\r?\n/).length;
    if (
      !violations.some(
        (v) => v.file === relPath && v.line === lineNumber && v.ruleId === "NO_EMPTY_CATCH",
      )
    ) {
      violations.push({
        ruleId: "NO_EMPTY_CATCH",
        file: relPath,
        line: lineNumber,
        message: "Empty catch block silently suppresses exceptions. Log, wrap, or rethrow.",
      });
    }
    match = multiLineEmptyCatch.exec(content);
  }
}

if (violations.length > 0) {
  console.error(`\x1b[31m[FAILED] Security scan discovered ${violations.length} issues:\x1b[0m`);
  for (const v of violations) {
    console.error(`  - [${v.ruleId}] ${v.file}:${v.line} -> ${v.message}`);
  }
  process.exit(1);
} else {
  console.log(
    `\x1b[32m[PASSED] Security and safe error handling scan clean (${allFiles.length} files scanned).\x1b[0m`,
  );
  process.exit(0);
}
