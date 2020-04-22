import {MatSnackBar} from '@angular/material/snack-bar';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TurmaService} from '../turma.service';
import {TurmaModel} from 'src/app/core/models/turma.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Location} from '@angular/common';
import {AulaService} from '../../../core/services/aula.service';
import {AulaModel} from 'src/app/core/models/aula.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogBaseComponent} from '../../../components/dialog-base/dialog-base.component';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  turmaId: number;
  aulas: AulaModel[];
  aula: AulaModel;
  turma: TurmaModel;

  constructor(
    private route: ActivatedRoute,
    private turmaService: TurmaService,
    private aulaService: AulaService,
    private location: Location,
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private clipboard: Clipboard
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
    this.aulaService.findAllByTurmaIdOfProfessor(this.turmaId).subscribe((aulas: AulaModel[]) => {
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

  async goToUrl(path?: string, param?: string) {
    console.log(path, param);
    if (path) {
      if (param) {
        await this.router.navigate([path, param]);
      }
      await this.router.navigate([path]);
      return;
    }
    await this.router.navigate(['/entregas-da-aula', param]);
  }

  remove(aula: AulaModel) {
    this.dialog.open(DialogBaseComponent, {
      hasBackdrop: true,
      backdropClass: 'main-backdrop',
      width: '500px',
      id: aula.id.toString(),
      data: {
        title: 'Atenção!',
        message: 'Você deseja realmente remover esta Aula?',
        label: 'Digite SIM par confirmar',
        buttonCancel: true
      }
    }).afterClosed().subscribe((result: string) => {
      if (result === 'SIM') {
        this.aula = aula;
        this.removeBydId();
      }
    });
  }

  private removeBydId() {
    this.aulaService.deleteById(this.aula.id).subscribe((resp) => {
      if (resp) {
        this.snack.open('Removido com sucesso', 'Ok', {
          duration: 6000,
          panelClass: 'bg-sucess'
        })
      }
    }, (err: HttpErrorResponse) => {
      this.snack.open('Erro ao remover no servidor com o codigo ' + err.status, 'Ok', {
        duration: 6000,
        panelClass: 'bg-danger'
      })
    })
  }

  copyToClipboard() {
    const link = `localhost:4200/#/disciplinas/${this.turma.uuid}/confirma-convite`;
    this.clipboard.copy(link);
    this.snack.open(`O link '${link}' de convite foi copiado para a área de transferência`, 'Ok', {
      duration: 8000,
      panelClass: 'primary',
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}
