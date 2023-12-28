import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormPhonenumberComponent } from "./form-phonenumber.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FormPhonenumberComponent", () => {

  let fixture: ComponentFixture<FormPhonenumberComponent>;
  let component: FormPhonenumberComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FormPhonenumberComponent]
    });

    fixture = TestBed.createComponent(FormPhonenumberComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
