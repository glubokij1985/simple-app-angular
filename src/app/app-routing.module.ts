import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: AuthComponent, },
    { path: 'reset-password', component: ResetPasswordComponent, },
    { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
