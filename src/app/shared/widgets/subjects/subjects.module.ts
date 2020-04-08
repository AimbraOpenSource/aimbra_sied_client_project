import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [SubjectsComponent],
})
export class SubjectsModule { }
