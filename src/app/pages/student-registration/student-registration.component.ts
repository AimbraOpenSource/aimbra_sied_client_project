import { DialogBaseComponent } from './../../components/dialog-base/dialog-base.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../my-classes/turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/security/auth/auth.service';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRole } from 'src/app/core/models/user-role.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {


  uuid: string;
  turma: TurmaModel;
  user: UserModel;
  pinForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private turmaService: TurmaService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getParams();
    this.pinForm = this.fb.group({
      dig1: '',
      dig2: '',
      dig3: '',
      dig4: '',
      dig5: '',
      dig6: '',
    });
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.getUser();
      if (this.user.role === UserRole.PROFESSOR) {
        this.snack.open('Professor não pode se matricular. Sinto muito!', null, {
          duration: 6000,
          panelClass: 'primary'
        });
        this.router.navigate(['/']);
      }
      this.uuid = params.get('uuid');
      this.findByUuid();
    });
  }

  findByUuid() {
    this.turmaService.findByUuid(this.uuid).subscribe((turma: TurmaModel) => {
      this.turma = turma;
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  getUser() {
    this.user = this.authService.user;
  }

  getKeys(): string[] {
    return Object.keys(this.pinForm.value);
  }

  confirm() {
    let key = '';
    this.getKeys().forEach((k) => {
      key += this.pinForm.value[k];
    });
    if (this.user.role === UserRole.ALUNO) {
      this.goToRegistration(key);
    } else {
      this.dialog.open(DialogBaseComponent, {
        data: {
          title: 'Atenção',
          message: 'É preciso ser um aluno para se patricular',
          buttonCancel: false
        }
      });
    }
  }

  goToRegistration(key: string) {
    this.turmaService.studentRegistration(key, this.uuid).subscribe((resp: TurmaModel) => {
      this.snack.open('Você foi matriculado', null, {
        duration: 6000
      }).afterOpened().subscribe(() => {
        this.router.navigate(['/disciplinas', this.uuid]);
      });
    }, (err: HttpErrorResponse) => {
        this.snack.open('Erro!!!', null, {
          duration: 6000
        });
    });
  }


}
