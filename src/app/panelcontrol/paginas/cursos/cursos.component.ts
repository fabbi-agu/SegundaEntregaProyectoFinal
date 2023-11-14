import { Component  } from '@angular/core';
import { CursoService } from './cursos.service';
import  {curso} from './models/cursos'
import  {Observable, of} from 'rxjs'
import  {MatDialog} from '@angular/material/dialog'
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent{
  cursos$: Observable<curso[]>
  constructor( private cursoServicio: CursoService,
              // private matDialog:MatDialog  
              ){
  this.cursos$=this.cursoServicio.getCursos()
}
//
//addcurso(){
//  this.matDialog.open(CursosDialogComponent)
//}
  
}
