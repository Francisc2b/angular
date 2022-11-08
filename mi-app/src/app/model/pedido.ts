/*
{
        "id": 1,
        "user": "luis",
        "desc": "pizza",
        "fechaPedido": null,
        "entregado": false
    },

*/


export interface Pedido {
    id: number;
    user: String;
    desc: String;
    fechaPedido: Date;
    entregado: boolean;
}
