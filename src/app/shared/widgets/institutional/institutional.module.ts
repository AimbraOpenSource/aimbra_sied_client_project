import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalComponent } from './institutional.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [InstitutionalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  exports: [InstitutionalComponent],
})
export class InstitutionalModule { }
