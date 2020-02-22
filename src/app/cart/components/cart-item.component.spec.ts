import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartItemComponent } from './cart-item.component';
import { CartService } from './../services/cart.service';
import { LocalService } from './../../core/storage/local.service';

describe('CartItemComponent', () => {
  let service: CartService;
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let spy: any;

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

  it('should call removing item from cart method', () => {
    spy = spyOn(service, 'removeProductFromCart');
    component.removeFromCart(1);
    expect(service.removeProductFromCart).toHaveBeenCalledWith(1);
  });
});
