import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  patients: any[] = [];
  displayedColumns: string[] = ['name', 'age', 'actions'];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.patients = this.patientService.getPatients();
  }

  deletePatient(patient: any): void {
    this.patientService.deletePatient(patient);
    this.patients = this.patientService.getPatients(); // Refresh the list
  }

  checkout(): void {
    this.router.navigate(['/login']);
  }

}
