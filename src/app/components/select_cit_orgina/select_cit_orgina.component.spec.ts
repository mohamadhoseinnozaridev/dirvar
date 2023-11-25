/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Select_cit_orginaComponent } from './select_cit_orgina.component';

describe('Select_cit_orginaComponent', () => {
  let component: Select_cit_orginaComponent;
  let fixture: ComponentFixture<Select_cit_orginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select_cit_orginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select_cit_orginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
