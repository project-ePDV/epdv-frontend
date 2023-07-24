import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { environment } from 'src/environments/environment'
import { callbackUri } from '../../configs/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated!: boolean;
  apiPath = environment.apiPath

  constructor(private authService: AuthService) { }

  login() {
    this.authService
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }

  logout() {
    this.authService
      .logout({
        logoutParams: {
          returnTo: callbackUri,
        },
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }
}
