import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './../services/cart.service';
import { IProduct } from './../../models/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() public product: IProduct;
  public productsInCart: IProduct[];
  public subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.products$
      .subscribe(products => this.productsInCart = products);
  }

  public removeFromCart(id: number): void {
    this.cartService.removeProductFromCart(id);
  }
}
