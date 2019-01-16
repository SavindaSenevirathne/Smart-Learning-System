import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface UserDetails {
  _id: string;
  email: string;
  fname: string;
  lname: string;
  regNo: string;
  role: string;
  address?: string;
  password: string;
  profileImg?: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email?: string;
  password: string;
  regNo: string;
  role: string;
  fname?: string;
  lname?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public isTeacher(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return (user.role === 'teacher') && this.isLoggedIn();
    } else {
      return false;
    }
  }

  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    console.log('Reg user = ', user);
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    console.log('login invoked');
    return this.request('post', 'login', user);
  }

  public update(user: UserDetails): Observable<any>{
    let base;
    // console.log(user)
    base = this.http.post(`/api/update`, user, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request; 

  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  // Courses
  public getAllCourses(): Observable<any> {
    let base;
    // console.log(user)
    base = this.http.get(`/api/subject/all`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;

  }

  public newCourse(course: { code: string, name: string}): Observable<any> {
    let base;
    // console.log(user)
    base = this.http.post(`/api/subject/new`, course, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;

  }

  public getOneCourses(id): Observable<any> {
    
    let base;
    base = this.http.get(`/api/subject/` + id, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;

  }

  public putCourseNotice(id, notice: {content: string}): Observable<any> {

    let base;
    base = this.http.post(`/api/subject/notice/` + id, notice, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;

  }


}
