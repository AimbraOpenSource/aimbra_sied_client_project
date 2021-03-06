import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBaseComponent } from './dialog-base.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [DialogBaseComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [DialogBaseComponent],
})
export class DialogBaseModule { }
