import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  titulo: string = "ÓRDENES DE COMPRA";
  set_titulo(texto:string){
    this.titulo = texto;
  }

  constructor() { 
    this.titulo = "ÓRDENES DE COMPRA";
  }
}
