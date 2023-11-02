import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelcontrolComponent } from './panelcontrol/panelcontrol.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { HomeComponent } from './panelcontrol/paginas/home/home.component';
import { UsuariosComponent } from './panelcontrol/paginas/usuarios/usuarios.component';
import { CursosComponent } from './panelcontrol/paginas/cursos/cursos.component';

const routes: Routes = [
  {
    path: 'panelcontrol',
    component: PanelcontrolComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      }
      ,
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
    
  },
  {
    path: 'autenticacion',
    component: AutenticacionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
