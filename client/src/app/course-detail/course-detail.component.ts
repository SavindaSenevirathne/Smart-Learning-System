import { NotificationService } from 'app/notification.service';
import { AuthenticationService } from 'app/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseId = ''
  course = {
    code: '',
    name: '',
    notice: [{}]
  }
  newNotice = {
    content: '',
    author: this.auth.getUserDetails().fname,
  }

  enrollUsers = []

  test = new Date().toISOString()


  constructor(private route: ActivatedRoute, private location: Location,
    private auth: AuthenticationService, private notify: NotificationService) { }


  ngOnInit() {
    this.getData()
    this.getEnrollData()
  }

  getData() {
    this.courseId = this.route.snapshot.paramMap.get('id')
    this.auth.getOneCourses(this.courseId).subscribe(data =>
      this.course = data)
  }

  update() {
    if(this.newNotice.content !== ''){
      this.auth.putCourseNotice(this.courseId, this.newNotice).subscribe(() =>{
        this.newNotice.content = ''
        this.notify.showNotification('success', 'successfully added')
        this.getData()
      }

      )
    } else {
      this.notify.showNotification('warning', 'Enter a notice first')
    }
  }

  getEnrollData() {
      this.auth.getEnrollData(this.courseId).subscribe((data) =>{
        this.enrollUsers = data
      })
  }

  accept(regNo){
    console.log(this.course.code + ' ' + regNo);
    this.auth.enrollementAccept({ regNo: regNo, code: this.course.code}).subscribe(() => {
      this.notify.showNotification('info', 'Accepted')
      this.getEnrollData()
    })
  }



}
