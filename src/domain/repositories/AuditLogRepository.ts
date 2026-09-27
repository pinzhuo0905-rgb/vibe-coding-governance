import type { EvaluationReport } from "../entities/EvaluationResult.ts";

export interface AuditLogRepository {
  save(report: EvaluationReport): Promise<void>;
  getLatest(): Promise<EvaluationReport | null>;
}
