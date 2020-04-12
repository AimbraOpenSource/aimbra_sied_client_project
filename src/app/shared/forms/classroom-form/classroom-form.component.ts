import { CursoModel } from './../../../core/models/curso.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.scss']
})
export class ClassroomFormComponent implements OnInit {

  curso: CursoModel;

  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClassroomFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.curso = new CursoModel();
    }


  ngOnInit(): void {
    this.cursoForm = this.fb.group({ titulo: '' });
  }

}
