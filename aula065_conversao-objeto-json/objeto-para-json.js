/*
    JSON (acrônimo para Javascript Object Notation) é uma formato leve de representação
    de dados em texto, inspirado na sintaxe dos objetos literais do Js.
    Tem a mesma utilidade do XML, mas com uma sintaxe mais limpa e legível. 
    É usado principalmente para transmitir dados entre sistemas ou para persistência
    de dados em bancos NoSQL.

    A extensão do arquivo JSON é .json.

    JSON é o formato usado por APIS Rest para trocar dados através da internet.

    Uma string JSON pode representar uma estrutura do tipo array 
    ou objeto com pares chave e valor (as chaves são envolvidas por "" aspas duplas). 
    
    Os tipos de dados suportados são:

        strings (com aspas duplas), 
        números inteiros ou de ponto flutuante (123, 12.3),
        booleanos (true ou false),
        null, 
        arrays ([]),
        objetos ({}).

    JSON não suporta datas, funções ou valor undefined.

    Lidando com dados JSON em Js 
    
        Com o objeto JSON:

            JSON.stringify(obj | arr)  -> converte um objeto ou array em string json.
            JSON.parse(str)     -> converte uma string json em objeto ou array do js.

        Com a Api fetch:

            fetch(enderecoDadosJson)
                .then(res => res.json())             -> json() retorna uma Promise resolvida com a 
                .then(data => console.log(data))       string json convertida em vetor ou objeto js.

*/

let numeros = [12, 34, 124, 321.1, 43.622];
let usuario1 = {nome: "Marta", idade: 33, peso: 70.5, sexo: 'f'};
let usuarios = [
    usuario1,
    {nome: "Pedro", idade: 30, peso: 89.2, sexo: 'm'},
    {nome: "Paula", idade: 45, peso: 76.0, sexo: 'f'},
    {nome: "José", idade: 23, peso: 66.9, sexo: 'm'}
];

console.log("Dados: ");
console.log(numeros);
console.log(usuario1);
console.log(usuarios);
console.log();

let numerosJson = JSON.stringify(numeros);
let usuario1Json = JSON.stringify(usuario1);
let usariosJson = JSON.stringify(usuarios);

console.log("Dados convertidos em JSON: ");
console.log(numerosJson);
console.log(usuario1Json);
console.log(usariosJson);
console.log();

numeros = '[12, 34, 124, 321.1, 43.622]'; // não usar aspas duplas para evolver a string json pq as strings internas já usam.
usuario1 = `{"nome": "Marta", "idade": 33, "peso": 70.5, "sexo": "f"}`;
usuarios = `[
    {"nome": "Marta", "idade": 33, "peso": 70.5, "sexo": "f"},
    {"nome": "Pedro", "idade": 30, "peso": 89.2, "sexo": "m"},
    {"nome": "Paula", "idade": 45, "peso": 76.0, "sexo": "f"},
    {"nome": "José", "idade": 23, "peso": 66.9, "sexo": "m"}
]`;

numeros = JSON.parse(numeros);
usuario1 = JSON.parse(usuario1);
usuarios = JSON.parse(usuarios);

console.log("Dados convertidos a partir do JSON: ");
console.log(numeros);
console.log(usuario1);
console.log(usuarios);