/*
    <elemento>.classList.toggle("<classe>"); -> adiciona uma classe a um elemento se ele não existir e remove se ele existir.

    <elemento>.classList.remove("<classe>"); -> remove uma determinada classe de um elemento.
*/
const elemento = document.querySelector("div");
elemento.setAttribute("class", "minha-classe"); //adiciona a classe
elemento.classList.toggle(".minha-classe"); //remove a classe
elemento.classList.toggle(".minha-classe"); //adiciona a classe
elemento.classList.remove(".minha-classe"); //remove a classe
elemento.classList.toggle(".minha-classe"); //adiciona a classe