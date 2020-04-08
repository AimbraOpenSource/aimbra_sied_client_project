import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './security/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/painel',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'painel',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agendas',
    loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'estudades',
    loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'disciplinas',
    loadChildren: () => import('./pages/subject-details/subject-details.module').then(m => m.SubjectDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'turmas',
    loadChildren: () => import('./pages/classrooms/classrooms.module').then(m => m.ClassroosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
