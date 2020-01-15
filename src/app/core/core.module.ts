import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth/auth-guard.service';
import { AuthService } from '../core/auth/auth.service';
import { LocalService } from '../core/storage/local.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [],
  providers: [
    AuthGuardService,
    AuthService,
    LocalService,
  ],
})
export class CoreModule { }
