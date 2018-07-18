import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { PerfilComponent } from './perfil.component';
import { PerfilRoutes } from './perfil.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PerfilRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [ PerfilComponent ]
})

export class PerfilModule {}
