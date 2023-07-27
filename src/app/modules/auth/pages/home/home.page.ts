import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  login(): void {
    this.auth.login()
  }

  logout() {
    this.auth.logout()
  }
}
