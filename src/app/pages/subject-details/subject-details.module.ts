import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectDetailsComponent } from './subject-details.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectDetailsComponent,
  },
];



@NgModule({
  declarations: [SubjectDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [SubjectDetailsComponent],
})
export class SubjectDetailsModule { }
