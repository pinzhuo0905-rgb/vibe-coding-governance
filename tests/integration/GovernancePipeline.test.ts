import test from "node:test";
import assert from "node:assert";
import { InMemoryRuleRepository } from "../../src/infrastructure/persistence/InMemoryRuleRepository.ts";
import { InMemoryAuditLogRepository } from "../../src/infrastructure/persistence/InMemoryAuditLogRepository.ts";
import { EvaluateQualityGateUseCase } from "../../src/application/use-cases/EvaluateQualityGateUseCase.ts";
import { RegisterRuleUseCase } from "../../src/application/use-cases/RegisterRuleUseCase.ts";
import { GovernanceCli } from "../../src/presentation/cli/GovernanceCli.ts";
import { TokenMasker } from "../../src/infrastructure/security/TokenMasker.ts";

test("Full End-to-End Governance Pipeline Execution", async () => {
  const ruleRepo = new InMemoryRuleRepository();
  const auditRepo = new InMemoryAuditLogRepository();

  const register = new RegisterRuleUseCase(ruleRepo);
  await register.execute({
    id: "security_vulnerabilities",
    name: "Zero Critical Vulnerabilities",
    description: "Forbid critical security vulnerabilities",
    severity: "BLOCKING",
    maxThreshold: 0,
  });

  await register.execute({
    id: "style_warnings",
    name: "Style Formatting Warnings",
    description: "Advisory format warning",
    severity: "WARNING",
    maxThreshold: 5,
  });

  const evaluate = new EvaluateQualityGateUseCase(ruleRepo, auditRepo);
  const cli = new GovernanceCli(evaluate);

  // Scenario 1: Clean metrics -> Exit code 0
  const cleanExitCode = await cli.runEvaluation({
    security_vulnerabilities: 0,
    style_warnings: 2,
  });
  assert.strictEqual(cleanExitCode, 0);

  // Scenario 2: Security breach -> Exit code 1
  const failedExitCode = await cli.runEvaluation({
    security_vulnerabilities: 1,
    style_warnings: 1,
  });
  assert.strictEqual(failedExitCode, 1);

  // Check audit history count
  assert.strictEqual(auditRepo.getAll().length, 2);
});

test("TokenMasker masks secrets and JWT tokens accurately", () => {
  const rawLog =
    'Connecting with api_key="sk-live-9923847298374928374982374" and token="ey123.ey456.789"';
  const masked = TokenMasker.mask(rawLog);

  assert.ok(!masked.includes("sk-live-9923847298374928374982374"));
  assert.ok(masked.includes("sk-***74"));
});
