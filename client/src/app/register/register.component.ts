import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { NotificationService } from 'app/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    fname: '',
    lname: '',
    regNo: '',
    role: 'student',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private notify: NotificationService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.notify.showNotification('success', 'Successfully Registered');
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
      this.notify.showNotification('danger', err.message)
    });
  }

}
