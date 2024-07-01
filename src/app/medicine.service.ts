import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  searchMedicines(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?search=${query}`);
  }
}
