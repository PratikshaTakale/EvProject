import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patientinterfacechk } from './patientinterfacechk';

@Injectable({
  providedIn: 'root'
})
export class PatientformService {
  private patients: Patientinterfacechk[] = []

  addPatient(patient: Patientinterfacechk) {
    this.patients.push(patient);
  }

  getPatients() {
    return this.patients;
  }
}
