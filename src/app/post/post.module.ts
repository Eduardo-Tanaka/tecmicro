import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { PostComponent } from './post/post.component';
import { NovoPostComponent } from './novo/novopost.component';
import { PostRoutes } from './post.routing';

import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PostRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CKEditorModule
  ],
  declarations: [ PostComponent, NovoPostComponent ]
})

export class PostModule {}
