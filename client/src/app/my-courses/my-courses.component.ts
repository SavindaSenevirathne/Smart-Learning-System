import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/authentication.service';
import { NotificationService } from 'app/notification.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  userData = {
    _id: '',
    email: '',
    fname: '',
    lname: '',
    regNo: '',
    role: '',
    address: '',
    password: '',
    profileImg: '',
    courses: [{}],
    exp: 0,
    iat: 0
  };

  constructor(private auth: AuthenticationService, private notify: NotificationService) { }

  ngOnInit() {
    this.auth.profile().subscribe(data => {
      this.userData = data
      console.log(this.userData)
    })
  }

  update() {
    this.auth.update(this.userData).subscribe(() => {
      console.log('updated')
      this.notify.showNotification('success', 'Successfully Updated');
      // this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
      this.notify.showNotification('danger', err.error.message.errmsg)
    });
  }

}
