import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Productos {
  lote: number;
  producto: string;
  estado: string;
  archivos: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  PRODUCTOS_DATA: Productos[] = [
    {lote: 123234234, producto: 'Acido cítrico', estado:"Completo", archivos: "colombia.pdf,otros.pdf,otro.pdf,otrico.pdf" },
    {lote: 8233234, producto: 'Gasa', estado:"Pendiente", archivos: "" },
    {lote: 4578977, producto: 'Producto3', estado:"Completo", archivos: "huila.pdf" },
    {lote: 45232378977, producto: 'Medicina', estado:"Pendiente", archivos: "otroarchivo.pdf" },
    {lote: 1435555544, producto: 'Pastillas', estado:"Pendiente", archivos: "" },
    {lote: 56766787878, producto: 'Otras Cosas raras', estado:"Pendiente", archivos: "," },
    {lote: 234234343, producto: 'Otras Cosas raras2', estado:"Pendiente", archivos: "" }
  ];
  dataSource = new MatTableDataSource( this.PRODUCTOS_DATA );
  nuevosArchivos = [];

  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cambiarEstado(objeto:any){
    let data = this.dataSource.data;
    let caracter = "";
    let pos = data.map(function(e) { return e.lote; }).indexOf(objeto.lote);
    data[pos].estado = "Completo";
    if(data[pos].archivos != ""){
      caracter = ","  
    }
    for(let i =0; i<objeto.nuevos.length;i++){
      caracter += objeto.nuevos[i].name + ","
    }
    data[pos].archivos += caracter; 
  }
  deleteBaseDatos(texto:string, lote:number){
    let data = this.dataSource.data;
    let pos = data.map(function(e) { return e.lote; }).indexOf(lote);
    data[pos].archivos = data[pos].archivos.replace(texto +"", ",");
    data[pos].archivos = data[pos].archivos.replace(",,", "");
    if(data[pos].archivos==""){
      data[pos].archivos = ",";
    }
  }
}
