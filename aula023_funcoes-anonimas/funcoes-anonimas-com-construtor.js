/*Funções anônimas com construtor 

Outra forma de se declarar funções anônimas é com o método construtor da classe Function. 
Sua sintaxe consiste em criar um objeto Function através do método construtor recebendo como parâmetro os parâmetros da função e por último a instrução a ser executada.*/

const soma = new Function('v1', 'v2', 'return v1+v2' );
console.log(soma(2,3)); // -> 5

/*OBS:

1-  Todos os argumentos do construtor de função são passados como strings. 

2- O último argumento sempre será a instrução a ser executada, enquanto os anteriores serão os parâmetros da função.
3- O método construtor da classe Function retorna uma função anônima
*/