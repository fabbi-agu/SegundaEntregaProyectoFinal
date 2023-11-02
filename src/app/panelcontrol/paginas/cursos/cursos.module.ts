import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule, MatCardModule,HttpClientModule
  ],
})
export class CursosModule { }
