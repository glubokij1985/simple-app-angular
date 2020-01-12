import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CartService {
  public totalPriceValue: number;
  private _products$: BehaviorSubject<[]>;

  private get products(): [] {
    return this._products$.getValue();
  }

  private readonly LOCAL_STORAGE_KEY = 'productsInCart';

  constructor(private localService: LocalService) {
    const productsInCart = this.localService.getStorage(this.LOCAL_STORAGE_KEY) || [];

    this._products$ = new BehaviorSubject(productsInCart);

    this._products$.subscribe(products => {
      this.localService.setStorage(this.LOCAL_STORAGE_KEY, products);
      this.totalPrice = products;
    });
  }

  public get products$(): Observable<[]> {
    return this._products$.asObservable();
  }

  public set totalPrice(products: []) {
    const pricesInCart: number[] = products.map((item) => {
      return item.price;
    });
    this.totalPriceValue = pricesInCart.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

  public productsInCart(): [] {
    return this.products;
  }

  public addToCart(product: object): void {
    if (this.isInCart(product)) {
      return;
    }

    this._products$.next([...this.products, product] as []);
  }

  public removeProductFromCart(product: object, index: number): void {
    const productsInCart = this.productsInCart();

    productsInCart.splice(index, 1);
    this._products$.next(productsInCart);
  }

  public clear() {
    this._products$.next([]);
  }

  public isInCart(product: object): boolean {
    return this.products.includes(product);
  }

}
