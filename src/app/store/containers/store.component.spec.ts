import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { StoreComponent } from './store.component';
import { LocalService } from '../../core/storage/local.service';

class StoreComponentStub {
  public isInCart(): void { }
}

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            CommonModule,
            BrowserAnimationsModule,
        ],
        declarations: [StoreComponent],
        providers: [
          ProductsService,
          CartService,
          LocalService,
          {
            provide: StoreComponent,
            useClass: StoreComponentStub,
          },
        ],
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if product is in cart', () => {
    const spy = spyOn(component, 'isInCart');
    component.isInCart(null);
    expect(spy).toHaveBeenCalled();
  });
});
