import { TestBed } from '@angular/core/testing';

import { AddhouseService } from './addhouse.service';

describe('AddhouseService', () => {
  let service: AddhouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
