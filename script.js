// Seleção dos elementos da página
const btnMudarFoco = document.getElementById('btn-mudar-foco');
const btnPlantar = document.getElementById('btn-plantar');
const contadorArvores = document.getElementById('contador-arvores');

const tituloPrincipal = document.getElementById('titulo-principal');
const textoSecao = document.getElementById('texto-secao');
const tituloSecao = document.getElementById('titulo-secao');

let qtdArvores = 0;
let estadoSustentavel = false;

// Função do botão de plantar árvore (Contador em tempo real)
btnPlantar.addEventListener('click', () => {
    qtdArvores++;
    contadorArvores.innerText = qtdArvores;
    
    contadorArvores.style.transform = "scale(1.2)";
    setTimeout(() => {
        contadorArvores.style.transform = "scale(1)";
    }, 100);
});

// Função para mudar o foco do site em tempo real
btnMudarFoco.addEventListener('click', () => {
    document.body.classList.toggle('foco-preservacao');
    estadoSustentavel = !estadoSustentavel;

    if(estadoSustentavel) {
        tituloPrincipal.innerText = "Meio Ambiente Protegido";
        tituloSecao.innerText = "Foco: Preservação Ambiental";
        textoSecao.innerText = "Cuidar das florestas, adotar o plantio direto e recuperar nascentes garante que o ecossistema continue forte para sustentar a vida e o agronegócio.";
        btnMudarFoco.innerText = "Mudar para Foco: Produção";
        btnMudarFoco.style.backgroundColor = "#287a70";
    } else {
        tituloPrincipal.innerText = "Agro Forte, Futuro Sustentável";
        tituloSecao.innerText = "Tecnologia e Produção";
        textoSecao.innerText = "A tecnologia atual no campo permite produzir mais alimentos utilizando menos recursos naturais, protegendo o solo e a água para as próximas gerações.";
        btnMudarFoco.innerText = "Mudar Foco da Página";
        btnMudarFoco.style.backgroundColor = "#2c6b46";
    }
});
