import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  lote: number;
  producto: string;
  estado: string;
  archivos: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {lote: 123234234, producto: 'Acido cítrico', estado:"Completo", archivos: "colombia.pdf,otros.pdf" },
  {lote: 12233234, producto: 'Gasa', estado:"incompleto", archivos: "" },
  {lote: 4578977, producto: 'Producto3', estado:"Completo", archivos: "" },
  {lote: 45232378977, producto: 'Medicina', estado:"Incompleto", archivos: "otroarchivo.pdf" },
  {lote: 1435555544, producto: 'Pastillas', estado:"Incompleto", archivos: "" },
  {lote: 56766787878, producto: 'Otras Cosas raras', estado:"Incompleto", archivos: "" },
  {lote: 234234343, producto: 'Otras Cosas raras2', estado:"Incompleto", archivos: "" }
];


@Component({
  selector: 'app-productos-ordenes',
  templateUrl: './productos-ordenes.component.html',
  styleUrls: ['./productos-ordenes.component.sass']
})
export class ProductosOrdenesComponent implements OnInit {
  displayedColumns: string[] = ['lote', 'producto', 'estado', 'archivos'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor() {


  }

    
  


  abrirObjeto= (event:any)=>{
    alert(event);
  }
  

}


