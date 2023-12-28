import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-Product_details',
  templateUrl: './Product_details.component.html',
  styleUrls: ['./Product_details.component.css'],
})
export class Product_detailsComponent implements OnInit {
  Result: DetailModel = new DetailModel();
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const value = this.route.snapshot.queryParamMap.get('product');
    this.productService.getproductDietail(value).subscribe((result) => {
      this.Result.name = result.name;
      this.Result.id = 1;
      this.Result.description = result.description;
      this.Result.image = result.image;
    });
  }
}
export class DetailModel {
  id: number = 0;
  name: string = '';
  slug: string = '';
  description: string = '';
  price: number = 0;
  image: string = '';
}
