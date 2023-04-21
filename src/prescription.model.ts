export interface IPrescription {
  readonly patientId: number;
  readonly id: number;
  readonly expirationDate: Date;
  readonly brand: string;
  readonly power: number;
  readonly baseCurve: number;
  readonly doctor: string;
  readonly eye: 'right' | 'left';
}
