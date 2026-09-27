import fs from "node:fs";
import path from "node:path";

const ZH_DIR = path.resolve(process.cwd(), "docs/images/zh");
if (!fs.existsSync(ZH_DIR)) fs.mkdirSync(ZH_DIR, { recursive: true });

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',Roboto,sans-serif";

// 1. Paradigm Shift
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#0f172a; font-family:${FONT};">
  <defs>
    <linearGradient id="badGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">VIBE CODING 范式演进</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">从脆弱的“打补丁”混乱，到工程化的韧性质量治理</text>

  <rect x="40" y="100" width="430" height="380" rx="16" fill="url(#badGrad)" stroke="#ef4444" stroke-width="2" filter="url(#shadow)"/>
  <rect x="60" y="120" width="390" height="35" rx="8" fill="#ef4444"/>
  <text x="255" y="143" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">失控的 VIBE CODING（技术债混乱）</text>

  <g transform="translate(65, 175)" font-size="13" fill="#fca5a5">
    <rect x="0" y="0" width="380" height="38" rx="6" fill="#1e293b" stroke="#7f1d1d"/>
    <text x="20" y="24">人类自然语言 Prompt → AI 生成代码</text>

    <path d="M 190 38 L 190 55" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
    
    <rect x="0" y="55" width="380" height="38" rx="6" fill="#1e293b" stroke="#7f1d1d"/>
    <text x="20" y="79">AI 直接在已有文件中盲目追加 Patch</text>

    <path d="M 190 93 L 190 110" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>

    <rect x="0" y="110" width="380" height="38" rx="6" fill="#1e293b" stroke="#7f1d1d"/>
    <text x="20" y="134">代码运行（“在我电脑上能跑就行”）</text>

    <path d="M 190 148 L 190 165" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>

    <rect x="0" y="165" width="380" height="110" rx="8" fill="#450a0a" stroke="#dc2626"/>
    <text x="20" y="190" fill="#fecaca" font-weight="bold">⚠️ 必然的技术腐化与隐患：</text>
    <text x="35" y="212" fill="#fca5a5" font-size="12">• God Class 与数千行单体巨型文件</text>
    <text x="35" y="230" fill="#fca5a5" font-size="12">• 循环依赖与隐式全局可变状态</text>
    <text x="35" y="248" fill="#fca5a5" font-size="12">• Patch 的 Patch 导致级联回归缺陷</text>
    <text x="35" y="266" fill="#fca5a5" font-size="12">• 空 catch 吞没异常与技术债无限滚雪球</text>
  </g>

  <rect x="530" y="100" width="430" height="380" rx="16" fill="url(#goodGrad)" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
  <rect x="550" y="120" width="390" height="35" rx="8" fill="#10b981"/>
  <text x="745" y="143" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">治理下的 VIBE CODING（工程化保障）</text>

  <g transform="translate(555, 175)" font-size="13" fill="#6ee7b7">
    <rect x="0" y="0" width="380" height="38" rx="6" fill="#1e293b" stroke="#064e3b"/>
    <text x="20" y="24">需求输入 + AGENTS.md 宪法约束</text>

    <path d="M 190 38 L 190 55" stroke="#10b981" stroke-width="2"/>
    
    <rect x="0" y="55" width="380" height="38" rx="6" fill="#1e293b" stroke="#064e3b"/>
    <text x="20" y="79">AI 检索已有模块与辅助类，最小修改</text>

    <path d="M 190 93 L 190 110" stroke="#10b981" stroke-width="2"/>

    <rect x="0" y="110" width="380" height="38" rx="6" fill="#1e293b" stroke="#064e3b"/>
    <text x="20" y="134">多层自动化质量门禁（6 层刚性校验）</text>

    <path d="M 190 148 L 190 165" stroke="#10b981" stroke-width="2"/>

    <rect x="0" y="165" width="380" height="110" rx="8" fill="#064e3b" stroke="#059669"/>
    <text x="20" y="190" fill="#a7f3d0" font-weight="bold">🛡️ 稳固的质量与工程韧性：</text>
    <text x="35" y="212" fill="#6ee7b7" font-size="12">• 自动化根因诊断与 Agent 自主自愈循环</text>
    <text x="35" y="230" fill="#6ee7b7" font-size="12">• 严格向内的整洁架构边界与无环图</text>
    <text x="35" y="248" fill="#6ee7b7" font-size="12">• 零 Secret 泄露与强类型错误契约</text>
    <text x="35" y="266" fill="#6ee7b7" font-size="12">• 长期可持续迭代的高速度与零腐化</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(ZH_DIR, "vibe-coding-paradigm-shift.svg"), svg1, "utf8");

// 2. Governance Pipeline Funnel
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="1000" height="600" style="background:#0f172a; font-family:${FONT};">
  <defs>
    <filter id="glow">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">多层自动化代码质量治理流水线</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">自动化过滤漏斗：从 AI 初始生成到合规的生产级 Pull Request</text>

  <!-- Layer 1 -->
  <g transform="translate(100, 105)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#0284c7"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">代码格式化层 (Biome / Spotless / Black / rustfmt)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">统一样式、缩进、折行与 Import 排序，消灭一切团队与 Agent 风格争议。</text>
  </g>

  <!-- Layer 2 -->
  <g transform="translate(100, 170)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#2563eb"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">静态 Linter 与反模式检测 (Biome / Ruff / ESLint / Clippy)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">检测无用死代码、认知复杂度过高 (>12)、危险隐式转换及变量作用域冲突。</text>
  </g>

  <!-- Layer 3 -->
  <g transform="translate(100, 235)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#4f46e5"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">严格类型检查层 (TypeScript Strict / Pyright / 编译器)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">开启严格空值检查，严禁使用 any 绕过、强行类型断言与未受检的属性索引。</text>
  </g>

  <!-- Layer 4 -->
  <g transform="translate(100, 300)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#9333ea"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">架构边界约束与循环依赖检测 (arch-check)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">实时拦截层级倒置（如 Domain 反向依赖 Infra）与模块间的循环引用 (Cycles)。</text>
  </g>

  <!-- Layer 5 -->
  <g transform="translate(100, 365)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#db2777"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">安全审计、密钥扫描与异常契约 (security-check)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">扫描硬编码 API Token / 密码，强制禁止空 catch 块与静默 return null 掩盖问题。</text>
  </g>

  <!-- Layer 6 -->
  <g transform="translate(100, 430)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="52" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
    <circle cx="35" cy="26" r="16" fill="#059669"/>
    <text x="35" y="32" text-anchor="middle" fill="#fff" font-weight="bold">6</text>
    <text x="70" y="24" fill="#f8fafc" font-weight="bold" font-size="15">自动化测试套件 (单元测试、领域约束与回归测试)</text>
    <text x="70" y="42" fill="#94a3b8" font-size="12">全量验证业务不变性与边界条件，确保新增代码不破坏既有系统的任何历史功能。</text>
  </g>

  <!-- Layer 7 Gate -->
  <g transform="translate(100, 495)" filter="url(#glow)">
    <rect x="0" y="0" width="800" height="60" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <circle cx="35" cy="30" r="16" fill="#10b981"/>
    <text x="35" y="36" text-anchor="middle" fill="#fff" font-weight="bold">7</text>
    <text x="70" y="27" fill="#a7f3d0" font-weight="bold" font-size="16">质量门禁全绿 → 允许提交 COMMIT 并发起 PULL REQUEST</text>
    <text x="70" y="47" fill="#6ee7b7" font-size="12">自动化 CI 验证全部通过，代码具备高可读性、高可测性与高工程韧性，随时可交付上线。</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(ZH_DIR, "governance-pipeline.svg"), svg2, "utf8");

// 3. Agent Auto-Repair Loop
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#0f172a; font-family:${FONT};">
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

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">AI AGENT 自主验证与自愈修复循环</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">自我纠错闭环：“允许 AI 产生差错，但不允许错误通过工程门禁”</text>

  <!-- Step 1 -->
  <g transform="translate(60, 110)">
    <rect x="0" y="0" width="190" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="95" y="32" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="14">1. 读取项目上下文</text>
    <text x="95" y="52" text-anchor="middle" fill="#94a3b8" font-size="11">AGENTS.md 与架构规则</text>
  </g>

  <path d="M 250 145 L 290 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 2 -->
  <g transform="translate(300, 110)">
    <rect x="0" y="0" width="190" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="95" y="32" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="14">2. 检索并实现需求</text>
    <text x="95" y="52" text-anchor="middle" fill="#94a3b8" font-size="11">专注最小范围原子变更</text>
  </g>

  <path d="M 490 145 L 530 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 3 -->
  <g transform="translate(540, 110)">
    <rect x="0" y="0" width="200" height="70" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="100" y="32" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="14">3. 执行统一质量门禁</text>
    <text x="100" y="52" text-anchor="middle" fill="#fbbf24" font-size="11">npm run quality</text>
  </g>

  <path d="M 740 145 L 800 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Decision -->
  <g transform="translate(850, 145)">
    <polygon points="0,-45 45,0 0,45 -45,0" fill="#334155" stroke="#f8fafc" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">门禁通过？</text>
  </g>

  <!-- Branch YES -->
  <path d="M 850 190 L 850 340" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)"/>
  <text x="865" y="260" fill="#10b981" font-weight="bold" font-size="14">通过 (PASS)</text>

  <g transform="translate(740, 350)">
    <rect x="0" y="0" width="220" height="80" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="110" y="35" text-anchor="middle" fill="#a7f3d0" font-weight="bold" font-size="15">提交 COMMIT 并推送</text>
    <text x="110" y="58" text-anchor="middle" fill="#6ee7b7" font-size="12">发起 Pull Request</text>
  </g>

  <!-- Branch NO -->
  <path d="M 805 145 L 640 145 L 640 280" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowRed)"/>
  <text x="730" y="135" fill="#ef4444" font-weight="bold" font-size="14">未通过 (FAIL)</text>

  <!-- Repair Box -->
  <g transform="translate(480, 290)">
    <rect x="0" y="0" width="320" height="110" rx="12" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="160" y="30" text-anchor="middle" fill="#fecaca" font-weight="bold" font-size="14">4. 自主根因分析与修复</text>
    <text x="20" y="55" fill="#fca5a5" font-size="12">• 检查结构化报错类别与堆栈诊断信息</text>
    <text x="20" y="73" fill="#fca5a5" font-size="12">• 严禁投机绕过（禁止加 any、禁止加 ignore、禁止删测试）</text>
    <text x="20" y="91" fill="#fca5a5" font-size="12">• 寻找根本原因，实施架构级语义修复</text>
  </g>

  <!-- Loop back -->
  <path d="M 480 345 L 395 345 L 395 190" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowRed)"/>
  <text x="405" y="270" fill="#ef4444" font-size="12" font-weight="bold">自愈闭环</text>
</svg>`;
fs.writeFileSync(path.join(ZH_DIR, "agent-auto-repair-loop.svg"), svg3, "utf8");

// 4. Clean Architecture Boundaries
const svg4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 580" width="1000" height="580" style="background:#0f172a; font-family:${FONT};">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">整洁架构边界与合法依赖方向</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">单向向内依赖法则：核心领域模型绝对独立于外部细节、框架与数据库</text>

  <!-- Concentric Rings -->
  <circle cx="340" cy="310" r="210" fill="#1e293b" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4"/>
  <circle cx="340" cy="310" r="160" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <circle cx="340" cy="310" r="110" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
  <circle cx="340" cy="310" r="60" fill="#064e3b" stroke="#10b981" stroke-width="3"/>

  <!-- Texts -->
  <text x="340" y="306" text-anchor="middle" fill="#a7f3d0" font-weight="bold" font-size="13">领域层 DOMAIN</text>
  <text x="340" y="324" text-anchor="middle" fill="#6ee7b7" font-size="10">业务实体与不变性规则</text>

  <text x="340" y="225" text-anchor="middle" fill="#67e8f9" font-weight="bold" font-size="13">应用层 APPLICATION</text>
  <text x="340" y="242" text-anchor="middle" fill="#a5f3fc" font-size="10">业务用例、DTO 与端口契约</text>

  <text x="340" y="170" text-anchor="middle" fill="#c4b5fd" font-weight="bold" font-size="13">基础设施层 INFRASTRUCTURE</text>
  <text x="340" y="187" text-anchor="middle" fill="#ddd6fe" font-size="10">持久化仓储、外部调用与安全工具</text>

  <text x="340" y="120" text-anchor="middle" fill="#93c5fd" font-weight="bold" font-size="13">表现层 PRESENTATION</text>
  <text x="340" y="137" text-anchor="middle" fill="#bfdbfe" font-size="10">CLI 入口、API 控制器与输入格式化</text>

  <!-- Legend & Rules Card -->
  <g transform="translate(600, 110)">
    <rect x="0" y="0" width="360" height="400" rx="14" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="180" y="35" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">单向合法依赖规则</text>

    <!-- Rule 1 -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="320" height="65" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="24" fill="#a7f3d0" font-weight="bold" font-size="13">1. 领域层 Domain (纯净核心)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="11">• 零外部依赖、零第三方框架引用</text>
      <text x="15" y="57" fill="#94a3b8" font-size="11">• 严禁直接依赖 Application 或 Infra</text>
    </g>

    <!-- Rule 2 -->
    <g transform="translate(20, 145)">
      <rect x="0" y="0" width="320" height="65" rx="8" fill="#0f172a" stroke="#06b6d4"/>
      <text x="15" y="24" fill="#67e8f9" font-weight="bold" font-size="13">2. 应用层 Application (用例编排)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="11">• 仅依赖 Domain 纯业务实体</text>
      <text x="15" y="57" fill="#94a3b8" font-size="11">• 通过 Port 接口反转对基础设施的依赖</text>
    </g>

    <!-- Rule 3 -->
    <g transform="translate(20, 225)">
      <rect x="0" y="0" width="320" height="65" rx="8" fill="#0f172a" stroke="#8b5cf6"/>
      <text x="15" y="24" fill="#c4b5fd" font-weight="bold" font-size="13">3. 基础设施层 Infrastructure (技术适配)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="11">• 实现应用层定义的 Repository 端口</text>
      <text x="15" y="57" fill="#94a3b8" font-size="11">• 与表现层 Presentation 保持物理隔离</text>
    </g>

    <!-- Rule 4 -->
    <g transform="translate(20, 305)">
      <rect x="0" y="0" width="320" height="75" rx="8" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="24" fill="#fca5a5" font-weight="bold" font-size="13">⛔ 严格禁用的架构反模式</text>
      <text x="15" y="42" fill="#f87171" font-size="11">• 循环依赖 (A → B → A)</text>
      <text x="15" y="57" fill="#f87171" font-size="11">• 表现层越过用例层直接查询数据库</text>
      <text x="15" y="70" fill="#f87171" font-size="11">• 出现超过 400 行的代码巨石文件 (God File)</text>
    </g>
  </g>
</svg>`;
fs.writeFileSync(path.join(ZH_DIR, "clean-architecture-boundaries.svg"), svg4, "utf8");

// 5. Multi-Agent Rule Sync
const svg5 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480" width="1000" height="480" style="background:#0f172a; font-family:${FONT};">
  <defs>
    <marker id="syncArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="24" font-weight="bold">多 AGENT 统一规则同步系统</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="14">单一可信源 (SSOT)：彻底消除 Codex、Claude、Cursor、Copilot 与 Gemini 之间的规则分叉</text>

  <!-- Central Hub: AGENTS.md -->
  <g transform="translate(80, 160)">
    <rect x="0" y="0" width="280" height="180" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
    <rect x="20" y="20" width="240" height="35" rx="6" fill="#0284c7"/>
    <text x="140" y="43" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="15">AGENTS.md</text>
    <text x="140" y="75" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="bold">全局单一可信源 (SSOT)</text>
    <text x="25" y="105" fill="#94a3b8" font-size="11">• 整洁向内架构边界与依赖法则</text>
    <text x="25" y="125" fill="#94a3b8" font-size="11">• 命名规则、复杂度约束与反模式阻断</text>
    <text x="25" y="145" fill="#94a3b8" font-size="11">• 严禁行为清单与 Definition of Done</text>
    <text x="25" y="165" fill="#94a3b8" font-size="11">• 统一质量命令规范 (npm run quality)</text>
  </g>

  <!-- Rule Sync Engine -->
  <g transform="translate(420, 205)">
    <rect x="0" y="0" width="160" height="90" rx="10" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
    <text x="80" y="38" text-anchor="middle" fill="#fbbf24" font-weight="bold" font-size="14">规则同步</text>
    <text x="80" y="58" text-anchor="middle" fill="#fbbf24" font-weight="bold" font-size="14">引擎</text>
    <text x="80" y="78" text-anchor="middle" fill="#cbd5e1" font-size="10">npm run rule:sync</text>
  </g>

  <path d="M 360 250 L 420 250" stroke="#38bdf8" stroke-width="3" marker-end="url(#syncArrow)"/>

  <!-- Fan Out Targets -->
  <path d="M 580 250 L 670 120" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 185" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 250" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 315" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>
  <path d="M 580 250 L 670 380" stroke="#38bdf8" stroke-width="2" marker-end="url(#syncArrow)"/>

  <!-- Target 1 -->
  <g transform="translate(680, 95)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#f97316"/>
    <text x="20" y="28" fill="#fdba74" font-weight="bold" font-size="13">CLAUDE.md</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Anthropic Claude Code 专用指令</text>
  </g>

  <!-- Target 2 -->
  <g transform="translate(680, 160)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="20" y="28" fill="#7dd3fc" font-weight="bold" font-size="13">.cursor/rules/vibe-governance.mdc</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Cursor IDE 环境自动上下文规则</text>
  </g>

  <!-- Target 3 -->
  <g transform="translate(680, 225)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#a855f7"/>
    <text x="20" y="28" fill="#d8b4fe" font-weight="bold" font-size="13">.github/copilot-instructions.md</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">GitHub Copilot 仓库级开发指令</text>
  </g>

  <!-- Target 4 -->
  <g transform="translate(680, 290)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#10b981"/>
    <text x="20" y="28" fill="#6ee7b7" font-weight="bold" font-size="13">GEMINI.md</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Google Gemini CLI 与 Agent 执行指令</text>
  </g>

  <!-- Target 5 -->
  <g transform="translate(680, 355)">
    <rect x="0" y="0" width="260" height="48" rx="8" fill="#1e293b" stroke="#06b6d4"/>
    <text x="20" y="28" fill="#67e8f9" font-weight="bold" font-size="13">.windsurfrules</text>
    <text x="20" y="42" fill="#94a3b8" font-size="10">Windsurf IDE 级联上下文规则</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(ZH_DIR, "multi-agent-rule-sync.svg"), svg5, "utf8");

console.log("All Chinese diagrams generated successfully.");
