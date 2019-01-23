import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    Teacher: boolean;
    Student: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '', Teacher: true, Student: true },
    { path: '/user', title: 'User Profile', icon: 'pe-7s-user', class: '', Teacher: true, Student: true  },
    { path: '/myCourses', title: 'My Courses', icon: 'pe-7s-note2', class: '', Teacher: false, Student: true },
    { path: '/courses', title: 'Course List', icon: 'pe-7s-notebook', class: '', Teacher: true, Student: true  },
    { path: '/students', title: 'Student List', icon: 'pe-7s-medal', class: '', Teacher: true, Student: false },
    // { path: '/table', title: 'Table List', icon: 'pe-7s-note2', class: '', Teacher: true, Student: false },
    // { path: '/typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '', Teacher: true, Student: false },
    // { path: '/icons', title: 'Icons', icon: 'pe-7s-science', class: '', Teacher: true, Student: false  },
    // { path: '/maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '', Teacher: true, Student: false  },
    // { path: '/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '', Teacher: true, Student: false  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

    logout() {
        this.auth.logout();
    }
}
