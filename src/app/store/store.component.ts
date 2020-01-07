import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [
    ProductsService,
    CartService,
    LocalService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
  public title = 'Store';
  public productsInStore: any[];
  public productsInCart: any[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private localService: LocalService,
  ) {
    this.productsInStore = this.productsService.productsList;
    this.productsInCart = this.cartService.products ? this.cartService.products : [];
  }

  ngOnInit() {
  }

  public addToCart(product: object): object {
    if (this.isInCart(product)) {
      return;
    }
    this.cartService.products.push(product);
    this.localService.setStorage('productsInCart', this.cartService.products);

    return product;
  }

  public isInCart(product: object): boolean {
    return this.productsInCart.includes(product);
  }

}
