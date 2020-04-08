import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set user(user: UserModel) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  public get user(): UserModel {
    const user: UserModel = JSON.parse(window.localStorage.getItem('user'));
    return user;
  }

  public set token(value: string) {
    window.localStorage.setItem('token', value);
  }

  public get token(): string {
    return window.localStorage.getItem('token');
  }


}
