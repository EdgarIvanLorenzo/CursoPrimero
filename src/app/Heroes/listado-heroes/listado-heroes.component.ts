import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {
  heroes:string[]=['Iron Man','Capitan America','Hulk','Hokei','Thor','Black Widow'];
  heroeEliminado:string='';
  constructor() {
  }

  ngOnInit(): void {
  }

  //Metodo para eliminar datos del arreglo
  eliminarHeroe():void{
    //!Podemos usar el operador logico para poner un resultado u otro en este caso una cadena vacia
    //*Si el resultado es undefined retornara una cadena vacia
    this.heroeEliminado=this.heroes.shift()||'';
  }
}
