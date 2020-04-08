import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutional',
  templateUrl: './institutional.component.html',
  styleUrls: ['./institutional.component.scss']
})
export class InstitutionalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUrl(route: string) {
    this.router.navigate([route]);
  }

}
