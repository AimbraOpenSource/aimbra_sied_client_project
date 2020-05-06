import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {times} from './times.model';
import {AulaModel} from 'src/app/core/models/aula.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';
import {Location} from '@angular/common';
import {TurmaModel} from '../../../core/models/turma.model';
import {AtividadeModel} from '../../../core/models/atividade.model';
import {AulaConfiguracaoModel} from '../../../core/models/aula-configuracao.model';
import {ReuniaoModel} from '../../../core/models/reuniao.model';
import {AtividadeService} from '../../../core/services/atividade.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogBaseComponent} from '../../../components/dialog-base/dialog-base.component';
import * as moment from 'moment';
import {RecursoService} from '../../../core/services/recurso.service';
import {RecursoModel} from '../../../core/models/recurso.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AtividadePatchFactory } from './atividade-patch.factory';
import { DateTimeUtil } from 'src/app/core/utils/date-time.util';
import { AtividadeFormFactory } from './atividade-form.factory';

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
  files: Set<File>;

  recursos: Set<RecursoModel> = new Set<RecursoModel>();

  atividadeFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private atividadeService: AtividadeService,
    private recursoService: RecursoService,
    private snack: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.atividade = new AtividadeModel();
    this.atividade.aula = new AulaModel();
    this.atividade.aula.reuniao = new ReuniaoModel();
    this.atividade.aula.configuracao = new AulaConfiguracaoModel();
    this.atividade.aula.turma = new TurmaModel();
  }

  ngOnInit(): void {
    this.initForm();
    this.getUrlParams();
    this.getQueryParams();
  }

  /**
   * TODO Criar formulário para modo update
   */
  patchForm() {
    this.atividadeFormGroup.patchValue(AtividadePatchFactory.getBody(this.atividade));
  }

  initForm() {
    this.atividadeFormGroup = this.getConfig();
  }

  hasAulaAoVivo(): boolean {
    const temAula = this.atividadeFormGroup.value.zoomGroup.temAulaAoVivo;
    return temAula !== undefined && temAula !== null && temAula === true;
  }

  isDesejaAgendar(): boolean {
    const isDesejaAgendar = this.atividadeFormGroup.value.scheduleGroup.temAgendamento;
    return isDesejaAgendar !== undefined && isDesejaAgendar !== null && isDesejaAgendar === true;
  }

  findByAulaId() {
    this.atividadeService.findByAulaId(this.aulaId).subscribe((atividade: AtividadeModel) => {
      if (atividade) {
        this.atividade = atividade;
        this.patchForm();
      } else {
        this.atividade = new AtividadeModel();
      }
    }, (err: HttpErrorResponse) => {
      this.snack.open(err.error.message, null, { duration: 5000 }).afterOpened().subscribe(() => {
        this.location.back();
      });
    });
  }

  private getConfig(): FormGroup {
    return this.fb.group({
      infoGroup: this.getInfoGroup(),
      exercicioGroup: this.getExercicioGroup(),
      zoomGroup: this.getZoomGroup(),
      disqusGroup: this.getDisqusGroup(),
      scheduleGroup: this.getScheduleGroup()
    });
  }

  private getInfoGroup(): FormGroup {
    return this.fb.group({
      titulo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(128)]),
      urlVideoGravado: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(1024)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(10000)]),
      observacao: new FormControl('', [Validators.minLength(50), Validators.maxLength(10000)])
    });
  }

  private getExercicioGroup(): FormGroup {
    return this.fb.group({
      titulo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(40), Validators.maxLength(10000)]),
      alunoFazUpload: new FormControl('', [Validators.required]),
      respostaTemTexto: new FormControl('', [Validators.required])
    });
  }

  private getZoomGroup(): FormGroup {
    return this.fb.group({
      temAulaAoVivo: new FormControl('', [Validators.required]),
      dataHoraInicio: new FormControl('', [Validators.required]),
      horario: new FormControl('', [Validators.required]),
      topico: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(64)]),
    });
  }

  private getDisqusGroup(): FormGroup {
    return this.fb.group({
      temDiscusao: new FormControl('', [Validators.required])
    });
  }

  private getScheduleGroup(): FormGroup {
    return this.fb.group({
      liberadoEm: new FormControl(''),
      temAgendamento: new FormControl(''),
    });
  }

  /**
   * Capturar esses valores nos formularios
   */
  private setPatternValues() {
    this.atividade.aula.reuniao.duracao = '60';
  }

  private buildAtividade() {
    this.atividadeFormGroup.value.zoomGroup.dataHoraInicio = DateTimeUtil.addTimeOnDate(
      this.atividadeFormGroup.value.zoomGroup.dataHoraInicio,
      this.atividadeFormGroup.value.zoomGroup.horario
    );
    this.atividadeFormGroup.value.scheduleGroup.liberadoEm = DateTimeUtil
      .dateToString(this.atividadeFormGroup.value.scheduleGroup.liberadoEm);

    if (!this.atividade.id) {
      this.atividade = AtividadeFormFactory.build(this.atividadeFormGroup.value);
    }
    this.atividade.aula.turma.id = this.turmaId;
    this.atividade.aula.id = this.aulaId;
    if (!this.atividade.id) {
      this.atividade.criadoEm = DateTimeUtil.dateToString(new Date());
    }
    console.log(this.atividade);
  }

  publish() {
    this.buildAtividade();
    this.atividadeService.insert(this.atividade, this.files).subscribe((a: AtividadeModel) => {
      this.atividade = a;
      this.snack.open('Aula Criada com sucesso', 'BLZ! :)', {
        duration: 5000,
        panelClass: 'bg-success'
      }).afterOpened().subscribe(() => {
        this.location.back();
      });
    }, (err: HttpErrorResponse) => {
      this.snack.open(err.error.message, null, {
        duration: 5000,
        panelClass: 'bg-danger'
      }).afterOpened().subscribe(() => {
      });
    });

  }



  getQueryParams() {
    this.route.queryParamMap.subscribe((params) => {
      this.turmaId = +params.get('turmaId');
    });
  }

  getUrlParams() {
    this.route.paramMap.subscribe(params => {
      this.aulaId = +params.get('aulaId');
      this.findAllRecursosByAulaId();
      if (this.isEditMode) {
        this.findByAulaId();
      }
    });
  }


  private findAllRecursosByAulaId() {
    this.recursoService.findAllByAulaId(this.aulaId).subscribe((recursos: RecursoModel[]) => {
      recursos.map(r => this.recursos.add(r));
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  get isEditMode(): boolean {
    return this.aulaId !== undefined && this.aulaId !== null && this.aulaId !== 0;
  }

  onFileSelected(event) {
    const selectedFiles: FileList = event.target.files as FileList;
    if (!this.files) {
      this.files = new Set<File>();
    }
    if (this.files.size >= 4) {
      this.snack.open('Você atingiu o número máxima de arquivos', 'Ok', { duration: 4000, verticalPosition: 'top' });
      return;
    }
    if (selectedFiles[0].size > 4000000) {
      this.snack.open('O tamanho máximo de arquivo é 4M', 'Ok', { duration: 4000, verticalPosition: 'top' });
      return;
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i]);
      const recurso = new RecursoModel();
      recurso.nomeReal = selectedFiles[i].name;
      recurso.file = selectedFiles[i];
      this.recursos.add(recurso);
    }
  }

  toogleFileName(r: RecursoModel) {
    this.dialog.open(DialogBaseComponent, {
      hasBackdrop: true,
      backdropClass: 'main-backdrop',
      data: {
        title: 'Escolha o nome do arquivo',
        message: 'Digite um nome para seu arquivo',
        label: 'Digite o nome do arquivo',
        value: r.nomeReal,
        withoutConfirmationText: true
      }
    }).afterClosed().subscribe((result: string) => {
    });
  }

  onFileRemove(r: RecursoModel) {
    if (this.files) {
      this.files.forEach(f => {
        if (f.name === r.nomeReal) {
          this.recursos.delete(r);
          this.files.delete(f);
        }
      });
    } else {
      this.recursos.delete(r);
    }
    this.recursoService.deleteById(r.id).subscribe(() => {
      console.log('sucesso ao deletar');
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  getIcon(type: string) {
    console.log(type);
    const results = type.split('/');
    switch (results[results.length - 1]) {
      case 'png':
      case 'jpeg':
      case 'jpg':
        return 'photo';
      case 'doc':
      case 'docx':
      case 'txt':
      case 'plain':
      case 'vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'description';
      case 'pdf':
        return 'picture_as_pdf';
      default:
        return 'attachment';

    }
  }
}
