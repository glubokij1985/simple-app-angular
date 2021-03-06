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
  const products: IProduct[] = [];
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
    spy = spyOn(component, 'addToCart').and.callFake((mockProduct) => {
      products.push(mockProduct);
    });
    component.addToCart(product);
    expect(products[0]).toBeTruthy();
  });

  it('should call isInCart method', () => {
    spy = spyOn(service, 'isInCart');
    component.isInCart(product);
    expect(spy).toHaveBeenCalled();
  });
});
