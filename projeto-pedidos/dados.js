


var LISTA_PIZZAS = [
    /* cada elemento é um objeto -> pizza  */
    {
        nome: "Pizza Calabresa",
        ingredientes: "calabreasa,muçarela, cebola, molho de tomate",
        precos: {
            "P":25,
            "M":35,
            "G":45
            /* organizando os preços dessa maneira, o acesso a 
            eles fica mais simples
            ex: LISTA_PIZZAS[0].precos['P']
                - Preço da pizza pequena do primeiro elemento
            */
        }
    },
    {
        nome: "Pizza Portuguesa",
        ingredientes:"tomate, ovo, ervilha, queijo, presunto",
        precos: {
            "P":25,
            "M":35,
            "G":45
        }
    },
    {
        nome: "Pizza Frango Catupiri",
        ingredientes: "frango desfiado com catupiry",
        precos: {
            "P":30,
            "M":40,
            "G":50
        }
    }
]