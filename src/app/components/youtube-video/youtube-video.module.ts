import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video.component';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [YoutubeVideoComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [YoutubeVideoComponent],
})
export class YoutubeVideoModule { }
