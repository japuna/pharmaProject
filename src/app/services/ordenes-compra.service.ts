import { Injectable } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  numero: number;
  nit: string;
  razonSocial: string;
  fecha: string;
  observaciones: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})

export class OrdenesCompraService {
  dataSource = new MatTableDataSource();
  filterSelectObj: any[] = [];
  filterValues:{[index: string]:any} = {};

  ORDENES_DATA: PeriodicElement[] = [
    {numero: 123, nit: '1423243433-2', razonSocial:"Alegrias SAS", fecha: "02/23/20", 
    observaciones: "Esto es un ejemplo", estado: "Completo" },
    {numero: 13, nit: '222434333', razonSocial:"Hola SAS", fecha: "02/23/19", 
    observaciones: "Another One", estado: "Pendiente" },
    {numero: 33343, nit: '19232434333-1', razonSocial:"Comida SAS", fecha: "01/03/19", 
    observaciones: "Look This", estado: "Completo" },
    {numero: 4131, nit: '1232434333-5', razonSocial:"La Cna SAS", fecha: "12/02/19", 
    observaciones: "Muchis", estado: "Completo" },
    {numero: 8122, nit: '993434333-6', razonSocial:"ASSS SAS", fecha: "11/03/21", 
    observaciones: "Otras compra", estado: "Pendiente" },
    {numero: 33432, nit: '12234333-6', razonSocial:"Camila SAS", fecha: "3/12/20", 
    observaciones: "Compra", estado: "Pendiente" }
  ];

  constructor() { }

  getRemoteData() {
    this.dataSource.data = this.ORDENES_DATA;
    this.filterSelectObj.filter((o) => {
      o.options = this.getFilterObject(this.ORDENES_DATA, o.columnProp);
    });  
  }

  getFilterObject(fullObj:any, key:any) {
    const uniqChk:any[] = [];
    fullObj.filter((obj: any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }
 
  //Borrar todos los filtros
  resetFilters() {
  
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = "";
    })
    this.dataSource.filter = "";
  }
}
