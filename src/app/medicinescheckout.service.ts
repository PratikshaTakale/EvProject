import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicinescheckoutService {

  private apiUrl ='http://localhost:3000/data'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Fetch all medicines
  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }

  // Fetch medicines by IDs (example method, adjust as per your API)
  getMedicinesByIds(ids: string[]): Observable<Medicine[]> {
    // Assuming your API supports fetching medicines by IDs
    const params = { ids: ids.join(',') };
    return this.http.get<Medicine[]>(`${this.apiUrl}`, { params });
  }

  // Example method to place an order (adjust as per your API)
  placeOrder(patient: any, medicines: Medicine[]): Observable<any> {
    // Replace with your actual endpoint and logic
    const orderData = {
      patient,
      medicines
      // Add other order-related data as needed
    };
    return this.http.post<any>('http://localhost:3000/data', orderData);
  }
}
