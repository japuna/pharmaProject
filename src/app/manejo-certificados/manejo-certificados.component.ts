import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manejo-certificados',
  templateUrl: './manejo-certificados.component.html',
  styleUrls: ['./manejo-certificados.component.sass']
})
export class ManejoCertificadosComponent implements OnInit {
  @Input() elementos: any;
  constructor() { }

  ngOnInit(): void {
  }

  hola(){
    console.log("hola");
    console.log(this.elementos);

  }

}
