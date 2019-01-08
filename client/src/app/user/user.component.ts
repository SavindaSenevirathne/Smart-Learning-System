import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from 'app/authentication.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: UserDetails = {
    _id: '',
    email: '',
    fname: '',
    lname: '',
    regNo: '',
    address: '',
    password:'',
    profileImg: '',
    exp: 0,
    iat: 0
  };

  constructor(private auth: AuthenticationService) { }


  ngOnInit() {
    this.auth.profile().subscribe(data => {
      this.userData = data
      console.log(data)
    })
  }

  update() {
    this.auth.update(this.userData).subscribe(() => {
      console.log('updated')
      // this.notify.showNotification('success', 'Successfully Registered');
      // this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
    });
  }

  
}
