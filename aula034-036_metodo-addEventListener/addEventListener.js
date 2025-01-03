/*
Método DOM eventListener 

*elemento.eventListener("evento", funcao)*;  -> chama uma função em decorrência a um evento do navegador. A função chamada pelo método recebe como parâmetro um objeto PointerEvent (mesmo que não tenha sido definido explícitamente) que representa as propriedades do evento atual.

Para obter o elemento atual em que ocorreu um evento, usa-se a propriedade "target" (alvo) do objeto evento (PointerEvent).

Ex: 
*/
const vetorDivs = [...document.querySelectorAll("div")];

vetorDivs.map(div, (event)=>{
    div.addEventListener("click",()=>{
       const eventDiv = event.target;
       console.log(`O elemento ${eventDiv} foi clicado! `);
    });
});