import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { CartService } from '../../../cart/services/cart.service';
import { LocalService } from '../../../core/storage/local.service';

class ProductItemComponentStub {
    public addToCart(): void { }
    public isInCart(): void { }
}

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            CommonModule,
            BrowserAnimationsModule,
        ],
        declarations: [ProductItemComponent],
        providers: [
          CartService,
          LocalService,
          {
            provide: ProductItemComponent,
            useClass: ProductItemComponentStub,
          },
        ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add product to cart', () => {
    const spy = spyOn(component, 'addToCart');
    component.addToCart(null);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should call isInCart method', () => {
    const spy = spyOn(component, 'isInCart');
    component.isInCart(null);
    expect(spy).toHaveBeenCalled();
  });
});
