import { InvalidMetricValueError } from "../errors/DomainErrors.ts";

export class MetricThreshold {
  public readonly maxValue: number;

  constructor(maxValue: number) {
    if (maxValue < 0 || !Number.isFinite(maxValue)) {
      throw new InvalidMetricValueError(
        `Threshold max value must be a non-negative finite number. Received: ${maxValue}`,
      );
    }
    this.maxValue = maxValue;
  }

  public isExceeded(actualValue: number): boolean {
    return actualValue > this.maxValue;
  }

  public equals(other: MetricThreshold): boolean {
    return this.maxValue === other.maxValue;
  }
}
