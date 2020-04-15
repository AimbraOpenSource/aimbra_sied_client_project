import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


import { LoginModule } from './pages/login/login.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthService } from './security/auth/auth.service';
import { AuthGuard } from './security/auth/auth.guard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './security/auth/auth-interceptor';
import { RegisterModule } from './pages/register/register.module';
import { MenuSidebarModule } from './shared/menu-sidebar/menu-sidebar.module';
import { MatDividerModule } from '@angular/material/divider';
import {DISQUS_SHORTNAME, DisqusModule} from "ngx-disqus";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    DisqusModule.forRoot('disqus_shortname'),
    LoginModule,
    RegisterModule,
    DashboardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MenuSidebarModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: DISQUS_SHORTNAME,
      useValue: 'sied-1'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
