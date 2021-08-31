

function cadastrarPizza(){
    alert("cadastrar pizza")
    //listar as pizzas
    let string=""
    /* */
    for(let i = 0 ; i< LISTA_PIZZAS.length ; i++){
        string+= LISTA_PIZZAS[i].nome +"\n";
        string+= "    - "+LISTA_PIZZAS[i].ingredientes + "\n";
        string+="    - Preco P: "+LISTA_PIZZAS[i].precoP +"\n";
        string+="    - Preco M: "+LISTA_PIZZAS[i].precoM +"\n";
        string+="    - Preco G: "+LISTA_PIZZAS[i].precoG +"\n";
    }
    prompt(string)
}