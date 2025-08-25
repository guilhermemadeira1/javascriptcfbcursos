/*
Maps são coleções de dados do tipo chave-valor, onde a chave e o valor podem
ser de qualquer tipo. Um map é instanciado com o operador new.

criando um mapa: const map = new Map();

map.size -> propriedade do número de pares chave-valor do mapa.
map.set(chave, valor) -> insere um novo elemento chave-valor.
map.get(chave) -> retorna o valor com a chave passada.
map.has(chave) -> retorna true se houver um elemento com a chave, se não, retorna false.
map.clear() -> remove todos os elementos do mapa.
map.forEach(callback(valor, chave, mapa)) -> itera sobre cada chave e valor do mapa.
map.keys() -> retorna um iterador para as chaves do mapa.
map.values() -> retorna um iterador para os valores do mapa.
map.entries() -> retorna um iterador para cada chave-valor do mapa.


OBS: Mapas podem ser iterados com for...of 

*/
const mapaFrutas = new Map();

mapaFrutas.set(1, "maçã");
mapaFrutas.set(2, "pera");
mapaFrutas.set(3, "uva");
mapaFrutas.set(4, "banana");

console.log(mapaFrutas); // Map(4) { 1 => 'maçã', 2 => 'pera', 3 => 'uva', 4 => 'banana' }
console.log(mapaFrutas.size); // 4
console.log(mapaFrutas.get(3)); // "uva"
console.log(mapaFrutas.has(5)); // false

console.log("\nIterando com forEach\n");

mapaFrutas.forEach((valor, chave) =>{
    console.log(`chave: ${chave}, valor: ${valor} `);
});
/*
    chave: 1, valor: maçã 
    chave: 2, valor: pera 
    chave: 3, valor: uva 
    chave: 4, valor: banana 
*/
console.log("\nIterando com for...of\n");

for(let [chave, valor] of mapaFrutas){
    console.log(`chave: ${chave}, valor: ${valor} `);
}
