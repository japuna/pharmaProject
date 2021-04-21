import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange, DoCheck} from '@angular/core';

@Component({
  selector: 'app-manejo-certificados',
  templateUrl: './manejo-certificados.component.html',
  styleUrls: ['./manejo-certificados.component.sass']
})


export class ManejoCertificadosComponent implements OnInit, OnChanges, DoCheck {
  @Input() elementos: any;
  
  @Output() enviarEstado = new EventEmitter();
  archivos = []; 
  nuevosArchivos:any = [];
  
  public ngDoCheck(): void {
    this.setValue();

  }

  constructor() { 
  }

  ngOnInit(): void {
    this.setValue();
  }
  ngOnChanges() {
    console.log("sdsd");
    this.setValue();
  }

  setValue(){
    if(this.elementos.archivos != "")
    this.archivos = this.elementos.archivos.split(",");
  }

  subirArchivos(event: any){
    let files = event.target.files;
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
    this.enviarEstado.emit(objeto);
    this.nuevosArchivos= []
  }

}
