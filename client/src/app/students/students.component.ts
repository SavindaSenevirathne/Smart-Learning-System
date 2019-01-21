import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/authentication.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = []

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.auth.getUsers('student').subscribe((data) => {
      this.students = data
    })
  }

}
