import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private auth: AuthenticationService) {}

  toggleTheme(event: Event) {
    let toggleEvent = event as CustomEvent;
    let body = document.body;

    if (toggleEvent.detail.checked) {
      return body.setAttribute('color-theme', 'dark')
    }
    return body.setAttribute('color-theme', 'light')
  }

  toggleTheme2(event: Event) {
    const { detail: { checked } } = event as CustomEvent;
    return document.body.setAttribute(
      'color-theme',
      checked ? 'dark' : 'light'
    );
  }

  navigate() {
    
  }

  logout() {
    this.auth.logout();
  }
}
