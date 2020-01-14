import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { PRODUCTS_IN_CART_KEY } from '../constants/local-storage-keys.const';

@Injectable()
export class CartService {
  private _products$: BehaviorSubject<IProduct[]>;

  private get products(): IProduct[] {
    return this._products$.getValue();
  }

  constructor(private localService: LocalService) {
    const productsInCart = this.localService.getStorage(PRODUCTS_IN_CART_KEY) || [];

    this._products$ = new BehaviorSubject(productsInCart);

    this._products$.subscribe(products => {
      this.localService.setStorage(PRODUCTS_IN_CART_KEY, products);
    });
  }

  public get products$(): Observable<IProduct[]> {
    return this._products$.asObservable();
  }

  public productsInCart(): IProduct[] {
    return this.products;
  }

  public addToCart(product: IProduct): void {
    if (this.isInCart(product)) {
      return;
    }

    this._products$.next([...this.products, product] as []);
  }

  public removeProductFromCart(index: number): void {
    const productsInCart = this.productsInCart();

    productsInCart.splice(index, 1);
    this._products$.next(productsInCart);
  }

  public clear() {
    this._products$.next([]);
  }

  public isInCart(product: IProduct): boolean {
    return this.products.some(item => item.id === product.id);
  }

}
