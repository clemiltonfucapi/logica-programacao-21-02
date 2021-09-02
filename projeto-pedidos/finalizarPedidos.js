


function finalizarPedidos(){
    let string="SELECIONE UM PEDIDO \n"
    for(let i = 0 ; i < LISTA_PEDIDOS.length ; i++){
        let pedido = LISTA_PEDIDOS[i];
        if(pedido.status=="EM ESPERA"){
            string+=`Pedido ${i}\n`
            string+=`    Cliente: ${pedido.nomeCliente}\n`
            string+=`    ${pedido.pizza} | tamanho ${pedido.tamanho}\n`
            string+=`    total: R$ ${pedido.total}\n`
            string+=`    status: ${pedido.status}\n`
        }
    }

    let opcaoPedido;
    while(1){
        opcaoPedido = parseInt(prompt(string))
        if(opcaoPedido>=0 && opcaoPedido < LISTA_PEDIDOS.length){
            //opcaoPedido é valido -> sai do loop
            break;
        }else{
            alert("DIgite uma opcao valida")
        }
    }
    let pedido = LISTA_PEDIDOS[opcaoPedido];
    if(confirm("Deseja finaliza o pedido " + opcaoPedido)){
        LISTA_PEDIDOS[opcaoPedido].status="FINALIZADO"
        alert("Pedido finalizado")
    }
}

