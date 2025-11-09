import { Routes } from '@angular/router';
import { Index } from './index';
import { Star } from './star/star';
import { People } from './people/people';
import { Student } from './student/student';

export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'star',
    component: Star,
  },
  {
    path: 'ppl',
    component: People,
  },
  {
    path: 'student',
    component: Student,
  },

  // Redirect all unknown routes to ''
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
