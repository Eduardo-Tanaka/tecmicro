import { Routes } from '@angular/router';

import { PerfilComponent } from './perfil.component';

export const PerfilRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: '',
        component: PerfilComponent
      }
    ]
  }
];
