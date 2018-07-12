import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { TecmicroComponent } from './tecmicro/tecmicro.component';
import { DashboardRoutes } from './dashboard.routing';

import { TextSizePipe } from '../pipes/TextSizePipe.pipe'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [ DashboardComponent, TecmicroComponent, TextSizePipe ]
})

export class DashboardModule {}
