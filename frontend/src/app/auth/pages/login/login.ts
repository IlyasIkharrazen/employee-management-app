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
export class Login implements OnInit{

  loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  });

  loginRequest!: LoginRequest;

  constructor(private authService: AuthService, private router: Router){

  }
  ngOnInit(): void {
      
  }

  connexion(){
    this.loginRequest.email = this.loginForm.value.email ? this.loginForm.value.email : 'null';
    this.loginRequest.password = this.loginForm.value.password ? this.loginForm.value.password : 'null';

    this.authService.login(this.loginRequest);
    this.router.navigate(['/employees']);
    console.log(this.loginForm.value.email);
  }


}
