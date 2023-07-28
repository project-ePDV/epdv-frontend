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

  async login(data: { email: string, password: string }) {
    let response = null;

    const requestOptions = {
      url: `${environment.apiPath}/auth/login`,
      headers: { 'Content-Type': 'application/json' },
      webFetchExtra: {
        credentials: "include" as RequestCredentials,
      },
    };

    await CapacitorHttp.post({ ...requestOptions, data })
      .then(async res => {
        response = await res.data;
        this.storageService.set(KEY, response['token']);
        this.router.navigate(['/app/caixa']);
      })
    
    return {response}
  };

  async isAuthenticated(token: string | null): Promise<HttpResponse> {
    const requestOptions = {
      url: `${environment.apiPath}/auth/profile`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      webFetchExtra: {
        credentials: "include" as RequestCredentials,
      },
    };

    return await CapacitorHttp.get(requestOptions);
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigate(['/auth'])
  }
}
