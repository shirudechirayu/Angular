import { TestBed } from '@angular/core/testing';

import { NumserviceService } from './numservice.service';

describe('NumserviceService', () => {
  let service: NumserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
