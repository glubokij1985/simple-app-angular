import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable()
export class CartService {
  public products: any[] = [];

  constructor(private localService: LocalService) { }

  public getProductsInCart() {
    this.products = this.localService.getStorage('productsInCart');
  }

  public addToCart(product: object): object {
    if (this.isInCart(product)) {
      return;
    }
    this.products.push(product);
    this.localService.setStorage('productsInCart', this.products);

    return product;
  }

  public isInCart(product: object): boolean {
    return this.products.includes(product);
  }

}
