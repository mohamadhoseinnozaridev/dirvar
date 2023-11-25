import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select_cit_orgina',
  templateUrl: './select_cit_orgina.component.html',
  styleUrls: ['./select_cit_orgina.component.css']
})
export class Select_cit_orginaComponent implements OnInit {


  // variables
  search:string ="";
  

  cities:string [] =[
    "مشهد",
    "تهران",
    "یزد",
    "شیراز",
    "مشهد"
   ];
 
   tempCitites:string[]=[];
  // logic
  constructor() {

   }

  ngOnInit() {

   this.tempCitites = this.cities;

  }

  onSearch(e:any) {

         if(e.target.value) {

          const result = this.cities.filter(item=>item==e.target.value);

          if(result.length>0) {
            this.tempCitites = result;
          }

         }else {
          this.tempCitites = this.cities;
         }
   }



}





