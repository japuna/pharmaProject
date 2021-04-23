import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  @Output() registrando = new EventEmitter();
  model = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registrarse (formVal : any){
    console.log(formVal);
    this.registrando.emit(false);
    this.http.post<any>("https://6d184d736a3f.ngrok.io/api/register", formVal)
    .subscribe((result:any)=>{
      console.warn("result",result)
    })
    
  }

}
