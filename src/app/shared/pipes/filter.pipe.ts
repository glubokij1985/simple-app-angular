import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../models/product.interface';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(products: IProduct[], search: string = '', field: string = 'name'): IProduct[] {
    if (!search.trim()) {
      return products;
    }

    return products.filter((product) => {
      return product[field].toString().toLowerCase().includes(search.toLowerCase());
    });
  }

}
