import { TestBed } from '@angular/core/testing';

import { MedicinescheckoutService } from './medicinescheckout.service';

describe('MedicinescheckoutService', () => {
  let service: MedicinescheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinescheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
