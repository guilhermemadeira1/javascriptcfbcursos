/*
Sets ou conjuntos são coleções de elementos iterados em ordem de inserção, como os arrays, mas não permitem elementos duplicados. É instanciado com o construtor Set() recebendo um iterável como argumento.

criando um set: const set = new Set([]);

set.size -> propriedade que retorna  
set.add(el) -> insere um novo elemento que ainda não exista.
set.has(el) -> retorna true se um elemento existir, se não, retorna false.
set.delete(el) -> deleta um elemento específico.
set.clear() -> remove todos os elementos.
set.forEach(callback(el, set)) -> itera sobre cada elemento do conjunto.


*/
const setFrutas = new Set(["maçã","uva","pera","banana"]);
setFrutas.add()
setFrutas.has()
setFrutas.delete()
setFrutas.forEach()
setFrutas.clear()
setFrutas.entries()
setFrutas.keys()
setFrutas.values()