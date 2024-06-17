import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = 'http://localhost:3000/medicines';  

  constructor(private http: HttpClient) {}

  getMedicines(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
