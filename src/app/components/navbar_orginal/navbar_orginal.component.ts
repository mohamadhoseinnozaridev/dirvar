import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar_orginal',
  templateUrl: './navbar_orginal.component.html',
  styleUrls: ['./navbar_orginal.component.css'],
})
export class Navbar_orginalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isCategoryOpen = false;
  onCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }
}
