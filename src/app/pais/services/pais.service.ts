import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfeces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string= 'https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams()
    .set('all?fields','name,capital,flags,alpha2Code,population') 
  }
  

  constructor( private http: HttpClient) { }

buscarPais(termino:string): Observable<Country[]> {

    const url = ` ${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url, {params: this.httpParams} ); 

}
buscarCapital(termino:string): Observable<Country[]>{
  const url = ` ${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( url, {params: this.httpParams}); 
}

getPaisPorAlpha(id:string):Observable<Country>{
  const url = ` ${this.apiUrl}/alpha/${id}`;
  return this.http.get<Country>( url); 

}
buscarRegion(region:string):Observable<Country[]>{
   
  
  const url=`${this.apiUrl}/regionalbloc/${region}?/all?fields=name,capital,flags,alpha2Code,population`;
  return this.http.get<Country[]>(url, {params: this.httpParams});
}
}
