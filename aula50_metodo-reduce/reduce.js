/*
    Metodo reduce

    function callback( <elemento anterior/acumulador>, <elemento atual>, <indice atual (opcional)>, <array (opcional)> ){
        return <logica de redução>;
    }
        
    <array>.reduce(callback, <valor inicial do acumulador (opcional)>);

    -> reduz os elementos de um array em um único valor utilizando uma função que atualiza um acumulador ao percorrer os elementos. O valor final do acumulador será o resultado da redução.

    OBS: Se o reduce não receber um valor inicial, o valor será o primeiro elemento do array.

*/
const nums = [1,2,3,4,5,6,7];
const soma = nums.reduce((ant, atual)=> ant + atual); 
console.log(soma); //28