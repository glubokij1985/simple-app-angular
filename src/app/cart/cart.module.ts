import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent, }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
  ],
  declarations: [CartComponent]
})
export class CartModule { }
