import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @description
 * @class
 */
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(value: string | null) {
    debugger;
    if (value) {
      return this.http.get<products[]>(
        'https://fakestoreapi.com/products/category/' + value
      );
    } else {
      return this.http.get<products[]>('https://fakestoreapi.com/products');
    }
  }
}

export class products {
  id: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category: string = '';
  image: string = '';
}
