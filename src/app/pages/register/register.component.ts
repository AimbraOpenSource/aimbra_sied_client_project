import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SelectUserRoleComponent } from 'src/app/shared/sheets/select-user-role/select-user-role.component';
import { UserRole } from 'src/app/core/models/user-role.model';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { ProfessorModel } from 'src/app/core/models/professor.model';
import { UserModel } from 'src/app/core/models/user.model';
import { error } from '@angular/compiler/src/util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessorService } from 'src/app/domain/professor/professor.service';
import { AlunoService } from 'src/app/domain/aluno/aluno.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/security/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;
  aluno: AlunoModel = null;
  professor: ProfessorModel = null;

  constructor(
    private fb: FormBuilder,
    private btnSheet: MatBottomSheet,
    private snack: MatSnackBar,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl(''),
    });
  }

  openBottomSheet(): void {
    this.btnSheet
      .open(SelectUserRoleComponent)
      .afterDismissed()
      .subscribe((res) => {
        console.log(res);
        if (res === UserRole.ALUNO.toString()) {
          this.aluno = new AlunoModel();
          this.aluno.user = new UserModel();
          this.aluno.user.role = UserRole.ALUNO;
          if (this.professor) {
            this.professor = null;
          }
        } else {
          this.professor = new ProfessorModel();
          this.professor.user = new UserModel();
          this.professor.user.role = UserRole.PROFESSOR;
          if (this.aluno) {
            this.aluno = null;
          }
        }
      }, (error: Error) => {
        console.error(error);
        this.snack.open(error.message);
      }, () => {
      });
  }

  signup() {
    if (this.aluno) {
      this.aluno.nome = this.registerFormGroup.value.name;
      this.aluno.user.username = this.registerFormGroup.value.username;
      this.aluno.user.email = this.registerFormGroup.value.email;
      this.aluno.user.password = this.registerFormGroup.value.password;
      this.aluno.turmas = [];
      this.registerAluno();
    } else {
      this.professor.nome = this.registerFormGroup.value.name;
      this.professor.user.username = this.registerFormGroup.value.username;
      this.professor.user.email = this.registerFormGroup.value.email;
      this.professor.user.password = this.registerFormGroup.value.password;
      this.registerProfessor();
    }
    console.log(this.aluno);
    console.log(this.professor);
  }

  private registerAluno() {
    this.authService.registerAluno(this.aluno).subscribe((aluno: AlunoModel) => {
      this.aluno = aluno;
      this.snack.open('Sucesso ao cadastrar o aluno ' + this.aluno.nome, null, {
        direction: 'ltr',
        duration: 5000
      });
      this.router.navigate(['/login']);
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this.snack.open(err.error.message);
    });
  }

  private registerProfessor() {
    this.authService.registerProfessor(this.professor).subscribe(
      (aluno: AlunoModel) => {
        this.aluno = aluno;
        this.snack.open('Sucesso ao cadastrar o professor ' + this.professor.nome, null, {
        direction: 'ltr',
        duration: 5000
      });
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        this.snack.open(err.error.message);
      }
    );
  }

}
