import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'main',
    loadChildren: () =>
      import('./routes/main/main.routes').then((mod) => mod.MainRoutesModule),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
