import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AtividadeService } from 'src/app/core/services/atividade.service';
import { AtividadeModel } from 'src/app/core/models/atividade.model';
import { RespostaModel } from 'src/app/core/models/resposta.model';
import { RespostaService } from 'src/app/core/services/resposta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecursoService } from 'src/app/core/services/recurso.service';
import { RecursoModel } from 'src/app/core/models/recurso.model';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  aulaId: number;
  atividade: AtividadeModel;
  resposta: RespostaModel;
  showComments = false;
  hasRecurso: boolean;
  recursos: RecursoModel[] = [];
  recursosResposta: RecursoModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    private respostaService: RespostaService,
    private recursoService: RecursoService,
    private atividadeService: AtividadeService) {
    }

  ngOnInit(): void {
    this.findAllParams();
  }

  findAllParams() {
    this.route.paramMap.subscribe(async (params) => {
      this.aulaId = await +params.get('aulaId');
      this.findById();
    });
  }

  findById() {
    this.atividadeService.findByAulaId(this.aulaId).subscribe((atividade: AtividadeModel) => {
      this.atividade = atividade;
      this.findRespostaByAtividadeId();
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  findRespostaByAtividadeId() {
    this.respostaService.findByAtividadeAndUserLoggeIn(this.atividade.id).subscribe((resposta: RespostaModel) => {
      this.resposta = resposta;
      if (!this.resposta) {
        this.resposta = new RespostaModel();
      }
      this.findAllRecursosDaResposta();
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  isModoEditaResposta(): boolean {
    return this.resposta.id !== undefined;
  }

  sendText() {
    this.resposta.atividade = this.atividade;
    if (!this.isModoEditaResposta()) {
      this.insertResposta();
    } else {
      this.updateResposta();
    }
  }


  findAllRecursosDaResposta() {
    this.recursoService.findRespostasByUsername(this.aulaId).subscribe((recursos: RecursoModel[]) => {
      this.recursosResposta = recursos;
      console.log('Recursos respostas', this.recursosResposta);
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  deleteFileByIdRecurso() {
    this.respostaService.deleteFileById(this.atividade.id).subscribe(() => {
      this.snack.open('Sucesso ao remover', 'Ok', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 6000
      });
      this.recursosResposta = [];
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  insertResposta() {
    console.log('insert');
    this.respostaService.insert(this.resposta).subscribe((resposta: RespostaModel) => {
      this.resposta = resposta;
      this.snack.open('Resposta enviada com sucesso', 'Ok', {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['bg-success']
      });
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  updateResposta() {
    console.log('update');
    this.respostaService.update(this.resposta).subscribe((resposta: RespostaModel) => {
      this.resposta = resposta;
      this.snack.open('Resposta atualizada com sucesso', 'Ok', {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['bg-success']
      });
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  onFileSelected(event) {
    const file = event.srcElement.files[0] as File;
    if (file.size > 4000000) {
      this.snack.open('Limite do arquivi é de 4MB', 'Ok', {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['bg-danger']
      });
      return;
    }
    this.respostaService.sendFile(file, this.atividade.id).subscribe((resp: RespostaModel) => {
      this.resposta = resp;
      this.findRespostaByAtividadeId();
      this.findAllRecursosDaResposta();
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

}
