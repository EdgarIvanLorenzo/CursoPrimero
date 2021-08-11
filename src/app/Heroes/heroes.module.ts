import {NgModule} from '@angular/core';
//El CommonModule nos permiten ejecutar directivas de Angular
import {CommonModule} from '@angular/common';
//Importacion del componente
import {ListadoComponent} from'./listado/listado.component';

//Decorador de tipo NgModule
@NgModule({
  declarations: [
    //La declaraciones recibe cada uno de los componentes a cargar
    ListadoComponent
  ],
  exports: [
    //Las declaraciones de export son los componentes que queremos que sean visible a otros
    ListadoComponent
  ],
  imports: [
    //La importacion es todo aquello que se recibe con el fin de poder generar un modules
    //Para la creacion de un module secundario es necesario importar el module CommonModule
    CommonModule
  ]
})
export class HeroesComponent{

}
