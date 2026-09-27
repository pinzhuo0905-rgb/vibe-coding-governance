import type { MetricThreshold } from "../value-objects/MetricThreshold.ts";
import type { RuleSeverity } from "../value-objects/Severity.ts";

export interface RuleViolation {
  ruleId: string;
  ruleName: string;
  severity: RuleSeverity;
  threshold: number;
  actual: number;
  message: string;
}

export class QualityRule {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly severity: RuleSeverity;
  public readonly threshold: MetricThreshold;

  constructor(
    id: string,
    name: string,
    description: string,
    severity: RuleSeverity,
    threshold: MetricThreshold,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.severity = severity;
    this.threshold = threshold;
  }

  public evaluate(metricValue: number): RuleViolation | null {
    if (this.threshold.isExceeded(metricValue)) {
      return {
        ruleId: this.id,
        ruleName: this.name,
        severity: this.severity,
        threshold: this.threshold.maxValue,
        actual: metricValue,
        message: `Rule '${this.name}' exceeded limit: allowed <=${this.threshold.maxValue}, recorded ${metricValue}.`,
      };
    }
    return null;
  }
}
