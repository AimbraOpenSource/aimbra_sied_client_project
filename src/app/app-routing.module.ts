import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './security/auth/auth.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


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
    path: 'logout',
    component: LogoutComponent
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
    path: 'meus-estudantes',
    loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'disciplinas',
    loadChildren: () => import('./pages/subject-details/subject-details.module').then(m => m.SubjectDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sala-de-aula',
    loadChildren: () => import('./pages/classrooms/classrooms.module').then(m => m.ClassroosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'minhas-turmas',
    loadChildren: () => import('./pages/my-classes/my-classes.module').then(m => m.MyClassesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'zoom',
    loadChildren: () => import('./pages/zoom/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppRoutingModule { }
