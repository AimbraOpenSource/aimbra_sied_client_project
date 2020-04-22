import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesSentComponent } from './activities-sent.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoleProfessorGuard } from 'src/app/security/auth/auth-role.guard';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesSentComponent,
    canActivate: [AuthRoleProfessorGuard]
  }
];


@NgModule({
  declarations: [ActivitiesSentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [ActivitiesSentComponent],
})
export class ActivitiesSentModule { }
