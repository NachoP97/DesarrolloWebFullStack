import { Component } from '@angular/core';

import { ArticuloService } from '../articulo/articulo.service';

@Component({
  selector: 'lista-articulos',
  templateUrl: './lista-articulos.html',
  styleUrls: []
})
export class ListaArticulosComponent {

  articulos;

  constructor (private articuloService: ArticuloService) {}

  ngOnInit() {
    this.articuloService.getArticulos().subscribe((articulos) => {
      debugger;
      this.articulos = articulos;
    });
  }

}
