// botões 
const btnSelecionar = document.querySelector("#btn-selecionar");
const btnRemover = document.querySelector("#btn-remover");
const btnInserir =  document.querySelector("#btn-inserir");
const btnInserirAntes = document.querySelector("#btn-inserir-antes");
const btnInserirDepois= document.querySelector("#btn-inserir-depois");
const btnBusca = document.querySelector("#btn-busca");

// conteiner de cursos
const conteinerCursos = document.querySelector(".conteiner-cursos");

// array de cursos
const cursos = ["Javascript","PHP", "Java", "MySQL", "React"];

// entradas
const inputBusca = document.querySelector("#input-busca");
const inputNomeCurso = document.querySelector("#input-nome");

// cria e retorna caixa do curso
const criarCurso = (nome) =>{
    const divCurso = document.createElement("div");
    divCurso.setAttribute("class", "curso");
    divCurso.innerText = nome;

    divCurso.addEventListener("click", (evt)=>{
        const todosSelecionados = [...document.querySelectorAll(".curso-selecionado")];
        todosSelecionados.map((selecionado)=>{
            //remove a classe selecionado dos outros cursos antes de usar o toggle para evitar que mais de um seja selecionado
            selecionado.classList.remove("curso-selecionado");
        });
        evt.target.classList.toggle("curso-selecionado");
        inputBusca.value = divCurso.innerText;
    });
    return divCurso;
}

// cria caixa para cada curso do array
cursos.forEach((curso)=>{
    conteinerCursos.appendChild(criarCurso(curso));
});

// retorna curso com a classe "curso-selecionado"
const obterCursoSelecionado = ()=>{
    return [...document.querySelectorAll(".curso-selecionado")][0];

};

// lógica do botão busca
btnBusca.addEventListener("click",(evt)=>{
    const busca = inputBusca.value;
    const resultado = cursos.find((valor) => valor.toUpperCase() == busca.toUpperCase());
    if(inputBusca.value === ""){
        window.alert("Digite no campo de busca.")
    }
    else if(resultado){
        document.querySelector("#resultado-busca").innerHTML = resultado + ' está na lista' ;
    }
    else{
        document.querySelector("#resultado-busca").innerHTML = 'Curso não encontrado';
    }
});

// lógica do botão selecionar
btnSelecionar.addEventListener("click", (evt)=>{
    const selecionado = obterCursoSelecionado(); 
    if(selecionado){
        const cursoTxt = selecionado.firstChild.textContent;// o texto é um DOM node do tipo objectText, usa-se a propriedade textContent pra obter sua string.
        window.alert('Curso selecionado: ' + cursoTxt);
    }
    else{
        window.alert('Nenhum curso foi selecionado.');
    }
});

// lógica do botão remover
btnRemover.addEventListener("click", (evt)=>{
    const cursoSelecionado = obterCursoSelecionado();
    if(cursoSelecionado){
        cursoSelecionado.remove();
        console.log(cursos);
    }
    else{
        window.alert('Selecione um curso para remover.');
    }
});

// lógica do botão inserir
btnInserir.addEventListener("click", (evt)=>{
    const nomeNovoCurso = inputNomeCurso.value;
    if(nomeNovoCurso){
        if(!cursos.includes(nomeNovoCurso)){
            conteinerCursos.appendChild(criarCurso(nomeNovoCurso));
            cursos.push(nomeNovoCurso);
            console.log(cursos);
        }
        else{
            window.alert("O curso já existe na lista.");
        }
    }
    else{
        window.alert("Insira o nome do curso.");
    }
});

// lógica do botão inserir antes
btnInserirAntes.addEventListener("click", (evt)=>{
    try{
        const cursoRef = obterCursoSelecionado(); //curso referencia para inserir antes
        const nomeNovoCurso = inputNomeCurso.value;
        if(nomeNovoCurso){
            if(!cursos.includes(nomeNovoCurso)){
                conteinerCursos.insertBefore(criarCurso(nomeNovoCurso), cursoRef);
                cursos.push(nomeNovoCurso);
                console.log(cursos);
            }
            else{
                window.alert("O curso já existe na lista.");
            }
        }
        else{
            window.alert("Insira o nome do curso.");
        }
    }
    catch(e){
        window.alert("Erro. "+e);
    }
});

// lógica do botão inserir depois
btnInserirDepois.addEventListener("click", (evt)=>{
    try{
        const cursoRefProx = obterCursoSelecionado().nextSibling; // o próximo depois do curso selecionado
        const nomeNovoCurso = inputNomeCurso.value;
        if(nomeNovoCurso){
            if(!cursos.includes(nomeNovoCurso)){
                conteinerCursos.insertBefore(createCurso(nomeCurso), cursoRefProx);
                cursos.push(nomeNovoCurso);
                console.log(cursos);
            }
            else{
                window.alert("O curso já existe na lista.");
            }
        }
        else{
            window.alert("Digite o nome do curso.");
        }
    }
    catch(e){
        window.alert("Erro. " + e);
    }
});