import { Component, OnInit, Input } from '@angular/core';
import { ColorType } from '../../models/color-type.model';

@Component({
  selector: 'app-bootstrap-alert',
  templateUrl: './bootstrap-alert.component.html',
  styleUrls: ['./bootstrap-alert.component.scss']
})
export class BootstrapAlertComponent implements OnInit {

  @Input()
  color: ColorType;

  @Input()
  message: string;

  @Input()
  show = false;

  constructor() {}

  ngOnInit(): void {
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

  get classMap(): { [key: string]: boolean } {
    return {
      'alert-primary': ColorType.PRIMARY === this.color,
      'alert-secondary': ColorType.SECONDARY === this.color,
      'alert-success': ColorType.SUCCESS === this.color,
      'alert-danger': ColorType.DANGER === this.color,
      'alert-warning': ColorType.WARNING === this.color,
      'alert-ingo': ColorType.INFO === this.color,
      'alert-light': ColorType.LIGHT === this.color,
      'alert-dark': ColorType.DARK === this.color,
    };
  }

}
