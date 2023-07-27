import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private storageService: StorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = this.storageService.get('token');
    if (!this.storageService.has('token')) {
      this.router.navigate(['/auth']);
      return false;
    } else {
      this.auth.isAuthenticated(token)
        .then(() => {
          this.router.navigate(['/app/caixa']);
          return true;
        })
        .catch(() => { return false })
    }
    return true;
  }
}
