/*
   <elemento>.remove() -> remove um elemento do DOM.Não retorna o elemento removido.

   <parent>.removeChild(<child>) -> remove um elemento filho específico de um elemento. Retorna o elemento removido.
*/
const filho = document.getElementById("elemento").removeChild(document.getElementById("filho"));

document.getElementById("elemento").remove();
