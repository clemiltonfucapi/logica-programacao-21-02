# Javascript - Vetores Resolução de Exercicios

## Faça um programa que leia 2 vetores de 5 posições. Ao final o programa deve montar um 3º vetor com a soma dos dois.

```javascript
var vetor1 = new Array(5)
var vetor2 = new Array(5)
/* leitura do vetor 1*/ 
for(let i = 0 ; i < 5 ; i++){
    vetor1[i] = parseFloat(prompt(`${i+1}º numero do vetor 1`))
}

/* leitura do vetor 2*/ 
for(let i = 0 ; i < 5 ; i++){
    vetor2[i] = parseFloat(prompt(`${i+1}º numero do vetor 1`))
}
//cria um vetor vazio
var vetorSoma = [];
for(let i = 0 ; i< 5 ; i++){
    //guardar a soma do vetor1 e vetor 2
    // vetorSoma[i] = vetor1[i] + vetor2[i] 
    vetorSoma.push(vetor1[i] + vetor2[i]);
}

console.log(vetor1)
console.log(vetor2)
console.log(vetor3)

```

## Faça um programa que leia os nomes e as nota final de 10 pessoas. Armazene cada informação em um vetor.  Crie um terceiro vetor que diga que se o aluno está aprovado(nota>=6), de recuperação ( nota<6 e nota>4) ou reprovado( nota >4)

```javascript
    var QTD_ALUNOS=5
    var nomes = new Array(QTD_ALUNOS)
    var notas = new Array(QTD_ALUNOS)
    var situacao = new Array(QTD_ALUNOS)

    for( let i = 0 ; i<QTD_ALUNOS ;i++){
        nomes[i] = prompt("Digite o nome do aluno "+(i+1))
        notas[i] = parseFloat(prompt("Digite a média do aluno "+ (i+1)))

        /* adicionando estados */
        if(notas[i]>=6){
            situacao[i] = "APROVADO"
        }else if(notas[i]<6 && notas[i]>=4){
            situacao[i] = "RECUPERACAO"
        }else{
            situacao[i] = "REPROVADO"
        }
    }

    /* Impressao dos resultados */
    for(let i = 0 ; i<QTD_ALUNOS ; i++){
        console.log(`${nomes[i]} ; Media=${notas[i]} ; Situacao:${situacao[i]}\n`)

    }
```
# Objetos
- Objetos são como uma espécie de "super variáveis" que armazenam uma "coleção de valores" referenciados por nome, e que podem ser recuperados para serem utilizados em diversas outras partes de um programa.
- Em JavaScript praticamente qualquer tipo de dado é um objeto.

## Olhar slide 40 à 44

## Exemplo 7 - Com objetos
```javascript
   var qtd = 5
    var alunos = new Array(qtd)

    for(let i = 0 ; i < qtd ; i++){
        //criando objeto vazio
        let aluno = new Object();

        aluno.nome = prompt("Digite o nome do aluno " + (i+1))
        aluno.media = prompt("Digite a media do aluno "+(i+1))

        /* adicionando estados */
        if(aluno.media>=6){
            aluno.situacao = "APROVADO"
        }else if(aluno.media<6 && aluno.media>=4){
            aluno.situacao = "RECUPERACAO"
        }else{
            aluno.situacao = "REPROVADO"
        }

        //adicionando objeto no vetor alunos
        alunos[i]=aluno
    }

    for(i=0 ; i < alunos.length ; i++){
        console.log(`Nome: ${alunos[i].nome} | Media: ${alunos[i].media}`+
                    ` | Situacao: ${alunos[i].situacao}`)
    }
```