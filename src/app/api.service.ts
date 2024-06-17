import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment/';
  private apiKey = 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3';

  constructor(private http: HttpClient) { }

  searchMedicines(query: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    const params = new HttpParams().set('query', query);
    return this.http.get(`${this.apiUrl}/medicines`, { headers, params });
  }

  placeOrder(orderDetails: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.post(`${this.apiUrl}/place_order`, orderDetails, { headers });
  }
}
