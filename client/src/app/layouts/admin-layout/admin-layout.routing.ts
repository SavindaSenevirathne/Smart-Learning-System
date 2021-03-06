import { QuizComponent } from './../../quiz/quiz.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RoleGuardService } from 'app/role-guard.service';
import { CourseComponent } from 'app/course/course.component';
import { CourseDetailComponent } from './../../course-detail/course-detail.component';
import { StudentsComponent } from 'app/students/students.component';
import { MyCoursesComponent } from 'app/my-courses/my-courses.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'courses',        component: CourseComponent},
    { path: 'courses/:id',    component: CourseDetailComponent},
    { path: 'table',          component: TablesComponent},
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'quiz/:id',       component:QuizComponent },
    { path: 'students', component: StudentsComponent, canActivate: [RoleGuardService] },
    { path: 'myCourses', component: MyCoursesComponent}
    
];
