import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NoAuthGuard } from '@app/guard/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('@modules/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('@modules/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('@modules/teams/teams.module').then(m => m.TeamsModule)
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('@modules/clients/clients.module').then(m => m.ClientsModule)
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('@modules/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@modules/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
