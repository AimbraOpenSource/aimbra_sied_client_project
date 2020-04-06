import { Component } from '@angular/core';


import { AuthService } from './security/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  public isLoggedin(): boolean {
    return this.authService.isLoggedin();
  }



}
