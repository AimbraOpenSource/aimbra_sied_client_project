import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BootstrapAlertModule } from 'src/app/components/alerts/bootstrap-alert/bootstrap-alert.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BootstrapAlertModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
