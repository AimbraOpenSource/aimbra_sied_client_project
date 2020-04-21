import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomsComponent } from './classrooms.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeVideoModule } from 'src/app/components/youtube-video/youtube-video.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DisqusCommentModule } from 'src/app/components/disqus-comment/disqus-comment.module';
import { MaterialCardComponent } from 'src/app/components/cards/material-card/material-card.component';
import { MaterialCardModule } from 'src/app/components/cards/material-card/material-card.module';
import { ResourceClassWidgetModule } from 'src/app/shared/widgets/resource-class-widget/resource-class-widget.module';

const routes: Routes = [
  {
    path: ':aulaId',
    component: ClassroomsComponent,
  },
];

@NgModule({
  declarations: [ClassroomsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YoutubeVideoModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    DisqusCommentModule,
    MaterialCardModule,
    ResourceClassWidgetModule
  ],
  exports: [ClassroomsComponent],
})
export class ClassroosModule { }
