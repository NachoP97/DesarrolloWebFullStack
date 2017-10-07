import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArticuloService {

  constructor(private http: Http) {
  }

  public getArticulos() {
    return this.http.get('/assets/articulos.json').map(function (res) {
      return res.json();
    });
  }

  public getArticulo(id) {
    return this.http.get('/assets/articulo-' + id + '.json').map(function (res) {
      return res.json();
    });
  }
}
