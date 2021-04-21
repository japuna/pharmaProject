import { Component, Output, EventEmitter } from '@angular/core';

export interface Productos {
  correo: string;
  contrasena: string;
}

let credenciales: Productos[] = [
  {correo: "julio", contrasena: 'teoria' },
  {correo: "admin", contrasena: 'admin' },
  {correo: "otro", contrasena: 'otro' }
];



@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})



export class LoginComponent {
  conectado: boolean = true;
  @Output() hideShow = new EventEmitter();
  @Output() registrando = new EventEmitter();
  
  model = {
    email: "",
    password: ""
  };

  login (formVal : any){
    this.conectado = false;
    for(let i =0; i<credenciales.length; i++){
      let element = credenciales[i];
      
       if(formVal.email == element.correo && formVal.password == element.contrasena) {
        this.conectado = true;
       }else{
       }
    }

    this.hideShow.emit(this.conectado);
    
  }

  registrar(){
    this.registrando.emit(true);
  }

  

  constructor() { }

  

}
