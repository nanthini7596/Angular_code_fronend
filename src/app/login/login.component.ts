import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm?.valid) {
      const userName = this.loginForm.get('userName')?.value;
      const password = this.loginForm.get('password')?.value;
      if (userName && password) {
        const formData = {
          email: userName,
          password: password
        };
        
        this.http.post<any>('http://localhost:8000/login', formData)
        .subscribe(
          (response: any) => {
            console.log('Response from backend:', response);
            if (response && response.message === 'Login successful') {
              // Redirect to dashboard page
              this.router.navigate(['/dashboard']);
            } else {
              // Handle login error
              console.error('Login failed:', response.message || 'Unknown error');
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      
        // You can now handle form submission here, such as sending data to backend
      }
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  resetPassword() {
    // Handle password reset functionality
  }
}
