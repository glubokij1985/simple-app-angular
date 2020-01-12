import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../models/product.interface';

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
  public productsInStore: IProduct[];
  public productsInCart: IProduct[];
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

    this.productsService.productsList.forEach((item) => {
      return this.isInCart(item);
    });
  }

  public addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }

  public isInCart(product: IProduct): boolean {
    return this.cartService.isInCart(product);
  }

}
