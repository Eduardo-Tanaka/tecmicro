import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { EnqueteComponent } from './enquete.component';
import { EnqueteLayoutComponent } from './layout/layout.component';
import { EnqueteRoutes } from './enquete.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EnqueteRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [ EnqueteComponent, EnqueteLayoutComponent ]
})

export class EnqueteModule {}
