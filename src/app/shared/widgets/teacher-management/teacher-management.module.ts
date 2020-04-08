import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherManagementComponent } from './teacher-management.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [TeacherManagementComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [TeacherManagementComponent],
})
export class TeacherManagementModule { }
