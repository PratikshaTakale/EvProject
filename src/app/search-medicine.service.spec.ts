import { TestBed } from '@angular/core/testing';

import { SearchMedicineService } from './search-medicine.service';

describe('SearchMedicineService', () => {
  let service: SearchMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
