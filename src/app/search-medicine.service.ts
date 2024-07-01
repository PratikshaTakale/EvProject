import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMedicineService {

  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  
}


