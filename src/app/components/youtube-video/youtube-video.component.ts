import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {

  @Input()
  videoId: string;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  suggestedQuality: number;

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }


}
