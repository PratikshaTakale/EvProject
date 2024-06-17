import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    AddPatientComponent,
    CheckoutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
