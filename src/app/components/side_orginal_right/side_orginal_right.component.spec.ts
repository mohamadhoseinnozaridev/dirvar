/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Side_orginal_rightComponent } from './side_orginal_right.component';

describe('Side_orginal_rightComponent', () => {
  let component: Side_orginal_rightComponent;
  let fixture: ComponentFixture<Side_orginal_rightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side_orginal_rightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side_orginal_rightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
