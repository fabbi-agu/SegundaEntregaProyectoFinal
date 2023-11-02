import { Component, OnInit  } from '@angular/core';
import { Cursos } from '../../../cursos';
import { JsonLoaderService } from './json-loader.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: any= [];
  cursos2: Cursos[]= 
  [];

  cursosCargados = false;
  constructor(private jsonLoaderService: JsonLoaderService) { }

  ngOnInit() {
    this.jsonLoaderService.loadJsonData().subscribe((data) => {
      this.cursos=data
      this.cursosCargados = true;
    });
  }
  cargaVector(){
    this.cursos.forEach((elemento:Cursos) => {
      this.cursos2.push(elemento);
    });
    console.log(this.cursos2)

  }

}
