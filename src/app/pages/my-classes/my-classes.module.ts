import { MatTableModule } from '@angular/material/table';
import { ClassroomFormModule } from './../../shared/forms/classroom-form/classroom-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClassesComponent } from './my-classes.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: MyClassesComponent
  }
];


@NgModule({
  declarations: [MyClassesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDialogModule,
    ClassroomFormModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MyClassesModule { }
