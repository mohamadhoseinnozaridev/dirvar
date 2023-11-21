import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MainPageComponent", () => {

  let fixture: ComponentFixture<MainPageComponent>;
  let component: MainPageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MainPageComponent]
    });

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
