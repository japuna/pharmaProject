import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.sass']
})
export class FiltrosComponent implements OnInit {
  @Output() filtrosEscogido = new EventEmitter();
  @Output() reset = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickEnNumero(event: any){
    console.log(event);
  }
  
  generarFiltros(columna:string, e: any){
    let filterValues={
      "columna": columna,
      "valor": e.target.value
    };
    this.filtrosEscogido.emit(filterValues);
  }
  borrarTodo(){
    this.reset.emit();
  };


  
  
  

}
