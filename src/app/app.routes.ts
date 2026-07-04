import { Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.component';
import { AboutPage } from '../pages/about/about.component';
import { AdminPage } from '../pages/admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'admin/:id',
    component: AdminPage,
    canActivate: [authGuard]
  }
];
