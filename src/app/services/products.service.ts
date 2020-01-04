import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  public productsList: any = [
    {
      name: 'Product 1',
      price: 10.3,
      inCart: false,
    },
    {
      name: 'Product 2',
      price: 300,
      inCart: false,
    },
    {
      name: 'Product 3',
      price: 105.5,
      inCart: false,
    },
    {
      name: 'Product 4',
      price: 10,
      inCart: false,
    },
    {
      name: 'Product 5',
      price: 1.5,
      inCart: false,
    },
  ];
  constructor() { }

}
