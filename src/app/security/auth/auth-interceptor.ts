import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('interceptor');
    const loginService = this.injector.get(AuthService);
    if (loginService.isLoggedin()) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginService.token}`,
        },
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
