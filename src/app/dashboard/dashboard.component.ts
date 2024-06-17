import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  searchControl = new FormControl('');
  medicines: any[] = [];

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.fetchMedicines();
  }

  fetchMedicines(): void {
    this.medicineService.getMedicines()
      .subscribe(
        (data) => {
          this.medicines = data;
        },
        (error) => {
          console.error('Error fetching medicines:', error);
        }
      );
  }

}
