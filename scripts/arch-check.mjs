import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.resolve(process.cwd(), "src");

const LAYER_RULES = {
  domain: [],
  application: ["domain"],
  infrastructure: ["domain", "application"],
  presentation: ["application", "domain"],
};

const MAX_FILE_LINES = 400;

function getAllSourceFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllSourceFiles(fullPath));
    } else if (/\.(ts|js|mjs)$/.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractImports(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  const imports = [];
  const importRegex = /(?:import|from)\s+['"]([^'"]+)['"]/g;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let match = importRegex.exec(line);
    while (match !== null) {
      imports.push({
        specifier: match[1],
        line: i + 1,
      });
      match = importRegex.exec(line);
    }
  }
  return { imports, lineCount: lines.length };
}

function resolveInternalModule(fromPath, specifier) {
  if (specifier.startsWith("node:") || !specifier.startsWith(".")) {
    return null;
  }
  const dir = path.dirname(fromPath);
  let resolved = path.resolve(dir, specifier);
  if (!path.extname(resolved)) {
    if (fs.existsSync(`${resolved}.ts`)) resolved = `${resolved}.ts`;
    else if (fs.existsSync(`${resolved}.js`)) resolved = `${resolved}.js`;
    else if (fs.existsSync(path.join(resolved, "index.ts")))
      resolved = path.join(resolved, "index.ts");
    else if (fs.existsSync(path.join(resolved, "index.js")))
      resolved = path.join(resolved, "index.js");
  }
  return resolved;
}

function getLayer(filePath) {
  const rel = path.relative(SRC_DIR, filePath).replace(/\\/g, "/");
  const parts = rel.split("/");
  if (parts.length > 0 && LAYER_RULES[parts[0]]) {
    return parts[0];
  }
  return null;
}

function detectCycles(graph) {
  const visited = new Set();
  const recStack = new Set();
  const cycles = [];

  function dfs(node, pathStack) {
    visited.add(node);
    recStack.add(node);
    pathStack.push(node);

    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, pathStack);
      } else if (recStack.has(neighbor)) {
        const cycleStartIndex = pathStack.indexOf(neighbor);
        cycles.push(pathStack.slice(cycleStartIndex).concat(neighbor));
      }
    }

    pathStack.pop();
    recStack.delete(node);
  }

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      dfs(node, []);
    }
  }

  return cycles;
}

console.log("\x1b[36m=== Checking Architecture Constraints & Module Boundaries ===\x1b[0m");

const files = getAllSourceFiles(SRC_DIR);
const violations = [];
const graph = {};

for (const file of files) {
  const sourceLayer = getLayer(file);
  const { imports, lineCount } = extractImports(file);
  const relFile = path.relative(process.cwd(), file).replace(/\\/g, "/");

  if (lineCount > MAX_FILE_LINES) {
    violations.push({
      type: "GOD_FILE",
      file: relFile,
      line: 1,
      message: `File exceeds maximum limit of ${MAX_FILE_LINES} lines (currently ${lineCount} lines). Break into cohesive submodules.`,
    });
  }

  graph[relFile] = [];

  for (const imp of imports) {
    const targetPath = resolveInternalModule(file, imp.specifier);
    if (!targetPath) continue;

    const relTarget = path.relative(process.cwd(), targetPath).replace(/\\/g, "/");
    graph[relFile].push(relTarget);

    const targetLayer = getLayer(targetPath);
    if (!sourceLayer || !targetLayer) continue;

    if (sourceLayer === targetLayer) continue;

    const allowed = LAYER_RULES[sourceLayer] || [];
    if (!allowed.includes(targetLayer)) {
      violations.push({
        type: "ILLEGAL_LAYER_ACCESS",
        file: relFile,
        line: imp.line,
        message: `Layer '${sourceLayer}' is forbidden from importing from layer '${targetLayer}' (target: ${relTarget}). Invert dependency or use interfaces.`,
      });
    }
  }
}

const cycles = detectCycles(graph);
for (const cycle of cycles) {
  violations.push({
    type: "CIRCULAR_DEPENDENCY",
    file: cycle[0],
    line: 1,
    message: `Circular dependency detected: ${cycle.join(" -> ")}`,
  });
}

if (violations.length > 0) {
  console.error(
    `\x1b[31m[FAILED] Architecture check found ${violations.length} violations:\x1b[0m`,
  );
  for (const v of violations) {
    console.error(`  - [${v.type}] ${v.file}:${v.line} -> ${v.message}`);
  }
  process.exit(1);
} else {
  console.log(
    `\x1b[32m[PASSED] Architecture checks clean: ${files.length} files inspected, 0 layer violations, 0 circular dependencies.\x1b[0m`,
  );
  process.exit(0);
}
