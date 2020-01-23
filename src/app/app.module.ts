import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './store/store.module';
import { CartModule } from './cart/cart.module';
import { ProductsService } from './store/services/products.service';
import { CartService } from './cart/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
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
    ProductsService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
