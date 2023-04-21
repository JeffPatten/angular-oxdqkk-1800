import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPatient } from './patient.model';
import { IPrescription } from './prescription.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public readonly patients$: Observable<IPatient[]> = of(this.getPatients());

  public readonly prescriptions$: Observable<IPrescription[]> = of(
    this.getPrescriptions()
  );

  private getPatients(): IPatient[] {
    return [
      {
        id: 1,
        firstName: 'Sally',
        lastName: 'Doe',
      },
      {
        id: 2,
        firstName: 'Jim',
        lastName: 'Doe',
      },
      {
        id: 3,
        firstName: 'Lacey',
        lastName: 'Doe',
      },
      {
        id: 4,
        firstName: 'Mike',
        lastName: 'Doe',
      },
      {
        id: 5,
        firstName: 'Jessica',
        lastName: 'Doe',
      },
    ];
  }

  private getPrescriptions(): IPrescription[] {
    return [
      {
        id: 0,
        patientId: 5,
        brand: 'MyDay',
        doctor: 'Jones',
        power: 1.5,
        baseCurve: 8.8,
        expirationDate: '2022-08-24',
        eye: 'right',
      },
      {
        id: 1,
        patientId: 5,
        brand: 'MyDay',
        doctor: 'Jones',
        power: 1.5,
        baseCurve: 8.8,
        expirationDate: '2022-08-24',
        eye: 'left',
      },
      {
        id: 2,
        patientId: 1,
        brand: 'AquaSoft',
        doctor: 'Jones',
        power: 1.5,
        baseCurve: 8.8,
        expirationDate: '2022-08-24',
        eye: 'right',
      },
      {
        id: 3,
        patientId: 1,
        brand: 'Acuvue Oasys',
        doctor: 'Jones',
        power: -0.75,
        baseCurve: 8.8,
        expirationDate: '2022-08-24',
        eye: 'left',
      },
      {
        id: 4,
        patientId: 3,
        brand: 'Acuvue Oasys',
        doctor: 'Johnson',
        power: -0.25,
        baseCurve: 8.8,
        expirationDate: '2023-04-01',
        eye: 'left',
      },
      {
        id: 5,
        patientId: 2,
        brand: 'Biofinity',
        doctor: 'Cook',
        power: -3,
        baseCurve: 8.8,
        expirationDate: '2023-04-01',
        eye: 'left',
      },
      {
        id: 6,
        patientId: 2,
        brand: 'Biofinity',
        doctor: 'Cook',
        power: -0.5,
        baseCurve: 8.8,
        expirationDate: '2022-12-31',
        eye: 'right',
      },
      {
        id: 7,
        patientId: 4,
        brand: '1-Day Acuvue Moist',
        doctor: 'Jenkins',
        power: -1.75,
        baseCurve: 8.8,
        expirationDate: '2022-12-31',
        eye: 'right',
      },
      {
        id: 8,
        patientId: 4,
        brand: '1-Day Acuvue Moist',
        doctor: 'Jenkins',
        power: -2,
        baseCurve: 8.8,
        expirationDate: '2023-05-30',
        eye: 'left',
      },
      {
        id: 9,
        patientId: 3,
        brand: 'Air Optix Colors',
        doctor: 'Johnson',
        power: -1.25,
        baseCurve: 8.8,
        expirationDate: '2023-05-30',
        eye: 'right',
      },
      {
        id: 10,
        patientId: 2,
        brand: 'AquaSoft',
        doctor: 'Cook',
        power: -3,
        baseCurve: 8.8,
        expirationDate: '2023-04-01',
        eye: 'left',
      },
      {
        id: 11,
        patientId: 2,
        brand: 'AquaSoft',
        doctor: 'Cook',
        power: -0.5,
        baseCurve: 8.8,
        expirationDate: '2022-12-31',
        eye: 'right',
      },
    ] as any as IPrescription[];
  }
}
