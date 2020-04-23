import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomComponent } from './classroom.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeVideoModule } from 'src/app/components/youtube-video/youtube-video.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DisqusCommentModule } from 'src/app/components/disqus-comment/disqus-comment.module';
import { MaterialCardComponent } from 'src/app/components/cards/material-card/material-card.component';
import { MaterialCardModule } from 'src/app/components/cards/material-card/material-card.module';
import { ResourceClassWidgetModule } from 'src/app/shared/widgets/resource-class-widget/resource-class-widget.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':aulaId',
    component: ClassroomComponent,
  },
];

@NgModule({
  declarations: [ClassroomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YoutubeVideoModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    DisqusCommentModule,
    MaterialCardModule,
    ResourceClassWidgetModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [ClassroomComponent],
})
export class ClassroosModule { }
