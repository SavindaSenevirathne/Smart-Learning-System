import { QuizComponent } from './../../quiz/quiz.component';
import { CourseDetailComponent } from './../../course-detail/course-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CourseComponent } from 'app/course/course.component';
import { StudentsComponent } from 'app/students/students.component';
import { MyCoursesComponent } from 'app/my-courses/my-courses.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?AIzaSyDOraPLJNgy46vAVAEMY9d7qrbjny9UqHg'})
  ],
  declarations: [
    HomeComponent,
    CourseComponent,
    CourseDetailComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    QuizComponent,
    StudentsComponent,
    MyCoursesComponent
  ]
})

export class AdminLayoutModule {}
