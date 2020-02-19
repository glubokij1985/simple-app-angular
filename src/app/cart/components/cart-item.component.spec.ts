import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartItemComponent } from './cart-item.component';
import { CartService } from './../services/cart.service';
import { LocalService } from './../../core/storage/local.service';
import { IProduct } from '../../models/product.interface';

describe('CartItemComponent', () => {
  let service: CartService;
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let spy: any;
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
      declarations: [CartItemComponent],
      providers: [
        CartService,
        LocalService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should remove item from cart', () => {
    let productsAfterRemove: IProduct[];
    spy = spyOn(service, 'removeProductFromCart').and.callFake((id: number) => {
      productsAfterRemove = products.filter(item => {
        return item.id !== id;
      });
    });
    // TODO: should check call the method, other things in service
    component.removeFromCart(1);
    expect(productsAfterRemove.length).toEqual(1);
  });
});
