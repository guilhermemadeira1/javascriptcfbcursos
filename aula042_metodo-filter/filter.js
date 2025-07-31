/*
Método filter 

Método exclusivo para arrays (objetos da classe Array.prototype) que recebe uma função callback filtradora e retorna um novo array com os elementos filtrados do array original. 

O filtro é estabelecido com base na expressão lógica de retorno da função filtradora, que avalia e seleciona os elementos que atendem à condição. 

A função callback pode receber até 3 argumentos: o elemento avaliado, seu índice e o array de origem.

Ex: 
*/

array.filter(function filtragem(elemento, índice, array){
     let elementoFiltrado = 
        elemento%10 == 0;
     return elementoFiltrado;
});

array.filter(elemento => elemento%10==0);

/*
  Função callback é uma função declarada como argumento de outra para executar alguma tarefa ou retornar  valor para a função do escopo anterior.
*/