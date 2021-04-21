import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  @Output() registrando = new EventEmitter();
  model = {
    nombre: "",
    user: "",
    password: "",
    repeatPassword: "",
    cargo: "",

  };
  constructor() { }

  ngOnInit(): void {
  }

  registrarse (formVal : any){
    console.log(formVal);
    this.registrando.emit(false);

  }

}
