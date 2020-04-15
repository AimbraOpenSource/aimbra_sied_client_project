import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialCardComponent} from './material-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [MaterialCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [MaterialCardComponent],
})
export class MaterialCardModule { }
