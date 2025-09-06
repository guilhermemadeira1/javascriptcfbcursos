/*
Herança é o mecanismo da programação orientada a objetos que permite que uma classe herde métodos e atributos de outra classe. Ela permite reutilização de código e a criação de famílias de objetos relacionados.

A herança é aplicada pela classe derivada (subclasse) usando a palavra extends.

O método super() permite que a classe derivada acesse o construtor da classe pai. 
A propriedade super permite acessar metodos e atributos da classe pai.

super() -> acessa o construtor da superclasse (classe base). OBS: o metodo super() deve ser chamado antes de acessar a propriedade this se não dá erro de referência

super.metodo() -> acessa o método da superclasse quando a subclasse modificar esse método.

*/

class Carro{
    constructor(nome, portas, velocidadeMaxima){
        this.nome = nome;
        this.portas = portas;
        this.velocidade = 0;
        this.velocidadeMaxima = velocidadeMaxima;
        this.cor = "branco";
        this.ligado = false;
    }
    setCor(cor){
        this.cor = cor;
    }
    getVel(){
        return this.velocidade;
    }
    getVelMax(){
        return this.velocidadeMaxima;
    }
    ligar(){
        this.ligado = true;
        console.log(`${this.nome} foi ligado!`);
    }
    desligar(){
        this.frear();
        this.ligado = false;
        console.log(`${this.nome} foi desligado!`);
    }
    acelerar(velocidade){
        if(this.ligado === true){
            if(velocidade <= this.velocidadeMaxima){
                this.velocidade += velocidade;
                console.log(`${this.nome} andando a ${this.velocidade} Km/h.`)
            }
            else{
                console.log(`Ultrapassou a vel. máxima de ${this.velocidadeMaxima} Km/h.`)
            }
        }
        else{
            console.log("Ligue o carro para andar.");
        }
       
    }
    frear(){
        this.velocidade = 0;
        console.log(`${this.nome} parou de correr.`)
    } 
    getInfo(){
        return "Nome: " + this.nome + "\n" +
            "Nº portas: " + this.portas + "\n" +
            "Cor: " + this.cor + "\n" +
            "Ligado: " + (this.ligado ? "Sim":"Não") + "\n" +
            "Velocidade atual: " + this.velocidade + " Km/h\n" +
            "Velocidade máxima: " + this.velocidadeMaxima + " Km/h"
        ;
    }
}

class Formula1 extends Carro{
    constructor(nome){
        super(nome, 2, 330)
        this.velocidadeMaxima = 330;
    }
    setVelMax(velMax){
        this.velocidadeMaxima = velMax;
    }
}

class Militar extends Carro{
    constructor(nome, portas, municao){
        super(nome, portas, 100);
        this.blindagem = 100;
        this.municao = municao;
        this.setCor("camuflado");
    }
    setBlindagem(blindagem){
        this.blindagem = blindagem;
    }
    atirar(vezes){
        if(this.municao >= vezes){
            this.municao -= vezes;
            console.log(`${this.nome} atirou ${vezes} vezes. [Munição restante: ${this.municao}]`);
        }
        else{
            console.log(`Não há munição suficiente para atirar. [Munição restante: ${this.municao}]`);
        }
    }
    getInfo(){
        return super.getInfo() + "\nBlindagem: " + this.blindagem + "\n" +
        "Munição: " + this.municao;
    }
}

const c1 = new Carro("Carro comum", 4, 90);
const c2 = new Formula1("Formula1 veloz");
const c3 = new Formula1("Formula1 ultra veloz");
const c4 = new Militar("Tanque do terror", 5, 500);

c3.setCor("vermelho");
c3.setVelMax(c3.getVelMax() + 70);

const carros = [c1,c2,c3,c4];

carros.forEach(c =>{
    console.log(c.getInfo());
    console.log("---------------------------");
});

console.log();

carros.forEach(c =>{
    c.ligar();
    c.acelerar(100);
    c.desligar();
    if(c instanceof Militar){
        c.atirar(10);
    }
    console.log("---------------------------");
});