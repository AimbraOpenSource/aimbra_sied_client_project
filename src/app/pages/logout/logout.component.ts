import { Component, OnInit, Injector } from '@angular/core';
import { AuthService } from 'src/app/security/auth/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private injector: Injector) { }

  ngOnInit(): void {
    this.authService.logout().subscribe((resp: string) => {
      this.router.navigate(['/login']).then((value: boolean) => {
        if (value === true) {
          window.localStorage.clear();
          const component = this.injector.get(AppComponent);
          component._isLoggedIn = false;
        }
      });
    });
  }

}
