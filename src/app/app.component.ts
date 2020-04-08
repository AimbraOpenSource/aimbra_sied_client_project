import { Component, Type } from '@angular/core';


import { AuthService } from './security/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  public get isLoggedIn(): boolean {
    return  this.authService.isLoggedin();
  }



}
