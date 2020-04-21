import {AfterViewChecked, ChangeDetectorRef, Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-disqus-comment',
  templateUrl: './disqus-comment.component.html',
  styleUrls: ['./disqus-comment.component.scss']
})
export class DisqusCommentComponent implements OnInit {

  @Input()
  category = 'all';

  @Input()
  pageId: number;

  @Input()
  debugMode = false;

  url: string;
  host: string;
  hostname: string;
  pathname: string;
  protocol: string;

  constructor(private route: ActivatedRoute, private location: Location, private cdRef: ChangeDetectorRef) {
    this.getActivatedRoute();
  }

  ngOnInit(): void {

  }

  getActivatedRoute() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let aulaId = +params.get('aulaId');

      if (aulaId && aulaId > 0) {
        this.pageId = +params.get('aulaId');
      }

      this.url = this.location.path();
      this.host = window.location.host;
      this.hostname = window.location.hostname;
      this.pathname = window.location.pathname;
      this.protocol = window.location.protocol;
    });
  }

  get id(): string {
    // return this.pageId ? `${this.url}` : this.url;
    return '/sala-de-aula/' + this.pageId;
  }

  get fullPath(): string {
    return this.protocol + '//' + this.host;
  }

  onComment(event) {
    console.log(event);
  }

  onReady(event) {
    console.log(event);
  }

  onPaginate(event) {
    console.log(event);
  }

}
