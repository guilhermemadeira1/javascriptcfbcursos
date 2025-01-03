/*
Método stopPropagation 

Quando um evento é disparado sobre um elemento contêiner, o evento também é propagado para outros elementos na árvore DOM. O método *stopPropagation()* pertencente ao objeto do evento atual, permite interromper a propagação do evento sempre que este for disparado por um elemento.

Ex: 
*/
const lista = document.querySelector("ul#lista");

let itensLista = [...document.querySelectorAll("li")];

lista.addEventListener("click", (evt)=>{
    console.log('O contêiner "lista" foi clicado');
});

itensLista.map((item)=>{
   item.addEventListener("click",(evt)=>{
    evt.stopPropagation();
   });
});
/*
_-> A propagação do evento "click" será interrompida pelos itens do contêiner lista sempre que o evento for disparado pelos itens._
*/