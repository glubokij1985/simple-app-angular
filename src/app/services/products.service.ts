import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Injectable()
export class ProductsService {
  public productsList: IProduct[] = [
    {
      name: 'Product 1',
      price: 10.3,
      id: 1,
    },
    {
      name: 'Product 2',
      price: 300,
      id: 2,
    },
    {
      name: 'Product 3',
      price: 105.5,
      id: 3,
    },
    {
      name: 'Product 4',
      price: 10,
      id: 4,
    },
    {
      name: 'Product 5',
      price: 1.5,
      id: 5,
    },
  ];
  constructor() { }

}
