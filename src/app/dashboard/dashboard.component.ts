import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchMedicineService } from '../search-medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /* displayedColumns: string[] = ['medicine_name', 'content', 'mrp', 'price', 'packing_size', 'manufacturer_name', 'medicine_type', 'gst_percentage', 'schedule_type', 'available_for_patient', 'discontinued'];
  medicines: any[] = [];
  filteredMedicines: any[] = [];
  searchControl = new FormControl();

  constructor(private apiService: SearchMedicineService) { }

  ngOnInit(): void {
    this.apiService.getMedicines().subscribe(data => {
      this.medicines = data.result;  // Use data.result to access the medicines array
      this.filteredMedicines = this.medicines;
    });

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.filterMedicines(value);
    });
  }

  filterMedicines(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredMedicines = this.medicines;
    } else {
      this.filteredMedicines = this.medicines.filter(medicine =>
        medicine.medicine_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  isHighlighted(medicineName: string): boolean {
    const searchTerm = this.searchControl.value;
    return searchTerm && medicineName.toLowerCase().includes(searchTerm.toLowerCase());
  }

  addToCart(medicine: any): void {
    // Assuming you have a cart service to manage cart state
    // Example: this.cartService.addToCart(medicine);

    // For demonstration, let's log the selected medicine
    console.log('Added to cart:', medicine);
  } */

/* 
    displayedColumns: string[] = ['medicine_name', 'content', 'mrp', 'price', 'packing_size', 'manufacturer_name', 'medicine_type', 'gst_percentage', 'schedule_type', 'available_for_patient', 'discontinued'];
  medicines: any[] = [];
  filteredMedicines: any[] = [];
  searchControl = new FormControl();

  constructor(private apiService: SearchMedicineService) { }

  ngOnInit(): void {
    this.apiService.getMedicines().subscribe(
      data => {
        if (data && data.result) {
          this.medicines = data.result;
          this.filteredMedicines = this.medicines; // Initially show all medicines
        }
      },
      error => {
        console.error('Error fetching medicines:', error);
        // Handle error scenario
      }
    );

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.filterMedicines(value);
    });
  }

  filterMedicines(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredMedicines = this.medicines;
    } else {
      this.filteredMedicines = this.medicines.filter(medicine =>
        medicine.medicine_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  isHighlighted(medicineName: string): boolean {
    const searchTerm = this.searchControl.value;
    return searchTerm && medicineName.toLowerCase().includes(searchTerm.toLowerCase());
  } */






    displayedColumns: string[] = ['medicine_name', 'content', 'mrp', 'price', 'packing_size', 'manufacturer_name', 'medicine_type', 'gst_percentage', 'schedule_type', 'available_for_patient', 'discontinued', 'actions'];
  medicines: any[] = [];
  filteredMedicines: any[] = [];
  searchControl = new FormControl();

  constructor(private apiService: SearchMedicineService,private router:Router) { }

  ngOnInit(): void {
    this.apiService.getMedicines().subscribe(
      data => {
        if (data && data.result) {
          this.medicines = data.result;
          this.filteredMedicines = this.medicines; // Initially show all medicines
        }
      },
      error => {
        console.error('Error fetching medicines:', error);
        // Handle error scenario, e.g., show an error message to the user
      }
    );

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.filterMedicines(value);
    });
  }

  filterMedicines(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredMedicines = this.medicines;
    } else {
      this.filteredMedicines = this.medicines.filter(medicine =>
        medicine.medicine_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  isHighlighted(medicineName: string): boolean {
    const searchTerm = this.searchControl.value;
    return searchTerm && medicineName.toLowerCase().includes(searchTerm.toLowerCase());
  }

  /* addToCart(medicine: any): void {
    // Navigate to cart component with selected medicine data
    this.router.navigate(['/cart'], { state: { medicine } });
  } */

    addToCart(medicine: any): void {
      this.router.navigate(['/cart'], { state: { medicines: [medicine] } });
    }
        }
      
        

