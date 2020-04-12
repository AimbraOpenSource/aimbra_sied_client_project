import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessorService } from 'src/app/domain/professor/professor.service';
import { AlunoService } from 'src/app/domain/aluno/aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/security/auth/auth.service';
import { UserModel } from 'src/app/core/models/user.model';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { ProfessorModel } from 'src/app/core/models/professor.model';
import { UserRole } from 'src/app/core/models/user-role.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  personalFormGroup: FormGroup;
  user: UserModel;
  aluno: AlunoModel;
  professor: ProfessorModel;

  modoEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alunoService: AlunoService,
    private professorService: ProfessorService,
    private snack: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUser();
    this.initForm();
    this.fillForm();
  }

  private isLoggedIn(): boolean {
    return this.authService.isLoggedin();
  }

  private getUser(): void {
    this.user = this.authService.user;
  }

  private getRole(): UserRole {
    return this.authService.role;
  }

  private initForm() {
    this.personalFormGroup = this.fb.group({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl(''),
    });
  }

  private fillForm() {
    if (this.isLoggedIn()) {
      if (this.getRole() === UserRole.ALUNO) {
        console.log('iniciando push de aluno');
        this.findAlunoByUserLoggedIn();
      } else {
        console.log('iniciando push de professor');
        this.professor = new ProfessorModel();
        this.findProfessorByUserLoggedIn();
      }
    }
  }

  private findAlunoByUserLoggedIn() {
    this.alunoService.findByLoggedin().subscribe((aluno: AlunoModel) => {
      this.aluno = aluno;
      console.log(this.aluno);
      this.personalFormGroup.patchValue({
        name: this.aluno.nome,
        username: this.user.username,
        email: this.user.email
      });
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this.snack.open(err.error.message, null, {
        duration: 5000
      });
    });
  }

  private findProfessorByUserLoggedIn() {
    this.professorService.findByLoggedin().subscribe((professor: ProfessorModel) => {
      this.professor = professor;
      console.log(this.professor);
      console.log(this.user);
      this.personalFormGroup.patchValue({
        name: this.professor.nome,
        username: this.user.username,
        email: this.user.email
      });
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this.snack.open(err.error.message, null, {
        duration: 5000
      });
    });
  }

  logout() {
    this.router.navigate(['/logout']);
  }

  initUpdate() {

  }


}
