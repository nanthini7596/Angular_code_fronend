import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    RouterModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { }
