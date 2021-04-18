import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  numero: number;
  nit: string;
  razonSocial: string;
  fecha: string;
  observaciones: string;
  estado: string;
}






@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.component.html',
  styleUrls: ['./ordenes-compra.component.sass']
})
export class OrdenesCompraComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nit', 'razonSocial', 'fecha', 'observaciones', 'estado', 'ruta'];
  dataSource = new MatTableDataSource();
  filterValues:{[index: string]:any} = {};
  filterSelectObj: any[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { 
 
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  ngOnInit(): void {
    this.getRemoteData();
    this.dataSource.filterPredicate = this.createFilter();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  getRemoteData() {
  const ELEMENT_DATA: PeriodicElement[] = [
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

  this.dataSource.data = ELEMENT_DATA;
    this.filterSelectObj.filter((o) => {
      o.options = this.getFilterObject(ELEMENT_DATA, o.columnProp);
    });  
}
  
  filtros(objeto: any){
    this.filterValues[objeto.columna] = objeto.valor.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  createFilter() {

    let filtroFecha = (fechaOrden:any, valorFiltro:any, columna:any)=>{
        let fecha1 = (new Date(fechaOrden));
        console.log(fecha1);
        let bandera = false;
        let fecha2 = (new Date(valorFiltro))
        console.log(valorFiltro);
        console.log(fecha2);
        if(columna=="fechaInicial"){
          if(fecha1>=fecha2){
            bandera = true;
          }else{
            
          }

        }else if(columna=="fechaFinal"){
          if(fecha1<=fecha2){
            bandera = true;
          }else{
           
          }
        
        }
      return bandera;
      
    }

    let filterFunction = function (data: any, filter: string): boolean {
      
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }
      let nameSearch = () => {
        let found = false;
        let numero = 0;
        let posiciones = 0;
        if (isFilterSet) {
          for (const col in searchTerms) {
            posiciones++;
            if(col==="fechaInicial"|| col==="fechaFinal"){
               if(filtroFecha(data["fecha"], searchTerms[col], col)){
                 numero++;
               }else{

               }
            } else{
              
              searchTerms[col].trim().toLowerCase().split(' ').forEach((word: any) => { 
                if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                  numero++;
                  
                }
              });
            }
          }
          
          if(numero ==posiciones){
            found = true;
          }else{
            found = false
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
  
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = "";
    })
    this.dataSource.filter = "";
  }

  abrirObjeto= (event:any)=>{
    
  }
  
  

  
}




