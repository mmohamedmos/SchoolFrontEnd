import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceService } from './auth-guard-service.service';

describe('AuthGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
//Commit
  it('should be created', () => {
    const service: AuthGuardServiceService = TestBed.get(AuthGuardServiceService);
    expect(service).toBeTruthy();
  });
});
