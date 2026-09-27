import test from "node:test";
import assert from "node:assert";
import { MetricThreshold } from "../../src/domain/value-objects/MetricThreshold.ts";
import { RuleSeverity } from "../../src/domain/value-objects/Severity.ts";
import { QualityRule } from "../../src/domain/entities/Rule.ts";
import { EvaluationReport, QualityGateStatus } from "../../src/domain/entities/EvaluationResult.ts";
import { InvalidMetricValueError } from "../../src/domain/errors/DomainErrors.ts";

test("MetricThreshold rejects negative or infinite values", () => {
  assert.throws(() => new MetricThreshold(-1), InvalidMetricValueError);
  assert.throws(() => new MetricThreshold(Number.POSITIVE_INFINITY), InvalidMetricValueError);
  assert.doesNotThrow(() => new MetricThreshold(50));
});

test("QualityRule correctly identifies violations when metric exceeds threshold", () => {
  const rule = new QualityRule(
    "MAX_LINES",
    "Function Line Limit",
    "Functions must not exceed 50 lines",
    RuleSeverity.BLOCKING,
    new MetricThreshold(50),
  );

  const cleanResult = rule.evaluate(35);
  assert.strictEqual(cleanResult, null);

  const violationResult = rule.evaluate(62);
  assert.notStrictEqual(violationResult, null);
  assert.strictEqual(violationResult?.actual, 62);
  assert.strictEqual(violationResult?.severity, RuleSeverity.BLOCKING);
});

test("EvaluationReport determines REJECTED status if any blocking violation exists", () => {
  const rule = new QualityRule(
    "CYCLO_COMPLEXITY",
    "Cyclomatic Complexity",
    "Complexity must be <= 12",
    RuleSeverity.BLOCKING,
    new MetricThreshold(12),
  );

  const violation = rule.evaluate(18);
  assert.ok(violation !== null, "violation must not be null");

  const report = new EvaluationReport(1, [violation]);
  assert.strictEqual(report.status, QualityGateStatus.REJECTED);
  assert.strictEqual(report.isPassed(), false);
  assert.strictEqual(report.blockingViolations.length, 1);
});

test("EvaluationReport determines PASSED status if only warning violations exist", () => {
  const warningRule = new QualityRule(
    "WARN_TODO",
    "Todo Tag Warning",
    "Warn on todos",
    RuleSeverity.WARNING,
    new MetricThreshold(0),
  );

  const violation = warningRule.evaluate(3);
  assert.ok(violation !== null, "violation must not be null");

  const report = new EvaluationReport(1, [violation]);
  assert.strictEqual(report.status, QualityGateStatus.PASSED);
  assert.strictEqual(report.isPassed(), true);
  assert.strictEqual(report.warningViolations.length, 1);
});
