import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
  public title = 'Store';
  public productsInStore: IProduct[];
  public readonly products$ = this.cartService.products$;
  public searchField = 'name';

  public counterValue = 0;
  public currentCount = 0;
  public subscription: Subscription;
  public stream$: Subject<number> = new Subject<number>();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.productsInStore = this.productsService.productsList;

    this.subscription = this.stream$.subscribe((value) => {
      this.currentCount = value;
    });
  }

  public isInCart(product: IProduct): boolean {
    return this.cartService.isInCart(product);
  }

  public addNewProduct() {
    this.productsInStore.unshift({
      name: 'Product 7',
      price: 777,
      id: 7,
    });
  }

  public stop(): void {
    this.subscription.unsubscribe();
  }

  public increaseCounter(): void {
    this.counterValue++;
    this.stream$.next(this.counterValue);
  }
}
