import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  imagePath: string;

  @Input('avatarClass')
  avatar: string;

  @Input()
  showActionArea: boolean = true;

  @Input()
  hasHeader: boolean = true;

  @Input()
  hasDividerTop: boolean = false;

  @Input()
  hasDividerBotton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get hasAvatar(): boolean {
    return !!this.avatar;
  }

  get hasTitle(): boolean {
    return !!this.title;
  }

  get hasSubtitle(): boolean {
    return !!this.subtitle;
  }

  get hasImagePath(): boolean {
    return !!this.imagePath;
  }

}
