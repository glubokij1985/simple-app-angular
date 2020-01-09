import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
  public products: [];
  public dataChange: BehaviorSubject<[]>;

  constructor(private localService: LocalService) {
    this.dataChange = new BehaviorSubject([]);
  }

  // public watchLocalStorage(): BehaviorSubject<[]> {
  //   return this.products.asObservable();
  // }

  public getProductsInCart(): void {
    this.localService.getStorage('productsInCart').subscribe((items) => {
      this.products = items;
      this.dataChange.next(items);
    });
  }

  public addToCart(product: object): void {
    const productsInCart = this.localService.getStorage('productsInCart') ? this.localService.getStorage('productsInCart') : [];
    productsInCart.push(product);
    this.localService.setStorage('productsInCart', productsInCart);
    this.dataChange.next(productsInCart);
  }

  // public removeItem(key: string) {
  //   this.localService.removeStorage(key);
  //   this.products.next(this.localService.getStorage(key));
  // }



  // public getProductsInCart() {
  //   this.products = this.localService.getStorage('productsInCart');
  // }

  // public addToCart(product: object): object {
    // this.products.next(this.localService.getStorage('productsInCart'));


    // if (this.isInCart(product)) {
    //   return;
    // }
    // this.products.push(product);
    // this.localService.setStorage('productsInCart', this.products);

    // return product;
  // }

  // public isInCart(product: object): boolean {
  //   return this.products.includes(product);
  // }

}
