/*
Em JS, funções podem ser utilizadas como classes e podemos criar objetos 
e acessar seus atributos e métodos pelo operador this.

O operador this referencia o objeto atual que executa a função ou acessa uma propriedade.

setTimeout(função, tempo-de-espera); -> executa um bloco de código após um tempo determinado em milisegundos, onde 1000 = 1 segundo.

Arrow functions não possuem atributos, portando não podem ser utilizados como classes.
Quando uma arrow function acessa uma propriedade, o this referencia a função pai que não seja uma arrow function.
*/


function aluno(nome,nota){
  this.nome = nome;
  this.nota = nota;
  this.dados = function (){
    let time = 1000;
    for(let i=0; i<3; i++){
        setTimeout(
            ()=>console.log((i+1)),
            time += 800
        );
    }
    setTimeout(()=>{
        console.log('Aluno: '+this.nome);
        console.log('Nota: '+this.nota);
    },time+800);
  }
}
const aluno1 = new aluno('João Paulo',1.3);
aluno1.dados(); //espera 3 segundos contando até 3 e exibe "Aluno: João Paulo" e "Nota: 1.3"

//console.log(aluno1.nome); //-> João Paulo
//console.log(aluno1.nota); //-> 1.3
