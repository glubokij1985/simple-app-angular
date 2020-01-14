import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private auth: AuthService) { }

 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   return this.auth.isLoggedIn;
 }

 canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   return this.canActivate(next, state);
 }
}