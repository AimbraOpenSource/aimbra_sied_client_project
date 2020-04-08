import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWidgetComponent } from './user-widget.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [UserWidgetComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UserWidgetComponent],
})
export class UserWidgetModule { }
