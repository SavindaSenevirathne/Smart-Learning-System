import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router, private notify: NotificationService) { }

  canActivate() {
    
    if (this.auth.isTeacher()) {
      console.log('can go ahead as teacher')
      return true;
    } else {
      this.notify.showNotification('danger', 'Unautherized : Login as a teacher to continue')
      // this.router.navigateByUrl('/dashboard');
      return false;
    }
  }

}
