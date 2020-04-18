import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.scss']
})
export class TeacherManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async goToUrl(path: string) {
    await this.router.navigate([path]);
  }



}
