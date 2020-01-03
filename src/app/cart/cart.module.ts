import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [CartComponent],
})
export class CartModule { }
