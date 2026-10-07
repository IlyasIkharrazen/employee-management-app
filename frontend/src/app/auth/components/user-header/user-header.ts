import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-user-header',
  styleUrl: './user-header.scss',
  templateUrl: './user-header.html',
})
export class UserHeader {

  constructor(public authService: AuthService, private router: Router){

  }

  logout(){
    this.authService.logout().subscribe({
      next:() => {
        this.router.navigate(['/login']);
      }
    })
  }
}
