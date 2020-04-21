import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoomConfigurationComponent} from './zoom-configuration.component';
import {RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MaterialCardModule} from '../../../components/cards/material-card/material-card.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthRoleProfessorGuard } from 'src/app/security/auth/auth-role.guard';

const routes: Routes = [
  {
    path: '',
    component: ZoomConfigurationComponent,
    canActivate: [AuthRoleProfessorGuard]
  }
];


@NgModule({
  declarations: [ZoomConfigurationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ZoomConfigurationComponent]
})
export class ZoomConfigurationModule { }
