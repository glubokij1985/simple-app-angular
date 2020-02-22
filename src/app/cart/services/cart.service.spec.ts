import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { LocalService } from '../../core/storage/local.service';
import { IProduct } from '../../models/product.interface';

describe('CartService', () => {
    let service: CartService;
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
            providers: [
                LocalService,
                CartService,
            ]
        });

        service = TestBed.get(CartService);
    });

    it('should create CartService', () => {
        expect(service).toBeTruthy();
    });

    it('should remove item from cart', () => {
        let productsAfterRemove: IProduct[];
        spy = spyOn(service, 'removeProductFromCart').and.callFake((id: number) => {
          productsAfterRemove = products.filter(item => {
            return item.id !== id;
          });
        });
        service.removeProductFromCart(1);
        expect(productsAfterRemove[0].id).toEqual(2);
    });
});
