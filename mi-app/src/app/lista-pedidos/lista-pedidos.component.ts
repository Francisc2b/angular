import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
  providers:[LogService]
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  estadoListadoPedidos: String = 'entregado';
  modoNuevo: boolean = true;

  //INJECTA UNA INSTANCIA DE LOGSERVICE
  constructor(private log: LogService, 
              private pedidosService: PedidosService,
              private router: Router) {
        this.pedidos = pedidosService.getAll();
  }

  ngOnInit(): void {

    console.log("............");
    var a: any = 1;
    var b: any = '1';
    console.log("a == b: " + (a == b));
    console.log("a === b: " + (a === b));
  }

  public onAltaPedido(): void {
    //console.log('abrir formulari edicion pedido');
    this.log.info("Abrir formulario alta nuevo pedido");
    this.router.navigate(['/pedido/edit']);

  }

  public onTerminoEntrega(id: number){
    console.log(" me notifican que ha cambiado pedido " + id);
    this.pedidos = this.pedidosService.getAll();
  }

}
