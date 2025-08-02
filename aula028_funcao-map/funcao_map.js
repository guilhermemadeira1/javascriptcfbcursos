/*
Função map

O map() é uma função do objeto Array.prototype utilizada para criar um novo array ao mapear os elementos de outro já existente. Na prática, map() recebe como argumento uma função mapeadora e a aplica para cada elemento do array que a executa, e por fim, armazena os valores retornados num novo array.

A função mapeadora pode receber até três argumentos: o elemento atual, índice do elemento atual e o vetor de origem. 

Formas de se declarar a função map(): 

1- Sintaxe padrão:

     vetor.map(funcaoMapeadora(elemento, índice, vetor) => retorno);

2- Mapeando sobre o elemento atual:

     vetor.map(funcaoMapeadora(elemento => retorno);

3- Mapeando sobre o índice do elemento atual:

     vetor.map(funcaoMapeadora((elemento, índice) => retorno);

Ex:
*/
const nums = [1,2,3,4,5]

let doubleNums = nums.map((e, i, nums) => e*2);

//e -> elemento, i -> índice 

let numsIndexes = nums.map((e,i) => i);
let halfNums = nums.map(e => e/2);
let doubleNums = nums.map(e => e*2);
let halfNums = nums.map(e=> e/2);
let squareRootNums = nums.map(e => Math.sqrt(e));
let strNums = nums.map(e => e.toString());


console.log(nums);  //-> 1, 2, 3, 4, 5
console.log(halfNums);  //-> 0.5, 1, 1.5, 2, 3.5
console.log(doubleNums);  //-> 2, 4, 5, 8, 10
console.log(strNums);  //-> '1', '2',  '3', '4', '5'
console.log(squareRootNums); //-> 1, 1.41423..., 1.732050..., 2, 2.23606...
console.log(numsIndexes); //-> 0, 1, 2, 3, 4