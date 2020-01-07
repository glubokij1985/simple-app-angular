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
  ) {
    this.productsInStore = this.productsService.productsList;
    this.productsInCart = this.cartService.products ? this.cartService.products : [];
  }

  ngOnInit() {
    // this.productsService.productsList.forEach((item) => {
    //   return this.isInCart(item);
    // });
  }

  public addToCart(product: object) {
    this.cartService.addToCart(product);
  }

  public isInCart(product: object): boolean {
    return this.cartService.isInCart(product);
  }

}
