import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-select_cit_orgina',
  templateUrl: './select_cit_orgina.component.html',
  styleUrls: ['./select_cit_orgina.component.css'],
})
export class Select_cit_orginaComponent implements OnInit {
  id: number = 4;
  name: string = 'یزد';
  select: boolean = false;

  cities: CityModel[] = [
    {
      Id: 1,
      CityName: 'مشهد',
      Select: true,
    },
    {
      Id: 2,
      CityName: 'تهران',
      Select: false,
    },
    {
      Id: 3,
      CityName: 'شیراز',
      Select: true,
    },
  ];

  tempCitites: CityModel[] = [];

  constructor() {}

  ngOnInit() {
    this.tempCitites = this.cities;

    let list: CityModel[] = [];

    list.push({
      CityName: 'B',
      Id: 2,
      Select: false,
    });

    list.push({
      CityName: 'C',
      Id: 3,
      Select: false,
    });

    list.push({
      CityName: 'A',
      Id: 1,
      Select: false,
    });

    list.push({
      CityName: 'A',
      Id: 4,
      Select: false,
    });

    console.log(list);

    const a = list.find((item) => {
      if (item.CityName == 'A') {
        return true;
      } else {
        return false;
      }
    });

    const b = list.filter((item) => item.CityName != 'A');
  }

  onSearch(e: any) {
    if (e.target.value) {
      const result = this.cities.filter((dr) => dr.CityName == e.target.value);
      if (result.length > 0) {
        this.tempCitites = result;
      }
    } else {
      this.tempCitites = this.cities;
    }
  }
}

export class CityModel {
  Id: number = 0;
  CityName: string = '';
  Select: boolean = false;
}
