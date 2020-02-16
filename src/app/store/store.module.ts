import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreComponent } from './containers/store.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    StoreComponent,
    ProductItemComponent,
  ],
})
export class StoreModule { }
