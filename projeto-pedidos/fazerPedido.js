

/*
Versao 1:
- Pedir o nome do cliente
- Selecionar o tamanho da pizza
- Mostrar as opcoes de pizza
- Selecionar a pizza
- Confirmar o pedido
*/

function fazerPedido(){
    let pedido = {}

    pedido.nomeCliente = prompt("Digite o nome do cliente")

    do{
        let string ="Digite o tamanho da pizza:\n";
        string+= "- P: pequena\n";
        string+= "- M: media\n";
        string+= "- G: grande\n"
        pedido.tamanho = prompt(string)
    }while( pedido.tamanho!="P" && pedido.tamanho!= "M" && 
            pedido.tamanho!="G")

    let menuPizza = "Digite uma opcao de pizza \n";
    let tamanhoPizza = pedido.tamanho;

    /* mostrar as opcoes de pizza */
    for(let i = 0 ; i < LISTA_PIZZAS.length ; i++){
        menuPizza+=`${i} - ${LISTA_PIZZAS[i].nome}\n`
        menuPizza+=`   - ${LISTA_PIZZAS[i].ingredientes}\n`
        menuPizza+=`   - Preco: ${LISTA_PIZZAS[i].precos[i]}\n`        
    }

    prompt(menuPizza)
   
}