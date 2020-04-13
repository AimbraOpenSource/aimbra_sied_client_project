import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth/auth.service';
import { UserRole } from 'src/app/core/models/user-role.model';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  role: UserRole;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.role = this.authService.role;
  }

  private hasAuth(): boolean {
    return this.role !== undefined && this.role !== null;
  }

  isAluno(): boolean {
    return this.hasAuth() && this.role === UserRole.ALUNO;
  }

  isProfessor(): boolean {
    return this.hasAuth() && this.role === UserRole.PROFESSOR;
  }

  isRoot(): boolean {
    return this.hasAuth() && this.role === UserRole.ROOT;
  }

}
