import { TurmaModel } from './../../../core/models/turma.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/pages/my-classes/turma.service';
import { HttpErrorResponse } from '@angular/common/http';
import {LocalStorageService} from "../../../core/services/local-storage.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  turmas: TurmaModel[] = [];

  constructor(
    private router: Router,
    private turmaService: TurmaService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.findAllTurmasByStudentLoggedin();
  }

  findAllTurmasByStudentLoggedin() {
    this.turmaService.findAllByStudentLoggedIn().subscribe((turmas: TurmaModel[]) => {
      this.turmas = turmas;
      this.setTurmasOnLocalStorage();
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  setTurmasOnLocalStorage() {
    if (this.turmas && this.turmas.length > 0) {
      this.localStorageService.turmas = this.turmas;
    }
  }

  async goToUrl(uuid: string) {
    await this.router.navigate(['/disciplinas', uuid]);
  }

}
