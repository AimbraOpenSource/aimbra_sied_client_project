import { environment } from './../../../environments/environment';
import { Injectable, Type } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Observable, of } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfessorModel } from 'src/app/core/models/professor.model';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { UserRole } from 'src/app/core/models/user-role.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = environment.url + '/security/auth';
  lastUrl: string;

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  public login(email: string, password: string): Observable<UserModel> {
    console.log(this.URL);
    return this.http
      .post<UserModel>(`${this.URL}/login`, { username: email, password })
      .pipe(
        map((payload: any) => {
          let user: UserModel;
          user = payload.user;
          this.localStorageService.user = user;
          this.localStorageService.token = payload.token;
          return user;
        })
      );
  }

  registerProfessor(professor: ProfessorModel): Observable<ProfessorModel> {
    return this.http.post<ProfessorModel>(
      `${this.URL}/register/professores`,
      professor
    );
  }

  registerAluno(aluno: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(
      `${this.URL}/register/alunos`,
      aluno
    );
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  public logout(): void {
    window.localStorage.clear();
  }

  public isLoggedin(): boolean {
    return this.localStorageService.user !== null;
  }

  public get user(): UserModel {
    console.log(this.localStorageService.user);
    return this.localStorageService.user;
  }

  public get role(): UserRole {
    return this.localStorageService.user.role;
  }

  public get token(): string {
    return this.localStorageService.token;
  }
}
