import { CanActivate, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRole } from 'src/app/core/models/user-role.model';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthRoleAlunoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private location: Location,
    private snack: MatSnackBar
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user.role !== UserRole.ALUNO) {
      this.snack.open('Acesso permitido somente para Aluno');
      this.location.back();
    }
    return true;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthRoleProfessorGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private location: Location,
    private snack: MatSnackBar
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user.role !== UserRole.PROFESSOR) {
      this.snack.open('Acesso permitido somente para Professor');
      this.location.back();
    }
    return true;
  }
}

