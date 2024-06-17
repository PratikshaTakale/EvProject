import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  private readonly validUsername = 'Pratiksha';
  private readonly validPassword = 'Pratiksha@1910';

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    if (username === this.validUsername && password === this.validPassword) {
      localStorage.setItem('auth_token', 'fake-jwt-token');
      this.isAuthenticated = true;
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
