import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatSort}  from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ProductosService} from '../services/productos.service'
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-productos-ordenes',
  templateUrl: './productos-ordenes.component.html',
  styleUrls: ['./productos-ordenes.component.sass']
})
export class ProductosOrdenesComponent implements OnInit {
  displayedColumns: string[] = ['lote', 'producto', 'estado', 'archivos'];
  rol: string  = "Administrador";

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(){
    this.ProductosService.dataSource.paginator = this.paginator;
    this.ProductosService.dataSource.sort = this.sort; 
  }

  ngOnInit(): void {

    this.ProductosService.dataSource.paginator = this.paginator;
    this.ProductosService.dataSource.sort = this.sort;
  }
  constructor(public ProductosService: ProductosService, public HeaderTitleService: HeaderTitleService) {

  }
  cambiarEstado(event:any){
    let data = this.ProductosService.dataSource.data;
    for (let i =0; i<data.length; i++) {
        if(data[i].lote == event.target.id){
          data[i].estado = event.target.value;
        }
    }
    
  }

  enviarEstado(lote:any){
    this.ProductosService.cambiarEstado(lote);
  }
  applyFilter(event: Event) {
    this.ProductosService.applyFilter(event);
  }

  volver(){
    this.HeaderTitleService.set_titulo("ÓRDENES DE COMPRA")
  }
  

}


