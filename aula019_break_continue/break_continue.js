/*
Instruções de controle de iteração 

*break* e *continue* são instruções de controle para estruturas de decisão (switch) e repetição (for, for-in, for-of, while e do-while).

*break* -> Encerra a execução da estrutura de loop e passa para o próximo comando do programa.

*continue* -> Encerra a iteração atual do loop e passa para a próxima iteração.

Ex:*/

let nums = [1,2,3,4,5,6,7,8];

function exibePares(vetor){
  for (index in nums){
     if (typeof(nums[index]) != 'number'{
         break;
     }
     else if (num[Index] % 2 == 0){
          console.log(nums[index]);
     }
     else{
          continue;
     }
  }
}
exibePares(nums);  //-> 2,4,6,8


/*A função exibePares() recebe um vetor numérico e exibe apenas os números pares em uma estrutura de loop.

1- A cada iteração do loop, a função avalia se o valor atual é numérico, se não for, o loop é encerrado.

2- Caso o valor seja numérico, a função a avalia se o número é par. Caso seja par, o valor é exibido, se não, a função não exibe o número e passa para a próxima iteração.
*/