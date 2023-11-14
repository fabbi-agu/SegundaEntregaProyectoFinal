import { Component, Input, } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {curso} from '../../models/cursos';


@Component({
  selector: 'app-cursos-tabla',
  templateUrl: './cursos-tabla.component.html',
  styleUrls: ['./cursos-tabla.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})

export class CursosTablaComponent {
  @Input()
  dataSource: curso[]= [];
  displayedColumns: string[] = ['id', 'nombre', 'desc', 'precio'];
}
