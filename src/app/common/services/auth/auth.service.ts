import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@capacitor-community/http';
import { CapacitorHttp } from '@capacitor/core';

const KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  login(): void {
    const requestOptions = {
      url: `${environment.apiPath}/auth/login`,
      headers: { 'Content-Type': 'application/json' },
    };

    const data = {
      email: 'kalebe@epdv.com.br',
      password: '$2a$12$HIlwxIpTs3rDg0VnyWF6zOpAnq.p9/89rYrOu9Dp3lAhp/8ES/BSW'
    };

    CapacitorHttp.post({ ...requestOptions, data })
      .then(async response => {
        if (response.status === 200) {
          const data = await response.data;
          this.storageService.set(KEY, data['token']);
          this.router.navigate(['/app/caixa']);
        }
      })
      .catch(err => {
        console.log(err)
      });
  };

  async isAuthenticated(token: string | null): Promise<HttpResponse> {
    const requestOptions = {
      url: `${environment.apiPath}/auth/profile`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };

    return await CapacitorHttp.get(requestOptions);
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigate(['/auth'])
  }
}
