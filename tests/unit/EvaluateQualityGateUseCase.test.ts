import test from "node:test";
import assert from "node:assert";
import { InMemoryRuleRepository } from "../../src/infrastructure/persistence/InMemoryRuleRepository.ts";
import { InMemoryAuditLogRepository } from "../../src/infrastructure/persistence/InMemoryAuditLogRepository.ts";
import { EvaluateQualityGateUseCase } from "../../src/application/use-cases/EvaluateQualityGateUseCase.ts";
import { RegisterRuleUseCase } from "../../src/application/use-cases/RegisterRuleUseCase.ts";

test("EvaluateQualityGateUseCase passes when all metrics are within thresholds", async () => {
  const ruleRepo = new InMemoryRuleRepository();
  const auditRepo = new InMemoryAuditLogRepository();

  const registerUseCase = new RegisterRuleUseCase(ruleRepo);
  await registerUseCase.execute({
    id: "max_function_lines",
    name: "Max Function Lines",
    description: "Function length threshold",
    severity: "BLOCKING",
    maxThreshold: 50,
  });

  const evaluateUseCase = new EvaluateQualityGateUseCase(ruleRepo, auditRepo);
  const summary = await evaluateUseCase.execute({
    metrics: { max_function_lines: 42 },
  });

  assert.strictEqual(summary.status, "PASSED");
  assert.strictEqual(summary.totalViolations, 0);

  const auditLog = await auditRepo.getLatest();
  assert.ok(auditLog);
  assert.strictEqual(auditLog?.isPassed(), true);
});

test("EvaluateQualityGateUseCase rejects when any blocking metric threshold is breached", async () => {
  const ruleRepo = new InMemoryRuleRepository();
  const auditRepo = new InMemoryAuditLogRepository();

  const registerUseCase = new RegisterRuleUseCase(ruleRepo);
  await registerUseCase.execute({
    id: "cyclomatic_complexity",
    name: "Cyclomatic Complexity Limit",
    description: "Max complexity",
    severity: "BLOCKING",
    maxThreshold: 10,
  });

  const evaluateUseCase = new EvaluateQualityGateUseCase(ruleRepo, auditRepo);
  const summary = await evaluateUseCase.execute({
    metrics: { cyclomatic_complexity: 25 },
  });

  assert.strictEqual(summary.status, "REJECTED");
  assert.strictEqual(summary.blockingViolationsCount, 1);
  assert.strictEqual(summary.violations[0]?.ruleId, "cyclomatic_complexity");
});
