import  {Injectable} from '@angular/core'
import  {curso} from './models/cursos'
import  {Observable, of} from 'rxjs'

@Injectable({ providedIn: 'root'})
export class CursoService {
    cursos: curso[]= [
        {
            id: 1,
            nombre: 'Java Scrips',
            desc: 'Este es un curso donde de desarrollo WEB.',
            precio: 1500
        },
        {
            id: 2,
            nombre: 'HTML',
            desc: 'Este es un curso donde de desarrollo WEB con HTML.',
            precio: 1500
        },
        {
            id: 3,
            nombre: 'Matematica',
            desc: 'Este es un curso donde de matematica.',
            precio: 1500
        },
        {
            id: 4,
            nombre: 'Ingles',
            desc: 'Este es un curso donde de ingles',
            precio: 1500
        },
        {
            id: 5,
            nombre: 'Quimica',
            desc: 'Este es un curso donde de Quimica',
            precio: 1500
        }
    ]


    getCursos(): Observable<curso[]>{
        return of (this.cursos)
    }
}
