export class Carro{
    constructor(nome, portas, cor, velocidadeMaxima){
        this.nome = nome;
        this.portas = portas;
        this.velocidade = 0;
        this.velocidadeMax = velocidadeMaxima;
        this.cor = cor;
        this.ligado = false;
        this.tipo = this.constructor.name; // nome da classe
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getPortas(){
        return this.portas;
    }
    setPortas(portas){
        this.portas = portas;
    }
    getVelocidade(){
        return this.velocidade;
    }
    setVelocidade(velocidade){
        this.velocidade = velocidade;
    }
    getVelocidadeMax(){
        return this.velocidadeMax;
    }
    setVelocidadeMax(velocidadeMax){
        this.velocidadeMax = velocidadeMax;
    }
    getCor(){
        return this.cor;
    }
    setCor(cor){
        this.cor = cor;
    }
    getTipo(){
        return this.tipo;
    }
    setTipo(tipo){
        this.tipo = tipo;
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
            if(velocidade <= this.velocidadeMax){
                this.velocidade += velocidade;
                console.log(`${this.nome} andando a ${this.velocidade} Km/h.`)
            }
            else{
                console.log(`Ultrapassou a vel. máxima de ${this.velocidadeMax} Km/h.`)
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
            "Velocidade máxima: " + this.velocidadeMax + " Km/h"
        ;
    }
}

export class Formula1 extends Carro{
    constructor(nome, cor){
        super(nome, 2, cor, 330);
    }
}

export class Militar extends Carro{
    constructor(nome, portas, cor, blindagem, municao){
        super(nome, portas, cor, 190);
        this.blindagem = blindagem;
        this.municao = municao;
    }
    getBlindagem(){
        return this.blindagem;
    }
    setBlindagem(blindagem){
        this.blindagem = blindagem;
    }
    getMunicao(){
        return this.municao;
    }
    setMunicao(municao){
        this.municao = municao;
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