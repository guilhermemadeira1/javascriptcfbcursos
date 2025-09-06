/*

Em js, objetos (literais ou não) e funções são armazenados como referências para um espaço em memória (ponteiros), enquanto dados primitivos como strings, números e boleanos são copiados para espaços de memória diferentes. 

Dados primitivos são tipos imutáveis, por isso são copiados. Funções e objetos são tipos mutáveis, pois permitem modificar o mesmo dado usando múltiplas variáveis. 

Dados primitivos: number, string, boolean, null, undefined, symbol e bigint.

*/
const minhaFuncao = () => {}; 
const variavel2 = minhaFuncao; // ambos armazenam a mesma referencia para a função.

const meuObj = {}; 
const variavel3 = meuObj; // ambos armazenam a mesma referência para o objeto.

const meuTexto = "olá mundo";
const textoCopiado = meuTexto; // o valor primitivo é copiado, criando uma nova referência de memória.
/*
Mesma coisa que: 
    const meuTexto = "olá mundo"; 
    const textoCopiado = "olá mundo";
*/
const meuNumero = 1.423211123;
const numeroCopiado = meuNumero; // armazena uma cópia do valor de meuNumero

const meuBoleano = true;
const boleanoCopiado = meuBoleano; // armazen uma cópia do valor de meuBoleano