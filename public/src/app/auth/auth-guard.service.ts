import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean>
    | Promise<boolean>
    | boolean {
      const isAuthenticated = this.authService.isAuthenticated();
      if(isAuthenticated) return true;
      const url = state.url;
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
  }

}
