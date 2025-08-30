/*
template string é uma técnica da linguagem usada para interpolar valores de variáveis ou retorno de outras operações dentro de strings sem operador de concatenação. 
Uma template string é definida entre crases e os valores são passados dentro de um placeholder ${x}.
*/

const nome = 'João';
const idade = 30;
const peso = 78.6;

// interpolando com operador de concatenação
const string1 = nome + ' tem ' + idade + ' anos' + ' e pesa ' + peso + 'kg.';

// interpolando com template string
const string2 = `${nome} tem ${idade} anos e pesa ${peso}kg.`;

console.log(string1); // João tem 30 anos e pesa 78.6kg
console.log(string2); // João tem 30 anos e pesa 78.6kg

// Template string deixa a sintaxe da string com valores dinâmicos mais limpa e legível.

// OBS: caracteres de formatação como \n e \t só funcionam no console.