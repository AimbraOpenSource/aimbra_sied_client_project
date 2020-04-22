import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/core/services/aluno.service';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlunoOfProfessor } from 'src/app/core/models/aluno-of-professor.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogBaseComponent } from 'src/app/components/dialog-base/dialog-base.component';
import { InscricaoService } from 'src/app/core/services/inscricao.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  alunos: AlunoOfProfessor[] = [];

  constructor(
    private alunoService: AlunoService,
    private inscricaoService: InscricaoService,
    private snack: MatSnackBar,
    private matDialog: MatDialog) { }

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

  remove(a: AlunoOfProfessor) {
    this.matDialog.open(DialogBaseComponent, {
      data: {
        title: 'Atenção',
        message: 'Deseja realmente remover este aluno desta turma?',
        label: 'Digite SIM para confirmar',
        buttonCancel: true,
        withoutConfirmationText: false
      }
    }).afterClosed().subscribe((value: string) => {
      if (value === 'SIM') {
        this.inscricaoService.removeByAlunoIdAndTurmaId(a.id, a.turmaId).subscribe(() => {
          this.snack.open('Removido com sucesso', 'Ok', {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: 'bg-success'
          });
          this.findAllOfProfessor();
        });
      }
    });
  }

}
