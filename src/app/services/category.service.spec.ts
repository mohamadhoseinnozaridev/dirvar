import { CategoryService } from './category.service';
import { TestBed } from '@angular/core/testing';

describe('CategoryService', () => {
  let service: CategoryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService],
    });
    service = TestBed.get(CategoryService);
  });

  it('should be able to create service instance', () => {
    expect(service).toBeDefined();
  });
});
