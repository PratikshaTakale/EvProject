import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patients: any[] = [];

  constructor() {}

  setPatient(patient: any): void {
    this.patients.push(patient);
  }

  getPatients(): any[] {
    return this.patients;
  }

  deletePatient(patient: any): void {
    this.patients = this.patients.filter(p => p !== patient);
  }
}
