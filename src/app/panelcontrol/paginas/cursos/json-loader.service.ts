import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonLoaderService {

  private jsonUrl = 'http://localhost:4200/assets/cursos.json'; 

  constructor(private http: HttpClient) { }

  loadJsonData() {
    return this.http.get(this.jsonUrl);
  }
}
