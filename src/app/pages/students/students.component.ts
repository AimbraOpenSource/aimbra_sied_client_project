import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/core/services/aluno.service';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlunoOfProfessor } from 'src/app/domain/aluno/aluno-of-professor.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  alunos: AlunoOfProfessor[] = [];

  constructor(private alunoService: AlunoService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.findAllOfProfessor();
  }

  findAllOfProfessor() {
    this.alunoService.findAllOfProfessor().subscribe((alunos: AlunoOfProfessor[]) => {
      this.alunos = alunos;
    }, (err: HttpErrorResponse) => {
      console.error(err);
      let message = err.error.message;
      if (err.status === 403) {
        message = 'Acesso autorizado somente para professor';
      }
      this.snack.open(message, 'Ok', {
        duration: 6000,
        panelClass: 'bg-danger'
      });
    });
  }

}
