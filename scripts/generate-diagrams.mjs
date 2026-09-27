import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(process.cwd(), "docs/images");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Diagram 1: Paradigm Shift (Vibe Coding Chaos vs Governed Engineering)
const svgParadigmShift = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <linearGradient id="badGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Title -->
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">VIBE CODING PARADIGM SHIFT</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">From Fragile Patch-on-Patch Chaos to Governed Engineering Resilience</text>

  <!-- Left Box: Uncontrolled Chaos -->
  <rect x="40" y="100" width="430" height="380" rx="16" fill="url(#badGrad)" stroke="#ef4444" stroke-width="2" filter="url(#shadow)"/>
  <rect x="60" y="120" width="390" height="35" rx="8" fill="#ef4444"/>
  <text x="255" y="143" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">UNCONTROLLED VIBE CODING (CHAOS)</text>

  <g transform="translate(65, 175)" font-size="13" fill="#fca5a5">
    <rect x="0" y="0" width="380" height="38" rx="6" fill="#1e293b" stroke="#7f1d1d"/>
    <text x="20" y="24">Human Prompt → AI Generates Code</text>

    <path d="M 190 38 L 190 55" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
    
    <rect x="0" y="55" width="380" height="38" rx="6" fill="#1e293b" stroke="#7f1d1d"/>
    <text x="20" y="79">AI Patches Directly into Existing Files</text>

    <path d="M 190 93 L 190 110" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>

    <rect x="0" y="110" width="380" height="38" rx="6" fill="#1e293b" stroke="#7f1d1d"/>
    <text x="20" y="134">Code Runs ("It Works on My Machine")</text>

    <path d="M 190 148 L 190 165" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>

    <rect x="0" y="165" width="380" height="110" rx="8" fill="#450a0a" stroke="#dc2626"/>
    <text x="20" y="190" fill="#fecaca" font-weight="bold">⚠️ Inevitable Systemic Degradation:</text>
    <text x="35" y="212" fill="#fca5a5" font-size="12">• God classes &amp; 5,000-line monolithic files</text>
    <text x="35" y="230" fill="#fca5a5" font-size="12">• Circular dependencies &amp; hidden state mutations</text>
    <text x="35" y="248" fill="#fca5a5" font-size="12">• Fragile patches causing cascading regressions</text>
    <text x="35" y="266" fill="#fca5a5" font-size="12">• Silent catch blocks &amp; unchecked technical debt</text>
  </g>

  <!-- Right Box: Governed Engineering -->
  <rect x="530" y="100" width="430" height="380" rx="16" fill="url(#goodGrad)" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
  <rect x="550" y="120" width="390" height="35" rx="8" fill="#10b981"/>
  <text x="745" y="143" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">GOVERNED VIBE CODING (ENGINEERING)</text>

  <g transform="translate(555, 175)" font-size="13" fill="#6ee7b7">
    <rect x="0" y="0" width="380" height="38" rx="6" fill="#1e293b" stroke="#064e3b"/>
    <text x="20" y="24">Human Prompt + AGENTS.md Constitution</text>

    <path d="M 190 38 L 190 55" stroke="#10b981" stroke-width="2"/>
    
    <rect x="0" y="55" width="380" height="38" rx="6" fill="#1e293b" stroke="#064e3b"/>
    <text x="20" y="79">AI Searches Existing Modules &amp; Modifies Code</text>

    <path d="M 190 93 L 190 110" stroke="#10b981" stroke-width="2"/>

    <rect x="0" y="110" width="380" height="38" rx="6" fill="#1e293b" stroke="#064e3b"/>
    <text x="20" y="134">Multi-Layer Quality Pipeline (6 Checks)</text>

    <path d="M 190 148 L 190 165" stroke="#10b981" stroke-width="2"/>

    <rect x="0" y="165" width="380" height="110" rx="8" fill="#064e3b" stroke="#059669"/>
    <text x="20" y="190" fill="#a7f3d0" font-weight="bold">🛡️ Guaranteed Quality &amp; Resilience:</text>
    <text x="35" y="212" fill="#6ee7b7" font-size="12">• Automated root-cause detection &amp; repair</text>
    <text x="35" y="230" fill="#6ee7b7" font-size="12">• Strictly verified architectural boundaries</text>
    <text x="35" y="248" fill="#6ee7b7" font-size="12">• Zero secret leaks &amp; zero unhandled errors</text>
    <text x="35" y="266" fill="#6ee7b7" font-size="12">• Long-term sustainable speed without rot</text>
  </g>
</svg>`;

// Diagram 2: Quality Governance Funnel Pipeline
const svgPipeline = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="1000" height="600" style="background:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <filter id="glow">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">THE MULTI-LAYER QUALITY GOVERNANCE PIPELINE</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">Automated Verification Funnel: From AI Generation to Verified Production PR</text>

  <!-- Flow Boxes -->
  <!-- Layer 1 -->
  <g transform="translate(100, 105)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#0284c7"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">Code Formatter Layer (Biome / Spotless / Black / rustfmt)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">Standardizes layout, indentation, line wraps, import sorting. Eliminates styling disputes.</text>
  </g>

  <!-- Layer 2 -->
  <g transform="translate(100, 170)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#2563eb"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">Linter &amp; Antipattern Detector (Biome / Ruff / ESLint / Clippy)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">Finds unused variables, excessive cognitive complexity (&gt;15), dangerous coercions, and shadow names.</text>
  </g>

  <!-- Layer 3 -->
  <g transform="translate(100, 235)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#4f46e5"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">Strict Type Checking (TypeScript / Pyright / Compiler)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">Enforces strict null checks. Strictly forbids 'any', unchecked indexed access, and raw bypasses.</text>
  </g>

  <!-- Layer 4 -->
  <g transform="translate(100, 300)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#9333ea"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">Architecture &amp; Circular Dependency Enforcement</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">Detects layer inversions (e.g. Domain importing Infrastructure) and circular import graphs.</text>
  </g>

  <!-- Layer 5 -->
  <g transform="translate(100, 365)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#db2777"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">Security Audit, Secret Scanning &amp; Error Contracts</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">Scans for hardcoded tokens/passwords, forbids empty catch blocks and silent null swallows.</text>
  </g>

  <!-- Layer 6 -->
  <g transform="translate(100, 430)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#059669"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">6</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">Automated Test Suites (Unit &amp; Regression Tests)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">Verifies business requirements, edge cases, domain invariants, and ensures zero regression.</text>
  </g>

  <!-- Layer 7 Gate -->
  <g transform="translate(100, 495)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="60" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <circle cx="35" cy="30" r="16" fill="#10b981"/>
    <text x="35" y="36" text-anchor="middle" fill="#fff" font-weight="bold">7</text>
    <text x="70" y="27" fill="#a7f3d0" font-weight="bold" font-size="16">QUALITY GATE VERIFIED → APPROVED FOR PULL REQUEST</text>
    <text x="70" y="47" fill="#6ee7b7" font-size="12">Continuous Integration passes cleanly. Ready for human code review and production deployment.</text>
  </g>
</svg>`;

// Diagram 3: Agent Auto-Repair Loop
const svgRepairLoop = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/>
    </marker>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">AGENT AUTONOMOUS VERIFICATION &amp; REPAIR LOOP</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">Self-Correcting Engineering Cycle: "AI Can Fail, But Failure Cannot Pass"</text>

  <!-- Step 1: Read Rules -->
  <g transform="translate(60, 110)">
    <rect x="0" y="0" width="190" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="95" y="32" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="14">1. Read Context</text>
    <text x="95" y="52" text-anchor="middle" fill="#94a3b8" font-size="11">AGENTS.md &amp; Arch</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 250 145 L 290 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 2: Implement -->
  <g transform="translate(300, 110)">
    <rect x="0" y="0" width="190" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="95" y="32" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="14">2. Search &amp; Implement</text>
    <text x="95" y="52" text-anchor="middle" fill="#94a3b8" font-size="11">Minimal Focused Edit</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 490 145 L 530 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 3: Run Quality -->
  <g transform="translate(540, 110)">
    <rect x="0" y="0" width="200" height="70" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="100" y="32" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="14">3. Execute Quality Gate</text>
    <text x="100" y="52" text-anchor="middle" fill="#fbbf24" font-size="11">npm run quality</text>
  </g>

  <!-- Arrow 3 to Decision -->
  <path d="M 740 145 L 800 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Decision Diamond -->
  <g transform="translate(850, 145)">
    <polygon points="0,-45 45,0 0,45 -45,0" fill="#334155" stroke="#f8fafc" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">Pass?</text>
  </g>

  <!-- Branch YES -> Green Down -->
  <path d="M 850 190 L 850 340" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)"/>
  <text x="865" y="260" fill="#10b981" font-weight="bold" font-size="14">YES</text>

  <g transform="translate(740, 350)">
    <rect x="0" y="0" width="220" height="80" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="110" y="35" text-anchor="middle" fill="#a7f3d0" font-weight="bold" font-size="15">COMMIT &amp; PUSH</text>
    <text x="110" y="58" text-anchor="middle" fill="#6ee7b7" font-size="12">Create Pull Request</text>
  </g>

  <!-- Branch NO -> Red Loop to Repair -->
  <path d="M 850 100 L 850 250" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
  <path d="M 805 145 L 640 145 L 640 280" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowRed)"/>
  <text x="730" y="135" fill="#ef4444" font-weight="bold" font-size="14">NO (Failure)</text>

  <!-- Repair Box -->
  <g transform="translate(490, 290)">
    <rect x="0" y="0" width="300" height="110" rx="12" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="150" y="30" text-anchor="middle" fill="#fecaca" font-weight="bold" font-size="14">4. Autonomous Root Cause Diagnosis</text>
    <text x="25" y="55" fill="#fca5a5" font-size="12">• Inspect error category &amp; trace output</text>
    <text x="25" y="73" fill="#fca5a5" font-size="12">• Refuse superficial bypasses (no 'any', no ignore)</text>
    <text x="25" y="91" fill="#fca5a5" font-size="12">• Apply targeted semantic architectural fix</text>
  </g>

  <!-- Repair Loop Back to Implement -->
  <path d="M 490 345 L 395 345 L 395 190" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowRed)"/>
  <text x="405" y="270" fill="#ef4444" font-size="12" font-weight="bold">Self-Repair</text>
</svg>`;

// Diagram 4: Clean Architecture Boundaries
const svgArchitecture = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 580" width="1000" height="580" style="background:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <marker id="archArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">CLEAN ARCHITECTURAL BOUNDARIES &amp; DEPENDENCY RULES</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">The Inward Dependency Rule: Inner Domains Are Independent of Outer Mechanisms</text>

  <!-- Concentric Rings / Layers -->
  <circle cx="340" cy="310" r="210" fill="#1e293b" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4"/>
  <circle cx="340" cy="310" r="160" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <circle cx="340" cy="310" r="110" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
  <circle cx="340" cy="310" r="60" fill="#064e3b" stroke="#10b981" stroke-width="3"/>

  <!-- Center Domain Text -->
  <text x="340" y="306" text-anchor="middle" fill="#a7f3d0" font-weight="bold" font-size="14">DOMAIN</text>
  <text x="340" y="324" text-anchor="middle" fill="#6ee7b7" font-size="10">Entities &amp; Rules</text>

  <!-- Application Text -->
  <text x="340" y="225" text-anchor="middle" fill="#67e8f9" font-weight="bold" font-size="13">APPLICATION LAYER</text>
  <text x="340" y="242" text-anchor="middle" fill="#a5f3fc" font-size="10">Use Cases, DTOs &amp; Ports</text>

  <!-- Infrastructure Text -->
  <text x="340" y="170" text-anchor="middle" fill="#c4b5fd" font-weight="bold" font-size="13">INFRASTRUCTURE LAYER</text>
  <text x="340" y="187" text-anchor="middle" fill="#ddd6fe" font-size="10">Repositories, DB &amp; Adapters</text>

  <!-- Presentation Text -->
  <text x="340" y="120" text-anchor="middle" fill="#93c5fd" font-weight="bold" font-size="13">PRESENTATION LAYER</text>
  <text x="340" y="137" text-anchor="middle" fill="#bfdbfe" font-size="10">CLI, API &amp; Controllers</text>

  <!-- Legend & Rules Card -->
  <g transform="translate(600, 110)">
    <rect x="0" y="0" width="360" height="400" rx="14" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="180" y="35" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">LEGAL DEPENDENCY DIRECTION</text>

    <!-- Rule 1 -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="320" height="65" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="24" fill="#a7f3d0" font-weight="bold" font-size="13">1. Domain Layer (Purest Core)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="11">• ZERO external dependencies</text>
      <text x="15" y="57" fill="#94a3b8" font-size="11">• Must NOT import Application or Infra</text>
    </g>

    <!-- Rule 2 -->
    <g transform="translate(20, 145)">
      <rect x="0" y="0" width="320" height="65" rx="8" fill="#0f172a" stroke="#06b6d4"/>
      <text x="15" y="24" fill="#67e8f9" font-weight="bold" font-size="13">2. Application Layer (Orchestration)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="11">• Depends ONLY on Domain entities</text>
      <text x="15" y="57" fill="#94a3b8" font-size="11">• Inverts dependencies via interfaces</text>
    </g>

    <!-- Rule 3 -->
    <g transform="translate(20, 225)">
      <rect x="0" y="0" width="320" height="65" rx="8" fill="#0f172a" stroke="#8b5cf6"/>
      <text x="15" y="24" fill="#c4b5fd" font-weight="bold" font-size="13">3. Infrastructure Layer (Adapters)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="11">• Implements Application repository ports</text>
      <text x="15" y="57" fill="#94a3b8" font-size="11">• Isolated from Presentation</text>
    </g>

    <!-- Rule 4 -->
    <g transform="translate(20, 305)">
      <rect x="0" y="0" width="320" height="75" rx="8" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="24" fill="#fca5a5" font-weight="bold" font-size="13">⛔ STRICTLY FORBIDDEN</text>
      <text x="15" y="42" fill="#f87171" font-size="11">• Circular dependencies (A → B → A)</text>
      <text x="15" y="57" fill="#f87171" font-size="11">• Presentation bypassing Application to DB</text>
      <text x="15" y="70" fill="#f87171" font-size="11">• God Modules &gt; 400 lines</text>
    </g>
  </g>
</svg>`;

// Diagram 5: Multi-Agent Rule Synchronization
const svgMultiAgent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480" width="1000" height="480" style="background:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <marker id="syncArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">MULTI-AGENT RULE SYNCHRONIZATION</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">Single Source of Truth: Zero Rule Drift Across Codex, Claude, Cursor, Copilot &amp; Gemini</text>

  <!-- Central Hub: AGENTS.md -->
  <g transform="translate(80, 160)">
    <rect x="0" y="0" width="280" height="180" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
    <rect x="20" y="20" width="240" height="35" rx="6" fill="#0284c7"/>
    <text x="140" y="43" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="15">AGENTS.md</text>
    <text x="140" y="75" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="bold">Single Source of Truth</text>
    <text x="30" y="105" fill="#94a3b8" font-size="11">• Architectural boundaries</text>
    <text x="30" y="125" fill="#94a3b8" font-size="11">• Clean code conventions &amp; naming</text>
    <text x="30" y="145" fill="#94a3b8" font-size="11">• Forbidden behaviors &amp; DoD</text>
    <text x="30" y="165" fill="#94a3b8" font-size="11">• Unified Quality Command spec</text>
  </g>

  <!-- Rule Sync Engine -->
  <g transform="translate(420, 205)">
    <rect x="0" y="0" width="160" height="90" rx="10" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
    <text x="80" y="38" text-anchor="middle" fill="#fbbf24" font-weight="bold" font-size="14">Rule Sync</text>
    <text x="80" y="58" text-anchor="middle" fill="#fbbf24" font-weight="bold" font-size="14">Engine</text>
    <text x="80" y="78" text-anchor="middle" fill="#cbd5e1" font-size="10">npm run rule:sync</text>
  </g>

  <!-- Connecting Arrows -->
  <path d="M 360 250 L 420 250" stroke="#38bdf8" stroke-width="3" marker-end="url(#syncArrow)"/>

  <!-- Fan Out Targets -->
  <path d="M 580 250 L 670 120" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 185" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 250" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 315" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 380" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>

  <!-- Target 1: Claude Code -->
  <g transform="translate(680, 95)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#f97316"/>
    <text x="20" y="28" fill="#fdba74" font-weight="bold" font-size="13">CLAUDE.md</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Anthropic Claude Code instructions</text>
  </g>

  <!-- Target 2: Cursor Rules -->
  <g transform="translate(680, 160)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="20" y="28" fill="#7dd3fc" font-weight="bold" font-size="13">.cursor/rules/vibe-governance.mdc</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Cursor IDE ambient context rules</text>
  </g>

  <!-- Target 3: GitHub Copilot -->
  <g transform="translate(680, 225)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#a855f7"/>
    <text x="20" y="28" fill="#d8b4fe" font-weight="bold" font-size="13">.github/copilot-instructions.md</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">GitHub Copilot repository rules</text>
  </g>

  <!-- Target 4: Gemini -->
  <g transform="translate(680, 290)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#10b981"/>
    <text x="20" y="28" fill="#6ee7b7" font-weight="bold" font-size="13">GEMINI.md</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Google Gemini CLI &amp; agent instructions</text>
  </g>

  <!-- Target 5: Windsurf -->
  <g transform="translate(680, 355)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#06b6d4"/>
    <text x="20" y="28" fill="#67e8f9" font-weight="bold" font-size="13">.windsurfrules</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Windsurf IDE cascade rules</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(OUT_DIR, "vibe-coding-paradigm-shift.svg"), svgParadigmShift, "utf8");
fs.writeFileSync(path.join(OUT_DIR, "governance-pipeline.svg"), svgPipeline, "utf8");
fs.writeFileSync(path.join(OUT_DIR, "agent-auto-repair-loop.svg"), svgRepairLoop, "utf8");
fs.writeFileSync(path.join(OUT_DIR, "clean-architecture-boundaries.svg"), svgArchitecture, "utf8");
fs.writeFileSync(path.join(OUT_DIR, "multi-agent-rule-sync.svg"), svgMultiAgent, "utf8");

console.log(
  "\x1b[32m[SUCCESS] Standalone SVG architectural diagrams generated in docs/images/:\x1b[0m",
);
console.log("  - vibe-coding-paradigm-shift.svg");
console.log("  - governance-pipeline.svg");
console.log("  - agent-auto-repair-loop.svg");
console.log("  - clean-architecture-boundaries.svg");
console.log("  - multi-agent-rule-sync.svg");
