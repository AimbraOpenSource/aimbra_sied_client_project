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
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Location } from '@angular/common';
import { InscricaoService } from '../../core/services/inscricao.service';

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
    private inscricaoService: InscricaoService,
    private authService: AuthService,
    private snack: MatSnackBar,
    private localStorageService: LocalStorageService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getParams();
    this.initFormPin();
  }

  initFormPin() {
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
    this.route.paramMap.subscribe(async (params) => {
      this.uuid = params.get('uuid');
      this.getUser();
      await this.isAlreadyJoined();
      this.findByUuid();
    });
  }


  async isAlreadyJoined(): Promise<boolean> {
    const turmas = this.localStorageService.turmas.filter(t => t.uuid === this.uuid);
    if (turmas.length > 0) {
      this.snack.open(
        'Você já se matriculou nesta turma', 'OK :)', {
        duration: 6000,
        panelClass: ['bg-danger'],
        verticalPosition: 'top'
      });
      this.location.back();
    }
    return turmas.length > 0;
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
    this.goToRegistration(key);
  }

  goToRegistration(key: string) {
    this.inscricaoService.insertAluno(this.uuid, key).subscribe((resp: TurmaModel) => {
      this.snack.open('Você foi matriculado', null, {
        duration: 6000
      }).afterOpened().subscribe(() => {
        this.router.navigate(['/disciplinas', this.uuid]);
      });
    }, (err: HttpErrorResponse) => {
      this.snack.open('Erro!!!', null, {
        duration: 3000
      });
    });
  }


}
