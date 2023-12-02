import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-side_orginal_right',
  templateUrl: './side_orginal_right.component.html',
  styleUrls: ['./side_orginal_right.component.css'],
})
export class Side_orginal_rightComponent implements OnInit {
  id: number = 0;
  title: string = '';
  listcategory: categoryModel[] = [];

  constructor(private categoryservice: CategoryService) {}

  ngOnInit() {
    this.categoryservice.getcategory().subscribe((result) => {
      for (let i = 0; i < result.length; i++) {
        this.listcategory.push({
          id: 0,
          title: result[i],
        });
      }
    });
  }
}
export class categoryModel {
  id: number = 0;
  title: string = '';
}
