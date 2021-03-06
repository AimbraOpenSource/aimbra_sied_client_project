import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialCardModule } from 'src/app/components/cards/material-card/material-card.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthRoleProfessorGuard } from 'src/app/security/auth/auth-role.guard';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivate: [ AuthRoleProfessorGuard ]
  },
];


@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [StudentsComponent],
})
export class StudentsModule { }
