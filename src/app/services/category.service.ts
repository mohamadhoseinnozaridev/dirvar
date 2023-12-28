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
    return this.http.get<Category>('https://json.xstack.ir/api/v1/categories');
  }
}

export interface Category {
  current_page: number;
  data: CategoryData[];
  total: string;
}

export interface CategoryData {
  id: number;
  name: string;
  slug: string;
}
