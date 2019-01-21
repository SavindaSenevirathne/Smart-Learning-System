import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

import { AuthGuardService } from './auth-guard.service' // middleware for secure routes
import { NotificationService } from './notification.service'
import { RoleGuardService } from './role-guard.service';// middleware for checking role before allowing

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ],

 
  providers: [AuthGuardService, NotificationService, RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
