import { Component, OnInit, Input, OnChanges, DoCheck} from '@angular/core';
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-manejo-certificados',
  templateUrl: './manejo-certificados.component.html',
  styleUrls: ['./manejo-certificados.component.sass']
})


export class ManejoCertificadosComponent implements OnInit, DoCheck {
  @Input() elementos: any;
  archivos = []; //Archivos que ya vienen en la base de datos 
  nuevosArchivos:any = []; // Archivos a introducir en la base de datos
  
  public ngDoCheck(): void {
    this.setValue();
  }

  constructor(public ProductosService: ProductosService) { 
  }

  ngOnInit(): void {
  }

  setValue(){
    if(this.elementos.archivos != "")
    this.archivos = this.elementos.archivos.split(",").filter((position:any)=>{
      return position != "";
    })
  }

  subirArchivos(event: any){
    let files = event.target.files;
    let id: string = event.target.id.replace("subir","");
    let div = window.document.getElementById("list" + id)!;
    if(this.elementos.archivos != ""){
      div.style.borderTop= "1px solid #333"
    } 
    if(files.length==0){
      this.nuevosArchivos.push(files); 
    }else if(files.length>0){
      for(let i=0;i<files.length;i++){
        this.nuevosArchivos.push(files[i])
      }
    }    
  }

  botonTerminar(e: any){
    let objeto= {
      lote: this.elementos.lote,
      nuevos: this.nuevosArchivos
    }
    this.ProductosService.cambiarEstado(objeto);
    this.nuevosArchivos= []
  }

  borrarArchivos(e: any, posicion: number){
    
    this.nuevosArchivos.splice( posicion, 1 );
    if(this.nuevosArchivos.length === 0){
      let div = window.document.getElementById("list" + this.elementos.lote)!;
      div.style.borderTop= "none"
    }
    
  }

  borrarEnbasedeDatos(e:any, i:number){
    let div = window.document.getElementById("delete" + this.elementos.lote + i)!
    this.ProductosService.deleteBaseDatos(div.innerHTML, this.elementos.lote);
  }

}
