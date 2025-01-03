/*

Arrow functions são funções anônimas declaradas com a sintaxe:

(parâmetros) => {instruções}


Formas de declarar uma arrow function:


1- Arrow function declarada sem parâmetro ou com 2 ou mais parâmetros, os colchetes são obrigatórios

2- Arrow function declarada com apenas 1 parâmetro, os colchetes são opcionais.

3 - Arrow function com apenas uma instrução, as chaves são opcionais.

4 - Arrow function apenas com instrução de retorno, a palavra chave "return" é opcional.


*/
 const soma = (v1,v2)=>{return v1+v2}; //arrow function padrão

 const add10 = n =>{return n+10}; //arrow function com apenas 1 parâmetro, os parentes são opcionais

 const imprimeDez = () => {console.log(10)}; //arrow function sem parâmentros, os parênteses são obrigatórios.

 const imprimeCinco = () => console.log(5); //arrow function com apenas 1 instrução, as chaves são opcionais.

 const retornaDobro = n => n*2; //arrow function apenas com instrução de retorno, a palavra-chave return é opcional


 console.log(soma(10,15)); //->25
 console.log(add10(50)); //-> 60
 imprimeDez(); //-> 10
 imprimeCinco(); //-> 5
 console.log(retornaDobro(6)); //-> 12
