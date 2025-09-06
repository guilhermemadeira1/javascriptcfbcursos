/*
    Prototype é o mecanismo que permite que objetos compartilhem métodos e atributos
    dinamicamente através de seu protótipo. O protótipo é uma referência ao objeto que armazena esses métodos e atributos globalmente para todos os objetos derivados do mesmo
    protótipo.

    Um protótipo também pode ter um protótipo, criando assim a cadeia de prtótipos (prototype chain).

    Quando um objeto tenta acessar um método ou atributo, a linguagem verifica se o objeto o possui, caso contrário, verifica se o protótipo possui ou então percorre a cadeia de
    protótipos até encontrar ou chegar no final da cadeia, o Object.prototype. Se não for
    encontrado na cadeia, a referência será null.

    Como acessar o protótipo de um objeto:

    ClasseObjeto.prototype -> acessa o prototype da classe/função construtora do objeto.
    OBS: Em js, as classes são tratadas como funções construtoras internamente. Todas as funções possuem o protótipo Function.prototype.
    
    Object.getPrototypeOf(objeto) -> retorna o prototype do objeto (recomendado).

    objeto.__proto__ -> acessa o prototype do objeto diretamente (não recomendado).

    Criando um objeto a partir de um prototipo existente:

    Object.crate(prototipo) -> retorna um objeto com um determinado prototipo sem executar a função construtora.

    OBS: Todos os protótipos built-in da linguagem são modificávels, como o Object.prototype, Array.prototype e Function.prototype. 
    Não é recomendado modificar os protótipos da linguagem pois pode afetar o protótipo de outros objetos como arrays ou funções.

*/

const Pessoa = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.dizerOi = function(){
    console.log(`Olá, meu nome é ${this.nome}!`);
}

//OBS: Ao usar arrow function num metodo de classe, o this não referencia o objeto mas sim o escopo de onde foi inicializada

Pessoa.prototype.tipo = "Humano"; 

const p1 = new Pessoa("Ana", 30);
p1.dizerOi(); // Olá, meu nome é Ana!

const p2 = new Pessoa("João", 34);
p2.dizerOi(); // Olá, meu nome é João!

console.log(p1.tipo); // Humano
console.log(p2.tipo); // Humano


const p3 = Object.create(Pessoa.prototype); // cria um objeto com prototipo de Pessoa.prototype sem usar a função construtora

console.log(Object.getPrototypeOf(p3)); // imprime o mesmo objeto protótipo de Pessoa

p3.nome = "Pedro";
p3.peso = 80.6;
p3.dizerOi(); // Olá, meu nome é Pedro!
