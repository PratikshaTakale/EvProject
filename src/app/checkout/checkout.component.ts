import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { MedicineService } from '../medicine.service';
import { PatientformService } from '../patientform.service';
import { Patientinterfacechk } from '../patientinterfacechk';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {
  /* medicines = [];
  patients: Patientinterfacechk[] = [];
  displayedColumns: string[] = ['name', 'age', 'action'];

  constructor(private medicineService: MedicineService, private patientService: PatientformService) {
    this.patients = this.patientService.getPatients();
  }

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    this.medicineService.searchMedicines(query).subscribe((data: any) => {
      this.medicines = data;
    });
  }

  placeOrder(patient: Patientinterfacechk) {
    // Implement order placement logic here
    alert(`Order placed for ${patient.name}, Age: ${patient.age}`);
  } */

    cartItems: any[] = []; 
    medicines: Medicine[] = [];
    patients: Patientinterfacechk[] = [];
    displayedColumns: string[] = ['name', 'age', 'action'];
  
    constructor(private medicineService: MedicineService, private patientService: PatientformService,private route:ActivatedRoute) {
      this.patients = this.patientService.getPatients();
    }
  
    
  
    onSearch(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      const query = inputElement.value;
      this.medicineService.searchMedicines(query).subscribe((data: Medicine[]) => {
        this.medicines = data;
      });
    }
  
    placeOrder(patient: Patientinterfacechk) {
      // Implement order placement logic here
      alert(`Order placed for ${patient.name}, Age: ${patient.age}`);
    }

    ngOnInit(): void {
      this.route.data.subscribe(data => {
        console.log('Resolved Data:', data); // Check entire resolved data object
        this.cartItems = data['cartItems'];
        console.log('Cart Items:', this.cartItems); // Check if data is correctly received
      });
    }
}
