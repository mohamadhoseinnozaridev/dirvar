import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PhonenumberFormComponent } from "./phonenumber-form.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PhonenumberFormComponent", () => {

  let fixture: ComponentFixture<PhonenumberFormComponent>;
  let component: PhonenumberFormComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PhonenumberFormComponent]
    });

    fixture = TestBed.createComponent(PhonenumberFormComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
