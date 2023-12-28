import { Pipe, PipeTransform } from '@angular/core';
import { city } from '../models/city';

@Pipe({
  name: 'search_main_page',
})
export class Search_main_pagePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    let keyword = args;
    return value.filter((city: any) => city.name.indexOf(keyword) != -1);
  }
}
