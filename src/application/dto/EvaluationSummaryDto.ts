export interface ViolationDetailDto {
  readonly ruleId: string;
  readonly ruleName: string;
  readonly severity: string;
  readonly threshold: number;
  readonly actual: number;
  readonly message: string;
}

export interface EvaluationSummaryDto {
  readonly status: "PASSED" | "REJECTED";
  readonly totalRulesEvaluated: number;
  readonly totalViolations: number;
  readonly blockingViolationsCount: number;
  readonly warningViolationsCount: number;
  readonly timestamp: string;
  readonly violations: readonly ViolationDetailDto[];
}
