import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './containers/login/auth.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    AuthComponent,
    ResetPasswordComponent,
  ],
})
export class AuthModule { }
