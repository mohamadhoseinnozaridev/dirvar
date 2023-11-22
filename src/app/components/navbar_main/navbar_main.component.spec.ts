/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Navbar_mainComponent } from './navbar_main.component';

describe('Navbar_mainComponent', () => {
  let component: Navbar_mainComponent;
  let fixture: ComponentFixture<Navbar_mainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar_mainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar_mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
