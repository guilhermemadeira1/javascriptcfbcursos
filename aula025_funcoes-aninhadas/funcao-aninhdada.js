//Função aninhada 

const somar = (...valores){

    let result = 0;
    const soma = (vetorVal){

       for(v of vetorVal) result += v;
       return result;
      }
   return soma(valores);
}

console.log(somar(2,2,2,2));  //-> 8

/*

1- A função somar() recebe uma quantidade indefinida de argumentos no parâmetro rest, que serão armazenados no vetor da função interna soma().

2- A função declarada internamente na função somar() recebe o array do parâmetro rest com os valores recebidos pela função somar(). A função interna itera sobre os valores incrementado eles na variável result.

3- A função somar() quando chamada, chama a função interna e retorna o retorno da função interna.


OBS: 

1- Os parênteses são opcionais quando o "for" possuir apenas uma instrução.

2- O parâmetro rest agrupa um número indefinido de argumentos de uma função num só array, que pode ser acessado posteriormente.

*/