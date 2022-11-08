
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css'],
})
export class ItemPedidoComponent implements OnInit {

  @Input() id: number = 0;
  @Input() descripcion: string = '';
  @Input() entregado: boolean = false;
  
  //Emisor de eventos y paso el id del pedido modificado
  @Output() entregaRealizada: EventEmitter<number> =
                     new EventEmitter<number>();

  constructor(private log: LogService,
              private  pedServ: PedidosService) { }

  ngOnInit(): void {
  }

  onEntregarPedido(){
     this.log.info(' llamar a un servicio que diga que esta entregado');
     this.pedServ.cambiarEstadoPedido(this.id, true);
     //emito un evento para que el padre sepa que he entregado
     this.entregaRealizada.emit(this.id);
  }

}
