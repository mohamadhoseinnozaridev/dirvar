/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { New_cityComponent } from './new_city.component';

describe('New_cityComponent', () => {
  let component: New_cityComponent;
  let fixture: ComponentFixture<New_cityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New_cityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New_cityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
