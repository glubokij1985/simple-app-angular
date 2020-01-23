import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public title = 'Cart';
  public totalPrice: number;
  public productsInCart: IProduct[];
  public destroy$: Subject<void> = new Subject();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe(products => {
        this.productsInCart = products;
        this.getTotalPrice(products);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public clearCart(): void {
    this.cartService.clear();
  }

  public getTotalPrice(products: IProduct[]) {
    this.totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  }
}
