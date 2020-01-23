import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../services/cart.service';
import { IProduct } from './../../models/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() public product: IProduct;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  public removeFromCart(id: number): void {
    this.cartService.removeProductFromCart(id);
  }
}
