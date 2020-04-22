import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AtividadeService } from 'src/app/core/services/atividade.service';
import { AtividadeModel } from 'src/app/core/models/atividade.model';
import { RespostaModel } from 'src/app/core/models/resposta.model';
import { RespostaService } from 'src/app/core/services/resposta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {

  aulaId: number;
  atividade: AtividadeModel;
  resposta: RespostaModel;
  showComments = false;
  hasRecurso: boolean;

  constructor(
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    private respostaService: RespostaService,
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

  onFileSelected($event) {

  }

}
