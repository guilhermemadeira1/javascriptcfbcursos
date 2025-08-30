/*
Objetos são tipos de dados compostos com atributos e métodos definidos 
por uma classe. A classe é o tipo do objeto e serve de molde para criar de instâncias independentes.
Os atributos são variáveis que armazenam dados específicos de uma instância 
e os métodos são operações que a instancia pode executar dentro do sistema, geralmente manipulando ou retornando dados do objeto.


Em js, há 3 formas de se criar um objeto usando:

Classes

Defindo a classe com a palavra class e instanciando o objeto com o operador new. 
O operador new invoca o método construtor da classe, responsável por inicializar os atributos com valores default (padrão). Os atributos são inicializados com this (a referência do objeto). 

O construtor é uma função chamada quando o objeto é instanciado e serve para inicializar valores de atributos. É definido com a sintaxe: constructor(paremetros){}.

OBS: A palvra class permite o uso de herança e foi adicionada no ES6 (EcmaScript 6) em 2015.
*/

class Pessoa1{
    constructor(p_nome, p_idade, p_peso){
        this.nome = p_nome;
        this.idade = p_idade;
        this.peso = p_peso;
    }
    getNome(){
        return this.nome;
    }
    setNome(p_nome){
        this.nome = p_nome;
    }
    getIdade(){
        return this.idade;
    }
    setIdade(p_idade){
        this.idade = p_idade;
    }
    getPeso(){
        return this.peso;
    }
    setPeso(p_peso){
        this.peso = p_peso;
    }
    apresentar(){
        console.log(`${this.nome} tem ${this.idade} anos e pesa ${this.peso}Kg.`);
    }
}

const p1 = new Pessoa1("João", 30, 78.6);

p1.apresentar();

console.log("Nome: " + p1.nome);
console.log("Idade: " + p1.idade);
console.log("Peso: " + p1.peso + "\n");

// console.log("Nome: " + p1.getNome());
// console.log("Idade: " + p1.getIdade());
// console.log("Peso: " + p1.getPeso() + "\n");

/*
Objetos literais 

Criando o objeto e inicializando os atributos diretamente sem 
instanciar a classe com operador new. 
Os atributos podem ser acessados ou inicializados
com a sintaxe (objeto.atributo) ou (objeto["atributo"]) e separados por vírgula. 

OBS: Os atributos são armazenados em variávels com a sintaxe 
(propriedade: valor) e os métodos (metodo() ou propriedade: metodo()).
*/

const p2 = {
    nome: "Maria",
    idade: 25,
    peso: 67.9,
    getNome(){
        return this.nome;
    },
    setNome(p_nome){
        this.nome = p_nome;
    },
    getIdade(){
        return this.idade;
    },
    setIdade(p_idade){
        this.idade = p_idade;
    },
    getPeso(){
        return this.peso;
    },
    setPeso(p_peso){
        this.peso = p_peso;
    },
    apresentar(){
        console.log(`${this.nome} tem ${this.idade} anos e pesa ${this.peso}Kg.`);
    }
}
p2.apresentar();

console.log("Nome: " + p2.nome);
console.log("Idade: " + p2.idade);
console.log("Peso: " + p2.peso + "\n");

// console.log("Nome: " + p2.getNome());
// console.log("Idade: " + p2.getIdade());
// console.log("Peso: " + p2.getPeso() + "\n");


/*
Funções construtoras

Classes podem ser definidas sem a palavra class usando funções, mas o objeto ainda é instanciado com operador new.
O nome/variável da função define o nome da classe e os parâmetros da função
definem os parâmetros do construtor. Os métodos e atributos são inicializados com this (a 
referência do objeto) e separados por vírgula.

OBS: Os métodos e atributos são armazenados em variávels com a sintaxe 
(this.propriedade = valor).
*/

const Pessoa3 = function(p_nome, p_idade, p_peso){
    this.nome = p_nome,
    this.idade = p_idade,
    this.peso = p_peso,
    
    this.getNome = function(){
        return this.nome;
    },
    this.setNome = function(p_nome){
        this.nome = p_nome;
    },
    this.getIdade = function(){
        return this.idade;
    },
    this.setIdade = function(p_idade){
        this.idade = p_idade;
    }
    this.getPeso = function(){
        return this.peso;
    }
    this.setPeso = function(p_peso){
        this.peso = p_peso;
    }
    this.apresentar = function(){
        console.log(`${this.nome} tem ${this.idade} anos e pesa ${this.peso}Kg.`);
    }
}

const p3 = new Pessoa3("José", 60, 79.0);

p3.apresentar();

console.log("Nome: " + p3.nome);
console.log("Idade: " + p3.idade);
console.log("Peso: " + p3.peso + "\n");

// console.log("Nome: " + p3.getNome());
// console.log("Idade: " + p3.getIdade());
// console.log("Peso: " + p3.getPeso() + "\n");

/*
OBS: Arrow function não tem this próprio, isso significa que não podem ser usadas como funções construtoras e nem acessar atributos dela. 
*/