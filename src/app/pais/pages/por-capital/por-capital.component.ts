import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';


import { Country } from '../../interfeces/pais.interfaces';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {



  termino: string="";
  hayError: boolean= false;
  paises: Country[]=[];

  constructor( private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino= termino;
    
    this.paisService.buscarCapital(this.termino)
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
  }

}
