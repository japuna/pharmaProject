import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  model = {
    email: "",
    password: ""
  };

  login (formVal : any){
    console.log(formVal);
    console.log('model', this.model);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
