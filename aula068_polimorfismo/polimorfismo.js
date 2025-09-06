/*
    Polimorfismo é o conceito da programação orientada a objetos que permite que um 
    mesmo método se comporte de forma diferente em circunstâncias específicas.

    O polimorfismo é aplicado por:

    Sobrescrita (Override)-> subclasses sobrescrevem a implementação de um método
    da superclasse de forma isolada. O comportamento do método herdado será diferente 
    para cada subclasse.

    Sobreposição/sobrecarga (Overload) -> uma classe define métodos com mesmo nome mas assinaturas diferentes. 
    Ou seja, o método pode se comportar de forma diferente dependendo do tipo ou da
    quantidade de parâmetros que possui.

    OBS: Js não suporta sobreposição pois os métodos são tratados como propriedades únicas
    da classe. Se a classe tiver dois métodos com mesmo nome (com ou sem a mesma assinatura), 
    a última declaração será a única válida.

    TypeScript suporta sobrecarga de métodos.

*/

class MeioTransporte{
    constructor(nome, velMax, portas){
        this.nome = nome;
        this.velMax = velMax;
        this.portas = portas;
        this.tipo = "Transporte ";
    }
    locomover(){
        console.log(`${this.nome} está se locomovendo.`);
    }
    info(){
        console.log(`Nome.............: ${this.nome}`);
        console.log(`Velocidade Máxima: ${this.velMax} km/h`);
        console.log(`Portas...........: ${this.portas}`);
        console.log(`Tipo.............: ${this.tipo}`);
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getVelMax(){
        return this.velMax;
    }
    setVelMax(velMax){
        this.velMax = velMax;
    }
    getPortas(){
        return this.portas;
    }
    setPortas(portas){
        this.portas = portas;
    }
    getTipo(){
        return this.tipo;
    }
}

class Carro extends MeioTransporte{
    constructor(nome, velMax, portas, rodas){
        super(nome, velMax, portas); // o metodo super deve ser chamado antes de acessar a propriedade this se não da erro de referência
        this.rodas = rodas;
        this.tipo += "Terrestre";
    }
    //sobrescreve o método locomover da classe MeioTransporte
    locomover(){
        console.log(`${this.nome} está andando.`);
    }
    //sobrescreve o método info da classe MeioTransporte
    info(){
        super.info();
        console.log(`Portas...........: ${this.portas}`);
    }

    getRodas(){
        return this.rodas;
    }
    setRodas(rodas){
        this.rodas = rodas;
    }
}

class Aviao extends MeioTransporte{
    constructor(nome, velMax, portas, turbinas, asas){
        super(nome, velMax, portas);
        this.turbinas = turbinas;
        this.asas = asas;
        this.tipo += "Aéreo";
    }
    //sobrescreve o método locomover da classe MeioTransporte
    locomover(){
        console.log(`${this.nome} está voando.`);
    }
    //sobrescreve o método info da classe MeioTransporte
    info(){
        super.info();
        console.log(`Asas.............: ${this.asas}`);
        console.log(`Turbinas.........: ${this.turbinas}`);
    }
    getTurbinas(){
        return this.turbinas;
    }
    setTurbinas(turbinas){
        this.turbinas = turbinas;
    }
    getAsas(){
        return this.asas;
    }
    setAsas(asas){
        this.asas = asas;
    }
}

const c1 = new Carro("Carro básico", 90, 2, 4);
const c2 = new Carro("Carro de transporte coletivo", 120, 4, 4);
const a1 = new Aviao("Avião Particular", 1130, 3, 2, 2);
const a2 = new Aviao("Avião de viagem internacional", 870, 8, 3, 2);

const transportes = [c1, a1, c2, a2];

transportes.forEach(t =>{
    t.info();
    console.log();
});
transportes.forEach(t => t.locomover());