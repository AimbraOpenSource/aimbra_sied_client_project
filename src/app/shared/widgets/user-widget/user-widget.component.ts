import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUrl(path: string) {
    this.router.navigate([path]);
  }

}
