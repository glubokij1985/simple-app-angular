import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './store/store.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './services/cart.service';
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    StoreModule,
    CartModule,
  ],
  providers: [
    CartService,
    LocalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
