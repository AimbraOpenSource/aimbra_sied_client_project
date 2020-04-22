import { MatTableModule } from '@angular/material/table';
import { ClassroomFormModule } from './../../shared/forms/classroom-form/classroom-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClassesComponent } from './my-classes.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogBaseModule } from 'src/app/components/dialog-base/dialog-base.module';
import { ClassListModule } from './class-list/class-list.module';
import { ClassFormModule } from './class-form/class-form.module';
import { AuthRoleProfessorGuard } from 'src/app/security/auth/auth-role.guard';

const routes: Routes = [
  {
    path: '',
    component: MyClassesComponent,
    canActivate: [ AuthRoleProfessorGuard ]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./class-form/class-form.module').then(m => m.ClassFormModule)
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
    MatCheckboxModule,
    DialogBaseModule,
    ClassListModule
  ]
})
export class MyClassesModule { }
