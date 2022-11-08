import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos: Pedido[] = [];



  constructor() { 
    this.pedidos = [
      {
        id: 1,
        user: "luis",
        desc: "pizza",
        fechaPedido: new Date(),
        entregado: false
      },
      {
        id: 2,
        user: "luis",
        desc: "Moto",
        fechaPedido: new Date(),
        entregado: true
      },
      {
        id: 3,
        user: "Maite",
        desc: "Camisa",
        fechaPedido: new Date(),
        entregado: false
      }
    ];
  }

  public getAll(): Pedido[]{
     return this.pedidos;
  }

  public add(p: Pedido){    
    this.pedidos.push(p);
  }

  public cambiarEstadoPedido(id: number, entregado:boolean){
    this.pedidos.forEach(p => {
       if(p.id == id) { 
        p.entregado = entregado;
       }
    });
  }

  public getPedido(idPed: number): Pedido{      
    var pedido !: Pedido;
    this.pedidos.forEach(p => {
      if(p.id == idPed) { 
       pedido = p;
      }
    });
    return pedido;
  }

}
