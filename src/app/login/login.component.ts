import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginForm: FormGroup | any;
    errorMessage: string | any;
  
    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    login(): void {
      if (this.loginForm.valid) {
        const { username, password } = this.loginForm.value;
        this.authService.login(username, password).subscribe(success => {
          if (success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Invalid login credentials';
          }
        });
      }
    }

}
