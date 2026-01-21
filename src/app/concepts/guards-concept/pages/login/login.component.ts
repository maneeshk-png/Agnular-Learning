import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login();
    this.router.navigate(['/guards/dashboard']);
  }
}
