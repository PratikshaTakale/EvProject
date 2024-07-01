import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

 /*  private patients: any[] = [];

  constructor() {}

  setPatient(patient: any): void {
    this.patients.push(patient);
  }

  getPatients(): any[] {
    return this.patients;
  }

  deletePatient(patient: any): void {
    this.patients = this.patients.filter(p => p !== patient);
  } */
    private apiUrl = 'http://localhost:3000/data/patients'; // Adjust URL as per your API

    constructor(private http: HttpClient) { }
  
    addPatient(patientData: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, patientData);
    }

    
}
