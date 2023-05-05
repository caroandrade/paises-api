import { Component, Input,  EventEmitter, Output, OnInit } from '@angular/core';
import { Subject} from 'rxjs'
import {  debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder:string="";


  @Output() onEnter: EventEmitter<string>=new EventEmitter;
  termino:string="";
@Output() onDebounce: EventEmitter<string>=new EventEmitter; 

debouncer: Subject <string>= new Subject();

ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=> {
      console.log('debouncer:', valor);
    })
        
      }
    buscar(){

   this.onEnter.emit(this.termino);
  }

teclaPresionada(){
this.debouncer.next(this.termino);  
}
}
