/*
    Classe Abstrata é uma classe especial que não pode ser instanciada e serve apenas
    ser extendida ou definir um contrato de implementação para suas subclasses. Ou seja, a subclasse 
    além de herdar métodos e atributos da classe base, é obrigada a implementar seus métodos abstratos 
    (métodos sem implementação).

    Um erro é gerado quando uma classe abstrata é instanciada ou uma de suas sublasses não implementou 
    algum método abstrato. 

    Js não implementa classes abstratas nativamente, mas é possível simular esse recurso
    de forma programada. 

    OBS: TypeScript é uma linguagem/super-conjunto do Js que inclui mais recursos nativos de orientação a objetos
    como classes abstratas e tipagem estática.
*/

// classe abstrata
class Animal{ 
    constructor(nome, idade, peso){
        const classe = this.constructor.name; // nome da classe

        if(classe === "Animal"){ // lança erro  se a classe instanciada for Animal 
            throw new Error(`Erro: A classe Animal é abstrata e não pode ser instanciada.`);
        }
        else if(this.vocalizar === undefined){ // lança erro se a classe não implementou o método vocalizar 
            throw new Error(`Erro: A classe ${classe} não implementou o método vocalizar().`);
        }
        else if(this.locomover === undefined){ // lança erro se a classe não implementou o método locomover 
            throw new Error(`Erro: A classe ${classe} não implementou o método locomover().`);
        }
        else{ // se não, instancia a classe normalmente
            this.nome = nome;
            this.idade = idade;
            this.tipo = this.getTipo();
            this.peso = peso;
        }
    }
    info(){
        console.log(`Nome...: ${this.nome}`);
        console.log(`Idade..: ${this.idade}`);
        console.log(`Tipo...: ${this.tipo}`);
        console.log(`Peso...: ${this.peso} kg`);
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getIdade(){
        return this.idade;
    }
    setIdade(idade){
        this.idade = idade;
    }
    getPeso(){
        return this.peso;
    }
    setPeso(peso){
        this.peso = peso;
    }
    getTipo(){
        return this.constructor.name; // nome da classe
    }
}

// classes concretas
class Cachorro extends Animal{
    constructor(nome, idade, peso){
        super(nome, idade, peso);
    }
    vocalizar(){
        console.log(`${this.nome} fez: "Au au au".`);
    }
    locomover(){
        console.log(`${this.nome} está correndo como um cachorro.`);
    }
}

class Gato extends Animal{
    constructor(nome, idade, peso){
        super(nome, idade, peso);
    }
    vocalizar(){
        console.log(`${this.nome} fez: "Miau miau".`);
    }
    locomover(){
        console.log(`${this.nome} está correndo como um gato.`);
    }
}

class Papagaio extends Animal{
    constructor(nome, idade, peso){
        super(nome, idade, peso);
    }
    vocalizar(){
        console.log(`${this.nome} fez: "Olá".`);
    }
}

const c1 = new Cachorro("Rex", 2, 20);
const c2 = new Cachorro("Trovão", 5, 10);
const g1 = new Gato("Januário", 1, 3);
const g2 = new Gato("Garfield", 3, 5);

try{
    const p1 = new Papagaio("Chico", 20, 3); // Não é possível instanciar pois não tem o método locomover implementado
}
catch(erro){
    console.log(erro.message); // Erro: A classe Papagaio não implementou o método locomover().
}

try{
    const a1 = new Animal("Nome", 0, 0);
}
catch(erro){
    console.log(erro.message); // Erro: A classe Animal é abstrata e não pode ser instanciada.
}
console.log();

const animais = [c1, c2, g1, g2];

animais.forEach(a =>{
    a.info(); 
    console.log();
});

animais.forEach(a => a.vocalizar());
console.log();
animais.forEach(a => a.locomover());
  
