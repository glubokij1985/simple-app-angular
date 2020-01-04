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

  constructor(private localService: LocalService) {
    this.productsInCart = this.localService.getStorage('productsInCart') ? this.localService.getStorage('productsInCart') : [];
  }

  ngOnInit() {
  }

  public removeFromCart(product: object): object {
    return product;
  }

  public clearCart(): void {
    this.localService.removeStorage('productsInCart');
    this.productsInCart = [];
  }

}
