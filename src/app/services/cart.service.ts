import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable()
export class CartService {
  public products: any[] = [];

  constructor(private localServicve: LocalService) { }

  public getProductsInCart() {
    this.products = this.localServicve.getStorage('productsInCart');
  }

  public setProductsInCart() {
    this.products = this.localServicve.getStorage('productsInCart') ? this.localServicve.getStorage('productsInCart') : [];
  }

}
