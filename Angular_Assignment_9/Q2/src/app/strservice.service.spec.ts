import { TestBed } from '@angular/core/testing';

import { StrserviceService } from './strservice.service';

describe('StrserviceService', () => {
  let service: StrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
