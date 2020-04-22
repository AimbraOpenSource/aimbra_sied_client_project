import { Component, Type, OnChanges, SimpleChanges, Injector, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';


import { AuthService } from './security/auth/auth.service';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './core/services/local-storage.service';
import { UserModel } from './core/models/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public _isLoggedIn: boolean;

  constructor(private authService: AuthService, private localstorageService: LocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.getIsLoggedIn();
  }

  public getIsLoggedIn(): void {
    this.localstorageService.userAsync.subscribe((user: UserModel) => {
      if (user !== undefined && user !== null) {
        this._isLoggedIn = true;
      }
    }, err => console.error(err)
    );
  }

  public get isLoggedin(): boolean {
    return this._isLoggedIn;
  }



}
