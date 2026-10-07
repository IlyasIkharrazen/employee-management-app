import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';
import { Router } from '@angular/router';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login{

  loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  });


  constructor(private authService: AuthService, private router: Router){

  }
  
  

  connexion(){

    const loginRequest: LoginRequest = {
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? ''
    }

    this.authService.login(loginRequest).subscribe({
      next: response => {
        this.router.navigate(['/employees']);
      },
      error: error => {
        console.error(error);
      }
    });
  }


}
