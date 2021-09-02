


/* Percorrer os pedidos

Para cada pedido mostrar:
    - nome cliente
    - pizza
    - tamanho
    - total
    - status 
*/
function verPedidos(){
    let string=""
    for(let i = 0 ; i < LISTA_PEDIDOS.length ; i++){
        let pedido = LISTA_PEDIDOS[i];

        string+=`Pedido ${i}\n`
        string+=`    Cliente: ${pedido.nomeCliente}\n`
        string+=`    ${pedido.pizza} | tamanho ${pedido.tamanho}\n`
        string+=`    total: R$ ${pedido.total}\n`
        string+=`    status: ${pedido.status}\n`

    }
    alert(string)

}