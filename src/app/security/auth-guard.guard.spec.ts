import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth-guard.guard';
describe('authGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
    TestBed.inject(AuthGuard).canActivate(...guardParameters);

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});