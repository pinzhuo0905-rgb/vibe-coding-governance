import type { EvaluationReport } from "../../domain/entities/EvaluationResult.ts";
import type { AuditLogRepository } from "../../domain/repositories/AuditLogRepository.ts";

export class InMemoryAuditLogRepository implements AuditLogRepository {
  private readonly logs: EvaluationReport[] = [];

  public async save(report: EvaluationReport): Promise<void> {
    this.logs.push(report);
  }

  public async getLatest(): Promise<EvaluationReport | null> {
    if (this.logs.length === 0) {
      return null;
    }
    const lastItem = this.logs[this.logs.length - 1];
    return lastItem ?? null;
  }

  public getAll(): readonly EvaluationReport[] {
    return Object.freeze([...this.logs]);
  }
}
