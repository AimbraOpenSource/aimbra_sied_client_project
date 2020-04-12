import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth/auth.service';
import { UserRole } from 'src/app/core/models/user-role.model';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isAluno(): boolean {
    return this.authService.role === UserRole.ALUNO;
  }

  isProfessor(): boolean {
    return this.authService.role === UserRole.PROFESSOR;
  }

  isRoot(): boolean {
    return this.authService.role === UserRole.ROOT;
  }

}
