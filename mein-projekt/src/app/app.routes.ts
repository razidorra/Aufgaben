import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile',
  },
  {
    path: 'profile',
    component: HomeComponent,
    title: 'Razi Dorra - Profil',
  },
  {
    path: 'projects',
    component: HomeComponent,
    title: 'Razi Dorra - Projekte',
  },
  {
    path: 'learning',
    component: HomeComponent,
    title: 'Razi Dorra - Lernen',
  },
  {
    path: '**',
    redirectTo: 'profile',
  },
];
