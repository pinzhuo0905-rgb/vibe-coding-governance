import type { EvaluateQualityGateUseCase } from "../../application/use-cases/EvaluateQualityGateUseCase.ts";
import type { EvaluationSummaryDto } from "../../application/dto/EvaluationSummaryDto.ts";

export class GovernanceCli {
  private readonly evaluateUseCase: EvaluateQualityGateUseCase;

  constructor(evaluateUseCase: EvaluateQualityGateUseCase) {
    this.evaluateUseCase = evaluateUseCase;
  }

  public async runEvaluation(metrics: Record<string, number>): Promise<number> {
    const summary: EvaluationSummaryDto = await this.evaluateUseCase.execute({ metrics });

    console.log("\n=======================================================");
    console.log("       VIBE CODING QUALITY GATE EVALUATION REPORT       ");
    console.log("=======================================================");
    console.log(`Timestamp:               ${summary.timestamp}`);
    console.log(`Rules Evaluated:         ${summary.totalRulesEvaluated}`);
    console.log(`Total Violations:        ${summary.totalViolations}`);
    console.log(`Blocking Violations:     ${summary.blockingViolationsCount}`);
    console.log(`Warning Violations:      ${summary.warningViolationsCount}`);
    console.log(
      `Overall Gate Decision:   ${summary.status === "PASSED" ? "\x1b[32mPASSED\x1b[0m" : "\x1b[31mREJECTED\x1b[0m"}`,
    );
    console.log("-------------------------------------------------------");

    if (summary.violations.length > 0) {
      console.log("VIOLATION DETAILS:");
      for (const v of summary.violations) {
        const color = v.severity === "BLOCKING" ? "\x1b[31m" : "\x1b[33m";
        console.log(` ${color}[${v.severity}]\x1b[0m ${v.ruleName} (${v.ruleId})`);
        console.log(`   Limit: ${v.threshold} | Actual: ${v.actual}`);
        console.log(`   Message: ${v.message}`);
      }
    }

    console.log("=======================================================\n");

    return summary.status === "PASSED" ? 0 : 1;
  }
}
