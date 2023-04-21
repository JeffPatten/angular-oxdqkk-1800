import { IPatient } from './patient.model';
import { IPrescription } from './prescription.model';

export interface IAppViewModel {
  readonly patients: IAppViewPatient[];
}

export interface IAppViewPatient extends IPatient {
  readonly prescriptions: IAppViewPrescription[];
}

export interface IAppViewPrescription extends IPrescription {
  readonly isValid: boolean;
}
