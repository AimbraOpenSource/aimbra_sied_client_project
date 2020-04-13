import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {times} from './times.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AulaModel } from 'src/app/core/models/aula.model';
import { AulaService } from '../class-list/aula.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { AulaFormModel } from './aula-form.model';
import {TurmaModel} from "../../../core/models/turma.model";
import {AtividadeModel} from "../../../core/models/atividade.model";
import {AulaConfiguracaoModel} from "../../../core/models/aula-configuracao.model";
import {ReuniaoModel} from "../../../core/models/reuniao.model";
import {AtividadeService} from "../../../core/services/atividade.service";

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {

  aulaId: number;
  turmaId: number;
  times = times;
  srcResult: any;
  atividade: AtividadeModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private atividadeService: AtividadeService,
    private snack: MatSnackBar
  ) {
    this.atividade = new AtividadeModel();
    this.atividade.aula = new AulaModel();
    this.atividade.aula.reuniao = new ReuniaoModel();
    this.atividade.aula.configuracao = new AulaConfiguracaoModel();
    this.atividade.aula.turma = new TurmaModel();
  }

  ngOnInit(): void {
    this.getUrlParams();
    this.getQueryParams();
  }

  publish() {
    if (!this.isEditMode) {
      this.atividadeService.insert(this.atividade).subscribe((atividade: AtividadeModel) => {
        this.atividade = atividade;
      }, (err: HttpErrorResponse) => {
        this.snack.open(err.error.message, null, { duration: 5000 }).afterOpened().subscribe(() => {
          this.location.back();
        });
      });
    }
  }

  getQueryParams() {
    this.route.queryParamMap.subscribe((params) => {
      this.atividade.aula.turma.id = +params.get('turmaId');
    })
  }

  getUrlParams() {
    this.route.paramMap.subscribe(params => {
      this.aulaId = +params.get('aulaId');
      if (this.isEditMode) {
        this.findByAulaId();
      }
    });
  }

  findByAulaId() {
    this.atividadeService.findByAulaId(this.aulaId).subscribe((atividade: AtividadeModel) => {
      this.atividade = atividade;
    }, (err: HttpErrorResponse) => {
      this.snack.open(err.error.message, null, { duration: 5000 }).afterOpened().subscribe(() => {
        this.location.back();
      });
    });
  }

  get isEditMode(): boolean {
    return this.aulaId !== undefined && this.aulaId !== null && this.aulaId !== 0;
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
