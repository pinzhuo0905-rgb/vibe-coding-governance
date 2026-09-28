import fs from "node:fs";
import path from "node:path";

const EN_DIR = path.resolve(process.cwd(), "docs/images");
const ZH_DIR = path.resolve(process.cwd(), "docs/images/zh");

fs.mkdirSync(EN_DIR, { recursive: true });
fs.mkdirSync(ZH_DIR, { recursive: true });

function writeSvg(filename, enSvg, zhSvg) {
  fs.writeFileSync(path.join(EN_DIR, filename), `${enSvg.trim()}\n`, "utf8");
  fs.writeFileSync(path.join(ZH_DIR, filename), `${zhSvg.trim()}\n`, "utf8");
  console.log(`Generated Code Diagram: ${filename} (EN & ZH)`);
}

// Diagram 1: Paradigm Shift (Vibe Coding Chaos vs Governed Engineering)
const shiftEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <defs>
    <linearGradient id="badGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="badHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="goodHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">VIBE CODING PARADIGM SHIFT</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">From Fragile Patch-on-Patch Chaos to Governed Engineering Resilience</text>

  <!-- Left: Chaos -->
  <rect x="40" y="95" width="440" height="395" rx="8" fill="url(#badGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="55" y="110" width="410" height="34" rx="6" fill="url(#badHeader)"/>
  <text x="260" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">❌ UNCONTROLLED VIBE CODING CHAOS</text>

  <g transform="translate(65, 170)" font-size="12" fill="#fca5a5">
    <text y="0">⚠️ Fragmented &amp; Blind Agent Generation</text>
    <text y="28">• Spaghetti dependencies &amp; hidden circular imports</text>
    <text y="56">• 400+ line monolithic God Files violating SRP</text>
    <text y="84">• Widespread 'any' type bypasses to silence compiler</text>
    <text y="112">• Silent error swallowing (empty catch blocks without logging)</text>
    <text y="140">• Hardcoded secrets, API tokens, and credentials</text>
    <text y="168">• Duplicate parallel helpers (userService2, utilsCopy)</text>
    <text y="196">• Patch-on-patch refactoring ignoring root causes</text>
    <text y="224">• Tests deleted or commented out to force green CI</text>
    <text y="252">• Global mutable singletons and implicit side-effects</text>
    <text y="280">• Complete architectural decay within 48 hours</text>
  </g>

  <!-- Right: Governed -->
  <rect x="520" y="95" width="440" height="395" rx="8" fill="url(#goodGrad)" stroke="#10b981" stroke-width="1.5"/>
  <rect x="535" y="110" width="410" height="34" rx="6" fill="url(#goodHeader)"/>
  <text x="740" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">✔ GOVERNED AGENT ENGINEERING</text>

  <g transform="translate(545, 170)" font-size="12" fill="#a7f3d0">
    <text y="0">🛡️ Deterministic Single Source of Truth (SSOT)</text>
    <text y="28">• Clean Architecture: Inward dependencies only</text>
    <text y="56">• Modular SRP: Functions &lt; 50 lines, Complexity &lt; 12</text>
    <text y="84">• TypeScript Strict Mode: 100% typed, Zero 'any'</text>
    <text y="112">• Domain-specific typed errors &amp; transparent failure</text>
    <text y="140">• Zero hardcoded secrets with AST token masking</text>
    <text y="168">• Mandatory pre-search: Reusable ports and adapters</text>
    <text y="196">• Autonomous root-cause diagnosis &amp; structural fix</text>
    <text y="224">• 100% test pass rate with mandatory regression coverage</text>
    <text y="252">• Explicit dependency injection &amp; pure domain models</text>
    <text y="280">• Sustainable enterprise-grade codebase longevity</text>
  </g>
</svg>`;

const shiftZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <defs>
    <linearGradient id="badGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="badHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="goodHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">VIBE CODING 代码治理范式迁移</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">从脆弱盲目的补丁堆叠走向工程级自主可控韧性体系</text>

  <!-- Left: Chaos -->
  <rect x="40" y="95" width="440" height="395" rx="8" fill="url(#badGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="55" y="110" width="410" height="34" rx="6" fill="url(#badHeader)"/>
  <text x="260" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">❌ 失控的 VIBE CODING 混乱开发</text>

  <g transform="translate(65, 170)" font-size="12" fill="#fca5a5">
    <text y="0">⚠️ 碎片化盲目生成导致代码迅速腐烂</text>
    <text y="28">• 面条式混乱依赖与隐蔽的底层循环引用</text>
    <text y="56">• 400+ 行庞大巨石类 (God Files) 破坏单一职责</text>
    <text y="84">• 滥用 'any' 类型绕过编译器与类型检查系统</text>
    <text y="112">• 静默吞噬异常 (空 catch 块内部无任何日志)</text>
    <text y="140">• 硬编码密钥、API Tokens 与临时凭证泄露</text>
    <text y="168">• 重复创建平行类 (如 userService2, utilsCopy)</text>
    <text y="196">• 盲目补丁堆叠，从不定位领域模型真正根因</text>
    <text y="224">• 恶意删除或注释失败测试以强行让 CI 变绿</text>
    <text y="252">• 隐蔽全局可变单例与难以追踪的副作用</text>
    <text y="280">• 代码库在 48 小时内彻底失去长期可维护性</text>
  </g>

  <!-- Right: Governed -->
  <rect x="520" y="95" width="440" height="395" rx="8" fill="url(#goodGrad)" stroke="#10b981" stroke-width="1.5"/>
  <rect x="535" y="110" width="410" height="34" rx="6" fill="url(#goodHeader)"/>
  <text x="740" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">✔ 工程化智能体治理体系 (GOVERNED)</text>

  <g transform="translate(545, 170)" font-size="12" fill="#a7f3d0">
    <text y="0">🛡️ 确定性单一事实基准 (SSOT 宪法体系)</text>
    <text y="28">• 整洁架构：依赖严格单向内向流动</text>
    <text y="56">• 模块单一职责：函数 &lt; 50 行，圈复杂度 &lt; 12</text>
    <text y="84">• TypeScript 严格模式：100% 类型健全，零 any</text>
    <text y="112">• 强类型领域异常显式抛出与透明失败</text>
    <text y="140">• 静态 AST 敏感词与凭证拦截脱敏机制</text>
    <text y="168">• 强制前置检索：优先复用既有仓储端口与适配器</text>
    <text y="196">• 智能体自主根因分析与代码结构级自愈重构</text>
    <text y="224">• 100% 测试通过率并强制补充防回归测试</text>
    <text y="252">• 显式依赖注入容器与纯粹无副作用领域模型</text>
    <text y="280">• 满足工业级高可用架构的长期演进标准</text>
  </g>
</svg>`;

writeSvg("vibe-coding-paradigm-shift.svg", shiftEn, shiftZh);

// Diagram 2: Clean Architecture Boundaries
const archEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">CLEAN ARCHITECTURAL BOUNDARY ENFORCEMENT</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Inward Dependency Rule &amp; Zero Outer Leakage Contract</text>

  <!-- Concentric Layer 4: Presentation -->
  <rect x="50" y="95" width="900" height="395" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <rect x="70" y="110" width="220" height="30" rx="6" fill="#1e293b"/>
  <text x="180" y="130" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="700">PRESENTATION LAYER</text>
  <text x="820" y="130" text-anchor="middle" fill="#64748b" font-size="11">CLI Commands / HTTP API</text>

  <!-- Concentric Layer 3: Infrastructure & Application Split -->
  <rect x="80" y="155" width="840" height="315" rx="10" fill="#162032" stroke="#334155" stroke-width="1.5"/>
  
  <!-- Left Side of Layer 3: Infrastructure -->
  <rect x="100" y="175" width="380" height="275" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="100" y="175" width="380" height="32" rx="8" fill="#0284c7"/>
  <text x="290" y="196" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">INFRASTRUCTURE LAYER (ADAPTERS)</text>
  <g transform="translate(120, 230)" font-size="11" fill="#cbd5e1">
    <text y="0">• InMemoryRuleRepository (Implements Port)</text>
    <text y="24">• InMemoryAuditLogRepository</text>
    <text y="48">• TokenMasker &amp; Security Sanitizers</text>
    <text y="72">• External API &amp; File System Clients</text>
    <text y="105" fill="#f59e0b" font-weight="600">RULE: Depends on Application Ports via Inversion</text>
    <text y="125" fill="#94a3b8">MUST NOT depend on Presentation Layer.</text>
  </g>

  <!-- Right Side of Layer 3: Application & Core Domain -->
  <rect x="520" y="175" width="380" height="275" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <rect x="520" y="175" width="380" height="32" rx="8" fill="#047857"/>
  <text x="710" y="196" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">APPLICATION LAYER (USE CASES)</text>
  
  <g transform="translate(540, 225)" font-size="11" fill="#cbd5e1">
    <text y="0">• EvaluateQualityGateUseCase</text>
    <text y="20">• RegisterRuleUseCase</text>
    <text y="40">• Repository Port Interfaces (RuleRepository)</text>
    <text y="60">• DTOs: EvaluateQualityRequestDto, SummaryDto</text>
  </g>

  <!-- Innermost Core: Domain Layer -->
  <rect x="540" y="315" width="340" height="120" rx="6" fill="#090d16" stroke="#10b981" stroke-width="2"/>
  <text x="710" y="338" text-anchor="middle" fill="#10b981" font-size="12" font-weight="700">★ DOMAIN LAYER (PURE CORE)</text>
  <g transform="translate(555, 362)" font-size="10" fill="#f8fafc">
    <text y="0">• Entities: Rule, EvaluationResult</text>
    <text y="18">• Value Objects: MetricThreshold, Severity</text>
    <text y="36">• Domain Errors: InvalidRuleDefinitionError</text>
    <text y="54" fill="#38bdf8" font-weight="600">ZERO External Dependencies (Pure TypeScript)</text>
  </g>

  <!-- Inward Arrow from Infra to Application Ports -->
  <path d="M 480 300 L 520 300" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
  <text x="500" y="290" text-anchor="middle" fill="#38bdf8" font-size="10">implements</text>
</svg>`;

const archZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">整洁架构依赖边界与防腐屏障</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">源码单向向内依赖律与零外层污染契约</text>

  <!-- Layer 4: Presentation -->
  <rect x="50" y="95" width="900" height="395" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <rect x="70" y="110" width="220" height="30" rx="6" fill="#1e293b"/>
  <text x="180" y="130" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="700">表现层 (PRESENTATION)</text>
  <text x="820" y="130" text-anchor="middle" fill="#64748b" font-size="11">控制台 CLI 指令 / HTTP 接口控制器</text>

  <!-- Layer 3: Infrastructure & Application -->
  <rect x="80" y="155" width="840" height="315" rx="10" fill="#162032" stroke="#334155" stroke-width="1.5"/>
  
  <!-- Left Side: Infrastructure -->
  <rect x="100" y="175" width="380" height="275" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="100" y="175" width="380" height="32" rx="8" fill="#0284c7"/>
  <text x="290" y="196" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">基础设施层 (INFRASTRUCTURE)</text>
  <g transform="translate(120, 230)" font-size="11" fill="#cbd5e1">
    <text y="0">• InMemoryRuleRepository (实现应用层端口)</text>
    <text y="24">• InMemoryAuditLogRepository (审计存储实现)</text>
    <text y="48">• TokenMasker (敏感密钥脱敏安全器)</text>
    <text y="72">• 外部客户端、文件系统与适配器</text>
    <text y="105" fill="#f59e0b" font-weight="600">契约: 倒置依赖应用层接口，严禁直接依赖表现层</text>
    <text y="125" fill="#94a3b8">任何越层违规导入将直接导致门禁拦截阻断。</text>
  </g>

  <!-- Right Side: Application -->
  <rect x="520" y="175" width="380" height="275" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <rect x="520" y="175" width="380" height="32" rx="8" fill="#047857"/>
  <text x="710" y="196" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">应用层 (APPLICATION USE CASES)</text>
  
  <g transform="translate(540, 225)" font-size="11" fill="#cbd5e1">
    <text y="0">• EvaluateQualityGateUseCase (质量门禁评估用例)</text>
    <text y="20">• RegisterRuleUseCase (规则注册业务用例)</text>
    <text y="40">• 仓储端口接口 (RuleRepository, AuditLogRepo)</text>
    <text y="60">• 数据传输对象: EvaluateQualityRequestDto 等</text>
  </g>

  <!-- Innermost Core: Domain Layer -->
  <rect x="540" y="315" width="340" height="120" rx="6" fill="#090d16" stroke="#10b981" stroke-width="2"/>
  <text x="710" y="338" text-anchor="middle" fill="#10b981" font-size="12" font-weight="700">★ 领域层核心 (DOMAIN LAYER)</text>
  <g transform="translate(555, 362)" font-size="10" fill="#f8fafc">
    <text y="0">• 领域实体: Rule (质量规则), EvaluationResult</text>
    <text y="18">• 值对象: MetricThreshold, Severity (严苛等级)</text>
    <text y="36">• 领域专属异常: InvalidRuleDefinitionError 等</text>
    <text y="54" fill="#38bdf8" font-weight="600">对外层具有零依赖 (纯粹 TypeScript 原生逻辑)</text>
  </g>

  <!-- Inward Arrow -->
  <path d="M 480 300 L 520 300" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
  <text x="500" y="290" text-anchor="middle" fill="#38bdf8" font-size="10">实现接口</text>
</svg>`;

writeSvg("clean-architecture-boundaries.svg", archEn, archZh);

// Diagram 3: Governance Pipeline
const pipelineEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">AUTOMATED QUALITY GOVERNANCE PIPELINE</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Multi-Tier Continuous Quality Gate Enforced Before Pull Request Merge</text>

  <!-- 6 Step Pipeline Flow -->
  <g transform="translate(30, 110)">
    <!-- Step 1 -->
    <rect x="0" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="70" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. FORMAT</text>
    <text x="70" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Biome Formatter</text>
    <text x="70" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Indentation, quotes,</text>
    <text x="70" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">semicolons, line</text>
    <text x="70" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">wrapping consistency.</text>
    <text x="70" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Auto-Fixable</text>

    <!-- Arrow 1 -->
    <path d="M 140 75 L 160 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 2 -->
    <rect x="160" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="160" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="230" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">2. LINT</text>
    <text x="230" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Biome Linter</text>
    <text x="230" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Antipatterns, dead</text>
    <text x="230" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">code, complexity,</text>
    <text x="230" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">function length &lt;50.</text>
    <text x="230" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Zero Warnings</text>

    <!-- Arrow 2 -->
    <path d="M 300 75 L 320 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 3 -->
    <rect x="320" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="320" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="390" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">3. TYPECHECK</text>
    <text x="390" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Strict TSC 5.8</text>
    <text x="390" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Zero 'any' bypasses,</text>
    <text x="390" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">strict null checks,</text>
    <text x="390" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">exhaustive unions.</text>
    <text x="390" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 100% Typed</text>

    <!-- Arrow 3 -->
    <path d="M 460 75 L 480 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 4 -->
    <rect x="480" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="480" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="550" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">4. ARCH-CHECK</text>
    <text x="550" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Boundary Scanner</text>
    <text x="550" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">AST import graph,</text>
    <text x="550" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">cycle detection,</text>
    <text x="550" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">inward rule check.</text>
    <text x="550" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Zero Cycles</text>

    <!-- Arrow 4 -->
    <path d="M 620 75 L 640 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 5 -->
    <rect x="640" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="640" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="710" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">5. SECURITY</text>
    <text x="710" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Secret &amp; Catch</text>
    <text x="710" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Token entropy scan,</text>
    <text x="710" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">zero empty catch,</text>
    <text x="710" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">failure logging.</text>
    <text x="710" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Zero Leaks</text>

    <!-- Arrow 5 -->
    <path d="M 780 75 L 800 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 6 -->
    <rect x="800" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="800" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="870" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">6. TESTS</text>
    <text x="870" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Test Suite</text>
    <text x="870" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Unit, integration,</text>
    <text x="870" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">governance tests,</text>
    <text x="870" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">regression shields.</text>
    <text x="870" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 100% Passing</text>
  </g>

  <!-- Output Decision Box -->
  <g transform="translate(150, 310)">
    <rect x="0" y="0" width="700" height="150" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
    <text x="350" y="32" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="700">UNIFIED QUALITY GATE (npm run quality)</text>
    
    <rect x="50" y="55" width="280" height="70" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1.5"/>
    <text x="190" y="85" text-anchor="middle" fill="#10b981" font-size="14" font-weight="700">✔ ALL GATES PASSED</text>
    <text x="190" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">Eligible for Pull Request &amp; Merge</text>

    <rect x="370" y="55" width="280" height="70" rx="6" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="1.5"/>
    <text x="510" y="85" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="700">✖ ANY GATE REJECTED</text>
    <text x="510" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">Triggers Agent Autonomous Repair Loop</text>
  </g>
</svg>`;

const pipelineZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">自动化代码质量门禁流水线</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">在代码合入前强制执行的多层持续质量验证矩阵</text>

  <!-- 6 Step Pipeline Flow -->
  <g transform="translate(30, 110)">
    <!-- Step 1 -->
    <rect x="0" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="70" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. 代码格式化</text>
    <text x="70" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Biome Formatter</text>
    <text x="70" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">缩进、单双引号、</text>
    <text x="70" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">分号与折行风格，</text>
    <text x="70" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">保持毫秒级一致。</text>
    <text x="70" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 支持自动修复</text>

    <!-- Arrow 1 -->
    <path d="M 140 75 L 160 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 2 -->
    <rect x="160" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="160" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="230" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">2. 静态检查</text>
    <text x="230" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Biome Linter</text>
    <text x="230" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">代码反模式、死代码、</text>
    <text x="230" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">认知复杂度与函数</text>
    <text x="230" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">行数 &lt;50 强力卡点。</text>
    <text x="230" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 零警告容忍</text>

    <!-- Arrow 2 -->
    <path d="M 300 75 L 320 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 3 -->
    <rect x="320" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="320" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="390" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">3. 严格类型</text>
    <text x="390" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">Strict TSC 5.8</text>
    <text x="390" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">严禁使用 any 绕过、</text>
    <text x="390" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">严格空值检测、</text>
    <text x="390" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">穷尽联合类型推导。</text>
    <text x="390" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 100% 健全类型</text>

    <!-- Arrow 3 -->
    <path d="M 460 75 L 480 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 4 -->
    <rect x="480" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="480" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="550" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">4. 架构扫描</text>
    <text x="550" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">边界依赖检查</text>
    <text x="550" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">静态 AST 导入图谱、</text>
    <text x="550" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">循环引用检测、</text>
    <text x="550" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">内向单向依赖验证。</text>
    <text x="550" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 零循环调用</text>

    <!-- Arrow 4 -->
    <path d="M 620 75 L 640 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 5 -->
    <rect x="640" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="640" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="710" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">5. 安全审计</text>
    <text x="710" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">密钥与异常检测</text>
    <text x="710" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Token 信息熵扫描、</text>
    <text x="710" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">零空 catch 异常块、</text>
    <text x="710" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">失败透明度记录。</text>
    <text x="710" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 零凭证泄漏</text>

    <!-- Arrow 5 -->
    <path d="M 780 75 L 800 75" stroke="#38bdf8" stroke-width="2"/>

    <!-- Step 6 -->
    <rect x="800" y="0" width="140" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="800" y="0" width="140" height="28" rx="8" fill="#1e293b"/>
    <text x="870" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">6. 测试套件</text>
    <text x="870" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">自动化回归测试</text>
    <text x="870" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">单元测试、端到端集成、</text>
    <text x="870" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">架构治理断言、</text>
    <text x="870" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">防功能退化屏障。</text>
    <text x="870" y="135" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 100% 全绿</text>
  </g>

  <!-- Output Decision Box -->
  <g transform="translate(150, 310)">
    <rect x="0" y="0" width="700" height="150" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
    <text x="350" y="32" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="700">统一质量门禁调度器 (npm run quality)</text>
    
    <rect x="50" y="55" width="280" height="70" rx="6" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1.5"/>
    <text x="190" y="85" text-anchor="middle" fill="#10b981" font-size="14" font-weight="700">✔ 所有门禁 100% 全绿</text>
    <text x="190" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">获得授权，允许创建并合入 Pull Request</text>

    <rect x="370" y="55" width="280" height="70" rx="6" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="1.5"/>
    <text x="510" y="85" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="700">✖ 任意门禁违规驳回</text>
    <text x="510" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">自动触发智能体自主诊断与根因自愈重构</text>
  </g>
</svg>`;

writeSvg("governance-pipeline.svg", pipelineEn, pipelineZh);

// Diagram 4: Agent Auto-Repair Loop
const repairEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">AGENT AUTONOMOUS REPAIR LOOP</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Structured Root Cause Diagnosis &amp; Non-Bypassing Self-Remediation</text>

  <!-- Step 1: Run Quality Gate -->
  <rect x="40" y="115" width="180" height="100" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="130" y="150" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. EXECUTE GATE</text>
  <text x="130" y="172" text-anchor="middle" fill="#cbd5e1" font-size="11">npm run quality</text>
  <text x="130" y="192" text-anchor="middle" fill="#94a3b8" font-size="10">Format, Lint, Types, Tests</text>

  <!-- Arrow -->
  <path d="M 220 165 L 260 165" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 2: Quality Gate Interception -->
  <rect x="260" y="115" width="200" height="100" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="360" y="150" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">2. INTERCEPTION</text>
  <text x="360" y="172" text-anchor="middle" fill="#fca5a5" font-size="11">Zero Bypass Guarantee</text>
  <text x="360" y="192" text-anchor="middle" fill="#94a3b8" font-size="10">Blocks PR immediately</text>

  <!-- Arrow -->
  <path d="M 460 165 L 500 165" stroke="#ef4444" stroke-width="2"/>

  <!-- Step 3: Structured Diagnostic Report -->
  <rect x="500" y="115" width="220" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="610" y="145" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">3. DIAGNOSTIC REPORT</text>
  <text x="610" y="168" text-anchor="middle" fill="#cbd5e1" font-size="11">• Target Category (Arch/Type)</text>
  <text x="610" y="186" text-anchor="middle" fill="#cbd5e1" font-size="11">• Stdout / Stderr Context</text>
  <text x="610" y="202" text-anchor="middle" fill="#94a3b8" font-size="10">• Recommended Remediation</text>

  <!-- Arrow -->
  <path d="M 720 165 L 760 165" stroke="#f59e0b" stroke-width="2"/>

  <!-- Step 4: AI Root Cause Analysis -->
  <rect x="760" y="115" width="200" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="860" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">4. ROOT CAUSE (RCA)</text>
  <text x="860" y="168" text-anchor="middle" fill="#cbd5e1" font-size="11">Agent analyzes domain</text>
  <text x="860" y="186" text-anchor="middle" fill="#94a3b8" font-size="10">Rejects ignore directives</text>
  <text x="860" y="202" text-anchor="middle" fill="#94a3b8" font-size="10">Rejects deleting tests</text>

  <!-- Loop Downward Arrow -->
  <path d="M 860 215 L 860 300" stroke="#0284c7" stroke-width="2"/>

  <!-- Step 5: Structural Refactor & Fix -->
  <rect x="520" y="270" width="300" height="90" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="670" y="302" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">5. ATOMIC STRUCTURAL FIX</text>
  <text x="670" y="325" text-anchor="middle" fill="#cbd5e1" font-size="11">Refactors layer dependencies &amp; domain types</text>
  <text x="670" y="343" text-anchor="middle" fill="#94a3b8" font-size="10">Preserves public API contracts cleanly</text>

  <!-- Loop back to Step 1 -->
  <path d="M 520 315 L 130 315 L 130 215" stroke="#0284c7" stroke-width="2" stroke-dasharray="4"/>
  <text x="325" y="305" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="600">Re-verify loop until 100% Green</text>

  <!-- Final Success Box -->
  <rect x="250" y="400" width="500" height="65" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="428" text-anchor="middle" fill="#10b981" font-size="15" font-weight="700">✔ QUALITY GATE PASSED (READY FOR MERGE)</text>
  <text x="500" y="448" text-anchor="middle" fill="#f8fafc" font-size="12">Conventional Commit generated &amp; clean pull request authored</text>
</svg>`;

const repairZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">智能体自主根因诊断与闭环自愈修复链路</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">基于结构化诊断报告驱动的智能体重构，严禁逃避检查与降级绕过</text>

  <!-- Step 1 -->
  <rect x="40" y="115" width="180" height="100" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="130" y="150" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. 执行质量门禁</text>
  <text x="130" y="172" text-anchor="middle" fill="#cbd5e1" font-size="11">npm run quality</text>
  <text x="130" y="192" text-anchor="middle" fill="#94a3b8" font-size="10">格式、静态、类型、安全与测试</text>

  <!-- Arrow -->
  <path d="M 220 165 L 260 165" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 2 -->
  <rect x="260" y="115" width="200" height="100" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="360" y="150" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">2. 门禁机器级拦截</text>
  <text x="360" y="172" text-anchor="middle" fill="#fca5a5" font-size="11">零绕过与零妥协保证</text>
  <text x="360" y="192" text-anchor="middle" fill="#94a3b8" font-size="10">立即阻断代码提交与 PR 合入</text>

  <!-- Arrow -->
  <path d="M 460 165 L 500 165" stroke="#ef4444" stroke-width="2"/>

  <!-- Step 3 -->
  <rect x="500" y="115" width="220" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="610" y="145" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">3. 结构化诊断输出</text>
  <text x="610" y="168" text-anchor="middle" fill="#cbd5e1" font-size="11">• 目标错误分类 (架构/类型/安全)</text>
  <text x="610" y="186" text-anchor="middle" fill="#cbd5e1" font-size="11">• 完整标准输出与报错调用栈</text>
  <text x="610" y="202" text-anchor="middle" fill="#94a3b8" font-size="10">• 明确的官方自愈修复建议指令</text>

  <!-- Arrow -->
  <path d="M 720 165 L 760 165" stroke="#f59e0b" stroke-width="2"/>

  <!-- Step 4 -->
  <rect x="760" y="115" width="200" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="860" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">4. 智能体根因分析</text>
  <text x="860" y="168" text-anchor="middle" fill="#cbd5e1" font-size="11">深度解析状态机与领域模型</text>
  <text x="860" y="186" text-anchor="middle" fill="#94a3b8" font-size="10">严禁添加 ignore 注释欺瞒</text>
  <text x="860" y="202" text-anchor="middle" fill="#94a3b8" font-size="10">严禁删改或跳过失败断言</text>

  <!-- Loop Downward Arrow -->
  <path d="M 860 215 L 860 300" stroke="#0284c7" stroke-width="2"/>

  <!-- Step 5 -->
  <rect x="520" y="270" width="300" height="90" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="670" y="302" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">5. 原子化架构级代码自愈重构</text>
  <text x="670" y="325" text-anchor="middle" fill="#cbd5e1" font-size="11">倒置依赖接口、提取纯内层值对象与健壮类型</text>
  <text x="670" y="343" text-anchor="middle" fill="#94a3b8" font-size="10">保持公共对外 API 契约严谨稳定</text>

  <!-- Loop back to Step 1 -->
  <path d="M 520 315 L 130 315 L 130 215" stroke="#0284c7" stroke-width="2" stroke-dasharray="4"/>
  <text x="325" y="305" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="600">重新触发验证流水线，直至 100% 全绿</text>

  <!-- Final Success Box -->
  <rect x="250" y="400" width="500" height="65" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="428" text-anchor="middle" fill="#10b981" font-size="15" font-weight="700">✔ 门禁全绿通过 (允许合入 PULL REQUEST)</text>
  <text x="500" y="448" text-anchor="middle" fill="#f8fafc" font-size="12">按约定式提交规范生成 Commit 并发起审查合并</text>
</svg>`;

writeSvg("agent-auto-repair-loop.svg", repairEn, repairZh);

// Diagram 5: Multi-Agent Rule Synchronization
const syncEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">MULTI-AGENT GOVERNANCE SYNCHRONIZATION</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Single Source of Truth (AGENTS.md) Propagating to All Leading AI Assistants</text>

  <!-- Center Hub: AGENTS.md SSOT -->
  <g transform="translate(360, 110)">
    <rect x="0" y="0" width="280" height="150" rx="10" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
    <rect x="0" y="0" width="280" height="36" rx="10" fill="#0284c7"/>
    <text x="140" y="23" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">AGENTS.md (MASTER CONSTITUTION)</text>
    <text x="140" y="60" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">Single Source of Truth (SSOT)</text>
    <text x="140" y="85" text-anchor="middle" fill="#cbd5e1" font-size="11">• Clean Architecture Inward Rules</text>
    <text x="140" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">• Strict Typing &amp; Antipattern Ceilings</text>
    <text x="140" y="125" text-anchor="middle" fill="#10b981" font-size="11" font-weight="600">Sync Engine: npm run rule:sync</text>
  </g>

  <!-- 5 Targets Surrounding the Hub -->
  <!-- Target 1: Claude Code -->
  <g transform="translate(40, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="700">CLAUDE CODE</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">CLAUDE.md</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Anthropic Claude CLI</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">&amp; autonomous terminal</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Auto-Synchronized</text>
  </g>

  <!-- Target 2: Cursor IDE -->
  <g transform="translate(230, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">CURSOR IDE</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">.cursor/rules/*.mdc</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Cursor Composer &amp;</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">Agent inline rules</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ MDC Format</text>
  </g>

  <!-- Target 3: Google Gemini -->
  <g transform="translate(420, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#818cf8" font-size="11" font-weight="700">GEMINI AGENT</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">GEMINI.md</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Google Gemini CLI</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">&amp; Workspace tools</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Auto-Synchronized</text>
  </g>

  <!-- Target 4: GitHub Copilot -->
  <g transform="translate(610, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">GITHUB COPILOT</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">copilot-instructions</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Repository-level</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">Copilot Chat context</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Auto-Synchronized</text>
  </g>

  <!-- Target 5: Windsurf IDE -->
  <g transform="translate(800, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">WINDSURF IDE</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">.windsurfrules</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Codeium Windsurf</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">Cascade assistant</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ Auto-Synchronized</text>
  </g>

  <!-- Fan-out connecting paths -->
  <path d="M 400 260 L 122 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 450 260 L 312 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 500 260 L 502 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 550 260 L 692 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 600 260 L 882 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
</svg>`;

const syncZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">多平台智能体代码治理规范自动化同步体系</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">单一事实基准 (AGENTS.md) 单向分发至各大主流 AI 助手，彻底杜绝规则漂移</text>

  <!-- Center Hub: AGENTS.md SSOT -->
  <g transform="translate(360, 110)">
    <rect x="0" y="0" width="280" height="150" rx="10" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
    <rect x="0" y="0" width="280" height="36" rx="10" fill="#0284c7"/>
    <text x="140" y="23" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">AGENTS.md (治理核心宪法)</text>
    <text x="140" y="60" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">单一事实基准 (Single Source of Truth)</text>
    <text x="140" y="85" text-anchor="middle" fill="#cbd5e1" font-size="11">• 整洁架构单向依赖硬约束</text>
    <text x="140" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">• 严格类型推导与反模式红线卡点</text>
    <text x="140" y="125" text-anchor="middle" fill="#10b981" font-size="11" font-weight="600">自动化同步指令: npm run rule:sync</text>
  </g>

  <!-- 5 Targets Surrounding the Hub -->
  <!-- Target 1: Claude Code -->
  <g transform="translate(40, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="700">CLAUDE CODE</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">CLAUDE.md</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Anthropic Claude CLI</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">与自主终端智能体</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 自动单向同步</text>
  </g>

  <!-- Target 2: Cursor IDE -->
  <g transform="translate(230, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">CURSOR IDE</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">.cursor/rules/*.mdc</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Cursor Composer 与</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">全局智能体规则注入</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 原生 MDC 格式</text>
  </g>

  <!-- Target 3: Google Gemini -->
  <g transform="translate(420, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#818cf8" font-size="11" font-weight="700">GEMINI AGENT</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">GEMINI.md</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Google Gemini CLI</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">与工作区智能助手</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 自动单向同步</text>
  </g>

  <!-- Target 4: GitHub Copilot -->
  <g transform="translate(610, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">GITHUB COPILOT</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">copilot-instructions</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">仓库级别 Copilot</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">Chat 上下文注入</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 自动单向同步</text>
  </g>

  <!-- Target 5: Windsurf IDE -->
  <g transform="translate(800, 310)">
    <rect x="0" y="0" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">WINDSURF IDE</text>
    <text x="82" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="600">.windsurfrules</text>
    <text x="82" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">Codeium Windsurf</text>
    <text x="82" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">Cascade 编程智能体</text>
    <text x="82" y="130" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600">✔ 自动单向同步</text>
  </g>

  <!-- Fan-out connecting paths -->
  <path d="M 400 260 L 122 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 450 260 L 312 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 500 260 L 502 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 550 260 L 692 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
  <path d="M 600 260 L 882 310" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3"/>
</svg>`;

writeSvg("multi-agent-rule-sync.svg", syncEn, syncZh);
console.log("All 5 code governance diagrams generated successfully!");
