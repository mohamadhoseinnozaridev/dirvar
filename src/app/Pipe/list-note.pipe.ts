import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listNote',
})
export class ListNotePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    let keyword = args;
    return value.filter((city: any) => city.name.indexOf(keyword) != -1);
  }
}
