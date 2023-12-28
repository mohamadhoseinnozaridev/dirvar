/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Verification_codeComponent } from './Verification_code.component';

describe('Verification_codeComponent', () => {
  let component: Verification_codeComponent;
  let fixture: ComponentFixture<Verification_codeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verification_codeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Verification_codeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
