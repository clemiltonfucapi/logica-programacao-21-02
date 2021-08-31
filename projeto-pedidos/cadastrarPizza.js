

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

    do{
        pizza.precoP = parseFloat(
            prompt("Digite o preço da pizza pequena")
        )
    }while(  isNaN(pizza.precoP) )

    do{
        pizza.precoM = parseFloat(
            prompt("Digite o preço da pizza media")
        )
    }while(  isNaN(pizza.precoM) )

    do{
        pizza.precoG = parseFloat(
            prompt("Digite o preço da pizza grande")
        )
    }while(  isNaN(pizza.precoG) )
    //INSERIR na LISTA_PIZZAS
    LISTA_PIZZAS.push(pizza)
}