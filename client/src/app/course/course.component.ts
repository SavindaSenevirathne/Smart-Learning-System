import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/notification.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = [{}]
  newCourse = {
    code: '',
    name: ''
  }
  constructor(private auth: AuthenticationService, private notify: NotificationService) { }

  ngOnInit() {
   this.allCourses()
  }

  allCourses(){
    this.auth.getAllCourses().subscribe(data => {
      this.courses = data
    })
  }

  update() {
    this.auth.newCourse(this.newCourse).subscribe(() => {
      this.notify.showNotification('success', 'Successfully Updated');
      this.allCourses()
      this.newCourse.name = ''
      this.newCourse.code = ''
    }, (err) => {
      console.error(err);
      this.notify.showNotification('danger', err.message)
    });
  }

}
