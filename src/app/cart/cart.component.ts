import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public title = 'Cart';
  public totalPrice: number;
  public productsInCart: [];
  public subscription: Subscription;

  constructor(
    private localService: LocalService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.subscription = this.cartService.products$
      .subscribe(products => this.productsInCart = products);

    this.cartService.products$
      .subscribe(products => {
        this.getTotalPrice(products);
      });
  }

  public removeFromCart(product: object, index: number): void {
    this.cartService.removeProductFromCart(product, index);
  }

  public clearCart(): void {
    this.cartService.clear();
  }

  public getTotalPrice(products: []) {
    const pricesInCart: number[] = products.map((item) => {
      return item.price;
    });
    this.totalPrice = pricesInCart.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

}
