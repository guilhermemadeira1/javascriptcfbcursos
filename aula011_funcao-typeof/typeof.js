/*
Função *typeof(valor)* retorna uma string que corresponde ao tipo de um valor, seja:

*number* -> números inteiro e de ponto flutuante. Também inclui valores especiais como NaN (Not a Number) e Infinity.

*string* -> qualquer valor envolto por aspas simples(''), duplas("") ou crases (``). As crases permitem interpolação dinâmica de valores inseridos nos placeholders "${}" da string.

*boolean* -> valores true ou false

*undefined* -> valor não inicializado ou inacessível numa variável ou constante.

*null* -> valor não inicializado intencionalmente com a palavra chave "null". Apesar de "null" ser um valor primitivo, a função typeof() o retorna como um object.

*object* -> conjunto de pares chave e valor, onde um valor qualquer é identificado por um valor chave. Inclui objetos com {}, objetos instância de classes e vetores [].

*/

//programa que verifica se o valor é um número 
let n = Number(prompt("Digite um numero: "));
typeof(n)== "number" && !(isNaN(n))? console.log("É um número"): console.log("Não é um número");