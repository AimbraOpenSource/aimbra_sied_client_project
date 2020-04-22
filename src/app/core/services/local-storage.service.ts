import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable, of } from 'rxjs';
import {TurmaModel} from '../models/turma.model';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set turmas (turmas: TurmaModel[]) {
    window.localStorage.setItem('turmas', JSON.stringify(turmas));
  }

  public get turmas(): TurmaModel[] {
    let turmas: TurmaModel[] = null;
    if (window.localStorage.getItem('turmas')) {
      turmas = JSON.parse(window.localStorage.getItem('turmas'));
    }
    return turmas;
  }

  public set user(user: UserModel) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  public get user(): UserModel {
    const user: UserModel = JSON.parse(window.localStorage.getItem('user'));
    return user;
  }

  public get userAsync(): Observable<UserModel> {
    const user: UserModel = JSON.parse(window.localStorage.getItem('user'));
    return of(user);
  }

  public set token(value: string) {
    window.localStorage.setItem('token', value);
  }

  public get token(): string {
    return window.localStorage.getItem('token');
  }


}
