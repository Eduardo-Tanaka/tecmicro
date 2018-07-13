import { Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { NovoPostComponent } from './novo/novopost.component';

export const PostRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'novo',
        component: NovoPostComponent
      },
      {
        path: ':post',
        component: PostComponent
      }
    ]
  }
];
