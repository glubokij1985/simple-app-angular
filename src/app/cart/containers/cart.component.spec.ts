import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartService } from '../services/cart.service';
import { LocalService } from '../../core/storage/local.service';
import { IProduct } from '../../models/product.interface';

class CartComponentStub {
    public getTotalPrice(a: number, b: number) {
        return a + b;
    }
}

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartComponent: CartComponentStub = new CartComponentStub();
  const products: IProduct[] = [
      {
          name: 'Product 1',
          price: 15,
          id: 1,
      },
      {
          name: 'Product 2',
          price: 5,
          id: 2,
      }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            CommonModule,
            BrowserAnimationsModule,
        ],
        declarations: [CartComponent],
        providers: [
          CartService,
          LocalService,
        ],
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call clearCart method', () => {
    const spy = spyOn(component, 'clearCart');
    component.clearCart();
    expect(spy).toHaveBeenCalled();
  });

  it('should return prices sum', () => {
    // const spy = spyOn(component, 'getTotalPrice');
    // component.getTotalPrice(products);
    expect(mockCartComponent.getTotalPrice(15, 5)).toEqual(21);
  });
});
