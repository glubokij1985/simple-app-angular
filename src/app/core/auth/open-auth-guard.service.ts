import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class OpenAuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        public router: Router,
    ) { }

    public canActivate(): boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            return this.router.parseUrl('store');
        }
        return true;
    }
}
