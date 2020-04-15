import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisqusCommentComponent } from './disqus-comment.component';
import {DisqusModule} from "ngx-disqus";



@NgModule({
  declarations: [DisqusCommentComponent],
  imports: [
    CommonModule,
    DisqusModule
  ],
  exports: [DisqusCommentComponent],
})
export class DisqusCommentModule { }
