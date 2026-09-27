import { RuleSeverity } from "../value-objects/Severity.ts";
import type { RuleViolation } from "./Rule.ts";

export const QualityGateStatus = {
  PASSED: "PASSED",
  REJECTED: "REJECTED",
} as const;

export type QualityGateStatus = (typeof QualityGateStatus)[keyof typeof QualityGateStatus];

export class EvaluationReport {
  public readonly timestamp: Date;
  public readonly status: QualityGateStatus;
  public readonly violations: readonly RuleViolation[];
  public readonly totalRulesEvaluated: number;

  constructor(
    totalRulesEvaluated: number,
    violations: RuleViolation[],
    timestamp: Date = new Date(),
  ) {
    this.totalRulesEvaluated = totalRulesEvaluated;
    this.violations = Object.freeze([...violations]);
    this.timestamp = timestamp;

    const hasBlockingViolations = violations.some((v) => v.severity === RuleSeverity.BLOCKING);
    this.status = hasBlockingViolations ? QualityGateStatus.REJECTED : QualityGateStatus.PASSED;
  }

  public get blockingViolations(): RuleViolation[] {
    return this.violations.filter((v) => v.severity === RuleSeverity.BLOCKING);
  }

  public get warningViolations(): RuleViolation[] {
    return this.violations.filter((v) => v.severity === RuleSeverity.WARNING);
  }

  public isPassed(): boolean {
    return this.status === QualityGateStatus.PASSED;
  }
}
