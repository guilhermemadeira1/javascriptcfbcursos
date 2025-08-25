/*
  Arrays ou vetores em js são coleções de dados heterogênios com tamanho variável que podem armazenar valores primitivos, objetos, funções ou outros arrays. Cada elemento é armazenado numa posição específica (cujo valor é um indice numérico de 0 a n) e pode ser acessado por meio dela.
  
  -- Métodos de modificação:

  array.push() -> adiciona um elemento a partir da última posição.

  array.pop() -> remove o elemento da última posição.

  array.shift(el) -> adiciona um elemento na primeira posição.

  array.reverse() -> reverte o posicionamento dos elmentos.

  array.splice(indiceInicio, quantidadeRemovidos, elAdicionado, elAdicionado..., ...) -> adiciona, remove ou substitui elementos do array. O indiceInicio é o ponto de partida da modificação, a quantidadeRemovidos é o número de elementos removidos a patir do início e o elAdicionado é o elemento inseriodo a partir do inicio. 


  -- Gera um novo array:

  array.slice(indiceInicial, indiceFinal) -> retorna um novo array com elementos recortados do array original pelo intervalo de índices (o último elemento  não entra no novo array quando os dois parâmetros são preenchidos). 
  Quando apenas 1 argumento é passado, ele informa o indice inicial e recorta todos os alementos do início até o fim do array.
  
  O array.slice(-2) retorna um array com os dois últimos elementos.

  array1.concat(array2) -> une dois array num novo array sem remover elementos duplicados.


  -- Métodos de iteração:

  array.find(callback(el, i, arr)) -> retorna o primeiro elemento que atenda ao filtro.

  array.some(callback(el, i, arr)) -> retorna true se houver ao menos um elemento que atenda à verificação, se não, retorna false.  

  array.every(callback(el, i, arr)) -> retorna true se todos os elementos atenderem à verificação, se nãom retorna false.

  array.reduce(callback(acumulador, elAtual, arr), valorInicial) -> reduz os elementos do array a apenas um.

  array.join(substring) -> une os elementos numa string usando uma substring separar os elementos.

  array.toString() -> converte o array em string

  
*/