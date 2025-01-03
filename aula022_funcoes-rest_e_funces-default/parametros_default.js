/*
Valores default em funções 

Valores default podem ser úteis em funções matemáticas que recebem valores numéricos como argumento, pois uma função matemática sem valores numéricos recebe valores undefined como argumento e retorna um valor NaN (visto que undefined + qualquer valor resulta em NaN).*/

function soma1(n1= 0, n2 = 0){
    return n1+n2;
}
function soma2(n1,n2){
    return n1+n2;
}
console.log(soma1());  //-> 0
console.log(soma2());  //-> NaN

/*
soma1() retorna 0 quando chamada sem argumentos, visto que recebe 0 como valores padrão. Mesmo com valores padrão, a função ainda pode receber outros valores inicializados como argumento.

soma2() retorna NaN quando chamada sem argumentos, visto que não possui valores inicializados como argumentos e nem valores padrão, por isso recebeu undefined em cada parâmetro. Qualquer operação matemática com valores undefined resulta em NaN.
*/