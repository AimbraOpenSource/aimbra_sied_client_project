import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUrl(path: string) {
    this.router.navigate([path]);
  }

}
