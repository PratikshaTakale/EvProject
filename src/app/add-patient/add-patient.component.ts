import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { MedicinescheckoutService } from '../medicinescheckout.service';
import { Medicine } from '../medicine';
import { Patientinterfacechk } from '../patientinterfacechk';
import { PatientformService } from '../patientform.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent  {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientformService) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const newPatient: Patientinterfacechk = this.patientForm.value;
      this.patientService.addPatient(newPatient);
      this.patientForm.reset();
    }
  }
}
