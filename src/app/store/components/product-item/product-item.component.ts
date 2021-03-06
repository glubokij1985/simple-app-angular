import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnInit {
  @Input() public product: IProduct;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  public addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }

  public isInCart(product: IProduct): boolean {
    return this.cartService.isInCart(product);
  }
}
