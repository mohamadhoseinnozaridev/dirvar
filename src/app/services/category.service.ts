import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @description
 * @class
 */
@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}
  getcategory() {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
