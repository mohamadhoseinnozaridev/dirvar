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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    debugger;
    const value = this.route.snapshot.queryParamMap.get('Product');

    this.productService.getProducts(value).subscribe((result) => {
      for (let i = 0; i < result.length; i++) {
        this.Result.push({
          id: result[i].id,
          discription: result[i].description,
          img: result[i].image,
          place: '',
          price: result[i].price.toString(),
          tittle: result[i].title,
        });
      }
    });
  }
}
class listmodel {
  id: number = 0;
  tittle: string = '';
  discription: string = '';
  price: string = '';
  place: string = '';
  img: string = '';
}
