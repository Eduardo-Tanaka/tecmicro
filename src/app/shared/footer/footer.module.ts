import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TecmicroComponent } from './tecmicro/tecmicro.component';
import { MatButtonModule, MatTooltipModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [ 
    RouterModule, 
    CommonModule, 
    MatButtonModule, 
    MatTooltipModule, 
    MatInputModule, 
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [ FooterComponent, TecmicroComponent ],
  exports: [ FooterComponent ]
})

export class FooterModule {}
