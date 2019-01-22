import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject } from '@angular/core/testing';

import { RoleGuardService } from './role-guard.service';

describe('RoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule, RouterTestingModule], providers: [RoleGuardService]
  }));

  it('should be created', () => {
    const service: RoleGuardService = TestBed.get(RoleGuardService);
    expect(service).toBeTruthy();
  });


});
