/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Navbar_orginalComponent } from './navbar_orginal.component';

describe('Navbar_orginalComponent', () => {
  let component: Navbar_orginalComponent;
  let fixture: ComponentFixture<Navbar_orginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar_orginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar_orginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
