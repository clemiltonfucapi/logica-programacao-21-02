

function cadastrarPizza(){
    //listar as pizzas
    let string="LISTA DE PIZZAS: \n"
    
    for(let i = 0 ; i< LISTA_PIZZAS.length ; i++){
        string+= LISTA_PIZZAS[i].nome +"\n";
        string+= "    - "+LISTA_PIZZAS[i].ingredientes + "\n";
        string+="    - Preco P: "+LISTA_PIZZAS[i].precos['P'] +"\n";
        string+="    - Preco M: "+LISTA_PIZZAS[i].precos['M'] +"\n";
        string+="    - Preco G: "+LISTA_PIZZAS[i].precos['G'] +"\n";
    }
    alert(string)
    
    /*criar uma pizza(objeto) vazia */
    let pizza = {}
    do{
        pizza.nome = prompt("Digite o nome da pizza")
    }while(pizza.nome=="");

    do{
        pizza.ingredientes = prompt("Digite os ingredientes da pizza")
    }while(pizza.ingredientes=="")

    pizza.precos = {};
    do{
        pizza.precos['P'] = parseFloat(
            prompt("Digite o preço da pizza pequena")
        )
    }while(  isNaN(pizza.precos['P']) )

    do{
        pizza.precos['M'] = parseFloat(
            prompt("Digite o preço da pizza media")
        )
    }while(  isNaN(pizza.precos['M']) )

    do{
        pizza.precos['G'] = parseFloat(
            prompt("Digite o preço da pizza grande")
        )
    }while(  isNaN(pizza.precos['G']) )
    
    //INSERIR na LISTA_PIZZAS
    let stringConfirm="Deseja adicionar a pizza?\n";
    stringConfirm += "Nome: "+ pizza.nome +"\n";
    stringConfirm += "Ingredientes: "+ pizza.ingredientes + "\n";
    stringConfirm += "Preco P: "+pizza.precos['P'] + "\n";
    stringConfirm += "Preco M: "+pizza.precos['M'] + "\n";
    stringConfirm += "Preco G: "+pizza.precos['G'] + "\n";
    
    if( confirm(stringConfirm) ){
        LISTA_PIZZAS.push(pizza)
        alert("Pizza adicionada!")
    }

    
}