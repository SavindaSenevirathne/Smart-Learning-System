import { AuthenticationService } from 'app/authentication.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule], providers: [AuthenticationService]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

    it('#isLoggedIn should return false after creation', inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service.isLoggedIn()).toBeFalsy();
    }));

    it('#isTeacher should return false after creation', inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service.isTeacher()).toBeFalsy();
    }));

});
