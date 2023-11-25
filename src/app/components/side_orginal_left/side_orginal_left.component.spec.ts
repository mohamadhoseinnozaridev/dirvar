/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Side_orginal_leftComponent } from './side_orginal_left.component';

describe('Side_orginal_leftComponent', () => {
  let component: Side_orginal_leftComponent;
  let fixture: ComponentFixture<Side_orginal_leftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side_orginal_leftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side_orginal_leftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
