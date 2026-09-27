import type { QualityRule } from "../../domain/entities/Rule.ts";
import type { RuleRepository } from "../../domain/repositories/RuleRepository.ts";

export class InMemoryRuleRepository implements RuleRepository {
  private readonly rules = new Map<string, QualityRule>();

  public async findById(id: string): Promise<QualityRule | null> {
    return this.rules.get(id) ?? null;
  }

  public async findAll(): Promise<QualityRule[]> {
    return Array.from(this.rules.values());
  }

  public async save(rule: QualityRule): Promise<void> {
    this.rules.set(rule.id, rule);
  }

  public async delete(id: string): Promise<boolean> {
    return this.rules.delete(id);
  }

  public clear(): void {
    this.rules.clear();
  }
}
