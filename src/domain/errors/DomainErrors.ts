export abstract class DomainError extends Error {
  public abstract readonly errorCode: string;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class RuleNotFoundError extends DomainError {
  public readonly errorCode = "RULE_NOT_FOUND";

  constructor(ruleId: string) {
    super(`Quality governance rule with ID '${ruleId}' was not found.`);
  }
}

export class InvalidMetricValueError extends DomainError {
  public readonly errorCode = "INVALID_METRIC_VALUE";

  constructor(reason: string) {
    super(`Invalid metric value: ${reason}`);
  }
}

export class QualityGateBreachError extends DomainError {
  public readonly errorCode = "QUALITY_GATE_BREACH";
  public readonly violationCount: number;

  constructor(violationCount: number, summary: string) {
    super(`Quality Gate breached with ${violationCount} blocking violation(s): ${summary}`);
    this.violationCount = violationCount;
  }
}
