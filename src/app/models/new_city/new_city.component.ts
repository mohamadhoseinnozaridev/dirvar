import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new_city',
  templateUrl: './new_city.component.html',
  styleUrls: ['./new_city.component.css'],
})
export class New_cityComponent implements OnInit {
  id: number = 0;
  city: string = '';
  select: boolean = false;
  tempcities: citymodel[] = [];
  cityshow: Modelshow[] = [];
  cities: citymodel[] = [
    {
      id: 1,
      city: 'مشهد',
      select: false,
    },
    {
      id: 2,
      city: 'تهران',
      select: false,
    },
    {
      id: 3,
      city: 'شیراز',
      select: false,
    },
    {
      id: 4,
      city: 'اردبیل',
      select: false,
    },
  ];
  constructor() {}
  ngOnInit() {
    this.tempcities = this.cities;
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  Onserch(e: any) {
    if (e.target.value) {
      const result = this.cities.filter((item) => item.city == e.target.value);
      if (result.length > 0) {
        this.tempcities = result;
      } else {
        this.tempcities = this.cities;
      }
    }
  }
  Onshow(city: string) {
    if (!this.cityshow.some((dr) => dr.city == city)) {
      this.cityshow.push({
        id: this.id,
        city: city,
        select: this.select,
      });
    } else {
      this.cityshow = this.cityshow.filter((dr) => dr.city != city);
    }
  }
  OnTaeid() {
    let fullText: string = '';
    for (let i = 0; i < this.cityshow.length; i++) {
      fullText = fullText + this.cityshow[i].city + ' ,';
    }
    alert(fullText);
  }

  OnClear() {
    this.cityshow = [];
    this.tempcities = JSON.parse(JSON.stringify(this.cities));
  }
}

class citymodel {
  id: number = 0;
  city: string = '';
  select: boolean = false;
}

export class Modelshow {
  id: number = 0;
  city: string = '';
  select: boolean = false;
}
