import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
];


@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ScheduleComponent],
})
export class ScheduleModule { }
