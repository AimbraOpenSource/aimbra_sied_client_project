import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespostaService } from 'src/app/core/services/resposta.service';
import { RespostaModel } from 'src/app/core/models/resposta.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig, DialogPosition } from '@angular/material/dialog';
import { DialogBaseComponent } from 'src/app/components/dialog-base/dialog-base.component';

@Component({
  selector: 'app-activities-sent',
  templateUrl: './activities-sent.component.html',
  styleUrls: ['./activities-sent.component.scss']
})
export class ActivitiesSentComponent implements OnInit {

  turmaId: number;
  aulaId: number;
  respostas: RespostaModel[] = [];

  dialogConfig: MatDialogConfig;

  seeMore = true;
  displayedColumns: string[] = ['enviadoEm', 'Aluno', 'descricao', 'Download'];

  constructor(
    private route: ActivatedRoute,
    private respostaService: RespostaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findParams();
  }

  findParams() {
    this.route.paramMap.subscribe((params) => {
      this.turmaId = +params.get('turmaId');
      this.aulaId = +params.get('aulaId');
      this.findRespostasByAulaId();
    });
  }

  findRespostasByAulaId() {
    this.respostaService.findByAulaId(this.aulaId).subscribe((resp: RespostaModel[]) => {
      this.respostas = resp;
      console.log(this.respostas);
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  download(caminho) {
    console.log(caminho + ' download');
  }

  seeMoreDetails(description: string) {
    this.dialog.open(DialogBaseComponent, {
      width: '700px',
      hasBackdrop: true,
      backdropClass: 'main-backdrop',
      position: {
        top: '40px'
      },
      data: {
        title: 'Resposta do aluno',
        message: description,
        label: undefined,
        value: undefined,
        buttonCancel: false,
        withoutConfirmationText: true
      }
    });
  }

}
