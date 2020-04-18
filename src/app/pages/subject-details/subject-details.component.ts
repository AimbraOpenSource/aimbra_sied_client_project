import {TurmaModel} from 'src/app/core/models/turma.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TurmaService} from '../my-classes/turma.service';
import {LocalStorageService} from "../../core/services/local-storage.service";
import {UserModel} from "../../core/models/user.model";
import {UserRole} from "../../core/models/user-role.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  uuid: string;
  turma: TurmaModel;
  userLoggedin: UserModel;

  constructor(
    private route: ActivatedRoute,
    private turmaService: TurmaService,
    private localStorageService: LocalStorageService,
    private snack: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.findParam();
  }

  findParam() {
    console.log('findParam');
    this.route.paramMap.subscribe(async (params) => {
      this.uuid = await params.get('uuid');
      await this.findTurmaByUuid();
      this.findUserLoggedin();
      this.isProfessor();
    });
  }

  async findTurmaByUuid() {
    console.log('findTurmaByUuid');
    await this.turmaService.findByUuid(this.uuid).subscribe((turma: TurmaModel) => {
      this.turma = turma;
    });
  }

  findUserLoggedin() {
    console.log('findUserLoggedin');
    this.userLoggedin= this.localStorageService.user;
  }

  isProfessor() {
    console.log('isProfessor');
    if (this.userLoggedin.role === UserRole.PROFESSOR) {
      this.snack.open('Professor só pode gerenciar disciplina', 'Ok!', {
        duration: 6000,
        verticalPosition: 'top'
      }).afterOpened().subscribe(async () => {
        this.location.back();
      })
    }
  }

}
