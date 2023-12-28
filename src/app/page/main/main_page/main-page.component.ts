import { Component, OnInit } from '@angular/core';
import { city } from 'src/app/models/city';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  cityall: city[] = [
    new city('مشهد'),
    new city('تهران'),
    new city('اصفهان'),
    new city('شیراز'),
    new city('رشت'),
    new city('سیستان بلوچستان'),
    new city('کردستان '),
    new city('همدان'),
  ];
  keyword: string = '';

  constructor() {}

  ngOnInit() {}
}
