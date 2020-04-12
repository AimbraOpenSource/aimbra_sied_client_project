import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { AulaService } from './aula.service';
import { AulaModel } from 'src/app/core/models/aula.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  turmaId: number;
  aulas: AulaModel[];
  turma: TurmaModel;

  constructor(
    private route: ActivatedRoute,
    private turmaService: TurmaService,
    private aulaService: AulaService,
    private location: Location,
    private snack: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.setUrlParam();
  }

  setUrlParam() {
    this.route.paramMap.subscribe(params => {
      this.turmaId = +params.get('idTurma');
      this.findTurmaById();
    });
  }

  findAllByTurmaId() {
    this.aulaService.findAllByTurmaId(this.turmaId).subscribe((aulas: AulaModel[]) => {
      this.aulas = aulas;
      console.log(this.aulas);
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this.snack.open(err.error.message, 'Ok!', {
        duration: 6000,
        panelClass: ['bg-warn', 'text-light'],
      }).afterOpened().subscribe(() => {
        this.location.back();
      });
    });
  }

  findTurmaById() {
    this.turmaService.findById(this.turmaId).subscribe((turma: TurmaModel) => {
      this.turma = turma;
      this.findAllByTurmaId();
      console.log(this.turma);
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this.snack.open(err.error.message, 'Ok!', {
        duration: 6000,
        panelClass: ['bg-warn', 'text-light'],
      }).afterOpened().subscribe(() => {
        this.location.back();
      });
    });
  }

  goToUrl(path?: string, param?: string) {
    if (path) {
      if (param) {
        this.router.navigate([path, param]);
      }
      this.router.navigate([path]);
      return;
    }
    this.router.navigate(['/entregas-da-aula', param]);
  }

  removeById(aulaId: number) {
    console.log('remove aula ' + aulaId);
  }

}
