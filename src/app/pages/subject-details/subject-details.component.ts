import { TurmaModel } from 'src/app/core/models/turma.model';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../my-classes/turma.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  uuid: string;
  turma: TurmaModel;

  constructor(private route: ActivatedRoute, private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.uuid = params.get('uuid');
      this.turmaService.findByUuid(this.uuid).subscribe((turma: TurmaModel) => {
        this.turma = turma;
      });
    });
  }

}
