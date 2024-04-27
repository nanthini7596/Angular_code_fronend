// app.routes.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  //{ path:'**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'signup', component: SignupComponent },
  { path:'login', component: LoginComponent },
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
