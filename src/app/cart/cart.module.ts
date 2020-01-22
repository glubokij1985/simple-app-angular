import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './containers/cart.component';
import { CartItemComponent } from './components/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
  ],
})
export class CartModule { }
