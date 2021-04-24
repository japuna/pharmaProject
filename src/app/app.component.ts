import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  conectado:boolean = false;
  registro:boolean = false;
  title = 'pharmaProject';
  

  ocultarPlugin(bandera:boolean){
    this.conectado = bandera;
  }
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(router.url==="/"){
        this.conectado = false;
      } 
    });
  }

  registrando(event:any){
      this.registro=event;
  }



  
}
