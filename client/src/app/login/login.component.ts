import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(event) {
      event.preventDefault
      const eventtarget = event.target
      console.log(eventtarget.email.value)
  }

}
