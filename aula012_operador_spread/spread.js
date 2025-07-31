/*
Operador spread 

*Spread (...)* -> Operador usado para "espalhar" valores ou propriedades de iteráveis (objetos e arrays). Utilidades:

1 - Unir valores de vetores em um novo vetor

Ex:  let v1 = [1, 2, 3];
       let v2 = [4, 5, 6];
       let v3 = [ ...v1, ...v2, 7, 8];

      console.log(v3); 

      Saída:  1,2,3,4,5,6,7,8

Os valores de cada vetor são concatenados e unidos aos valores do novo vetor (se houver).


2 - Unir propriedades de objetos em um novo objeto

Ex:  let obj1 = {a: 2, b: 2, c:3};
       let obj2 = {a: 1, b: 2, d: 4};
       let ob3 = { *...obj1*, *... obj2* };

      console.log(obj3);

      Saída:  { a:1, b:2, c: 3, d:4 }

Com propriedades iguais, o novo objeto recebe o valor de propriedade do último objeto concatenado.

Com propriedades diferentes, o novo objeto recebe cada propriedade distinta com seu respectivo valor.


3 - Distribuir valores de vetor em parâmetros de funções.

Ex:  let vetor = [5,5,5]
       let somar3 = function  (n1,n2,n3){
        return n1+n2+n3; 
       }
      console.log(somar3(*...vetor*)); 

      Saída:  15

A função somar3() só funciona se receber 3 argumentos nos parâmetros.
*/

let v1 = [1, 2, 3];
let v2 = [4, 5, 6];
let v3 = [...v1, ...v2, 7, 8];

console.log(v3); // [1, 2, 3, 4, 5, 6, 7, 8]

let obj1 = { a: 2, b: 2, c: 3 };
let obj2 = { a: 1, b: 2, d: 4 };
let obj3 = {...obj1, ...obj2};

console.log(obj3); //{a: 1, b:2, c:3, d:4}

let vetor = [5,5,5];
let somar3 = (n1,n2,n3) =>{return n1+n2+n3};
console.log(somar3(...vetor)); // 15
