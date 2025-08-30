import {Carro, Militar, Formula1} from "./classes-carro.js"; // ./ indica que o arquivo js está no mesmo diretório

const btnRegistrar = document.querySelector(".btn-registrar");
const entradaNome = document.querySelector("#nome");
const entradaPortas = document.querySelector("#portas");
const entradaCor = document.querySelector("#cor");
const entradaBlindagem = document.querySelector("#blindagem");
const entradaMunicao = document.querySelector("#municao");
const radios = document.querySelectorAll("input[type='radio']");
const caixaCarros = document.querySelector(".lista-carros");
let vetorCarros = [];

console.log(entradaCor.options[entradaCor.selectedIndex].dataset);

radios.forEach(r =>{
    if(r.value === "militar"){
        r.addEventListener("click", ()=>{
            entradaPortas.value = 0;
            entradaPortas.disabled = false;
            entradaBlindagem.disabled = false; // disabled impede de inserir dados no input
            entradaMunicao.disabled = false;
            entradaCor.value = "Camuflado";
        });
    }
    else{
        r.addEventListener("click", ()=>{
            entradaPortas.value = 0;
            entradaPortas.disabled = false;
            entradaBlindagem.disabled = true;
            entradaMunicao.disabled = true;         
            entradaCor.value = "Branco";
        });
    }

    if(r.value === "formula1"){
        r.addEventListener("click", ()=>{
            entradaPortas.value = 2;
            entradaPortas.disabled = true;
        })
    }
});

function renderizarCarros(){
    caixaCarros.innerHTML = "<h1>Lista de carros</h1>";
    vetorCarros.forEach((c, i)=>{
        criarDivCarro(c, i);
    });
}

function criarDivCarro(carro, indiceVetor){
    const div = document.createElement("div");
    const pPosicaoLista = document.createElement("h3");
    const pNome = document.createElement("p");
    const pPortas = document.createElement("p");
    const pVelocidadeMax = document.createElement("p");
    const pCor = document.createElement("p");
    const pTipo = document.createElement("p");
    const btnRemover = document.createElement("button");

    div.setAttribute("class", "carro");
    pPosicaoLista.innerHTML = `Carro nº ${indiceVetor + 1}`
    pNome.innerHTML = `<strong>Nome:</strong> ${carro.getNome()}`;
    pPortas.innerHTML = `<strong>Portas:</strong> ${carro.getPortas()}`;
    pVelocidadeMax.innerHTML = `<strong>Velocidade Máxima:</strong> ${carro.getVelocidadeMax()} Km/h`;
    pCor.innerHTML = `<strong>Cor:</strong> ${carro.getCor()}`;

    let tipo = carro.getTipo(); //nome da classe
    if(tipo === "Carro"){
        tipo = "Normal";
    }
    pTipo.innerHTML = `<strong>Tipo:</strong> ${tipo}`;
    
    const optionCor = Array.from(entradaCor.options).find(opt => opt.value.toLowerCase() === carro.getCor().toLowerCase()); //retorna o option que tiver o valor igual a cor do objeto carro
    const nomeCor = optionCor.value.toLowerCase(); // nome da cor
    const codigoCor = optionCor.dataset.codigoCor; // codigo da cor

    if(carro.getCor().toLowerCase() === nomeCor){
        const corTipo = optionCor.dataset.corTipo;
        if(corTipo === "homogenea"){
            div.style.backgroundColor = codigoCor;
        }
        else if(corTipo === "gradiente"){
            div.style.backgroundImage = codigoCor;
        }
    }

    btnRemover.innerHTML = "Remover";
    btnRemover.classList.add("btn", "btn-remover");
    btnRemover.addEventListener("click", ()=>{
        vetorCarros = vetorCarros.filter(e => e.getNome() !== carro.getNome()); // retorna um novo array sem o elemento removido
        console.log(vetorCarros);
        renderizarCarros();
    });

    div.appendChild(pPosicaoLista);
    div.appendChild(pNome);
    div.appendChild(pTipo);
    div.appendChild(pPortas);
    div.appendChild(pVelocidadeMax);
    div.appendChild(pCor);

    if(carro instanceof Militar){
        const pBlindagem = document.createElement("p");
        const pMunicao = document.createElement("p");
        pMunicao.innerHTML = `<strong>Municao:</strong> ${carro.getMunicao()}`;
        pBlindagem.innerHTML = `<strong>Blindagem:</strong> ${carro.getBlindagem()}`;

        div.appendChild(pBlindagem);
        div.appendChild(pMunicao);
    }
    div.appendChild(btnRemover);
    caixaCarros.appendChild(div);
}

function resetarEntradas(){
    const radioSelecionado = document.querySelector("input[type='radio']:checked");
    entradaNome.value = "";
    entradaPortas.value = 0;
    entradaMunicao.value = 0;
    entradaBlindagem.value = 0;
    if(radioSelecionado.value === "militar"){
        entradaCor.value = "Camuflado";
    }
    else{
       entradaCor.value = "Branco"; 
    }
}

function registrarCarro(){
    const radioSelecionado = document.querySelector("input[type='radio']:checked");
    const nome = entradaNome.value;
    const portas = Number(entradaPortas.value);
    const cor = entradaCor.value;
    const tipoSelecionado = radioSelecionado.value;
    let carro;

    switch(radioSelecionado.value){
        case "normal": 
            carro = new Carro(nome, portas, cor, 90);
            carro.setTipo("normal");
            break;

        case "militar":
            const blindagem = entradaBlindagem.value;
            const municao = entradaMunicao.value;
            carro = new Militar(nome, portas, cor, blindagem, municao);
            break;

        case "formula1": carro = new Formula1(nome, cor);
            break;
    }

    if(nome === "" || portas === 0){
        alert("Preencha todos os campos.");
    }
    else{
        const carroJaExiste = vetorCarros.some(c =>
                c.getNome() === nome
                && c.getCor() === cor 
                && c.getPortas() === portas 
                && c.getTipo().toLowerCase() === tipoSelecionado.toLowerCase()
        );
        const nomeJaExiste = vetorCarros.some(c => c.getNome() === nome);

        if(carroJaExiste){
            alert("Este carro já está na lista.");
        }
        else if(nomeJaExiste){
            alert("Um carro já foi registrado com este nome.");
        }
        else{
            vetorCarros.push(carro);
            console.log(vetorCarros);
            renderizarCarros();
            resetarEntradas();
        }
    }
}

btnRegistrar.addEventListener("click", registrarCarro);

