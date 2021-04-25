import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrdenesCompraService } from '../services/ordenes-compra.service'
import { HeaderTitleService } from '../services/header-title.service';


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

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public OrdenesCompraService: OrdenesCompraService, public HeaderTitleService: HeaderTitleService) { 
 
  }
  ngAfterViewInit(){
    this.OrdenesCompraService.dataSource.paginator = this.paginator;
    this.OrdenesCompraService.dataSource.sort = this.sort; 
  }

  ngOnInit(): void {
    this.getRemoteData();
    this.OrdenesCompraService.dataSource.filterPredicate = this.createFilter();
    this.OrdenesCompraService.dataSource.paginator = this.paginator;
    this.OrdenesCompraService.dataSource.sort = this.sort;
  }

  getRemoteData() {
    this.OrdenesCompraService.getRemoteData();  
  }
  
  filtros(objeto: any){
    this.OrdenesCompraService.filterValues[objeto.columna] = objeto.valor.trim().toLowerCase()
    this.OrdenesCompraService.dataSource.filter = JSON.stringify(this.OrdenesCompraService.filterValues)
  }

  createFilter() {
    let filtroFecha = (fechaOrden:any, valorFiltro:any, columna:any)=>{
    let fecha1 = (new Date(fechaOrden));
        let bandera = false;
        let fecha2 = (new Date(valorFiltro))
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


  //Borrar todos los filtros
  resetFilters() {
    this.OrdenesCompraService.resetFilters();
  }

  abrirObjeto= (event:any, numero: number)=>{
    this.HeaderTitleService.set_titulo("ORDEN DE COMPRA #" + numero);
  }
  
  

  
}




