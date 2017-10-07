import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticuloService } from './articulo.service';

@Component({
  selector: 'articulo',
  templateUrl: './articulo.html',
  styleUrls: ['./articulo.css']
})
export class ArticuloComponent {

  articulo;

  constructor (private articuloService: ArticuloService,
               private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.articuloService.getArticulo(params.id).subscribe((articulo) => {
          this.articulo = articulo;
        });
      });
  }
}
