import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @description
 * @class
 */
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  Name: string = '';

  getProductCategory(value: string) {
    return this.http.get<productCategory[]>(
      'https://json.xstack.ir/api/v1/category/' + value
    );
  }

  getAllProducts() {
    return this.http.get<products>('https://json.xstack.ir/api/v1/products');
  }

  getProductId(id: number) {
    return this.http.get<products[]>('https://fakestoreapi.com/products/' + id);
  }
  getproductDietail(slug: string | null) {
    return this.http.get<productDetail>(
      'https://json.xstack.ir/api/v1/product/' + slug
    );
  }
}

export interface productCategory {
  slug: string;
  products: Daum[];
}

export interface product {
  name: string;
  slug: string;
  products: product[];
}

export interface products {
  current_page: number;
  data: Daum[];
  from: number;
  per_page: number;
  total_pages: number;
  count: number;
  next_page_url: string;
  prev_page_url: any;
}

export interface Daum {
  id: number;
  name: string;
  slug: string;
  description: string;
  category_id: number;
  user_id: number;
  view: number;
  price: number;
  sell_count: number;
  created_at: string;
  updated_at: string;
  image: string;
  thumb: string;
  url: string;
}
export interface productDetail {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
}
