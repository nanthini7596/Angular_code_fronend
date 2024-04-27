// signup.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = new FormData();
      formData.append('name', this.signupForm.value.name);
      formData.append('email', this.signupForm.value.email);
      formData.append('mobileNumber', this.signupForm.value.mobileNumber);
      formData.append('password', this.signupForm.value.password);

      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      this.http.post('http://localhost:8000/register', formData)
        .subscribe(
          (response) => {
            console.log('Response from backend:', response);
            this.signupForm.reset();
          },
          (error) => {
            console.error('Error:', error);
          }
        );
    }
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
