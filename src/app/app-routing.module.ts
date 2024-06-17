import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'' , component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-patient',component:AddPatientComponent},
  {path:'checkout' , component:CheckoutComponent},
  { path: '**', redirectTo: '/landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
