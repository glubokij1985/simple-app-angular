import { OpenAuthGuardService } from './core/auth/open-auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { AuthComponent } from './auth/containers/login/auth.component';
import { ResetPasswordComponent } from './auth/containers/reset-password/reset-password.component';
import { StoreComponent } from './store/containers/store.component';
import { CartComponent } from './cart/containers/cart.component';

const routes: Routes = [
    { path: 'login', component: AuthComponent, canActivate: [OpenAuthGuardService] },
    { path: 'reset-password', component: ResetPasswordComponent, canActivate: [OpenAuthGuardService] },
    { path: 'store', component: StoreComponent, canActivate: [AuthGuardService] },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'login', pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OpenAuthGuardService],
})
export class AppRoutingModule { }
