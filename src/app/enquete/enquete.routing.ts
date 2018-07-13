import { Routes } from '@angular/router';

import { EnqueteComponent } from './enquete.component';

export const EnqueteRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: '',
        component: EnqueteComponent
      }
    ]
  }
];
