import type { QualityRule } from "../entities/Rule.ts";

export interface RuleRepository {
  findById(id: string): Promise<QualityRule | null>;
  findAll(): Promise<QualityRule[]>;
  save(rule: QualityRule): Promise<void>;
  delete(id: string): Promise<boolean>;
}
