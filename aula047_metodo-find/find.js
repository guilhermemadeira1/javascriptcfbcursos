/*
metodo find

 <array>.find((<elemento>, <index atual>, <array>) =>{
    return <filtro elemento>;
});
    -> filtra o primeiro elemento que atende á condição de retorno da função callback.
*/
const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.find(n => n > 5)); // 6

