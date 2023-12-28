import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-side_orginal_left',
  templateUrl: './side_orginal_left.component.html',
  styleUrls: ['./side_orginal_left.component.css'],
})
export class Side_orginal_leftComponent implements OnInit {
  id: number = 0;
  tittle: string = '';
  discription: string = '';
  price: string = '';
  place: string = '';
  img: string = '';
  Result: listmodel[] = [];
  showText: boolean = false;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService.Name = 'Ali';

    const value = this.route.snapshot.queryParamMap.get('Product');
    if (value) {
      this.productService.getProductCategory(value).subscribe((result) => {
        for (let i = 0; i < result[0].products.length; i++) {
          this.Result.push({
            id: result[0].products[i].id,
            discription: result[0].products[i].description,
            img: result[0].products[i].image,
            place: '',
            price: result[0].products[i].price.toString(),
            tittle: result[0].products[i].name,
            slug: result[0].slug,
          });
        }
      });
    } else {
      this.productService.getAllProducts().subscribe((result) => {
        for (let i = 0; i < result.data.length; i++) {
          this.Result.push({
            id: result.data[i].id,
            discription: result.data[i].description,
            img: result.data[i].image,
            place: '',
            price: result.data[i].price.toString(),
            tittle: result.data[i].name,
            slug: result.data[i].slug,
          });
        }
      });
    }
  }

  shortText(str: string) {
    if (str.length > 20) {
      return str.substring(0, 20) + '...';
    } else {
      return str;
    }
  }
}
class listmodel {
  id: number = 0;
  tittle: string = '';
  discription: string = '';
  price: string = '';
  place: string = '';
  img: string = '';
  slug: string = '';
}
