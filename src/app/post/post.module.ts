import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { PostComponent } from './post/post.component';
import { NovoPostComponent } from './novo/novopost.component';
import { PostRoutes } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PostRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [ PostComponent, NovoPostComponent ]
})

export class PostModule {}
