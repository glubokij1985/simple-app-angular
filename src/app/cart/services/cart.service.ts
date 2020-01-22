import { Injectable } from '@angular/core';
import { LocalService } from '../../core/storage/local.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { PRODUCTS_IN_CART_KEY } from '../../core/storage/local-storage-keys.const';

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

  public addToCart(product: IProduct): void {
    if (this.isInCart(product)) {
      return;
    }

    this._products$.next([...this.products, product] as []);
  }

  public removeProductFromCart(id: number): void {
    const productsInCart = this.products;
    const productsAfterRemove = productsInCart.filter(item => {
      return item.id !== id;
    });

    this._products$.next(productsAfterRemove);
  }

  public clear() {
    this._products$.next([]);
  }

  public isInCart(product: IProduct): boolean {
    return this.products.some(item => item.id === product.id);
  }

}
