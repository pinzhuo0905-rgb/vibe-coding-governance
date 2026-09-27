export const RuleSeverity = {
  BLOCKING: "BLOCKING",
  WARNING: "WARNING",
  ADVISORY: "ADVISORY",
} as const;

export type RuleSeverity = (typeof RuleSeverity)[keyof typeof RuleSeverity];

export function isBlockingSeverity(severity: RuleSeverity): boolean {
  return severity === RuleSeverity.BLOCKING;
}
