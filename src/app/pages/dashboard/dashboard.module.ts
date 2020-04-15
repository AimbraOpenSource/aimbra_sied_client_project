import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BootstrapAlertModule } from 'src/app/components/alerts/bootstrap-alert/bootstrap-alert.module';
import {MaterialCardModule} from "../../components/cards/material-card/material-card.module";
import {MatButtonModule} from "@angular/material/button";
import {YoutubeVideoModule} from "../../components/youtube-video/youtube-video.module";


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
    BootstrapAlertModule,
    MatButtonModule,
    MaterialCardModule,
    YoutubeVideoModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
