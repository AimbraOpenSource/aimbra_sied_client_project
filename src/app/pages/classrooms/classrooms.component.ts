import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AtividadeService } from 'src/app/core/services/atividade.service';
import { AtividadeModel } from 'src/app/core/models/atividade.model';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {

  aulaId: number;
  atividade: AtividadeModel;
  showComments = false;
  hasRecurso: boolean;

  constructor(private route: ActivatedRoute, private atividadeService: AtividadeService) { }

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
      console.log(this.atividade);
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

}
