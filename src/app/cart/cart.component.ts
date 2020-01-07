import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [LocalService],
})
export class CartComponent implements OnInit {
  public title = 'Cart';
  public productsInCart: any[];
  public totalPrice: any;

  constructor(private localService: LocalService) {
    this.productsInCart = this.localService.getStorage('productsInCart') ? this.localService.getStorage('productsInCart') : [];
    this.getTotalPrice();
  }

  ngOnInit() {
  }

  public removeFromCart(product: object, index: number): object {
    const productsInCart = this.localService.getStorage('productsInCart');

    productsInCart.splice(index, 1);
    this.productsInCart = productsInCart;
    this.localService.setStorage('productsInCart', productsInCart);

    if (productsInCart.length === 0) {
      this.localService.removeStorage('productsInCart');
    }

    this.getTotalPrice();

    return product;
  }

  public clearCart(): void {
    this.localService.removeStorage('productsInCart');
    this.productsInCart = [];
    this.getTotalPrice();
  }

  public getTotalPrice(): number {
    const pricesInCart: number[] = this.productsInCart.map((item) => {
      return item.price;
    });
    return this.totalPrice = pricesInCart.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

}
