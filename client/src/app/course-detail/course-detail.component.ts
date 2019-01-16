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
    name: ''
  }

  constructor(private route: ActivatedRoute, private location: Location, private auth: AuthenticationService) { }


  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id')
    this.auth.getOneCourses(this.courseId).subscribe(data =>
      this.course = data)
  }

}
