import { StudentRegistrationModule } from './../student-registration/student-registration.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectDetailsComponent } from './subject-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: ':uuid',
    component: SubjectDetailsComponent,
  },
  {
    path: ':uuid/confirma-convite',
    loadChildren: () => import('../student-registration/student-registration.module').then(m => m.StudentRegistrationModule)
  }
];



@NgModule({
  declarations: [SubjectDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [SubjectDetailsComponent],
})
export class SubjectDetailsModule { }
