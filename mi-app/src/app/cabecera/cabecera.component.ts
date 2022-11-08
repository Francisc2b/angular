import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  titulo = 'Gestión de Pedidos';  

  constructor() { }

  ngOnInit(): void {

  }

}
