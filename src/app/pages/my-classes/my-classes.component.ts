import { DialogBaseComponent, DialogData } from './../../components/dialog-base/dialog-base.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ClassroomFormComponent } from 'src/app/shared/forms/classroom-form/classroom-form.component';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { CursoModel } from 'src/app/core/models/curso.model';
import { AuthService } from 'src/app/security/auth/auth.service';
import { TurmaService } from './turma.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogBaseModule } from 'src/app/components/dialog-base/dialog-base.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss']
})
export class MyClassesComponent implements OnInit {

  turma: TurmaModel = new TurmaModel();
  turmas: TurmaModel[] = [];
  dataSource = new MatTableDataSource<TurmaModel>(this.turmas);

  selection = new SelectionModel<TurmaModel>(true, []);

  displayedColumns = [
    'select',
    'nome',
    'senha',
    'qtAlunos',
  ];

  constructor(
    public dialog: MatDialog,
    private turmaService: TurmaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.findAllTurmas();
  }

  openDialog() {
    this.dialog.open(ClassroomFormComponent, {
      width: '500px',
      hasBackdrop: true,
      backdropClass: 'main-backdrop',
      data: {
        id: '1',
        title: 'Adicionar nova turma',
        buttonCancel: true
      }
    }).afterClosed().subscribe((result: CursoModel) => {
      this.turma.curso = result;
      if (this.turma.curso) {
        this.create();
      }
    });
  }
  removeSelections() {
    this.dialog.open(DialogBaseComponent, {
      width: '500px',
      id: '2',
      hasBackdrop: true,
      backdropClass: 'main-backdrop',
      data: {
        title: 'Atenção!',
        message: 'Você deseja realmente remover estas turmas?',
        label: 'Digite SIM par confirmar',
        buttonCancel: true
      }
    }).afterClosed().subscribe((result: string) => {
      if (result === 'SIM') {
        this.removeAll();
      }
    });

  }

  removeAll() {
    this.turmaService.removeAll(this.selection.selected).subscribe(() => {
      this.selection.clear();
      this.findAllTurmas();
    }, (err: Error) => {
      console.error(err);
    });
  }

  create() {
    this.turmaService.create(this.turma.curso).subscribe((turma: TurmaModel) => {
      this.turmas.push(turma);
      this.findAllTurmas();
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  findAllTurmas() {
    this.turmaService.findAllByProfessorLoggedIn().subscribe((turmas: TurmaModel[]) => {
      this.turmas = turmas;
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  hasTurma(): boolean {
    return this.turmas.length > 0;
  }

  goToUrl(path: string, param: string) {
    this.router.navigate([path, param]);
  }

  onRowClick(turma: TurmaModel) {
    this.goToUrl('/minhas-turmas', turma.id.toString());
  }

  fazerConvite() {
    console.log(this.turma);
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: TurmaModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${ 1}`;
  }



}
