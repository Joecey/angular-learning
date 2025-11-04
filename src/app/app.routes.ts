import { Routes } from '@angular/router';
import { Index } from './index';
import { Star } from './star/star';

export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'star',
    component: Star,
  },
  // Redirect all unknown routes to ''
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
