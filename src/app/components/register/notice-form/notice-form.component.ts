import { Component, OnInit } from '@angular/core';
import { city } from 'src/app/models/city';

@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.css'],
})
export class NoticeFormComponent implements OnInit {
  listnote: city[] = [
    new city('املاک'),
    new city('وسایل نقلیه'),
    new city('کالای دیجیتال'),
    new city('خانه و آشپزخانه'),
    new city('وسایل شخصی'),
    new city('سرگرمی و فراغت'),
    new city('اجتماعی'),
    new city('تجهیزات و صنعتی'),
  ];
  keyword: string = '';

  constructor() {}

  ngOnInit() {}
}
