import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    onlyTeacher: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '', onlyTeacher:false },
    { path: '/user', title: 'User Profile', icon: 'pe-7s-user', class: '', onlyTeacher: false  },
    { path: '/courses', title: 'Course List', icon: 'pe-7s-notebook', class: '', onlyTeacher: false  },
    { path: '/students', title: 'Student List', icon: 'pe-7s-medal', class: '', onlyTeacher: true },
    { path: '/table', title: 'Table List', icon: 'pe-7s-note2', class: '', onlyTeacher: true },
    { path: '/typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '', onlyTeacher: true },
    { path: '/icons', title: 'Icons', icon: 'pe-7s-science', class: '', onlyTeacher: true  },
    { path: '/maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '', onlyTeacher: true  },
    { path: '/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '', onlyTeacher: true  },
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
