import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [
    ProductsService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
  public title = 'Store';
  public productsInStore: any[];
  public productsInCart: any;
  public subscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) {
    this.productsInStore = this.productsService.productsList;
  }

  ngOnInit() {
    this.subscription = this.cartService.products$
      .subscribe(products => this.productsInCart = products);
  }

  public addToCart(product: object) {
    this.cartService.addToCart(product);
  }

  public isInCart(product: object): boolean {
    return this.cartService.isInCart(product);
  }

}
