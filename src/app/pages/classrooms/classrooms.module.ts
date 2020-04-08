import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomsComponent } from './classrooms.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClassroomsComponent,
  },
];

@NgModule({
  declarations: [ClassroomsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ClassroomsComponent],
})
export class ClassroosModule { }
