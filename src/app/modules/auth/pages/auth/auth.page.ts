import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage  implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {}

  login(): void {
    this.auth.login();
  }

  logout() {
    this.auth.logout()
  }
}
