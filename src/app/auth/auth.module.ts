import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login/reset-password', component: ResetPasswordComponent, },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
  ],
  declarations: [
    AuthComponent,
    ResetPasswordComponent,
  ],
  exports: [
    AuthComponent,
    ResetPasswordComponent,
  ],
})
export class AuthModule { }
