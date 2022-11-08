import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  pedido: Pedido;
  
  constructor() {
    this.pedido = {id:0, desc:'', user:'Luis',fechaPedido: new Date(), entregado:false};
   }

  ngOnInit(): void {

  }

  public onUpdateDescricpionPedido(event: any): void{
    console.log(event.target);
    console.log(event.target.value);
    this.pedido.desc = event.target.value; //input text
  }


}
