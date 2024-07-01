// patient.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: any[] = [];

  constructor() { }

  addPatient(patient: any) {
    this.patients.push(patient);
  }

  getPatients() {
    return this.patients;
  }
}

