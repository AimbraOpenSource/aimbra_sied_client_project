import { TurmaModel } from './../../../core/models/turma.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/pages/my-classes/turma.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  turmas: TurmaModel[] = [];

  constructor(private router: Router, private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.turmaService.findAllByStudentLoggedIn().subscribe((turmas: TurmaModel[]) => {
      this.turmas = turmas;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  goToUrl(uuid: string) {
    this.router.navigate(['/disciplinas', uuid]);
  }

}
