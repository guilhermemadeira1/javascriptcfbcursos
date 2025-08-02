/* 
Parâmetros rest em JS permitem atribuir um número indefinido de argumentos a uma função através de um array com três pontos(...). Para isso,
utiliza-se o operador spread antes do parâmetro para distribuir os valores do vetor.*/

function soma(...valores) {
    //valores é o vetor que recebe os valores de quantidade indefinida
    let soma = 0;
    for (n of valores) {
        soma += n;
    }
    return soma;
}
console.log(soma(2, 2)); //-> 4
console.log(soma(5, 5, 5)); //-> 15
console.log(soma(4, 2, 1, 3)); //-> 10

/*Para atribuir os valores de outro vetor no vetor do parâmetro da função com parâmetro rest, utiliza-se o operador spread para distribuir os valores como argumento.*/

let nums = [1, 2, 3, 4, 5];
console.log(soma(...nums));

/*
OBS: Não confundir parâmetros rest com operador spread.

1- Um parâmetro Rest é a combinação de três pontos (...) com um parâmetro de função que permite atribuir uma quantidade indefinida de argumentos a uma função.

2- Spread (...) é um operador composto por três pontos que distribui os elementos de um vetor em valores individuais que podem ser passados como argumentos de funções.
*/
