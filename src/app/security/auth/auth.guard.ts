import { CanActivate, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserModel } from 'src/app/core/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snack: MatSnackBar
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedin() !== true) {
      this.snack.open('Acesso negado!');
      this.router.navigate(['/login']);
    }
    return true;
  }

  canLoad(route: Route): boolean {
    console.log('canLoad');
    return this.checkAuthentication(route.path);
  }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.authService.isLoggedin();
    if (!loggedIn) {
      this.authService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }


}
