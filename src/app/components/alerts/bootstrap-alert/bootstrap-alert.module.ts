import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapAlertComponent } from './bootstrap-alert.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [BootstrapAlertComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [BootstrapAlertComponent],
})
export class BootstrapAlertModule { }
