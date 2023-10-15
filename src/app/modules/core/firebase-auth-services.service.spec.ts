import { TestBed } from '@angular/core/testing';

import { FirebaseAuthServicesService } from './firebase-auth-services.service';

describe('FirebaseAuthServicesService', () => {
  let service: FirebaseAuthServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAuthServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
