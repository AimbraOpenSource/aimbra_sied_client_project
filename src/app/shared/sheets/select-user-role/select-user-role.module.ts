import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUserRoleComponent } from './select-user-role.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [SelectUserRoleComponent],
  imports: [CommonModule, MatBottomSheetModule, MatListModule],
  exports: [SelectUserRoleComponent],
})
export class SelectUserRoleModule {}
