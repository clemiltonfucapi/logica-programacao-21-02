

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
        //recuperando as pizzas
        let pizza = LISTA_PIZZAS[i];

        menuPizza+=`${i} - ${pizza.nome}\n`
        menuPizza+=`   - ${pizza.ingredientes}\n`
        menuPizza+=`   - Preco: ${pizza.precos[tamanhoPizza]}\n`        
    }
    let opcaoPizza;
    /* validacao de opcaoPizza -> loop infinito */
    do{
        opcaoPizza = parseInt(prompt(menuPizza))
        //se opcaoPizza esta no intervalo dos indices LISTA_PIZZAS
        if(opcaoPizza>=0 && opcaoPizza<LISTA_PIZZAS.length){
            //caso opcaoPizza valido -> sai do loop
            break;
        }else{
            alert("Digite uma opcao valida")
        }
    }while(1)
    let pizza  = LISTA_PIZZAS[opcaoPizza];
    // adicionar a pizza no pedido
    pedido.pizza  = pizza.nome;
    pedido.total = pizza.precos[tamanhoPizza]
    pedido.status="EM ESPERA"

    let stringConfirm = "Deseja confirmar este pedido? \n"
    stringConfirm+=`    - Cliente: ${pedido.nomeCliente}\n`
    stringConfirm+=`    - ${pedido.pizza}\n`
    stringConfirm+=`    - Tamanho: ${pedido.tamanho}\n`
    stringConfirm+=`    - Total: R$ ${pedido.total}\n`

    if(confirm(stringConfirm)){
        // adicionando pedido
        LISTA_PEDIDOS.push(pedido)
        alert("Pedido criado!")
    }else{
        alert("Pedido cancelado!")
    }
   
}