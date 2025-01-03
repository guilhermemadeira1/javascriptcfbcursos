/*Funções anônimas

Funções anônimas são funções declaradas sem nome e são úteis para executar instruções localmente. Funções anônimas podem ser chamadas pelo identificador da variável em que está contida. São bastante utilizacas como funções callback declaradas e executadas localmente.

função callback -> função passada como argumento de outras funções.

*/
const soma = function( v1, v2 ) { return v1+v2 };
console.log(soma(2,3)); //-> 5
