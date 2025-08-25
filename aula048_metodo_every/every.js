/*
 Metodo every

    <array>.every((<elemento>, <index atual>, <array>) =>{
        return <filtro dos elementos>;
    });

    -> retorna true se todos os elementos estiverem de acordo com o filtro indicado, caso contrário, retorna false.
*/
const idades = [11, 32, 21, 18, 80];
console.log(idades.every(idade => idade > 18)); // false