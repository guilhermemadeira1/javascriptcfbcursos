/*
    Membros estáticos são métodos ou atributos próprios da classe e não de
    de suas instâncias. Todas as instâncias terão o mesmo valor da propriedade estática.
    
    É definido pela palavra static antes da declaração do método ou atributo.

    static atributoEstatico; static metodoEstatico(){}

    OBS: O atributo estático não é incializado no construtor, pois o construtor
    inicializa os atributos da instância. 

    Se uma instância tentar chamar um método estático, será lançado um erro de referência.
    Um método estático é chamado a partir da referência da classe.

    Um atributo estático pode ser acessado pela referência da classe ou com this 
    (com this só se for acessado dentro da classe). 
    O this referencia a classe se for acessado dentro dela, mas passa a se referir
    à instância quando é acessado pelo objeto.

    É recomendado usar sempre a referência da classe para acessar membros estáticos para evitar erros: 
    
    Classe.atributoEstatico; Classe.metodoEstatico()

*/
class Sensor{
    static ativado = false; // atributo da classe com valor compartilhado por todas as instâncias
    
    constructor(id, capacidade){
        this.id = id;
        this.capacidade = capacidade;
    }

    static ativarTodos(){
        Sensor.ativado = true; // atualiza o atributo da classe
    }

    static desativarTodos(){
        Sensor.ativado = false; // atualiza o atributo da classe
    }

    info(){
        console.log(`Sensor ID: #${this.id}\nCapacidade: ${this.capacidade}\nAtivado: ${Sensor.ativado? "Sim": "Não"}`);
        console.log("------------------------");
    }

    executarTarefa(){
        if(Sensor.ativado){ // a instância avalia o atributo estático antes de executar
            console.log(`Sensor #${this.id} executando tarefa.`);
        }
        else{
            console.log(`Sensor #${this.id} não pôde executar a tarefa pois está desativado.`);
        }
    }
}

const sensor1 = new Sensor(2134, 100);
const sensor2 = new Sensor(3241, 50);
const sensor3 = new Sensor(3124, 80);

console.log("Sensores desativados.\n");
sensor1.info();
sensor2.info();
sensor3.info();

sensor1.executarTarefa(); // não executa pois está desativado
sensor2.executarTarefa(); // não executa pois está desativado
sensor3.executarTarefa(); // não executa pois está desativado
console.log();

Sensor.ativarTodos(); // altera o estado de todos os sensores

console.log("Sensores ativados.\n");
sensor1.info();
sensor2.info();
sensor3.info();

sensor1.executarTarefa(); // executa pois está ativado
sensor2.executarTarefa(); // executa pois está ativado
sensor3.executarTarefa(); // executa pois está ativado


