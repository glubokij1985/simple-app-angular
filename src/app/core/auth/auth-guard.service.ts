import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        public router: Router,
    ) { }

    public canActivate(): boolean {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
