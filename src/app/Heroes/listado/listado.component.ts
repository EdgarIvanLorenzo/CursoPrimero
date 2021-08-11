import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroe:string='Iron Man';
  edad:number=30;
  constructor() { }

  ngOnInit(): void {
  }

  //Metodo get que puede ser un metodo cualquiera
  //Un metodo get se trata como una variable no como una propiedad
  get Mayusculas():string{
    return this.heroe.toUpperCase();
  }

  //!Metodo para cambiar el nombre del heroe basandonos en un operador ternario
  cambiarHeroe():void{
    this.heroe = (this.heroe==='Iron Man')?'Spiderman':'Iron Man';
  }
  //!Metodo para cambiar la edad del heroe basandonos en un operador ternario
  cambiarEdad():void{
    this.edad=(this.edad===30)?20:30;
  }

}
