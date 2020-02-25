import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartService } from '../services/cart.service';
import { LocalService } from '../../core/storage/local.service';
import { IProduct } from '../../models/product.interface';

describe('CartComponent', () => {
  let service: CartService;
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let spy: any;
  let totalPrice = 0;
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
    service = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call clearCart method', () => {
    spy = spyOn(service, 'clear');
    component.clearCart();
    expect(service.clear).toHaveBeenCalled();
  });

  it('should return prices sum', () => {
    spy = spyOn(component, 'getTotalPrice').and.callFake((mockProducts) => {
      totalPrice = mockProducts.reduce((sum, product) => sum + product.price, 0);
    });
    component.getTotalPrice(products);
    expect(totalPrice).toEqual(20);
  });
});
