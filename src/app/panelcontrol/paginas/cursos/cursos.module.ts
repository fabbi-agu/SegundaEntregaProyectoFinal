import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CursosTablaComponent } from './components/cursos-tabla/cursos-tabla.component';
import {MatButtonModule} from '@angular/material/button';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';




@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent,
    
  ],
  imports: [
    CommonModule, MatCardModule,HttpClientModule,CursosTablaComponent,MatButtonModule
  ],
})
export class CursosModule {
}
