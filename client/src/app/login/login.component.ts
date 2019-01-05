import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

import { NotificationService } from "../notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private notify: NotificationService) { }

  login() {
    // console.log(this.credentials);
    this.auth.login(this.credentials).subscribe(() => {
      this.notify.showNotification('success','right');
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
    });
  }
  
  ngOnInit() { 
  }


}
