import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [ProductsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
  public title = 'Store';
  public productsInStore: IProduct[];
  public readonly products$ = this.cartService.products$;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) {
    this.productsInStore = this.productsService.productsList;
  }

  ngOnInit() {
    this.productsService.productsList.forEach((item) => {
      return this.isInCart(item);
    });
  }

  public isInCart(product: IProduct): boolean {
    return this.cartService.isInCart(product);
  }
}
