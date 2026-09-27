import { QualityRule } from "../../domain/entities/Rule.ts";
import { MetricThreshold } from "../../domain/value-objects/MetricThreshold.ts";
import { RuleSeverity } from "../../domain/value-objects/Severity.ts";
import type { RuleRepository } from "../../domain/repositories/RuleRepository.ts";

export interface RegisterRuleCommand {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly severity: keyof typeof RuleSeverity;
  readonly maxThreshold: number;
}

export class RegisterRuleUseCase {
  private readonly ruleRepo: RuleRepository;

  constructor(ruleRepo: RuleRepository) {
    this.ruleRepo = ruleRepo;
  }

  public async execute(command: RegisterRuleCommand): Promise<QualityRule> {
    const severity: RuleSeverity = RuleSeverity[command.severity];
    const threshold = new MetricThreshold(command.maxThreshold);

    const rule = new QualityRule(
      command.id,
      command.name,
      command.description,
      severity,
      threshold,
    );

    await this.ruleRepo.save(rule);
    return rule;
  }
}
