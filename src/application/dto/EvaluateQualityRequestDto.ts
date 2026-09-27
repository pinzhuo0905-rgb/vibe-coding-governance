export interface EvaluateQualityRequestDto {
  readonly metrics: Readonly<Record<string, number>>;
}
