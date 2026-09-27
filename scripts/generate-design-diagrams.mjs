import fs from "node:fs";
import path from "node:path";

const EN_DIR = path.resolve(process.cwd(), "docs/images");
const ZH_DIR = path.resolve(process.cwd(), "docs/images/zh");

fs.mkdirSync(EN_DIR, { recursive: true });
fs.mkdirSync(ZH_DIR, { recursive: true });

function writeSvg(filename, enSvg, zhSvg) {
  fs.writeFileSync(path.join(EN_DIR, filename), enSvg.trim() + "\n", "utf8");
  fs.writeFileSync(path.join(ZH_DIR, filename), zhSvg.trim() + "\n", "utf8");
  console.log("Generated diagram: " + filename + " (EN & ZH)");
}

// Diagram 1: Dual Governance Engine
const dualEngineEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <defs>
    <linearGradient id="codeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="gateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">DUAL-ENGINE VIBE CODING GOVERNANCE</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Converging Code Quality Engineering and Autonomous UI Design Verification</text>

  <!-- Top: Product Requirement -->
  <rect x="350" y="90" width="300" height="42" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="500" y="116" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="600">PRODUCT REQUIREMENT &amp; CONTEXT</text>

  <!-- Split arrows -->
  <path d="M 430 132 L 250 170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
  <path d="M 570 132 L 750 170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>

  <!-- Left: Code Governance Engine -->
  <rect x="50" y="170" width="400" height="270" rx="8" fill="url(#codeGrad)" stroke="#334155" stroke-width="1.5"/>
  <rect x="50" y="170" width="400" height="34" rx="8" fill="#1e293b"/>
  <text x="250" y="192" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="700">⚙️ CODE GOVERNANCE ENGINE</text>

  <g transform="translate(70, 218)" font-size="12" fill="#cbd5e1">
    <text y="0">• AGENTS.md Constitution &amp; SSOT</text>
    <text y="24">• Clean Inward Architecture (Domain -> App -> Infra)</text>
    <text y="48">• Strict Type Checking &amp; Zero Any Bypasses</text>
    <text y="72">• Biome Linting &amp; Cyclomatic Ceiling &lt; 12</text>
    <text y="96">• Secret Masking &amp; Zero Hardcoded Tokens</text>
    <text y="120">• Unit &amp; Regression Test Coverage</text>
    <text y="144">• Automated Root Cause Repair Loop</text>
    <text y="168" fill="#10b981" font-weight="600">RESULT: Technically Sound Implementation</text>
  </g>

  <!-- Right: UI Design Governance Engine -->
  <rect x="550" y="170" width="400" height="270" rx="8" fill="url(#codeGrad)" stroke="#334155" stroke-width="1.5"/>
  <rect x="550" y="170" width="400" height="34" rx="8" fill="#1e293b"/>
  <text x="750" y="192" text-anchor="middle" fill="#10b981" font-size="14" font-weight="700">🎨 UI DESIGN GOVERNANCE ENGINE</text>

  <g transform="translate(570, 218)" font-size="12" fill="#cbd5e1">
    <text y="0">• PRODUCT_CONTEXT.md &amp; User Profile</text>
    <text y="24">• DESIGN_DNA.md (Clinical Precision Archetype)</text>
    <text y="48">• design-tokens.json (Zero Magic Spacing/Radius)</text>
    <text y="72">• UI_RULES.md (Negative Anti-Slop Constraints)</text>
    <text y="96">• 10-State Screen Specifications (screens/*.md)</text>
    <text y="120">• Headless Browser Multi-Viewport Screenshots</text>
    <text y="144">• WCAG 2.1 AA Contrast &amp; Keyboard Nav</text>
    <text y="168" fill="#10b981" font-weight="600">RESULT: Zero Slop Production Experience</text>
  </g>

  <!-- Converge to Quality Gate -->
  <path d="M 250 440 L 420 480" stroke="#0284c7" stroke-width="2"/>
  <path d="M 750 440 L 580 480" stroke="#10b981" stroke-width="2"/>

  <!-- Unified Quality Gate -->
  <rect x="250" y="475" width="500" height="55" rx="8" fill="url(#gateGrad)"/>
  <text x="500" y="500" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">UNIFIED QUALITY GATE (npm run quality)</text>
  <text x="500" y="518" text-anchor="middle" fill="#f8fafc" font-size="12">100% Code &amp; Visual Pass -> Verified Pull Request Merge</text>
</svg>`;

const dualEngineZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <defs>
    <linearGradient id="codeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="gateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">双引擎 VIBE CODING 代码与设计治理体系</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">将代码质量工程与自主 AI UI 设计验收全面汇合为统一流水线</text>

  <!-- Top: Product Requirement -->
  <rect x="350" y="90" width="300" height="42" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="500" y="116" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="600">产品需求与业务上下文 (PRODUCT CONTEXT)</text>

  <!-- Split arrows -->
  <path d="M 430 132 L 250 170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
  <path d="M 570 132 L 750 170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>

  <!-- Left: Code Governance Engine -->
  <rect x="50" y="170" width="400" height="270" rx="8" fill="url(#codeGrad)" stroke="#334155" stroke-width="1.5"/>
  <rect x="50" y="170" width="400" height="34" rx="8" fill="#1e293b"/>
  <text x="250" y="192" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="700">⚙️ 代码工程治理引擎 (CODE SYSTEM)</text>

  <g transform="translate(70, 218)" font-size="12" fill="#cbd5e1">
    <text y="0">• AGENTS.md 宪法与单一事实基准</text>
    <text y="24">• 整洁单向依赖边界 (Domain -&gt; App -&gt; Infra)</text>
    <text y="48">• 严格类型检查与零 Any 降级</text>
    <text y="72">• Biome 代码检查与圈复杂度上限 &lt; 12</text>
    <text y="96">• 敏感凭证脱敏与零硬编码密钥</text>
    <text y="120">• 单元测试与端到端回归覆盖率</text>
    <text y="144">• 自主根因分析与代码自修复循环</text>
    <text y="168" fill="#10b981" font-weight="600">交付成果: 技术层面严谨健壮的代码实现</text>
  </g>

  <!-- Right: UI Design Governance Engine -->
  <rect x="550" y="170" width="400" height="270" rx="8" fill="url(#codeGrad)" stroke="#334155" stroke-width="1.5"/>
  <rect x="550" y="170" width="400" height="34" rx="8" fill="#1e293b"/>
  <text x="750" y="192" text-anchor="middle" fill="#10b981" font-size="14" font-weight="700">🎨 UI 设计治理引擎 (DESIGN SYSTEM)</text>

  <g transform="translate(570, 218)" font-size="12" fill="#cbd5e1">
    <text y="0">• PRODUCT_CONTEXT.md 产品定位与用户画像</text>
    <text y="24">• DESIGN_DNA.md (临床严谨度设计人格)</text>
    <text y="48">• design-tokens.json (零随意硬编码间距与圆角)</text>
    <text y="72">• UI_RULES.md (去 AI 味负向设计硬约束)</text>
    <text y="96">• 10 种关键页面状态规格 (screens/*.md)</text>
    <text y="120">• 无头浏览器多视口渲染与实机截图存证</text>
    <text y="144">• WCAG 2.1 AA 级对比度与全键盘无障碍操作</text>
    <text y="168" fill="#10b981" font-weight="600">交付成果: 去除 AI 塑料味的成熟专业界面</text>
  </g>

  <!-- Converge to Quality Gate -->
  <path d="M 250 440 L 420 480" stroke="#0284c7" stroke-width="2"/>
  <path d="M 750 440 L 580 480" stroke="#10b981" stroke-width="2"/>

  <!-- Unified Quality Gate -->
  <rect x="250" y="475" width="500" height="55" rx="8" fill="url(#gateGrad)"/>
  <text x="500" y="500" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">统一质量门禁系统 (npm run quality)</text>
  <text x="500" y="518" text-anchor="middle" fill="#f8fafc" font-size="12">代码规范 + 视觉验收 100% 双重全绿才允许合入 PR</text>
</svg>`;

writeSvg("dual-governance-engine.svg", dualEngineEn, dualEngineZh);

// Diagram 2: Anti-Slop Hierarchy
const antiSlopEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 540" width="1000" height="540" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">THE 6-LAYER ANTI-SLOP GOVERNANCE STACK</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Preventing Aesthetic Collapse to Generic Internet Averages</text>

  <!-- Layer 1 -->
  <rect x="120" y="100" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="100" width="180" height="55" rx="6" fill="#0284c7"/>
  <text x="210" y="133" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">1. PRODUCT CONTEXT</text>
  <text x="320" y="125" fill="#f8fafc" font-size="13" font-weight="600">PRODUCT_CONTEXT.md</text>
  <text x="320" y="143" fill="#94a3b8" font-size="11">Answers who uses the tool, daily session length, high-frequency tasks, and information density target.</text>

  <!-- Layer 2 -->
  <rect x="120" y="165" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="165" width="180" height="55" rx="6" fill="#0369a1"/>
  <text x="210" y="198" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">2. DESIGN DNA</text>
  <text x="320" y="190" fill="#f8fafc" font-size="13" font-weight="600">DESIGN_DNA.md &amp; Archetypes</text>
  <text x="320" y="208" fill="#94a3b8" font-size="11">Selects Clinical Precision over generic clean; locks visual register, typography, and depth hierarchy.</text>

  <!-- Layer 3 -->
  <rect x="120" y="230" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="230" width="180" height="55" rx="6" fill="#075985"/>
  <text x="210" y="263" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">3. NEGATIVE RULES</text>
  <text x="320" y="255" fill="#f8fafc" font-size="13" font-weight="600">UI_RULES.md (Negative Constraints)</text>
  <text x="320" y="273" fill="#94a3b8" font-size="11">Bans purple/blue gradients, glow shadows, nested card soup, pill buttons, and gratuitous whitespace.</text>

  <!-- Layer 4 -->
  <rect x="120" y="295" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="295" width="180" height="55" rx="6" fill="#0f766e"/>
  <text x="210" y="328" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">4. MACHINE TOKENS</text>
  <text x="320" y="320" fill="#f8fafc" font-size="13" font-weight="600">design-tokens.json</text>
  <text x="320" y="338" fill="#94a3b8" font-size="11">Deterministic mathematical scales: 4px spatial rhythm, 6px default radius, zero arbitrary CSS units.</text>

  <!-- Layer 5 -->
  <rect x="120" y="360" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="360" width="180" height="55" rx="6" fill="#047857"/>
  <text x="210" y="393" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">5. SCREEN SPECS</text>
  <text x="320" y="385" fill="#f8fafc" font-size="13" font-weight="600">design/screens/*.md (10 States)</text>
  <text x="320" y="403" fill="#94a3b8" font-size="11">Mandatory specification of Default, Loading, Empty, Error, Disabled, Overflow, and Extreme data states.</text>

  <!-- Layer 6 -->
  <rect x="120" y="425" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="425" width="180" height="55" rx="6" fill="#10b981"/>
  <text x="210" y="458" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">6. BROWSER EVIDENCE</text>
  <text x="320" y="450" fill="#f8fafc" font-size="13" font-weight="600">Multi-Viewport Screenshots &amp; UI Linter</text>
  <text x="320" y="468" fill="#94a3b8" font-size="11">Never trust source code alone. Headless browser captures Desktop, Tablet, and Mobile visual evidence.</text>
</svg>`;

const antiSlopZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 540" width="1000" height="540" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">六层去 AI 塑料味 (ANTI-SLOP) 治理架构栈</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">杜绝 AI 在缺少约束时无脑收敛至互联网平均高级感与通用模版</text>

  <!-- Layer 1 -->
  <rect x="120" y="100" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="100" width="180" height="55" rx="6" fill="#0284c7"/>
  <text x="210" y="133" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">1. 产品上下文</text>
  <text x="320" y="125" fill="#f8fafc" font-size="13" font-weight="600">PRODUCT_CONTEXT.md</text>
  <text x="320" y="143" fill="#94a3b8" font-size="11">明确用户群体、使用频次、专业深度、高频核心任务与目标信息密度（中高密度）。</text>

  <!-- Layer 2 -->
  <rect x="120" y="165" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="165" width="180" height="55" rx="6" fill="#0369a1"/>
  <text x="210" y="198" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">2. 设计人格 DNA</text>
  <text x="320" y="190" fill="#f8fafc" font-size="13" font-weight="600">DESIGN_DNA.md 与原型系统</text>
  <text x="320" y="208" fill="#94a3b8" font-size="11">选定“临床严谨型”工程原型；锁定排版梯级、单强调色克制策略与 1px 细边框空间关系。</text>

  <!-- Layer 3 -->
  <rect x="120" y="230" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="230" width="180" height="55" rx="6" fill="#075985"/>
  <text x="210" y="263" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">3. 负向硬约束</text>
  <text x="320" y="255" fill="#f8fafc" font-size="13" font-weight="600">UI_RULES.md (去 AI 味负向守则)</text>
  <text x="320" y="273" fill="#94a3b8" font-size="11">绝对禁用紫蓝渐变、发光阴影、多层卡片套娃、胶囊按钮泛滥以及工具界面中的营销空白。</text>

  <!-- Layer 4 -->
  <rect x="120" y="295" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="295" width="180" height="55" rx="6" fill="#0f766e"/>
  <text x="210" y="328" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">4. 机器 Design Token</text>
  <text x="320" y="320" fill="#f8fafc" font-size="13" font-weight="600">design-tokens.json</text>
  <text x="320" y="338" fill="#94a3b8" font-size="11">机器可读的严格设计基准：4px/8px 空间韵律、默认 6px 圆角，消灭任意魔法数值。</text>

  <!-- Layer 5 -->
  <rect x="120" y="360" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="360" width="180" height="55" rx="6" fill="#047857"/>
  <text x="210" y="393" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">5. 页面完整状态规格</text>
  <text x="320" y="385" fill="#f8fafc" font-size="13" font-weight="600">design/screens/*.md (10 种状态)</text>
  <text x="320" y="403" fill="#94a3b8" font-size="11">强制规范默认、骨架屏加载、空数据、异常失败、禁用、溢出与海量数据集等 10 种状态。</text>

  <!-- Layer 6 -->
  <rect x="120" y="425" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="425" width="180" height="55" rx="6" fill="#10b981"/>
  <text x="210" y="458" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">6. 真实浏览器渲染存证</text>
  <text x="320" y="450" fill="#f8fafc" font-size="13" font-weight="600">多视口实机截图与 UI 静态检查器</text>
  <text x="320" y="468" fill="#94a3b8" font-size="11">不轻信代码与编译通过；通过无头浏览器自动抓取桌面、平板与移动端真实渲染截图。</text>
</svg>`;

writeSvg("anti-slop-hierarchy.svg", antiSlopEn, antiSlopZh);

// Diagram 3: Evidence-Based Design Loop
const evidenceLoopEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">EVIDENCE-BASED VISUAL REPAIR LOOP</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">Continuous Headless Browser Verification &amp; Autonomous Agent Remediation</text>

  <!-- Step 1: Spec -->
  <rect x="40" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="120" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. SPEC FIRST</text>
  <text x="120" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Read Tokens &amp; Spec</text>

  <!-- Arrow -->
  <path d="M 200 155 L 230 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 2: Implement -->
  <rect x="230" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="310" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">2. CODE UI</text>
  <text x="310" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">HTML/CSS/Components</text>

  <!-- Arrow -->
  <path d="M 390 155 L 420 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 3: Browser Render -->
  <rect x="420" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="500" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">3. BROWSER RENDER</text>
  <text x="500" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Headless Chrome / Edge</text>

  <!-- Arrow -->
  <path d="M 580 155 L 610 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 4: Screenshot Evidence -->
  <rect x="610" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="690" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">4. SCREENSHOTS</text>
  <text x="690" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Desktop, Tablet, Mobile</text>

  <!-- Arrow -->
  <path d="M 770 155 L 800 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 5: Multi-Dim Review -->
  <rect x="800" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="880" y="145" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">5. UI REVIEW</text>
  <text x="880" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Anti-Slop &amp; A11y Audit</text>

  <!-- Fork: Fail vs Pass -->
  <!-- Downward branch for Fail -->
  <path d="M 880 200 L 880 290" stroke="#ef4444" stroke-width="2"/>
  <rect x="790" y="290" width="180" height="60" rx="6" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="1.5"/>
  <text x="880" y="316" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">FAIL DETECTED</text>
  <text x="880" y="336" text-anchor="middle" fill="#fca5a5" font-size="11">Slop / Contrast / Missing State</text>

  <!-- Repair Loop arrow back to step 2 -->
  <path d="M 790 320 L 310 320 L 310 200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
  <text x="550" y="312" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">Autonomous Agent Repair &amp; Code Refactoring</text>

  <!-- Pass branch -->
  <path d="M 880 200 L 880 240 L 500 240 L 500 390" stroke="#10b981" stroke-width="2"/>
  <rect x="350" y="390" width="300" height="65" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="418" text-anchor="middle" fill="#10b981" font-size="15" font-weight="700">✔ VISUAL GATE PASSED</text>
  <text x="500" y="438" text-anchor="middle" fill="#f8fafc" font-size="12">100% Rules, Tokens &amp; Responsive Verified</text>
</svg>`;

const evidenceLoopZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">基于客观渲染存证的视觉自修复循环</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">无头浏览器实时渲染存证与 AI Agent 闭环自主修复</text>

  <!-- Step 1: Spec -->
  <rect x="40" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="120" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. 规范先行</text>
  <text x="120" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">读取设计 Token 与 Spec</text>

  <!-- Arrow -->
  <path d="M 200 155 L 230 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 2: Implement -->
  <rect x="230" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="310" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">2. 编写界面代码</text>
  <text x="310" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">HTML / CSS / 组件实现</text>

  <!-- Arrow -->
  <path d="M 390 155 L 420 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 3: Browser Render -->
  <rect x="420" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="500" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">3. 浏览器实际渲染</text>
  <text x="500" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">调用无头 Chrome / Edge</text>

  <!-- Arrow -->
  <path d="M 580 155 L 610 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 4: Screenshot Evidence -->
  <rect x="610" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="690" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">4. 抓取多端截图</text>
  <text x="690" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">桌面 / 平板 / 移动端</text>

  <!-- Arrow -->
  <path d="M 770 155 L 800 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 5: Multi-Dim Review -->
  <rect x="800" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="880" y="145" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">5. 视觉与规范审查</text>
  <text x="880" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">去 AI 味与无障碍审查</text>

  <!-- Fork: Fail vs Pass -->
  <!-- Downward branch for Fail -->
  <path d="M 880 200 L 880 290" stroke="#ef4444" stroke-width="2"/>
  <rect x="790" y="290" width="180" height="60" rx="6" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="1.5"/>
  <text x="880" y="316" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">发现缺陷 (FAIL)</text>
  <text x="880" y="336" text-anchor="middle" fill="#fca5a5" font-size="11">AI味 / 对比度不足 / 缺少状态</text>

  <!-- Repair Loop arrow back to step 2 -->
  <path d="M 790 320 L 310 320 L 310 200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
  <text x="550" y="312" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">AI Agent 自主定位根因并重构修复代码</text>

  <!-- Pass branch -->
  <path d="M 880 200 L 880 240 L 500 240 L 500 390" stroke="#10b981" stroke-width="2"/>
  <rect x="350" y="390" width="300" height="65" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="418" text-anchor="middle" fill="#10b981" font-size="15" font-weight="700">✔ 视觉门禁验证通过</text>
  <text x="500" y="438" text-anchor="middle" fill="#f8fafc" font-size="12">100% 规则、Token 与响应式真实符合标准</text>
</svg>`;

writeSvg("evidence-based-design-loop.svg", evidenceLoopEn, evidenceLoopZh);

// Diagram 4: 10-State Screen Lifecycle
const tenStateEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">THE 10 MANDATORY PRODUCT UI STATES</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">Moving Beyond Idealized AI Showcase Demos to Complete Production Software</text>

  <!-- 2 rows of 5 cards -->
  <!-- Row 1 -->
  <!-- 1. Default -->
  <rect x="40" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="140" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. DEFAULT</text>
  <text x="125" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Standard idle state.</text>
  <text x="125" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Active records loaded,</text>
  <text x="125" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">controls interactive,</text>
  <text x="125" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">baseline layout.</text>

  <!-- 2. Loading -->
  <rect x="230" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">2. LOADING</text>
  <text x="315" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Skeleton pulse loader.</text>
  <text x="315" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Preserves dimensions,</text>
  <text x="315" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">zero layout shift (CLS),</text>
  <text x="315" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">no center spinner.</text>

  <!-- 3. Empty -->
  <rect x="420" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="505" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">3. EMPTY</text>
  <text x="505" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Zero records found.</text>
  <text x="505" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Monochrome icon,</text>
  <text x="505" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">clear explanation,</text>
  <text x="505" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">primary creation CTA.</text>

  <!-- 4. Error -->
  <rect x="610" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="695" y="140" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">4. ERROR</text>
  <text x="695" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Network / API failure.</text>
  <text x="695" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Specific failure reason,</text>
  <text x="695" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">in-place red banner,</text>
  <text x="695" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">retry remediation action.</text>

  <!-- 5. Success -->
  <rect x="800" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="885" y="140" text-anchor="middle" fill="#10b981" font-size="13" font-weight="700">5. SUCCESS</text>
  <text x="885" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Action completed.</text>
  <text x="885" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Subtle green feedback,</text>
  <text x="885" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">transient toast notice,</text>
  <text x="885" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">updated data display.</text>

  <!-- Row 2 -->
  <!-- 6. Disabled -->
  <rect x="40" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" opacity="0.6"/>
  <text x="125" y="340" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">6. DISABLED</text>
  <text x="125" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">Non-interactive state.</text>
  <text x="125" y="385" text-anchor="middle" fill="#64748b" font-size="10">Reduced opacity (0.45),</text>
  <text x="125" y="400" text-anchor="middle" fill="#64748b" font-size="10">not-allowed cursor,</text>
  <text x="125" y="415" text-anchor="middle" fill="#64748b" font-size="10">explanatory tooltip.</text>

  <!-- 7. Unauthorized -->
  <rect x="230" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">7. UNAUTHORIZED</text>
  <text x="315" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">RBAC permission gate.</text>
  <text x="315" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Locked controls,</text>
  <text x="315" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">read-only indicators,</text>
  <text x="315" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">request access link.</text>

  <!-- 8. Offline -->
  <rect x="420" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="340" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">8. OFFLINE</text>
  <text x="505" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">Disconnected mode.</text>
  <text x="505" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Cached data banner,</text>
  <text x="505" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">amber status pill,</text>
  <text x="505" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">background queueing.</text>

  <!-- 9. Overflow -->
  <rect x="610" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="695" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">9. OVERFLOW</text>
  <text x="695" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">Extreme length strings.</text>
  <text x="695" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Ellipsis truncation,</text>
  <text x="695" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">horizontal table scroll,</text>
  <text x="695" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">zero layout breakage.</text>

  <!-- 10. Large Dataset -->
  <rect x="800" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="885" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">10. LARGE DATASET</text>
  <text x="885" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">1,000+ records.</text>
  <text x="885" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Virtual scrolling / paging,</text>
  <text x="885" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">sticky table headers,</text>
  <text x="885" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">instant filter search.</text>
</svg>`;

const tenStateZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">软件产品 UI 必须覆盖的 10 种关键状态</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">摆脱 AI 只做“理想演示画面”的缺陷，全面覆盖真实工业级交互生命周期</text>

  <!-- Row 1 -->
  <!-- 1. Default -->
  <rect x="40" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="140" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. 默认常态 (Default)</text>
  <text x="125" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">标准就绪数据视图。</text>
  <text x="125" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">真实业务记录展示，</text>
  <text x="125" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">所有控件正常响应，</text>
  <text x="125" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">基准布局比例。</text>

  <!-- 2. Loading -->
  <rect x="230" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">2. 加载中 (Loading)</text>
  <text x="315" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">就地骨架屏占位。</text>
  <text x="315" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">严格保持目标尺寸，</text>
  <text x="315" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">零布局抖动 (CLS)，</text>
  <text x="315" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">严禁全屏菊花旋转。</text>

  <!-- 3. Empty -->
  <rect x="420" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="505" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">3. 空数据 (Empty)</text>
  <text x="505" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">零记录或筛选无结果。</text>
  <text x="505" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">单色几何图形图标，</text>
  <text x="505" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">清晰原因解释文案，</text>
  <text x="505" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">引导创建主操作按钮。</text>

  <!-- 4. Error -->
  <rect x="610" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="695" y="140" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">4. 异常失败 (Error)</text>
  <text x="695" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">网络中断或接口报错。</text>
  <text x="695" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">提供明确失败诊断，</text>
  <text x="695" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">就地红色警示横幅，</text>
  <text x="695" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">包含重试补救操作。</text>

  <!-- 5. Success -->
  <rect x="800" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="885" y="140" text-anchor="middle" fill="#10b981" font-size="13" font-weight="700">5. 成功反馈 (Success)</text>
  <text x="885" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">变更执行完毕。</text>
  <text x="885" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">克制绿色高对比指示，</text>
  <text x="885" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">瞬态吐司消息通知，</text>
  <text x="885" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">视图实时就地更新。</text>

  <!-- Row 2 -->
  <!-- 6. Disabled -->
  <rect x="40" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" opacity="0.6"/>
  <text x="125" y="340" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">6. 禁用态 (Disabled)</text>
  <text x="125" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">条件不满足无法交互。</text>
  <text x="125" y="385" text-anchor="middle" fill="#64748b" font-size="10">透明度压低至 0.45，</text>
  <text x="125" y="400" text-anchor="middle" fill="#64748b" font-size="10">禁止点击光标样式，</text>
  <text x="125" y="415" text-anchor="middle" fill="#64748b" font-size="10">可选原因气泡提示。</text>

  <!-- 7. Unauthorized -->
  <rect x="230" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">7. 无权限 (No Auth)</text>
  <text x="315" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">RBAC 角色权限限制。</text>
  <text x="315" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">敏感操作加锁锁定，</text>
  <text x="315" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">只读视图与标识，</text>
  <text x="315" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">权限申请直达通道。</text>

  <!-- 8. Offline -->
  <rect x="420" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="340" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">8. 离线态 (Offline)</text>
  <text x="505" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">本地脱机断网工作。</text>
  <text x="505" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">缓存数据标识横幅，</text>
  <text x="505" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">黄色警告徽章提示，</text>
  <text x="505" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">操作进入排队等待。</text>

  <!-- 9. Overflow -->
  <rect x="610" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="695" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">9. 内容溢出 (Overflow)</text>
  <text x="695" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">极长字符串与大数字。</text>
  <text x="695" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">文本安全省略号截断，</text>
  <text x="695" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">表格支持横向独立滚动，</text>
  <text x="695" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">绝对不撑破页面容器。</text>

  <!-- 10. Large Dataset -->
  <rect x="800" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="885" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">10. 海量数据 (Scale)</text>
  <text x="885" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">上千行记录数据流。</text>
  <text x="885" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">虚拟滚动或紧凑分页，</text>
  <text x="885" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">表头吸顶固定锁定，</text>
  <text x="885" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">毫秒级快速就地过滤。</text>
</svg>`;

writeSvg("ten-state-screen-lifecycle.svg", tenStateEn, tenStateZh);
console.log("All 4 dual-language architecture SVG diagrams generated successfully!");
