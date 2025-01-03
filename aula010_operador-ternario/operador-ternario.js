/*
Operador ternário 

condição? bloco true : bloco false

Cada bloco do operdor ternário pode retornar um valor ou executar uma função.

isNaN(valor) -> verifica se um valor é NaN (Not a Number), já que não é possível realizar operações de comparação (==, ===, !=, !==) com NaN.

NaN é um valor retornado quando uma operação matemática não pode ser resolvida e quando uma string não numérica ("abc...") é convertida em número ou inserida numa operação matemática.

*/

//programa com operador ternario

let perg = prompt("Você tem trabalhado nos últimos 5 dias úteis? \n").toUpperCase();

perg == "SIM" || perg == "COM CERTEZA" ? 
console.log("Continue assim!") : 
perg != "SIM" && perg !="NAO" && perg != "NÃO" ? console.log("resposta inválida") : console.log("Então se esforce um pouco mais");

let estado = perg == "SIM" || perg == "COM CERTEZA" ? true : false;

console.log(
    "Seu estado trabalhista atual: "+(estado ? "Ativo" : "Inativo")
    );

//programa sem operador ternario

let resp = Number(prompt("Digite sua idade, ou o ano de seu nascimento:\n"));
let idade;
let anoAtual = 2024;

if(resp<0 || isNaN(resp) || String(resp).length>4 || resp>anoAtual)
{
   console.log("Valor inválido.");
}
else{
   if(String(resp).length<=3){//idade pode ter até 3 dígitos
    idade = resp;
   }
   else{//se tiver mais que 3 dígitos, é um ano
    idade = anoAtual-resp;
   }
   let mensagem = 
      (
       String(resp).length<=3? 
        `Com ${idade} anos, você é `: `Nascido em ${anoAtual-idade}, você é `
      )+
      (
       idade>18? "de maior "+complemento(idade) : "de menor "+complemento(idade)
     );
     
   console.log(mensagem);

   function complemento(age){
      if(age <=12){
          return "e uma criança.";
      }
      else if(age<=20){
          return "e um jovem."
      }
      else if(age<=50){
          return "e um adulto.";
       }
      else{
          return "e um idoso.";
      }
   }
}