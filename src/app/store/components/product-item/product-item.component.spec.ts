import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { CartService } from '../../../cart/services/cart.service';
import { LocalService } from '../../../core/storage/local.service';
import { IProduct } from 'src/app/models/product.interface';

class ProductItemComponentStub {
  public addToCart(): void { }
  public isInCart(): void { }
}

describe('ProductItemComponent', () => {
  let service: CartService;
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let spy: any;
  let products: IProduct[] = [];
  const product: IProduct = {
    name: 'Product 1',
    price: 15,
    id: 1,
  };

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
    service = TestBed.get(CartService);
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
