import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogBaseModule } from 'src/app/components/dialog-base/dialog-base.module';

const routes: Routes = [
  { path: '', component: StudentRegistrationComponent }
];

@NgModule({
  declarations: [StudentRegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    DialogBaseModule,
    MatSnackBarModule
  ]
})
export class StudentRegistrationModule { }
