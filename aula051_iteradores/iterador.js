/*
    Iteradores são objetos que percorrem coleções como arays, maps, sets e strings. Eles usam o método next() para percorrer a coleção e retornar um objeto, para cada iteração, que informa o elemento atual e se a coleção já foi percorrida. Toda coleção possui um iterador.

    OBS: Funções de arrays como map, reduce, forEach, find, some e every usam iteradores internamente. A estrutura for...of usa internamente o iterador da coleção para percorrer os elementos.
*/
const meuArray = [2,1,4,6];
const iterador = meuArray[Symbol.iterator](); // retorna o iterador do array e guarda uma referência para ele na varável

console.log(iterador.next()); // {value: 2, done: false}
console.log(iterador.next()); // {value: 1, done: false}
console.log(iterador.next()); // {value: 4, done: false}
console.log(iterador.next()); // {value: 6, done: false}
console.log(iterador.next()); // {value: undefined, done: true}
