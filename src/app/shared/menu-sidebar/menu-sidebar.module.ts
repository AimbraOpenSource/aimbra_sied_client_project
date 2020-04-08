import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSidebarComponent } from './menu-sidebar.component';
import { InstitutionalModule } from '../widgets/institutional/institutional.module';
import { SubjectsModule } from '../widgets/subjects/subjects.module';
import { TeacherManagementModule } from '../widgets/teacher-management/teacher-management.module';
import { UserWidgetModule } from '../widgets/user-widget/user-widget.module';



@NgModule({
  declarations: [MenuSidebarComponent],
  imports: [
    CommonModule,
    InstitutionalModule,
    SubjectsModule,
    TeacherManagementModule,
    UserWidgetModule
  ],
  exports: [MenuSidebarComponent],
})
export class MenuSidebarModule { }
