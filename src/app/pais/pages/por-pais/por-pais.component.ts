import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfeces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
    li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent  {


  termino: string="";
  hayError: boolean= false;
  paises: Country[]=[];

  paisesSugeridos: Country[]=[];
  mostrarSugerencia: boolean= false;

  constructor( private paisService: PaisService) { }

  buscar(termino:string){

    this.mostrarSugerencia=false;
    this.hayError=false;
    this.termino= termino;
    
    this.paisService.buscarPais(this.termino)
    .subscribe( (paises)=>{
      console.log(paises);
      this.paises= paises;


    }, error=>{
      this.hayError= true;
      this.paises=[];
    });
  }

  sugerencias(termino:string){
    this.hayError= false; 
    this.termino= termino;
    this.mostrarSugerencia=true;


    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,3),
      (err)=> this.paisesSugeridos =[]
      );
              
  }
  buscarSugeridos(termino:string){
     this.buscar(termino);
    

  }
}
