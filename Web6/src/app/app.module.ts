import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { ArticuloService } from './articulo/articulo.service';

const appRoutes: Routes = [
  { path: '', component: ListaArticulosComponent, pathMatch: "full" },
  { path: 'articulo/:id', component: ArticuloComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
  ],
  providers: [
    ArticuloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
