import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CartService {
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
    });
  }

  public products$(): Observable<[]> {
    return this._products$.asObservable();
  }

  public addToCart(product: object): void {
    this._products$.next([...this.products, product] as []);
  }

  public clear() {
    this._products$.next([]);
  }



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
