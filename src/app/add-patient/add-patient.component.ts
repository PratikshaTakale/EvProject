import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patientForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(150)]]
    });
  }

  submitPatient(): void {
    if (this.patientForm.valid) {
      this.patientService.setPatient(this.patientForm.value);
      this.router.navigate(['/checkout']);
    }
  }
}
