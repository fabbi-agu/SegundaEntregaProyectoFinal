import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelcontrolComponent } from './panelcontrol.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PanelcontrolComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,RouterModule
  ],
  exports: [
    PanelcontrolComponent
  ],
})
export class PanelcontrolModule { 
  
}
