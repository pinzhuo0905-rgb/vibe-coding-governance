import { EvaluationReport } from "../../domain/entities/EvaluationResult.ts";
import type { RuleViolation } from "../../domain/entities/Rule.ts";
import type { AuditLogRepository } from "../../domain/repositories/AuditLogRepository.ts";
import type { RuleRepository } from "../../domain/repositories/RuleRepository.ts";
import type { EvaluateQualityRequestDto } from "../dto/EvaluateQualityRequestDto.ts";
import type { EvaluationSummaryDto, ViolationDetailDto } from "../dto/EvaluationSummaryDto.ts";

export class EvaluateQualityGateUseCase {
  private readonly ruleRepo: RuleRepository;
  private readonly auditRepo: AuditLogRepository;

  constructor(ruleRepo: RuleRepository, auditRepo: AuditLogRepository) {
    this.ruleRepo = ruleRepo;
    this.auditRepo = auditRepo;
  }

  public async execute(request: EvaluateQualityRequestDto): Promise<EvaluationSummaryDto> {
    const rules = await this.ruleRepo.findAll();
    const violations: RuleViolation[] = [];

    for (const rule of rules) {
      const metricValue = request.metrics[rule.id];
      if (metricValue !== undefined) {
        const violation = rule.evaluate(metricValue);
        if (violation !== null) {
          violations.push(violation);
        }
      }
    }

    const report = new EvaluationReport(rules.length, violations);
    await this.auditRepo.save(report);

    return this.toSummaryDto(report);
  }

  private toSummaryDto(report: EvaluationReport): EvaluationSummaryDto {
    const formattedViolations: ViolationDetailDto[] = report.violations.map((v) => ({
      ruleId: v.ruleId,
      ruleName: v.ruleName,
      severity: v.severity,
      threshold: v.threshold,
      actual: v.actual,
      message: v.message,
    }));

    return {
      status: report.status,
      totalRulesEvaluated: report.totalRulesEvaluated,
      totalViolations: report.violations.length,
      blockingViolationsCount: report.blockingViolations.length,
      warningViolationsCount: report.warningViolations.length,
      timestamp: report.timestamp.toISOString(),
      violations: Object.freeze(formattedViolations),
    };
  }
}
