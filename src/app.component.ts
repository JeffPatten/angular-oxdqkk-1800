import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { map, Observable, switchMap } from 'rxjs';
import { IAppViewModel } from './app-view.model';
import { IPrescription } from './prescription.model';
import { DateUtil } from './date-util';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  public readonly vm$: Observable<IAppViewModel> =
    this.dataService.patients$.pipe(
      map((patients) =>
        patients?.map((patient) => ({
          ...patient,
          prescriptions: null,
        }))
      ),
      switchMap((patients) =>
        patients?.length > 0
          ? this.dataService.prescriptions$.pipe(
              map((prescriptions) =>
                patients.map((patient) => ({
                  ...patient,
                  prescriptions: prescriptions
                    ?.filter((prescription) => {
                      if (
                        (prescription.id || prescription.id === 0) &&
                        prescription.patientId === patient.id
                      ) {
                        return prescription;
                      } else {
                        return false;
                      }
                    })
                    .map((prescription) => ({
                      ...prescription,
                      isValid: this.isPrescriptionValid(prescription),
                    })),
                }))
              ),
              map((patients) => ({
                patients,
              }))
            )
          : null
      )
    );

  constructor(private readonly dataService: DataService) {}

  private isPrescriptionValid(prescription: IPrescription): boolean {
    return DateUtil.isDateInTheFuture(prescription.expirationDate);
  }
}
