import { Component, OnInit, Injector } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/security/auth/auth.service';
import { UserModel } from 'src/app/core/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  user: UserModel;

  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  emailMatcher = new MyErrorStateMatcher();

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16)
  ]);
  passwordMatcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private injector: Injector
    ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({});
  }

  /**
   * TODO: O Reaload esta sendo usado como gambiarra porque a página não quer atualizar as rotas
   */
  login() {
    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value).subscribe((user: UserModel) => {
      this.user = user;
    }, (error: HttpErrorResponse) => {
      this.snackBar.open(error.error.message, undefined, {
        duration: 3000
      });
    }, () => {
        this.router.navigate(['/painel']).then((value: boolean) => {
          if (value === true) {
            const component = this.injector.get(AppComponent);
            component._isLoggedIn = true;
            window.location.reload();
          }
        });
    });
  }
}
